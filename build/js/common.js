$(document).ready(function(){function t(){var t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("width",window.innerWidth),t.setAttribute("height",window.innerHeight),document.querySelector("#bg").appendChild(t);var o=(window.innerWidth+window.innerHeight)/20;s=Math.ceil(window.innerWidth/o)+1,c=Math.ceil(window.innerHeight/o)+1,d=Math.ceil(window.innerWidth/(s-1)),u=Math.ceil(window.innerHeight/(c-1)),l=[];for(var n=0;c>n;n++)for(var r=0;s>r;r++)l.push({x:d*r,y:u*n,originX:d*r,originY:u*n});e();for(var a=0;a<l.length;a++)if(l[a].originX!=d*(s-1)&&l[a].originY!=u*(c-1))for(var h=l[a].x,m=l[a].y,w=l[a+1].x,p=l[a+1].y,f=l[a+s].x,b=l[a+s].y,v=l[a+s+1].x,$=l[a+s+1].y,y=Math.floor(2*Math.random()),A=0;2>A;A++){var M=document.createElementNS(t.namespaceURI,"polygon");0==y?0==A?(M.point1=a,M.point2=a+s,M.point3=a+s+1,M.setAttribute("points",h+","+m+" "+f+","+b+" "+v+","+$)):1==A&&(M.point1=a,M.point2=a+1,M.point3=a+s+1,M.setAttribute("points",h+","+m+" "+w+","+p+" "+v+","+$)):1==y&&(0==A?(M.point1=a,M.point2=a+s,M.point3=a+1,M.setAttribute("points",h+","+m+" "+f+","+b+" "+w+","+p)):1==A&&(M.point1=a+s,M.point2=a+1,M.point3=a+s+1,M.setAttribute("points",f+","+b+" "+w+","+p+" "+v+","+$))),M.setAttribute("fill","rgba(0,0,0,"+Math.random()/5+")"),M.setAttribute("stroke","rgba(250,250,250,"+Math.random()/1+")");var S=document.createElementNS("http://www.w3.org/2000/svg","animate");S.setAttribute("fill","freeze"),S.setAttribute("attributeName","points"),S.setAttribute("dur",g+"ms"),S.setAttribute("calcMode","linear"),M.appendChild(S),t.appendChild(M)}var X,x;setInterval(function(){var t=document.querySelector("#bg svg").childNodes.length;X=x,x=parseInt(t*Math.random());var e=document.querySelector("#bg svg").childNodes[X],i=document.querySelector("#bg svg").childNodes[x],o=i.getAttribute("fill");e.setAttribute("fill",o),i.setAttribute("fill","rgba(255,255,255,.7)")},500),i()}function e(){for(var t=0;t<l.length;t++)0!=l[t].originX&&l[t].originX!=d*(s-1)&&(l[t].x=l[t].originX+Math.random()*d-d/2),0!=l[t].originY&&l[t].originY!=u*(c-1)&&(l[t].y=l[t].originY+Math.random()*u-u/2)}function i(){e();for(var t=0;t<document.querySelector("#bg svg").childNodes.length;t++){var o=document.querySelector("#bg svg").childNodes[t],n=o.childNodes[0];n.getAttribute("to")&&n.setAttribute("from",n.getAttribute("to")),n.setAttribute("to",l[o.point1].x+","+l[o.point1].y+" "+l[o.point2].x+","+l[o.point2].y+" "+l[o.point3].x+","+l[o.point3].y),n.beginElement()}a=setTimeout(function(){i()},g)}function o(){document.querySelector("#bg svg").remove(),clearTimeout(a),t()}var n=$(document).outerHeight(!0);$(".section_1").css("height",n),$(".section_0").css("height",n),$("#bg").css("height",n),$(window).resize(function(){var t=$(document).outerHeight(!0);$("#bg").css("height",t),$(".section_1").css("height",t),$(".section_0").css("height",t)});var r=window.matchMedia("(orientation: portrait)");r.addListener(function(t){t.matches?window.reload():window.reload()}),$(window).resize(function(){$("#footer").stickyFooter()}),$("#footer").stickyFooter();var a,s,c,d,u,l,g=1e4;window.onload=t,window.onresize=o,$(".count_element").on("click",function(){return ga("send","event","goal","goal"),yaCounterXXXXXXXX.reachGoal("goal"),!0}),Modernizr.svg||$("img[src*='svg']").attr("src",function(){return $(this).attr("src").replace(".svg",".png")}),$("#form").submit(function(){return $.ajax({type:"POST",url:"mail.php",data:$(this).serialize()}).done(function(){alert("Спасибо за заявку!"),setTimeout(function(){$("#form").trigger("reset")},1e3)}),!1});try{$.browserSelector(),$("html").hasClass("chrome")&&$.smoothScroll()}catch(h){}$("img, a").on("dragstart",function(t){t.preventDefault()})}),$(window).load(function(){$(".loader_inner").fadeOut(),$(".loader").delay(400).fadeOut("slow")});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uTG9hZCIsInN2ZyIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmRDaGlsZCIsInVuaXRTaXplIiwibnVtUG9pbnRzWCIsIk1hdGgiLCJjZWlsIiwibnVtUG9pbnRzWSIsInVuaXRXaWR0aCIsInVuaXRIZWlnaHQiLCJwb2ludHMiLCJ5IiwieCIsInB1c2giLCJvcmlnaW5YIiwib3JpZ2luWSIsInJhbmRvbWl6ZSIsImkiLCJsZW5ndGgiLCJ0b3BMZWZ0WCIsInRvcExlZnRZIiwidG9wUmlnaHRYIiwidG9wUmlnaHRZIiwiYm90dG9tTGVmdFgiLCJib3R0b21MZWZ0WSIsImJvdHRvbVJpZ2h0WCIsImJvdHRvbVJpZ2h0WSIsInJhbmRvIiwiZmxvb3IiLCJyYW5kb20iLCJuIiwicG9seWdvbiIsIm5hbWVzcGFjZVVSSSIsInBvaW50MSIsInBvaW50MiIsInBvaW50MyIsImFuaW1hdGUiLCJyZWZyZXNoRHVyYXRpb24iLCJrdG1wIiwiayIsInNldEludGVydmFsIiwiaiIsImNoaWxkTm9kZXMiLCJwYXJzZUludCIsInBvbHlnb24wIiwicG9seWdvbjEiLCJ0bXAiLCJnZXRBdHRyaWJ1dGUiLCJyZWZyZXNoIiwiYmVnaW5FbGVtZW50IiwicmVmcmVzaFRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwib25SZXNpemUiLCJyZW1vdmUiLCJjbGVhclRpbWVvdXQiLCJ3aCIsIm91dGVySGVpZ2h0IiwiY3NzIiwicmVzaXplIiwibXFsIiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwibSIsIm1hdGNoZXMiLCJyZWxvYWQiLCJzdGlja3lGb290ZXIiLCJvbmxvYWQiLCJvbnJlc2l6ZSIsIm9uIiwiZ2EiLCJ5YUNvdW50ZXJYWFhYWFhYWCIsInJlYWNoR29hbCIsIk1vZGVybml6ciIsImF0dHIiLCJ0aGlzIiwicmVwbGFjZSIsInN1Ym1pdCIsImFqYXgiLCJ0eXBlIiwidXJsIiwiZGF0YSIsInNlcmlhbGl6ZSIsImRvbmUiLCJhbGVydCIsInRyaWdnZXIiLCJicm93c2VyU2VsZWN0b3IiLCJoYXNDbGFzcyIsInNtb290aFNjcm9sbCIsImVyciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsb2FkIiwiZmFkZU91dCIsImRlbGF5Il0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQThDakIsUUFBU0MsS0FFUixHQUFJQyxHQUFNSCxTQUFTSSxnQkFBZ0IsNkJBQThCLE1BQ2pFRCxHQUFJRSxhQUFhLFFBQVFDLE9BQU9DLFlBQ2hDSixFQUFJRSxhQUFhLFNBQVNDLE9BQU9FLGFBQ2pDUixTQUFTUyxjQUFjLE9BQU9DLFlBQVlQLEVBRTFDLElBQUlRLElBQVlMLE9BQU9DLFdBQVdELE9BQU9FLGFBQWEsRUFDdERJLEdBQWFDLEtBQUtDLEtBQUtSLE9BQU9DLFdBQVdJLEdBQVUsRUFDbkRJLEVBQWFGLEtBQUtDLEtBQUtSLE9BQU9FLFlBQVlHLEdBQVUsRUFDcERLLEVBQVlILEtBQUtDLEtBQUtSLE9BQU9DLFlBQVlLLEVBQVcsSUFDcERLLEVBQWFKLEtBQUtDLEtBQUtSLE9BQU9FLGFBQWFPLEVBQVcsSUFFdERHLElBRUEsS0FBSSxHQUFJQyxHQUFJLEVBQU9KLEVBQUpJLEVBQWdCQSxJQUM5QixJQUFJLEdBQUlDLEdBQUksRUFBT1IsRUFBSlEsRUFBZ0JBLElBQzlCRixFQUFPRyxNQUFNRCxFQUFFSixFQUFVSSxFQUFHRCxFQUFFRixFQUFXRSxFQUFHRyxRQUFRTixFQUFVSSxFQUFHRyxRQUFRTixFQUFXRSxHQUl0RkssSUFFQSxLQUFJLEdBQUlDLEdBQUksRUFBR0EsRUFBSVAsRUFBT1EsT0FBUUQsSUFDakMsR0FBR1AsRUFBT08sR0FBR0gsU0FBV04sR0FBV0osRUFBVyxJQUFNTSxFQUFPTyxHQUFHRixTQUFXTixHQUFZRixFQUFXLEdBWS9GLElBQUks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WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcblx0dmFyIHdoPSAkKGRvY3VtZW50KS5vdXRlckhlaWdodCh0cnVlKTtcclxuXHQkKFwiLnNlY3Rpb25fMVwiKS5jc3MoXCJoZWlnaHRcIix3aCk7XHJcblx0JChcIi5zZWN0aW9uXzBcIikuY3NzKFwiaGVpZ2h0XCIsd2gpO1xyXG5cdCQoXCIjYmdcIikuY3NzKFwiaGVpZ2h0XCIsd2gpO1xyXG5cclxuXHQkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0dmFyIHdoPSAkKGRvY3VtZW50KS5vdXRlckhlaWdodCh0cnVlKTtcclxuXHRcdCQoXCIjYmdcIikuY3NzKFwiaGVpZ2h0XCIsd2gpO1xyXG5cdFx0JChcIi5zZWN0aW9uXzFcIikuY3NzKFwiaGVpZ2h0XCIsd2gpO1xyXG5cdFx0JChcIi5zZWN0aW9uXzBcIikuY3NzKFwiaGVpZ2h0XCIsd2gpO1xyXG5cdH0pO1xyXG5cclxuXHJcblx0dmFyIG1xbCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcIik7XHJcblxyXG5cclxuLy8g0J/RgNC+0YHQu9GD0YjQutCwINGB0L7QsdGL0YLQuNGPINC40LfQvNC10L3QtdC90LjRjyDQvtGA0LjQtdC90YLQsNGG0LjQuFxyXG5cdG1xbC5hZGRMaXN0ZW5lcihmdW5jdGlvbihtKSB7XHJcblx0XHRpZihtLm1hdGNoZXMpIHtcclxuXHRcdFx0d2luZG93LnJlbG9hZCgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHdpbmRvdy5yZWxvYWQoKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblxyXG5cdCQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuXHRcdCQoXCIjZm9vdGVyXCIpLnN0aWNreUZvb3RlcigpO1xyXG5cdH0pO1xyXG5cdCQoXCIjZm9vdGVyXCIpLnN0aWNreUZvb3RlcigpO1xyXG5cclxuXHJcbi8vINC/0L7Qu9C40LPQvtC90YtcclxuXHJcblx0dmFyIHJlZnJlc2hEdXJhdGlvbiA9IDEwMDAwO1xyXG5cdHZhciByZWZyZXNoVGltZW91dDtcclxuXHR2YXIgbnVtUG9pbnRzWDtcclxuXHR2YXIgbnVtUG9pbnRzWTtcclxuXHR2YXIgdW5pdFdpZHRoO1xyXG5cdHZhciB1bml0SGVpZ2h0O1xyXG5cdHZhciBwb2ludHM7XHJcblxyXG5cdGZ1bmN0aW9uIG9uTG9hZCgpXHJcblx0e1xyXG5cdFx0dmFyIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcblx0XHRzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsd2luZG93LmlubmVyV2lkdGgpO1xyXG5cdFx0c3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jyx3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnJykuYXBwZW5kQ2hpbGQoc3ZnKTtcclxuXHJcblx0XHR2YXIgdW5pdFNpemUgPSAod2luZG93LmlubmVyV2lkdGgrd2luZG93LmlubmVySGVpZ2h0KS8yMDtcclxuXHRcdG51bVBvaW50c1ggPSBNYXRoLmNlaWwod2luZG93LmlubmVyV2lkdGgvdW5pdFNpemUpKzE7XHJcblx0XHRudW1Qb2ludHNZID0gTWF0aC5jZWlsKHdpbmRvdy5pbm5lckhlaWdodC91bml0U2l6ZSkrMTtcclxuXHRcdHVuaXRXaWR0aCA9IE1hdGguY2VpbCh3aW5kb3cuaW5uZXJXaWR0aC8obnVtUG9pbnRzWC0xKSk7XHJcblx0XHR1bml0SGVpZ2h0ID0gTWF0aC5jZWlsKHdpbmRvdy5pbm5lckhlaWdodC8obnVtUG9pbnRzWS0xKSk7XHJcblxyXG5cdFx0cG9pbnRzID0gW107XHJcblxyXG5cdFx0Zm9yKHZhciB5ID0gMDsgeSA8IG51bVBvaW50c1k7IHkrKykge1xyXG5cdFx0XHRmb3IodmFyIHggPSAwOyB4IDwgbnVtUG9pbnRzWDsgeCsrKSB7XHJcblx0XHRcdFx0cG9pbnRzLnB1c2goe3g6dW5pdFdpZHRoKngsIHk6dW5pdEhlaWdodCp5LCBvcmlnaW5YOnVuaXRXaWR0aCp4LCBvcmlnaW5ZOnVuaXRIZWlnaHQqeX0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmFuZG9taXplKCk7XHJcblxyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZihwb2ludHNbaV0ub3JpZ2luWCAhPSB1bml0V2lkdGgqKG51bVBvaW50c1gtMSkgJiYgcG9pbnRzW2ldLm9yaWdpblkgIT0gdW5pdEhlaWdodCoobnVtUG9pbnRzWS0xKSkge1xyXG5cdFx0XHRcdHZhciB0b3BMZWZ0WCA9IHBvaW50c1tpXS54O1xyXG5cdFx0XHRcdHZhciB0b3BMZWZ0WSA9IHBvaW50c1tpXS55O1xyXG5cdFx0XHRcdHZhciB0b3BSaWdodFggPSBwb2ludHNbaSsxXS54O1xyXG5cdFx0XHRcdHZhciB0b3BSaWdodFkgPSBwb2ludHNbaSsxXS55O1xyXG5cdFx0XHRcdHZhciBib3R0b21MZWZ0WCA9IHBvaW50c1tpK251bVBvaW50c1hdLng7XHJcblx0XHRcdFx0dmFyIGJvdHRvbUxlZnRZID0gcG9pbnRzW2krbnVtUG9pbnRzWF0ueTtcclxuXHRcdFx0XHR2YXIgYm90dG9tUmlnaHRYID0gcG9pbnRzW2krbnVtUG9pbnRzWCsxXS54O1xyXG5cdFx0XHRcdHZhciBib3R0b21SaWdodFkgPSBwb2ludHNbaStudW1Qb2ludHNYKzFdLnk7XHJcblxyXG5cdFx0XHRcdHZhciByYW5kbyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKTtcclxuXHJcblx0XHRcdFx0Zm9yKHZhciBuID0gMDsgbiA8IDI7IG4rKykge1xyXG5cdFx0XHRcdFx0dmFyIHBvbHlnb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnLm5hbWVzcGFjZVVSSSwgJ3BvbHlnb24nKTtcclxuXHJcblx0XHRcdFx0XHRpZihyYW5kbz09MCkge1xyXG5cdFx0XHRcdFx0XHRpZihuPT0wKSB7XHJcblx0XHRcdFx0XHRcdFx0cG9seWdvbi5wb2ludDEgPSBpO1xyXG5cdFx0XHRcdFx0XHRcdHBvbHlnb24ucG9pbnQyID0gaStudW1Qb2ludHNYO1xyXG5cdFx0XHRcdFx0XHRcdHBvbHlnb24ucG9pbnQzID0gaStudW1Qb2ludHNYKzE7XHJcblx0XHRcdFx0XHRcdFx0cG9seWdvbi5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsdG9wTGVmdFgrJywnK3RvcExlZnRZKycgJytib3R0b21MZWZ0WCsnLCcrYm90dG9tTGVmdFkrJyAnK2JvdHRvbVJpZ2h0WCsnLCcrYm90dG9tUmlnaHRZKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmKG49PTEpIHtcclxuXHRcdFx0XHRcdFx0XHRwb2x5Z29uLnBvaW50MSA9IGk7XHJcblx0XHRcdFx0XHRcdFx0cG9seWdvbi5wb2ludDIgPSBpKzE7XHJcblx0XHRcdFx0XHRcdFx0cG9seWdvbi5wb2ludDMgPSBpK251bVBvaW50c1grMTtcclxuXHRcdFx0XHRcdFx0XHRwb2x5Z29uLnNldEF0dHJpYnV0ZSgncG9pbnRzJyx0b3BMZWZ0WCsnLCcrdG9wTGVmdFkrJyAnK3RvcFJpZ2h0WCsnLCcrdG9wUmlnaHRZKycgJytib3R0b21SaWdodFgrJywnK2JvdHRvbVJpZ2h0WSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSBpZihyYW5kbz09MSkge1xyXG5cdFx0XHRcdFx0XHRpZihuPT0wKSB7XHJcblx0XHRcdFx0XHRcdFx0cG9seWdvbi5wb2ludDEgPSBpO1xyXG5cdFx0XHRcdFx0XHRcdHBvbHlnb24ucG9pbnQyID0gaStudW1Qb2ludHNYO1xyXG5cdFx0XHRcdFx0XHRcdHBvbHlnb24ucG9pbnQzID0gaSsxO1xyXG5cdFx0XHRcdFx0XHRcdHBvbHlnb24uc2V0QXR0cmlidXRlKCdwb2ludHMnLHRvcExlZnRYKycsJyt0b3BMZWZ0WSsnICcrYm90dG9tTGVmdFgrJywnK2JvdHRvbUxlZnRZKycgJyt0b3BSaWdodFgrJywnK3RvcFJpZ2h0WSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZihuPT0xKSB7XHJcblx0XHRcdFx0XHRcdFx0cG9seWdvbi5wb2ludDEgPSBpK251bVBvaW50c1g7XHJcblx0XHRcdFx0XHRcdFx0cG9seWdvbi5wb2ludDIgPSBpKzE7XHJcblx0XHRcdFx0XHRcdFx0cG9seWdvbi5wb2ludDMgPSBpK251bVBvaW50c1grMTtcclxuXHRcdFx0XHRcdFx0XHRwb2x5Z29uLnNldEF0dHJpYnV0ZSgncG9pbnRzJyxib3R0b21MZWZ0WCsnLCcrYm90dG9tTGVmdFkrJyAnK3RvcFJpZ2h0WCsnLCcrdG9wUmlnaHRZKycgJytib3R0b21SaWdodFgrJywnK2JvdHRvbVJpZ2h0WSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHBvbHlnb24uc2V0QXR0cmlidXRlKCdmaWxsJywncmdiYSgwLDAsMCwnKyhNYXRoLnJhbmRvbSgpLzUpKycpJyk7XHJcblx0XHRcdFx0XHRwb2x5Z29uLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywncmdiYSgyNTAsMjUwLDI1MCwnKyhNYXRoLnJhbmRvbSgpLzEpKycpJyk7XHJcblx0XHRcdFx0XHR2YXIgYW5pbWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCdhbmltYXRlJyk7XHJcblx0XHRcdFx0XHRhbmltYXRlLnNldEF0dHJpYnV0ZSgnZmlsbCcsJ2ZyZWV6ZScpO1xyXG5cdFx0XHRcdFx0YW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ2F0dHJpYnV0ZU5hbWUnLCdwb2ludHMnKTtcclxuXHRcdFx0XHRcdGFuaW1hdGUuc2V0QXR0cmlidXRlKCdkdXInLHJlZnJlc2hEdXJhdGlvbisnbXMnKTtcclxuXHRcdFx0XHRcdGFuaW1hdGUuc2V0QXR0cmlidXRlKCdjYWxjTW9kZScsJ2xpbmVhcicpO1xyXG5cdFx0XHRcdFx0cG9seWdvbi5hcHBlbmRDaGlsZChhbmltYXRlKTtcclxuXHRcdFx0XHRcdHN2Zy5hcHBlbmRDaGlsZChwb2x5Z29uKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHZhciBrdG1wO1xyXG5cdFx0dmFyIGs7XHJcblx0XHRzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHZhciBqPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZyBzdmcnKS5jaGlsZE5vZGVzLmxlbmd0aDtcclxuXHRcdFx0XHRrdG1wPWs7XHJcblx0XHRcdFx0az1wYXJzZUludChqKk1hdGgucmFuZG9tKCkpO1xyXG5cdFx0XHRcdHZhciBwb2x5Z29uMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZyBzdmcnKS5jaGlsZE5vZGVzW2t0bXBdO1xyXG5cdFx0XHRcdHZhciBwb2x5Z29uMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZyBzdmcnKS5jaGlsZE5vZGVzW2tdO1xyXG5cdFx0XHRcdHZhciB0bXA9cG9seWdvbjEuZ2V0QXR0cmlidXRlKCdmaWxsJyk7XHJcblx0XHRcdFx0cG9seWdvbjAuc2V0QXR0cmlidXRlKCdmaWxsJyx0bXApO1xyXG5cdFx0XHRcdHBvbHlnb24xLnNldEF0dHJpYnV0ZSgnZmlsbCcsJ3JnYmEoMjU1LDI1NSwyNTUsLjcpJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0LDUwMCk7XHJcblx0XHRyZWZyZXNoKCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByYW5kb21pemUoKSB7XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmKHBvaW50c1tpXS5vcmlnaW5YICE9IDAgJiYgcG9pbnRzW2ldLm9yaWdpblggIT0gdW5pdFdpZHRoKihudW1Qb2ludHNYLTEpKSB7XHJcblx0XHRcdFx0cG9pbnRzW2ldLnggPSBwb2ludHNbaV0ub3JpZ2luWCArIE1hdGgucmFuZG9tKCkqdW5pdFdpZHRoLXVuaXRXaWR0aC8yO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHBvaW50c1tpXS5vcmlnaW5ZICE9IDAgJiYgcG9pbnRzW2ldLm9yaWdpblkgIT0gdW5pdEhlaWdodCoobnVtUG9pbnRzWS0xKSkge1xyXG5cdFx0XHRcdHBvaW50c1tpXS55ID0gcG9pbnRzW2ldLm9yaWdpblkgKyBNYXRoLnJhbmRvbSgpKnVuaXRIZWlnaHQtdW5pdEhlaWdodC8yO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByZWZyZXNoKCkge1xyXG5cdFx0cmFuZG9taXplKCk7XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnIHN2ZycpLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIHBvbHlnb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcgc3ZnJykuY2hpbGROb2Rlc1tpXTtcclxuXHRcdFx0dmFyIGFuaW1hdGUgPSBwb2x5Z29uLmNoaWxkTm9kZXNbMF07XHJcblx0XHRcdGlmKGFuaW1hdGUuZ2V0QXR0cmlidXRlKCd0bycpKSB7XHJcblx0XHRcdFx0YW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ2Zyb20nLGFuaW1hdGUuZ2V0QXR0cmlidXRlKCd0bycpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRhbmltYXRlLnNldEF0dHJpYnV0ZSgndG8nLHBvaW50c1twb2x5Z29uLnBvaW50MV0ueCsnLCcrcG9pbnRzW3BvbHlnb24ucG9pbnQxXS55KycgJytwb2ludHNbcG9seWdvbi5wb2ludDJdLngrJywnK3BvaW50c1twb2x5Z29uLnBvaW50Ml0ueSsnICcrcG9pbnRzW3BvbHlnb24ucG9pbnQzXS54KycsJytwb2ludHNbcG9seWdvbi5wb2ludDNdLnkpO1xyXG5cdFx0XHRhbmltYXRlLmJlZ2luRWxlbWVudCgpO1xyXG5cdFx0fVxyXG5cdFx0cmVmcmVzaFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge3JlZnJlc2goKTt9LCByZWZyZXNoRHVyYXRpb24pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb25SZXNpemUoKSB7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcgc3ZnJykucmVtb3ZlKCk7XHJcblx0XHRjbGVhclRpbWVvdXQocmVmcmVzaFRpbWVvdXQpO1xyXG5cdFx0b25Mb2FkKCk7XHJcblx0fVxyXG5cclxuXHR3aW5kb3cub25sb2FkID0gb25Mb2FkO1xyXG5cdHdpbmRvdy5vbnJlc2l6ZSA9IG9uUmVzaXplO1xyXG5cclxuXHJcblxyXG5cdC8vINC/0L7Qu9C40LPQvtC90YtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblx0Ly/QptC10LvQuCDQtNC70Y8g0K/QvdC00LXQutGBLtCc0LXRgtGA0LjQutC4INC4IEdvb2dsZSBBbmFseXRpY3NcclxuXHQkKFwiLmNvdW50X2VsZW1lbnRcIikub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oKSB7XHJcblx0XHRnYShcInNlbmRcIiwgXCJldmVudFwiLCBcImdvYWxcIiwgXCJnb2FsXCIpO1xyXG5cdFx0eWFDb3VudGVyWFhYWFhYWFgucmVhY2hHb2FsKFwiZ29hbFwiKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0pKTtcclxuXHJcblx0Ly9TVkcgRmFsbGJhY2tcclxuXHRpZighTW9kZXJuaXpyLnN2Zykge1xyXG5cdFx0JChcImltZ1tzcmMqPSdzdmcnXVwiKS5hdHRyKFwic3JjXCIsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJCh0aGlzKS5hdHRyKFwic3JjXCIpLnJlcGxhY2UoXCIuc3ZnXCIsIFwiLnBuZ1wiKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdC8v0JDRj9C60YEg0L7RgtC/0YDQsNCy0LrQsCDRhNC+0YDQvFxyXG5cdC8v0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPOiBodHRwOi8vYXBpLmpxdWVyeS5jb20vanF1ZXJ5LmFqYXgvXHJcblx0JChcIiNmb3JtXCIpLnN1Ym1pdChmdW5jdGlvbigpIHtcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHR5cGU6IFwiUE9TVFwiLFxyXG5cdFx0XHR1cmw6IFwibWFpbC5waHBcIixcclxuXHRcdFx0ZGF0YTogJCh0aGlzKS5zZXJpYWxpemUoKVxyXG5cdFx0fSkuZG9uZShmdW5jdGlvbigpIHtcclxuXHRcdFx0YWxlcnQoXCLQodC/0LDRgdC40LHQviDQt9CwINC30LDRj9Cy0LrRgyFcIik7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0JChcIiNmb3JtXCIpLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuXHRcdFx0fSwgMTAwMCk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHJcblx0Ly9DaHJvbWUgU21vb3RoIFNjcm9sbFxyXG5cdHRyeSB7XHJcblx0XHQkLmJyb3dzZXJTZWxlY3RvcigpO1xyXG5cdFx0aWYoJChcImh0bWxcIikuaGFzQ2xhc3MoXCJjaHJvbWVcIikpIHtcclxuXHRcdFx0JC5zbW9vdGhTY3JvbGwoKTtcclxuXHRcdH1cclxuXHR9IGNhdGNoKGVycikge1xyXG5cclxuXHR9O1xyXG5cclxuXHQkKFwiaW1nLCBhXCIpLm9uKFwiZHJhZ3N0YXJ0XCIsIGZ1bmN0aW9uKGV2ZW50KSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IH0pO1xyXG5cdFxyXG59KTtcclxuXHJcbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkge1xyXG5cclxuXHQkKFwiLmxvYWRlcl9pbm5lclwiKS5mYWRlT3V0KCk7XHJcblx0JChcIi5sb2FkZXJcIikuZGVsYXkoNDAwKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
