var eventMethod={
    headerBar:function(){
        $(window).scroll(function(){

        var bodyHeight = document.body.clientHeight;//body height
        var scrollRate = (scrollY + innerHeight) / bodyHeight * 100; //height rate

        $(".bar_cover").animate({
            width: scrollRate + "%"
        },0)
        if(scrollRate <= 35){
            $(".bar_cover").css({
                "width": "0px"
            },0)
        }
        })
    },
    textList:function(){
        $(document).ready(function(){           
       
            $("#improfile1").click(function(){              
                $(".select_box").animate({
                    left:"0%"
                },function(){
                    $(".im_list_li").css({"color":"black"});
                    $("#improfile1").css({"color":"white"});
                     $(".profile_box").load("profile1.txt")

                });
            })
            $("#improfile2").click(function(){
                $(".select_box").animate({
                    left:"25%"
                },function(){
                    $(".im_list_li").css({"color":"black"});
                    $("#improfile2").css({"color":"white"});
                    $(".profile_box").load("profile2.txt")

                });              
            })
            $("#improfile3").click(function(){
                $(".select_box").animate({
                    left:"50%"
                },function(){
                    $(".im_list_li").css({"color":"black"});
                    $("#improfile3").css({"color":"white"});
                    alert("준비중입니다")
                });              
            })
            $("#improfile4").click(function(){
                $(".select_box").animate({
                    left:"75%"
                },function(){
                    $(".im_list_li").css({"color":"black"});
                    $("#improfile4").css({"color":"white"});
                    alert("준비중입니다")
                });              
            })
        })                                 
    },
    menuEvent:function(){
   
        $(window).ready(function(){
            $("header").mouseleave(function(){
                $(this).fadeOut();
            })         
    
            $(".header_li1").click(function(){
                var offset = $(".section1").offset();
                $('html, body').animate({scrollTop : offset.top}, 400);
              });   
              $(".header_li2").click(function(){
                var offset = $(".section2").offset();
                $('html, body').animate({scrollTop : offset.top}, 400);
                $(".section2_wrap").delay(800).fadeIn();
              });
              $(".header_li3").click(function(){
                var offset = $(".section3").offset();
                $('html, body').animate({scrollTop : offset.top}, 400);
                $(".section2").delay(800).fadeIn();
              });
              $(".header_li4").click(function(){
                var offset = $(".section4").offset();
                $('html, body').animate({scrollTop : offset.top}, 400);
                $(".section2").delay(800).fadeIn();
              });          

        })
        $(window).scroll(function(){
            $("header").fadeIn(1000);
            setTimeout(function(){
                $("header").fadeOut(1000);
            },5000)
        })
        

    }
}


eventMethod.headerBar();
eventMethod.textList();
eventMethod.menuEvent();
