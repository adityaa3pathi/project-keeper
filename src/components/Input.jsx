import React from "react";
import { forwardRef } from "react";

 const Input = forwardRef(function Input( {isTextArea, field, type}, ref ) {


const inputClass =" w-full p-1 border-b-2 rounded-r-sm border-stone-300 bg-stone-200 text-zinc-600 focus:outline-none focus:border-stone-600"

    return(
       <p className="flex flex-col gap-1 my-4" >
        <label className="uppercase text-zinc-600 font-bold text-sm">{field}</label>
        { isTextArea ? 
        <textarea className= {inputClass}
        ref={ref} />  
        :
         <input type={type} ref={ref} className= {inputClass} />
        }
        </p>
    )

})

export default Input