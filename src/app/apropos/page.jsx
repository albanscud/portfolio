import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/armeemoi.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'A propos',
  description:
    'Alban Escudier. Je vis à Paris.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="photo en habit militaire"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Alban Escudier. Je vis à Paris.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            
          {/*   <p>
            La cybersécurité me passionne énormément. J'adore explorer les défis complexes de la protection en ligne, 
            comprendre les menaces et trouver des moyens ingénieux de sécuriser les systèmes. 
            Chaque jour apporte de nouvelles opportunités d'apprentissage et d'adaptation. 
            Contribuer à la défense des données et à la prévention des cyberattaques me motive à poursuivre mes études dans ce domaine passionnant.
            </p> */}
            
            {/* <p>
              J'ai passé cinq ans dans l'armée en tant que parachutiste, 
              une expérience qui m'a profondément marqué et qui m'a enseigné 
              d'importantes leçons sur la collaboration, la discipline et la résilience. 
              Cependant, au cours de cette période, j'ai découvert une passion grandissante 
              pour la cybersécurité, et j'ai pris la décision de réorienter ma carrière dans 
              ce domaine captivant.
            </p>
            <p>
              Ce qui me fascine particulièrement dans le domaine de la 
              cybersécurité, c'est la constante évolution des défis et des menaces, 
              ainsi que la nécessité de rester constamment en alerte pour protéger 
              les systèmes et les données sensibles. J'apprécie la complexité des 
              problèmes auxquels je fais face, ainsi que le sentiment gratifiant de 
              contribuer à la sécurité des individus et des organisations. 
            </p>
            <p>
              Tout comme dans mon parcours militaire, je valorise énormément le travail 
              d'équipe dans la cybersécurité. La collaboration et la communication sont
              essentielles pour anticiper les attaques et élaborer des stratégies efficaces
              de défense. La discipline que j'ai acquise en tant que parachutiste se traduit
              parfaitement dans la rigueur requise pour maintenir des environnements
              numériques sécurisés.
              Je suis convaincu que ma capacité à faire preuve de résilience, 
              acquise lors de mes missions, sera tout aussi utile dans le monde de la cybersécurité.
            </p>
            <p>
              Les incidents de sécurité peuvent survenir à tout moment, et savoir réagir rapidement
              et efficacement est primordial pour limiter les dommages potentiels.
              Je suis enthousiaste à l'idée de me plonger davantage dans le domaine de la cybersécurité,
              de continuer à apprendre et à élargir mes compétences, tout en contribuant à la 
              protection des données et à la prévention des cybermenaces.
            </p> */}
              </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/albanscud" icon={GitHubIcon} className="mt-4">
              Me suivre sur GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/albanescu/" icon={LinkedInIcon} className="mt-4">
              Me suivre sur LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:alban.escudier@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              alban.escudier@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
