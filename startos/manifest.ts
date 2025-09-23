import { setupManifest } from '@start9labs/start-sdk'
import { SDKImageInputSpec } from '@start9labs/start-sdk/base/lib/types/ManifestTypes'

const BUILD = process.env.BUILD || ''

const architectures =
  BUILD === 'x86_64' || BUILD === 'aarch64' ? [BUILD] : ['x86_64', 'aarch64']

export const manifest = setupManifest({
  id: 'ghost',
  title: 'Ghost',
  license: 'MIT',
  wrapperRepo: 'https://github.com/Start9Labs/ghost-startos',
  upstreamRepo: 'https://github.com/TryGhost/ghost',
  supportSite: 'https://ghost.org/help/',
  marketingSite: 'https://ghost.org/',
  donationUrl: 'https://github.com/sponsors/TryGhost/',
  docsUrl:
    'https://github.com/Start9Labs/ghost-startos/blob/update/040/docs/README.md',
  description: {
    short: 'A self-hosted blogging platform',
    long: 'Ghost is a free and open source blogging platform written in JavaScript and distributed under the MIT License, designed to simplify the process of online publishing for individual bloggers as well as online publications.',
  },
  volumes: ['main'],
  images: {
    ghost: {
      source: {
        dockerBuild: {},
      },
      arch: architectures
    } as SDKImageInputSpec,
  },
  hardwareRequirements: { arch: architectures },
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
