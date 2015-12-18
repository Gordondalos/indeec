$(document).ready(function() {

	var wh= $(document).outerHeight(true);
	$(".section_1").css("height",wh);
	$(".section_0").css("height",wh);
	$("#bg").css("height",wh);

	$(window).resize(function(){

		var wh= $(document).outerHeight(true);
		$("#bg").css("height",wh);
		$(".section_1").css("height",wh);
		$(".section_0").css("height",wh);
	});


	var mql = window.matchMedia("(orientation: portrait)");


// Прослушка события изменения ориентации
	mql.addListener(function(m) {
		if(m.matches) {
			window.reload();
		}
		else {
			window.reload();
		}
	});


	$(window).resize(function(){
		$("#footer").stickyFooter();
	});
	$("#footer").stickyFooter();


// полигоны

	var refreshDuration = 10000;
	var refreshTimeout;
	var numPointsX;
	var numPointsY;
	var unitWidth;
	var unitHeight;
	var points;

	function onLoad()
	{
		var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		svg.setAttribute('width',window.innerWidth);
		svg.setAttribute('height',window.innerHeight);
		document.querySelector('#bg').appendChild(svg);

		var unitSize = (window.innerWidth+window.innerHeight)/20;
		numPointsX = Math.ceil(window.innerWidth/unitSize)+1;
		numPointsY = Math.ceil(window.innerHeight/unitSize)+1;
		unitWidth = Math.ceil(window.innerWidth/(numPointsX-1));
		unitHeight = Math.ceil(window.innerHeight/(numPointsY-1));

		points = [];

		for(var y = 0; y < numPointsY; y++) {
			for(var x = 0; x < numPointsX; x++) {
				points.push({x:unitWidth*x, y:unitHeight*y, originX:unitWidth*x, originY:unitHeight*y});
			}
		}

		randomize();

		for(var i = 0; i < points.length; i++) {
			if(points[i].originX != unitWidth*(numPointsX-1) && points[i].originY != unitHeight*(numPointsY-1)) {
				var topLeftX = points[i].x;
				var topLeftY = points[i].y;
				var topRightX = points[i+1].x;
				var topRightY = points[i+1].y;
				var bottomLeftX = points[i+numPointsX].x;
				var bottomLeftY = points[i+numPointsX].y;
				var bottomRightX = points[i+numPointsX+1].x;
				var bottomRightY = points[i+numPointsX+1].y;

				var rando = Math.floor(Math.random()*2);

				for(var n = 0; n < 2; n++) {
					var polygon = document.createElementNS(svg.namespaceURI, 'polygon');

					if(rando==0) {
						if(n==0) {
							polygon.point1 = i;
							polygon.point2 = i+numPointsX;
							polygon.point3 = i+numPointsX+1;
							polygon.setAttribute('points',topLeftX+','+topLeftY+' '+bottomLeftX+','+bottomLeftY+' '+bottomRightX+','+bottomRightY);
						} else if(n==1) {
							polygon.point1 = i;
							polygon.point2 = i+1;
							polygon.point3 = i+numPointsX+1;
							polygon.setAttribute('points',topLeftX+','+topLeftY+' '+topRightX+','+topRightY+' '+bottomRightX+','+bottomRightY);
						}
					} else if(rando==1) {
						if(n==0) {
							polygon.point1 = i;
							polygon.point2 = i+numPointsX;
							polygon.point3 = i+1;
							polygon.setAttribute('points',topLeftX+','+topLeftY+' '+bottomLeftX+','+bottomLeftY+' '+topRightX+','+topRightY);
						} else if(n==1) {
							polygon.point1 = i+numPointsX;
							polygon.point2 = i+1;
							polygon.point3 = i+numPointsX+1;
							polygon.setAttribute('points',bottomLeftX+','+bottomLeftY+' '+topRightX+','+topRightY+' '+bottomRightX+','+bottomRightY);
						}
					}
					polygon.setAttribute('fill','rgba(0,0,0,'+(Math.random()/5)+')');
					polygon.setAttribute('stroke','rgba(250,250,250,'+(Math.random()/1)+')');
					var animate = document.createElementNS('http://www.w3.org/2000/svg','animate');
					animate.setAttribute('fill','freeze');
					animate.setAttribute('attributeName','points');
					animate.setAttribute('dur',refreshDuration+'ms');
					animate.setAttribute('calcMode','linear');
					polygon.appendChild(animate);
					svg.appendChild(polygon);
				}
			}
		}
		var ktmp;
		var k;
		setInterval(function(){
				var j=document.querySelector('#bg svg').childNodes.length;
				ktmp=k;
				k=parseInt(j*Math.random());
				var polygon0 = document.querySelector('#bg svg').childNodes[ktmp];
				var polygon1 = document.querySelector('#bg svg').childNodes[k];
				var tmp=polygon1.getAttribute('fill');
				polygon0.setAttribute('fill',tmp);
				polygon1.setAttribute('fill','rgba(255,255,255,.7)');
			}
			,500);
		refresh();
	}

	function randomize() {
		for(var i = 0; i < points.length; i++) {
			if(points[i].originX != 0 && points[i].originX != unitWidth*(numPointsX-1)) {
				points[i].x = points[i].originX + Math.random()*unitWidth-unitWidth/2;
			}
			if(points[i].originY != 0 && points[i].originY != unitHeight*(numPointsY-1)) {
				points[i].y = points[i].originY + Math.random()*unitHeight-unitHeight/2;
			}
		}
	}

	function refresh() {
		randomize();
		for(var i = 0; i < document.querySelector('#bg svg').childNodes.length; i++) {
			var polygon = document.querySelector('#bg svg').childNodes[i];
			var animate = polygon.childNodes[0];
			if(animate.getAttribute('to')) {
				animate.setAttribute('from',animate.getAttribute('to'));
			}
			animate.setAttribute('to',points[polygon.point1].x+','+points[polygon.point1].y+' '+points[polygon.point2].x+','+points[polygon.point2].y+' '+points[polygon.point3].x+','+points[polygon.point3].y);
			animate.beginElement();
		}
		refreshTimeout = setTimeout(function() {refresh();}, refreshDuration);
	}

	function onResize() {
		document.querySelector('#bg svg').remove();
		clearTimeout(refreshTimeout);
		onLoad();
	}

	window.onload = onLoad;
	window.onresize = onResize;



	// полигоны
















	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
