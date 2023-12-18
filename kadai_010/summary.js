$(function(){

  //文字色変更ボタンを押すと
  $('#change-color').on('click', () => {
    //id要素がtargetの色を赤に変える
    $('#target').css('color', 'red');
  });

  //文字内容変更ボタンを押すと
  $('#change-text').on('click', () => {
    //id要素がtargetの文字列をchangeに変える
    $('#target').text('change');
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