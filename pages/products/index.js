import Link from 'next/link';
const index = () => {
    return (
        <>
        <br/><br/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                <div className="card" >
                    <img src="https://d17a17kld06uk8.cloudfront.net/products/HRDB9BL/434TZH3H-large.jpg" className="card-img-top" style={{ width: "100%", height:"250px"}}  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Dress 1</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="/products/1"><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-4">

                <div className="card">
                    <img src="https://pa.namshicdn.com/product/B6/JB7Z8801DC/3-zoom-desktop.jpg" className="card-img-top" style={{ width: "100%", height:"250px"}}  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Dress 2</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="/products/2"><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-4">

                <div className="card" >
                    <img src="https://i.pinimg.com/474x/13/31/b9/1331b92ca66a751e4bfc1eef0d81e74e.jpg" className="card-img-top" style={{ width: "100%", height:"250px"}}  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Dress 3</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="/products/3"><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
                </div>
                </div>
            <br/><br/>

                <div className="row">
                <div className="col-lg-4">

                <div className="card">
                    <img src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/R28940.jpg" className="card-img-top" style={{ width: "100%", height:"250px"}}  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Dress 4</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="/products/4"><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-4">

                <div className="card">
                    <img src="https://www.cards-gate.com/image/cache/2021/11/08/1636355834603416659-590x730.jpg" className="card-img-top" style={{ width: "100%", height:"250px"}}  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Dress 5</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="/products/5"><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-4">

                <div className="card">
                    <img src="https://peppermintmag.com/wp-content/uploads/2019/11/PeppermintSewingSchool44-A.jpg" className="card-img-top" style={{ width: "100%", height:"250px"}}  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Dress 6</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="/products/6"><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
                </div>
                </div>
                <br/>
                <div className="row">
                <div className="col-lg-4">
                <div className="card">
                    <img src="https://onefinedayweddingfair.com.au/wp-content/uploads/2020/01/OFD_WeddingDressesBigBoobs_Hero.jpg" className="card-img-top" style={{ width: "100%", height:"250px"}}  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Dress 7</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="/products/7"><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-4">

                <div className="card">
                    <img src="https://www.twinset.com/on/demandware.static/-/Sites-master-catalog/default/dw6f52a4d1/images/TwinSet/Images/Catalog/221TP2732-00384-04.JPG" className="card-img-top" style={{ width: "100%", height:"250px"}}  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Dress 8</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="/products/8"><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-4">

                <div className="card">
                    <img src="https://i.pinimg.com/736x/22/a9/bd/22a9bd6b9501f90bc0be1113fa230d88.jpg" className="card-img-top" style={{ width: "100%", height:"250px"}}  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Dress 9</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="/products/9" replace><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
                </div>
                </div>
            </div>
            <br/><br/>
        </>
    );
};

export default index;


