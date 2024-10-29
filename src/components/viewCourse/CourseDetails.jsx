import React, { useEffect, useState } from 'react';
import './coursedetails.css';
import Footer from '../footer/Footer';
import CourseModel from './CourseModel';
import BuyCard from '../buycard/BuyCard';
import { useLocation } from 'react-router-dom';
import { usefetch } from '../../Hooks/useFetch';
import axios from 'axios';
import Payment from '../payments/Payment';

const CourseDetails = () => {
  const [data,setData] = useState('')
    const location = useLocation();
    const courseId = location.state?.id

    const fetchdata = async()=>{
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/course-details/${courseId}`)
      if(response){
        setData(response.data.response)
      }
    }

    useEffect(()=>{
      fetchdata()
    },[])


    return (
        <div className="hero-container scroll">
            <div className="details">
                <h1>{data.title}</h1>
                
            </div>
            <div className="buy">
                <BuyCard 
                id = {data._id}
                title ={data.title}
                price={data.price}
                mrp={data.mrp}
                image={data.image}
                />
            </div>
            <div className="upper">
                <h3>Overview</h3>
                <div className="line">
                    <div className="thik"></div>
                    <div className="narrow"></div>
                </div>
                <div className="content">
                    <h3>Validity: 3 years</h3>
                    <h3>Description</h3>
                    <p>{data.description}</p>
                </div>
            </div>
            <div className="coursefooter">
                <Footer />
            </div>
            <div className="coursemod">
                <CourseModel 
                id = {data._id}
                title ={data.title}
                price={data.price}
                mrp={data.mrp}
                image={data.image}
                />
            </div>
        </div>
    );
};

export default CourseDetails;
