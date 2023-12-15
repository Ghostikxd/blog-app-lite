import BackButton from '@/components/BackButton'
import ButtonAction from '@/components/ButtonAction'
import { db } from '@/lib/db'

interface BlogDetailPageProps {
	params: {
		id: string
	}
}

async function getPost(id: string) {
	const resp = await db.post.findFirst({
		where: {
			id: id,
		},
		select: {
			id: true,
			title: true,
			content: true,
			tag: true,
		},
	})
	return resp
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
	const post = await getPost(params.id)

	return (
		<div>
			<BackButton />
			<div className='mb-8	'>
				<h2 className='text-2xl font-bold my-4'>{post?.title}</h2>
				<ButtonAction />
			</div>
			<div className='badge badge-primary badge-outline mr-auto '>
				{post?.tag.name}
			</div>
			<p className='text-slate-400'>{post?.content}</p>
		</div>
	)
}

export default BlogDetailPage
