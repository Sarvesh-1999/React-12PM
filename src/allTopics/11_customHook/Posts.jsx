import { useApi } from "./customHook"

const Posts = () => {

let data = useApi("https://dummyjson.com/posts")
console.log(data);
    
  return (
    <div>
        <h1>All Posts</h1>
        {
            data?.posts.map((ele)=>{
                console.log(ele);
                return (
                    <div>
                        <h1>{ele.title}</h1>
                    </div>
                )
            })
        }

    </div>
  )
}

export default Posts