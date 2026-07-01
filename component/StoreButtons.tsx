import { Apple, Play } from "lucide-react";

export function StoreButtons({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const base =
    "group flex items-center gap-3 rounded-2xl px-5 py-3 transition-all hover:scale-[1.03] shadow-soft";
  const styles =
    variant === "dark"
      ? "bg-blue-950 text-primary-foreground hover:shadow-elegant"
      : "bg-blue-950 text-background hover:bg-[#fdc604] hover:text-black hover:shadow-elegant";
  return (
    <div className="flex flex-wrap gap-3">
      <a href="#" className={`${base} ${styles} `} aria-label="Download on the App Store">
        <Apple className="h-7 w-7" />
        <div className="text-left leading-tight">
          <div className="text-[10px] opacity-80"><p>Download on the</p></div>
          <div className="text-base font-semibold"><p>App Store</p></div>
        </div>
      </a>
      <a href="#" className={`${base} ${styles}`} aria-label="Get it on Google Play">
        <Play className="h-6 w-6 fill-current" />
        <div className="text-left leading-tight">
          <div className="text-[10px] opacity-80"><p>GET IT ON</p></div>
          <div className="text-base font-semibold"><p>Google Play</p></div>
        </div>
      </a>
    </div>
  );
}
