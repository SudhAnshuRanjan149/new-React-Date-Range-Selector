import React from 'react';
import './../Calender.css';

const Day = ({day}) => {
  return (
	<span className="day">{day}</span>
  )
}

export default Day;