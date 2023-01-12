#!/usr/bin/python3
"""
Main file for testing
"""
def minOperations(n):
    """"minimum number of operations"""
    if n <= 1:
        return 0
    i = 2
    count = 0
    while i <= n:
        if n % i == 0:
            count += i
            n = n / i
        else:
            i += 1
    return count
    