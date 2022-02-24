# nextjs
 - 앱에 있는 페이지들이 미리 렌더링됨 
 - 클라이언트 사이드 렌더링

1. pages 개념
  - pages 폴더 안에 있는 파일명에 따라 루트가 결정됨 
  - 예외사항으로 index.js는 앱이 시작하는 파일. 
  - jsx를 쓰고있다면 React.js를 import할 필요없다. react method쓸때는 import 필요

2. css 
  - 여러가지 방법들이 있지만 <style jsx>{`css구문`}</style> 추천 , 모듈 독립적으로 사용 가능, import 할 필요없음 
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
