var wrap = document.querySelector('.wrap');

var str = '';

// for(var i=0; i < 16; i++){
//     // str = str +  '<div class="b"></div>'; 코드 줄임
//     str += '<div class = "b"></div>';
// }

for(let i = 1; i <= 4; i++) {
    for(let j = 1; j <= 4; j++) {
        // let block = document.createElement('div');
        // block.className = (i + j) % 2 == 1 ? 'black' : 'white';
        // wrap.appendChild(block);
        str += `<div class='${(i + j) % 2 == 1 ? 'b' : 'w'}'></div>`  
    }
  }
  
  wrap.innerHTML = str;
  

  var blocks = document.querySelectorAll('.wrap > div');
  
  blocks.forEach(function(block){
  
    block.addEventListener('click', function(event) { 
      console.log(block);
      block.style.backgroundColor = 'red';
      //block.className += 'r';
    })
  
  });
  

  // for(var i=0; i < 16; i++) {
  //   // console.log( blocks[i] );
  
  //   blocks[i].addEventListener('click', function(event) {
  
  //     debugger
  //     blocks[i].style.backgroundColor = 'yellow';
      
  //   });
  
  // }


