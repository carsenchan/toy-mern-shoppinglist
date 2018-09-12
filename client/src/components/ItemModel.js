import React, { Component } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { addItem } from '../actions/itemActions'

class ItemModal extends Component {

  state={
    modalShow: false,
    name: ''
  }

  toggle = ()=>{
    this.setState({modalShow:!this.state.modalShow})
  }

  onInputChange = (e)=>{
    console.log(e.target.name)
    console.log({[e.target.name]:e.target.value})
    this.setState({[e.target.name]:e.target.value})
  }

  onSubmit = e =>{
    e.preventDefault();
    const newItem = {name: this.state.name }
    this.props.addItem(newItem)
    this.toggle()
  }

  render() {
    return (
      <div>
        <Button color='dark' className='add-item-btn' onClick={()=>this.toggle()}>Add Item</Button>
        <Modal
          isOpen={this.state.modalShow}
          toggle = {this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>

          <ModalBody>
            <Form onSubmit = {this.onSubmit} >
              <FormGroup>
                <Label for="item">Item</Label>
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add Shopping Item"
                  onChange={this.onInputChange}
                />
                <Button
                  color='dark'
                  style={{marginTop: '1rem',}}
                  block
                >Add</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }


}

const mapStateToProps = state=>({
  item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal)
