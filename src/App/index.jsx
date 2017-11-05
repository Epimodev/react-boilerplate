// @flow
import React from 'react';
import Icon from 'src/components/Icon';
import checkmarkIcon from 'src/icons/checkmark.svg';
import style from './style.scss';

console.log(environment);

function App() {
  return (
    <div className={style.container}>
      Hello World
      <Icon href={checkmarkIcon} />
    </div>
  );
}

export default App;
