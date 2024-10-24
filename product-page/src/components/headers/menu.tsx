import Image from "next/image";

export default function Menu() {
  return (
    <nav className="flex items-center justify-between px-10 py-4">
      <div>
        <Image src={"/logo.svg"} width={70} height={40} alt="logo"/>
      </div>
      <div className="flex items-center gap-10">
        <a href="#">SHOP</a>
        <a href="#">COLLECTIVE</a>
        <a href="#">DESIGNERS</a>
        <a href="#">ABOUT US</a>
        <a href="#">CONTACT</a>
      </div>
      <div className="flex items-center gap-10">
        <Image src={"/svg/menu.svg"} height={24} width={24} alt="menu" />
        <Image src={"/svg/search.svg"} height={24} width={24} alt="menu" />
        <div className="bg-[#D1D1D8] h-full w-0.5"/>
        <Image src={"/svg/shopping-cart.svg"} height={24} width={24} alt="menu" />
      </div>
    </nav>
  )
}
