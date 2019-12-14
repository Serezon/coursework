import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import DatePicker from 'react-datepicker';

import {formatDate} from '../../utilities';
import {getApodRequest} from '../../store/apod';

const yesterday: Date = new Date(Date.now() - (3600 * 24 * 1000));

export const APODDate: React.FC = () => {
  const [date, setDate] = useState<Date | null>(yesterday);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApodRequest({
      date: formatDate(date)
    }));
  }, [date]);

  return (
    <div className="apod__date">
      <DatePicker
        onChange={setDate}
        selected={date}
        maxDate={yesterday}
        value={formatDate(date)}
        className="apod__date-input"
        placeholderText="Pick date"
      />
    </div>
  );
};
