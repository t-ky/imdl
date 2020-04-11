// chrome.contextMenus.create({
//     "title" : "コンテクストメニューのサンプル",
//     "type"  : "normal",
//     "contexts" : ["all"],
//     "onclick" : function(info){
//       var url = "https://www.google.co.jp/"
//       chrome.tabs.create({ url : url});
//     }
//   });

// chrome.contextMenus.create({
// 	"title":"画像URLをデバッグに表示",
// 	"type":"normal",
// 	"contexts":["image"],
// 	"onclick":function(info){
// 		//ここで取得 info.linkUrlがリンクの文字列
// 		// chrome.tabs.query( {active: true, lastFocusedWindow: true}, function (tabs) {
// 		// console.log(info.srcUrl);//デバッグ表示用
//     // });
//     chrome.tabs.query( {active: true, lastFocusedWindow: true}, function (tabs) {
// 		console.log(info.srcUrl);//デバッグ表示用
// 		});
// 	}
// });


chrome.contextMenus.create({
	"title":"画像URLをデバッグに表示",
	"type":"normal",
	"contexts":["image"]
});



// document.getElementById('file').addEventListener('change', ev => {

//   for (let i = 0; i < ev.target.files.length; i++) {

//       let file = ev.target.files[i];

//       // ディレクトリの相対パス
//       let relativePath = file.webkitRelativePath;

//       // ここではテキストファイルとして読み出してみる.
//       let fileReader = new FileReader();
//       fileReader.onload = event => {
          
//           // 内容を取得する.
//           let text = event.target.result;

//           // 表示してみる.
//           console.log(relativePath, text);
//       }
//       fileReader.readAsText(file);
//   }
// });
