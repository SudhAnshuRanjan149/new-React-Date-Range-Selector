# Date-range-selector-for-react

[Date-range-selector-for-react](https://github.com/SudhAnshuRanjan149/new-React-Date-Range-Selector) is a simple
React package that provides UI for date range picker functionality.It is very easy to use.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/date-range-selector-for-react) to
install [date-range-selector-for-react](https://www.npmjs.com/package/date-range-selector-for-react)

```bash
npm install date-range-selector-for-react
```

## API Reference

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `sd` | `setStartdate-function` | **Required**. This is to get back start-date information.|
| `ed` | `setEnddate-function` | **Required**. This is to get back end-date information.|
| `startYear` | `integer` | **Optional**. This is to initialize start-year.|
| `endYear` | `integer` | **Optional**. This is to initialize end-year.|

```http
if you will not initiate startYear and endYear, it will automatically initiate

startYear =  (currentYear - 25) and endYear = (currentYear + 25).
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `startDate` | `[DD MMM YYYY]` | **Optional**. This is to initialize start-Date.|
| `endDate` | `[DD MMM YYYY]` | **Optional**. This is to initialize end-Date.|

```http
if you will not initiate startDate and endDate, it will not self initiate itself.
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `showCalendar` | `boolean` | **Optional**. This is show/hide calender box from consumer end.|
| `showIcon` | `boolean` | **Optional**. This is show/hide calender icon.|
| `showDateRangeBox` | `boolean` | **Optional**. This is show/hide calender Date-Range-Box.|


#### Style

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `styleBigContainer` | `css style` | **Optional**. This is to style the calender container. Specially for controlling its position.|
| `styleDateRangeBox` | `css style` | **Optional**. This is to style the calender Date-Range-Box.|
| `calHeaderBodyElement` | `HTML element` | **Optional**. This is to configure calnder top most div for any other use.|



# Example-Code

```javascript
import { useState, useEffect } from "react";
import "./App.css";

import DateRangeSelector from "date-range-selector-for-react";

function App() {
  let st = "1june 2022";
  let en = "1july 2022";

  const [startdate, setStartdate] = useState(st);
  const [enddate, setEnddate] = useState(en);
  const [showCalendar, setShowCalendar] = useState(true);

  useEffect(() => {
    console.log("start date: " + startdate);
    console.log("end date: " + enddate);
  }, [startdate, enddate]);

  useEffect(() => {
    console.log("showCalendar --> ", showCalendar);
  }, [showCalendar]);

  const reset = () => {
    setStartdate(st);
    setEnddate(en);
    window.location.reload();
  };

  return (
    <>
      <DateRangeSelector
        sd={setStartdate}
        ed={setEnddate}
        startYear={2010}
        endYear={2030}
        styleBigContainer={{}}
        startDate={startdate}
        endDate={enddate}
        showCalendar={showCalendar}
        showIcon={false}
        showDateRangeBox={true}
        styleDateRangeBox={{}}
        calHeaderBodyElement={<button> onClick={reset}>Reset-date</button>}
      />
      <button onClick={() => setShowCalendar(!showCalendar)}>Toogle</button>
    </>
  );
}

export default App;
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License


[MIT](https://choosealicense.com/licenses/mit/)



## Author
- [@sudhanshuranjan](https://github.com/SudhAnshuRanjan149/new-React-Date-Range-Selector)

# Hi, I'm Sudhanhsu! 👋


## 🚀 About Me
I'm a full stack developer...


