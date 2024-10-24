"use client"
import Carousel from "@/components/carousel";
import Header from "@/components/headers";
import Text from "@/components/text";

export default function page() {
  return (
    <section className="w-screen h-screen">
      <Header />
      <aside className="px-20">
        <Text />
        <Carousel />
      </aside>
    </section>
  )
}
