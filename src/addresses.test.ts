import { SWAP_ROUTER_02_ADDRESSES } from './addresses'
import { ChainId } from './chains'

describe('addresses', () => {
  describe('swap router 02 addresses', () => {
    it('should return the correct address for hemi_sepolia', () => {
      const address = SWAP_ROUTER_02_ADDRESSES(ChainId.HEMI_SEPOLIA)
      expect(address).toEqual('0x70523D3F46c9858D3319c4bb02a236Dc6C449d39')
    })
  })
})
