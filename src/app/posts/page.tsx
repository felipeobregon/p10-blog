async function getData() {
  const res = await fetch('http://localhost:5000', { cache: 'no-cache' });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Post() {
  const data = await getData();
  
  return (
    <ul>
      {data.map((post: string, i: number) => {
        return (
          <li key={i}>
            <h2>{post}</h2>
          </li>
        )
      })
      }
    </ul>
  )
}