import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains'

type AddressMap = { [chainId: number]: string }

type ChainAddresses = {
  v3CoreFactoryAddress: string
  multicallAddress: string
  quoterAddress: string
  v3MigratorAddress?: string
  nonfungiblePositionManagerAddress?: string
  tickLensAddress?: string
  swapRouter02Address?: string
  v1MixedRouteQuoterAddress?: string
}

const DEFAULT_NETWORKS = [ChainId.MAINNET, ChainId.GOERLI, ChainId.SEPOLIA]

function constructSameAddressMap(address: string, additionalNetworks: ChainId[] = []): AddressMap {
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = address
    return memo
  }, {})
}

export const UNI_ADDRESSES: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', [
  ChainId.OPTIMISM,
  ChainId.ARBITRUM_ONE,
  ChainId.POLYGON,
  ChainId.POLYGON_MUMBAI,
  ChainId.SEPOLIA
])

export const UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = '0x8B799381ac40b838BBA4131ffB26197C432AFe78'

/**
 * @deprecated use V2_FACTORY_ADDRESSES instead
 */
export const V2_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
export const V2_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.GOERLI]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.SEPOLIA]: '0xB7f907f7A9eBC822a80BD25E224be42Ce0A698A0',
  [ChainId.OPTIMISM]: '0x0c3c1c532F1e39EdF36BE9Fe0bE1410313E074Bf',
  [ChainId.ARBITRUM_ONE]: '0xf1D7CC64Fb4452F05c498126312eBE29f30Fbcf9',
  [ChainId.AVALANCHE]: '0x9e5A52f57b3038F1B8EeE45F28b3C1967e22799C',
  [ChainId.BASE]: '0x8909dc15e40173ff4699343b6eb8132c65e18ec6',
  [ChainId.BNB]: '0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6',
  [ChainId.POLYGON]: '0x9e5A52f57b3038F1B8EeE45F28b3C1967e22799C',
  [ChainId.CELO]: '0x79a530c8e2fA8748B7B40dd3629C0520c2cCf03f',
  [ChainId.BLAST]: '0x5C346464d33F90bABaf70dB6388507CC889C1070'
}
/**
 * @deprecated use V2_ROUTER_ADDRESSES instead
 */
export const V2_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
export const V2_ROUTER_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  [ChainId.GOERLI]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  [ChainId.ARBITRUM_ONE]: '0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24',
  [ChainId.OPTIMISM]: '0x4a7b5da61326a6379179b40d00f57e5bbdc962c2',
  [ChainId.BASE]: '0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24',
  [ChainId.AVALANCHE]: '0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24',
  [ChainId.BNB]: '0x4752ba5dbc23f44d87826276bf6fd6b1c372ad24',
  [ChainId.POLYGON]: '0xedf6066a2b290c185783862c7f4776a2c8077ad1',
  [ChainId.BLAST]: '0xBB66Eb1c5e875933D44DAe661dbD80e5D9B03035'
}

// Hemi addresses
// @TODO: enable once we have these addresses for HEMI chain. ref: https://github.com/hemilabs/interface/issues/31
// We would also need to add HEMI to SUPPORTED_CHAINS (chains.ts)
/*const HEMI_ADDRESSES: ChainAddresses = {
  multicallAddress: '0xf7364E230EA0e5CC41E6Cd4E2a30A26Ca1850b73',
  nonfungiblePositionManagerAddress: '0x703D7618Fa53fB0C2b7f28fD60DD9b1fD9084cC1',
  quoterAddress: '0x3899a6090c5C178dB8A1800DA39daD0D06EeEFBE',
  swapRouter02Address: '0x70523D3F46c9858D3319c4bb02a236Dc6C449d39',
  tickLensAddress: '0x70AB149e550690D55a46AA326211438c5D47B6D3',
  v3CoreFactoryAddress: '0xc2f8037a31a4f12b07d20D3f382b1aA03c94519B',
  v3MigratorAddress: '0x1B1ff6ad47a9fe6eF10b9A235a2B2C8d1CED743e'
}*/

// Hemi Sepolia addresses
const HEMI_SEPOLIA_ADDRESSES: ChainAddresses = {
  multicallAddress: '0xf7364E230EA0e5CC41E6Cd4E2a30A26Ca1850b73',
  nonfungiblePositionManagerAddress: '0x703D7618Fa53fB0C2b7f28fD60DD9b1fD9084cC1',
  quoterAddress: '0x3899a6090c5C178dB8A1800DA39daD0D06EeEFBE',
  swapRouter02Address: '0x70523D3F46c9858D3319c4bb02a236Dc6C449d39',
  tickLensAddress: '0x70AB149e550690D55a46AA326211438c5D47B6D3',
  v3CoreFactoryAddress: '0xc2f8037a31a4f12b07d20D3f382b1aA03c94519B',
  v3MigratorAddress: '0x1B1ff6ad47a9fe6eF10b9A235a2B2C8d1CED743e'
}

export const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses> = {
  [ChainId.HEMI_SEPOLIA]: HEMI_SEPOLIA_ADDRESSES
}

/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress
    return memo
  }, {})
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress
    if (v3MigratorAddress) {
      memo[chainId] = v3MigratorAddress
    }
    return memo
  }, {})
}

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress
    return memo
  }, {})
}

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
)
/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6'
}
/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0x408ED6354d4973f66138C91495F2f2FCbd8724C3'
}

export const TIMELOCK_ADDRESSES: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e'
}

export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8'
}

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress
    return memo
  }, {})
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress
    }
    return memo
  }, {})
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e')
}

export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd'
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress
    }
    return memo
  }, {})
}

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
  const v1MixedRouteQuoterAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v1MixedRouteQuoterAddress
  if (v1MixedRouteQuoterAddress) {
    memo[chainId] = v1MixedRouteQuoterAddress
  }
  return memo
}, {})

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  if (SUPPORTED_CHAINS.includes(chainId)) {
    const id = chainId as SupportedChainsType
    return CHAIN_TO_ADDRESSES_MAP[id].swapRouter02Address ?? '0x70523D3F46c9858D3319c4bb02a236Dc6C449d39'
  }
  return ''
}
