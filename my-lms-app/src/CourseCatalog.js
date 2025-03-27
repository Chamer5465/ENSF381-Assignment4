import React from 'react';

import CourseItem from './CourseItem';
import Courses from './data/courses';

function CourseCatalog() {
    const courseItem = Courses.map((course) =>
        <CourseItem name={course.name} instructor={course.instructor} description={course.description}/>
    );
    return (
        <div>
            <h2>Coure Catalog</h2>
            {courseItem}
        </div>
    );
}

export default CourseCatalog;