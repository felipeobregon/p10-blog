type Props = {
    params: { post: string }
}

async function getPost(id: string) {
    const res = await fetch(`http://localhost:5000/post/${id}`, { cache: 'no-cache' });


    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.text();
}

export default async function Post(props: Props) {
    const data = await getPost(props.params.post);
    
    return (
        <p>{data}</p>
    )
}
