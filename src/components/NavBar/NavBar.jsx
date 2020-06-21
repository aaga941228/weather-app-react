import React from 'react'

const NavBar = ({ handlerWeatherCity }) => (
  <nav className="navbar navbar-dark bg-dark">
    <span className="navbar-brand">Weather</span>
    <form className="form-inline" onSubmit={handlerWeatherCity}>
      <input className="form-control mr-sm-2" type="search" placeholder="Choose a city" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>
)

export default NavBar