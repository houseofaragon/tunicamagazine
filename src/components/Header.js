import React from 'react'
import '../css/App.scss';
import { Link } from 'react-router'
import Form from './Form'

const Header = () => {
  return (
    <div>
    	<div className='header'>
	    	<div id="cart">
	      	<ul>
		      	<li>cart</li>
		      </ul>
		    </div>
	    	<div id="menu-1">
	      	<ul>
		      	<li><Link to={'/shop'}><h4>shop</h4></Link></li>
		      	<li><Link to={'/magazine'}><h4>magazine</h4></Link></li>
		      	<li><Link to={'/studio'}><h4>studio</h4></Link></li>
		      </ul>
		    </div>
	    	<div id="logo">
	      	<ul>
	      		<li><Form /></li>
		      	<li><Link to={'/'}><h1>Tunica</h1></Link></li>
		      </ul>
		    </div>
	    	<div id="menu-2">
	      	<ul>
		      	<li><h4>search</h4></li>
		      	<li><Link to={'/categories'}><h4>categories</h4></Link></li>
		      	<li><h4>social</h4></li>
		      </ul>
		    </div>
		  </div>
    </div>
  )
}

export default Header
