import React from 'react'
import "./Testimonial.css"
function Testimonial({testimonial}) {
    return (
        <div className="testimonial">
            <div className="testimonialLeft">
                <img className="testimonialImage" src={testimonial.image} alt="reviewer"/>
            </div>
           <div className="testimonialRight">
                <div className="testimonialReview">{testimonial.review}</div>
                <div className="reviewer">
                    <span className="testimonialReviewer">{testimonial.name}</span>
                    <span className="testimonialReviewerDesignation">{testimonial.designation}</span>
                </div>
               
           </div>
           
        </div>
    )
}

export default Testimonial
