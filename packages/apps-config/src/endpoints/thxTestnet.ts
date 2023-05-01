// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { chainsThxAethPNG, chainsThxSandPNG, chainsThxThxnetPNG, chainsThxThxPNG, chainsThxW3wPNG } from '../ui/logos/chains/index.js';
import { getTeleports } from './util.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const testParasThx: Omit<EndpointOption, 'teleport'>[] = [];

export const testParasThxCommon: EndpointOption[] = [
  {
    info: 'testThx',
    paraId: 1000,
    providers: {
      'THXNET.': 'wss://node.thx.testnet.thxnet.org/archive-001/ws'
    },
    teleport: [-1],
    text: 'thx! token Testnet',
    ui: {
      color: '#333F4F',
      logo: chainsThxThxPNG
    }
  },
  {
    info: 'testLmt',
    paraId: 1001,
    providers: {
      'THXNET.': 'wss://node.lmt.testnet.thxnet.org/archive-001/ws'
    },
    teleport: [-1],
    text: 'LimiteT Testnet',
    ui: {
      color: '#333F4F',
      logo: chainsThxW3wPNG
    }
  },
  {
    info: 'testTxd',
    paraId: 1002,
    providers: {
      'THXNET.': 'wss://node.txd.testnet.thxnet.org/archive-001/ws'
    },
    teleport: [-1],
    text: 'TXD Testnet',
    ui: {
      color: '#333F4F',
      logo: chainsThxThxnetPNG
    }
  },
  {
    info: 'sand',
    paraId: 1003,
    providers: {
      'THXNET.': 'wss://node.sand.testnet.thxnet.org/archive-001/ws'
    },
    teleport: [-1],
    text: 'Sandbox',
    ui: {
      color: '#333F4F',
      logo: chainsThxSandPNG
    }
  },
  {
    info: 'testAeth',
    paraId: 1004,
    providers: {
      'THXNET.': 'wss://node.aether.testnet.thxnet.org/archive-001/ws'
    },
    teleport: [-1],
    text: 'Aether Testnet',
    ui: {
      color: '#333F4F',
      logo: chainsThxAethPNG
    }
  }
];

export const testRelayThx: EndpointOption = {
  dnslink: 'thxnet_testnet',
  info: 'thxnet_testnet',
  linked: [
    ...testParasThxCommon,
    ...testParasThx
  ],
  providers: {
    'THXNET.': 'wss://node.testnet.thxnet.org/archive-001/ws'
  },
  teleport: getTeleports(testParasThxCommon),
  text: 'THXNET. Testnet',
  ui: {
    color: '#333F4F',
    logo: chainsThxThxnetPNG
  }
};
