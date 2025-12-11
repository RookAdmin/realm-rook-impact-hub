import React, { useState, useMemo } from "react";
import { Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AgeCalculatorProps {
  onCopy?: (text: string) => void;
}

const AgeCalculator: React.FC<AgeCalculatorProps> = ({ onCopy }) => {
  const [birthDate, setBirthDate] = useState("");
  const [targetDate, setTargetDate] = useState("");

  const age = useMemo(() => {
    if (!birthDate) return null;

    const birth = new Date(birthDate);
    const target = targetDate ? new Date(targetDate) : new Date();

    if (isNaN(birth.getTime()) || isNaN(target.getTime())) return null;
    if (birth > target) return null;

    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(target.getFullYear(), target.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor((target.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;

    return {
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      totalMonths,
    };
  }, [birthDate, targetDate]);

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="birth-date" className="text-sm font-medium text-realm-black">
            Birth Date *
          </Label>
          <div className="relative mt-1">
            <Input
              id="birth-date"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="target-date" className="text-sm font-medium text-realm-black">
            Calculate Age On (Optional)
          </Label>
          <Input
            id="target-date"
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            className="mt-1 w-full"
          />
          {targetDate && (
            <button
              onClick={() => setTargetDate("")}
              className="text-xs text-realm-gray mt-1 hover:text-realm-black"
            >
              Use today
            </button>
          )}
        </div>
      </div>

      {age && (
        <div className="space-y-4">
          <div className="p-6 bg-realm-lightgray rounded-lg">
            <div className="text-4xl font-bold text-realm-black mb-2">
              {age.years} {age.years === 1 ? "Year" : "Years"}
            </div>
            <div className="text-lg text-realm-gray">
              {age.months} {age.months === 1 ? "Month" : "Months"}, {age.days}{" "}
              {age.days === 1 ? "Day" : "Days"}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white border border-realm-lightgray rounded-lg">
              <div className="text-2xl font-bold text-realm-black">{age.totalMonths}</div>
              <div className="text-sm text-realm-gray">Total Months</div>
            </div>
            <div className="p-4 bg-white border border-realm-lightgray rounded-lg">
              <div className="text-2xl font-bold text-realm-black">{age.totalWeeks}</div>
              <div className="text-sm text-realm-gray">Total Weeks</div>
            </div>
            <div className="p-4 bg-white border border-realm-lightgray rounded-lg">
              <div className="text-2xl font-bold text-realm-black">{age.totalDays}</div>
              <div className="text-sm text-realm-gray">Total Days</div>
            </div>
            <div className="p-4 bg-white border border-realm-lightgray rounded-lg">
              <div className="text-2xl font-bold text-realm-black">
                {Math.floor(age.totalDays / 365.25)}
              </div>
              <div className="text-sm text-realm-gray">Years (Precise)</div>
            </div>
          </div>
        </div>
      )}

      {birthDate && !age && (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
          Please enter a valid birth date.
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
