import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
    title: string;
    description: string;
    intro: React.ReactNode;
    children: React.ReactNode;
};

// 블로그·GitHub 목록 페이지 공통 레이아웃
function ListPage({ title, description, intro, children }: Props) {
    return (
        <>
            <Head>
                <title>{`${title} · jaegwan.com`}</title>
                <meta name="description" content={description} />
            </Head>
            <StyledList>
                <Link href="/" className="back">
                    ← jaegwan.com
                </Link>
                <h1>{title}</h1>
                <div className="intro">{intro}</div>
                <ul>{children}</ul>
                <footer>
                    <Link href="/">홈</Link> · <Link href="/privacy">개인정보처리방침</Link>
                </footer>
            </StyledList>
        </>
    );
}

export default ListPage;

const StyledList = styled.div`
    max-width: 680px;
    margin: 0 auto;
    padding: 3rem 1.5rem 5rem;
    color: #2b2b2b;
    word-break: keep-all;
    line-height: 1.7;

    a {
        color: #2f5d50;
    }
    .back {
        color: #8a8a8a;
        text-decoration: none;
        font-size: 0.95rem;
    }
    h1 {
        margin-top: 2rem;
        font-size: 2rem;
    }
    .intro {
        margin-top: 1rem;
        color: #5a5a5a;
    }
    ul {
        list-style: none;
        margin-top: 2rem;
    }
    li {
        padding: 1.1rem 0;
        border-top: 1px solid #e2e2e2;
    }
    li .name {
        color: #222;
        font-size: 1.1rem;
        font-weight: 600;
        text-decoration: none;
    }
    li .meta {
        color: #8a8a8a;
        font-size: 0.85rem;
        margin-top: 0.2rem;
    }
    li p {
        color: #5a5a5a;
        margin-top: 0.35rem;
    }
    li .more {
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem 1rem;
        margin-top: 0.35rem;
        font-size: 0.9rem;
    }
    li .more a {
        text-decoration: none;
    }
    .empty {
        color: #8a8a8a;
    }
    footer {
        margin-top: 4rem;
        color: #8a8a8a;
        font-size: 0.9rem;
    }
    footer a {
        color: #8a8a8a;
    }
`;
