---
category: 'blog'
cover: './introduction-to-r-course.png'
title: 'R Basics!'
description: 'Lets starts with the basics!'
date: '2021-08-19'
tags: ['Tutoial', 'R', 'datascience']
published: true
---

## Data types
- __Object:__ Everything in R is called "an object". R has 5 basic atomic classes of objects which are:
    - Character
    - Numeric (Real numbers)
    - Integer
    - Complex
    - Logical (True/False)

- __Vector:__ The most basic object, which contains one or more of a single type of object (Hint: a vector cannot contain two/more than one types of objects; every object in a vector should be of the same class) 

- __List:__ is a sequence of objects that can contain objects from different classes (Technically a _list_ is a _vector_ which can contain objects from different classes).

- __Matrices:__ are vectors with more than one dimensions.

## Numbers
as states in the [Data Types section](#data-types), numbers can be numeric(real numbers) or integers. By default, every number is considered to be a double precision real number unless you strictly define it as Integer by using an "L" suffix. for example:
```
x <- 4   # This gives you a real number

y <- 4L  # This gives you an integer
```
__infinit__ is shown as __Inf__, for example:
```
1/0 = Inf
and
1/Inf = 0
```
__Undefined Vale__ or __Missing Value__ is shown as __NaN__ (Not a Number), for example:
```
0/0 = NaN
```

## Defining variables
- Defing a single variable:

    To assign a numerical value to a variable, use the following expression:  
    ```r
    x <- 5
    ```
    To assign a character string to a variable, use the following expression:  
    ```r
    y <- "hello"
    ```
- Defining vectors:
    ```r
    z <- c(0.3, 2.5) # Creates a numeric vector like [0.3, 2.5]

    z <- c(True, Fakse) # Creates a logical vector like
    
    z <- c(T, F) # Creates a logical vector like
    
    z <- c("d", "f", "m") # Creates a character vector 
    
    z <- c(0+3i, 2+5i) # Creates a vector of complex numbers
    
    z <- 1:5    # Creates a vector like [1, 2, 3, 4, 5]

    ```
    you can also create an empty vector with the following vector() function. It gets two arguments, the fisrt one is Data Type and the second one is the length of the vector.  For example:
    ```r
    z <- vector("numeric", 5L) # Creates a numeric vector [0, 0, 0, 0, 0]

    z <- vector("character", 5L) # Creates a character vector ["", "", "", "", ""]
    ```
- Defining Lists:
    ```r
    > x <- list(2.5, 4L, "hello", F, 7+0i)
    > x
    [[1]]
    [1] 2.5

    [[2]]
    [1] 4

    [[3]]
    [1] "hello"

    [[4]]
    [1] FALSE

    [[5]]
    [1] 7+0i
    ```
- Defining Martices:  
    In order to define an empty martix we can use the following expression:
    ```
    > x <- matrix(nrow = 2, ncol = 4)
    > x
        [,1] [,2] [,3] [,4]
    [1,]   NA   NA   NA   NA
    [2,]   NA   NA   NA   NA
    ```
    We can also assign a vector to a matrix. Hint: martices are constructed __column-wise__. Therefore, a matrix starts from the upper left entry and ends with the lower right one. For example:
    ```
    > x <- matrix(1:8, nrow = 2, ncol = 4)
    > x
        [,1] [,2] [,3] [,4]
    [1,]    1    3    5    7
    [2,]    2    4    6    8
    ```
    Another way of creating a matrix is to directly create it from a vector using dim() function:
    ```
    > v <- 1:12
    > v
    [1]  1  2  3  4  5  6  7  8  9 10 11 12
    > dim(v) <- c(3, 4)
    > v
        [,1] [,2] [,3] [,4]
    [1,]    1    4    7   10
    [2,]    2    5    8   11
    [3,]    3    6    9   12
    ```
    Binding columns or rows is yet another way of defining a matrix:
    ```
    > x <- 1:3
    > y <- 14:16
    > cbind(x, y) # Binding columns to create a matrix
        x  y
    [1,] 1 14
    [2,] 2 15
    [3,] 3 16
    > rbind(x, y) # Binding rows to create a matrix
    [,1] [,2] [,3]
    x    1    2    3
    y   14   15   16
    ```

## Commenting
 R only supports single-line comments, and any string that starts with # is interpreted as comment. this string can be at the begining of a line, like:
```r
# This is a comment!!
```
Or it can start in the middle of a line (following an R expression), like:

```r
x <- 6 # This is a comment!!
```

