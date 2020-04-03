import React, { Component } from 'react';

import { Container } from './styles';

class StateStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: {},
      text: '',
      value: '',
    };
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps);
  //   if (prevProps.text !== this.props.text) {
  //     this.setState({
  //       text: this.props.text,
  //       value: this.props.value
  //     });
  //   }
  // }

  render() {
    const { text, value } = this.props;

    return (
      <Container>
        <h1>{text}</h1>
        <span>{value}</span>
      </Container>
    );
  }
}

export default StateStatus;
