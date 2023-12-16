'use client'

import BackButton from '@/components/BackButton'
import FormPost from '@/components/FormPost'
import { FormInputPost } from '@/types'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { SubmitHandler } from 'react-hook-form'

interface EditPostPageProps {
	params: {
		id: string
	}
}

const EditPostPage = ({ params }: EditPostPageProps) => {
	const router = useRouter()
	const { id } = params
	const { data: dataPost, isLoading: isLoadingPost } = useQuery({
		queryKey: ['posts', id],
		queryFn: async () => {
			const resp = await axios.get(`/api/posts/${id}`)
			return resp.data
		},
	})

	const { mutate: updatePost, isPending: isLoadingSubmit } = useMutation({
		mutationFn: (newPost: FormInputPost) => {
			return axios.patch(`/api/posts/${id}`, newPost)
		},
		onError: error => {
			console.error(error)
		},
		onSuccess: () => {
			router.push('/')
			router.refresh()
		},
	})

	const handleEditPost: SubmitHandler<FormInputPost> = data => {
		updatePost(data)
	}

	if (isLoadingPost) {
		return (
			<div className=' text-center'>
				<span className='loading loading-spinner text-primary loading-lg'></span>
			</div>
		)
	}

	return (
		<div>
			<BackButton />
			<h1 className='text-2xl my-4 font-bold text-center'>Edit post</h1>
			<FormPost
				isLoadingSubmit={isLoadingSubmit}
				submit={handleEditPost}
				initialValue={dataPost}
				isEditing
				className='mx-auto mt-10'
			/>
		</div>
	)
}

export default EditPostPage
