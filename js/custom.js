

$(function () {
    // //메뉴 버튼클릭시
    // $(".toggleBtn").click(function(){
    //   //.gnb요소와 .icon요소에 active클래스를 추가 또는 제거
    //   $(".gnb, .icon").toggleClass("active");
    // });

    // //브라우저 사이즈가 640px 이상일때 gnb와 icon의 active클래스를 제거합니다.
    // $(window).resize(function(){//브라우저 사이즈를 조절했을때
    //   var winWd = $(window).width();//브라우저의 넓이를 구하여 winWd변수에 할당
    //   console.log(winWd)
    //   if(winWd > 780){//브라우저의 넓이가 640이상일때 gnb와 icon에 active클래스를 제거
    //     $(".gnb, .icon").removeClass("active");
    //   }
    // })
 
// });//document readyy





    // 슬릭태그
    // $(function(){
      $('.slick').slick({
        slide: '.cons',        //슬라이드 되어야 할 태그
        
        infinite : true,     //무한 반복 옵션     
        slidesToShow : 4,        // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
        speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true,         // 옆으로 이동하는 화살표 표시 여부
        dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : false,            // 자동 스크롤 사용 여부
        autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : false,        // 세로 방향 슬라이드 옵션
        // prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
        // nextArrow : "<button type='button' class='slick-next'>Next</button>",
        draggable : true,     //드래그 가능 여부 
        responsive: [ // 반응형 웹 구현 옵션
          {  
            breakpoint: 980, //화면 사이즈 960px
            settings: {
              slidesToShow: 4
            } 
          },
          { 
            breakpoint: 770, //화면 사이즈 768px
            settings: {    
              slidesToShow: 3
            } 
          },

          { 
            breakpoint: 600, //화면 사이즈 768px
            settings: {    
              slidesToShow: 2
            } 
          },

          { 
            breakpoint: 300, //화면 사이즈 768px
            settings: {    
              slidesToShow: 1
            } 
          },
        ]
  
      });
  // });
  // var count=0
  // 
  // function activation(){
  //   $(".wrappers .lush-item").removeClass("on").eq(count).addclass("on");
  //   $(".wrappers .lush-item:first") .trigger("click")
  // }
  // $(function(){
  //  $(".wrppers .lush-item").click()
  // });


// 러쉬아코디언 
// $(function(){
  let menu = $('.lush-item');
 
  menu.mouseenter(function(){ //메뉴에 마우스가 올라가면 올라간 메뉴에만 active가 들어오도록
      menu.removeClass('active');
      $(this).addClass('active');
  })
  .mouseleave(function(){
      menu.removeClass('active');
  });

});
      // });