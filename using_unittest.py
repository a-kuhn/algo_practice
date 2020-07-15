import unittest
from math import floor

"""
reverseList(arr) ==> reverses values in list without creating a temporary array
? assertEqual(reverseList([1,2,3]), [3,2,1])

isPalindrome(word) ==> checks whether given word is a palindrome
? assertEqual(isPalindrome('racecar'), True)
? assertTrue(isPalindrome('racecar'))

coins(change) ==> minimize # of coins to equal change
? assertEqual(coins(87), [3,1,0,2])

factorial(num) ==> recursive function that returns num!
? assertEqual(factorial(5), 120)

fibonacci(num) ==> recursive function that returns the num-th Fibonacci # from the sequence
? assertEqual(fibonacci(4), 3)

"""


def reverseList(arr):
    arr_len = len(arr)

    if arr_len == 0:
        return None

    if arr_len == 1:
        return arr

    for i in range(0, arr_len):
        temp = arr.pop()
        arr.insert(i, temp)
    return arr


class reverseListTests(unittest.TestCase):
    def testOne(self):
        self.assertEqual(reverseList([1, 2, 3]), [3, 2, 1])

    def testTwo(self):
        self.assertEqual(reverseList([]), None)

    def testThree(self):
        self.assertEqual(reverseList([0]), [0])

    def testFour(self):
        self.assertEqual(reverseList([1, 1, 11, 1, 1, 1, 1]), [
                         1, 1, 1, 1, 11, 1, 1])

    def testFive(self):
        self.assertEqual(reverseList([1, 2]), [2, 1])


def isPalindrome(word):
    word_len = len(word)

    if word_len == 0:
        return None

    if word_len == 1:
        return True

    if word_len == 2:
        if word[0] == word[1]:
            return True
        else:
            return False

    half_length = floor(word_len/2)

    for i in range(0, half_length-1):
        if word[i] != word[(i+1)*-1]:
            return False
    
    return True


class isPalindromeTests(unittest.TestCase):
    def testOne(self):  # odd # of characters, different
        self.assertTrue(isPalindrome('racecar'))

    def testTwo(self):  # single character
        self.assertTrue(isPalindrome('m'))

    def testThree(self):  # two characters
        self.assertTrue(isPalindrome('oo'))

    def testFour(self):  # even # of characters, all the same
        self.assertTrue(isPalindrome('oooo'))

    def testFive(self):  # odd # of characters, all the same
        self.assertTrue(isPalindrome('ooooo'))

    def testSix(self):  # even # of characters, different
        self.assertTrue(isPalindrome('toottoot'))

    def testSeven(self):  # two characters, False
        self.assertFalse(isPalindrome('pl'))

    def testEight(self):  # even # of characters, False
        self.assertFalse(isPalindrome('pasfkjbn'))

    def testNine(self):  # odd # of characters, False
        self.assertFalse(isPalindrome('plijhba'))


if __name__ == '__main__':
    unittest.main()
