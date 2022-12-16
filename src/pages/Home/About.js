import SectionHeader from '../../components/SectionHeader/SectionHeader';
import person from '../../assets/images/aboutUs/person.jpg'
import parts from '../../assets/images/aboutUs/parts.jpg'

const About = () => {
	return <section className='hero'>
		<div className='hero-content flex-col lg:flex-row'>
			<div className='relative w-full min-h-[410px] lg:w-1/2 lg:mr-7'>
				<img src={person} className='w-4/5 absolute top-0 left-0 rounded-lg shadow-2xl' alt='Person' />
				<img src={parts} className='w-3/5 absolute right-0 bottom-0 rounded-lg shadow-2xl p-2 bg-white' alt='Parts' />
			</div>

			<div className='w-full lg:w-1/2 lg:ml-8'>
				<SectionHeader className='max-w-sm' title='We are qualified & of experience in this field' subTitle='About Us' alignment='left' />

				<p className='text-base text-[var(--dark3)] mt-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

				<p className='text-base text-[var(--dark3)] mt-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

				<button className='btn btn-primary mt-8'>Get More Info</button>
			</div>
		</div>
	</section>
}
export default About;