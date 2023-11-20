import React, {Fragment, useEffect, useState} from 'react';
import {Dropdown, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo1 from '../Assets/Images/juLogo.jpg';

function TopMenu(props) {
    const [css,setCss] = useState({
        navBar:'navBar',
        navLink:'navLink',
        nabBrand:'navBrand',
        logo:logo1
    })
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    useEffect(()=>{
        function handleScroll(){
            if(window.scrollY>1){
                setCss({
                    navBar:'navBarScroll',
                    navLink:'navLinkScroll',
                    nabBrand:'navBrandScroll',
                    logo:logo1
                });
            }
            else{
                setCss({
                    navBar:'navBar',
                    navLink:'navLink',
                    nabBrand:'navBrand',
                    logo:logo1
                });
            }
        }
        window.addEventListener('scroll',handleScroll);
        return ()=>window.removeEventListener('scroll',handleScroll);
    })
    return (
        <Fragment>
            <Navbar className={css.navBar} fixed = "top" collapseOnSelect expand="sm">
                <Navbar.Brand className="m-0 p-0" href="#home"><Link to="/"><img className="logoImg" src={css.logo} alt=""/></Link></Navbar.Brand>
                <Navbar.Toggle className="hIcon" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"/>
                    <Nav className="nav">
                        <Nav.Link ><Link to="/" className={css.navLink} >Home</Link></Nav.Link>
                        <Nav.Link ><Link to="/"  className={css.navLink} >About</Link></Nav.Link>
                        <Nav.Link ><Link to="/"  className={css.navLink} >Registration</Link></Nav.Link>
                        <Dropdown
                            as={Nav.Item}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            show={dropdownOpen}
                        >
                            <Dropdown.Toggle className={css.navLink}  as={Nav.Link} id="dropdown-basic">Committee</Dropdown.Toggle>
                            <Dropdown.Menu className="ddBox">
                                <Dropdown.Item className={css.navLink} as={Link} to="/">Chairman</Dropdown.Item>
                                <Dropdown.Item className={css.navLink} as={Link} to="/">VC</Dropdown.Item>
                                <Dropdown.Item className={css.navLink} as={Link} to="/">Department</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link><Link to="/"  className={css.navLink} >Gallery</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    );
}

export default TopMenu;