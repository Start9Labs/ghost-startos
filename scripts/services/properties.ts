import { matches, types as T, util, YAML } from "../deps.ts";

const { shape, string } = matches;

const noPropertiesFound: T.ResultType<T.Properties> = {
  result: {
    version: 2,
    data: {
      "Not Ready": {
        type: "string",
        value: "Could not find properties. The service might still be starting",
        qr: false,
        copyable: false,
        masked: false,
        description: "Fallback Message When Properties could not be found",
      },
    },
  },
} as const;

const configMatcher = shape({
  "tor-address": string,
});

export const properties: T.ExpectedExports.properties = async ( effects: T.Effects ) => {
  if (
    await util.exists(effects, {
      volumeId: "main",
      path: "start9/config.yaml",
    }) === false
  ) {
    return noPropertiesFound;
  }
  const config = configMatcher.unsafeCast(YAML.parse(
    await effects.readFile({
      path: "start9/config.yaml",
      volumeId: "main",
    }),
  ));
  const properties: T.ResultType<T.Properties> = {
    result: {
      version: 2,
      data: {
        "Ghost Admin Panel": {
          type: "string",
          value: `http://${config["tor-address"]}/ghost`,
          description: "Use this link to enter Ghost Admin Panel.",
          copyable: true,
          qr: false,
          masked: false,
        },
      }
    }
  } as const;
  return properties;
};