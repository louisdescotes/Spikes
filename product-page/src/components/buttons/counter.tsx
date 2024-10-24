"use client"
import Image from "next/image";
import { useState } from "react";

export default function Counter() {
    const [number, setNumber] = useState(1)
  return (
    <div className="flex gap-10 p-3 items-center justify-center w-fit border border-[#A2A3B1] rounded ">
      <Image className="cursor-pointer" src={"/svg/minus.svg"} alt="minus" width={20} height={20} onClick={() => setNumber(number > 0 ? number - 1 : number)} />
      {number}
      <Image className="cursor-pointer" src={"/svg/plus.svg"} alt="minus" width={20} height={20} onClick={() => setNumber(number + 1 )}/>
    </div>
  )
}
