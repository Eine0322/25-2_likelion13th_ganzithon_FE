import { Outlet, useLocation } from 'react-router-dom'
import TopBar from '../TopBar/TopBar'

const RootLayout = () => {
  const location = useLocation()
  const getTitle = (pathname) => {
    return pathname === '/'
      ? '홈화면'
      : pathname === '/upload'
      ? '입력창'
      : pathname === '/result'
      ? '결과창'
      : ''
  }
  const title = getTitle(location.pathname)
  return (
    <div className='container'>
      <TopBar title={title} />
      <Outlet />
    </div>
  )
}

export default RootLayout
