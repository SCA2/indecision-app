import React from 'react';

const Option = ({index, option, cb}) => (
  <div className="option">
    <p className="option__text">{index + 1}.&nbsp;{option}</p>
    <button className="button button--link" onClick={ () => {cb(option)} }>Delete</button>
  </div>
);

export default Option;