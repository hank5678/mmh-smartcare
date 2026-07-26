import PersonIcon from "../assets/icons/PersonIcon.jsx";
import { metrics } from "./metrics.js";
import { ROUTES } from "../routes.js";

const STANDARD_LEGEND = [
  { label: "過低", color: "#068fff" },
  { label: "良好", color: "#80cb92" },
  { label: "過高", color: "#ff7970" },
];

const findMetric = (id) => metrics.find((m) => m.id === id);

// Derives stats/series from the same metric entry shown on the home page, so the
// two screens can never drift apart the way they did when each was hand-typed separately.
function fromHomeMetric(id, { title, yDomain, unitRow, newRecordRoute, lowStatus = "good", highStatus = "bad" }) {
  const home = findMetric(id);
  const series = home.series;
  const low = Math.min(...series);
  const high = Math.max(...series);

  return {
    title,
    icon: PersonIcon,
    color: "primary",
    filterDefault: "最近 14 天",
    lastReading: "最近一筆：1 天前",
    legend: STANDARD_LEGEND,
    stats: [
      { label: "最低", value: low, status: lowStatus },
      { label: "最高", value: high, status: highStatus },
      { label: "平均", value: home.average, status: highStatus },
    ],
    series,
    yDomain,
    unitRow,
    newRecordRoute,
  };
}

export const simpleMetricDetails = {
  weight: fromHomeMetric("weight", {
    title: "體重",
    yDomain: [75, 79],
    unitRow: { label: "單位", value: "公斤" },
    newRecordRoute: ROUTES.WEIGHT_NEW,
  }),
  height: {
    title: "身高",
    icon: PersonIcon,
    color: "primary",
    filterDefault: "最近 14 天",
    lastReading: "最近一筆：1 天前",
    legend: STANDARD_LEGEND,
    stats: [
      { label: "最低", value: 167.3, status: "good" },
      { label: "最高", value: 168, status: "bad" },
      { label: "平均", value: 167.7, status: "bad" },
    ],
    series: [167.3, 167.5, 167.8, 168, 167.6, 167.7],
    yDomain: [150, 172],
    unitRow: { label: "單位", value: "公分" },
    newRecordRoute: ROUTES.HEIGHT_NEW,
  },
  bodyFat: fromHomeMetric("bodyFat", {
    title: "體脂肪率",
    yDomain: [10, 20],
    unitRow: { label: "單位", value: "百分比 (%)" },
    newRecordRoute: ROUTES.BODY_FAT_NEW,
    highStatus: "good",
  }),
  bmi: fromHomeMetric("bmi", {
    title: "身體質量指數(BMI)",
    yDomain: [20, 30],
    unitRow: null,
    highStatus: "good",
  }),
  waist: fromHomeMetric("waist", {
    title: "腰圍",
    yDomain: [75, 85],
    unitRow: { label: "單位", value: "公分" },
    newRecordRoute: ROUTES.WAIST_NEW,
    highStatus: "good",
  }),
};
