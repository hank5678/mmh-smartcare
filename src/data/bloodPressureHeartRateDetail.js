import HeartPulseIcon from "../assets/icons/HeartPulseIcon.jsx";
import { metrics } from "./metrics.js";

const bp = metrics.find((m) => m.id === "bloodPressure");
const hr = metrics.find((m) => m.id === "heartRate");
const [systolicAvg, diastolicAvg] = bp.averageDisplay.split("/").map(Number);

export const bpHrDetail = {
  title: "血壓、心跳",
  icon: HeartPulseIcon,
  color: "bad",
  filterDefault: "最近 14 天",
  lastReading: "最近一筆：1 天前",
  legend: [
    { label: "過低", color: "#068fff" },
    { label: "良好", color: "#80cb92" },
    { label: "過高", color: "#ff7970" },
  ],
  bloodPressure: {
    systolic: {
      label: "收縮壓",
      stats: [
        { label: "最低", value: Math.min(...bp.systolic), status: "bad" },
        { label: "最高", value: Math.max(...bp.systolic), status: "bad" },
        { label: "平均", value: systolicAvg, status: "bad" },
      ],
    },
    diastolic: {
      label: "舒張壓",
      stats: [
        { label: "最低", value: Math.min(...bp.diastolic), status: "good" },
        { label: "最高", value: Math.max(...bp.diastolic), status: "good" },
        { label: "平均", value: diastolicAvg, status: "good" },
      ],
    },
    status: { good: 1, high: 2, low: 0, total: 3 },
    trend: {
      systolicSeries: bp.systolic,
      diastolicSeries: bp.diastolic,
      yDomain: [0, 150],
    },
  },
  heartRate: {
    stats: [
      { label: "最低", value: Math.min(...hr.series), status: "bad" },
      { label: "最高", value: Math.max(...hr.series), status: "bad" },
      { label: "平均", value: hr.average, status: "bad" },
    ],
    series: hr.series,
    yDomain: [0, 200],
  },
  units: [
    { label: "血壓單位", value: "mmHg" },
    { label: "心跳單位", value: "bpm" },
  ],
};
