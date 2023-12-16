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
			<div className='mb-8 flex flex-col justify-center items-start max-w-[500px] mx-auto'>
				<h2 className='text-2xl font-bold my-4 '>
					Title: <span className='px-2 '>{post?.title}</span>
				</h2>
				<h3 className='text-xl font-bold mb-4 mr-auto'>Tag:</h3>
				<div className='badge badge-primary badge-outline'>
					{post?.tag.name}
				</div>
				<h3 className='text-xl font-bold my-4 mr-auto'>Content:</h3>
				<p className='text-slate-400 mb-4'>{post?.content}</p>
				<div className='ml-auto gap-x-10 mt-4'>
					<ButtonAction id={params.id} />
				</div>
			</div>
		</div>
	)
}

export default BlogDetailPage
