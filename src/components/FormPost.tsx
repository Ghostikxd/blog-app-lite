'use client'
import { FormInputPost } from '@/types'
import { SubmitHandler, useForm } from 'react-hook-form'

interface FormPostProps {
	submit: SubmitHandler<FormInputPost>
}

const FormPost = ({ submit }: FormPostProps) => {
	const { register, handleSubmit } = useForm<FormInputPost>()

	return (
		<form
			onSubmit={handleSubmit(submit)}
			className='flex flex-col items-center justify-center gap-5 mt-10 text-base'
		>
			<input
				{...register('title')}
				type='text'
				placeholder='Post title...'
				className='input input-bordered input-primary w-full max-w-lg'
			/>
			<textarea
				{...register('content')}
				className='textarea textarea-primary w-full max-w-lg text-base'
				placeholder='Post content...'
			></textarea>
			<select
				{...register('tag')}
				className='select select-primary w-full max-w-lg font-bold text-base'
			>
				<option disabled selected>
					Select tags
				</option>
				<option>Game of Thrones</option>
				<option>Lost</option>
				<option>Breaking Bad</option>
				<option>Walking Dead</option>
			</select>
			<button className='btn btn-primary w-full max-w-lg'>Create</button>
		</form>
	)
}

export default FormPost
