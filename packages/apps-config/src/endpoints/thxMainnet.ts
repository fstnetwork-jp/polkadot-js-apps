// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { chainsThxThxnetPNG, chainsThxThxPNG, chainsThxW3wPNG, chainsThxActivaPNG, chainsThxMbPNG } from '../ui/logos/chains/index.js';
import { getTeleports } from './util.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const parasThx: Omit<EndpointOption, 'teleport'>[] = [];

export const parasThxCommon: EndpointOption[] = [
  {
    info: 'thx',
    paraId: 1000,
    providers: {
      'THXNET.': 'wss://node.thx.mainnet.thxnet.org/archive-001/ws'
    },
    teleport: [-1],
    text: 'thx! token',
    ui: {
      color: '#333F4F',
      logo: chainsThxThxPNG
    }
  },
  {
    info: 'lmt',
    paraId: 1001,
    providers: {
      'THXNET.': 'wss://node.lmt.mainnet.thxnet.org/archive-001/ws'
    },
    teleport: [-1],
    text: 'LimiteT',
    ui: {
      color: '#333F4F',
      logo: chainsThxW3wPNG
    }
  },
  {
    info: 'activa',
    paraId: 1002,
    providers: {
      'THXNET.': 'wss://node.activa.mainnet.thxnet.org/archive-001/ws'
    },
    teleport: [-1],
    text: 'Activa',
    ui: { 
      color: '#333F4F',
      logo: chainsThxActivaPNG
    }
  },
  {
    info: 'mirrored-body',
    paraId: 1003,
    providers: {
      'THXNET.': 'wss://node.mirrored-body.mainnet.thxnet.org/archive-001/ws'
    },
    teleport: [-1],
    text: 'Mirrored Body',
    ui: { 
      color: '#333F4F',
      logo: chainsThxMbPNG
    }
  }
];

export const relayThx: EndpointOption = {
  dnslink: 'thxnet',
  info: 'thxnet',
  linked: [
    ...parasThxCommon,
    ...parasThx
  ],
  providers: {
    'THXNET.': 'wss://node.mainnet.thxnet.org/archive-001/ws'
  },
  teleport: getTeleports(parasThxCommon),
  text: 'THXNET.',
  ui: {
    color: '#333F4F',
    logo: chainsThxThxnetPNG
  }
};
