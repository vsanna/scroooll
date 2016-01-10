(function($){
  $.scroool = function(){

    this.defaults = {
      selector: '',
      className: 'toTop',
      message: '上へ戻る',
      duration: 1000,
      top: 100,
    }

    this.settings = {}

    if ( arguments.length == 0){
      this.init()
    } else if ( arguments.length == 1 && typeof arguments[0] == 'object'){
      this.init(arguments[0])
    } else if ( arguments.length == 1 && typeof arguments[0] != 'object'){
      this[arguments[0]];
    } else if ( arguments.length > 1 && this[arguments.splice(0.1)]){ // 機能テスト
      var method = arguments.splice(0,1)
      var options = arguments.splice(1,1)
      this[method](options)
    } else {
      console.log('引数は [methodName:String, options:Object] です。')
      return
    }

  }

  $.scroool.prototype = {
    init: function(options){
      this.settings = $.extend({}, this.defaults, options)
      this.createButton()
    },
    createButton: function(){

      if(this.settings.selector === ''){
        var button = $('<span>' + this.settings.message + '</span>')
        button.appendTo($('body'))
      }else{
        var button = $(this.settings.selector);
      }

      button.addClass(this.settings.className)
      button.click(function(){
        $('body, html').animate({ scrollTop: 0 }, self.settings.duration)
      })

      var self = this
      $(window).scroll(function () {
        if ($(this).scrollTop() > self.settings.top) {
            button.fadeIn(self.settings.duration);
        } else {
            button.fadeOut(self.settings.duration);
        }
      });

    },
  }
})(jQuery)

/*
呼び出し方
$.scroool(); // init
$.scroool({
  selector: 'span.upto',
  className: 'target',
  message: '上へ戻る',
  duration: 1000,
  top: 100,
}); // optionつきinit
*/
