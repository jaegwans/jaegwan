import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
    title: string;
    description: string;
    date: string;
    children: React.ReactNode;
};

// 글 페이지 공통 레이아웃
function Article({ title, description, date, children }: Props) {
    return (
        <>
            <Head>
                <title>{`${title} · jaegwan.com`}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>
            <StyledArticle>
                <Link href="/" className="back">
                    ← jaegwan.com
                </Link>
                <h1>{title}</h1>
                <p className="date">{date}</p>
                <div className="body">{children}</div>
                <footer>
                    <Link href="/">홈</Link> · <Link href="/privacy">개인정보처리방침</Link>
                </footer>
            </StyledArticle>
        </>
    );
}

export default Article;

const StyledArticle = styled.article`
    max-width: 680px;
    margin: 0 auto;
    padding: 3rem 1.5rem 5rem;
    color: #2b2b2b;
    word-break: keep-all;
    line-height: 1.85;
    font-size: 1.05rem;

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
        line-height: 1.35;
    }
    .date {
        margin-top: 0.5rem;
        color: #8a8a8a;
        font-size: 0.9rem;
    }
    .body {
        margin-top: 2.5rem;
    }
    .body h2 {
        margin: 2.5rem 0 0.75rem;
        font-size: 1.35rem;
    }
    .body p,
    .body ul,
    .body ol,
    .body table {
        margin-top: 1rem;
    }
    .body ul,
    .body ol {
        padding-left: 1.4rem;
    }
    .body li + li {
        margin-top: 0.35rem;
    }
    .body table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.95rem;
    }
    .body th,
    .body td {
        border-bottom: 1px solid #ddd;
        padding: 0.5rem 0.4rem;
        text-align: left;
        vertical-align: top;
    }
    .body th {
        color: #666;
        font-weight: 500;
    }
    .body .table-wrap {
        overflow-x: auto;
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
