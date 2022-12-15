// $(function () {
//     //메뉴 버튼클릭시
//     $(".toggleBtn").click(function(){
//       //.gnb요소와 .icon요소에 active클래스를 추가 또는 제거
//       $(".gnb, .icon").toggleClass("active");
//     });

    
// $(".nav_w>li>a").click(function(){
//   $(".nav_w>.sub_Drop").slideUp();
//   if(!$(this).next().is(":visible")){
//     $(this).next().slideDown();
//   }
//   });

//     //브라우저 사이즈가 640px 이상일때 gnb와 icon의 active클래스를 제거합니다.
//     $(window).resize(function(){//브라우저 사이즈를 조절했을때
//       var winWd = $(window).width();//브라우저의 넓이를 구하여 winWd변수에 할당
//       console.log(winWd)
//       if(winWd > 780){//브라우저의 넓이가 640이상일때 gnb와 icon에 active클래스를 제거
//         $(".gnb, .icon").removeClass("active");
//       }
//     })
// });

$(function(){
  var $firstMenu = $('.lush_Hlist>li'),
      $header = $('header');
  $firstMenu.mouseenter(function(){
    if($(window).width()>768){
      $header.css('height','300px');
    
    } 
    // 768보다 작으면 이벤트 멈추기
  })
  $header.mouseleave(function(){
  
    $header.css('height','80px');

  });

  // 헤더 스크롤
  
  // ====================상단메뉴 고정 스크롤시 헤더색 변경=============
 
  
 $(window).scroll(function(){
  if($(this).scrollTop() > 0){
    $header.addClass('sticky');
 }else{
    $header.removeClass('sticky');
 }
 });
  

// #################토글버튼 햄버거메뉴
  // $(".toggle").click(function(){//메뉴버튼 클릭시
  //   $(".sidebar").toggleClass("active");//sidebar에 active클래스를 추가 또는 제거
  // })

    /* 모바일/태블릿 SNB */
    $('.lush_Mlist > li > a, .lush_Mlist > li > .arrow-down-up').click(function(){
      $(this).siblings('.sub-snb-list').stop().slideToggle();
    });
    $('.sub-snb-list > li > a, .sub-snb-list > li > .arrow-down-up').click(function(){
      $(this).siblings('.sub2-snb-list').stop().slideToggle();
    });
    /* 화살표 모양 바꾸기 */
    $('.lush_Mlist > li > a').click(function(){
      $(this).siblings('.arrow-down-up').toggleClass('active');
    });
    $('.lush_Mlist > li > .arrow-down-up').click(function(){
      $(this).toggleClass('active');
    });
    $('.sub-snb-list > li > a').click(function(){
      $(this).siblings('.arrow-down-up').toggleClass('active');
    });
    $('.sub-snb-list > li > .arrow-down-up').click(function(){
      $(this).toggleClass('active');
    });
    

    /* 햄버거 메뉴 클릭시 메뉴 소환 */
    $('.toggle').click(function(){
      $('.snb-m-bg').fadeIn();
      $('.snb, .snb-close').addClass('active');
    });
    $('.snb-close > a').click(function(){
      $('.snb-m-bg').fadeOut();
      $('.snb, .snb-close').removeClass('active');
    });

});