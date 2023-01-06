const h=document.getElementById('hour')
const m=document.getElementById('minute');
const s=document.getElementById('second');
setInterval(()=>{
    const date=new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();
    rotateh=30*hour+minute/2;
    rotatem=6*minute;
    rotates=6*second;
    h.style.transform=`rotate(${rotateh}deg)`;
    m.style.transform=`rotate(${rotatem}deg)`;
    s.style.transform=`rotate(${rotates}deg)`;

    
},1000)