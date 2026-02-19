import React from 'react';
import Link from 'next/link';

const links = [
  { label: 'GitHub', href: 'https://github.com/ivishal-g' },
  { label: 'Twitter', href: 'https://x.com/Vishal___Kwad' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vishal-gaikwad-3240b9300/' },
  { label: 'Email', href: 'mailto:vishal.gaikwad@example.com' },
  { label: 'RSS', href: '/feed.xml' },
];

function GetInTouch() {
  return (
    <footer>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-[var(--foreground)]/40 hover:text-[var(--foreground)] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default GetInTouch;
