const PostDetails=async({params})=>{
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await post.json();
    const {title, body} = data;
    return(
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
            <div className="max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
                <h1 className="mb-4 text-2xl font-bold text-gray-800">{title}
                    <div className="divider"></div>
                </h1>
                <p className="text-lg text-gray-600">{body}</p>
            </div>
        </div>
    )}
export default PostDetails;