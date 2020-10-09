require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy razor scrub arrow just enroll slot gate'; 
let testAccounts = [
"0xc6c2a419c688646edfac941e4b4e99d1eceb08a3fe8ce4a1660787b54555d3b3",
"0xa633fd2ccb65fae1fac9be0124730fbdb34882a849c7c4af20b92c4284650045",
"0x6cef8c3910fceedd643ba52cc9f626b650314ca3654b1bc56425daacf04fef70",
"0x760f67f598221f2dfbca37992d7b5544a42626a655af7e2db55bafc5559b4dca",
"0x0c2e8894f080bf67647e79bf4edd56717992a7466d535dc5207ac37060f67b3a",
"0xe67e23226a47233041a8b8d563c9ea8e4b7fac083b4f9f9de4672a6d4ede3223",
"0xc644175df187cc7277b31233830cfc40053e3428a103c6991c1211a2348ad4cc",
"0xe1161f4a523dc7e4df1224985e394a80cb50369af3b0d302c0d033c37c230a63",
"0x90a24c330a5d17bf967d0dc6c74883776d9af313c7f3f211ba78e23d1e5c76e7",
"0xab8a6b202ac23e0ae73cd3bbb0e446a904f2c8de86f825a2385b1dbfb58b3d5e"
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
