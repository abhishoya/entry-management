import React, {Component} from 'react';
import {Form,FormGroup,Label,Input,Col,Row, Button} from 'reactstrap';
import config from '../config';
import validator from 'validator';

class CheckIn extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            vName: '',
            vEmail: '',
            vpnum: '',
            hName: '',
            hEmail: '',
            hpnum: ''
        }
    }

    changeHandler = (event) => 
    {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    }

    validateForm = () =>
    {
        if( validator.isMobilePhone(this.state.vpnum,['en-IN'])
            && validator.isMobilePhone(this.state.hpnum,['en-IN'])
            && validator.isEmail(this.state.vEmail)
            && validator.isEmail(this.state.hEmail)
        ) this.submitForm();
        else window.alert("Incorrect/Incomplete Form");
    }

    submitForm = () =>
    {
        fetch(config.host+'/checkin',
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
            if(res.status===200) window.alert("Successfully Checked In");
            else window.alert("Couldn't check you in");
        })
        .catch((err)=>window.alert("Something went wrong"));
    }

    render()
    {
        return(
            <div className="mt-4">
                
                <Col sm={{ size: 6, order: 2, offset: 3 }}>
                    <Col sm={{size: 4, offset: 4}}><h1>CHECK IN</h1></Col>
                    <Form>
                        <FormGroup>
                            <Label for="visitorName">Visitor's Name</Label>
                            <Input type="text" name="vName" id="visitorName" placeholder="John Doe" onChange={this.changeHandler}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="visitorEmail">Email</Label>
                            <Input type="email" name="vEmail" id="visitorEmail" placeholder="john@doe.com" onChange={this.changeHandler}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="visitorPhone">Phone</Label>
                            <Input type="phone" name="vpnum" id="visitorPhone" placeholder="123456789" onChange={this.changeHandler}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="hostName">Host's Name</Label>
                            <Input type="text" name="hName" id="hostName" placeholder="John Doe" onChange={this.changeHandler}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="hostEmail">Email</Label>
                            <Input type="email" name="hEmail" id="hostEmail" placeholder="john@doe.com" onChange={this.changeHandler}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="hostPhone">Phone</Label>
                            <Input type="phone" name="hpnum" id="hostPhone" placeholder="123456789" onChange={this.changeHandler}/>
                        </FormGroup>
                        <FormGroup check row>
                            <Button onClick={()=>this.validateForm()}>Submit</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </div>
        );
    }
}

export default CheckIn;