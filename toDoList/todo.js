const box = document.querySelector(".wrapper");
const txt = document.querySelector(".txt");
const add_btn = document.querySelector(".btn1");



function adddiv(){
    let k = txt.value;
    
    const neww = document.createElement("div");
    const texxt = document.createElement("div");
    neww.style.position = "relative";
    neww.classList.add("box_model");
    texxt.classList.add("text_model");
    const checked1 = document.createElement("button"); //done
    const checked2 = document.createElement("button"); //removed
    texxt.innerText = k;
    

    checked1.classList.add("new_btn1");
    checked2.classList.add("new_btn2");
    checked1.innerText = "done";
    checked2.innerText = "remove ";
    
    neww.appendChild(texxt);
    neww.appendChild(checked1);
    neww.appendChild(checked2);
    box.appendChild(neww);

    txt.value="";

    function tickk(){
        // checked1.innerText = "tick";
        texxt.style.textDecoration = "line-through";
        
    }
    
    function rem(){
        const killer = neww.remove();
    }

    checked1.addEventListener('click', tickk);
    checked2.addEventListener('click', rem);
}



add_btn.addEventListener('click', adddiv);
