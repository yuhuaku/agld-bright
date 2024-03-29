import { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { styled } from '@mui/material'
import Header from '../components/Header'
import Polling from '../components/essential/Polling'
import Popups from '../components/essential/Popups'
import Web3ReactManager from '../components/essential/Web3ReactManager'
// import WarningModal from '../components/Modal/WarningModal'
// import ComingSoon from './ComingSoon'
import { ModalProvider } from 'context/ModalContext'
import { routes } from 'constants/routes'
// import Home from './Home'
// import Explorer from './Explorer'
import Footer from 'components/Footer'
import BG from 'assets/images/home-bg.png'
import Bridge from './Bridge'

const AppWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  overflowX: 'hidden',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    minHeight: '100vh'
  }
}))

const ContentWrapper = styled('div')({
  width: '100%',
  backgroundImage: `url(${BG})`,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat'
  // maxHeight: '100vh',
  // overflow: 'auto',
  // alignItems: 'center'
})

const BodyWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: `calc(100vh - ${theme.height.header})`,
  height: '100%',
  // padding: '50px 0 80px',
  // padding: '0px 0 80px',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  // overflowY: 'auto',
  overflowX: 'hidden',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    minHeight: `calc(100vh - ${theme.height.header} - ${theme.height.mobileHeader})`,
    paddingTop: 20
  }
}))

export default function App() {
  return (
    <Suspense fallback={null}>
      <ModalProvider>
        <AppWrapper id="app">
          <ContentWrapper>
            <Header />
            <BodyWrapper id="body">
              <Popups />
              <Polling />
              {/* <WarningModal /> */}
              <Web3ReactManager>
                <Routes>
                  {/* <Route path={routes.HOME} element={<Home />} /> */}
                  <Route path={routes.BRIDGE} element={<Bridge />} />
                  {/* <Route path={routes.EXPLORER} element={<Explorer />} /> */}
                  <Route path="*" element={<Navigate to={routes.BRIDGE} replace />} />
                </Routes>
              </Web3ReactManager>
            </BodyWrapper>
            <Footer />
          </ContentWrapper>
        </AppWrapper>
      </ModalProvider>{' '}
    </Suspense>
  )
}
