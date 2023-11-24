import BackBtn from "@/components/BackBtn/BackBtn";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export default function page() {
  return (
    <div className='flex flex-col items-center gap-16'>
      <BackBtn href='/' />
      <div className='bg-skin-100 w-full rounded-xl px-2 py-3 text-brown-300 mb-10'>
        <div className=' border-2 border-skin-200 rounded-xl overflow-hidden mb-6'>
          <Image
            src='/examples/about-1.jpg'
            alt='Foto de una chica con un atardecer de fondo'
            width={400}
            height={400}
          />
        </div>
        Hey! Mi nombre es [Tu Nombre], soy una apasionada especialista en manicura que se compromete
        a brindarte una experiencia única de cuidado y embellecimiento de uñas. <br /> Puedes
        contactarte conmigo a través de mis redes sociales:
        <div className='text-skin-100 flex flex-col gap-2 text-2xl mt-4'>
          <Link
            href='https://www.instagram.com/santii.larrosa'
            target='_blank'
            className='bg-brown-300 rounded-2xl p-2 drop-shadow-md transition-all flex items-center justify-center hover:text-white hover:bg-purple-100'
          >
            <BsInstagram className='relative' />
          </Link>
          <Link
            href='https://wa.me/+59897111899'
            target='_blank'
            className='bg-brown-300 rounded-2xl p-2 drop-shadow-md transition-all flex items-center justify-center hover:text-white hover:bg-purple-100'
          >
            <BsWhatsapp className='relative' />
          </Link>
        </div>
      </div>
    </div>
  );
}
