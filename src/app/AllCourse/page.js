"use client"

import React, { useEffect, useState } from 'react';

const AllCourse = () => {
    const[course, setcourse] = useState([])
    useEffect(()=>{
        fetch("api/allCourse")
        .then(res => res.json())
        .then(data => setcourse(data))
        
    },[])
    console.log(course)
    return (
        <div>
          {course?.map((courses) => (
            <a key={courses.id}>{courses.name}</a>
          ))}
        </div>
      );
      
};

export default AllCourse;