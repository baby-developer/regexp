const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
/*
// const regexp = new RegExp('the', 'gi')
// const regexp = /the/gi
// console.log(str.match(regexp))

// test, match, replace 메소드들만 잘 알아도 정규표현식을 충분히 잘 활용할 수 있다.
const regexp = /fox/gi

// console.log(regexp.test(str)) // true

// console.log(str.replace(regexp, 'AAA'))
str = str.replace(regexp, 'AAA')
console.log(str)
// replace는 원본이 바뀌지 않으므로 원본을 바꿔주고 싶으면 바뀐 데이터를 이런 식으로 재할당해주는 방식을 취하면 됨
*/

// 정규표현식의 플래그(옵션)들을 사용해서 앞에 있는 패턴을 좀 더 풍부하게 활용할 수 있다.
// console.log(str.match(/\.$/gim))

console.log(str.match(/d$/gm))
console.log(str.match(/^T/gm))
console.log(str.match(/./g))
console.log(str.match(/h..p/g))
console.log(str.match(/fox|dog/))
console.log(str.match(/https?/g))
console.log(str.match(/d{2,3}/g))
console.log(str.match(/\b\w{2,3}\b/g)) // 아직 살펴보지는 않았지만, 백슬래시(\) 기호에 특정 알파벳을 명시해서 별도의 기능을 수행하는 패턴들이 있다.
console.log(str.match(/[fox]/g))
console.log(str.match(/[0-9]{1,}/g))
console.log(str.match(/[가-힣]{1,}/g)) // 띄어쓰기로 구분되어 있는 모든 한글 부분을 찾음
console.log(str.match(/\w/g))
console.log(str.match(/\bf\w{1,}\b/g)) // 소문자 f로 시작하는 모든 영단어들을 찾음
console.log(str.match(/\d{1,}/g))
console.log(str.match(/\s/g))

const h = `  the hello  world       !

`
console.log(h.replace(/\s/g, ''))

console.log(str.match(/.{1,}(?=@)/g)) // 앞쪽 일치
console.log(str.match(/(?<=@).{1,}/g)) // 뒤쪽 일치
