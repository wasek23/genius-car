const SectionHeader = ({ className, title, subTitle, description, alignment = 'center' }) => {

	return <div className={`text-${alignment} ${className}`}>
		{subTitle && <h4 className='text-xl font-bold text-[var(--orangeRed)]'>{subTitle}</h4>}

		{title && <h2 className='text-5xl font-bold text-[var(--dark1)] mt-5'>{title}</h2>}

		{description && <p className='text-base text-[var(--dark3)] mt-5'>{description}</p>}
	</div>
}
export default SectionHeader;