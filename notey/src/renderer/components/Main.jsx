import React from 'react';
import Title from './Title';
import Button from './Button';
import Notebox from './Notebox';
import Sidebar from './Sidebar';

const Main = () => {

  const onClick = () => {
    alert("Submitting data");
  }

  return (
    <div className="page">
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="main">
        <Title title={"Notey"}/>
        <Notebox/>
        <Button name={"Submit"} onClick={onClick}/>
      </div>
    </div>
  )
}

export default Main