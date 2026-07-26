import PersonIcon from "../assets/icons/PersonIcon.jsx";
import { CHART_COLORS } from "../components/metric-card/charts/colors.js";

export const cholesterolDetail = {
  title: "膽固醇",
  icon: PersonIcon,
  color: "primary",
  filterDefault: "最近 14 天",
  lastReading: "最近一筆：1 天前",
  legend: [
    { label: "過低", color: "#068fff" },
    { label: "良好", color: "#80cb92" },
    { label: "過高", color: "#ff7970" },
  ],
  groups: [
    {
      label: "總膽固醇",
      stats: [
        { label: "最低", value: 198, status: "good" },
        { label: "最高", value: 206, status: "bad" },
        { label: "平均", value: 200, status: "bad" },
      ],
    },
    {
      label: "高密度脂蛋白(HDL)",
      stats: [
        { label: "最低", value: 45, status: "good" },
        { label: "最高", value: 60, status: "good" },
        { label: "平均", value: 52.5, status: "good" },
      ],
    },
    {
      label: "低密度脂蛋白(LDL)",
      stats: [
        { label: "最低", value: 80, status: "good" },
        { label: "最高", value: 150, status: "bad" },
        { label: "平均", value: 115, status: "good" },
      ],
    },
  ],
  trend: {
    total: [195, 198, 205, 200, 197, 200],
    hdl: [48, 52, 45, 60, 50, 52.5],
    ldl: [110, 105, 130, 150, 95, 115],
    yDomain: [0, 220],
    colors: { total: CHART_COLORS.warn, hdl: CHART_COLORS.primary, ldl: CHART_COLORS.bad },
  },
  unitRow: { label: "單位", value: "mg/dL" },
};
