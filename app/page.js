// pages/hello.js

export default function Hello({ name }) {
  const displayName = name || 'World';

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-2xl font-bold">
        Hello {displayName}
      </div>
    </main>
  );
}