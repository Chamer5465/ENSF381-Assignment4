import React from 'react';

import CourseItem from './CourseItem';
import Courses from './data/courses';

function CourseCatalog() {
    const course = Courses[1];
    var name = course.name;
    var instructor = course.instructor;
    var description = course.description;
    return (
        <div>
            <CourseItem name={name} instructor={instructor} description={description}/>
        </div>
    );
}

export default CourseCatalog;