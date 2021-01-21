import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import CourseSelector from './CourseSelector';
import TermSelector from './TermSelector';
import { getCourseTerm } from '../utils/course';

// const getCourseTerm = course => (
//     termMap[course.id.charAt(0)]
// );

// const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};
// const terms = Object.values(termMap);

const CourseList = ({courses}) => { 
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

    return(
        <ScrollView>
            <TermSelector selectedTerm={selectedTerm} setSelectedTerm = {setSelectedTerm} />
            <CourseSelector courses={termCourses} />
        </ScrollView>
    );
};

export default CourseList;