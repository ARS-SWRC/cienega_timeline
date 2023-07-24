/* 
  Purpose: this script activates the climate charts. 
  Author: Gerardo Armendariz
  Date: 4-3-2018
**/	

var spei_data = [ [new Date("1895/01/01" ), -0.10341225261996147],
[ new Date("1896/01/01" ), -0.19552241655478772],
[ new Date("1897/01/01" ), -0.07001991546108018],
[ new Date("1898/01/01" ), 0.20571794334070334],
[ new Date("1899/01/01" ), -0.147320019029344],
[ new Date("1900/01/01" ), -0.42985243475040513],
[ new Date("1901/01/01" ), 0.05089210601369346],
[ new Date("1902/01/01" ), -0.38731973282311283],
[ new Date("1903/01/01" ), -0.1541902214420662],
[ new Date("1904/01/01" ), -0.16898028806056128],
[ new Date("1905/01/01" ), 1.2393428483978852],
[ new Date("1906/01/01" ), 0.2079461387547047],
[ new Date("1907/01/01" ), 0.46864221680171786],
[ new Date("1908/01/01" ), 0.3511164350908153],
[ new Date("1909/01/01" ), 0.023703786075558883],
[ new Date("1910/01/01" ), -0.5704775394555168],
[ new Date("1911/01/01" ), 0.2949852421851737],
[ new Date("1912/01/01" ), 0.45630963087974696],
[ new Date("1913/01/01" ), 0.45780972173651263],
[ new Date("1914/01/01" ), 0.5139099456379382],
[ new Date("1915/01/01" ), 0.21339475029906105],
[ new Date("1916/01/01" ), 0.12180676959467414],
[ new Date("1917/01/01" ), -0.12544392889665718],
[ new Date("1918/01/01" ), -0.051761708354020004],
[ new Date("1919/01/01" ), 0.693921491481511],
[ new Date("1920/01/01" ), 0.25681236767850274],
[ new Date("1921/01/01" ), -0.021422641002625354],
[ new Date("1922/01/01" ), 0.13279435491794994],
[ new Date("1923/01/01" ), 0.4916086667378324],
[ new Date("1924/01/01" ), -0.34832299626215696],
[ new Date("1925/01/01" ), -0.061221355010046115],
[ new Date("1926/01/01" ), 0.43853723096112013],
[ new Date("1927/01/01" ), 0.03131044224783567],
[ new Date("1928/01/01" ), -0.33032918129740757],
[ new Date("1929/01/01" ), 0.24104230771982407],
[ new Date("1930/01/01" ), 0.5298403642355413],
[ new Date("1931/01/01" ), 0.6750850864772658],
[ new Date("1932/01/01" ), 0.09473698343018065],
[ new Date("1933/01/01" ), -0.009891377463698725],
[ new Date("1934/01/01" ), -0.5062078597297006],
[ new Date("1935/01/01" ), 0.393941343141991],
[ new Date("1936/01/01" ), -0.2969007545581489],
[ new Date("1937/01/01" ), -0.005086277407631071],
[ new Date("1938/01/01" ), 0.09614207205809883],
[ new Date("1939/01/01" ), -0.1399479153445575],
[ new Date("1940/01/01" ), 0.22694286927068322],
[ new Date("1941/01/01" ), 0.5935397352021548],
[ new Date("1942/01/01" ), -0.21663270445915975],
[ new Date("1943/01/01" ), -0.42198578938102665],
[ new Date("1944/01/01" ), 0.48171155491388795],
[ new Date("1945/01/01" ), -0.021369859726994695],
[ new Date("1946/01/01" ), -0.012500115962012484],
[ new Date("1947/01/01" ), -0.37634367595674917],
[ new Date("1948/01/01" ), -0.2442888536420683],
[ new Date("1949/01/01" ), 0.09207105516839409],
[ new Date("1950/01/01" ), -0.9423716535214863],
[ new Date("1951/01/01" ), 0.2679730428066154],
[ new Date("1952/01/01" ), 0.043956434673439536],
[ new Date("1953/01/01" ), -0.46909162968918455],
[ new Date("1954/01/01" ), -0.1639948370657169],
[ new Date("1955/01/01" ), 0.008210183017693051],
[ new Date("1956/01/01" ), -0.5954649821024065],
[ new Date("1957/01/01" ), 0.10844813327449576],
[ new Date("1958/01/01" ), 0.08676311755961552],
[ new Date("1959/01/01" ), -0.10083534324372956],
[ new Date("1960/01/01" ), -0.24937979118178658],
[ new Date("1961/01/01" ), 0.11155434448575312],
[ new Date("1962/01/01" ), -0.26109404846867723],
[ new Date("1963/01/01" ), -0.01978938963446364],
[ new Date("1964/01/01" ), 0.36329728646132303],
[ new Date("1965/01/01" ), 0.2091329257889356],
[ new Date("1966/01/01" ), 0.12286635599796229],
[ new Date("1967/01/01" ), 0.23646706921571378],
[ new Date("1968/01/01" ), 0.13531932153219314],
[ new Date("1969/01/01" ), -0.07921802730170173],
[ new Date("1970/01/01" ), -0.13609696157243975],
[ new Date("1971/01/01" ), 0.3008638890788587],
[ new Date("1972/01/01" ), -0.12969806737926382],
[ new Date("1973/01/01" ), -0.14177300003149199],
[ new Date("1974/01/01" ), -0.1554532002240892],
[ new Date("1975/01/01" ), 0.05117562294794468],
[ new Date("1976/01/01" ), 0.18569721879273682],
[ new Date("1977/01/01" ), 0.18784979432362456],
[ new Date("1978/01/01" ), 0.5815485998641879],
[ new Date("1979/01/01" ), -0.11112715761483642],
[ new Date("1980/01/01" ), -0.1882391505978215],
[ new Date("1981/01/01" ), 0.015921783186415295],
[ new Date("1982/01/01" ), 0.3323144887911049],
[ new Date("1983/01/01" ), 0.9705629578225352],
[ new Date("1984/01/01" ), 0.5368877289561408],
[ new Date("1985/01/01" ), 0.31250415122496494],
[ new Date("1986/01/01" ), 0.1706699304580347],
[ new Date("1987/01/01" ), 0.337386996332901],
[ new Date("1988/01/01" ), 0.1653256510437785],
[ new Date("1989/01/01" ), -0.7614644183863737],
[ new Date("1990/01/01" ), 0.3134437286616272],
[ new Date("1991/01/01" ), 0.31419015772799286],
[ new Date("1992/01/01" ), 0.4280171556970865],
[ new Date("1993/01/01" ), 0.21114431123235522],
[ new Date("1994/01/01" ), -0.015508831553912935],
[ new Date("1995/01/01" ), -0.14767720416301133],
[ new Date("1996/01/01" ), -0.7349762143443094],
[ new Date("1997/01/01" ), -0.17984378197225803],
[ new Date("1998/01/01" ), 0.19026290332727777],
[ new Date("1999/01/01" ), -0.45656128933027684],
[ new Date("2000/01/01" ), -0.29567120257136154],
[ new Date("2001/01/01" ), 0.029233019402518115],
[ new Date("2002/01/01" ), -0.7648112328775197],
[ new Date("2003/01/01" ), -0.4227798057580046],
[ new Date("2004/01/01" ), -0.05251205997631391],
[ new Date("2005/01/01" ), -0.39734942890627134],
[ new Date("2006/01/01" ), -0.4110845355086712],
[ new Date("2007/01/01" ), -0.2002937838542004],
[ new Date("2008/01/01" ), -0.008986892215823716],
[ new Date("2009/01/01" ), -0.5284747226196672],
[ new Date("2010/01/01" ), 0.13125190390166355],
[ new Date("2011/01/01" ), -0.4424843801458986],
[ new Date("2012/01/01" ), -0.7372230245756227],
[ new Date("2013/01/01" ), -0.5919075660783855],
[ new Date("2014/01/01" ), -0.510661104696641],
[ new Date("2015/01/01" ), 0.16278515746835542],
[ new Date("2016/01/01" ), -0.22175804829666154]];

// the first year of ppt is not included because pdsi needs to be updated
//[ new Date("1895/01/01"), 404.6535326],
var ppt_data = [[ new Date("1895/01/01" ), 406.9623875108273],
[ new Date("1896/01/01" ), 409.46819207032775],
[ new Date("1897/01/01" ), 425.34180167474483],
[ new Date("1898/01/01" ), 452.8393948614028],
[ new Date("1899/01/01" ), 288.81468412552437],
[ new Date("1900/01/01" ), 298.0764311991869],
[ new Date("1901/01/01" ), 403.3820459291074],
[ new Date("1902/01/01" ), 277.064774104897],
[ new Date("1903/01/01" ), 313.58252120614196],
[ new Date("1904/01/01" ), 368.4171277306977],
[ new Date("1905/01/01" ), 823.0467326123446],
[ new Date("1906/01/01" ), 439.1610980556862],
[ new Date("1907/01/01" ), 524.0495825654209],
[ new Date("1908/01/01" ), 446.87232593666675],
[ new Date("1909/01/01" ), 382.2481890728899],
[ new Date("1910/01/01" ), 311.7579966835598],
[ new Date("1911/01/01" ), 468.4092806575301],
[ new Date("1912/01/01" ), 470.664410432483],
[ new Date("1913/01/01" ), 454.81489383002383],
[ new Date("1914/01/01" ), 656.9040526521271],
[ new Date("1915/01/01" ), 372.1126582697116],
[ new Date("1916/01/01" ), 422.8033272292748],
[ new Date("1917/01/01" ), 352.6702353002634],
[ new Date("1918/01/01" ), 344.2529970119382],
[ new Date("1919/01/01" ), 613.6398287685151],
[ new Date("1920/01/01" ), 388.5396165073043],
[ new Date("1921/01/01" ), 421.7069817472274],
[ new Date("1922/01/01" ), 393.27998167486845],
[ new Date("1923/01/01" ), 533.4375997155657],
[ new Date("1924/01/01" ), 265.1601140648962],
[ new Date("1925/01/01" ), 344.0800079307015],
[ new Date("1926/01/01" ), 567.9067268833197],
[ new Date("1927/01/01" ), 432.0334446812703],
[ new Date("1928/01/01" ), 349.3627232593302],
[ new Date("1929/01/01" ), 466.96813356179734],
[ new Date("1930/01/01" ), 555.5377202527017],
[ new Date("1931/01/01" ), 703.2026877209336],
[ new Date("1932/01/01" ), 450.4139823751408],
[ new Date("1933/01/01" ), 364.9742618147613],
[ new Date("1934/01/01" ), 377.4020971197974],
[ new Date("1935/01/01" ), 526.3186078254737],
[ new Date("1936/01/01" ), 366.8091456885551],
[ new Date("1937/01/01" ), 423.17645085614777],
[ new Date("1938/01/01" ), 411.5254606500507],
[ new Date("1939/01/01" ), 376.2165300043127],
[ new Date("1940/01/01" ), 501.62561504969256],
[ new Date("1941/01/01" ), 490.6454964683772],
[ new Date("1942/01/01" ), 314.9374081382258],
[ new Date("1943/01/01" ), 364.6380486095936],
[ new Date("1944/01/01" ), 472.14123242754135],
[ new Date("1945/01/01" ), 344.53940107965894],
[ new Date("1946/01/01" ), 446.56221012322004],
[ new Date("1947/01/01" ), 272.1012642518247],
[ new Date("1948/01/01" ), 343.6824297207677],
[ new Date("1949/01/01" ), 418.4846371082442],
[ new Date("1950/01/01" ), 291.41245044876155],
[ new Date("1951/01/01" ), 462.1595892635912],
[ new Date("1952/01/01" ), 450.4518916185865],
[ new Date("1953/01/01" ), 215.69676434378775],
[ new Date("1954/01/01" ), 429.88612854486684],
[ new Date("1955/01/01" ), 413.36348380140504],
[ new Date("1956/01/01" ), 235.8987067094268],
[ new Date("1957/01/01" ), 412.4849081177734],
[ new Date("1958/01/01" ), 485.69639293623595],
[ new Date("1959/01/01" ), 414.2738029963248],
[ new Date("1960/01/01" ), 372.74936250826005],
[ new Date("1961/01/01" ), 479.49896499122036],
[ new Date("1962/01/01" ), 321.0386841167698],
[ new Date("1963/01/01" ), 409.8139776981757],
[ new Date("1964/01/01" ), 457.58116152609114],
[ new Date("1965/01/01" ), 484.9824136940294],
[ new Date("1966/01/01" ), 499.31656673040374],
[ new Date("1967/01/01" ), 500.5328087101361],
[ new Date("1968/01/01" ), 393.3115014213457],
[ new Date("1969/01/01" ), 368.39566072627036],
[ new Date("1970/01/01" ), 354.60351283386274],
[ new Date("1971/01/01" ), 471.333818069043],
[ new Date("1972/01/01" ), 412.88573043707714],
[ new Date("1973/01/01" ), 330.4921152613946],
[ new Date("1974/01/01" ), 426.44407069666096],
[ new Date("1975/01/01" ), 339.75429363844654],
[ new Date("1976/01/01" ), 400.6227507800596],
[ new Date("1977/01/01" ), 475.10498895404515],
[ new Date("1978/01/01" ), 632.978391122569],
[ new Date("1979/01/01" ), 353.4376416129816],
[ new Date("1980/01/01" ), 349.15952511223725],
[ new Date("1981/01/01" ), 433.6641895144469],
[ new Date("1982/01/01" ), 467.39676325084963],
[ new Date("1983/01/01" ), 728.9312297783201],
[ new Date("1984/01/01" ), 640.14448367919],
[ new Date("1985/01/01" ), 512.0729604137825],
[ new Date("1986/01/01" ), 494.4718025891888],
[ new Date("1987/01/01" ), 464.52387097093776],
[ new Date("1988/01/01" ), 498.5140068482029],
[ new Date("1989/01/01" ), 307.01691361699693],
[ new Date("1990/01/01" ), 572.607716401754],
[ new Date("1991/01/01" ), 457.69189521753447],
[ new Date("1992/01/01" ), 559.1064304719052],
[ new Date("1993/01/01" ), 558.4352857125881],
[ new Date("1994/01/01" ), 485.20545099127924],
[ new Date("1995/01/01" ), 333.7423560070494],
[ new Date("1996/01/01" ), 300.0833644874939],
[ new Date("1997/01/01" ), 396.11546093354383],
[ new Date("1998/01/01" ), 459.4523084520551],
[ new Date("1999/01/01" ), 345.5033899874944],
[ new Date("2000/01/01" ), 547.8743541780887],
[ new Date("2001/01/01" ), 435.5455232658184],
[ new Date("2002/01/01" ), 272.3889227382993],
[ new Date("2003/01/01" ), 358.94127446759796],
[ new Date("2004/01/01" ), 369.1527764328658],
[ new Date("2005/01/01" ), 349.92090088596456],
[ new Date("2006/01/01" ), 402.5052482053862],
[ new Date("2007/01/01" ), 427.20768763698226],
[ new Date("2008/01/01" ), 433.69893024587043],
[ new Date("2009/01/01" ), 291.55648549986296],
[ new Date("2010/01/01" ), 481.2808771568323],
[ new Date("2011/01/01" ), 339.9912231680469],
[ new Date("2012/01/01" ), 324.1411724735525],
[ new Date("2013/01/01" ), 302.4312036842603],
[ new Date("2014/01/01" ), 396.96876583128744],
[ new Date("2015/01/01" ), 480.91552716838834],
[ new Date("2016/01/01" ), 429.5851802662079]];

// the first year of tmin is not included because pdsi needs to be updated
// [ new Date("1895/01/01"), 6.535326087, 21.44497283],
var tmin_tmean_tmax_data = [ [ new Date("1895/01/01" ), 8.23560678954496, 16.1799118334524, 24.124216879654664],
[ new Date("1896/01/01" ), 9.076807369688673, 16.585995586574384, 24.09518379965292],
[ new Date("1897/01/01" ), 8.665460843724235, 16.04236826485982, 23.41927568880776],
[ new Date("1898/01/01" ), 8.286586449016417, 15.938215858526563, 23.589845270192736],
[ new Date("1899/01/01" ), 7.765977140286267, 16.037252075761035, 24.308527019781057],
[ new Date("1900/01/01" ), 8.70039373266489, 16.839181236876676, 24.977968749223475],
[ new Date("1901/01/01" ), 8.600906679746956, 16.52632017955919, 24.451733682915762],
[ new Date("1902/01/01" ), 7.879975262956145, 16.171703342704344, 24.463431428027917],
[ new Date("1903/01/01" ), 8.052179212556307, 16.066573312388957, 24.080967401601825],
[ new Date("1904/01/01" ), 8.124530295908668, 16.393549588308304, 24.662568878257435],
[ new Date("1905/01/01" ), 7.785091126042787, 15.376458788464129, 22.96782645636783],
[ new Date("1906/01/01" ), 8.195893137684024, 15.974257465992883, 23.752621795975767],
[ new Date("1907/01/01" ), 8.385627643900156, 16.094339543301036, 23.803051449026444],
[ new Date("1908/01/01" ), 7.535546731210812, 15.701562120897039, 23.867577516922818],
[ new Date("1909/01/01" ), 7.845101927801558, 16.06145749811755, 24.277813057756713],
[ new Date("1910/01/01" ), 8.42816072143684, 17.11777166187803, 25.80738259716416],
[ new Date("1911/01/01" ), 7.910123269994677, 15.947519367809145, 23.984915474192658],
[ new Date("1912/01/01" ), 6.273610824005697, 14.755870168959751, 23.238129526269436],
[ new Date("1913/01/01" ), 6.899346379824881, 15.117330024057074, 23.335313678089623],
[ new Date("1914/01/01" ), 8.784304511108758, 16.352580172602476, 23.92085584048951],
[ new Date("1915/01/01" ), 7.477860214607912, 15.584390666027902, 23.690921125757963],
[ new Date("1916/01/01" ), 7.575407311194919, 16.28485373846161, 24.994300167731524],
[ new Date("1917/01/01" ), 6.9188276350623275, 16.142227145358532, 25.365626650759026],
[ new Date("1918/01/01" ), 7.54434292289012, 16.085208247594498, 24.626073563463734],
[ new Date("1919/01/01" ), 6.87859049879835, 15.284198449291125, 23.689806394777964],
[ new Date("1920/01/01" ), 7.000765670649202, 15.42994192250928, 23.859118158300266],
[ new Date("1921/01/01" ), 7.57984055293397, 16.281739282019643, 24.983638007251816],
[ new Date("1922/01/01" ), 7.339942345369413, 15.809998491823068, 24.280054641967695],
[ new Date("1923/01/01" ), 6.884731958392998, 15.127222383362247, 23.369712813332594],
[ new Date("1924/01/01" ), 6.74043994065994, 15.510832336953692, 24.281224726398793],
[ new Date("1925/01/01" ), 6.991688491726221, 15.790787454985468, 24.58988643454794],
[ new Date("1926/01/01" ), 8.092144663784037, 16.19811958268977, 24.30409450955369],
[ new Date("1927/01/01" ), 8.360202912700377, 16.582138746818135, 24.804074582463826],
[ new Date("1928/01/01" ), 8.200520538896418, 16.522696517496822, 24.84487248868214],
[ new Date("1929/01/01" ), 7.437331827902535, 15.724122814062413, 24.01091380028544],
[ new Date("1930/01/01" ), 8.08561731035093, 16.027771116828607, 23.969924932935523],
[ new Date("1931/01/01" ), 8.027181586704803, 15.973248044750578, 23.919314501278887],
[ new Date("1932/01/01" ), 7.748807748651015, 16.10273592660456, 24.456664084497785],
[ new Date("1933/01/01" ), 7.939265114830968, 16.283755189399734, 24.628245264482462],
[ new Date("1934/01/01" ), 9.15720109610013, 17.46079424415957, 25.764387396348624],
[ new Date("1935/01/01" ), 8.191857469807333, 16.038255377444067, 23.884653282470754],
[ new Date("1936/01/01" ), 8.714559946484183, 16.65116823439987, 24.58777651453116],
[ new Date("1937/01/01" ), 8.332940131750911, 16.343653818749452, 24.35436750716363],
[ new Date("1938/01/01" ), 8.334342502341046, 16.374998873678674, 24.415655243392617],
[ new Date("1939/01/01" ), 8.492739474185242, 16.259638226891706, 24.026536986174378],
[ new Date("1940/01/01" ), 9.26074881951539, 16.694099460209742, 24.12745011529587],
[ new Date("1941/01/01" ), 8.180977735560981, 15.67272286195177, 23.164467987314026],
[ new Date("1942/01/01" ), 8.22631409052734, 16.38846309942552, 24.550612107011347],
[ new Date("1943/01/01" ), 9.387382248954205, 17.155268574619914, 24.923154903897814],
[ new Date("1944/01/01" ), 7.836945188874087, 15.66386106258524, 23.490776944032685],
[ new Date("1945/01/01" ), 7.491722419686926, 15.745825756106903, 23.999929084271926],
[ new Date("1946/01/01" ), 8.012734366296243, 16.126101895376266, 24.239469416446237],
[ new Date("1947/01/01" ), 7.9111258910727384, 16.093394048764367, 24.275662196154958],
[ new Date("1948/01/01" ), 7.92204715309142, 16.10929779331538, 24.296548433540593],
[ new Date("1949/01/01" ), 7.832230562538894, 15.739937322778808, 23.64764408304856],
[ new Date("1950/01/01" ), 8.85466974233754, 17.359046490469986, 25.86342322820337],
[ new Date("1951/01/01" ), 8.309806609198917, 16.352424797345762, 24.39504297717995],
[ new Date("1952/01/01" ), 7.882744008520246, 16.057141268679803, 24.231538541144005],
[ new Date("1953/01/01" ), 7.5483898260343745, 16.222198998065814, 24.896008166248922],
[ new Date("1954/01/01" ), 8.724502032225956, 17.09095210938393, 25.457402194720256],
[ new Date("1955/01/01" ), 7.328271491002908, 15.692547052311832, 24.056822609565327],
[ new Date("1956/01/01" ), 7.7755433665798535, 16.408472157902683, 25.041400939228748],
[ new Date("1957/01/01" ), 8.58359384797936, 16.40175197098511, 24.219910100753697],
[ new Date("1958/01/01" ), 8.324716828495292, 16.386031048163044, 24.44734525595715],
[ new Date("1959/01/01" ), 8.323839808417318, 16.5092088967224, 24.694577977991106],
[ new Date("1960/01/01" ), 8.015361090833077, 16.307585107333097, 24.59980912658197],
[ new Date("1961/01/01" ), 8.195426948300993, 16.21051301210198, 24.22559907100572],
[ new Date("1962/01/01" ), 8.51277109472131, 16.590438055394827, 24.66810501173701],
[ new Date("1963/01/01" ), 8.323721424960569, 16.542852496114552, 24.76198356081352],
[ new Date("1964/01/01" ), 7.024400262965526, 15.194517081746156, 23.364633902267354],
[ new Date("1965/01/01" ), 7.686170581890721, 15.95650390708154, 24.22683723262564],
[ new Date("1966/01/01" ), 8.117611083732196, 16.200488482050606, 24.283365869182564],
[ new Date("1967/01/01" ), 7.825770769126959, 16.25778127299675, 24.689791778721204],
[ new Date("1968/01/01" ), 7.539309469135948, 15.938024654636509, 24.336739839373333],
[ new Date("1969/01/01" ), 8.08836382416552, 16.391487846645802, 24.694611864978672],
[ new Date("1970/01/01" ), 7.589240398936032, 16.102035143221656, 24.614829893995303],
[ new Date("1971/01/01" ), 7.254015726089219, 15.674792111204686, 24.095568505687922],
[ new Date("1972/01/01" ), 7.902373812316469, 16.360694792742503, 24.819015766097674],
[ new Date("1973/01/01" ), 7.363438268981253, 15.804507995845603, 24.245577724297622],
[ new Date("1974/01/01" ), 7.824578934227483, 16.21831674263213, 24.612054554995623],
[ new Date("1975/01/01" ), 7.189108704286031, 15.744254130040602, 24.299399562630697],
[ new Date("1976/01/01" ), 7.360421813133935, 15.745498216384753, 24.130574617137256],
[ new Date("1977/01/01" ), 8.038299911270713, 16.439046148640244, 24.839792377038375],
[ new Date("1978/01/01" ), 8.47103643459174, 16.478243877491472, 24.485451323550123],
[ new Date("1979/01/01" ), 7.5197462826259445, 16.09991922060679, 24.68009215782499],
[ new Date("1980/01/01" ), 8.027296254792722, 16.688009098218668, 25.34872193707623],
[ new Date("1981/01/01" ), 8.684534045923796, 16.957134151446056, 25.229734247742076],
[ new Date("1982/01/01" ), 7.8276143338794535, 16.016389681907388, 24.20516503621285],
[ new Date("1983/01/01" ), 7.733837176471944, 15.618270131791734, 23.5027030889066],
[ new Date("1984/01/01" ), 7.951464138438918, 15.91046500756683, 23.86946586880327],
[ new Date("1985/01/01" ), 8.047362295174356, 16.10531662520262, 24.16327096768491],
[ new Date("1986/01/01" ), 8.983119306125284, 16.84829742688741, 24.713475554835856],
[ new Date("1987/01/01" ), 8.092922473608931, 15.989073760400004, 23.88522505188227],
[ new Date("1988/01/01" ), 8.409070861576009, 16.504818348638075, 24.600565838151855],
[ new Date("1989/01/01" ), 8.860448937420292, 17.359828663894966, 25.859208390565964],
[ new Date("1990/01/01" ), 8.398410008345037, 16.266819662246508, 24.135229314578662],
[ new Date("1991/01/01" ), 8.055179249017757, 15.941599641508043, 23.828020041165868],
[ new Date("1992/01/01" ), 8.646959189457588, 16.230484047758882, 23.814008896108387],
[ new Date("1993/01/01" ), 8.900284412315767, 16.586137654423183, 24.271990909403687],
[ new Date("1994/01/01" ), 9.175133409055638, 16.93721027879415, 24.69928715684401],
[ new Date("1995/01/01" ), 8.917589169192073, 16.946387020779124, 24.97518487486937],
[ new Date("1996/01/01" ), 9.3111750551188, 17.40170571771994, 25.492236368049408],
[ new Date("1997/01/01" ), 8.98618362070346, 16.760978991380487, 24.53577435428359],
[ new Date("1998/01/01" ), 8.071481488049274, 16.082898256335962, 24.094315017998458],
[ new Date("1999/01/01" ), 8.34431652798976, 16.82532342229672, 25.306330325966126],
[ new Date("2000/01/01" ), 8.900278562036556, 17.080920636487182, 25.26156270709537],
[ new Date("2001/01/01" ), 8.40463767283598, 16.488212137313443, 24.571786608261558],
[ new Date("2002/01/01" ), 8.671877871646812, 17.034589328460434, 25.39730078473247],
[ new Date("2003/01/01" ), 9.205572294075624, 17.394665605393293, 25.58375890654578],
[ new Date("2004/01/01" ), 8.628857797903203, 16.37814736452735, 24.1274369212644],
[ new Date("2005/01/01" ), 9.240615232453774, 17.153138023130285, 25.065660809113854],
[ new Date("2006/01/01" ), 8.812203929764737, 16.949175843294267, 25.086147763236678],
[ new Date("2007/01/01" ), 9.059568814354794, 16.892901659198536, 24.726234502831954],
[ new Date("2008/01/01" ), 8.532491982109272, 16.591324036527016, 24.65015609088489],
[ new Date("2009/01/01" ), 9.034357905239004, 17.2453913675262, 25.4564248251927],
[ new Date("2010/01/01" ), 8.708291094397737, 16.630770181446568, 24.55324926802375],
[ new Date("2011/01/01" ), 8.35381401470953, 16.64759635124238, 24.94137869063572],
[ new Date("2012/01/01" ), 9.25792534144755, 17.48631055205966, 25.714695766501407],
[ new Date("2013/01/01" ), 9.003669900502011, 16.742820636768954, 24.481773868794928],
[ new Date("2014/01/01" ), 9.694145312683686, 17.51678546536487, 25.339330310026554],
[ new Date("2015/01/01" ), 9.451294515816327, 17.028013830070282, 24.59948626745862],
[ new Date("2016/01/01" ), 9.17814086026569, 17.326518538980284, 25.47017849519779]];


var desired_range = null;

/*
 Continue working with the function in order to get to the selected da
 */ 
function setSelectionOnChart(startDate, endDate){

	startDate = (startDate.split(" ")[0]).split("-").join("/");

	for(var i = 0; i < spei_data.length; i++){
		var selectedDate = spei_data[i][0];
		var selectedMonth = eval(selectedDate.getMonth() + 1);
		var selectedDay = selectedDate.getDate();

		var selectedDate = selectedDate.getFullYear() + "/" + pad(selectedMonth.toString(),2) + "/" + pad(selectedDay.toString(),2);

		//console.log(selectedDate + "    " + startDate);
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


  tmin_tmax_graph = new Dygraph(document.getElementById("graph_tmin_tmax_container"),tmin_tmean_tmax_data,
		{
			labels: [ "Date", "TMIN", "TMEAN", "TMAX" ],
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