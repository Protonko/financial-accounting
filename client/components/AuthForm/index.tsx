import type {FC} from 'react'
import * as yup from 'yup'
import {useFormik} from 'formik'
import {ButtonUnstyled, FilledInput, FormControlLabel} from '@mui/material'
import {useLocalization} from '@hooks/useLocalization'
import {insertValueToString} from '@utils/insertValueToString'

interface Props {
  buttonName: string,
  onSubmit: () => void,
}

export const AuthForm: FC<Props> = ({
  buttonName,
  onSubmit,
}) => {
  const {getLocalizedValue} = useLocalization()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email(getLocalizedValue('incorrectEmailAddress'))
        .required(getLocalizedValue('fieldIsRequired')),
      password: yup
        .string()
        .min(6, insertValueToString(getLocalizedValue('minimumPasswordLength'), '6'))
        .required(getLocalizedValue('fieldIsRequired')),
    }),
    onSubmit: ({email, password}) => onSubmit(),
  })

  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <FormControlLabel
        className="auth-form__label"
        control={
          <FilledInput
            className="auth-form__input input"
            placeholder={getLocalizedValue('email')}
            disableUnderline={true}
            value={formik.values['email']}
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
            value={formik.values['password']}
          />
        }
        labelPlacement="top"
        label={getLocalizedValue('password')}
      />

      <ButtonUnstyled
        className="auth-form__button button button--uppercase"
        type="submit"
      >
        {buttonName}
      </ButtonUnstyled>
    </form>
  )
}
