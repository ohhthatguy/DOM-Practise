class calculator{
    constructor(current, next){
        this.current = current;
        this.next = next;
        this.oprtr = undefined;
    }

    clear(){
        maindisplay.innerText = '';
        laterdisplay.innerText = '';
        this.oprtr = undefined;
    }

    appendnumber(number){
        if(number == '.' && maindisplay.innerText.includes('.')){
            return 
        }        
        maindisplay.innerText += number;
    }

    updatenumber(){
        this.current = maindisplay.innerText;
        this.next = laterdisplay.innerText
        if(this.current && this.next && this.oprtr !== ''){
            switch(this.oprtr){
                case '+':
                    this.current = parseFloat(this.current) + parseFloat(this.next);
                    break;
                case '-':
                    this.current = parseFloat(this.next) - parseFloat(this.current);
                    break;
                case '*':
                    this.current = parseFloat(this.current) * parseFloat(this.next);
                    break;
                case '/':
                    this.current = parseFloat(this.next) / parseFloat(this.current);
                    break;
            }
            
        }
        this.next='';
        
    }

    getoprtr(oprtr){
        laterdisplay.innerText = this.current;
        this.oprtr = oprtr;
 
    }
 
    equal(){
        laterdisplay.innerText = '';
        this.next = '';
        maindisplay.innerText = this.current;
    }

    del(){
       this.current =  Array.from(this.current).slice(0, Array.from(this.current).length -1 ).toString().split(',').join('');
       maindisplay.innerText = this.current;
    }
}

const number = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".oprtr");
const maindisplay = document.querySelector(".display2"); 
const laterdisplay = document.querySelector(".display1"); 
const allclear = document.querySelector(".ac");
const equal = document.querySelector(".equal");
const del = document.querySelector(".del");


const cal = new calculator(maindisplay.innerText, laterdisplay.innerText);

number.forEach((item) => {
    item.addEventListener('click', function(){
        cal.appendnumber(item.innerText);    
        cal.updatenumber();
    })
})

operator.forEach((op)=>{
    op.addEventListener('click', function(){
        laterdisplay.innerText = maindisplay.innerText;
        maindisplay.innerText = ""; 
      cal.getoprtr(op.innerText);
    })
})

allclear.addEventListener('click', function(){
    cal.clear();
})

equal.addEventListener('click', function(){
    cal.equal();

})

del.addEventListener('click', function(){
    cal.del();
})

