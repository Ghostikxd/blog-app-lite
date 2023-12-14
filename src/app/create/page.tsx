'use client'

import BackButton from '@/components/BackButton'
import FormPost from '@/components/FormPost'
import { FormInputPost } from '@/types'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SubmitHandler } from 'react-hook-form'

const queryClient = new QueryClient()

const CreatePage = () => {
	const handleCreatePost: SubmitHandler<FormInputPost> = data => {
		console.log(data)
	}

	return (
		<QueryClientProvider client={queryClient}>
			<div className=''>
				<BackButton />
				<h1 className='text-2xl my-4 font-bold text-center'>Add new post</h1>
				<FormPost
					submit={handleCreatePost}
					isEditing={false}
					className='mx-auto mt-10'
				/>
			</div>
		</QueryClientProvider>
	)
}

export default CreatePage
