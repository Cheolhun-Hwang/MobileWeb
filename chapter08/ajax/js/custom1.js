$(document).ready(function () {
	// "날씨확인" 버튼을 클릭하면 OpenweatherMap 서버에 원하는 도시의 날씨정보를 요청하여 가져오기
	$("button").click(function () {
        var city = $("input").val();
		var appid = "56490fb64d48e20f0c759b9208e7d664";
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + 
						 city + "&mode=json&units=metric&appid=" + appid;
						 
		$.get(url, function(data, status){
			console.log(data);
			var result = data.name + "의 날씨는" +
						data.main.temp + "도 입니다.";
						$("#weather-info").html(result);
		});
	});
});
