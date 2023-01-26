import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {

  const {id} = useParams();

  useEffect(() => {
    //Detail 컴포넌트가 mount, update 될때 실행할 코드 작성
    //아래 html 랜더링 후 useEffect 안의 코드 실행한다.
    //시간이 오래걸리는 연산, 서버에서 데이터 가져오는 작업, 타이머
    //Effect => 핵심기능과 상관없는 코드 like side effect
    //[] 안에는 useEffect가 실행될 조건 작성
    //1회만 실행하고 싶을 때는 [] 사용
    //useEffect 동작전에 실행하고 싶으면 아래에 코드 작성
    /*
    return () => {
      mount 시에 실행안됨, unmount 시에 실행됨
      이전에 실행했던 것 삭제 등등 이상 작동을 막기 위해 사용
    }
    */
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
    /*
    동적 UI 디자인 순서
    1. html css로 미리 디자인
    2. 탭 상태 저장해둘 state 필요
    3. state에 따라 UI가 어떻게 보일지 작성
    */
  )
}

export default Detail;