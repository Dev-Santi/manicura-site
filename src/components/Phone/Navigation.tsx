import Link from "next/link";
import { dancingScript } from "@/fonts";
import { BsInstagram, BsWhatsapp, BsSuitHeartFill } from "react-icons/bs";

export default function Navigation() {
  return (
    <div className='text-brown-300 flex flex-col items-center gap-5'>
      <div className='relative flex flex-col items-center text-center px-5 pb-3 rounded-xl bg-skin-200 text-brown-300  shadow-xl'>
        <span className='flex items-center justify-center absolute bg-brown-200 text-skin-200 text-2xl w-10 h-10 rounded-full translate-y-[-1.25rem]'>
          <BsSuitHeartFill />
        </span>
        <h2 className={`${dancingScript.className} relative text-[2.1rem] font-extrabold`}>Eleva tu estilo</h2>
        <h3 className='text-[0.8rem] px-4'>Siempre priorizando tu cuidado</h3>
      </div>
      <Links />
      <Social />
    </div>
  );
}

function Links() {
  const classNames = `bg-skin-100 flex items-center w-[9rem] py-1 justify-center rounded-xl text-sm shadow-xl transition-all hover:bg-white`;

  return (
    <div className='flex flex-col gap-5'>
      <Link href='' className={classNames}>
        Recibir catálogo
      </Link>
      <Link href='' className={classNames}>
        Ver galería
      </Link>
      <Link href='' className={classNames}>
        Contactar
      </Link>
    </div>
  );
}

function Social() {
  return (
    <div className='text-white flex gap-12 text-4xl mt-6'>
      <Link
        href='https://www.instagram.com/santii.larrosa'
        target='_blank'
        className='drop-shadow-md transition-all hover:text-brown-100'
      >
        <BsInstagram />
      </Link>
      <Link
        href='https://wa.me/+59897111899'
        target='_blank'
        className='drop-shadow-md transition-all hover:text-brown-100'
      >
        <BsWhatsapp />
      </Link>
    </div>
  );
}
