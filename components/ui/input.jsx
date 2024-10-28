import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[48px] rounded-md bg-primary font-light border border-white/10 focus:border-accent px-4 py-5 text-base  file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-950 placeholder:text-white/60 outline-none",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
