// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction, TOptions } from '../types.js';
import type { LinkOption } from './types.js';

import { relayThx } from './thxMainnet.js';
import { testRelayThx } from './thxTestnet.js';
import { expandEndpoints } from './util.js';

export { CUSTOM_ENDPOINT_KEY } from './development.js';
export * from './production.js';
export * from './testing.js';
export * from './thxMainnet.js';
export * from './thxTestnet.js';

function defaultT (keyOrText: string, text?: string | TOptions, options?: TOptions): string {
  return (
    (options?.replace?.host as string) ||
    text?.toString() ||
    keyOrText
  );
}

export function createWsEndpoints (t: TFunction = defaultT, firstOnly = false, withSort = true): LinkOption[] {
  return [
    {
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('', 'THXNET. & leafchains', { ns: '' }),
      textBy: '',
      ui: {},
      value: ''
    },
    ...expandEndpoints(t, [relayThx], firstOnly, withSort),
    {
      isDisabled: false,
      isHeader: true,
      isSpaced: true,
      text: t('', 'THXNET. Testnet & leafchains', { ns: '' }),
      textBy: '',
      ui: {},
      value: ''
    },
    ...expandEndpoints(t, [testRelayThx], firstOnly, withSort)
  ].filter(({ isDisabled }) => !isDisabled);
}
