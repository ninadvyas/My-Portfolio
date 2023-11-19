import gsap from 'gsap'
import React, { useEffect } from 'react'

const Cursor = () => {
    useEffect(()=> {
        const cursor = document.getElementById('custom-cursor')
        const links = document.querySelectorAll('a')
        const cursortext = document.querySelector('.cursor-text') // Use .cursor-text if it's a class

        const onMouseMove = (event)=>{
            const {clientX, clientY} = event;
            gsap.to(cursor,{x: clientX, y: clientY})
        }

        const onMouseEnterLink = (event)=>{
          const link = event.target;
          if(link.classList.contains('view')){
            gsap.to(cursor,{scale: 4})
            cursortext.style.display = 'block'
          } else {
            gsap.to(cursor,{scale: 4})
          }
        }

        const onMouseLeaveLink = ()=>{
          gsap.to(cursor,{scale: 1})
          cursortext.style.display = 'none'
        }

        document.addEventListener('mousemove', onMouseMove)
        links.forEach((link)=>{
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        })
    }, [])
    
    return (
        <div id='custom-cursor' className='custom-cursor'>
            <span className='cursor-text'>View</span>
        </div>
    )
}
export default Cursor
