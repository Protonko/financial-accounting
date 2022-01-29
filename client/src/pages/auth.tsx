import type {NextPage} from 'next'
import Link from 'next/Link'
import {useDispatch} from 'react-redux'
import {login} from 'store/actions'
import {AuthLayout} from 'layouts'
import {useLocalization} from 'hooks'
import {AuthForm} from 'components'

const Auth: NextPage = () => {
  const dispatch = useDispatch()
  const {getLocalizedValue} = useLocalization()

  const onSubmit = (email: string, password: string) => {
    dispatch(login({email, password}))
  }

  return (
    <AuthLayout>
      <div className="auth">
        <h1 className="auth__title">{getLocalizedValue('login')}</h1>

        <AuthForm
          buttonName={getLocalizedValue('logIn')}
          onSubmit={onSubmit}
        />

        <span className="auth__additional-text">
          {getLocalizedValue('dontHaveAnAccountQuestion')}
          <Link href="/registration">
            <a className="auth__additional-text-link link">
              {getLocalizedValue('signUp')}
            </a>
          </Link>
        </span>
      </div>
    </AuthLayout>
  )
}

export default Auth
