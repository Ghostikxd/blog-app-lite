'use client'
import { FormInputPost } from '@/types'
import { Tag } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import clsx from 'clsx'
import { HTMLAttributes } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormPostProps extends HTMLAttributes<HTMLFormElement> {
	submit: SubmitHandler<FormInputPost>
	isEditing: boolean
	initialValue?: FormInputPost
	isLoadingSubmit: boolean
}

const FormPost = ({
	submit,
	initialValue,
	isLoadingSubmit,
	isEditing,
	className,
	...rest
}: FormPostProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputPost>({
		defaultValues: initialValue,
	})

	//fetch list tags
	const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
		queryKey: ['tags'],
		queryFn: async () => {
			const response = await axios.get('/api/tags')
			return response.data
		},
	})

	return (
		<form
			onSubmit={handleSubmit(submit)}
			className={clsx([
				'flex flex-col  gap-5  w-full text-base max-w-[500px]',
				className,
			])}
			{...rest}
		>
			<input
				{...register('title', { required: true })}
				type='text'
				placeholder='Post title...'
				className={`input input-bordered input-primary w-full  ${
					errors.title ? 'border-red-500 focus:border-red-500 ' : ''
				}`}
			/>

			{errors.title && (
				<span className=' text-red-500 text-sm '>Please enter a title.</span>
			)}

			<textarea
				{...register('content', { required: true })}
				className={`textarea textarea-primary w-full  text-base ${
					errors.content ? 'border-red-500 focus:border-red-500' : ''
				}`}
				placeholder='Post content...'
			></textarea>
			{errors.content && (
				<span className='text-red-500 text-sm '>Please enter content.</span>
			)}

			{isLoadingTags ? (
				<span className='loading loading-spinner text-primary loading-md'></span>
			) : (
				<select
					{...register('tagId', {
						required: 'Please select a tag.',
						validate: value => value !== '' || 'Please select a tag.',
					})}
					className={`select select-primary w-full  font-bold text-base ${
						errors.tagId ? 'border-red-500 focus:border-red-500' : ''
					}`}
					defaultValue={''}
				>
					<option disabled value='' className='text-gray-500'>
						Select tag
					</option>
					{dataTags?.map(item => (
						<option key={item.id} value={item.id}>
							{item.name}
						</option>
					))}
				</select>
			)}
			{errors.tagId && (
				<span className='text-red-500 text-sm '>{errors.tagId.message}</span>
			)}

			<button
				type='submit'
				className='btn btn-primary w-full text-base font-bold hover:scale-105 duration-500'
			>
				{isLoadingSubmit && (
					<span className='loading loading-spinner text-neutral loading-md'></span>
				)}
				{isEditing
					? isLoadingSubmit
						? 'Updating...'
						: 'Update'
					: isLoadingSubmit
					? 'Creating...'
					: 'Create'}
			</button>
		</form>
	)
}

export default FormPost
