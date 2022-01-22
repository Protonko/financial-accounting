import type {FC} from 'react'
import {ButtonUnstyled, FilledInput, FormControlLabel} from '@mui/material'

interface Props {
  loginFieldName: string,
  passwordFieldName: string,
  buttonName: string,
  onSubmit: () => void,
  renderAdditionalLink?: () => void,
}

export const AuthForm: FC<Props> = ({
  loginFieldName,
  passwordFieldName,
  buttonName,
  onSubmit,
  renderAdditionalLink,
}) => {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <FormControlLabel
        className="auth-form__label"
        control={
          <FilledInput
            className="auth-form__input input"
            placeholder={loginFieldName}
            disableUnderline={true}
          />
        }
        labelPlacement="top"
        label={loginFieldName}
      />

      <FormControlLabel
        className="auth-form__label"
        control={
          <FilledInput
            className="auth-form__input input"
            type="password"
            placeholder={passwordFieldName}
            disableUnderline={true}
          />
        }
        labelPlacement="top"
        label={passwordFieldName}
      />

      <ButtonUnstyled
        className="auth-form__button button button--uppercase"
        type="submit"
      >
        {buttonName}
      </ButtonUnstyled>

      <div className="auth-form__link">

      </div>
    </form>
  )
}
