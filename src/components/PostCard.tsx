import Link from 'next/link'

const PostCard = () => {
	return (
		<div className='card w-full bg-base-100 shadow-xl border border-gray-700 duration-500 hover:scale-110'>
			<div className='card-body'>
				<h2 className='card-title'>Card title!</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className='card-actions justify-end'>
					<Link href='/blog/1' className='hover:underline'>
						Read more...{' '}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default PostCard
