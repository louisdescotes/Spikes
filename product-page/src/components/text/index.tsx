import Image from "next/image";
import AddToWhishlist from "../buttons/addToWhishlist";
import SocialMedia from "../socialMedia";
import Stars from "../stars";
import Colors from "../colors";
import Counter from "../buttons/counter";
import AddToCard from "../buttons/addToCard";

export default function Text() {
  return (
    <aside className="w-5/12 flex-1">
      <Image src={"/svg/back.svg"} alt="arrow" width={24} height={24} className="pt-14"/>
      <p className=" text-[#17183B] text-sm font-semibold pt-8"><span className=" opacity-40">Chair </span> / Meryl Lounge Chair</p>
      <h1 className="text-5xl text-[#17183B] font-bold pt-[76px]">Meryl Lounge Chair</h1>
      <div className="flex items-center justify-between pt-6">
        <p className="text-2xl text-[#17183B] font-semibold">$149.99</p>
        <Stars />
      </div>
      <p className="pt-12">The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.</p>
      <div className="py-8">
        <Colors />
      </div>
      <div className="flex items-center gap-6">
        <Counter />
        <AddToCard />
      </div>
      <p className="pt-8">Free 3-5 day shipping  •  Tool-free assembly  •  30-day trial</p>
      <div className="flex justify-between w-full pt-14">
        <AddToWhishlist />
        <SocialMedia /></div>
    </aside>
  )
}
