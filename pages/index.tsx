import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import ExperienceComponent from '../components/ExperienceComponent'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchExperience } from '../utils/fetchExperience'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'
import { urlFor } from '../sanity'

type Props = {
  pageInfo : PageInfo ; 
  experiences : Experience[] ; 
  projects: Project[] ; 
  skills: Skill[] ; 
  socials : Social[]

  
}

const Home: NextPage<Props> = ({pageInfo,experiences,projects,skills,socials}:Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/40  ' >
      <Head>
        <title>Nader Elhaj</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header socials={socials} />

      <section id='hero' className='snap-center'>
        <Hero pageInfo ={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}

      <section id="experience" className=' snap-center'>
        <ExperienceComponent experiences={experiences} />
      </section>

      {/* Skills */}

      <section id="skills" className='snap-start '>
        <Skills skills={skills} />
      </section>

      {/* Projects */}

      <section id="projects" className='snap-start'>
        <Projects projects={projects} />
      </section>

      {/* Contact */}

      <section id="contact" className=' snap-start'>
        <Contact />
      </section>
      <Link href={"#hero"} >
      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <div className='  filter grayscale hover:grayscale-0'>

          <Image src={urlFor(pageInfo?.profilePic).url()} alt="Avatar" className='rounded-full' width={40} height={40} />
          </div>
        </div>
      </footer>
      </Link>

      
    </div>
  )
}


export async function getServerSideProps() {



  return {
    props: {
      pageInfo : await fetchPageInfo(),
      experiences : await fetchExperience(),
      skills : await fetchSkills(),
      projects : await fetchProjects(),
      socials : await  fetchSocials()
    }
  }
}
export default Home
