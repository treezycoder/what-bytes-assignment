"use client";
import React, { InputHTMLAttributes, useState } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  validate?: (value: string) => boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  hint,
  validate,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (validate) {
      setIsValid(validate(event.target.value));
    }
  };

  return (
    <div className="mb-4 w-full md:w-auto">
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <input
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        className={`w-full p-2 border rounded-md outline-none transition-colors
          ${isFocused ? "border-blue-500" : "border-gray-300"}
          ${!isValid ? "border-red-500" : ""}
        `}
      />
      {hint && (
        <small
          className={`${!isValid ? "text-red-500" : "text-gray-500 "} text-sm`}
        >
          {hint}
        </small>
      )}
    </div>
  );
};

export default CustomInput;
