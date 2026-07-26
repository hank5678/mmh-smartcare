import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { ROUTES } from "../../routes.js";

export default function FooterLinks({ units = [] }) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-[#d8d8d8] bg-card">
      <Link
        to={ROUTES.RECORDS}
        className="flex items-center justify-between border-b border-[#d8d8d8] px-4 py-4 text-[15px] tracking-[0.75px] text-text last:border-b-0"
      >
        顯示所有資料
        <ChevronRight size={17} className="text-text" />
      </Link>
      {units.map((unit, index) => (
        <Link
          key={unit.label}
          to={ROUTES.SETTINGS_UNITS}
          className={`flex items-center justify-between px-4 py-4 text-[15px] tracking-[0.75px] text-text ${
            index === units.length - 1 ? "" : "border-b border-[#d8d8d8]"
          }`}
        >
          {unit.label}
          <span className="flex items-center gap-1">
            {unit.value}
            <ChevronRight size={17} className="text-text" />
          </span>
        </Link>
      ))}
    </div>
  );
}
