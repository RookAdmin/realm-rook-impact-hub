import React, { useState, useRef, useEffect } from "react";
import { Copy, QrCode, Link, Mail, MessageSquare, Wifi, User, Phone, MapPin, Calendar, CreditCard, Upload, X, Moon, Sun, Palette, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import QRCode from "qrcode";

interface QRCodeGeneratorProps {
  onCopy?: (text: string) => void;
}

type QRType = "text" | "url" | "email" | "sms" | "wifi" | "vcard" | "location" | "event" | "pay";
type DotShape = "square" | "circle" | "rounded";
type Theme = "light" | "dark" | "custom";

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ onCopy }) => {
  const [qrType, setQrType] = useState<QRType>("text");
  const [size, setSize] = useState(400);
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState<"L" | "M" | "Q" | "H">("M");
  const [margin, setMargin] = useState(4);
  const [dotShape, setDotShape] = useState<DotShape>("square");
  const [theme, setTheme] = useState<Theme>("light");
  const [darkColor, setDarkColor] = useState("#000000");
  const [lightColor, setLightColor] = useState("#FFFFFF");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [logoSize, setLogoSize] = useState(60);
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  
  // Text/URL fields
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  
  // Email fields
  const [email, setEmail] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  
  // SMS fields
  const [phone, setPhone] = useState("");
  const [smsMessage, setSmsMessage] = useState("");
  
  // WiFi fields
  const [wifiSSID, setWifiSSID] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");
  const [wifiSecurity, setWifiSecurity] = useState<"WPA" | "WEP" | "nopass">("WPA");
  const [wifiHidden, setWifiHidden] = useState(false);
  
  // vCard fields
  const [vcardFirstName, setVcardFirstName] = useState("");
  const [vcardLastName, setVcardLastName] = useState("");
  const [vcardOrg, setVcardOrg] = useState("");
  const [vcardTitle, setVcardTitle] = useState("");
  const [vcardPhone, setVcardPhone] = useState("");
  const [vcardEmail, setVcardEmail] = useState("");
  const [vcardWebsite, setVcardWebsite] = useState("");
  const [vcardAddress, setVcardAddress] = useState("");
  
  // Location fields
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  
  // Event fields
  const [eventTitle, setEventTitle] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  
  // Payment fields
  const [payAmount, setPayAmount] = useState("");
  const [payCurrency, setPayCurrency] = useState("USD");
  const [payMerchant, setPayMerchant] = useState("");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const outputCanvasRef = useRef<HTMLCanvasElement>(null);

  // Theme presets
  const themePresets = {
    light: { dark: "#000000", light: "#FFFFFF" },
    dark: { dark: "#FFFFFF", light: "#000000" },
    custom: { dark: darkColor, light: lightColor },
  };

  // Handle theme change
  useEffect(() => {
    if (theme !== "custom") {
      setDarkColor(themePresets[theme].dark);
      setLightColor(themePresets[theme].light);
    }
  }, [theme]);

  // Handle logo upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 200 * 1024) {
      alert("Logo size must be less than 200KB");
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    setLogoFile(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      setLogoUrl(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removeLogo = () => {
    setLogoFile(null);
    setLogoUrl("");
  };

  const generateQRData = (): string => {
    switch (qrType) {
      case "text":
        return text || " "; // Allow empty text for dynamic preview
      case "url":
        if (!url) return " ";
        return url.startsWith("http") ? url : `https://${url}`;
      case "email":
        const emailParams = new URLSearchParams();
        if (emailSubject) emailParams.append("subject", emailSubject);
        if (emailBody) emailParams.append("body", emailBody);
        const emailQuery = emailParams.toString();
        return `mailto:${email}${emailQuery ? `?${emailQuery}` : ""}`;
      case "sms":
        const smsParams = new URLSearchParams();
        if (smsMessage) smsParams.append("body", smsMessage);
        const smsQuery = smsParams.toString();
        return `sms:${phone}${smsQuery ? `?${smsQuery}` : ""}`;
      case "wifi":
        return `WIFI:T:${wifiSecurity};S:${wifiSSID};P:${wifiPassword};H:${wifiHidden ? "true" : "false"};;`;
      case "vcard":
        let vcard = "BEGIN:VCARD\nVERSION:3.0\n";
        if (vcardFirstName || vcardLastName) {
          vcard += `N:${vcardLastName};${vcardFirstName};;;\n`;
          vcard += `FN:${vcardFirstName} ${vcardLastName}\n`;
        }
        if (vcardOrg) vcard += `ORG:${vcardOrg}\n`;
        if (vcardTitle) vcard += `TITLE:${vcardTitle}\n`;
        if (vcardPhone) vcard += `TEL:${vcardPhone}\n`;
        if (vcardEmail) vcard += `EMAIL:${vcardEmail}\n`;
        if (vcardWebsite) vcard += `URL:${vcardWebsite}\n`;
        if (vcardAddress) vcard += `ADR:;;${vcardAddress};;;;\n`;
        vcard += "END:VCARD";
        return vcard;
      case "location":
        return `geo:${latitude},${longitude}`;
      case "event":
        const startDate = eventStart ? new Date(eventStart).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z" : "";
        const endDate = eventEnd ? new Date(eventEnd).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z" : "";
        let ical = "BEGIN:VEVENT\n";
        if (startDate) ical += `DTSTART:${startDate}\n`;
        if (endDate) ical += `DTEND:${endDate}\n`;
        if (eventTitle) ical += `SUMMARY:${eventTitle}\n`;
        if (eventLocation) ical += `LOCATION:${eventLocation}\n`;
        if (eventDescription) ical += `DESCRIPTION:${eventDescription}\n`;
        ical += "END:VEVENT";
        return ical;
      case "pay":
        return `upi://pay?pa=${payMerchant}&am=${payAmount}&cu=${payCurrency}`;
      default:
        return "";
    }
  };

  const hasRequiredData = (): boolean => {
    switch (qrType) {
      case "text":
        return text.length > 0;
      case "url":
        return url.length > 0;
      case "email":
        return email.length > 0;
      case "sms":
        return phone.length > 0;
      case "wifi":
        return wifiSSID.length > 0;
      case "vcard":
        return vcardFirstName.length > 0 || vcardLastName.length > 0;
      case "location":
        return latitude.length > 0 && longitude.length > 0;
      case "event":
        return eventTitle.length > 0 && eventStart.length > 0;
      case "pay":
        return payMerchant.length > 0 && payAmount.length > 0;
      default:
        return false;
    }
  };

  // Draw custom dot shapes
  const drawCustomDots = (
    ctx: CanvasRenderingContext2D,
    sourceCanvas: HTMLCanvasElement,
    dotShape: DotShape,
    moduleSize: number
  ) => {
    const width = sourceCanvas.width;
    const height = sourceCanvas.height;
    const sourceCtx = sourceCanvas.getContext("2d");
    if (!sourceCtx) return;

    const imageData = sourceCtx.getImageData(0, 0, width, height);
    const data = imageData.data;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = lightColor;
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = darkColor;

    // Sample pixels at module centers to detect dark modules
    for (let y = moduleSize / 2; y < height; y += moduleSize) {
      for (let x = moduleSize / 2; x < width; x += moduleSize) {
        const pixelX = Math.floor(x);
        const pixelY = Math.floor(y);
        const index = (pixelY * width + pixelX) * 4;
        const isDark = data[index] < 128; // Check if pixel is dark

        if (isDark) {
          const moduleX = Math.floor(x / moduleSize) * moduleSize;
          const moduleY = Math.floor(y / moduleSize) * moduleSize;
          const centerX = moduleX + moduleSize / 2;
          const centerY = moduleY + moduleSize / 2;
          const radius = moduleSize / 2 - 2;
          const size = moduleSize - 2;

          switch (dotShape) {
            case "circle":
              ctx.beginPath();
              ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
              ctx.fill();
              break;
            case "rounded":
              const cornerRadius = moduleSize * 0.25;
              ctx.beginPath();
              ctx.moveTo(moduleX + 1 + cornerRadius, moduleY + 1);
              ctx.lineTo(moduleX + size - cornerRadius, moduleY + 1);
              ctx.quadraticCurveTo(moduleX + size, moduleY + 1, moduleX + size, moduleY + 1 + cornerRadius);
              ctx.lineTo(moduleX + size, moduleY + size - cornerRadius);
              ctx.quadraticCurveTo(moduleX + size, moduleY + size, moduleX + size - cornerRadius, moduleY + size);
              ctx.lineTo(moduleX + 1 + cornerRadius, moduleY + size);
              ctx.quadraticCurveTo(moduleX + 1, moduleY + size, moduleX + 1, moduleY + size - cornerRadius);
              ctx.lineTo(moduleX + 1, moduleY + 1 + cornerRadius);
              ctx.quadraticCurveTo(moduleX + 1, moduleY + 1, moduleX + 1 + cornerRadius, moduleY + 1);
              ctx.closePath();
              ctx.fill();
              break;
            case "square":
            default:
              ctx.fillRect(moduleX + 1, moduleY + 1, size, size);
              break;
          }
        }
      }
    }
  };

  useEffect(() => {
    const generateQR = async () => {
      if (!canvasRef.current || !outputCanvasRef.current) return;

      // For text and URL types, generate even with empty/partial data for dynamic preview
      // For other types, still require minimum data
      const shouldGenerate = qrType === "text" || qrType === "url" || hasRequiredData();
      if (!shouldGenerate) {
        setQrDataUrl("");
        return;
      }

      const qrData = generateQRData();
      // For text/url, allow empty data to show placeholder
      if (!qrData && qrType !== "text" && qrType !== "url") return;

      try {
        // For empty text/url, use placeholder
        const dataToEncode = qrData || (qrType === "text" || qrType === "url" ? " " : qrData);
        
        // Generate base QR code
        const tempCanvas = document.createElement("canvas");
        await QRCode.toCanvas(tempCanvas, dataToEncode, {
          width: size,
          margin: margin,
          color: {
            dark: darkColor,
            light: lightColor,
          },
          errorCorrectionLevel: errorCorrectionLevel,
        });

        const outputCtx = outputCanvasRef.current.getContext("2d");
        if (!outputCtx) return;

        // Set canvas size
        outputCanvasRef.current.width = size;
        outputCanvasRef.current.height = size;

        // Calculate module size (approximate)
        const qrSize = size - margin * 2;
        const moduleSize = Math.floor(qrSize / 25); // Approximate for standard QR

        // Draw with custom dot shape
        if (dotShape !== "square") {
          drawCustomDots(outputCtx, tempCanvas, dotShape, moduleSize);
        } else {
          outputCtx.drawImage(tempCanvas, 0, 0);
        }

        // Add logo if present
        if (logoUrl && logoSize > 0) {
          const logoImg = new Image();
          logoImg.onload = () => {
            const logoX = (size - logoSize) / 2;
            const logoY = (size - logoSize) / 2;

            // Draw white background for logo
            outputCtx.fillStyle = lightColor;
            const padding = 8;
            outputCtx.fillRect(
              logoX - padding,
              logoY - padding,
              logoSize + padding * 2,
              logoSize + padding * 2
            );

            // Draw logo
            outputCtx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);
            setQrDataUrl(outputCanvasRef.current.toDataURL());
          };
          logoImg.src = logoUrl;
        } else {
          setQrDataUrl(outputCanvasRef.current.toDataURL());
        }
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    };

    generateQR();
  }, [
    qrType,
    text,
    url,
    email,
    emailSubject,
    emailBody,
    phone,
    smsMessage,
    wifiSSID,
    wifiPassword,
    wifiSecurity,
    wifiHidden,
    vcardFirstName,
    vcardLastName,
    vcardOrg,
    vcardTitle,
    vcardPhone,
    vcardEmail,
    vcardWebsite,
    vcardAddress,
    latitude,
    longitude,
    eventTitle,
    eventStart,
    eventEnd,
    eventLocation,
    eventDescription,
    payAmount,
    payCurrency,
    payMerchant,
    size,
    errorCorrectionLevel,
    margin,
    darkColor,
    lightColor,
    dotShape,
    logoUrl,
    logoSize,
  ]);


  const handleCopy = async () => {
    if (!qrDataUrl) return;
    try {
      const response = await fetch(qrDataUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);
      if (onCopy) onCopy("QR code copied to clipboard");
    } catch (error) {
      console.error("Error copying QR code:", error);
    }
  };

  const renderInputFields = () => {
    switch (qrType) {
      case "text":
        return (
          <div>
            <Label className="text-xs font-medium text-realm-black mb-1.5 block">Text Content</Label>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter any text to encode..."
              className="min-h-[100px] text-sm"
            />
          </div>
        );
      case "url":
        return (
          <div>
            <Label className="text-xs font-medium text-realm-black mb-1.5 block">Website URL</Label>
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              type="url"
              className="text-sm"
            />
          </div>
        );
      case "email":
        return (
          <div className="space-y-3">
            <div>
              <Label className="text-xs font-medium text-realm-black mb-1.5 block">Email Address</Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="recipient@example.com"
                type="email"
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs font-medium text-realm-black mb-1.5 block">Subject (Optional)</Label>
              <Input
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                placeholder="Email subject"
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs font-medium text-realm-black mb-1.5 block">Message (Optional)</Label>
              <Textarea
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                placeholder="Email body text"
                className="min-h-[70px] text-sm"
              />
            </div>
          </div>
        );
      case "sms":
        return (
          <div className="space-y-3">
            <div>
              <Label className="text-xs font-medium text-realm-black mb-1.5 block">Phone Number</Label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1234567890"
                type="tel"
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs font-medium text-realm-black mb-1.5 block">Message (Optional)</Label>
              <Textarea
                value={smsMessage}
                onChange={(e) => setSmsMessage(e.target.value)}
                placeholder="SMS message text"
                className="min-h-[70px] text-sm"
              />
            </div>
          </div>
        );
      case "wifi":
        return (
          <div className="space-y-3">
            <div>
              <Label className="text-xs font-medium text-realm-black mb-1.5 block">Network Name (SSID)</Label>
              <Input
                value={wifiSSID}
                onChange={(e) => setWifiSSID(e.target.value)}
                placeholder="MyWiFiNetwork"
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs font-medium text-realm-black mb-1.5 block">Password</Label>
              <Input
                value={wifiPassword}
                onChange={(e) => setWifiPassword(e.target.value)}
                placeholder="WiFi password"
                type="password"
                className="text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs font-medium text-realm-black mb-1.5 block">Security Type</Label>
                <select
                  value={wifiSecurity}
                  onChange={(e) => setWifiSecurity(e.target.value as "WPA" | "WEP" | "nopass")}
                  className="w-full px-2.5 py-1.5 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F] text-xs"
                >
                  <option value="WPA">WPA/WPA2</option>
                  <option value="WEP">WEP</option>
                  <option value="nopass">No Password</option>
                </select>
              </div>
              <div className="flex items-end">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={wifiHidden}
                    onChange={(e) => setWifiHidden(e.target.checked)}
                    className="w-3.5 h-3.5"
                  />
                  <span className="text-xs text-realm-black">Hidden Network</span>
                </label>
              </div>
            </div>
          </div>
        );
      case "vcard":
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs font-medium text-realm-black mb-1.5 block">First Name</Label>
                <Input
                  value={vcardFirstName}
                  onChange={(e) => setVcardFirstName(e.target.value)}
                  placeholder="John"
                  className="text-sm"
                />
              </div>
              <div>
                <Label className="text-xs font-medium text-realm-black mb-1.5 block">Last Name</Label>
                <Input
                  value={vcardLastName}
                  onChange={(e) => setVcardLastName(e.target.value)}
                  placeholder="Doe"
                  className="text-sm"
                />
              </div>
            </div>
            <div>
              <Label className="text-xs font-medium text-realm-black mb-1.5 block">Organization (Optional)</Label>
              <Input
                value={vcardOrg}
                onChange={(e) => setVcardOrg(e.target.value)}
                placeholder="Company Name"
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs font-medium text-realm-black mb-1.5 block">Title (Optional)</Label>
              <Input
                value={vcardTitle}
                onChange={(e) => setVcardTitle(e.target.value)}
                placeholder="Job Title"
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs font-medium text-realm-black mb-1.5 block">Phone (Optional)</Label>
              <Input
                value={vcardPhone}
                onChange={(e) => setVcardPhone(e.target.value)}
                placeholder="+1234567890"
                type="tel"
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs font-medium text-realm-black mb-1.5 block">Email (Optional)</Label>
              <Input
                value={vcardEmail}
                onChange={(e) => setVcardEmail(e.target.value)}
                placeholder="email@example.com"
                type="email"
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs font-medium text-realm-black mb-1.5 block">Website (Optional)</Label>
              <Input
                value={vcardWebsite}
                onChange={(e) => setVcardWebsite(e.target.value)}
                placeholder="https://example.com"
                type="url"
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs font-medium text-realm-black mb-1.5 block">Address (Optional)</Label>
              <Textarea
                value={vcardAddress}
                onChange={(e) => setVcardAddress(e.target.value)}
                placeholder="Street address"
                className="min-h-[50px] text-sm"
              />
            </div>
          </div>
        );
      case "location":
        return (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs font-medium text-realm-black mb-1.5 block">Latitude</Label>
                <Input
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  placeholder="40.7128"
                  type="number"
                  step="any"
                  className="text-sm"
                />
              </div>
              <div>
                <Label className="text-xs font-medium text-realm-black mb-1.5 block">Longitude</Label>
                <Input
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  placeholder="-74.0060"
                  type="number"
                  step="any"
                  className="text-sm"
                />
              </div>
            </div>
          </div>
        );
      case "event":
        return (
          <div className="space-y-3">
            <div>
              <Label className="text-xs font-medium text-realm-black mb-1.5 block">Event Title</Label>
              <Input
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                placeholder="Meeting Title"
                className="text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs font-medium text-realm-black mb-1.5 block">Start Date & Time</Label>
                <Input
                  value={eventStart}
                  onChange={(e) => setEventStart(e.target.value)}
                  type="datetime-local"
                  className="text-sm"
                />
              </div>
              <div>
                <Label className="text-xs font-medium text-realm-black mb-1.5 block">End Date & Time</Label>
                <Input
                  value={eventEnd}
                  onChange={(e) => setEventEnd(e.target.value)}
                  type="datetime-local"
                  className="text-sm"
                />
              </div>
            </div>
            <div>
              <Label className="text-xs font-medium text-realm-black mb-1.5 block">Location (Optional)</Label>
              <Input
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
                placeholder="Event location"
                className="text-sm"
              />
            </div>
            <div>
              <Label className="text-xs font-medium text-realm-black mb-1.5 block">Description (Optional)</Label>
              <Textarea
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                placeholder="Event description"
                className="min-h-[70px] text-sm"
              />
            </div>
          </div>
        );
      case "pay":
        return (
          <div className="space-y-3">
            <div>
              <Label className="text-xs font-medium text-realm-black mb-1.5 block">Merchant/Payment ID</Label>
              <Input
                value={payMerchant}
                onChange={(e) => setPayMerchant(e.target.value)}
                placeholder="merchant@upi or payment ID"
                className="text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs font-medium text-realm-black mb-1.5 block">Amount</Label>
                <Input
                  value={payAmount}
                  onChange={(e) => setPayAmount(e.target.value)}
                  placeholder="100.00"
                  type="number"
                  step="0.01"
                  className="text-sm"
                />
              </div>
              <div>
                <Label className="text-xs font-medium text-realm-black mb-1.5 block">Currency</Label>
                <select
                  value={payCurrency}
                  onChange={(e) => setPayCurrency(e.target.value)}
                  className="w-full px-2.5 py-1.5 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F] text-xs"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="INR">INR</option>
                  <option value="JPY">JPY</option>
                </select>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const qrTypeOptions = [
    { value: "text", label: "Text", icon: QrCode },
    { value: "url", label: "URL", icon: Link },
    { value: "email", label: "Email", icon: Mail },
    { value: "sms", label: "SMS", icon: MessageSquare },
    { value: "wifi", label: "WiFi", icon: Wifi },
    { value: "vcard", label: "vCard", icon: User },
    { value: "location", label: "Location", icon: MapPin },
    { value: "event", label: "Event", icon: Calendar },
    { value: "pay", label: "Payment", icon: CreditCard },
  ];

  return (
    <div className="px-2 sm:px-0">
      {/* Main Content: Left (Type + Content) and Right (QR + Customization) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Side: QR Type Selector + Input Fields */}
        <div className="bg-white rounded-lg border border-realm-lightgray p-3 sm:p-4 md:p-5 space-y-4">
          {/* QR Type Selector */}
          <div>
            <Label className="text-xs sm:text-sm font-medium text-realm-black mb-2 block">QR Code Type</Label>
            <div className="relative">
              <select
                value={qrType}
                onChange={(e) => setQrType(e.target.value as QRType)}
                className="w-full appearance-none bg-white border-2 border-realm-lightgray rounded-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-realm-black font-medium focus:outline-none focus:border-[#0F7C4F] focus:ring-2 focus:ring-[#0F7C4F]/20 transition-all cursor-pointer hover:border-realm-gray"
              >
                {qrTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown className="w-4 h-4 text-realm-gray" />
              </div>
            </div>
          </div>

          {/* Input Fields */}
          <div className="space-y-3">
            {renderInputFields()}
          </div>
        </div>

        {/* Right Side: QR Code Preview + Customization */}
        <div className="bg-white rounded-lg border border-realm-lightgray p-3 sm:p-4 md:p-5 space-y-3 sm:space-4">
          {/* QR Code Preview */}
          <div className="flex flex-col items-center justify-center">
            <Label className="text-xs sm:text-sm font-medium text-realm-black mb-2 block">QR Code Preview</Label>
            <div className="bg-realm-lightgray p-3 sm:p-4 rounded-lg w-full max-w-full flex items-center justify-center min-h-[180px] sm:min-h-[200px]">
              <canvas ref={canvasRef} className="hidden" />
              <canvas 
                ref={outputCanvasRef} 
                className="max-w-full h-auto w-full" 
                style={{ display: qrDataUrl ? "block" : "none", maxWidth: "100%", height: "auto" }} 
              />
              {!qrDataUrl && (
                <div className="text-center text-realm-gray py-4 sm:py-6">
                  <QrCode className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 opacity-50" />
                  <p className="text-xs">Enter data to generate QR code</p>
                </div>
              )}
            </div>
          </div>

          {/* Customization Options */}
          <div className="space-y-3">
              {/* Theme Selector */}
              <div>
                <Label className="text-xs font-medium text-realm-black mb-1.5 block flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5" />
                  Theme
                </Label>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    onClick={() => setTheme("light")}
                    className={`flex items-center justify-center gap-1 p-1.5 sm:p-2 rounded-lg border-2 transition-all ${
                      theme === "light"
                        ? "border-[#0F7C4F] bg-[#0F7C4F]/10"
                        : "border-realm-lightgray hover:border-realm-gray"
                    }`}
                  >
                    <Sun className={`w-3.5 h-3.5 ${theme === "light" ? "text-[#0F7C4F]" : "text-realm-gray"}`} />
                    <span className={`text-xs font-medium ${theme === "light" ? "text-[#0F7C4F]" : "text-realm-gray"}`}>
                      Light
                    </span>
                  </button>
                  <button
                    onClick={() => setTheme("dark")}
                    className={`flex items-center justify-center gap-1 p-1.5 sm:p-2 rounded-lg border-2 transition-all ${
                      theme === "dark"
                        ? "border-[#0F7C4F] bg-[#0F7C4F]/10"
                        : "border-realm-lightgray hover:border-realm-gray"
                    }`}
                  >
                    <Moon className={`w-3.5 h-3.5 ${theme === "dark" ? "text-[#0F7C4F]" : "text-realm-gray"}`} />
                    <span className={`text-xs font-medium ${theme === "dark" ? "text-[#0F7C4F]" : "text-realm-gray"}`}>
                      Dark
                    </span>
                  </button>
                  <button
                    onClick={() => setTheme("custom")}
                    className={`flex items-center justify-center gap-1 p-1.5 sm:p-2 rounded-lg border-2 transition-all ${
                      theme === "custom"
                        ? "border-[#0F7C4F] bg-[#0F7C4F]/10"
                        : "border-realm-lightgray hover:border-realm-gray"
                    }`}
                  >
                    <Palette className={`w-3.5 h-3.5 ${theme === "custom" ? "text-[#0F7C4F]" : "text-realm-gray"}`} />
                    <span className={`text-xs font-medium ${theme === "custom" ? "text-[#0F7C4F]" : "text-realm-gray"}`}>
                      Custom
                    </span>
                  </button>
                </div>
              </div>

              {/* Dot Shape Selector */}
              <div>
                <Label className="text-xs font-medium text-realm-black mb-1.5 block">Dot Shape</Label>
                <div className="grid grid-cols-3 gap-1.5">
                  {(["square", "circle", "rounded"] as DotShape[]).map((shape) => (
                    <button
                      key={shape}
                      onClick={() => setDotShape(shape)}
                      className={`p-1.5 sm:p-2 rounded-lg border-2 transition-all capitalize text-xs ${
                        dotShape === shape
                          ? "border-[#0F7C4F] bg-[#0F7C4F]/10 text-[#0F7C4F]"
                          : "border-realm-lightgray hover:border-realm-gray text-realm-gray"
                      }`}
                    >
                      {shape}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <Label className="text-xs font-medium text-realm-black mb-1.5 block">
                  Size: {size}px
                </Label>
                <input
                  type="range"
                  min="200"
                  max="1000"
                  step="50"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-realm-gray mt-0.5">
                  <span>200</span>
                  <span>600</span>
                  <span>1000</span>
                </div>
              </div>

              {/* Error Correction Level */}
              <div>
                <Label className="text-xs font-medium text-realm-black mb-1.5 block">Error Correction</Label>
                <select
                  value={errorCorrectionLevel}
                  onChange={(e) => setErrorCorrectionLevel(e.target.value as "L" | "M" | "Q" | "H")}
                  className="w-full px-2.5 py-1.5 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F] text-xs"
                >
                  <option value="L">L - Low (~7%)</option>
                  <option value="M">M - Medium (~15%)</option>
                  <option value="Q">Q - Quartile (~25%)</option>
                  <option value="H">H - High (~30%)</option>
                </select>
              </div>

              {/* Margin */}
              <div>
                <Label className="text-xs font-medium text-realm-black mb-1.5 block">Margin: {margin}</Label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  value={margin}
                  onChange={(e) => setMargin(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Custom Colors (only show if custom theme) */}
              {theme === "custom" && (
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label className="text-xs font-medium text-realm-black mb-1.5 block">Dark Color</Label>
                    <div className="flex gap-1.5">
                      <input
                        type="color"
                        value={darkColor}
                        onChange={(e) => {
                          setDarkColor(e.target.value);
                          setTheme("custom");
                        }}
                        className="w-8 h-8 rounded border border-realm-lightgray cursor-pointer flex-shrink-0"
                      />
                      <Input
                        value={darkColor}
                        onChange={(e) => {
                          setDarkColor(e.target.value);
                          setTheme("custom");
                        }}
                        placeholder="#000000"
                        className="flex-1 text-xs"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-realm-black mb-1.5 block">Light Color</Label>
                    <div className="flex gap-1.5">
                      <input
                        type="color"
                        value={lightColor}
                        onChange={(e) => {
                          setLightColor(e.target.value);
                          setTheme("custom");
                        }}
                        className="w-8 h-8 rounded border border-realm-lightgray cursor-pointer flex-shrink-0"
                      />
                      <Input
                        value={lightColor}
                        onChange={(e) => {
                          setLightColor(e.target.value);
                          setTheme("custom");
                        }}
                        placeholder="#FFFFFF"
                        className="flex-1 text-xs"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Logo Upload */}
              <div>
                <Label className="text-xs font-medium text-realm-black mb-1.5 block">Center Logo (Optional)</Label>
                {!logoUrl ? (
                  <label className="flex flex-col items-center justify-center w-full h-20 sm:h-24 border-2 border-dashed border-realm-lightgray rounded-lg cursor-pointer hover:border-[#0F7C4F] transition-colors">
                    <div className="flex flex-col items-center justify-center pt-1.5">
                      <Upload className="w-4 h-4 text-realm-gray mb-1" />
                      <p className="text-xs text-realm-gray text-center px-2">
                        Click to upload
                      </p>
                      <p className="text-xs text-realm-gray mt-0.5">Max 200KB</p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="relative">
                    <img src={logoUrl} alt="Logo" className="w-full h-20 sm:h-24 object-contain rounded-lg border border-realm-lightgray" />
                    <button
                      onClick={removeLogo}
                      className="absolute top-1.5 right-1.5 p-0.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    <div className="mt-1.5">
                      <Label className="text-xs text-realm-gray mb-1 block">Logo Size: {logoSize}px</Label>
                      <input
                        type="range"
                        min="30"
                        max="120"
                        step="5"
                        value={logoSize}
                        onChange={(e) => setLogoSize(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-2 pt-2 border-t border-realm-lightgray">
                <Button 
                  onClick={handleCopy} 
                  variant="outline" 
                  size="sm"
                  className="rounded-full text-xs"
                  disabled={!qrDataUrl}
                >
                  <Copy className="w-3.5 h-3.5 mr-1.5" />
                  Copy
                </Button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
