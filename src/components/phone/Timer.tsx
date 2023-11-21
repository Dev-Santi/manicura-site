"use client";

import { useEffect, useState } from "react";

const months = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

export default function Time() {
  /*   const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <div className='text-7xl mb-2'>
        {time.getHours()}
        <span className='animate-[pulse_2.5s_linear_infinite]'>:</span>
        {time.getMinutes().toString().length > 1 ? time.getMinutes() : `0${time.getMinutes()}`}
      </div>
      <div className='text-sm font-light'>
        {`${days[time.getDay()]}, ${time.getDate()} de ${months[time.getMonth()]}`}
      </div>
    </div>
  ); */
  return "";
}
