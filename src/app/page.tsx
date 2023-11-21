import Navigation from "@/components/Phone/Navigation";
import Timer from "../components/Phone/Timer";

export default function Home() {
  return (
    <main className='flex flex-col items-center gap-16 '>
      <Timer />
      <Navigation />
    </main>
  );
}
