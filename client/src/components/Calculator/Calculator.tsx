import {useState, FC} from 'react'
import {Input, Keypad} from 'components'

const calculatorOperations: Record<string, (prevValue: number, nextValue: number) => number> = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue
}

export const Calculator: FC = () => {
  const [value, setValue] = useState('')
  const [displayValue, setDisplayValue] = useState('0')
  const [operator, setOperator] = useState<string>()
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const enterNumber = (number: number) => {
    if (waitingForOperand) {
      setDisplayValue(number.toString())
      setWaitingForOperand(false)
    } else {
      setDisplayValue(prevValue => prevValue === '0' ? number.toString() : prevValue + number)
    }
  }

  const enterDot = () => {
    if (!(/\./).test(displayValue)) {
      setDisplayValue(displayValue + '.')
      setWaitingForOperand(false)
    }
  }

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(displayValue)

    if (!value) {
      setValue(inputValue.toString())
    } else if (operator) {
      const currentValue = +value || 0
      const newValue = calculatorOperations[operator](currentValue, inputValue).toString()

      setValue(newValue)
      setDisplayValue(newValue)
    }

    setOperator(nextOperator)
    setWaitingForOperand(true)
  }

  const calculateValue = (value: string) => {
    if (Number.isInteger(+value)) {
      enterNumber(parseInt(value, 10))
    } else if (value in calculatorOperations) {
      performOperation(value)
    } else if (value === '.') {
      enterDot()
    } else if (value === 'Backspace') {
      setDisplayValue(prevValue => prevValue.substring(0, prevValue.length - 1) || '0')
    }
  }

  return (
    <div className="calculator">
      <Input
        className="calculator__input"
        label=""
        value={displayValue}
        name="calculator"
        placeholder=""
        readOnly={true}
      />

      <Keypad setValue={calculateValue} />
    </div>
  )
}