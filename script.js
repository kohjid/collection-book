alert('JavaScriptファイルが読み込まれました！');
// まず、操作するHTMLの要素を、名前をつけて呼び出せるようにします。
const nameInput = document.getElementById('char-name');
const imageInput = document.getElementById('char-image');
const descInput = document.getElementById('char-desc');
const addButton = document.getElementById('add-button');
const collectionGrid = document.getElementById('collection-grid');

// これから集めるキャラクターの情報を入れておくための、空のリスト（配列）を用意します。
let characters = [];

// 「追加する」ボタンがクリックされたときの処理
addButton.addEventListener('click', () => {
    const name = nameInput.value;
    const imageUrl = imageInput.value;
    const description = descInput.value;

    const newCharacter = {
        name: name,
        image: imageUrl,
        description: description
    };

    characters.push(newCharacter);
    renderCharacters(); // 画面を更新
});

// ★ここから削除機能のコード★
// カードエリアがクリックされたときの処理
collectionGrid.addEventListener('click', (event) => {
    // もしクリックされたのが「削除ボタン」なら
    if (event.target.classList.contains('delete-button')) {
        // 削除するカードの番号を取得
        const indexToDelete = event.target.dataset.index;

        // characterリストから、その番号のデータを1つ削除
        characters.splice(indexToDelete, 1);

        // 最新のリストで画面を再表示
        renderCharacters();
    }
});

// キャラクターのリストを画面に表示する関数
function renderCharacters() {
    // まずは表示エリアを空っぽにする
    collectionGrid.innerHTML = '';

    // charactersリストの各キャラクターに対して、カードを1枚ずつ作る
    // ★削除機能のため、forEachにindexを追加★
    characters.forEach((char, index) => {
        const card = document.createElement('div');
        card.className = 'character-card';

        // ★削除機能のため、削除ボタンをHTMLに追加★
        card.innerHTML = `
            <img src="${char.image}" alt="${char.name}">
            <h3>${char.name}</h3>
            <p>${char.description}</p>
            <button class="delete-button" data-index="${index}">削除</button>
        `;

        collectionGrid.appendChild(card);
    });
}
