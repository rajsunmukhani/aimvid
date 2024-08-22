import React, { useState } from 'react';

const UpdatePostPage = () => {
  const [video, setVideo] = useState(null);
  const [heading, setHeading] = useState(''); // Assume you load the existing heading here
  const [description, setDescription] = useState(''); // Assume you load the existing description here
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!heading) errors.heading = 'Heading is required';
    if (!description) errors.description = 'Description is required';
    return errors;
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      // Process the updated data (e.g., send it to the backend or update state)
      console.log('Post Updated', { video, heading, description });
      // Reset the form or navigate to another page after update
      setVideo(null);
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-lg p-8 bg-white border border-gray-200 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#0023FF] mb-6">Update Existing Module</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-6">
            <label htmlFor="videoUpload" className="block text-sm font-medium text-gray-700">Update Video (Optional):</label>
            <input 
              type="file" 
              id="videoUpload" 
              accept="video/*" 
              onChange={(e) => setVideo(e.target.files[0])} 
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#0023FF] file:text-white transition duration-1000 ease-in-out hover:file:bg-[#001bb3]"
            />
            {errors.video && <p className="mt-2 text-sm text-red-600">{errors.video}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="heading" className="block text-sm font-medium text-gray-700">Heading:</label>
            <input 
              type="text" 
              id="heading" 
              value={heading} 
              onChange={(e) => setHeading(e.target.value)} 
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#0023FF] focus:border-[#0023FF]"
            />
            {errors.heading && <p className="mt-2 text-sm text-red-600">{errors.heading}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea 
              id="description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              rows="4" 
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#0023FF] focus:border-[#0023FF]"
            />
            {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description}</p>}
          </div>
          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-[#0023FF] text-white font-semibold rounded-lg shadow-md transition duration-1000 ease-in-out hover:bg-[#001bb3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0023FF]"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePostPage;
