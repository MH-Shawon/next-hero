
import Link from "next/link";
import React from "react";

const BLogsPage = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return (
    <div className="grid grid-cols-1 gap-6 m-5 sm:grid-cols-2 lg:grid-cols-3">
      {posts?.map((post) => (
        <div
          key={post.id}
          className="p-6 space-y-4 transition-shadow duration-300 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl"
        >
          <h3 className="text-2xl font-bold text-gray-800">{post.title}</h3>
          <p className="text-gray-600">{post.body}</p>
          <button className="px-4 py-2 mt-4 text-white transition-colors duration-200 bg-blue-500 rounded hover:bg-blue-600">
            <Link href={`/blogs/${post.id}`}>View details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default BLogsPage;
