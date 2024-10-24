import Image from "next/image";
import AddToWhishlist from "../buttons/addToWhishlist";
import SocialMedia from "../socialMedia";
import Stars from "../stars";
import Colors from "../colors";
import Counter from "../buttons/counter";
import AddToCard from "../buttons/addToCard";

export default function Text() {
  return (
    <div>
      <Image src={"/svg/back.svg"} alt="arrow" width={24} height={24} />
      <p><span>Chair </span> / Meryl Lounge Chair</p>
      <h1>Meryl Lounge Chair</h1>
      <div className="flex items-center justify-between">
        <p>$149.99</p>
        <Stars />
      </div>
      <p>The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.</p>
      <div>
        <Colors />
      </div>
      <div className="flex items-center gap-6">
        <Counter />
        <AddToCard />
      </div>
      <p>Free 3-5 day shipping  •  Tool-free assembly  •  30-day trial</p>
      <div className="flex justify-between w-full">
        <AddToWhishlist />
        <SocialMedia /></div>
    </div>
  )
}
