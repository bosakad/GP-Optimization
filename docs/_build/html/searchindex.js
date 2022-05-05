Search.setIndex({docnames:["gateSizing","index","modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["gateSizing.rst","index.rst","modules.rst"],objects:{"src.gateSizing":[[1,0,0,"-","Parser_Matrix"],[1,0,0,"-","Plotter"],[1,0,0,"-","SSTA"],[1,0,0,"-","cvxpyVariable"],[1,0,0,"-","deterministicDelay"],[1,0,0,"-","distrFitter"],[1,0,0,"-","histogramGenerator"],[1,0,0,"-","mosekVariable"],[1,0,0,"-","node"],[1,0,0,"-","optimizeGatesSimple_Boyd"],[1,0,0,"-","optimizeGatesVectorized_Boyd"],[1,0,0,"-","randomVariableHist_Numpy"],[1,0,0,"-","test_Operations_Cvxpy"],[1,0,0,"-","test_algorithms"],[1,0,0,"-","test_mosekOperations"],[1,0,0,"-","test_parser"]],"src.gateSizing.Parser_Matrix":[[1,1,1,"","getIncidenceMatrixFromNetlist"],[1,1,1,"","parseFileName"],[1,1,1,"","parseGatesPropertiesFromTXT"],[1,1,1,"","parseNetListIntoMatrix"]],"src.gateSizing.Plotter":[[1,1,1,"","parseVerbose"],[1,1,1,"","plotForThesis"],[1,1,1,"","plotForThesis2"],[1,1,1,"","plotNonzeros"],[1,1,1,"","plotPresolve"],[1,1,1,"","plotScalingOptimization"]],"src.gateSizing.SSTA":[[1,1,1,"","Convolution_GP"],[1,1,1,"","Convolution_McCormick"],[1,1,1,"","Convolution_UNARY"],[1,1,1,"","Convolution_UNARY_MOSEK"],[1,1,1,"","calculateCircuitDelay"],[1,1,1,"","maxMonteCarlo"],[1,1,1,"","maxOfDistributionsCVXPY_GP"],[1,1,1,"","maxOfDistributionsCVXPY_McCormick"],[1,1,1,"","maxOfDistributionsCVXPY_UNARY"],[1,1,1,"","maxOfDistributionsELEMENTWISE"],[1,1,1,"","maxOfDistributionsFORM"],[1,1,1,"","maxOfDistributionsMOSEK_UNARY"],[1,1,1,"","maxOfDistributionsQUAD"],[1,1,1,"","maxOfDistributionsUNARY"],[1,1,1,"","putIntoQueue"]],"src.gateSizing.cvxpyVariable":[[1,2,1,"","RandomVariableCVXPY"]],"src.gateSizing.cvxpyVariable.RandomVariableCVXPY":[[1,3,1,"","convolution_GP"],[1,3,1,"","convolution_GP_OPT"],[1,3,1,"","convolution_McCormick"],[1,3,1,"","convolution_UNARY_CUT"],[1,3,1,"","convolution_UNARY_DIVIDE"],[1,3,1,"","convolution_UNARY_OLD"],[1,3,1,"","convolution_WITH_CONSTANT"],[1,3,1,"","cutBins"],[1,3,1,"","cutBins_UNARY"],[1,3,1,"","maximum_ELEMENTWISE"],[1,3,1,"","maximum_FORM_UNARY_OLD_MAX"],[1,3,1,"","maximum_GP"],[1,3,1,"","maximum_GP_OPT"],[1,3,1,"","maximum_McCormick"],[1,3,1,"","maximum_QUAD_UNARY_CUT"],[1,3,1,"","maximum_QUAD_UNARY_DIVIDE"],[1,3,1,"","maximum_QUAD_UNARY_OLD"]],"src.gateSizing.deterministicDelay":[[1,1,1,"","FindMaxDelayEdges"],[1,1,1,"","FindMaxDelayGates"],[1,1,1,"","putIntoQueue"]],"src.gateSizing.distrFitter":[[1,1,1,"","generateDistr"],[1,1,1,"","linearRegression"],[1,1,1,"","plotDistros"],[1,1,1,"","plotDistrosForInputs"],[1,1,1,"","plotLinesForBin"],[1,1,1,"","saveModel"]],"src.gateSizing.examples_monteCarlo":[[1,0,0,"-","infinite_ladder_montecarlo"],[1,0,0,"-","montecarlo"]],"src.gateSizing.examples_monteCarlo.infinite_ladder_montecarlo":[[1,1,1,"","MonteCarlo_inputs"],[1,1,1,"","MonteCarlo_nodes"],[1,1,1,"","get_moments_from_simulations"],[1,1,1,"","main"]],"src.gateSizing.examples_monteCarlo.montecarlo":[[1,1,1,"","get_inputs"],[1,1,1,"","get_ordered_paths"],[1,1,1,"","get_unknown_nodes"],[1,1,1,"","main"],[1,1,1,"","preprocess"],[1,1,1,"","simulation"]],"src.gateSizing.histogramGenerator":[[1,1,1,"","generateAccordingToModel"],[1,1,1,"","getValuesForMonteCarlo"],[1,1,1,"","get_Histogram_from_UNARY"],[1,1,1,"","get_gauss_bins"],[1,1,1,"","get_gauss_bins_UNARY"]],"src.gateSizing.mosekVariable":[[1,2,1,"","RandomVariableMOSEK"]],"src.gateSizing.mosekVariable.RandomVariableMOSEK":[[1,3,1,"","convolution_UNARY_MAX_DIVIDE"],[1,3,1,"","convolution_UNARY_MAX_DIVIDE_VECTORIZED"],[1,3,1,"","cutBins"],[1,3,1,"","maximum_AND_Convolution"],[1,3,1,"","maximum_AND_Convolution_VECTORIZED"],[1,3,1,"","maximum_AND_Convolution_VECTORIZED_MEM_FREE"],[1,3,1,"","maximum_AND_Convolution_VECTORIZED_MIN"],[1,3,1,"","maximum_UNARY_MAX_DIVIDE"],[1,3,1,"","maximum_UNARY_MAX_DIVIDE_MEM_FREE"],[1,3,1,"","maximum_UNARY_MAX_DIVIDE_VECTORIZED"]],"src.gateSizing.node":[[1,2,1,"","Node"]],"src.gateSizing.node.Node":[[1,3,1,"","appendNextNode"],[1,3,1,"","appendPrevDelays"],[1,3,1,"","setNextNodes"],[1,3,1,"","setPrevDelays"]],"src.gateSizing.optimizeGatesSimple_Boyd":[[1,1,1,"","computeGateDelays"],[1,1,1,"","computeInputCapacitance"],[1,1,1,"","computeLoadCapacitance"],[1,1,1,"","computeTotalArea"],[1,1,1,"","computeTotalPower"],[1,1,1,"","getDelaySSTA"],[1,1,1,"","getMaximumDelay"],[1,1,1,"","getPathDelays"],[1,1,1,"","optimizeGates"]],"src.gateSizing.optimizeGatesVectorized_Boyd":[[1,1,1,"","computeGateDelays"],[1,1,1,"","computeIncidenceMatrices"],[1,1,1,"","computeInputCapacitance"],[1,1,1,"","computeLoadCapacitance"],[1,1,1,"","computeTotalArea"],[1,1,1,"","computeTotalPower"],[1,1,1,"","getConstrCload"],[1,1,1,"","getConstrTiming"],[1,1,1,"","getInputTimingConstr"],[1,1,1,"","getMaximumDelay"],[1,1,1,"","optimizeGates"]],"src.gateSizing.randomVariableHist_Numpy":[[1,2,1,"","RandomVariable"]],"src.gateSizing.randomVariableHist_Numpy.RandomVariable":[[1,3,1,"","calculateMean"],[1,3,1,"","calculateMean_UNARY"],[1,3,1,"","calculateSTD"],[1,3,1,"","calculateSTD_UNARY"],[1,3,1,"","convolutionOfTwoVarsNaiveFULL"],[1,3,1,"","convolutionOfTwoVarsNaiveSAME"],[1,3,1,"","convolutionOfTwoVarsNaiveSAME_UNARY"],[1,3,1,"","convolutionOfTwoVarsShift"],[1,3,1,"","convolutionOfTwoVarsUnion"],[1,3,1,"","cutBins"],[1,3,1,"","cutBins_UNARY"],[1,3,1,"","cutBins_UNARY_Vectorized"],[1,3,1,"","maxOfDistributionsELEMENTWISE"],[1,3,1,"","maxOfDistributionsFORM"],[1,3,1,"","maxOfDistributionsQUAD"],[1,3,1,"","maxOfDistributionsQUAD_FORMULA"],[1,3,1,"","maxOfDistributionsQUAD_FORMULA_UNARY"],[1,3,1,"","maximum_AND_Convolution_UNARY"],[1,3,1,"","recalculateParams"],[1,3,1,"","unarizeCut"],[1,3,1,"","unarizeDivide"],[1,3,1,"","uniteEdges"],[1,3,1,"","uniteEdgesNaive"],[1,3,1,"","uniteEdges_Fitting"]],"src.gateSizing.test_Operations_Cvxpy":[[1,1,1,"","test_CVXPY_CONVOLUTION_GP"],[1,1,1,"","test_CVXPY_CONVOLUTION_McCormick"],[1,1,1,"","test_CVXPY_CONVOLUTION_UNARY_MAX"],[1,1,1,"","test_CVXPY_CONVOLUTION_UNARY_MIN"],[1,1,1,"","test_CVXPY_MAXIMUM_McCormick"],[1,1,1,"","test_CVXPY_MAX_UNARY_NEW_AS_MAX"],[1,1,1,"","test_CVXPY_MAX_UNARY_NEW_AS_MAX_FORM"],[1,1,1,"","test_CVXPY_MAX_UNARY_NEW_AS_MIN"],[1,1,1,"","test_CVXPY_MAX_UNARY_OLD"],[1,1,1,"","test_CVXPY_MULTIPLICATION_GP"],[1,1,1,"","test_CVXPY_MULTIPLICATION_McCormick"]],"src.gateSizing.test_algorithms":[[1,1,1,"","computeMAPE"],[1,1,1,"","scalingBins_CVXPY_GP"],[1,1,1,"","scalingOptimization_CVXPY_GP"],[1,1,1,"","testAlgorithms"],[1,1,1,"","testAlgorithms_CVXPY_GP"],[1,1,1,"","testAlgorithms_MOSEK"],[1,1,1,"","testAlgorithms_PRESOLVE"]],"src.gateSizing.test_mosekOperations":[[1,1,1,"","streamprinter"],[1,1,1,"","testConvolution_MAX"],[1,1,1,"","testMaximum_GP"],[1,1,1,"","testMaximum_MAX"],[1,1,1,"","testMaximum_MAX_CONV"],[1,1,1,"","testMaximum_MAX_CONV2_asmin"],[1,1,1,"","testMaximum_MAX_CONV_asmin"],[1,1,1,"","testMult_GP"],[1,1,1,"","test_setting"]],"src.gateSizing.test_parser":[[1,1,1,"","parserTest1"]],src:[[1,0,0,"-","gateSizing"]]},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method"},terms:{"0":[0,1],"1":[0,1],"2":[0,1],"2d":[0,1],"3":[0,1],"boolean":[0,1],"case":[0,1],"class":[0,1],"float":[0,1],"function":[0,1],"import":[0,1],"int":[0,1],"new":[0,1],"return":[0,1],"static":[0,1],"true":[0,1],"var":[0,1],A:[0,1],AND:[0,1],FOR:[0,1],For:[0,1],Is:[0,1],These:[0,1],a_i:[0,1],about:[0,1],accord:[0,1],add:[0,1],addit:[0,1],adjac:[0,1],affin:[0,1],after:[0,1],afterward:[0,1],ain:[0,1],algorithm:[0,1],all:[0,1],alpha:[0,1],also:[0,1],altern:[0,1],alwai:[0,1],an:[0,1],aout:[0,1],appear:[0,1],appendnextnod:[0,1],appendprevdelai:[0,1],approach:[0,1],approxim:[0,1],ar:[0,1],area:[0,1],argument:[0,1],argv:[0,1],arrai:[0,1],arriv:[0,1],asmin:[0,1],assum:[0,1],atribut:[0,1],averag:[0,1],b:[0,1],base:[0,1],begin:[0,1],being:[0,1],beta:[0,1],better:[0,1],bin:[0,1],binsinterv:[0,1],bool:[0,1],bound:[0,1],calcul:[0,1],calculatecircuitdelai:[0,1],calculatemean:[0,1],calculatemean_unari:[0,1],calculatestd:[0,1],calculatestd_unari:[0,1],can:[0,1],cannot:[0,1],cap:[0,1],capacit:[0,1],capacitan:[0,1],capload:[0,1],carlo:[0,1],cdf:[0,1],cell:[0,1],chang:[0,1],circuit:[0,1],circuitdelai:[0,1],clean:[0,1],cload:[0,1],cloadmat:[0,1],code:[0,1],coef:[0,1],coefici:[0,1],comment:[0,1],comput:[0,1],computegatedelai:[0,1],computeincidencematric:[0,1],computeinputcapacit:[0,1],computeloadcapacit:[0,1],computemap:[0,1],computetotalarea:[0,1],computetotalpow:[0,1],connect:[0,1],consid:[0,1],constant:[0,1],constr:[0,1],constr_cload:[0,1],constraint:[0,1],contain:[0,1],content:2,convconstraint:[0,1],convolut:[0,1],convolution_gp:[0,1],convolution_gp_opt:[0,1],convolution_mccormick:[0,1],convolution_unari:[0,1],convolution_unary_cut:[0,1],convolution_unary_divid:[0,1],convolution_unary_max_divid:[0,1],convolution_unary_max_divide_vector:[0,1],convolution_unary_mosek:[0,1],convolution_unary_old:[0,1],convolution_with_const:[0,1],convolutionclass:[0,1],convolutionoftwovarsnaiveful:[0,1],convolutionoftwovarsnaivesam:[0,1],convolutionoftwovarsnaivesame_unari:[0,1],convolutionoftwovarsshift:[0,1],convolutionoftwovarsunion:[0,1],convolv:[0,1],correspond:[0,1],count:[0,1],cp:[0,1],critic:[0,1],curnofconstr:[0,1],curnofvari:[0,1],current:[0,1],cut:[0,1],cutbin:[0,1],cutbins_unari:[0,1],cutbins_unary_vector:[0,1],cvxpy:[0,1],cvxpyvari:2,d:[0,1],d_i:[0,1],d_j:[0,1],data:[0,1],dec:[0,1],defin:[0,1],delai:[0,1],delaysrv:[0,1],depend:[0,1],deriv:[0,1],determin:[0,1],determinist:[0,1],deterministicdelai:2,deviat:[0,1],dictionari:[0,1],dictionrai:[0,1],differ:[0,1],disordered_nod:[0,1],distr:[0,1],distrfitt:2,distribut:[0,1],distro:[0,1],divis:[0,1],divison:[0,1],doe:[0,1],done:[0,1],doubl:[0,1],draw:[0,1],drive:[0,1],dtype:[0,1],due:[0,1],e:[0,1],e_i:[0,1],each:[0,1],edg:[0,1],edges1:[0,1],edges2:[0,1],elementwis:[0,1],encod:[0,1],end:[0,1],energi:[0,1],energyloss:[0,1],enforc:[0,1],enough:[0,1],envelop:[0,1],environ:[0,1],error:[0,1],examples_montecarlo:2,execut:[0,1],express:[0,1],f:[0,1],f_i:[0,1],factor:[0,1],fals:[0,1],fanout:[0,1],feasibl:[0,1],file:[0,1],filenam:[0,1],find:[0,1],findmaxdelayedg:[0,1],findmaxdelayg:[0,1],fit:[0,1],float64:[0,1],follow:[0,1],forgp:[0,1],form:[0,1],format:[0,1],formul:[0,1],formula:[0,1],free:[0,1],frequenc:[0,1],from:[0,1],full:[0,1],g:[0,1],gamma:[0,1],gate:0,gatedelai:[0,1],gates:2,gatescal:[0,1],gatescale_i:[0,1],gauss:[0,1],gaussian:[0,1],gener:[0,1],generateaccordingtomodel:[0,1],generatedistr:[0,1],get:[0,1],get_gauss_bin:[0,1],get_gauss_bins_unari:[0,1],get_histogram_from_unari:[0,1],get_input:[0,1],get_moments_from_simul:[0,1],get_ordered_path:[0,1],get_unknown_nod:[0,1],getconstrcload:[0,1],getconstrtim:[0,1],getdelayssta:[0,1],getincidencematrixfromnetlist:[0,1],getinputtimingconstr:[0,1],getmaximumdelai:[0,1],getpathdelai:[0,1],getvaluesformontecarlo:[0,1],give:[0,1],given:[0,1],gp:[0,1],graph:[0,1],have:[0,1],histogram:[0,1],histogramgener:2,i:[0,1],ident:[0,1],implement:[0,1],incid:[0,1],includ:[0,1],incom:[0,1],independ:[0,1],index:1,indic:0,inequ:[0,1],inf:[0,1],infinite_ladder_montecarlo:2,inform:[0,1],input1:[0,1],input2:[0,1],input:[0,1],input_mean:[0,1],input_nod:[0,1],input_simulation_data:[0,1],input_std:[0,1],inputcap:[0,1],inputcapacit:[0,1],instead:[0,1],integ:[0,1],integr:[0,1],interv:[0,1],its:[0,1],j:[0,1],just:[0,1],k:[0,1],kept:[0,1],know:[0,1],larg:[0,1],left:[0,1],len:[0,1],length:[0,1],line:[0,1],linear:[0,1],linearregress:[0,1],list:[0,1],load:[0,1],loadcapacit:[0,1],logic:[0,1],lognorm:[0,1],look:[0,1],loop:[0,1],loss:[0,1],lowerbound:[0,1],m:[0,1],main:[0,1],make:[0,1],mandatori:[0,1],matrix:[0,1],max:[0,1],maxarea:[0,1],maxconstraint:[0,1],maxdelai:[0,1],maxim:[0,1],maximum:[0,1],maximum_and_convolut:[0,1],maximum_and_convolution_unari:[0,1],maximum_and_convolution_vector:[0,1],maximum_and_convolution_vectorized_mem_fre:[0,1],maximum_and_convolution_vectorized_min:[0,1],maximum_elementwis:[0,1],maximum_form_unary_old_max:[0,1],maximum_gp:[0,1],maximum_gp_opt:[0,1],maximum_mccormick:[0,1],maximum_quad_unary_cut:[0,1],maximum_quad_unary_divid:[0,1],maximum_quad_unary_old:[0,1],maximum_unary_max_divid:[0,1],maximum_unary_max_divide_mem_fre:[0,1],maximum_unary_max_divide_vector:[0,1],maximumclass:[0,1],maxmontecarlo:[0,1],maxofdistributionscvxpy_gp:[0,1],maxofdistributionscvxpy_mccormick:[0,1],maxofdistributionscvxpy_unari:[0,1],maxofdistributionselementwis:[0,1],maxofdistributionsform:[0,1],maxofdistributionsmosek_unari:[0,1],maxofdistributionsquad:[0,1],maxofdistributionsquad_formula:[0,1],maxofdistributionsquad_formula_unari:[0,1],maxofdistributionsunari:[0,1],maxpow:[0,1],mc:[0,1],mccormick:[0,1],mean:[0,1],memori:[0,1],minim:[0,1],model:[0,1],modul:2,mont:[0,1],montecarlo:2,montecarlo_input:[0,1],montecarlo_nod:[0,1],more:[0,1],mosek:[0,1],mosekstatu:[0,1],mosektri:[0,1],mosekvari:2,mu:[0,1],n:[0,1],n_bin:[0,1],n_sampl:[0,1],n_unari:[0,1],naiv:[0,1],name:[0,1],netlist:[0,1],newconstr:[0,1],newdelai:[0,1],newnofconstr:[0,1],newnofvari:[0,1],next:[0,1],nextnod:[0,1],node:2,non:[0,1],none:[0,1],nonzero:[0,1],normal:[0,1],notat:[0,1],np:[0,1],number:[0,1],numberofbin:[0,1],numberofcel:[0,1],numberofdistro:[0,1],numberofg:[0,1],numberofsampl:[0,1],numberofunari:[0,1],numpi:[0,1],nunari:[0,1],object:[0,1],old:[0,1],one:[0,1],onli:[0,1],oper:[0,1],optim:[0,1],optimizeg:[0,1],optimizegatessimple_boyd:2,optimizegatesvectorized_boyd:2,option:[0,1],other:[0,1],otherwis:[0,1],out:[0,1],outgo:[0,1],output:[0,1],over:[0,1],overal:[0,1],own:[0,1],p:[0,1],p_i:[0,1],packag:2,page:1,pair:[0,1],param:[0,1],paramet:[0,1],pars:[0,1],parsefilenam:[0,1],parsegatespropertiesfromtxt:[0,1],parsenetlistintomatrix:[0,1],parser_matrix:2,parsertest1:[0,1],parseverbos:[0,1],part:[0,1],path:[0,1],pathdelai:[0,1],pdf:[0,1],perform:[0,1],pleas:[0,1],plot:[0,1],plotdistro:[0,1],plotdistrosforinput:[0,1],plotforthesi:[0,1],plotforthesis2:[0,1],plotlinesforbin:[0,1],plotnonzero:[0,1],plotpresolv:[0,1],plotscalingoptim:[0,1],plotter:2,possibl:[0,1],power:[0,1],preprocess:[0,1],presolv:[0,1],prevdelai:[0,1],previou:[0,1],prob:[0,1],problem:[0,1],program:[0,1],properti:[0,1],put:[0,1],putintoqueu:[0,1],python:[0,1],quadrat:[0,1],queue:[0,1],random:[0,1],random_from_cdf:[0,1],randomli:[0,1],randomvar:[0,1],randomvari:[0,1],randomvariablecvxpi:[0,1],randomvariablehist_numpi:2,randomvariablemosek:[0,1],recalcul:[0,1],recalculateparam:[0,1],reg:[0,1],regress:[0,1],repr:[0,1],repres:[0,1],represent:[0,1],resist:[0,1],result:[0,1],resultclass:[0,1],ret:[0,1],right:[0,1],root:[0,1],rootnod:[0,1],rv:[0,1],s:0,sake:[0,1],same:[0,1],sampl:[0,1],save:[0,1],savemodel:[0,1],scale:[0,1],scalingbins_cvxpy_gp:[0,1],scalingoptimization_cvxpy_gp:[0,1],search:1,secondvari:[0,1],see:[0,1],self:[0,1],set:[0,1],setnextnod:[0,1],setprevdelai:[0,1],shift:[0,1],should:[0,1],shouldsav:[0,1],sigma:[0,1],significantli:[0,1],simplifi:[0,1],simuat:[0,1],simul:[0,1],size:0,slack:[0,1],slower:[0,1],sourc:[0,1],src:[0,1],ssta:2,standard:[0,1],start:[0,1],std:[0,1],step:[0,1],str:[0,1],streamprint:[0,1],string:[0,1],sublist:[0,1],submodul:2,sum:[0,1],sum_i:[0,1],symmetri:[0,1],t:[0,1],t_i:[0,1],t_j:[0,1],take:[0,1],task:[0,1],test:[0,1],test_algorithm:2,test_cvxpy_convolution_gp:[0,1],test_cvxpy_convolution_mccormick:[0,1],test_cvxpy_convolution_unary_max:[0,1],test_cvxpy_convolution_unary_min:[0,1],test_cvxpy_max_unary_new_as_max:[0,1],test_cvxpy_max_unary_new_as_max_form:[0,1],test_cvxpy_max_unary_new_as_min:[0,1],test_cvxpy_max_unary_old:[0,1],test_cvxpy_maximum_mccormick:[0,1],test_cvxpy_multiplication_gp:[0,1],test_cvxpy_multiplication_mccormick:[0,1],test_infiniteladd:2,test_mosekoper:2,test_operations_cvxpi:2,test_pars:2,test_rv_numpi:2,test_set:[0,1],test_ssta_cvxpi:2,test_ssta_numpi:2,testalgorithm:[0,1],testalgorithms_cvxpy_gp:[0,1],testalgorithms_mosek:[0,1],testalgorithms_presolv:[0,1],testconvolution_max:[0,1],testmaximum_gp:[0,1],testmaximum_max:[0,1],testmaximum_max_conv2_asmin:[0,1],testmaximum_max_conv:[0,1],testmaximum_max_conv_asmin:[0,1],testmult_gp:[0,1],text:[0,1],thi:[0,1],third:[0,1],thirdvari:[0,1],time:[0,1],timing_constr:[0,1],total:[0,1],tri:[0,1],trilinear:[0,1],tupl:[0,1],two:[0,1],txt:[0,1],unar:[0,1],unari:[0,1],unarizecut:[0,1],unarizedivid:[0,1],unaryhist:[0,1],unarytest:2,union:[0,1],unit:[0,1],uniteedg:[0,1],uniteedges_fit:[0,1],uniteedgesna:[0,1],unknown_nod:[0,1],up:[0,1],upper:[0,1],us:[0,1],valu:[0,1],variabl:[0,1],varianc:[0,1],vector:[0,1],verbosefil:[0,1],version:[0,1],vlsi:[0,1],want:[0,1],warn:[0,1],we:[0,1],weight:[0,1],whether:[0,1],which:[0,1],withh:[0,1],withsymmetryconstr:[0,1],work:[0,1],x1:[0,1],x2:[0,1],x:[0,1],x_i:[0,1],z:[0,1],zero:[0,1]},titles:["gateSizing package","Welcome to Gate Sizing\u2019s documentation!","src"],titleterms:{content:[0,1],cvxpyvari:[0,1],deterministicdelai:[0,1],distrfitt:[0,1],document:1,examples_montecarlo:[0,1],gate:1,gates:[0,1],histogramgener:[0,1],indic:1,infinite_ladder_montecarlo:[0,1],modul:[0,1],montecarlo:[0,1],mosekvari:[0,1],node:[0,1],optimizegatessimple_boyd:[0,1],optimizegatesvectorized_boyd:[0,1],packag:[0,1],parser_matrix:[0,1],plotter:[0,1],randomvariablehist_numpi:[0,1],s:1,size:1,src:2,ssta:[0,1],submodul:[0,1],tabl:1,test_algorithm:[0,1],test_infiniteladd:[0,1],test_mosekoper:[0,1],test_operations_cvxpi:[0,1],test_pars:[0,1],test_rv_numpi:[0,1],test_ssta_cvxpi:[0,1],test_ssta_numpi:[0,1],unarytest:[0,1],welcom:1}})