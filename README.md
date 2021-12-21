# Decentraland lists graph

- Mainnet: https://thegraph.com/hosted-service/subgraph/decentraland/decentraland-lists-ethereum-mainnet
- Ropsten: https://thegraph.com/hosted-service/subgraph/decentraland/decentraland-lists-ethereum-ropsten

### Install

```bash
npm run install
```

### Deploy

```bash
npm run deploy:{network}
```

### Queries

Ethereum addresses should be passed lowercased:

- `0xB549B2442b2BD0a53795BC5cDcBFE0cAF7ACA9f8` ❌
- `0xb549b2442b2bd0a53795bc5cdcbfe0caf7aca9f8` ✅

#### Get active Catalyst, POIs or Names

```typescript
// Catalysts
{
  catalysts(where: {isActive: true}) {
    domain
    owner
  }
}

// POIs
{
  pois(where: {isActive: true}) {
    coordinates
    x
    y
  }
}

// Names
{
  names(where: {isActive: true}) {
    name
  }
}
```

#### Get totals

```typescript
{
  counts {
    catalystTotal
    poisTotal
    namesTotal
  }
}
```
