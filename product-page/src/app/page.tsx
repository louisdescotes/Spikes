"use client"
import Carousel from "@/components/carousel";
import Header from "@/components/headers";
import Text from "@/components/text";

export default function page() {
  return (
    <section className=" block w-screen h-screen">
      <Header />
      <aside className="flex gap-10 flex-1 justify-between  h-full px-20">
        <Text />
        <Carousel />
      </aside>
    </section>
  )
}
