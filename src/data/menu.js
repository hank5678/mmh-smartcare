import DropletIcon from "../assets/icons/DropletIcon.jsx";
import HeartPulseIcon from "../assets/icons/HeartPulseIcon.jsx";
import PersonIcon from "../assets/icons/PersonIcon.jsx";
import { ROUTES } from "../routes.js";

export const menuHealthItems = [
  { id: "glucose", label: "血糖", icon: DropletIcon, color: "bad", to: ROUTES.GLUCOSE },
  { id: "spo2", label: "血氧", icon: DropletIcon, color: "bad", to: ROUTES.SPO2 },
  {
    id: "bloodPressureHeartRate",
    label: "血壓、心跳",
    icon: HeartPulseIcon,
    color: "bad",
    to: ROUTES.BLOOD_PRESSURE_HEART_RATE,
  },
  { id: "ecg", label: "心電圖", icon: HeartPulseIcon, color: "bad", to: ROUTES.ECG },
  { id: "height", label: "身高", icon: PersonIcon, color: "primary", to: ROUTES.HEIGHT },
  { id: "weightBodyFat", label: "體重、體脂肪", icon: PersonIcon, color: "primary", to: ROUTES.WEIGHT },
  { id: "bmi", label: "身體質量指數(BMI)", icon: PersonIcon, color: "primary", to: ROUTES.BMI },
  { id: "waist", label: "腰圍", icon: PersonIcon, color: "primary", to: ROUTES.WAIST },
  { id: "cholesterol", label: "膽固醇", icon: PersonIcon, color: "primary", to: ROUTES.CHOLESTEROL },
];
