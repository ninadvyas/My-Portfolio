import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-auto">
      <h2 className="font-bold text-2xl mt-5 tracking-tight mb-8 text-white text-center lg:text-start ">
        About me
      </h2>

      <p className="text-base text-gray-400">
        Hello I'm Ninad! I'm software developer & designer with a passion for
        building things that are user-friendly , innovative and problem
        solving.I am familiar with various software development tools and
        technologies as well as experience in database management. 
        <a
          href="#contact"
          className="  ease delay-100 text-white hover:text-blue-500  "
        >
          <u className='no-underline'> Reach Out</u>
        </a>{' '}
        to me if you ever want to
        bounce ideas off of me or even just have a chat about technologies and
        experiences don't hesitate to 
        if you are interested in working with me on a project.
      </p>
 
    </AnimationContainer>
   
  );
};

export default AboutMe;
