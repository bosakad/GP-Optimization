import parser
import sys
import numpy as np
import histogramGenerator
from node import Node
import SSTA
import optimizeGatesSimple
import matplotlib.pyplot as plt
from randomVariableHist import RandomVariable

"""
Script main.py is used as a main method for circuit optimization.
Script calls all fundamental methods as well as parsers.
"""

numberOfGates = 5

# f = np.array([1, 0.8, 1, 0.7, 0.7, 0.5, 0.5])
# e = np.array([1, 2, 1, 1.5, 1.5, 1, 2])
f = np.array([1, 0.8, 1, 0.7, 0.7])
e = np.array([1, 2, 1, 1.5, 1.5])
Cout6 = 10
Cout7 = 10

a = np.ones(numberOfGates)
alpha = np.ones(numberOfGates)
beta = np.ones(numberOfGates)
gamma = np.ones(numberOfGates)

Amax = 25
Pmax = 50


def main(argv):

    ## Matrix parsing

    circuitMatrix = parser.getIncidenceMatrixFromNetlist(argv)
    print(circuitMatrix)


    # SSTA

    numberOfBins = 50
    numberOfSamples = int(100000)

    g1 = histogramGenerator.get_gauss_bins(1, 0.45, numberOfBins, numberOfSamples)  # g1, g2 INPUT gates, g3 middle
    g2 = histogramGenerator.get_gauss_bins(0.5, 0.3, numberOfBins, numberOfSamples)  # g4 output - inputs: g3 g1
    g3 = histogramGenerator.get_gauss_bins(0.5, 0.5, numberOfBins, numberOfSamples)  # g5 output - inputs: g3, g2
    g4 = histogramGenerator.get_gauss_bins(0.5, 0.5, numberOfBins, numberOfSamples)
    g5 = histogramGenerator.get_gauss_bins(0.5, 0.5, numberOfBins, numberOfSamples)

    n1 = Node(g1)
    n2 = Node(g2)
    n3 = Node(g3)
    n4 = Node(g4)
    n5 = Node(g5)

    # set circuit design
    n1.setNextNodes([n3, n4])
    n2.setNextNodes([n3, n5])
    n3.setNextNodes([n4, n5])

    delays = SSTA.calculateCircuitDelay([n1, n2])
    sinkDelay = delays[-1]

    # print out the results:

    for i in range(0, len(delays)):
        delay = delays[i]
        print('Mean of ' + str(i) + 'th delay is: ' + str(delay.mean) + ', std: ' + str(delay.std) )


    print(f'The mean delay is {sinkDelay.mean}')
    print(f'The std of a delay is {sinkDelay.std}')

    # GGP optimization

    # size = len(delays) - 1
    # means = [0] * size
    # for i in range(0, size - 1):
    #     d = delays[i]
    #     means[i] = d.mean
    #
    # MinimizedDelay = optimizeGatesSimple.optimizeGates(f, e, a, alpha, beta, gamma, Amax, Pmax, [Cout6, Cout7],
    #                                                    numberOfGates, delaysRVs=means)
    # print(f'Optimized delay:  {MinimizedDelay}')







    ## DEBUGGING ##

    # numberOfBins = 50
    # numberOfSamples = int(100000)
    #
    # g1 = histogramGenerator.get_gauss_bins(1, 0.45, numberOfBins, numberOfSamples)  # g1, g2 INPUT gates, g3 middle
    # g2 = histogramGenerator.get_gauss_bins(0.5, 0.3, numberOfBins, numberOfSamples)  # g4 output - inputs: g3 g1
    # g3 = histogramGenerator.get_gauss_bins(0.5, 0.5, numberOfBins, numberOfSamples)  # g5 output - inputs: g3, g2
    #
    # print("g1 mean: " + str(g1.mean))
    # print("g2 mean: " + str(g2.mean))
    # print("g3 mean: " + str(g3.mean))
    #
    # max = g1.getMaximum5(g2)
    # print("mean, std of max: " + str(max.mean) + ", " + str(max.std))
    # conv = max.convolutionOfTwoVars(g3)
    # print("mean, std of convolution: " + str(conv.mean) + ", " + str(conv.std))
    #
    # print(np.convolve([1, 2, 3], [0, 1, 0.5]))
    #
    # h1 = RandomVariable([1, 2, 3, 0, 0], [0, 1, 2, 3, 4, 5])
    # h2 = RandomVariable([0, 1, 0.5, 0, 0], [0, 1, 2, 3, 4, 5])
    # print(h1.convolutionOfTwoVars(h2).bins)


    ############ plotting

    # plot histogram
    # plt.hist(sinkDelay.edges[:-1], sinkDelay.edges, weights=sinkDelay.bins, density="PDF")
    # plt.ylabel('PDF of delay', size=14)
    # plt.xlabel('time', size=14)
    # plt.title('Histogram of the MAX delay', size=16)
    # plt.show()


if __name__ == "__main__":
    main(sys.argv[1:])
