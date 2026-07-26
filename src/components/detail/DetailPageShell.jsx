import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import TopBar from "../TopBar.jsx";
import TimeRangeFilter from "../filters/TimeRangeFilter.jsx";
import LastReadingLegend from "./LastReadingLegend.jsx";
import FooterLinks from "./FooterLinks.jsx";

// Shared outer shell for metric detail pages: TopBar + last-reading legend +
// time-range filter + footer links. Page-specific SectionCards are passed as children.
export default function DetailPageShell({
  title,
  filterDefault,
  lastReading,
  legend,
  newRecordRoute,
  footerUnits = [],
  children,
}) {
  const navigate = useNavigate();
  const [range, setRange] = useState(filterDefault);

  return (
    <div className="min-h-screen bg-page">
      <TopBar
        title={title}
        showConfirm={false}
        rightIcon={newRecordRoute ? Plus : undefined}
        onRightClick={newRecordRoute ? () => navigate({ to: newRecordRoute }) : undefined}
      />
      <main className="w-full space-y-4 px-2 pb-8 pt-4">
        <LastReadingLegend lastReading={lastReading} legend={legend} />
        <TimeRangeFilter value={range} onChange={setRange} />
        {children}
        <FooterLinks units={footerUnits} />
      </main>
    </div>
  );
}
