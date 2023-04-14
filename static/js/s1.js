var fi=1;
async function newel(urll){
    const parr=document.getElementById("dd");
    console.log(parr.innerHTML)
    const el=document.createElement('div');
    el.setAttribute('id',fi);
    ++fi;
    parr.appendChild(el);
    // let urll="https://api.jikan.moe/v4/anime/21/full"
    const imgg=document.createElement("img");
    const inel=document.getElementById(fi-1);
    inel.setAttribute('class','dclass')
    let content=await getapid(urll)
    console.log(content)
    imgg.setAttribute('src',content)
    imgg.setAttribute('height','250px')//15.625rem
    imgg.setAttribute('width','180px')//11.25rem
    inel.appendChild(imgg);
    const cel=document.createElement('p');
    cel.setAttribute('class','tclass')
    let content2=await getname(urll)
    const textt=await document.createTextNode(content2);
    cel.appendChild(textt)
    inel.appendChild(cel);


    // alert(parr);
}
async function getapid(url){
    const response=await fetch(url)
    
    var data=await response.json()
    // console.log(data)
    
    let tbd=await data['data']['images']['jpg']['image_url'];
    // console.log(typeof(tbd))
    return tbd
}
// const bt=document.getElementById('i1');
// bt.addEventListener('keypress',function(event){
//     if(event.key=='Enter'){
//         document.getElementById('b2').click();
//     }
// })

async function getname(url){
    const response=await fetch(url);

    var data=await response.json();
    let tbd=await data['data']['title_english'];
    console.log(data['data']['url'])
    return tbd
}
