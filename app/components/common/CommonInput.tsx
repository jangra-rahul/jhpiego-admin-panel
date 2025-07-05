'use client';
import React from 'react';
import { Form } from 'react-bootstrap';

interface CommonInputProps {
  label: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  name?: string;
}

const CommonInput: React.FC<CommonInputProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false,
  name,
}) => {
  return (
    <Form.Group className="mb-4">
      <Form.Label className="fw-medium fs_16 mb-0 clr_darkblack mb-2">{label}</Form.Label>
      <Form.Control
        className="custom_selete"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        name={name}
      />
    </Form.Group>
  );
};

export default CommonInput;
