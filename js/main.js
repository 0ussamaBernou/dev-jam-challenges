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

fetch("https://randomuser.me/api")
    .then(response => response.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        let dataList = document.querySelector('.data')
        let person = data.results[0]
        let avatar = person.picture.large
        let fullName = `${person.name.title}.${person.name.first} ${person.name.last}`
        console.log(fullName)

    })
    .catch(error => {
        console.log(`error: ${error}`)
    })