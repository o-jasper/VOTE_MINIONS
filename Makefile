# Essentially just a guide how to do some stuff.

default: src/voting.lll

%.lll: %.se  # Then stuff this LLL into ethereum.
	serpent compile_to_LLL "`cat $<`" > $@

%.hex: %.se
	serpent compile "`cat $<`" > $@

# TODO some command to put it into ethereum clients?
