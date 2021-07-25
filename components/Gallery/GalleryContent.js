import React, { Component } from 'react';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import firebase from "../../lib/firebaseConfig";
import { useEffect } from 'react';
import { useState } from 'react';



const GalleryContent = () => {

    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpenImage, setIsOpenImage] = useState(false);
    const [images, setImages] = useState([])

    const imagesList = async () => {
        let result = await firebase.storage().ref().child('gallery').listAll();
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
        <section className="gallery-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Gallery</h2>
                    <div className="bar"></div>
                    <p>Here are some great shots on our fully-equipped motorcycle workshop in Al Quoz Industrial-3. We are specialists in delivery motorcycle repairs, especially on Bajaj Pulsar and Honda Unicorn with the most affordable pricing in Dubai!  </p>
                </div>
                <div className="d-flex flex-wrap px-1" style={{
                    borderRadius: "10px",
                    backgroundColor: "#434343"
                }}>

                    {images?.length > 0 && images?.map((imgUrl, i) => {
                        return (
                            <div key={i + "gallery"} className="d-flex justify-content-center align-items-center col-lg-3 col-md-6 p-lg-1 p-md-3 my-lg-1 my-md-3" style={{
                                height: "min-content"
                            }}>
                                <div className="single-image">
                                    <img className="filter-juno" src={imgUrl?.value} alt="motorcycle repairs dubai" style={{
                                        height: "200px",
                                        width: "auto",
                                        borderRadius: "10px",
                                    }} />

                                    <Link href="#">
                                        <a
                                            className="popup-btn"
                                            onClick={e => { e.preventDefault(); setIsOpenImage(true); setPhotoIndex(i); }}
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}


                    {isOpenImage && (

                        <Lightbox
                            mainSrc={images[photoIndex]?.value}
                            nextSrc={images[(photoIndex + 1)?.value % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1)?.value % images.length]}
                            onCloseRequest={() => setIsOpenImage(false)}
                            onMovePrevRequest={() =>
                                setPhotoIndex((photoIndex + images.length - 1) % images.length)
                            }
                            onMoveNextRequest={() =>
                                setPhotoIndex((photoIndex + 1) % images.length)
                            }
                        />
                    )}


                </div>
            </div>


        </section>
    );
}

export default GalleryContent;
