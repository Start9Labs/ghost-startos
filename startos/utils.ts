import { Effects } from '@start9labs/start-sdk/base/lib/Effects'
import { sdk } from './sdk'
import { utils } from '@start9labs/start-sdk'

export const port = 2368

export async function getPrimaryInterfaceUrls(
  effects: Effects,
): Promise<string[]> {
  const httpInterface = await sdk.serviceInterface
    .getOwn(effects, 'primary')
    .const()

  return httpInterface?.addressInfo?.nonLocal.format() || []
}

export function getDbPass() {
  return utils.getDefaultString({
    charset: 'a-z,A-Z,1-9,!,@,$,%,&,*',
    len: 16,
  })
}

// export const getCaddyfile = (
//   activitypubTarget: string | null,
//   ghostPort: number,
// ): string => {
//   const activitypubRoutes = activitypubTarget
//     ? `
// 	# ActivityPub Service
// 	# Proxy activitypub requests /.ghost/activitypub/ to external ActivityPub service
// 	# Note: Ghost's internal requests to its own ActivityPub endpoint should go directly to Ghost
// 	handle /.ghost/activitypub/* {
// 		reverse_proxy ${activitypubTarget}
// 	}

// 	handle /.well-known/webfinger {
// 		reverse_proxy ${activitypubTarget}
// 	}

// 	handle /.well-known/nodeinfo {
// 		reverse_proxy ${activitypubTarget}
// 	}

// `
//     : ''

//   return `
// {
// 	admin off
// 	servers {
// 		client_ip_headers X-Forwarded-For X-Real-IP
// 		trusted_proxies static private_ranges
// 	}
// }

// :${uiPort} {
// 	# Log all requests
// 	log {
// 		output stdout
// 		format console
// 		level INFO
// 	}
// ${activitypubRoutes}
// 	# Default proxy everything else to Ghost
// 	handle {
// 		# Forward headers so Ghost knows the original request was HTTPS
// 		# StartOS terminates TLS, so we tell Ghost the original scheme was HTTPS
// 		reverse_proxy ghost.startos:${ghostPort} {
// 			header_up X-Forwarded-Proto https
// 			header_up X-Forwarded-Ssl on
// 			# Preserve cookies and headers for session authentication
// 			header_up Host {host}
// 			header_up X-Real-IP {remote_host}
// 			header_up X-Forwarded-For {remote_host}
// 		}
// 	}

// 	# Optional: Enable gzip compression
// 	encode gzip
// }
// `.trim()
// }
