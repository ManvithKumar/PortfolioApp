import { useNavigate, useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { projects } from './ProjectData';
import Carousel from 'react-bootstrap/Carousel';

export const Explore = () => {

    var { id } = useParams();

    id = id.split('')


    const [data, setdata] = useState([])

    const getThePid = async () => {
        const currentproject = await projects.filter(project => project.pid == id[1])
        setdata(currentproject)
        { console.log(data) }
    }

    useEffect(() => {
        getThePid()
    }, [])


    return (
        <section>
            {data.map((project) => {
                return <Container>
                    <Row id='explore-heading'>
                        <h3>Welcome To Project Section</h3>
                    </Row>
                    <Row id='row-carasouel' >
                        <Carousel fade
                        id='carousel'
                        >
                        <Carousel.Item >
                                <img
                                    className="d-block w-100"
                                    src={project.imageUrl}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item >
                                <img
                                    className="d-block w-100"
                                    src={project.images[0]}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={project.images[1]}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3 className='explore-h3'>Second slide label</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={project.images[2]}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                    <Row>
                        <div className='explore-info'>
                            <h3>Name : {project.title}</h3>
                            <h5>Author of project : {project.Author}</h5>
                            <span>Year of Publishment : {project.Year}</span><br/>
                            <span>Description : {project.description}</span>
                        </div>
    
                    </Row>
                </Container>
            })}
        </section>
    );
}