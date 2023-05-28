var fi=1;
const sleepNow = (delay)=> new Promise((resolve)=>setTimeout(resolve,delay))
async function newel(urll1){
    // console.log(urll1)
    let a1=urll1.substr(1,urll1.length-2)
    console.log(a1)
    let newa=a1.split(',')
    console.log(newa)
    // for(let i=0;i<newa.length;++i)
    // {
    //     setTimeout(()=>console.log(i),1000*i)
    // }
    async function repeat(){
        for(let i=0;i<newa.length;++i){
            await sleepNow(2000)
            twoo(newa[i])
            // console.log(`Hello ${newa[i]}`)
        }
    }
    repeat()
    // twoo(newa[0])
    // twoo(newa[1])
    // const parr=document.getElementById("d1");
    // // console.log(parr.innerHTML)
    // const el=document.createElement('div');
    // el.setAttribute('id',fi);
    // ++fi;
    // parr.appendChild(el);
    // let urll=`https://api.jikan.moe/v4/anime/${newa[0]}/full`
    // // let urll="https://api.jikan.moe/v4/anime/21/full"
    // const imgg=document.createElement("img");
    // const inel=document.getElementById(fi-1);
    // inel.setAttribute('class','dclass')
    // let content=await getapiimage(urll)
    // console.log(content)
    // imgg.setAttribute('src',content)
    // imgg.setAttribute('height','250px')//15.625rem
    // imgg.setAttribute('width','180px')//11.25rem
    // inel.appendChild(imgg);
    // const cel=document.createElement('p');
    // cel.setAttribute('class','tclass')
    // let content2=await getname(urll)
    // const textt=await document.createTextNode(content2);
    // cel.appendChild(textt)
    // inel.appendChild(cel);


    // alert(parr);
}
async function twoo(newa){
    const parr=document.getElementById("d1");
    // console.log(parr.innerHTML)
    const el=document.createElement('div');
    el.setAttribute('id',fi);
    ++fi;
    parr.appendChild(el);
    let urll=`https://api.jikan.moe/v4/anime/${newa}/full`
    // let urll="https://api.jikan.moe/v4/anime/21/full"
    const imgg=document.createElement("img");
    const inel=document.getElementById(fi-1);
    inel.setAttribute('class','dclass')
    let content=await getapiimage(urll)
    console.log(content)
    imgg.setAttribute('src',content)
    imgg.setAttribute('border-radius','8px')
    imgg.setAttribute('height','250px')//15.625rem
    imgg.setAttribute('width','180px')//11.25rem
    inel.appendChild(imgg);
    const cel=document.createElement('p');
    cel.setAttribute('class','tclass')
    let content2=await getname(urll)
    const textt=await document.createTextNode(content2);
    cel.appendChild(textt)
    inel.appendChild(cel);
}
async function getapiimage(url){
    const response=await fetch(url)
    
    var data=await response.json()
    // console.log(data)
    
    let tbd=await data['data']['images']['jpg']['image_url'];
    // console.log(typeof(tbd))
    return tbd
}
// const bt=document.getElementById('todo');
// bt.addEventListener('keypress',function(event){
//     if(event.key=='Enter'){
//         document.getElementById('b2').click();
//     }
// })

async function getname(url){
    const response=await fetch(url);

    var data=await response.json();
    let tbd=await data['data']['title'];
    await console.log(tbd)
    console.log(data['data']['url'])
    return tbd
}