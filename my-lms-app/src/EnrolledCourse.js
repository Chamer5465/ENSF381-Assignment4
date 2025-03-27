import React from 'react';
import courses from './data/courses';
import courselogo from './images/course2.jpg';

function EnrolledCourse(props) {
    return (
        <div>
            <img src={courselogo}></img>
            <p>Course Name: {props.name}</p>
            <p>Credit Hours: {}</p>
            <button>Drop Course</button>
        </div>
    );
}

export default EnrolledCourse;