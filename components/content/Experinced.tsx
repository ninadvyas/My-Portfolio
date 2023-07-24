'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent>

        <TimelineEvent.Title>TLK Industries | Web Developer Intern | May 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
        I had the incredible opportunity to dive deep into the world of web developer with various projects and understanding of database as well.
                </TimelineEvent.Description>

      </TimelineEvent>
      

      <TimelineEvent last>

        <TimelineEvent.Title>Web Development | 3+ Years Practical</TimelineEvent.Title>

        <TimelineEvent.Description>
        Experienced web developer with a track record of creating dynamic and intuitive websites. Passionate about transforming ideas into functional and visually appealing online experiences.
        </TimelineEvent.Description>

      </TimelineEvent>
      {/* <TimelineEvent>

<TimelineEvent.Title>Video Editor | 1+ Years Practical</TimelineEvent.Title>

<TimelineEvent.Description>
I had the incredible opportunity to dive deep into the world of web development with various projects and understanding of database as well.
        </TimelineEvent.Description>

</TimelineEvent>
      <TimelineEvent last>

<TimelineEvent.Title><a href='https://gmiu.edu.in/campus/projectexhibition' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Tech-Manjari GMIT</a> | Smart Home | January 2020</TimelineEvent.Title>

<TimelineEvent.Description>
IOT based Machine on Smart Home System with Irrigation , Parking , Home Controll , Water Lekage Prevention and also Smart Street Light System.
</TimelineEvent.Description>

</TimelineEvent> */}

    </Timeline>
  )
}

export default CurrentTimeLineExp;