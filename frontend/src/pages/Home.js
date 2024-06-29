import React from 'react'

const Home = () => {





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
        <div className="cat-item">
          <img src="/images/sofa.jpg" className='img-fluid' alt="" />
          <h3>Sofa</h3>
        </div>
        <div className="cat-item">
          <img src="/images/sofa.jpg" className='img-fluid' alt="" />
          <h3>Sofa</h3>
        </div>
        <div className="cat-item">
          <img src="/images/sofa.jpg" className='img-fluid' alt="" />
          <h3>Sofa</h3>
        </div>
        <div className="cat-item">
          <img src="/images/sofa.jpg" className='img-fluid' alt="" />
          <h3>Sofa</h3>
        </div>
      </div>

    </>
  )
}

export default Home
