$(function(){
     
	// 프로그램에서 제어할 요소들을 객체화(변수에 저장)
	var $indicator = $('.indicator button');//인디케이터 버튼
	var $lightbox = $('#lightbox');//라이트박스 본체
	var $block = $('#block');	// 라이트박스 배경

	/*  라이트박스 표시(open) 함수
        - 이미지 목록을 클릭했을 때 CSS에서 라이트박스를 표시하기 위해 
          $lightbox와 $block 요소에 active 클래스를 추가하고,
        - 라이트박스가 열리거나 인디케이터 버튼을 클릭하면, 해당하는 이미지를 표시(전환)하는
          함수인 change_img()함수의 매수변수로 전달받은 이미지번호(num)을 전달하고,
        - 해당하는 인디케이터 버튼에 포커스를 활성화 시킴
    */
	function lightbox_open(num){
		//$lightbox 요소에 active 클래스를 추가
		$lightbox.addClass('active');

		//$block 요소에 active 클래스를 추가
		$block.addClass('active');
		
		// 이미지 전환 함수 호출 
		change_img(num);

		//해당하는 인디케이터 버튼에 포커스를 활성화(focus())
		$indicator.eq(num).focus();
	}

	/* 라이트 박스 종료
       - 라이트박스가 표시되지 않게 하기 위해 $lightbox와 $block 요소의 active 클래스를 제거
    */
	function lightbox_close(){
		//$lightbox 요소에 active 클래스를 제거
		//$lightbox.removeAttr('class');
		$lightbox.removeClass('active');

		//$block 요소에 active 클래스를 제거
		//$block.removeAttr('class');
		$block.removeClass('active');
	}

	// 이미지 전환 표시 함수
	function change_img(num){
      // figure 영역에 있는 img 자식요소를 가져와 저장(배열객체)
	  var $imgs = $('figure > img');
      console.log($imgs);
        
      // $imgs 배열 객체의 요소(img)에 있는 모든 클래스를 제거(표시되지 않게 하기 위해)
	  for( var i = 0; i < $imgs.length; i++){
	    $imgs.eq(i).removeAttr('class');
	  }
        
      /* $imgs 배열 객체에 전달받은 이미지번호(num)에 해당하는 요소에 
         클래스 active를 추가하여 해당 이미지가 표시되도록 함
      */
	  $imgs.eq(num).attr('class', 'active');;	
	}	

	// 이미지 목록 click 이벤트 | 라이트 박스 열기
	$('img.thumb').click(function(){// img 요소의 thumb 클래스에 클릭이벤트 등록
        // 클릭한 이미지 객체의 인덱스번호를 img_num에 저장
		var img_num = $(this).index() -1;
        
        // 라이트박스 오픈(표시) 함수 호출
		lightbox_open(img_num);
	});

	// 라이트 박스 닫기 버튼  click 이벤트
	$('.btn-close').click(function(){
		lightbox_close();
	});

	// 인디케이터 클릭시 click 이벤트 | 라이트 박스 이미지 변경
	$indicator.click(function(){
		//클릭한 인디케이터의 인덱스번호를 img_num에 저장
		var img_num = $(this).index();

		// 이미지 전환 표시 함수
		change_img(img_num);
	});


}); // end $()
