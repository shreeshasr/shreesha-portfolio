import React from 'react'
import "./SectionHeader.css"
function SectionHeader(props) {
    return (
        <div className='sectionHeader'>
            <div className="sectionHeading" id={props.id}>{props.heading}</div>
        </div>
    )
}

export default SectionHeader
