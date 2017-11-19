$(function(){

	// 문제 객체 생성자 함수
	function Question(text, choice, answer){
		  this.text = text; //문제(질문) 텍스트
		  this.choice = choice; //답안(4지선다향), 배열
		  this.answer = answer; //정답
	}

	// 퀴즈 객체 생성자 함수
	function Quiz(questions){
		this.score=0		// 점수
		this.questions = questions;	// 문제(질문)[]
		this.questionIndex = 0;	// 질문 순서(문제 번호)
	}

	// 정답 확인 메소드
	Quiz.prototype.correctAnswer = function(answer){
		return answer == this.questions[this.questionIndex].answer;
	};

	// ------------------------------------------------------------------------------------------

	// 문제 데이터(배열)
	var questions = [
		new Question('다음 중 최초의 상용 웹 브라우저는?', ['모자이크', '인터넷익스플로러', '구글 크롬', '넷스케이프 네비게이터'], '넷스케이프 네비게이터'),
		new Question('웹 문서에서 스타일을 작성하는 언어는?', ['HTML', 'jQuery', 'CSS', 'XML'], 'CSS'),
		new Question('명령어 기반의 인터페이스를 의미하는 용어는?', ['GUI', 'CLI', 'HUD', 'SI'], 'CLI'),
		new Question('CSS 속성 중 글자의 굵기를 변경하는 속성은?', ['font-size', 'font-style', 'font-weight', 'font-variant'], 'font-weight')
	];

	// 퀴즈 객체 생성
	var quiz = new Quiz(questions);//문제 데이터(배열)을 매개변수로 전달

	// -----------------------------------------------------------------------------------
	// 문제 출력 함수
	function update_quiz(){
        //문제 출력 영역의 문서객체(id="question")를 변수($question)에 저장
		var $question = $('p#question');
        // 현재의 문제 번호를 저장(quiz.questionIndex 배열값 + 1)
		var idx = quiz.questionIndex+1;
        
        // 문제 표시 ==> 문제x) 다음 중 ....는? 
		$question.html('문제 ' + idx + ' ) ' + quiz.questions[quiz.questionIndex].text);

        //답안(사지선다향) 표시
		for(var i = 0; i < 4; i++){
			var $choice = $('.btn').eq(i);// 답안버튼 객체를 변수($choice)로 저장
            //답안 버튼 영역에 답안 표시
			$choice.html(quiz.questions[quiz.questionIndex].choice[i]);
		}
		progress();
	}

	// 문제 진행 정보 표시(현재 문제 번호/총 문항수)
	function progress(){
		var progress = $('#progress');
		progress.html("문제 " + (quiz.questionIndex +1) + " / " + (quiz.questions.length));
	}

	// ------------------------------------------------------------------------------------------	
	
	// 결과 표시
	function result(){
		var $quiz = $('#quiz');
		var per = parseInt((quiz.score*100) / quiz.questions.length);

		var txt =	'<h1>결과</h1>' +
					'<h2 id="score"> 당신의 점수: ' + quiz.score + '/' +  
					quiz.questions.length + '<br><br>' + per + '점</h2>';
        
		if(per < 60){
			txt += '<h2 style="color:red">좀더 분발하세요</h2>';
		} else if(per >= 60 && per <= 80){
			txt += '<h2 style="color:red">무난한 점수네요</h2>';
		} else if(per > 80){
			txt += '<h2 style="color:red">훌륭합니다</h2>'
		}
        
		// 퀴즈 결과 출력
        $quiz.html(txt);
	}


	// 입력 및 정답 확인 함수(main함수)
	(function(){
        // 4개의 답안 버튼에 click 이벤트 리스너 등록
		$('.btn').click(function(){
			var $answer = $(this).text();

            //응답 결과 체크
			if(quiz.correctAnswer($answer)){
				console.log('true');
				quiz.score++;
			} else{ alert('틀렸습니다!'); }	

			if(quiz.questionIndex < quiz.questions.length-1){
				quiz.questionIndex++;
				update_quiz();
			} else { result(); }
		}); // end onclick

		update_quiz();	
	})(); // end main()

}); //end $()