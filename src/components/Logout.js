import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
	const logout = () => {
		localStorage.clear("token");
	};

	return (
		<Link to="/" className="nav-link" onClick={logout}>Log Out</Link>
	)
}

export default Logout;