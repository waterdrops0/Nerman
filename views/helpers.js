const { hyperlink } = require('discord.js');

const shortenAddress = require('../helpers/nouns/shortenAddress');

const WEI_PER_ETH = 1000000000000000000;

exports.findAccountLink = async function (Nouns, id) {
   const bidderENS = await exports.findAccountENS(Nouns, id);
   const ethBaseUrl = 'https://etherscan.io/address/';
   return hyperlink(bidderENS, `${ethBaseUrl}${id}`);
};

exports.getNounsLink = function (nounId) {
   return hyperlink(`Noun ${nounId}`, `https://nouns.wtf/noun/${nounId}`);
};

/**
 * @param {BigNumber} amount
 */
exports.getEthAmount = function (weiAmount) {
   return weiAmount / WEI_PER_ETH;
};

exports.findAccountENS = async function (Nouns, id) {
   const ens = (await Nouns.ensReverseLookup(id)) ?? (await shortenAddress(id));
   return ens;
};
