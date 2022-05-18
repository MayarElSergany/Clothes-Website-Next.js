import styles from "../styles/Contact_Us.module.css";
const contact = () => {
    return (
        <>
       
        <br/><br/>
            <div   className={styles.background} >
                <div className="col-lg-10">
                    <div className={styles.border}>
                        <div className="row">
                            <h1 className={styles.align}><b>Contact Us</b></h1>
                        </div>

                        <form className="col-lg-9">
                            <div className="row">
                                <input type="text" value="Name" name="name" className={styles.input} />
                            </div>
                            <br /><br/><br/>
                            <div className="row">
                                <input type="text" value="Email" name="email" className={styles.input} />
                            </div>
                            <br /><br/><br/>
                            <div className="row">
                                <textarea type="text" value="Message" name="message" className={styles.input} />
                            </div>
                            <br/><br/>
                            <div className={styles.container}>
                            <button type="button" className={styles.button}><b>Send Your Message</b></button>
                            </div>
                            <br/><br/><br/><br/><br/><br/>
                        </form>
                    </div>
                </div>

            </div>
            <br/><br/>
        </>
    );
};

export default contact;