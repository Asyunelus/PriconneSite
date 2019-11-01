# PriconneClanBattle
[![GitHub license](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](https://raw.githubusercontent.com/Asyunelus/PriconneSite/master/LICENSE)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Asyunelus/PriconneSite.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Asyunelus/PriconneSite/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Asyunelus/PriconneSite.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Asyunelus/PriconneSite/alerts/)  
[![Contributors](https://img.shields.io/github/contributors/Asyunelus/PriconneSite)](https://github.com/Asyunelus/PriconneSite/graphs/contributors)
[![Commit Activity](https://img.shields.io/github/commit-activity/w/Asyunelus/PriconneSite)](https://github.com/Asyunelus/PriconneSite/commits/master)
[![Last Commit](https://img.shields.io/github/last-commit/Asyunelus/PriconneSite)](https://github.com/Asyunelus/PriconneSite/commits/master)
[![Build Status](https://travis-ci.org/Asyunelus/PriconneSite.svg?branch=master)](https://travis-ci.org/Asyunelus/PriconneSite)
[![Coverage Status](https://coveralls.io/repos/github/Asyunelus/PriconneSite/badge.svg?branch=master)](https://coveralls.io/github/Asyunelus/PriconneSite?branch=master)
  
Priconne Clanbattle Website (React + Express.js)

## 설치 방법
먼저 node.js 설치를 진행합니다.  
### Windows
[Nodejs.org에서 설치하기](https://nodejs.org/ko/download/)  
다운받은 후 설치하시면 됩니다.  

### Linux
```
sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm
```

### Node.js 설치 이후 할 것들

node.js 설치가 완료되면 해당 프로젝트를 다운받아서 새로 폴더를 만들어 안에 압축을 해제해주세요.  
그 후 console창에서 npm install 명령어 사용시 해당 프로젝트에서 사용한 module들이 설치됩니다.  
그후 database 설정을 진행해주세요.  
```
server/routes/database/config.js
```
해당 경로에 있는 Database User 및 Database Password 수정 (되도록이면 특정 table 읽기 권한만 가지게 하면 좋음)

마지막으로 설정이 끝났으면 npm start 명령어로 시작할 수 있습니다.  

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
