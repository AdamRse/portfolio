let videoBg = document.querySelector("#videoBg");
let planetMars = document.querySelector("#planetMars");
let MarsParallaxLine1 = document.querySelector(".line1");



let MarsParallaxLine1Width = 200;
let MarsParallaxLine1ScrollMin = MarsParallaxLine1.scrollHeight;
let planetMarsDefaultHeight = planetMars.height;
let MarsParallaxLine1ScrollMax = MarsParallaxLine1ScrollMin+window.innerHeight;
let waitTyping = 80;

MarsParallaxLine1.okoui=77;
console.log(MarsParallaxLine1.okoui)


console.log(MarsParallaxLine1.height);

videoBg.defaultPlaybackRate = 1;
videoBg.currentTime = 900;
//videoBg.load();
//videoBg.play();
videoBg.pause();

function loaded(){
    setTimeout(() => {
        planetMars.style.filter = "none";
        videoBg.style.filter = "none";
    }, 1200);
}

let typings = document.querySelectorAll(".typing");
typings.forEach(nd => {
    let parent = nd.parentNode;
    if(nd.innerHTML){
        let waitInit = (nd.dataset.wait) ? nd.dataset.wait : 0;
        setTimeout(() => {
            typingOneLetter(nd, parent);
        }, waitInit);
    }
});

function typingOneLetter(elemChild, elemParent){
    if(elemParent.innerHTML.slice(-1) == "_")
        elemParent.innerHTML = elemParent.innerHTML.slice(0, -1);
    if(elemChild.innerHTML[0]){

        elemParent.innerHTML += elemChild.innerHTML[0]+"_";
        elemChild.innerHTML = elemChild.innerHTML.slice(1);
        setTimeout(() => {
            typingOneLetter(elemChild, elemParent)
        }, waitTyping);
    }
}

document.addEventListener("scroll", (event) => {
    let scrollY = window.scrollY;
    if(scrollY<=planetMarsDefaultHeight){
        let newHeight = planetMarsDefaultHeight - scrollY*2;
        planetMars.style.height = (newHeight>1) ? newHeight+"px" : 1+"px";
        planetMars.style.marginLeft = "-"+scrollY+"px";
    }
    if(scrollY>=MarsParallaxLine1ScrollMin && scrollY<=MarsParallaxLine1ScrollMax){
        let newMargin = (MarsParallaxLine1ScrollMin-scrollY)/100;
        let newSize = MarsParallaxLine1Width+(MarsParallaxLine1ScrollMin-scrollY)/10;
        if(newMargin<-10)
            newMargin=-10;
        if(newSize<110)
            newSize=110;

        MarsParallaxLine1.style.marginLeft = newMargin+"%";
        MarsParallaxLine1.style.width = newSize+"%";
    }
});










// let cpt = 1000000;
// let t2=window.performance.now();
// for(let i = 0; i<cpt; i++){
//     let x3=MarsParallaxLine1.scrollHeight-planetMars.height;
// }
// let perf2=window.performance.now()-t2;

// let t1 = window.performance.now();
// MarsParallaxLine1.x2 = planetMars.height;
// MarsParallaxLine1.x1 = MarsParallaxLine1.scrollHeight;
// for(let i = 0; i<cpt; i++){//Préférer cette méthode en externalisant les fariables si possible
//     let x3=MarsParallaxLine1.x1-MarsParallaxLine1.x2;
// }
// let perf1=window.performance.now()-t1;
// console.log("perf 1 = ",perf1, "perf 2 = ",perf2)