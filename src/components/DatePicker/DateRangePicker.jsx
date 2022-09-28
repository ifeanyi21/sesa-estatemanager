import React from "react";
import { DatePicker } from "antd";
import moment from "moment";
import { useState } from "react";
const { RangePicker } = DatePicker;

function DateRangePicker() {
  const dateFormat = "YYYY/MM/DD";

  const [filterDate, setFilterDate] = useState({});

  const handleChange = (date) => {
    if (date) {
      setFilterDate((prev) => {
        return {
          ...prev,
          startDate: date[0]._d.toLocaleDateString("en-ZA") || moment(),
          endDate: date[1]._d.toLocaleDateString("en-ZA") || moment(),
        };
      });
    } else {
      setFilterDate({});
    }
  };

  console.log(filterDate);
  return (
    <RangePicker
      onChange={handleChange}
      format={dateFormat}
      className="scale-125"
      defaultValue={[filterDate.startDate, filterDate.endDate]}
      placeholder={["From", "To"]}
    />
  );
}

export default DateRangePicker;
