import type {NextPage} from 'next'
import {AuthLayout} from 'layouts'
import {SignUp as SignUpWidget} from 'widgets'

const SignUp: NextPage = () => {
  return (
    <AuthLayout>
      <SignUpWidget />
    </AuthLayout>
  )
}

export default SignUp
