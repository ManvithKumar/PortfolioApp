import { Col } from 'react-bootstrap'

export const Cards=({ title,description,imageUrl,pid})=>{

    return(
        <Col sm={6} md={4} >
            
            <div className='project-imgbx'
            data-aos="flip-left"
            data-aos-duration="1000"
            >
                <img className='image' src={imageUrl} alt=''/>
                <h3>{title}</h3>
                <span>{description}</span>
            </div>
        </Col>
    )
}