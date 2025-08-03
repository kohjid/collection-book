// まず、操作するHTMLの要素を、名前をつけて呼び出せるようにします。
const nameInput = document.getElementById('char-name');
const imageInput = document.getElementById('char-image');
const descInput = document.getElementById('char-desc');
const addButton = document.getElementById('add-button');
const collectionGrid = document.getElementById('collection-grid');

// これから集めるキャラクターの情報を入れておくための、空のリスト（配列）を用意します。
let characters = [];