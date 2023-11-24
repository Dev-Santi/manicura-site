import "./globals.css";
import type { Metadata } from "next";
import { poppins } from "@/fonts";
import Phone from "@/components/Phone/Phone";
import Timer from "@/components/Phone/Timer";
import Image from "next/image";
import Experience from "@/components/Experience/Experience";

export const metadata: Metadata = {
  title: "Belleza en Cada Detalle",
  description:
    "Como profesional independiente, me especializo en brindar servicios de uñas personalizados para satisfacer tus gustos individuales. Ya sea que busques un diseño artístico, una manicura clásica o una pedicura relajante, estoy aquí para hacer que tus uñas destaquen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body
        className={
          poppins.className +
          " " +
          "bg-gradient-to-r from-purple-100 to-pink-200 min-h-[100svh] flex justify-center items-center overflow-hidden"
        }
      >
        <Experience
          position='translate-x-[4rem]  left-0'
          image={{ src: "/examples/experience-1.jpg", alt: "" }}
          text={`¡Experiencia excepcional! Recibí un servicio de uñas impecable. Desde el momento en que entré, el ambiente fue relajante y acogedor.`}
          person='Juliana Porlan'
        />

        <Experience
          position='translate-x-[-4rem] translate-y-5 right-0 '
          image={{ src: "/examples/experience-2.jpg", alt: "" }}
          text={`Su atención personalizada y habilidades artísticas hicieron que mis uñas brillaran. Cada detalle fue cuidadosamente considerado, y el resultado fue simplemente impresionante.`}
          person='Luciana Perlita'
          inverted
        />

        <div>
          <div className='relative z-20'>
            <Phone>
              <Timer />
              <div className='mt-14'>{children}</div>
            </Phone>
          </div>

          <div className='hidden md:block absolute w-full left-0 bottom-0 mb-2 h-5 bg-brown-200 '></div>
          <div className='hidden md:block absolute w-full left-0 top-0 mt-5 h-5 bg-brown-200'></div>

          <div className='absolute flex items-center justify-center inset-0 border-white md:hidden'>
            <Image src='/bg-image-1.png' alt='' width={1000} height={1000} />
          </div>
        </div>
      </body>
    </html>
  );
}
