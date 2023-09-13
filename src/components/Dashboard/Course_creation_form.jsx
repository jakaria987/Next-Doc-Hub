import React, { useState } from 'react';
import './CourseCreationForm.css'; // Import your CSS file

const  CourseCreationForm = () => {
  // Define state variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [courseFee, setCourseFee] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can send the form data to your backend or perform any other desired actions
    // For example, you can create an object to hold the form data
    const formData = {
      name,
      email,
      courseTitle,
      courseDuration,
      courseFee,
      courseDescription,
    };

    // You can then send formData to your backend API or perform any other necessary logic
    console.log(formData);
  };

  return (
    <div className="course-creation-form-container mt-4 mb-12">
      <form onSubmit={handleSubmit} className="course-creation-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseTitle">Course Title:</label>
          <input
            type="text"
            id="courseTitle"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseDuration">Course Duration:</label>
          <input
            type="text"
            id="courseDuration"
            value={courseDuration}
            onChange={(e) => setCourseDuration(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseFee">Course Fee:</label>
          <input
            type="text"
            id="courseFee"
            value={courseFee}
            onChange={(e) => setCourseFee(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseDescription">Course Description:</label>
          <textarea
            id="courseDescription"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button mx-auto">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CourseCreationForm;
