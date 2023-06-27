import React, { useState,useEffect  } from "react";
import HomeClinic from './clinic';
import BookourBestDoctor from './bookourbestdoctor';
import BrowsebySpecialities from './browsebySpecialities';
import HomeFeatures from './features';
import HomeBlog from './blog';
import Select2 from 'react-select2-wrapper';
import Header from "../header";
import Footer from "../footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home3.css"
import { banner1 } from "./image.jsx";
import Scheduler from "./Scheduler";

const Home3 = (props) => {

    //Aos

   useEffect(() => {
    AOS.init({duration: 1200,
      once: true});  
    
  }, []);
  
    let pathnames = window.location.pathname

    const [gender, setGender] = useState([
        { id: 1, text: 'male' },
        { id: 2, text: 'female' },
        
    ]);
      return(
        <div className="main-wrapper">

            <div style={{width:"100%",position:"fixed",top:"0",left:"0",zIndex:"999"}}>
                <Header {...props}/>
            </div>
          {/* Home Banner */}
            <section className="section section-search-2">
                <div className="container-fluid">
                <div className="row pt-3 pb-3">
                    <div className="col-md-6 mb-3 mt-4" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    {/* <img src={banner1} className="img-fluid search-img" alt="" /> */}
                    <div style={{width:"100%",minHeight:"300px",background:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <h1 style={{textAlign:"center"}}>Best Clinic in Kolkata providing Health Care to Patients</h1>
                    </div> 
                    </div>

                    <div className="col-md-6 search-doctor">
                        <div className="row">
                        <div className="bg-white col-md-12 p-4"style={{borderRadius:"4px"}}>
                        <h2 className="text-center">Book Appointment</h2>
                        <form className="search-input">
                        <div className="col-12 col-md-12 p-0">
                            <div className="form-group">
                                <label>Select Doctor</label>
                                <select className="form-select form-control">
                                <option>Select doctor</option>
                                <option>Doctor 1</option>
                                <option>Doctor 2</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            </div>
                            <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" />
                            </div>
                            </div>
                            <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" className="form-control" />
                            </div>
                            </div>
                            <div className="col-12 col-md-3">
                            <div className="form-group">
                                <label>Age</label>
                                <input type="text" className="form-control" />
                            </div>
                            </div>
                            <div className="col-12 col-md-3">
                            <div className="form-group">
                                <label>Gender</label>
                                <select className="form-select form-control">
                                <option>Male</option>
                                <option>Fe Male</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-12 col-md-12">
                            <div className="form-group">
                                <label>Complaint</label>
                                <input type="text" className="form-control" />
                            </div>
                            </div>
                        </div>
                        <div className="submit-section">
                            <button type="submit" className="btn btn-primary search-btn submit-btn">Submit</button>
                        </div>
                        </form>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section id="about" className="section section-search-" style={{paddingTop:"90px"}}>
                <div className="container-fluid">
                <div className="row" style={{background:"lightGrey",minHeight:"500px"}}>
                    <div className="col-md-6" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                       <h1>About clinic heading</h1>
                       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem eveniet nam, ea deserunt natus voluptatum nulla fugiat quod sunt asperiores aperiam at atque tempora suscipit excepturi architecto odio, et necessitatibus.</p>
                    </div>
                    <div className="col-md-6 " style={{minHeight:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <div className="search-area bg-white" style={{width:"100%"}}>
                            {/* <h2 className="text-center">Time Schedule</h2> */}
                            <Scheduler/>
                            <div></div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            {/* /Home Banner */}
          {/* Clinic and Specialities */}  
              <HomeClinic />
          {/* Clinic and Specialities */}
          {/* Category Section */}
          <BrowsebySpecialities/>
          {/* Category Section */}
          {/* Popular Section */}
          <BookourBestDoctor/>
          {/* /Popular Section */}                
          <HomeFeatures />
          <HomeBlog/>
          <Footer {...props}/>
        </div>
      );
}

export default Home3;