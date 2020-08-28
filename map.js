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

    myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [60.00971665492313,30.36983877740292]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Склад',
          }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        }),
        
         myMap.geoObjects
        .add(myGeoObject)
    
     placemark = new ymaps.Placemark([60.008459278062944,30.374591637430463], {
            iconContent: "",
            hintContent: "Перетащите, чтобы выбрать адрес"
        }, {
            // Запретим замену обычного балуна на балун-панель.
            balloonPanelMaxMapArea: 0,
            draggable: "true",
            preset: "islands#blueStretchyIcon",
            // Заставляем балун открываться даже если в нем нет содержимого.
            openEmptyBalloon: true
        });
    
   

    // Обрабатываем событие открытия балуна на геообъекте:
    // начинаем загрузку данных, затем обновляем его содержимое.
    placemark.events.add('balloonopen', function (e) {
        placemark.properties.set('balloonContent', "Идет загрузка данных...");

        // Имитация задержки при загрузке данных (для демонстрации примера).
       
            ymaps.geocode(placemark.geometry.getCoordinates(), {
                results: 1
            }).then(function (res) {
                var newContent = res.geoObjects.get(0) ?
                        res.geoObjects.get(0).properties.get('name') :
                        'Не удалось определить адрес.';
                var adress =newContent;
                newContent +='<br />  <button id="counter-button"> Добавить адрес </button>';
                //    counter-button.onclick=function(){
                 
                      ///   $('#first_adress').html(adress);
                    //}
                
                // Задаем новое содержимое балуна в соответствующее свойство метки.
                placemark.properties.set('balloonContent', newContent);
            });
        
    
  
          
    });

    myMap.geoObjects.add(placemark);
          
    };

    

    
    

