import type {FC} from 'react'
import {FormControl, Select as SelectMui, MenuItem, SelectChangeEvent} from '@mui/material'

interface SelectValue {
  name: string,
  value: string | number,
}

interface Props {
  id?: string,
  label?: string,
  name: string,
  onChange: (value: string | number, name: string) => void,
  value: string | number,
  values: SelectValue[],
}

export const Select: FC<Props> = ({id, label, name, value, values, onChange}) => {
  const renderMenuItems = ({name, value}: SelectValue) => <MenuItem key={name+value} value={value}>{name}</MenuItem>

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    onChange(event.target.value, name)
  }
  
  const renderLabel = () => {
    if (label) {
      return (
        <label className="select__label" htmlFor={id}>
          {label}
        </label>
      )
    }
  }

  return (
    <FormControl className="select" fullWidth>
      {renderLabel()}
      <SelectMui
        className="select__area"
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {values.map(renderMenuItems)}
      </SelectMui>
    </FormControl>
  )
}