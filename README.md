# nodejs

이벤트 루프

## 자바스크립트 파일 시스템 요청
### fs 모듈
```
const fs = require("fs")
fs.stat(__filename, function statCb(err, stats) {
  if (err) {
    return console.error(err)
  }
  console.log(stats)
})
```

```fs.stat()``` 을 호출하면 fs 노드 코어 모듈로 들어감 


## TDD
1. mocha - 테스트 코드를 돌려주는 테스트 러너
2. should - assert 대용
3. SuperTest - api 테스트 
