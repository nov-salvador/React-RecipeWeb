import React from 'react'
import { GiBowlOfRice, GiFullPizza, GiHamburger, GiNoodles } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import GoBackBtn from './GoBackBtn';
function Category() {
  return (
    <>
      <div className='category-container'>
        <NavLink to='/recipes/cuisine/American' className="category-list">
          <GiHamburger style={{ width: '2em', height: '2em' }}/>
          <h4>American</h4>
        </NavLink>
        <NavLink to='/recipes/cuisine/Japanese' className="category-list">
          <GiNoodles style={{ width: '2em', height: '2em' }}/>
          <h4>Japanese</h4>
        </NavLink>
        <NavLink to='/recipes/cuisine/Italian' className="category-list">
          <GiFullPizza style={{ width: '2em', height: '2em' }}/>
          <h4>Italian</h4>
        </NavLink>
        <NavLink to='/recipes/cuisine/Indian' className="category-list">
          <GiBowlOfRice style={{ width: '2em', height: '2em' }}/>
          <h4>Indian</h4>
        </NavLink>
      </div>
      <GoBackBtn/>
    </>
  )
}

export default Category