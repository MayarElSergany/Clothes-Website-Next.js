import styles from "../styles/Home.module.css";
import Image from 'next/image';
function Home() {
    return (
        <>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <img src="https://images.ctfassets.net/3s5io6mnxfqz/6zxbL5mLDeQZz7e6SPeOKA/1a3bbd623304b9e014b8ac92959dd715/AdobeStock_233207019.jpeg?fm=jpg&w=900&fl=progressive" width='1280' height='500' />
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <p>At vero eos et non provident, Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus sa Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
                </div>
                <br /><br />
                <div className="row">
                    <h1>Best Selling Products</h1>
                    <hr />
                    <br /><br />
                </div>
                <div className="row">
                    <div className="col-lg-4">

                        <div className="card">
                            <div className={styles.zoomin}>
                                <img src="https://media.istockphoto.com/photos/street-style-shoot-woman-on-pink-wall-swag-girl-wearing-jeans-jacket-picture-id1284839442?b=1&k=20&m=1284839442&s=170667a&w=0&h=3pl57qkeSqRm_4Eqkmwplom6uhErSFE4aaPVBAzjws4=" className="card-img-top w-100" alt="..." /></div>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className={styles.zoomin}>
                                <img src="https://media.istockphoto.com/photos/street-style-shoot-woman-on-pink-wall-swag-girl-wearing-jeans-jacket-picture-id1284839442?b=1&k=20&m=1284839442&s=170667a&w=0&h=3pl57qkeSqRm_4Eqkmwplom6uhErSFE4aaPVBAzjws4=" className="card-img-top w-100" alt="..." /></div>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className={styles.zoomin}>
                                <img src="https://dianapaukstyte.com/image/data/WDX_8883-58f7ac651aad8.jpg" className="card-img-top w-100" width="100%" alt="..." /></div>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />

                <div className="row">
                    <div className="col-lg-8">
                        <img src="https://cdn11.bigcommerce.com/s-26pc2i6nri/images/stencil/original/products/2094/4096/SKA946-1__16327.1571996587.jpg?c=2&imbypass=on&imbypass=on" width="800" height="480"/>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <p style={{ border: "2px solid violet" }}>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                        </div>

                        <div className="row">
                            <p style={{ border: "2px solid violet" }}>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                        </div>
                        <div className="row">
                            <p style={{ border: "2px solid violet" }}>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </>
    );
};

export default Home;
