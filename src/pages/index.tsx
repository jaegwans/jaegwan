import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const projects = [
    {
        name: 'Vibe Mountain',
        href: '/projects/vibe-mountain',
        site: 'https://vibemountain.jaegwan.com',
        desc: '생년월일시로 사주 오행을 계산해, 100대 명산 중 나에게 모자란 기운을 채워줄 산을 추천하는 모바일웹. 친구와 매칭률도 볼 수 있어요.',
    },
    {
        name: 'coflix',
        site: 'https://coflix.jaegwan.com',
        desc: '개발자 취준생에게 꼭 필요한 정보만 모아둔 사이트',
    },
    {
        name: 'minesweeper',
        site: 'https://minesweeper.jaegwan.com',
        desc: '브라우저에서 바로 하는 지뢰찾기',
    },
];

const notes = [
    { title: '오행으로 산의 기운을 매기는 기준', href: '/notes/ohaeng-and-mountains' },
    { title: '태어난 시각을 보정하는 이유: 진태양시와 서머타임', href: '/notes/true-solar-time' },
    { title: '산을 고르는 점수 공식', href: '/notes/mountain-score' },
];

function Home() {
    return (
        <StyledHome>
            <Head>
                <title>jaegwan.com</title>
                <meta
                    name="description"
                    content="개발자 jaegwan의 홈. Vibe Mountain 등 직접 만든 서비스와 만들면서 정리한 글을 모아둡니다."
                />
            </Head>
            <h2>jaegwan.com</h2>
            <StyledLink href="https://blog.jaegwan.com">blog</StyledLink>
            <StyledLink href="https://github.com/jaegwans">github</StyledLink>
            <StyledLink href="https://docs.google.com/document/d/1D5oPFkMqpe1dYCPoW6LAHp9gBBHgHQtdWg11ADhVP1A/edit?usp=sharing">
                resume
            </StyledLink>

            <StyledSection>
                <h3>Projects</h3>
                {projects.map((p) => (
                    <div className="card" key={p.name}>
                        <div className="title">
                            {p.href ? <Link href={p.href}>{p.name}</Link> : <a href={p.site}>{p.name}</a>}
                        </div>
                        <p>{p.desc}</p>
                        <a className="site" href={p.site}>
                            {p.site.replace('https://', '')} →
                        </a>
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
    .site {
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
