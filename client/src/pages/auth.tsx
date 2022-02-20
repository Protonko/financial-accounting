import type {NextPage} from 'next'
import Link from 'next/Link'
import {AuthLayout} from 'layouts'
import {useLocalization, useActions} from 'hooks'
import {AuthForm} from 'components'

const Auth: NextPage = () => {
  const {login} = useActions()
  const {getLocalizedValue} = useLocalization()

  const onSubmit = (email: string, password: string) => {
    login({email, password})
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
          <Link href="/sign-up">
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
