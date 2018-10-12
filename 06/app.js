console.log('app')

var appkey = 'f100919e9ace7b3b5d9a1e7aea33136c';
var query = '제주대학교';
var url = `https://dapi.kakao.com/v2/search/web?query=${query}`;


var myHeaders = new Headers();
myHeaders.append("Authorization", "KakaoAK f100919e9ace7b3b5d9a1e7aea33136c");
var options = {headers : myHeaders};


fetch(url, options)
  .then(function(response){
    response.json().then(function(data){
      console.log('json data:',data);
    });
  });
