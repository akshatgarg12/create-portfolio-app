import Image from 'next/image'
import Contact from '@/components/Contact'
import HomeData from '@/config/home.json'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = () => {
  const {name, title, about, contact} = HomeData
  return {
    props: {
      name , title, about, contact    
    }
  }
}

export interface ContactType{
  email : string,
  github_username : string,
  github_url : string,
  linkedin_username : string,
  linkedin_url : string,
}
export interface HomePropsType{
  name : string
  title : string
  about : string
  contact : ContactType
}

const Home = ({name, title, about, contact} : HomePropsType) => {
  return (
    <>
      <section className="p-60 flex flex-col items-center bg-altBackground text-text text-center">
           <Image
              className='rounded-md'
              height={208}
              width={302}
              src="/me.png" 
              alt={'Photo of yours truly'} 
           />
           <h3 className='mt-7 text-xl'>Hey 👋🏼, I&apos;m {name}<br/> {title}</h3>
      </section>
      <section className="py-30 flex flex-col items-center bg-background text-text">
        <div className='w-9/12 m-auto'>
           <h2 className='mb-4 text-xl font-bold'>{`<About />`}</h2>
           <p className='text-lg'>
              {about}
           </p>
        </div>
      </section>
      <section className="py-30 flex flex-col items-center bg-altBackground text-text">
        <div className='w-9/12 m-auto'>
          <h2 className='mb-4 text-xl font-bold'>{`<Contact />`}</h2>
          <Contact contact={contact} />
        </div>
      </section>
    </>
  )
}

export default Home;