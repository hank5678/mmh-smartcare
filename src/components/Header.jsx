import { Menu, X } from "lucide-react";
import avatar from "../assets/avatar.png";

export default function Header({ menuOpen = false, onToggleMenu }) {
  return (
    <header className="sticky top-0 z-30 flex h-[60px] w-full items-center justify-between border-b border-border bg-card px-4">
      <button type="button" aria-label={menuOpen ? "關閉選單" : "選單"} onClick={onToggleMenu} className="text-text">
        {menuOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
      </button>
      <p className="text-[16px] tracking-[0.8px] text-text">馬偕智照通</p>
      <button type="button" aria-label="個人檔案" className="size-[37px] overflow-hidden rounded-full ring-2 ring-white shadow-sm">
        <img src={avatar} alt="使用者頭像" className="size-full object-cover" />
      </button>
    </header>
  );
}
