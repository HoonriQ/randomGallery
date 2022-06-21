//이미지 변경 함수
//배열을 통해 랜덤 이미지 출력

//img_url[0~5]가 이미지의 주소가 되도록 배열 생성
const img_url = [
  'images/img01.jpg',
  'images/img02.jpg',
  'images/img03.jpg',
  'images/img04.jpg',
  'images/img05.jpg',
  'images/img06.jpg'
];

//제이쿼리 선언
$(function(){
  
  // 년 월 일 표시하기
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let date = d.getDate();

  console.log(year, month, date)
  
  $('.year').html(year);
  $('.month').html(month);
  $('.day').html(date);
  

  //이미지 변경 함수 선언
  function changeBg(){
    
    //0~5랜덤값 생성 (이미지 번호)
    //0부터 생성하는 이유-배열번호가 0부터 시작이라
    let imgNum = Math.floor(Math.random()*6);
    console.log(imgNum);
    
    //body의 css속성 변경
    $('body').css({
      background: `url(${img_url[imgNum]})`
    })
  }

  //setInterval(함수, 시간ms)-시간ms마다 함수가 주기적으로 실행됨
  setInterval(changeBg, 5000);

})



