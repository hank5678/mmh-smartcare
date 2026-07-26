import { RouterProvider, createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import HomePage from "./pages/HomePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import SleepScheduleSettingsPage from "./pages/SleepScheduleSettingsPage.jsx";
import UnitsSettingsPage from "./pages/UnitsSettingsPage.jsx";
import GlucoseDetailPage from "./pages/GlucoseDetailPage.jsx";
import Spo2DetailPage from "./pages/Spo2DetailPage.jsx";
import BloodPressureHeartRateDetailPage from "./pages/BloodPressureHeartRateDetailPage.jsx";
import EcgDetailPage from "./pages/EcgDetailPage.jsx";
import EcgRecordDetailPage from "./pages/EcgRecordDetailPage.jsx";
import CholesterolDetailPage from "./pages/CholesterolDetailPage.jsx";
import SimpleMetricDetailPage from "./pages/SimpleMetricDetailPage.jsx";
import AddRecordPage from "./pages/AddRecordPage.jsx";
import AllRecordsPage from "./pages/AllRecordsPage.jsx";
import { simpleMetricDetails } from "./data/simpleMetricDetails.js";
import { addRecordDetails } from "./data/addRecordDetails.js";
import { ROUTES } from "./routes.js";

// Flat path -> component table. Adding a page only needs one line here.
const routeDefinitions = [
  { path: ROUTES.HOME, component: HomePage },
  { path: ROUTES.PROFILE, component: ProfilePage },
  { path: ROUTES.SETTINGS, component: SettingsPage },
  { path: ROUTES.SETTINGS_SLEEP_SCHEDULE, component: SleepScheduleSettingsPage },
  { path: ROUTES.SETTINGS_UNITS, component: UnitsSettingsPage },
  { path: ROUTES.RECORDS, component: AllRecordsPage },
  { path: ROUTES.GLUCOSE, component: GlucoseDetailPage },
  { path: ROUTES.SPO2, component: Spo2DetailPage },
  { path: ROUTES.BLOOD_PRESSURE_HEART_RATE, component: BloodPressureHeartRateDetailPage },
  { path: ROUTES.ECG, component: EcgDetailPage },
  { path: ROUTES.ECG_RECORD, component: EcgRecordDetailPage },
  { path: ROUTES.CHOLESTEROL, component: CholesterolDetailPage },
  { path: ROUTES.WEIGHT, component: () => <SimpleMetricDetailPage config={simpleMetricDetails.weight} /> },
  { path: ROUTES.HEIGHT, component: () => <SimpleMetricDetailPage config={simpleMetricDetails.height} /> },
  { path: ROUTES.BODY_FAT, component: () => <SimpleMetricDetailPage config={simpleMetricDetails.bodyFat} /> },
  { path: ROUTES.BMI, component: () => <SimpleMetricDetailPage config={simpleMetricDetails.bmi} /> },
  { path: ROUTES.WAIST, component: () => <SimpleMetricDetailPage config={simpleMetricDetails.waist} /> },
  { path: ROUTES.GLUCOSE_NEW, component: () => <AddRecordPage config={addRecordDetails.glucose} /> },
  { path: ROUTES.SPO2_NEW, component: () => <AddRecordPage config={addRecordDetails.spo2} /> },
  {
    path: ROUTES.BLOOD_PRESSURE_HEART_RATE_NEW,
    component: () => <AddRecordPage config={addRecordDetails.bloodPressure} />,
  },
  { path: ROUTES.HEIGHT_NEW, component: () => <AddRecordPage config={addRecordDetails.height} /> },
  { path: ROUTES.WEIGHT_NEW, component: () => <AddRecordPage config={addRecordDetails.weight} /> },
  { path: ROUTES.BODY_FAT_NEW, component: () => <AddRecordPage config={addRecordDetails.bodyFat} /> },
  { path: ROUTES.WAIST_NEW, component: () => <AddRecordPage config={addRecordDetails.waist} /> },
  { path: ROUTES.CHOLESTEROL_NEW, component: () => <AddRecordPage config={addRecordDetails.cholesterol} /> },
];

const rootRoute = createRootRoute();
const routeTree = rootRoute.addChildren(
  routeDefinitions.map(({ path, component }) => createRoute({ getParentRoute: () => rootRoute, path, component })),
);
const router = createRouter({ routeTree });

export default function App() {
  return <RouterProvider router={router} />;
}
