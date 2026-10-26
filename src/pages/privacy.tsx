import Article from '../components/Article';

export default function Privacy() {
    return (
        <Article
            title="개인정보처리방침"
            description="jaegwan.com의 개인정보 처리와 광고·쿠키 사용에 대한 안내."
            date="시행일 2026년 10월 26일"
        >
            <h2>수집하는 정보</h2>
            <p>
                jaegwan.com은 회원가입이나 입력 양식이 없고, 방문자의 이름·연락처 같은 개인정보를 직접
                수집하지 않습니다. 사이트를 운영하는 호스팅 업체(Vercel)는 서비스 운영과 보안을 위해 접속
                기록(IP 주소, 브라우저 정보, 방문 시각)을 일정 기간 보관할 수 있습니다.
            </p>

            <h2>광고와 쿠키</h2>
            <p>
                이 사이트와 하위 서비스에는 Google 애드센스 광고가 표시될 수 있습니다. Google을 비롯한 제3자
                광고 사업자는 쿠키를 사용해 이 사이트나 다른 사이트 방문 기록을 바탕으로 광고를 보여줄 수
                있습니다.
            </p>
            <ul>
                <li>
                    Google은 광고 쿠키를 사용해 사용자의 이 사이트 및 다른 사이트 방문 정보를 바탕으로 광고를
                    게재합니다.
                </li>
                <li>
                    맞춤 광고는 <a href="https://adssettings.google.com">Google 광고 설정</a>에서 끌 수
                    있습니다.
                </li>
                <li>
                    자세한 내용은{' '}
                    <a href="https://policies.google.com/technologies/ads">Google 광고 정책</a>에서 볼 수
                    있습니다.
                </li>
            </ul>

            <h2>하위 서비스</h2>
            <p>
                Vibe Mountain(vibemountain.jaegwan.com) 등 하위 서비스는 각 서비스의 개인정보처리방침을
                따릅니다. Vibe Mountain의 방침은{' '}
                <a href="https://vibemountain.jaegwan.com/privacy/">여기</a>에서 볼 수 있습니다.
            </p>

            <h2>문의</h2>
            <p>개인정보와 관련한 문의나 삭제 요청은 ookjg97@gmail.com으로 보내주세요.</p>
        </Article>
    );
}
