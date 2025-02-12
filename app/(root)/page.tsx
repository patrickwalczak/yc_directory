export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const albums = await response.json();

  console.log(albums);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">
        {'Home Component page.tsx in the root folder'}
      </h1>
      <ul>
        {albums.map((album: any) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </main>
  );
}
