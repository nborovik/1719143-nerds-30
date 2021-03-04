ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map_yandex", {
        center: [59.93867179, 30.32312099],
        zoom: 16,
        controls: ["zoomControl"], /*не работает*/
        behaviors: ['drag']
    });

    var myPlacemark = new ymaps.Placemark([59.93867179, 30.32312099], {
        hintContent: 'NЁRDS DESIGN STUDIO',
        balloonContent: '191186, Санкт-Петербург, <br>ул. Б. Конюшенная, д. 19/8',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map-marker.png',
        iconImageSize: [231, 190],
        iconImageOffset: [-50, -185]
    });

    myMap.geoObjects.add(myPlacemark);
}