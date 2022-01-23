import type {NextPage} from 'next'
import {AuthLayout} from '@layouts/AuthLayout'
import {useLocalization} from '@hooks/useLocalization'
import {AuthForm} from '@components/AuthForm'
import Link from 'next/link'

const Auth: NextPage = () => {
  const {getLocalizedValue} = useLocalization()

  return (
    <AuthLayout>
      <div className="auth">
        <h1 className="auth__title">{getLocalizedValue('registration')}</h1>

        <AuthForm
          buttonName={getLocalizedValue('signUp')}
          onSubmit={() => {}}
        />

        <span className="auth__additional-text">
          {getLocalizedValue('alreadyHaveAnAccountQuestion')}
          <Link href="/auth">
            <a className="auth__additional-text-link link">
              {getLocalizedValue('logIn')}
            </a>
          </Link>
        </span>
      </div>
    </AuthLayout>
  )
}

export default Auth
