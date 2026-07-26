import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Settings, User } from "lucide-react";
import IconBadge from "../metric-card/IconBadge.jsx";
import { menuHealthItems } from "../../data/menu.js";
import { ROUTES } from "../../routes.js";

export default function MenuDrawer({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className={`fixed inset-x-0 bottom-0 top-[60px] z-20 ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
      <button
        type="button"
        aria-label="關閉選單"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
        className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ease-out ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <nav
        className={`relative h-full w-[85%] max-w-[340px] overflow-y-auto bg-card shadow-xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <p className="px-4 pb-2 pt-4 text-[15px] tracking-[0.75px] text-muted">健康項目</p>
        {menuHealthItems.map((item) => {
          const Row = item.to ? Link : "div";
          const rowProps = item.to ? { to: item.to, onClick: onClose } : {};
          return (
            <Row
              key={item.id}
              {...rowProps}
              tabIndex={open ? undefined : -1}
              className="flex h-[57px] items-center gap-3 border-b border-border px-4"
            >
              <IconBadge icon={item.icon} color={item.color} variant="tinted" />
              <span className="text-[18px] tracking-[0.9px] text-text">{item.label}</span>
            </Row>
          );
        })}

        <p className="px-4 pb-2 pt-4 text-[15px] tracking-[0.75px] text-muted">其他</p>
        <Link
          to={ROUTES.PROFILE}
          onClick={onClose}
          tabIndex={open ? undefined : -1}
          className="flex h-[57px] items-center gap-3 border-b border-border px-4"
        >
          <User size={24} strokeWidth={1.75} className="text-text" />
          <span className="text-[18px] tracking-[0.9px] text-text">個人檔案</span>
        </Link>
        <Link
          to={ROUTES.SETTINGS}
          onClick={onClose}
          tabIndex={open ? undefined : -1}
          className="flex h-[57px] items-center gap-3 border-b border-border px-4"
        >
          <Settings size={24} strokeWidth={1.75} className="text-text" />
          <span className="text-[18px] tracking-[0.9px] text-text">設定</span>
        </Link>
      </nav>
    </div>
  );
}
