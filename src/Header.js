import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Login from './Login';



function Header() {
    const [{basket, user}] = useStateValue();
    const login = ()=>{
        if(user){
            auth.signOut();
        }
    }
    
    console.log(basket);
  return (
    <nav className='header'>
        
        {/* logo on the left */}
        <Link to="/ ">
        <img className='header__logo'
         src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png" 
         alt="" />
        </Link>
        
        {/* search box */}
        <div className='header__search'>
        <input type="text" className='header__searchInput'/>
        <SearchIcon className='header__searchIcon'/>
        </div>
        

         {/* 3 Links  */} {/* Basket icon with the number */}
         <div className='header__nav'>
            {/* {1st Link} */}
            <Link to={!user && "/login"} className="header__link">
                <div onClick={login} className='header__option'>
                    <span className='header__optionLineOne'>Hello {user?.email} </span>
                    <span className='header__optionLineTwo'>{user ? "Sign Out" : "Sign In"}</span>
                </div>
            </Link>
            {/* {2nd Link} */}
            <Link to="/" className="header__link">
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
                
            </Link>
            {/* {3rd Link} */}
            <Link to="/" className="header__link">
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </Link>
            {/* {4th Link} */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingCartIcon/>
                    <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                </div>
            </Link>
            
         </div>
         
         

    </nav>
  )
}

export default Header;