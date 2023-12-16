'use client'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { PenLine, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface ButtonActionProps {
	id: string
}

const ButtonAction = ({ id }: ButtonActionProps) => {
	const router = useRouter()

	const { mutate: deletePost, isPending } = useMutation({
		mutationFn: async () => {
			return axios.delete(`/api/posts/${id}`)
		},
		onError: error => {
			console.error(error)
		},
		onSuccess: () => {
			router.push('/')
			router.refresh()
		},
	})

	return (
		<div className='flex gap-x-2'>
			<Link
				href={`/edit/${id}`}
				className='btn btn-outline btn-primary mr-2 text-base hover:scale-105  duration-500 ease-in-out '
			>
				<PenLine />
				Edit
			</Link>
			<button
				onClick={() => deletePost()}
				className='btn btn-error btn-outline text-base hover:scale-105 duration-500 ease-in-out '
			>
				{isPending && (
					<span className='loading loading-spinner text-neutral loading-md'></span>
				)}
				{isPending ? (
					'Loading...'
				) : (
					<>
						<Trash2 />
						Delete
					</>
				)}
			</button>
		</div>
	)
}

export default ButtonAction
