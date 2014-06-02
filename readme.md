# VOTE_MINIONS
Tired of being a totalitarian dictator, i decided to give them a voting system

## TODO/Needs
Hopefully the PoC release will have a nice browser so this can be shown nicely.

* `page.html` is a mockup, actually use the [POC (5) Bindings](https://github.com/ethereum/cpp-ethereum/wiki/PoC-5-JS-Bindings). 
  Maybe find some examples to help do so.

* Figure out how to deal with people without ethers. (ask Vlad Zamfir)

* Test more. Both on testnet and with readily-runnable tests. For instance with
  [evm-sim](https://github.com/EtherCasts/evm-sim/) or 
  [ace](https://gitorious.org/robmyers/ethereum-ace/source/20aba9c820bbfa2a7bd7bf9870411663a438f500:).

* Hitting return gets you to next form element.

* Confirming before acting.

#### Some more things

* Collecting many votes from different people into a single small transaction?

* (eventually) identifying humans. Already can add a contract address that does
  this? Use DDOUG to allow later modification of this system, given many votes?
