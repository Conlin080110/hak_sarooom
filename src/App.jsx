
import React, { useState } from 'react';
import { schoolEvents } from './schoolEvents';

function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>📅 새롬고 학사일정 캘린더</h1>
      <input type="date" onChange={handleDateChange} />
      {selectedDate && (
        <div style={{ marginTop: '1em' }}>
          <strong>{selectedDate}:</strong>{' '}
          {schoolEvents[selectedDate] || '일정 없음'}
        </div>
      )}
    </div>
  );
}

export default App;
