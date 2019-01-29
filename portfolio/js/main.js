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
                });              
            })
            $("#improfile4").click(function(){
                $(".select_box").animate({
                    left:"75%"
                },function(){
                    $(".im_list_li").css({"color":"black"});
                    $("#improfile4").css({"color":"white"});
                });              
            })
        })
  
      
      
          
      
         
    }
}


eventMethod.headerBar();
eventMethod.textList();