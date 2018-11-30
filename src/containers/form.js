import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col
} from 'reactstrap';
import { connect } from "react-redux";
import * as Actions from '../redux/action/root';
import history from '../history';
import {get, map} from 'lodash';


class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  handleFirstName = (event, name) => {
    // console.log('name', name);
    this.setState({
      first: event.target.value,
    })
  }
   handleLastName = (event, name) => {
    //  console.log('name', name);
     this.setState({
       last: event.target.value,
     })
   }
    handleMobile = (event, name) => {
      // console.log('name', name);
      this.setState({
        mobile: event.target.value,
      })
    }
  onSubmit = (e) => {
    console.log('e',e);
    e.preventDefault();
    // console.log('form data',this.state);
    let data ={
      time: this.props.location.state.time,
      first: this.state.first,
      last: this.state.last,
      mobile: this.state.mobile,
    }
    // let BookedSlot = [];
    // BookedSlot.push(this.props.location.time);
    this.props.onCreateNewItem(data);
    history.push('/');
  }
  onCancel = () => {
    history.push('/');
    
  }

  render() {
    // console.log('form props', this.props.location.state);
    // console.log('props form ', this.props);
    // console.log('props form ', this.props.userData.first);
    console.log('redux store', this.props.userData);
    console.log('selected time', this.props.location.state);
    let defaultSlot = {};
      map(this.props.userData, (val, key)=> {
        if(val.time === get(this.props,'location.state.time')) {
          console.log('match');
          defaultSlot = val;
        }
      })
    

    return (
      <div style={{backgroundColor: "#f6f6f6", padding: '50px'}}>
        <Container>
          <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <div style={{backgroundColor: "#fff", padding: "50px", borderRadius: '10px', boxShadow: '0px 0px 20px 5px #ddd'}}>
              <div style={{textAlign: "center", padding:'20px 0px'}}>
                <h2 style={{fontFamily: 'Playfair Display'}}> Enter Your Details </h2>
              </div>
              <Form>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input defaultValue={defaultSlot.first} onChange={(e) => this.handleFirstName(e,'first')} type="text" name="firstName" id="firstName" placeholder="" />
                </FormGroup>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input defaultValue={defaultSlot.last} onChange={(e) => this.handleLastName(e,'last')} type="text" name="lastName" id="lastName" placeholder="" />
                </FormGroup>
                <FormGroup>
                  <Label for="mobile"> Mobile </Label>
                  <Input defaultValue={defaultSlot.mobile} onChange={(e) => this.handleMobile(e,'mobile')} type="text" name="mobile" id="mobile" placeholder="" />
                </FormGroup>
                <div style={{display: 'flex'}}>
                  <Button style={{marginRight: '15px'}} onClick={(e) => this.onSubmit(e)}> Save </Button>
                  <Button outline onClick={() => this.onCancel()}> Cancel </Button>
                </div>
              </Form>
              {/* <form action="/action_page.php" method="get">
                First name: <input type="text" name="fname"/><br/>
                Last name: <input type="text" name="lname"/><br/>
                <input type="submit" value="Submit"/>
              </form> */}
            </div>
          </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default connect(state => ({
  userData: state.root.userData
}), Actions)(FormContainer);
