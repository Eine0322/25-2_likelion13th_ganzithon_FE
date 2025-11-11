import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home/entry/HomePage'
import UploadPage from '../pages/upload/entry/UploadPage'
import ResultPage from '../pages/result/entry/ResultPage'

export const AppRouter = () => {
  return (
    <Routes>
      {/* 첫 화면. 배포 시 SplashPage로 변경하기*/}
      <Route path='/' element={<HomePage />} />

      {/* 홈페이지 */}
      <Route path='/home' element={<HomePage />} />

      {/* 입력창 페이지 */}
      <Route path='/upload' element={<UploadPage />} />

      {/* 결과 페이지 */}
      <Route path='/result' element={<ResultPage />} />
    </Routes>
  )
}
