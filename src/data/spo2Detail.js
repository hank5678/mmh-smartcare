import DropletIcon from "../assets/icons/DropletIcon.jsx";

export const spo2Detail = {
  title: "血氧",
  icon: DropletIcon,
  color: "bad",
  filterDefault: "最近 7 天",
  lastReading: "最近一筆：今天 19:30",
  legend: [
    { label: "過低", color: "#068fff" },
    { label: "良好", color: "#80cb92" },
    { label: "過高", color: "#ff7970" },
  ],
  stats: [
    { label: "最低", value: 77, status: "bad" },
    { label: "最高", value: 100, status: "good" },
    { label: "平均", value: 95.8, status: "good" },
  ],
  info: [
    { label: "總紀錄時間：", value: "7 天" },
    { label: "血氧下降 >= 3% 次數：", value: "32" },
    { label: "血氧下降 >= 4% 次數：", value: "25" },
    { label: "血氧 < 90% 時間：", value: "183 秒" },
  ],
  series: [89, 94, 92, 96, 90, 97],
  yDomain: [80, 100],
  unitRow: { label: "單位", value: "百分比 (%)" },
};
