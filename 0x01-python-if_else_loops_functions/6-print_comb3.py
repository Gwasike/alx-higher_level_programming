#!/usr/bin/python3
for k in range(10):
    for n in range(k, 10):
        if k < n:
            print("{:d}{:d}".format(k, n),
                    end="\n" if k == 8 and n == 9 else ", ")
