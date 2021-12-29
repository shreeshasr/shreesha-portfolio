import React, { useEffect, useState } from 'react'
import nishan from "../../images/nishan.jpeg"
import bhanu from "../../images/bhanu.jpeg"
import Testimonial from '../Testimonial/Testimonial'
import './Testimonials.css'
import SectionHeader from '../SectionHeader/SectionHeader'
function Testimonials() {
    const [testiMonialIndex, setTestiMonialIndex] = useState(0);

    const testimonials = [
        {
            name: "Nishan",
            designation: " , Software Engineer at Sophos",
            image: nishan,
            review: `Without doubt one of the most talented programmers out there. I always go back to Shreesha when I'm out of my depth. Smart, trustworthy and professional. You won't be disappointed.`,
        },
        {
            name: "Bhanu",
            designation: " , Software Engineer at Sophos",
            image: bhanu,
            review: `Shreesha is awesome, delivers exactly what you want and is a great guy as well`,
        },
    ]

    useEffect(()=> {
        const changeSlide = setInterval(() => setTestiMonialIndex(testiMonialIndex => 1-testiMonialIndex) , 3000) // change your switch time here.
        return () => clearInterval(changeSlide);
     }, [])

    const incrementIndex = () => {
        if(testiMonialIndex<testimonials.length-1){
            setTestiMonialIndex(testiMonialIndex+1)
        }
        else{
            setTestiMonialIndex(0)
        }
    }
    const decrementIndex = () => {
        if(testiMonialIndex>0){
            setTestiMonialIndex(testiMonialIndex-1)
        }
        else{
            setTestiMonialIndex(testimonials.length-1)
        }
    }
    return (
        <section className="testimonialss">
             <SectionHeader id={"testimonials"} heading={"Testimonials"}/>
             <div className="testimonials">
                <button className="buttonPreviousButton" onClick={ () => decrementIndex()}><i class="fa fa-angle-left" aria-hidden="true"></i></button>
                <Testimonial testimonial={testimonials[testiMonialIndex]}/>
                <button className="buttonNextButton" onClick={ () => incrementIndex()}><i class="fa fa-angle-right" aria-hidden="true"></i></button>
             </div>
        </section>
    )
}

export default Testimonials
