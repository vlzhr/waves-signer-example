import Waves from "@waves/signer";
import Provider from "@waves.exchange/provider-web";

const waves = new Waves({NODE_URL: 'https://pool.testnet.wavesnodes.com'});
const provider = new Provider('https://testnet.waves.exchange/signer/');

waves.setProvider(provider);


document.querySelector(".js-login").addEventListener("click", async function (event) {
    try {
        const userData = await waves.login();
        event.target.classList.add("clicked");
        event.target.innerHTML = `
            authorized as <br>
            ${userData.address}`;
    } catch (e) {
        console.error('login rejected')
    }
});


// calling a "faucet" script wavesexplorer.com/tesnet/address/3MuN7D8r19zdvSpAd1L91Gs88bcgwUFy2mn/script
// this will top up the account balance, but only once
document.querySelector(".js-invoke").addEventListener("click", function () {
    waves.invoke({
        dApp: "3MuN7D8r19zdvSpAd1L91Gs88bcgwUFy2mn",
        call: {
            function: "faucet"
        }
    }).broadcast().then(console.log)
});


// just putting some data into account storage
document.querySelector(".js-data").addEventListener("click", function () {
    const date = new Date();
    waves.data({
        data: [
            {
                key: "lastCall",
                value: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                type: 'string'
            }
        ]
    }).broadcast().then(console.log)
});


// just transferring some WAVES token to Alice
document.querySelector(".js-transfer").addEventListener("click", function () {
    waves.transfer({
        recipient: "3MuN7D8r19zdvSpAd1L91Gs88bcgwUFy2mn",
        amount: 1
    }).broadcast().then(console.log)
});


