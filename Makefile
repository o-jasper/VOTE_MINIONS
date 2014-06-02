# Essentially just a guide how to do some stuff.

default: src/voting.lll

test:  # Note: dont expect to work right now. Requires evm-sim
	py.test2 

%.lll: %.se  # Then stuff this LLL into ethereum.
	serpent compile_to_LLL "`cat $<`" > $@

%.hex: %.se
	serpent compile "`cat $<`" > $@

# TODO some command to put it into ethereum clients?
