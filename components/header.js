import Link from "next/link";

export default function Header() {
  return (
    <div>
        <ul>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/contact/jakarta">Jakarta</Link></li>
        </ul>
        <a href="/contact"></a>
    </div>
  )
}
