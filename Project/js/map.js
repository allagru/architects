ymaps.ready(init);

        function init(){
            var myMap = new ymaps.Map("map", {
                center: [30.372737, -97.731259],
                zoom: 12
            });

            var myPlacemark = new ymaps.Placemark([30.378540, -97.752756], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/point.svg',
                iconImageSize: [30, 42],
                iconImageSize: [30, 42],
                iconImageOffset: [-3, -42]
            });

            myMap.geoObjects.add(myPlacemark);
        };