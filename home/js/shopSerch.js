define(['text!/home/html/shopSerch.html','jsonp'], function (html,jsonp) {
    return {
        show: function () {
            $('.big-boss').html  (html);
        }
    }
});
