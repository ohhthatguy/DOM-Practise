const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const telephone = document.querySelector(".telephone");
const bio = document.querySelector(".bio");
const submit = document.querySelector(".submit");
const box = document.querySelector(".box");
const alert_fname = document.querySelector(".alert_fname");
const alert_lname = document.querySelector(".alert_lname");
const alert_email = document.querySelector(".alert_email");
const alert_pwd = document.querySelector(".alert_pwd");
const alert_phone = document.querySelector(".alert_phone");
const alert_bio = document.querySelector(".alert_bio");

function fnamevalidation(){

    let size = fname.value.length;
    let char = fname.value; 
    let i=0, less_word=0, no_alphabet=0;


    if(size>=3 && size <=16){

    }else{
        
        less_word=1;

    }

    while(i < size) {
        if((/[a-zA-Z]/).test(char[i])){

        }else{
           no_alphabet=1;
            break;
        }
        i++;
    }   

    const temps = document.createElement('div');
    if(no_alphabet==1 && less_word == 1){
        temps.innerText = "please enter alphabets only and total letters between 3-16";
    }else if(no_alphabet == 1){
        temps.innerText = "please enter alphabets only";
    }else if(less_word == 1){
        temps.innerText = "please enter total words between 3-16";
    }
    temps.classList.add("temps");

   if(alert_fname.children.length != 0){
        while(alert_fname.children.length != 0){
            alert_fname.removeChild(alert_fname.firstChild);
        }
   }
   alert_fname.appendChild(temps);

}

function lnamevalidation(){

    let size = lname.value.length;
    let char = lname.value;
    let i=0, less_word=0, no_alphabet=0;


    if(size>=3 && size <=16){

    }else{
        less_word=1;

    }

    while(i < size) {
        if((/[a-zA-Z]/).test(char[i])){

        }else{
           no_alphabet=1;
            break;
        }
        i++;
    }   

    const temps = document.createElement('div');
    if(no_alphabet==1 && less_word == 1){
        temps.innerText = "please enter alphabets only and total letters between 3-16";
    }else if(no_alphabet == 1){
        temps.innerText = "please enter alphabets only";
    }else if(less_word == 1){
        temps.innerText = "please enter total words between 3-16";
    }
    temps.classList.add("temps");

   if(alert_lname.children.length != 0){
        while(alert_lname.children.length != 0){
            alert_lname.removeChild(alert_lname.firstChild);
        }
   }
   alert_lname.appendChild(temps);
}

function emailvalidation(){
    let size = email.value.length;
    let char = email.value;
    let i=0,k=0;


    if(char.includes('@')) {
       if((char.includes('.'))){
        k++;
       }
    }

    

    if(alert_email.children.length != 0){
        while(alert_email.children.length != 0){
            alert_email.removeChild(alert_email.firstChild);
        }
    }

   if(k==0){
    const temps = document.createElement('div');
    temps.innerText = "Please enter valid email like example@gmail.com";
    temps.classList.add("temps");
    alert_email.appendChild(temps);
   }

}

function passwordvalidation(){

    let size = password.value.length;
    let char = password.value;


    let less_word=0, no_alpha=0, no_special=0;

    
   if(alert_pwd.children.length != 0){
    while(alert_pwd.children.length != 0){
        alert_pwd.removeChild(alert_pwd.firstChild);
      }
    }

    
    if(size>=3 && size <=16){

    }else{
    less_word=1;

    }

    if((/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(char)){

    }else{
        no_special = 1;
    }

    if((/a-zA-Z0-9/).test(char)){

    }else{
        no_alpha = 1;
    }

    const temps = document.createElement('div');
        if(less_word==1){
            temps.innerText = 'please type more letters'
        }else if(no_alpha ==1 && no_special == 1){
            temps.innerText = "Please enter a special character and more alphanumeric value";    
        }else if(no_special == 1){
            temps.innerText = "Please enter a special character";   
        }
        temps.classList.add("temps");
        alert_pwd.appendChild(temps);
    


}

function telephonevalidation(){
    
    let size = telephone.value.length;
  

    if(alert_phone.children.length != 0){
        while(alert_phone.children.length != 0){
            alert_phone.removeChild(alert_phone.firstChild);
        }
    }

    if(size != 11){
        const temps = document.createElement('div');
        temps.innerText = 'please add more number. EX: 333-333-3333'
        temps.classList.add("temps");
        alert_phone.appendChild(temps);
    }
 


}

function biovalidation(){

    let size = bio.value.length;
    let char = bio.value;

    
    if(alert_bio.children.length != 0){
        while(alert_bio.children.length != 0){
            alert_bio.removeChild(alert_bio.firstChild);
        }
    }

    if(size >=8 && size <= 50){
     
    }else{
        const temps = document.createElement('div');
        temps.innerText = 'we need at least 8 - 50 words. Give us your experience';
        temps.classList.add("temps");
        alert_bio.appendChild(temps);
    }
}

function finalvalidation(){
    fnamevalidation();
    lnamevalidation();
    emailvalidation();
    passwordvalidation();
    telephonevalidation();
    biovalidation();
}

submit.addEventListener('click', finalvalidation);