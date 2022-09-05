import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap'
import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

export const About = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    }, [])

    return (
        <section className='about_section'>
            <Container>
                <div className='second_div' data-aos="fade-up-left"
                    data-aos-duration="500"
                >
                    <Row>
                        <Col>
                            <div>
                                <img className='profile_pic'
                                    src={require('../images/myimage.jpg')}
                                    alt='profile' />
                            </div>
                        </Col>
                        <Col>
                            <div className='about_info'>
                                <h3><u>U Manvith Kumar:</u></h3>
                                <h5>Software Engineer</h5>
                                <span>Graduated from SIT Mangalore,I started my career as a software engineer with almost zero knowledge about the programming languages,now it has become one my hobby to 
                                write comples programs and designing a website using latest technologies.
                                </span>
                                <p>" Gain knowledge from your surroundings" is my moto now.Thank You.</p>
                                <DropdownButton id='dropdown_down'  title="Hobbies">
                                    <Dropdown.Item className='droplist' href="#">Digital Illustration</Dropdown.Item>
                                    <Dropdown.Item className='droplist' href="#">Web Designing</Dropdown.Item>
                                    <Dropdown.Item className='droplist' href="#">Playing Games</Dropdown.Item>
                                    <Dropdown.Item  className='droplist'href="#">Reading Books</Dropdown.Item>
                                    <Dropdown.Item className='droplist' href="#">Travelling</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>

        </section>
    )
}