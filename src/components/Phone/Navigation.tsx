"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { dancingScript } from "@/fonts";
import { BsInstagram, BsWhatsapp, BsSuitHeartFill } from "react-icons/bs";

export default function Navigation() {
  const router = useRouter();
  const [triggerAnim, setTriggerAnim] = useState("");

  return (
    <div className={"text-brown-300 flex flex-col items-center gap-5 transition-all duration-1000" + " " + triggerAnim}>
      <div className='relative flex flex-col items-center text-center px-5 pb-3 rounded-xl bg-skin-200 text-brown-300  shadow-xl'>
        <span className='flex items-center justify-center absolute bg-brown-200 text-skin-200 text-2xl w-10 h-10 rounded-full translate-y-[-1.25rem]'>
          <BsSuitHeartFill />
        </span>
        <h2 className={`${dancingScript.className} relative text-[2.1rem] font-extrabold`}>Eleva tu estilo</h2>
        <h3 className='text-[0.8rem] px-4'>Siempre priorizando tu cuidado</h3>
      </div>
      <Links router={router} setTriggerAnim={setTriggerAnim} />
      <Social />
    </div>
  );
}

function Links({ router, setTriggerAnim }: any) {
  const classNames = `bg-skin-100 flex items-center w-[10rem] py-1 justify-center rounded-xl text-[0.8rem] shadow-xl transition-all hover:bg-purple-100 hover:text-white`;

  function handleClick() {
    setTriggerAnim("translate-x-[20rem]");
    setTimeout(function () {
      router.push("/galeria");
    }, 1000);
  }

  return (
    <div className='flex flex-col gap-5'>
      <Link href='/catalogo.pdf' target='_blank' className={classNames} download>
        Descargar Catálogo
      </Link>
      <button type='button' onClick={handleClick} className={classNames}>
        Ver galería
      </button>
      <button className={classNames}>Contactar</button>
    </div>
  );
}

function Social() {
  return (
    <div className='text-brown-200 flex gap-8 text-xl mt-4'>
      <Link
        href='https://www.instagram.com/santii.larrosa'
        target='_blank'
        className='bg-white rounded-full p-[0.6rem] drop-shadow-md transition-all flex items-center justify-center hover:text-white hover:bg-purple-100'
      >
        <BsInstagram className='relative' />
      </Link>
      <Link
        href='https://wa.me/+59897111899'
        target='_blank'
        className='bg-white rounded-full p-[0.6rem] drop-shadow-md transition-all flex items-center justify-center hover:text-white hover:bg-purple-100'
      >
        <BsWhatsapp className='relative' />
      </Link>
    </div>
  );
}
