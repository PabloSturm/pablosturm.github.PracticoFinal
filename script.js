var subMenuMD=document.getElementById("btnMujerD");
var subMenuMC=document.getElementById("btnMujerC");
var subMenuHD=document.getElementById("btnHombreD");
var subMenuHC=document.getElementById("btnHombreC");
var subMenuCD=document.getElementById("btnColegialD");
var subMenuCC=document.getElementById("btnColegialC");

subMenuMD.addEventListener("click",()=>{
    document.getElementById("subMenuMujer").style.opacity="1";
    document.getElementById("subMenuMujer").style.visibility="visible";
    document.getElementById("btnMujerD").style.visibility="hidden";
    document.getElementById("btnMujerC").style.visibility="visible";
})

subMenuMC.addEventListener("click",()=>{
    document.getElementById("subMenuMujer").style.opacity="0";
    document.getElementById("subMenuMujer").style.visibility="hidden";
    document.getElementById("btnMujerC").style.visibility="hidden";
    document.getElementById("btnMujerD").style.visibility="visible";
})

subMenuHD.addEventListener("click",()=>{
    document.getElementById("subMenuHombre").style.opacity="1";
    document.getElementById("subMenuHombre").style.visibility="visible";
    document.getElementById("btnHombreD").style.visibility="hidden";
    document.getElementById("btnHombreC").style.visibility="visible";
})

subMenuHC.addEventListener("click",()=>{
    document.getElementById("subMenuHombre").style.opacity="0";
    document.getElementById("subMenuHombre").style.visibility="hidden";
    document.getElementById("btnHombreC").style.visibility="hidden";
    document.getElementById("btnHombreD").style.visibility="visible";
})

subMenuCD.addEventListener("click",()=>{
    document.getElementById("subMenuColegial").style.opacity="1";
    document.getElementById("subMenuColegial").style.visibility="visible";
    document.getElementById("btnColegialD").style.visibility="hidden";
    document.getElementById("btnColegialC").style.visibility="visible";
})

subMenuCC.addEventListener("click",()=>{
    document.getElementById("subMenuColegial").style.opacity="0";
    document.getElementById("subMenuColegial").style.visibility="hidden";
    document.getElementById("btnColegialC").style.visibility="hidden";
    document.getElementById("btnColegialD").style.visibility="visible";
})
