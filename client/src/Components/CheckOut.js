import React, {Component} from 'react';
// import react-dom from 'react-dom';
// import react-router-dom from 'react-router-dom';
import {Form,FormGroup,Label,Input,Col,Row, Button} from 'reactstrap';
import config from '../config';

class CheckOut extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            email: ''
        }
    }

    changeHandler = (event) => 
    {
        let value = event.target.value;
        this.setState({email: value});
    }

    submitForm()
    {
        console.log(this.state);
        fetch(config.host+'/checkout',
        {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res)=>{
            console.log(res);
            if(res.status===200) window.alert("Successfully Checked Out");
            else window.alert("User doesn't exist");
        });
    }

    render()
    {
        return(
            <div className="mt-4">
                <Col sm={{ size: 6, order: 2, offset: 3 }}>
                    <Col style={{textAlign: 'center'}}><h1>CHECK OUT</h1></Col>
                    <Form>
                        <FormGroup>
                            <Label for="visitorEmail">Email</Label>
                            <Input type="email" name="email" id="visitorEmail" placeholder="john@doe.com" onChange={this.changeHandler} />
                        </FormGroup>
                        <FormGroup check row>
                            <Button onClick={()=>this.submitForm()}>Submit</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </div>
        );
    }
}

export default CheckOut;