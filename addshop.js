define(['shopCar','market'],function (shopCar,market) {
    return {
        addshop:function () {
            $(document).ready(function () {

                //添加购物车
                var cont =JSON.parse(localStorage.getItem("cont"))||0;
                var data = JSON.parse(localStorage.getItem("data"))||[];
                var flag = true;
                var specilenum =null;
                    $('.show-goods-cont').html(cont);
                //数量增加事件
                $(document).on('tap','.add-span',function () {
                    cont++;
                    var obj = {
                        name:$(this).parents()[1].children[1].innerHTML,
                        partner_price:$(this).parents()[1].children[4].children[0].innerHTML,
                        img:$(this).parents()[1].children[0].currentSrc,
                        num:1,
                    }
                    if(data.length == 0){
                        data.push(obj);
                    }else{
                        data.forEach(function (elem,index) {
                            if(elem.name == obj.name){
                                elem.num++;
                                flag = false;
                            }
                        })
                        if(flag == true){
                            data.push(obj);
                        }else{
                            flag = true
                        }
                    };
                    localStorage.setItem("data", JSON.stringify(data));
                    localStorage.setItem("cont", JSON.stringify(cont));
                    //显示总数
                    $('.show-goods-cont').html(cont);
                    //及时更新购物车数据
                    shopCar.change();
                    market.change();
                })

            //数量减少
            $(document).on('tap','.decrease-span',function () {
                var name = $(this).parents()[1].children[1].innerHTML;
                cont--;
                $('.show-goods-cont').html(cont);
                data.forEach(function (elem,index) {
                    if(elem.name == name){
                        elem.num--;
                        if(elem.num==0){
                            data.splice(index,1);
                        }
                    }
                })
                localStorage.setItem("cont", JSON.stringify(cont));
                localStorage.setItem("data", JSON.stringify(data));
                shopCar.change();
                market.change();
            })

            })
        }
    }
});
