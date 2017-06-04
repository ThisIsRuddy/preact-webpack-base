import React, {Component} from 'react';
import { Input, Menu, Label, Container, Icon } from 'semantic-ui-react'

export default class SiteHeader extends Component {

  constructor() {
    super();
  }

  render(props, state) {
    return (
      <Container fluid className="stickyNav">
        <Menu pointing>
          <Menu.Item>
            <img src='/img/logo.png' />
          </Menu.Item>
          <Menu.Item>
            <Label className="strap" color="teal" as="h1" content="Data Ting" icon="tasks" size="big"/>
          </Menu.Item>
          <Menu.Item position='right'>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu>
      </Container>
    )
  }

}
