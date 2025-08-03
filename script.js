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

    // 作成したキャラクターを、charactersリストに追加
    characters.push(newCharacter);

    // 確認のために、コンソールに表示してみる
    console.log('キャラクターが追加されました！');
    console.log(characters);
});
