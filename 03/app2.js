
// var dom = document.getElementById('debug')

// console.log(dom);

// var dom2 = document.querySelectorAll('#debug');

// var $$  = document.querySelectorAll();

// console.log(dom2)

var div = document.createElement('div');//소스 내용에는 안나옴
div.style.border = "1px solid red";
div.innerHTML = "<h3>ddddd</h3>";
document.body.appendChild(div);