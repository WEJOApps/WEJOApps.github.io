# WEJOApps.github.io

WEJOApps 정적 사이트 (GitHub Pages). 영어(기본), 한국어, 일본어, 독일어, 프랑스어를 지원합니다.

페이지는 `src/`의 원본을 `scripts/build.py`(Python 표준 라이브러리만 사용)로 빌드해 만들고, 빌드 결과도 함께 커밋합니다. GitHub Pages는 커밋된 HTML을 그대로 서빙합니다.

## 구조

```
.
├── src/                          # 원본 (여기를 고친다)
│   ├── layout.html               # 공통 페이지 틀 (head, 헤더, 언어 메뉴, 푸터)
│   ├── i18n.json                 # 언어별 UI 문구, 페이지 제목·설명
│   └── content/
│       ├── 404.html
│       └── <lang>/               # en, ko, ja, de, fr
│           ├── home.html
│           ├── courseboy.html
│           └── courseboy/
│               ├── support.html  # 지원 (App Store 지원 URL)
│               ├── privacy.html  # 개인정보 처리방침 (App Store 개인정보 처리방침 URL)
│               └── terms.html    # 이용약관
├── scripts/build.py              # src/ → 페이지 생성
│
├── index.html, courseboy/…       # 생성됨: 영어 (접두어 없음)
├── ko/, ja/, de/, fr/            # 생성됨: 그 밖의 언어
├── 404.html, sitemap.xml         # 생성됨
├── assets/                       # CSS, JS, 이미지 (직접 고친다)
├── robots.txt
└── .nojekyll                     # Jekyll 처리 비활성화
```

## 페이지 고치기

1. `src/content/<lang>/…`의 본문이나 `src/i18n.json`, `src/layout.html`을 고친다. 내용을 바꿀 때는 다섯 언어를 함께 고친다.
2. 빌드한다.

   ```bash
   python3 scripts/build.py
   ```

3. 생성된 파일까지 함께 커밋한다.

생성된 HTML(`index.html`, `courseboy/`, `ko/` 등)은 직접 고치지 않는다. 다음 빌드 때 덮어써진다.

본문에서 쓸 수 있는 자리표시자:

- `{{url:courseboy/privacy}}`: 같은 언어의 해당 페이지 주소
- `{{email}}`: 연락처 이메일 링크 (주소는 `scripts/build.py`의 `EMAIL`)
- `{{app_store_url}}`: CourseBoy App Store 주소 (`APP_STORE_ID`)

새 페이지는 `scripts/build.py`의 `PAGES`에 추가하고, 언어마다 본문 파일과 `i18n.json`의 `pages` 항목을 만든다.

## CourseBoy 주소

| 페이지 | 영어 (기본) | 다른 언어 |
| --- | --- | --- |
| 지원 | https://wejoapps.github.io/courseboy/support/ | `/ko/courseboy/support/` 등 |
| 개인정보 처리방침 | https://wejoapps.github.io/courseboy/privacy/ | `/ko/courseboy/privacy/` 등 |
| 이용약관 | https://wejoapps.github.io/courseboy/terms/ | `/ko/courseboy/terms/` 등 |

## 로컬 미리보기

경로가 `/assets/...` 형태의 루트 기준이므로 파일을 직접 열지 말고 로컬 서버로 확인합니다.

```bash
python3 -m http.server 8000
```

→ http://localhost:8000

## 배포

`main` 브랜치에 push하면 GitHub Pages(`main` / `/(root)`)가 자동으로 배포합니다. 페이지는 최대 10분 캐시되므로 바로 확인하려면 강력 새로고침을 합니다.
