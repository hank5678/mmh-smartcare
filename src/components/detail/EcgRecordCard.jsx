import { Link } from "@tanstack/react-router";
import { ChevronRight, Clock, Heart } from "lucide-react";
import HeartPulseIcon from "../../assets/icons/HeartPulseIcon.jsx";
import ecgWave from "../../assets/icons/ecg-wave.svg";
import { ROUTES } from "../../routes.js";

export default function EcgRecordCard({ rhythm, timestamp, avgBpm, duration }) {
  return (
    <Link to={ROUTES.ECG_RECORD} className="block rounded-[10px] border border-[#d8d8d8] bg-card p-4">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-[18px] text-text">
          <HeartPulseIcon size={20} className="text-bad" />
          {rhythm}
        </span>
        <span className="flex items-center gap-1 text-[14px] text-[#2c3333]">
          {timestamp}
          <ChevronRight size={16} />
        </span>
      </div>
      <div className="mt-4 flex items-center gap-4 text-[14px] text-[#2c3333]">
        <span className="flex items-center gap-1.5">
          <Heart size={16} className="fill-bad text-bad" />
          平均 {avgBpm}下/分
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={16} />
          {duration}
        </span>
      </div>
      <div className="mt-3 overflow-hidden rounded-[5px] border border-warn bg-page">
        <img src={ecgWave} alt="心電圖波形" className="h-[72px] w-full" />
      </div>
    </Link>
  );
}
