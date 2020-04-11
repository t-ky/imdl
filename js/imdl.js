// var saveText = function(text, filename) {
//     var a = document.createElement('a');
//     a.href = 'data:text/plain,' + encodeURIComponent(text);
//     a.download = filename;
//     var evt = document.createEvent('MouseEvents');
//     evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, true, false, false,  0, null);
//     a.dispatchEvent(evt);
// }

// saveText('テキスト', 'ファイル名.txt');

function calc_file_max(){

}

function download(url, name){
    var a = document.createElement('a');
    a.href = url;
    a.setAttribute('download', name || 'noname');
    a.dispatchEvent(new CustomEvent('click'));
}

document.getElementById('file').addEventListener('change', ev => {

    for (let i = 0; i < ev.target.files.length; i++) {

        let file = ev.target.files[i];

        // ディレクトリの相対パス
        let relativePath = file.webkitRelativePath;

        // ここではテキストファイルとして読み出してみる.
        let fileReader = new FileReader();
        fileReader.onload = event => {
            
            // 内容を取得する.
            let text = event.target.result;

            // 表示してみる.
            console.log(relativePath, text);
        }
        fileReader.readAsText(file);
    }
});

//a hrefリンクのURLを取得
// chrome.contextMenus.create({
// 	"title":"画像URLをデバッグに表示",
// 	"type":"normal",
// 	"contexts":["image"],
// 	"onclick":function(info){
// 		//ここで取得 info.linkUrlがリンクの文字列
// 		chrome.tabs.query( {active: true, lastFocusedWindow: true}, function (tabs) {
// 		console.log(info.srcUrl);//デバッグ表示用
// 		});
// 	}
// });

// TextDL("abcdefg","mytext")

// function TextDL(text,name){
//     //ファイルを作成
//     b=new Blob([text],{type:"text/plain"})

//     //a要素を作る
//     a = document.createElement('a')
//     //ダウンロードする名前をセット
//     a.download = name;
//     //ダウンロードするファイルをセット
//     a.href = window.URL.createObjectURL(b)

//     //イベントを作る
//     e = document.createEvent('MouseEvent')
//     e.initEvent("click",true,true)
//     //a要素をクリック
//     a.dispatchEvent(e)
// }

{/* <input id="file" name="file" type="file" /> */}

// var saveText = function(text, filename) {
//     var a = document.createElement('a');
//     a.href = 'data:text/plain,' + encodeURIComponent(text);
//     a.download = filename;
//     var evt = document.createEvent('MouseEvents');
//     evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, true, false, false,  0, null);
//     a.dispatchEvent(evt);
// }

// saveText('テキスト', 'ファイル名.txt');

// download.js
// function download(url, name){
//     var a = document.createElement('a');
//     a.href = url;
//     a.setAttribute('download', name || 'noname');
//     a.dispatchEvent(new CustomEvent('click'));
// }