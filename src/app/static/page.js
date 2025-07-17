import { getData } from "../../../library/getData";


export default async function Static() {

    const post = await getData("http://localhost:8000/posts")

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-3xl font-extrabold">Static page</h3>

      <p>
        Work on Static
        এই Static পেজ এ যখন -npm run build- করি তার পরে যদি কোণ change করি তখন কোণ কিছু page a change hoi na tar mane holo at akta static page . 
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
