let data=[];
for (let index = 1; index < 20; index++) {

if(index==3){
data.push("banana")
    }else if(index==5){
        data.push("mango")

}else if(index%5==0){
    data.push("pizzahut")

}
else{
    data.push(index)

}
}
console.log(data)