# PriconneClanBattle
[![GitHub license](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](https://raw.githubusercontent.com/Asyunelus/PriconneSite/master/LICENSE)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Asyunelus/PriconneSite.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Asyunelus/PriconneSite/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Asyunelus/PriconneSite.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Asyunelus/PriconneSite/alerts/)  
[![Contributors](https://img.shields.io/github/contributors/Asyunelus/PriconneSite)](https://github.com/Asyunelus/PriconneSite/graphs/contributors)
[![Commit Activity](https://img.shields.io/github/commit-activity/w/Asyunelus/PriconneSite)](https://github.com/Asyunelus/PriconneSite/commits/master)
[![Last Commit](https://img.shields.io/github/last-commit/Asyunelus/PriconneSite)](https://github.com/Asyunelus/PriconneSite/commits/master)
  
Priconne Clanbattle Website (React + Express.js)

## 기본 설정법
```
server/routes/database/config.js
```
해당 경로에 있는 Database User 및 Database Password 수정 (되도록이면 특정 table 읽기 권한만 가지게 하면 좋음)

## 사이트 접속 포트
```
localhost:3000
```
기본적으로 3000번 포트로 설정되어있음.

## 관리자 페이지 경로
```
SiteUrl/panel/admin
```
위 경로가 일반적인 관리자페이지 경로입니다.

## api 접근 방법
```
Ex) SiteUrl/api/user/:userID
```
유저 데이터를 불어오는 api는 해당 방식으로 요청할 수 있음. 모바일 어플리케이션도 저 경로로 호출을 시도함.

## Image 경로 설정
기본적으로 해당 깃헙에 올려져 있는 이미지를 가져다 쓰려고함. 별도의 이미지를 사용하려 할 경우 경로를 변경해 주시기 바랍니다.
