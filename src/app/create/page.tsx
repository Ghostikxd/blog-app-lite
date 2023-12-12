'use client'

import FormPost from '@/components/FormPost'
import { FormInputPost } from '@/types'
import { SubmitHandler } from 'react-hook-form'

const CreatePage = () => {
	const handleCreatePost: SubmitHandler<FormInputPost> = data => {
		console.log(data)
	}

	return (
		<div>
			<h1 className='text-2xl my-4 font-bold text-center'>Add new post</h1>
			<FormPost submit={handleCreatePost} />
		</div>
	)
}

export default CreatePage
