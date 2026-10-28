import type { InferGetStaticPropsType } from 'next';
import ListPage from '../components/ListPage';
import { getBlogPosts, REVALIDATE } from '../lib/feeds';

export async function getStaticProps() {
    return { props: { posts: await getBlogPosts() }, revalidate: REVALIDATE };
}

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <ListPage
            title="Blog"
            description="blog.jaegwan.com에 쓴 개발 글 목록. React 성능, React Native 빌드, 프론트엔드 문제 해결 기록."
            intro={
                <p>
                    실무와 사이드 프로젝트에서 부딪힌 문제를 푼 과정을{' '}
                    <a href="https://blog.jaegwan.com">blog.jaegwan.com</a>에 기록하고 있어요. 제목을 누르면 블로그
                    글로 이동합니다.
                </p>
            }
        >
            {posts.length === 0 && (
                <li className="empty">
                    지금은 목록을 불러오지 못했어요. <a href="https://blog.jaegwan.com">블로그에서 보기 →</a>
                </li>
            )}
            {posts.map((p) => (
                <li key={p.link}>
                    <a className="name" href={p.link}>
                        {p.title}
                    </a>
                    <div className="meta">{p.date}</div>
                    {p.excerpt && <p>{p.excerpt}</p>}
                </li>
            ))}
        </ListPage>
    );
}
