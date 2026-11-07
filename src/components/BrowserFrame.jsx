export default function BrowserFrame({ children, className = "" }) {
  return (
    <div className={"overflow-hidden rounded-2xl border border-violet-200/70 bg-white shadow-[0_40px_100px_rgba(109,76,240,0.25)] " + className}>
      <div className="flex items-center gap-1.5 border-b border-violet-100 bg-mist px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
      </div>
      {children}
    </div>
  );
}
