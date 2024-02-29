import React from "react";

export default function Button({children, ...props}) {

   return (
     <button className="px-4 py-2 text-xs md:text-base bg-slate-800 rounded-md text-slate-300 hover:bg-slate-700 hover:text-slate-200 " 
     {...props}
     >
{children}
    </button>

   )

}