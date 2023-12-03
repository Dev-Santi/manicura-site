import Image from "next/image";

type props = {
  image: { src: string; alt: string };
  text: string;
  person: string;
  position: string;
  inverted?: boolean;
};

export default function Experience({ image, text, person, position, inverted }: props) {
  return (
    <div className={`hidden xl:block absolute ${position}`}>
      <div className='relative w-[23rem]'>
        <div
          className={`flex items-center shadow-md border-2 border-white  m-2 rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden w-[12rem] h-[12rem] ${
            inverted ? "translate-x-[10rem]" : ""
          }`}
        >
          <Image className='h-fit' src={image.src} alt={image.alt} width={400} height={400} />
        </div>
        <div className={`flex ${inverted ? "justify-start" : "justify-end"}`}>
          <p className=' bg-white text-brown-300 px-6 py-4 w-[12rem] translate-y-[-7rem] shadow-md'>
            {`"${text}"`}
            <br />
            {`- ${person}`}
          </p>
        </div>
      </div>
    </div>
  );
}
