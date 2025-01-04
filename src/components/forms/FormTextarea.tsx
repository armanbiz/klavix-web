import React from 'react';

interface FormTextareaProps {
  name: string;
  label: string;
  value: string;
  error?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextarea = ({
  name,
  label,
  value,
  error,
  placeholder,
  onChange
}: FormTextareaProps) => {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm text-left font-medium text-white">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        className={`w-full px-4 py-3 rounded-lg bg-white/10 border ${
          error ? 'border-red-500' : 'border-white/20'
        } text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all`}
        placeholder={placeholder}
      />
      {error && (
        <p className="text-sm text-red-400 text-left">{error}</p>
      )}
    </div>
  );
};

export default FormTextarea;