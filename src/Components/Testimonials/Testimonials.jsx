import React, { useState } from 'react'
import nishan from "../../images/nishan.jpeg"
import bhanu from "../../images/bhanu.jpeg"
import rahul from "../../images/rahul.jpeg"
import avinash from "../../images/Avinash.jpeg"
import larissa from "../../images/larissa.jpeg"
import dayanand from "../../images/Dayanand.jpeg"
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
            review: `Without doubt one of the most talented programmers out there. I always go back to Shreesha when I'm out of my depth and he's never failed to deliver what I ask for. Smart, trustworthy and professional.   You won't be disappointed.`,
        },
        {
            name: "Bhanu",
            designation: " , Software Engineer at Sophos",
            image: bhanu,
            review: `Shreesha is awesome, delivers exactly what you want and is a great guy as well, thanks for all your hard work on my website`,
        },
        {
            name: "Rahul",
            designation: " , Software Engineer at Google",
            image: rahul,
            review: `Fantastic service and great guy. We recommend to anyone who needs a website or web services. Well be using for any further web based services we require!`,
        },
        {
            name: "Avinash",
            designation: " , Retailer",
            image: avinash,
            review: `You are awesome Shreesha. Keep up the good work!`,
        },
        {
            name: "Larissa",
            designation: " , Sujatha Restaurant Owner",
            image: larissa,
            review: `Thank you Shreesha. You are a great asset!`,
        },
        {
            name: "Dayanand",
            designation: " , Bakery Owner",
            image: dayanand,
            review: `Superb service. well done shreesha!`,
        },
    ]

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
