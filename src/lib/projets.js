import glob from 'fast-glob'

async function importProjet(projetFilename) {
  let { projet } = await import(`../app/projets/${projetFilename}`)

  return {
    slug: projetFilename.replace(/(\/page)?\.mdx$/, ''),
    ...projet,
  }
}

export async function getAllProjets() {
  let projetFilenames = await glob('*/page.mdx', {
    cwd: './src/app/projets',
  })

  let projets = await Promise.all(projetFilenames.map(importProjet))

  return projets.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
