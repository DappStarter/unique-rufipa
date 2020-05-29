require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan rice stereo snake idea another army genuine'; 
let testAccounts = [
"0xda0e950ede8cd98d6a4bd6fe9040bf2ad907496ec6a2d71a4462271b476e4f47",
"0xcc2987b4ccced57e1dd667af4c1d3a7dabdcd2f5ba87f2a8e4cdabb8daad5225",
"0x3e86250caf623e0927ac366f9444ae1677d18f7e89723735145a43d93df856f4",
"0xc5030a28462242fb15fd93f53d168c5c1006fa6186c4b0a7f6807de775a02cef",
"0x8a6361c5dc4c33d79c8122a65f53a274792565fc114ac50a02055778527205ee",
"0x46395dfa544cab513f7dbee61aa968824be2ca3050df6af7848018e83161e16e",
"0xd2a7eecfed34e8874f6e1af14019a04142c0258153f1842b27aec6ed799d2e63",
"0xcdfb13896c2e3bba17fdcc86dd8f72b73a01a7265b85178624313440da51a8fa",
"0xbe964bcb543ed28bf2146ac31b5dbcfb11139c27a619b685bec130e40f172b6c",
"0xad96041bf22a8bca9c70b33eb2e99617228b259c01534223b12a9df6816212d8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
