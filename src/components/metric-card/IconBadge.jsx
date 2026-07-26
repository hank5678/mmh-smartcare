import { ICON_TEXT_COLOR } from "../../theme/iconColors.js";

const BG = {
  primary: "bg-primary",
  bad: "bg-bad",
};

export default function IconBadge({ icon: Icon, color = "primary", variant = "filled" }) {
  const tinted = variant === "tinted";

  return (
    <div
      className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
        tinted ? `bg-[#f6f6f6] ${ICON_TEXT_COLOR[color]}` : `${BG[color]} text-white`
      }`}
    >
      <Icon size={18} strokeWidth={2} />
    </div>
  );
}
