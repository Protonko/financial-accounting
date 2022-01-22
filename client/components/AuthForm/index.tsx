import {ButtonUnstyled, FilledInput, FormControlLabel} from '@mui/material'
import Router from 'next/router'
import {useLocalization} from '@hooks/useLocalization'

export const AuthForm = () => {
  const {getLocalizedValue} = useLocalization()

  return (
    <form className="auth-form">
      <FormControlLabel
        className="auth-form__label"
        control={
          <FilledInput
            className="auth-form__input input"
            placeholder={getLocalizedValue('email')}
            disableUnderline={true}
          />
        }
        labelPlacement="top"
        label={getLocalizedValue('email')}
      />

      <FormControlLabel
        className="auth-form__label"
        control={
          <FilledInput
            className="auth-form__input input"
            type="password"
            placeholder={getLocalizedValue('password')}
            disableUnderline={true}
          />
        }
        labelPlacement="top"
        label={getLocalizedValue('password')}
      />

      <ButtonUnstyled
        className="auth-form__button button button--uppercase"
        onClick={() => Router.push('/')}
      >
        {getLocalizedValue('logIn')}
      </ButtonUnstyled>
    </form>
  )
}
