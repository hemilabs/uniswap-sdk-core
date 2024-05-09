import { ChainId, SUPPORTED_CHAINS, SupportedChainsType } from './chains'

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
  //[ChainId.HEMI]: HEMI_ADDRESSES
  [ChainId.HEMI_SEPOLIA]: HEMI_SEPOLIA_ADDRESSES
}


export const SWAP_ROUTER_02_ADDRESSES = (chainId: number) => {
  if (SUPPORTED_CHAINS.includes(chainId)) {
    const id = chainId as SupportedChainsType
    return CHAIN_TO_ADDRESSES_MAP[id].swapRouter02Address ?? '0x70523D3F46c9858D3319c4bb02a236Dc6C449d39'
  }
  return ''
}
