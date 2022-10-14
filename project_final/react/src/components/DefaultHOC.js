import { Link, Outlet } from 'react-router-dom'
import './default.css'


const DefaultHOC = () => {

	return <>
		<main>
			<div className='big-wrapper'>
				<header>
					<div className='container'>
						<div className='logo'>
							<h1>
								<Link to="/">BOOK<span>holic</span></Link> 
								</h1>
						</div>
						<div className='links'>
							<ul>
								<li><Link to="/login">LOG IN</Link></li>
								<li><Link to="/signup">SIGN UP</Link></li>
							</ul>
						</div>
					</div>
				</header>
				<div>
					<Outlet />
				</div>
			</div>


		</main>
	</>
}
export default DefaultHOC