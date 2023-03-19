import type {VFC} from 'react'
import Back from '@assets/icons/back.svg'

export interface Props {
  setValue: (value: string) => void,
}

export const ClearButton: VFC<Props> = ({setValue}) => {
  return (
    <button className="key button button--square" onClick={() => setValue('Backspace')} type="button">
      <span className="key__content button__content">
        <Back className="key__icon" />
      </span>
    </button>
  )
}