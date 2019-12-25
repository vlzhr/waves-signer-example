import Waves from "@waves/signer";
import Provider from "@waves.exchange/provider-web";

const waves = new Waves({NODE_URL: 'https://pool.testnet.wavesnodes.com'});
const provider = new Provider();

waves.setProvider(provider);

document.querySelector(".js-login").addEventListener("click", async function(event) {
    try {
        const userData = await waves.login();
        event.target.classList.add("clicked");
        event.target.innerHTML = `
            authorized as <br>
            <a href='https://wavesexplorer.com/testnet/address/${userData.address}' target="_blank">
                ${userData.address}
            </a>`;
    } catch (e) {
        console.error('login rejected')
    }
});

document.querySelector(".js-invoke").addEventListener("click", function() {
    waves.invoke({
        dApp: "3MuN7D8r19zdvSpAd1L91Gs88bcgwUFy2mn",
        call: {
            function: "faucet"
        }
    }).broadcast().then(console.log)
});

