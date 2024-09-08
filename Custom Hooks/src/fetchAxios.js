// import axios from "axios"
// //fetch -> Its a function async function
// //axios -> external library : makes it easy to fetch the data easy

// //Normal fetch function using promise chaining 
// // function main() {
// //     fetch("https://jsonplaceholder.typicode.com/todos/1")
// //     .then( response => {
// //         const json =  response.json();
// //         //await response.text()
// //         console.log(json)
// //     })
// // }
// // main()

// //using async await syntax
// async function main1() {
//     const response = await fetch("https://www.postb.in/1725782925436-0963285942561", {
//         method : 'POST'
//     })
//     const text = await response.text()
//     console.log(text)
// }
// main1()

// // using axios library : its a smart library it know the data is in json format
// async function mainAxios(){
//     const response = await axios.get("https://www.postb.in/1725782925436-0963285942561" , {
//         body : {
//             username : "karan",
//             password : "karan@1234"
//         },
//         headers : {
//             Authorization : "Bearer 123"
//         }
//     })
//     console.log(response.data)
// }
// mainAxios()

import axios from "axios"

const axiosTest = async () => {
    const response = await axios({
        url : "https://httpdump.app/dumps/1a9edcae-cc5c-490f-bfda-79abe4dce748?a=12&b=34",
        method : "POST",
        headers : {
            Authorization : "Bearer 123"
        },
        data : {
            username : "Karan Chourasia",
            password : "1234"
        }
    })

    console.log(response.data);
}
axiosTest();
