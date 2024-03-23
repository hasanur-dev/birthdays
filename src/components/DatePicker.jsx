import { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import { enIN } from "date-fns/locale/en-IN";
registerLocale("enIN", enIN);
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function Example() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      locale="enIN"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      className=""
    />
  );
}
