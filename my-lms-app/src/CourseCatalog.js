import React from 'react';

import CourseItem from './CourseItem';
import Courses from './data/courses';

import './CourseCatalog.css'

function CourseCatalog() {
    const courseItem = Courses.map((course) => <CourseItem name={course.name} instructor={course.instructor} description={course.description}/>);
    return (
        <div className="CourseCatalog">
            <h2>Course Catalog</h2>
            <div>
                {courseItem}
            </div>
        </div>
    );
}

export default CourseCatalog;