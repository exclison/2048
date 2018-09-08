
function ShowNumberWithAnimation (randx,randy,randNumber) {
  //获取当前数字格
  var numberCell = $("#number-cell-"+randx+"-"+randy);
  numberCell.css("backgroundColor",getNumberBackgroundColor(randNumber));
  numberCell.css("color",getNumberColor(randNumber));
  numberCell.text(randNumber);
  //设置当前数字格显示的动画
  numberCell.animate({
    width:"100px",
    height:"100px",
    top:getPosTop(randx,randy),
    left:getPosLeft(randx,randy),
  },50);
}

function showMoveAnimation (fromx, fromy, tox, toy) {
  //获取到当前数字格的元素
  var numberCell = $("#number-cell-"+fromx+"-"+fromy);

  numberCell.animate({
    top: getPosTop(tox,toy),
    left: getPosLeft(tox,toy)
  },200);
}

function updateScore () {
  $("#score").text(score);
}













