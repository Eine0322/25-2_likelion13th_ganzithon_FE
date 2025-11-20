import { Outlet, useLocation } from 'react-router-dom'
import TopBar from '../TopBar/TopBar'
import './Root-layout.css'

const RootLayout = () => {
  const location = useLocation()
  const getTitle = (pathname) => {
    return pathname === '/loading'
      ? '로딩중'
      : pathname === '/upload'
      ? '진단서 등록'
      : pathname === '/result'
      ? '진단 결과'
      : ''
  }
  const title = getTitle(location.pathname)
  return (
    <div className='layout__container'>
      <TopBar title={title} className='layout__topbar' />
      <div className='layout__page'>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
