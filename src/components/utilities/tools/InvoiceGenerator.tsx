import React, { useState, useMemo, useEffect } from "react";
import { Download, Plus, Trash2, Printer, Percent, Palette, Upload, X, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { invoiceTemplates } from "@/lib/invoiceTemplates";
import html2pdf from "html2pdf.js";

interface InvoiceGeneratorProps {
  onCopy?: (text: string) => void;
}

interface LineItem {
  description: string;
  quantity: number;
  unitPrice: number;
}

const STORAGE_KEY = "realm-invoice-history";
const MAX_FILE_SIZE = 200 * 1024; // 200KB

const InvoiceGenerator: React.FC<InvoiceGeneratorProps> = ({ onCopy }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [logoError, setLogoError] = useState<string>("");
  const [showHistory, setShowHistory] = useState(false);
  const [invoiceHistory, setInvoiceHistory] = useState<any[]>([]);
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: `INV-${Date.now()}`,
    date: new Date().toISOString().split("T")[0],
    dueDate: "",
    from: {
      name: "",
      address: "",
      city: "",
      zip: "",
      country: "",
      email: "",
      phone: "",
    },
    to: {
      name: "",
      address: "",
      city: "",
      zip: "",
      country: "",
      email: "",
    },
    items: [
      { description: "", quantity: 1, unitPrice: 0 },
    ] as LineItem[],
    currency: "USD",
    taxRate: 10,
    discount: 0,
    discountType: "percentage" as "percentage" | "fixed",
    paymentMethod: "",
    bankDetails: "",
    notes: "",
    terms: "",
  });

  // Load invoice history and last invoice on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const history = JSON.parse(stored);
        setInvoiceHistory(history);
        if (history.length > 0) {
          const lastInvoice = history[0];
          setInvoiceData(lastInvoice.data);
          setSelectedTemplate(lastInvoice.template);
          setLogoUrl(lastInvoice.logoUrl || "");
        }
      }
    } catch (error) {
      console.error("Error loading invoice history:", error);
    }
  }, []);

  const saveInvoiceToHistory = () => {
    try {
      const invoiceRecord = {
        id: Date.now(),
        data: invoiceData,
        template: selectedTemplate,
        logoUrl: logoUrl,
        createdAt: new Date().toISOString(),
      };
      const updatedHistory = [invoiceRecord, ...invoiceHistory].slice(0, 10);
      setInvoiceHistory(updatedHistory);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
    } catch (error) {
      console.error("Error saving invoice history:", error);
    }
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      setLogoError(`File size must be less than 200KB. Current size: ${(file.size / 1024).toFixed(2)}KB`);
      return;
    }

    if (!file.type.startsWith("image/")) {
      setLogoError("Please upload an image file");
      return;
    }

    setLogoError("");
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setLogoUrl(result);
    };
    reader.onerror = () => {
      setLogoError("Error reading file");
    };
    reader.readAsDataURL(file);
  };

  const removeLogo = () => {
    setLogoUrl("");
    setLogoError("");
  };

  const loadInvoiceFromHistory = (invoice: any) => {
    setInvoiceData(invoice.data);
    setSelectedTemplate(invoice.template);
    setLogoUrl(invoice.logoUrl || "");
    setShowHistory(false);
  };

  const totals = useMemo(() => {
    const subtotal = invoiceData.items.reduce(
      (sum, item) => sum + item.quantity * item.unitPrice,
      0
    );
    const discountAmount =
      invoiceData.discountType === "percentage"
        ? (subtotal * invoiceData.discount) / 100
        : invoiceData.discount;
    const afterDiscount = Math.max(0, subtotal - discountAmount);
    const tax = (afterDiscount * invoiceData.taxRate) / 100;
    const total = afterDiscount + tax;
    return { subtotal, discountAmount, afterDiscount, tax, total };
  }, [invoiceData.items, invoiceData.discount, invoiceData.discountType, invoiceData.taxRate]);

  const formatCurrency = (amount: number) => {
    const symbols: Record<string, string> = {
      USD: "$",
      EUR: "€",
      GBP: "£",
      INR: "₹",
      JPY: "¥",
    };
    return `${symbols[invoiceData.currency] || invoiceData.currency} ${amount.toFixed(2)}`;
  };

  const updateField = (path: string, value: any) => {
    const keys = path.split(".");
    setInvoiceData((prev) => {
      const updated = { ...prev };
      let current: any = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return updated;
    });
  };

  const addItem = () => {
    setInvoiceData((prev) => ({
      ...prev,
      items: [...prev.items, { description: "", quantity: 1, unitPrice: 0 }],
    }));
  };

  const removeItem = (index: number) => {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const updateItem = (index: number, field: keyof LineItem, value: any) => {
    setInvoiceData((prev) => ({
      ...prev,
      items: prev.items.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const generateHTML = () => {
    const symbols: Record<string, string> = {
      USD: "$",
      EUR: "€",
      GBP: "£",
      INR: "₹",
      JPY: "¥",
    };
    const symbol = symbols[invoiceData.currency] || invoiceData.currency;
    const format = (amount: number) => `${symbol} ${amount.toFixed(2)}`;
    
    const template = invoiceTemplates.find(t => t.id === selectedTemplate) || invoiceTemplates[0];
    return template.generateHTML(invoiceData, totals, format, logoUrl);
  };

  const handleDownload = async () => {
    saveInvoiceToHistory();
    
    try {
      // Generate HTML from template
      const html = generateHTML();
      
      // Create a temporary iframe to render the HTML
      const iframe = document.createElement("iframe");
      iframe.style.position = "absolute";
      iframe.style.left = "-9999px";
      iframe.style.width = "210mm";
      iframe.style.height = "297mm";
      document.body.appendChild(iframe);
      
      // Write HTML to iframe
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!iframeDoc) {
        throw new Error("Could not access iframe document");
      }
      
      iframeDoc.open();
      iframeDoc.write(html);
      iframeDoc.close();
      
      // Wait for content to load
      await new Promise((resolve) => {
        if (iframe.contentWindow) {
          iframe.contentWindow.onload = resolve;
          setTimeout(resolve, 500); // Fallback timeout
        } else {
          resolve(null);
        }
      });
      
      // Get the body element from iframe
      const bodyElement = iframeDoc.body;
      if (!bodyElement) {
        throw new Error("Could not access iframe body");
      }
      
      // Configure html2pdf options
      const backgroundColor = selectedTemplate === 4 ? "#1a1a1a" : selectedTemplate === 9 ? "#0a0a0a" : "#ffffff";
      
      // Generate and download PDF
      await html2pdf()
        .set({
          margin: 10,
          filename: `invoice-${invoiceData.invoiceNumber}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { 
            scale: 2,
            useCORS: true,
            logging: false,
            letterRendering: true,
            backgroundColor: backgroundColor,
            windowWidth: 800
          },
          jsPDF: { 
            unit: "mm", 
            format: "a4", 
            orientation: "portrait"
          }
        } as any)
        .from(bodyElement)
        .save();
      
      // Clean up
      document.body.removeChild(iframe);
    } catch (error) {
      console.error("Error generating PDF:", error);
      // Fallback to HTML download if PDF generation fails
      const html = generateHTML();
      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `invoice-${invoiceData.invoiceNumber}.html`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Bar - Template Selector & Actions */}
      <div className="flex items-center justify-between flex-wrap gap-4 p-4 bg-white rounded-lg border border-realm-lightgray">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Logo Upload */}
          <div className="flex items-center gap-2">
            <Label className="text-sm font-medium text-realm-black flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Logo
            </Label>
            {logoUrl ? (
              <div className="relative inline-block">
                <img src={logoUrl} alt="Logo" className="max-h-10 max-w-32 object-contain rounded" />
                <button
                  onClick={removeLogo}
                  className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 hover:bg-red-600"
                  aria-label="Remove logo"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                  id="logo-upload"
                />
                <label
                  htmlFor="logo-upload"
                  className="cursor-pointer text-sm text-realm-gray hover:text-realm-black transition-colors"
                >
                  Upload (Max 200KB)
                </label>
              </>
            )}
            {logoError && (
              <p className="text-xs text-red-600">{logoError}</p>
            )}
          </div>

          {/* Invoice History */}
          <div className="relative flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowHistory(!showHistory)}
              className="text-xs flex items-center gap-2"
            >
              <History className="w-4 h-4" />
              History ({invoiceHistory.length})
            </Button>
            {showHistory && (
              <div className="absolute top-full left-0 mt-2 z-10 bg-white border border-realm-lightgray rounded-lg shadow-lg p-2 max-h-60 overflow-y-auto min-w-48">
                {invoiceHistory.length === 0 ? (
                  <p className="text-sm text-realm-gray p-2">No invoice history</p>
                ) : (
                  invoiceHistory.map((invoice) => (
                    <button
                      key={invoice.id}
                      onClick={() => loadInvoiceFromHistory(invoice)}
                      className="w-full text-left p-2 rounded hover:bg-realm-lightgray transition-colors"
                    >
                      <div className="text-sm font-medium text-realm-black">
                        {invoice.data.invoiceNumber}
                      </div>
                      <div className="text-xs text-realm-gray">
                        {new Date(invoice.createdAt).toLocaleDateString()}
                      </div>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* Template Selector & Currency/Tax Controls */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Label className="text-sm font-medium text-realm-black flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Template:
            </Label>
            <select
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(Number(e.target.value))}
              className="px-4 py-2 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F] bg-white text-realm-black font-medium"
            >
              {invoiceTemplates.map((template) => (
                <option key={template.id} value={template.id}>
                  {template.name}
                </option>
              ))}
            </select>
          </div>
          
          {/* Currency Selector */}
          <div className="flex items-center gap-2">
            <Label className="text-sm font-medium text-realm-black">Currency:</Label>
            <select
              value={invoiceData.currency}
              onChange={(e) => updateField("currency", e.target.value)}
              className="px-3 py-2 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F] bg-white text-realm-black"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="INR">INR (₹)</option>
              <option value="JPY">JPY (¥)</option>
            </select>
          </div>
          
          {/* Tax Rate Control */}
          <div className="flex items-center gap-2">
            <Label className="text-sm font-medium text-realm-black flex items-center gap-1">
              <Percent className="w-4 h-4" />
              Tax:
            </Label>
            <Input
              type="number"
              min="0"
              max="100"
              step="0.1"
              value={invoiceData.taxRate}
              onChange={(e) => updateField("taxRate", Number(e.target.value))}
              className="w-20 px-2 py-1 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F] text-sm"
            />
            <span className="text-sm text-realm-gray">%</span>
          </div>
        </div>
      </div>

      {/* Live Editable Invoice Template */}
      <div className="bg-white rounded-lg border border-realm-lightgray shadow-lg overflow-hidden">
        {(selectedTemplate === 4 || selectedTemplate === 9) && (
          <style>{`
            .invoice-dark-template input::placeholder,
            .invoice-dark-template textarea::placeholder {
              color: #d1d5db !important;
              opacity: 0.9 !important;
            }
          `}</style>
        )}
        <div 
          className={`p-8 md:p-12 ${selectedTemplate === 4 || selectedTemplate === 9 ? "invoice-dark-template" : ""}`}
          style={{ 
            fontFamily: selectedTemplate === 1 ? "'Times New Roman', serif" : 
                       selectedTemplate === 9 ? "'Courier New', monospace" : 
                       selectedTemplate === 10 ? "'Garamond', serif" : 
                       "system-ui, -apple-system, sans-serif",
            backgroundColor: selectedTemplate === 4 ? "#1a1a1a" : 
                            selectedTemplate === 6 ? "#f8f9fa" : 
                            selectedTemplate === 9 ? "#0a0a0a" : 
                            "white",
            color: selectedTemplate === 4 || selectedTemplate === 9 ? "#fff" : "#333"
          }}
        >
          {/* Header */}
          <div className={`flex flex-col md:flex-row justify-between items-start mb-8 pb-6 ${
            selectedTemplate === 2 ? "border-b-2 border-[#0F7C4F]" :
            selectedTemplate === 4 ? "border-b-4 border-[#0F7C4F]" :
            selectedTemplate === 5 ? "border-l-4 border-[#8b7355] pl-6" :
            selectedTemplate === 7 ? "border-t-4 border-[#2c3e50] pt-6" :
            selectedTemplate === 9 ? "border-b-2 border-[#00ff00]" :
            selectedTemplate === 10 ? "border-b-2 border-[#d4af37]" :
            "border-b-3 border-realm-black"
          }`}>
            <div className="flex-1 mb-4 md:mb-0">
              {logoUrl ? (
                <img src={logoUrl} alt="Logo" className="max-h-16 mb-4" />
              ) : (
                <h1 className={`${
                  selectedTemplate === 1 ? "text-4xl font-bold" :
                  selectedTemplate === 2 ? "text-3xl font-semibold text-[#0F7C4F]" :
                  selectedTemplate === 3 ? "text-5xl font-light tracking-wider" :
                  selectedTemplate === 4 ? "text-4xl font-black text-[#0F7C4F]" :
                  selectedTemplate === 5 ? "text-4xl italic text-[#8b7355]" :
                  selectedTemplate === 6 ? "text-4xl" :
                  selectedTemplate === 7 ? "text-3xl font-bold text-[#2c3e50]" :
                  selectedTemplate === 8 ? "text-4xl text-[#ff6b6b]" :
                  selectedTemplate === 9 ? "text-3xl font-bold text-white" :
                  selectedTemplate === 10 ? "text-5xl font-normal tracking-widest text-[#d4af37]" :
                  "text-4xl font-bold"
                } mb-2`}>
                  {selectedTemplate === 9 ? "> INVOICE.exe" : 
                   "INVOICE"}
                </h1>
              )}
            </div>
            <div className="text-right space-y-2">
              <div className="flex items-center gap-2">
                <span className={`text-sm ${selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "text-gray-400" : "text-realm-gray"}`}>Invoice #:</span>
                <Input
                  value={invoiceData.invoiceNumber}
                  onChange={(e) => updateField("invoiceNumber", e.target.value)}
                  className={`h-7 text-sm border-0 border-b rounded-none p-0 w-32 ${
                    selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent" :
                    "border-realm-gray focus:border-realm-black"
                  }`}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-sm ${selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "text-gray-400" : "text-realm-gray"}`}>Date:</span>
                <Input
                  type="date"
                  value={invoiceData.date}
                  onChange={(e) => updateField("date", e.target.value)}
                  className={`h-7 text-sm border-0 border-b rounded-none p-0 w-32 ${
                    selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent" :
                    "border-realm-gray focus:border-realm-black"
                  }`}
                />
              </div>
              {invoiceData.dueDate && (
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "text-gray-400" : "text-realm-gray"}`}>Due:</span>
                  <Input
                    type="date"
                    value={invoiceData.dueDate}
                    onChange={(e) => updateField("dueDate", e.target.value)}
                    className={`h-7 text-sm border-0 border-b rounded-none p-0 w-32 ${
                      selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent" :
                      "border-realm-gray focus:border-realm-black"
                    }`}
                  />
                </div>
              )}
            </div>
          </div>

          {/* From & To */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className={`font-semibold mb-3 ${
                selectedTemplate === 2 || selectedTemplate === 4 ? "text-[#0F7C4F]" :
                selectedTemplate === 9 ? "text-white" :
                ""
              }`}>From:</h3>
              <div className="space-y-2">
                <Input
                  placeholder="Business Name"
                  value={invoiceData.from.name}
                  onChange={(e) => updateField("from.name", e.target.value)}
                  className={`border-0 border-b rounded-none p-1 ${
                    selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent !placeholder:text-gray-300" :
                    "border-realm-gray focus:border-realm-black"
                  }`}
                  style={selectedTemplate === 4 || selectedTemplate === 9 ? { 
                    '--tw-placeholder-opacity': '1',
                  } as React.CSSProperties & { '--tw-placeholder-opacity'?: string } : undefined}
                />
                <Textarea
                  placeholder="Address"
                  value={invoiceData.from.address}
                  onChange={(e) => updateField("from.address", e.target.value)}
                  className={`border-0 border-b rounded-none p-1 min-h-[50px] resize-none ${
                    selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent !placeholder:text-gray-300" :
                    "border-realm-gray focus:border-realm-black"
                  }`}
                />
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="City"
                    value={invoiceData.from.city}
                    onChange={(e) => updateField("from.city", e.target.value)}
                    className={`border-0 border-b rounded-none p-1 ${
                      selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent !placeholder:text-gray-300" :
                      "border-realm-gray focus:border-realm-black"
                    }`}
                  />
                  <Input
                    placeholder="ZIP"
                    value={invoiceData.from.zip}
                    onChange={(e) => updateField("from.zip", e.target.value)}
                    className={`border-0 border-b rounded-none p-1 ${
                      selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent !placeholder:text-gray-300" :
                      "border-realm-gray focus:border-realm-black"
                    }`}
                  />
                </div>
                <Input
                  placeholder="Country"
                  value={invoiceData.from.country}
                  onChange={(e) => updateField("from.country", e.target.value)}
                  className={`border-0 border-b rounded-none p-1 ${
                    selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent !placeholder:text-gray-300" :
                    "border-realm-gray focus:border-realm-black"
                  }`}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={invoiceData.from.email}
                  onChange={(e) => updateField("from.email", e.target.value)}
                  className={`border-0 border-b rounded-none p-1 ${
                    selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent !placeholder:text-gray-300" :
                    "border-realm-gray focus:border-realm-black"
                  }`}
                />
                <Input
                  placeholder="Phone"
                  value={invoiceData.from.phone}
                  onChange={(e) => updateField("from.phone", e.target.value)}
                  className={`border-0 border-b rounded-none p-1 ${
                    selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent !placeholder:text-gray-300" :
                    "border-realm-gray focus:border-realm-black"
                  }`}
                />
              </div>
            </div>
            <div>
              <h3 className={`font-semibold mb-3 ${
                selectedTemplate === 2 || selectedTemplate === 4 ? "text-[#0F7C4F]" :
                selectedTemplate === 9 ? "text-white" :
                ""
              }`}>To:</h3>
              <div className="space-y-2">
                <Input
                  placeholder="Client Name"
                  value={invoiceData.to.name}
                  onChange={(e) => updateField("to.name", e.target.value)}
                  className={`border-0 border-b rounded-none p-1 ${
                    selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent !placeholder:text-gray-300" :
                    "border-realm-gray focus:border-realm-black"
                  }`}
                />
                <Textarea
                  placeholder="Address"
                  value={invoiceData.to.address}
                  onChange={(e) => updateField("to.address", e.target.value)}
                  className={`border-0 border-b rounded-none p-1 min-h-[50px] resize-none ${
                    selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent !placeholder:text-gray-300" :
                    "border-realm-gray focus:border-realm-black"
                  }`}
                />
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="City"
                    value={invoiceData.to.city}
                    onChange={(e) => updateField("to.city", e.target.value)}
                    className={`border-0 border-b rounded-none p-1 ${
                      selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent !placeholder:text-gray-300" :
                      "border-realm-gray focus:border-realm-black"
                    }`}
                  />
                  <Input
                    placeholder="ZIP"
                    value={invoiceData.to.zip}
                    onChange={(e) => updateField("to.zip", e.target.value)}
                    className={`border-0 border-b rounded-none p-1 ${
                      selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent !placeholder:text-gray-300" :
                      "border-realm-gray focus:border-realm-black"
                    }`}
                  />
                </div>
                <Input
                  placeholder="Country"
                  value={invoiceData.to.country}
                  onChange={(e) => updateField("to.country", e.target.value)}
                  className={`border-0 border-b rounded-none p-1 ${
                    selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent !placeholder:text-gray-300" :
                    "border-realm-gray focus:border-realm-black"
                  }`}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={invoiceData.to.email}
                  onChange={(e) => updateField("to.email", e.target.value)}
                  className={`border-0 border-b rounded-none p-1 ${
                    selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent !placeholder:text-gray-300" :
                    "border-realm-gray focus:border-realm-black"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Line Items Table */}
          <div className="mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className={`${
                  selectedTemplate === 1 ? "bg-black text-white" :
                  selectedTemplate === 2 ? "bg-[#0F7C4F] text-white" :
                  selectedTemplate === 4 ? "bg-[#0F7C4F] text-white" :
                  selectedTemplate === 5 ? "bg-[#8b7355] text-white" :
                  selectedTemplate === 6 ? "bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white" :
                  selectedTemplate === 7 ? "bg-[#34495e] text-white" :
                  selectedTemplate === 8 ? "bg-[#ff6b6b] text-white" :
                  selectedTemplate === 9 ? "bg-[#003300] text-[#00ff00] border border-[#00ff00]" :
                  selectedTemplate === 10 ? "bg-[#d4af37] text-white" :
                  "bg-realm-black text-white"
                }`}>
                  <th className="text-left p-3">Description</th>
                  <th className="text-center p-3">Qty</th>
                  <th className="text-right p-3">Price</th>
                  <th className="text-right p-3">Total</th>
                  <th className="w-12"></th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.items.map((item, index) => (
                  <tr key={index} className={`border-b ${
                    selectedTemplate === 9 ? "border-[#00ff00]/30" :
                    selectedTemplate === 2 || selectedTemplate === 4 ? "border-gray-700" :
                    "border-realm-lightgray"
                  }`}>
                    <td className="p-3">
                      <Input
                        placeholder="Item description"
                        value={item.description}
                        onChange={(e) => updateItem(index, "description", e.target.value)}
                        className={`border-0 border-b border-transparent focus:border-realm-gray rounded-none p-1 w-full ${
                          selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "text-white !placeholder:text-gray-300 focus:border-white" :
                          ""
                        }`}
                      />
                    </td>
                    <td className="p-3 text-center">
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateItem(index, "quantity", Number(e.target.value))}
                        className={`border-0 border-b border-transparent focus:border-realm-gray rounded-none p-1 w-16 text-center ${
                          selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "text-white !placeholder:text-gray-300 focus:border-white" :
                          ""
                        }`}
                      />
                    </td>
                    <td className="p-3 text-right">
                      <Input
                        type="number"
                        value={item.unitPrice}
                        onChange={(e) => updateItem(index, "unitPrice", Number(e.target.value))}
                        className={`border-0 border-b border-transparent focus:border-realm-gray rounded-none p-1 w-24 text-right ${
                          selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "text-white !placeholder:text-gray-300 focus:border-white" :
                          ""
                        }`}
                      />
                    </td>
                    <td className={`p-3 text-right font-semibold ${
                      selectedTemplate === 2 ? "text-[#0F7C4F]" :
                      selectedTemplate === 10 ? "text-[#d4af37]" :
                      ""
                    }`}>
                      {formatCurrency(item.quantity * item.unitPrice)}
                    </td>
                    <td className="p-3">
                      <Button
                        onClick={() => removeItem(index)}
                        variant="ghost"
                        size="sm"
                        className="text-red-600 h-6 w-6 p-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Button 
              onClick={addItem} 
              variant="outline" 
              size="sm" 
              className={`mt-3 rounded-full ${
                selectedTemplate === 4 || selectedTemplate === 9 
                  ? "bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white border-gray-600 font-medium" 
                  : ""
              }`}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>
          </div>

          {/* Totals */}
          <div className="flex justify-end mb-8">
            <div className={`w-64 space-y-3 ${selectedTemplate === 4 || selectedTemplate === 9 ? "text-white" : ""}`}>
              <div className="flex justify-between">
                <span className={selectedTemplate === 4 || selectedTemplate === 9 ? "text-white" : ""}>Subtotal:</span>
                <span className={`font-semibold ${selectedTemplate === 4 || selectedTemplate === 9 ? "text-white" : ""}`}>{formatCurrency(totals.subtotal)}</span>
              </div>
              {totals.discountAmount > 0 && (
                <div className={`flex justify-between ${selectedTemplate === 4 || selectedTemplate === 9 ? "text-red-300" : "text-red-600"}`}>
                  <span>Discount:</span>
                  <span className="font-semibold">-{formatCurrency(totals.discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className={selectedTemplate === 4 || selectedTemplate === 9 ? "text-white" : ""}>Tax:</span>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value={invoiceData.taxRate}
                    onChange={(e) => updateField("taxRate", Number(e.target.value))}
                    className={`h-7 w-16 text-sm border-0 border-b rounded-none p-0 text-right ${
                      selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent" :
                      "border-realm-gray focus:border-realm-black"
                    }`}
                  />
                  <span className={selectedTemplate === 4 || selectedTemplate === 9 ? "text-white" : ""}>%</span>
                  <span className={`font-semibold ml-2 ${selectedTemplate === 4 || selectedTemplate === 9 ? "text-white" : ""}`}>{formatCurrency(totals.tax)}</span>
                </div>
              </div>
              <div className={`flex justify-between text-xl font-bold pt-3 border-t-2 ${
                selectedTemplate === 1 ? "bg-realm-lightgray px-3 py-2" :
                selectedTemplate === 2 ? "bg-realm-lightgray px-3 py-2" :
                selectedTemplate === 4 ? "bg-[#0F7C4F] text-white px-3 py-2" :
                selectedTemplate === 9 ? "bg-[#002200] text-white border-[#00ff00] px-3 py-2" :
                ""
              }`}
              style={{
                borderColor: selectedTemplate === 2 ? "#0F7C4F" :
                            selectedTemplate === 4 ? "#0F7C4F" :
                            selectedTemplate === 9 ? "#00ff00" :
                            selectedTemplate === 10 ? "#d4af37" :
                            "#000"
              }}>
                <span>Total:</span>
                <span style={{ color: selectedTemplate === 2 ? "#0F7C4F" : selectedTemplate === 4 || selectedTemplate === 9 ? "#ffffff" : selectedTemplate === 10 ? "#d4af37" : "inherit" }}>
                  {formatCurrency(totals.total)}
                </span>
              </div>
            </div>
          </div>

          {/* Payment & Notes */}
          {(invoiceData.paymentMethod || invoiceData.bankDetails || invoiceData.notes || invoiceData.terms) && (
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {invoiceData.paymentMethod && (
                <div>
                  <Label className={`text-sm font-semibold mb-1 block ${selectedTemplate === 4 || selectedTemplate === 9 ? "text-white" : ""}`}>Payment Method</Label>
                  <Input
                    value={invoiceData.paymentMethod}
                    onChange={(e) => updateField("paymentMethod", e.target.value)}
                    placeholder="Bank Transfer, PayPal, etc."
                    className={`border-0 border-b rounded-none p-1 ${
                      selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent !placeholder:text-gray-300" :
                      "border-realm-gray focus:border-realm-black"
                    }`}
                  />
                </div>
              )}
              {invoiceData.bankDetails && (
                <div>
                  <Label className={`text-sm font-semibold mb-1 block ${selectedTemplate === 4 || selectedTemplate === 9 ? "text-white" : ""}`}>Bank Details</Label>
                  <Textarea
                    value={invoiceData.bankDetails}
                    onChange={(e) => updateField("bankDetails", e.target.value)}
                    placeholder="Account number, IBAN, etc."
                    className={`border-0 border-b rounded-none p-1 min-h-[40px] resize-none ${
                      selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent !placeholder:text-gray-300" :
                      "border-realm-gray focus:border-realm-black"
                    }`}
                  />
                </div>
              )}
              {invoiceData.notes && (
                <div>
                  <Label className={`text-sm font-semibold mb-1 block ${selectedTemplate === 4 || selectedTemplate === 9 ? "text-white" : ""}`}>Notes</Label>
                  <Textarea
                    value={invoiceData.notes}
                    onChange={(e) => updateField("notes", e.target.value)}
                    placeholder="Additional notes..."
                    className={`border-0 border-b rounded-none p-1 min-h-[60px] resize-none ${
                      selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent !placeholder:text-gray-300" :
                      "border-realm-gray focus:border-realm-black"
                    }`}
                  />
                </div>
              )}
              {invoiceData.terms && (
                <div>
                  <Label className={`text-sm font-semibold mb-1 block ${selectedTemplate === 4 || selectedTemplate === 9 ? "text-white" : ""}`}>Terms & Conditions</Label>
                  <Textarea
                    value={invoiceData.terms}
                    onChange={(e) => updateField("terms", e.target.value)}
                    placeholder="Payment terms..."
                    className={`border-0 border-b rounded-none p-1 min-h-[60px] resize-none ${
                      selectedTemplate === 2 || selectedTemplate === 4 || selectedTemplate === 9 ? "border-gray-600 focus:border-white text-white bg-transparent !placeholder:text-gray-300" :
                      "border-realm-gray focus:border-realm-black"
                    }`}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 p-4 bg-realm-lightgray border-t border-realm-lightgray">
          <Button
            onClick={() => window.print()}
            variant="outline"
            className="rounded-full px-6 py-2 flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            Print
          </Button>
          <Button
            onClick={handleDownload}
            className="bg-[#0F7C4F] hover:bg-[#0d6b42] text-white rounded-full px-8 py-3 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Invoice
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;
