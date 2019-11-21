# PriconneClanBattle
[![Version](https://img.shields.io/github/v/release/Asyunelus/PriconneSite.svg?include_prereleases)](https://github.com/Asyunelus/PriconneSite/releases)
[![GitHub license](https://img.shields.io/badge/license-AGPL--3.0-blue.svg)](https://raw.githubusercontent.com/Asyunelus/PriconneSite/master/LICENSE)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Asyunelus/PriconneSite.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Asyunelus/PriconneSite/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Asyunelus/PriconneSite.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Asyunelus/PriconneSite/alerts/)  
[![Contributors](https://img.shields.io/github/contributors/Asyunelus/PriconneSite)](https://github.com/Asyunelus/PriconneSite/graphs/contributors)
[![Commit Activity](https://img.shields.io/github/commit-activity/w/Asyunelus/PriconneSite)](https://github.com/Asyunelus/PriconneSite/commits/master)
[![Last Commit](https://img.shields.io/github/last-commit/Asyunelus/PriconneSite)](https://github.com/Asyunelus/PriconneSite/commits/master)
[![Build Status](https://travis-ci.org/Asyunelus/PriconneSite.svg?branch=master)](https://travis-ci.org/Asyunelus/PriconneSite)
[![Coverage Status](https://coveralls.io/repos/github/Asyunelus/PriconneSite/badge.svg?branch=master)](https://coveralls.io/github/Asyunelus/PriconneSite?branch=master)
[![Github Downlaod Total](https://img.shields.io/github/downloads/Asyunelus/PriconneSite/total)](https://github.com/Asyunelus/PriconneSite/releases)

[![Github Fork](https://img.shields.io/github/forks/Asyunelus/PriconneSite?style=social)](https://github.com/Asyunelus/PriconneSite)
[![Github Star](https://img.shields.io/github/stars/Asyunelus/PriconneSite?style=social)](https://github.com/Asyunelus/PriconneSite)
  
Priconne Clanbattle Website (React + Express.js)

## 개발 목표
Code Quality를 A등급 이상 유지하면서 완성하는것이 목표.  
기본적인 클랜배틀 시트 역할을 대체할 수 있을 정도까지 완성하는게 목표.  
클배 타격로그만 작성해도 개인 로그 및 각종 통계를 낼 수 있게끔 편한 기능을 제공하는게 목표.  

## 주의사항
버전이 1.0.00 보다 작은 0.x.xx일 경우 베타버전입니다.  
0.2.xx 이하 버전 에서는 Database를 사용하지 않고 기본 화면 구성 Sample만 동작합니다.  
0.8.xx 이하 버전에서는 관리자 페이지가 존재하지 않습니다.  
0.9.xx 버전에서 관리자 페이지 및 관련 작업 완료시 1.0.00 버전으로 업데이트됩니다.  
AGPL v3.0 라이센스를 사용하고 있습니다.  
### 라이센스 주의사항
AGPL v3.0 라이센스는 GPL v3.0 라이센스와 다르게 웹 사이트로 운용을 해도 배포한 것으로 간주가 됩니다.  
만약, 소스코드를 수정하여 사용할 경우 해당 수정된 소스코드를 포함하여 전체 코드를 배포하여야 됩니다.  
(config.js와 같이 설정파일 제외)  

## 설치 방법
[자세한 내용은 위키를 참고해주세요.](https://github.com/Asyunelus/PriconneSite/wiki)

## Docker를 사용한 설치 (선택)
docker 사용시 장점
linux 지식이없어도 명령어 한줄로 쉽게 사이트 구축가능
의존성 패키지를 전부 설치 해두어서 따로 설치 하지않아도됨
(개발자분이 요구하는 node.js 및 npm 등을 설치 하지않아도 되므로 지식이 없어도 구축가능)
### Centos

```
yum -y update
yum -y install docker docker-registry

systemctl enable docker
systemctl start docker
```
### #Ubuntu

```
apt-get update
apt-get install docker
```

(구글에 docker 설치 검색시 좀더 쉽게 설치가능)

### Docker 설치 이후 세팅법
```
docker run -d -p 3000:3000 --name priconnect --restart=always activefile/priconnect:0.1.02
```

추후 내용 및 업데이트와 DB 관련은 개발자분이 추가 완료시 테스트후 내용 추가예정
