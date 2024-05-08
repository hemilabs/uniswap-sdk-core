export enum ChainId {
  HEMI = 43_111,
  HEMI_SEPOLIA = 743_111
}

export const SUPPORTED_CHAINS = [
  //ChainId.HEMI, 
  ChainId.HEMI_SEPOLIA
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
  MATIC = 'MATIC',
  CELO = 'CELO',
  GNOSIS = 'XDAI',
  MOONBEAM = 'GLMR',
  BNB = 'BNB',
  AVAX = 'AVAX',
  ROOTSTOCK = 'RBTC'
}
