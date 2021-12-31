import React, { useEffect, useState } from 'react'
import reactcert from '../../images/reactcert.png'
import javascriptcert from '../../images/javascriptcert.png'
import w3docscert from '../../images/w3docs.png'
import "./Certificates.css"
import SectionHeader from '../SectionHeader/SectionHeader'
function Certificates() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const certificates = [
        {
            image: reactcert,
            title: "React",
        },
        {
            image: javascriptcert,
            title: "Javascript",
        },
        {
            image: w3docscert,
            title: "React",
        },

    ]

    useEffect(()=> {
        const changeSlide = setInterval(() => setCurrentIndex(currentIndex => (currentIndex === certificates.length-1) ? 0 : currentIndex+1) , 5000) // change your switch time here.
        return () => clearInterval(changeSlide);
     }, [certificates.length])

    const incrementIndex = () => {
        if(currentIndex<certificates.length-1){
            setCurrentIndex(currentIndex+1)
        }
        else{
            setCurrentIndex(0)
        }
    }
    const decrementIndex = () => {
        if(currentIndex>0){
            setCurrentIndex(currentIndex-1)
        }
        else{
            setCurrentIndex(certificates.length-1)
        }
    }

    return (
        <div className='certificatesSection'>
            <SectionHeader id={"certificates"} heading={"Certificates"}/>
            <div className='certificates'>
                <button className="buttonPreviousButton" onClick={ () => decrementIndex()}><i class="fa fa-angle-left" aria-hidden="true"></i></button>
                <img className='certImage' alt={certificates[currentIndex].title} src={certificates[currentIndex].image}></img>
                <button className="buttonNextButton" onClick={ () => incrementIndex()}><i class="fa fa-angle-right" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}

export default Certificates
