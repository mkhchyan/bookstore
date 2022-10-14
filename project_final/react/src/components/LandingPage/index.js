import { Link, Outlet, useNavigate } from 'react-router-dom';
import bookshelves from './bookshelves.svg';
import './land.css'
import { useDispatch } from 'react-redux';

const Landing = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return <>
		<main>
			<div className='big-wrapper'>
				{/* <header>
					<div className='container'>
						<div className='logo'>
							<h1>BOOK<span>holic</span></h1>
						</div>
						<div className='links'>
							<ul>
								<li><Link to="/login">LOG IN</Link></li>
								<li><Link to="/signup">SING UP</Link></li>
							</ul>
						</div>
					</div>
				</header> */}

				<div className='showcase-area'>
					<div className='container'>
						<div className='left'>
							<div className='big-title'>
								<h1>Your library here,<br />
									Start READING now.</h1>
							</div>
							<div className='cta'>
								<Link to="/signup" className='btn'>Get started</Link>
							</div>
						</div>
						<div className='right'>
							<img src={bookshelves} className="image" />
						</div>
					</div>
				</div>
				
			</div>
		</main>
	</>

}

export default Landing;