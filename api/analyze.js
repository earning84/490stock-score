export const maxDuration = 60;

// [기존기업] 44개 항목 (490점 만점) - 한/영 완벽 대응
const EXISTING_CRITERIA = [
  { 
    no: 1, max: 20, 
    textKo: "이 기업은 기인문기정금(기술, 인구, 문화, 기후, 정치, 금융) 변화 중 구체적으로 어떠한 변화에 속해있고 그 변화가 메가 트렌드가 될 것인가?(메가트렌드 조건 1000억달러 시장, CAGR 8%, 20년지속, 특허 건수 및 인용률, 제조업의 15%생산, 고용의 10%, 부가가치 20%등)\n아래 부가설명\n1) 해당 산업의 글로벌 시장규모가 1000억달러 이상 될 것인지\n2) 리서치기관의 리포트등에서 연평균 성장률이 8%이상 지속하는지\n3) 해당 산업의 성장이 20년 이상 가능한지\n4) 한해 산업별 특허 건수 또는 인용률 상위 순위에 어떤 산업이 랭크되어 있는지\n5) 국내 또는 글로벌로 해당 산업의 제조업 생산량이 전체 산업 생산량의 15%이상인지\n6) 국내 또는 글로벌 고용창출의 10%이상 차지하는지\n7) 해당산업이 전체 산업 부가가치의 20%이상인지.",
    textEn: "Which macro-trend among Tech, Demographics, Culture, Climate, Politics, or Finance does this company belong to, and will it become an enduring mega-trend? (Criteria: $100B+ market, CAGR >= 8%, 20+ yrs longevity, patent filings/citations, >= 15% manufacturing share, >= 10% employment, >= 20% value-add)."
  },
  { 
    no: 2, max: 20, 
    textKo: "이 기업의 해당 산업이 글로벌로 필요한 산업인가? 산업 규모가 TAM(최대도달마켓사이즈) or SAM(가능한유효시장)이 1조달러 이상으로 성장할 것인가?(마크마하니)(산업을 확대하지 말것)",
    textEn: "Is this industry globally indispensable? Will the industry TAM or SAM expand beyond $1 Trillion without artificially overstretching industry boundaries? (Mark Mahaney)"
  },
  { 
    no: 3, max: 8, 
    textKo: "그 기업이 원래 산업외에 다른 TAM이 큰 산업(3000억달러 이상)으로 진출하여 확장 가능한가?",
    textEn: "Can the company expand beyond its native industry into other large TAM sectors exceeding $300 Billion?"
  },
  { 
    no: 4, max: 8, 
    textKo: "그 사업이 지속 가능한 산업군이냐?",
    textEn: "Does the core business operate in a structurally sustainable and resilient industry?"
  },
  { 
    no: 5, max: 20, 
    textKo: "해당 산업이 발전하는데 필수적인 핵심 키포인트는 무엇인가? 예로 반도체 산업은 '에너지밴드갭', AI산업은 'Cuda같은 SW기술'등이 산업의 성장 핵심 키포인트잖아. 어떠한 특성을 기준으로 발전하는가? 해당 기업은 그 핵심 키포인트를 갖췄나?",
    textEn: "What is the indispensable key bottleneck/driver for this industry's advancement (e.g., energy bandgap in semi, CUDA in AI)? Does the company possess this core key factor?"
  },
  { 
    no: 6, max: 10, 
    textKo: "산업 내 투자 수요가 유입되는 가운데, 최근 1~3개월간 스마트 머니(외인·연기금·사모·투신)의 유의미한 순매집(유통시총 1% 이상)이 확인되고 대차·공매도 급증 등 하방 리스크가 배제되어 있는가?",
    textEn: "With sector capital inflows active, has significant smart money (foreign & institutional) net accumulated (>= 1% of float) over the past 1-3 months with short-selling/lending risks suppressed?"
  },
  { 
    no: 7, max: 20, 
    textKo: "기업의 사업추진상황·산업·경기사이클상 6개월~1년 내 가시적 성과·투자 타이밍이 기대되는 투자 적기이며, 차트 일봉상 이동평균선 240일선 또는 120일선 위에 위치해 있는가?(이동평균선 역배열 하락 추세 지속 시 10점 이하로 엄격 감점)",
    textEn: "Is this the optimal investment timing with visible milestone catalysts within 6-12 months, and is the stock trading above its 120-day or 240-day moving average? (Deduct strictly below 10 pts if trapped in downtrend)."
  },
  { 
    no: 8, max: 10, 
    textKo: "그 산업의 역사는 어떠했나? 과거 역사와 비교했을때 2년내 돈을 벌 산업의 타이밍인가?",
    textEn: "What does industry history indicate? Compared to historical cycles, is now the optimal timing to generate substantial earnings within 2 years?"
  },
  { 
    no: 9, max: 10, 
    textKo: "해당 산업의 비즈니스 구조, 매출 크기, 매출인식 방식등을 고려했을때 그 산업이 본격 성장하고 있거나 곧 성장할 것인가?",
    textEn: "Considering the business model, revenue scale, and revenue recognition mechanisms, is the industry entering or currently undergoing explosive expansion?"
  },
  { 
    no: 10, max: 20, 
    textKo: "글로벌 경쟁력(G). 해당 산업 관련 종사자 누구나 알만한 브랜드 파워나 제품 보유하면 더 좋음. 메가히트, 블록버스터, 브랜드 그 자체가 대표인 그런 제품이나 서비스 수, LTV(고객생애가치)/CAC(고객획득비용)비율등도 고려.",
    textEn: "Global Competitiveness (G): Universal brand power within the industry, blockbuster/flagship products, market-defining franchise value, and superior LTV/CAC ratio."
  },
  { 
    no: 11, max: 30, 
    textKo: "시장지배력(M). 기술적 해자로 유일 또는 긴 리드타임 격차, 독과점적인 가격결정권, 락인파워(가격경쟁력, 전환비용), 병목현상 해결, 점유율과 지속기간, 장기계약 우위 유무, 표준에 대한 결정권등도 고려",
    textEn: "Market Dominance (M): Technological moats establishing long lead-time gaps, monopolistic pricing power, high lock-in/switching costs, bottleneck solutions, and industry standard-setting power."
  },
  { 
    no: 12, max: 20, 
    textKo: "신기술력(T). 산업이 발전하면서 좋은 제품을 한,두개가 아닌 지속적으로 꾸준히 좋은 제품을 만들 수 있는 핵심 기술력. 산업리서치 리포트의 TAM 1000억 달러이상의 시장 진출유무, 새로운 산업이나 산업내 다음 단계 진화를 위한 매출액 대비 R&D 경상연구개발비, 특허등록건수 or 특허상용화수등, M&A가능한 자금보유유무등도 고려",
    textEn: "New Technological Edge (T): Continuous innovation capability beyond 1-2 hit products, expansion into $100B+ TAM markets, high R&D-to-revenue intensity, commercialized patents, and M&A capital firepower."
  },
  { 
    no: 13, max: 20, 
    textKo: "제품화 능력(C) - capex투자 금액, 생산capa 얼마나 보유, 연구개발부터 상용화까지의 기간 및 대량생산 가능성, 매출총이익률등도 고려",
    textEn: "Commercialization Capability (C): Capex deployment scale, manufacturing capacity, timeline from R&D to mass production, and robust gross profit margin."
  },
  { 
    no: 14, max: 20, 
    textKo: "경영진 가능성(M) 파괴적 혁신의 아이디어, 기술 리더십, 실행 및 달성능력, 장기적인 목표 제시, 고성장 전략, 비젼, 똘기등 (like 일론머스크)",
    textEn: "Management Execution (M): Disruptive innovation vision, technical leadership, relentless execution track record, ambitious long-term goals, and obsessive founder mentality."
  },
  { 
    no: 15, max: 10, 
    textKo: "독점적 가능성이 있는가? Market Share를 선점하든, 뺏어올 가능성이 있나?",
    textEn: "Monopolistic Potential: High probability of preemptively dominating or aggressively capturing market share from competitors."
  },
  { 
    no: 16, max: 20, 
    textKo: "이 기업은 기술, 사업전략, 다른 기업으로 전환비용, 잉여현금흐름, 높은 매출총이익률, 지속적인 반복매출등의 구조적 해자가 있는가?",
    textEn: "Structural Moats: Proprietary technology, high switching costs, robust free cash flow, high gross margins, and predictable recurring revenue streams."
  },
  { 
    no: 17, max: 30, 
    textKo: "뭔가 미래를 위해 메가트렌드에 속하면서 돈을 많이 벌 수 있는 큰거 한방을 준비하고 있는것이 있나? 매출이 몇배 증가 될 정도로 준비하고 있는 한방이 있는가?",
    textEn: "Major Catalyst / Game Changer: Is the company preparing a transformative breakthrough aligned with megatrends capable of multiplying revenue several times over?"
  },
  { 
    no: 18, max: 10, 
    textKo: "이 기업이 해당 산업의 Capex단계부터 밸류체인내에서 병목현상을 해결할 수 있을 정도의 핵심 위치에 있는가?",
    textEn: "Is the company strategically positioned at a critical choke point within the value chain capable of resolving bottlenecks from the Capex phase?"
  },
  { 
    no: 19, max: 5, 
    textKo: "그 기업의 고객기업이 글로벌 큰 기업이 많은가? 그리고 고객수가 풍부한가?",
    textEn: "Does the company maintain a large roster of global Tier-1 corporate clients and high customer diversification?"
  },
  { 
    no: 20, max: 8, 
    textKo: "해당 산업의 초반기에 강했던 기업인가? 본격 성장기가 되고 나서도 강자의 위치를 지속 유지할 수 있나?",
    textEn: "Was it a pioneer in the early industry phase, and can it maintain a dominant position throughout rapid expansion and maturity?"
  },
  { 
    no: 21, max: 10, 
    textKo: "매출액의 5~10%이상 연구개발비를 꾸준히 쓰고 있는가?",
    textEn: "Does the company consistently invest 5% to 10% or more of annual revenue into R&D?"
  },
  { 
    no: 22, max: 10, 
    textKo: "과거 돈 잘벌때와 비교해 현재의 매출과 이익이 각각 60%이상 되는가? 과거 매출을 통해 다시 해당 산업의 붐이 왔을때 다시 제대로 벌 수 있을것인가?",
    textEn: "(Established) Are current revenue and operating profit at least 60% of past peak levels, and will earnings rebound strongly in the next cyclical boom?"
  },
  { 
    no: 23, max: 8, 
    textKo: "3년이상 지속적으로 ROE 15%이상이거나 ROIC 10%이상 유지하고 있는가?",
    textEn: "(Established) Has the company consistently maintained ROE >= 15% or ROIC >= 10% for 3 or more consecutive years?"
  },
  { 
    no: 24, max: 1, 
    textKo: "기업의 매출과 수주가 계절성 또는 싸이클(시클리컬) 특성을 보이는가? 어떠한 계절성 또는 싸이클을 보이는가? 왜 그런것인가? 이러한 계절성 및 싸이클 특성을 고려하여 어떤 투자 전략을 쓸것인가?",
    textEn: "Does the business display distinct cyclicality or seasonality in revenue/orders, what drives it, and how should investment timing be strategized accordingly?"
  },
  { 
    no: 25, max: 10, 
    textKo: "영업이익이 증가하고 있는가? 매출이 증가해서 영업이익이 증가하고 있는가?",
    textEn: "Is operating income expanding sustainably, and is it backed by fundamental top-line revenue growth?"
  },
  { 
    no: 26, max: 5, 
    textKo: "영업이익외 금융수익, 기타수익등의 이익 요소도 증가하고 있나?",
    textEn: "Are non-operating profit components (financial income, other gains) also growing soundly alongside core operating profit?"
  },
  { 
    no: 27, max: 10, 
    textKo: "해당기업의 향후 5년동안의 매출 및 영업이익의 연평균 성장률이 각각 15%이상 되는가?",
    textEn: "Can the company deliver a compound annual growth rate (CAGR) of at least 15% in both revenue and operating income over the next 5 years?"
  },
  { 
    no: 28, max: 5, 
    textKo: "주요비용이 감소하는 추이인가?",
    textEn: "Are major operational costs, COGS, and SG&A expenses demonstrating a clear declining or optimizing trend?"
  },
  { 
    no: 29, max: 2, 
    textKo: "감가상각비가 유지되고 있거나 감소하고 있는가?",
    textEn: "(Established) Are depreciation and amortization expenses stabilized or declining relative to capital investments?"
  },
  { 
    no: 30, max: 12, 
    textKo: "최근 연간·분기 실측 재무제표 기반 듀퐁ROE 분석상 순이익률과 자산회전율(수치 직접 기재)이 우수한 수준인가? (ROE 10% 미만 시 4점 이하 채점)",
    textEn: "Is DuPont ROE analysis (Net Margin, Asset Turnover) at an exceptional level based on audited financial statements? (Score <= 4 if ROE < 10%)."
  },
  { 
    no: 31, max: 2, 
    textKo: "재고자산이 과도하게 많이 있는것은 아닌가? 재고자산회전율이 4~6이하인가?",
    textEn: "Is inventory volume healthy without excessive accumulation, and is inventory turnover within an optimal range?"
  },
  { 
    no: 32, max: 2, 
    textKo: "매출이 늘고 있는것도 아닌데 재고자산회전율이 낮아지고 있나?",
    textEn: "Is inventory turnover deteriorating without corresponding top-line revenue expansion?"
  },
  { 
    no: 33, max: 2, 
    textKo: "재고자산 많아도 재공품이 많은지 반제품이 많은지?(재공품은 바로 판매 안됨) 조선/방산/반도체/디스플레이/바이오/제약등의 수주산업이라 재공품이 많은지?",
    textEn: "What is the proportion of work-in-process (WIP) vs semi-finished goods in inventory, and does high WIP align with long-cycle order backlogs?"
  },
  { 
    no: 34, max: 5, 
    textKo: "최신 공시 기준 순차입금비율[순차입금(총차입금-현금성자산) / 자기자본]을 정량 계산하여 20% 이하 수준을 충족하고 있는가?",
    textEn: "Does the quantitative Net Debt-to-Equity ratio [Net Debt (Total Debt - Cash equivalents) / Equity] satisfy <= 20% based on recent filings?"
  },
  { 
    no: 35, max: 1, 
    textKo: "이연법인세부채가 많은지 이연법인세자산이 많은지?(이법자가 많으면 내년에 세금 덜낸다)",
    textEn: "Does the company maintain a higher balance of deferred tax assets relative to deferred tax liabilities for future cash tax benefits?"
  },
  { 
    no: 36, max: 10, 
    textKo: "이 기업의 현금성자산, 이익잉여금, 재무 및 지분상태을 고려하였을때 자사주(EB), CB, BW, 차입, 증자등의 자금 조달을 할 필요가 없는가?",
    textEn: "Considering cash reserves and retained earnings, is the company free from dilution risks (CB, BW, rights offerings, debt financing)?"
  },
  { 
    no: 37, max: 5, 
    textKo: "CAPEX 규모를 고려하여도 유동비율과 당좌비율이 양호하거나 높은가?",
    textEn: "Are current and quick ratios maintained at healthy or superior levels even after factoring in ongoing Capex commitments?"
  },
  { 
    no: 38, max: 8, 
    textKo: "현재의 시가총액 만큼의 사업규모를 가졌는가? (1000억->5000억->1조->10조->50조->100조 각 단계의 규모가 있다. 그 규모만큼 이 기업이 성장 할 수 있는 가능성을 가졌는지)",
    textEn: "Does the company possess the business scale commensurate with its current market cap, and can it advance across market cap tiers ($100M -> $1B -> $10B -> $100B)?"
  },
  { 
    no: 39, max: 10, 
    textKo: "연결·별도 실적(컨센서스 포함) 대비 시가총액의 밸류에이션이 적정하며, 최근 1~3개월간 컨센서스(영업이익·EPS) 상향 및 어닝 서프라이즈 또는 목표주가 상향 추세가 유지되고 있는가?",
    textEn: "Is market cap valuation reasonable relative to consolidated earnings, with sustained consensus upward revisions (OP, EPS) or target price upgrades over 1-3 months?"
  },
  { 
    no: 40, max: 8, 
    textKo: "해당기업의 현재 시가총액을 고려했을때, 이기업의 종속기업/관계기업까지 고려했을때 가치가 저평가인가?",
    textEn: "Is the consolidated market capitalization undervalued when accounting for the fair market value of subsidiaries and affiliates?"
  },
  { 
    no: 41, max: 10, 
    textKo: "글로벌 Peer 기업들과 비교하였을때 현재 해당기업의 시가총액이 저평가인가? Peer들의 PER, PSR도 비교했을때 현재 이 기업이 적정한 value인가?",
    textEn: "Is the company undervalued relative to global peers on P/E and P/S multiples, reflecting an attractive risk-reward valuation?"
  },
  { 
    no: 42, max: 10, 
    textKo: "이 기업의 산업TAM, SAM, 사업확장성, 향후 매출, 이익등을 감안했을때 장기적으로 현재 시가총액의 5배까지 기업가치가 커질 수 있나?",
    textEn: "Given industry TAM, business scalability, and projected earnings, can enterprise value expand 5x from its current market cap over the long term?"
  },
  { 
    no: 43, max: 5, 
    textKo: "지분 구조가 주가 부양에 유리한 지분 구성으로 되어 있나? (오너가 가족 구성원이 지분을 조금씩 골고루 갖고 있으면 주가 부양 가능성 있음)\n(증여 or 상속문제로 주가 부양 가능성이 낮은건 아닌가? 증여나 상속이 임박해 있으면 세금 문제로 증여/상속 마무리 될때가지 주가 상승 가능성 낮다)",
    textEn: "Is the ownership structure aligned with shareholder value creation, and is it free from succession, gift, or inheritance tax overhang that depresses stock prices?"
  },
  { 
    no: 44, max: 20, 
    textKo: "이 기업의 valuation인 DCF와 RIM(Residual Income Model) 값은 각각 얼마인가? 제일 먼저 컨센서스 잠정실적 있으면 있는대로 모두 먼저 필수 적용.(ex. 향후 3년치). 없으면 자체 데이터.",
    textEn: "What are the intrinsic values derived from DCF and RIM (Residual Income Model), prioritizing forward consensus estimates?"
  }
];

// [신생기업] 44개 항목 (490점 만점)
const NEWBORN_CRITERIA = EXISTING_CRITERIA.map(c => {
  if (c.no === 22) {
    return {
      no: 22, max: 12,
      textKo: "최근 회계연도에서 매출 성장률과 영업이익률(또는 EBITDA률)의 합(Rule of 40)이 40% 이상인가? 최근 회계연도의 연간 사업보고서를 기준으로 1년전과 비교.(분기별 아님)",
      textEn: "(Newborn) Does the sum of annual revenue growth rate and operating profit margin (Rule of 40) reach 40% or higher based on the latest annual report?"
    };
  }
  if (c.no === 23) {
    return {
      no: 23, max: 8,
      textKo: "Price to Sales Growth(PSG)를 계산하여 1주 가격/(1주당 매출 x 매출 성장률)의 값이 1 미만인가? PSR/매출성장률. %는 수치 그대로 나누기. 최근 회계연도의 연간 사업보고서를 기준으로 1년전과 비교.(분기별 아님)",
      textEn: "(Newborn) Is the Price-to-Sales Growth (PSG) ratio less than 1.0 (PSR divided by revenue growth rate) based on the latest fiscal year report?"
    };
  }
  if (c.no === 29) {
    return {
      no: 29, max: 2,
      textKo: "고객 한명이 평생 가져다주는 이익인 LTV가 그 고객을 데려오는데 드는 비용인 CAC의 3배 이상 되는가?",
      textEn: "(Newborn) Is Customer Lifetime Value (LTV) at least 3 times greater than Customer Acquisition Cost (CAC)?"
    };
  }
  if (c.no === 30) {
    return { ...c, max: 10 };
  }
  return c;
});

function formatCriteriaPrompt(criteria, isEnglish) {
  return criteria.map(c => {
    const text = isEnglish ? c.textEn : c.textKo;
    const label = isEnglish ? `Item ${c.no} (Max: ${c.max} pts)` : `${c.no}번 (배점 ${c.max}점 만점)`;
    return `${label}: ${text}`;
  }).join('\n');
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

const memoryCache = new Map();
const inFlightJobs = new Map();

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const masterPassword = (process.env.ADMIN_PASSWORD || "1020chl!!").trim();
  const memberPassword = (process.env.MEMBER_PASSWORD || "1020chl").trim();

  if (req.body && req.body.action === 'verify') {
    const pwd = (req.body.adminPassword || req.body.password || "").trim();
    const isAdmin = (pwd !== "" && pwd === masterPassword);
    const isMember = (pwd !== "" && pwd === memberPassword);
    const role = isAdmin ? 'admin' : (isMember ? 'member' : 'normal');
    return res.status(200).json({ role, isAdmin, isMember });
  }

  const { company, adminPassword, lang = 'ko' } = req.body || {};
  const isEnglish = (lang === 'en');

  if (!company) {
    return res.status(400).json({ error: isEnglish ? 'Please enter a company name or ticker.' : '기업명을 입력해주세요.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: isEnglish ? 'GEMINI_API_KEY environment variable is missing.' : 'GEMINI_API_KEY 환경 변수가 설정되지 않았습니다.' });
  }

  const enteredPwd = (adminPassword || "").trim();
  const isAdmin = (enteredPwd !== "" && enteredPwd === masterPassword);
  const isMember = (enteredPwd !== "" && enteredPwd === memberPassword);
  const role = isAdmin ? 'admin' : (isMember ? 'member' : 'normal');

  const todayStr = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' }).format(new Date());
  const cacheKey = `${company.toLowerCase().trim()}_${role}_${lang}_${todayStr}`;

  const cached = memoryCache.get(cacheKey);
  if (cached && (Date.now() - cached.timestamp < 30 * 60 * 1000)) {
    return res.status(200).json(cached.data);
  }

  if (inFlightJobs.has(cacheKey)) {
    try {
      const existingData = await inFlightJobs.get(cacheKey);
      return res.status(200).json(existingData);
    } catch (err) {}
  }

  const jobPromise = (async () => {
    const langDirective = isEnglish 
      ? `CRITICAL LANGUAGE REQUIREMENT:
- All output values (companyName, keyPoint, memberReport, reasons in scores) MUST be written strictly in professional, institutional investment ENGLISH.
- Write with academic precision, objective tone, and Wall Street equity research standard.`
      : `중요 언어 요구사항:
- 모든 회사명, keyPoint, memberReport, 평가 사유는 한국어로 작성하십시오.
- 모든 문장은 '~이다' 어투를 엄격하게 유지하십시오.`;

    const systemPrompt = isEnglish ? `
You are a highly conservative, rigorous hedge fund portfolio manager and audit partner.
Evaluate the given target company using real-time search, filings, and industry reports as of today (${todayStr}).
Focus strictly on structural fundamentals (financial statements, moats, valuation, macro interest rates, and geopolitical risks). Disregard short-term hype, retail rumors, or transient sentiment.

${langDirective}

[Step 0: Public Company Fact-Check (CRITICAL)]
- Verify whether "${company}" is an actively traded public corporation on major stock exchanges (KOSPI/KOSDAQ, NYSE, NASDAQ, etc.).
- If unlisted, private, non-existent, or invalid, return strictly this JSON format:
{
  "isPublicCompany": false,
  "errorMsg": "The entered query is not an actively traded public company. Please provide an exact listed company name or ticker symbol."
}

[Step 1: IPO Date & Framework Selection]
- Check the official IPO date relative to today (${todayStr}):
  * Over 5 years since IPO: Use "Established" framework.
  * 5 years or less: Use "Newborn" framework.

[Step 2: 44-Criterion Scoring Guidelines]
Score each item from 1 to 44 matching exactly with the criteria below. Keep each 'reason' concise, punchy, and supported by concrete metrics (1-2 sentences).
- Exceptional (Global #1, overwhelming quantitative edge): 90% - 100% of max
- Strong (Top-tier, solid moats and growth): 70% - 85% of max
- Average (Mediocre, lack of differentiation): 45% - 60% of max
- Weak / Risk (Deficient evidence, losses, contract): 10% - 30% of max
- Item 17 ("Major Catalyst"): Evaluate whether expected upcoming growth drivers can multiply current revenue several times over.
- Item 7 ("Timing"): Benchmark quantitative factor models (e.g. Renaissance Tech) using news flow and moving averages (above 120/240-day MA) for visible milestones within 6-12 months.

--- [Established Company Framework (44 Items, 490 pts)] ---
${formatCriteriaPrompt(EXISTING_CRITERIA, true)}

--- [Newborn Company Framework (44 Items, 490 pts)] ---
${formatCriteriaPrompt(NEWBORN_CRITERIA, true)}

[Step 3: Verification Principles]
- Each item score cannot exceed its designated maximum and must be an integer.

[Step 4: Key Points & Premium 5-Domain Report (memberReport)]
- keyPoint: 3 bullet points summarizing core investment catalysts, risks, and valuation conclusion.
- memberReport (Institutional Deep-Dive):
  1. megaTrend: Macro & megatrend alignment (synthesizing items 1 to 9, ~250 words).
  2. moat: Competitive moats & technological edge (synthesizing items 10 to 20, ~250 words).
  3. financial: Financial health & profitability quality (synthesizing items 21 to 37, ~250 words).
  4. valuation: Valuation multiples, DCF, and target upside (synthesizing items 38 to 44, ~250 words).
  5. risk: Key operational/geopolitical risks (must be under 150 words).
  6. investmentOpinion: Comprehensive investment synthesis (re-evaluating items 7 & 17, offering a prudent final recommendation).
- Writing rules: Objective institutional tone. Avoid hyperbolic words like 'perfect' or 'guaranteed'. Do NOT include item numbers (e.g. "Item 7") in the narrative.

[Step 5: Output Format]
Return ONLY a single, valid JSON object without markdown fences or conversational preambles.
JSON Schema:
{
  "isPublicCompany": true,
  "companyName": "Exact Company Name",
  "companyCode": "Ticker",
  "ipoDate": "YYYY-MM-DD",
  "framework": "Established" or "Newborn",
  "keyPoint": "1. ...\\n2. ...\\n3. ...",
  "memberReport": {
    "megaTrend": "...",
    "moat": "...",
    "financial": "...",
    "valuation": "...",
    "risk": "...",
    "investmentOpinion": "..."
  },
  "scores": [
    {"no": 1, "score": 15, "reason": "..."},
    ... up to 44
  ]
}
` : `
오늘 날짜(${todayStr})를 기준으로 최신 데이터로 분석해 주세요.
보수적이고 깐깐한 펀드매니저와 회계사의 관점으로 점수를 부여해 주십시오.
이 평가 결과에 따라 대규모 자금의 실제 투자가 결정되므로, 단기 주가 흐름이나 풍문, 테마성 뉴스 소음은 철저히 배제하고 기업의 본질적인 펀더멘탈(재무제표, 비즈니스 모델, 해자, 밸류에이션)에 집중하십시오.
오늘 날짜 시점의 매크로 금리, 지정학적 리스크, 산업 컨센서스 환경을 고려하여 각 항목을 채점하십시오.

${langDirective}

[0단계: 상장 기업 여부 팩트체크 (가장 중요)]
- 입력된 검색어("${company}")가 국내 또는 글로벌 주요 증권거래소에 실제로 상장된 법인인지 확인하십시오.
- 비상장 기업이거나 존재하지 않을 경우 아래 JSON으로 즉시 반환하십시오:
{
  "isPublicCompany": false,
  "errorMsg": "입력하신 검색어는 상장된 기업이 아니거나 존재하지 않는 기업입니다. 정확한 상장 기업명이나 종목코드를 입력해주세요."
}

[1단계: 상장일 팩트체크 및 프레임워크 선택]
- 오늘(${todayStr}) 기준 상장 5년 초과 여부:
  * 5년 초과: '기존기업' 프레임워크
  * 5년 이하: '신생기업' 프레임워크

[2단계: 채점 점수 산정 룰]
- 탁월: 배점의 90% ~ 100%
- 우수: 배점의 70% ~ 85%
- 보통: 배점의 45% ~ 60%
- 미흡/취약: 배점의 10% ~ 30%
각 문항의 'reason'은 핵심만 담아 한두 문장으로 간결하게 작성하십시오.

--- [기존기업용 44개 문항 및 만점 배점] ---
${formatCriteriaPrompt(EXISTING_CRITERIA, false)}

--- [신생기업용 44개 문항 및 만점 배점] ---
${formatCriteriaPrompt(NEWBORN_CRITERIA, false)}

[4단계: 5대 핵심 영역 리포트 및 keyPoint 작성]
- keyPoint: 3줄 이내 요약
- memberReport:
  1. megaTrend: 메가트렌드 분석 (1~9번 요약, 약 1,000자)
  2. moat: 기업 경쟁력 분석 (10~20번 요약, 약 1,000자)
  3. financial: 재무 및 수익성 분석 (21~37번 요약, 약 1,000자)
  4. valuation: 밸류에이션 분석 (38~44번 요약, 약 1,000자)
  5. risk: 리스크 분석 (1,000자 미만)
  6. investmentOpinion: 종합 투자 의견 (7번과 17번 재요약 및 신중한 결론)

[5단계: 출력 형식]
어떠한 마크다운 코드블록이나 서론 없이 순수한 단일 JSON 텍스트만 출력하십시오.
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
      throw new Error(isEnglish ? `API Call Failed (${apiRes.status}): ${errText}` : `API 호출 실패 (${apiRes.status}): ${errText}`);
    }

    const data = await apiRes.json();
    if (!data.candidates || data.candidates.length === 0) {
      throw new Error(isEnglish ? 'AI response generation was blocked.' : 'AI 응답 생성 차단됨');
    }

    const parts = data.candidates[0].content?.parts;
    const rawText = (parts || []).map(p => p.text || '').join('').trim();

    const result = extractMainJson(rawText);
    if (!result) {
      throw new Error(isEnglish ? 'Failed to parse valid JSON from AI response.' : 'AI 응답에서 유효한 JSON을 해석하지 못했습니다.');
    }

    if (result.isPublicCompany === false) {
      const defaultErrMsg = isEnglish 
        ? "The entered company is not publicly listed or could not be verified."
        : "상장된 기업이 아니거나 존재하지 않는 기업입니다.";
      const err = new Error(result.errorMsg || defaultErrMsg);
      err.statusCode = 400;
      throw err;
    }

    const frameworkRaw = (result.framework || "").toLowerCase();
    const isNewborn = frameworkRaw.includes("신생") || frameworkRaw.includes("newborn");
    const activeCriteria = isNewborn ? NEWBORN_CRITERIA : EXISTING_CRITERIA;

    const scoreMap = {};
    (result.scores || []).forEach(s => {
      scoreMap[s.no] = {
        score: Number(s.score) || 0,
        reason: s.reason || (isEnglish ? "Evaluated" : "평가 완료")
      };
    });

    let cat1 = 0, cat2 = 0, cat3 = 0, cat4 = 0;
    const tableData = [];

    activeCriteria.forEach(c => {
      const item = scoreMap[c.no] || { score: 0, reason: isEnglish ? "Insufficient data" : "데이터 부족" };
      const awarded = Math.min(c.max, Math.max(0, item.score));

      if (c.no <= 9) cat1 += awarded;
      else if (c.no <= 20) cat2 += awarded;
      else if (c.no <= 37) cat3 += awarded;
      else cat4 += awarded;

      if (isAdmin) {
        tableData.push({
          no: c.no,
          name: isEnglish ? c.textEn : c.textKo,
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
      ruleMatched = isEnglish 
        ? "Ineligible: The company's overall fundamentals (market moat, profitability, and financial stability) do not meet minimum investment standards." 
        : "산업 내 시장 경쟁우위, 수익성 및 재무 안정성 등 기업 전반의 기초 체력(펀더멘탈)이 최소 투자 기준(255점)에 미달하여 부적격입니다.";
    } else if (sum7_17 < 37) {
      isEligible = false;
      if (score7 < 15 && score17 >= 22) {
        ruleMatched = isEnglish 
          ? "Ineligible: While transformative megatrend drivers exist, clear near-term catalysts and timing (visible milestones within 6–12 months) are lacking." 
          : "향후 폭발적 매출 성장을 견인할 메가트렌드 대형 성장동력은 양호하나, 6개월~1년 내 단기 가시적 성과 및 투자 타이밍이 부족하여 현시점 기준으로는 투자 시기로 부적합합니다.";
      } else if (score17 < 22 && score7 >= 15) {
        ruleMatched = isEnglish 
          ? "Ineligible: Near-term catalysts are present, but it lacks transformative megatrend drivers for exponential revenue growth." 
          : "단기 가시적 성과 및 투자 타이밍은 양호하나, 향후 폭발적 매출 성장을 견인할 메가트렌드 대형 성장동력이 불충분하여 현시점 기준으로는 투자 시기로 부적합합니다.";
      } else {
        ruleMatched = isEnglish 
          ? "Ineligible: Lacks both clear near-term catalysts and transformative megatrend drivers for exponential revenue growth." 
          : "단기 가시적 성과·투자 타이밍과 향후 폭발적 매출 성장을 견인할 메가트렌드 대형 성장동력이 모두 불충분하여 현시점 기준으로는 투자 시기로 부적합합니다.";
      }
    } else if (totalScore >= 315 && countGe65All >= 25) {
      isEligible = true;
      ruleMatched = isEnglish 
        ? "Qualified: Satisfies high-conviction criteria with proven megatrend leadership, solid moats, robust financials, and strong near-term execution catalysts." 
        : "메가트렌드 선점, 독점적 시장 지배력, 견고한 재무 구조 및 가시적 성장과 투자 타이밍을 두루 갖추어 투자 가치가 충분합니다.";
    } else if (totalScore >= 255 && totalScore <= 315 && coreScore >= requiredCoreScore && countGe65Core >= 5) {
      isEligible = true;
      ruleMatched = isEnglish 
        ? "Qualified: Satisfies core competency criteria with verified market addressability, technological moats, capable leadership, and validated catalyst timing." 
        : "유효 시장 규모와 핵심 기술 경쟁우위, 경영진 실행력 및 밸류체인 핵심 경쟁력을 확보하고 성장 모멘텀을 충족했습니다.";
    } else if (totalScore >= 315 && coreScore >= requiredCoreScore && countGe65Core >= 5) {
      isEligible = true;
      ruleMatched = isEnglish 
        ? "Qualified: Satisfies core fundamental pillars with high overall score, robust competitive moat, and strong timing catalysts." 
        : "우수한 펀더멘탈 점수와 함께 산업 내 핵심 기술 경쟁우위, 안정적인 재무 구조 및 투자 타이밍과 성장 요건을 모두 충족했습니다.";
    } else {
      isEligible = false;
      if (totalScore >= 315) {
        ruleMatched = isEnglish 
          ? "Ineligible: While high-level metrics are solid, decisive competitive advantages and pricing moats across broad business criteria lack sufficient evidence." 
          : "전반적인 재무 기초는 양호하나, 독점적 가격결정권과 시장 지배력 등 각 평가 영역 전반에서 탁월한 경쟁 우위가 충분히 입증되지 못했습니다.";
      } else {
        ruleMatched = isEnglish 
          ? "Ineligible: Addressable market upside, proprietary technological moats, execution leadership, and intrinsic valuation remain insufficient." 
          : "유효 시장 확장성, 독점적 경쟁우위 기술, 경영진 실행력 및 내재가치 평가 등 본질적인 핵심 경쟁 우위 요건이 기준에 미치지 못했습니다.";
      }
    }

    const qualification = isEnglish ? (isEligible ? "Investment Grade" : "Ineligible") : (isEligible ? "투자적격" : "투자 부적격");

    const checklist = {
      isNewborn,
      totalScore: { 
        value: totalScore, 
        pass: totalScore >= 255, 
        threshold: isEnglish ? ">= 255 pts" : ">= 255점" 
      },
      sum7_17: { 
        value: sum7_17, 
        pass: sum7_17 >= 37, 
        threshold: isEnglish ? ">= 37 pts (Max 50)" : ">= 37점 (만점 50)" 
      },
      countGe65All: { 
        value: countGe65All, 
        pass: countGe65All >= 25, 
        threshold: isEnglish ? ">= 25 items" : ">= 25개" 
      },
      coreScore: { 
        value: coreScore, 
        pass: coreScore >= requiredCoreScore, 
        threshold: isEnglish ? `>= ${requiredCoreScore} pts` : `>= ${requiredCoreScore}점` 
      },
      countGe65Core: { 
        value: countGe65Core, 
        pass: countGe65Core >= 5, 
        threshold: isEnglish ? ">= 5 items" : ">= 5개" 
      },
      ruleMatched: ruleMatched
    };

    const finalResponseData = {
      companyName: result.companyName || company,
      companyCode: result.companyCode || "-",
      ipoDate: result.ipoDate || "-",
      analysisDate: todayStr,
      framework: isEnglish ? (isNewborn ? "Newborn" : "Established") : (isNewborn ? "신생기업" : "기존기업"),
      keyPoint: result.keyPoint || (isEnglish ? "Fundamental analysis completed." : "투자 핵심 포인트 분석이 완료되었습니다."),
      totalScore: totalScore,
      qualification: qualification,
      qualificationReason: ruleMatched,
      checklist: checklist,
      categoryScores: { cat1, cat2, cat3, cat4 },
      role: role,
      isAdmin: isAdmin,
      isMember: isMember,
      items: isAdmin ? tableData : null,
      memberReport: isMember ? (result.memberReport || null) : null
    };

    memoryCache.set(cacheKey, { data: finalResponseData, timestamp: Date.now() });
    return finalResponseData;
  })();

  inFlightJobs.set(cacheKey, jobPromise);

  try {
    const finalData = await jobPromise;
    return res.status(200).json(finalData);
  } catch (error) {
    const status = error.statusCode || 500;
    return res.status(status).json({ error: error.message || (isEnglish ? 'Internal server error occurred.' : '분석 중 내부 오류가 발생했습니다.') });
  } finally {
    inFlightJobs.delete(cacheKey);
  }
}
