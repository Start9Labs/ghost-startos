import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'ghost',
  title: 'Ghost',
  license: 'MIT',
  wrapperRepo: 'https://github.com/Start9Labs/ghost-startos',
  upstreamRepo: 'https://github.com/TryGhost/ghost',
  supportSite: 'https://ghost.org/help/',
  marketingSite: 'https://ghost.org/',
  donationUrl: 'https://github.com/sponsors/TryGhost/',
  description: {
    short: 'A self-hosted blogging platform',
    long: 'Ghost is a free and open source blogging platform written in JavaScript and distributed under the MIT License, designed to simplify the process of online publishing for individual bloggers as well as online publications.',
  },
  assets: [],
  volumes: ['main'],
  images: {
    ghost: {
      source: {
        dockerBuild: {},
      },
    },
  },
  hardwareRequirements: {},
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
