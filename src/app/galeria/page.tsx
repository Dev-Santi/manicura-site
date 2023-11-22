import images from "@/images";
import Image from "next/image";
import Link from "next/link";
import BackBtn from "@/components/BackBtn/BackBtn";

export default function GaleriaPage() {
  return (
    <main className='flex flex-col items-center gap-16 mb-10'>
      <BackBtn href='/' />
      <div className='flex flex-col gap-10 text-black'>
        {images.map((e) => {
          return (
            <Link
              href={`galeria/${e.id}`}
              key={e.id}
              className='h-40 w-40 flex justify-center items-center bg-skin-100 overflow-hidden border-2 border-skin-200 transition-all hover:scale-[1.1] hover:border-white drop-shadow-3xl'
            >
              <Image src={e.src} alt={e.alt} width={400} height={400} />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
