'use strict'
const email=document.getElementById('email');
const alert = document.querySelector(".alert")
//bieu thu chinh quy email
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
const openModal=document.querySelector('.open-modal')
const modal =document.querySelector('.modal-info');

const overlay= document.querySelector('.overlay')

const closeModal = document.querySelector('.close-modal');


openModal.addEventListener('click',function (){
  const emailVal = document.getElementById('email-value').value;
  if(emailVal.length === 0){
    console.log('Please input email!');
  }else if(validateEmail(emailVal)){
    modal.classList.add('show');
    email.classList.add('hidden');
  }
  else{
    console.log('Email format inccorect')
  }
  
})
closeModal.addEventListener('click', function(){
  modal.classList.remove('show');
  email.classList.remove('hidden');
})
//chọn phần tử

// const hide = document.querySelector('.hidden')
// //buttton
// const chonKynang = document.querySelector('.kynangne')
// //phần văn bản cần ẩn
// const textAn = document.querySelector('.dropdown-menu')

// if(hide.style.display=== 'none'){
//   hide.style.display = 'inline';
//   chonKynang.innerHTML='Read More'
//   textAn.style.display='none'
// }else {
//   hide.style.display = 'none';
//   chonKynang.innerHTML='Read less'
//   textAn.style.display='inline'
// }














