import type { Chain } from "../src/types";
export default {
  "name": "Lightlink Pegasus Testnet",
  "chain": "Lightlink Pegasus Testnet",
  "icon": {
    "url": "ipfs://QmXMDj6iAFn2ducQcUU1M87PMMdT2jfyL3Tp3Lz5uUD5Lv",
    "width": 200,
    "height": 200,
    "format": "png"
  },
  "rpc": [
    "https://lightlink-pegasus-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://replicator-01.pegasus.lightlink.io/rpc/v1",
    "https://replicator-02.pegasus.lightlink.io/rpc/v1"
  ],
  "features": [
    {
      "name": "EIP155"
    }
  ],
  "faucets": [
    "https://pegasus-faucet-react.vercel.app"
  ],
  "nativeCurrency": {
    "name": "Ethereum",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://lightlink.io",
  "shortName": "lightlink_pegasus",
  "chainId": 1891,
  "networkId": 1891,
  "explorers": [
    {
      "name": "pegasus",
      "url": "https://pegasus.lightlink.io",
      "icon": {
        "url": "ipfs://QmXMDj6iAFn2ducQcUU1M87PMMdT2jfyL3Tp3Lz5uUD5Lv",
        "width": 200,
        "height": 200,
        "format": "png"
      },
      "standard": "EIP3091"
    }
  ],
  "testnet": true,
  "slug": "lightlink-pegasus-testnet"
} as const satisfies Chain;