def is_int(x):
    absoluteCount = abs(x)
    typeCount =type(x)
    roundCount = round(absoluteCount)
    if typeCount and absoluteCount - roundCount == 0:
        return True
    else:
        return False

def digit_sum(x):
    total = 0
    while x > 0:
        total += x % 10
        x = x // 10
        #print(x)
    return total

def sumaDig(x):
	text = str(x)
	total = 0
	for d in text:
		total += int(d)
	return total

def factorial(x):
    total = 1
    while x>0:
        total *= x
        x-=1
        print(x)
    return total


def is_prime( x ):
	if x < 2:
		return False
	elif x < 4:
		return True
	else:
		for n in range(2, x-1, 1):
			if x % n == 0:
				return False
			else:
				continue
	# Fuera del bucle
	return True

def reverse(text):
	length = len(text)
	array = []
		
	while length > 0:
		array.append( text[length-1] )
		length = length - 1
	
	result = "".join( map(str, array) )
	
	return result
	

print(reverse("Jaime") )

foo = "example text"
print(foo[::-1])

def anti_vowel(text):
	mayusc = upper(text)