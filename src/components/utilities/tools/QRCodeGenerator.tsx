import React, { useState, useRef, useEffect } from "react";
import { Copy, Download, QrCode, Link, Mail, MessageSquare, Wifi, User, Phone, MapPin, Calendar, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import QRCode from "qrcode";

interface QRCodeGeneratorProps {
  onCopy?: (text: string) => void;
}

type QRType = "text" | "url" | "email" | "sms" | "wifi" | "vcard" | "location" | "event" | "pay";

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ onCopy }) => {
  const [qrType, setQrType] = useState<QRType>("text");
  const [size, setSize] = useState(400);
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState<"L" | "M" | "Q" | "H">("M");
  const [margin, setMargin] = useState(4);
  const [darkColor, setDarkColor] = useState("#000000");
  const [lightColor, setLightColor] = useState("#FFFFFF");
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

  const generateQRData = (): string => {
    switch (qrType) {
      case "text":
        return text;
      case "url":
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

  useEffect(() => {
    const generateQR = async () => {
      if (!hasRequiredData() || !canvasRef.current) return;

      const qrData = generateQRData();
      if (!qrData) return;

      try {
        const dataUrl = await QRCode.toDataURL(canvasRef.current, qrData, {
          width: size,
          margin: margin,
          color: {
            dark: darkColor,
            light: lightColor,
          },
          errorCorrectionLevel: errorCorrectionLevel,
        });
        setQrDataUrl(dataUrl);
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
  ]);

  const handleDownload = () => {
    if (!qrDataUrl) return;
    const link = document.createElement("a");
    link.href = qrDataUrl;
    link.download = `qrcode-${qrType}-${Date.now()}.png`;
    link.click();
  };

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
            <Label className="text-sm font-medium text-realm-black mb-2 block">Text Content</Label>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter any text to encode..."
              className="min-h-[120px]"
            />
          </div>
        );
      case "url":
        return (
          <div>
            <Label className="text-sm font-medium text-realm-black mb-2 block">Website URL</Label>
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              type="url"
            />
          </div>
        );
      case "email":
        return (
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Email Address</Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="recipient@example.com"
                type="email"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Subject (Optional)</Label>
              <Input
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                placeholder="Email subject"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Message (Optional)</Label>
              <Textarea
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                placeholder="Email body text"
                className="min-h-[80px]"
              />
            </div>
          </div>
        );
      case "sms":
        return (
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Phone Number</Label>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1234567890"
                type="tel"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Message (Optional)</Label>
              <Textarea
                value={smsMessage}
                onChange={(e) => setSmsMessage(e.target.value)}
                placeholder="SMS message text"
                className="min-h-[80px]"
              />
            </div>
          </div>
        );
      case "wifi":
        return (
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Network Name (SSID)</Label>
              <Input
                value={wifiSSID}
                onChange={(e) => setWifiSSID(e.target.value)}
                placeholder="MyWiFiNetwork"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Password</Label>
              <Input
                value={wifiPassword}
                onChange={(e) => setWifiPassword(e.target.value)}
                placeholder="WiFi password"
                type="password"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-realm-black mb-2 block">Security Type</Label>
                <select
                  value={wifiSecurity}
                  onChange={(e) => setWifiSecurity(e.target.value as "WPA" | "WEP" | "nopass")}
                  className="w-full px-3 py-2 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F]"
                >
                  <option value="WPA">WPA/WPA2</option>
                  <option value="WEP">WEP</option>
                  <option value="nopass">No Password</option>
                </select>
              </div>
              <div className="flex items-end">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={wifiHidden}
                    onChange={(e) => setWifiHidden(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-realm-black">Hidden Network</span>
                </label>
              </div>
            </div>
          </div>
        );
      case "vcard":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-realm-black mb-2 block">First Name</Label>
                <Input
                  value={vcardFirstName}
                  onChange={(e) => setVcardFirstName(e.target.value)}
                  placeholder="John"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-realm-black mb-2 block">Last Name</Label>
                <Input
                  value={vcardLastName}
                  onChange={(e) => setVcardLastName(e.target.value)}
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Organization (Optional)</Label>
              <Input
                value={vcardOrg}
                onChange={(e) => setVcardOrg(e.target.value)}
                placeholder="Company Name"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Title (Optional)</Label>
              <Input
                value={vcardTitle}
                onChange={(e) => setVcardTitle(e.target.value)}
                placeholder="Job Title"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Phone (Optional)</Label>
              <Input
                value={vcardPhone}
                onChange={(e) => setVcardPhone(e.target.value)}
                placeholder="+1234567890"
                type="tel"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Email (Optional)</Label>
              <Input
                value={vcardEmail}
                onChange={(e) => setVcardEmail(e.target.value)}
                placeholder="email@example.com"
                type="email"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Website (Optional)</Label>
              <Input
                value={vcardWebsite}
                onChange={(e) => setVcardWebsite(e.target.value)}
                placeholder="https://example.com"
                type="url"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Address (Optional)</Label>
              <Textarea
                value={vcardAddress}
                onChange={(e) => setVcardAddress(e.target.value)}
                placeholder="Street address"
                className="min-h-[60px]"
              />
            </div>
          </div>
        );
      case "location":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-realm-black mb-2 block">Latitude</Label>
                <Input
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                  placeholder="40.7128"
                  type="number"
                  step="any"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-realm-black mb-2 block">Longitude</Label>
                <Input
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                  placeholder="-74.0060"
                  type="number"
                  step="any"
                />
              </div>
            </div>
          </div>
        );
      case "event":
        return (
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Event Title</Label>
              <Input
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                placeholder="Meeting Title"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-realm-black mb-2 block">Start Date & Time</Label>
                <Input
                  value={eventStart}
                  onChange={(e) => setEventStart(e.target.value)}
                  type="datetime-local"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-realm-black mb-2 block">End Date & Time</Label>
                <Input
                  value={eventEnd}
                  onChange={(e) => setEventEnd(e.target.value)}
                  type="datetime-local"
                />
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Location (Optional)</Label>
              <Input
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
                placeholder="Event location"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Description (Optional)</Label>
              <Textarea
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                placeholder="Event description"
                className="min-h-[80px]"
              />
            </div>
          </div>
        );
      case "pay":
        return (
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-realm-black mb-2 block">Merchant/Payment ID</Label>
              <Input
                value={payMerchant}
                onChange={(e) => setPayMerchant(e.target.value)}
                placeholder="merchant@upi or payment ID"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-realm-black mb-2 block">Amount</Label>
                <Input
                  value={payAmount}
                  onChange={(e) => setPayAmount(e.target.value)}
                  placeholder="100.00"
                  type="number"
                  step="0.01"
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-realm-black mb-2 block">Currency</Label>
                <select
                  value={payCurrency}
                  onChange={(e) => setPayCurrency(e.target.value)}
                  className="w-full px-3 py-2 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F]"
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
    <div className="space-y-6">
      {/* QR Type Selector */}
      <div>
        <Label className="text-sm font-medium text-realm-black mb-3 block">QR Code Type</Label>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
          {qrTypeOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.value}
                onClick={() => setQrType(option.value as QRType)}
                className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all ${
                  qrType === option.value
                    ? "border-[#0F7C4F] bg-[#0F7C4F]/10"
                    : "border-realm-lightgray hover:border-realm-gray"
                }`}
              >
                <Icon className={`w-5 h-5 ${qrType === option.value ? "text-[#0F7C4F]" : "text-realm-gray"}`} />
                <span className={`text-xs font-medium ${qrType === option.value ? "text-[#0F7C4F]" : "text-realm-gray"}`}>
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Input Fields */}
      <div className="bg-white rounded-lg border border-realm-lightgray p-6">
        {renderInputFields()}
      </div>

      {/* QR Code Display */}
      {hasRequiredData() && (
        <div className="bg-white rounded-lg border border-realm-lightgray p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* QR Code Preview */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="bg-realm-lightgray p-6 rounded-lg">
                <canvas ref={canvasRef} className="hidden" />
                {qrDataUrl && (
                  <img src={qrDataUrl} alt="QR Code" className="max-w-full h-auto" />
                )}
              </div>
            </div>

            {/* Customization Options */}
            <div className="flex-1 space-y-6">
              <div>
                <Label className="text-sm font-medium text-realm-black mb-2 block">
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
                <div className="flex justify-between text-xs text-realm-gray mt-1">
                  <span>200px</span>
                  <span>600px</span>
                  <span>1000px</span>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-realm-black mb-2 block">Error Correction Level</Label>
                <select
                  value={errorCorrectionLevel}
                  onChange={(e) => setErrorCorrectionLevel(e.target.value as "L" | "M" | "Q" | "H")}
                  className="w-full px-3 py-2 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F]"
                >
                  <option value="L">L - Low (~7%)</option>
                  <option value="M">M - Medium (~15%)</option>
                  <option value="Q">Q - Quartile (~25%)</option>
                  <option value="H">H - High (~30%)</option>
                </select>
              </div>

              <div>
                <Label className="text-sm font-medium text-realm-black mb-2 block">Margin: {margin}</Label>
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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-realm-black mb-2 block">Dark Color</Label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={darkColor}
                      onChange={(e) => setDarkColor(e.target.value)}
                      className="w-12 h-10 rounded border border-realm-lightgray cursor-pointer"
                    />
                    <Input
                      value={darkColor}
                      onChange={(e) => setDarkColor(e.target.value)}
                      placeholder="#000000"
                      className="flex-1"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-realm-black mb-2 block">Light Color</Label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={lightColor}
                      onChange={(e) => setLightColor(e.target.value)}
                      className="w-12 h-10 rounded border border-realm-lightgray cursor-pointer"
                    />
                    <Input
                      value={lightColor}
                      onChange={(e) => setLightColor(e.target.value)}
                      placeholder="#FFFFFF"
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-2 mt-6 pt-6 border-t border-realm-lightgray">
            <Button onClick={handleCopy} variant="outline" className="rounded-full">
              <Copy className="w-4 h-4 mr-2" />
              Copy Image
            </Button>
            <Button
              onClick={handleDownload}
              className="bg-[#0F7C4F] hover:bg-[#0d6b42] text-white rounded-full px-6 py-2 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download PNG
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
