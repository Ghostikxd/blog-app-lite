'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const BackButton = () => {
	const router = useRouter()
	return (
		<button
			className='btn  btn-neutral btn-outline text-base duration-500 ease-in-out  hover:scale-105 '
			onClick={() => router.back()}
		>
			<ChevronLeft />
			Go back
		</button>
	)
}

export default BackButton
