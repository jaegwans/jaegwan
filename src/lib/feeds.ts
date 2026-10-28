// 블로그(티스토리 RSS)와 GitHub 저장소 목록. 빌드 때 불러오고 하루에 한 번 새로 고친다(ISR).

export const REVALIDATE = 60 * 60 * 24;

export type BlogPost = {
    title: string;
    link: string;
    date: string; // YYYY-MM-DD
    excerpt: string;
};

export type Repo = {
    name: string;
    url: string;
    description: string;
    language: string;
    homepage: string;
    pushedAt: string; // YYYY-MM-DD
    project?: string; // jaegwan.com 안의 프로젝트 소개 페이지
};

const BLOG_RSS = 'https://blog.jaegwan.com/rss';
const GITHUB_REPOS = 'https://api.github.com/users/jaegwans/repos?per_page=100&sort=pushed';

// 소개 페이지가 있는 저장소
const PROJECT_PAGES: Record<string, string> = {
    nocotine: '/projects/nocotine',
    fourcutbox: '/projects/fourcutbox',
    coflix: '/projects/coflix',
    'coflix-back': '/projects/coflix',
    fatube: '/projects/coflix',
    minesweeper: '/projects/minesweeper',
    WeatherCoordi: '/projects/weathercoordi',
};

// 연습·강의·과제용 저장소는 목록에서 뺀다
const HIDDEN = /^(git[-_]|algorithm|ps-|javascript-ps|try_|rn-study|react-complete|react-native-guide|movie_app|E02Views|e2018|j2018|gdsc-test|jaegwans$|jaegwan2?\.github\.io|opportunist|boardFront)/i;

function decode(s: string) {
    return s
        .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&');
}

function text(html: string) {
    return decode(decode(html))
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function tag(item: string, name: string) {
    const m = item.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`));
    return m ? m[1] : '';
}

export async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        const res = await fetch(BLOG_RSS);
        if (!res.ok) return [];
        const xml = await res.text();
        return (xml.match(/<item>[\s\S]*?<\/item>/g) ?? []).map((item) => {
            const excerpt = text(tag(item, 'description'));
            return {
                title: text(tag(item, 'title')),
                link: text(tag(item, 'link')),
                date: new Date(text(tag(item, 'pubDate'))).toISOString().slice(0, 10),
                excerpt: excerpt.length > 90 ? `${excerpt.slice(0, 90)}…` : excerpt,
            };
        });
    } catch {
        return [];
    }
}

export async function getRepos(): Promise<Repo[]> {
    try {
        const res = await fetch(GITHUB_REPOS, { headers: { Accept: 'application/vnd.github+json' } });
        if (!res.ok) return [];
        const list: any[] = await res.json();
        return list
            .filter((r) => !r.fork && !HIDDEN.test(r.name))
            .map((r) => ({
                name: r.name,
                url: r.html_url,
                description: r.description ?? '',
                language: r.language ?? '',
                homepage: r.homepage ?? '',
                pushedAt: String(r.pushed_at).slice(0, 10),
                ...(PROJECT_PAGES[r.name] ? { project: PROJECT_PAGES[r.name] } : {}),
            }));
    } catch {
        return [];
    }
}
