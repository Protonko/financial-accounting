import type {FC} from 'react'
import classNames from 'classnames'

type KeyValues = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Operators = '+' | '-' | '*' | '/' | '.' | '='
type CalculatorKeys = Operators | KeyValues

export interface Props {
  value: CalculatorKeys,
  setValue: (value: string) => void,
  longStyle?: boolean,
}

export const Key: FC<Props> = ({value, setValue, longStyle}) => {
  const className = classNames('key', 'button', 'button--square', {'key--long': longStyle})

  return (
    <button className={className} onClick={() => setValue(value.toString())} type="button">
      <span className="key__content button__content">
        {value}
      </span>
    </button>
  )
}