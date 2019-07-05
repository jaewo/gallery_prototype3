window.addEventListener("load", function(){
	/*
	var n=0;
	var pos=0;
	var prev=document.querySelector(".prev");
	var next=document.querySelector(".next");
	var slider=document.querySelector(".viewer");
	slider.style.left=pos+"px";

	var button=document.querySelectorAll(".btn_group li a");
	button[0].classList.add("act");
	var id=setInterval(slideInterval, 6000);

	function slideInterval(){
		// n=(n+1)%4;
		if(n < 3){
			n=n+1;
		}
		else{
			n=0;
		}
		sliderMoving();
	}
	function sliderMoving(){
		for(var i=0; i<button.length; i++){
			if(i == n){
				button[i].classList.add("act");
			}
			else{
				button[i].classList.remove("act");
			}
		}
		pos=n*(-600);
		slider.style.left=pos+"px";
	}

	for(var i=0; i<button.length; i++){
		button[i].index=i;

		button[i].addEventListener("click", function(e){
			e.preventDefault();
			n=e.target.index;

			for(var j=0; j<button.length; j++){
				if(j == n){
					button[j].classList.add("act");
				}
				else{
					button[j].classList.remove("act");
				}
			}
			pos=n*(-600);
			slider.style.left=pos+"px";
		});
	}

	prev.addEventListener("click", function(e){
		e.preventDefault();
		if(n > 0){
			n--;
			sliderMoving();
		}
	});
	next.addEventListener("click", function(e){
		e.preventDefault();
		if(n < (button.length-1)){
			n++;
			sliderMoving();
		}
	});
	*/

	var body=document.body;
	var container=document.createElement("div");
	container.setAttribute("class", "container");

	var containerHtml='';
	containerHtml+='<div class="viewer">\n';
	containerHtml+='</div>\n';
	containerHtml+='<ul class="btn_group">\n';
	containerHtml+='</ul>';
	container.innerHTML=containerHtml;
	body.appendChild(container);

	var control=document.createElement("div");
	control.setAttribute("class", "control");

	var controlHtml='';
	controlHtml+='<a href="" class="prev">previous</a>\n';
	controlHtml+='<a href="" class="next">next</a>';
	control.innerHTML=controlHtml;
	body.appendChild(control);

	var n=0;
	var pos=0;
	var prev=document.querySelector(".prev");
	var next=document.querySelector(".next");
	var slider=document.querySelector(".viewer");
	var button=null;
	var requestURL="../data/gallery.json";
	var request=new XMLHttpRequest();

	function init(){
		setTimeout(function(){
			request.open("GET", requestURL, true);
			request.responseType="json";
			request.send();
			request.addEventListener("load", function(){
				var data=request.response;
				// console.log(data);

				for(key in data){
					// <img class="image1" src="images/slide1.jpg" alt="">
					var imgList=document.createElement("img");
					imgList.setAttribute("class", key);
					imgList.setAttribute("src", data[key]);
					container.children[0].appendChild(imgList);

					// <li id="btn0"><a href="images/slide1.jpg">1</a></li>
					var liList=document.createElement("li");
					liList.setAttribute("id", "btn"+n);
					liList.innerHTML='<a href="'+data[key]+'">'+(n+1)+'</a>';
					container.children[1].appendChild(liList);
					n++;
				}
				slider.style.left=pos+"px";
				button=document.querySelectorAll(".btn_group li a");
				button[0].classList.add("act");
				var id=setInterval(slideInterval, 6000);

				function slideInterval(){
					// n=(n+1)%4;
					if(n < 3){
						n=n+1;
					}
					else{
						n=0;
					}
					sliderMoving();
				}
				function sliderMoving(){
					for(var i=0; i<button.length; i++){
						if(i == n){
							button[i].classList.add("act");
						}
						else{
							button[i].classList.remove("act");
						}
					}
					pos=n*(-600);
					slider.style.left=pos+"px";
				}

				for(var i=0; i<button.length; i++){
					button[i].index=i;

					button[i].addEventListener("click", function(e){
						e.preventDefault();
						n=e.target.index;

						for(var j=0; j<button.length; j++){
							if(j == n){
								button[j].classList.add("act");
							}
							else{
								button[j].classList.remove("act");
							}
						}
						pos=n*(-600);
						slider.style.left=pos+"px";
					});
				}

				prev.addEventListener("click", function(e){
					e.preventDefault();
					if(n > 0){
						n--;
						sliderMoving();
					}
				});
				next.addEventListener("click", function(e){
					e.preventDefault();
					if(n < (button.length-1)){
						n++;
						sliderMoving();
					}
				});
			});
		}, 10);
	}
	init();
});