
let count=0

const value=document.querySelector('.value');
const btns=document.querySelector(".btn");

btns.forEach(function(btn){
    btn.addEventListner('click', function(e){
       const styles=e.currentTarget.classList;
       console.log(styles)
        if (styles.contains("decrease")){
            count--;
        }
        if (styles.contains("increase")){
            count++;
        }
        if (styles.contains("reset")){
            count=0;
        }
        value.textContent=count;
    });
});

