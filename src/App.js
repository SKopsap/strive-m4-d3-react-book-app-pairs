import React, { Component } from 'react'

import WarningSign from './components/WarningSign'
import MyBadge from './components/Badge'
import BookList from './components/BookList'
import { fantasy } from './assets/fantasy'

import { Form, Container } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  state = {
    fantasy: fantasy,
    show: false,
    filterQuery: ''
  }

  filterBooks = (e) => {
    this.setState({ filterQuery: e.target.value })
    console.log(this.state.filterQuery)
  }

  render() {
    return (
      <Container className="App">
        {/* <WarningSign show={this.state.show} text="no emotions allowed!" /> */}
        {/* <MyBadge color="dark" text="be a robot" /> */}

        <Form.Group style={{ width: '400px' }}>
          <Form.Control
            onChange={this.filterBooks}
            value={this.state.filterQuery}
            size="sm"
            type="text"
            placeholder="Small text"
          />
        </Form.Group>
        <BookList
          filterQuery={this.state.filterQuery}
          fantasy={this.state.fantasy}
        />
      </Container>
    )
  }
}

export default App
