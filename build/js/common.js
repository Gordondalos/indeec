$(document).ready(function(){function t(){var t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("width",window.innerWidth),t.setAttribute("height",window.innerHeight),document.querySelector("#bg").appendChild(t);var n=(window.innerWidth+window.innerHeight)/20;a=Math.ceil(window.innerWidth/n)+1,u=Math.ceil(window.innerHeight/n)+1,s=Math.ceil(window.innerWidth/(a-1)),l=Math.ceil(window.innerHeight/(u-1)),d=[];for(var o=0;u>o;o++)for(var r=0;a>r;r++)d.push({x:s*r,y:l*o,originX:s*r,originY:l*o});e();for(var g=0;g<d.length;g++)if(d[g].originX!=s*(a-1)&&d[g].originY!=l*(u-1))for(var h=d[g].x,p=d[g].y,m=d[g+1].x,f=d[g+1].y,w=d[g+a].x,b=d[g+a].y,v=d[g+a+1].x,y=d[g+a+1].y,$=Math.floor(2*Math.random()),A=0;2>A;A++){var M=document.createElementNS(t.namespaceURI,"polygon");0==$?0==A?(M.point1=g,M.point2=g+a,M.point3=g+a+1,M.setAttribute("points",h+","+p+" "+w+","+b+" "+v+","+y)):1==A&&(M.point1=g,M.point2=g+1,M.point3=g+a+1,M.setAttribute("points",h+","+p+" "+m+","+f+" "+v+","+y)):1==$&&(0==A?(M.point1=g,M.point2=g+a,M.point3=g+1,M.setAttribute("points",h+","+p+" "+w+","+b+" "+m+","+f)):1==A&&(M.point1=g+a,M.point2=g+1,M.point3=g+a+1,M.setAttribute("points",w+","+b+" "+m+","+f+" "+v+","+y))),M.setAttribute("fill","rgba(0,0,0,"+Math.random()/5+")"),M.setAttribute("stroke","rgba(250,250,250,"+Math.random()/1+")");var S=document.createElementNS("http://www.w3.org/2000/svg","animate");S.setAttribute("fill","freeze"),S.setAttribute("attributeName","points"),S.setAttribute("dur",c+"ms"),S.setAttribute("calcMode","linear"),M.appendChild(S),t.appendChild(M)}var X,x;setInterval(function(){var t=document.querySelector("#bg svg").childNodes.length;X=x,x=parseInt(t*Math.random());var e=document.querySelector("#bg svg").childNodes[X],i=document.querySelector("#bg svg").childNodes[x],n=i.getAttribute("fill");e.setAttribute("fill",n),i.setAttribute("fill","rgba(255,255,255,.7)")},500),i()}function e(){for(var t=0;t<d.length;t++)0!=d[t].originX&&d[t].originX!=s*(a-1)&&(d[t].x=d[t].originX+Math.random()*s-s/2),0!=d[t].originY&&d[t].originY!=l*(u-1)&&(d[t].y=d[t].originY+Math.random()*l-l/2)}function i(){e();for(var t=0;t<document.querySelector("#bg svg").childNodes.length;t++){var n=document.querySelector("#bg svg").childNodes[t],o=n.childNodes[0];o.getAttribute("to")&&o.setAttribute("from",o.getAttribute("to")),o.setAttribute("to",d[n.point1].x+","+d[n.point1].y+" "+d[n.point2].x+","+d[n.point2].y+" "+d[n.point3].x+","+d[n.point3].y),o.beginElement()}r=setTimeout(function(){i()},c)}function n(){document.querySelector("#bg svg").remove(),clearTimeout(r),t()}var o=$(window).height();$(".section_1").css("height",o),$("input").focus(function(){$(this).toggleClass("input-width")}),$("input").focusout(function(){$(this).toggleClass("input-width")});var r,a,u,s,l,d,c=1e4;window.onload=t,window.onresize=n,$(".count_element").on("click",function(){return ga("send","event","goal","goal"),yaCounterXXXXXXXX.reachGoal("goal"),!0}),Modernizr.svg||$("img[src*='svg']").attr("src",function(){return $(this).attr("src").replace(".svg",".png")}),$("#form").submit(function(){return $.ajax({type:"POST",url:"mail.php",data:$(this).serialize()}).done(function(){alert("Спасибо за заявку!"),setTimeout(function(){$("#form").trigger("reset")},1e3)}),!1});try{$.browserSelector(),$("html").hasClass("chrome")&&$.smoothScroll()}catch(g){}$("img, a").on("dragstart",function(t){t.preventDefault()})}),$(window).load(function(){$(".loader_inner").fadeOut(),$(".loader").delay(400).fadeOut("slow")});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm9uTG9hZCIsInN2ZyIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInF1ZXJ5U2VsZWN0b3IiLCJhcHBlbmRDaGlsZCIsInVuaXRTaXplIiwibnVtUG9pbnRzWCIsIk1hdGgiLCJjZWlsIiwibnVtUG9pbnRzWSIsInVuaXRXaWR0aCIsInVuaXRIZWlnaHQiLCJwb2ludHMiLCJ5IiwieCIsInB1c2giLCJvcmlnaW5YIiwib3JpZ2luWSIsInJhbmRvbWl6ZSIsImkiLCJsZW5ndGgiLCJ0b3BMZWZ0WCIsInRvcExlZnRZIiwidG9wUmlnaHRYIiwidG9wUmlnaHRZIiwiYm90dG9tTGVmdFgiLCJib3R0b21MZWZ0WSIsImJvdHRvbVJpZ2h0WCIsImJvdHRvbVJpZ2h0WSIsInJhbmRvIiwiZmxvb3IiLCJyYW5kb20iLCJuIiwicG9seWdvbiIsIm5hbWVzcGFjZVVSSSIsInBvaW50MSIsInBvaW50MiIsInBvaW50MyIsImFuaW1hdGUiLCJyZWZyZXNoRHVyYXRpb24iLCJrdG1wIiwiayIsInNldEludGVydmFsIiwiaiIsImNoaWxkTm9kZXMiLCJwYXJzZUludCIsInBvbHlnb24wIiwicG9seWdvbjEiLCJ0bXAiLCJnZXRBdHRyaWJ1dGUiLCJyZWZyZXNoIiwiYmVnaW5FbGVtZW50IiwicmVmcmVzaFRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwib25SZXNpemUiLCJyZW1vdmUiLCJjbGVhclRpbWVvdXQiLCJ3aCIsImhlaWdodCIsImNzcyIsImZvY3VzIiwidGhpcyIsInRvZ2dsZUNsYXNzIiwiZm9jdXNvdXQiLCJvbmxvYWQiLCJvbnJlc2l6ZSIsIm9uIiwiZ2EiLCJ5YUNvdW50ZXJYWFhYWFhYWCIsInJlYWNoR29hbCIsIk1vZGVybml6ciIsImF0dHIiLCJyZXBsYWNlIiwic3VibWl0IiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwic2VyaWFsaXplIiwiZG9uZSIsImFsZXJ0IiwidHJpZ2dlciIsImJyb3dzZXJTZWxlY3RvciIsImhhc0NsYXNzIiwic21vb3RoU2Nyb2xsIiwiZXJyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxvYWQiLCJmYWRlT3V0IiwiZGVsYXkiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxVQUFVQyxNQUFNLFdBd0JqQixRQUFTQyxLQUVSLEdBQUlDLEdBQU1ILFNBQVNJLGdCQUFnQiw2QkFBOEIsTUFDakVELEdBQUlFLGFBQWEsUUFBUUMsT0FBT0MsWUFDaENKLEVBQUlFLGFBQWEsU0FBU0MsT0FBT0UsYUFDakNSLFNBQVNTLGNBQWMsT0FBT0MsWUFBWVAsRUFFMUMsSUFBSVEsSUFBWUwsT0FBT0MsV0FBV0QsT0FBT0UsYUFBYSxFQUN0REksR0FBYUMsS0FBS0MsS0FBS1IsT0FBT0MsV0FBV0ksR0FBVSxFQUNuREksRUFBYUYsS0FBS0MsS0FBS1IsT0FBT0UsWUFBWUcsR0FBVSxFQUNwREssRUFBWUgsS0FBS0MsS0FBS1IsT0FBT0MsWUFBWUssRUFBVyxJQUNwREssRUFBYUosS0FBS0MsS0FBS1IsT0FBT0UsYUFBYU8sRUFBVyxJQUV0REcsSUFFQSxLQUFJLEdBQUlDLEdBQUksRUFBT0osRUFBSkksRUFBZ0JBLElBQzlCLElBQUksR0FBSUMsR0FBSSxFQUFPUixFQUFKUSxFQUFnQkEsSUFDOUJGLEVBQU9HLE1BQU1ELEVBQUVKLEVBQVVJLEVBQUdELEVBQUVGLEVBQVdFLEVBQUdHLFFBQVFOLEVBQVVJLEVBQUdHLFFBQVFOLEVBQVdFLEdBSXRGSyxJQUVBLEtBQUksR0FBSUMsR0FBSSxFQUFHQSxFQUFJUCxFQUFPUSxPQUFRRCxJQUNqQyxHQUFHUCxFQUFPTyxHQUFHSCxTQUFXTixHQUFXSixFQUFXLElBQU1NLEVBQU9PLEdBQUdGLFNBQVdOLEdBQVlGLEVBQVcsR0FZL0YsSUFBSSxHQVhBWSxHQUFXVCxFQUFPTyxHQUFHTCxFQUNyQlEsRUFBV1YsRUFBT08sR0FBR04sRUFD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QkFBa0J5RSxHQUFHLFFBQVMsV0FHL0IsTUFGQUMsSUFBRyxPQUFRLFFBQVMsT0FBUSxRQUM1QkMsa0JBQWtCQyxVQUFVLFNBQ3JCLElBSUpDLFVBQVV6RSxLQUNiSixFQUFFLG1CQUFtQjhFLEtBQUssTUFBTyxXQUNoQyxNQUFPOUUsR0FBRW9FLE1BQU1VLEtBQUssT0FBT0MsUUFBUSxPQUFRLFVBTTdDL0UsRUFBRSxTQUFTZ0YsT0FBTyxXQVlqQixNQVhBaEYsR0FBRWlGLE1BQ0RDLEtBQU0sT0FDTkMsSUFBSyxXQUNMQyxLQUFNcEYsRUFBRW9FLE1BQU1pQixjQUNaQyxLQUFLLFdBQ1BDLE1BQU0sc0JBQ04zQixXQUFXLFdBRVY1RCxFQUFFLFNBQVN3RixRQUFRLFVBQ2pCLFFBRUcsR0FJUixLQUNDeEYsRUFBRXlGLGtCQUNDekYsRUFBRSxRQUFRMEYsU0FBUyxXQUNyQjFGLEVBQUUyRixlQUVGLE1BQU1DLElBSVI1RixFQUFFLFVBQVV5RSxHQUFHLFlBQWEsU0FBU29CLEdBQVNBLEVBQU1DLHFCQUlyRDlGLEVBQUVPLFFBQVF3RixLQUFLLFdBRWQvRixFQUFFLGlCQUFpQmdHLFVBQ25CaEcsRUFBRSxXQUFXaUcsTUFBTSxLQUFLRCxRQUFRIiwiZmlsZSI6ImNvbW1vbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuXHR2YXIgd2g9ICQod2luZG93KS5oZWlnaHQoKTtcclxuXHQkKFwiLnNlY3Rpb25fMVwiKS5jc3MoXCJoZWlnaHRcIix3aCk7XHJcblxyXG5cdCQoJ2lucHV0JykuZm9jdXMoZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoXCJpbnB1dC13aWR0aFwiKVxyXG5cdH0pO1xyXG5cclxuXHQkKCdpbnB1dCcpLmZvY3Vzb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiaW5wdXQtd2lkdGhcIilcclxuXHR9KTtcclxuXHJcblxyXG4vLyDQv9C+0LvQuNCz0L7QvdGLXHJcblxyXG5cdHZhciByZWZyZXNoRHVyYXRpb24gPSAxMDAwMDtcclxuXHR2YXIgcmVmcmVzaFRpbWVvdXQ7XHJcblx0dmFyIG51bVBvaW50c1g7XHJcblx0dmFyIG51bVBvaW50c1k7XHJcblx0dmFyIHVuaXRXaWR0aDtcclxuXHR2YXIgdW5pdEhlaWdodDtcclxuXHR2YXIgcG9pbnRzO1xyXG5cclxuXHRmdW5jdGlvbiBvbkxvYWQoKVxyXG5cdHtcclxuXHRcdHZhciBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG5cdFx0c3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLHdpbmRvdy5pbm5lcldpZHRoKTtcclxuXHRcdHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZycpLmFwcGVuZENoaWxkKHN2Zyk7XHJcblxyXG5cdFx0dmFyIHVuaXRTaXplID0gKHdpbmRvdy5pbm5lcldpZHRoK3dpbmRvdy5pbm5lckhlaWdodCkvMjA7XHJcblx0XHRudW1Qb2ludHNYID0gTWF0aC5jZWlsKHdpbmRvdy5pbm5lcldpZHRoL3VuaXRTaXplKSsxO1xyXG5cdFx0bnVtUG9pbnRzWSA9IE1hdGguY2VpbCh3aW5kb3cuaW5uZXJIZWlnaHQvdW5pdFNpemUpKzE7XHJcblx0XHR1bml0V2lkdGggPSBNYXRoLmNlaWwod2luZG93LmlubmVyV2lkdGgvKG51bVBvaW50c1gtMSkpO1xyXG5cdFx0dW5pdEhlaWdodCA9IE1hdGguY2VpbCh3aW5kb3cuaW5uZXJIZWlnaHQvKG51bVBvaW50c1ktMSkpO1xyXG5cclxuXHRcdHBvaW50cyA9IFtdO1xyXG5cclxuXHRcdGZvcih2YXIgeSA9IDA7IHkgPCBudW1Qb2ludHNZOyB5KyspIHtcclxuXHRcdFx0Zm9yKHZhciB4ID0gMDsgeCA8IG51bVBvaW50c1g7IHgrKykge1xyXG5cdFx0XHRcdHBvaW50cy5wdXNoKHt4OnVuaXRXaWR0aCp4LCB5OnVuaXRIZWlnaHQqeSwgb3JpZ2luWDp1bml0V2lkdGgqeCwgb3JpZ2luWTp1bml0SGVpZ2h0Knl9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJhbmRvbWl6ZSgpO1xyXG5cclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYocG9pbnRzW2ldLm9yaWdpblggIT0gdW5pdFdpZHRoKihudW1Qb2ludHNYLTEpICYmIHBvaW50c1tpXS5vcmlnaW5ZICE9IHVuaXRIZWlnaHQqKG51bVBvaW50c1ktMSkpIHtcclxuXHRcdFx0XHR2YXIgdG9wTGVmdFggPSBwb2ludHNbaV0ueDtcclxuXHRcdFx0XHR2YXIgdG9wTGVmdFkgPSBwb2ludHNbaV0ueTtcclxuXHRcdFx0XHR2YXIgdG9wUmlnaHRYID0gcG9pbnRzW2krMV0ueDtcclxuXHRcdFx0XHR2YXIgdG9wUmlnaHRZID0gcG9pbnRzW2krMV0ueTtcclxuXHRcdFx0XHR2YXIgYm90dG9tTGVmdFggPSBwb2ludHNbaStudW1Qb2ludHNYXS54O1xyXG5cdFx0XHRcdHZhciBib3R0b21MZWZ0WSA9IHBvaW50c1tpK251bVBvaW50c1hdLnk7XHJcblx0XHRcdFx0dmFyIGJvdHRvbVJpZ2h0WCA9IHBvaW50c1tpK251bVBvaW50c1grMV0ueDtcclxuXHRcdFx0XHR2YXIgYm90dG9tUmlnaHRZID0gcG9pbnRzW2krbnVtUG9pbnRzWCsxXS55O1xyXG5cclxuXHRcdFx0XHR2YXIgcmFuZG8gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMik7XHJcblxyXG5cdFx0XHRcdGZvcih2YXIgbiA9IDA7IG4gPCAyOyBuKyspIHtcclxuXHRcdFx0XHRcdHZhciBwb2x5Z29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Zy5uYW1lc3BhY2VVUkksICdwb2x5Z29uJyk7XHJcblxyXG5cdFx0XHRcdFx0aWYocmFuZG89PTApIHtcclxuXHRcdFx0XHRcdFx0aWYobj09MCkge1xyXG5cdFx0XHRcdFx0XHRcdHBvbHlnb24ucG9pbnQxID0gaTtcclxuXHRcdFx0XHRcdFx0XHRwb2x5Z29uLnBvaW50MiA9IGkrbnVtUG9pbnRzWDtcclxuXHRcdFx0XHRcdFx0XHRwb2x5Z29uLnBvaW50MyA9IGkrbnVtUG9pbnRzWCsxO1xyXG5cdFx0XHRcdFx0XHRcdHBvbHlnb24uc2V0QXR0cmlidXRlKCdwb2ludHMnLHRvcExlZnRYKycsJyt0b3BMZWZ0WSsnICcrYm90dG9tTGVmdFgrJywnK2JvdHRvbUxlZnRZKycgJytib3R0b21SaWdodFgrJywnK2JvdHRvbVJpZ2h0WSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZihuPT0xKSB7XHJcblx0XHRcdFx0XHRcdFx0cG9seWdvbi5wb2ludDEgPSBpO1xyXG5cdFx0XHRcdFx0XHRcdHBvbHlnb24ucG9pbnQyID0gaSsxO1xyXG5cdFx0XHRcdFx0XHRcdHBvbHlnb24ucG9pbnQzID0gaStudW1Qb2ludHNYKzE7XHJcblx0XHRcdFx0XHRcdFx0cG9seWdvbi5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsdG9wTGVmdFgrJywnK3RvcExlZnRZKycgJyt0b3BSaWdodFgrJywnK3RvcFJpZ2h0WSsnICcrYm90dG9tUmlnaHRYKycsJytib3R0b21SaWdodFkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYocmFuZG89PTEpIHtcclxuXHRcdFx0XHRcdFx0aWYobj09MCkge1xyXG5cdFx0XHRcdFx0XHRcdHBvbHlnb24ucG9pbnQxID0gaTtcclxuXHRcdFx0XHRcdFx0XHRwb2x5Z29uLnBvaW50MiA9IGkrbnVtUG9pbnRzWDtcclxuXHRcdFx0XHRcdFx0XHRwb2x5Z29uLnBvaW50MyA9IGkrMTtcclxuXHRcdFx0XHRcdFx0XHRwb2x5Z29uLnNldEF0dHJpYnV0ZSgncG9pbnRzJyx0b3BMZWZ0WCsnLCcrdG9wTGVmdFkrJyAnK2JvdHRvbUxlZnRYKycsJytib3R0b21MZWZ0WSsnICcrdG9wUmlnaHRYKycsJyt0b3BSaWdodFkpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYobj09MSkge1xyXG5cdFx0XHRcdFx0XHRcdHBvbHlnb24ucG9pbnQxID0gaStudW1Qb2ludHNYO1xyXG5cdFx0XHRcdFx0XHRcdHBvbHlnb24ucG9pbnQyID0gaSsxO1xyXG5cdFx0XHRcdFx0XHRcdHBvbHlnb24ucG9pbnQzID0gaStudW1Qb2ludHNYKzE7XHJcblx0XHRcdFx0XHRcdFx0cG9seWdvbi5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsYm90dG9tTGVmdFgrJywnK2JvdHRvbUxlZnRZKycgJyt0b3BSaWdodFgrJywnK3RvcFJpZ2h0WSsnICcrYm90dG9tUmlnaHRYKycsJytib3R0b21SaWdodFkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRwb2x5Z29uLnNldEF0dHJpYnV0ZSgnZmlsbCcsJ3JnYmEoMCwwLDAsJysoTWF0aC5yYW5kb20oKS81KSsnKScpO1xyXG5cdFx0XHRcdFx0cG9seWdvbi5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsJ3JnYmEoMjUwLDI1MCwyNTAsJysoTWF0aC5yYW5kb20oKS8xKSsnKScpO1xyXG5cdFx0XHRcdFx0dmFyIGFuaW1hdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywnYW5pbWF0ZScpO1xyXG5cdFx0XHRcdFx0YW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCdmcmVlemUnKTtcclxuXHRcdFx0XHRcdGFuaW1hdGUuc2V0QXR0cmlidXRlKCdhdHRyaWJ1dGVOYW1lJywncG9pbnRzJyk7XHJcblx0XHRcdFx0XHRhbmltYXRlLnNldEF0dHJpYnV0ZSgnZHVyJyxyZWZyZXNoRHVyYXRpb24rJ21zJyk7XHJcblx0XHRcdFx0XHRhbmltYXRlLnNldEF0dHJpYnV0ZSgnY2FsY01vZGUnLCdsaW5lYXInKTtcclxuXHRcdFx0XHRcdHBvbHlnb24uYXBwZW5kQ2hpbGQoYW5pbWF0ZSk7XHJcblx0XHRcdFx0XHRzdmcuYXBwZW5kQ2hpbGQocG9seWdvbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR2YXIga3RtcDtcclxuXHRcdHZhciBrO1xyXG5cdFx0c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR2YXIgaj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcgc3ZnJykuY2hpbGROb2Rlcy5sZW5ndGg7XHJcblx0XHRcdFx0a3RtcD1rO1xyXG5cdFx0XHRcdGs9cGFyc2VJbnQoaipNYXRoLnJhbmRvbSgpKTtcclxuXHRcdFx0XHR2YXIgcG9seWdvbjAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcgc3ZnJykuY2hpbGROb2Rlc1trdG1wXTtcclxuXHRcdFx0XHR2YXIgcG9seWdvbjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcgc3ZnJykuY2hpbGROb2Rlc1trXTtcclxuXHRcdFx0XHR2YXIgdG1wPXBvbHlnb24xLmdldEF0dHJpYnV0ZSgnZmlsbCcpO1xyXG5cdFx0XHRcdHBvbHlnb24wLnNldEF0dHJpYnV0ZSgnZmlsbCcsdG1wKTtcclxuXHRcdFx0XHRwb2x5Z29uMS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCdyZ2JhKDI1NSwyNTUsMjU1LC43KScpO1xyXG5cdFx0XHR9XHJcblx0XHRcdCw1MDApO1xyXG5cdFx0cmVmcmVzaCgpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcmFuZG9taXplKCkge1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZihwb2ludHNbaV0ub3JpZ2luWCAhPSAwICYmIHBvaW50c1tpXS5vcmlnaW5YICE9IHVuaXRXaWR0aCoobnVtUG9pbnRzWC0xKSkge1xyXG5cdFx0XHRcdHBvaW50c1tpXS54ID0gcG9pbnRzW2ldLm9yaWdpblggKyBNYXRoLnJhbmRvbSgpKnVuaXRXaWR0aC11bml0V2lkdGgvMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihwb2ludHNbaV0ub3JpZ2luWSAhPSAwICYmIHBvaW50c1tpXS5vcmlnaW5ZICE9IHVuaXRIZWlnaHQqKG51bVBvaW50c1ktMSkpIHtcclxuXHRcdFx0XHRwb2ludHNbaV0ueSA9IHBvaW50c1tpXS5vcmlnaW5ZICsgTWF0aC5yYW5kb20oKSp1bml0SGVpZ2h0LXVuaXRIZWlnaHQvMjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcmVmcmVzaCgpIHtcclxuXHRcdHJhbmRvbWl6ZSgpO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZyBzdmcnKS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBwb2x5Z29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnIHN2ZycpLmNoaWxkTm9kZXNbaV07XHJcblx0XHRcdHZhciBhbmltYXRlID0gcG9seWdvbi5jaGlsZE5vZGVzWzBdO1xyXG5cdFx0XHRpZihhbmltYXRlLmdldEF0dHJpYnV0ZSgndG8nKSkge1xyXG5cdFx0XHRcdGFuaW1hdGUuc2V0QXR0cmlidXRlKCdmcm9tJyxhbmltYXRlLmdldEF0dHJpYnV0ZSgndG8nKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0YW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ3RvJyxwb2ludHNbcG9seWdvbi5wb2ludDFdLngrJywnK3BvaW50c1twb2x5Z29uLnBvaW50MV0ueSsnICcrcG9pbnRzW3BvbHlnb24ucG9pbnQyXS54KycsJytwb2ludHNbcG9seWdvbi5wb2ludDJdLnkrJyAnK3BvaW50c1twb2x5Z29uLnBvaW50M10ueCsnLCcrcG9pbnRzW3BvbHlnb24ucG9pbnQzXS55KTtcclxuXHRcdFx0YW5pbWF0ZS5iZWdpbkVsZW1lbnQoKTtcclxuXHRcdH1cclxuXHRcdHJlZnJlc2hUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtyZWZyZXNoKCk7fSwgcmVmcmVzaER1cmF0aW9uKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uUmVzaXplKCkge1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnIHN2ZycpLnJlbW92ZSgpO1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHJlZnJlc2hUaW1lb3V0KTtcclxuXHRcdG9uTG9hZCgpO1xyXG5cdH1cclxuXHJcblx0d2luZG93Lm9ubG9hZCA9IG9uTG9hZDtcclxuXHR3aW5kb3cub25yZXNpemUgPSBvblJlc2l6ZTtcclxuXHJcblxyXG5cclxuXHQvLyDQv9C+0LvQuNCz0L7QvdGLXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdC8v0KbQtdC70Lgg0LTQu9GPINCv0L3QtNC10LrRgS7QnNC10YLRgNC40LrQuCDQuCBHb29nbGUgQW5hbHl0aWNzXHJcblx0JChcIi5jb3VudF9lbGVtZW50XCIpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKCkge1xyXG5cdFx0Z2EoXCJzZW5kXCIsIFwiZXZlbnRcIiwgXCJnb2FsXCIsIFwiZ29hbFwiKTtcclxuXHRcdHlhQ291bnRlclhYWFhYWFhYLnJlYWNoR29hbChcImdvYWxcIik7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9KSk7XHJcblxyXG5cdC8vU1ZHIEZhbGxiYWNrXHJcblx0aWYoIU1vZGVybml6ci5zdmcpIHtcclxuXHRcdCQoXCJpbWdbc3JjKj0nc3ZnJ11cIikuYXR0cihcInNyY1wiLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQodGhpcykuYXR0cihcInNyY1wiKS5yZXBsYWNlKFwiLnN2Z1wiLCBcIi5wbmdcIik7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHQvL9CQ0Y/QutGBINC+0YLQv9GA0LDQstC60LAg0YTQvtGA0LxcclxuXHQvL9CU0L7QutGD0LzQtdC90YLQsNGG0LjRjzogaHR0cDovL2FwaS5qcXVlcnkuY29tL2pxdWVyeS5hamF4L1xyXG5cdCQoXCIjZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24oKSB7XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR0eXBlOiBcIlBPU1RcIixcclxuXHRcdFx0dXJsOiBcIm1haWwucGhwXCIsXHJcblx0XHRcdGRhdGE6ICQodGhpcykuc2VyaWFsaXplKClcclxuXHRcdH0pLmRvbmUoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGFsZXJ0KFwi0KHQv9Cw0YHQuNCx0L4g0LfQsCDQt9Cw0Y/QstC60YMhXCIpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCQoXCIjZm9ybVwiKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcblx0XHRcdH0sIDEwMDApO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblxyXG5cdC8vQ2hyb21lIFNtb290aCBTY3JvbGxcclxuXHR0cnkge1xyXG5cdFx0JC5icm93c2VyU2VsZWN0b3IoKTtcclxuXHRcdGlmKCQoXCJodG1sXCIpLmhhc0NsYXNzKFwiY2hyb21lXCIpKSB7XHJcblx0XHRcdCQuc21vb3RoU2Nyb2xsKCk7XHJcblx0XHR9XHJcblx0fSBjYXRjaChlcnIpIHtcclxuXHJcblx0fTtcclxuXHJcblx0JChcImltZywgYVwiKS5vbihcImRyYWdzdGFydFwiLCBmdW5jdGlvbihldmVudCkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB9KTtcclxuXHRcclxufSk7XHJcblxyXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuXHJcblx0JChcIi5sb2FkZXJfaW5uZXJcIikuZmFkZU91dCgpO1xyXG5cdCQoXCIubG9hZGVyXCIpLmRlbGF5KDQwMCkuZmFkZU91dChcInNsb3dcIik7XHJcblxyXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
