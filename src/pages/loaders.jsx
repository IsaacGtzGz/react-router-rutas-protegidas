// Loaders para las páginas
export const loaderPost = async ({ params }) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await data.json();
    return { post };
};