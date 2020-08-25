var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [60.008459278062944,30.374591637430463], // Москва
        zoom: 15
    });

     myMap.geoObject.add(new ymaps.Placemark([60.00759469691767,30.377139829924605], {
            balloonContent: 'Склад'
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }))
    
    };


