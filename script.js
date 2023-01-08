const apiUrl = `https://finalspaceapi.com/api/v0/character/`;
console.log(apiUrl);
getapi(apiUrl);

const cnt = document.getElementsByClassName('container');
console.log(cnt[0]);

const display=(data)=>{
    data.forEach((index,val) => {
        console.log(index,val);
    
    cnt[0].innerHTML += `
    <div class="cards">
    <img src=${data[val].img_url} alt="">
    <h4>Id: ${data[val].id}</h4>
    <h4>Name: ${data[val].name}</h4>
    <h4>Status: ${data[val].status}</h4>
    <h4>Species: ${data[val].species}</h4>
    <h4>Gender: ${data[val].gender}</h4>
    <h4>Origin: ${data[val].origin}</h4>
    
</div>
    `
});
}
async function getapi(url){
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    display(data);
}

