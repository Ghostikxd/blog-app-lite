'use client'
import { FormInputPost } from '@/types'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormPostProps {
	submit: SubmitHandler<FormInputPost>
	isEditing: boolean
}

const FormPost = ({ submit, isEditing }: FormPostProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputPost>()

	//fetch list tags
	const { data: dataTags, isLoading: isLoadingTags } = useQuery({
		queryKey: ['tags'],
		queryFn: async () => {
			const response = await axios.get('/api/tags')
			return response.data
		},
	})
	console.log(dataTags)

	return (
		<form
			onSubmit={handleSubmit(submit)}
			className='flex flex-col  items-center justify-center gap-5 mt-10 text-base'
		>
			<input
				{...register('title', { required: true })}
				type='text'
				placeholder='Post title...'
				className={`input input-bordered input-primary w-full max-w-lg ${
					errors.title ? 'border-red-500 focus:border-red-500 ' : ''
				}`}
			/>

			{errors.title && (
				<span className=' text-red-500 text-sm mr-[350px]'>
					Please enter a title.
				</span>
			)}

			<textarea
				{...register('content', { required: true })}
				className={`textarea textarea-primary w-full max-w-lg text-base ${
					errors.content ? 'border-red-500 focus:border-red-500' : ''
				}`}
				placeholder='Post content...'
			></textarea>
			{errors.content && (
				<span className='text-red-500 text-sm mr-[350px]'>
					Please enter content.
				</span>
			)}

			<select
				{...register('tag', {
					required: 'Please select a tag.',
					validate: value => value !== '' || 'Please select a tag.',
				})}
				className={`select select-primary w-full max-w-lg font-bold text-base ${
					errors.tag ? 'border-red-500 focus:border-red-500' : ''
				}`}
				defaultValue={''}
			>
				<option disabled value='' className='text-gray-500'>
					Select tag
				</option>
				<option value='Overwatch'>Overwatch</option>
				<option value='CS2'>CS2</option>
				<option value='HearthStone'>HearthStone</option>
				<option value='World of Warcraft'>World of Warcraft</option>
			</select>
			{errors.tag && (
				<span className='text-red-500 text-sm mr-[350px]'>
					{errors.tag.message}
				</span>
			)}

			<button
				type='submit'
				className='btn btn-primary w-full max-w-lg text-base font-bold hover:scale-105 duration-500'
			>
				{isEditing ? 'Update post' : 'Create post'}
			</button>
		</form>
	)
}

export default FormPost
