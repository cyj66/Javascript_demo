function slowAnimate(obj,len,callback){     //对象，距离，回调函数
				clearInterval(obj.timer);
				obj.timer=setInterval(function(){
					var step=(len-obj.offsetLeft)/10;     //重点
					step=step>0?Math.ceil(step):Math.floor(step);   //还要进行取整，否则因公式原因会有所偏差
					if(obj.offsetLeft==len)
					{
						clearInterval(obj.timer);
						if(callback){     //如果有回调函数，则定时器结束执行回调函数
							callback();
						}              //此处可写成callback&&callback();
					}
					else{
						obj.style.left=obj.offsetLeft+step+'px';
					}
				},50)
			}