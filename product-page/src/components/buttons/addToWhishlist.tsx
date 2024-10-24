import Image from "next/image";


export default function AddToWhishlist() {
  return (
    <button className="flex items-center gap-4 color-[#3AA39F]">
      <Image src={"/svg/heart.svg"} alt="coeur" width={24} height={24} />
      AddToWhishlist
    </button>
  )
}
