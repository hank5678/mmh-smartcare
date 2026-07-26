// Single source for the icon glyph colors used both by the tinted home-page
// badges (IconBadge) and the bare detail-page icons (SectionCard). Tailwind
// needs the literal `text-[#...]` strings to appear somewhere in scanned
// source, so keep these as class strings rather than raw hex values.
export const ICON_TEXT_COLOR = {
  primary: "text-[#008EDB]",
  bad: "text-[#F55757]",
};
