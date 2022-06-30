import {NextPage} from 'next'

const Offline: NextPage = () => {
  return (
    <div>
      <h1>This is offline fallback page</h1>
      <h2>When offline, any page route will fallback to this page</h2>
    </div>
  )
}

export default Offline