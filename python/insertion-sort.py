def isort(arr):
  # keep track of current number starting with i = 1
  # keep track of current comparator which resets to i - 1
  # count will be the placeholder for the loop to continue from
  count = 1
  tf = False

  while (count < len(arr)):
    j = count
    i = j - 1

    while (i >= 0):
      if (arr[i] > arr[j]):
        tf = True
        i -= 1
      else:
        break

    if (tf):
      arr.insert(i + 1, arr[j])
      del arr[j + 1]

    tf = False
    count += 1

  return arr





numbers = [6, 5, 3, 1, 8, 7, 2, 4]
print(isort(numbers))