import Image from 'next/image';
import AnimationContainer from '../utils/AnimationContainer';

const Hero = () => {
  return (
    <div className='w-full flex justify-between flex-col-reverse lg:flex-row items-center'>

      <AnimationContainer customClassName='flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8'>

        <h1 className='font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-white mx-auto lg:mx-0'>
         Hey I'm Ninad
        </h1>
        <h1 className='font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-white mx-auto lg:mx-0'>
         I'm a Software Engineer
        </h1>

        <p className='w-full mt-2 text-base text-center lg:text-start mb-5 lg:mb-0 text-gray-400 mx-auto lg:mx-0'>
        I enjoy connecting with people across a wide range of backgrounds
        </p>

      </AnimationContainer>
    </div>
  )
}

export default Hero;