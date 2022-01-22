import type {NextPage} from 'next'
import Link from 'next/Link'
import {AuthLayout} from '@layouts/AuthLayout'
import {useLocalization} from '@hooks/useLocalization'
import {AuthForm} from '@components/AuthForm'

const Auth: NextPage = () => {
  const {getLocalizedValue} = useLocalization()

  return (
    <AuthLayout>
      <div className="auth">
        <h1 className="auth__title">{getLocalizedValue('login')}</h1>

        <AuthForm
          loginFieldName={getLocalizedValue('login')}
          passwordFieldName={getLocalizedValue('password')}
          buttonName={getLocalizedValue('logIn')}
          onSubmit={() => {}}
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
