# nextjs
 - 앱에 있는 페이지들이 미리 렌더링됨 
 - 클라이언트 사이드 렌더링

1. pages 개념
  - pages 폴더 안에 있는 파일명에 따라 루트가 결정됨 
  - 예외사항으로 index.js는 앱이 시작하는 파일. 
  - jsx를 쓰고있다면 React.js를 import할 필요없다. react method쓸때는 import 필요

2. css 
  - 여러가지 방법들이 있지만 <style jsx>{`css구문`}</style> 추천 , 모듈 독립적으로 사용 가능, import 할 필요없음 
  - 한 페이지 전역 설정 : <style jsx global>{`css구문`}</style>
  - 모든 페이지 전역 설정 : pages/_app.js 생성 

```js
 // ex) 
 export default function App({ Component, pageProps}){
    return (
    <div>
        <Component {...pageProps}/>
        <span>hello</span>
    </div>
    );
}
```
3. getServerSideProps() 
   - 항상 html이 완전한 상태로 준비되어있기를 바랄 때 사용 -> 유저가 접속했을 때 모든 데이터가 페이지에 존재
   - fetch를 통해 db를 불러올 수 있음, 프론트에 보이지 않고 백엔드에서 작동되기 때문에 API KEY를 넣거나 데이터를 가져오는 등의 일이 가능
   
4. URL에 변수 넣는 방법 
   - [변수명].js 파일 생성

5. redirects, rewrites 
   - next.config.js 파일에서 다음과같이 입력

  ```js
  module.exports = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source:"/contact",
        destination : "/form",
        permanent: false,
      }
    ]
  },
  async rewrites(){
    return[{
      source: "/api/movies",
      destination : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    }];
  },
}
  ```
   - api key같은 정보들을 보여주지 않고 싶을때 사용

6. catch url
   - 홈페이지에서 클릭해서 들어오지 않아도 상세페이지에서 영화제목을 볼 수 있다. 
   - [...변수명].js
