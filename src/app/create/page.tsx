'use client'

import BackButton from '@/components/BackButton'
import FormPost from '@/components/FormPost'
import { FormInputPost } from '@/types'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { SubmitHandler } from 'react-hook-form'

const CreatePage = () => {
	const router = useRouter()

	const { mutate: createPost, isPending: isLoadingSubmit } = useMutation({
		mutationFn: (newPost: FormInputPost) => {
			return axios.post('/api/posts/create', newPost)
		},
		onError: error => {
			console.error(error)
		},
		onSuccess: () => {
			router.push('/')
			router.refresh()
		},
	})

	const handleCreatePost: SubmitHandler<FormInputPost> = data => {
		createPost(data)
	}

	return (
		<div className=''>
			<BackButton />
			<h1 className='text-2xl my-4 font-bold text-center'>Add new post</h1>
			<FormPost
				isLoadingSubmit={isLoadingSubmit}
				submit={handleCreatePost}
				isEditing={false}
				className='mx-auto mt-10'
			/>
		</div>
	)
}

export default CreatePage
