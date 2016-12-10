define(['text!/myself/html/pointsMall.html','jsonp'], function (html,jsonp) {
    return {
        show:function () {
            $('.big-boss').html(html);
            $('.pointsMall-header >div').on('tap',function () {
                location.reload();
            })
        }
    }
});
