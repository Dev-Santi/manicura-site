import Link from "next/link";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function BackBtn({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className='bg-skin-200 py-1 text-brown-300 w-fit px-14 rounded-xl flex items-center gap-2 drop-shadow-3xl transition-all hover:text-white hover:bg-purple-100'
    >
      <span className='absolute translate-x-[-2rem]'>
        <BsArrowLeftCircle />
      </span>
      Volver
    </Link>
  );
}
