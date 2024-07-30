//get和set練習
const light={
    color:"red",
    get showColor(){
        return this.color;
    },
    set showColor(value){
        this.color = value;
    }
}

console.log(light.showColor);

light.showColor= "green";


//async和await練習
const funcA =(){
    return new Promise((resolve,reject)=>{
        window.setTimeout(()=>{
            resolve("resolve A");
        },(Math.random()+1)*1000);
    });
}

async function asyncCall(){
    console.log("calling");
    const result = await funcA();
    console.log(result);
}