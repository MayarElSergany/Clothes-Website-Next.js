
import Image from 'next/image';
import styles from "../styles/About.module.css";
import React, { useState } from 'react';

const About = () => {
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <p className="extra-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab
            porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero
            commodi officia aliquam!
        </p>
    </div>
    const linkName = readMore ? 'Read Less <<' : 'Read More >> '

    return (
        <>
            <br /><br />
            <div className='row'>
                <div className='col-lg-12'>
                    <div className={styles.shrink}>
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/dress-1.jpg" className={styles.carouselImg} alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>First Dress</h5>
                                        <p>See this beautiful dress.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="/dress-2.jpg" className={styles.carouselImg} alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Second Dress</h5>
                                        <p>See this flowery dress.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="/dress-4.jpg" className={styles.carouselImg} alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third Dress</h5>
                                        <p>Look at this wonderful dress.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />

            <div className='row'>
                <div className='col-lg-8'>
                    <Image src="/pink dress.jpg" width="800px" height="400px" />
                </div>
                <div className='col-lg-4'>
                    <div className='row'>
                        <h1>Best Collection
                        </h1>
                        <hr />
                    </div>
                    <div className='row'>
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        <br />
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    <div className="App">
                        <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}><button className={styles.btn}>{linkName}</button></a>
                        {readMore && extraContent}
                    </div><br /><br />
                </div>

            </div>
        </>
    );
};
export default About;