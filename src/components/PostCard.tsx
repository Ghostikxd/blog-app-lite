import { Tag } from '@prisma/client'
import clsx from 'clsx'
import Link from 'next/link'
import { HTMLAttributes } from 'react'

interface PostCardProps extends HTMLAttributes<HTMLDivElement> {
	post: {
		id: string
		title: string
		content: string
		tag: Tag
	}
}

const PostCard = ({ post, className, ...rest }: PostCardProps) => {
	return (
		<div
			className={clsx([
				'card w-full bg-base-100 shadow-xl border border-gray-700 duration-500 hover:scale-110',
				className,
			])}
			{...rest}
		>
			<div className='card-body'>
				<h2 className='card-title'>{post.title}</h2>
				<p className='truncate'>{post.content}</p>
				<div className='card-actions justify-end'>
					<div className='badge badge-primary badge-outline mr-auto '>
						{post.tag.name}
					</div>
					<Link href={`/blog/${post.id}`} className='hover:underline'>
						Read more...
					</Link>
				</div>
			</div>
		</div>
	)
}

export default PostCard
