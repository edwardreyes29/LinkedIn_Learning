#!/usr/bin/env python3
# Copyright 2009-2017 BHG http://bw.org/

x = 0x0a # Hex literal numbers
# y = 0x02
# y = 0x05
# y = 0x0f
y = 0x01
# z = x & y
# z = x | y
# z = x ^ y
# z = x << y
z = x >> y
print(f'(hex) x is {x:02x}, y is {y:02x}, z is {z:02x}')
print(f'(bin) x is {x:08b}, y is {y:08b}, z is {z:08b}')


