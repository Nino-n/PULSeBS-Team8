import React from 'react'
import {Container, Row,Col, Alert, Button} from 'react-bootstrap'


const LectureItem=(props)=>{
    let l=props.lecture;
    return <>
        <Container>
                <Row>
                    <Col>
                        <Alert variant="success">
                            <Row>
                                <Col className="subjectName">
                                    <h6>{l.subject}<br/></h6>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                               <Col className="align-content-start date">
                                   <h5>Lecture of {l.date} at {l.hour}</h5>
                               </Col>
                            </Row>
                            <Row >
                               <Col  xs={6} md={4} className="align-content-start"><h5>Room: {l.room}</h5></Col>
                               <Col  xs={6} md={4} className="align-content-end"><h5>Booked students: {l.bookedStudents}</h5></Col>
                               <Col><h5></h5></Col>
                               <Col><Button variant="danger">Cancel</Button></Col>
                            </Row>
                        </Alert>
                    </Col>
                </Row>
            </Container>
    </>
}


class RegisteredCourses extends React.Component{
    constructor(props) {
        super(props);
        this.state={lectures:[
            {subject:"COMPUTER SCIENCE",date:"30/11/2020",hour:"16:00",room:"VIRTUAL",bookedStudents:26},
                {subject:"COMPUTER SCIENCE",date:"01/12/2020",hour:"13:00",room:"VIRTUAL",bookedStudents:123},
                {subject:"COMPUTER SCIENCE",date:"04/12/2020",hour:"10:00",room:"VIRTUAL",bookedStudents:78},
                {subject:"COMPUTER SCIENCE",date:"05/12/2020",hour:"08:30",room:"VIRTUAL",bookedStudents:56}

            ]}
    }
    render(){
        return(
            <>
                <Container fluid>
                    <Row className="justify-content-md-center below-nav"><h3>Registered Courses: </h3></Row>
                    {this.state.lectures.map((e)=>{return <LectureItem lecture={e}/>})}
                </Container>

            </>


        )
    }

}
export default RegisteredCourses;