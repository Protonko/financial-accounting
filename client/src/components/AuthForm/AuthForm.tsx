import {useState, ChangeEvent, FC} from 'react'
import * as yup from 'yup'
import {useFormik} from 'formik'
import {ButtonUnstyled} from '@mui/material'
import {useLocalization} from 'hooks'
import {insertValueToString} from 'utils'
import {Input} from 'components'

interface Props {
  buttonName: string,
  onSubmit: (email: string, password: string) => void,
}

export const AuthForm: FC<Props> = ({
  buttonName,
  onSubmit,
}) => {
  const [errorMessage, setErrorMessage] = useState<string>()
  const {localization} = useLocalization()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email(localization.incorrectEmailAddress)
        .required(localization.fieldIsRequired),
      password: yup
        .string()
        .min(6, insertValueToString(localization.minimumPasswordLength, '6'))
        .required(localization.fieldIsRequired),
    }),
    onSubmit: ({email, password}) => onSubmit(email, password),
  })

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) {
      setErrorMessage(undefined)
    }

    formik.handleChange(event)
  }

  return (
    <form className="auth-form" onSubmit={formik.handleSubmit}>
      <Input
        className="auth-form__input"
        name="email"
        label={localization.email}
        placeholder={localization.email}
        value={formik.values['email']}
        onChange={onChange}
        error={
          ((formik.touched['email'] && formik.errors['email']) || errorMessage) ??
          undefined
        }
      />

      <Input
        className="auth-form__input"
        name="password"
        type="password"
        label={localization.password}
        placeholder={localization.password}
        value={formik.values['password']}
        onChange={onChange}
        error={
          ((formik.touched['password'] && formik.errors['password']) || errorMessage) ??
          undefined
        }
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