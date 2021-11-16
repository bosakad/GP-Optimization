import math

import cvxpy as cp
import numpy as np


""" Random variable 

    Class representing a random variable given by histogram.
    Class includes: 
        bins: len n of frequencies
        edges: len n+1 of histogram edges
        mean: computed sample mean
        variance: computed sample variance

"""

class RandomVariable:

    def __init__(self, bins, edges):

        # normalize if isnt

        self.bins = np.array(bins)
        self.edges = np.array(edges)
        self.mean = self.calculateMean()
        self.std = self.calculateSTD()

    # def __init__(self, bins, edges, numbers=None):
    #     self.bins = np.array(bins)
    #     self.edges = np.array(edges)
    #     self.numbers = numbers
    #     self.mean = np.mean(numbers)
    #     self.std = np.std(numbers)


    """ Maximum of 2 distribution functions
    
    Input:
        secondHistogram: class Histogram with bins and edges data
    
    Output: 
        max_x { intervalEnds[x] | x in [0, N-1]; max_i { frequencies[i][x]} > 0 }
    
    """

    def getMaximum(self, secondVariable):
        frequencies = [self.bins, secondVariable.bins]
        intervalEnds = self.edges[1:]

        F = np.matrix(frequencies)
        E = np.matrix(intervalEnds)

        L = F > 0  # logical matrix

        B = len(frequencies[0])
        frequency = cp.Variable((1, B))

        objective = cp.Minimize(cp.max(cp.multiply(frequency, E)))
        constraints = [frequency >= L[0], frequency >= L[1]]

        prob = cp.Problem(objective, constraints)
        prob.solve()

        # sum columns of 2 given histograms
        newHistogram = np.sum(frequencies, axis=0)
        norm = np.linalg.norm(newHistogram)
        newHistogram = newHistogram / norm

        # norm check
        if (np.sum(newHistogram) <= 1):
            print("Wrong data!")
            return -1

        maxDelay = RandomVariable(newHistogram, self.edges  )
        return prob.value, maxDelay

    def getMaximum2(self, secondVariable):


        max = np.maximum(self.numbers, secondVariable.numbers)

        data, edges = np.histogram(max, self.edges)

        maxDelay = RandomVariable(data, self.edges, max)
        return maxDelay


    def getMaximum3(self, secondVariable):

        maxBins = np.maximum(self.bins, secondVariable.bins)

        maxDelay = RandomVariable(maxBins, self.edges)
        return maxDelay


    def getMaximum4(self, secondVariable):

        n = len(self.bins)

        f1 = self.bins
        f2 = secondVariable.bins

        max = np.array([0.]* n)

        for i in range(0, n):
            F2 = np.sum(f2[:i+1])
            F1 = np.sum(f1[:i])     # only for discrete - not to count with 1 number twice

            max[i] = f1[i] * F2 + f2[i] * F1

        maxDelay = RandomVariable(max, self.edges)
        return maxDelay

    def getMaximum5(self, secondVariable):

        # get data
        n = len(self.bins)

        bins1 = self.bins
        edges1 = self.edges
        midPoints1 = 0.5 * (edges1[1:] + edges1[:-1])    # midpoints of the edges of hist.

        bins2 = secondVariable.bins
        edges2 = secondVariable.edges
        midPoints2 = 0.5 * (edges2[1:] + edges2[:-1])  # midpoints of the edges of hist.

        # prealloc
        maximum = np.array([0.]* n)

        # calc. maximum
        for i in range(0, n):
            for j in range(0, n):
                e1 = midPoints1[i]
                e2 = midPoints2[j]

                if e1 >= e2:
                    maximum[i] += bins1[i] * bins2[j]
                else:
                    maximum[j] += bins1[i] * bins2[j]

        return RandomVariable(maximum, self.edges)




    """ Convolution of two independent random variables
    
    Input:
        frequencies: 2xB array, where B is number of bins of given a histogram
    
    Output:
    
    (f*g)(z) = sum{k=-inf, inf} ( f(k)g(z-k)  )
    
    """

    def convolutionOfTwoVars(self, secondVariable):
        f = self.bins
        g = secondVariable.bins

        size = len(f)
        newHistogram = np.array([0.] * size)

        for z in range(0, size):
            for k in range(0, z + 1):
                newHistogram[z] += f[k] * g[z - k]

        return RandomVariable(newHistogram, self.edges)

    """ Convolution of two independent random variables using numpy.convolve function.

        Input:
            frequencies: 2xB array, where B is number of bins of given a histogram

        Output:

        (f*g)(z) = sum{k=-inf, inf} ( f(k)g(z-k)  )

        """

    def convolutionOfTwoVars2(self, secondVariable):
        f = self.bins
        g = secondVariable.bins

            # convolve
        convolution = np.convolve(f, g, mode="full")

            # pick the largest edges
        if secondVariable.edges.size > self.edges.size:
            self.edges = secondVariable.edges

            # append new edges
        diff = self.edges[1] - self.edges[0]
        appended = []
        if len(self.edges) != len(convolution) + 1:

            end = self.edges[-1]
            appended = np.linspace(end + diff, end + diff * (len(g) - 1), len(g) - 1)


        edges = np.append(self.edges, appended)

        # shift edges

        # edges = edges +   edges[0]    # shift made by indexing from 0

        if edges[0] > 0:        # add bins
            numberOfBinsNeeded = round(edges[0] / diff)
            inserted = np.linspace(edges[0], 2*edges[0] - diff, numberOfBinsNeeded)

            edges = edges + edges[0]
            edges = np.append(inserted, edges)

            convolution = np.append(np.zeros(numberOfBinsNeeded), convolution)

        # if edges[0] > 0:      # cut bins
        #     numberOfBinsNeeded = math.floor(abs(edges[0]) / diff)
        #     convolution = np.append( np.zeros(numberOfBinsNeeded), convolution[:-numberOfBinsNeeded] )
        elif edges[0] < 0:      # cut bins
            numberOfBinsNeeded = math.floor(abs(edges[0]) / diff)
            convolution = np.append( convolution[numberOfBinsNeeded:], np.zeros(numberOfBinsNeeded) )



        convolution = convolution / (np.sum(convolution) * diff)

        return RandomVariable(convolution, edges)


    """ Calculate mean
    
    Function calculates sample mean of the random variable.
    Calculation: weighted average of the frequencies, edges being the weights    
        
    """
    def calculateMean(self):
        midPoints = 0.5 * (self.edges[1:] + self.edges[:-1])    # midpoints of the edges of hist.
        mean = np.average(midPoints, weights=self.bins)
        return mean


    """ Calculate variance

        Function calculates sample variance of the random variable.
        Calculation: weighted average of the frequencies, edges being the weights    

        """

    def calculateSTD(self):
        midPoints = 0.5 * (self.edges[1:] + self.edges[:-1])    # midpoints of the edges of hist.
        variance = np.average((midPoints - self.mean) ** 2, weights=self.bins)
        return np.sqrt(variance)









