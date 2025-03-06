import { types as T, healthUtil } from "../deps.ts";

export const health: T.ExpectedExports.health = {
  async "web-ui"(effects, duration) {
    return healthUtil.checkWebUrl("http://ghost.embassy:2368/ghost/api/admin/site/")(effects, duration).catch(healthUtil.catchError(effects))
  },
};
