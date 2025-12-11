import React, { useState, useMemo } from "react";
import { Copy, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TimeZoneConverterProps {
  onCopy?: (text: string) => void;
}

const timeZones = [
  { value: "UTC", label: "UTC (Coordinated Universal Time)" },
  { value: "America/New_York", label: "Eastern Time (ET)" },
  { value: "America/Chicago", label: "Central Time (CT)" },
  { value: "America/Denver", label: "Mountain Time (MT)" },
  { value: "America/Los_Angeles", label: "Pacific Time (PT)" },
  { value: "Europe/London", label: "London (GMT)" },
  { value: "Europe/Paris", label: "Paris (CET)" },
  { value: "Asia/Tokyo", label: "Tokyo (JST)" },
  { value: "Asia/Shanghai", label: "Shanghai (CST)" },
  { value: "Asia/Dubai", label: "Dubai (GST)" },
  { value: "Australia/Sydney", label: "Sydney (AEST)" },
  { value: "America/Sao_Paulo", label: "São Paulo (BRT)" },
];

const TimeZoneConverter: React.FC<TimeZoneConverterProps> = ({ onCopy }) => {
  const [fromZone, setFromZone] = useState("UTC");
  const [toZone, setToZone] = useState("America/New_York");
  const [dateTime, setDateTime] = useState("");

  const convertedTime = useMemo(() => {
    if (!dateTime) return null;

    try {
      const fromDate = new Date(dateTime);
      if (isNaN(fromDate.getTime())) return null;

      const fromTime = fromDate.toLocaleString("en-US", {
        timeZone: fromZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      const toTime = fromDate.toLocaleString("en-US", {
        timeZone: toZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      const fromOffset = getTimezoneOffset(fromZone);
      const toOffset = getTimezoneOffset(toZone);

      return {
        from: fromTime,
        to: toTime,
        fromOffset,
        toOffset,
        difference: toOffset - fromOffset,
      };
    } catch {
      return null;
    }
  }, [dateTime, fromZone, toZone]);

  const getTimezoneOffset = (timeZone: string): number => {
    const now = new Date();
    const utc = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));
    const local = new Date(now.toLocaleString("en-US", { timeZone }));
    return (local.getTime() - utc.getTime()) / (1000 * 60 * 60);
  };

  React.useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    setDateTime(`${year}-${month}-${day}T${hours}:${minutes}`);
  }, []);

  const handleCopy = (text: string) => {
    if (onCopy) {
      onCopy(text);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="datetime" className="text-sm font-medium text-realm-black">
          Date & Time
        </Label>
        <Input
          id="datetime"
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          className="mt-1"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="from-zone" className="text-sm font-medium text-realm-black">
            From Timezone
          </Label>
          <select
            id="from-zone"
            value={fromZone}
            onChange={(e) => setFromZone(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F]"
          >
            {timeZones.map((tz) => (
              <option key={tz.value} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
          {convertedTime && (
            <div className="mt-2 p-3 bg-realm-lightgray rounded-lg">
              <div className="text-sm text-realm-gray">Time</div>
              <div className="text-lg font-semibold text-realm-black">{convertedTime.from}</div>
              <div className="text-xs text-realm-gray mt-1">
                UTC{convertedTime.fromOffset >= 0 ? "+" : ""}
                {convertedTime.fromOffset.toFixed(1)}
              </div>
            </div>
          )}
        </div>

        <div>
          <Label htmlFor="to-zone" className="text-sm font-medium text-realm-black">
            To Timezone
          </Label>
          <select
            id="to-zone"
            value={toZone}
            onChange={(e) => setToZone(e.target.value)}
            className="mt-1 w-full px-3 py-2 border border-realm-lightgray rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F7C4F]"
          >
            {timeZones.map((tz) => (
              <option key={tz.value} value={tz.value}>
                {tz.label}
              </option>
            ))}
          </select>
          {convertedTime && (
            <div className="mt-2 p-3 bg-realm-lightgray rounded-lg">
              <div className="text-sm text-realm-gray">Time</div>
              <div className="text-lg font-semibold text-realm-black">{convertedTime.to}</div>
              <div className="text-xs text-realm-gray mt-1">
                UTC{convertedTime.toOffset >= 0 ? "+" : ""}
                {convertedTime.toOffset.toFixed(1)}
              </div>
            </div>
          )}
        </div>
      </div>

      {convertedTime && (
        <div className="p-4 bg-[#0F7C4F]/10 border border-[#0F7C4F]/20 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-realm-gray">Time Difference</div>
              <div className="text-lg font-semibold text-realm-black">
                {convertedTime.difference >= 0 ? "+" : ""}
                {convertedTime.difference.toFixed(1)} hours
              </div>
            </div>
            <Button
              onClick={() => handleCopy(convertedTime.to)}
              variant="outline"
              className="rounded-full"
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeZoneConverter;
