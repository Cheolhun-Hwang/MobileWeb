// 필요한 문서객체를 가져와서 저장
var $form = $('form[name=cal]');
var $input = $form.find('input');
var $cls_btn = $('.cls_btn');
var $result_btn = $('.result_btn');
var $result = $form.find('input[name=result]');


// 계산기 초기화(clear)
function clr(){
  // 결과창의 값을 0으로 설정
  $result.val(0);
}

/* 계산기 입력 처리 함수
   - 숫자나 사칙연산 버튼에서 입력된 값을 매개변수로 받아 계산기 결과창에 출력
*/
function calc(value){
  // 사용자가 입력하기 전에 결과창의 값이 0이면 ''로 초기화
  if($result.val() == 0){ 
    $result.val('');
  }
  
  // 입력값을 결과창에 출력
  var val = $result.val()+value;
  $result.val(val);
}

/* 계산 결과 처리 함수
   - 입력된 값은 문자열이기 때문에 eval() 함수를 이용하여 계산하고,
   - 계산 결과값을 결과창에 표시 
*/
function my_result(){
  //입력된 수식을 계산(실행)
  var calc = eval($result.val());
  
  //결과창에 표시
  $result.val(calc);
}

// 이벤트 핸들러
// -------------------------------------------------------------------
/* 숫자 및 사칙연산 버튼을 클릭 이벤트 처리
    - 숫자와 사칙연산 버튼에 onclick 이벤트 등록('=', 'clear' 버튼 제외)
    - 버튼 클릭시 처리할 익명함수 선언(cal()함수 호출)
      (cal()호출시 매개변수로 클릭한 버튼의 속성값(입력값)을 전달)
*/

$('input').click(function(){
  var $input_val = $(this).val();
  if($input_val != '=' && $input_val !='clear'){
    calc($input_val);
  } // end if
});


/* 계산기 초기화 처리
   - clear(cls_btn) 버튼에 onclick 이벤트를 연결하고
   - 버튼 클릭시 처리할 익명함수 선언(clr()함수 호출)
*/ 
$cls_btn.click((event)=>{
  clr();
});

/* 결과 버튼(=) 클릭시 처리
   - "="(result_btn) 버튼에 onclick 이벤트를 연결하고
   - 버튼 클릭시 처리할 익명함수 선언(my_result()함수 호출)
   - 예외처리하여 err시 결과창에 "입력오류"라고 표시
*/
$result_btn.click((event)=>{
  try{
    my_result();  
  }
  catch(err){
    $result.val('입력오류');
    //var result = form['result'];
    //result.value = '입력오류';
  }
});


