# Week 1 - Day 1: GraphQL Init & SDL 기초

## 🎯 오늘의 목표
- GraphQL 기본 개념과 핵심 용어 이해
- SDL 구조와 역할 학습
- 최소 GraphQL 서버 실행 및 쿼리/뮤테이션 요청 실습
- 시행착오 기록 및 개선 방법 정리

---

## 📸 실행 화면
### 서버 실행
![server-run](./images/server-run.png)

### 첫 쿼리 실행 (curl)
![curl-hello](./images/curl-hello.png)

### GraphiQL로 쿼리 실행
![graphi-greeting](./images/grahpi-greeting.png) 

---

## 🐛 시행착오 기록
1. 서버 상태 확인 방식
   - 시도: 서버 실행 여부를 `ping localhost:4000`으로 확인하려고 시도
   - 문제: ping은 네트워크 연결성만 확인, 애플리케이션 상태와 무관
   - 해결: HTTP 요청(`curl /graphql`)로 서버 상태 확인
   - 배운 점: Health Check 엔드포인트의 필요성

2. 브랜치 전략 미수립립
   - 문제: 항상 새로운 사이드 프로젝트를 시작할 때마다, 혼자 작업해서 그런건지 신나서(?) 눈이 멀어버린건지 main에 커밋을 한두개 정도 찍고 난 다음 dev를 분리함
   - 해결: 일단 dev를 분리했고 README에 브랜치 전략을 추가

3. GraphiQL 운영 비활성화
   - 관찰: GraphQL Yoga는 `NODE_ENV=production`일 때 GraphiQL이 자동 비활성화됨
   - 결론: 이번 프로젝트에서는 별도의 환경 변수 분기 없이 기본 동작 사용

---

## 📌 TIL
### SDL (Schema Definition Language)
- GraphQL에서 *Schema*와 *Type system*을 선언하는 전용 언어
- API의 type definitions, queries, mutations를 고급 언어 수준으로 작성하여 API contract로 사용

### GraphiQL
- GraphQL 전용 웹 기반 IDE
- 브라우저에서 GraphQL 쿼리 작성, 실행 및 결과 확인이 가능
- 공식 문서가 해당 기능을 활용하여 아주 잘 꾸며져 있음
- 다음과 같은 기능들을 제공공
    - 스키마 기반 자동 완성
    - Docs Explorer를 통한 API 문서 탐색
    - 에러 하이라이팅과 쿼리 히스토리


### 참고사항
- GraphQL Specification — Schema Definition Language (SDL)  
  [https://spec.graphql.org/June2018/#sec-Schema](https://spec.graphql.org/June2018/#sec-Schema)
- GraphQL.org — Schemas and Types  
  [https://graphql.org/learn/schema/](https://graphql.org/learn/schema/)
- Apollo GraphQL Docs — Schema Definition Language (SDL)  
  [https://www.apollographql.com/docs/apollo-server/schema/schema/](https://www.apollographql.com/docs/apollo-server/schema/schema/)


