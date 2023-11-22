import BackBtn from "@/components/BackBtn/BackBtn";
import images from "@/images";
import Image from "next/image";
import Link from "next/link";

export default function page({ params }: { params: { id: number } }) {
  const image = images.find((e) => e.id == params.id);

  if (image) {
    return (
      <main className='flex flex-col text-center items-center gap-16'>
        <BackBtn href='/galeria' />
        <div className='flex flex-col items-center gap-4 mb-10'>
          <div className=' border-2 border-skin-200 rounded-xl overflow-hidden'>
            <Image src={image.src} alt={image.alt} width={400} height={400} />
          </div>
          <div className='bg-skin-100 w-full  rounded-xl px-2 py-2 text-brown-300'>
            <h2 className='italic text-sm mb-2'>{`"${image.review}"`}</h2>
            <h3>-{image.owner}</h3>
          </div>
          <Link
            href={`https://api.whatsapp.com/send?phone=+59897111899&text=Me encantó este diseño! Quisiera consultar el precio y los horarios disponibles. https://manicura-site.vercel.app/galeria/${image.id}`}
            className={`bg-skin-100 text-brown-300 flex items-center w-[10rem] py-1 justify-center rounded-xl text-[0.8rem] shadow-xl transition-all hover:bg-purple-100 hover:text-white drop-shadow-3xl`}
          >
            Lo quiero!
          </Link>
        </div>
      </main>
    );
  } else {
    return <h2 className='drop-shadow-3xl'>Error 404: El trabajo que buscas no existe</h2>;
  }
}
