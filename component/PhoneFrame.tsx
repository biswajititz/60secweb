import type { ReactNode } from "react";

export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-70 ${className}`}>
      <div className="relative rounded-[2.5rem] bg-foreground p-2 shadow-elegant">
        {/* <div className="relative overflow-hidden rounded-4xl bg-background aspect-9/19">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground" />
          {children}
        </div> */}
        {children}
      </div>
    </div>
  );
}
