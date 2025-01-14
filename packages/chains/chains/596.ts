import type { Chain } from "../src/types";
export default {
  "name": "Karura Network Testnet",
  "chain": "KAR",
  "rpc": [
    "https://karura-network-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://eth-rpc-karura-testnet.aca-staging.network",
    "wss://eth-rpc-karura-testnet.aca-staging.network"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Karura Token",
    "symbol": "KAR",
    "decimals": 18
  },
  "infoURL": "https://karura.network",
  "shortName": "tkar",
  "chainId": 596,
  "networkId": 596,
  "slip44": 596,
  "explorers": [
    {
      "name": "blockscout",
      "url": "https://blockscout.karura-testnet.aca-staging.network",
      "standard": "EIP3091"
    }
  ],
  "testnet": true,
  "slug": "karura-network-testnet"
} as const satisfies Chain;