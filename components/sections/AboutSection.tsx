import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';

import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-400">
            I am a computer engineering student with a passion for technology
            and problem-solving. I am familiar with various software development
            tools and technologies as well as experience in database management.
            In my coursework, I have gained experience in designing and
            implementing software solutions, as well as troubleshooting and
            debugging complex systems. 
          </p>


          <p className="text-base text-gray-400">
            I always look forward to exceeding expectations and I am effective
            both working as an individual and as part of a team. I write
            articles and engaging blog posts about tech & lifestyle.In my
            meantime, you can find me behind the lens, capturing moments through
            my photography and I play chess & listen to music.
          </p>
        </AnimationContainer>

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
            Skills & Tools
          </h2>

          <div className="flex flex-col items-start gap-3 mt-3">
            <div className="flex flex-wrap">
              {[
                'JavaScript',
                'React.js',
                'Next.js',
                'Bootstarp',
                'HTML',
                'CSS',
                'PHP',
                'Python',
                'JAVA',
                'React Native',
                'Git',
                'UI Design',
                'Canva'
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 rounded-lg text-sm font-semibold border text-white border-gray-3 mr-2 mb-2"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
