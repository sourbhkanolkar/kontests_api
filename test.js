let url="https://kontests.net/api/v1/all";
let response= fetch(url);
response.then((v)=>{
    return v.json();
}).then((contests)=>{
    console.log(contests);
    ihtml=''
    for(items in contests){
        console.log(contests[items]);
        ihtml+=`
        <div class="card ml-2 mt-3" style="width: 22rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtDEVfvCtiH9P_365nl--D3yxFzp85Tda1cw&usqp=CAU" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[items].name}</h5>
          <p class="card-text"><a herf=""></a></p>
          <p>start at ${contests[items].start_time}</p>
          <p>end at ${contests[items].end_time}</p>
          <a href="${contests[items].url}" class="btn btn-primary">Visit Contest</a>
        </div>
      </div>
        
        `
    }

    cardcontainer.innerHTML=ihtml;
   
})