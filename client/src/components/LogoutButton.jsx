import { BiLogOut } from 'react-icons/bi'
import UseLogout from '../hooks/UseLogout'

const LogoutButton = () => {

const { loading, logout } = UseLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut onClick={logout} className='w-6 h-6 text-white cursor-pointer hover:text-sky-500' />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

export default LogoutButton