import React from 'react';
import { index } from './Reg';

class BaseEditor extends React.Component{
  notifyChange = (radio, value) => {
    const { onChange } = this.props;
    onChange && onChange(value);
  };

  handleRadioChange = ({ target: { value: radio } }) => {
    const { value } = this.state;
    this.setState({ radio });
    this.notifyChange(radio, value[radio]);
  };

  handleValueChange = (radio, v) => {
    const { value } = this.state;
    value[radio] = v;
    this.setState({ radio, value });
    this.notifyChange(radio, v);
  };

  handleRegChange = (radio, v) => {
    const { value } = this.state;
    if (value[radio] === undefined) {
      console.error('cannot get radio index from radioMap', radio, value);
      radio = index.EVERY;
      v = '*';
    }
    value[radio] = v;
    this.setState({ value, radio });
    this.notifyChange(radio, v);
  };
}

export default BaseEditor;
