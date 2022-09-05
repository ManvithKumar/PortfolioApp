import {
    Container, Row, Col,  Form, Button

} from 'react-bootstrap'
import emailjs from 'emailjs-com'
import Typewriter from 'typewriter-effect/dist/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Contact = () => {
    new Typewriter('', {
        strings: ['Feedback Us'],
        autoStart: true,
        cursor: '|',
        loop: true
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tlzzyun', 'template_0p8ysab', e.target, 'cCc8kX7JpSIOyTW-D')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        notify();
    };


    const notify = () =>
        toast.success("Thank You For Your Feedback");

    return (
        <section className='contact-section'>
            <Container>
                <div className="contact-container">
                    <Row>
                        <h3 id='contact-heading' >FeedBack Us:</h3>
                    </Row>
                    <Row>
                        <Col id="contact-image"  
                        data-aos="fade-left"
                        >
                            <img className='contact-image' src={require('../images/contact.png')} alt='image' />
                        </Col>
                        <Col>
                            <Form id='contact-form'
                            data-aos="fade-right"
                             onSubmit={sendEmail} >
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" name='name' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Reply</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder='Reply here...!' name="message" />
                                </Form.Group>
                                <Button variant="primary" id='contact_submit-btn'  type="submit">
                                    Submit
                                </Button>
                            </Form>
                            <ToastContainer
                                position="bottom-center"
                                autoClose={1000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                theme='dark'
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}