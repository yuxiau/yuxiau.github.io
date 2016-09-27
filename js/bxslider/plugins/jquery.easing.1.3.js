jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(n,t,e,a,i){return jQuery.easing[jQuery.easing.def](n,t,e,a,i)},easeInQuad:function(n,t,e,a,i){return a*(t/=i)*t+e},easeOutQuad:function(n,t,e,a,i){return-a*(t/=i)*(t-2)+e},easeInOutQuad:function(n,t,e,a,i){return(t/=i/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e},easeInCubic:function(n,t,e,a,i){return a*(t/=i)*t*t+e},easeOutCubic:function(n,t,e,a,i){return a*((t=t/i-1)*t*t+1)+e},easeInOutCubic:function(n,t,e,a,i){return(t/=i/2)<1?a/2*t*t*t+e:a/2*((t-=2)*t*t+2)+e},easeInQuart:function(n,t,e,a,i){return a*(t/=i)*t*t*t+e},easeOutQuart:function(n,t,e,a,i){return-a*((t=t/i-1)*t*t*t-1)+e},easeInOutQuart:function(n,t,e,a,i){return(t/=i/2)<1?a/2*t*t*t*t+e:-a/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(n,t,e,a,i){return a*(t/=i)*t*t*t*t+e},easeOutQuint:function(n,t,e,a,i){return a*((t=t/i-1)*t*t*t*t+1)+e},easeInOutQuint:function(n,t,e,a,i){return(t/=i/2)<1?a/2*t*t*t*t*t+e:a/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(n,t,e,a,i){return-a*Math.cos(t/i*(Math.PI/2))+a+e},easeOutSine:function(n,t,e,a,i){return a*Math.sin(t/i*(Math.PI/2))+e},easeInOutSine:function(n,t,e,a,i){return-a/2*(Math.cos(Math.PI*t/i)-1)+e},easeInExpo:function(n,t,e,a,i){return 0==t?e:a*Math.pow(2,10*(t/i-1))+e},easeOutExpo:function(n,t,e,a,i){return t==i?e+a:a*(-Math.pow(2,-10*t/i)+1)+e},easeInOutExpo:function(n,t,e,a,i){return 0==t?e:t==i?e+a:(t/=i/2)<1?a/2*Math.pow(2,10*(t-1))+e:a/2*(-Math.pow(2,-10*--t)+2)+e},easeInCirc:function(n,t,e,a,i){return-a*(Math.sqrt(1-(t/=i)*t)-1)+e},easeOutCirc:function(n,t,e,a,i){return a*Math.sqrt(1-(t=t/i-1)*t)+e},easeInOutCirc:function(n,t,e,a,i){return(t/=i/2)<1?-a/2*(Math.sqrt(1-t*t)-1)+e:a/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(n,t,e,a,i){var r=1.70158,s=0,u=a;if(0==t)return e;if(1==(t/=i))return e+a;if(s||(s=.3*i),u<Math.abs(a)){u=a;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(a/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*i-r)*2*Math.PI/s))+e},easeOutElastic:function(n,t,e,a,i){var r=1.70158,s=0,u=a;if(0==t)return e;if(1==(t/=i))return e+a;if(s||(s=.3*i),u<Math.abs(a)){u=a;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(a/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-r)*2*Math.PI/s)+a+e},easeInOutElastic:function(n,t,e,a,i){var r=1.70158,s=0,u=a;if(0==t)return e;if(2==(t/=i/2))return e+a;if(s||(s=i*.3*1.5),u<Math.abs(a)){u=a;var r=s/4}else var r=s/(2*Math.PI)*Math.asin(a/u);return 1>t?-.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*i-r)*2*Math.PI/s)+e:.5*u*Math.pow(2,-10*(t-=1))*Math.sin((t*i-r)*2*Math.PI/s)+a+e},easeInBack:function(n,t,e,a,i,r){return void 0==r&&(r=1.70158),a*(t/=i)*t*((r+1)*t-r)+e},easeOutBack:function(n,t,e,a,i,r){return void 0==r&&(r=1.70158),a*((t=t/i-1)*t*((r+1)*t+r)+1)+e},easeInOutBack:function(n,t,e,a,i,r){return void 0==r&&(r=1.70158),(t/=i/2)<1?a/2*t*t*(((r*=1.525)+1)*t-r)+e:a/2*((t-=2)*t*(((r*=1.525)+1)*t+r)+2)+e},easeInBounce:function(n,t,e,a,i){return a-jQuery.easing.easeOutBounce(n,i-t,0,a,i)+e},easeOutBounce:function(n,t,e,a,i){return(t/=i)<1/2.75?a*7.5625*t*t+e:2/2.75>t?a*(7.5625*(t-=1.5/2.75)*t+.75)+e:2.5/2.75>t?a*(7.5625*(t-=2.25/2.75)*t+.9375)+e:a*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(n,t,e,a,i){return i/2>t?.5*jQuery.easing.easeInBounce(n,2*t,0,a,i)+e:.5*jQuery.easing.easeOutBounce(n,2*t-i,0,a,i)+.5*a+e}});