import AboutMe from '../content/AboutMe';
// import ContactMe from '../content/ContactMe';
import CurrentFavTech from '../content/CurrentFavTech';
// import CurrentLearning from '../content/CurrentLearning';
import Todo from '../content/Todo';


import Hero from '../content/Hero';

import SectionContainer from '../utils/SectionContainer';

const HomeSection = () => {
  return (
    <SectionContainer>

      <Hero />

      <CurrentFavTech />
      {/* <CurrentLearning /> */}

      <div className='w-full flex flex-col items-start'>

        <AboutMe />



<Todo/>



        {/* <ContactMe /> */}

      </div>

    </SectionContainer>
  )
}

export default HomeSection;