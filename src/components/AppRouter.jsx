import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/home/entry/HomePage'
import UploadPage from '../pages/upload/entry/UploadPage'
import ResultPage from '../pages/result/entry/ResultPage'
import RootLayout from './Layout/Root-layout'

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // errorElement: 나중에 에러페이지 만들기
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'upload',
        element: <UploadPage />,
      },
      {
        path: 'result',
        element: <ResultPage />,
      },
    ],
  },
])

export default AppRouter
