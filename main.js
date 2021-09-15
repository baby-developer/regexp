let str = `
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
console.log(str.match(/\.$/gim))
