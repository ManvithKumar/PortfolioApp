import { Container, Row, Col } from 'react-bootstrap'
import {
    ResponsiveContainer,
    AreaChart, Area, Pie, PieChart, Legend, Cell

} from 'recharts'

export const Skills = () => {
    const data = [
        { name: 'Java', value: 60,},
        { name: 'Python', value: 90, },
        { name: 'C', value: 50,},
        { name: 'javascript', value:80,},
        {name:'Digital Illustration',value:75},
        {name:'Cloud Computing',value:25}
    ]
const COLORS=['#f53d18','#ad6c09','#146aff','#fcfc03','#fc033d','#89f516' ]

    return (
        <section className="skill" id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx"
                            data-aos="flip-up"
                        >
                            <h2>
                                Skills
                            </h2>
                            <ResponsiveContainer width={"100%"} height={300}  >
                                <PieChart className='piechart-bx'>
                                    <Pie dataKey="value" data={data} fill={'#ffff'} label
                                        isAnimationActive={true}
                                        paddingAngle={5}
                                    >
                                        {
                                        data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                                    }
                                    </Pie>
                                    <Legend layout="vetical" 
                                    align='right'
                                    verticalAlign = "bottom"
                                     values={data}/>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}