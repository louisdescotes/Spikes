import Image from "next/image";

export default function SocialMedia() {
  return (
    <div className="flex items-center gap-6">
      <Image src={"/svg/facebook.svg"} height={16} width={16} alt=""/>
      <Image src={"/svg/twitter.svg"} height={16} width={16} alt=""/>
      <Image src={"/svg/pinterest.svg"} height={16} width={16} alt=""/>
      <Image src={"/svg/instagram.svg"} height={16} width={16} alt=""/>
    </div>
  )
}
