/* 
  Purpose: this script activates the climate charts. 
  Author: Gerardo Armendariz
  Date: 7-17-2013 
**/	
var pdsi_data = [[ new Date("1896/01/01"),  0.0225],
	[ new Date("1897/01/01"), 0.2425],
	[ new Date("1898/01/01"), -0.156666667],
	[ new Date("1899/01/01"), -0.180833333],
	[ new Date("1900/01/01"), -1.630833333],
	[ new Date("1901/01/01"), -1.869166667], 	
	[ new Date("1902/01/01"), -2.653333333],
	[ new Date("1903/01/01"), -1.983333333],
	[ new Date("1904/01/01"), -2.951666667],
	[ new Date("1905/01/01"), 2.003333333],
	[ new Date("1906/01/01"), 3.799166667],
	[ new Date("1907/01/01"), 3.075],
	[ new Date("1908/01/01"), 2.779166667],
	[ new Date("1909/01/01"), 1.625833333],
	[ new Date("1910/01/01"), -0.991666667],
	[ new Date("1911/01/01"), -0.523333333],
	[ new Date("1912/01/01"), 0.1525],
	[ new Date("1913/01/01"), -0.144166667],
	[ new Date("1914/01/01"), 0.1525],
	[ new Date("1915/01/01"), 3.134166667],
	[ new Date("1916/01/01"), 2.524166667],
	[ new Date("1917/01/01"), 0.211666667],
	[ new Date("1918/01/01"), -1.283333333],
	[ new Date("1919/01/01"), 0.198333333],
	[ new Date("1920/01/01"), 2.053333333],
	[ new Date("1921/01/01"), -0.720833333],
	[ new Date("1922/01/01"), -0.21],
	[ new Date("1923/01/01"), -1.186666667],
	[ new Date("1924/01/01"), -0.079166667],
	[ new Date("1925/01/01"), -1.786666667],
	[ new Date("1926/01/01"), 0.316666667],
	[ new Date("1927/01/01"), 0.085],
	[ new Date("1928/01/01"), -1.523333333],
	[ new Date("1929/01/01"), -1.67],
	[ new Date("1930/01/01"), -0.153333333],
	[ new Date("1931/01/01"), 0.925833333],
	[ new Date("1932/01/01"), 2.285],
	[ new Date("1933/01/01"), -0.3975],
	[ new Date("1934/01/01"), -1.305833333],
	[ new Date("1935/01/01"), -0.135833333],
	[ new Date("1936/01/01"), 0.0975],
	[ new Date("1937/01/01"), 0.06],
	[ new Date("1938/01/01"), -0.35],
	[ new Date("1939/01/01"), -1.344166667],
	[ new Date("1940/01/01"), -1.071666667],
	[ new Date("1941/01/01"), 0.673333333],
	[ new Date("1942/01/01"), -0.194166667],
	[ new Date("1943/01/01"), -2.338333333],
	[ new Date("1944/01/01"), -1.850833333],
	[ new Date("1945/01/01"), -0.2],
	[ new Date("1946/01/01"), -0.384166667],
	[ new Date("1947/01/01"), -1.474166667],
	[ new Date("1948/01/01"), -2.49],
	[ new Date("1949/01/01"), -1.77],
	[ new Date("1950/01/01"), -1.184166667],
	[ new Date("1951/01/01"), -1.206666667],
	[ new Date("1952/01/01"), 0.469166667],
	[ new Date("1953/01/01"), -0.549166667],
	[ new Date("1954/01/01"), -1.009166667],
	[ new Date("1955/01/01"), -0.3375],
	[ new Date("1956/01/01"), -1.019166667],
	[ new Date("1957/01/01"), -2.14],
	[ new Date("1958/01/01"), -0.1],
	[ new Date("1959/01/01"), -0.873333333],
	[ new Date("1960/01/01"), -0.245],
	[ new Date("1961/01/01"), -1.161666667],
	[ new Date("1962/01/01"), 1.011666667],
	[ new Date("1963/01/01"), -1.205],
	[ new Date("1964/01/01"), -0.26],
	[ new Date("1965/01/01"), -0.01],
	[ new Date("1966/01/01"), 1.49],
	[ new Date("1967/01/01"), 1.335833333],
	[ new Date("1968/01/01"), 1.5575],
	[ new Date("1969/01/01"), -0.878333333],
	[ new Date("1970/01/01"), -1.676666667],
	[ new Date("1971/01/01"), -1.921666667],
	[ new Date("1972/01/01"), -0.285833333],
	[ new Date("1973/01/01"), 1.066666667],
	[ new Date("1974/01/01"), -1.463333333],
	[ new Date("1975/01/01"), -0.075],
	[ new Date("1976/01/01"), -0.600833333],
	[ new Date("1977/01/01"), -0.6],
	[ new Date("1978/01/01"), 1.341666667],
	[ new Date("1979/01/01"), 1.934166667],
	[ new Date("1980/01/01"), -0.663333333],
	[ new Date("1981/01/01"), -0.34],
	[ new Date("1982/01/01"), -1.268333333],
	[ new Date("1983/01/01"), 1.740833333],
	[ new Date("1984/01/01"), 4.4675],
	[ new Date("1985/01/01"), 4.800833333],
	[ new Date("1986/01/01"), 3.051666667],
	[ new Date("1987/01/01"), 1.708333333],
	[ new Date("1988/01/01"), 1.178333333],
	[ new Date("1989/01/01"), -0.5125],
	[ new Date("1990/01/01"), -0.6225],
	[ new Date("1991/01/01"), 1.726666667],
	[ new Date("1992/01/01"), 2.1975],
	[ new Date("1993/01/01"), 3.110833333],
	[ new Date("1994/01/01"), -0.166666667],
	[ new Date("1995/01/01"), 0.73],
	[ new Date("1996/01/01"), -2.114166667],
	[ new Date("1997/01/01"), -2.766666667],
	[ new Date("1998/01/01"), 0.3775],
	[ new Date("1999/01/01"), -0.415],
	[ new Date("2000/01/01"), -1.850833333],
	[ new Date("2001/01/01"), 1.646666667],
	[ new Date("2002/01/01"), -1.575],
	[ new Date("2003/01/01"), -1.790833333],
	[ new Date("2004/01/01"), -1.763333333],
	[ new Date("2005/01/01"), -2.13],
	[ new Date("2006/01/01"), -3.646666667],
	[ new Date("2007/01/01"), -3.504166667],
	[ new Date("2008/01/01"), -3.181666667],
	[ new Date("2009/01/01"), -3.235833333],
	[ new Date("2010/01/01"), -2.871666667],
	[ new Date("2011/01/01"), -3.783333333],
	[ new Date("2012/01/01"), -4.2525]];


var spei_data = [[ new Date("1896/01/01"),-0.28],
	[ new Date("1897/01/01"),0.91],
	[ new Date("1898/01/01"),-0.56],
	[ new Date("1899/01/01"),-0.64],
	[ new Date("1900/01/01"),-1.27],
	[ new Date("1901/01/01"),-0.37],
	[ new Date("1902/01/01"),-1.87],
	[ new Date("1903/01/01"),-0.01],
	[ new Date("1904/01/01"),-1.62],
	[ new Date("1905/01/01"),2.46],
	[ new Date("1906/01/01"),0.43],
	[ new Date("1907/01/01"),1.29],
	[ new Date("1908/01/01"),0.39],
	[ new Date("1909/01/01"),0.29],
	[ new Date("1910/01/01"),-0.8],
	[ new Date("1911/01/01"),0.26],
	[ new Date("1912/01/01"),0.23],
	[ new Date("1913/01/01"),-0.38],
	[ new Date("1914/01/01"),0.7],
	[ new Date("1915/01/01"),2.18],
	[ new Date("1916/01/01"),0.84],
	[ new Date("1917/01/01"),0.07],
	[ new Date("1918/01/01"),-1.81],
	[ new Date("1919/01/01"),1.45],
	[ new Date("1920/01/01"),0.67],
	[ new Date("1921/01/01"),0.18],
	[ new Date("1922/01/01"),-0.59],
	[ new Date("1923/01/01"),-0.75],
	[ new Date("1924/01/01"),-0.65],
	[ new Date("1925/01/01"),-0.85],
	[ new Date("1926/01/01"),1.09],
	[ new Date("1927/01/01"),0.45],
	[ new Date("1928/01/01"),-1.61],
	[ new Date("1929/01/01"),-0.01],
	[ new Date("1930/01/01"),0.3],
	[ new Date("1931/01/01"),2.08],
	[ new Date("1932/01/01"),0.32],
	[ new Date("1933/01/01"),-0.4],
	[ new Date("1934/01/01"),-0.79],
	[ new Date("1935/01/01"),0.97],
	[ new Date("1936/01/01"),-0.26],
	[ new Date("1937/01/01"),0.11],
	[ new Date("1938/01/01"),0],
	[ new Date("1939/01/01"),-1.02],
	[ new Date("1940/01/01"),0.53],
	[ new Date("1941/01/01"),0.76],
	[ new Date("1942/01/01"),-0.74],
	[ new Date("1943/01/01"),-1.08],
	[ new Date("1944/01/01"),-0.24],
	[ new Date("1945/01/01"),-0.12],
	[ new Date("1946/01/01"),0.36],
	[ new Date("1947/01/01"),-1.61],
	[ new Date("1948/01/01"),-0.77],
	[ new Date("1949/01/01"),-0.11],
	[ new Date("1950/01/01"),-0.48],
	[ new Date("1951/01/01"),-0.74],
	[ new Date("1952/01/01"),1.06],
	[ new Date("1953/01/01"),-1.49],
	[ new Date("1954/01/01"),0.65],
	[ new Date("1955/01/01"),-0.1],
	[ new Date("1956/01/01"),-1.8],
	[ new Date("1957/01/01"),-0.85],
	[ new Date("1958/01/01"),1.16],
	[ new Date("1959/01/01"),-0.67],
	[ new Date("1960/01/01"),0.39],
	[ new Date("1961/01/01"),0.33],
	[ new Date("1962/01/01"),-0.2],
	[ new Date("1963/01/01"),-0.3],
	[ new Date("1964/01/01"),0.91],
	[ new Date("1965/01/01"),-0.64],
	[ new Date("1966/01/01"),2.07],
	[ new Date("1967/01/01"),-0.43],
	[ new Date("1968/01/01"),0.87],
	[ new Date("1969/01/01"),-0.36],
	[ new Date("1970/01/01"),-0.44],
	[ new Date("1971/01/01"),-0.64],
	[ new Date("1972/01/01"),-0.2],
	[ new Date("1973/01/01"),0.69],
	[ new Date("1974/01/01"),-0.37],
	[ new Date("1975/01/01"),-0.07],
	[ new Date("1976/01/01"),-0.02],
	[ new Date("1977/01/01"),-0.58],
	[ new Date("1978/01/01"),1.18],
	[ new Date("1979/01/01"),1.48],
	[ new Date("1980/01/01"),-0.11],
	[ new Date("1981/01/01"),-0.15],
	[ new Date("1982/01/01"),-0.38],
	[ new Date("1983/01/01"),2.53],
	[ new Date("1984/01/01"),2.06],
	[ new Date("1985/01/01"),1.29],
	[ new Date("1986/01/01"),0.79],
	[ new Date("1987/01/01"),0.48],
	[ new Date("1988/01/01"),0.79],
	[ new Date("1989/01/01"),-0.72],
	[ new Date("1990/01/01"),1.51],
	[ new Date("1991/01/01"),0.03],
	[ new Date("1992/01/01"),1.6],
	[ new Date("1993/01/01"),1.49],
	[ new Date("1994/01/01"),-0.42],
	[ new Date("1995/01/01"),0.76],
	[ new Date("1996/01/01"),-1.08],
	[ new Date("1997/01/01"),-0.78],
	[ new Date("1998/01/01"),1.16],
	[ new Date("1999/01/01"),0.21],
	[ new Date("2000/01/01"),-1.27],
	[ new Date("2001/01/01"),1.77],
	[ new Date("2002/01/01"),-0.95],
	[ new Date("2003/01/01"),0.15],
	[ new Date("2004/01/01"),-0.74],
	[ new Date("2005/01/01"),-0.49],
	[ new Date("2006/01/01"),-1.02],
	[ new Date("2007/01/01"),-0.83],
	[ new Date("2008/01/01"),-0.31],
	[ new Date("2009/01/01"),-1.92],
	[ new Date("2010/01/01"),-0.42],
	[ new Date("2011/01/01"),-2.41],
	[ new Date("2012/01/01"),-1.23]];

// the first year of ppt is not included because pdsi needs to be updated
//[ new Date("1895/01/01"), 404.6535326],
var ppt_data = [[ new Date("1896/01/01"), 453.8335598],
	[ new Date("1897/01/01"), 486.4830163],
	[ new Date("1898/01/01"), 498.0726902],
	[ new Date("1899/01/01"), 370.3763587],
	[ new Date("1900/01/01"), 362.5951087],
	[ new Date("1901/01/01"), 463.2595109],
	[ new Date("1902/01/01"), 367.9266304],
	[ new Date("1903/01/01"), 361.9347826],
	[ new Date("1904/01/01"), 381.435462],
	[ new Date("1905/01/01"), 963.6127717],
	[ new Date("1906/01/01"), 494.7540761],
	[ new Date("1907/01/01"), 593.890625],
	[ new Date("1908/01/01"), 530.3396739],
	[ new Date("1909/01/01"), 482.6283967],
	[ new Date("1910/01/01"), 393.6983696],
	[ new Date("1911/01/01"), 585.2819293],
	[ new Date("1912/01/01"), 466.5190217],
	[ new Date("1913/01/01"), 533.923913],
	[ new Date("1914/01/01"), 794.6216033],
	[ new Date("1915/01/01"), 510.2567935],
	[ new Date("1916/01/01"), 552.6548913],
	[ new Date("1917/01/01"), 429.189538],
	[ new Date("1918/01/01"), 412.4952446],
	[ new Date("1919/01/01"), 751.2873641],
	[ new Date("1920/01/01"), 419.1338315],
	[ new Date("1921/01/01"), 522.701087],
	[ new Date("1922/01/01"), 412.2126359],
	[ new Date("1923/01/01"), 566.1820652],
	[ new Date("1924/01/01"), 259.4164402],
	[ new Date("1925/01/01"), 456.2724185],
	[ new Date("1926/01/01"), 626.2432065],
	[ new Date("1927/01/01"), 471.6059783],
	[ new Date("1928/01/01"), 367.2683424],
	[ new Date("1929/01/01"), 446.5095109],
	[ new Date("1930/01/01"), 574.185462],
	[ new Date("1931/01/01"), 811.1433424],
	[ new Date("1932/01/01"), 512.3396739],
	[ new Date("1933/01/01"), 418.0828804],
	[ new Date("1934/01/01"), 430.8831522],
	[ new Date("1935/01/01"), 614.3070652],
	[ new Date("1936/01/01"), 442.2649457],
	[ new Date("1937/01/01"), 475.6596467],
	[ new Date("1938/01/01"), 465.5883152],
	[ new Date("1939/01/01"), 413.5985054],
	[ new Date("1940/01/01"), 605.5869565],
	[ new Date("1941/01/01"), 544.4748641],
	[ new Date("1942/01/01"), 349.9680707],
	[ new Date("1943/01/01"), 383.1086957],
	[ new Date("1944/01/01"), 552.8383152],
	[ new Date("1945/01/01"), 398.4225543],
	[ new Date("1946/01/01"), 522.7425272],
	[ new Date("1947/01/01"), 341.872962],
	[ new Date("1948/01/01"), 397.544837],
	[ new Date("1949/01/01"), 488.201087],
	[ new Date("1950/01/01"), 347.6963315],
	[ new Date("1951/01/01"), 567.2588315],
	[ new Date("1952/01/01"), 551.8464674],
	[ new Date("1953/01/01"), 249.0217391],
	[ new Date("1954/01/01"), 559.173913],
	[ new Date("1955/01/01"), 502.091712],
	[ new Date("1956/01/01"), 291.6691576],
	[ new Date("1957/01/01"), 464.1671196],
	[ new Date("1958/01/01"), 584.4021739],
	[ new Date("1959/01/01"), 509.0061141],
	[ new Date("1960/01/01"), 466.158288],
	[ new Date("1961/01/01"), 608.8308424],
	[ new Date("1962/01/01"), 377.25],
	[ new Date("1963/01/01"), 496.5258152],
	[ new Date("1964/01/01"), 573.4755435],
	[ new Date("1965/01/01"), 550.6419837],
	[ new Date("1966/01/01"), 579.314538],
	[ new Date("1967/01/01"), 622.96875],
	[ new Date("1968/01/01"), 437.0081522],
	[ new Date("1969/01/01"), 425.2513587],
	[ new Date("1970/01/01"), 419.3043478],
	[ new Date("1971/01/01"), 566.1528533],
	[ new Date("1972/01/01"), 475.1447011],
	[ new Date("1973/01/01"), 399.4959239],
	[ new Date("1974/01/01"), 521.4701087],
	[ new Date("1975/01/01"), 424.3851902],
	[ new Date("1976/01/01"), 499.5495924],
	[ new Date("1977/01/01"), 532.3165761],
	[ new Date("1978/01/01"), 730.3097826],
	[ new Date("1979/01/01"), 420.3994565],
	[ new Date("1980/01/01"), 454.9164402],
	[ new Date("1981/01/01"), 509.8226902],
	[ new Date("1982/01/01"), 541.1222826],
	[ new Date("1983/01/01"), 898.4578804],
	[ new Date("1984/01/01"), 771.8682065],
	[ new Date("1985/01/01"), 564.6752717],
	[ new Date("1986/01/01"), 548.8661685],
	[ new Date("1987/01/01"), 552.857337],
	[ new Date("1988/01/01"), 605.6182065],
	[ new Date("1989/01/01"), 379.2663043],
	[ new Date("1990/01/01"), 666.0346467],
	[ new Date("1991/01/01"), 531.0686141],
	[ new Date("1992/01/01"), 689.2995924],
	[ new Date("1993/01/01"), 617.7622283],
	[ new Date("1994/01/01"), 600.4150815],
	[ new Date("1995/01/01"), 412.0407609],
	[ new Date("1996/01/01"), 357.6379076],
	[ new Date("1997/01/01"), 503.6725543],
	[ new Date("1998/01/01"), 551.9653533],
	[ new Date("1999/01/01"), 450.9748641],
	[ new Date("2000/01/01"), 630.345788],
	[ new Date("2001/01/01"), 532.5679348],
	[ new Date("2002/01/01"), 384.1942935],
	[ new Date("2003/01/01"), 499.1569293],
	[ new Date("2004/01/01"), 402.5190217],
	[ new Date("2005/01/01"), 367.142663],
	[ new Date("2006/01/01"), 396.814538],
	[ new Date("2007/01/01"), 434.7173913],
	[ new Date("2008/01/01"), 417.4966033],
	[ new Date("2009/01/01"), 287.6589674],
	[ new Date("2010/01/01"), 442.0774457],
	[ new Date("2011/01/01"), 308.4035326],
	[ new Date("2012/01/01"), 315.9320652]];

// the first year of tmin is not included because pdsi needs to be updated
//[ new Date("1895/01/01"), 6.535326087],
var tmin_data = [[ new Date("1896/01/01"), 7.019021739],
	[ new Date("1897/01/01"), 7.298913043],
	[ new Date("1898/01/01"), 7.079483696],
	[ new Date("1899/01/01"), 7.032608696],
	[ new Date("1900/01/01"), 7.980978261],
	[ new Date("1901/01/01"), 7.960597826],
	[ new Date("1902/01/01"), 7.33423913],
	[ new Date("1903/01/01"), 7.421875],
	[ new Date("1904/01/01"), 7.688858696],
	[ new Date("1905/01/01"), 8.077445652],
	[ new Date("1906/01/01"), 7.894701087],
	[ new Date("1907/01/01"), 7.971467391],
	[ new Date("1908/01/01"), 7.611413043],
	[ new Date("1909/01/01"), 7.25951087],
	[ new Date("1910/01/01"), 8.155570652],
	[ new Date("1911/01/01"), 7.594429348],
	[ new Date("1912/01/01"), 6.601902174],
	[ new Date("1913/01/01"), 7.858695652],
	[ new Date("1914/01/01"), 8.952445652],
	[ new Date("1915/01/01"), 7.591032609],
	[ new Date("1916/01/01"), 8.048233696],
	[ new Date("1917/01/01"), 7.582201087],
	[ new Date("1918/01/01"), 8.473505435],
	[ new Date("1919/01/01"), 7.699048913],
	[ new Date("1920/01/01"), 7.473505435],
	[ new Date("1921/01/01"), 8.674592391],
	[ new Date("1922/01/01"), 8.014266304],
	[ new Date("1923/01/01"), 7.944293478],
	[ new Date("1924/01/01"), 7.88451087],
	[ new Date("1925/01/01"), 7.976902174],
	[ new Date("1926/01/01"), 8.436820652],
	[ new Date("1927/01/01"), 8.582201087],
	[ new Date("1928/01/01"), 8.300951087],
	[ new Date("1929/01/01"), 7.659646739],
	[ new Date("1930/01/01"), 8.0625],
	[ new Date("1931/01/01"), 7.55298913],
	[ new Date("1932/01/01"), 7.190896739],
	[ new Date("1933/01/01"), 7.383831522],
	[ new Date("1934/01/01"), 8.355978261],
	[ new Date("1935/01/01"), 7.947690217],
	[ new Date("1936/01/01"), 8.161684783],
	[ new Date("1937/01/01"), 7.908967391],
	[ new Date("1938/01/01"), 8.046875],
	[ new Date("1939/01/01"), 7.830163043],
	[ new Date("1940/01/01"), 8.714673913],
	[ new Date("1941/01/01"), 7.692255435],
	[ new Date("1942/01/01"), 7.540081522],
	[ new Date("1943/01/01"), 8.158967391],
	[ new Date("1944/01/01"), 6.826766304],
	[ new Date("1945/01/01"), 6.832880435],
	[ new Date("1946/01/01"), 7.182744565],
	[ new Date("1947/01/01"), 7.128396739],
	[ new Date("1948/01/01"), 7.149456522],
	[ new Date("1949/01/01"), 7.229619565],
	[ new Date("1950/01/01"), 7.909646739],
	[ new Date("1951/01/01"), 7.461956522],
	[ new Date("1952/01/01"), 7.370244565],
	[ new Date("1953/01/01"), 7.207201087],
	[ new Date("1954/01/01"), 8.399456522],
	[ new Date("1955/01/01"), 6.817255435],
	[ new Date("1956/01/01"), 7.055027174],
	[ new Date("1957/01/01"), 8.164402174],
	[ new Date("1958/01/01"), 8.061141304],
	[ new Date("1959/01/01"), 7.985733696],
	[ new Date("1960/01/01"), 7.425951087],
	[ new Date("1961/01/01"), 7.810461957],
	[ new Date("1962/01/01"), 8.002717391],
	[ new Date("1963/01/01"), 7.779211957],
	[ new Date("1964/01/01"), 6.557065217],
	[ new Date("1965/01/01"), 7.366168478],
	[ new Date("1966/01/01"), 7.513586957],
	[ new Date("1967/01/01"), 7.310461957],
	[ new Date("1968/01/01"), 7.20923913],
	[ new Date("1969/01/01"), 7.371603261],
	[ new Date("1970/01/01"), 6.91236413],
	[ new Date("1971/01/01"), 6.533288043],
	[ new Date("1972/01/01"), 7.269701087],
	[ new Date("1973/01/01"), 6.811820652],
	[ new Date("1974/01/01"), 7.280570652],
	[ new Date("1975/01/01"), 6.766983696],
	[ new Date("1976/01/01"), 6.976222826],
	[ new Date("1977/01/01"), 7.597826087],
	[ new Date("1978/01/01"), 8.094429348],
	[ new Date("1979/01/01"), 7.220788043],
	[ new Date("1980/01/01"), 7.885190217],
	[ new Date("1981/01/01"), 8.5625],
	[ new Date("1982/01/01"), 7.741168478],
	[ new Date("1983/01/01"), 7.408967391],
	[ new Date("1984/01/01"), 7.709918478],
	[ new Date("1985/01/01"), 7.866168478],
	[ new Date("1986/01/01"), 8.508152174],
	[ new Date("1987/01/01"), 7.659646739],
	[ new Date("1988/01/01"), 7.923233696],
	[ new Date("1989/01/01"), 8.398777174],
	[ new Date("1990/01/01"), 7.975543478],
	[ new Date("1991/01/01"), 7.621603261],
	[ new Date("1992/01/01"), 8.279891304],
	[ new Date("1993/01/01"), 8.44701087],
	[ new Date("1994/01/01"), 8.746603261],
	[ new Date("1995/01/01"), 8.620244565],
	[ new Date("1996/01/01"), 8.995244565],
	[ new Date("1997/01/01"), 7.774456522],
	[ new Date("1998/01/01"), 7.423913043],
	[ new Date("1999/01/01"), 7.523097826],
	[ new Date("2000/01/01"), 8.044157609],
	[ new Date("2001/01/01"), 7.50611413],
	[ new Date("2002/01/01"), 7.39673913],
	[ new Date("2003/01/01"), 7.873641304],
	[ new Date("2004/01/01"), 7.474184783],
	[ new Date("2005/01/01"), 8.105298913],
	[ new Date("2006/01/01"), 8.351902174],
	[ new Date("2007/01/01"), 7.955842391],
	[ new Date("2008/01/01"), 7.44701087],
	[ new Date("2009/01/01"), 7.974184783],
	[ new Date("2010/01/01"), 7.499320652],
	[ new Date("2011/01/01"), 7.003396739],
	[ new Date("2012/01/01"), 7.578804348]];

// the first year of tmax is not included because pdsi needs to be updated
//[ new Date("1895/01/01"),21.44497283],
var tmax_data = [[ new Date("1896/01/01"),22.21399457],
	[ new Date("1897/01/01"),21.15013587],
	[ new Date("1898/01/01"),21.00543478],
	[ new Date("1899/01/01"),21.28057065],
	[ new Date("1900/01/01"),22.57336957],
	[ new Date("1901/01/01"),21.84035326],
	[ new Date("1902/01/01"),21.93953804],
	[ new Date("1903/01/01"),22.13315217],
	[ new Date("1904/01/01"),22.51834239],
	[ new Date("1905/01/01"),19.61277174],
	[ new Date("1906/01/01"),20.94157609],
	[ new Date("1907/01/01"),20.8736413],
	[ new Date("1908/01/01"),21.609375],
	[ new Date("1909/01/01"),21.84375],
	[ new Date("1910/01/01"),23.22894022],
	[ new Date("1911/01/01"),21.80774457],
	[ new Date("1912/01/01"),21.55366848],
	[ new Date("1913/01/01"),21.32472826],
	[ new Date("1914/01/01"),21.87771739],
	[ new Date("1915/01/01"),21.91440217],
	[ new Date("1916/01/01"),22.85054348],
	[ new Date("1917/01/01"),22.62567935],
	[ new Date("1918/01/01"),21.61752717],
	[ new Date("1919/01/01"),21.00475543],
	[ new Date("1920/01/01"),21.72078804],
	[ new Date("1921/01/01"),22.65013587],
	[ new Date("1922/01/01"),22.47146739],
	[ new Date("1923/01/01"),21.19972826],
	[ new Date("1924/01/01"),22.61548913],
	[ new Date("1925/01/01"),22.54891304],
	[ new Date("1926/01/01"),21.70923913],
	[ new Date("1927/01/01"),22.61548913],
	[ new Date("1928/01/01"),22.55706522],
	[ new Date("1929/01/01"),22.13315217],
	[ new Date("1930/01/01"),21.78057065],
	[ new Date("1931/01/01"),22.39130435],
	[ new Date("1932/01/01"),23.51290761],
	[ new Date("1933/01/01"),23.484375],
	[ new Date("1934/01/01"),24.26494565],
	[ new Date("1935/01/01"),22.61548913],
	[ new Date("1936/01/01"),23.31521739],
	[ new Date("1937/01/01"),22.89945652],
	[ new Date("1938/01/01"),23.38722826],
	[ new Date("1939/01/01"),22.95991848],
	[ new Date("1940/01/01"),22.74524457],
	[ new Date("1941/01/01"),21.55706522],
	[ new Date("1942/01/01"),23.31929348],
	[ new Date("1943/01/01"),23.76970109],
	[ new Date("1944/01/01"),22.45788043],
	[ new Date("1945/01/01"),22.76086957],
	[ new Date("1946/01/01"),23.02105978],
	[ new Date("1947/01/01"),22.67459239],
	[ new Date("1948/01/01"),22.83831522],
	[ new Date("1949/01/01"),22.47146739],
	[ new Date("1950/01/01"),24.27649457],
	[ new Date("1951/01/01"),22.59918478],
	[ new Date("1952/01/01"),22.36277174],
	[ new Date("1953/01/01"),23.24524457],
	[ new Date("1954/01/01"),23.74592391],
	[ new Date("1955/01/01"),22.15896739],
	[ new Date("1956/01/01"),22.94565217],
	[ new Date("1957/01/01"),22.70991848],
	[ new Date("1958/01/01"),22.65149457],
	[ new Date("1959/01/01"),23.00407609],
	[ new Date("1960/01/01"),22.94565217],
	[ new Date("1961/01/01"),22.56453804],
	[ new Date("1962/01/01"),23.09307065],
	[ new Date("1963/01/01"),23.22146739],
	[ new Date("1964/01/01"),21.65149457],
	[ new Date("1965/01/01"),22.53532609],
	[ new Date("1966/01/01"),22.54211957],
	[ new Date("1967/01/01"),23.01154891],
	[ new Date("1968/01/01"),22.64538043],
	[ new Date("1969/01/01"),23.1263587],
	[ new Date("1970/01/01"),23.01154891],
	[ new Date("1971/01/01"),22.52649457],
	[ new Date("1972/01/01"),23.43002717],
	[ new Date("1973/01/01"),22.76902174],
	[ new Date("1974/01/01"),23.01086957],
	[ new Date("1975/01/01"),22.609375],
	[ new Date("1976/01/01"),22.47894022],
	[ new Date("1977/01/01"),23.16032609],
	[ new Date("1978/01/01"),22.87296196],
	[ new Date("1979/01/01"),23.16304348],
	[ new Date("1980/01/01"),23.85597826],
	[ new Date("1981/01/01"),23.68546196],
	[ new Date("1982/01/01"),22.77309783],
	[ new Date("1983/01/01"),21.98029891],
	[ new Date("1984/01/01"),22.37092391],
	[ new Date("1985/01/01"),22.67255435],
	[ new Date("1986/01/01"),23.20652174],
	[ new Date("1987/01/01"),22.32336957],
	[ new Date("1988/01/01"),23.04076087],
	[ new Date("1989/01/01"),24.30298913],
	[ new Date("1990/01/01"),22.56453804],
	[ new Date("1991/01/01"),22.28532609],
	[ new Date("1992/01/01"),22.32336957],
	[ new Date("1993/01/01"),22.66372283],
	[ new Date("1994/01/01"),23.27377717],
	[ new Date("1995/01/01"),23.52785326],
	[ new Date("1996/01/01"),24.14470109],
	[ new Date("1997/01/01"),23.38586957],
	[ new Date("1998/01/01"),23.27921196],
	[ new Date("1999/01/01"),24.28940217],
	[ new Date("2000/01/01"),24.16440217],
	[ new Date("2001/01/01"),23.546875],
	[ new Date("2002/01/01"),24.25],
	[ new Date("2003/01/01"),24.34442935],
	[ new Date("2004/01/01"),22.98709239],
	[ new Date("2005/01/01"),23.6875],
	[ new Date("2006/01/01"),23.98777174],
	[ new Date("2007/01/01"),23.22282609],
	[ new Date("2008/01/01"),23.07744565],
	[ new Date("2009/01/01"),23.70380435],
	[ new Date("2010/01/01"),22.70108696],
	[ new Date("2011/01/01"),23.69633152],
	[ new Date("2012/01/01"),24.39402174]];


// the first year of tmin is not included because pdsi needs to be updated
// [ new Date("1895/01/01"), 6.535326087, 21.44497283],
var tmin_tmax_data = [[ new Date("1896/01/01"), 7.019021739, 22.21399457],
	[ new Date("1897/01/01"), 7.298913043, 21.15013587],
	[ new Date("1898/01/01"), 7.079483696, 21.00543478],
	[ new Date("1899/01/01"), 7.032608696, 21.28057065],
	[ new Date("1900/01/01"), 7.980978261, 22.57336957],
	[ new Date("1901/01/01"), 7.960597826, 21.84035326],
	[ new Date("1902/01/01"), 7.33423913, 21.93953804],
	[ new Date("1903/01/01"), 7.421875, 22.13315217],
	[ new Date("1904/01/01"), 7.688858696, 22.51834239],
	[ new Date("1905/01/01"), 8.077445652, 19.61277174],
	[ new Date("1906/01/01"), 7.894701087, 20.94157609],
	[ new Date("1907/01/01"), 7.971467391, 20.8736413],
	[ new Date("1908/01/01"), 7.611413043, 21.609375],
	[ new Date("1909/01/01"), 7.25951087, 21.84375],
	[ new Date("1910/01/01"), 8.155570652, 23.22894022],
	[ new Date("1911/01/01"), 7.594429348, 21.80774457],
	[ new Date("1912/01/01"), 6.601902174, 21.55366848],
	[ new Date("1913/01/01"), 7.858695652, 21.32472826],
	[ new Date("1914/01/01"), 8.952445652, 21.87771739],
	[ new Date("1915/01/01"), 7.591032609, 21.91440217],
	[ new Date("1916/01/01"), 8.048233696, 22.85054348],
	[ new Date("1917/01/01"), 7.582201087, 22.62567935],
	[ new Date("1918/01/01"), 8.473505435, 21.61752717],
	[ new Date("1919/01/01"), 7.699048913, 21.00475543],
	[ new Date("1920/01/01"), 7.473505435, 21.72078804],
	[ new Date("1921/01/01"), 8.674592391, 22.65013587],
	[ new Date("1922/01/01"), 8.014266304, 22.47146739],
	[ new Date("1923/01/01"), 7.944293478, 21.19972826],
	[ new Date("1924/01/01"), 7.88451087, 22.61548913],
	[ new Date("1925/01/01"), 7.976902174, 22.54891304],
	[ new Date("1926/01/01"), 8.436820652, 21.70923913],
	[ new Date("1927/01/01"), 8.582201087, 22.61548913],
	[ new Date("1928/01/01"), 8.300951087, 22.55706522],
	[ new Date("1929/01/01"), 7.659646739, 22.13315217],
	[ new Date("1930/01/01"), 8.0625, 21.78057065],
	[ new Date("1931/01/01"), 7.55298913, 22.39130435],
	[ new Date("1932/01/01"), 7.190896739, 23.51290761],
	[ new Date("1933/01/01"), 7.383831522, 23.484375],
	[ new Date("1934/01/01"), 8.355978261, 24.26494565],
	[ new Date("1935/01/01"), 7.947690217, 22.61548913],
	[ new Date("1936/01/01"), 8.161684783, 23.31521739],
	[ new Date("1937/01/01"), 7.908967391, 22.89945652],
	[ new Date("1938/01/01"), 8.046875, 23.38722826],
	[ new Date("1939/01/01"), 7.830163043, 22.95991848],
	[ new Date("1940/01/01"), 8.714673913, 22.74524457],
	[ new Date("1941/01/01"), 7.692255435, 21.55706522],
	[ new Date("1942/01/01"), 7.540081522, 23.31929348],
	[ new Date("1943/01/01"), 8.158967391, 23.76970109],
	[ new Date("1944/01/01"), 6.826766304, 22.45788043],
	[ new Date("1945/01/01"), 6.832880435, 22.76086957],
	[ new Date("1946/01/01"), 7.182744565, 23.02105978],
	[ new Date("1947/01/01"), 7.128396739, 22.67459239],
	[ new Date("1948/01/01"), 7.149456522, 22.83831522],
	[ new Date("1949/01/01"), 7.229619565, 22.47146739],
	[ new Date("1950/01/01"), 7.909646739, 24.27649457],
	[ new Date("1951/01/01"), 7.461956522, 22.59918478],
	[ new Date("1952/01/01"), 7.370244565, 22.36277174],
	[ new Date("1953/01/01"), 7.207201087, 23.24524457],
	[ new Date("1954/01/01"), 8.399456522, 23.74592391],
	[ new Date("1955/01/01"), 6.817255435, 22.15896739],
	[ new Date("1956/01/01"), 7.055027174, 22.94565217],
	[ new Date("1957/01/01"), 8.164402174, 22.70991848],
	[ new Date("1958/01/01"), 8.061141304, 22.65149457],
	[ new Date("1959/01/01"), 7.985733696, 23.00407609],
	[ new Date("1960/01/01"), 7.425951087, 22.94565217],
	[ new Date("1961/01/01"), 7.810461957, 22.56453804],
	[ new Date("1962/01/01"), 8.002717391, 23.09307065],
	[ new Date("1963/01/01"), 7.779211957, 23.22146739],
	[ new Date("1964/01/01"), 6.557065217, 21.65149457],
	[ new Date("1965/01/01"), 7.366168478, 22.53532609],
	[ new Date("1966/01/01"), 7.513586957, 22.54211957],
	[ new Date("1967/01/01"), 7.310461957, 23.01154891],
	[ new Date("1968/01/01"), 7.20923913, 22.64538043],
	[ new Date("1969/01/01"), 7.371603261, 23.1263587],
	[ new Date("1970/01/01"), 6.91236413, 23.01154891],
	[ new Date("1971/01/01"), 6.533288043, 22.52649457],
	[ new Date("1972/01/01"), 7.269701087, 23.43002717],
	[ new Date("1973/01/01"), 6.811820652, 22.76902174],
	[ new Date("1974/01/01"), 7.280570652, 23.01086957],
	[ new Date("1975/01/01"), 6.766983696, 22.609375],
	[ new Date("1976/01/01"), 6.976222826, 22.47894022],
	[ new Date("1977/01/01"), 7.597826087, 23.16032609],
	[ new Date("1978/01/01"), 8.094429348, 22.87296196],
	[ new Date("1979/01/01"), 7.220788043, 23.16304348],
	[ new Date("1980/01/01"), 7.885190217, 23.85597826],
	[ new Date("1981/01/01"), 8.5625, 23.68546196],
	[ new Date("1982/01/01"), 7.741168478, 22.77309783],
	[ new Date("1983/01/01"), 7.408967391, 21.98029891],
	[ new Date("1984/01/01"), 7.709918478, 22.37092391],
	[ new Date("1985/01/01"), 7.866168478, 22.67255435],
	[ new Date("1986/01/01"), 8.508152174, 23.20652174],
	[ new Date("1987/01/01"), 7.659646739, 22.32336957],
	[ new Date("1988/01/01"), 7.923233696, 23.04076087],
	[ new Date("1989/01/01"), 8.398777174, 24.30298913],
	[ new Date("1990/01/01"), 7.975543478, 22.56453804],
	[ new Date("1991/01/01"), 7.621603261, 22.28532609],
	[ new Date("1992/01/01"), 8.279891304, 22.32336957],
	[ new Date("1993/01/01"), 8.44701087, 22.66372283],
	[ new Date("1994/01/01"), 8.746603261, 23.27377717],
	[ new Date("1995/01/01"), 8.620244565, 23.52785326],
	[ new Date("1996/01/01"), 8.995244565, 24.14470109],
	[ new Date("1997/01/01"), 7.774456522, 23.38586957],
	[ new Date("1998/01/01"), 7.423913043, 23.27921196],
	[ new Date("1999/01/01"), 7.523097826, 24.28940217],
	[ new Date("2000/01/01"), 8.044157609, 24.16440217],
	[ new Date("2001/01/01"), 7.50611413, 23.546875],
	[ new Date("2002/01/01"), 7.39673913, 24.25],
	[ new Date("2003/01/01"), 7.873641304, 24.34442935],
	[ new Date("2004/01/01"), 7.474184783, 22.98709239],
	[ new Date("2005/01/01"), 8.105298913, 23.6875],
	[ new Date("2006/01/01"), 8.351902174, 23.98777174],
	[ new Date("2007/01/01"), 7.955842391, 23.22282609],
	[ new Date("2008/01/01"), 7.44701087, 23.07744565],
	[ new Date("2009/01/01"), 7.974184783, 23.70380435],
	[ new Date("2010/01/01"), 7.499320652, 22.70108696],
	[ new Date("2011/01/01"), 7.003396739, 23.69633152],
	[ new Date("2012/01/01"), 7.578804348, 24.39402174]];


var desired_range = null;

/*
 Continue working with the function in order to get to the selected da
 */ 
function setSelectionOnChart(startDate, endDate){

	startDate = (startDate.split(" ")[0]).split("-").join("/");

	for(var i = 0; i < pdsi_data.length; i++){
		var selectedDate = pdsi_data[i][0];
		var selectedMonth = eval(selectedDate.getMonth() + 1);
		var selectedDay = selectedDate.getDate();

		var selectedDate = selectedDate.getFullYear() + "/" + pad(selectedMonth.toString(),2) + "/" + pad(selectedDay.toString(),2);

		if(selectedDate == startDate){
			spei_graph.setSelection(i); 
			ppt_graph.setSelection(i); 
			tmin_tmax_graph.setSelection(i); 
			//tmin_graph.setSelection(i); 
			//tmax_graph.setSelection(i); 
			//debug.log("i = " + i);
			break;
		}
	}
	//var startDateArr = startDate.split("-");
	//startDate = startDateArr[1] + " " + startDateArr[2] + " " + startDateArr[0];

	//debug.log("Selection: " + startDate + "      "  + endDate  + "     " + selectedDate);
}

function pad (str, max) {
  return str.length < max ? pad("0" + str, max) : str;
}

function zoom(res) {
	var w = g2.xAxisRange();
	desired_range = [ w[0], w[0] + res * 1000 ];
	animate();
}
function reset() {
	desired_range = orig_range;
	animate();
}
function animate() {
	setTimeout(approach_range, 50);
}

function approach_range() {
	if (!desired_range) return;
	// go halfway there
	var range = g2.xAxisRange();
	if (Math.abs(desired_range[0] - range[0]) < 60 &&
    	Math.abs(desired_range[1] - range[1]) < 60) {
  	g2.updateOptions({dateWindow: desired_range});
  	// (do not set another timeout.)
	} else {
  	var new_range;
  	new_range = [0.5 * (desired_range[0] + range[0]),
               0.5 * (desired_range[1] + range[1])];
  	g2.updateOptions({dateWindow: new_range});
  	animate();
	}
}

  // this is the graph that shows the yearly SPEI dataset
  spei_graph = new Dygraph(document.getElementById("graph_spei_container"),spei_data,
		{
			labels: [ "Date", "SPEI" ],
			ylabel: 'Yearly SPEI<br/>(drought index)',
			highlightCircleSize: 6,
			axes: {
			  x: {
			    valueFormatter: function(ms) {
			      return '<b>Year:</b>' + new Date(ms).strftime('%Y');
			    }
			  }
			}
		});

ppt_graph = new Dygraph(document.getElementById("graph_ppt_container"),ppt_data,
		{
			labels: [ "Date", "PPT" ],
			ylabel: 'Annual Precipitation (mm)',
			highlightCircleSize: 6,
			axes: {
			  x: {
			    valueFormatter: function(ms) {
			      return '<b>Year:</b>' + new Date(ms).strftime('%Y');
			    }
			  }
		}
	});

/*tmin_graph = new Dygraph(document.getElementById("graph_tmin_container"),tmin_data,
		{
			labels: [ "Date", "TMIN"],
			ylabel: 'Temperature (C)',
			highlightCircleSize: 6,
			axes: {
			  x: {
			    valueFormatter: function(ms) {
			      return '<b>Year:</b>' + new Date(ms).strftime('%Y');
			    }
			  }
		}
	});

  // this is the graph that shows the water year PDSI dataset
   tmax_graph = new Dygraph(document.getElementById("graph_tmax_container"),tmax_data,
		{
			labels: [ "Date", "TMAX" ],
			ylabel: 'Temperature (C)',
			highlightCircleSize: 6,
			axes: {
			  x: {
			    valueFormatter: function(ms) {
			      return '<b>Year:</b>' + new Date(ms).strftime('%Y');
			    }
			  }
			}
		});*/


  tmin_tmax_graph = new Dygraph(document.getElementById("graph_tmin_tmax_container"),tmin_tmax_data,
		{
			labels: [ "Date", "TMIN", "TMAX" ],
			ylabel: 'Temperature (C)',
			highlightCircleSize: 6,
			axes: {
			  x: {
			    valueFormatter: function(ms) {
			      return '<b>Year:</b>' + new Date(ms).strftime('%Y');
			    }
			  }
		}
	});