/*! odometer 0.4.7 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G=[].slice;q='<span class="odometer-value"></span>',n='<span class="odometer-ribbon"><span class="odometer-ribbon-inner">'+q+"</span></span>",d='<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">'+n+"</span></span>",g='<span class="odometer-formatting-mark"></span>',c="(,ddd).dd",h=/^\(?([^)]*)\)?(?:(.)(d+))?$/,i=30,f=2e3,a=20,j=2,e=.5,k=1e3/i,b=1e3/a,o="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",y=document.createElement("div").style,p=null!=y.transition||null!=y.webkitTransition||null!=y.mozTransition||null!=y.oTransition,w=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,l=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,s=function(a){var b;return b=document.createElement("div"),b.innerHTML=a,b.children[0]},v=function(a,b){return a.className=a.className.replace(new RegExp("(^| )"+b.split(" ").join("|")+"( |$)","gi")," ")},r=function(a,b){return v(a,b),a.className+=" "+b},z=function(a,b){var c;return null!=document.createEvent?(c=document.createEvent("HTMLEvents"),c.initEvent(b,!0,!0),a.dispatchEvent(c)):void 0},u=function(){var a,b;return null!=(a=null!=(b=window.performance)&&"function"==typeof b.now?b.now():void 0)?a:+new Date},x=function(a,b){return null==b&&(b=0),b?(a*=Math.pow(10,b),a+=.5,a=Math.floor(a),a/=Math.pow(10,b)):Math.round(a)},A=function(a){return 0>a?Math.ceil(a):Math.floor(a)},t=function(a){return a-x(a)},C=!1,(B=function(){var a,b,c,d,e;if(!C&&null!=window.jQuery){for(C=!0,d=["html","text"],e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(function(a){var b;return b=window.jQuery.fn[a],window.jQuery.fn[a]=function(a){var c;return null==a||null==(null!=(c=this[0])?c.odometer:void 0)?b.apply(this,arguments):this[0].odometer.update(a)}}(a));return e}})(),setTimeout(B,0),m=function(){function a(b){var c,d,e,g,h,i,l,m,n,o,p=this;if(this.options=b,this.el=this.options.el,null!=this.el.odometer)return this.el.odometer;this.el.odometer=this,m=a.options;for(d in m)g=m[d],null==this.options[d]&&(this.options[d]=g);null==(h=this.options).duration&&(h.duration=f),this.MAX_VALUES=this.options.duration/k/j|0,this.resetFormat(),this.value=this.cleanValue(null!=(n=this.options.value)?n:""),this.renderInside(),this.render();try{for(o=["innerHTML","innerText","textContent"],i=0,l=o.length;l>i;i++)e=o[i],null!=this.el[e]&&!function(a){return Object.defineProperty(p.el,a,{get:function(){var b;return"innerHTML"===a?p.inside.outerHTML:null!=(b=p.inside.innerText)?b:p.inside.textContent},set:function(a){return p.update(a)}})}(e)}catch(q){c=q,this.watchForMutations()}}return a.prototype.renderInside=function(){return this.inside=document.createElement("div"),this.inside.className="odometer-inside",this.el.innerHTML="",this.el.appendChild(this.inside)},a.prototype.watchForMutations=function(){var a,b=this;if(null!=l)try{return null==this.observer&&(this.observer=new l(function(){var a;return a=b.el.innerText,b.renderInside(),b.render(b.value),b.update(a)})),this.watchMutations=!0,this.startWatchingMutations()}catch(c){a=c}},a.prototype.startWatchingMutations=function(){return this.watchMutations?this.observer.observe(this.el,{childList:!0}):void 0},a.prototype.stopWatchingMutations=function(){var a;return null!=(a=this.observer)?a.disconnect():void 0},a.prototype.cleanValue=function(a){var b;return"string"==typeof a&&(a=a.replace(null!=(b=this.format.radix)?b:".","<radix>"),a=a.replace(/[.,]/g,""),a=a.replace("<radix>","."),a=parseFloat(a,10)||0),x(a,this.format.precision)},a.prototype.bindTransitionEnd=function(){var a,b,c,d,e,f,g=this;if(!this.transitionEndBound){for(this.transitionEndBound=!0,b=!1,e=o.split(" "),f=[],c=0,d=e.length;d>c;c++)a=e[c],f.push(this.el.addEventListener(a,function(){return b?!0:(b=!0,setTimeout(function(){return g.render(),b=!1,z(g.el,"odometerdone")},0),!0)},!1));return f}},a.prototype.resetFormat=function(){var a,b,d,e,f,g,i,j;if(a=null!=(i=this.options.format)?i:c,a||(a="d"),d=h.exec(a),!d)throw new Error("Odometer: Unparsable digit format");return j=d.slice(1,4),g=j[0],f=j[1],b=j[2],e=(null!=b?b.length:void 0)||0,this.format={repeating:g,radix:f,precision:e}},a.prototype.render=function(a){var b,c,d,e,f,g,h;for(null==a&&(a=this.value),this.stopWatchingMutations(),this.resetFormat(),this.inside.innerHTML="",f=this.options.theme,b=this.el.className.split(" "),e=[],g=0,h=b.length;h>g;g++)c=b[g],c.length&&((d=/^odometer-theme-(.+)$/.exec(c))?f=d[1]:/^odometer(-|$)/.test(c)||e.push(c));return e.push("odometer"),p||e.push("odometer-no-transitions"),e.push(f?"odometer-theme-"+f:"odometer-auto-theme"),this.el.className=e.join(" "),this.ribbons={},this.formatDigits(a),this.startWatchingMutations()},a.prototype.formatDigits=function(a){var b,c,d,e,f,g,h,i,j,k;if(this.digits=[],this.options.formatFunction)for(d=this.options.formatFunction(a),j=d.split("").reverse(),f=0,h=j.length;h>f;f++)c=j[f],c.match(/0-9/)?(b=this.renderDigit(),b.querySelector(".odometer-value").innerHTML=c,this.digits.push(b),this.insertDigit(b)):this.addSpacer(c);else for(e=!this.format.precision||!t(a)||!1,k=a.toString().split("").reverse(),g=0,i=k.length;i>g;g++)b=k[g],"."===b&&(e=!0),this.addDigit(b,e)},a.prototype.update=function(a){var b,c=this;return a=this.cleanValue(a),(b=a-this.value)?(v(this.el,"odometer-animating-up odometer-animating-down odometer-animating"),b>0?r(this.el,"odometer-animating-up"):r(this.el,"odometer-animating-down"),this.stopWatchingMutations(),this.animate(a),this.startWatchingMutations(),setTimeout(function(){return c.el.offsetHeight,r(c.el,"odometer-animating")},0),this.value=a):void 0},a.prototype.renderDigit=function(){return s(d)},a.prototype.insertDigit=function(a,b){return null!=b?this.inside.insertBefore(a,b):this.inside.children.length?this.inside.insertBefore(a,this.inside.children[0]):this.inside.appendChild(a)},a.prototype.addSpacer=function(a,b,c){var d;return d=s(g),d.innerHTML=a,c&&r(d,c),this.insertDigit(d,b)},a.prototype.addDigit=function(a,b){var c,d,e,f;if(null==b&&(b=!0),"-"===a)return this.addSpacer(a,null,"odometer-negation-mark");if("."===a)return this.addSpacer(null!=(f=this.format.radix)?f:".",null,"odometer-radix-mark");if(b)for(e=!1;;){if(!this.format.repeating.length){if(e)throw new Error("Bad odometer format without digits");this.resetFormat(),e=!0}if(c=this.format.repeating[this.format.repeating.length-1],this.format.repeating=this.format.repeating.substring(0,this.format.repeating.length-1),"d"===c)break;this.addSpacer(c)}return d=this.renderDigit(),d.querySelector(".odometer-value").innerHTML=a,this.digits.push(d),this.insertDigit(d)},a.prototype.animate=function(a){return p&&"count"!==this.options.animation?this.animateSlide(a):this.animateCount(a)},a.prototype.animateCount=function(a){var c,d,e,f,g,h=this;if(d=+a-this.value)return f=e=u(),c=this.value,(g=function(){var i,j,k;return u()-f>h.options.duration?(h.value=a,h.render(),void z(h.el,"odometerdone")):(i=u()-e,i>b&&(e=u(),k=i/h.options.duration,j=d*k,c+=j,h.render(Math.round(c))),null!=w?w(g):setTimeout(g,b))})()},a.prototype.getDigitCount=function(){var a,b,c,d,e,f;for(d=1<=arguments.length?G.call(arguments,0):[],a=e=0,f=d.length;f>e;a=++e)c=d[a],d[a]=Math.abs(c);return b=Math.max.apply(Math,d),Math.ceil(Math.log(b+1)/Math.log(10))},a.prototype.getFractionalDigitCount=function(){var a,b,c,d,e,f,g;for(e=1<=arguments.length?G.call(arguments,0):[],b=/^\-?\d*\.(\d*?)0*$/,a=f=0,g=e.length;g>f;a=++f)d=e[a],e[a]=d.toString(),c=b.exec(e[a]),e[a]=null==c?0:c[1].length;return Math.max.apply(Math,e)},a.prototype.resetDigits=function(){return this.digits=[],this.ribbons=[],this.inside.innerHTML="",this.resetFormat()},a.prototype.animateSlide=function(a){var b,c,d,f,g,h,i,j,k,l,m,n,o,p,q,s,t,u,v,w,x,y,z,B,C,D,E;if(s=this.value,j=this.getFractionalDigitCount(s,a),j&&(a*=Math.pow(10,j),s*=Math.pow(10,j)),d=a-s){for(this.bindTransitionEnd(),f=this.getDigitCount(s,a),g=[],b=0,m=v=0;f>=0?f>v:v>f;m=f>=0?++v:--v){if(t=A(s/Math.pow(10,f-m-1)),i=A(a/Math.pow(10,f-m-1)),h=i-t,Math.abs(h)>this.MAX_VALUES){for(l=[],n=h/(this.MAX_VALUES+this.MAX_VALUES*b*e),c=t;h>0&&i>c||0>h&&c>i;)l.push(Math.round(c)),c+=n;l[l.length-1]!==i&&l.push(i),b++}else l=function(){E=[];for(var a=t;i>=t?i>=a:a>=i;i>=t?a++:a--)E.push(a);return E}.apply(this);for(m=w=0,y=l.length;y>w;m=++w)k=l[m],l[m]=Math.abs(k%10);g.push(l)}for(this.resetDigits(),D=g.reverse(),m=x=0,z=D.length;z>x;m=++x)for(l=D[m],this.digits[m]||this.addDigit(" ",m>=j),null==(u=this.ribbons)[m]&&(u[m]=this.digits[m].querySelector(".odometer-ribbon-inner")),this.ribbons[m].innerHTML="",0>d&&(l=l.reverse()),o=C=0,B=l.length;B>C;o=++C)k=l[o],q=document.createElement("div"),q.className="odometer-value",q.innerHTML=k,this.ribbons[m].appendChild(q),o===l.length-1&&r(q,"odometer-last-value"),0===o&&r(q,"odometer-first-value");return 0>t&&this.addDigit("-"),p=this.inside.querySelector(".odometer-radix-mark"),null!=p&&p.parent.removeChild(p),j?this.addSpacer(this.format.radix,this.digits[j-1],"odometer-radix-mark"):void 0}},a}(),m.options=null!=(E=window.odometerOptions)?E:{},setTimeout(function(){var a,b,c,d,e;if(window.odometerOptions){d=window.odometerOptions,e=[];for(a in d)b=d[a],e.push(null!=(c=m.options)[a]?(c=m.options)[a]:c[a]=b);return e}},0),m.init=function(){var a,b,c,d,e,f;if(null!=document.querySelectorAll){for(b=document.querySelectorAll(m.options.selector||".odometer"),f=[],c=0,d=b.length;d>c;c++)a=b[c],f.push(a.odometer=new m({el:a,value:null!=(e=a.innerText)?e:a.textContent}));return f}},null!=(null!=(F=document.documentElement)?F.doScroll:void 0)&&null!=document.createEventObject?(D=document.onreadystatechange,document.onreadystatechange=function(){return"complete"===document.readyState&&m.options.auto!==!1&&m.init(),null!=D?D.apply(this,arguments):void 0}):document.addEventListener("DOMContentLoaded",function(){return m.options.auto!==!1?m.init():void 0},!1),"function"==typeof define&&define.amd?define(["jquery"],function(){return m}):"undefined"!=typeof exports&&null!==exports?module.exports=m:window.Odometer=m}).call(this);


// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.com/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function forEach( callback, thisArg ) {

    var T, k;

    if ( this == null ) {
      throw new TypeError( "this is null or not defined" );
    }

    // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0; // Hack to convert O.length to a UInt32

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if ( {}.toString.call(callback) !== "[object Function]" ) {
      throw new TypeError( callback + " is not a function" );
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if ( thisArg ) {
      T = thisArg;
    }

    // 6. Let k be 0
    k = 0;

    // 7. Repeat, while k < len
    while( k < len ) {

      var kValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if ( Object.prototype.hasOwnProperty.call(O, k) ) {

        // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
        kValue = O[ k ];

        // ii. Call the Call internal method of callback with T as the this value and
        // argument list containing kValue, k, and O.
        callback.call( T, kValue, k, O );
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
}

if (!Array.prototype.filter) {
  Array.prototype.filter = function(fun /*, thisArg */)
  {
    "use strict";

    if (this === void 0 || this === null)
      throw new TypeError();

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function")
      throw new TypeError();

    var res = [];
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++)
    {
      if (i in t)
      {
        var val = t[i];

        // NOTE: Technically this should Object.defineProperty at
        //       the next index, as push can be affected by
        //       properties on Object.prototype and Array.prototype.
        //       But that method's new, and collisions should be
        //       rare, so use the more-compatible alternative.
        if (fun.call(thisArg, val, i, t))
          res.push(val);
      }
    }

    return res;
  };
}

var colorsArray;

var invertFontColor = function (isBlack) {
  var nodes = document.querySelectorAll('#colors li a .name, #colors li a .pinyin');
  if (isBlack === true) {
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].style.color = '#333';
    }
  }
  else
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].removeAttribute(style);
    }
}

var renderColor = function (color) {
  var colorHex = color.hex,
    rgb = color.RGB,
    cmyk = color.CMYK,
    name = color.name,
    pinyin = color.pinyin.toUpperCase();


  document.getElementById('wrapper').style.backgroundColor = colorHex;
  document.getElementById('pinyin').innerHTML = pinyin;
  document.querySelector('#RGBvalue input').value = colorHex;

  document.getElementById('name').innerHTML = name;


  if (history && history.pushState) {
    var state = {
      title : name,
      url : '#' + pinyin.toLowerCase()
    };
    document.title = name + ' - 中国色 - 中国传统颜色';
    history.pushState(state, "中国色 - " + name, "#"+pinyin.toLowerCase());
  }

  for (var i in rgb) {
    var el = document.querySelector('#RGBcolor dd.'+'rgb'[i]+' span');
    el.innerHTML = rgb[i];
  }

  for (var i in cmyk) {
    var n = 'cmyk'[i],
      v = cmyk[i];
    document.querySelector('#CMYKcolor dd.'+n+' .cont').innerHTML = v;
    if (v < 50) {
      document.querySelector('#CMYKcolor dd.'+n+' .l .line').style.transform = 'rotate(180deg)';
      document.querySelector('#CMYKcolor dd.'+n+' .r .line').style.transform = 'rotate('+(v*360/100).toString()+'deg)';
    }
    else {
      document.querySelector('#CMYKcolor dd.'+n+' .l .line').style.transform = 'rotate('+(v*360/100).toString()+'deg)';
      document.querySelector('#CMYKcolor dd.'+n+' .r .line').style.transform = 'rotate(180deg)';
    }
  }
};

var hashRenderColor = function () {
  if (location.hash != '') {
    var colorPinyin = location.hash.substring(1),
      hashColor = colorsArray.filter(function (color) {
      return color.pinyin === colorPinyin;
    })[0];
    renderColor(hashColor);
  }
};

var drawArcAndLine = function (cmyk, rgb) {
  var canvas = document.createElement('canvas'),
    context = canvas.getContext('2d'),
    lineHeight = 278 - 150;

  canvas.width = 50;
  canvas.height = 278;
  cmyk.forEach(function (v, i) {
    var ctx = canvas.getContext('2d'),
      endAngle = (-90 + (360 * v/100)) * (Math.PI/180);

    if (v == 0) endAngle = 1.5 * Math.PI;
    ctx.beginPath();
    ctx.arc(14,31.3 * (i+1),9,1.5 * Math.PI, endAngle);
    ctx.lineWidth = 6;
    context.strokeStyle = 'white';
    ctx.stroke();
  });
  context.lineWidth = 1;
  context.moveTo(18,150);
  context.lineTo(18,150 + lineHeight * (rgb[0]/255))
  context.moveTo(21,150);
  context.lineTo(21,150 + lineHeight * (rgb[1]/255))
  context.moveTo(24,150);
  context.lineTo(24,150 + lineHeight * (rgb[2]/255))
  context.stroke();
  return canvas;
};

var rgb2hsv = function (rgb) {
    var r = rgb[0]/255, g = rgb[1]/255, b = rgb[2]/255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max == 0 ? 0 : d / max;

    if(max == min){
      h = 0;
    }else{
      switch(max){
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return [h, s, v];
}

var handleColors = function (data) {
  colorsArray = JSON.parse(data);

  colorsArray.sort(function(a, b){
    if (rgb2hsv(a.RGB)[0] === rgb2hsv(b.RGB)[0])
      return rgb2hsv(b.RGB)[1] - rgb2hsv(a.RGB)[1];
    else
      return rgb2hsv(b.RGB)[0] - rgb2hsv(a.RGB)[0];
  });

  colorsArray.forEach(function (color, i) {
    var colorLI = document.createElement('li'),
      colorDIV = document.createElement('div'),
      colorA = document.createElement('a');

    // Style
    colorLI.style.top = Math.floor(i/7) * 300 + 'px';
    colorLI.style.left = (i-(Math.floor(i/7)*7)) * 65 + 'px';
    colorLI.style.borderTop = '6px solid ' + color.hex;

    colorA.innerHTML = '<span class="name" style="color: '+color.hex+'">'+color.name+'</span><span class="pinyin">'+color.pinyin+'</span><span class="rgb">'+color.hex.replace('#','')+'</span>';
    colorA.appendChild(drawArcAndLine(color.CMYK, color.RGB));
    colorDIV.appendChild(colorA);
    colorLI.appendChild(colorDIV);

    colorLI.addEventListener('click', function (e) {
      renderColor(color);
    });
    document.getElementById('colors').appendChild(colorLI);
  });
  hashRenderColor();
};


var r = new XMLHttpRequest();
r.open('GET', 'https://cdn.jsdelivr.net/gh/wfy-belief/color@master/chinese/colors.json', true);
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200)
    return;
  handleColors(r.responseText);
};
r.send();

document.getElementById('RGBcolor').addEventListener('mouseenter', function() {
  document.getElementById('RGBvalue').style.opacity = 1;
});
document.getElementById('RGBcolor').addEventListener('mouseleave', function(){
  document.getElementById('RGBvalue').style.opacity = 0;
});

window.onpopstate = function(){hashRenderColor();};