import { useState } from 'react';
import api from '../services/api'; // Import your configured API helper

const IncidentForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    type: 'Safety', // Default value
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Submitting...');
    
    // Get the token from local storage
    const token = localStorage.getItem('token'); 

    try {
      // USE api.post INSTEAD OF FETCH
      // The Base URL is already handled by api.js (pointing to Render)
      const response = await api.post('/incidents', formData, {
        headers: {
          // Attach the token so the backend knows who you are
          'Authorization': `Bearer ${token}` 
        }
      });

      // Axios (api.post) automatically checks for success
      setMessage('Incident reported successfully!');
      setFormData({ title: '', description: '', location: '', type: 'Safety' }); // Reset form

    } catch (error) {
      console.error('Error:', error);
      // Safely extract the error message from the backend response
      const errorMsg = error.response?.data?.message || 'Error reporting incident';
      setMessage(errorMsg);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Report a New Incident</h2>
      
      {message && (
        <div className={`p-3 mb-4 rounded ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Brief title of the incident"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Safety">Safety</option>
            <option value="Medical">Medical</option>
            <option value="Fire">Fire</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Where did this happen?"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            placeholder="Describe what happened in detail..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200 font-semibold"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default IncidentForm;
