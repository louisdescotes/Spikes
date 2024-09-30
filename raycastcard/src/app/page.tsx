import Card from "./card";

export default function Home() {
  return (
    <section className="flex justify-center items-center h-screen gap-8">
    <Card img="raycast_bg_1.png" title="Raycast Wallpaper #1" description="Recreate this wallpaper using AI." premium={true}/>
    <Card img="raycast_bg_2.png" title="Raycast Wallpaper #2" description="Recreate this wallpaper using AI." premium={true}/>
    <Card img="raycast_bg_3.png" title="Raycast Wallpaper #3" description="Recreate this wallpaper using AI." premium={true}/>
    </section>
  );
}
