import { PenLine, Trash2 } from 'lucide-react'
import Link from 'next/link'

const ButtonAction = () => {
	return (
		<div>
			<Link
				href='/edit/1'
				className='btn btn-outline btn-primary mr-2 text-base hover:scale-105  duration-500 ease-in-out '
			>
				<PenLine />
				Edit
			</Link>
			<button className='btn btn-error btn-outline text-base hover:scale-105 duration-500 ease-in-out '>
				<Trash2 />
				Delete
			</button>
		</div>
	)
}

export default ButtonAction
