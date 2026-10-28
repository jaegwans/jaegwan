import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { getBlogPosts, REVALIDATE } from '../lib/feeds';

const projects = [
    {
        name: 'Vibe Mountain',
        href: '/projects/vibe-mountain',
        site: 'https://vibemountain.jaegwan.com',
        desc: '생년월일시로 사주 오행을 계산해, 100대 명산 중 나에게 모자란 기운을 채워줄 산을 추천하는 모바일웹. 친구와 매칭률도 볼 수 있어요.',
    },
    {
        name: 'nocotine',
        href: '/projects/nocotine',
        desc: '금연한 시간, 아낀 돈, 몸의 회복 단계를 실시간으로 보여주고 가까운 금연 클리닉을 찾아주는 React Native 앱.',
    },
    {
        name: 'fourcutbox',
        href: '/projects/fourcutbox',
        desc: '네컷 사진을 모아 보관하고 근처 사진관을 지도로 찾는 앱. React Native CLI로 만들고 있어요.',
    },
    {
        name: 'coflix',
        href: '/projects/coflix',
        site: 'https://coflix.jaegwan.com',
        desc: '개발 공부 영상, 오늘의 백준 문제, 합격자 이력서를 넷플릭스처럼 한 화면에 모은 개발자 취준생용 사이트.',
    },
    {
        name: 'WeatherCoordi',
        href: '/projects/weathercoordi',
        desc: '현재 위치의 기온에 맞춰 오늘 입을 옷을 추천하고, 날씨에 어울리는 노래까지 이어주는 앱.',
    },
    {
        name: 'minesweeper',
        href: '/projects/minesweeper',
        site: 'https://minesweeper.jaegwan.com',
        desc: 'React와 Redux Toolkit으로 만든 브라우저 지뢰찾기. 빈칸을 한 번에 여는 BFS를 직접 구현했어요.',
    },
];

const notes = [
    { title: '오행으로 산의 기운을 매기는 기준', href: '/notes/ohaeng-and-mountains' },
    { title: '태어난 시각을 보정하는 이유: 진태양시와 서머타임', href: '/notes/true-solar-time' },
    { title: '산을 고르는 점수 공식', href: '/notes/mountain-score' },
];

export async function getStaticProps() {
    const posts = await getBlogPosts();
    return { props: { posts: posts.slice(0, 5) }, revalidate: REVALIDATE };
}

function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <StyledHome>
            <Head>
                <title>jaegwan.com</title>
                <meta
                    name="description"
                    content="개발자 jaegwan의 홈. Vibe Mountain, nocotine, coflix 등 직접 만든 앱과 웹 서비스, 만들면서 정리한 글을 모아둡니다."
                />
            </Head>
            <h2>jaegwan.com</h2>
            <nav className="top">
                <StyledLink href="/blog">blog</StyledLink>
                <StyledLink href="/github">github</StyledLink>
            </nav>

            <StyledSection>
                <h3>Projects</h3>
                {projects.map((p) => (
                    <div className="card" key={p.name}>
                        <div className="title">
                            <Link href={p.href}>{p.name}</Link>
                        </div>
                        <p>{p.desc}</p>
                        <div className="links">
                            <Link href={p.href}>만든 이야기 →</Link>
                            {p.site && <a href={p.site}>{p.site.replace('https://', '')} →</a>}
                        </div>
                    </div>
                ))}
            </StyledSection>

            <StyledSection>
                <h3>Notes</h3>
                <ul>
                    {notes.map((n) => (
                        <li key={n.href}>
                            <Link href={n.href}>{n.title}</Link>
                        </li>
                    ))}
                </ul>
            </StyledSection>

            {posts.length > 0 && (
                <StyledSection>
                    <h3>Blog</h3>
                    <ul>
                        {posts.map((post) => (
                            <li key={post.link}>
                                <a href={post.link}>{post.title}</a>
                            </li>
                        ))}
                    </ul>
                    <Link className="all" href="/blog">
                        블로그 글 전체 보기 →
                    </Link>
                </StyledSection>
            )}

            <footer>
                <Link href="/privacy">개인정보처리방침</Link>
            </footer>
        </StyledHome>
    );
}

export default Home;

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 3rem;
    min-height: 100vh;
    margin-top: 3rem;
    padding: 0 1rem 4rem;
    a {
        text-decoration: none;
    }
    nav.top {
        display: flex;
        gap: 2rem;
    }
    footer a {
        color: #8a8a8a;
        font-size: 0.85rem;
    }
`;

const StyledLink = styled.a`
    color: #5a5a5a;
    font-size: 2rem;

    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
    &:hover {
        color: #000000;
        transform: translateY(-0.5rem);
    }
`;

const StyledSection = styled.section`
    width: 100%;
    max-width: 560px;
    h3 {
        color: #5a5a5a;
        font-size: 1.1rem;
        letter-spacing: 0.05em;
        margin: 0 0 1rem;
    }
    .card {
        padding: 1rem 0;
        border-top: 1px solid #e2e2e2;
    }
    .title a {
        color: #222;
        font-size: 1.2rem;
        font-weight: 600;
    }
    p {
        color: #5a5a5a;
        line-height: 1.6;
        margin: 0.4rem 0;
    }
    .links {
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem 1rem;
        font-size: 0.9rem;
    }
    .links a {
        color: #2f5d50;
    }
    .all {
        display: inline-block;
        margin-top: 0.75rem;
        color: #2f5d50;
        font-size: 0.9rem;
    }
    ul {
        margin: 0;
        padding-left: 1.2rem;
        line-height: 2;
    }
    li a {
        color: #2f5d50;
    }
`;
