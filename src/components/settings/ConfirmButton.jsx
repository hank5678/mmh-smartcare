import { useSafeBack } from "../../hooks/useSafeBack.js";

export default function ConfirmButton({ children = "確認", onClick }) {
  const safeBack = useSafeBack();

  return (
    <button
      type="button"
      onClick={onClick ?? safeBack}
      className="h-[50px] w-full rounded-full bg-warn text-[17px] text-white"
    >
      {children}
    </button>
  );
}
