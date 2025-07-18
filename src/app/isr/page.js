import { getData } from "../../../library/getData";

export default async function ISR() {

  const post = await getData("http://localhost:8000/posts", {
    next : {
        revalidate: 3.
    }
  });

  const comment = await getData("http://localhost:8000/comments", {
    next : {
        revalidate: 3.
    }
  })

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-3xl font-extrabold">Static page</h3>

      <p>
        Work on ISR       
      </p>


      <div className="basic-data-fetch">
        <ul>
            {post.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))} 

            {comment.map((c) => (
                <li key={c.id}>{c.text}</li>
            )
            )}
        </ul>
      </div>
    </div>
  );
}
