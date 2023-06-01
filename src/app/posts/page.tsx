import Link from 'next/link';

async function getData() {
  const res = await fetch('http://localhost:5000', { cache: 'no-cache' });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Post() {
  let data: string[] = []
  try {
    data = await getData();

  } catch {

  }

  return (
    <>
      {data.length === 0 && <div>Failed to connect to server</div>}
      <ul>
        {data.map((post: string, i: number) => {
          return (
            <li key={i}>
              <Link href={`/post/${post}`}>{post}</Link>
            </li>
          )
        })
        }
      </ul>
    </>

  )
}