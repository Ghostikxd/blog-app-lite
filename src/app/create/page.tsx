'use client'

import BackButton from '@/components/BackButton'
import FormPost from '@/components/FormPost'
import { FormInputPost } from '@/types'
import { SubmitHandler } from 'react-hook-form'

const CreatePage = () => {
	const handleCreatePost: SubmitHandler<FormInputPost> = data => {
		console.log(data)
	}

	return (
		<div className=''>
			<BackButton />
			<h1 className='text-2xl my-4 font-bold text-center'>Add new post</h1>
			<FormPost
				submit={handleCreatePost}
				isEditing={false}
				className='mx-auto mt-10'
			/>
		</div>
	)
}

export default CreatePage
