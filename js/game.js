
//keydown事件表示键盘被按下
$(document).keydown(function (event) { //event是keydown事件自带的

    switch (event.keyCode){
      case 37: //left
        /*moveLeft()方法
          *完成向左移动的逻辑
          *返回值是Boolean类型,判断是否可以向左移动。
        */
        if(moveLeft()) {
          //重新的随机生成两个数字
          setTimeout("generateOneNumber();",210);
          //判断当这次的移动完成之后，游戏是否结束
          setTimeout("isgameover();",300);
        }
        break;
      case 38: //up
        /*moveLUp()方法
          *完成向上移动的逻辑
          *返回值是Boolean类型,判断是否可以向上移动。
        */
        if(moveUp()) {
          //重新的随机生成两个数字
          generateOneNumber();
          //判断当这次的移动完成之后，游戏是否结束
          setTimeout("isgameover();",300);
        }
        break;
      case 39: //right
        /*moveRight()方法
          *完成向右移动的逻辑
          *返回值是Boolean类型,判断是否可以向右移动。
        */
        if(moveRight()) {
          //重新的随机生成两个数字
          generateOneNumber();
          //判断当这次的移动完成之后，游戏是否结束
          setTimeout("isgameover();",300);
        }
        break;
      case 40: //down
        /*moveDown()方法
          *完成向下移动的逻辑
          *返回值是Boolean类型,判断是否可以向下移动。
        */
        if(moveDown()) {
          //重新的随机生成两个数字
          generateOneNumber();
          //判断当这次的移动完成之后，游戏是否结束
          setTimeout("isgameover();",300);
        }
        break;
    }


})

function moveLeft () {
  // 返回值是Boolean类型,判断是否可以向左移动。
  if(!canMoveLeft(board)) {
    //当前格子无法移动
    return false;
  }
  //完成向左移动的逻辑
  for(var i = 0;i < 4;i ++){
    for(var j = 1;j < 4; j ++){
      //当前数字格有值的（2，4...）
      if(board[i][j] != 0){
        //向左移动的逻辑
        for(var k = 0;k < j;k ++){
          if(board[i][k] == 0 && noBlokHorizontalCol(i,k,j,board)){
            //才能向左移动
            showMoveAnimation(i,j,i,k);
            board[i][k] = board[i][j];
            board[i][j] = 0;
          }else if(board[i][k] == board[i][j] && noBlokHorizontalCol(i,k,j,board) && !hasConflicted[i][k]){
            //才能向左移动
            showMoveAnimation(i,j,i,k);
            //add
            board[i][k] += board[i][j];
            board[i][j] = 0;

            //add score
            score += board[i][k];
            updateScore(score);

            hasConflicted[i][k] = true;
            continue;
          }
        }
      }
    }
  }
  setTimeout("updateBoardView();",200);
  return true;
}

function moveRight () {
  // 返回值是Boolean类型,判断是否可以向右移动。
  if(!canMoveRight(board)) {
    //当前格子无法移动
    return false;
  }
  //完成向右移动的逻辑
  for(var i = 0;i < 4;i ++){
    for(var j = 2;j >= 0; j --){
      //当前数字格有值的（2，4...）
      if(board[i][j] != 0){
        //向右移动的逻辑
        for(var k = 3;k > j;k --){
          if(board[i][k] == 0 && noBlokHorizontalCoR(i,k,j,board)){
            //才能向右移动
            showMoveAnimation(i,j,i,k);
            board[i][k] = board[i][j];
            board[i][j] = 0;
          }else if(board[i][k] == board[i][j] && noBlokHorizontalCoR(i,k,j,board) && !hasConflicted[i][k]){
            //才能向右移动
            showMoveAnimation(i,j,i,k);
            //add
            board[i][k] += board[i][j];
            board[i][j] = 0;


            //add score
            score += board[i][k];
            updateScore(score);

            hasConflicted[i][k] = true;
            continue;
          }
        }
      }
    }
  }
  setTimeout("updateBoardView();",200);
  return true;
}


function moveUp () {
  // 返回值是Boolean类型,判断是否可以向上移动。
  if(!canMoveUp(board)) {
    //当前格子无法移动
    return false;
  }
  //完成向上移动的逻辑
  for(var i = 0;i < 4;i ++){
    for(var j = 1;j < 4; j ++){
      //当前数字格有值的（2，4...）
      if(board[j][i] != 0){
        //向上移动的逻辑
        for(var k = 0;k < j;k ++){
          if(board[k][i] == 0 && noBlokHorizontalCoU(i,k,j,board)){
            //才能向上移动
            showMoveAnimation(j,i,k,i);
            board[k][i] = board[j][i];
            board[j][i] = 0;
          }else if(board[k][i] == board[j][i] && noBlokHorizontalCoU(i,k,j,board) && !hasConflicted[k][i]){
            //才能向上移动
            showMoveAnimation(i,j,i,k);
            //add
            board[k][i] += board[j][i];
            board[j][i] = 0;


            //add score
            score += board[k][i];
            updateScore(score);

            hasConflicted[k][i] = true;
            continue;
          }
        }
      }
    }
  }
  setTimeout("updateBoardView();",200);
  return true;
}


function moveDown () {
  // 返回值是Boolean类型,判断是否可以向上移动。
  if(!canMoveDown(board)) {
    //当前格子无法移动
    return false;
  }
  //完成向上移动的逻辑
  for(var i = 0;i < 4;i ++){
    for(var j = 0;j < 3; j ++){
      //当前数字格有值的（2，4...）
      if(board[j][i] != 0){
        //向上移动的逻辑
        for(var k = 3;k > j;k --){
          if(board[k][i] == 0 && noBlokHorizontalCoD(i,k,j,board)){
            //才能向上移动
            showMoveAnimation(j,i,k,i);
            board[k][i] = board[j][i];
            board[j][i] = 0;
          }else if(board[k][i] == board[j][i] && noBlokHorizontalCoD(i,k,j,board) && !hasConflicted[k][i]){
            //才能向上移动
            showMoveAnimation(i,j,i,k);
            //add
            board[k][i] += board[j][i];
            board[j][i] = 0;


            //add score
            score += board[k][i];
            updateScore(score);

            hasConflicted[k][i] = true;
            continue;
          }
        }
      }
    }
  }
  setTimeout("updateBoardView();",200);
  return true;
}


function isgameover () {
  if(nospace(board) && nomove(board)) {
    gameover();
  }
}


function gameover () {
  $(".grid-class").append("<div id='gameover' class='gameover'><p>本次得分</p><span>"+score+"</span><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></div>");

  var gameover = $("#gameover");
  var gamep = $("#gameover p");
  var gamespan = $("#gameover span");
  var gamerestart = $("#gameover #restartgamebutton");

  gameover.css({
    width: "460px",
    height: "460px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    zIndex: "10"
  });

  gamep.css({
    font: "normal normal 50px 'Arial'",
    display: "block",
    width: "300px",
    color: "white",
    margin: "0 auto",
    mariginTop: "150px",
    textAlign: "center"
  });

  gamespan.css({
    font: "normal normal 30px 'Arial'",
    width: "150px",
    margin: "0 auto",
    display: "block",
    color: "white",
    textAlign: "center"
  });

  gamerestart.css({
    display: "block",
    margin: "20px auto",
    width: "180px",
    padding: "10px 10px",
    backgroundColor: "#8f7a66",
    font: "normal normal 30px 'Arial'",
    color: "white",
    borderRadius: "10px",
    textDecoration: "none",
    textAlign: "center"
  });
}

function restartgame () {
  $("#gameover").remove();
  updateScore();
  newgame();
}

















