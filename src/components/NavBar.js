import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';
import { GrLinkedin,GrInstagram } from 'react-icons/gr'
import { BsFacebook } from 'react-icons/bs'

export const NavBar = () => {

const[activelink,setactivelink]=useState('home')
const[scrolled,setscrolled]=useState(false)

useEffect(()=>{
    const onScroll = () =>{
        if(window.scrollY>50){
            setscrolled(true)
        }
        else{
            setscrolled(false)
        }
    }

 window.addEventListener("scroll",onScroll);
    return ()=>{
        window.removeEventListener("scroll",onScroll)
    }
},[])

    return (
        <Navbar className='navbar' expand="lg">
            <Container>
            <Navbar.Brand href="/">
                    <h4 className='nav-head'>Portfolio App</h4>
                    </Navbar.Brand>
                <Navbar.Brand href="/">
                    <img  className='logo-head' src={require('../images/fox-icon.png')} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle classname='nav_toggler' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  classname='nav_toggler'  id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='list_name' href="#home">Home</Nav.Link>
                        <Nav.Link className='list_name' href="#skills">Skills</Nav.Link>
                        <Nav.Link className='list_name' href="#projects">Projects</Nav.Link>
                    </Nav>
                <span className='navbar-text'>
                <div className='social-icon'>
                    <a  href='https://www.linkedin.com/in/u-manvith-kumar'><GrLinkedin/></a>
                    <a  href='https://www.instagram.com/manvith._.k._.gatty'><GrInstagram/></a>
                    <a href='https://www.facebook.com/u.manvith.kumar'><BsFacebook/></a>
                    </div>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}