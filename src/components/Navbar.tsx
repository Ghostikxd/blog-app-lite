import { BookOpenText } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
	return (
		<div className='navbar bg-gray-700'>
			<div className='container '>
				<div className='flex-1 '>
					<Link href='/'>
						<BookOpenText className='hover:scale-110 duration-500' />
					</Link>
				</div>
				<div className='flex-none'>
					<Link
						href='/create'
						className='btn btn-ghost hover:scale-105 duration-500'
					>
						Create post
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
