import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className='text-center mb-8'>
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
      <p className='text-lg font-bold text-neutral-600'>Computer Engineer </p>
      <p className='text-lg font-bold text-neutral-600'>Frontend Developer</p>
      <p className='text-lg'>📍 Madrid, Spain</p>
      <div className='flex justify-center gap-2'>
        <Link href="https://www.linkedin.com/in/sabrina-fernandez-zambrano/" target='_blank'>
          <Image
            src="/linkedin.svg"
            width={50}
            height={50}
            alt="Linkedin logo"
          />
        </Link>
        <Link href="https://github.com/SabrinaFZ" target='_blank'>
          <Image
            src="/github.svg"
            width={50}
            height={50}
            alt="Github logo"
          />
        </Link>
        <Link href="https://medium.com/@sabfz" target='_blank'>
          <Image
            src="/medium.svg"
            width={50}
            height={50}
            alt="Medium logo"
          />
        </Link>
        </div>
    </header>
  )
}
