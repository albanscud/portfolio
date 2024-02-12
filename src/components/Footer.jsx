import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/apropos">A propos</NavLink>
                <NavLink href="/certifs">Certifications</NavLink>
                <NavLink href="/projets">Projets</NavLink>
                <NavLink href="/cv">CV</NavLink>
                
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Alban Escudier. Tous droits réservés.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
// a rajouter au footer
 // <NavLink href="/speaking">Speaking</NavLink>
 // 