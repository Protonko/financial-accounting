import type {NextPage} from 'next'
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
      </div>
    </AuthLayout>
  )
}

export default Auth
