import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-auto">
      
      <h2 className="font-bold text-3xl mt-5 tracking-tight mb-5 text-white text-center lg:text-start">
        About me
      </h2>

      <p className="text-base text-gray-400 min-[320px]:text-left max-[600px]:inline">
        Hello I'm Ninad! I'm software developer & designer. I am familiar with various software development tools and
        technologies as well as experience in database management.If you ever want to
        bounce ideas off of me or even just have a chat about technologies and
        experiences don't hesitate to <a
          href="#contact"
          className="  ease delay-100 text-gary-300 font-bold underline hover:text-blue-500  "
        >
          <u className='underline inline-block'>Reach Out</u>
        </a>{' '}
        to me if you are interested in working with me on a project.
      </p>
 
    </AnimationContainer>
   
  );
};

export default AboutMe;
