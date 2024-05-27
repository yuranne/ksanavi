var ksaLatLng;
var ksaGraph;
function initGraph() {
	ksaLatLng = {
		본관: new kakao.maps.LatLng(35.16594322284734, 129.02596184758775),
		탐구관: new kakao.maps.LatLng(35.165308342898946, 129.0258006889412),
		형설관: new kakao.maps.LatLng(35.16509972996156, 129.02561169769783),
		창조관: new kakao.maps.LatLng(35.165649884267275, 129.02504645784612),
		예지관: new kakao.maps.LatLng(35.16592559703981, 129.02688049919817),
		DDC: new kakao.maps.LatLng(35.165233809319815, 129.026215855847),
		견우관: new kakao.maps.LatLng(35.1660756149182, 129.02545483121995),
		직녀관: new kakao.maps.LatLng(35.16627147808139, 129.0250591296194),
		백양관: new kakao.maps.LatLng(35.16653078664572, 129.02531522540062),
		운동장: new kakao.maps.LatLng(35.166320330804304, 129.02658301843573),
		노벨공원: new kakao.maps.LatLng(35.16492834545107, 129.0254867316951),
		아크로폴리스: new kakao.maps.LatLng(35.165535938644645, 129.02606697116047),
		P01: new kakao.maps.LatLng(35.1661075679581, 129.02583423447706),
		P02: new kakao.maps.LatLng(35.16596095560079, 129.02570988090187),
		P03: new kakao.maps.LatLng(35.16590498113406, 129.02582372134978),
		P04: new kakao.maps.LatLng(35.16600646192753, 129.02595244239438),
		P05: new kakao.maps.LatLng(35.16601702171197, 129.02559055546513),
		P06: new kakao.maps.LatLng(35.166259117460484, 129.02512466853963),
		P07: new kakao.maps.LatLng(35.16559207584805, 129.02526999439806),
		P08: new kakao.maps.LatLng(35.16549630437505, 129.0254733842183),
		P09: new kakao.maps.LatLng(35.165799741962275, 129.0260543118005),
		P10: new kakao.maps.LatLng(35.16581026402232, 129.0259640358745),
		P11: new kakao.maps.LatLng(35.16587457886959, 129.02669815871664),
		P12: new kakao.maps.LatLng(35.165182998809165, 129.0253476413629),
		P13: new kakao.maps.LatLng(35.16492505067075, 129.02595304765055),
		P14: new kakao.maps.LatLng(35.165935690557376, 129.02614273497713),
		P15: new kakao.maps.LatLng(35.16648492132399, 129.0253634720174),
		P16: new kakao.maps.LatLng(35.16589548337899, 129.0249098840325),
		P17: new kakao.maps.LatLng(35.16662009060982, 129.0254985162645),
		P18: new kakao.maps.LatLng(35.16652031935861, 129.02567162981862),
		P19: new kakao.maps.LatLng(35.16563201977735, 129.02544108455288),
		P20: new kakao.maps.LatLng(35.16534752674953, 129.02520905852376),
		P21: new kakao.maps.LatLng(35.1651165859016, 129.02527740609378),
		P22: new kakao.maps.LatLng(35.16507672106977, 129.02617903574358),
		P23: new kakao.maps.LatLng(35.16573252034167, 129.02670560703962),
		P24: new kakao.maps.LatLng(35.16621750607382, 129.02599608841118),
		P25: new kakao.maps.LatLng(35.16609889231762, 129.02621811695005),
		P26: new kakao.maps.LatLng(35.16625054404244, 129.02577193619146),
		P27: new kakao.maps.LatLng(35.16612306039548, 129.0259855144125),
		P28: new kakao.maps.LatLng(35.16608622828002, 129.02535907005628),
		P29: new kakao.maps.LatLng(35.16555398865304, 129.02566137556067),
		P30: new kakao.maps.LatLng(35.16528431657341, 129.02615949501902),
		P31: new kakao.maps.LatLng(35.16549815187686, 129.02576698829986),
		P32: new kakao.maps.LatLng(35.16545623165415, 129.02557938805532),
		P33: new kakao.maps.LatLng(35.16524077067717, 129.0253957142077),
		P34: new kakao.maps.LatLng(35.16513448898117, 129.0260926763992),
		P35: new kakao.maps.LatLng(35.16493447152874, 129.02592858973622),
		P36: new kakao.maps.LatLng(35.16538963541468, 129.02552012193289),
		P37: new kakao.maps.LatLng(35.16556192399303, 129.02518694044838),
		P38: new kakao.maps.LatLng(35.165243233726436, 129.02632583074322),
	};
	ksaGraph = {
		본관: {
			P03: getDistance(ksaLatLng['본관'], ksaLatLng['P03']),
			P04: getDistance(ksaLatLng['본관'], ksaLatLng['P04']),
			P09: getDistance(ksaLatLng['본관'], ksaLatLng['P09']),
			P10: getDistance(ksaLatLng['본관'], ksaLatLng['P10']),
			P14: getDistance(ksaLatLng['본관'], ksaLatLng['P14']),
		},
		탐구관: {
			P32: getDistance(ksaLatLng['탐구관'], ksaLatLng['P32']),
			P34: getDistance(ksaLatLng['탐구관'], ksaLatLng['P34']),
		},
		형설관: {
			P12: getDistance(ksaLatLng['형설관'], ksaLatLng['P12']),
			P13: getDistance(ksaLatLng['형설관'], ksaLatLng['P13']),
			P33: getDistance(ksaLatLng['형설관'], ksaLatLng['P33']),
			P35: getDistance(ksaLatLng['형설관'], ksaLatLng['P35']),
		},
		창조관: {
			P07: getDistance(ksaLatLng['창조관'], ksaLatLng['P07']),
			P37: getDistance(ksaLatLng['창조관'], ksaLatLng['P37']),
		},
		예지관: {
			P11: getDistance(ksaLatLng['예지관'], ksaLatLng['P11']),
		},
		DDC: {
			P34: getDistance(ksaLatLng['DDC'], ksaLatLng['P34']),
			P38: getDistance(ksaLatLng['DDC'], ksaLatLng['P38']),
		},
		견우관: {
			P05: getDistance(ksaLatLng['견우관'], ksaLatLng['P05']),
			P28: getDistance(ksaLatLng['견우관'], ksaLatLng['P28']),
		},
		직녀관: {
			P06: getDistance(ksaLatLng['직녀관'], ksaLatLng['P06']),
		},
		백양관: {
			P15: getDistance(ksaLatLng['백양관'], ksaLatLng['P15']),
		},
		운동장: {
			P11: getDistance(ksaLatLng['운동장'], ksaLatLng['P11']),
			P25: getDistance(ksaLatLng['운동장'], ksaLatLng['P25']),
		},
		노벨공원: {
			P12: getDistance(ksaLatLng['노벨공원'], ksaLatLng['P12']),
			P13: getDistance(ksaLatLng['노벨공원'], ksaLatLng['P13']),
			P21: getDistance(ksaLatLng['노벨공원'], ksaLatLng['P21']),
		},
		아크로폴리스: {
			P09: getDistance(ksaLatLng['아크로폴리스'], ksaLatLng['P09']),
			P10: getDistance(ksaLatLng['아크로폴리스'], ksaLatLng['P10']),
			P30: getDistance(ksaLatLng['아크로폴리스'], ksaLatLng['P30']),
			P31: getDistance(ksaLatLng['아크로폴리스'], ksaLatLng['P31']),
		},
		P01: {
			P02: getDistance(ksaLatLng['P01'], ksaLatLng['P02']),
			P04: getDistance(ksaLatLng['P01'], ksaLatLng['P04']),
			P26: getDistance(ksaLatLng['P01'], ksaLatLng['P26']),
			P27: getDistance(ksaLatLng['P01'], ksaLatLng['P27']),
		},
		P02: {
			P01: getDistance(ksaLatLng['P02'], ksaLatLng['P01']),
			P03: getDistance(ksaLatLng['P02'], ksaLatLng['P03']),
			P05: getDistance(ksaLatLng['P02'], ksaLatLng['P05']),
			P19: getDistance(ksaLatLng['P02'], ksaLatLng['P19']),
		},
		P03: {
			본관: getDistance(ksaLatLng['P03'], ksaLatLng['본관']),
			P02: getDistance(ksaLatLng['P03'], ksaLatLng['P02']),
			P04: getDistance(ksaLatLng['P03'], ksaLatLng['P04']),
			P09: getDistance(ksaLatLng['P03'], ksaLatLng['P09']),
			P10: getDistance(ksaLatLng['P03'], ksaLatLng['P10']),
			P14: getDistance(ksaLatLng['P03'], ksaLatLng['P14']),
			P29: getDistance(ksaLatLng['P03'], ksaLatLng['P29']),
			P31: getDistance(ksaLatLng['P03'], ksaLatLng['P31']),
		},
		P04: {
			본관: getDistance(ksaLatLng['P04'], ksaLatLng['본관']),
			P01: getDistance(ksaLatLng['P04'], ksaLatLng['P01']),
			P02: getDistance(ksaLatLng['P04'], ksaLatLng['P02']),
			P09: getDistance(ksaLatLng['P04'], ksaLatLng['P09']),
			P10: getDistance(ksaLatLng['P04'], ksaLatLng['P10']),
			P11: getDistance(ksaLatLng['P04'], ksaLatLng['P11']),
			P14: getDistance(ksaLatLng['P04'], ksaLatLng['P14']),
			P23: getDistance(ksaLatLng['P04'], ksaLatLng['P23']),
			P25: getDistance(ksaLatLng['P04'], ksaLatLng['P25']),
			P27: getDistance(ksaLatLng['P04'], ksaLatLng['P27']),
		},
		P05: {
			견우관: getDistance(ksaLatLng['P05'], ksaLatLng['견우관']),
			P02: getDistance(ksaLatLng['P05'], ksaLatLng['P02']),
			P28: getDistance(ksaLatLng['P05'], ksaLatLng['P28']),
		},
		P06: {
			직녀관: getDistance(ksaLatLng['P06'], ksaLatLng['직녀관']),
			P15: getDistance(ksaLatLng['P06'], ksaLatLng['P15']),
			P16: getDistance(ksaLatLng['P06'], ksaLatLng['P16']),
			P28: getDistance(ksaLatLng['P06'], ksaLatLng['P28']),
		},
		P07: {
			창조관: getDistance(ksaLatLng['P07'], ksaLatLng['창조관']),
			P08: getDistance(ksaLatLng['P07'], ksaLatLng['P08']),
			P19: getDistance(ksaLatLng['P07'], ksaLatLng['P19']),
			P20: getDistance(ksaLatLng['P07'], ksaLatLng['P20']),
			P37: getDistance(ksaLatLng['P07'], ksaLatLng['P37']),
		},
		P08: {
			P07: getDistance(ksaLatLng['P08'], ksaLatLng['P07']),
			P19: getDistance(ksaLatLng['P08'], ksaLatLng['P19']),
			P20: getDistance(ksaLatLng['P08'], ksaLatLng['P20']),
			P32: getDistance(ksaLatLng['P08'], ksaLatLng['P32']),
			P36: getDistance(ksaLatLng['P08'], ksaLatLng['P36']),
		},
		P09: {
			본관: getDistance(ksaLatLng['P09'], ksaLatLng['본관']),
			아크로폴리스: getDistance(ksaLatLng['P09'], ksaLatLng['아크로폴리스']),
			P03: getDistance(ksaLatLng['P09'], ksaLatLng['P03']),
			P04: getDistance(ksaLatLng['P09'], ksaLatLng['P04']),
			P10: getDistance(ksaLatLng['P09'], ksaLatLng['P10']),
			P14: getDistance(ksaLatLng['P09'], ksaLatLng['P14']),
			P30: getDistance(ksaLatLng['P09'], ksaLatLng['P30']),
			P31: getDistance(ksaLatLng['P09'], ksaLatLng['P31']),
		},
		P10: {
			본관: getDistance(ksaLatLng['P10'], ksaLatLng['본관']),
			아크로폴리스: getDistance(ksaLatLng['P10'], ksaLatLng['아크로폴리스']),
			P03: getDistance(ksaLatLng['P10'], ksaLatLng['P03']),
			P04: getDistance(ksaLatLng['P10'], ksaLatLng['P04']),
			P09: getDistance(ksaLatLng['P10'], ksaLatLng['P09']),
			P14: getDistance(ksaLatLng['P10'], ksaLatLng['P14']),
			P29: getDistance(ksaLatLng['P10'], ksaLatLng['P29']),
			P30: getDistance(ksaLatLng['P10'], ksaLatLng['P30']),
			P31: getDistance(ksaLatLng['P10'], ksaLatLng['P31']),
		},
		P11: {
			예지관: getDistance(ksaLatLng['P11'], ksaLatLng['예지관']),
			운동장: getDistance(ksaLatLng['P11'], ksaLatLng['운동장']),
			P04: getDistance(ksaLatLng['P11'], ksaLatLng['P04']),
			P14: getDistance(ksaLatLng['P11'], ksaLatLng['P14']),
			P23: getDistance(ksaLatLng['P11'], ksaLatLng['P23']),
			P25: getDistance(ksaLatLng['P11'], ksaLatLng['P25']),
			P27: getDistance(ksaLatLng['P11'], ksaLatLng['P27']),
		},
		P12: {
			형설관: getDistance(ksaLatLng['P12'], ksaLatLng['형설관']),
			노벨공원: getDistance(ksaLatLng['P12'], ksaLatLng['노벨공원']),
			P13: getDistance(ksaLatLng['P12'], ksaLatLng['P13']),
			P21: getDistance(ksaLatLng['P12'], ksaLatLng['P21']),
			P33: getDistance(ksaLatLng['P12'], ksaLatLng['P33']),
			P35: getDistance(ksaLatLng['P12'], ksaLatLng['P35']),
		},
		P13: {
			형설관: getDistance(ksaLatLng['P13'], ksaLatLng['형설관']),
			노벨공원: getDistance(ksaLatLng['P13'], ksaLatLng['노벨공원']),
			P12: getDistance(ksaLatLng['P13'], ksaLatLng['P12']),
			P21: getDistance(ksaLatLng['P13'], ksaLatLng['P21']),
			P22: getDistance(ksaLatLng['P13'], ksaLatLng['P22']),
			P33: getDistance(ksaLatLng['P13'], ksaLatLng['P33']),
			P35: getDistance(ksaLatLng['P13'], ksaLatLng['P35']),
		},
		P14: {
			본관: getDistance(ksaLatLng['P14'], ksaLatLng['본관']),
			P03: getDistance(ksaLatLng['P14'], ksaLatLng['P03']),
			P04: getDistance(ksaLatLng['P14'], ksaLatLng['P04']),
			P09: getDistance(ksaLatLng['P14'], ksaLatLng['P09']),
			P10: getDistance(ksaLatLng['P14'], ksaLatLng['P10']),
			P11: getDistance(ksaLatLng['P14'], ksaLatLng['P11']),
			P23: getDistance(ksaLatLng['P14'], ksaLatLng['P23']),
			P25: getDistance(ksaLatLng['P14'], ksaLatLng['P25']),
			P27: getDistance(ksaLatLng['P14'], ksaLatLng['P27']),
		},
		P15: {
			백양관: getDistance(ksaLatLng['P15'], ksaLatLng['백양관']),
			P06: getDistance(ksaLatLng['P15'], ksaLatLng['P06']),
			P17: getDistance(ksaLatLng['P15'], ksaLatLng['P17']),
		},
		P16: {
			P06: getDistance(ksaLatLng['P16'], ksaLatLng['P06']),
			P19: getDistance(ksaLatLng['P16'], ksaLatLng['P19']),
		},
		P17: {
			P15: getDistance(ksaLatLng['P17'], ksaLatLng['P15']),
			P18: getDistance(ksaLatLng['P17'], ksaLatLng['P18']),
		},
		P18: {
			P17: getDistance(ksaLatLng['P18'], ksaLatLng['P17']),
			P26: getDistance(ksaLatLng['P18'], ksaLatLng['P26']),
		},
		P19: {
			P02: getDistance(ksaLatLng['P19'], ksaLatLng['P02']),
			P07: getDistance(ksaLatLng['P19'], ksaLatLng['P07']),
			P08: getDistance(ksaLatLng['P19'], ksaLatLng['P08']),
			P16: getDistance(ksaLatLng['P19'], ksaLatLng['P16']),
			P20: getDistance(ksaLatLng['P19'], ksaLatLng['P20']),
		},
		P20: {
			P07: getDistance(ksaLatLng['P20'], ksaLatLng['P07']),
			P08: getDistance(ksaLatLng['P20'], ksaLatLng['P08']),
			P19: getDistance(ksaLatLng['P20'], ksaLatLng['P19']),
			P21: getDistance(ksaLatLng['P20'], ksaLatLng['P21']),
		},
		P21: {
			노벨공원: getDistance(ksaLatLng['P21'], ksaLatLng['노벨공원']),
			P12: getDistance(ksaLatLng['P21'], ksaLatLng['P12']),
			P13: getDistance(ksaLatLng['P21'], ksaLatLng['P13']),
			P20: getDistance(ksaLatLng['P21'], ksaLatLng['P20']),
		},
		P22: {
			P13: getDistance(ksaLatLng['P22'], ksaLatLng['P13']),
			P23: getDistance(ksaLatLng['P22'], ksaLatLng['P23']),
			P38: getDistance(ksaLatLng['P22'], ksaLatLng['P38']),
		},
		P23: {
			P04: getDistance(ksaLatLng['P23'], ksaLatLng['P04']),
			P11: getDistance(ksaLatLng['P23'], ksaLatLng['P11']),
			P14: getDistance(ksaLatLng['P23'], ksaLatLng['P14']),
			P22: getDistance(ksaLatLng['P23'], ksaLatLng['P22']),
			P25: getDistance(ksaLatLng['P23'], ksaLatLng['P25']),
			P27: getDistance(ksaLatLng['P23'], ksaLatLng['P27']),
			P38: getDistance(ksaLatLng['P23'], ksaLatLng['P38']),
		},
		P24: {
			P25: getDistance(ksaLatLng['P24'], ksaLatLng['P25']),
			P26: getDistance(ksaLatLng['P24'], ksaLatLng['P26']),
			P27: getDistance(ksaLatLng['P24'], ksaLatLng['P27']),
		},
		P25: {
			운동장: getDistance(ksaLatLng['P25'], ksaLatLng['운동장']),
			P04: getDistance(ksaLatLng['P25'], ksaLatLng['P04']),
			P11: getDistance(ksaLatLng['P25'], ksaLatLng['P11']),
			P14: getDistance(ksaLatLng['P25'], ksaLatLng['P14']),
			P23: getDistance(ksaLatLng['P25'], ksaLatLng['P23']),
			P24: getDistance(ksaLatLng['P25'], ksaLatLng['P24']),
			P27: getDistance(ksaLatLng['P25'], ksaLatLng['P27']),
		},
		P26: {
			P01: getDistance(ksaLatLng['P26'], ksaLatLng['P01']),
			P18: getDistance(ksaLatLng['P26'], ksaLatLng['P18']),
			P24: getDistance(ksaLatLng['P26'], ksaLatLng['P24']),
		},
		P27: {
			P01: getDistance(ksaLatLng['P27'], ksaLatLng['P01']),
			P04: getDistance(ksaLatLng['P27'], ksaLatLng['P04']),
			P11: getDistance(ksaLatLng['P27'], ksaLatLng['P11']),
			P14: getDistance(ksaLatLng['P27'], ksaLatLng['P14']),
			P23: getDistance(ksaLatLng['P27'], ksaLatLng['P23']),
			P24: getDistance(ksaLatLng['P27'], ksaLatLng['P24']),
			P25: getDistance(ksaLatLng['P27'], ksaLatLng['P25']),
		},
		P28: {
			견우관: getDistance(ksaLatLng['P28'], ksaLatLng['견우관']),
			P05: getDistance(ksaLatLng['P28'], ksaLatLng['P05']),
			P06: getDistance(ksaLatLng['P28'], ksaLatLng['P06']),
		},
		P29: {
			P03: getDistance(ksaLatLng['P29'], ksaLatLng['P03']),
			P10: getDistance(ksaLatLng['P29'], ksaLatLng['P10']),
			P31: getDistance(ksaLatLng['P29'], ksaLatLng['P31']),
			P32: getDistance(ksaLatLng['P29'], ksaLatLng['P32']),
		},
		P30: {
			아크로폴리스: getDistance(ksaLatLng['P30'], ksaLatLng['아크로폴리스']),
			P09: getDistance(ksaLatLng['P30'], ksaLatLng['P09']),
			P10: getDistance(ksaLatLng['P30'], ksaLatLng['P10']),
			P31: getDistance(ksaLatLng['P30'], ksaLatLng['P31']),
			P38: getDistance(ksaLatLng['P30'], ksaLatLng['P38']),
		},
		P31: {
			아크로폴리스: getDistance(ksaLatLng['P31'], ksaLatLng['아크로폴리스']),
			P03: getDistance(ksaLatLng['P31'], ksaLatLng['P03']),
			P09: getDistance(ksaLatLng['P31'], ksaLatLng['P09']),
			P10: getDistance(ksaLatLng['P31'], ksaLatLng['P10']),
			P29: getDistance(ksaLatLng['P31'], ksaLatLng['P29']),
			P30: getDistance(ksaLatLng['P31'], ksaLatLng['P30']),
		},
		P32: {
			탐구관: getDistance(ksaLatLng['P32'], ksaLatLng['탐구관']),
			P08: getDistance(ksaLatLng['P32'], ksaLatLng['P08']),
			P29: getDistance(ksaLatLng['P32'], ksaLatLng['P29']),
			P34: getDistance(ksaLatLng['P32'], ksaLatLng['P34']),
			P36: getDistance(ksaLatLng['P32'], ksaLatLng['P36']),
		},
		P33: {
			형설관: getDistance(ksaLatLng['P33'], ksaLatLng['형설관']),
			P12: getDistance(ksaLatLng['P33'], ksaLatLng['P12']),
			P13: getDistance(ksaLatLng['P33'], ksaLatLng['P13']),
			P35: getDistance(ksaLatLng['P33'], ksaLatLng['P35']),
			P36: getDistance(ksaLatLng['P33'], ksaLatLng['P36']),
		},
		P34: {
			탐구관: getDistance(ksaLatLng['P34'], ksaLatLng['탐구관']),
			DDC: getDistance(ksaLatLng['P34'], ksaLatLng['DDC']),
			P32: getDistance(ksaLatLng['P34'], ksaLatLng['P32']),
			P35: getDistance(ksaLatLng['P34'], ksaLatLng['P35']),
		},
		P35: {
			형설관: getDistance(ksaLatLng['P35'], ksaLatLng['형설관']),
			P12: getDistance(ksaLatLng['P35'], ksaLatLng['P12']),
			P13: getDistance(ksaLatLng['P35'], ksaLatLng['P13']),
			P33: getDistance(ksaLatLng['P35'], ksaLatLng['P33']),
			P34: getDistance(ksaLatLng['P35'], ksaLatLng['P34']),
		},
		P36: {
			P08: getDistance(ksaLatLng['P36'], ksaLatLng['P08']),
			P32: getDistance(ksaLatLng['P36'], ksaLatLng['P32']),
			P33: getDistance(ksaLatLng['P36'], ksaLatLng['P33']),
			P37: getDistance(ksaLatLng['P36'], ksaLatLng['P37']),
		},
		P37: {
			창조관: getDistance(ksaLatLng['P37'], ksaLatLng['창조관']),
			P07: getDistance(ksaLatLng['P37'], ksaLatLng['P07']),
			P36: getDistance(ksaLatLng['P37'], ksaLatLng['P36']),
		},
		P38: {
			DDC: getDistance(ksaLatLng['P38'], ksaLatLng['DDC']),
			P22: getDistance(ksaLatLng['P38'], ksaLatLng['P22']),
			P23: getDistance(ksaLatLng['P38'], ksaLatLng['P23']),
			P30: getDistance(ksaLatLng['P38'], ksaLatLng['P30']),
		},
	};
}
var container = document.getElementById('map');
var options = {
	center: new kakao.maps.LatLng(35.16592065712491, 129.02596403126353),
	level: 2
};
var map = new kakao.maps.Map(container, options);
var geocoder = new kakao.maps.services.Geocoder();
var polylinePath;
var gotCurrPos;

var marker;
var marker_curr = new kakao.maps.Marker();
var marker_dept = new kakao.maps.Marker({ image: new kakao.maps.MarkerImage("../img/marker_dept.png", new kakao.maps.Size(50, 45), { offset: new kakao.maps.Point(15, 43) }) });
var marker_dest = new kakao.maps.Marker({ image: new kakao.maps.MarkerImage("../img/marker_dest.png", new kakao.maps.Size(50, 45), { offset: new kakao.maps.Point(15, 43) }) });
marker_dept.setMap(map);
marker_dest.setMap(map);

function markCurrentLocation(pos) {
	marker_curr.setPosition(new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
	// marker_curr.setPosition(new kakao.maps.LatLng(35.16627747999284, 129.02591252605987));
	marker_curr.setMap(map);
}

function selectLocation(selected, def_txt) {
	var def_txt_elm = document.getElementById(def_txt);
	def_txt_elm.innerText = selected.textContent;
	def_txt_elm.className = 'SelectedText';
	selected.parentElement.style.visibility = 'hidden';
	if (polylinePath != undefined)
		polylinePath.setMap(null);

	return def_txt_elm;
}

function selectLocationByMap(selected, def_txt, mkr) {
	selectLocation(selected, def_txt);
	marker = mkr;
}

function selectCurrentLocation(selected, def_txt, mkr) {
	selectLocation(selected, def_txt);

	navigator.geolocation.getCurrentPosition((pos) => {
		mkr.setPosition(new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
		// mkr.setPosition(new kakao.maps.LatLng(35.16627747999284, 129.02591252605987));
		gotCurrPos = true;
	})
}

function selectLocationByName(selected, def_txt, mkr) {
	var def_txt_elm = selectLocation(selected, def_txt);
	mkr.setPosition(ksaLatLng[def_txt_elm.innerText]);
}

kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
	if (marker != undefined) {
		marker.setPosition(mouseEvent.latLng);
		geocoder.coord2Address(mouseEvent.latLng.getLng(), mouseEvent.latLng.getLat(), function(result, status) {
			if (status === kakao.maps.services.Status.OK) {
				var detailAddr = !!result[0].road_address ? result[0].road_address.address_name.replace('부산광역시 부산진구 ', '') : '지도 선택 위치';
				if (marker == marker_dept)
					document.getElementById('dept_default').innerText = detailAddr;
				else if (marker == marker_dest)
					document.getElementById('dest_default').innerText = detailAddr;
			}
			marker = undefined;
		});
	}
});

function exchangeDeptDest() {
	var dept_txt_elm = document.getElementById('dept_default');
	var dest_txt_elm = document.getElementById('dest_default');

	if (polylinePath != undefined)
		polylinePath.setMap(null);

	if (dept_txt_elm.className == 'SelectedText' && dest_txt_elm.className == 'SelectedText') {
		var tmp = dept_txt_elm.innerText;
		dept_txt_elm.innerText = dest_txt_elm.innerText;
		dest_txt_elm.innerText = tmp;
		tmp = marker_dept.getPosition();
		marker_dept.setPosition(marker_dest.getPosition());
		marker_dest.setPosition(tmp);
	} else {
		toast('출발지와 목적지를 모두 설정해 주세요!', 1500);
	}
}

function getDistance(pos1, pos2) {
	const lat1 = pos1.getLat();
	const lng1 = pos1.getLng();
	const lat2 = pos2.getLat();
	const lng2 = pos2.getLng();
	function deg2rad(deg) {
		return deg * (Math.PI / 180);
	}
	var R = 6371;
	var dLat = deg2rad(lat2 - lat1);
	var dLon = deg2rad(lng2 - lng1);
	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;
	return d; 
}

function findNearest(pos) {
	var min = Infinity;
	var nearest, tmp;
	for (const k in ksaLatLng) {
		tmp = getDistance(pos, ksaLatLng[k]);
		if (tmp < min) {
			min = tmp;
			nearest = k;
		}
	}
	return nearest;
}

function navigate() {
	initGraph();

	if (polylinePath != undefined)
		polylinePath.setMap(null);

	const dept_near = findNearest(marker_dept.getPosition());
	const dest_near = findNearest(marker_dest.getPosition());

	ksaLatLng['dept'] = marker_dept.getPosition();
	ksaLatLng['dest'] = marker_dest.getPosition();
	ksaGraph['dept'] = { [dept_near]: getDistance(marker_dept.getPosition(), ksaLatLng[dept_near]) };
	ksaGraph[dest_near] = { dest: getDistance(marker_dest.getPosition(), ksaLatLng[dest_near]) };
	ksaGraph['dest'] = {};

	const path = dijkstra(ksaGraph).path;
	path.unshift('dept');
	// console.log(path);

	polylinePath = new kakao.maps.Polyline({
		path: path.map((k) => ksaLatLng[k]),
		strokeWeight: 5,
		strokeColor: '#0000FF',
		strokeOpacity: 0.7,
		strokeStyle: 'solid'
	}); 
	polylinePath.setMap(map);
	var distance = Math.round(polylinePath.getLength());
	var walkkTime = distance / 1.04 | 0;
	toast('거리: ' + distance + 'm\n도보: ' + walkkTime + '초', 5000);
}

function toast(msg, ms){
	var toastMessage = document.getElementById('toast_message');
	toastMessage.innerText = msg;
	toastMessage.classList.add('active');
	setTimeout(function(){
		toastMessage.classList.remove('active');
	}, ms);
}

function navigateByParam() {
	var dest = new URL(location.href).searchParams.get('dest');
	if (dest) {
		selectCurrentLocation(document.getElementById('dept_curr'), 'dept_default', marker_dept);
		for (elm of document.getElementById('sel_dest').children) {
			if (elm.textContent == dest) {
				selectLocationByName(elm, 'dest_default', marker_dest);
				break;
			}
		}
		function checkFlag() {
			if(!gotCurrPos)
				window.setTimeout(checkFlag, 100);
			else
				navigate();
		}
		checkFlag();
	}
}

function dijkstra(graph) {
	const costs = Object.assign({ dest: Infinity }, graph.dept);
	const parents = { dest: null };
	const processed = [];

	let node = findLowestCostNode(costs, processed);

	while (node) {
		let cost = costs[node];
		let children = graph[node];
		for (let n in children) {
			let newCost = cost + children[n];
			if (!costs[n] || costs[n] > newCost) {
				costs[n] = newCost;
				parents[n] = node;
			}
		}
		processed.push(node);
		node = findLowestCostNode(costs, processed);
	}

	let optimalPath = ['dest'];
	let parent = parents.dest;
	while (parent) {
		optimalPath.push(parent);
		parent = parents[parent];
	}
	optimalPath.reverse();

	return { distance: costs.dest, path: optimalPath };
};

function findLowestCostNode(costs, processed) {
	return Object.keys(costs).reduce((lowest, node) => {
		if (lowest === null || costs[node] < costs[lowest]) {
			if (!processed.includes(node)) {
				lowest = node;
			}
		}
		return lowest;
	}, null);
};

var p;
p = {
	탐구입구앞: [-7.2, -13.2, 3.5],
	탐구입구 : [-7.2, -13.2, 3.5],
	탐복도창조1: [-7.2, -15, 3.5],
	탐복도창조2: [-7.2, -15, 5],
	탐복도DDC1 : [9.6, -15, 3.5],
	탐복도DDC2 : [9.6, -15, 5],
	형복도DDC1 : [9.6, -22.8, 5],
	형복도창조1 : [-7.2, -22.8, 5],
	창조다리탐구 : [-7.2, -19.2, 6.5],
	창조다리창조 : [-19.5, -19.2, 6.5],
	창조입구 : [-19.5, -16, 3.5],
	창조입구앞 : [-13.5, -16, 3.5],
	DDC1 : [9.6, -6, 3.5],
	DDC2 : [9.6, -6, 5],
	창복도1 : [-25, -16, 2],
	본관복도탐구 : [-7.2, -11.5, 0.5],
	본관다리앞 : [-7.2, -0.2, 3.5],
	본관입구견우 : [-7.2, -0.2, 0.5],
	본관입구견우앞 : [-13.5, 0.2, 0.5],
	본관1 : [-7.2, 2.5, 0.5],
	본관3 : [-7.2, 2.5, 3.5],
	본관입구예지 : [-3, 2.5, 0.5],
	본관입구예지앞 : [-3, 8.5, 0.5],
	중앙 : [-13.5, 8.5, 0.5],
	예지가는길 : [7, 8.5, 0.5],
	예지입구앞 : [7, 11, 0.5],
	예지입구1 : [12, 11, 0.5],
	견우입구 : [-17.5, -1.5, 2],
	견우 : [-20, -1.5, 2],
	직녀 : [-33, -1.5, 2],
	메인비탈길앞 : [-17.5, -7.8, 2],
	메인비탈길중간 : [-13.5, -7.8, 2],
	견우다리가는길1 : [-16, -1.5, 2],
	견우다리가는길2 : [-16, -0.2, 2],
	견우다리가는길3 : [-16, -0.2, 3.5],
	예지DDC1 : [7, 6.7, 0.5],
	예지DDC2 : [14.7, 6.7, 0.5],
	예지DDC3 : [14.7, -6, 3.5]
}

var start = document.getElementById('dept_default');
var finish = document.getElementById('dest_default')
function shortestPath(start, finish) {
    if (start === "본관") {
        if (finish === "탐구관") {
            return [ p['본관1'], p['본관3'], p['본관입구견우'], p['탐구입구'], p['탐복도창조1'] ];
        }
        if (finish === "형설관") {
            return [ p['본관1'], p['본관3'], p['본관입구견우'], p['탐구입구'], p['탐복도창조1'], p['탐복도창조2'], p['형복도창조1'] ];
        }
        if (finish === "창조관") {
            return [ p['본관1'], p['본관입구견우'], p['본관입구견우앞'], p['메인비탈길중간'], p['탐구입구앞'], p['창조입구앞'], p['창조입구'] ];
        }
        if (finish === "예지관") {
            return [ p['본관1'], p['본관입구예지'], p['본관입구예지앞'], p['예지가는길'], p['예지입구앞'], p['예지입구1'] ];
        }
        if (finish === "DDC") {
            return [ p['본관1'], p['본관3'], p['본관입구견우'], p['탐구입구'], p['탐복도창조1'], p['탐복도창조2'], p['탐복도DDC2'], p['DDC2'] ];
        }
        if (finish === "견우관") {
            return [ p['본관1'], p['본관입구견우'], p['본관입구견우앞'], p['견우입구'], p['견우'] ];
        }
        if (finish === "직녀관") {
            return [ p['본관1'], p['본관입구견우'], p['본관입구견우앞'], p['견우입구'], p['견우'], p['직녀'] ];
        } }
    if (start === "탐구관") {
        if (finish === "본관") {
            return [ p['탐복도창조1'], p['탐구입구'], p['본관입구견우'], p['본관3'], p['본관1'] ];
        }
        if (finish === "형설관") {
            return [ p['탐복도창조1'], p['탐복도창조2'], p['형복도창조1'] ];
        }
        if (finish === "창조관") {
            return [ p['탐복도창조1'], p['탐구입구'], p['탐구입구앞'], p['창조입구앞'], p['창조입구'] ];
        }
        if (finish === "예지관") {
            return [ p['탐복도창조1'], p['탐구입구'], p['본관입구견우'], p['본관3'], p['본관1'], p['본관입구예지'], p['본관입구예지앞'], p['예지가는길'], p['예지입구앞'], p['예지입구1'] ];
        }
        if (finish === "DDC") {
            return [ p['탐복도창조1'], p['탐복도창조2'], p['탐복도DDC2'], p['DDC2'] ];
        }
        if (finish === "견우관") {
            return [ p['탐복도창조1'], p['탐구입구'], p['탐구입구앞'], p['메인비탈길중간'], p['메인비탈길앞'], p['견우입구'], p['견우'] ];
        }
        if (finish === "직녀관") {
            return [ p['탐복도창조1'], p['탐구입구'], p['탐구입구앞'], p['메인비탈길중간'], p['메인비탈길앞'], p['견우입구'], p['견우'], p['직녀'] ];
        } }
    if (start === "형설관") {
        if (finish === "본관") {
            return [ p['형복도창조1'], p['탐복도창조2'], p['탐복도창조1'], p['탐구입구'], p['본관입구견우'], p['본관3'], p['본관1'] ];
        }
        if (finish === "탐구관") {
            return [ p['형복도창조1'], p['탐복도창조2'], p['탐복도창조1'] ];
        }
        if (finish === "창조관") {
            return [ p['형복도창조1'], p['탐복도창조2'], p['탐복도창조1'], p['탐구입구'], p['탐구입구앞'], p['창조입구앞'], p['창조입구'] ];
        }
        if (finish === "예지관") {
            return [ p['형복도창조1'], p['탐복도창조2'], p['탐복도창조1'], p['탐구입구'], p['본관입구견우'], p['본관3'], p['본관1'], p['본관입구예지'], p['본관입구예지앞'], p['예지가는길'], p['예지입구앞'], p['예지입구1'] ];
        }
        if (finish === "DDC") {
            return [ p['형복도창조1'], p['탐복도창조2'], p['탐복도창조1'], p['탐복도창조2'], p['탐복도DDC2'], p['DDC2'] ];
        }
        if (finish === "견우관") {
            return [ p['형복도창조1'], p['탐복도창조2'], p['탐복도창조1'], p['탐구입구'], p['탐구입구앞'], p['메인비탈길중간'], p['메인비탈길앞'], p['견우입구'], p['견우'] ];
        }
        if (finish === "직녀관") {
            return [ p['형복도창조1'], p['탐복도창조2'], p['탐복도창조1'], p['탐구입구'], p['탐구입구앞'], p['메인비탈길중간'], p['메인비탈길앞'], p['견우입구'], p['견우'], p['직녀'] ];
        } }
    if (start === "창조관") {
        if (finish === "본관") {
            return [ p['창조입구'], p['창조입구앞'], p['탐구입구앞'], p['메인비탈길중간'], p['본관입구견우앞'], p['본관입구견우'], p['본관1'] ];
        }
        if (finish === "탐구관") {
            return [ p['창조입구'], p['창조입구앞'], p['탐구입구앞'], p['탐구입구'], p['탐복도창조1'] ];
        }
        if (finish === "형설관") {
            return [ p['창조입구'], p['창조입구앞'], p['탐구입구앞'], p['탐구입구'], p['탐복도창조1'], p['탐복도창조2'], p['형복도창조1'] ];
        }
        if (finish === "예지관") {
            return [ p['창조입구'], p['창조입구앞'], p['탐구입구앞'], p['메인비탈길중간'], p['본관입구견우앞'], p['중앙'], p['본관입구예지앞'], p['예지가는길'], p['예지입구앞'], p['예지입구1'] ];
        }
        if (finish === "DDC") {
            return [ p['창조입구'], p['창조입구앞'], p['탐구입구앞'], p['탐구입구'], p['탐복도창조1'], p['탐복도창조2'], p['탐복도DDC2'], p['DDC2'] ];
        }
        if (finish === "견우관") {
            return [ p['창조입구'], p['창조입구앞'], p['탐구입구앞'], p['메인비탈길중간'], p['메인비탈길앞'], p['견우입구'], p['견우'] ];
        }
        if (finish === "직녀관") {
            return [ p['창조입구'], p['창조입구앞'], p['탐구입구앞'], p['메인비탈길중간'], p['메인비탈길앞'], p['견우입구'], p['견우'], p['직녀'] ];
        } }
    if (start === "예지관") {
        if (finish === "본관") {
            return [ p['예지입구1'], p['예지입구앞'], p['예지가는길'], p['본관입구예지앞'], p['본관입구예지'], p['본관1'] ];
        }
        if (finish === "탐구관") {
            return [ p['예지입구1'], p['예지입구앞'], p['예지가는길'], p['본관입구예지앞'], p['본관입구예지'], p['본관1'], p['본관3'], p['본관입구견우'], p['탐구입구'], p['탐복도창조1'] ];
        }
        if (finish === "형설관") {
            return [ p['예지입구1'], p['예지입구앞'], p['예지가는길'], p['본관입구예지앞'], p['본관입구예지'], p['본관1'], p['본관3'], p['본관입구견우'], p['탐구입구'], p['탐복도창조1'], p['탐복도창조2'], p['형복도창조1'] ];
        }
        if (finish === "창조관") {
            return [ p['예지입구1'], p['예지입구앞'], p['예지가는길'], p['본관입구예지앞'], p['중앙'], p['본관입구견우앞'], p['메인비탈길중간'], p['탐구입구앞'], p['창조입구앞'], p['창조입구'] ];
        }
        if (finish === "DDC") {
            return [ p['예지입구1'], p['예지입구앞'], p['예지DDC1'], p['예지DDC2'], p['예지DDC3'], p['DDC1'] ];
        }
        if (finish === "견우관") {
            return [ p['예지입구1'], p['예지입구앞'], p['예지가는길'], p['본관입구예지앞'], p['중앙'], p['본관입구견우앞'], p['견우입구'], p['견우'] ];
        }
        if (finish === "직녀관") {
            return [ p['예지입구1'], p['예지입구앞'], p['예지가는길'], p['본관입구예지앞'], p['중앙'], p['본관입구견우앞'], p['견우입구'], p['견우'], p['직녀녀'] ];
        } }
    if (start === "DDC") {
        if (finish === "본관") {
            return [ p['DDC2'], p['탐복도DDC2'], p['탐복도창조2'], p['탐복도창조1'], p['탐구입구'], p['본관입구견우'], p['본관3'], p['본관1'] ];
        }
        if (finish === "탐구관") {
            return [ p['DDC2'], p['탐복도DDC2'], p['탐복도창조2'], p['탐복도창조1'] ];
        }
        if (finish === "형설관") {
            return [ p['DDC2'], p['탐복도DDC2'], p['탐복도창조2'], p['탐복도창조1'], p['탐복도창조2'], p['형복도창조1'] ];
        }
        if (finish === "창조관") {
            return [ p['DDC2'], p['탐복도DDC2'], p['탐복도창조2'], p['탐복도창조1'], p['탐구입구'], p['탐구입구앞'], p['창조입구앞'], p['창조입구'] ];
        }
        if (finish === "예지관") {
            return [ p['DDC2'], p['DDC1'], p['예지DDC3'], p['예지DDC2'], p['예지DDC1'], p['예지입구앞'], p['예지입구1'] ];
        }
        if (finish === "견우관") {
            return [ p['DDC2'], p['탐복도DDC2'], p['탐복도창조2'], p['탐복도창조1'], p['탐구입구'], p['탐구입구앞'], p['메인비탈길중간'], p['메인비탈길앞'], p['견우입구'], p['견우'] ];
        }
        if (finish === "직녀관") {
            return [ p['DDC2'], p['탐복도DDC2'], p['탐복도창조2'], p['탐복도창조1'], p['탐구입구'], p['탐구입구앞'], p['메인비탈길중간'], p['메인비탈길앞'], p['견우입구'], p['견우'], p['직녀'] ];
        } }
    if (start === "견우관") {
        if (finish === "본관") {
            return [ p['견우'], p['견우입구'], p['본관입구견우앞'], p['본관입구견우'], p['본관1'] ];
        }
        if (finish === "탐구관") {
            return [ p['견우'], p['견우입구'], p['메인비탈길앞'], p['메인비탈길중간'], p['탐구입구앞'], p['탐구입구'], p['탐복도창조1'] ];
        }
        if (finish === "형설관") {
            return [ p['견우'], p['견우입구'], p['메인비탈길앞'], p['메인비탈길중간'], p['탐구입구앞'], p['탐구입구'], p['탐복도창조1'], p['탐복도창조2'], p['형복도창조1'] ];
        }
        if (finish === "창조관") {
            return [ p['견우'], p['견우입구'], p['메인비탈길앞'], p['메인비탈길중간'], p['탐구입구앞'], p['창조입구앞'], p['창조입구'] ];
        }
        if (finish === "예지관") {
            return [ p['견우'], p['견우입구'], p['본관입구견우앞'], p['중앙'], p['본관입구예지앞'], p['예지가는길'], p['예지입구앞'], p['예지입구1'] ];
        }
        if (finish === "DDC") {
            return [ p['견우'], p['견우입구'], p['메인비탈길앞'], p['메인비탈길중간'], p['탐구입구앞'], p['탐구입구'], p['탐복도창조1'], p['탐복도창조2'], p['탐복도DDC2'], p['DDC2'] ];
        }
        if (finish === "직녀관") {
            return [ p['견우'], p['직녀'] ];
        } }
    if (start === "직녀관") {
        if (finish === "본관") {
            return [ p['직녀'], p['견우'], p['견우입구'], p['본관입구견우앞'], p['본관입구견우'], p['본관1'] ];
        }
        if (finish === "탐구관") {
            return [ p['직녀'], p['견우'], p['견우입구'], p['메인비탈길앞'], p['메인비탈길중간'], p['탐구입구앞'], p['탐구입구'], p['탐복도창조1'] ];
        }
        if (finish === "형설관") {
            return [ p['직녀'], p['견우'], p['견우입구'], p['메인비탈길앞'], p['메인비탈길중간'], p['탐구입구앞'], p['탐구입구'], p['탐복도창조1'], p['탐복도창조2'], p['형복도창조1'] ];
        }
        if (finish === "창조관") {
            return [ p['직녀'], p['견우'], p['견우입구'], p['메인비탈길앞'], p['메인비탈길중간'], p['탐구입구앞'], p['창조입구앞'], p['창조입구'] ];
        }
        if (finish === "예지관") {
            return [ p['직녀'], p['견우'], p['견우입구'], p['본관입구견우앞'], p['중앙'], p['본관입구예지앞'], p['예지가는길'], p['예지입구앞'], p['예지입구1'] ];
        }
        if (finish === "DDC") {
            return [ p['직녀'], p['견우'], p['견우입구'], p['메인비탈길앞'], p['메인비탈길중간'], p['탐구입구앞'], p['탐구입구'], p['탐복도창조1'], p['탐복도창조2'], p['탐복도DDC2'], p['DDC2'] ];
        }
        if (finish === "견우관") {
            return [ p['직녀'], p['견우'] ];
        } }
    return [];
}
export { start, finish, shortestPath }
