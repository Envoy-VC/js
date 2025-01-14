import type { Chain } from "../src/types";
export default {
  "name": "Agung Network",
  "chain": "Agung",
  "icon": {
    "url": "ipfs://bafkreibkqdof3ztkdhgukwvkacwgrjb27e23hgz5c6mmudzu5hipyvgisa",
    "width": 256,
    "height": 256,
    "format": "png"
  },
  "rpc": [
    "https://agung-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpcpc1-qa.agung.peaq.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Agung",
    "symbol": "AGNG",
    "decimals": 18
  },
  "infoURL": "https://www.peaq.network",
  "shortName": "AGNG",
  "chainId": 9990,
  "networkId": 9990,
  "explorers": [
    {
      "name": "Polkadot.js",
      "url": "https://polkadot.js.org/apps/?rpc=wss://wsspc1-qa.agung.peaq.network#/explorer",
      "standard": "none"
    },
    {
      "name": "Subscan",
      "url": "https://agung.subscan.io",
      "standard": "none"
    }
  ],
  "testnet": false,
  "slug": "agung-network"
} as const satisfies Chain;