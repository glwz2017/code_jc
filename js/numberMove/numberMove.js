(function ($) {
  /*jQuery对象添加  runNum  方法*/
  $.fn.extend({
    /*
      *	滚动数字
  *	@ val 值，	params 参数对象
  *	params{addMin(随机最小值),addMax(随机最大值),interval(动画间隔),speed(动画滚动速度),width(列宽),height(行高)}
    */
    runNum:function (val,params) {
      /*初始化动画参数*/
      var valString = val || '70225800'
      var par= params || {};
      var runNumJson={
        el:$(this),
        maxValue: par.maxValue,
        value:valString,
        valueStr:valString.toString(10),
        width:par.width || 14,
        height:par.height || 36,
        addMin:par.addMin || 3,
        addMax:par.addMax || 12,
        interval:par.interval || 3000,
        speed:par.speed || 1000,
        // width:par.width || 20,
        length:valString.toString(10).length
      };
      $._runNum._list(runNumJson.el,runNumJson);
      $._runNum._interval(runNumJson.el.children("li"),runNumJson);
    }
  });
  /*jQuery对象添加  _runNum  属性*/
  $._runNum={
    /*初始化数字列表*/
    _list:function (el,json) {
      var str='';
      for(var i=0; i<json.length;i++){
        var w=json.width*i;
        var t=json.height*parseInt(json.valueStr[i]);
        var h=json.height*10;
        str +='<li style="width:'+json.width+'px;left:'+w+'px;top: '+-t+'px;height:'+h+'px;">';
        for(var j=0;j<10;j++){
          str+='<div style="height:'+json.height+'px;line-height:'+json.height+'px;">'+j+'</div>';
        }
        str+='</li>';
      }
      el.html(str);
    },
    /*生成随即数*/
    _random:function (json) {
      var Range = json.addMax - json.addMin;
      var Rand = Math.random();
      var num=json.addMin + Math.round(Rand * Range);
      return num;
    },
    /*执行动画效果*/
    _animate:function (el,value,json) {
      for(var x=0;x<json.length;x++){
        var topPx=value[x]*json.height;
        el.eq(x).animate({top:-topPx+'px'},json.speed);
      }
    },
    /*定期刷新动画列表*/
    _interval:function (el,json) {
      var val=json.value;

      setInterval(function () {
        if(val >= json.maxValue){
          return false;
        }
        val+=$._runNum._random(json);
        $._runNum._animate(el,val.toString(10),json);
      },json.interval);
    }
  }
})(jQuery);
