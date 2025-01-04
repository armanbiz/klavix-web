import React from 'react';

interface FormInputProps {
  name: string;
  label: string;
  value: string;
  error?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ 
  name, 
  label, 
  value, 
  error, 
  type = 'text', 
  onChange 
}: FormInputProps) => {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm text-left font-medium text-white">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
          error ? 'border-red-500' : 'border-white/20'
        } text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all`}
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
      {error && (
        <p className="text-sm text-red-400 text-left">{error}</p>
      )}
    </div>
  );
};

export default FormInput;