define(['backbone'], function (Backbone) {
    return {
        start: function () {
            var Router = Backbone.Router.extend({
                routes: { // key是锚点的值，value是函数的值
                    '':'home',
                    'home': 'home',
                    'market': 'market',
                    'shopCar': 'shopCar',
                    'myself': 'myself',
                    'crazyKill':'crazyKill',
                    'shopSerch':'shopSerch',
                    'myOrder':'myOrder',
                    'pointsMall':'pointsMall'
                },
                home () {
                    require(['home'], function (Home) {
                        Home.show();
                    });
                },
                market () {

                    require(['market'], function (Market) {
                        Market.show();
                        Market.change();
                    });

                },
                shopCar () {
                    require(['shopCar'], function (ShopCar) {
                        ShopCar.show();
                        ShopCar.change();
                    });
                },
                myself () {
                    require(['myself'], function (Myself) {
                        Myself.show();
                    });
                },
                crazyKill () {
                    require(['crazyKill'], function (CrazyKill) {
                        CrazyKill.show();
                    });
                },
                shopSerch () {
                    require(['shopSerch'], function (ShopSerch) {
                        ShopSerch.show();
                    });
                },
                myOrder () {
                    require(['myOrder'], function (myOrder) {
                        myOrder.show();
                    });
                },
                pointsMall () {
                    require(['pointsMall'], function (pointsMall) {
                        pointsMall.show();
                    });
                }
            });
            var r = new Router();
            Backbone.history.start();
        }
    }
});
