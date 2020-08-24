ymaps.ready(init);

var myMap;

function init () {
    // Параметры карты можно задать в конструкторе.
    myMap = new ymaps.Map(
        // ID DOM-элемента, в который будет добавлена карта.
        'map',
        // Параметры карты.
        {
            // Географические координаты центра отображаемой карты.
            center: [55.76, 37.64],
            // Масштаб.
            zoom: 10,
            // Тип покрытия карты: "Спутник".
            type: 'yandex#satellite'
        }, {
            // Поиск по организациям.
            searchControlProvider: 'yandex#search'
        }
    );
}
