import React from 'react'
import "./nav.css"

function Navbar() {
  return (
    <div className='navb'>
<nav className="navbar navbar-expand-lg navbar-primary">
    <div className="container-fluid">
        <a href="/Brand" className="navbar-brand">Brand</a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse9">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className='pages'>
        <div className="collapse navbar-collapse" id="navbarCollapse9">
            <div className="navbar-nav">
                <a href="/" className="nav-item nav-link active">Home</a>
                <a href="/about" className="nav-item nav-link">About</a>
                <a href="/product" className="nav-item nav-link">Products</a>
            </div>
           </div>
        </div>
    </div>        
</nav>
</div>
  )

}

export default Navbar