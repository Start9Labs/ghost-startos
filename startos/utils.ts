import { T, utils } from '@start9labs/start-sdk'
import { sdk } from './sdk'

export const port = 2368

export function getDbPass() {
  return utils.getDefaultString({
    charset: 'a-z,A-Z,1-9,!,@,$,%,&,*',
    len: 16,
  })
}

export async function getNonLocalUrls(effects: T.Effects) {
  const urls = await sdk.serviceInterface
    .getOwn(effects, 'primary', (i) => i?.addressInfo?.nonLocal.format())
    .const()

  return urls || []
}
