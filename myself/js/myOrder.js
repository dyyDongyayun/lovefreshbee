define(['text!/myself/html/myOrder.html','jsonp'], function (html,jsonp) {
    return {
        show :function () {
            $('.big-boss').html(html);
            $('.myOrder-header > div:eq(0)').on('tap',function () {
                location.reload();
            })

        }
    }
});
