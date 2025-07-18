const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const DOM = {
    input: $('#input'),
    characterDelete: $('#character-delete'),
    deleteButton: $('#deleteButton'),
    result: $('#result'),
};

DOM.deleteButton.addEventListener('click', () => {
    const inputTextLines = DOM.input.value.split('\n'); // 入力テキストを改行で分割
    // 削除対象文字列を改行で分割し、前後の空白をトリムして、空行を除外
    const characterToDeleteLines = DOM.characterDelete.value.split('\n').map(line => line.trim()).filter(line => line !== '');

    // 削除対象の行を空行に置き換える
    const resultLines = inputTextLines.map(line => {
        // 現在の行が、削除対象文字列のいずれかの行と完全に一致する場合
        if (characterToDeleteLines.some(charLine => charLine === line)) {
            return ''; // 空行に置き換える
        } else {
            return line; // それ以外の場合は元の行を保持する
        }
    });

    DOM.result.value = resultLines.join('\n'); // 処理された行を結合
    DOM.result.scrollTop = DOM.result.scrollHeight;
    DOM.input.scrollTop = DOM.input.scrollHeight;
});