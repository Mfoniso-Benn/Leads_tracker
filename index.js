import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js" 
import { getDatabase, 
        ref,
        push
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js" 

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-8d0d0-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const  referenceInDB = ref(database, "leads")


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {

})

inputBtn.addEventListener("click", function() {
    push(referenceInDB,  inputEl.value)
    inputEl.value = ""
})