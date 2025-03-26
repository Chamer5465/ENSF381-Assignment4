import {React, useEffect} from 'react';
import Courses from './data/courses';
import Testimonials from './data/testimonials';
import ReactDOM from 'react-dom/client'

import './styles.css';

function MainSection() {
    const course1 = Courses[Math.floor(Math.random() * Courses.length)];
    const course2 = Courses[Math.floor(Math.random() * Courses.length)];
    const course3 = Courses[Math.floor(Math.random() * Courses.length)];
    var testimonial1 = Testimonials[Math.floor(Math.random() * Testimonials.length)];
    var testimonial2 = Testimonials[Math.floor(Math.random() * Testimonials.length)];

    useEffect(() => {
        testimonial1 = Testimonials[Math.floor(Math.random() * Testimonials.length)];
        testimonial2 = Testimonials[Math.floor(Math.random() * Testimonials.length)];
    });

    return (
        <div class="index">
            <h2>About LMS</h2>
            <p>The Learning Management System (LMS) helps students and instructors manage courses, quizzes, and track performance efficiently.</p>
            <h3>Key Features:</h3>
            <div>
                <p>- Enroll in courses</p>
                <p>- Attempt quizzes</p>
                <p>- View leaderboards</p>
            </div>
            <h3>Featured Courses:</h3>
            <div>
                <ul>
                    <h4>{course1.name}</h4>
                    <p>Instructor: {course1.instructor}</p>
                    <p>Duration: {course1.duration}</p>
                    <p>Description: {course1.description}</p>
                </ul>
                <ul>
                    <h4>{course2.name}</h4>
                    <p>Instructor: {course2.instructor}</p>
                    <p>Duration: {course2.duration}</p>
                    <p>Description: {course2.description}</p>
                </ul>
                <ul>
                    <h4>{course3.name}</h4>
                    <p>Instructor: {course3.instructor}</p>
                    <p>Duration: {course3.duration}</p>
                    <p>Description: {course3.description}</p>
                </ul>
            </div>
            <h3>Testimonials:</h3>
            <div>
                <div>
                    <h4>Student Name: {testimonial1.studentName}</h4>
                    <h4>Course Name: {testimonial1.courseName}</h4>
                    <p>Review: {testimonial1.review}</p>
                    <p>Rating: {testimonial1.rating}</p>
                </div>
                <div>
                    <h4>Student Name: {testimonial2.studentName}</h4>
                    <h4>Course Name: {testimonial2.courseName}</h4>
                    <p>Review: {testimonial2.review}</p>
                    <p>Rating: {testimonial2.rating}</p>
                </div>
            </div>
        </div>
    );
}

export default MainSection;