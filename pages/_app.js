import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../node_modules/bootstrap/dist/js/bootstrap.min.js")
  }, [])
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
      <Header />
      <div className='container'>
        <Component {...pageProps} />
      </div>
      {/* <Home /> */}
      <Footer />
    </>
  )
}

export default MyApp
