import React from 'react';
import './Header.css';
import { Avatar } from "@material-ui/core";
import AccessTime from "@material-ui/icons/AccessTime"
import Search from "@material-ui/icons/Search"
import HelpOutline from '@material-ui/icons/HelpOutline';
import {useStateValue} from '../StateProvider'
const Header = () =>{
    const [{user}] = useStateValue();
    return(
        <div className='header'>
            <div className='header__left'>
                {/* Avatar for logged in user */}
                <Avatar className='header__avatar' alt={user?.displayName} src={user?.photoURL}/>
                {/* Time Icon */}
                <AccessTime />
            </div>
            <div className='header__search'>
                {/* Search Icon */}
                <Search />
                {/* input */}
                <input placeholder='search slack community' />
            </div>
            <div className='header__right'>
                {/* help icon */}
                <HelpOutline />
            </div>
        </div>
    )
}

export default Header;