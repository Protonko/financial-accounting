import {NextPage} from 'next'
import Router, {useRouter} from 'next/router'
import {Button} from '@mui/material'
import {AuthLayout} from '@layouts/AuthLayout'

const Auth: NextPage = () => {
  const router = useRouter()

  console.log(router)
  return (
    <AuthLayout>
      <h1>Auth</h1>
      <Button onClick={() => Router.push('/')}>Go back</Button>
    </AuthLayout>
  )
}

export default Auth
