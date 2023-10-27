
let arr=[1,2,3,4,5];


let itreat=(arr,ans)=>{
    ans(arr);
}
itreat(arr,ans=>{
    arr.forEach(e=>{
        document.write(`${e}<br>`)
    })
})