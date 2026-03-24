import { setupManifest } from '@start9labs/start-sdk'
import { short, long } from './i18n'

export const manifest = setupManifest({
  id: 'ghost',
  title: 'Ghost',
  license: 'MIT',
  packageRepo:
    'https://github.com/Start9Labs/ghost-startos/tree/update/040',
  upstreamRepo: 'https://github.com/TryGhost/ghost',
  marketingUrl: 'https://ghost.org/',
  donationUrl: 'https://github.com/sponsors/TryGhost/',
  docsUrls: ['https://ghost.org/docs/'],
  description: { short, long },
  volumes: ['content', 'config', 'mysql', 'startos'],
  images: {
    ghost: {
      source: {
        dockerTag: 'ghost:6.22.1-alpine',
      },
      arch: ['x86_64', 'aarch64'],
    },
    mysql: {
      source: {
        dockerTag: 'mysql:8.4.5',
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
