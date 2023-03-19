import Link from 'next/link'
import {useSignUp} from 'features'
import {AuthForm} from '_entities'
import {useLocalization} from 'shared'

export const SignUp = () => {
  const signUp = useSignUp()
  const {localization} = useLocalization()

  return (
    <div className="auth">
      <h1 className="auth__title">{localization.registration}</h1>

      <AuthForm
        buttonName={localization.signUp}
        onSubmit={signUp}
      />

      <span className="auth__additional-text">
          {localization.alreadyHaveAnAccountQuestion}
        <Link href="/auth">
            <a className="auth__additional-text-link link">
              {localization.logIn}
            </a>
          </Link>
        </span>
    </div>
  )
}
