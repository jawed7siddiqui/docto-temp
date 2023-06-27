import React, { useState } from 'react';

const Scheduler = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="container">
      <h2>Time Scheduler</h2>
      <div className="row">
        <div className="col">
          <div
            className={`time-slot ${selectedTime === '9:00 AM' && 'selected'}`}
            onClick={() => handleTimeSelection('9:00 AM')}
          >
            9:00 AM
          </div>
          <div
            className={`time-slot ${selectedTime === '10:00 AM' && 'selected'}`}
            onClick={() => handleTimeSelection('10:00 AM')}
          >
            10:00 AM
          </div>
          <div
            className={`time-slot ${selectedTime === '11:00 AM' && 'selected'}`}
            onClick={() => handleTimeSelection('11:00 AM')}
          >
            11:00 AM
          </div>
          {/* Add more time slots here */}
        </div>
      </div>
      {selectedTime && (
        <div className="row">
          <div className="col">
            <div className="selected-event">
              You have selected: {selectedTime}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scheduler;
