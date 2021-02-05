let maximg = 3; // le nombres d'images,  
let imgName = "img"; // +numéro pour la construction; 


const op = document.querySelectorAll(".op"); // les 2 div < et > 

function setNewImg(index){
    let img = document.querySelector("img"); 
    //let src = img.getAttribute("src"); 
    let newLink = `./public/img/img${index}.png`;
    img.setAttribute("src",newLink);
}

op.forEach((operator) =>{
    operator.addEventListener("click", () =>{

        let actuAlimg = document.querySelector("img"); 
        let actualidimg = actuAlimg.getAttribute('src')
        let regex = /([1-9][0-9]*)/g; // /img+ 
        let curr = actualidimg.match(regex);
        let current = curr[0]; 

        const value = operator.getAttribute('id');
        switch(value){
            case "+":
                next = parseInt(current)+1; 
                if(next > maximg){
                    current = 1;
                    setNewImg(current);
                }else{
                    setNewImg(next);
                }
            break;
            case "-":                
                prev = parseInt(current-1);
                if(prev < 1){
                    current = 3;
                    setNewImg(current);
                }else{
                    setNewImg(prev);
                }
            break;
        }
    });
});