# VOTE_MINIONS
Tired of being a totalitarian dictator, i decided to give them a voting system.
[Here you can see it live](http://o-jasper.github.io/VOTE_MINIONS/).

The Ethereum scripts and (attempted)tests are in `src/`.

## TODO/Needs
Hopefully the PoC release will have a nice browser so this can be shown nicely.

* `page.html` is a mockup, actually use the [POC (5) Bindings](https://github.com/ethereum/cpp-ethereum/wiki/PoC-5-JS-Bindings). 
  Maybe find some examples to help do so.

* Figure out how to deal with people without ethers. (someone, like Vlad Zamfir
  will likely solve this problem.)

* Test more. Both on testnet and with readily-runnable tests. For instance with
  [evm-sim](https://github.com/EtherCasts/evm-sim/) or 
  [ace](https://gitorious.org/robmyers/ethereum-ace/source/20aba9c820bbfa2a7bd7bf9870411663a438f500:).

* Hitting return gets you to next form element.

* Confirming before acting.

#### Some more things

* Scalability!

* Collecting many votes from different people into a single small transaction?

* Anonymity of the votes.

* (eventually) figure out how to ensure people dont have double accounts. Current
  thinking is a trust network with some extra incentives to finding doubles.

## About
Created by Jasper den Ouden and Aaron Remi Bale for demonstration and future use
for [bitvotes](http://arkbg1.github.io/BitVote).
