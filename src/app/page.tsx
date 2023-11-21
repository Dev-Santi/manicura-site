import Timer from "../components/Phone/Timer";
import { Navigation } from "../components/Phone/Navigation";

export default function Home() {
  return (
    <main className='flex flex-col items-center gap-16 '>
      <Timer />
      <Navigation />
    </main>
  );
}
