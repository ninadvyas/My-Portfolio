
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import Project from '../content/Projectcard';
import { TfiWorld } from "react-icons/tfi";
import { HiOutlineCode } from "react-icons/hi";



const ProjectsSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='Projects' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          
          <p className='w-full text-base text-gray-400'>
            These are most of the projects I've done since I started programming, some of them are personal projects, practice or for other situation.  All of my projects go to my <a href='https://github.com/NinadVyas' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>github.com/NinadVyas</a>.
          </p>
          <div className="testimonials-container">
        <div className="testimonial-item4 bg-green-box">

<div className='sectionp'>
  <header className='prtitle'>Crypto Base</header>
  <header className='prspan'>A platform where you can save your favorite coin & see the volumes,prices.</header>

    <div className='prlink'> 
    <a className='anchor1' href='https://cryptobaseweb.vercel.app'><TfiWorld/></a>
<a className='anchor1' href='https://github.com/NinadVyas/WebCryptoBase'><HiOutlineCode/></a>
</div>

  
  </div>
</div>


<div className="testimonial-item3 bg-white-box">
<div className='sectionp'>
  <header className='prtitle'>Room Realm </header>
  <header className='prspan'>A chat room where everybody can talk about anything!</header>

    <div className='prlink'>
    <a className='anchor1' href='https://github.com/NinadVyas/Roomrealm'><TfiWorld/></a>
<a className='anchor1' href='https://github.com/NinadVyas/Roomrealm'><HiOutlineCode/></a>
</div>

  
  </div>
</div>


<div className="testimonial-item2 bg-yellow-box">
<div className='sectionp'>
  <header className='prtitle'>College Space</header>
  <header className='prspan'>A platform that provides docs and projects to learn</header>

    <div className='prlink'> 
    <a className='anchor1' href='https://github.com/NinadVyas/Collage-Space'><TfiWorld/></a>
<a className='anchor1' href='https://github.com/NinadVyas/Collage-Space'><HiOutlineCode/></a>
</div>

  
  </div>
</div>


<div className="testimonial-item1 bg-blue-box">
<div className='sectionp'>
  <header className='prtitle'>Quiz Web</header>
  <header className='prspan'>A Web App in which user can take quiz and see result instantly</header>


    <div className='prlink'> 
    <a className='anchor1' href='https://github.com/NinadVyas/quizweb'><TfiWorld/></a>
<a className='anchor1' href='https://github.com/NinadVyas/quizweb'><HiOutlineCode/></a>
</div>
  
  </div>
</div>

{/* <div className='cursor'></div> */}

</div>
<div >
  <a className='text-white hover:text-blue-500' href='https://github.com/NinadVyas'> <p className='btmmore'>More on Github ↗</p> </a>
</div>



        </AnimationContainer>



      </div>
 


    </SectionContainer>
  )
}

export default ProjectsSection;