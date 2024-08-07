import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Products from '../components/Products'
import toast, { Toaster } from 'react-hot-toast';
import StateContext from '../context/state/StateContext';
import FetchContext from '../context/Fetch/FetchContext';


const Home = () => {

  const { products } = useContext(StateContext)
  const { getAllProducts } = useContext(FetchContext)

  useEffect(() => {
    getAllProducts();
  }, [])

  return (
    <>
      <div className="herosection">
        <div className="content">
          <h1>Rent Decor</h1>
          <h2>Essentials</h2>
        </div>
        <img src="/images/furniture2.png" className='img-fluid img-left' alt="" />
        <img src="/images/furniture1.png" className='img-fluid' alt="" />
        <img src="/images/furniture3.png" className='img-fluid img-right' alt="" />
      </div>

      <div className="category">
        <Link className="cat-item">
          <div className="cat-img">
            <img src="/images/sofa.jpg" className='img-fluid' alt="" />
          </div>
          <h3>Sofa</h3>
        </Link>
        <Link className="cat-item">
          <div className="cat-img">
            <img src="/images/tables.jpg" className='img-fluid' alt="" />
          </div>
          <h3>Tables</h3>
        </Link>
        <Link className="cat-item">
          <div className="cat-img">
            <img src="/images/chairs.jpg" className='img-fluid' alt="" />
          </div>
          <h3>Chairs</h3>
        </Link>
        <Link className="cat-item">
          <div className="cat-img">
            <img src="/images/beds.jpg" className='img-fluid' alt="" />
          </div>
          <h3>Beds</h3>
        </Link>
      </div>

      <div className="container-fluid padd-x mb-5 overflow-hidden">
        <div className="heading">
          <Link className='button d-md-block d-none'>
            <span class="text-wrapper" data-text="View All"></span>
            <div class="fill"></div>
          </Link>
          <h2>Elegant Quality & <br /> top notch at every corner</h2>
        </div>
        <Products product={products} />
        <div className='mt-4 d-flex align-items-center justify-content-center'>
          <Link to="/products" className='button d-md-none d-block'>
            <span class="text-wrapper" data-text="View All"></span>
            <div class="fill"></div>
          </Link>
        </div>
      </div>

      <div className="paralax">
        <div className="container content">
          <h2>Browse modern today!</h2>
          <p>Dive into our curated collection of contemporary furniture and decor, meticulously designed to elevate your living spaces.</p>
        </div>
      </div>
    </>
  )
}

export default Home
