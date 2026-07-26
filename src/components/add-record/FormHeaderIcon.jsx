const COLORS = {
  bad: "text-[#F55757]",
  primary: "text-[#008EDB]",
};

export default function FormHeaderIcon({ icon: Icon, color, title }) {
  return (
    <div className="flex flex-col items-center gap-3 py-4">
      <div className="flex size-[74px] items-center justify-center rounded-full bg-[#ffeaca]">
        <Icon size={36} className={COLORS[color]} />
      </div>
      <h2 className="text-[24px] text-[#20262e]">{title}</h2>
    </div>
  );
}
