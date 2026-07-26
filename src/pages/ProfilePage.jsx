import { ChevronRight } from "lucide-react";
import TopBar from "../components/TopBar.jsx";
import FormField from "../components/settings/FormField.jsx";
import ConfirmButton from "../components/settings/ConfirmButton.jsx";
import avatar from "../assets/avatar.png";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-page">
      <TopBar title="個人檔案" />
      <main className="w-full space-y-6 px-6 pb-10 pt-6">
        <div className="flex flex-col items-center gap-2">
          <img src={avatar} alt="使用者頭像" className="size-[109px] rounded-full object-cover ring-4 ring-warn" />
          <button type="button" className="text-[16px] text-[#ffab00]">
            編輯照片
          </button>
        </div>

        <FormField label="姓名" defaultValue="劉郁青" tone="readonly" />
        <FormField label="出生日期" defaultValue="2026/06/27" tone="readonly" />
        <FormField label="手機" defaultValue="0912345678" />

        <div>
          <p className="mb-2 text-[16px] text-text">市內電話</p>
          <div className="flex items-center gap-2">
            <div className="flex h-[50px] w-[101px] shrink-0 items-center justify-center rounded-[10px] border border-border bg-white text-[18px] text-muted">
              區碼
            </div>
            <span className="text-[18px] text-text">-</span>
            <div className="flex h-[50px] flex-1 items-center rounded-[10px] border border-border bg-white px-4 text-[18px] text-muted">
              電話號碼
            </div>
          </div>
        </div>

        <div>
          <p className="mb-2 text-[16px] text-text">地址</p>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-[50px] flex-1 items-center justify-between rounded-[10px] border border-border bg-white px-4 text-[18px] text-text"
            >
              請選擇
              <ChevronRight size={17} className="text-muted" />
            </button>
            <button
              type="button"
              className="flex h-[50px] flex-1 items-center justify-between rounded-[10px] border border-border bg-white px-4 text-[18px] text-text"
            >
              請選擇
              <ChevronRight size={17} className="text-muted" />
            </button>
          </div>
          <input
            type="text"
            placeholder="路, 巷, 門牌, 樓層"
            className="mt-2 h-[50px] w-full rounded-[10px] border border-border bg-white px-4 text-[18px] text-text placeholder:text-muted"
          />
        </div>

        <ConfirmButton />
      </main>
    </div>
  );
}
