type props = { children: React.ReactNode };

export default function Phone({ children }: props) {
  return (
    <div className='max-[335px]:scale-[.70] h-[40rem] w-[20rem] relative flex justify-center items-center bg-black border-[0.30rem] border-gray-100 rounded-[3rem] shadow-[0_10px_10px_2px_rgba(0,0,0,0.4)]'>
      <Head />
      <Buttons />
      <Display>{children}</Display>
    </div>
  );
}

function Head() {
  return (
    <>
      <span className='absolute flex justify-center items-center top-0 h-[1.5rem] w-[10rem] bg-black rounded-b-2xl translate-y-[1rem]'>
        <span className='block rounded-md w-[3rem] h-[0.4rem] bg-gray-100 translate-y-[-0.25rem]'></span>
        <span className='absolute block rounded-full w-[0.6rem] h-[0.6rem] bg-gray-100 translate-x-[2.5rem] translate-y-[-0.25rem]'></span>
      </span>
    </>
  );
}

function Buttons() {
  return (
    <>
      <span className='absolute block inset-0 h-[2rem] w-[0.5rem] bg-gray-200 rounded-md z-[-1] translate-x-[-0.55rem] translate-y-[6rem]'></span>
      <span className='absolute block inset-0 h-[4rem] w-[0.5rem] bg-gray-200 rounded-md z-[-1] translate-x-[-0.55rem] translate-y-[9rem]'></span>
      <span className='absolute block inset-0 h-[4rem] w-[0.5rem] bg-gray-200 rounded-md z-[-1] translate-x-[-0.55rem] translate-y-[14rem]'></span>
      <span className='absolute block inset-0 h-[5rem] w-[0.5rem] bg-gray-200 rounded-md z-[-1] translate-x-[19.45rem] translate-y-[11rem]'></span>
    </>
  );
}

function Display({ children }: props) {
  return (
    <div
      className={`bg-skin-200 bg-[url('/phone-bg.jpg')] text-white bg-cover bg-center h-[37.4rem] w-[17.5rem] rounded-[2rem] overflow-hidden`}
    >
      <div className='w-full h-full pt-20 px-8 transition-all duration-[1000ms] hover:backdrop-blur-[1px]'>
        {children}
      </div>
    </div>
  );
}
