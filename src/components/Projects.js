import { Container,Row,Col,Nav ,Tab} from 'react-bootstrap'
import { Cards } from './Cards'
import { motion } from 'framer-motion'
import {projects} from '../ProjectData'

export const Projects=()=>{


return(
    <motion.section 
    data-aos="fade-up"
    className="project" id="projects">
    <Container>
        <Row>
            <Col>
            <h2>Projects</h2>
            <p>A strong project description provides a roadmap for stakeholders and communicates the vision without getting bogged down in details. We’ve compiled expert tips and sample project descriptions to help you get started.,</p>
            <Row>
                        {
                            projects.map((project,index)=>{
                                return(
                                    <Cards
                                    key={index}
                                    {...project}/>
                                )
                            })
                        }
                    </Row>
            </Col>
        </Row>
    </Container>
    
    </motion.section>
)

}