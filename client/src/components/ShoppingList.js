import React, {Component} from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import {connect} from 'react-redux'
import {getItems, deleteItem} from '../actions/itemActions'

import PropTypes from 'prop-types'

class ShoppingList extends Component {

  componentDidMount(){
    this.props.getItems();
  }

  onDeleteClick = id =>{
    console.log(id)
    this.props.deleteItem(id)
  }

  render() {
    const { items } = this.props.item

    return (
      <Container>
        
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {items.map( (item)=>{
              const {_id, name} = item
              return (<CSSTransition timeout={500} key={_id} classNames='fake'>
                <ListGroupItem>
                  <Button className="remove-btn" color='danger' size='sm' onClick={()=>this.onDeleteClick(_id)} >&times;</Button> 
                  {`${name}`}
                </ListGroupItem>
              </CSSTransition>)
            })}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

ShoppingList.propTypes = {
  item: PropTypes.object.isRequired,
  getItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
}

export default connect((state)=>({item: state.item}), {getItems, deleteItem})(ShoppingList)
