"use client"

import Header from "@/components/header";
import { GridPattern } from "../public/grid-pattern";
import Footer from "@/components/footer";
import Card from "@/components/card";
import Ellipse from "@/components/Ellipse";

export default function Home() {
  return <main className="w-screen h-screen">
    <GridPattern className="fixed top-0 w-full rotate-180"/>
    <GridPattern className="fixed bottom-0 w-full "/>
    <Header />
    <Footer />
    <section className="flex justify-center flex-col gap-4 h-screen w-full overflow-hidden">
    <Ellipse top={true}/>
    <Ellipse top={false}/>
      <section className="absolute mask-image-custom-gradient webkit-mask-image-custom-gradient z-50 flex justify-center flex-col gap-4 h-2/4 w-full overflow-hidden" />
      <aside className="flex gap-3 items-center justify-center w-full overflow-hidden animate-marquee-vertical">
        <Card pp="picture-3" name="Shoguntoto" user="@thomasdev59" message="C'est une belle plateforme, les explications sont clairs, les maquettes professionnelles." />
        <Card pp="picture-2" name="Shoguntoto" user="@thomasdev59" message="Ezis répond à toutes les questions afin de nous aider le plus possible dans notre objectif." />
        <Card pp="picture-9" name="Hocine" user="@hocine" message="J'aime bien le concept d'avoir une communauté, Ezis est très à l'écoute et n'hésite pas à répondre aux questions." />
        <Card pp="picture-3" name="Youtmax654" user="@youtmax654" message="Je me suis grandement améliorer sur les technologies que j'utilise et sur ma façon de traviller sur un projet." />
        <Card pp="picture-7" name="Baptiste" user="@baptiste_lechat" message="Des projets de qualité avec toutes les ressources dont on aurait besoin pour les réaliser." />
        <Card pp="picture-6" name="Le D" user="@sport_devweb" message="Le fait d'avoir accès à un discord et une communauté fait vraiment la différence." />
      </aside>
      <aside className="flex gap-3 items-center justify-center w-full overflow-hidden">
        <Card pp="picture-9" name="Shoguntoto" user="@thomasdev59" message="Des projets de qualité avec toutes les ressources dont on aurait besoin pour les réaliser." />
        <Card pp="picture-5" name="Lois" user="@loisglld" message="Je suis surpris de la qualité des ressources et de la pertinence du contenu pour lequel je me suis abonné !" />
        <Card pp="picture-6" name="Youtmax654" user="youtmax654" message="Cette idée de challenges est de loin la meilleure que j'ai pu trouver sur internet parmi mes recherches." />
        <Card pp="picture-1" name="LucasQust" user="@LucasQust" message="C’est vraiment lourd, les challenges sont cool, l’environnement qu’Ezis à mit en place est top !" />
        <Card pp="picture-2" name="Jojok63" user="@jojok_63" message="Une communauté très réactive, toujours prête à vous aider quelque soit le sujet." />
        <Card pp="picture-2" name="Eihposenna" user="@eihposenna" message="Ça me fait découvrir pas mal de choses sur Tailwind et les différentes possibilités qui sont offertes." />
        <Card pp="picture-4" name="Shoguntoto" user="@thomasdev59" message="C'est une belle plateforme, les explications sont clairs, les maquettes professionnelles." />
      </aside>
    </section>
  </main>;
}
