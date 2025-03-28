import React from 'react';
import courses from './data/courses';
import courselogo from './images/course1.jpg';
import { useContext } from 'react';
import { enrolledContext } from './CoursesPage';
import './EnrolledCourse.css';

function EnrolledCourse(props) {
    const { enrolledCourse, setEnrolledCourses } = useContext(enrolledContext);

    function handleDrop() {
        const newList = enrolledCourse.filter(c => c.name !== props.course.name);
        setEnrolledCourses(newList);
      }

    return (
        <div className='CourseItem'>
            <img src={courselogo}></img>
            <p>Course Name: {props.name}</p>
            <p>Credit Hours: 3</p>
            <button onClick={handleDrop}>Drop Course</button>
        </div>
    );
}

export default EnrolledCourse;