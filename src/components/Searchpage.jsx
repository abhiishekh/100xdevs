import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CourseCard from './coursecard/CourseCard';
import './searchpage.css';
import { IoSearch } from 'react-icons/io5'; 
import axios from 'axios';
import Footer from './footer/Footer';

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || [];
  const [searchText, setSearchText] = useState('');
  const [hasSearched, setHasSearched] = useState(false); 

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchText) return; 
    setHasSearched(true); 

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/search`, { title: searchText });
      navigate('/search', { state: { results: response.data.response } });
    } catch (error) {
      console.error("Error searching for courses:", error);
    }
  };

  return (
    <div className='hero-container'>
      <div className="temp center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>

        <h1>Search Results</h1>
        <div className="se">
          <form className="search" onClick={handleSearch}>
            <input
              type="text"
              id='text'
              name='text'
              onChange={handleChange}
              value={searchText}
              placeholder='Type here to search..'
            />
            <div type="submit" className="search-icon"> 
              <IoSearch />
            </div>
          </form>
        </div>
        </div>
        <div className="cards end">
          {hasSearched && results.length === 0 ? ( 
            <p>No courses found.</p>
          ) : (
            hasSearched && results.map(course => (
              <CourseCard
                key={course._id}
                title={course.title}
                description={course.description}
                image={course.image}
                price={course.price}
                mrp={course.mrp}
              />
            ))
          )}
        </div>
        <div className="footer">

      <Footer/>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
