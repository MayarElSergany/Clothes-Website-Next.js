
const product_Details = ({ customer }) => {
    console.log(customer);
    return (
        <>
            <br />
            <div className="card mb-3">
                <img src={customer.image} className="card-img-top" alt="..." width="400px" height="700px" />
                <div className="card-body">
                    <h5 className="card-title">{customer.id}</h5>
                    <h5 className="card-title">{customer.title}</h5>
                    <h3 className="card-text">{customer.description}</h3>
                    <h3 className="card-text"><small className="text-muted">Size: {customer.size}</small></h3>
                    <h3 className="card-text"><small className="text-muted">Price: {customer.price}</small></h3>
                    <h3 className="card-text"><small className="text-muted">Color: {customer.color}</small></h3>
                </div>
            </div>
        </>
    )
}
export default product_Details

export async function getStaticPaths() {
    return {
        paths: [
            { params: { product_Details: '1' } },
            { params: { product_Details: '2' } },
            { params: { product_Details: '3' } },
        ],
        fallback: 'blocking'
    }
}
export async function getStaticProps(context) {
    const { params } = context
    const res = await fetch(`http://localhost:3000/customers/${params.product_Details}`)
    const data = await res.json()
    return {
        props: {
            customer: data
        },
        revalidate: 10
    }
}
