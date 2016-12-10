require.config({
    baseUrl: './libs/js',
    paths: {
        'underscore':'underscore',
        'backbone': 'backbone',
        'jquery':'jquery',
        'Zepto':'zeoptosrc/zepto',
        'event':'zeoptosrc/event',
        'touch':'zeoptosrc/touch',
        'text':'text',
        'css':'css',
        'swiper':'swiper',
        'fontsize':'fontsize',
        'jsonp':'jsonp',
        'router':'../../router',
        'home':'../../home/js/home',
        'market':'../../market/js/market',
        'shopCar':'../../shopCar/js/shopCar',
        'myself':'../../myself/js/myself',
        'crazyKill':'../../home/js/crazyKill',
        'shopSerch':'../../home/js/shopSerch',
        'myOrder':'../../myself/js/myOrder',
        'pointsMall':'../../myself/js/pointsMall',
        'addshop':'../../addshop'
    },
    shim: {
        'fontsize':{
            exports:'fontsize'
        },
        'jsonp':{
            exports:'jsonp'
        },
        'event':['Zepto'],
        // 'touch':['Zepto','event'],
        'touch':{
            deps:['Zepto','event'],
        }

    }
});

require(['Zepto','event','touch','backbone','router','jsonp','swiper','fontsize','addshop','css!./../../index.css','css!./../css/reset.css','css!./../css/swiper-3.4.0.min.css'],function (zepto,event1,touch,backbone,router,jsonp,swiper,fontsize,addshop,css,css1,css3) {
    router.start();
    fontsize();
    // console.log(addshop);
    addshop.addshop();
})
