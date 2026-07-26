import DropletIcon from "../assets/icons/DropletIcon.jsx";
import HeartPulseIcon from "../assets/icons/HeartPulseIcon.jsx";
import PersonIcon from "../assets/icons/PersonIcon.jsx";

const DATE = "2026年6月27日";
const TIME = "下午 6:00";
const MEAL_PERIOD = "晚餐後";

export const addRecordDetails = {
  glucose: {
    title: "血糖",
    icon: DropletIcon,
    color: "bad",
    hasMealPeriod: true,
    date: DATE,
    time: TIME,
    mealPeriod: MEAL_PERIOD,
    valueFields: ["mg/dL"],
  },
  spo2: {
    title: "血氧",
    icon: DropletIcon,
    color: "bad",
    hasMealPeriod: true,
    date: DATE,
    time: TIME,
    mealPeriod: MEAL_PERIOD,
    valueFields: ["百分比 (%)"],
  },
  bloodPressure: {
    title: "血壓",
    icon: HeartPulseIcon,
    color: "bad",
    hasMealPeriod: true,
    date: DATE,
    time: TIME,
    mealPeriod: MEAL_PERIOD,
    valueFields: ["收縮壓", "舒張壓", "心跳 (bpm)"],
  },
  height: {
    title: "身高",
    icon: PersonIcon,
    color: "primary",
    hasMealPeriod: false,
    date: DATE,
    time: TIME,
    valueFields: ["公分"],
  },
  weight: {
    title: "體重",
    icon: PersonIcon,
    color: "primary",
    hasMealPeriod: false,
    date: DATE,
    time: TIME,
    valueFields: ["公斤"],
  },
  bodyFat: {
    title: "體脂肪率",
    icon: PersonIcon,
    color: "primary",
    hasMealPeriod: false,
    date: DATE,
    time: TIME,
    valueFields: ["百分比 (%)"],
  },
  waist: {
    title: "腰圍",
    icon: PersonIcon,
    color: "primary",
    hasMealPeriod: false,
    date: DATE,
    time: TIME,
    valueFields: ["公分"],
  },
  cholesterol: {
    title: "膽固醇",
    icon: PersonIcon,
    color: "primary",
    hasMealPeriod: false,
    date: DATE,
    time: TIME,
    valueFields: ["總膽固醇", "高密度脂蛋白 (HDL)", "低密度脂蛋白 (LDL)"],
  },
};
