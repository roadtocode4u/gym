export default function getUser(){
const  currentUser = localStorage.getItem('currentUser')
return currentUser
}