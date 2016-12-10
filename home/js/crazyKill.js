define(['text!/home/html/crazyKill.html','jsonp'], function (html,jsonp) {
    return {
        show:function () {
            $('.big-boss').html(html);
            $(document).ready(function () {
                // jsonp('http://localhost:8888/crazyKillData',{},crazyKill);
                $.get('http://localhost:8888/data/miaosha.json',crazyKill);

                function crazyKill(data) {
                    $('.secondkill >div').on('tap',function () {
                        var cont = $(this).index();
                        $('.secondkill-shop-ul').html('');
                        $('.secondkill >div').css({
                            'background':' #272c2a',
                            'color':'white'
                        });
                        $(this).css({
                            'background':' #fdd000',
                            'color':'#272c2a'
                        });
                        $('.secondkill>div p:last-child').css({
                            'background': 'url(./image/nullcircle.png) no-repeat -.75rem center',
                            'background-size':'90% 100%'
                        });
                        $('.secondkill>div p:last-child').eq(cont).css({
                            'background': 'url(./image/nullcircle.png) no-repeat .85rem center',
                            'background-size':'90% 100%'
                        });
                        var i = 5*cont;
                        var newdata = data.product.slice(i,i+4);
                        newdata.forEach(function (elem,index){
                            $(`
                                <li class="secondkill-shop-li">
                                    <img src="${elem.img}" alt="">
                                    <div>
                                        <p>${elem.name}</p>
                                        <p>${elem.specifics}</p>
                                        <p><span>￥${elem.partner_price}</span>/原价:19元</p>
                                        <p>${elem.btnText}</p>
                                    </div>
                                </li>
                            `).appendTo('.secondkill-shop-ul')
                        })
                    })
                }
            })

        }
    }
});
