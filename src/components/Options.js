import React from 'react';
import Option from './Option';

const Options = ({options, cb}) => (
  <div>
    { options.map((option, i) => <Option key={i} index={i} option={option} cb={cb}/>) }
  </div>
);

export default Options;