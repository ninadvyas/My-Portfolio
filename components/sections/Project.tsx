
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';


import { TfiWorld } from "react-icons/tfi";
import { HiOutlineCode } from "react-icons/hi";


const Project = () => {
    return (
        <SectionContainer>

            <div className='w-full flex flex-col gap-6'>

                <TitleSectionPageContainer title='Projects' />

                <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>


                    <p className='w-full text-base text-gray-400'>
                        These are most of the projects I've done since I started programming, some of them are personal projects, practice or for other situation.  All of my projects go to my <a href='https://github.com/NinadVyas' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>github.com/NinadVyas</a>.
                    </p>
                    <div className="wrapper">
        <div className="card-container">
            <div className="plus-icon"></div>
            <div className="card-icon">
            </div>
            <div className="preview-text">CryptoBase</div>
            <div className="card-circle">
            </div>
            <div className="text-wrapper">CryptoBase &mdash; CryptoBase &mdash; CryptoBase &mdash; CryptoBase &dash; CryptoBase &mdash; CryptoBase &mdash; CryptoBase &mdash; CryptoBase</div>
        </div>
    </div>
                    <div className="testimonials-container">
                    <a href='https://github.com/NinadVyas/Collage-Space'>
                            <div className="testimonial-card2">
                                <div className='sectionp'>
                                    <header className='prtitle'>College Space</header>
                                    <header className='prspan'>A platform that provides docs and projects to learn</header>
                            </div>

                    </div>
                    </a>
                    <div className="testimonial-item1 bg-blue-box">
                        <div className='sectionp'>
                            <header className='prtitle'>Quiz Web</header>
                            <header className='prspan'>A Web App in which user can take quiz and see result instantly</header>


                            <div className='prlink'>
                                <a className='anchor1' href='https://github.com/NinadVyas/quizweb'><TfiWorld /></a>
                                <a className='anchor1' href='https://github.com/NinadVyas/quizweb'><HiOutlineCode /></a>
                            </div>

                        </div>
                    </div>

                    {/* <div className='cursor'></div> */}

            </div>
            <div >
                <a className='text-white hover:text-blue-500' href='https://github.com/NinadVyas'> <p className='btmmore'>More on Github ↗</p> </a>
            </div>



        </AnimationContainer>



      </div >
 


    </SectionContainer >
  )
}

export default Project;