import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import SignInSide from './components/SignIn.tsx'
import MatchmakerList from './components/matchmakerList.tsx'
import ManSignUp from './components/ManSignUp.tsx'
import SignUp from './components/SignUp.tsx'
import SignIn from './components/SignIn.tsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
// ReactDOM.createRoot(document.getElementById('root')!).render(
createRoot(document.getElementById('root')!).render(
 <Provider store={store}>
   <StrictMode>
    <BrowserRouter>
  
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/MatchmakerList' element={<MatchmakerList/>}/>
      <Route path='/ManSignUp' element={<ManSignUp/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>

    </BrowserRouter>
  </StrictMode>
  </Provider>
)
