var isIe=(document.all)?true:false;
var x0=0,y0=0,x1=0,y1=0;
var offx=6,offy=6;
var moveable=false;
//var hover='slategray';
var normal='#175DC7';//color;
var hover='#175DC7';
var index=2000;//z-index;
var maxX;
var maxY;
function startDrag(obj)
{
	if(event.button==1)
	{
		obj.setCapture();
		var win = obj.parentNode;
		x0 = event.clientX;
		y0 = event.clientY;
		x1 = parseInt(obj.parentNode.style.left);
		y1 = parseInt(obj.parentNode.style.top);
		normal = obj.style.backgroundColor;
		obj.style.backgroundColor = hover;
		obj.parentNode.style.borderColor = hover;
		obj.nextSibling.style.color = hover;
		
		moveable = true;
	}
}

function drag(obj,w)
{
	if(moveable)
	{
		var win = obj.parentNode;
		var sha = win.nextSibling;
		var widths = document.body.clientWidth - w;
		var left = 0;
		if((x1 + event.clientX - x0) < 0)
		{
		    left = 0;
		}
		else if((x1 + event.clientX - x0) > widths)
		{
		     left = widths;
		}
		else
		{
		    left = x1 + event.clientX - x0;
		}
		var top = ( y1 + event.clientY - y0)  > 0 ? ( y1 + event.clientY - y0):0;
		win.style.left = left;
		win.style.top  = top;
		
	}
}

function stopDrag(obj)
{
	if(moveable)
	{
		var win = obj.parentNode;
		var sha = win.nextSibling;
		var msg = obj.nextSibling;
		win.style.borderColor     = normal;
		obj.style.backgroundColor = normal;
		msg.style.color           = normal;
		
		obj.releaseCapture();
		moveable = false;
	}
}
//obj.nextSibling.style.zIndex=idx-1;
function getFocus(obj)
{
	if(obj.style.zIndex!=index)
	{
		index = index + 2;
		var idx = index;
		obj.style.zIndex=idx;
		
	}
}

function min(obj)
{
//	var win = obj.parentNode.parentNode;
//	var sha = win.nextSibling;
//	var tit = obj.parentNode;
//	var msg = tit.nextSibling;
//	var flg = msg.style.display=="none";
//	if(flg)
//	{
//		win.style.height  = parseInt(msg.style.height) + parseInt(tit.style.height) + 2*2;
//		sha.style.height  = win.style.height;
//		msg.style.display = "block";
//		obj.innerHTML = "0";
//	}
//	else
//	{
//		win.style.height  = parseInt(tit.style.height) + 2*2;
//		sha.style.height  = win.style.height;
//		obj.innerHTML = "2";
//		msg.style.display = "none";
//	}
}

function dingzhi(s)//用于学者合并
        {
            var url = '/grid2008/library/Book_select.aspx?skind=&Type=SCHO&Param='+escape(s);
            var divLift = (parent.document.body.clientWidth - 600) / 2;
         divLift=Math.round(divLift);
     var  divTop = (parent.document.body.clientHeight - 450 ) / 2 + parent.document.body.scrollTop;
         divTop=Math.round(divTop);
    new xWin("1",600,450,divLift,150,"",url);
        }
function Divclose(obj)
{
	document.getElementById("DivT").parentNode.removeChild(document.getElementById("DivT"));
	  parent.document.body.scroll="yes";//
}

function xWin(id,w,h,l,t,tit,msg,k){
	var oWin = new Object;
	index = index+2;
	oWin.id      = id;
	oWin.width   = w;
	oWin.height  = h;
	oWin.left    = l;
	oWin.top     = t;
	oWin.zIndex  = index;
	oWin.title   = tit;
	oWin.message = msg;
	oWin.kind = k;
	oWin.obj     = null;
	oWin.bulid   = bulid;
	oWin.bulid();
}



function bulid()
{
//var bWidth=parseInt(document.documentElement.scrollWidth);
 var bWidth=parseInt(window.screen.width-18);
var bHeight=parseInt(document.documentElement.scrollHeight) >  parseInt(window.screen.height) ? parseInt(document.documentElement.scrollHeight) : (parseInt(window.screen.height)+1250);
maxX=bWidth + 150;
maxY=bHeight;
var H = bHeight + 250;
//var styleClose = (document.all)?"<div style='float:left; border-width:0px;color:white;font-family:webdings;' onclick='Divclose()'>r</div>":"<div style='float:left; border-width:0px;color:white;text-align:right;width:100%' onclick='Divclose()'>关闭</div>";

//var styleClose = (document.all)?"<div style='float:left;' onclick='Divclose()'><img style='padding-top:2px;' src='/grid2008/library/images/divoff.gif'/></div>":"<div style='float:left; border-width:0px;color:white;text-align:right;width:100%' onclick='Divclose()'>关闭</div>";
var styleClose ="<div style='float:right;' onclick='Divclose()'><img style='padding-top:2px;' src='images/divoff.gif'/></div>";
if(document.getElementById("DivT") != null)
{
    document.getElementById("DivT").parentNode.removeChild(document.getElementById("DivT"));
}
var styleStr="top:0px;left:0px;position:absolute;background:#666;width:"+bWidth+"px;height:"+H+"px;";
styleStr+=(isIe)?"filter:alpha(opacity=40);":"opacity:0.40;";
var  str = "<div id=DivT><div id='back' style=" + styleStr + "></div><div id=xMsg" + this.id + " "
			+ "style='"
			+ "z-index:10000;"
		    + "width:" + this.width + "px;"
			+ "height:" + this.height + "px;"
			+ "left:" + this.left + "px;"
			+ "top:" + this.top + "px;"
			+ "background-color:" + normal + ";"
			+ "color:" + normal + ";"
			+ "font-size:10px;"
			+ "font-family:Verdana;"
			+ "position:absolute;"
			+ "cursor:default;"
			+ "border:2px solid " + normal + ";"
			+ "' "
			+ "onmousedown='getFocus(this)'>"
				+ "<div id='divChild'"
				+ "style='"
				+ "background-color:" + normal + ";"
				+ "width:" + (this.width-2*2) + ";"
				+ "height:20px;"
				+ "color:white;"
				+ "' "
				+ "onmousedown='startDrag(this)' "
				+ "onmouseup='stopDrag(this)' "
				+ "onmousemove='drag(this," + this.width + ")' "
				+ "ondblclick='min(this.childNodes[1])'"
				+ ">"
					+ "<div style='float:left; width:" + (this.width-25) + "px;padding-left:3px;'>" + this.title + "</div>"
					+ styleClose
				+ "</div>"
					+ "<div id='divContent' style='"
					+ "width:" + (this.width-16) + ";"
					+ "height:" + (this.height-38) + ";"
					+ "text-align:center;"
					+ "background-color:white;"
					+ "line-height:14px;"
					+ "word-break:break-all;"
					+ "padding:8px;"
					+ "'>"
		if(this.kind == "1")
		{
			str = str + this.message;
		}
		else
		{
			str = str + "<iframe align='center' id=\"iframe1\" name=\"iframe1\" scrolling=\"yes\" src='" +this.message + "' frameborder='0' height='" + (this.height-38) + "' width='" + (this.width-16) + "'></iframe></div>"
		}
	   
		//document.body.insertAdjacentHTML("beforeEnd",str);
		var el = document.body;
		insertHtml("beforeEnd",el,str);
		//parent.document.body.scroll="no";//
		
}



function insertHtml(where, el, html){    
        where = where.toLowerCase();    
        if(el.insertAdjacentHTML){    
            switch(where){    
                case "beforebegin":    
                    el.insertAdjacentHTML('BeforeBegin', html);    
                    return el.previousSibling;    
                case "afterbegin":    
                    el.insertAdjacentHTML('AfterBegin', html);    
                    return el.firstChild;    
                case "beforeend":    
                    el.insertAdjacentHTML('BeforeEnd', html);    
                    return el.lastChild;    
                case "afterend":    
                    el.insertAdjacentHTML('AfterEnd', html);    
                    return el.nextSibling;    
            }    
            throw 'Illegal insertion point -> "' + where + '"';    
        }    
  var range = el.ownerDocument.createRange();    
        var frag;    
        switch(where){    
             case "beforebegin":    
                range.setStartBefore(el);    
                frag = range.createContextualFragment(html);    
                el.parentNode.insertBefore(frag, el);    
                return el.previousSibling;    
             case "afterbegin":    
                if(el.firstChild){    
                    range.setStartBefore(el.firstChild);    
                    frag = range.createContextualFragment(html);    
                    el.insertBefore(frag, el.firstChild);    
                    return el.firstChild;    
                }else{    
                    el.innerHTML = html;    
                    return el.firstChild;    
                }    
            case "beforeend":    
                if(el.lastChild){    
                    range.setStartAfter(el.lastChild);    
                    frag = range.createContextualFragment(html);    
                    el.appendChild(frag);    
                    return el.lastChild;    
                }else{    
                    el.innerHTML = html;    
                    return el.lastChild;    
                }    
            case "afterend":    
                range.setStartAfter(el);    
                frag = range.createContextualFragment(html);    
                el.parentNode.insertBefore(frag, el.nextSibling);    
                return el.nextSibling;    
            }    
            throw 'Illegal insertion point -> "' + where + '"';    
    }   