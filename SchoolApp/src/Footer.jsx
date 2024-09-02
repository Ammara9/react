import React from "react";
import { Link } from "react-router-dom";

//this component contains the footer and we have used bootstrap classes to create the footer.
const Footer = () => {
  return (
    <div className="mt-auto text-center  text-lg-start text-light border-dark pt-3" style={{ backgroundColor: '#4CAF83' }}>

      <section className="">

        <div className="container text-center text-md-start mt-2">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-3 col-xl-4  ">
            <Link
            as={Link}
            to="/home"
            className=" hover-overlay "
          >
            <img className="" src="bilder/logo-to-klimatkoll.png" alt="logo" style={{ height: "70px", width: "250px",  }}></img>
            
          </Link>
            </div>


            <div className="col-md-3 col-lg-3 col-xl-4 "> 
            <h5>Våra Utbildningar</h5>
      
              <p>
            <Link as={Link} to="/Glaciärer" className="text-white hover-overlay" style={{ textDecoration: "none" }}>
              Glaciärer
            </Link>
            </p>
            <p>
            <Link as={Link} to="/Havsnivå" className="text-white hover-overlay" style={{ textDecoration: "none" }}>
              Havsnivå
            </Link>
            </p>
            <p>
            <Link as={Link} to="/GlobalTemp" className="text-white hover-overlay" style={{ textDecoration: "none" }}>
              Global Temperatur
            </Link>
            </p>
            </div>

            <div className="col-md-3 col-lg-3 col-xl-4">
            <h5>Våra Aktiviteter</h5>
            <p>
            <Link as={Link} to="/quizstart" className="text-white hover-overlay" style={{ textDecoration: "none" }}>
              Quiz
            </Link>
            </p>
            <p>
            <Link as={Link} to="/utmaningar" className="text-white hover-overlay" style={{ textDecoration: "none" }}>
              Utmaningar
            </Link>
            </p>
            </div>

            
          </div>
        </div>
       
      </section>

    </div>
  );
};

export default Footer;
