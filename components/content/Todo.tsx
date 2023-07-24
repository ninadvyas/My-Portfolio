import AnimationContainer from '../utils/AnimationContainer';

const myWorkProcess = [
  {
    id: '1',
    title: 'Graphic Design',
    des: 'Passionate graphic designer with a keen eye for detail and a flair for creative visuals. Proficient in utilizing industry-leading software to craft compelling designs that elevate brand identities and effectively communicate messages.',
    delay: 0.3
  },
  {
    id: '2',
    title: 'Web Development',
    des: 'Experienced web developer with a track record of creating dynamic and intuitive websites. Passionate about transforming ideas into functional and visually appealing online experiences. ',
    delay: 0.4
  },
  {
    id: '3',
    title: 'Web Designing',
    des: 'Passionate web designer seamlessly fusing form and function to curate captivating online experiences. Proficient at creating intuitive interfaces that resonate emotionally and forge meaningful user connections. ',
    delay: 0.5
  },
  {
    id: '4',
    title: 'Website Deployment',
    des: 'Experienced website deployment expert adept at seamlessly launching and managing web applications. Skilled in configuring servers, databases, and cloud infrastructure to ensure optimal online performance. ',
    delay: 0.6
  },
  {
    id: '5',
    title: 'Content Writer',
    des: 'Passionate content writer with a knack for crafting compelling and persuasive copy. Skilled in producing SEO-optimized content that captivates audiences and enhances organic visibility. ',
    delay: 0.7
  },
  {
    id: '6',
    title: 'Photography',
    des: 'Passionate photographer skilled in capturing extraordinary moments through diverse genres, including landscape, portrait, and documentary photography. ',
    delay: 0.8
  }
];

const Todo = () => {
  return (
    <AnimationContainer customClassName="w-full ">
      <h2 className="font-bold text-2xl md:text-xl tracking-tight mb-10 mt-5 text-red-500 text-start">
        Work <p className="text-3xl text-white">What I Do</p>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 mx-auto">
        {myWorkProcess.map(({ id, title, des, delay }) => (
          <AnimationContainer
            key={id}
            customClassName=" hover:bg-zinc-900 hover:text-white  rounded border border-gray-800 hover:borderW-gray-900 bg-gray-900 p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease"
            customDelay={delay}
          >
            <h3 className="font-bold text-2xl  tracking-tight text-green-500 text-center">
              {title}
            </h3>

            <p className="mt-2 text-base text-gray-400 text-center">{des}</p>
          </AnimationContainer>
        ))}
      </div>
    </AnimationContainer>
  );
};

export default Todo;
