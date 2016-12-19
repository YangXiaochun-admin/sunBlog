$(function(){
    //大小设置
    function size(originSize,type){
        var type=type || "x";
        if(type=="x"){
            var widths=document.documentElement.clientWidth;
            var scale=widths/originSize*100;
        }else if(type=="y"){
            var heights=document.documentElement.clientHeight;
            var scale=heights/originSize*100;
        }

        document.getElementsByTagName("html")[0].style.fontSize=scale+"px";
    }
    size(750);

    //iscroll
    var myScroll = new IScroll('#wrapper', {
        freeScroll: true,
        scrollbars: true,
        mouseWheel: true,
        click:true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true
    });
    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, false);
})
    //换一批
$(function(){
    var num=0;
    $(".s-more>span").click(function(){
        num++;
        if(num>=$(".s-cont").length){
            num=0;
        }
        for(var i=0;i<$(".s-cont").length;i++){
            $(".s-cont").eq(i).hide();
        }
        $(".s-cont").eq(num).show();
    })
})

//查看更多
$(function(){
    //function conceal(father,num){
    //    $(father).each(function(){
    //        var maxLength=num;
    //        var text=$(this).text();
    //        if($(this).text().length>maxLength){
    //            $(this).text($(this).text().substring(0,maxLength));
    //            $(this).html($(this).html()+"..."+"<a href='#' style='color:blue'>点击查看更多</a>");
    //        }
    //        $(this).find("a").click(function(){
    //            $(this).parent().text(text);
    //        })
    //    })
    //}
    function conceal(father,maxHeight){
        $(father).each(function(){
            var heights=$(father).height();
            if(heights>maxHeight){
                $(father).css({"height":maxHeight+"px","overflow":"hidden"})
                $(".btn-more").css("display","block");
            }
            $(".btn-more").each(function(){
                $(this).click(function(){
                    var index=$(this).index(".btn-more");
                    $(father).eq(index).css({"height":"auto"});
                    $(this).css("display","none");
                })
            })
        })
    }
    conceal(".is-inner",29);
    conceal(".c-content",200);
    conceal(".ms-inner",56);
    $(".replay").each(function(){
        $(this).click(function(){
            var index=$(this).index(".replay");
            $(".comment").eq(index).css("display","block");
        })
    })
})

//重置后重新登录
$(function(){
    $(".reset").click(function(){
        window.location.href="login.html";
    })
})