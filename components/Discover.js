import React, { useState, useEffect } from 'react';
import { Carousel } from "react-responsive-carousel"
import firebase from "../lib/firebaseConfig";

const Discover = () => {
  const [images, setImages] = useState([])
  const imagesList = async () => {
    let result = await firebase.storage().ref().child('services').listAll();
    let urlPromises = result?.items?.map(imageRef => {
      return imageRef.getDownloadURL()
    });

    Promise.allSettled(urlPromises).then((values) => {
      return setImages(values);
    })

  };


  useEffect(() => {
    imagesList()
  }, [])
  return (
    <section className="services py-5">
      <div className="container">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="discover-content">
              <h2>Services Overview</h2>

              <p>
                Gulf Motorcycles offers a full range of repairs & maintenance services
                coupled by a wide array of spare parts ensuring complete care for any
                two wheeler delivery motorcycles across in Dubai.
              </p>
              <p>
                Our professionals are trained to manage all brands of
                motorcycles and are experts at Dubai's favorite delivery bikes
                such as Bajaj Pulsar and Honda Unicorn.
              </p>
              <p>
                "Affordability and quality service" is our motto. It is important to us that customers can rely on Gulf Motorcycles with a peace of mind, and most importantly, the peace of ride.

              </p>
              <ul>
                <li>
                  <i className="icofont-check"></i> Engine Work
                </li>
                <li>
                  <i className="icofont-check"></i> Branding & Painting
                </li>
                <li>
                  <i className="icofont-check"></i> General Maintenance
                </li>
                <li>
                  <i className="icofont-check"></i> Tyres
                </li>
                <li>
                  <i className="icofont-check"></i> Bike Wash
                </li>
                <li>
                  <i className="icofont-check"></i> Oil Change
                </li>
                <li>
                  <i className="icofont-check"></i> Roadside Assistance
                </li>
                <li>
                  <i className="icofont-check"></i> Leasing & Renting
                </li>
                <li>
                  <i className="icofont-check"></i> Motorcycle Parts
                </li>
                <li>
                  <i className="icofont-check"></i> Pick & Drop
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <Carousel showArrows={true}
              showThumbs={false}
              autoPlay={true}
              dynamicHeight={true}
              centerMode={true}
              centerSlidePercentage={75}
              infiniteLoop={true}
              interval={2000}
            // onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}
            >
              {images?.length > 0 && images?.map((imgUrl, i) => {
                return (
                  <div key={i + "services"} className="d-flex" >

                    <img src={imgUrl?.value} alt="motorcycle repairs dubai" style={{
                      height: "450px",
                      width: "auto",
                      borderRadius: "10px",
                    }} />

                  </div>
                )
              })}

            </Carousel>
            {/* <div className="discover-img">
                <img
                  loading="lazy"
                  src="/images/landing-page-bike.png"
                  alt="Gulf Motorcycle Repairs Dubai"
                  width="2000px"
                  height="2000px"
                />
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );

}

export default Discover;
