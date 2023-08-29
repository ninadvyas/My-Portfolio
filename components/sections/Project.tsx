
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
                    <div className="testimonials-container">
                        < div className="wrapper">
                            <div className="card-container">
                                <div className="cryptobase">
                                <div className="plus-icon"></div>
                                <div className="card-icon">
                                </div>
                                <div className="preview-text">Crypto Base</div>
                                <div className="card-circle">
                                </div>
                                <div className="text-wrapper">Crypto Base &mdash; Crypto Base &mdash; Crypto Base &mdash; Crypto Base &dash; Crypto Base &mdash; Crypto Base &mdash; Crypto Base &mdash; Crypto Base</div>
                                </div>
                            </div>
                        </div>
                        < div className="wrapper">
                            <div className="card-container">
                            <div className="roomrealm">

                                <div className="plus-icon"></div>
                                <div className="card-icon">
                                </div>
                                <div className="preview-text">Room Realm</div>
                                <div className="card-circle">
                                </div>
                                <div className="text-wrapper">Room Realm &mdash; Room Realm &mdash; Room Realm &mdash; Room Realm &dash; Room Realm &mdash; Room Realm &mdash; Room Realm &mdash; Room Realm</div>
                                </div>
                            
                            </div>
                        </div>
                        < div className="wrapper">
                            <div className="card-container">
                            <div className="collegespace">

                                <div className="plus-icon"></div>
                                <div className="card-icon">
                                </div>
                                <div className="preview-text">College Space</div>
                                <div className="card-circle">
                                </div>
                                <div className="text-wrapper">College Space &mdash; College Space &mdash; College Space &mdash; College Space &dash; College Space &mdash; College Space &mdash; College Space &mdash; College Space</div>
                            </div>
                            </div>

                        </div>
                        
                        < div className="wrapper">
                            <div className="card-container">
                            <div className="quizweb">

                                <div className="plus-icon"></div>
                                <div className="card-icon">
                                </div>
                                <div className="preview-text">Quiz Web</div>
                                <div className="card-circle">
                                </div>
                                <div className="text-wrapper">Quiz Web &mdash; Quiz Web &mdash; Quiz Web &mdash; Quiz Web &dash; Quiz Web &mdash; Quiz Web &mdash; Quiz Web &mdash; Quiz Web</div>
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