		// API 요청 URL 변수
        var appid = "56490fb64d48e20f0c759b9208e7d664";
        var url = "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=" +appid;

		// 로딩 이미지 표시
		$('#weather_info .load_img').show();

		$.getJSON(url, function (data) {

                console.log(data);
            
		        // 날씨 데이터 객체
		        var sys = data.sys; // 국가명, 일출/일몰			
		        var city = data.name; // 도시명
				var country = sys.country; // 국가명
		        var weather = data.weather; // 날씨 객체
		        var main = data.main; // 온도 기압 관련 객체

		        var wmain = weather[0].main; // 구름 상태(Cloudiness)
		        var w_id = weather[0].id; // 날씨상태 id 코드
		        var icon = weather[0].icon; // 날씨 아이콘 정보

		        var temp = main.temp; // 현재 온도
		        var temp_min = main.temp_min // 최저 온도
		        var temp_max = main.temp_max // 최고 온도
                
                //일출시간
                var sunrise = sys.sunrise;
                var date = new Date(sunrise * 1000);
                var sunrisetimestr = date.toLocaleDateString();
                console.log('일출시간 : ' + date,  sunrisetimestr);
            
                //일몰시간
                var sunset = sys.sunset;
                var date = new Date(sunset * 1000);
                var sunsettimestr = date.toLocaleDateString();
                console.log('일몰시간 : ' + date, sunsettimestr);

		        // 날씨 아이콘
		        var icon_url = 'https://openweathermap.org/img/w/' + icon;

		        // 날씨 정보 표시
		        $('#weather_info > .city').html(city + "/" + country);
				$('#weather_info .w_id').html(wmain);
		        $('#weather_info  .icon').html("<img src='" + icon_url + ".png'>");

                //온도의 기본값은 국제단위인 캘빈값으로 반환됨으로 섭씨(-273.15)로 변환해야함 
		        $('#weather_info  .temp').html(parseInt(temp - 273.15) + '&deg;');
		        $('#weather_info .temp_min').html(parseInt(temp_min - 273.15) + '&deg;' + ' min');
		        $('#weather_info .temp_max').html(parseInt(temp_max - 273.15) + '&deg;' + ' max');


		        // 데이터 로딩 후 로딩이미지 제거
		        $('#weather_info .load_img').hide();

        }) // end getJSON()

        .fail(function () {
            // 오류 메시지
            alert("loding error");
        });
