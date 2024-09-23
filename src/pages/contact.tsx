import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API)
    console.log(formData);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Nevin Raju</title>
        <meta name="description" content="Contact page for Nevin Raju, Software Engineer." />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl font-bold mb-6">Contact Me</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-3xl">
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <div className="flex-1">
              <label className="block text-lg mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-black dark:border-white rounded"
              />
            </div>
            <div className="flex-1">
              <label className="block text-lg mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-black dark:border-white rounded"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="description">Message</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={6}
              className="w-full p-2 border border-black dark:border-white rounded"
            />
          </div>
          <button type="submit" className="bg-black text-white py-2 px-4 rounded hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 transition">
            Send
          </button>
        </form>
        <Link to="/" className="mt-4 text-grey-500 hover:underline">Back to Home</Link>
      </div>
    </>
  );
};

export default ContactPage;
