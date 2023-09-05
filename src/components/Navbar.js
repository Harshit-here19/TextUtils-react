import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg`}>
    <div className="container-fluid">
        {/* <Link className={`navbar-brand text-${props.textHand}`} to="/">{props.title}</Link> */}
        <a className={`navbar-brand text-${props.textHand}`} href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                {/* <Link className={`nav-link active text-${props.textHand}`} aria-current="page" to="/">Home</Link> */}
                <a className={`nav-link active text-${props.textHand}`} aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                {/* <Link className={`nav-link text-${props.textHand}`} to="/about">{props.aboutText}</Link> */}
                <a className={`nav-link text-${props.textHand}`} href="#">{props.aboutText}</a>
                </li>
                
            </ul>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-primary" type="submit">Search</button>
            </form> */}
            
            <div className='d-flex flex-column flex-md-row flex-lg-row'>
                <div className="container align-self-center d-flex justify-content-end w-25">
                    <span className={`rounded-circle bg-${props.success} text-${props.success} p-0 mx-1 btn`} onClick={props.green}>GR.</span>        
                    <span className={`rounded-circle bg-${props.warning} text-${props.warning} p-0 mx-1 btn`} onClick={props.orange}>GR.</span>        
                    <span className={`rounded-circle bg-${props.danger} text-${props.danger} p-0 mx-1 btn`} onClick={props.red}>GR.</span>        
                </div>
                
                <div className={`form-check align-self-center form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                    <input type="checkbox" className="form-check-input" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                    <label htmlFor="flexSwitchCheckDefault" className="form-check-label">Enable Dark Mode</label>
                </div>
            </div>
        </div>
  </div>
</nav>
  );
}

Navbar.propTypes = {title : PropTypes.string.isRequired,
                    aboutText : PropTypes.string.isRequired}

Navbar.defaultProps = {
    title : "Set Title Here",
    aboutText : "Set About Here"
};

// For Aqua Color - linear-gradient(0deg, #b3ffab 0%, #12fff7 100%)