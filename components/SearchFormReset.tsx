'use client';

import { XIcon } from 'lucide-react';
import Link from 'next/link';

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;

    if (!form) return;

    form.reset();
  };

  return (
    <button type="reset" className="search-btn" onClick={reset}>
      <Link href={'/'} className="search-btn text-white">
        <XIcon className="size-5" />
      </Link>
    </button>
  );
};

export default SearchFormReset;
