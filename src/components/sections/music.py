from pyo import *
s = Server().boot()
s.start()
sf = SfPlayer("src/components/sections/Fisher - Crowd Control.mp3",
              speed=1, loop=True).out()
