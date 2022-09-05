import { Container, Row, Col } from 'react-bootstrap'
import { GrLinkedin, GrInstagram } from 'react-icons/gr'
import { BsFacebook } from 'react-icons/bs'

export const Footer = () => {
    return (
        <section classname='footer'
        >
            <Container id="footer-container">
                <Row>
                    <h2 id='footer_head'>Portfolio App</h2>
                </Row>
                <Row>
                    <p id='footer_para'>It was pleasure to know that you visited my website,Hope you liked and please support me inthe following projects.Thank you🥰</p>
                </Row>
                <Row>
                <div className='footer_icon'>
                <h4>Follow Us:</h4>
                    <a href='https://www.linkedin.com/in/u-manvith-kumar'><GrLinkedin /></a>
                    <a href='https://www.instagram.com/manvith._.k._.gatty'><GrInstagram /></a>
                    <a href='https://www.facebook.com/u.manvith.kumar'><BsFacebook /></a>
                </div>
                </Row>
            </Container>
        </section>
    )
}