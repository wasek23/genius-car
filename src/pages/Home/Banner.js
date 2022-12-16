import bannerImg1 from '../../assets/images/banner/1.jpg';
import bannerImg2 from '../../assets/images/banner/2.jpg';
import bannerImg3 from '../../assets/images/banner/3.jpg';
import bannerImg4 from '../../assets/images/banner/4.jpg';
import bannerImg5 from '../../assets/images/banner/5.jpg';
import bannerImg6 from '../../assets/images/banner/6.jpg';

const bannerData = [
	{
		image: bannerImg1,
		title: 'Affordable Price For Car Servicing',
		description: 'There are many variations of passages of available, but the majority have suffered alteration in some form',
		btn1: {
			text: 'Discover More',
			link: '/'
		},
		btn2: {
			text: 'Latest Project',
			link: '/'
		}
	},
	{
		image: bannerImg2,
		title: 'Affordable Price For Car Servicing',
		description: 'There are many variations of passages of available, but the majority have suffered alteration in some form',
		btn1: {
			text: 'Discover More',
			link: '/'
		},
		btn2: {
			text: 'Latest Project',
			link: '/'
		}
	},
	{
		image: bannerImg3,
		title: 'Affordable Price For Car Servicing',
		description: 'There are many variations of passages of available, but the majority have suffered alteration in some form',
		btn1: {
			text: 'Discover More',
			link: '/'
		},
		btn2: {
			text: 'Latest Project',
			link: '/'
		}
	},
	{
		image: bannerImg4,
		title: 'Affordable Price For Car Servicing',
		description: 'There are many variations of passages of available, but the majority have suffered alteration in some form',
		btn1: {
			text: 'Discover More',
			link: '/'
		},
		btn2: {
			text: 'Latest Project',
			link: '/'
		}
	},
	{
		image: bannerImg5,
		title: 'Affordable Price For Car Servicing',
		description: 'There are many variations of passages of available, but the majority have suffered alteration in some form',
		btn1: {
			text: 'Discover More',
			link: '/'
		},
		btn2: {
			text: 'Latest Project',
			link: '/'
		}
	},
	{
		image: bannerImg6,
		title: 'Affordable Price For Car Servicing',
		description: 'There are many variations of passages of available, but the majority have suffered alteration in some form',
		btn1: {
			text: 'Discover More',
			link: '/'
		},
		btn2: {
			text: 'Latest Project',
			link: '/'
		}
	}
];

const Banner = () => {
	return <div className='carousel w-full h-[600px] rounded-xl mb-16'>
		{bannerData?.map((item, index) => {
			const { image, title, description, btn1, btn2 } = item;

			const itemNumber = index + 1;

			return <div key={index} id={`slide${itemNumber}`} className='carousel-item relative w-full'>
				<img src={image} className='w-full object-cover' alt={`Banner ${itemNumber}`} />

				<div className='absolute h-full flex flex-col justify-center gap-8 pl-24' style={{ background: 'linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0) 100%)' }}>
					{title && <h2 className='text-6xl font-bold text-white max-w-md'>{title}</h2>}
					{description && <p className='text-lg text-white max-w-lg'>{description}</p>}

					<div className='flex gap-5'>
						{btn1 && <a href={btn1?.link} className='btn'>{btn1?.text}</a>}
						{btn2 && <a href={btn2?.link} className='btn secondary alt'>{btn2?.text}</a>}
					</div>
				</div>

				<div className='absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0'>
					<a href={`#slide${1 === itemNumber ? bannerData.length : itemNumber - 1}`} className='btn btn-circle secondary'>🠔</a>
					<a href={`#slide${bannerData.length === itemNumber ? 1 : itemNumber + 1}`} className='btn btn-circle'>🠖</a>
				</div>
			</div>
		})}
	</div>
}
export default Banner;