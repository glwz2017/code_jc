$(function () {

  //全栈头部  更新请忽略
  if ($('body').length > 0) {

    $('.the-shortcut , .top-login , .nav-box').remove()

    var tempHeader = `<!--顶部快捷方式-->
<div class="the-shortcut">
  <ul class="ui-right">
    <li>
      24小时客服：13826578334
    </li>
    <li class="add-favorite">
      收藏本站
    </li>
  </ul>
  <div class="ui-center">
    <span class="iconfont icon-tongzhi tongzhi"></span>
    2019.6.27捷创新版正式上线，您可点击 <a href="buy-guide.html">购物指南</a> 查看新版下单流程！
  </div>
</div>
<div class="top-login">
  <h1>
    <a href="index.html" class="iconfont icon-logo"></a>
  </h1>
  <div class="animate-text animated flipInX  js-animate-logo"></div>
  <div class="login-boxed">
    <div class="phone-order js-phone-order">
      <span class="iconfont icon-shouji"></span>
      手机端下单
    </div>
    <!--未登录-->
    <div class="no-login" style="display: none">
      <div class="item"><a href="jc-login.html">登录</a></div>
      <div class="item"><a href="jc-login.html">注册</a></div>
      <div class="user-img">
        <span class="iconfont icon-wode"></span>
      </div>
    </div>
    <!--已登录-->
    <div class="logined" style="display: block">
      <div class="user-info">
        <span>您好!00379A</span>
        <span class="iconfont icon-xialasanjiao"></span>
      </div>
      <!--下拉菜单-->
      <div class="info-box">
        <ul class="info-list">
          <li>
            <a href="javascript:void(0)">
              <span>我的订单</span>
              <span class="num">20</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <span>我的余额</span>
              <span class="num">￥20000.00</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <span>我的积分</span>
              <span class="num mark">10</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <span>我的优惠券</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <span>我的个人信息</span>
              <span class="num"></span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <span>我的收货地址</span>
            </a>
          </li>
        </ul>
        <a href="javascript:void(0)" class="sign-out">安全退出</a>
      </div>
      <div class="user-img">
        <img src="images/user-pic.png" alt="头像" width="40" height="40">
      </div>
    </div>
    <!--购物车-->
    <div class="car-box">
      <a href="javascript:void(0)">
        <span class="iconfont icon-gou"></span>
        <!--  有显示-无隐藏-->
        <span class="number">199</span>
      </a>
    </div>
  </div>
</div>
<!--导航-->
<div class="nav-box js-nav-box">
  <ul class="nav-menu">
    <li class="active-menu">
      <a href="index.html">首页</a>
    </li>
    <li>
      <a href="smt-order.html">SMT贴片报价</a>
    </li>
    <li>
      <a href="pcb-order.html">PCB打样报价</a>
    </li>
    <li>
      <a href="stencil-order.html">钢网计价</a>
    </li>
    <li>
      <a href="hand-board.html">手板\\机加工</a>
    </li>
    <li>
      <a href="javascript:void(0)">工艺介绍</a>
      <!--二级菜单-->
      <ol class="second-menu">
        <li>
          <a href="smt-introduce.html">SMT介绍</a>
        </li>
        <li>
          <a href="pcb-introduce.html">PCB介绍</a>
        </li>
        <li>
          <a href="stencil-order.html">钢网介绍</a>
        </li>
        <li>
          <a href="material-introduce.html">物料介绍</a>
        </li>
        <li>
          <a href="product-display.html">产品展示</a>
        </li>
      </ol>
    </li>
    <li>
      <a href="integral/integral-mall.html">积分商城</a>
    </li>
    <li>
      <a href="javascript:void(0)">关于我们</a>
      <!--二级菜单-->
      <ol class="second-menu">
        <li>
          <a href="about-us.html">企业简介</a>
        </li>
        <li>
          <a href="news.html">新闻资讯</a>
        </li>
      </ol>
    </li>
    <li>
      <a href="user-share.html">用户分享</a>
    </li>
    <li>
      <a href="javascript:void(0)">帮助中心</a>
      <!--二级菜单-->
      <ol class="second-menu">
        <li><a href="questions.html">常见问题</a></li>
        <li><a href="buy-guide.html">购物指南</a></li>
        <li><a href="feedback.html">意见反馈</a></li>
        <li><a href="link-us.html">联系我们</a></li>
      </ol>
    </li>
  </ul>
</div>`
    $('body').prepend(tempHeader)
  }

  //全站底部    更新请忽略
  if ($('.footer').length > 0) {
    $('.footer').remove()
    var tempFooter = '<div class="footer">\n' +
      '    <!--关于捷创-->\n' +
      '    <div class="footer-content">\n' +
      '        <div class="footer-left clearfloat">\n' +
      '            <ul class="jc-menu ">\n' +
      '                <li>关于捷创</li>\n' +
      '                <li><a href="javascript:void(0)">企业简介</a></li>\n' +
      '                <li><a href="javascript:void(0)">产品展示</a></li>\n' +
      '                <li><a href="javascript:void(0)">联系我们</a></li>\n' +
      '                <li><a href="javascript:void(0)">用户分享</a></li>\n' +
      '            </ul>\n' +
      '            <ul class="jc-menu">\n' +
      '                <li>产品服务</li>\n' +
      '                <li><a href="javascript:void(0)">SMT贴片报价</a></li>\n' +
      '                <li><a href="javascript:void(0)">PCB打样报价</a></li>\n' +
      '            </ul>\n' +
      '            <ul class="jc-menu">\n' +
      '                <li>工艺介绍</li>\n' +
      '                <li><a href="javascript:void(0)">SMT介绍</a></li>\n' +
      '                <li><a href="javascript:void(0)">PCB介绍</a></li>\n' +
      '                <li><a href="javascript:void(0)">物料介绍</a></li>\n' +
      '                <li><a href="javascript:void(0)">产品展示</a></li>\n' +
      '            </ul>\n' +
      '            <ul class="jc-menu">\n' +
      '                <li>帮助中心</li>\n' +
      '                <li><a href="javascript:void(0)">下单流程</a></li>\n' +
      '                <li><a href="javascript:void(0)">常见问题</a></li>\n' +
      '                <li><a href="javascript:void(0)">联系我们</a></li>\n' +
      '            </ul>\n' +
      '        </div>\n' +
      '        <div class="footer-right">\n' +
      '            <div class="contact-us">\n' +
      '                <h3>CONTACT US .</h3>\n' +
      '                <div class="contact-item ">\n' +
      '                    <i>办公地址：</i>\n' +
      '                    <span>深圳市宝安区福永街道龙王庙工业区32~33栋</span>\n' +
      '                </div>\n' +
      '                <div class="contact-item ">\n' +
      '                    <i>工厂地址：</i>\n' +
      '                    <span>深圳市宝安区福永街道龙王庙工业区32~33栋</span>\n' +
      '                </div>\n' +
      '                <div class="contact-item ">\n' +
      '                    <i>投诉电话：</i>\n' +
      '                    <span>13682461121（黄小姐）</span>\n' +
      '                </div>\n' +
      '                <div class="contact-item ">\n' +
      '                    <i>业务邮箱：</i>\n' +
      '                    <span>xu.liu@jc-pcba.com &nbsp; Robin.yao@jc-pcba.com</span>\n' +
      '                </div>\n' +
      '                <div class="contact-item">\n' +
      '                    <i>业务热线：</i>\n' +
      '                    <span>13826578334（刘小姐）&nbsp; </span>\n' +
      '                </div>\n' +
      '                <div class="contact-item">\n' +
      '                    <i>华南区办事处：</i>\n' +
      '                    <span>杭州市下城区东方茂商务中心2-1105 &nbsp; 13826578334（刘小姐）</span>\n' +
      '                </div>\n' +
      '            </div>\n' +
      '            <!--扫码关注-->\n' +
      '            <div class="qr-code">\n' +
      '                <i>\n' +
      '                    <span class="iconfont">&#xe7e5;</span>\n' +
      '                    扫一扫 关注公众号\n' +
      '                </i>\n' +
      '                <img src="images/the-public.png" alt="二维码" width="130" height="130">\n' +
      '            </div>\n' +
      '        </div>\n' +
      '    </div>\n' +
      '    <!--    认证-->\n' +
      '    <div class="certification">\n' +
      '        <div class="left-certification">\n' +
      '            <div class="item">\n' +
      '                <span>通过认证</span>\n' +
      '                <img src="images/iso.png" alt="" width="37" height="30">\n' +
      '                <img src="images/iaf.png" alt="" width="52" height="31">\n' +
      '                <img src="images/cnas.png" alt="" width="41" height="31">\n' +
      '                <img src="images/ul.png" alt="" width="33" height="33">\n' +
      '            </div>\n' +
      '            <div class="item">\n' +
      '                <span>合作快递 </span>\n' +
      '                <img src="images/sfkd.png" alt="" width="66" height="29">\n' +
      '            </div>\n' +
      '            <div class="item">\n' +
      '                <span>付款方式</span>\n' +
      '                <img src="images/zfb.png" alt="" width="80" height="30">\n' +
      '                <img src="images/wxzf.png" alt="" width="93" height="31">\n' +
      '                <img src="images/bank-china.png" alt="" width="101" height="30">\n' +
      '            </div>\n' +
      '        </div>\n' +
      '        <div class="right-certification">\n' +
      '            <a href="http://wpa.qq.com/msgrd?v=1&uin=2881601560&site=www.jdbpcb.com&menu=yes" target="_blank"\n' +
      '               class="iconfont">&#xe603;</a>\n' +
      '            <a href="https://weibo.com/6500851014/" target="_blank" class="iconfont">&#xe653;</a>\n' +
      '            <a href="https://jcjh.tmall.com/?spm=a220o.1000855.1997427133.d4918061.e23250318g3acR" target="_blank" class="iconfont">&#xe799;</a>\n' +
      '            <a href="https://shop432508366.taobao.com/?spm=2013.1.0.0.31831c78rSN9S0" target="_blank" class="iconfont">&#xe616;</a>\n' +
      '        </div>\n' +
      '    </div>\n' +
      '    <!--版权-->\n' +
      '    <div class="jc-copyright">\n' +
      '        <div class="copyright-box">\n' +
      '            <div class="copyright-left">\n' +
      '                <a href="javascript:void(0)">Copyright © 2016 www.jc-pcba.com 版权所有 深圳捷创电子科技有限公司 粤ICP备16117886号-1</a>\n' +
      '                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44031002000272">\n' +
      '                    <img src="images/beian.png" alt=""/>\n' +
      '                    <span>粤公网安备 44031002000272号</span>\n' +
      '                </a>\n' +
      '            </div>\n' +
      '        </div>\n' +
      '    </div>\n' +
      '</div>'
    $('.g-mian-bg').before(tempFooter)
  }

  //导航样式
  $('.nav-menu li a').each(function () {
    $this = $(this)
    if ($this[0].href === String(window.location)) {
      $(this).parent().addClass('active-menu')
      if ($(this).parent().parent()[0].tagName === 'OL') {
        $(this).parent().addClass('active-second')
        $(this).parent().parent().parent().addClass('active-menu')
        $(this).parent().removeClass('active-menu')
      }
    }
  })

  //屏幕滚动导航悬浮
  if ($('.js-nav-box')) {
    var $moveNav = $('.js-nav-box')
    var offsetTop = $moveNav.position().top
    $(window).scroll(function () {
      var top = $(this).scrollTop()
      top >= offsetTop ? $moveNav.addClass('nav-fly') : $moveNav.removeClass('nav-fly')
    })
  }
  //返回顶部效果
  $('.js-back-btn').click(function () {
    $('html,body').animate({ scrollTop: 0 })
  })

  // //手机下单弹窗
  $('.js-phone-order').click(function () {
    $('.js-phone-box ,.g-mian-bg').fadeIn()
  })
  //关闭弹窗
  $('.js-popup-close').click(function () {
    $('.js-phone-box ,.g-mian-bg').fadeOut()
  })

//   手机扫码弹窗
  $('.phone-btn').click(function () {
    $('.js-phone-box ,.g-mian-bg').fadeIn()
  })
  //收藏本站
  $('.add-favorite').click(function () {
    AddFavorite('http://www.jc-pcba.com', '捷创电子')

    function AddFavorite (sURL, sTitle) {
      try {
        window.external.addFavorite(sURL, sTitle)
      } catch (e) {
        try {
          window.sidebar.addPanel(sTitle, sURL, '')
        } catch (e) {
          alert('抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加')
        }
      }
    }
  })

  // 计价页面右侧滚动
  if ($('.move-price').length > 0) {
    var diffTop = $('.main-order')[0].offsetTop
    var navHeight = $('.js-nav-box').height()
    var orderH = $('.order-title').height()
    $(window).scroll(function () {
      var $movePrice = $('.move-price')
      var moveH = $movePrice.height()
      var offsetTop = $('.four-guarante').offset().top
      var moveTop = $(this).scrollTop()
      if (moveTop >= diffTop - orderH) {
        $movePrice.css({ position: 'fixed', top: navHeight })
        if ((offsetTop - moveTop - moveH - 10) <= 0) {
          $movePrice[0].style.cssText = ''
          $movePrice.css({ position: 'absolute', bottom: 0 })
        } else {
          $movePrice[0].style.cssText = ''
          $movePrice.css({ position: 'fixed', top: navHeight })
        }
      } else {
        $movePrice.css({ position: 'relative', top: 0 })
      }
    })
  } else {
    console.log('哎呦，走丢了')
  }

})//end function

