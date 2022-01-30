const moreHenna = document.querySelector('.ocuted-henna');
const moreCilio = document.querySelector('.ocuted-cilio');
function fMoreHenna(btn){
    if(btn.innerText == 'Ver Mais'){
        if(btn.className == "more-henna"){
            moreHenna.style.display = 'flex';
        }else{
            moreCilio.style.display = 'flex';
        }
        btn.innerText = 'Ver Menos';
    }else{
        if(btn.className == "more-henna"){
            moreHenna.style.display = 'none';
        }else{
            moreCilio.style.display = 'none';
        }
        btn.innerText = 'Ver Mais';
    }
}