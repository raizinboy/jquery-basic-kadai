$(function(){
  //変数をリセット
  let num = 0;
  let text = 0;

  //文字色変更ボタンを押すと
  $('#change-color').on('click', () => {
    //変数numが0のとき
    if(num === 0){
    //id要素がtargetの色を赤に変える
    $('#target').css('color', 'red');
    num = 1;
    } 
    //変数numが1のとき
    else{
      $('#target').css('color', 'black');
      num = 0;
    };
  });

  //文字内容変更ボタンを押すと
  $('#change-text').on('click', () => {
    //変数textが1のとき
    if (text === 0){
    //id要素がtargetの文字列をchangeに変える
    $('#target').text('change');
    text = 1;
    } 
    //変数textが０のとき
    else{ 
      $('#target').text('こんにちは！');
      text = 0;
    };
  });

  //フェードアウトボタンを押すと
  $('#fade-out').on('click', () => {
    //id要素がtargetの文字列をフェードアウトする
    $('#target').fadeOut();
  });

  //フェードインボタンを押すと
  $('#fade-in').on('click', () => {
    //id要素がtargetの文字列をフェードインする
    $('#target').fadeIn();
  });

});