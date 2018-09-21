function gugudan(num){
    // for(var i = 2; i <= 9; i++){
         console.log(num + '단');
         for (var j = i; j <= 9; j++){
             console.log(num + '*' + j + '=' + num * j);
         }
    // }
 }for (var i = 2; i <= 9; i++){
     gugudan(i);
 }

 //prompt()
 var num, total = 0;

for(var isEnd = false; isEnd === false; ){

  num = prompt("숫자를 입력하세요");

  if(num === null){
    alert("합은 "+ total +" 입니다");
    isEnd = true;
    // break;
  }
  else {
    total += parseInt(num, 10);
  }
}

alert(total);