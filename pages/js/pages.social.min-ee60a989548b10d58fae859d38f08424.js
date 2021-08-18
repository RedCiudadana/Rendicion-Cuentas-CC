!function($){"use strict";var Social=function(element,options){this.$element=$(element),this.options=$.extend(!0,{},$.fn.social.defaults,options),this.$day=this.resizeTimeout=this.columns=this.colWidth=null,this.init()};Social.VERSION="1.0.0",Social.prototype.init=function(){this.$cover=this.$element.find(this.options.cover),this.$day=this.$element.find(this.options.day),this.$item=this.$element.find(this.options.item),this.$status=this.$element.find(this.options.status),this.colWidth=this.options.colWidth;var _this=this;"undefined"!=typeof stepsForm&&this.$status.length&&new stepsForm(this.$status.get(0),{onSubmit:function(form){_this.$status.find(".status-form-inner").addClass("hide"),_this.$status.find(".final-message").html('<i class="fa fa-check-circle-o"></i> Status updated').addClass("show")}}),"mobile"==$.Pages.getUserAgent()&&this.$cover.length&&this.$cover.css("height",400),setTimeout(function(){this.$day.length&&this.$day.isotope({itemSelector:this.options.item,masonry:{columnWidth:this.colWidth,gutter:20,isFitWidth:!0}}),_this.$day.isotope("layout")}.bind(this),500)},Social.prototype.setContainerWidth=function(){var currentColumns=Math.floor(($("body").width()-100)/this.colWidth);currentColumns!==this.columns&&(this.columns=currentColumns,this.$day.length&&this.$day.width(this.columns*(this.colWidth+20)))};var old=$.fn.social;$.fn.social=function(option){return this.each(function(){var $this=$(this),data=$this.data("pg.social"),options="object"==typeof option&&option;data||$this.data("pg.social",data=new Social(this,options)),"string"==typeof option&&data[option]()})},$.fn.social.Constructor=Social,$.fn.social.defaults={cover:'[data-social="cover"]',day:'[data-social="day"]',status:'[data-social="status"]',item:'[data-social="item"]',colWidth:300},$.fn.social.noConflict=function(){return $.fn.social=old,this},$(window).on("load",function(){$('[data-pages="social"]').each(function(){var $social=$(this);$social.social($social.data()),setTimeout(function(){$social.find('[data-social="status"] li.current input').focus()},1e3)})}),$(window).on("resize",function(){$('[data-pages="social"]').each(function(){var $social=$(this);clearTimeout($social.data("pg.social").resizeTimeout),$social.data("pg.social").resizeTimeout=setTimeout(function(){$social.data("pg.social").$day.isotope("layout")},300)})})}(window.jQuery);