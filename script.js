var container=document.createElement("div");
container.setAttribute("class","container");
container.style.backgroundColor="grey";
container.style.maxHeight="auto"
container.style.maxWidth="auto"
container.style.padding="50px"
container.style.border="5px solid black"
container.style.borderRadius="20px "

var row=document.createElement("div");
row.classList.add("row","m-2");
container.append(row);
var res=fetch("https://www.anapioficeandfire.com/api/books")
res.then((data)=>data.json()).then((value)=>foo(value));


function foo(value){
    for(var i=0;i<value.length;i++){
        row.innerHTML+=`
 <div class="col-md-6">

   <div class="card border-primary mb-3" >

    <div class="card-body text-primary">

      <div class="card-name">
        <h1>${value[i].name}</h1>
        <p class="name">Author name:${value[i].authors}</p>
        <p class="isbn">isbn:${value[i].isbn}</p>
        <p class="publisher">publisher:${value[i].publisher}</p>        
        <p class="country">country:${value[i].country}</p>
        <p class="url" style="color:red";>url:${value[i].url}</p>
        <p class="mediatype">mediatype:${value[i].mediatype}</p>
        <p class="released"style="color:green";>Released on:${value[i].released}</p>
      
        <div class="characters">
        <h5>Characters:</h5>
        <p class="characters">${value[i].characters[0]}</p>
        <p class="characters">${value[i].characters[1]}</p>
        <p class="characters">${value[i].characters[2]}</p>
        <p class="characters">${value[i].characters[3]}</p>
        <p class="characters">${value[i].characters[4]}</p>
        </div>
      </div>
    </div>
  </div>
</div>`;

      document.body.append(container );
    }
}




 