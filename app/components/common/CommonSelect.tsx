'use client';
import React from 'react';
import { Form } from 'react-bootstrap';

interface CommonSelectProps {
  label: string;
  options: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  name?: string;
  placeholder?: string; 
}

const CommonSelect: React.FC<CommonSelectProps> = ({
  label,
  options,
  value,
  onChange,
  required = false,
  placeholder = "Select an option",
  name,
}) => {
  return (
    <Form.Group className="mb-4">
      <Form.Label className="fw-medium fs_16 mb-0 clr_darkblack mb-2">{label}</Form.Label>
      <Form.Select
        className="custom_selete"
        value={value}
        onChange={onChange}
        required={required}
        name={name}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default CommonSelect;
