import {useState, memo, FC} from 'react'
import {Input, Keypad} from 'components'

interface Props {
  displayValue: string,
  name: string,
  setDisplayValue: (displayValue: string, name: string) => void,
}

const calculatorOperations: Record<string, (prevValue: number, nextValue: number) => number> = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue
}

export const Calculator: FC<Props> = memo(({displayValue, name, setDisplayValue}) => {
  const [value, setValue] = useState('')
  const [operator, setOperator] = useState<string>()
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const enterNumber = (number: number) => {
    if (waitingForOperand) {
      setDisplayValue(number.toString(), name)
      setWaitingForOperand(false)
    } else {
      setDisplayValue(displayValue === '0' ? number.toString() : displayValue + number, name)
    }
  }

  const enterDot = () => {
    if (!(/\./).test(displayValue)) {
      setDisplayValue(displayValue + '.', name)
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
      setDisplayValue(newValue, name)
    }

    setOperator(nextOperator)
    setWaitingForOperand(true)
  }

  const clear = () => {
    const currentDisplayValue = displayValue.substring(0, displayValue.length - 1)

    if (!currentDisplayValue) {
      setValue('')
      setOperator(undefined)
      setWaitingForOperand(false)
      setDisplayValue('0', name)
      return
    }

    setDisplayValue(currentDisplayValue, name)
  }

  const calculateValue = (value: string) => {
    if (Number.isInteger(+value)) {
      enterNumber(parseInt(value, 10))
    } else if (value in calculatorOperations) {
      performOperation(value)
    } else if (value === '.') {
      enterDot()
    } else if (value === 'Backspace') {
      clear()
    }
  }

  return (
    <div className="calculator">
      <Input
        className="calculator__input"
        label=""
        value={displayValue}
        name={name}
        placeholder=""
        readOnly={true}
      />

      <Keypad setValue={calculateValue} />
    </div>
  )
})

Calculator.displayName = 'Calculator'