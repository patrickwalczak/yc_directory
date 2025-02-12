'use client';

const Hello = () => {
  console.log('client component');

  return (
    <div>
      <span className="text-3xl">{'This is a component'}</span>
    </div>
  );
};

export default Hello;
