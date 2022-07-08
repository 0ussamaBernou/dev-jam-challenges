                                            /* randomUser API */
    
/* 
async function fetchApi(){
    try{
        const response = await fetch("https://randomuser.me/api")
        const getData = response => response.json()
        let data = await getData()
        console.log(data)
    }catch(error){
        console.log(`Error: ${error}`)
    }
}
fetchApi() 
*/
/* 
The Card should contain this information : 

    Avatar(user picture) - Full Name - Username - Email - Phone Number - Location
*/
//defining fetchuser function
function fetchUser(){
    fetch("https://randomuser.me/api")
        .then(response => response.json()) // parse response as JSON
        .then(data => {
            console.log(data)
    
            // DATA NEEDED:
            const person = data.results[0]
            const avatar = person.picture.large
            const fullName = `${person.name.title}. ${person.name.first} ${person.name.last}`
            console.log(fullName)
            const username = `<bold>Username:</bold> ${person.login.username}`
            const email = `<bold>Email:</bold> ${person.email}`
            const phone = `<bold>Phone:</bold> ${person.phone}`
            const location = ` <bold>Location:</bold> ${person.location.country}, ${person.location.city}, ${person.location.street.name}, N°${person.location.street.number}`
            const infos = [fullName, username, email, phone, location]
    
            // HTML ELEMENTS
            const dataList = document.querySelector('#data-list')
            const img = document.querySelector('.image')
            // SCRIPT
            img.src = avatar
            let list = ''
            for(let i=0; i<infos.length; i++){
                if(i==0){
                    list += `<li><h1>${infos[i]}</h1></li>`
                }else
                list += `<li>${infos[i]}</li>`
            }
            dataList.innerHTML = list
            
        })
        .catch(error => {
            console.log(`error: ${error}`)
        })
}
// fetchUser function call
fetchUser()

// on click fetch button event listener
const btn = document.querySelector('#fetch-btn')
btn.addEventListener('click', ()=>{
    fetchUser()
})