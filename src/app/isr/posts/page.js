import React from 'react'
import { getData } from '../../../../library/getData';
import Link from 'next/link';

export default async function ISR() {

    // time based revalidate
    const post = await getData("http://localhost:8000/posts", {
        next : {
            revalidate: 3.
        }
    });

    // time based revalidate
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
                <Link href={`/isr/posts/${post.id}`} key={post.id}>
                    <li>{post.title}</li>
                </Link>
            ))} 


            {comment.map((c) => (
                <li key={c.id}>{c.text}</li>
            ))}
        </ul>
      </div>
    </div>

  )
}
