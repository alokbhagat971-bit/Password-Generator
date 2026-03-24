const Input=document.getElementById("input-pass");
let limit=Input.value;
const val=document.getElementById("pass-length");
const output=document.getElementById("pass-output");
let str="";
function update_length(){
    const input=document.getElementById("input-pass");
    val.innerHTML=input.value;
    limit=input.value;
}
function gen_pass(){
    for(let i=1;i<=limit;i++){
        let Index=Math.floor(Math.random()*126);
        if(Index<33){
            Index+=33;
        }
        let char=String.fromCharCode(Index);
        str+=char;
    }
    output.value=str;
    str="";
}
