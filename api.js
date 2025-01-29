// let obj = {
//     name : "abhi" ,
//     id : 1,
//     designation : "developer"
//  }
//  console.log(obj);
 
//  let obj1 = JSON.stringify(obj)
//  console.log(obj1);
 
//  let obj2 = JSON.parse(obj1)
//  console.log(obj2);

//3-ways
//1)fetch() method
//2) ajax\
//Axios

// window.fetch("data.json")
// .then((data) => data.json())
// .then((res) => {
//     console.log(res)
//     // console.log(res[0])
//     // console.log(res[1])
//     res.map((x) => {
//         console.log(x)
//         console.log(x.name)
//         console.log(x.id)

//         document.body.innerHTML  += <h1>${x.name}</h1>
//         document.body.innerHTML  += <h2>${x.id}</h2>
//         document.body.innerHTML  += <h2>${x.designation}</h2>

//     
//     })
// })

let btn = document.getElementById("btn")
console.log(btn);

btn.onclick = () => {
    let search = document.getElementById("search").value 
    console.log(search);
    let page = 60

    window.fetch(`https://pixabay.com/api/?key=48474890-3e93eaae567469fe0902fd609&q=${search}&image_type=photo&pretty=true&per_page=${page}`)
    .then((data) => data.json())
    .then((res) => {
        console.log(res);
        console.log(res.hits);
        res.hits.map((x) => {
            console.log(x)

            let demo = document.getElementById("demo")
            console.log(demo)
            demo.innerHTML +=`<img src = ${x.previewURL} />`
        })
    })
}


