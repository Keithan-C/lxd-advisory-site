import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <Link href="/learning">Learning</Link>
      <Link href="/digital-solutions">Digital Solutions</Link>
      <Link href="/postcheck">PostCheck</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/contact" className="button">Let&apos;s talk →</Link>
    </nav>
  );
}
