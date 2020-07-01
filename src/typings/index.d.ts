/* eslint-disable @typescript-eslint/naming-convention */
/// <reference types="./common.d.ts" />
/// <reference types="./config.d.ts" />
/// <reference types="./mobx/mobx.d.ts" />
/// <reference types="./api.d.ts" />

type TENV = typeof import('../common/env').default;
interface Window {
  __wxjs_environment: any;
  ENV: TENV;
  Config: IConfig;
}

declare const Config: IConfig
declare const ENV: TENV
