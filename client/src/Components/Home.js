import React, {Component} from 'react';
import {Button,Col,Row} from 'reactstrap';
// import react-dom from 'react-dom';
import {Link} from 'react-router-dom';

class Home extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div style={{'padding-top':'40vh'}}>
                <Row>
                <Col sm={{size: 3, offset: 3}} style={{textAlign: "center"}}><Link style={{color:"#fff"}} to='/checkin'><h1>CheckIn</h1></Link></Col>
                <Col sm={{size: 3}} style={{textAlign: "center"}}><Link style={{color:"#fff"}} to='/checkout'><h1>CheckOut</h1></Link></Col>
                </Row>
            </div>
        );
    }
}

export default Home;