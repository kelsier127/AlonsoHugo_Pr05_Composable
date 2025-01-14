import { ref } from 'vue'

export default function fetchApi(id = "") {
    const posts = ref([])
    
    const url = ref(`https://jsonplaceholder.typicode.com/posts/${id}`)
  
    const leerPosts = async () => {
        const res = await fetch(url.value)
        .then((res) => res.json())
        .then((json) => (posts.value = json))
    }
    
    return { posts, leerPosts }
}