import type { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import ListPage from '../components/ListPage';
import { getRepos, REVALIDATE } from '../lib/feeds';

export async function getStaticProps() {
    return { props: { repos: await getRepos() }, revalidate: REVALIDATE };
}

export default function GitHub({ repos }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <ListPage
            title="GitHub"
            description="github.com/jaegwans의 저장소 목록. 직접 만든 앱·웹 서비스와 사이드 프로젝트 코드."
            intro={
                <p>
                    <a href="https://github.com/jaegwans">github.com/jaegwans</a>에 올린 프로젝트 저장소예요. 최근에
                    작업한 순서이고, 연습·과제용 저장소는 뺐어요. 소개 글이 있는 프로젝트는 &lsquo;소개 글&rsquo;에서
                    만든 과정을 볼 수 있어요.
                </p>
            }
        >
            {repos.length === 0 && (
                <li className="empty">
                    지금은 목록을 불러오지 못했어요. <a href="https://github.com/jaegwans">GitHub에서 보기 →</a>
                </li>
            )}
            {repos.map((r) => (
                <li key={r.name}>
                    <a className="name" href={r.url}>
                        {r.name}
                    </a>
                    <div className="meta">
                        {[r.language, `최근 작업 ${r.pushedAt}`].filter(Boolean).join(' · ')}
                    </div>
                    {r.description && <p>{r.description}</p>}
                    {(r.project || r.homepage) && (
                        <div className="more">
                            {r.project && <Link href={r.project}>소개 글 →</Link>}
                            {r.homepage && (
                                <a href={r.homepage.startsWith('http') ? r.homepage : `https://${r.homepage}`}>
                                    사이트 →
                                </a>
                            )}
                        </div>
                    )}
                </li>
            ))}
        </ListPage>
    );
}
