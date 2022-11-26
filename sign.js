const surname = document.querySelector('.input-surname')
const name = document.querySelector('.input-name')
const number = document.querySelector('.input-number')
const gmail = document.querySelector('.input-gmail')
const password = document.querySelector('.input-password')
const password1 = document.querySelector('.input-password1')
const btn = document.querySelector('.section-sign')
const passNot = document.querySelector('.pass-not')
const Psurname = document.querySelector('.room-box-icon-surname')
const Arr = [ ];

function local(){
    localStorage.setItem('task',JSON.stringify(Arr))
}

btn.addEventListener('click',() => {
    Arr.push({
        фамилия:surname.value,
        имя:name.value,
        номер:number.value,
        почта:gmail.value,
        пороль:password,
        check:false,
    });
   local();
   PushName()

   surname.value = '';
   name.value ='';
   number.value = '';
   gmail.value = '';
   password.value = '';
   password1.value = '';

   });

   if(localStorage.getItem('task') != undefined ){
    Arr = JSON.parse(localStorage.getItem('task'))
   
}

function PushName ( ){
    Psurname.innerHTML=''
    Arr.forEach((value) => {
        Psurname.innerHTML == фамилия[value]
    })
}
PushName

