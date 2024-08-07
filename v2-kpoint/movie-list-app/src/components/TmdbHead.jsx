import React from 'react';
import logo from '/logo.svg';

const TmdbHead = () => {
  return (
    <div className='tmdb-head'>
      <div className='container tmdb-head-con'>
          <div className='tmdb-head-flex'>
            <img className='tmdb-head-flex-img' src={logo} alt="" />
          </div>
          <div className='tmdb-head-btn'>
            <div className='tmdb-head-btn-flex'>
              <a className='btn-primary action' href="">All</a>
              <a className='btn-primary' href="">Popular</a>
              <a className='btn-primary' href="">Top Rated</a>
              <a className='btn-primary' href="">Upcoming</a>
              <a className='btn-primary' href="">Now Playing</a>
              <a className='btn-primary' href="">Latest</a>
              <a className='btn-primary' href="">Old</a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default TmdbHead