import React, { useEffect, useState } from 'react';

import Header from './Header';
import Footer from './Footer';

import CourseCatalog from './CourseCatalog';
import EnrollmentList from './EnrollmentList';

function CoursesPage() {
    const [enrolledCourse, setEnrolledCourses] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem('enrolledCourses');
        if(stored){
            setEnrolledCourses(JSON.parse(stored));
        }
    },[])

    useEffect(() => {
        localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
    }, [enrolledCourses]);

    return (
        <div className="courses-page">
            <Header />
            <div className="content">
                <CourseCatalog />
                <EnrollmentList />
            </div>
            <Footer />
        </div>
    );
}

export default CoursesPage;