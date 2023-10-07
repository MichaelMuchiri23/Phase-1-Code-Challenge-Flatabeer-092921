// Code here 

function details(){
    fetch('http://localhost:3000/beers')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const h2=document.querySelector('#beer-name')
        const img=document.querySelector('#beer-image')
        const p=document.querySelector('p')
        const ul=document.querySelector('#review-list')
        const ul2=document.querySelector('#beer-list')
        
        

        h2.innerText=data[0].name
        img.src=data[0].image_url
        p.innerText=data[0].description
        ul.innerText=data[0].reviews

        ul2.innerHTML=''
        data.forEach((obj)=>{
            const li=document.createElement('li')
            li.innerText=`${obj.name}`
            ul2.appendChild(li)
        })

        const form=document.querySelector('#review-form')
        form.addEventListener('submit',(event)=>{
            
            event.preventDefault()
            const text=document.querySelector('#review')
            const li2=document.createElement('li')
            li2.innerText=text.value
            ul.appendChild(li2)
        })
    }
    )
}

document.addEventListener("DOMContentLoaded",details)