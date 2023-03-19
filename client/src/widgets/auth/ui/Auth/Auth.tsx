import Link from 'next/link'
import {useLogin} from 'features'
import {AuthForm} from 'entities'
import {useLocalization} from 'shared'

export const Auth = () => {
  const login = useLogin()
  const {localization} = useLocalization()

  return (
    <div className="auth">
      <h1 className="auth__title">{localization.login}</h1>

      <AuthForm
        buttonName={localization.logIn}
        onSubmit={login}
      />

      <span className="auth__additional-text">
          {localization.dontHaveAnAccountQuestion}
        <Link href="/sign-up">
            <a className="auth__additional-text-link link">
              {localization.signUp}
            </a>
          </Link>
        </span>
    </div>
  )
}