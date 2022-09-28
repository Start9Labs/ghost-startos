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
    "lan-address": {
      "name": "Lan Address",
      "description": "The Lan address for the main ui.",
      "type": "pointer",
      "subtype": "package",
      "package-id": "ghost",
      "target": "lan-address",
      "interface": "main"
    },
    "useTinfoil": {
        "name": "Enable Tinfoil Mode",
        "description": "Protects your privacy by disabling built-in features of Ghost that could expose your IP address, such as Gravatars, update checks, RPC pinging, structured data, and third party integrations. Enabling tinfoil mode will prevent certain parts from rendering correctly.",
        "type": "boolean",
        "default": false,
    },
});
