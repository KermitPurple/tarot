let card_name_el = document.querySelector('#card-name');
let rank_el = document.querySelector('#rank');
let suit_el = document.querySelector('#suit');
let fortune_telling_el = document.querySelector('#fortune-telling');
let keywords_el = document.querySelector('#keywords');
let light_el = document.querySelector('#light');
let shadow_el = document.querySelector('#shadow');
fetch('https://tarot-api.com/draw/1')
    .then(res=>res.json())
    .catch(()=>[{"fortune_telling":["A stingy spirit is strangling your enjoyment of life","Loosen up and think of others for once, why don't you?"],"keywords":["charity","sharing","sacrifice","cooperation","fairness"],"meanings":{"light":["Donating your time and talents to others","Taking satisfaction in knowing how your efforts will aid others","Creating a \"win-win\" scenario","Giving even when you know repayment is not possible","Being motivated to do a good deed"],"shadow":["Linking your sense of self-worth to the appraisals of others","Striving to appear more needy than you really are","Taking undeserved or unmerited charity","Bragging about your charitable efforts","Profiteering in times of distress","Refusing to share a burden"]},"name":"six of cups","rank":6,"suit":"cups"}])
    .then(res=>{
        console.log(res[0]);
        set_card(res[0]);
    });

function set_card(data){
    card_name_el.innerHTML = data.name;
    rank_el.innerHTML = data.rank;
    suit_el.innerHTML = data.suit;
    for(const item of data.fortune_telling){
        let li = document.createElement('li');
        li.innerHTML = item;
        fortune_telling_el.appendChild(li);
    }
    for(const item of data.keywords){
        let li = document.createElement('li');
        li.innerHTML = item;
        keywords_el.appendChild(li);
    }
    for(const item of data.meanings.light){
        let li = document.createElement('li');
        li.innerHTML = item;
        light_el.appendChild(li);
    }
    for(const item of data.meanings.shadow){
        let li = document.createElement('li');
        li.innerHTML = item;
        shadow_el.appendChild(li);
    }
}

set_card();
