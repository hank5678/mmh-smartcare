// Single source of truth for route path strings. Referenced by App.jsx (route
// definitions) and anywhere else that links or navigates to a page, so renaming
// a route only requires editing the value here.
export const ROUTES = {
  HOME: "/",
  PROFILE: "/profile",
  SETTINGS: "/settings",
  SETTINGS_SLEEP_SCHEDULE: "/settings/sleep-schedule",
  SETTINGS_UNITS: "/settings/units",
  RECORDS: "/records",

  GLUCOSE: "/metrics/glucose",
  GLUCOSE_NEW: "/metrics/glucose/new",
  SPO2: "/metrics/spo2",
  SPO2_NEW: "/metrics/spo2/new",
  BLOOD_PRESSURE_HEART_RATE: "/metrics/blood-pressure-heart-rate",
  BLOOD_PRESSURE_HEART_RATE_NEW: "/metrics/blood-pressure-heart-rate/new",
  ECG: "/metrics/ecg",
  ECG_RECORD: "/metrics/ecg/record",
  CHOLESTEROL: "/metrics/cholesterol",
  CHOLESTEROL_NEW: "/metrics/cholesterol/new",
  WEIGHT: "/metrics/weight",
  WEIGHT_NEW: "/metrics/weight/new",
  HEIGHT: "/metrics/height",
  HEIGHT_NEW: "/metrics/height/new",
  BODY_FAT: "/metrics/body-fat",
  BODY_FAT_NEW: "/metrics/body-fat/new",
  BMI: "/metrics/bmi",
  WAIST: "/metrics/waist",
  WAIST_NEW: "/metrics/waist/new",
};
