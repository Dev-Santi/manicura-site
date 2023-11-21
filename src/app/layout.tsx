import "./globals.css";
import type { Metadata } from "next";
import { poppins } from "@/fonts";
import Phone from "@/components/phone/Phone";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Belleza en Cada Detalle",
  description:
    "Como profesional independiente, me especializo en brindar servicios de uñas personalizados para satisfacer tus gustos individuales. Ya sea que busques un diseño artístico, una manicura clásica o una pedicura relajante, estoy aquí para hacer que tus uñas destaquen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={poppins.className + " bg-background h-screen flex justify-center items-center"}>
        {/*<div>
          <Image src='/bg-image-2.png' alt='Imagen de decoración, una hoja de color marrón.' width={200} height={200} />
        </div> */}
        <div>
          <Phone>{children}</Phone>
        </div>
        {/*<div>
          <Image src='/bg-image-1.png' alt='Imagen de decoración, lineas marrones que pasan por detras del telefono.' width={200} height={200} />
        </div> */}
      </body>
    </html>
  );
}
