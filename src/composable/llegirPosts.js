import { ref } from 'vue'

export default function fetchApi(id = "") {
    const posts = ref([])
    
    const url = ref(`https://jsonplaceholder.typicode.com/posts/${id}`)
  
    const leerPosts = async () => {
        const res = await fetch(url.value)
        .then((res) => res.json())
        .then((json) => (posts.value = json))
    }

    const retornarNombre = async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await res.json()
        return data.name
    }
    
    return { posts, leerPosts, retornarNombre }
}

