import { compat, types as T } from "../deps.ts";

export const getConfig: T.ExpectedExports.getConfig = compat.getConfig({
    "tor-address": {
      "name": "Tor Address",
      "description": "The Tor address for the main ui.",
      "type": "pointer",
      "subtype": "package",
      "package-id": "ghost",
      "target": "tor-address",
      "interface": "main"
    },
    "useTinfoil": {
        "name": "Enable Tinfoil Mode",
        "description": "Protect privacy by turning off: Update check, Gravatar, RPC ping and Structured data.",
        "type": "boolean",
        "default": false,
    },
});
