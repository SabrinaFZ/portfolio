import { Badge } from './ui/badge'
import { Header } from './ui/header'

export default function Home() {
  return (
    <main>
      <Header />
        <section className='mt-4 text-center'>
          <h2 className='font-bold border-slate-600 rounded bg-slate-200 mb-2'>About me</h2>
          <p>
            Hello! 👋🏻 I am a Computer Engineer with experience as a Web Developer, specializing in both frontend and backend technologies.
          </p>
          <p>
            Additionally, I am a strong advocate for mental health awareness.
          </p>
        </section>
        <section className='mt-4 text-center'>
          <h2 className='font-bold border-slate-600 rounded bg-slate-200 mb-2'>Skills</h2>
          <section className='mt-1'>
            <h3 className='font-bold'>Front-end</h3>
            <div className='flex flex-wrap gap-0.5 justify-center'>
              <Badge text='HTML' />
              <Badge text='CSS' />
              <Badge text='Javascript' />
              <Badge text='Typescript' />
              <Badge text='React' />
              <Badge text='Vue' />
              <Badge text='Sass' />
              <Badge text='Styled Components' />
              <Badge text='TailwindCSS' />
              <Badge text='Next.js' />
            </div>
          </section>
          <section className='mt-1'>
            <h3 className='font-bold'>Back-end</h3>
            <div className='flex flex-wrap gap-0.5 justify-center'>
              <Badge text='Node' />
              <Badge text='API Rest' />
              <Badge text='Nest.js' />
              <Badge text='Java' />
            </div>
          </section>
          <section className='mt-1'>
            <h3 className='font-bold'>Testing</h3>
            <div className='flex flex-wrap gap-0.5 justify-center'>
              <Badge text='Jest' />
              <Badge text='React Testing Library' />
            </div>
          </section>
          <section className='mt-1'>
            <h3 className='font-bold'>Databases</h3>
            <div className='flex flex-wrap gap-0.5 justify-center'>
              <Badge text='SQL' />
            </div>
          </section>
          <section className='mt-1'>
            <h3 className='font-bold'>DevOps</h3>
            <div className='flex flex-wrap gap-0.5 justify-center'>
              <Badge text='Jenkins' />
              <Badge text='Docker' />
              <Badge text='Github Actions' />
            </div>
          </section>
        </section>
        <section className='mt-4 text-center'>
          <h2 className='font-bold border-slate-600 rounded bg-slate-200 mb-2'>Languages</h2>
          <div className='flex justify-center items-center'>
            <Badge text='Spanish'/>
            <Badge text='English' />
            <Badge text='German' />   
          </div>
        </section>
    </main>
  )
}
