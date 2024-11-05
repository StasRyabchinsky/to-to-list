export const IndexedDB = () => {
    let openRequest = indexedDB.open("store", 1);

    openRequest.onupgradeneeded = function(event) {
        // версия существующей базы данных меньше 2 (или база данных не существует)
        let db = openRequest.result;
        if (!db.objectStoreNames.contains('store')) { // если хранилище "store" не существует
            db.createObjectStore('store', {keyPath: 'id', autoIncrement: true}); // создаём хранилище
          }
    }

    openRequest.onsuccess = function() {
    let db = openRequest.result;
    const transaction = db.transaction(['store'], 'readwrite')
    const userStore = transaction.objectStore('store')
    console.log('task list succesful', openRequest.result)

    const tom = {name: "Tom", age: 39};
    const addRequest = userStore.add(tom);

    addRequest.onsuccess = (event) => {
        console.log("Данные успешно добавлены");
        console.log("id добавленной записи:", addRequest.result); // id добавленной записи: 1
    };

    db.onversionchange = function() {
        db.close();
        alert("База данных устарела, пожалуйста, перезагрузите страницу.")
      };
    };

    openRequest.onerror = function() {
        console.error("Error", openRequest.error);
    };

    openRequest.onblocked = function() {
        // это событие не должно срабатывать, если мы правильно обрабатываем onversionchange
      
        // это означает, что есть ещё одно открытое соединение с той же базой данных
        // и он не был закрыт после того, как для него сработал db.onversionchange
    };

    
}