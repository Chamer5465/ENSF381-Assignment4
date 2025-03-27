import {React, useState} from 'react';
import courselogo from './images/course1.jpg';
import Courses from './data/courses';

import './CourseItem.css'

function CourseItem(props) {
    const [showDescription, setShowDescription] = useState(false);

    function hover(){
        setShowDescription(true);
    }

    function outHover(){
        setShowDescription(false);
    }

    return (
        <div className="CourseItem" onMouseEnter={hover} onMouseLeave={outHover}>
            <img src={courselogo} alt='Course Image'></img>
            <p>Course Name: {props.name}</p>
            <p>Instructor: {props.instructor}</p>
            {showDescription && <p>Description: {props.description}</p>}
            <button>Enroll Now</button>
        </div>
    );
}

export default CourseItem;