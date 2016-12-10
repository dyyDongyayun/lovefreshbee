define(['text!./../../home/home.html','jsonp'], function (html1,jsonp) {
    return {
        show:function () {
            $('.contaier').html(html1);
            $(document).ready(function () {
                $.get('http://localhost:8888/data/homeData.json',function (jsondata) {
                    //轮播图
                    jsondata.data.act_info[0].act_rows.forEach(function(elem,index){
                        $(`
                            <div class="swiper-slide"><img src="${elem.activity.img}"/></div>
                        `).appendTo('.swiper-wrapper');
                    })

                    var mySwiper = new Swiper('.swiper-container', {
                        direction: 'horizontal',
                       loop: true,
                       autoplay:3000,
                       autoplayDisableOnInteraction: false, //点击后自动播放
                       // 如果需要分页器
                       pagination: '.swiper-pagination',
                    })

                   //菜单数据
                    jsondata.data.act_info[1].act_rows.forEach(function(elem,index){
                        $(`
                            <div class="div-icon">
                                <a href="" >
                                    <img src="${elem.activity.img}" alt="" />
                                    <p>${elem.activity.name}</p>
                                </a>
                            </div>
                        `).appendTo('.home-icon-list')
                    })

                    $('.div-icon:eq(1)>a').attr('href','#crazyKill');
                    //长条商品列表
                    jsondata.data.act_info[3].act_rows.forEach(function(elem,index){
                        $(`
                            <div>
                                <img src="${elem.activity.img}" alt="">
                            </div>
                        `).appendTo('.height-list')
                    })
                    //宽商品列表项
                    jsondata.data.act_info[4].act_rows.forEach(function(elem,index){
                        $(`
                            <div>
                                <img src="${elem.activity.img}" alt="">
                            </div>
                        `).appendTo('.weight-list')
                    })
                    //各种类型商品
                    jsondata.data.act_info[5].act_rows.forEach(function(elem,index){
                        var num1 = elem.category_detail.goods[0].child_cid;
                        var num2 = elem.category_detail.goods[0].cid;
                            $(`
                                <div class="all-kind-list" >
                                    <p class="color-p">
                                        <span>${elem.category_detail.goods[0].p_cids[num1][num2]}</span>
                                        <span>更多 ></span>
                                    </p>
                                    <div class="all-kind-img">
                                        <img src="${elem.activity.img}" alt="" />
                                    </div>
                                    <ul class="all-kind-ul"></ul>
                                </div>
                            `).appendTo('.all-kind');
                            var color = elem.category_detail.category_color;
                            $('.color-p').eq(index).css({
                                'border-left': '.28rem solid #' +color,
                                'color':'#'+color
                            })

                        //循环创建各种商品里面的子列表
                        var goods = jsondata.data.act_info[5].act_rows[index].category_detail.goods;
                        goods.forEach(function (elem1,index1) {
                            $(`
                                <li>
                                    <img src="${elem1.img}" alt="">
                                    <p>${elem1.name}</p>
                                    <p><span>精选</span><span class="specil-set onebyone">${elem1.pm_tags}</span></p>
                                    <p>${elem1.specifics}</p>
                                    <p>￥<span>${elem1.partner_price}</span>￥<span>${elem1.market_price}</span></p>
                                    <div><div class="add add-span"></div></div>
                                </li>
                            `).appendTo('.all-kind-ul');
                        })

                    })
                })
            })
        }
    }
});
