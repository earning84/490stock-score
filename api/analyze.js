export const maxDuration = 60;

// [기존기업] 44개 항목 (490점 만점)
const EXISTING_CRITERIA = [
  { no: 1, max: 20, text: "이 기업은 기인문기정금(기술, 인구, 문화, 기후, 정치, 금융) 변화 중 구체적으로 어떠한 변화에 속해있고 그 변화가 메가 트렌드가 될 것인가?(메가트렌드 조건 1000억달러 시장, CAGR 8%, 20년지속, 특허 건수 및 인용률, 제조업의 15%생산, 고용의 10%, 부가가치 20%등)\n아래 부가설명\n1) 해당 산업의 글로벌 시장규모가 1000억달러 이상 될 것인지\n2) 리서치기관의 리포트등에서 연평균 성장률이 8%이상 지속하는지\n3) 해당 산업의 성장이 20년 이상 가능한지\n4) 한해 산업별 특허 건수 또는 인용률 상위 순위에 어떤 산업이 랭크되어 있는지\n5) 국내 또는 글로벌로 해당 산업의 제조업 생산량이 전체 산업 생산량의 15%이상인지\n6) 국내 또는 글로벌 고용창출의 10%이상 차지하는지\n7) 해당산업이 전체 산업 부가가치의 20%이상인지." },
  { no: 2, max: 20, text: "이 기업의 해당 산업이 글로벌로 필요한 산업인가? 산업 규모가 TAM(최대도달마켓사이즈) or SAM(가능한유효시장)이 1조달러 이상으로 성장할 것인가?(마크마하니)(산업을 확대하지 말것)" },
  { no: 3, max: 8, text: "그 기업이 원래 산업외에 다른 TAM이 큰 산업(3000억달러 이상)으로 진출하여 확장 가능한가?" },
  { no: 4, max: 8, text: "그 사업이 지속 가능한 산업군이냐?" },
  { no: 5, max: 20, text: "해당 산업이 발전하는데 필수적인 핵심 키포인트는 무엇인가? 예로 반도체 산업은  '에너지밴드갭', AI산업은 'Cuda같은 SW기술'등이 산업의 성장 핵심 키포인트잖아. \n어떠한 특성을 기준으로 발전하는가? 해당 기업은 그 핵심 키포인트를 갖췄나?" },
  { no: 6, max: 10, text: "산업 내 투자 수요가 유입되는 가운데, 최근 1~3개월간 스마트 머니(외인·연기금·사모·투신)의 유의미한 순매집(유통시총 1% 이상)이 확인되고 대차·공매도 급증 등 하방 리스크가 배제되어 있는가?" },
  { no: 7, max: 20, text: "기업의 사업추진상황·산업·경기사이클상 6개월~1년 내 가시적 성과·촉매가 기대되는 투자 적기이며, 차트 일봉상 이동평균선 240일선 또는 120일선 위에 위치해 있는가?(이동평균선 역배열 하락 추세 지속 시 10점 이하로 엄격 감점)" },
  { no: 8, max: 10, text: "그 산업의 역사는 어떠했나? 과거 역사와 비교했을때 2년내 돈을 벌 산업의 타이밍인가?" },
  { no: 9, max: 10, text: "해당 산업의 비즈니스 구조, 매출 크기, 매출인식 방식등을 고려했을때 그 산업이 본격 성장하고 있거나 곧 성장할 것인가?" },
  { no: 10, max: 20, text: "글로벌 경쟁력(G). 해당 산업 관련 종사자 누구나 알만한 브랜드 파워나 제품 보유하면 더 좋음. 메가히트, 블록버스터, 브랜드 그 자체가 대표인 그런 제품이나 서비스 수, LTV(고객생애가치)/CAC(고객획득비용)비율등도 고려." },
  { no: 11, max: 30, text: "시장지배력(M). 기술적 해자로 유일 또는 긴 리드타임 격차, 독과점적인 가격결정권, 락인파워(가격경쟁력, 전환비용), 병목현상 해결, 점유율과 지속기간, 장기계약 우위 유무, 표준에 대한 결정권등도 고려" },
  { no: 12, max: 20, text: "신기술력(T). 산업이 발전하면서 좋은 제품을 한,두개가 아닌 지속적으로 꾸준히 좋은 제품을 만들 수 있는 핵심 기술력. 산업리서치 리포트의 TAM 1000억 달러이상의 시장 진출유무, 새로운 산업이나 산업내 다음 단계 진화를 위한 매출액 대비 R&D 경상연구개발비, 특허등록건수 or 특허상용화수등, M&A가능한 자금보유유무등도 고려" },
  { no: 13, max: 20, text: "제품화 능력(C) - capex투자 금액, 생산capa 얼마나 보유, 연구개발부터 상용화까지의 기간 및 대량생산 가능성, 매출총이익률등도 고려" },
  { no: 14, max: 20, text: "경영진 가능성(M) 파괴적 혁신의 아이디어, 기술 리더십, 실행 및 달성능력, 장기적인 목표 제시, 고성장 전략, 비젼, 똘기등 (like 일론머스크)" },
  { no: 15, max: 10, text: "독점적 가능성이 있는가? Market Share를 선점하든, 뺏어올 가능성이 있나?" },
  { no: 16, max: 20, text: "이 기업은 기술, 사업전략, 다른 기업으로 전환비용, 잉여현금흐름, 높은 매출총이익률, 지속적인 반복매출등의 구조적 해자가 있는가?" },
  { no: 17, max: 30, text: "뭔가 미래를 위해 메가트렌드에 속하면서 돈을 많이 벌 수 있는 큰거 한방을 준비하고 있는것이 있나? 매출이 몇배 증가 될 정도로 준비하고 있는 한방이 있는가?" },
  { no: 18, max: 10, text: "이 기업이 해당 산업의 Capex단계부터 밸류체인내에서 병목현상을 해결할 수 있을 정도의 핵심 위치에 있는가?" },
  { no: 19, max: 5, text: "그 기업의 고객기업이 글로벌 큰 기업이 많은가? 그리고 고객수가 풍부한가?" },
  { no: 20, max: 8, text: "해당 산업의 초반기에 강했던 기업인가? 본격 성장기가 되고 나서도 강자의 위치를 지속 유지할 수 있나?" },
  { no: 21, max: 10, text: "매출액의 5~10%이상 연구개발비를 꾸준히 쓰고 있는가?" },
  { no: 22, max: 10, text: "과거 돈 잘벌때와 비교해 현재의 매출과 이익이 각각 60%이상 되는가? 과거 매출을 통해 다시 해당 산업의 붐이 왔을때 다시 제대로 벌 수 있을것인가?" },
  { no: 23, max: 8, text: "3년이상 지속적으로 ROE 15%이상이거나 ROIC 10%이상 유지하고 있는가?" },
  { no: 24, max: 1, text: "기업의 매출과 수주가 계절성 또는 싸이클(시클리컬) 특성을 보이는가? 어떠한 계절성 또는 싸이클을 보이는가? 왜 그런것인가? 이러한 계절성 및 싸이클 특성을 고려하여 어떤 투자 전략을 쓸것인가?" },
  { no: 25, max: 10, text: "영업이익이 증가하고 있는가? 매출이 증가해서 영업이익이 증가하고 있는가? " },
  { no: 26, max: 5, text: "영업이익외 금융수익, 기타수익등의 이익 요소도 증가하고 있나?" },
  { no: 27, max: 10, text: "해당기업의 향후 5년동안의 매출 및 영업이익의 연평균 성장률이 각각 15%이상 되는가?" },
  { no: 28, max: 5, text: "주요비용이 감소하는 추이인가?" },
  { no: 29, max: 2, text: "감가상각비가 유지되고 있거나 감소하고 있는가?" },
  { no: 30, max: 12, text: "최근 연간·분기 실측 재무제표 기반 듀퐁ROE 분석상 순이익률과 자산회전율(수치 직접 기재)이 우수한 수준인가? (ROE 10% 미만 시 4점 이하 채점)" },
  { no: 31, max: 2, text: "재고자산이 과도하게 많이 있는것은 아닌가? 재고자산회전율이 4~6이하인가?" },
  { no: 32, max: 2, text: "매출이 늘고 있는것도 아닌데 재고자산회전율이 낮아지고 있나?" },
  { no: 33, max: 2, text: "재고자산 많아도 재공품이 많은지 반제품이 많은지?(재공품은 바로 판매 안됨) 조선/방산/반도체/디스플레이/바이오/제약등의 수주산업이라 재공품이 많은지?" },
  { no: 34, max: 5, text: "최신 공시 기준 순차입금비율[순차입금(총차입금-현금성자산) / 자기자본]을 정량 계산하여 20% 이하 수준을 충족하고 있는가?" },
  { no: 35, max: 1, text: "이연법인세부채가 많은지 이연법인세자산이 많은지?(이법자가 많으면 내년에 세금 덜낸다)" },
  { no: 36, max: 10, text: "이 기업의 현금성자산, 이익잉여금, 재무 및 지분상태을 고려하였을때 자사주(EB), CB, BW, 차입, 증자등의 자금 조달을 할 필요가 없는가?" },
  { no: 37, max: 5, text: "CAPEX 규모를 고려하여도 유동비율과 당좌비율이 양호하거나 높은가?" },
  { no: 38, max: 8, text: "현재의 시가총액 만큼의 사업규모를 가졌는가? \n(1000억->5000억->1조->10조->50조->100조 각 단계의 규모가 있다. 그 규모만큼 이 기업이 성장 할 수 있는 가능성을 가졌는지)" },
  { no: 39, max: 10, text: "연결·별도 실적(컨센서스 포함) 대비 시가총액의 밸류에이션이 적정하며, 최근 1~3개월간 컨센서스(영업이익·EPS) 상향 및 어닝 서프라이즈 또는 목표주가 상향 추세가 유지되고 있는가?" },
  { no: 40, max: 8, text: "해당기업의 현재 시가총액을 고려했을때, 이기업의 종속기업/관계기업까지 고려했을때 가치가 저평가인가?" },
  { no: 41, max: 10, text: "글로벌 Peer 기업들과 비교하였을때 현재 해당기업의 시가총액이 저평가인가? Peer들의 PER, PSR도 비교했을때 현재 이 기업이 적정한 value인가?" },
  { no: 42, max: 10, text: "이 기업의 산업TAM, SAM, 사업확장성, 향후 매출, 이익등을 감안했을때 장기적으로 현재 시가총액의 5배까지 기업가치가 커질 수 있나?" },
  { no: 43, max: 5, text: "지분 구조가 주가 부양에 유리한 지분 구성으로 되어 있나? (오너가 가족 구성원이 지분을 조금씩 골고루 갖고 있으면 주가 부양 가능성 있음)\n(증여 or 상속문제로 주가 부양 가능성이 낮은건 아닌가? 증여나 상속이 임박해 있으면 세금 문제로 증여/상속 마무리 될때가지 주가 상승 가능성 낮다)" },
  { no: 44, max: 20, text: "이 기업의 valuation인 DCF와 RIM(Residual Income Model) 값은 각각 얼마인가? 제일 먼저 컨센서스 잠정실적 있으면 있는대로 모두 먼저 필수 적용.(ex. 향후 3년치). 없으면 자체 데이터." }
];

// [신생기업] 44개 항목 (490점 만점)
const NEWBORN_CRITERIA = [
  { no: 1, max: 20, text: "이 기업은 기인문기정금(기술, 인구, 문화, 기후, 정치, 금융) 변화 중 구체적으로 어떠한 변화에 속해있고 그 변화가 메가 트렌드가 될 것인가?(메가트렌드 조건 1000억달러 시장, CAGR 8%, 20년지속, 특허 건수 및 인용률, 제조업의 15%생산, 고용의 10%, 부가가치 20%등)\n아래 부가설명\n1) 해당 산업의 글로벌 시장규모가 1000억달러 이상 될 것인지\n2) 리서치기관의 리포트등에서 연평균 성장률이 8%이상 지속하는지\n3) 해당 산업의 성장이 20년 이상 가능한지\n4) 한해 산업별 특허 건수 또는 인용률 상위 순위에 어떤 산업이 랭크되어 있는지\n5) 국내 또는 글로벌로 해당 산업의 제조업 생산량이 전체 산업 생산량의 15%이상인지\n6) 국내 또는 글로벌 고용창출의 10%이상 차지하는지\n7) 해당산업이 전체 산업 부가가치의 20%이상인지." },
  { no: 2, max: 20, text: "이 기업의 해당 산업이 글로벌로 필요한 산업인가? 산업 규모가 TAM(최대도달마켓사이즈) or SAM(가능한유효시장)이 1조달러 이상으로 성장할 것인가?(마크마하니)(산업을 확대하지 말것)" },
  { no: 3, max: 8, text: "그 기업이 원래 산업외에 다른 TAM이 큰 산업(3000억달러 이상)으로 진출하여 확장 가능한가?" },
  { no: 4, max: 8, text: "그 사업이 지속 가능한 산업군이냐?" },
  { no: 5, max: 20, text: "해당 산업이 발전하는데 필수적인 핵심 키포인트는 무엇인가? 예로 반도체 산업은  '에너지밴드갭', AI산업은 'Cuda같은 SW기술'등이 산업의 성장 핵심 키포인트잖아. \n어떠한 특성을 기준으로 발전하는가? 해당 기업은 그 핵심 키포인트를 갖췄나?" },
  { no: 6, max: 10, text: "산업 내 투자 수요가 유입되는 가운데, 최근 1~3개월간 스마트 머니(외인·연기금·사모·투신)의 유의미한 순매집(유통시총 1% 이상)이 확인되고 대차·공매도 급증 등 하방 리스크가 배제되어 있는가?" },
  { no: 7, max: 20, text: "기업의 사업추진상황·산업·경기사이클상 6개월~1년 내 가시적 성과·촉매가 기대되는 투자 적기이며, 차트 일봉상 이동평균선 240일선 또는 120일선 위에 위치해 있는가?(이동평균선 역배열 하락 추세 지속 시 10점 이하로 엄격 감점)" },
  { no: 8, max: 10, text: "그 산업의 역사는 어떠했나? 과거 역사와 비교했을때 2년내 돈을 벌 산업의 타이밍인가?" },
  { no: 9, max: 10, text: "해당 산업의 비즈니스 구조, 매출 크기, 매출인식 방식등을 고려했을때 그 산업이 본격 성장하고 있거나 곧 성장할 것인가?" },
  { no: 10, max: 20, text: "글로벌 경쟁력(G). 해당 산업 관련 종사자 누구나 알만한 브랜드 파워나 제품 보유하면 더 좋음. 메가히트, 블록버스터, 브랜드 그 자체가 대표인 그런 제품이나 서비스 수, LTV(고객생애가치)/CAC(고객획득비용)비율등도 고려." },
  { no: 11, max: 30, text: "시장지배력(M). 기술적 해자로 유일 또는 긴 리드타임 격차, 독과점적인 가격결정권, 락인파워(가격경쟁력, 전환비용), 병목현상 해결, 점유율과 지속기간, 장기계약 우위 유무, 표준에 대한 결정권등도 고려" },
  { no: 12, max: 20, text: "신기술력(T). 산업이 발전하면서 좋은 제품을 한,두개가 아닌 지속적으로 꾸준히 좋은 제품을 만들 수 있는 핵심 기술력. 산업리서치 리포트의 TAM 1000억 달러이상의 시장 진출유무, 새로운 산업이나 산업내 다음 단계 진화를 위한 매출액 대비 R&D 경상연구개발비, 특허등록건수 or 특허상용화수등, M&A가능한 자금보유유무등도 고려" },
  { no: 13, max: 20, text: "제품화 능력(C) - capex투자 금액, 생산capa 얼마나 보유, 연구개발부터 상용화까지의 기간 및 대량생산 가능성, 매출총이익률등도 고려" },
  { no: 14, max: 20, text: "경영진 가능성(M) 파괴적 혁신의 아이디어, 기술 리더십, 실행 및 달성능력, 장기적인 목표 제시, 고성장 전략, 비젼, 똘기등 (like 일론머스크)" },
  { no: 15, max: 10, text: "독점적 가능성이 있는가? Market Share를 선점하든, 뺏어올 가능성이 있나?" },
  { no: 16, max: 20, text: "이 기업은 기술, 사업전략, 다른 기업으로 전환비용, 잉여현금흐름, 높은 매출총이익률, 지속적인 반복매출등의 구조적 해자가 있는가?" },
  { no: 17, max: 30, text: "뭔가 미래를 위해 메가트렌드에 속하면서 돈을 많이 벌 수 있는 큰거 한방을 준비하고 있는것이 있나? 매출이 몇배 증가 될 정도로 준비하고 있는 한방이 있는가?" },
  { no: 18, max: 10, text: "이 기업이 해당 산업의 Capex단계부터 밸류체인내에서 병목현상을 해결할 수 있을 정도의 핵심 위치에 있는가?" },
  { no: 19, max: 5, text: "그 기업의 고객기업이 글로벌 큰 기업이 많은가? 그리고 고객수가 풍부한가?" },
  { no: 20, max: 8, text: "해당 산업의 초반기에 강했던 기업인가? 본격 성장기가 되고 나서도 강자의 위치를 지속 유지할 수 있나?" },
  { no: 21, max: 10, text: "매출액의 5~10%이상 연구개발비를 꾸준히 쓰고 있는가?" },
  { no: 22, max: 12, text: "최근 회계연도에서 매출 성장률과 영업이익률(또는 EBITDA률)의 합(Rule of 40)이 40% 이상인가? 최근 회계연도의 연간 사업보고서를 기준으로 1년전과 비교.(분기별 아님)" },
  { no: 23, max: 8, text: "Price to Sales Growth(PSG)를 계산하여 1주 가격/(1주당 매출 x 매출 성장률)의 값이 1 미만인가? PSR/매출성장률. %는 수치 그대로 나누기. 최근 회계연도의 연간 사업보고서를 기준으로 1년전과 비교.(분기별 아님)" },
  { no: 24, max: 1, text: "기업의 매출과 수주가 계절성 또는 싸이클(시클리컬) 특성을 보이는가? 어떠한 계절성 또는 싸이클을 보이는가? 왜 그런것인가? 이러한 계절성 및 싸이클 특성을 고려하여 어떤 투자 전략을 쓸것인가?" },
  { no: 25, max: 10, text: "영업이익이 증가하고 있는가? 매출이 증가해서 영업이익이 증가하고 있는가? " },
  { no: 26, max: 5, text: "영업이익외 금융수익, 기타수익등의 이익 요소도 증가하고 있나?" },
  { no: 27, max: 10, text: "해당기업의 향후 5년동안의 매출 및 영업이익의 연평균 성장률이 각각 15%이상 되는가?" },
  { no: 28, max: 5, text: "주요비용이 감소하는 추이인가?" },
  { no: 29, max: 2, text: "고객 한명이 평생 가져다주는 이익인 LTV가 그 고객을 데려오는데 드는 비용인 CAC의 3배 이상 되는가?" },
  { no: 30, max: 10, text: "최근 연간·분기 실측 재무제표 기반 듀퐁ROE 분석상 순이익률과 자산회전율(수치 직접 기재)이 우수한 수준인가? (ROE 10% 미만 시 4점 이하 채점)" },
  { no: 31, max: 2, text: "재고자산이 과도하게 많이 있는것은 아닌가? 재고자산회전율이 4~6이하인가?" },
  { no: 32, max: 2, text: "매출이 늘고 있는것도 아닌데 재고자산회전율이 낮아지고 있나?" },
  { no: 33, max: 2, text: "재고자산 많아도 재공품이 많은지 반제품이 많은지?(재공품은 바로 판매 안됨) 조선/방산/반도체/디스플레이/바이오/제약등의 수주산업이라 재공품이 많은지?" },
  { no: 34, max: 5, text: "최신 공시 기준 순차입금비율[순차입금(총차입금-현금성자산) / 자기자본]을 정량 계산하여 20% 이하 수준을 충족하고 있는가?" },
  { no: 35, max: 1, text: "이연법인세부채가 많은지 이연법인세자산이 많은지?(이법자가 많으면 내년에 세금 덜낸다)" },
  { no: 36, max: 10, text: "이 기업의 현금성자산, 이익잉여금, 재무 및 지분상태을 고려하였을때 자사주(EB), CB, BW, 차입, 증자등의 자금 조달을 할 필요가 없는가?" },
  { no: 37, max: 5, text: "CAPEX 규모를 고려하여도 유동비율과 당좌비율이 양호하거나 높은가?" },
  { no: 38, max: 8, text: "현재의 시가총액 만큼의 사업규모를 가졌는가? \n(1000억->5000억->1조->10조->50조->100조 각 단계의 규모가 있다. 그 규모만큼 이 기업이 성장 할 수 있는 가능성을 가졌는지)" },
  { no: 39, max: 10, text: "연결·별도 실적(컨센서스 포함) 대비 시가총액의 밸류에이션이 적정하며, 최근 1~3개월간 컨센서스(영업이익·EPS) 상향 및 어닝 서프라이즈 또는 목표주가 상향 추세가 유지되고 있는가?" },
  { no: 40, max: 8, text: "해당기업의 현재 시가총액을 고려했을때, 이기업의 종속기업/관계기업까지 고려했을때 가치가 저평가인가?" },
  { no: 41, max: 10, text: "글로벌 Peer 기업들과 비교하였을때 현재 해당기업의 시가총액이 저평가인가? Peer들의 PER, PSR도 비교했을때 현재 이 기업이 적정한 value인가?" },
  { no: 42, max: 10, text: "이 기업의 산업TAM, SAM, 사업확장성, 향후 매출, 이익등을 감안했을때 장기적으로 현재 시가총액의 5배까지 기업가치가 커질 수 있나?" },
  { no: 43, max: 5, text: "지분 구조가 주가 부양에 유리한 지분 구성으로 되어 있나? (오너가 가족 구성원이 지분을 조금씩 골고루 갖고 있으면 주가 부양 가능성 있음)\n(증여 or 상속문제로 주가 부양 가능성이 낮은건 아닌가? 증여나 상속이 임박해 있으면 세금 문제로 증여/상속 마무리 될때가지 주가 상승 가능성 낮다)" },
  { no: 44, max: 20, text: "이 기업의 valuation인 DCF와 RIM(Residual Income Model) 값은 각각 얼마인가? 제일 먼저 컨센서스 잠정실적 있으면 있는대로 모두 먼저 필수 적용.(ex. 향후 3년치). 없으면 자체 데이터." }
];

function formatCriteriaPrompt(criteria) {
  return criteria.map(c => `${c.no}번 (배점 ${c.max}점 만점): ${c.text}`).join('\n');
}

function extractMainJson(rawText) {
  if (!rawText) return null;

  try {
    return JSON.parse(rawText.trim());
  } catch (e) {}

  const codeBlockMatch = rawText.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (codeBlockMatch) {
    try {
      return JSON.parse(codeBlockMatch[1].trim());
    } catch (e) {}
  }

  let startIndex = rawText.indexOf('{');
  while (startIndex !== -1) {
    let depth = 0;
    let inString = false;
    let escape = false;

    for (let i = startIndex; i < rawText.length; i++) {
      const char = rawText[i];
      if (escape) {
        escape = false;
        continue;
      }
      if (char === '\\') {
        escape = true;
        continue;
      }
      if (char === '"') {
        inString = !inString;
        continue;
      }
      if (!inString) {
        if (char === '{') depth++;
        else if (char === '}') {
          depth--;
          if (depth === 0) {
            const candidate = rawText.substring(startIndex, i + 1);
            try {
              const parsed = JSON.parse(candidate);
              if (parsed && (parsed.isPublicCompany === false || parsed.scores || parsed.companyName)) {
                return parsed;
              }
            } catch (err) {}
            break;
          }
        }
      }
    }
    startIndex = rawText.indexOf('{', startIndex + 1);
  }

  return null;
}

// 백엔드 단기 메모리 캐시 및 진행 중인 작업 맵 (백그라운드 통신 순단 시 즉시 복구용)
const memoryCache = new Map();
const inFlightJobs = new Map();

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const masterPassword = (process.env.ADMIN_PASSWORD || "1020chl!!").trim();
  const memberPassword = (process.env.MEMBER_PASSWORD || "1020chl").trim();

  // 비밀번호 즉시 검증 엔드포인트
  if (req.body && req.body.action === 'verify') {
    const pwd = (req.body.adminPassword || req.body.password || "").trim();
    const isAdmin = (pwd !== "" && pwd === masterPassword);
    const isMember = (pwd !== "" && pwd === memberPassword);
    const role = isAdmin ? 'admin' : (isMember ? 'member' : 'normal');
    return res.status(200).json({ role, isAdmin, isMember });
  }

  const { company, adminPassword, lang = 'ko' } = req.body || {};
  if (!company) return res.status(400).json({ error: '기업명을 입력해주세요.' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'GEMINI_API_KEY 환경 변수가 설정되지 않았습니다.' });

  const enteredPwd = (adminPassword || "").trim();
  const isAdmin = (enteredPwd !== "" && enteredPwd === masterPassword);
  const isMember = (enteredPwd !== "" && enteredPwd === memberPassword);
  const role = isAdmin ? 'admin' : (isMember ? 'member' : 'normal');

  // 한국 표준시(KST, Asia/Seoul) 기준 YYYY-MM-DD 생성
  const todayStr = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' }).format(new Date());

  // 캐시 키: 기업명 + 권한 + 언어 + 오늘날짜
  const cacheKey = `${company.toLowerCase().trim()}_${role}_${lang}_${todayStr}`;

  // 1) 이미 최근에 완료된 분석 결과가 있으면 0.1초 만에 즉시 반환
  const cached = memoryCache.get(cacheKey);
  if (cached && (Date.now() - cached.timestamp < 30 * 60 * 1000)) { // 30분 유효
    return res.status(200).json(cached.data);
  }

  // 2) 클라이언트 통신 순단으로 재접속 시, 이미 서버에서 진행 중인 작업이 있다면 그 작업을 공유하여 대기
  if (inFlightJobs.has(cacheKey)) {
    try {
      const existingData = await inFlightJobs.get(cacheKey);
      return res.status(200).json(existingData);
    } catch (err) {
      // 진행 중이던 작업 실패 시 아래에서 재시도 진행
    }
  }

  // 3) 새로운 분석 작업 실행 및 inFlight 등록
  const jobPromise = (async () => {
    const isEnglish = (lang === 'en');
    const langDirective = isEnglish 
      ? "CRITICAL: You MUST write companyName, keyPoint, memberReport, and all reasons exclusively in English." 
      : "중요: 모든 회사명, keyPoint, memberReport, 평가 사유는 한국어로 작성하십시오.";

    const systemPrompt = `
오늘 날짜를 기준으로 최신 데이터로 분석해 주세요.
보수적이고 깐깐한 펀드매니저와 회계사의 관점으로 점수를 부여해 주십시오.
이 평가 결과에 따라 대규모 자금의 실제 투자가 결정되므로, 단기 주가 흐름이나 풍문, 테마성 뉴스 소음은 철저히 배제하고 기업의 본질적인 펀더멘탈(재무제표, 비즈니스 모델, 해자, 밸류에이션)에 집중하십시오.
오늘 날짜 시점의 미국 기준금리, 채권금리등의 매크로 요소와 국제 정치나 전쟁같은 지정학적 리스크, 해당 산업 컨센서스등의 환경들을 고려하여 각 항목을 채점해 주십시오.
구글 실시간 검색을 통한 딥 리서치(Deep Research)와 공시 자료, 글로벌 인더스트리 리서치 보고서를 전방위로 수집하여 단계적 상세한 분석과 근거에 기반한 추론에 입각해 정밀 채점을 진행하십시오.

${langDirective}

[0단계: 상장 기업 여부 팩트체크 (가장 중요)]
- 입력된 검색어("${company}")가 국내(KOSPI/KOSDAQ) 또는 글로벌 주요 증권거래소에 실제로 상장된 법인(상장기업)인지 Google 검색을 통해 엄격히 확인하십시오.
- 만약 비상장 기업, 개인 사업자, 존재하지 않는 회사, 또는 의미 없는 오타/단어일 경우, 분석을 즉시 중단하고 반드시 아래 JSON 규격으로만 응답하십시오:
{
  "isPublicCompany": false,
  "errorMsg": "입력하신 검색어는 상장된 기업이 아니거나 존재하지 않는 기업입니다. 정확한 상장 기업명이나 종목코드를 입력해주세요."
}

[1단계: 상장일 팩트체크 및 프레임워크 선택]
- 기업의 정확한 상장일(IPO date)을 검색하여 오늘(${todayStr}) 기준 상장 5년 초과 여부를 판별하십시오.
  * 5년 초과: '기존기업' 프레임워크 적용
  * 5년 이하: '신생기업' 프레임워크 적용

[2단계: 채점 점수 산정 룰 (절대 엄수, 점수 편차 방지)]
반드시 아래 문항 번호, 배점(max), 주제에 1:1로 일치시켜 채점하십시오.
토큰 초과를 방지하기 위해 각 문항의 'reason'은 핵심만 담아 한두 문장으로 간결하게 작성하십시오.
- 탁월 (글로벌 1위, 명확한 정량 수치 입증): 배점의 90% ~ 100%
- 우수 (업계 상위권, 뚜렷한 경쟁 우위 및 성장성): 배점의 70% ~ 85%
- 보통 (평이한 수준, 경쟁사 대비 차별성 부족): 배점의 45% ~ 60%
- 미흡/취약 (근거 부족, 뚜렷한 리스크 또는 적자/역성장): 배점의 10% ~ 30%
- 항목 '17번'의 큰거 한방의 강도가 향후 예상되는 매출액이 기존 매출액의 몇배정도 될 정도로 크게 증가할 수 있는지 판단
- 항목 '7번'은 미국의 '르네상스 테크놀로지'의 퀀트 모델을 벤치마킹하여 뉴스(최신뉴스 포함), 차트 데이터를 정교하게 추출하여 6개월~1년내 투자 성과가 나올 지 판단

--- [기존기업용 44개 문항 및 만점 배점] ---
${formatCriteriaPrompt(EXISTING_CRITERIA)}

--- [신생기업용 44개 문항 및 만점 배점] ---
${formatCriteriaPrompt(NEWBORN_CRITERIA)}

[3단계: 전수 검사 및 팩트체크 원칙]
- 각 항목의 점수는 지정된 배점(max)을 절대 초과할 수 없으며 정수여야 합니다.
- 응답을 출력하기 전, 기업 정보의 정확성과 44개 항목 점수 부여의 논리적 정합성을 내부적으로 전수 재검증하십시오.

[4단계: 5대 핵심 영역 리포트 및 종합 투자 의견(memberReport) 및 keyPoint 작성 (매우 중요)]
- keyPoint: 3줄 이내 요약
- memberReport: 유료 전용 리포트를 아래 구성 및 규칙에 맞추어 반드시 충실하게 작성하십시오.
  * 구성 요소:
    1. megaTrend: 메가트렌드 분석 (항목 1번부터 9번까지의 내용을 통합 요약)
    2. moat: 기업 경쟁력 분석 (항목 10번부터 20번까지의 내용을 통합 요약)
    3. financial: 재무 및 수익성 분석 (항목 21번부터 37번까지의 내용을 통합 요약)
    4. valuation: 밸류에이션 분석 (항목 38번부터 44번까지의 내용을 통합 요약)
    5. risk: 리스크 분석 (항목 1번부터 44번까지 분석 내용 중 핵심 리스크 요인을 반드시 1,000자 미만으로 핵심만 날카롭게 서술)
    6. investmentOpinion: 종합 투자 의견 (항목 7번과 17번을 재요약하고, 투자 적격 조건 충족 여부에 따라 실제 투자 결정을 어떻게 바라보아야 할지 매우 '조심스럽게' 최종 제안)
  * 분량 기준:
    - 한국어: 1~4번 및 종합의견은 각 1,000자 내외, 5번 리스크 분석은 1,000자 미만으로 정밀하게 서술하십시오.
    - 영어: 1~4번 및 종합의견은 각 2,000자 내외, 5번 리스크 분석은 1,500자 미만으로 서술하십시오.
  * 작성 규칙 (절대 엄수):
    1) 어투: 모든 문장은 '~이다' 어투를 엄격하게 유지하십시오.
    2) 금지 표현: '완벽', '절대' 같은 극단적인 표현은 배제하십시오. 주가 상승, 주가 하락, 매수, 매도와 같은 직접적인 투자의견/주가 표현은 배제하십시오.
    3) 번호 표기 금지: 글 안에 '항목 00번', '1번', '7번' 같은 문항 번호나 인덱스 문구를 일절 적지 마십시오.
    4) 글 배치 및 흐름: 모바일에서 술술 읽히는 자연스러운 스토리텔링 흐름을 만드십시오.
    5) 모바일 줄바꿈: 문장 단위로 자연스럽게 줄바꿈(\\n)을 해 주십시오.
    6) 단락 여백: 문단 간격이 너무 벌어지지 않도록, 한 단락이 끝나면 빈 줄은 1줄만(\\n\\n) 넣어 지나치게 넓은 여백을 배제하십시오.

[5단계: 출력 형식]
어떠한 서론이나 인사말, 마크다운 없이 순수한 단일 JSON 텍스트만 출력하십시오.

반환 JSON 규격 (상장 기업인 경우):
{
  "isPublicCompany": true,
  "companyName": "정확한 기업명",
  "companyCode": "종목코드(티커)",
  "ipoDate": "YYYY-MM-DD",
  "framework": "기존기업 또는 신생기업",
  "keyPoint": "1. 핵심 성장 동력 및 시장 해자 요약\\n2. 주요 재무적 건전성 및 리스크 요인\\n3. 현재 밸류에이션 관점의 투자 결론",
  "memberReport": {
    "megaTrend": "메가트렌드 분석 내용...",
    "moat": "기업 경쟁력 분석 내용...",
    "financial": "재무 및 수익성 분석 내용...",
    "valuation": "밸류에이션 분석 내용...",
    "risk": "핵심 리스크 분석 내용 (1000자 미만)...",
    "investmentOpinion": "종합 투자 의견 및 조심스러운 제안..."
  },
  "scores": [
    {"no": 1, "score": 15, "reason": "글로벌 시장점유율 및 정량 수치에 근거한 구체적 평가 사유"},
    ... 44번까지 빠짐없이
  ]
}
`;

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`;

    const payload = {
      contents: [{ parts: [{ text: `Target Company: ${company}` }] }],
      tools: [{ "google_search": {} }],
      systemInstruction: { parts: [{ text: systemPrompt }] },
      generationConfig: {
        temperature: 0.1,
        seed: 42
      }
    };

    const apiRes = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!apiRes.ok) {
      const errText = await apiRes.text();
      throw new Error(`API 호출 실패 (${apiRes.status}): ${errText}`);
    }

    const data = await apiRes.json();
    if (!data.candidates || data.candidates.length === 0) {
      throw new Error(`AI 응답 생성 차단됨`);
    }

    const parts = data.candidates[0].content?.parts;
    const rawText = (parts || []).map(p => p.text || '').join('').trim();

    const result = extractMainJson(rawText);
    if (!result) {
      throw new Error(`AI 응답에서 유효한 JSON을 해석하지 못했습니다.`);
    }

    if (result.isPublicCompany === false) {
      const err = new Error(result.errorMsg || "상장된 기업이 아니거나 존재하지 않는 기업입니다.");
      err.statusCode = 400;
      throw err;
    }

    const isNewborn = (result.framework === "신생기업" || result.framework === "Newborn");
    const activeCriteria = isNewborn ? NEWBORN_CRITERIA : EXISTING_CRITERIA;

    const scoreMap = {};
    (result.scores || []).forEach(s => {
      scoreMap[s.no] = {
        score: Number(s.score) || 0,
        reason: s.reason || "평가 완료"
      };
    });

    let cat1 = 0, cat2 = 0, cat3 = 0, cat4 = 0;
    const tableData = [];

    activeCriteria.forEach(c => {
      const item = scoreMap[c.no] || { score: 0, reason: "데이터 부족" };
      const awarded = Math.min(c.max, Math.max(0, item.score));

      if (c.no <= 9) cat1 += awarded;
      else if (c.no <= 20) cat2 += awarded;
      else if (c.no <= 37) cat3 += awarded;
      else cat4 += awarded;

      if (isAdmin) {
        tableData.push({
          no: c.no,
          name: c.text,
          max: c.max,
          score: awarded,
          reason: item.reason
        });
      }
    });

    const totalScore = cat1 + cat2 + cat3 + cat4;
    const score7 = (scoreMap[7] && scoreMap[7].score) || 0;
    const score17 = (scoreMap[17] && scoreMap[17].score) || 0;
    const sum7_17 = score7 + score17;

    let countGe65All = 0;
    activeCriteria.forEach(c => {
      const s = (scoreMap[c.no] && scoreMap[c.no].score) || 0;
      if (c.max > 0 && (s / c.max) >= 0.65) countGe65All++;
    });

    const coreNos = isNewborn 
      ? [2, 5, 11, 14, 17, 18, 22, 23] 
      : [2, 5, 11, 14, 17, 18, 30, 44];

    let coreScore = 0;
    let countGe65Core = 0;
    coreNos.forEach(no => {
      const c = activeCriteria.find(item => item.no === no);
      const s = (scoreMap[no] && scoreMap[no].score) || 0;
      coreScore += s;
      if (c && c.max > 0 && (s / c.max) >= 0.65) countGe65Core++;
    });

    const requiredCoreScore = isNewborn ? 97 : 105;
    let isEligible = false;
    let ruleMatched = "";

    if (totalScore < 255) {
      isEligible = false;
      ruleMatched = isEnglish ? "Ineligible: Total fundamental score is below minimum cutoff of 255 pts." : "총점이 최소 기준(255점) 미만으로 탈락되었습니다.";
    } else if (sum7_17 < 37) {
      isEligible = false;
      ruleMatched = isEnglish ? `Ineligible: Key timing/megatrend score (Items #7 + #17) is ${sum7_17}/50 pts, below the 37 pts threshold.` : `핵심 타이밍 및 한방 지표(7번+17번) 합계가 ${sum7_17}점으로 필수 기준(37점)에 미달했습니다.`;
    } else if (totalScore >= 315 && countGe65All >= 25) {
      isEligible = true;
      ruleMatched = isEnglish ? "Qualified: Met Condition 1 (315+ pts, 25+ criteria scored >= 65%, Items #7+#17 >= 37 pts)." : "조건 1 충족: 315점 이상 고득점 트랙 (65% 이상 문항 25개 이상 및 7+17번 충족)";
    } else if (totalScore >= 255 && totalScore <= 315 && coreScore >= requiredCoreScore && countGe65Core >= 5) {
      isEligible = true;
      const condNum = isNewborn ? "3" : "2";
      const condName = isNewborn ? "신생기업" : "기존기업";
      ruleMatched = isEnglish 
        ? `Qualified: Met Condition ${condNum} (${condName} core items score ${coreScore} >= ${requiredCoreScore}, 5+ core items >= 65%, Items #7+#17 >= 37 pts).` 
        : `조건 ${condNum} 충족: [${condName}] 핵심역량 트랙 (투자점수 255~315점, 핵심문항 점수 ${coreScore}점/${requiredCoreScore}점 이상, 65% 이상 5개 이상, 7+17번 충족)`;
    } else if (totalScore >= 315 && coreScore >= requiredCoreScore && countGe65Core >= 5) {
      isEligible = true;
      const condName = isNewborn ? "신생기업" : "기존기업";
      ruleMatched = isEnglish 
        ? `Qualified: Met core items criteria with 315+ total score (${coreScore} >= ${requiredCoreScore}, 5+ core items >= 65%).` 
        : `조건 충족: [${condName}] 핵심역량 기준을 충족한 315점 이상 기업 (핵심문항 점수 ${coreScore}점/${requiredCoreScore}점 이상 및 5개 이상 충족)`;
    } else {
      isEligible = false;
      if (totalScore >= 315) {
        ruleMatched = isEnglish ? `Ineligible: 315+ total score, but 65%+ items count (${countGe65All}/25) is insufficient.` : `총점은 315점 이상이나, 65% 이상 득점 문항 수(${countGe65All}개/25개)가 부족합니다.`;
      } else {
        ruleMatched = isEnglish ? `Ineligible: Core items score (${coreScore}/${requiredCoreScore} pts) or count (${countGe65Core}/5) is insufficient.` : `핵심문항 점수(${coreScore}점/${requiredCoreScore}점) 또는 65% 이상 핵심문항 수(${countGe65Core}개/5개)가 부족합니다.`;
      }
    }

    let qualification = isEnglish ? (isEligible ? "Investment Grade" : "Ineligible") : (isEligible ? "투자적격" : "투자 부적격");

    const checklist = {
      isNewborn,
      totalScore: { value: totalScore, pass: totalScore >= 255, threshold: ">= 255" },
      sum7_17: { value: sum7_17, pass: sum7_17 >= 37, threshold: ">= 37 (만점 50)" },
      countGe65All: { value: countGe65All, pass: countGe65All >= 25, threshold: ">= 25개" },
      coreScore: { value: coreScore, pass: coreScore >= requiredCoreScore, threshold: `>= ${requiredCoreScore}점` },
      countGe65Core: { value: countGe65Core, pass: countGe65Core >= 5, threshold: ">= 5개" },
      ruleMatched: ruleMatched
    };

    const finalResponseData = {
      companyName: result.companyName || company,
      companyCode: result.companyCode || "-",
      ipoDate: result.ipoDate || "-",
      analysisDate: todayStr,
      framework: result.framework || (isNewborn ? "신생기업" : "기존기업"),
      keyPoint: result.keyPoint || (isEnglish ? "Fundamental analysis completed." : "투자 핵심 포인트 분석이 완료되었습니다."),
      totalScore: totalScore,
      qualification: qualification,
      checklist: checklist,
      categoryScores: { cat1, cat2, cat3, cat4 },
      role: role,
      isAdmin: isAdmin,
      isMember: isMember,
      items: isAdmin ? tableData : null,
      memberReport: isMember ? (result.memberReport || null) : null
    };

    // 완료 후 메모리 캐시에 저장 (30분간 유효)
    memoryCache.set(cacheKey, { data: finalResponseData, timestamp: Date.now() });
    return finalResponseData;
  })();

  inFlightJobs.set(cacheKey, jobPromise);

  try {
    const finalData = await jobPromise;
    return res.status(200).json(finalData);
  } catch (error) {
    const status = error.statusCode || 500;
    return res.status(status).json({ error: error.message || '분석 중 내부 오류가 발생했습니다.' });
  } finally {
    inFlightJobs.delete(cacheKey);
  }
}
