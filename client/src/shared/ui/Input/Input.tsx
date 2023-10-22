import {memo, VFC, ChangeEvent} from 'react'
import classNames from 'classnames'
import {FilledInput, FormControlLabel} from '@mui/material'

interface Props {
  value: string,
  name: string,
  label: string,
  placeholder: string,
  type?: string,
  className?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  error?: boolean | string,
  readOnly?: boolean,
}

export const Input: VFC<Props> = memo(({
  value,
  name,
  label,
  type = 'string',
  placeholder,
  className,
  onChange,
  error,
  readOnly,
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
            readOnly={readOnly}
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
})

Input.displayName = 'Input'
