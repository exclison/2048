//定义一个数组
var board = new Array();
var hasConflicted = new Array();
var score = 0;

$(function () {
  newgame();
});

function newgame () {
  //初始化棋盘格
  init();
  $("#gameover").remove();
  //生成两个随机位置的随机数字
  generateOneNumber ();
  generateOneNumber ();
}


function init () {
  for(var i = 0; i < 4; i++) {
    //定义了一个二维数组
    board[i] = new Array();
    hasConflicted[i] = new Array();
    for(var j = 0; j < 4; j++){
      //初始化小格子为0
      board[i][j] = 0;
      hasConflicted[i][j] = false;
      var gridCell = $("#gird-cell-"+i+"-"+j);
      //通过getPosTop()方法设置每个格子距离顶端的距离
      gridCell.css("top",getPosTop(i,j));
      //通过getPosLeft()方法设置每个格子距离左端的距离
      gridCell.css("left",getPosLeft(i,j));
    }
  }
  updateBoardView ();
  score = 0;
  $("#score").text(0);
}


function updateBoardView () {
  $(".number-cell").remove();
  for(var i = 0; i < 4; i++) {
    for(var j = 0; j < 4; j++){
      $(".grid-class").append("<div class='number-cell' id='number-cell-"+i+"-"+j+"'></div>");

      var numberCell = $("#number-cell-"+i+"-"+j);
      //如果棋盘格的值为0的话，设置数字格为高宽都为零
      if(board[i][j] == 0) {
        numberCell.css("width","0px");
        numberCell.css("height","0px");
        numberCell.css("top",getPosTop(i,j)+50);
        numberCell.css("left",getPosLeft(i,j)+50);
      }
      //如果棋盘格的值不为0的话，设置数字格为高宽为75并设置背景色和前景色及数字值
      else {
        numberCell.css("width","100px");
        numberCell.css("height","100px");
        numberCell.css("top",getPosTop(i,j));
        numberCell.css("left",getPosLeft(i,j));
        numberCell.css("backgroundColor",getNumberBackgroundColor(board[i][j]));
        numberCell.css("color",getNumberColor(board[i][j]));
        numberCell.text(board[i][j]);
      }
      hasConflicted[i][j] = false;
    }
  }
}

function generateOneNumber () {
  //生成一个随即位置随机数字
  //1 生成一个随即位置
  var randx = parseInt(Math.floor(Math.random() * 4));//随机生成一个x坐标
  var randy = parseInt(Math.floor(Math.random() * 4));//随机生成一个y坐标
  //定义一个死循环，完成生成随机空格子
  while (true) {
    //如果当前格子的值为0，满足条件
    if(board[randx][randy] == 0) {
      break;
    }
    //否则重新定义一个位置
    var randx = parseInt(Math.floor(Math.random() * 4));//随机生成一个x坐标
    var randy = parseInt(Math.floor(Math.random() * 4));//随机生成一个y坐标

  }
  //2 生成一个随机数字(2048游戏的规则，新生成的数字只可以是2或4)
  var randNumber = Math.random() < 0.5 ? 2 : 4;
  //3 在随机的位置上显示出随机的数字

  //在随机位置显示随机数字
  board[randx][randy] = randNumber;
  //实现随机数字显示的动画
  ShowNumberWithAnimation(randx,randy,randNumber);

}
























