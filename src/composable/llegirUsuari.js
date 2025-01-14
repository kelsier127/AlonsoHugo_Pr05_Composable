import { ref } from 'vue'

export default function fetchUsersApi(id) {
    const users = ref([])
    
    const url = ref(`https://jsonplaceholder.typicode.com/users/${id}`)
  
    const leerUsers = async () => {
        const res = await fetch(url.value)
        .then((res) => res.json())
        .then((json) => (users.value = json))
    }
    
    return { users, leerUsers }
}