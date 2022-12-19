$(function () {
  //메뉴 버튼클릭시
  $(".toggleBtn").click(function(){
    //.gnb요소와 .icon요소에 active클래스를 추가 또는 제거
    $(".gnb, .icon").toggleClass("active");
  });

  //브라우저 사이즈가 640px 이상일때 gnb와 icon의 active클래스를 제거합니다.
  $(window).resize(function(){//브라우저 사이즈를 조절했을때
    var winWd = $(window).width();//브라우저의 넓이를 구하여 winWd변수에 할당
    console.log(winWd)
    if(winWd > 780){//브라우저의 넓이가 640이상일때 gnb와 icon에 active클래스를 제거
      $(".gnb, .icon").removeClass("active");
    }
  })


// 메뉴


$(document).ready(function(){

  $(".all").on("click",function(){
      $(".nav").addClass("on");
      $(".dim").show();
  });
  $(".nav .close").on("click",function(){
      $(".nav").removeClass("on");
      $(".dim").hide();
  });
                
});

});