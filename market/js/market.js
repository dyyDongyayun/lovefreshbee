define(['text!/market/market.html','Zepto','event','touch'], function (html2,zepto,Event1,touch) {
    return {

        show:function () {
            $('.contaier').html(html2);

        },
        change:function () {
            $(document).ready(function () {
                $('.hot-sale').html('');
                $.get('http://localhost:8888/data/getCategoryProducts.json',market)
                function market(Data){
                     Data.data.forEach(function (elem,index) {
                         $(`
                             <li>
                             <img src ="${elem.img}" data-original = "" alt = "" class="lazy-img" />
                                 <p class="list-p1">${elem.name}</p>
                                 <p class="list-p2"><span>精选</span><span>${elem.pm_desc}</span></p>
                                 <p class="list-p3">${elem.specifics}</p>
                                 <p class="list-p4">￥<span>${elem.partner_price}</span>￥<span>${elem.market_price}</span></p>
                                  <div class="add" data-id="${elem.id}">
                                     <span class="decrease-span"></span>
                                     <span class="add-num"></span>
                                     <span class="addnum add-span"></span>
                                 </div>
                             </li>
                             `).appendTo('.hot-sale');
                             //添加数量
                             var datanum = JSON.parse(localStorage.getItem("data"))||[];
                            datanum.forEach(function (elem2,index2) {
                                if(elem.name ==elem2.name){
                                    $('.add-num').eq(index).html(elem2.num);
                                }
                            })
                    })

                //用于获取各类商品数据
               $('.click-li').on('tap',function () {
                   $('.market-ul>li').removeClass('add-color');
                   $(this).addClass('add-color');
                   $('.hot-sale').css('display','none');
                   $('.all-kind-goods').html('');
                   var num = $(this).index()-2;
                $.get('http://localhost:8888/data/homeData.json',getshop);
                   function getshop(data) {
                     var goodsdata = data.data.act_info[5].act_rows[num].category_detail.goods;
                     goodsdata.forEach(function(elem1,index1){
                         $(`
                             <li >
                                 <img src="${elem1.img}" alt="" />
                                 <p class="list-p1">${elem1.name}</p>
                                 <p class="list-p2"><span>精选</span><span>${elem1.pm_desc}</span></p>
                                 <p class="list-p3">${elem1.specifics}</p>
                                 <p class="list-p4"><span>￥${elem1.partner_price}</span><span>￥${elem1.market_price}</span></p>
                                 <div class="add">
                                     <span class="decrease-span"></span>
                                     <span class="add-num"> </span>
                                     <span class="add-span"></span>
                                 </div>
                             </li>
                            `).appendTo($('.all-kind-goods'));
                            var datanum = JSON.parse(localStorage.getItem("data"))||[];
                           datanum.forEach(function (elem3,index3) {
                               if(elem1.name == elem3.name){
                                 console.log( $('.add-num').eq(index1));
                                 console.log(elem3.num);
                                   $('.add-num').html(elem3.num);
                               }
                           })
                     })
                   }

               });
               $('.hot-li').on('tap',function(){
                   $('.market-ul>li').removeClass('add-color');
                   $(this).addClass('add-color');
                  $('.hot-sale').css('display','block')
               })

               //当数量小于1时，将减号隐藏
               $('.decrease-span').css('display','none');
               $('.add-num').each(function (e,i) {
                   // console.log(i.innerHTML);
                   if(i.innerHTML){
                       $(i).parent().children().eq(0).css('display','block');
                   }
               })
           }

            })


        },

    }
})
