import Image from "next/image";

export default function Carousel() {
  const images = [
    "/one.png",
    "/two.png",
    "/three.png",
    "/four.png",
    "/five.png",
  ];
  return (
    <section className=" w-5/12 flex-1">
      <aside className="flex items-center justify-center">
        <Image src={images[0]} alt="" width={400} height={400} />
      </aside>
      <aside className="flex items-center justify-between gap-4">
        {images.map((item, index) => (
        <div key={index} className="flex-1 rounded-md border-2 border-[#D1D1D8] bg-white p-2 w-full">
          <Image src={item} alt="" width={88} height={88} />
        </div>
        ))}
      </aside>
    </section>
  );
}
