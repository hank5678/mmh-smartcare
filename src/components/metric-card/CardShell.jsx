import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import IconBadge from "./IconBadge.jsx";

export default function CardShell({ icon, color = "primary", title, trailing = "14 天內", to, children }) {
  const Wrapper = to ? Link : "section";
  const wrapperProps = to ? { to } : {};

  return (
    <Wrapper {...wrapperProps} className="block overflow-hidden rounded-[10px] bg-card">
      <div className="flex items-center gap-3 px-4 pt-4">
        <IconBadge icon={icon} color={color} variant="tinted" />
        <h3 className="flex-1 text-[18px] tracking-[0.9px] text-text">{title}</h3>
        <div className="flex items-center gap-1 text-[14px] text-text">
          <span>{trailing}</span>
          <ChevronRight size={17} strokeWidth={2} className="text-text" />
        </div>
      </div>
      {children}
    </Wrapper>
  );
}
