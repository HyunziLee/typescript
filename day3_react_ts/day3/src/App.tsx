import React, { useEffect, useState } from 'react';
import './App.css';

// jsx 표현하는 타입있음
let 박스 :JSX.Element = <div></div>



function App() {

  // useState 타입지정
  let [user, setUser] = useState<string>('kim')
  return (
    <div>
      <h4>ddd</h4>
      <Profile name="철수"/>

    </div>
  );
}
//컴포넌트 만들 때 타입지정 - 함수타입지정은 파라미터랑 리턴 값
// 컴포넌트 props 타입지정
function Profile(props: {name: string}): JSX.Element{
  return(
    <div>{props.name}</div>
  )
}



export default App;
