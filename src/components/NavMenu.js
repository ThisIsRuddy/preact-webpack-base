import React, { Component } from 'react';
import { Input, Label, Menu } from 'semantic-ui-react'

export default class NavMenu extends Component {

  constructor() {
    super();
    this.state = { activeItem: 'inbox' };
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name });
  }

  render(props, state) {
    const { activeItem } = state.activeItem;
    return (
        <Menu vertical>
          <Menu.Item name='products' active={activeItem === 'products'} onClick={this.handleItemClick}>
            <Label>51</Label>
            Products
          </Menu.Item>
          <Menu.Item name='categories' active={activeItem === 'categories'} onClick={this.handleItemClick}>
            <Label color='teal'>1</Label>
            Categories
          </Menu.Item>
          <Menu.Item name='locations' active={activeItem === 'updates'} onClick={this.handleItemClick}>
            <Label>1</Label>
            Locations
          </Menu.Item>
          <Menu.Item>
            <Input icon='search' placeholder='Search mail...' />
          </Menu.Item>
        </Menu>
    )
  }

}