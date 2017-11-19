// 필요한 문서객체를 가져와서 저장
var form = document.forms['cal'];
var input = form.getElementsByTagName('input');
var cls_btn = document.getElementsByClassName('cls_btn');
var result_btn = document.getElementsByClassName('result_btn');


// 계산기 초기화(clear)
function clr(){
  // 결과창의 값을 0으로 설정
  form['result'].value=1;
}

/* 계산기 입력 처리 함수
   - 숫자나 사칙연산 버튼에서 입력된 값을 매개변수로 받아 계산기 결과창에 출력
*/
function calc(value){
  // 사용자가 입력하기 전에 결과창의 값이 0이면 ''로 초기화
  if(form['result'].value == 0){
    form['result'].value = '';
  }
  
  // 입력값을 결과창에 출력
  form['result'].value += value;
}

/* 계산 결과 처리 함수
   - 입력된 값은 문자열이기 때문에 eval() 함수를 이용하여 계산하고,
   - 계산 결과값을 결과창에 표시 
*/
function my_result(){
  var result = form['result'];
  //입력된 수식을 계산(실행) - eval() 사용
  
  
  //결과창에 표시
  
}

// 이벤트 핸들러
// -------------------------------------------------------------------
/* 숫자 및 사칙연산 버튼을 클릭 이벤트 처리
    - 숫자와 사칙연산 버튼에 onclick 이벤트 등록('=', 'clear' 버튼 제외)
    - 버튼 클릭시 처리할 익명함수 선언(calc()함수 호출)
      (cal()호출시 매개변수로 클릭한 버튼의 속성값(입력값)을 전달)
*/
for(var i = 0; i < input.length;i++){
  // 숫자와 사칙 연산자만 입력 처리
    input[i].onclick = (event)=>{
        if( (parseInt(event.target.value)>=0 && parseInt(event.target.value) <= 9||
             event.target.value == '+' || event.target.value == '-' || event.target.value == '*'
             || event.target.value == '/' || event.target.value == '%')){
            //form['result'].innerHTML += event.target.value;
            calc(event.target.value);
        }
    }
} // end for


/* 계산기 초기화 처리
   - clear(cls_btn) 버튼에 onclick 이벤트를 연결하고
   - 버튼 클릭시 처리할 익명함수 선언(clr()함수 호출)
*/ 
cls_btn.onclick = ()=> {
    alert('clear');
  clr();
}

/* 결과 버튼(=) 클릭시 처리
   - "="(result_btn) 버튼에 onclick 이벤트를 연결하고
   - 버튼 클릭시 처리할 익명함수 선언(my_result()함수 호출)
   - 예외처리(try-catch 문)하여 err시 결과창에 "입력오류"라고 표시
*/

result_btn.onclick = ()=>{
    alert('result');
    try{

    }catch(err){
        form['result'].value = '입력오류';
    }
}

