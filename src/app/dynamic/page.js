import { cache } from "react";
import { getData } from "../../../library/getData";


export default async function Dynamic() {

    const post = await getData("http://localhost:8000/posts", {
        // cache: "force-cache"  -> ata by default take 
        cache: "no-store"
    })

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-3xl font-extrabold">Static page</h3>

      <p>
        Work on Dynamic
        
      </p>


      <div className="basic-data-fetch">
        <ul>
            {post.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))} 
        </ul>
      </div>
    </div>
  );
}
