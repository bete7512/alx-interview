#!/usr/bin/python3
""" Making Change """
import sys


def makeChange(coins, total):
    """ Given a pile of coins of different values, determine the fewest
        number of coins needed to meet a given amount total """
    if total <= 0:
        return 0
    coins.sort(reverse=True)
    count = 0
    for coin in coins:
        if coin <= total:
            count += total // coin
            total %= coin
    if total > 0:
        return -1
    return count
