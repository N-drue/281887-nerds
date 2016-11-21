var link = document.querySelector(".btn-map");
var popup = document.querySelector(".modal-content");
link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
});

window.addEventListener("keydown", function(event) {
	if(event.keyCode === 27) {
		if(popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
		}
	}
});


ymaps.ready(init);
var myMap,
	myPlacemark;
	YMaps.Style;
function init () {
	var myMap = new ymaps.Map("map", {
		center: [55.76, 37.64],
		zoom: 18,
		controls: []
	});
			myPlacemark = new ymaps.Placemark([55.76, 37.64], {
				iconContent: "1",
				hintContent: "Nerd",
				balloonContent: "191186, Санкт-Петербург, ул. Б. Конюшенная, 19/8",
		},{
						iconLayout: "default#image",
						iconImageHref: "../img/map-marker.png",
						iconImageSize: [376, 190],
						iconImageOffset: [-13, -70]
				});

		myMap.geoObjects.add(myPlacemark);
		myMap.behaviors.disable("scrollZoom");
}
