function d3_scale_log(e,t){function r(n){return e(t(n))}var n=t.pow;return r.invert=function(t){return n(e.invert(t))},r.domain=function(i){return arguments.length?(t=i[0]<0?d3_scale_logn:d3_scale_logp,n=t.pow,e.domain(i.map(t)),r):e.domain().map(n)},r.nice=function(){return e.domain(d3_scale_nice(e.domain(),d3_scale_niceDefault)),r},r.ticks=function(){var r=d3_scaleExtent(e.domain()),i=[];if(r.every(isFinite)){var s=Math.floor(r[0]),o=Math.ceil(r[1]),u=n(r[0]),a=n(r[1]);if(t===d3_scale_logn){i.push(n(s));for(;s++<o;)for(var f=9;f>0;f--)i.push(n(s)*f)}else{for(;s<o;s++)for(var f=1;f<10;f++)i.push(n(s)*f);i.push(n(s))}for(s=0;i[s]<u;s++);for(o=i.length;i[o-1]>a;o--);i=i.slice(s,o)}return i},r.tickFormat=function(e,i){arguments.length<2&&(i=d3_scale_logFormat);if(arguments.length<1)return i;var s=Math.max(.1,e/r.ticks().length),o=t===d3_scale_logn?(u=-1e-12,Math.floor):(u=1e-12,Math.ceil),u;return function(e){return e/n(o(t(e)+u))<=s?i(e):""}},r.copy=function(){return d3_scale_log(e.copy(),t)},d3_scale_linearRebind(r,e)}function d3_scale_logp(e){return Math.log(e<0?0:e)/Math.LN10}function d3_scale_logn(e){return-Math.log(e>0?0:-e)/Math.LN10}d3.scale.log=function(){return d3_scale_log(d3.scale.linear(),d3_scale_logp)};var d3_scale_logFormat=d3.format(".0e");d3_scale_logp.pow=function(e){return Math.pow(10,e)},d3_scale_logn.pow=function(e){return-Math.pow(10,-e)}