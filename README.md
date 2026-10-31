# WEJOApps.github.io

WEJOApps 정적 사이트 (GitHub Pages). 빌드 도구 없이 순수 HTML/CSS/JS로 구성되어 있습니다.

## 구조

```
.
├── index.html          # 메인 페이지
├── 404.html            # GitHub Pages가 자동으로 사용하는 404 페이지
├── courseboy/          # CourseBoy 앱 페이지
│   ├── support/        # 지원 (App Store 지원 URL)
│   ├── privacy/        # 개인정보 처리방침 (App Store 개인정보 처리방침 URL)
│   └── terms/          # 이용약관
├── assets/
│   ├── css/style.css   # 공통 스타일 (라이트/다크 모드 토큰)
│   ├── js/main.js      # 공통 스크립트
│   └── images/         # 이미지, 파비콘
├── robots.txt
└── .nojekyll           # Jekyll 처리 비활성화 (파일을 그대로 서빙)
```

## 로컬 미리보기

경로가 `/assets/...` 형태의 루트 기준이므로 파일을 직접 열지 말고 로컬 서버로 확인합니다.

```bash
python3 -m http.server 8000
```

→ http://localhost:8000

## 배포

1. GitHub에 `WEJOApps/WEJOApps.github.io` 저장소를 만들고 `main` 브랜치에 push
2. 저장소 **Settings → Pages**에서 Source를 `Deploy from a branch`, 브랜치 `main` / `/(root)`로 설정
3. 잠시 후 https://wejoapps.github.io 에서 확인
