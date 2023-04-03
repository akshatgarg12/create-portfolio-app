import Image from 'next/image'
import Contact from '@/components/Contact'

const Home = () => {
  return (
    <>
      <section className="p-60 flex flex-col items-center bg-altBackground text-text">
           <Image
              className='rounded-md'
              height={208}
              width={302}
              src="/me.png" 
              alt={'Photo of yours truly'} 
           />
           <h3 className='mt-7 text-xl'>Hey 👋🏼, I&apos;m Akshat Garg<br/> Frontend Web Developer</h3>
      </section>
      <section className="py-30 flex flex-col items-center bg-background text-text">
        <div className='w-9/12 m-auto'>
           <h2 className='mb-4 text-xl font-bold'>{`<About />`}</h2>
           <p className='text-lg'>
            As a highly skilled software engineer based in India, I bring to the table a wealth of experience in programming full stack applications and developing solutions at scale. My proficiency in Javascript frameworks, including Nextjs and Qwik, and frontend technologies such as Bootstrap and Material-UI, enables me to deliver aesthetically pleasing and user-friendly interfaces that meet the highest standards of quality.

            Furthermore, my expertise in backend systems and experience in programming in Nodejs and Python, enable me to design and architect secure, scalable, and high-performance systems that cater to complex business requirements. My technical acumen, combined with my educational qualifications, a Computer Science Engineering degree from Birla Institute of Technology, Mesra, and academic excellence, as a high-performing student in secondary school, speaks to my commitment to excellence in all endeavors.

            My experience has spanned across working with big corporations like Microsoft, to innovative startups such as Builder.io. I also have extensive experience as a freelance developer, offering clients bespoke software solutions, custom-built to meet their unique needs.

            Outside of the world of coding, I am an avid gym-goer, foodie, and love exploring new places. I am also passionate about tinkering with technology, and you can check out some of my projects on my website.

            I am committed to using my skills to deliver exceptional results, and I am excited about the prospect of collaborating with you on your next project. Please do not hesitate to get in touch with me to discuss further.
           </p>
        </div>
      </section>
      <section className="py-30 flex flex-col items-center bg-altBackground text-text">
        <div className='w-9/12 m-auto'>
          <h2 className='mb-4 text-xl font-bold'>{`<Contact />`}</h2>
          <Contact />
        </div>
      </section>
    </>
  )
}

export default Home;