import { setupManifest } from '@start9labs/start-sdk'
import { short, long } from './i18n'

export const manifest = setupManifest({
  id: 'ghost',
  title: 'Ghost',
  license: 'MIT',
  wrapperRepo: 'https://github.com/Start9Labs/ghost-startos',
  upstreamRepo: 'https://github.com/TryGhost/ghost',
  supportSite: 'https://ghost.org/help/',
  marketingSite: 'https://ghost.org/',
  donationUrl: 'https://github.com/sponsors/TryGhost/',
  docsUrl: 'https://ghost.org/docs/',
  description: { short, long },
  volumes: ['content', 'config', 'mysql', 'startos'],
  images: {
    ghost: {
      source: {
        dockerTag: 'ghost:6.14.0-alpine',
      },
      arch: ['x86_64', 'aarch64'],
    },
    mysql: {
      source: {
        dockerTag: 'mysql:lts',
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
