import React from 'react';
import Courses from './data/courses';
import Testimonials from './data/testimonials';

import './styles.css';

function MainSection() {
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
        </div>
    );
}

export default MainSection;