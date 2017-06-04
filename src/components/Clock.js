import React, { Component } from 'react';
import { Statistic } from 'semantic-ui-react'
export default class Clock extends Component {

  constructor() {
    super();
    this.state = {
      time: Date.now()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render(props, state) {
    let time = new Date(state.time).toLocaleTimeString();
    return <div>
        <Statistic inverted size='tiny'>
          <Statistic.Value>{ time }</Statistic.Value>
        </Statistic>
      </div>
  }

}