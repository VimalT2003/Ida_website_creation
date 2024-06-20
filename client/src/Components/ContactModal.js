import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/submit', formData);
      if (response.data.success) {
        Swal.fire({
          title: "Good job!",
          text: "Your form submitted successfully!",
          icon: "success"
        });
        onClose(); // Close the modal after successful submission
        setFormData("")
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className='text-center text-decoration-underline'>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            className='form-control my-2' 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="email">Email:</label>
          <input 
            type="email"  
            className='form-control my-2' 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="message">Message:</label>
          <textarea 
            id="message"  
            className='form-control my-2' 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea>

          <button type="submit" className='btn btn-outline-dark mt-3'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
