import React, {useEffect} from 'react';
import { IMG01, IMG02, IMG03, IMG04, IMG_th01, IMG_th02, IMG_th03, IMG_th04} from './img.jsx';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const HomeBlog =(props)=>{    
       
    //Aos

   useEffect(() => {
    AOS.init({duration: 1200,
      once: true});  
    
  }, []);

        return(
            <></>
        );
    }

export default HomeBlog;