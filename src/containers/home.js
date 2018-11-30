import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import history from '../history';
import { connect } from "react-redux";
import * as Actions from '../redux/action/root';
import {get, map} from 'lodash';


class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
          selectedValue: '',
          // BookedSlot :[]
      }
  }
  handleChange = (e) => {
    // let slot = this.state.BookedSlot;
    // console.log('before slot', slot);
    // slot.push(e.target.value);
    // console.log('after slot', slot);
      this.setState({
          selectValue: e.target.value,
          // BookedSlot: slot
      });
      console.log('selected value', e.target.value);
      // this.state.BookedSlot = e.target.value;
      // console.log('booked slot', this.state.BookedSlot);
      history.push({
        pathname:'/form', 
        state:{time:e.target.value}
      });
  }
  checkslot (slot) {
    const tempData = this.props.userData;
    let  flag = false;
    map(tempData, (val, key) => {
      // bookedSlot.push(val.time);
      if(val.time == slot) {
        flag=true;
      }
    })
    return flag;
  }
    render() {
      console.log('props', this.props);
    //  this.checkslot
      // const bookedSlot = [];
      // map(tempData,(val, key) => {
      //   bookedSlot.push(val.time);
      // })

      

    return (
      <div style={{backgroundColor: "#f6f6f6", padding: '50px'}}>
        <Container>
          <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <div style={{backgroundColor: "#fff", padding: "50px", borderRadius: '10px', boxShadow: '0px 0px 20px 5px #ddd'}}>            
              <div style={{textAlign: "center", padding:'20px 0px'}}>
                <h2 style={{fontFamily: 'Playfair Display'}}> Book Your Appointment </h2>
              </div>
              <Form>
              <FormGroup>
                <Label for="exampleEmail">Select Time</Label>
                <Input 
                  type="select" 
                  name="select" 
                  id="exampleSelect"
                  value={this.state.selectedValue} 
                  onChange={this.handleChange}
                  >
                  <option value="9">9AM</option>
                  <option  style={this.checkslot(10) ? {backgroundColor: 'red'} : {}} value="10">10AM</option>
                  <option value="11">11AM</option>
                  <option value="12">12PM</option>
                </Input>
              </FormGroup>
              </Form>
              <small style={{color: '#aaa'}}> Enter Your Details on Next Page </small>
            </div>
          </Col>
        </Row>
        </Container>
        {/* <select
          value={this.state.selectedValue} 
          onChange={this.handleChange}
        > */}
         
      </div>
    )
  }
}
export default connect(state => ({
  userData:state.root.userData
}), Actions)(Home);