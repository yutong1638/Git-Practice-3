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