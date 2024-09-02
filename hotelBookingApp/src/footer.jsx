import React from "react";


//this component contains the footer and we have used bootstrap classes to create the footer.
export const Footer = () => {
  return (
    <div className="text-center fixed-bottom text-lg-start text-light border-top border-dark " style={{ backgroundColor: '#3E5682' }}>
      <section className="">
        <div className="container text-center text-md-start mt-2">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3  ">
              <h6 className="text-uppercase fw-bold">
                <i className="fas fa-gem me-3"></i>Quest Quisar Hotel
              </h6>
              <p>
              "Elevate Your Stay: Where Luxury Meets Unforgettable Experiences."
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 ">
              <h6 className="text-uppercase fw-bold mb-2">Our Address:</h6>
              <p>
                <i className="fas fa-home me-3"></i> Stockholm, 10012, Sweden
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 ">
              <h6 className="text-uppercase fw-bold mb-2 link-underline-opacity-0" >Contact E-mail</h6>
              <p>
                <i className="fas fa-envelope me-3"></i>
                quest@quisar.com
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3  mb-md-0">
              <h6 className="text-uppercase fw-bold mb-2">Contact Number</h6>
              <p>
                <i className="fas fa-phone me-3"></i> +46 8-555 555 55
              </p>
            </div>
          </div>
        </div>
        <p className="text-center ">Copyright&copy; 2023 Quest Quisar Hotel. All Rights Reserved.</p>
      </section>

    </div>
  );
};
