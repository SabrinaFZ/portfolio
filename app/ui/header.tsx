import Image from 'next/image'
import Link from 'next/link'
import AnimatedArrow from './arrow/arrow'

export function Header() {
  return (
    <header className='text-center mb-10 h-screen bg-gradient-to-b from-slate-950 to-slate-800 flex justify-center items-center flex-col rounded-md p-4'>
      <div className='flex items-center justify-center mb-4'>
        <Image
          className='border-slate-600 border-2 rounded-full'
          src="/avatar.png"
          width={200}
          height={200}
          alt="Avatar of Sabrina Fernández Zambrano"
        />
      </div>
      <h1 className='font-bold'>Sabrina Fernández Zambrano</h1>
      <p className='text-lg font-semibold text-neutral-300'>Computer Engineer | Frontend Developer </p>
      <p className='text-lg'>📍 Madrid, Spain</p>
      <div className='flex justify-center gap-4 mt-4 opacity-60'>
        <Link href="https://www.linkedin.com/in/sabrina-fernandez-zambrano/" target='_blank'>
          <Image
            src="/linkedin.svg"
            width={40}
            height={40}
            alt="Linkedin logo"
          />
        </Link>
        <Link href="https://github.com/SabrinaFZ" target='_blank'>
          <Image
            src="/github.svg"
            width={40}
            height={40}
            alt="Github logo"
          />
        </Link>
        <Link href="https://medium.com/@sabfz" target='_blank'>
          <Image
            src="/medium.svg"
            width={40}
            height={40}
            alt="Medium logo"
          />
        </Link>
        </div>
        <AnimatedArrow />
    </header>
  )
}
