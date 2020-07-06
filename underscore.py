class Underscore:
    def map(self, iterable, callback):
        y = []
        for i in iterable:
            y.append(callback(i))
        return y

    def find(self, iterable, callback):
        for i in iterable:
            if callback(i):
                return i

    def filter(self, iterable, callback):
        y = []
        for i in iterable:
            if callback(i):
                y.append(i)
        return y

    def reject(self, iterable, callback):
        y = []
        for i in iterable:
            if not callback(i):
                y.append(i)
        return y


_ = Underscore()
map_test = _.map([1, 2, 3], lambda x: x * 2)  # should return: [2,4,6]
print(f"map: {map_test}")

# should return the first value that is greater than 4
find_test = _.find([1, 2, 3, 4, 5, 6], lambda x: x > 4)
print(f"find: {find_test}")

evens = _.filter([1, 2, 3, 4, 5, 6], lambda x: x %
                 2 == 0)  # should return: [2,4,6]
print(f"evens: {evens}")

reject_test = _.reject([1, 2, 3, 4, 5, 6], lambda x: x %
                       2 == 0)  # should return: [1,3,5]
print(f"reject: {reject_test}")
