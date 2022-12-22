#!/usr/bin/python3
"""
0-main
"""


def pascal_triangle(n):
    """  pascal_triangle    """
    if n <= 0:
        return []
    if(n == 1):
        return [[1]]
    result = []
    for i in range(0, n - 1):
        if len(result) == 0:
            result.append([1])
        holder = []
        for j in range(0, i + 2):
            if (j == 0 or j == (i + 1)):
                holder.append(1)
            else:
                holder.append(result[i][j] + result[i][j-1])
        result.append(holder)
    return result
