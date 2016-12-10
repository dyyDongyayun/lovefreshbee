define(['text!/myself/myself.html'], function (html) {
    return {
        show:function () {
            // console.log('ok');
            $('.contaier').html(html);
        }
    }
});
