(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY,track=function(ev){cX=ev.pageX,cY=ev.pageY},compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if(Math.abs(pX-cX)+Math.abs(pY-cY)<cfg.sensitivity)return $(ob).unbind("mousemove",track),ob.hoverIntent_s=1,cfg.over.apply(ob,[ev]);pX=cX,pY=cY,ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)},delay=function(ev,ob){return ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t),ob.hoverIntent_s=0,cfg.out.apply(ob,[ev])},handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this)try{p=p.parentNode}catch(e){p=this}if(p==this)return!1;var ev=jQuery.extend({},e),ob=this;ob.hoverIntent_t&&(ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)),e.type=="mouseover"?(pX=ev.pageX,pY=ev.pageY,$(ob).bind("mousemove",track),ob.hoverIntent_s!=1&&(ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval))):($(ob).unbind("mousemove",track),ob.hoverIntent_s==1&&(ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)))};return this.mouseover(handleHover).mouseout(handleHover)}})(jQuery)