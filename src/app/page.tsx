import PostCard from '@/components/PostCard'
import { db } from '@/lib/db'

async function getPosts() {
	const resp = await db.post.findMany({
		select: {
			id: true,
			title: true,
			content: true,
			tag: true,
		},
		orderBy: {
			createdAt: 'desc',
		},
	})
	return resp
}

export default async function Home() {
	const posts = await getPosts()

	return (
		<main className='grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10 '>
			{posts.map(post => (
				<PostCard key={post.id} post={post} />
			))}
		</main>
	)
}
