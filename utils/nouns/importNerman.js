const { providers } = require('ethers');

const DEFAULT_POLLING_TIME = 60_000;

module.exports = async function importNermanJS() {
   const _nerman = import('nerman');
   const nerman = await _nerman;
   return new nerman.Nouns(
      new providers.AlchemyProvider(undefined, process.env.ALCHEMY_TOKEN),
      {
         pollingTime:
            Number(process.env.POLLING_INTERVAL_MS) ?? DEFAULT_POLLING_TIME,
         shouldIgnoreCacheInit: true,
      },
   );
};
