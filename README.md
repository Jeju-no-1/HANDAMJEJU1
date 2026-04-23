# 한담길스테이 · Handamgil Stay

> 바람이 오래 머무는 집. 제주 애월, 한담해안 옆의 작은 독채 스테이.

서정적인 톤으로 구성한 한담길스테이의 랜딩 페이지 샘플입니다. 실제 사진을 기반으로 한 에디토리얼 레이아웃, 세이지 그린 · 크림 · 월넛의 3톤 팔레트, Fraunces/명조 세리프 × Caveat 손글씨 엑센트 조합으로 구성했습니다.

## 구조

```
handam-site/
├── index.html                메인 랜딩
├── assets/
│   ├── css/style.css         전체 스타일 (커스텀 프로퍼티 기반)
│   ├── js/main.js            스티키 내비 · 스무스 앵커 · 스크롤 리빌
│   └── images/               PNG→JPG 변환된 한담길스테이 실사진 15장
└── README.md
```

## 섹션

| # | 섹션 | 내용 |
|---|------|------|
| 01 | Hero | 외관 사진 + "바람이 오래 머무는 집" |
| 02 | 이야기 | 한담(閒談)의 의미, 돌담 안쪽의 고요 |
| — | Wide | 마당의 하얀 테이블 풀블리드 |
| 03 | 오소 객실 | 6장 비대칭 갤러리 + 어메니티 4컬럼 |
| 04 | 마당 & 골목 | 외관 콜라주 + 시적 캡션 |
| 05 | 머무름 | 요금 카드 + 전화/문자 예약 CTA |
| 06 | 오시는 길 | 주소, 공항 길찾기, 주변 명소 |
| — | Closing | "바람의 속도로 머무시기를" |
| — | Footer | 메뉴 · 연락처 · 정책 |

## 디자인 시스템

```css
:root{
  --cream:  #FAF7F0;   /* base paper */
  --sage:   #7A8B6F;   /* 세이지 그린 — 주방 캐비닛에서 추출 */
  --walnut: #6B5844;   /* 원목 — 간판·문틀 */
  --ink:    #2C3E2D;   /* 다크 포레스트 — 텍스트 */
  --sage-deep: #4E5E48;
  --script: 'Caveat','Parisienne',cursive;   /* 손글씨 엑센트 */
}
```

## 실행

```bash
# 로컬 미리보기
python3 -m http.server 8000
# → http://localhost:8000
```

또는 바탕화면의 `handam-site/index.html` 을 더블클릭하면 브라우저에서 바로 열립니다.

## 이미지

총 15장의 실사진을 `assets/images/` 에 배치. 원본 PNG(평균 600KB)를 JPG 85% 프로그레시브로 변환하여 평균 65KB까지 최적화.

| 카테고리 | 파일 |
|---------|------|
| 외관 | exterior-01 · exterior-02 · exterior-entry · exterior-garden · exterior-sign |
| 객실 | room-oso-01 · room-oso-02 · room-oso-entry · room-oso-living · room-oso-bedroom |
| 시설 | kitchen · bathroom · amenity-01 · amenity-02 · interior-main |

## 다음 단계

- [ ] 실제 지도 임베드 (네이버 맵 / 카카오 맵)
- [ ] 예약 폼 연동 (Formspree / Tally)
- [ ] 숙소 스펙 상세 페이지 (객실당 1페이지)
- [ ] 블로그/저널 섹션 (숙박 후기, 주변 명소 포스트)
- [ ] 오픈그래프 대표 이미지 추가
- [ ] GA / 카카오톡 채널 연동

## 라이선스

MIT — 자유롭게 수정·사용 가능합니다. 사진은 한담길스테이 자산.
