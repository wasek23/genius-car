import './Footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
	return <footer className='py-32 bg-[#151515] text-white'>
		<div className='footer container'>
			<div>
				<img src={logo} className='mb-5' alt='Genius Car' />

				<p className='mb-5'>
					Edwin Diaz is a software and web<br />
					technologies engineer, a life coach<br />
					trainer who is also a serial.
				</p>
			</div>

			<div>
				<span className='footer-title'>About</span>
				<a href='/' className='link link-hover'>Home</a>
				<a href='/' className='link link-hover'>Service</a>
				<a href='/' className='link link-hover'>Contact</a>
			</div>

			<div>
				<span className='footer-title'>Company</span>
				<a href='/' className='link link-hover'>Wht Car Doctor</a>
				<a href='/' className='link link-hover'>About</a>
			</div>

			<div>
				<span className='footer-title'>Support</span>
				<a href='/' className='link link-hover'>Support Center</a>
				<a href='/' className='link link-hover'>Feedback</a>
				<a href='/' className='link link-hover'>Accessability</a>
			</div>
		</div>
	</footer>
}
export default Footer;