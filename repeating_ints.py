def repeated_ints(arr):
    # quick check to see if any duplicates exist:
    if len(arr) == len(set(arr)): 
        return None
    num_counts = {}
    repeats = []
    # put all ints from arr into hash table, num_counts
    for num in arr:
        if num in num_counts:
            num_counts[num] += 1
        else:
            num_counts[num] = 1
    # only add ints that occurred > 1x into list, repeats
    for k,v in num_counts.items():
        if v > 1:
            repeats.append(k)
    # return list of repeated ints
    return repeats

def dupes_list(arr):
    # quick check to see if any duplicates exist:
    if len(arr) == len(set(arr)): 
        return None
    # if pass above block, then we definitely have dupes and should start building a list of them
    list_of_dupes = []
    # iterate through arr, adding num to list_of_dupes when necessary
    for num in arr:
        # list_of_dupes will be much smaller, so check here first
        if num in list_of_dupes:
            continue
        elif arr.count(num) > 1:
            list_of_dupes.append(num)
    return list_of_dupes

def list_of_repeats(arr):
    # quick check to see if there are 0 repeated elements in arr:
    if len(arr) == len(set(arr)): return None
    # list comprehension to create list of repeated elements
    return set([x for x in arr if arr.count(x)>1])


arr = [1,1,2,3,4,1,5,6,3,7,7,7,7]
arr2 = [1,2,3,4]

print(repeated_ints(arr))
print(repeated_ints(arr2))

print(dupes_list(arr))
print(dupes_list(arr2))

print(list_of_repeats(arr))
print(list_of_repeats(arr2))