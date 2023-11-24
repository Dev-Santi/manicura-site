import Link from "next/link";
import { dancingScript } from "@/fonts";
import { BsInstagram, BsWhatsapp, BsSuitHeartFill } from "react-icons/bs";

export default function Navigation() {
  return (
    <div className='text-brown-300 flex flex-col items-center gap-5 transition-all duration-1000'>
      <div className='relative flex flex-col items-center text-center px-5 pb-3 rounded-xl bg-skin-100 text-brown-300  shadow-xl'>
        <span className='flex items-center justify-center absolute bg-brown-200 text-skin-200 text-2xl w-10 h-10 rounded-full translate-y-[-1.25rem]'>
          <BsSuitHeartFill />
        </span>
        <h2 className={`${dancingScript.className} relative text-[2.1rem] font-extrabold`}>
          Eleva tu estilo
        </h2>
        <h3 className='text-sm px-4'>Siempre priorizando tu cuidado</h3>
      </div>
      <Links />
      <Social />
    </div>
  );
}

function Links() {
  const classNames = `bg-skin-200 flex items-center w-[12rem] py-2 justify-center rounded-xl text-sm shadow-xl transition-all hover:bg-purple-100 hover:text-white`;

  return (
    <div className='flex flex-col gap-5'>
      <Link href='/catalogo.pdf' target='_blank' className={classNames} download>
        Descargar Catálogo
      </Link>
      <Link href='/galeria' className={classNames}>
        Ver galería
      </Link>
      <Link href='/sobre-mi' className={classNames}>
        Sobre mi
      </Link>
    </div>
  );
}

function Social() {
  return (
    <div className='text-brown-300 flex gap-8 text-2xl mt-2'>
      <Link
        href='https://www.instagram.com/santii.larrosa'
        target='_blank'
        className='bg-skin-200 rounded-2xl p-2 drop-shadow-md transition-all flex items-center justify-center hover:text-white hover:bg-purple-100'
      >
        <BsInstagram className='relative' />
      </Link>
      <Link
        href='https://wa.me/+59897111899'
        target='_blank'
        className='bg-skin-200 rounded-2xl p-2 drop-shadow-md transition-all flex items-center justify-center hover:text-white hover:bg-purple-100'
      >
        <BsWhatsapp className='relative' />
      </Link>
    </div>
  );
}
