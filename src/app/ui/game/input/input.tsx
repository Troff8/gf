"use client";
import React from "react";
import styles from "./input.module.css";
import clsx from "clsx";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type TextAreaType = {
  rows: number;
  cols: number;
};

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  id: string;
  type?: string;
  textArea?: TextAreaType;
  height?: number;
  required?: boolean;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  disabled?: boolean;
  forwardRef?: React.Ref<HTMLInputElement | HTMLTextAreaElement | null>;
}

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement | null, // Обновленный тип
  InputProps
>(
  (
    {
      label,
      id,
      type,
      textArea,
      height,
      required,
      register,
      errors,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <div className={styles.container}>
        <label htmlFor={id}>{label}</label>
        {!textArea ? (
          <input
            id={id}
            type={type}
            autoComplete={id}
            disabled={disabled}
            {...props}
            className={clsx(`
                    ${styles.input}
                    ${disabled && styles.inputDisabled}
                    ${errors && styles.inputError}
                `)}
            ref={ref as React.Ref<HTMLInputElement>}
          />
        ) : (
          <textarea
            id={id}
            autoComplete={id}
            disabled={disabled}
            {...props}
            className={clsx(`
                  ${styles.input}
                  ${disabled && styles.inputDisabled}
                  ${errors && styles.inputError}
              `)}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            style={{ height: height + "px" }}
          ></textarea>
        )}
        <div className={styles.inputWrapper}></div>
      </div>
    );
  }
);
