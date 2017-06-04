import React, { Component } from 'react'
import {Container} from 'semantic-ui-react'
import './app.css'
import SiteHeader from './components/SiteHeader'
import Clock from './components/Clock';
import NavMenu from './components/NavMenu'

export default class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Container fluid>
        <SiteHeader/>
        <div className="cell">This is a test cell (app.css), any other styles are loaded from semantic.css</div>
        <Container fluid className="content">
          <Container> <Clock/> </Container>
          <Container> <NavMenu/> </Container>
          <Container> <NavMenu/> </Container>
          <Container> <NavMenu/> </Container>
          <Container> <NavMenu/> </Container>
          <Container> <NavMenu/> </Container>
          <Container> <NavMenu/> </Container>
          <Container> <NavMenu/> </Container>
          <Container> <NavMenu/> </Container>
          <Container> <NavMenu/> </Container>
          <Container> <NavMenu/> </Container>
          <Container> <NavMenu/> </Container>
          <Container> <NavMenu/> </Container>
        </Container>
      </Container>
    );
  }

}