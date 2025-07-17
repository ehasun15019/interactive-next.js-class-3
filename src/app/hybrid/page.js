import { getData } from "../../../library/getData";

export default async function Hybrid() {

  const post = await getData("http://localhost:8000/posts");

//   const post5 = await getData("http://localhost:8000/posts/5", {
//     cache: "no-store"
//   })

  const comment = await getData("http://localhost:8000/comments", {
    cache: "no-store"
  });

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-3xl font-extrabold">Static page</h3>

      <p>
        Work on Hybrid
      </p>


      <div className="basic-data-fetch">
        <ul>
            {post.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))} 
        </ul>
      </div>


      <div className="mt-7">
        <ul>
            <li><h3>This is Dynamic</h3></li>

            {/* <li>id: {post5.id}</li>
            <li>title: {post5.title}</li>
           <li>body: {post5.body}</li> */}

            {comment.map((c) => (
                <li key={c.id}>
                    <p>Comment id: {c.id}</p>
                    <p>Comment text: {c.text}</p>
                    <p>Comment postId: {c.postId}</p>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
