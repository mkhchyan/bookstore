import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignupComponent from './components/Signup'
import LoginComponent from './components/Login'
import ProfileComponent from './components/Profile'
import DefaultHOC from './components/DefaultHOC'
import SettingsComponent from './components/Settings'
import AuthHOC from './components/AuthHOC'
import LandingComponent from './components/LandingPage'
// import DashboardComponent from './components/Admin/Dashboard'
import AdminHOC from './components/AdminHOC'
import Rent from './components/Admin/Rent'
import Books from './components/Books'
import Dashboard from './components/Admin/Dashboard'
import AddBook from './components/Admin/AddBook'

const Router = () => {
	return <>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DefaultHOC />}>
					<Route path="" element={<LandingComponent />} />
					<Route path="login" element={<LoginComponent />} />
					<Route path="signup" element={<SignupComponent />} />
				</Route>


				<Route path='/profile' element={<AuthHOC />}>
					<Route path='' element={<ProfileComponent />} />
					<Route path='settings' element={<SettingsComponent />} />
					<Route path='books' element={<Books />} />
				</Route>

				<Route path='/' element={<AdminHOC />}>
					<Route path='admin' element={<Dashboard />} />
					<Route path='addbook' element={<AddBook />} />
					<Route path='rent' element={<Rent />} />
					<Route path='books' element={<Books />} />
				</Route>


			</Routes>
		</BrowserRouter>
	</>
}

export default Router