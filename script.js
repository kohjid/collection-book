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
    // フォームに入力された値を取得する
    const name = nameInput.value;
    const imageUrl = imageInput.value;
    const description = descInput.value;

    // 新しいキャラクターのデータを作成
    const newCharacter = {
        name: name,
        image: imageUrl,
        description: description
    };

    characters.push(newCharacter);

    // ★★★ 画面を更新するために、この1行を呼び出すだけ ★★★
    renderCharacters();
});


// キャラクターのリストを画面に表示する関数
function renderCharacters() {
    // まずは表示エリアを空っぽにする
    collectionGrid.innerHTML = '';

    // charactersリストの各キャラクターに対して、カードを1枚ずつ作る
    characters.forEach(char => {
        // カードのHTML要素を作成
        const card = document.createElement('div');
        card.className = 'character-card'; // CSSでデザインするためのクラス名

        // カードの中身のHTMLを作成
        card.innerHTML = `
            <img src="${char.image}" alt="${char.name}">
            <h3>${char.name}</h3>
            <p>${char.description}</p>
        `;

        // 完成したカードを画面のグリッドに追加
        collectionGrid.appendChild(card);
    });
}
