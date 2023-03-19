import type {VFC} from 'react'
import {Key} from './Key'
import {ClearButton} from './ClearButton'

interface Props {
    setValue: (value: string) => void,
}

export const Keypad: VFC<Props> = ({setValue}) => {
  return (
    <div className="keypad">
      <Key value={1} setValue={setValue} />
      <Key value={2} setValue={setValue} />
      <Key value={3} setValue={setValue} />
      <Key value="+" setValue={setValue} />
      <Key value={4} setValue={setValue} />
      <Key value={5} setValue={setValue} />
      <Key value={6} setValue={setValue} />
      <Key value="-" setValue={setValue} />
      <Key value={7} setValue={setValue} />
      <Key value={8} setValue={setValue} />
      <Key value={9} setValue={setValue} />
      <Key value="*" setValue={setValue} />
      <ClearButton setValue={setValue} />
      <Key value={0} setValue={setValue} />
      <Key value="." setValue={setValue} />
      <Key value="/" setValue={setValue} />
      <Key longStyle={true} value="=" setValue={setValue} />
    </div>
  )
}