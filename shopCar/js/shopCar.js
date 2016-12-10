define(['text!/shopCar/shopCar.html'], function (html) {
    return {
        show:function () {
            // localStorage.clear();
            $('.contaier').html(html);
            //select事件
            $(function() {
                   $(".timeSelect").change(function() {
                       var option = $(this).find("option:selected");
                       var day = option.parent()[0].label;
                       var selv = option.val();
                       var selt = option.text();
                       $(this).parent().find("p>span:eq(1)").html(day + selt);
                   })
                   // 初始化的时候，执行一次change方法
                   $(".timeSelect").change();
              });
        },
        change:function () {
            var allmoney = 0;
            var data = JSON.parse(localStorage.getItem("data"))||[];
            var cont = JSON.parse(localStorage.getItem("cont"))||[];
            $('.yourshop-ul').html('');
            if(cont==0){
                $('.shopcar-null').css('display','block');
                $('.shopcar-has').css('display','none');
            }else{
                $('.shopcar-null').css('display','none');
                $('.shopcar-has').css('display','block');
            }
            data.forEach(function (elem,index) {
                $(`
                    <li class="yourshop-li" >
                        <div></div>
                        <div>
                            <img src="${elem.img}" alt="">
                            <p>${elem.name}</p>
                            <p></p>
                            <p></p>
                            <p><span>${elem.partner_price}</span></p>
                            <div class="add">
                                <span class="decrease-span"></span>
                                <span class="add-num">${elem.num}</span>
                                <span class="add-span"></span>
                            </div>
                        </div>
                    </li>
                    `).appendTo('.yourshop-ul');
                    allmoney += parseInt(elem.partner_price * elem.num *100);
                    $('.allmoney').html(allmoney/100);
                })

        }
    }
});
