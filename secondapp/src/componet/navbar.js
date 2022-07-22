import React from 'react'
import Home from './home'
import "./nav.css"

function Navbar() {
  return (
    <div className='navb'>
<nav className="navbar navbar-expand-lg navbar-primary">
    <div className="container-fluid">
        <a href="/Brand" className="btn">Brand</a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse9">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className='buttons'>
        <div className="collapse navbar-collapse" id="navbarCollapse9">
            <div className="navbar-nav">
                <a href="/" className="btn">Home</a>
                <a href="/about" className="btn">About</a>
                <a href="/product" className="btn" >Products</a>
            </div>
           </div>
        </div>
    </div>        
</nav>
</div>
  )

}

export default Navbar