function d3_zipLength(e){return e.length}d3.zip=function(){if(!(i=arguments.length))return[];for(var e=-1,t=d3.min(arguments,d3_zipLength),n=new Array(t);++e<t;)for(var r=-1,i,s=n[e]=new Array(i);++r<i;)s[r]=arguments[r][e];return n}