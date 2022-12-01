const email=document.getElementById('email')
const alert = document.querySelector(".alert")


//bieu thu chinh quy email
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function checkText (){
  if(email.value.length==0){
    // chuwa nhap thi thong bao mat di
    alert.style.padding='0'
    // set noi dung thing bao trong
    alert.textContent=''
  }
  else {
    //da nhap gi do vao email
    if(email.value.match(regex)){
      //dung dinh dang
      alert.textContent="Email Hop le"
      alert.style.color='#14f0ba'
    }else{
      //khongdung dinh dang
      alert.style.padding='0px 20px'
      alert.textContent='email khong hop le'
      alert.style.color='#f01448'
    }
  }
}




email.addEventListener('keyup',(event) =>{
checkText()
})
// mo chuong trinh len thi check co gi trong mail chua
//khong co thi dong thong bao lai
checkText()