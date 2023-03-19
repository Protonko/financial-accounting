import type {NextPage} from 'next'
import {AuthLayout} from 'layouts'
import {Auth as AuthWidget} from 'widgets'

const Auth: NextPage = () => {
  return (
    <AuthLayout>
      <AuthWidget />
    </AuthLayout>
  )
}

export default Auth
