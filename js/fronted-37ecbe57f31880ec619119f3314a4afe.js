$(document).ready(function(){$(".navbar-burger").click(function(){$(".navbar-burger").toggleClass("is-active"),$(".navbar-menu").toggleClass("is-active")}),$(".modal-button").click(function(){$("#"+$(this).data("target")).toggleClass("is-active"),$("html").toggleClass("overflow-hidden"),$("#"+$(this).data("target")+" .modal-card-body").focus()}),$(".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button").click(function(){$(".modal").removeClass("is-active"),$("html").removeClass("overflow-hidden")}),$("#tabs li").on("click",function(){var a=$(this).data("tab")
$("#tabs li").removeClass("is-active"),$(this).addClass("is-active"),$("#tab-content p").removeClass("is-active"),$('p[data-content="'+a+'"]').addClass("is-active")})})