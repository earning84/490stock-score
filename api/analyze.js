export const maxDuration = 60;

// [기존기업] 44개 항목 (467점 만점)
const EXISTING_CRITERIA = [
  { no: 1, max: 20, text: "기인문기정금 메가트렌드 부합 여부 (1000억달러 시장, CAGR 8%, 20년 지속 등)" },
  { no: 2, max: 20, text: "해당 산업이 글로벌 필수 산업인가? TAM/SAM 1조달러 이상 성장 가능성" },
  { no: 3, max: 8, text: "원래 산업 외 거대 TAM(3000억달러 이상) 산업으로 확장 가능 여부" },
  { no: 4, max: 8, text: "사업의 영속적 지속 가능성" },
  { no: 5, max: 20, text: "산업 발전의 핵심 키포인트(기술/특성) 확보 여부" },
  { no: 6, max: 6, text: "산업 분위기 및 최근 기관/외인 수급 유입 강도" },
  { no: 7, max: 20, text: "현재 투자 적기 여부 (6개월~1년 내 가시적 성과 도출 가능성)" },
  { no: 8, max: 10, text: "산업 역사 대비 2년 내 수익 창출 타이밍 적합도" },
  { no: 9, max: 10, text: "비즈니스 모델 및 매출 구조상 본격 성장 국면 진입 여부" },
  { no: 10, max: 20, text: "글로벌 경쟁력(G): 브랜드 파워, 블록버스터 제품, LTV/CAC 우수성" },
  { no: 11, max: 30, text: "시장지배력(M): 독점적 가격결정권, 기술 격차 해자, 락인 효과, 높은 점유율" },
  { no: 12, max: 20, text: "신기술력(T): 꾸준한 R&D 투자 비율, 지속적인 신제품 상용화 및 특허 경쟁력" },
  { no: 13, max: 20, text: "제품화 능력(C): Capex 투자 규모, 대량생산 Capa, 상용화 속도, 높은 매출총이익률" },
  { no: 14, max: 20, text: "경영진 역량(M): 파괴적 혁신 의지, 기술 리더십, 고성장 전략 및 실행력" },
  { no: 15, max: 10, text: "시장점유율을 독점하거나 경쟁사 파이를 빼앗아올 가능성" },
  { no: 16, max: 10, text: "전환비용, 영업망, 반복매출(리커링) 등의 구조적 해자 보유 여부" },
  { no: 17, max: 30, text: "미래 메가트렌드 연계 매출 퀀텀점프용 '큰 거 한 방' 준비 여부" },
  { no: 18, max: 10, text: "산업 Capex 밸류체인 내 병목현상 해결 핵심 길목 위치" },
  { no: 19, max: 5, text: "글로벌 대기업 고객사 다수 확보 및 풍부한 고객 기반" },
  { no: 20, max: 8, text: "초반 성장세를 본격 성장기 진입 후에도 지속 유지할 역량" },
  { no: 21, max: 10, text: "매출액의 5~10% 이상 연구개발비 지속 지출 여부" },
  { no: 22, max: 10, text: "과거 호황기 대비 현재 매출/이익 60% 이상 및 재호황 시 실적 탄력성" },
  { no: 23, max: 8, text: "3년 이상 지속적으로 ROE 15% 이상 또는 ROIC 10% 이상 유지" },
  { no: 24, max: 1, text: "매출/수주의 시클리컬 사이클 및 계절성 파악과 대응 전략" },
  { no: 25, max: 10, text: "외형 성장(매출 증가)을 동반한 영업이익 증가세" },
  { no: 26, max: 5, text: "영업이익 외 금융수익 및 기타 비영업이익의 질적 동반 증가" },
  { no: 27, max: 10, text: "향후 5개년 매출 및 영업이익의 연평균 성장률(CAGR) 15% 이상 달성 가능성" },
  { no: 28, max: 5, text: "원가 및 판관비 등 주요 비용 구조의 개선/감소 추이" },
  { no: 29, max: 2, text: "감가상각비 부담 유지 또는 점진적 감소 여부" },
  { no: 30, max: 10, text: "듀퐁 ROE 분석: 순이익률과 총자산회전율의 우수성" },
  { no: 31, max: 2, text: "재고자산 과다 여부 및 회전율(4~6회)의 적정성" },
  { no: 32, max: 2, text: "매출 정체 상황에서 재고자산회전율 급락 등 악성 징후 배제" },
  { no: 33, max: 2, text: "재고자산 구성(제품, 반제품, 재공품)의 건전성 및 현금화 속도" },
  { no: 34, max: 2, text: "순차입금비율 20% 이하의 안정적 부채 구조" },
  { no: 35, max: 1, text: "이연법인세자산/부채 구조의 양호성" },
  { no: 36, max: 8, text: "유동성 여력: CB, BW, 유상증자 등 주주가치 희석 자금조달 리스크 부재" },
  { no: 37, max: 5, text: "CAPEX 지출 감안 시에도 유동비율 및 당좌비율 안전성" },
  { no: 38, max: 8, text: "현재 시가총액 규모에 걸맞은 사업 체급과 차세대 성장 잠재력" },
  { no: 39, max: 8, text: "연결/별도 실적 및 잠정 컨센서스 대비 현재 시가총액의 적정성" },
  { no: 40, max: 8, text: "종속기업 및 관계기업의 실질 지분가치를 반영한 저평가 여부" },
  { no: 41, max: 10, text: "글로벌 동종업체(Peer) 대비 PER, PSR 기준 현저한 저평가 여부" },
  { no: 42, max: 10, text: "시장 확장성 감안 시 장기적으로 현재 시총 5배 이상 퀀텀점프 가능성" },
  { no: 43, max: 5, text: "오너 일가 지분 및 승계 구도가 주가 부양에 우호적인가" },
  { no: 44, max: 20, text: "컨센서스 및 현금흐름 기반 DCF/RIM 밸류에이션 상 주가 상승 여력" }
];

// [신생기업] 44개 항목 (467점 만점)
const NEWBORN_CRITERIA = [
  { no: 1, max: 20, text: "기인문기정금 메가트렌드 부합 여부 (1000억달러 시장, CAGR 8%, 20년 지속 등)" },
  { no: 2, max: 20, text: "해당 산업이 글로벌 필수 산업인가? TAM/SAM 1조달러 이상 성장 가능성" },
  { no: 3, max: 8, text: "원래 산업 외 거대 TAM(3000억달러 이상) 산업으로 확장 가능 여부" },
  { no: 4, max: 8, text: "사업의 영속적 지속 가능성" },
  { no: 5, max: 20, text: "산업 발전의 핵심 키포인트(기술/특성) 확보 여부" },
  { no: 6, max: 6, text: "산업 분위기 및 최근 기관/외인 수급 유입 강도" },
  { no: 7, max: 20, text: "현재 투자 적기 여부 (6개월~1년 내 가시적 성과 도출 가능성)" },
  { no: 8, max: 10, text: "산업 역사 대비 2년 내 수익 창출 타이밍 적합도" },
  { no: 9, max: 10, text: "비즈니스 모델 및 매출 구조상 본격 성장 국면 진입 여부" },
  { no: 10, max: 20, text: "글로벌 경쟁력(G): 브랜드 파워, 킬러 프로덕트, LTV/CAC 우수성" },
  { no: 11, max: 30, text: "시장지배력(M): 독점적 가격결정권, 기술 격차 해자, 락인 효과, 높은 점유율" },
  { no: 12, max: 20, text: "신기술력(T): 높은 R&D 비중, 신기술 상용화 및 특허 파워" },
  { no: 13, max: 20, text: "제품화 능력(C): 대량생산 Capa, Capex 효율성, 매출총이익률" },
  { no: 14, max: 20, text: "경영진 역량(M): 파괴적 혁신, 기술 리더십, 고성장 실행력" },
  { no: 15, max: 10, text: "독점적 지위 선점 또는 경쟁사 파이 탈환 가능성" },
  { no: 16, max: 10, text: "높은 마진율, 전환비용, 리커링 매출 등 구조적 해자 보유" },
  { no: 17, max: 30, text: "매출을 수배 폭발시킬 메가트렌드 연계 '큰 거 한 방' 준비 여부" },
  { no: 18, max: 10, text: "산업 밸류체인 내 병목현상 해결 핵심 길목 위치" },
  { no: 19, max: 5, text: "글로벌 빅테크/대기업 고객사 다수 확보 여부" },
  { no: 20, max: 8, text: "초반 성장세를 본궤도 진입 후에도 지속 유지할 역량" },
  { no: 21, max: 10, text: "매출액의 5~10% 이상 R&D 투자 지속성" },
  { no: 22, max: 10, text: "Rule of 40: 최근 연간 매출성장률 + 영업이익률(또는 EBITDA률) 합 40% 이상 여부" },
  { no: 23, max: 8, text: "PSG: PSR / 매출성장률(%) 지표가 1 미만으로 현저한 저평가 여부" },
  { no: 24, max: 1, text: "매출/수주의 시클리컬 사이클 및 계절성 파악 여부" },
  { no: 25, max: 10, text: "매출 성장이 견인하는 건전한 영업이익 증가세" },
  { no: 26, max: 5, text: "영업이익 외 기타수익/금융수익 등 전반적 이익 흐름" },
  { no: 27, max: 10, text: "향후 5년 매출 및 영업이익 연평균 성장률(CAGR) 15% 이상 달성 가능성" },
  { no: 28, max: 5, text: "단위당 판관비 및 주요 비용 통제력 개선 추이" },
  { no: 29, max: 2, text: "고객생애가치(LTV)가 고객획득비용(CAC)의 3배 이상인가" },
  { no: 30, max: 10, text: "듀퐁 ROE: 순이익률과 자산회전율의 효율성" },
  { no: 31, max: 2, text: "재고자산 과다 여부 및 회전율의 적정성" },
  { no: 32, max: 2, text: "매출 정체 속 재고자산회전율 하락 위험성 배제" },
  { no: 33, max: 2, text: "재고자산 중 즉시 판매 가능 제품의 비중 건전성" },
  { no: 34, max: 2, text: "순차입금비율 20% 이하의 안정적 부채 구조" },
  { no: 35, max: 1, text: "이연법인세 자산/부채 상태의 양호성" },
  { no: 36, max: 8, text: "현금 소진율(Runway) 감안 시 향후 주주가치 희석(증자/CB) 위험 부재" },
  { no: 37, max: 5, text: "Capex 부담에도 유동비율/당좌비율의 안전성" },
  { no: 38, max: 8, text: "현재 시가총액 대비 체급 및 폭발적 성장 잠재력" },
  { no: 39, max: 8, text: "실적 및 최근 컨센서스 대비 시가총액의 적정성" },
  { no: 40, max: 8, text: "자회사 및 관계사 지분가치 고려 시 저평가 여부" },
  { no: 41, max: 10, text: "글로벌 동종업체(Peer) 대비 PER, PSR 기준 저평가 여부" },
  { no: 42, max: 10, text: "글로벌 Peer 비교 시 현재 주가/시가총액의 밸류에이션 매력도" },
  { no: 43, max: 5, text: "지분 구조 및 승계 구도가 주가 부양에 우호적인가" },
  { no: 44, max: 20, text: "컨센서스 및 자체 현금흐름 기반 DCF/RIM 밸류에이션 결과 상승 여력" }
];

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { company, adminPassword, lang = 'ko' } = req.body || {};
  if (!company) return res.status(400).json({ error: '기업명을 입력해주세요.' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'GEMINI_API_KEY 환경 변수가 설정되지 않았습니다.' });

  const masterPassword = process.env.ADMIN_PASSWORD || "7777";
  const isAdmin = (adminPassword === masterPassword);

  try {
    const todayStr = new Date().toISOString().slice(0, 10);
    const isEnglish = (lang === 'en');

    const langDirective = isEnglish 
      ? "CRITICAL: You MUST write companyName, keyPoint, and all reasons exclusively in English." 
      : "중요: 모든 회사명, keyPoint, 평가 사유는 한국어로 작성하십시오.";

    const systemPrompt = `
당신은 보수적이고 매우 깐깐한 글로벌 헤지펀드 매니저이자 엄격한 공인회계사입니다.
이 평가 결과에 따라 대규모 자금의 실제 투자가 결정되므로, 단기 주가 흐름이나 풍문, 테마성 뉴스 소음은 철저히 배제하고 기업의 본질적인 펀더멘탈(재무제표, 비즈니스 모델, 해자, 밸류에이션)에만 집중하십시오.
구글 실시간 검색을 통한 딥 리서치(Deep Research)와 공시 자료, 글로벌 인더스트리 리서치 보고서를 전방위로 수집하여 단계적·추론적 근거에 입각해 정밀 채점을 진행하십시오.

${langDirective}

[1단계: 상장일 팩트체크 및 프레임워크 선택]
- 기업의 정확한 상장일(IPO date)을 검색하여 오늘(${todayStr}) 기준 상장 5년 초과 여부를 판별하십시오.
  * 5년 초과: '기존기업' 프레임워크 적용
  * 5년 이하: '신생기업' 프레임워크 적용

[2단계: 채점 점수 산정 절대 룰 (점수 편차 방지)]
44개 항목 하나하나를 뜯어보고 각 항목의 배점(max)에 대해 다음 4단계 구간 기준을 엄격히 적용해 점수를 산출하십시오:
- 탁월 (글로벌 1위, 명확한 정량 수치 입증): 배점의 90% ~ 100%
- 우수 (업계 상위권, 뚜렷한 경쟁 우위 및 성장성): 배점의 70% ~ 85%
- 보통 (평이한 수준, 경쟁사 대비 차별성 부족): 배점의 45% ~ 60%
- 미흡/취약 (근거 부족, 뚜렷한 리스크 또는 적자/역성장): 배점의 10% ~ 30%

[3단계: 전수 검사 및 팩트체크 원칙]
- 각 항목의 점수는 지정된 배점(max)을 절대 초과할 수 없으며 정수여야 합니다.
- 근거가 모호하거나 과대포장된 경우 보수적으로 감점하십시오.
- 응답을 출력하기 전, 기업 정보의 정확성과 44개 항목 점수 부여의 논리적 정합성을 내부적으로 전수 재검증하십시오.

[4단계: 투자 핵심 포인트(keyPoint) 작성]
- 실적, 해자, 밸류에이션 관점에서 실제 투자 판단의 근거가 되는 기회와 리스크를 반드시 3줄 이내(줄바꿈 문장 3개 이하)로 명확히 서술하십시오.

[5단계: 출력 형식]
마크다운(\`\`\`json) 없이 순수한 JSON 텍스트만 출력하십시오.

반환 JSON 규격:
{
  "companyName": "정확한 기업명",
  "companyCode": "종목코드(티커)",
  "ipoDate": "YYYY-MM-DD",
  "framework": "기존기업 또는 신생기업",
  "keyPoint": "1. 핵심 성장 동력 및 시장 해자 요약\\n2. 주요 재무적 건전성 및 리스크 요인\\n3. 현재 밸류에이션 관점의 투자 결론",
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
        temperature: 0.1, // 무작위성을 제거해 실행 시마다 점수 편차가 발생하는 현상 억제
        seed: 42          // 동일 기업에 대해 일관된 추론 결과 유지
      }
    };

    const apiRes = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!apiRes.ok) {
      const errText = await apiRes.text();
      return res.status(apiRes.status).json({ error: `API 호출 실패 (${apiRes.status}): ${errText}` });
    }

    const data = await apiRes.json();
    if (!data.candidates || data.candidates.length === 0) {
      return res.status(500).json({ error: `AI 응답 생성 차단됨` });
    }

    const parts = data.candidates[0].content?.parts;
    const rawText = (parts || []).map(p => p.text || '').join('').trim();
    let cleanJson = rawText.replace(/```json/gi, '').replace(/```/g, '').trim();
    const firstBrace = cleanJson.indexOf('{');
    const lastBrace = cleanJson.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace !== -1) {
      cleanJson = cleanJson.substring(firstBrace, lastBrace + 1);
    }

    const result = JSON.parse(cleanJson);
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

    // 투자적격 판정 로직
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

    let isEligible = false;
    if (totalScore < 245) {
      isEligible = false;
    } else if (totalScore >= 300 && countGe65All >= 25 && sum7_17 >= 37) {
      isEligible = true;
    } else if (!isNewborn && totalScore >= 245 && totalScore <= 300 && coreScore >= 100 && countGe65Core >= 5 && sum7_17 >= 37) {
      isEligible = true;
    } else if (isNewborn && totalScore >= 245 && totalScore <= 300 && coreScore >= 94 && countGe65Core >= 5 && sum7_17 >= 37) {
      isEligible = true;
    } else if (totalScore >= 300 && ((!isNewborn && coreScore >= 100) || (isNewborn && coreScore >= 94)) && countGe65Core >= 5 && sum7_17 >= 37) {
      isEligible = true;
    } else {
      isEligible = false;
    }

    let qualification;
    if (isEnglish) {
      qualification = isEligible ? "Investment Grade" : "Ineligible";
    } else {
      qualification = isEligible ? "투자적격" : "투자 부적격";
    }

    return res.status(200).json({
      companyName: result.companyName || company,
      companyCode: result.companyCode || "-",
      ipoDate: result.ipoDate || "-",
      framework: result.framework || (isNewborn ? "신생기업" : "기존기업"),
      keyPoint: result.keyPoint || (isEnglish ? "Fundamental analysis completed." : "투자 핵심 포인트 분석이 완료되었습니다."),
      totalScore: totalScore,
      qualification: qualification,
      categoryScores: { cat1, cat2, cat3, cat4 },
      isAdmin: isAdmin,
      items: isAdmin ? tableData : null
    });

  } catch (error) {
    return res.status(500).json({ error: error.message || '분석 중 내부 오류가 발생했습니다.' });
  }
}
