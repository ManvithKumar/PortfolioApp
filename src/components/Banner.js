import { Col, Container, Row } from "react-bootstrap"
import countapi from 'countapi-js';
import { useState,useEffect } from "react"
import Typewriter from 'typewriter-effect/dist/core';
import CountUp from 'react-countup'

new Typewriter('', {
  strings: ['Hello Traveller..!', 'I am Manvith'],
  autoStart: true,
  deleteSpeed:25,
  pauseFor:1000,
  cursor:'_',
  loop:true
});

export const Banner=()=>{

    const[visits,setvisits]=useState(0)

useEffect(()=>{
    countapi.visits('home').then((result) => {
        console.log(result.value);
        setvisits(result.value)
      });
},[0])

    

    return(
        <section className="banner" id='home'>
            <Container>
                <Row classname='align-items-center'>
                    <Col classname='banner-area' xs={12} md={6} xl={7}>
                        <span className="tagline">I Am Manvith Gatty</span>
                        <h1 id="traveller" >{'Hello Traveller'}</h1>
                        <p>This Website has been viewed by people <CountUp className="visits" end={visits} useEasing={true}  duration={2.5} />  times..!</p>
                        <button>Connect</button>
                    </Col>
                   <Col  classname='banner_image' xs={12} md={6} xl={5}>
                        <img className="image_banner"  src={require('../images/lantern.png')} alt=''/>
                   </Col> 
                </Row>
            </Container>
        </section>
    )
}