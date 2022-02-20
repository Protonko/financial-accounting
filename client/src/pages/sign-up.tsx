import type {NextPage} from 'next'
import Link from 'next/link'
import {AuthLayout} from 'layouts'
import {useActions, useLocalization} from 'hooks'
import {AuthForm} from 'components'

const SignUp: NextPage = () => {
  const {signUp} = useActions()
  const {getLocalizedValue} = useLocalization()

  const onSubmit = (email: string, password: string) => {
    signUp({email, password})
  }

  return (
    <AuthLayout>
      <div className="auth">
        <h1 className="auth__title">{getLocalizedValue('registration')}</h1>

        <AuthForm
          buttonName={getLocalizedValue('signUp')}
          onSubmit={onSubmit}
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

export default SignUp
