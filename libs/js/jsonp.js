function jsonp(url,parameter,callback) {
    //生成一个script 节点
    var script = document.createElement('script');
    //生成一个随机字符串作为回调函数名
    var randomKey = 'cbf' + new Date().getTime();
    //将callback以生成的随机字符串为属性名添加到window对象上，这样在页面任意位置上都能以window[randomkey]（）形式访问毁掉函数
    window[randomKey] = callback;
    url += "?callback=" + randomKey;
    //拼接参数
    if(parameter){
        for(var p in parameter){
            url +=('&' + p +'=' + parameter[p]);
        }
    }
        // 设置script节点的src属性
    script.src = url; // <script src="http://127.0.0.1:8888/data/data.json?callback=cbf1480489641452&a=10&b=20"></script>
      // 拼接到dom结构中
      document.body.appendChild(script);

      // 操作完成后移除script标签
      script.onload = function () {
          document.body.removeChild(script);
      };

}
