import React from 'react';

export default function DailyCheckbox({ isChecked, isFuture, onToggle }) {
  return (
    <div 
      className={`checkbox-cell ${isFuture ? 'future' : ''} ${isChecked ? 'checked' : ''}`}
      onClick={!isFuture ? onToggle : undefined}
      style={{ cursor: isFuture ? 'not-allowed' : 'pointer' }}
    >
      {isChecked && <span className="checkmark">✓</span>}
    </div>
  );
}