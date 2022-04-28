$(function () {
  //全局列表参数选择状态,不可选为：disabled类名
  $('.item-right .list').click(function () {
    if ($(this).hasClass('disabled')) {
      return false
    }
    $(this).addClass('active-list').siblings('.list').removeClass('active-list')
    $(this).parent().prev().val($.trim($(this).attr('data'))) //获取当前值给隐藏域
    //模拟异步计价函数   套用做相应修改
    $('.js-in-calculation').show()//显示
    setTimeout(function () {
      $('.js-in-calculation').hide()//显示
    }, 300)
    //模拟异步计价函数   套用做相应修改
  })

  ////  pcb报价js
  //联动参数
  var pcb = {
    //重置活动类
    restActiveFn: function (getElement, dataArr) {
      $(getElement).find('.list').removeClass('active-list')
      // console.log($(getElement).find('.list'));
      if (dataArr instanceof Array) {
        for (var i = 0; i < dataArr.length; i++) {
          $(getElement).find('.list[data="' + dataArr[i] + '"]').addClass('active-list')
        }
      }
    },
    //重置不可选
    restDisabledFn: function (getElement, dataArr) {
      $(getElement).find('.list').removeClass('disabled')
      if (dataArr instanceof Array) {
        for (var i = 0; i < dataArr.length; i++) {
          $(getElement).find('.list[data="' + dataArr[i] + '"]').addClass('disabled')
        }
      }
    },
    //板子图层样式
    boardLayerSet: function (num) {
      var tempStr = ''
      for (var i = 1; i <= num; i++) {
        tempStr += ' <div class="getInput-box">' +
          '<label>L' + i + ':</label>' +
          '<input type="text" class="getInput" id="txtLayerCXL' + i + '">' + '</div>'
      }
      return '<div class="table-open">\n' +
        '<p>\n' +
        '请根据 <br>\n' +
        '您的文件中的图层名称,从顶部视图机身侧填入图层顺序\n' + '</p>' + tempStr + '</div>'

    },
    //重置板子层级样式
    boardLevel: function (level) {
      this.restActiveFn($('.js-boards'), level)
    },
    //板子层级不可选
    boardLevelDisabled: function (level) {
      this.restDisabledFn($('.js-boards'), level)
    },
    //重置板子厚度
    boardThick: function (thick) {
      this.restActiveFn($('.js-layer1'), thick)
    },
    //板子厚度不可选
    boardThickDisabled: function (thick) {
      this.restDisabledFn($('.js-layer1'), thick)
    },
    //阻焊颜色
    weldingColor: function (weld) {
      this.restActiveFn($('.js-welding-color'), weld)
    },
    //阻焊颜色不可选
    weldingColorDisabled: function (weld) {
      this.restDisabledFn($('.js-welding-color'), weld)
    },
    //字符颜色
    characterColor: function (character) {
      this.restActiveFn($('.js-character-color'), character)
    },
    //字符颜色不可选
    characterColorDisabled: function (character) {
      this.restDisabledFn($('.js-character-color'), character)
    },
    //长宽规格检查
    checkValue: function (val) {
      return parseInt(val)
    },
    //铜箔厚度
    copperFoilThick: function (copperFoil) {
      this.restActiveFn($('.js-copper-foil-thick'), copperFoil)
    },
    //铜箔厚度不可选
    copperFoilThickDisabled: function (copperFoil) {
      this.restDisabledFn($('.js-copper-foil-thick'), copperFoil)
    },
    //内铜厚度
    innerCopper: function (inner) {
      this.restActiveFn($('.js-inner-copper'), inner)
    },
    //内铜厚度不可选
    innerCopperDisabled: function (inner) {
      this.restDisabledFn($('.js-inner-copper'), inner)
    },
    //焊盘喷镀
    solderCoating: function (solder) {
      this.restActiveFn($('.js-solder-coating'), solder)
    },
    //焊盘喷镀不可选
    solderCoatingDisabled: function (solder) {
      this.restDisabledFn($('.js-solder-coating'), solder)
    }

  }
  //    材料选择1
  $('.js-material .list').click(function () {
    var value = $(this).parent().prev().val() //获取当前隐藏值
    var $materialTips = $('.js-material-tips')
    //mcpcb结构显示
    $('.js-mcpcb').hide()
    if (value.indexOf('FR-4') > -1 || value.indexOf('刚挠结合板') > -1) {
      //板子厚度
      pcb.boardThickDisabled()
      //阻焊颜色
      pcb.weldingColorDisabled()
      //字符颜色
      pcb.characterColorDisabled()
      //铜箔厚度
      pcb.copperFoilThickDisabled()
      //板子厚度切换
      $('.layer1').show()
      $('.layer2').hide()
      $('.layer3').hide()
      //内铜隐藏
      $('.js-inner-copper').hide('normal', function () {
        //板子层
        pcb.boardLevel(['2'])
      })
      if (value.indexOf('FR-4') > -1) {
        $materialTips.html('FR-4 玻璃化温度：TG130 耐焊值:288°C ,<a  href="" target="_blank">[下载板材检测报告]</a>')
      } else {
        $materialTips.html('')
      }
    } else if (value.indexOf('铝基板') > -1) {

      //板子厚度切换
      $('.layer1').show()
      $('.layer2').hide()
      $('.layer3').hide()
      //板子层数
      pcb.boardLevel(['1'])
      //板子厚度
      pcb.boardThickDisabled(['0.2', '0.4', '0.6', '2.4'])
      //阻焊颜色
      pcb.weldingColorDisabled(['哑光黑', '哑光绿'])
      pcb.weldingColor(['白色'])
      //字符颜色
      pcb.characterColorDisabled(['白色'])
      pcb.characterColor(['黑色'])
      //铜箔厚度
      pcb.copperFoilThickDisabled(['2 oz Cu', '3 oz Cu'])
      pcb.copperFoilThick(['1 oz Cu'])
      if (value.indexOf('1.0') > -1) {
        $materialTips.html('铝基板(导热系数1.0W) ,<a  href="" target="_blank">[下载板材检测报告]</a>')
      } else {
        $materialTips.html('高导铝基板(导热系数2.0W) ,<a  href="" target="_blank">[下载板材检测报告]</a>')
      }
    } else if (value.indexOf('Rogers') > -1) {
      if (value.indexOf('4003C') > -1) {
        $('.layer1').hide()
        $('.layer2').show()
        $('.layer3').hide()
      } else {
        $('.layer1').hide()
        $('.layer2').hide()
        $('.layer3').show()
      }
      $materialTips.html('<a href="" target="_blank">【选型】Rogers 高频印刷线路板材料选型指南</a>')
    } else {

      // $materialTips.html('<a href="" target="_blank">【选型】Rogers 高频印刷线路板材料选型指南</a>');
      //板子厚度
      // $('.layer1').hide();
      // $('.layer2').show();
      //阻焊颜色
      pcb.weldingColorDisabled()
      //铜箔厚度
      pcb.copperFoilThickDisabled()
    }
  })
  //设计文件数2
  $('.js-files-number').blur(function () {
    var $number = $(this)
    var r = /^[1-9]*[1-9][0-9]*$/i
    var num = parseInt($number.val())
    if (num <= 0 || !(r.test($number.val()))) {
      $number.val(1)
      $number.attr('value', 1)
    } else {
      $number.attr('value', num)
    }
  })
  //设计文件数减数量
  $('.js-minus').click(function () {
    var $number = $('.js-files-number')
    var num = parseInt($number.val())
    if (num <= 0) {
      return
    }
    $number.val(--num)
    $number.attr('value', num)
  })
  //设计文件数加数量
  $('.js-add').click(function () {
    var $number = $('.js-files-number')
    var num = parseInt($number.val())
    $number.val(++num)
    $number.attr('value', num)
  })
  //板类型3隐藏元素出货方式选择
  $('.js-board-type .list').click(function () {
    var value = $.trim($(this).parent().prev().val())
    switch (value) {
      case '单片':
        $('.js-page-request').removeClass('active-item')//出货方式
        $('.js-line-process').removeClass('active-item')//拼版方式
        break
      case '按客户文件拼版出货':
        $('.js-line-process').addClass('active-item') //拼版方式
        $('.js-page-request').removeClass('active-item')//出货方式
        break
      case '捷创代拼板':
        $('.js-page-request').addClass('active-item') //出货方式
        $('.js-line-process').addClass('active-item') //拼版方式
        break
    }
  })
  //板类型3工艺边隐藏元素选择
  $('.js-side-param').change(function () {
    var value = $(this)[0].value
    if (value === '无') {
      $('.js-side-size').attr('disabled', true)
    } else {
      $('.js-side-size').removeAttr('disabled')
    }
  })

//板子尺寸4
  $('.js-length').blur(function () {
    if (pcb.checkValue($.trim($(this).val())) > 120) {
      layer.alert('我司可生产最大长度为120cm/120cm,请重新输入!')
      $(this).val('')
      return false
    } else if (isNaN(pcb.checkValue($.trim($(this).val())))) {
      $(this).val('')
    } else if (pcb.checkValue($.trim($(this).val())) <= 0) {
      $(this).val('')
    } else {
      pcb.boardLevelDisabled()
    }
  })
  $('.js-width').blur(function () {
    if (pcb.checkValue($.trim($(this).val())) > 120) {
      layer.alert('我司可生产最大长度为120cm/120cm,请重新输入!')
      $(this).val('')
      return false
    } else if (isNaN(pcb.checkValue($.trim($(this).val())))) {
      $(this).val('')
    } else if (pcb.checkValue($.trim($(this).val())) <= 0) {
      $(this).val('')
    } else {
      pcb.boardLevelDisabled()
    }
  })

//    数量5
  $('.js-single').hover(function () {
    $('.board-nums').show()
  }, function () {
    $('.board-nums').hide()
  })
  $('.js-number li').click(function () {
    $('.js-quantity').val($(this).html())
    $('.board-nums').hide()
  })
  //确认按钮
  $('.confirm-btn').click(function () {
    var value = $.trim($('.other-input').val())
    if (value == '') {
      return false
    }
    $('.js-quantity').val(value)
    $('.board-nums').hide()
    $('.other-input').val('')
  })
  //取消按钮
  $('.cancel-btn').click(function () {
    $('.other-input').val('')
    $('.board-nums').hide()
  })
  //关闭板子图层
  $('.js-close-box').click(function () {
    $('.js-open-mask').hide()
  })
  //1,2,4,6,8...板子层6
  $('.js-boards .list').click(function () {
    var value = parseInt($(this).attr('data'))
    $('.js-laminated-tips').show()//显示层压说明
    //mcpcb结构隐藏
    $('.js-mcpcb').hide()

    //铝基板
    if ($('#FR4Type').val().indexOf('铝基板') > -1) {
      $('.js-laminated-tips').hide()//层压隐藏
      if (value === 1) {
        //板子厚度
        pcb.boardThickDisabled(['0.2', '0.4', '0.6', '2.4'])
        $('.js-mcpcb .lsit').removeClass('active-list')
        $('.js-mcpcb .lsit').eq(0).addClass('active-list')
      } else if (value === 2) {
        //板子厚度
        pcb.boardThickDisabled(['0.2', '0.4', '0.6', '0.8', '2.4'])
        //mcpcb结构显示
        $('.js-mcpcb').show()
      } else {
        var layer1 = layer.alert('铝基板目前只能选择单层板或双面板!', {}, function () {
          layer.close(layer1)
          $('input[name="hidLayers"]').val(1) //参数重置
          //板子层
          pcb.boardLevel(['1'])
        })
      }
      //铜箔厚度
      pcb.copperFoilThickDisabled(['2 oz Cu', '3 oz Cu'])
    } else {  //未选择铝基板
      if (value <= 2) {
        $('.js-laminated-tips').hide()//层压隐藏
        //板子厚度
        pcb.boardThickDisabled()
        //内铜
        $('.js-inner-copper').hide('normal', function () {
          pcb.innerCopperDisabled()
          pcb.innerCopper(['1 oz Cu'])
        })
        //4层板
      } else if (value === 4) {
        if ($('.js-length').val() >= 70 || $('.js-width').val() >= 70) {
          layer.alert('四层以上的板子，都暂时无法加工超过70CM（含）的板子,请重新输入!\n')
          //板子层
          pcb.boardLevel(['1'])
        } else {
          //板子厚度
          pcb.boardThickDisabled(['0.2'])
          //铜箔厚度
          pcb.copperFoilThickDisabled(['3 oz Cu'])
          $('.js-inner-copper').show('normal', function () {
            pcb.innerCopperDisabled(['0.5 oz Cu'])
            pcb.innerCopper(['1 oz Cu'])
          })//内铜
          //4层弹窗
          var layer4 = layer.open({
            type: 1,
            title: '请在这里从上到下填入图层顺序',
            skin: 'layui-layer-rim', //加上边框
            area: ['600px', 'auto'], //宽高
            btn: ['确定'],
            content: pcb.boardLayerSet(4),
            yes: function () {
              $('.getInput').each(function () {
                console.log($.trim($(this).val()))
              })
              layer.close(layer4)
            }
          })
        }
        //6层板
      } else if (value === 6) {
        if ($('.js-length').val() >= 70 || $('.js-width').val() >= 70) {
          layer.alert('四层以上的板子，都暂时无法加工超过70CM（含）的板子,请重新输入!\n')
          //板子层
          pcb.boardLevel(['1'])
        } else {
          // 板子厚度
          pcb.boardThickDisabled(['0.2', '0.4', '0.6'])
          $('.js-inner-copper').show('normal', function () {
            pcb.innerCopperDisabled(['0.5 oz Cu', '1.5 oz Cu'])
            pcb.innerCopper(['1 oz Cu'])
          })//内铜
          //6层弹窗
          var layer6 = layer.open({
            type: 1,
            title: '请在这里从上到下填入图层顺序',
            skin: 'layui-layer-rim', //加上边框
            area: ['600px', 'auto'], //宽高
            btn: ['确定'],
            content: pcb.boardLayerSet(6),
            yes: function () {
              $('.getInput').each(function () {
                console.log($.trim($(this).val()))
              })
              layer.close(layer6)
            }
          })
        }
      } else if (value === 8) {
        if ($('.js-length').val() >= 70 || $('.js-width').val() >= 70) {
          layer.alert('四层以上的板子，都暂时无法加工超过70CM（含）的板子,请重新输入!\n')
          //板子层
          pcb.boardLevel(['1'])
        } else {
          // 板子厚度
          pcb.boardThickDisabled(['0.2', '0.4', '0.6', '0.8', '1.0'])
          $('.js-inner-copper').show('normal', function () {
            pcb.innerCopperDisabled(['0.5 oz Cu', '1.5 oz Cu'])
            pcb.innerCopper(['1 oz Cu'])
          })//内铜
          //8层弹窗
          var layer8 = layer.open({
            type: 1,
            title: '请在这里从上到下填入图层顺序',
            skin: 'layui-layer-rim', //加上边框
            area: ['600px', 'auto'], //宽高
            btn: ['确定'],
            content: pcb.boardLayerSet(8),
            yes: function () {
              $('.getInput').each(function () {
                console.log($.trim($(this).val()))
              })
              layer.close(layer8)
            }
          })
        }
      } else {
        if ($('.js-length').val() >= 70 || $('.js-width').val() >= 70) {
          layer.alert('四层以上的板子，都暂时无法加工超过70CM（含）的板子,请重新输入!\n')
          //板子层
          pcb.boardLevel(['1'])
        } else {
          //板子厚度
          pcb.boardThickDisabled(['0.2', '0.4', '0.6', '0.8', '1.0', '1.2'])
          $('.js-inner-copper').show('normal', function () {
            pcb.innerCopperDisabled(['0.5 oz Cu', '1.5 oz Cu'])
            pcb.innerCopper(['1 oz Cu'])
          })//内铜
        }
      }
    }//end else

  })
  //板子厚度1选择
  $('.js-layer1 .list').click(function () {
    var value = $(this).attr('data')
    if (value === '0.2' || value === '0.4') {
      //焊盘喷镀
      pcb.solderCoating(['沉金'])
      pcb.solderCoatingDisabled(['有铅喷锡', '无铅喷锡'])
      //铜箔厚度
      pcb.copperFoilThickDisabled(['2 oz Cu', '3 oz Cu'])
    } else if (value === '0.6' || value === '0.8') {
      //焊盘喷镀
      pcb.solderCoatingDisabled()
      pcb.copperFoilThickDisabled(['2 oz Cu', '3 oz Cu'])
    } else if (value === '1.0' || value === '1.2') {
      //铜箔厚度
      pcb.copperFoilThickDisabled(['3 oz Cu'])
    } else {
      pcb.copperFoilThickDisabled()
    }
  })
  //最小线宽8
  $('.js-line-width .list').click(function () {
    //铜箔厚度不可选
    pcb.copperFoilThickDisabled(['2 oz Cu', '3 oz Cu'])
  })
  //最小过孔
  $('.js-min-hole .list').click(function () {
    //铜箔厚度不可选
    pcb.copperFoilThickDisabled(['2 oz Cu', '3 oz Cu'])
  })
//    金手指选择
  $('.js-gold-finger>.list').click(function () {
    var value = $(this).attr('data')
    value === 'Yes' ? $('.js-bevel').show() : $('.js-bevel').hide()
  })
  //阻焊颜色10
  $('.js-welding-color .list').click(function () {
    var value = $(this).attr('data')
    console.log(value)
    if (value === '没有' || value === '绿色') {
      pcb.characterColorDisabled()
    } else if (value === '黄色') {
      pcb.characterColor(['白色'])
      pcb.characterColorDisabled()
    } else if (value === '白色') {
      pcb.characterColorDisabled(['白色'])
      pcb.characterColor(['黑色'])
    } else {
      pcb.characterColor(['白色'])
      pcb.characterColorDisabled(['黑色'])
    }
  })

// //    右侧计价下单
  $('.js-reference-btn').click(function () {
    $(this).parent().hide()
    $('.js-service').hide()
  })
//    下单按钮
  $('.js-pcb-btn').click(function () {
    $('.js-confirm-box').show()
  })
  //取消按钮
  $('.js-cancel-btn').click(function () {
    $('.js-confirm-box').hide()
  })
//
//     //特殊工艺模块
  $('.js-special-title').click(function () {
    $(this).toggleClass('active-iconfont')
    $('.js-special-content').toggleClass('show-content')
    if ($('.js-special-content').hasClass('show-content')) {
      $('.add-flag').html('-')
    } else {
      $('.add-flag').html('+')
    }
  })
  //  特殊工艺其它要求
  $('.js-other-element .list').click(function () {
    $(this).toggleClass('active-list')
  })
//     //计价右侧交期选择
  $(document).on('click', '.js-delivery li', function () {
    $(this).addClass('active-option').siblings('li').removeClass('active-option')
  })
// //立即报价
  $('.js-immediately').click(function () {
    $('.js-combined-box').fadeOut()
    $('.advertising').fadeOut(function () {
      $('.js-denominated-box').show()
    })
  })

  // 添加报告切换
  $('.js-report-item .list').click(function () {
    if ($(this).attr('data') === 'true') {
      $('.js-add-report').show()
    } else {
      $('.js-add-report').hide()
    }
  })

})//end function
