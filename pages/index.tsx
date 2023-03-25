import Image from 'next/image'
import Contact from '@/components/Contact'

const Home = () => {
  return (
    <>
      <section className="p-60 flex flex-col items-center">
           <Image
              className='rounded-md'
              height={208}
              width={302}
              src="/me.png" 
              alt={'Photo of yours truly'} 
           />
           <h3 className='mt-7 text-xl'>Hey 👋🏼, I&apos;m Akshat Garg<br/> Frontend Web Developer</h3>
      </section>
      <section className="py-30 flex flex-col items-center bg-slate-400">
        <div className='w-9/12 m-auto'>
           <h2 className='mb-4 text-xl font-bold'>{`<About />`}</h2>
           <p className='text-lg'>
              I’m a passionate software engineer based in India, with experience in programming full stack applications and developing solutions at scales. I am well versed with javascript frameworks and frontend technologies like Nextjs, Qwik and CSS librariers like bootstrap, material-ui etc., I have also worked with backend systems and have experience of architecting scalable and secure backend systems and programming in Nodejs and python.
              for my qualifications, I am computer science engineer from Birla Institute of technology, Mesra, I have been an academic award holder for my performance in higher secondary school.
              My work experience ranges from working for big corporations like Microsoft to innovative startups like Builder.io, I also work as a freelance developer, checkout the experience page for more info.
              I enjoy programming, tinkering with technology (find my projects here), hitting the gym and exploring new places and food. 
           </p>
        </div>
      </section>
      <section className="py-30 flex flex-col items-center">
        <div className='w-9/12 m-auto'>
          <h2 className='mb-4 text-xl font-bold'>{`<Contact />`}</h2>
          <Contact />
        </div>
      </section>
    </>
  )
}

export default Home;