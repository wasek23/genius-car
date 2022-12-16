import './Home.css';
import About from './About';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
	return <main className='page homePage'>
		<div className='container'>
			<Banner />
			<About />
			<Services />
		</div>
	</main>
}
export default Home;