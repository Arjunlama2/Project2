


const getTime = () => {
    let date = new Date()
    let newDate = {
        day: date.getDay(),
        month: date.getMonth(),
        date: date.getDate(),
        year: date.getFullYear(),
        time: date.toLocaleTimeString()

    }

    displayDate(newDate)
}




function displayDate(newDate) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    document.getElementById("Day").innerText = days[newDate.day]
    document.getElementById("Month").innerText = month[newDate.month]
    document.getElementById("Date").innerText = newDate.date
    document.getElementById("Year").innerText = newDate.year
    document.getElementById("time").innerText = newDate.time


}


getTime()

setInterval(() => {
    getTime()
}, 1000)
// task 


// let persons = [
//     {
//         first_name: "john",
//         last_name: "Doe",
//         age: 10
//     },
//     {
//         first_name: "Rajesh",
//         last_name: "Hamal",
//         age: 20
//     },
//     {
//         first_name: "John",
//         last_name: "Wick",
//         age: 30
//     },
// ]

/* 

output should be as follows 
    name is john doe and age is 10.
    name is rajesh hamal and age is 20.
    name is john wick  and age is 30.
*/






// task 3

let students = [
    {
        roll: 1,
        courses: ["Web", "Mobile"]
    },
    {
        roll: 2,
        courses: ["Machine Learning", "Mobile"]  // change mobile to Artificial intelligence via code
    }
]



// task 4


let persons = [
    { "age": 28, "email": "elena.smith@example.com", "name": "Elena Smith", "city": "New York", "country": "USA" },
    { "age": 35, "email": "david.jones@example.com", "name": "David Jones", "city": "London", "country": "UK" },
    { "age": 22, "email": "maria.garcia@example.com", "name": "Maria Garcia", "city": "Madrid", "country": "Spain" },
    { "age": 41, "email": "robert.brown@example.com", "name": "Robert Brown", "city": "Paris", "country": "France" },
    { "age": 29, "email": "jennifer.davis@example.com", "name": "Jennifer Davis", "city": "Berlin", "country": "Germany" },
    { "age": 33, "email": "michael.wilson@example.com", "name": "Michael Wilson", "city": "Rome", "country": "Italy" },
    { "age": 26, "email": "linda.anderson@example.com", "name": "Linda Anderson", "city": "Tokyo", "country": "Japan" },
    { "age": 38, "email": "james.thomas@example.com", "name": "James Thomas", "city": "Beijing", "country": "China" },
    { "age": 24, "email": "susan.jackson@example.com", "name": "Susan Jackson", "city": "Moscow", "country": "Russia" },
    { "age": 45, "email": "charles.white@example.com", "name": "Charles White", "city": "Mumbai", "country": "India" },
    { "age": 31, "email": "margaret.harris@example.com", "name": "Margaret Harris", "city": "Sydney", "country": "Australia" },
    { "age": 27, "email": "william.martin@example.com", "name": "William Martin", "city": "Toronto", "country": "Canada" },
    { "age": 36, "email": "dorothy.thompson@example.com", "name": "Dorothy Thompson", "city": "Sao Paulo", "country": "Brazil" },
    { "age": 23, "email": "richard.garner@example.com", "name": "Richard Garner", "city": "Mexico City", "country": "Mexico" },
    { "age": 40, "email": "betty.clark@example.com", "name": "Betty Clark", "city": "Johannesburg", "country": "South Africa" },
    { "age": 30, "email": "donald.lewis@example.com", "name": "Donald Lewis", "city": "Buenos Aires", "country": "Argentina" },
    { "age": 25, "email": "ashley.robinson@example.com", "name": "Ashley Robinson", "city": "Dubai", "country": "UAE" },
    { "age": 39, "email": "paul.walker@example.com", "name": "Paul Walker", "city": "Amsterdam", "country": "Netherlands" },
    { "age": 34, "email": "helen.perez@example.com", "name": "Helen Perez", "city": "Stockholm", "country": "Sweden" },
    { "age": 42, "email": "mark.hall@example.com", "name": "Mark Hall", "city": "Oslo", "country": "Norway" },
    { "age": 21, "email": "deborah.young@example.com", "name": "Deborah Young", "city": "Helsinki", "country": "Finland" },
    { "age": 46, "email": "steven.allen@example.com", "name": "Steven Allen", "city": "Copenhagen", "country": "Denmark" },
    { "age": 37, "email": "mildred.king@example.com", "name": "Mildred King", "city": "Dublin", "country": "Ireland" },
    { "age": 20, "email": "edward.wright@example.com", "name": "Edward Wright", "city": "Vienna", "country": "Austria" },
    { "age": 43, "email": "donna.scott@example.com", "name": "Donna Scott", "city": "Zurich", "country": "Switzerland" },
    { "age": 32, "email": "brian.green@example.com", "name": "Brian Green", "city": "Brussels", "country": "Belgium" },
    { "age": 47, "email": "angela.adams@example.com", "name": "Angela Adams", "city": "Prague", "country": "Czech Republic" },
    { "age": 28, "email": "kevin.baker@example.com", "name": "Kevin Baker", "city": "Budapest", "country": "Hungary" },
    { "age": 35, "email": "ashley.nelson@example.com", "name": "Ashley Nelson", "city": "Warsaw", "country": "Poland" },
    { "age": 22, "email": "joshua.carter@example.com", "name": "Joshua Carter", "city": "Bucharest", "country": "Romania" },
    { "age": 41, "email": "nicole.phillips@example.com", "name": "Nicole Phillips", "city": "Sofia", "country": "Bulgaria" },
    { "age": 29, "email": "patrick.mitchell@example.com", "name": "Patrick Mitchell", "city": "Athens", "country": "Greece" },
    { "age": 33, "email": "katherine.perez@example.com", "name": "Katherine Perez", "city": "Lisbon", "country": "Portugal" },
    { "age": 26, "email": "anthony.roberts@example.com", "name": "Anthony Roberts", "city": "Ankara", "country": "Turkey" },
    { "age": 38, "email": "elizabeth.turner@example.com", "name": "Elizabeth Turner", "city": "Cairo", "country": "Egypt" },
    { "age": 24, "email": "ryan.reed@example.com", "name": "Ryan Reed", "city": "Cape Town", "country": "South Africa" },
    { "age": 45, "email": "jacqueline.cook@example.com", "name": "Jacqueline Cook", "city": "Nairobi", "country": "Kenya" },
    { "age": 31, "email": "matthew.morgan@example.com", "name": "Matthew Morgan", "city": "Lagos", "country": "Nigeria" },
    { "age": 27, "email": "kayla.bell@example.com", "name": "Kayla Bell", "city": "Addis Ababa", "country": "Ethiopia" },
    { "age": 36, "email": "justin.murphy@example.com", "name": "Justin Murphy", "city": "Algiers", "country": "Algeria" },
    { "age": 23, "email": "karen.bailey@example.com", "name": "Karen Bailey", "city": "Rabat", "country": "Morocco" },
    { "age": 40, "email": "eric.rivera@example.com", "name": "Eric Rivera", "city": "Tunis", "country": "Sudan" },
    { "age": 30, "email": "melissa.cooper@example.com", "name": "Melissa Cooper", "city": "Khartoum", "country": "Sudan" },
    { "age": 25, "email": "brian.ward@example.com", "name": "Brian Ward", "city": "Dakar", "country": "Senegal" },
    { "age": 39, "email": "jessica.peterson@example.com", "name": "Jessica Peterson", "city": "Abidjan", "country": "Ghana" },
    { "age": 34, "email": "timothy.cox@example.com", "name": "Timothy Cox", "city": "Accra", "country": "Ghana" },]



//create function that filters persons whose age is less than 35\




const filterPersonByAge = (persons, targetAge) => {
    let newArray = persons.filter((el) => {
        return el.age <= targetAge
    })
    console.log(newArray)

    return newArray

}



let filteredData = filterPersonByAge(persons, 25)

console.log("this is filetered data", filteredData)




// filter persons whose country is same





// // console.log("same countery filtered",newPersons)

// let newData = []


// for (i = 0; i <= persons.length-1; i++) {

//     for (j = 0; j <= persons.length-1; j++) {
   
//         if (!i==j && persons[i].country === persons[j].country) {
//             newData.push(persons[i])
//             break
//         }

//     }



// }


// console.log(newData)





let number=[2,4,5,9]



number.forEach((el)=>{
console.log( el*2)
})



