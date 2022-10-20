export default function getUser(){
const  currentUser = JSON.parse(localStorage.getItem('currentUser')) || null
return currentUser
}
