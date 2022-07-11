import React from 'react';
import { NavLink } from 'react-router-dom'
import { getAuth, signOut} from 'firebase/auth'


export default function Logout() {
    const auth = getAuth();

    function handleSignout() {
        signOut(auth).then((user) =>{
console.log('user signed out', user);
        })
    }


	return (
<NavLink to='/' className="signout-btn" onClick={handleSignout}>Sign Out</NavLink>
	);
}

