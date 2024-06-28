import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import MainLayout from './screens/MainLayouts';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import RequestDemoScreen from './screens/RequestDemoScreen';
import FreeTrialScreen from './screens/FreeTrialScreen';
import PricingScreen from './screens/PricingScreen';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route index element={<HomeScreen />} />
        <Route path='/access-account' element={<LoginScreen />} />
        <Route path='/get-started' element={<SignUpScreen />} />
        <Route path='/contact-us' element={<ContactUsScreen />} />
        <Route path='request-demo' element={<RequestDemoScreen />} />
        <Route path='/get-started/hire-now' element={<FreeTrialScreen />} />
        <Route path='/pricing' element={<PricingScreen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App