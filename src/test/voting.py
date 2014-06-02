from sim import Key, Simulator, load_serpent


class TestVoting(object):

    ALICE = Key('cow')
    BOB = Key('bobby')

    @classmethodo
    def setup_class(cls):
        cls.code = load_serpent('../voting.se')
        cls.sim = Simulator({cls.ALICE.address: 10**18, cls.BOB.address: 10**18})

    def setup_method(self, method):
        self.sim.reset()
        self.contract = self.sim.load_contract(self.ALICE, self.code)
