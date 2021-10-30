import unittest
from ...main.basics._01_variables import swap

class BasicsUnitTest:

    def test_swap(self):
        a = 5
        b = 2
        swap(a, b)
        self.assertEqual(a, 2)
        self.assertEqual(b, 5)