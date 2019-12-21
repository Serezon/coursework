import React from 'react';

interface Props {
  value: string;
  onChange: (e: any) => void;
  label: string;
  name: string;
}

export const Filter: React.FC<Props> = ({value, onChange, label, name}: Props) => (
  <div className="library__filters-filter">
    <label htmlFor={name} className="library__filters-label">
      {label}
    </label>
    <input
      type="text"
      name="query"
      className="library__filters-input"
      spellCheck="false"
      value={value}
      onChange={onChange}
    />
  </div>
);
