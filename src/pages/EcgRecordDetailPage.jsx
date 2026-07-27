import { Heart } from "lucide-react";
import TopBar from "../components/TopBar.jsx";
import EcgWaveChart from "../components/metric-card/charts/EcgWaveChart.jsx";
import { ecgRecordDetail as d } from "../data/ecgDetail.js";

export default function EcgRecordDetailPage() {
  return (
    <div className="min-h-screen bg-page">
      <TopBar title="心電圖詳細資訊" showConfirm={false} />
      <main className="w-full space-y-4 px-6 pb-8 pt-6">
        <div className="flex items-center gap-3">
          <h2 className="text-[24px] text-text">{d.rhythm}</h2>
          <span className="rounded-full bg-[#2db9b0] px-3 py-1 text-[14px] text-white">{d.status}</span>
        </div>
        <p className="text-[16px] text-text">{d.datetime}</p>

        <div className="overflow-hidden rounded-[10px] border border-[#d8d8d8] bg-card p-4">
          <EcgWaveChart data={d.waveform} height={140} />
        </div>

        <div className="flex items-center gap-1.5 text-[16px] text-[#2c3333]">
          <Heart size={18} className="fill-bad text-bad" />
          平均 {d.avgBpm}下/分
        </div>
      </main>
    </div>
  );
}
