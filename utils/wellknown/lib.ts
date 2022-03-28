export const wellknown = {
  fantom: {
    addresses: {
      weth: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      xTokenEth: '0xeAce7E145cC79A174185E44783bE25B7204d6634', // xftm/weth
      yTokenEth: '0x3DC4212706C45Dc9E9D23529850719fA2ceBD0E4', // fsm/weth
      swapRouter: '0xF491e7B69E4244ad4002BC14e878a34207E38c29', // spooky
    },
  },
};

export type Wellknown = typeof wellknown;
