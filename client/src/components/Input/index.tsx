import type {FC, ChangeEvent} from 'react'
import type {InputTypes} from '@model/input'
import classNames from 'classnames'
import {FilledInput, FormControlLabel} from '@mui/material'

interface Props {
  value: string,
  name: string,
  label: string,
  placeholder: string,
  type?: InputTypes,
  className?: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  error?: boolean | string
}

export const Input: FC<Props> = ({
  value,
  name,
  label,
  type = 'string',
  placeholder,
  className,
  onChange,
  error,
}) => {
  const inputClassNames = classNames([
    'input',
    {[className ?? '']: !!className},
  ])

  const renderErrorMessage = () => {
    if (typeof error === 'string') {
      return (
        <span className="input__error-message">
          {error}
        </span>
      )
    }

    return null
  }

  return (
    <div className={inputClassNames}>
      <FormControlLabel
        className="input__label"
        control={
          <FilledInput
            name={name}
            className="input__area"
            type={type}
            placeholder={placeholder}
            disableUnderline={true}
            value={value}
            onChange={onChange}
          />
        }
        labelPlacement="top"
        label={label}
      />

      {renderErrorMessage()}
    </div>
  )
}
