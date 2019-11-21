const express = require('express');

//var mysql      = require('mysql');
//var dbconfig   = require('./database/config.js');
//var conn = mysql.createConnection(dbconfig);

const router = express.Router();

router.get('/', (req, res) => res.json({data:'null'}));
router.get('/version', (req, res) => res.json({
    version:1,
    versionStr:'v1.0',
    patch:1,
    patchStr:'P001'
}));

router.get('/notice/:Page', (req, res) => {
    var page = req.params.Page || 1;
    var resultData = {
        page: page,
        count: 10,
        notice: [
            {no: 10, title: "Null", text: "Null", author: "Null", writeday: "1970.01.01"},
            {no: 9, title: "Null", text: "Null", author: "Null", writeday: "1970.01.01"},
            {no: 8, title: "Null", text: "Null", author: "Null", writeday: "1970.01.01"},
            {no: 7, title: "Null", text: "Null", author: "Null", writeday: "1970.01.01"},
            {no: 6, title: "Null", text: "Null", author: "Null", writeday: "1970.01.01"},
            {no: 5, title: "Null", text: "Null", author: "Null", writeday: "1970.01.01"},
            {no: 4, title: "Null", text: "Null", author: "Null", writeday: "1970.01.01"},
            {no: 3, title: "Null", text: "Null", author: "Null", writeday: "1970.01.01"},
            {no: 2, title: "Null", text: "Null", author: "Null", writeday: "1970.01.01"},
            {no: 1, title: "Null", text: "Null", author: "Null", writeday: "1970.01.01"},
        ]
    }

    return res.json(resultData);
});

router.get('/board/:NoticeID', (req, res) => {
    var nid = req.params.NoticeID;
    var resultData = {
        no: nid,
        title: "Null",
        text: "Null",
        author: "Null",
        writeday: "1970.01.01"
    };

    return res.json(resultData);
});

router.get('/analysis/:CBYYYYMM', (req, res) => {
    var date = req.params.CBYYYYMM;
    if (date.length != 6 || isNaN(date)) {
        return res.json({
            pid:upid,
            response_code:13,
            response_description:'error: date is only 6 digits.'
        });
    }
    //플레이어의 스코어, 기여도, 타격횟수
    var PlayerList = {};
    //전체 타격 정보
    var AttackLog = {};
    //클랜 순위
    var CurrentRank = 0;
    //전체 키무리점수
    var CurrentScore = 0;
    //전체 타격횟수
    var CurrentAttack = 0;

    var resultData = {
        pid:upid,
        response_code:1,
        response_description:'succceed',
        rank: CurrentRank,
        score: CurrentScore,
        attack: CurrentAttack,
        attackhistory: AttackLog,
        playerlist: PlayerList
    };
    return res.json(resultData);
});

router.get('/user/:CBYYYYMM/:UserPID', (req, res) => {
    var upid = req.params.UserPID;
    var date = req.params.CBYYYYMM;
    if (date.length != 6 || isNaN(date)) {
        return res.json({
            pid:upid,
            response_code:13,
            response_description:'error: date is only 6 digits.'
        });
    } else if (upid.length != 12 || isNaN(upid)) {
        return res.json({
            pid:upid,
            response_code:13,
            response_description:'error: user pid is only 12 digits.'
        });
    } else {
        var CachedSetting = {
            boss_multiply: [
                {level: 1, b1: 1.00, b2: 1.00, b3: 1.00, b4: 1.00, b5: 1.00},
                {level: 2, b1: 1.20, b2: 1.00, b3: 1.3, b4: 0.95, b5: 1.05},
                {level: 3, b1: 1.00, b2: 1.00, b3: 1.00, b4: 1.00, b5: 1.00},
            ]
        };
        var CachedData = {
            name: "name.null",
            scoreall: 36604911,
            damageall: 38271577,
            kimuraall: 66666618,
            cbscore: 100,
            attack_cnt: [
                {level: 1, b1: 0, b2: 0, b3: 0, b4: 3, b5: 0},
                {level: 2, b1: 0, b2: 0, b3: 0, b4: 27, b5: 0},
                {level: 3, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0},
            ],
            attack_all: 30,
            attack_show: 31,
            attack_log: [
                {idx: 0,level:1, turn: 1, day:1, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 1,level:1, turn: 1, day:1, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 2,level:1, turn: 1, day:1, boss:4, damage:1234567, type:2, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 3,level:1, turn: 1, day:1, boss:5, damage:1234567, type:3, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 4,level:1, turn: 2, day:2, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 5,level:1, turn: 2, day:2, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 6,level:1, turn: 2, day:2, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 7,level:1, turn: 2, day:3, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 8,level:1, turn: 2, day:3, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 9,level:1, turn: 2, day:3, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 10,level:1, turn: 2, day:4, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 11,level:1, turn: 2, day:4, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 12,level:1, turn: 2, day:4, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 13,level:1, turn: 2, day:5, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 14,level:1, turn: 2, day:5, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 15,level:1, turn: 2, day:5, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 16,level:1, turn: 2, day:6, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 17,level:1, turn: 2, day:6, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 18,level:1, turn: 2, day:6, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 19,level:1, turn: 3, day:7, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 20,level:1, turn: 3, day:7, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 21,level:1, turn: 3, day:7, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 22,level:1, turn: 3, day:8, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 23,level:1, turn: 3, day:8, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 24,level:1, turn: 3, day:8, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 25,level:1, turn: 3, day:9, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 26,level:1, turn: 3, day:9, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 27,level:1, turn: 3, day:9, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 28,level:1, turn: 3, day:10, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 29,level:1, turn: 3, day:10, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
                {idx: 30,level:1, turn: 3, day:10, boss:4, damage:1234567, type:1, char1: -1, char2: -1, char3: -1, char4: -1, char5: -1},
            ]
        };
        //cached data가 존재하는지 확인
        /*if (true) {
        //미리 생성해둔 cached data를 불러옴
        } else {
            conn.query("", [], (err, res) => {

            });
            //없을경우 db에 쿼리하여 cached data를 생성
            if (true) {
                //player data가 존재
                //cached data 생성
            } else {
                //player data가 없음
                //cache를 생성하지 않음
                return res.json({
                    pid:upid,
                    response_code:14,
                    response_description:'error: user pid is not found.'
                });
            }
        }*/
        //해당 데이터를 알맞게 변환
        var resultData = {
            pid:upid,
            response_code:1,
            response_description:'succceed',
            setting:CachedSetting,
            data:CachedData
        };
        //변환한 데이터를 리턴
        return res.json(resultData);
    }
});


router.get('/*', (req, res) => res.json({data:'null'}));

module.exports = router;
