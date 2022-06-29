import React from 'react';
import './../Calender.css';

const DateRangeBox = ({ startdate,enddate,onClick ,style}) => {
  return (
	<>
		<div style={style} onClick={onClick} className="date-range-box">
			{`${startdate} - ${enddate}`}
		</div>
	</>
  )
}

export default DateRangeBox