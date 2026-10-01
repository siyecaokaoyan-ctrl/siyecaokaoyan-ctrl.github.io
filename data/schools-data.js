// 世界高校图书馆研究 · 结构化数据
// 数据来源：LR 系列研究报告（本地档案），逐校精读提炼，事实/判断均忠于原文
// 更新方式：新增学校时在 SCHOOLS 数组追加一条记录即可

const SCHOOLS = [
{
  id: "harvard",
  name: "哈佛大学",
  nameEn: "Harvard University",
  founded: 1636,
  country: "美国",
  region: "美洲",
  state: "马萨诸塞州 · 剑桥",
  reportId: "LR-20260916-01",
  reportDate: "2026-09-16",
  tagline: "藏书退让、空间还给人",
  mainLine: "通过校外高密度库房（Harvard Depository）承接低流通藏书，把馆内面积释放给协作学习、教学与社交空间。",
  flagship: { name: "Widener 主馆开放化 / Cabot 学习共享改造", note: "面向 2036 建校 400 周年的四馆整体改造可行性研究（Widener、Lamont、Pusey、Houghton）是观察全球顶级大学图书馆走向的最好样本。" },
  overview: {
    intro: "[全球最大学术图书馆系统](https://library.harvard.edu/)，1636 年建校、1638 年因约翰·哈佛遗赠设馆，是美国最古老的图书馆。近二十年的空间主线是\"藏书退让、空间还给人\"。",
    stats: [
      { k: "系统规模", v: "70+ 分馆（旧口径）", s: "2014–15 校方口径；现行官网称 25+ 主要图书馆，统计范围不同，维基称约 90 个单元" },
      { k: "总藏书", v: "约 2,000 万册", s: "2014 年 Gazette 口径 1,700 万，其中约一半存于校外库房" },
      { k: "主馆 Widener", v: "1915 年建成", s: "馆内约 350 万册，书架总长 92 公里，10 层书库" },
      { k: "建馆历史", v: "1638 年", s: "约翰·哈佛遗赠设馆（建校 1636）" }
    ]
  },
  projects: [
    {
      name: "Widener 主馆：象征性建筑的\"开放化\"",
      nameEn: "Widener Library · 1915",
      year: "1915",
      stats: [{ k: "书架总长", v: "92 km" }, { k: "日均入馆", v: "1,715 人（2015）" }, { k: "书库纵深", v: "10 层" }],
      facts: "由 Eleanor Widener 为纪念泰坦尼克号遇难的儿子 Harry Widener（1907 届校友）捐建，是哈佛的精神象征。业内常列为全球五大\"超级图书馆\"中唯一的大学图书馆（评价口径，非官方排名）；开架书库现主要面向哈佛师生开放，访客需申请——\"自由进入\"已是历史记忆。2015 年日均借出约 2,811 册（维基百科 Widener 条目口径，非官方统计）。",
      insight: "Widener 的价值正从\"藏书容器\"转向\"校园体验与公共符号\"。2036 愿景研究提出设\"发现中心\"，让公众透过玻璃看书库——把书库本身变成展示品。对\"密集书库是否可见、可否成为空间叙事一部分\"有直接启发。"
    },
    {
      name: "Cabot 科学图书馆：Learning Commons 标杆",
      nameEn: "Cabot Science Library · 2017 改造",
      year: "1973 建 / 2017 改",
      stats: [{ k: "改造面积", v: "3,655 ㎡" }, { k: "重开", v: "2017.4" }, { k: "认证", v: "LEED-CI v4" }, { k: "主动学习教室", v: "1 间·24 人" }],
      facts: "改造前\"窗户不透明、一二层不受欢迎、学生无处久坐\"。改造后一层为开放社交协作区（Discovery Bar、学习湾、咖啡区连庭院），地下层为小组研讨室、媒体制作室与 1 间 24 人主动学习教室（原文 \"a flexible instruction room with a capacity of 24\"）。家具策略\"几乎所有东西都是可移动的\"，本科生首次可通过 Roombook 自助预约研讨间。",
      insight: "核心启示在于分区逻辑：一层 = 社交+协作+餐饮（高噪），地下 = 小组研讨+教学（中噪），安静深读留给 Widener 等馆——\"功能分层、动静分馆/分层\"的典型操作，家具配置随噪声等级与活动类型分层，而非全馆统一。"
    },
    {
      name: "Lamont 图书馆：24 小时本科生馆的 75 年",
      nameEn: "Lamont Library · 1949",
      year: "1949",
      stats: [{ k: "开放", v: "1949 年" }, { k: "开放时间", v: "24 h" }, { k: "地位", v: "全美第一座本科生专用图书馆" }],
      facts: "以 24 小时开放著称（\"Lamonsters\"文化），2025 年满 75 周年。楼层设计\"越往上越安静\"——用垂直分区管理噪声。持续微改造：2006 年加咖啡厅，2010 年加媒体实验室。2036 愿景：地下室改造为特藏与档案安全阅览室，低流通复本移出库房。",
      insight: "证明两点：① 开放时间本身是空间产品——24 小时开放塑造了最强的学生归属感；② 学生反对\"千篇一律的现代化改造\"，提醒改造必须基于实际使用人群的行为研究——保留空间性格比追网红风格更重要。"
    },
    {
      name: "Harvard Depository：藏书外迁的\"哈佛模式\"",
      nameEn: "Harvard Depository · 1986",
      year: "1986",
      stats: [{ k: "库房容量", v: "1,000 万册" }, { k: "平均取书", v: "60 秒" }, { k: "送达", v: "次日达" }, { k: "行业占比", v: "56%" }],
      facts: "30 英尺高货架，恒温恒湿（胶片区约 4.4°C，波动不超过 3 度）。不按学科分类，按尺寸+所有者+载体类型存放，人工取书，年处理 23 万+ 请求，多数年份零差错。2007 年 OCLC 报告：全美 68 个高密度库房中 56% 采用\"哈佛模式\"，美国国会图书馆校外库房也采用这一设计。",
      insight: "\"藏书外迁\"叙事的最硬证据：外迁不是藏书的降级，而是保存条件的升级（恒温恒湿优于老馆书库），且服务体验可做到次日达。国内高校谈密集书库/外迁时，\"哈佛模式\"是最有说服力的对标。"
    }
  ],
  learningSpaces: "Learning Commons 已是标配：Cabot 的分层配置（社交/协作/研讨/教学）、Lamont 的 24 小时本科生馆与\"越往上越安静\"垂直分区、Roombook 自助预约、主动学习教室进图书馆，构成完整的学习空间谱系。",
  serviceModel: "多馆系统按学习行为分工：Widener（深读）/ Lamont（24h 本科+垂直动静分区）/ Cabot（社交协作），是\"一个校园内不同馆承担不同学习行为\"的系统打法。2022–2023 学年完成四馆整体改造可行性研究（2024 年公开），面向 2036 建校 400 周年。",
  trends: [
    { tid: "learning-commons", title: "Learning Commons 从\"新概念\"变成\"默认配置\"", type: "judgment", note: "小组研讨室、可预约空间、咖啡餐饮、多媒体制作间已成北美大学图书馆改造的标准套餐。" },
    { tid: "offsite-storage", title: "藏书外迁与高密度/自动化库房", type: "judgment", note: "哈佛模式（托盘+高架+人工）与 ASRS（机器人自动存取）是两大流派；外迁释放的面积是改造的资金与空间前提。" },
    { tid: "learning-commons", title: "图书馆作为\"第三空间\"（Third Place）", type: "judgment", note: "家与教室/工作之外的归属空间；空间评价指标从\"座位数/藏书量\"转向\"停留时长与归属感\"。" },
    { tid: "learning-commons", title: "主动学习教室进入图书馆", type: "judgment", note: "Cabot 地下层 1 间 24 人主动学习教室直接复制教学楼成功经验，图书馆与教学空间边界消融。" },
    { title: "身心健康、归属感与包容性设计", type: "judgment", note: "自然采光、声学分区、Study Pod、亲生命设计成为获奖项目共性；反向证据：有研究指出近年改造过度偏向协作空间，牺牲安静空间——按活动分区而非按人群分区更稳妥。" },
    { tid: "historic-renewal", title: "既有建筑改造 + 可持续认证", type: "judgment", note: "顶级项目越来越多是\"改\"而不是\"建\"——对国内 1990–2010 年代馆舍进入改造期是直接利好。" }
  ],
  business: [
    "汇报叙事：用\"Cabot 改造前后\"讲空间价值优先级——同一栋楼、同样的面积，差异在于功能配比与家具策略，而不在装修豪华度。",
    "密集书库话术：用 Harvard Depository 的\"次日达 + 零差错 + 恒温恒湿\"回应校方对藏书外迁的顾虑；56% 全美库房采用哈佛模式是权威背书。",
    "分层配置逻辑：Widener（深读）/ Lamont（24h 本科）/ Cabot（社交协作）的系统打法，对整体规划沟通有参考价值。",
    "风险提示话术：引用 ACRL 的\"过度协作化\"批评和 Lamont 学生抗议，主动展示\"我们研究过失败与争议\"，比只讲成功案例更建立信任。",
    "\"先诊断、后方案\"路径：哈佛为四馆改造先做了一年可行性研究再谈设计——支持向校方推荐同样的服务路径。"
  ],
  limits: [
    "Cabot 改造的投资额、家具品牌与供应商未在公开来源中查到。",
    "2036 愿景研究尚处于\"可行性研究\"阶段，是否已获资本批准需跟踪。",
    "2020 年后的使用数据未公开系统披露，报告中 2015 年数据为最新可引用口径。",
    "本报告以二手公开来源为主，未含实地调研或馆方访谈。",
    "据 The Harvard Crimson 2025-09 报道，因预算压力 Widener/Lamont/Pusey/Houghton 四馆改造计划已暂停，2036 愿景时间表存变数。"
  ],
  sources: [
    { label: "Harvard Library – Yard Libraries 2036 愿景（2024-06）", url: "library.harvard.edu/about/news/2024-06-18/yard-libraries-reimagined" },
    { label: "Harvard Gazette – Cabot 改造开馆（2017-04）", url: "news.harvard.edu/gazette/story/2017/04/harvards-cabot-science-library-charges-into-the-future" },
    { label: "Harvard Gazette – Harvard Depository 深度报道（2014-09）", url: "news.harvard.edu/gazette/story/2014/09/where-books-and-more-go-to-wait" },
    { label: "The Harvard Crimson – Lamont 75 周年（2025-02）", url: "thecrimson.com/article/2025/2/21/lamont-75-anniversary-history" },
    { label: "Harvard Magazine – Yard 图书馆改造愿景（2024-07）", url: "harvardmagazine.com/2024/07/harvard-yard-libraries-updates" },
    { label: "ACRL – Top Trends in Academic Libraries（2022）", url: "crln.acrl.org/index.php/crlnews/article/view/25483/33379" },
    { label: "C&RL – Off-Site Storage and Special Collections（哈佛模式 56% 统计）", url: "crl.acrl.org/index.php/crl/article/viewFile/16452/17898" },
    { label: "Inside Higher Ed – UC Davis 图书馆作为\"第三空间\"（2026-03）", url: "insidehighered.com/news/student-success/college-experience/2026/03/03/uc-davis-library-emerges-campus-third-place" }
  ]
},
{
  id: "mit",
  name: "MIT",
  nameEn: "Massachusetts Institute of Technology",
  founded: 1861,
  country: "美国",
  region: "美洲",
  state: "马萨诸塞州 · 剑桥",
  reportId: "LR-20260916-02",
  reportDate: "2026-09-16",
  tagline: "先定愿景、再改空间",
  mainLine: "2015–2016 年全校\"未来图书馆工作组\"先确立\"开放全球平台\"愿景，再据此推动空间改造；Hayden 图书馆改造（2021 重开）是该愿景的第一个落地样本。",
  flagship: { name: "Hayden 图书馆改造（2019–2021）", note: "局部精准手术 + 健康与包容性认证：只翻新主楼一二层，拿下 LEED 金级与 Fitwel 双认证，成为全校第一个\"红色清单零添加\"（Red List Free）材料项目。" },
  overview: {
    intro: "1862 年以 7 册赠书建馆，比 MIT 正式开课还早 3 年。系统规模约为哈佛的 1/5 到 1/3，但空间策略的激进程度不亚于哈佛，尤其在 24 小时开放和健康认证两个维度走得更快——\"中等体量馆舍如何做出顶级体验\"的更好参照系。",
    stats: [
      { k: "系统构成", v: "5 个主要分馆", s: "Hayden（人文科学主馆）、Barker（工程）、Dewey（社科管理）、Rotch（建筑规划）、Lewis 音乐图书馆" },
      { k: "馆藏规模", v: "300 万+ 册", s: "印刷图书超 300 万册，含其他载体超 600 万件（2020 口径）" },
      { k: "开放时间", v: "7 天至深夜", s: "Hayden、Barker、Dewey 设有 24/7 学习空间" },
      { k: "数字资产", v: "2.1 万+ 篇", s: "DSpace@MIT 机构库收录学位论文" }
    ]
  },
  projects: [
    {
      name: "未来图书馆工作组：愿景先行的工作机制",
      nameEn: "Task Force on the Future of Libraries · 2015–2016",
      year: "2015–2016",
      stats: [{ k: "启动", v: "2015 秋" }, { k: "初步报告", v: "2016.10.24" }, { k: "建议", v: "10 条 · 四大支柱" }],
      facts: "教务长委托馆长 Chris Bourg 组建全校工作组，成员含全校师生员工，通过开放论坛、小组讨论和在线\"点子库\"（Idea Bank）征集意见。总纲：MIT 图书馆应从\"本地门户\"转型为[\"开放全球平台\"](https://mitl.pubpub.org/pub/future-of-libraries)。第 2 条建议直指空间：成立专门的空间规划组，点名 Hayden\"改造需求显著\"。",
      insight: "这是理解 MIT 后来所有空间动作的钥匙：先完成\"为什么改\"的共识与授权，再进入单体建筑设计——与哈佛\"先做一年四馆可行性研究再谈设计\"同一逻辑。顶级大学空间改造的起点都不是平面图，而是机制化的需求诊断。"
    },
    {
      name: "Hayden 图书馆改造：核心案例",
      nameEn: "Hayden Library Renovation · 2021 重开",
      year: "1951 建 / 2019–2021 改",
      stats: [{ k: "重开", v: "2021.8.23" }, { k: "24/7 座位", v: "16 → 325+" }, { k: "认证", v: "LEED 金级 + Fitwel" }, { k: "材料", v: "全校首个 Red List Free" }],
      facts: "设计概念\"Research Crossroads（研究十字路口）\"——强调学科、人与数字实体馆藏之间的交叉。改造范围克制：只翻新一二两层主空间 + 机电升级。一层全层 24 小时开放（双层挑高研讨亭阁、Nexus 多功能教学空间、Courtyard Café），二层保留安静阅览室 + 学科馆员咨询区 + 低技术\"Oasis\"放松区。Kennedy & Violich Architecture 主持（主持建筑师即 MIT 建筑学院教授）。",
      insight: "三个可直接引用的打法：① 空间分层清晰——一层社交协作（24h 高噪）/ 二层安静深读+咨询，一栋楼内垂直完成；② 健康材料成为采购语言——Red List Free 把面料、胶粘剂、涂料纳入同一套健康标准；③ 24 小时扩容是性价比最高的\"空间产品\"——16 座到 325+ 座靠运营时段与家具布局，不是新建面积。"
    },
    {
      name: "Rotch 建筑图书馆与系统级小动作",
      nameEn: "Rotch Library · 24/7 试点 2023",
      year: "2023 试点",
      stats: [{ k: "24/7 试点", v: "2023 秋" }, { k: "地位", v: "美国第一个建筑系的支持图书馆" }],
      facts: "2023 年秋 Rotch 启动学习空间 24/7 开放试点；早在 2016 年，MIT 就在探索把 Barker 工程图书馆低效空间改造为主动学习教室。",
      insight: "MIT 的系统打法是\"主馆大改 + 分馆小步快跑\"：Hayden 承担旗舰叙事，Rotch/Barker 用低成本试点验证 24/7 与主动学习教室，验证后再推广——\"试点—验证—推广\"节奏对预算分期、降低决策风险很有参考价值。"
    },
    {
      name: "Library Storage Annex：与\"哈佛模式\"同源的外迁逻辑",
      nameEn: "Library Storage Annex",
      year: "—",
      stats: [{ k: "取书", v: "下一工作日" }, { k: "存放对象", v: "低流通资料" }],
      facts: "功能定位与 Harvard Depository 相同，但 MIT 未将库房包装为行业模式——藏书外迁在 MIT 叙事中是背景设施而非主角。",
      insight: "同一个功能（外迁库房），不同学校可以讲出完全不同的价值故事：MIT 把叙事资源集中给了\"开放获取 + 健康空间\"。方案表达应服从客户的战略叙事。"
    }
  ],
  learningSpaces: "24/7 空间从\"一间房\"扩容到\"整层\"：Hayden 24 小时座位从 16 座扩至 325+ 座（后把二层纳入再增 125 座），Rotch 2023 年跟进试点。家具随场景可重组：可移动家具、可书写白板、可隔断帘幕；强调\"从专注安静学习到协作到 casual 交谈的全谱系\"。",
  serviceModel: "多馆系统\"分时分工\"：Hayden（旗舰+24h+活动）、Barker/Dewey（24/7 学习间）、Rotch（学科+24/7 试点）、Storage Annex（次日达库房）。未来图书馆工作组（2016）确立\"开放全球平台\"总纲，空间规划组承接第 2 条建议落地。",
  trends: [
    { title: "愿景先行——\"工作组机制\"成为大改标配", type: "judgment", note: "MIT 工作组（2016）→ 空间规划组 → Hayden 改造（2021），与哈佛四馆可行性研究（2022-23）→ 2036 愿景路径同构：先花 1–2 年做全校共识与需求诊断，再进入设计。" },
    { tid: "247-spaces", title: "24/7 空间从\"一间房\"扩容到\"整层\"", type: "fact", note: "Hayden 24 小时座位 16 → 325+；全天候开放已是北美顶尖馆默认项，且与家具选型直接相关（耐用性、易清洁、可重组、照明与电源密度）。" },
    { title: "健康材料与身心健康认证进入采购标准", type: "judgment", note: "LEED + Fitwel + Red List Free 三件套意味着家具与软装选型从\"价格+款式\"变成\"化学成分披露+健康声明\"。" },
    { tid: "learning-commons", title: "\"研究十字路口\"——功能混合成为设计概念本身", type: "judgment", note: "研讨亭阁置于动线交叉口、研究房间进门即见、馆员办公室贴邻阅览室——家具的角色从\"填充空间\"变成\"定义交叉口\"。" },
    { tid: "historic-renewal", title: "既有建筑节能改造与\"局部精准手术\"", type: "judgment", note: "Hayden 只改两层 + 全面机电与表皮升级，证明不必全楼闭馆重建也能实现体验跃迁——对国内 1990–2010 年代馆舍改造潮直接可用。" },
    { tid: "247-spaces", title: "多馆系统的\"分时分工\"", type: "judgment", note: "一个校园内不同馆承担不同学习行为与时段——系统级规划比单馆设计更能体现专业深度。" }
  ],
  business: [
    "与哈佛报告组合使用：\"综合巨型系统（哈佛）vs 精准敏捷路径（MIT）\"的对照组——展示\"我们研究的不是一个案例，而是两种可迁移的模式\"。",
    "健康材料话术升级：Red List Free（软木地板、毛毡吸声板、低 VOC 胶粘剂、家具面料全披露）是把\"可持续\"从口号变成采购清单的样板。",
    "24 小时自习区配置包：16 → 325+ 座的案例可转化为\"延时开放区\"的家具配置逻辑（耐用+电源+照明+可重组+安静舱分层），做成标准化方案模块。",
    "\"局部精准手术\"报价策略：主张\"分期改造、先改高感知楼层\"，降低一次性预算门槛，同时锁定后续期次的持续合作。",
    "愿景工作坊服务前置：引用 Idea Bank、开放论坛机制，向校方提供\"空间需求诊断工作坊\"类前置服务，在立项期建立专业信任。",
    "差异化视角提醒：先摸清客户想讲的故事，再选配案例证据——方案表达要因校制宜。"
  ],
  limits: [
    "Hayden 改造总投资额与家具品牌供应商无公开来源（与哈佛 Cabot 同样的问题）。",
    "馆长回顾文确切发表期号与 Fitwel 最终星级未见官方确认页。",
    "MIT 无公开的改造后空间使用率/满意度量化研究，效果证据主要来自馆方自述。",
    "无实地调研；MIT 模式不可直接套用于国内应用型本科，引用时需注明语境。"
  ],
  sources: [
    { label: "MIT News – Renovated Hayden Library and courtyard open（2021-09）", url: "news.mit.edu/2021/renovated-hayden-library-and-courtyard-open-0907" },
    { label: "MIT – Task Force on the Future of Libraries 初步报告（2016-10-24）", url: "mitl.pubpub.org/pub/future-of-libraries" },
    { label: "MIT Libraries – Hayden renovation project facts", url: "libraries.mit.edu/hayden/renovation/project-facts" },
    { label: "MIT Faculty Newsletter – 馆长回顾：The Hayden Library Renovation（约 2024–2025）", url: "fnl.mit.edu/the-hayden-library-innovation-living-up-to-its-promise" },
    { label: "MIT Capital Projects – Hayden Library Renovation, Building 14", url: "capitalprojects.mit.edu/projects/hayden-library-building-14" },
    { label: "Wikipedia – MIT Libraries（系统规模与历史）", url: "en.wikipedia.org/wiki/Massachusetts_Institute_of_Technology_Libraries" },
    { label: "Detail – Hayden Library Renovation by Kennedy & Violich", url: "detail.de/de_en/kennedy-violich-sanieren-hayden-library-am-mit" }
  ]
},
{
  id: "stanford",
  name: "斯坦福大学",
  nameEn: "Stanford University",
  founded: 1885,
  country: "美国",
  region: "美洲",
  state: "加利福尼亚州 · 帕洛阿尔托",
  reportId: "LR-20260916-03",
  reportDate: "2026-09-16",
  tagline: "把低使用率藏书移出核心区，把面积还给\"人\"",
  mainLine: "以 SAL3 高密度储存书库为底座、以改造代替新建——主校区历次空间改造都是\"书出库、人进馆\"这一策略的空间后果。",
  flagship: { name: "Hohbach Hall（2022）/ Meyer 拆除（2015）", note: "2,500 万美元捐赠改造 Green 图书馆东翼一层；同时敢拆一座图书馆（Meyer）改建绿地——\"减法\"决策的标志性案例。" },
  overview: {
    intro: "私立研究型大学，约 20 个校园图书馆组成 SUL 网络，馆藏总量超 1,500 万件。SUL 开发的 LOCKSS/CLOCKSS 数字保存网络被全球图书馆广泛采用。",
    stats: [
      { k: "系统规模", v: "约 20 个图书馆", s: "50 余名学科专家馆员" },
      { k: "馆藏总量", v: "1,500 万+ 件", s: "实体书刊 1,100 万+，电子书 300 万+，连续出版物许可 6.5 万+" },
      { k: "SAL3 书库", v: "设计容量 480 万册", s: "约 7 万平方英尺，50°F / 38% 湿度，每日两次配送回校园" },
      { k: "数字保存", v: "LOCKSS/CLOCKSS", s: "SUL 自建数字保存网络，被全球图书馆广泛采用" }
    ]
  },
  projects: [
    {
      name: "Green 图书馆东翼改造 = Hohbach Hall",
      nameEn: "Hohbach Hall · 2022",
      year: "2022",
      stats: [{ k: "捐赠", v: "2,500 万美元" }, { k: "改造面积", v: "30,390 SF" }, { k: "设计", v: "CAW Architects" }, { k: "工期", v: "六个月" }],
      facts: "原密集书库区转换为协作学习空间、研讨室、报告厅与策展办公；中央走廊设展柜长廊，胡桃木吊顶呈正弦波形致敬硅谷音频振荡器传统。是 [Silicon Valley Archives](https://news.stanford.edu/stories/2019/01/stanford-libraries-transformative-gift-creates-hub-highlighting-silicon-valley-history) 的首个实体展示与研究空间，历史系在此开设\"用 10 件物品讲述硅谷史\"档案课程。",
      insight: "捐赠命名的特藏展示空间（Hohbach/Rumsey 模式）：校友捐赠 + 校史/行业档案 + 展教一体，家具需求从书架转向展柜、演讲厅与研讨室。"
    },
    {
      name: "Lathrop Library（2014）：Meyer 的接替者",
      nameEn: "Lathrop Library · 2014",
      year: "2014",
      stats: [{ k: "开放", v: "2014.9.15" }, { k: "设计", v: "Perkins+Will" }, { k: "特色", v: "24h 空间 + The Hub" }],
      facts: "由原商学院南楼改造而成，四层，承担原 Meyer 的全部服务功能。一层设 24 小时学习空间与 The Hub 学生技术服务中心（iMac 集群、设备借用、create:space 创客空间）。",
      insight: "历史建筑适应性再利用的样本：旧商学院楼变成本科学习与技术中心。",
      _limit: "面积口径存在来源冲突（180,000 vs 108,000 SF），待验证。"
    },
    {
      name: "Meyer 图书馆拆除 → Meyer Green（2015）：一次\"减法\"决策",
      nameEn: "Meyer Demolition → Meyer Green · 2015",
      year: "2015",
      stats: [{ k: "建成", v: "1966（昵称 UgLI）" }, { k: "加固估价", v: "4,500 万美元+" }, { k: "绿地", v: "2.45 英亩" }],
      facts: "因不满足抗震标准、加固费超 4,500 万美元，校方 2007 年决定放弃加固改为拆除。拆除建材大量回收（外运车次从 2,400 降至 300），原址改建 2.45 英亩景观绿地，2015 年 11 月开放。",
      insight: "美国研究型图书馆\"少即是多\"的标志性案例：当存量功能可被储存书库+邻近改造馆替代时，核心地块的最高价值可能不是建筑面积，而是开放空间与步行轴线。"
    },
    {
      name: "David Rumsey 地图中心（2016）：特藏空间化的先声",
      nameEn: "David Rumsey Map Center · 2016",
      year: "2016",
      stats: [{ k: "开放", v: "2016.4.19" }, { k: "藏品", v: "15 万+ 件" }, { k: "地位", v: "西海岸首个同类" }],
      facts: "收藏 Rumsey 2009 年捐赠的 16–21 世纪珍稀地图、地球仪与图集，设两面整墙互动大屏。校方明确表示该中心是后来 Hohbach Hall 改造的灵感来源。",
      insight: "特藏不再锁在库房，而是以展柜、课程、快闪展进入日常动线——特藏空间成为吸引人流与捐赠的双引擎。"
    },
    {
      name: "馆藏大迁移（2023–2024 进行中）",
      nameEn: "Collections on the Move · 2023–2024",
      year: "2023–2024",
      stats: [{ k: "珍稀书回迁", v: "20 万+ 册" }, { k: "迁入 SAL3", v: "75 万+ 册" }, { k: "配送", v: "每日两次" }],
      facts: "20 万余册珍稀书迁入 Green 西书库并配套特藏阅览室；超 75 万册迁入 SAL3，回校配送增至每日两次。",
      insight: "\"远程储存 + 馆内精选\"的双层结构正在取代\"全量馆内开架\"。"
    }
  ],
  learningSpaces: "清晰的四层结构：通宵自习（生存型）→ 小组研讨（协作型）→ 特藏与展览（探究型）→ 技术支持与创客（产出型），集中分布在 Green、Lathrop 两馆步行范围内。通宵化由学生会（ASSU）2024 年 2 月决议推动，历经 419 天（招聘馆员与安保、试行至凌晨 3 点）后 Hohbach Hall 周日至周四通宵开放——校方把\"开放时间\"当作经费、人员与治理三方咬合的运营问题。",
  serviceModel: "SAL3 支撑\"远程储存+按需调拨\"：SearchWorks 提交请求、每日两次配送、库内设预约制阅览室。The Hub 将图书馆服务与 IT 学生技术支持合并运营。教学深度嵌入空间：硅谷档案课程、Rumsey 课堂教学、特藏 pop-up 快闪展、本科毕业设计展常态化举办。",
  trends: [
    { tid: "special-collections", title: "从\"藏\"到\"展\"再到\"用\"", type: "fact", note: "特藏不再锁在库房，以展柜长廊、档案课程、快闪展进入日常动线；特藏空间成为吸引人流与捐赠的双引擎。" },
    { tid: "247-spaces", title: "通宵化从 fringe 需求变成治理议题", type: "judgment", note: "学生会立法推动、校方公开回应经费年限，预计更多研究型大学将以\"分区通宵+安保配套\"模式跟进。" },
    { tid: "offsite-storage", title: "高密度储存+每日两次调拨成为空间重组的基础设施", type: "fact", note: "\"远程储存+馆内精选\"的双层结构正在取代\"全量馆内开架\"。" },
    { tid: "learning-commons", title: "图书馆与技术支援服务合并运营", type: "judgment", note: "The Hub 把图书馆、IT 支持、创客空间放进同一入口——学习空间的竞争单元从\"馆\"变成\"服务台半径内的完整支持链\"。" },
    { tid: "historic-renewal", title: "历史建筑的适应性再利用优于新建", type: "fact", note: "Lathrop（旧商楼）、科学馆（1903 Old Chem）、Hohbach（老馆东翼）均为改造；图书馆预算更多流向\"改\"，家具与内装占比上升。" },
    { tid: "special-collections", title: "空间即筹款载体", type: "judgment", note: "Hohbach Hall、Rumsey 中心、Li & Ma 科学馆均以捐赠命名——空间设计质量直接影响学校募资能力。" }
  ],
  business: [
    "\"储存书库先行\"是说服学校做减法的关键论据：斯坦福敢拆 Meyer、敢清空 Green 东翼书库，前提是 SAL3 的 480 万册容量与每日两次配送。",
    "24 小时空间是最容易被学生\"用脚投票\"的刚需场景：通宵自习区的家具耐久性、电源集成与静音分区是可量化的价值卖点。",
    "捐赠命名的特藏展示空间（Hohbach/Rumsey 模式）是高校图书馆的新叙事：客单价与设计参与度都更高。",
    "\"可重排\"是贯穿所有空间的共同词：主动学习教室的家具选型应把\"一个人 5 分钟内完成重组\"作为硬指标。",
    "可复制性边界：捐赠规模与馆员配置密度在国内多数高校不可复制，启发应落在空间逻辑与配置标准上，而不是投资量级上。"
  ],
  limits: [
    "Lathrop 面积口径不一致（180,000 vs 108,000 SF）。",
    "Hohbach Hall、Lathrop 是否获设计类奖项未检索到权威记录。",
    "Green 通宵开放经费续期情况待跟踪（校方口径约两年）。",
    "未获取各馆座位总量、人流量与使用率的官方统计。"
  ],
  sources: [
    { label: "SUL – About the Libraries", url: "library.stanford.edu/about-stanford-libraries/about-libraries" },
    { label: "Stanford Report – Hohbach 捐赠与硅谷档案中心（2019-01）", url: "news.stanford.edu/stories/2019/01/stanford-libraries-transformative-gift-creates-hub-highlighting-silicon-valley-history" },
    { label: "Stanford Report – Meyer 拆除启动（2015-02）", url: "news.stanford.edu/stories/2015/02/meyer-demo-starts-020215" },
    { label: "Stanford Report – Rumsey 地图中心（2016-04）", url: "news.stanford.edu/stories/2016/04/stanfords-map-center-devoted-joyful-exploration-things-cartographic" },
    { label: "SUL – Collections on the move（2023–2024）", url: "library.stanford.edu/news/collections-move-improving-access-and-enhancing-discovery" },
    { label: "Stanford Daily – Green 图书馆通宵开放（2025-04）", url: "stanforddaily.com/2025/04/03/green-library-now-open-24-hours-on-weekdays" },
    { label: "librarytechnology.org – SAL3 设施档案", url: "librarytechnology.org/storagefacility/48" },
    { label: "EDUCAUSE – Wallenberg Hall 学习空间案例", url: "educause.edu/research-and-publications/books/learning-spaces/chapter-36-stanford-university-wallenberg-hall" }
  ]
},
{
  id: "princeton",
  name: "普林斯顿大学",
  nameEn: "Princeton University",
  founded: 1746,
  country: "美国",
  region: "美洲",
  state: "新泽西州 · 普林斯顿",
  reportId: "LR-20260918-01",
  reportDate: "2026-09-18",
  tagline: "单主馆深挖 · 学科嵌入 · 旗舰外置",
  mainLine: "一座 1948 年主馆的四轮生命周期（初建→两次加建→十年翻新→网络扩展），叠加学科分馆的嵌入式微调与 Commons 知识创造分离实验。",
  flagship: { name: "Firestone 主馆十年翻新（2010–2019）", note: "2.5 亿美元、十年、全程不闭馆——哥特式外壳不动、内部从\"书库+卡片目录\"彻底改造为\"光、电、网、协作\"的现代学习基础设施。" },
  overview: {
    intro: "美国第四古老高等学府（1746 年），10 个馆址的集中式网络：Firestone 一栋楼承载人文社科全部核心馆藏与中央运营，分馆按学科深度嵌入学院。与哥大、哈佛、纽约公共图书馆共有 [ReCAP 高密度书库](https://recap.princeton.edu)。",
    stats: [
      { k: "系统规模", v: "10 个馆址", s: "2026 年 2 月新增 Commons Library 为第 10 馆" },
      { k: "纸质馆藏", v: "约 730 万册", s: "ARL 2011 口径；微缩资料约 670 万件" },
      { k: "Firestone 主馆", v: "1948 年启用", s: "书架总长超 70 英里（约 110 公里），世界最大开架图书馆之一" },
      { k: "ReCAP 联盟库", v: "1,800 万+ 件", s: "与哥大、哈佛、NYPL 共有，年处理约 20 万件调阅" }
    ]
  },
  projects: [
    {
      name: "Firestone 主馆：一座 77 年持续翻新的主馆",
      nameEn: "Firestone Library · 1948 / 翻新 2010–2019",
      year: "1948 建 / 2010–2019 翻新",
      stats: [{ k: "翻新投资", v: "$250M" }, { k: "周期", v: "十年 · 不闭馆" }, { k: "面积", v: "430,000 SF" }, { k: "照明奖项", v: "2021 双奖" }],
      facts: "二战后美国首座新建大型大学图书馆。2010–2019 十年整体翻新（Shepley Bulfinch + Frederick Fisher），期间保持开放、藏书正常流通。核心动作：办公室内移释放自然采光、天窗\"光收集\"、机电暖通全面升级、新建数字成像工作室与保护实验室、增加小组学习室与灵活座位。翻新后设 Tiger Tea Room 咖啡厅、Milberg 展厅、8 间可预约研习室；照明设计获 2021 NLB Tesla Award 与 IES 优秀奖。",
      insight: "美国研究型图书馆\"不拆重建\"的标杆：2.5 亿美元没有用于推倒哥特式外壳，而是把内部彻底现代化。对中国 1990–2010 年代建成的图书馆，这是\"原址现代化\"最完整的成本与周期参照。"
    },
    {
      name: "Lewis 科学图书馆（2008）：盖里设计的科学整合旗舰",
      nameEn: "Lewis Science Library · Frank Gehry · 2008",
      year: "2008",
      stats: [{ k: "设计", v: "Frank Gehry" }, { k: "面积", v: "87,000 SF" }, { k: "捐赠", v: "$60M（2001）" }, { k: "整合", v: "7 个理科学科" }],
      facts: "将天文物理、生物、化学、地学、数学、物理、统计七学科馆藏整合为一，Peter B. Lewis（1955 届）2001 年捐赠 6,000 万美元。2020 年又完成一轮内部改造：工程馆迁入、新建 PUL Makerspace、地图与地理空间中心翻新。",
      insight: "学科整合可以催生标志性建筑——把七个理科图书馆合并为一，学校才愿意请盖里设计、校友才愿意捐 6,000 万美元；但新建旗舰不是一劳永逸，图书馆生命周期以十年为单位滚动。"
    },
    {
      name: "Marquand 图书馆迁入艺术博物馆综合楼（2026）",
      nameEn: "Art Museum Complex · David Adjaye · 2025/2026",
      year: "2026",
      stats: [{ k: "博物馆", v: "146,000 SF" }, { k: "设计", v: "David Adjaye" }, { k: "馆藏", v: "约 50 万册" }],
      facts: "新艺术博物馆 2025 年 10 月对公众开放；美国最古老、规模最大的艺术图书馆之一 Marquand（馆藏约 50 万册）因原楼拆除重建，在 Firestone C 层过渡 3–5 年后，2026 年 1 月迁入同一综合体重新开放。",
      insight: "图书馆与美术馆的深层绑定：艺术图书馆不是独立建筑，而是艺术博物馆综合体的功能组件——国内高校新建美术馆/博物馆时，图书馆功能应同步规划，而非事后补缺。"
    },
    {
      name: "Commons Library（2026）：知识创造实验室的分离实验",
      nameEn: "Commons Library · ES & SEAS 综合楼 · 2026",
      year: "2026",
      stats: [{ k: "启动", v: "2026.2.10" }, { k: "定位", v: "跨学科知识创造实验室" }, { k: "配置", v: "3 层 · 10 间研习室" }],
      facts: "PUL 第 10 个分馆，位于新建环境研究与工程科学综合楼，含 2–8 人研习室、Curiosity Studio 手工活动室、高自然采光与木质天花板的\"平静创意\"空间。它不叫\"图书馆分馆\"，而叫\"知识创造实验室\"。",
      insight: "把制作、协作、非正式学习从传统图书馆分离、嵌入学科综合楼——与 MIT Rotch、斯坦福 Lathrop、格拉斯哥 JMS Hub 同一逻辑：学习空间的增量以独立旗舰形式出现，图书馆系统边界被重新定义。"
    }
  ],
  learningSpaces: "噪声三级分级体系直接写进空间命名与导视：Talking/Collaborative（协作）、Quiet（安静）、Silent（静默），配套家具、声学、照明随之分级（静默区高背椅/卡座、协作区移动桌/软座）。LibCal 预约、研究生卡座 24 小时、Firestone 考试周 24 小时。Tiger Tea Room 提供咖啡与轻食——把家具选型与空间制度绑定的完整样本。",
  serviceModel: "\"服务不随空间中断\"：Firestone 十年翻新期间保持开放（设施工沟通专岗），Marquand 三年过渡期通过预约制维持特藏服务，Commons 从低调试运行到正式开放有完整活动排期。学科服务含数据与统计服务（DSS）、数字人文中心（CDH）、PUL Makerspace；校友可付费调阅 ReCAP 馆藏。",
  trends: [
    { title: "图书馆的\"馆\"与\"藏\"正在解耦", type: "fact", note: "Firestone 承载中央运营与特藏，ReCAP 承担高密度存储，Commons 承担知识创造，Lewis 承担科学整合——图书馆品牌价值越来越依赖网络协同，而非单栋地标。" },
    { tid: "historic-renewal", title: "历史建筑进入\"保护性翻新\"周期", type: "fact", note: "哥特式外壳保留+内部彻底现代化，与格拉斯哥粗野主义塔楼换幕墙同属\"不拆重建\"范式；欧美 1950–1980 年代馆舍普遍到达维护寿命终点，此类打包项目将批量出现。" },
    { title: "学科综合楼内嵌学习空间成为主流", type: "judgment", note: "Commons 嵌入 ES & SEAS 综合楼、Marquand 嵌入艺术博物馆、工程馆迁入 Fine Hall——图书馆增量不再以独立建筑为主，家具采购决策主体从图书馆扩展到院系与校级基建部门。" },
    { title: "空间分级制度成为标配", type: "fact", note: "Talking/Quiet/Silent 三级命名与导视比格拉斯哥的红/琥珀/绿更强调行为预期；空间制度（分区、预约、噪声管理）将先于家具选型成为采购前提。" },
    { title: "捐赠叙事驱动旗舰空间命名", type: "judgment", note: "命名伦理成为新空间的价值表达——大学新空间的命名将越来越承担筹款与价值传播功能，设计需要承接这种叙事。" }
  ],
  business: [
    "\"单主馆持续翻新\"是中国高校 1990–2010 年代图书馆的必答题，Firestone 是最完整的证据链——对应家具机会是十年周期内分批、分楼层、与机电改造同步的持续采购，而非一次性大单。",
    "学科整合催生旗舰建筑，是\"新馆立项\"的最强叙事：\"学科整合\"比\"面积扩张\"更能打动决策者。",
    "\"知识创造实验室\"正在从图书馆分离：国内\"未来学习中心\"建设潮中，Commons 提供了\"小而美\"的另一种可能（3 层、10 间研习室的知识创造节点）。",
    "图书馆与美术馆/博物馆的绑定是文化设施建设的新常态：新建文化建筑时图书馆功能应同步设计，避免后期临时安置的代价。",
    "\"边运营边改造\"的组织能力本身可以成为方案卖点：临时家具、可移动隔断、快闪学习角、分区声学管理可打包为\"改造期服务方案\"。",
    "可复制性边界：美国私立大学资金结构与国内公立高校财政拨款模式差异巨大，2.5 亿美元量级不可直接类比。"
  ],
  limits: [
    "Firestone 最新年度访问量与借阅量为 ARL 2011 / 维基口径。",
    "员工 375 人、馆藏 730 万均为 2011 口径，2026 年最新数据未获取。",
    "十年翻新 2.5 亿美元为声学顾问项目页口径，校方官方预算文件未直接引用。",
    "Commons Library 运营数据尚新（2026 年 2 月启动）。"
  ],
  sources: [
    { label: "Princeton – A new era begins at Princeton University Library（2019-03）", url: "princeton.edu/news/2019/03/11/new-era-begins-princeton-university-library" },
    { label: "PUL – Commons Library 正式启动（2026-02）", url: "library.princeton.edu/about/library-news/2026/pul-officially-launches-commons-library-new-environmental-studies-and-seas" },
    { label: "Princeton – Lewis Library fact sheet（2008，Gehry、$60M）", url: "princeton.edu/news/2008/09/03/lewis-library-fact-sheet" },
    { label: "Princeton University Art Museum – New Museum（Adjaye）", url: "artmuseum.princeton.edu/about/new-museum" },
    { label: "PUL – ReCAP 馆藏（1,800 万件）", url: "library.princeton.edu/collections" },
    { label: "PUL – Study Spaces（噪声三级分级）", url: "library.princeton.edu/services/study-spaces" },
    { label: "Frederick Fisher and Partners – Firestone 翻新项目页", url: "fisherpartners.net/project/princeton-university-firestone-library-renovation" },
    { label: "Acentech – Firestone Library（$250M 口径）", url: "acentech.com/project/princeton-university-firestone-library" }
  ]
},
{
  id: "yale",
  name: "耶鲁大学",
  nameEn: "Yale University",
  founded: 1701,
  country: "美国",
  region: "美洲",
  state: "康涅狄格州 · 纽黑文",
  reportId: "LR-20260918-02",
  reportDate: "2026-09-18",
  tagline: "双旗舰 + 功能分工",
  mainLine: "1930 年哥特主馆的\"逐房间滚动修复\"、1963 年现代主义珍本馆的\"三地运营+特藏整合\"、本科馆的\"用户研究驱动改造\"三轨并行——后台 LSF 与 344 Winchester 为全部前台手术托底。",
  flagship: { name: "Sterling 中殿修复（2014）/ Beinecke 翻新（2016）", note: "每 2–3 年修复一个标志性房间、全程不闭馆；Beinecke 年访客 18.75 万，74% 专为建筑而来——\"建筑即展品\"的范本。" },
  overview: {
    intro: "美国第三古老高等学府（1701 年），北美第三大学术图书馆体系。与哈佛（多馆网络）、普林斯顿（单主馆+学科分馆）不同，耶鲁是\"双旗舰+功能分工\"结构：每个功能都有一栋性格鲜明的建筑。",
    stats: [
      { k: "馆藏", v: "1,500 万+ 册", s: "全介质；员工 500 余人，另有 300 多名学生雇员" },
      { k: "Sterling 主馆", v: "1930 落成", s: "7 层中央书塔 320 万册，3,301 扇铅条彩窗" },
      { k: "Beinecke", v: "1963", s: "馆藏 100 万+ 册珍本，含古腾堡圣经、伏尼契手稿" },
      { k: "LSF 后台库", v: "850 万件", s: "1998 年启用，距校园 3 英里，下单 24 小时配送" }
    ]
  },
  projects: [
    {
      name: "Sterling 主馆：哥特主馆的\"逐房间滚动修复\"",
      nameEn: "Sterling Memorial Library · Rogers 1930",
      year: "1930 建 / 滚动修复 2014–",
      stats: [{ k: "中殿修复", v: "$20M · 2014" }, { k: "更新节奏", v: "每 2–3 年一室" }, { k: "书塔", v: "320 万册" }, { k: "彩窗", v: "3,301 扇" }],
      facts: "2014 年[中殿修复](https://web.library.yale.edu/news/2014/08/sterling-memorial-library-nave-reopens-following-spectacular)（Gilder 夫妇 2,000 万美元捐赠）：施工期间搭建贯通入口与各阅览室的封闭式步行隧道，全程不闭馆；三个服务台合并为一，新增自助借还与跨馆取书。2022 年 Hanke 展厅开幕、2024 年 L&B 阅览室修复重开（修复 1931 年原装绿色沙发扶手椅而非淘汰，新旧家具并置成为空间叙事）。已启动 2031 百年评估。",
      insight: "\"每 2–3 年修复一个标志性房间\"的滚动范式：单笔规模可控、均可包装为捐赠标的、全程不闭馆。与普林斯顿 Firestone\"十年一次大翻新\"形成两种范式——耶鲁模式资金门槛和组织难度更低，更容易起步。"
    },
    {
      name: "Beinecke 珍本手稿图书馆：现代主义地标的三地运营",
      nameEn: "Beinecke Rare Book & Manuscript Library · SOM 1963",
      year: "1963 / 翻新 2015–2016",
      stats: [{ k: "FY24 访客", v: "187,501" }, { k: "为建筑而来", v: "74%" }, { k: "闭馆翻新", v: "16 个月" }, { k: "外墙", v: "1.25″ 透光大理石" }],
      facts: "Gordon Bunshaft（SOM）设计，六边形网格 + 透光大理石外墙，中央六层玻璃书塔，野口勇下沉庭院。2015–16 闭馆 16 个月全面翻新（更换 1963 年原建设备、教室面积翻倍），施工前 25.5 万册藏书迁入 LSF。三地模式：121 Wall Street 主楼（阅览+教学+展陈）+ 344 Winchester 技术处理中心 + LSF 书库。FY2024 访客同比增 30%，67% 来自康州以外。",
      insight: "\"建筑即展品\"：四分之三访客为建筑本身而来，珍本馆成为学校面向公众的文化会客厅。三地模式（地标前台+集中后台+远郊存储）是特藏馆运营的成本结构答案——昂贵的地标空间只放必须见人的功能。"
    },
    {
      name: "Bass Library：用户研究驱动的\"撤书换座\"",
      nameEn: "Bass Library · 1971 / 2007 / 2019",
      year: "2019 翻新",
      stats: [{ k: "座位", v: "365 → 449（+23%）" }, { k: "藏书", v: "14.5万 → 6.1万" }, { k: "本科借阅占比", v: "40% → 13%" }, { k: "工期", v: "5 个月" }],
      facts: "决策依据：十年流通数据（借阅量下降近半）+ 人类学家 Nancy Fried Foster 2018 年主持的用户参与式研究。撤出的 8.9 万册迁入隔壁 Sterling 书塔（仍可借阅，不丢书）。2019 年 8 月软开放、10 月正式开放。",
      insight: "\"撤书换座\"的教科书案例：用流通数据证明纸质使用率坍塌，用人类学研究证明学生要的是自习位，再交代撤书去向——三步论证完整闭环。沟通话术\"不是减书，是把低频书放到 24 小时能取回的地方\"几乎可以原样翻译使用。"
    },
    {
      name: "LSF 与 344 Winchester：后台设施决定前台自由度",
      nameEn: "Library Shelving Facility · 1998",
      year: "1998 / 2015",
      stats: [{ k: "LSF 馆藏", v: "850 万件" }, { k: "配送", v: "24 小时到任一馆" }, { k: "技术中心", v: "43,000 SF" }],
      facts: "LSF（1998 启用）恒温恒湿、30 英尺高架、按尺寸上架；344 Winchester Avenue（2015 启用）集中编目、数字化、保护修复。",
      insight: "耶鲁所有前台空间手术（Beinecke 闭馆翻新、Bass 撤 8.9 万册、Sterling 书塔重组）都依赖后台系统托底——先建后台、再改前台，是耶鲁 30 年空间策略的隐藏主线。"
    }
  ],
  learningSpaces: "家具与制度双轨分级：软座给中殿社交/休闲空间，长桌给安静阅览室，卡座给书塔深读，移动家具给 24h 协作空间；预约制管小组室，先到先得管个人位，学期分配管研究生卡座。24 小时供给分布式实现：Marx 馆 24h 学习室 + 医学馆 24/7 空间 + 14 所住宿学院图书馆夜间开放，主馆照常闭馆。",
  serviceModel: "成熟度体现在\"看不见的系统\"：跨馆 24 小时配送、三台合一与自助化、LibCal 预约、Alma 迁移（两周流通冻结提前三个月公告、切换当日馆领导第一个借书）。研究支持从\"找文献\"转向\"用数据\"：CMD 部门、Yale Dataverse、DHLab、与教学中心合作开发 AI 工具。",
  trends: [
    { tid: "special-collections", title: "特藏走向\"一个品牌\"整合", type: "fact", note: "Beinecke 2022 年合并手稿与档案馆、2026 年再并艺术与音乐特藏——特藏从\"分散保管\"转向\"统一运营\"，教学与公共功能持续加码。" },
    { tid: "historic-renewal", title: "历史图书馆进入\"逐房间修复\"周期", type: "fact", note: "欧美 1930 年代馆舍批量进入维护寿命终点，\"按房间、按捐赠、不闭馆\"的滚动修复将成为常态项目类型。" },
    { tid: "special-collections", title: "建筑即展品，公共性从\"借阅\"转向\"观展+教学\"", type: "fact", note: "Beinecke 四分之三访客为建筑而来；大学图书馆的访客经济与捐赠叙事深度绑定，展陈空间成为新馆标配。" },
    { tid: "data-driven-ops", title: "发现层先于空间层打通", type: "fact", note: "LUX 把图书馆、美术馆、博物馆、艺术中心 1,700 万件对象合一检索；机构边界的消融首先发生在数字层。" },
    { tid: "data-driven-ops", title: "数据与 AI 成为图书馆新基建", type: "judgment", note: "研究支持从\"找文献\"转向\"用数据\"，对应空间上数据工坊（Marx 模式）与可视化实验室的持续扩张。" }
  ],
  business: [
    "\"逐房间滚动修复\"是历史馆舍改造的低门槛范式——对应家具机会是\"按房间滚动更新+原装家具修复\"的双轨采购（L&B 证明 1931 年的沙发修好了仍是最好的家具）。",
    "\"撤书换座\"需要证据链，Bass 提供了可直接复用的论证模板：流通数据 + 用户研究 + 去向交代，四步缺一不可。",
    "特藏馆可以承担学校的\"文化会客厅\"功能且自身就是募捐标的——珍本、校史、捐赠文物需要一个有建筑品质的家。",
    "24 小时学习空间可以分布式实现，不必全馆通宵：分层供给既控安保成本，又把通宵空间放到离学生最近的地方。",
    "后台设施（密集书库+技术处理中心）应先于前台改造写入方案——没有后台托底，前台空间改造寸步难行。",
    "可复制性边界：美国私立大学捐赠驱动的资金结构与国内公立高校财政模式不可直接类比。"
  ],
  limits: [
    "全系统最新年度访问量与借阅量未获统一口径（仅 Beinecke、医学馆有单体数据）。",
    "Sterling 启用年份校方口径不一（1930 落成 / 1931 启用并存）。",
    "Bass 2019 改造设计机构口径存在出入（DBVW 标注 2021 年完成）。",
    "周末开放时长曾被学生组织评为常春藤同类中最短（报告年份待考）。"
  ],
  sources: [
    { label: "Yale Library – About Us（1,500 万册、500+ 员工）", url: "library.yale.edu/about-us" },
    { label: "Yale News – Sterling 中殿修复重开（2014-08）", url: "web.library.yale.edu/news/2014/08/sterling-memorial-library-nave-reopens-following-spectacular" },
    { label: "Beinecke – History and Architecture（1963、翻新、特藏整合）", url: "beinecke.library.yale.edu/about/history-and-architecture" },
    { label: "Beinecke – Annual Report FY2024（187,501 访客、74% 为建筑而来）", url: "beinecke.library.yale.edu/sites/default/files/2026-02/fy24-beinecke-annual-report.pdf" },
    { label: "Yale Library – Bass 改造完成（2019-10，365→449 座）", url: "web.library.yale.edu/news/2019/10/bass-library-renovation-completed" },
    { label: "Yale Library – LSF at 25（850 万件、24 小时配送）", url: "library.yale.edu/news/lsf-25-visual-history-yale-university-library-shelving-facility" },
    { label: "Yale Library – LUX 跨馆藏发现平台（2023-06，1,700 万件）", url: "library.yale.edu/news/yale-launches-lux-powerful-new-search-tool-cross-collection-exploration" },
    { label: "Yale News – 馆长连任（2025-02，数据与 AI 战略）", url: "news.yale.edu/2025/02/12/rockenbach-reappointed-university-librarian" }
  ]
},

{
  id: "duke",
  name: "杜克大学",
  nameEn: "Duke University",
  founded: 1838,
  country: "美国",
  region: "美洲",
  state: "北卡罗来纳州 · 达勒姆",
  reportId: "LR-20260918-03",
  reportDate: "2026-09-18",
  tagline: "后台先行 · 分期滚动 · 每期绑定捐赠",
  mainLine: "一个十五年的滚动改造工程：LSC 后台库（2001）→ Bostock（2005）→ Perkins 各层 + The Link（2006–2008）→ Rubenstein（2015）→ Lilly（2024–2027）。",
  flagship: { name: "Perkins 工程（2000–2015）/ Lilly 百年大修（2024–2027）", note: "先用一座高密度书库托底，再分十年滚动改造主馆群、全程不整体闭馆；Lilly 造价从 3,800 万公开调整到 6,400 万美元，2027 年 1 月开放恰逢建馆百年。" },
  overview: {
    intro: "[校方自述\"全国前十的私立大学图书馆体系\"](https://library.duke.edu/about/reports-quickfacts)（无第三方排名佐证）。空间史主线是\"Perkins 工程\"——与耶鲁\"逐房间滚动修复\"、普林斯顿\"十年一次大翻新\"并列的第三种范式：后台先行＋分期滚动，且每个阶段都绑定明确的捐赠叙事。",
    stats: [
      { k: "总馆藏", v: "897 万册", s: "FY2025 官方快数；电子书 318 万种、电子期刊 31.3 万种" },
      { k: "年入馆", v: "134.9 万人次", s: "FY2025；研讨室预约 25,644 次" },
      { k: "年借出", v: "仅 5.0 万册次", s: "对照 897 万馆藏，年流通率不足 0.6%" },
      { k: "运营预算", v: "4,034 万美元", s: "FY2025，其中文献购置 1,478 万、薪酬 1,930 万" }
    ]
  },
  projects: [
    {
      name: "图书馆服务中心 LSC（2001）：先建后台，再动前台",
      nameEn: "Library Service Center · 2001",
      year: "2001",
      stats: [{ k: "造价", v: "$7M" }, { k: "容量", v: "现存储 600 万+ 件" }, { k: "扩展", v: "可扩至 1,500 万册" }],
      facts: "校外高密度书库，时任馆长称其为 Perkins 改造的\"里程碑\"。与北卡大学教堂山分校（UNC）共用：2007 年扩容两校分摊，2012 年再扩至约 900 万容量，UNC 以 30 年存储协议锁定一半。30 英尺高架、条码定位。",
      insight: "整个 Perkins 工程的第 0 步——没有它，后续所有施工与搬迁都无从谈起。后台设施决定前台自由度；后台库还能做成区域生意（\"谁的库房\"变成\"谁的协议\"）。"
    },
    {
      name: "Bostock 图书馆与 von der Heyden 馆亭（2005）",
      nameEn: "Bostock Library + von der Heyden Pavilion · 2005",
      year: "2005",
      stats: [{ k: "面积", v: "110,000 SF" }, { k: "楼层", v: "五层" }, { k: "部门", v: "10 个迁入" }],
      facts: "杜克版\"学习共享空间\"宣言：新理念被收入 EDUCAUSE《Learning Spaces》第 17 章——把图书馆从\"书的仓库\"变为\"gateway and commons\"。玻璃亭式 Pavilion 为非正式学习与活动空间，内设咖啡区；新\"门户\"连接人文社科区与科学工程区。",
      insight: "\"新楼先开、老楼再修\"的接续方式使主馆群十五年改造全程没有整体闭馆——用一栋新楼承接全部公共服务，腾出手来改造老楼。"
    },
    {
      name: "The Link（2008）：地下室里长出的主动学习教室群",
      nameEn: "The Link · 2008",
      year: "2008",
      stats: [{ k: "面积", v: "24,000 SF" }, { k: "教室", v: "6 间" }, { k: "课程", v: "首学期 46 门" }],
      facts: "Perkins 地下一层改造为教学与学习中心：6 间教室、4 间研讨室、11 间小组研习室 + 开放协作区，校内 IT 服务台同期迁入。艺术史教授把项目制课程搬进来的决定性因素是\"可以按小组任意组合家具的教室\"。馆方杂志明确记录\"软包座椅的非正式组合在新空间里最受欢迎\"。",
      insight: "图书馆地下室也能成为教学空间——关键是把教室群、IT 服务台和图书馆员放在同一层，形成\"教学支持一条街\"。"
    },
    {
      name: "Rubenstein 珍本手稿图书馆（2012–2015）",
      nameEn: "Rubenstein Rare Book & Manuscript Library",
      year: "2012–2015",
      stats: [{ k: "总费用", v: "近 $60M" }, { k: "命名捐赠", v: "$13.6M" }, { k: "改造", v: "教室展陈翻倍" }],
      facts: "老馆闭馆改造近三年，修复 1928 年哥特式楼梯塔与哥特阅览室，新库核心区配湿度控制、无紫外线 LED、冷库与密集书架。重开后成为西校区热门活动场地，哥特阅览室晚间变身自习空间。",
      insight: "\"修旧如新＋功能翻倍\"同时成立——历史房间负责情感与募捐叙事，新设备负责保存与教学；1,360 万命名捐赠撬动 6,000 万总盘子，是\"以命名权启动项目\"的标准动作。"
    },
    {
      name: "The Edge（2015）：把研究支持做成\"一楼门面\"",
      nameEn: "The Edge · 2015",
      year: "2015",
      stats: [{ k: "改造工期", v: "8 个月" }, { k: "配置", v: "开放实验室 + 项目室" }],
      facts: "Bostock 一层整体改造为研究共享空间：灵活座椅与可移动白板墙、可预约项目室、大型工作坊间、数据可视化实验室。开放日一周后，学生已自发填满白板墙与各实验室。",
      insight: "与耶鲁 Marx、普林斯顿 Lewis 同属\"数据工坊\"代际，但杜克把它放在主馆群一层最显眼的位置——研究支持服务从后台办公室走向\"店面\"。"
    },
    {
      name: "Lilly 图书馆（2024–2027）：东校区新生馆的百年大修",
      nameEn: "Lilly Library Renovation · 2024–2027",
      year: "2024–2027",
      stats: [{ k: "估算造价", v: "$64M" }, { k: "面积", v: "31,500 → 56,300 SF" }, { k: "座位", v: "444 → 635" }, { k: "研习室", v: "新增 16 间" }],
      facts: "1927 年建成，服务约 1,700 名住东校区的一年级新生。募资两轮累计 2,740 万美元；造价因疫情与供应链从 3,800 万公开调整到 6,400 万；2024 年 5 月闭馆，2027 年 1 月开放恰逢建馆百年。三间历史阅览室保留原窗按哥特原貌修复，约 15 万册藏书移入地下密集书架。项目经理：\"只要结构安全，我们尽可能保留原物。能说'这是原装的'，本身就是一种魔力。\"",
      insight: "档案库迄今最完整的\"在建项目\"样本：募资两轮、造价公开调整、延期公开解释、闭馆服务不中断。"
    }
  ],
  learningSpaces: "主馆群\"三层供给\"：Perkins 阅览室长桌、Bostock 研习卡座、The Edge 项目室与开放协作区。研讨室是硬通货（FY2025 预约 25,644 次）。深夜供给经历\"收缩—反馈—恢复\"：2024 年按清点数据缩短开放（凌晨一两点整层仅 6 人），被 2026 年用户调查否决后，以\"试点＋评估\"恢复至凌晨 3 点、刷卡进入。配置哲学：\"把最受欢迎的空间类型数据化之后再投资\"。",
  serviceModel: "\"愿意把账算给用户看\"：造价估算、为什么涨价、为什么缩短开放时间、依据什么数据恢复——全部公开，这种透明度本身就是用户关系资产。LSC 为北卡三角区四校共享并以 30 年协议固化，还为公共图书馆免费代存。纸质流通坍缩（年流通率不足 0.6%）后不撤书，用后台库承接、把面积让给座位与教室。",
  trends: [
    { tid: "offsite-storage", title: "后台密集库走向区域联盟化", type: "fact", note: "LSC 从杜克自有设施发展为北卡三角区四校共享基础设施，UNC 以 30 年长约购买容量——\"谁的库房\"变成\"谁的协议\"。" },
    { tid: "special-collections", title: "特藏馆 = 教学空间 + 活动场馆 + 募捐载体", type: "fact", note: "Rubenstein 教室与展览空间翻倍、成为热门活动场地；特藏空间的使用时长与功能密度都在上升。" },
    { tid: "historic-renewal", title: "百年馆舍批量进入大修周期，造价与工期风险前置暴露", type: "fact", note: "Lilly（1927）2027 年百年；耶鲁 Sterling（1930）已启动 2031 百年评估——1920–30 年代馆舍的系统性更新高峰已到，造价公开透明将成为新的沟通标准。" },
    { tid: "data-driven-ops", title: "运营管理全面数据化", type: "fact", note: "座位清点决定开放时间、用户调查决定是否恢复、研讨室预约量进入官方快数——空间运营转向\"测量—调整—再测量\"循环。" },
    { tid: "offsite-storage", title: "纸质流通坍缩后的空间再分配成为常态议题", type: "fact", note: "\"藏\"与\"用\"的空间分离不可逆；流通率将持续走低。" }
  ],
  business: [
    "\"先建后台库、再动主馆\"是十五年滚动改造的地基：对国内高校，密集书库不是配套，是改造项目的前置条件。",
    "分期滚动改造＋每期绑定捐赠标的，是资金门槛最低的范式：把大改造拆成\"可命名、可挂牌、可剪彩\"的分期产品（Duke Forward 图书馆线目标 4,500 万、实募超 6,300 万，完成率 140%）。",
    "造价与延期的公开沟通值得整套搬用：公开解释反而维护信任。",
    "24 小时空间之争的解法是\"实测数据＋用户调查\"双证据：不争论，先数人，再试点。",
    "家具机会在\"新旧双轨\"：新空间要灵活组合家具与可移动白板，历史房间走\"原装保留＋升级\"路线，后台是密集存储系统——三条产品线在一所学校里同时存在。",
    "可复制性边界：私立大学募资资金结构与捐赠文化与国内公立高校财政体制不可直接类比。"
  ],
  limits: [
    "Bostock 与 von der Heyden Pavilion 造价无公开口径。",
    "Lilly 6,400 万美元为官方现行估算，非结算数。",
    "Bostock 座位 517、卡座 87、电脑 96 台仅见维基口径。",
    "开放时间收缩曾引发学生反对，收缩决策被用户数据部分推翻。"
  ],
  sources: [
    { label: "Duke Libraries – Reports & Quick Facts（FY2025）", url: "library.duke.edu/about/reports-quickfacts" },
    { label: "Duke Libraries Magazine – Timeline of the Perkins Project（2012-01）", url: "blogs.library.duke.edu/magazine/2012/01/12/timeline-of-the-perkins-project" },
    { label: "Duke Today – LSC 开馆（2001-04）", url: "today.duke.edu/2001/04/library406.html" },
    { label: "Shepley Bulfinch – Rubenstein 特藏馆项目页", url: "shepleybulfinch.com/projects/duke-university-david-m-rubenstein-rare-book-manuscript-library" },
    { label: "The Lilly Project – FAQ（造价、面积、座位）", url: "blogs.library.duke.edu/lilly-project/faq/" },
    { label: "Duke Libraries – You Asked. We Listened.（2026-03，深夜开放恢复）", url: "blogs.library.duke.edu/blog/2026/03/24/you-asked-we-listened-were-staying-open-later/" },
    { label: "Duke Chronicle – Lilly 改造内景（2026-05）", url: "dukechronicle.com/article/duke-university-lilly-library-renovation-update-look-inside-delay-reopening-construction-cafe-reading-books-20260512" },
    { label: "EDUCAUSE – Duke Perkins Library（Learning Spaces 第 17 章）", url: "educause.edu/research-and-publications/books/learning-spaces/chapter-17-duke-university-perkins-library" }
  ]
},
{
  id: "jhu",
  name: "约翰斯·霍普金斯大学",
  nameEn: "Johns Hopkins University",
  founded: 1876,
  country: "美国",
  region: "美洲",
  state: "马里兰州 · 巴尔的摩",
  reportId: "LR-20260919-01",
  reportDate: "2026-09-19",
  tagline: "先埋下去、再补位、最后重建",
  mainLine: "一个跨越 60 年的\"形态债务\"故事：1964 年为保护历史天际线把旗舰馆埋入地下，2012 年用 BLC 补位，2024–2027 年再以 1.3 亿美元把光重新引入地下 50 英尺。",
  flagship: { name: "MSE 现代化改造（2024–2027）", note: "1.3 亿美元、全闭馆 31 个月而服务零中断——\"图书馆没有关门，关门的只是一栋楼\"。家具选型做成公开市集，让学生试坐投票。" },
  overview: {
    intro: "校方自我定位为\"美国第一所研究型大学\"。空间史是\"地标保护驱动形态＋学生共创驱动功能\"的范式：两次大动作之间隔着整整 60 年。",
    stats: [
      { k: "谢里登馆群", v: "6 个馆", s: "旗舰 MSE、BLC、Hutzler、Garrett、Peabody、Frary" },
      { k: "藏书", v: "370 万+ 册", s: "印刷与电子期刊 17.1 万+ 种、电子书 90 万+ 种" },
      { k: "MSE 面积", v: "182,000 SF", s: "六层、主体位于地下，最底层约在地表以下 50 英尺" },
      { k: "BLC", v: "2012 开放", s: "42,000 SF、500+ 座位、16 间小组研习室" }
    ]
  },
  projects: [
    {
      name: "Milton S. Eisenhower 图书馆（1964）：为了不压住一栋老宅，把图书馆埋进地下",
      nameEn: "MSE Library · 1964",
      year: "1964 / 改造 2024–2027",
      stats: [{ k: "当年造价", v: "$4.5M" }, { k: "改造估算", v: "$130M" }, { k: "闭馆", v: "31 个月" }, { k: "深度", v: "地下 50 英尺" }],
      facts: "建筑师 Wrenn, Lewis, and Jencks 提出把图书馆主要建于地下——若建于地面，体量将压过 1805 年建成的联邦风格建筑 Homewood House。地下化的代价随后显现：1979 年空间再次紧张，学习区被改为书架，[D 层长期被学生称为\"停尸房\"\"地牢\"](https://hub.jhu.edu/2026/09/02/eisenhower-library-renovations-d-level-sunlight/)。2024–2027 现代化改造：利用更换机电的竖向井道改建玻璃\"大楼梯\"+ 可行走天窗，把自然光引入地下 50 英尺；D 层换装活动密集书架；C 层新设双层挑高大阅览室；特藏部迁至核心位置。目标 LEED Gold、全电系统、net-zero ready。",
      insight: "\"为天际线让路\"的极端样本：建筑的形态决策会以\"债务\"形式留给运营者和下一代使用者——2026 年改造工程正是对 1964 年那次取舍的延时偿还。\"井道变楼梯、楼梯顶天窗\"的三合一动作对国内地下空间改造极有参照价值。"
    },
    {
      name: "Brody Learning Commons（2012）：学生投票投出来的学习共享空间",
      nameEn: "Brody Learning Commons · 2012",
      year: "2012",
      stats: [{ k: "造价", v: "$30M（全私人捐赠）" }, { k: "面积", v: "42,000 SF" }, { k: "座位", v: "500+" }, { k: "研习室", v: "16 间" }],
      facts: "2009 年起对全校问卷，学生诉求依次为：自然光、一间真正的阅览室、多样且舒适的座椅、更多咖啡、小组学习空间和\"能用的网络\"。小组研习室的玻璃房设计来自学生设计比赛获奖的本科生提案。3,000 万美元全部私人捐赠、以卸任校长夫妇命名。LEED Gold（Homewood 校区首个），楼梯复用拆改下来的旧大理石。馆长：\"我们从第一天就知道，应该由学生来驱动这个项目。\"",
      insight: "把\"学习共享空间\"做成对老馆的精确补位：老馆失去什么（座位、自然光、24 小时开放），新馆就补什么。学生共创是立项方法论。"
    },
    {
      name: "George Peabody 图书馆天窗改造（2015–2018）：\"最美图书馆\"的可逆修缮",
      nameEn: "Peabody Library Skylight · 2015–2018",
      year: "2015–2018",
      stats: [{ k: "合同额", v: "$3.5M" }, { k: "天窗", v: "25×75 英尺" }, { k: "原则", v: "可逆" }],
      facts: "\"书的教堂\"：五层装饰铸铁回廊升至 61 英尺天窗，1878 年原装 Bartlett-Robbins 铸铁构件原物保留。早年天窗曾被换成聚碳酸酯板，板材在大风中掀起失效、渗水威胁 30 万册馆藏。修缮以\"可逆\"为原则：新钢桁架以夹持方式加固 19 世纪铸铁桁架，不钻孔、不焊接；新夹层玻璃阻隔 99% 紫外线；全程图书馆保持开放、周末照常承办活动。2019 年获 Baltimore Heritage 保护项目奖。",
      insight: "老馆修缮的技术标杆：结构补强可逆、材料升级、运营不中断三件事同时成立——\"可逆\"原则对家具同样成立。"
    },
    {
      name: "Hutzler 阅览室（2010）：Gilman Hall 大修里的\"图书馆飞地\"",
      nameEn: "Hutzler Reading Room · 2010",
      year: "2010",
      stats: [{ k: "Gilman 大修", v: "$73M · 三年" }, { k: "彩窗", v: "19 扇（1930）" }],
      facts: "Gilman Hall（1915 年落成）2007–2010 整体大修，Hutzler 阅览室随楼闭馆两年后重开，彩窗修复、加装空调。2008 年闭馆时学生曾与馆员一起为它办告别派对。MSE 闭馆期间（2024–2027），它恢复承担分流功能。",
      insight: "历史阅览室是图书馆系统的\"战略预备队\"：平时是情感地标，旗舰馆闭馆时立刻变成正式替补空间——14 年前的大修投入兑现了第二次价值。"
    }
  ],
  learningSpaces: "\"座位是算出来的，家具是投出来的\"：BLC 补的是 MSE 被书库吃掉的具体座位数；MSE 新馆家具由 2025 年 3 月的\"家具市集（Furniture Fair）\"让学生现场试坐投票——偏好集中在带靠背支撑的高背软包休闲椅。\"自然光\"是跨越 2009 与 2026 两轮用户研究的第一诉求，最终成为 1.3 亿美元改造的建筑主线。闭馆期间\"五点供给\"：BLC + MSE 附楼 + Hutzler + Hodson Hall + 宿舍楼学习家具。",
  serviceModel: "\"图书馆没有关门，关门的只是一栋楼\"：全闭馆但服务零中断——书刊校外存储 + 在线申请 + 增加配送班次 + 校内取书点；替代空间命名（MSE Annex）、参考书就近迁移、宿舍楼补家具、学生会反馈通道，四件套齐全。Welch 医学图书馆是另一种\"轻空间\"样本：馆员迁出实体馆、转为分布式嵌入式服务。",
  trends: [
    { tid: "historic-renewal", title: "1960 年代地下/半地下馆舍批量进入\"采光与机电双重更新\"周期", type: "fact", note: "MSE 60 年后首次全面改造，核心是把光引入地下 50 英尺；美国高校 20 世纪中期馆舍的系统性更新高峰仍在持续，\"采光债\"成为普遍议题。" },
    { tid: "data-driven-ops", title: "家具选型从采购环节变成公开的用户研究环节", type: "fact", note: "家具市集让学生对候选桌椅现场投票，校方媒体与学生媒体同步报道——家具清单的诞生过程本身成为项目沟通资产，供应商样品即教具。" },
    { tid: "renovation-decant", title: "旗舰馆\"全闭馆＋服务不闭馆\"成为可接受的改造模式", type: "fact", note: "与耶鲁\"逐房间滚动\"、杜克\"新楼先开再修旧楼\"并列的第三种施工组织范式，前提是有替代空间矩阵。" },
    { tid: "special-collections", title: "特藏从边缘库位走向主馆核心层", type: "fact", note: "MSE 改造把特藏部迁到核心层并配教学与展览空间——特藏教学化趋势在空间分配上兑现（与杜克 Rubenstein、耶鲁 Beinecke 同向）。" },
    { title: "可持续与本地责任条款前置进图书馆改造", type: "fact", note: "LEED Gold、全电系统、net-zero ready、20% 少数族裔/女性企业发包、13% 本地企业发包全部写进公开口径——公共叙事从\"空间与藏书\"扩展到\"碳与社区\"。" }
  ],
  business: [
    "\"学生共创\"要落到可见的物件上才有效：与其汇报\"征求了师生意见\"，不如做一次家具市集——既是用户研究，又是采购前的公开背书。",
    "全闭馆改造敢不敢做，取决于服务连续性方案厚不厚：附楼＋分流阅览室＋研究生专座＋宿舍家具＋校外库配送，外加一句可传播的口号；即便如此仍遭学生会学费减免决议施压——方案之外还要预留\"补偿性沟通\"预算。",
    "地下/无窗空间的\"采光债\"是国内大量老馆的共同问题：借机电更新的结构切口，一次性偿还形态债务，同时用密集书架补回被占掉的藏书面积。",
    "历史空间修缮讲\"可逆\"，运营讲\"不关门\"——每个细节都能直接转成对文物建筑类客户的技术语言；历史建筑的修复投入应按\"全生命周期资产\"算账。",
    "家具机会在三条产品线：地下密集存储系统、共创选型的学习家具（学生投票已给出偏好排序）、历史建筑内的可逆式新家具与原装修复双轨。",
    "可复制性边界：捐赠驱动的资金结构与捐赠文化与国内公立高校财政拨款体制不可直接类比。"
  ],
  limits: [
    "BLC 命名捐赠金额、MSE 募资明细：已检索无公开口径。",
    "谢里登图书馆现行运营预算与员工数：官方最近口径为 2012 年（3,240 万美元）。",
    "MSE 改造后座位数目标：官方未公布。",
    "全闭馆引发学生反弹：学生会发起学费减免决议；D 层 60 年口碑负债（\"地牢\"绰号）。"
  ],
  sources: [
    { label: "JHU Hub – Transformation planned for MSE（2024-04，$130M）", url: "hub.jhu.edu/2024/04/02/mse-library-renovations/" },
    { label: "JHU Hub – D 层不再是地牢：阳光引入地下 50 英尺（2026-09）", url: "hub.jhu.edu/2026/09/02/eisenhower-library-renovations-d-level-sunlight/" },
    { label: "Skanska – MSE 现代化施工合同 $104M（2024-12）", url: "prnewswire.com/news-releases/skanska-to-modernize-johns-hopkins-universitys-flagship-library-in-maryland-usa-worth-usd-104-m-about-sek-1-1-billion-302338194.html" },
    { label: "JHU Gazette – An uncommon library（2012-09，BLC 与学生共创）", url: "hub.jhu.edu/gazette/2012/september/an-uncommon-library/" },
    { label: "Sheridan Libraries – 家具市集（2025-04）", url: "library.jhu.edu/news/2025/04/sheridan-libraries-hosts-furniture-fair-and-offers-insights-on-library-renovation/" },
    { label: "JHU Civil Engineering – Peabody 天窗修缮（可逆原则）", url: "engineering.jhu.edu/case/news/letting-light-shine-revamp-george-peabody-library-skylight/" },
    { label: "Traditional Building – Peabody 天窗项目（2019-05）", url: "traditionalbuilding.com/projects/george-peabody-library-skylight" },
    { label: "JHU News-Letter – 学生对 MSE 闭馆的反弹（2024-10）", url: "jhunewsletter.com/article/2024/10/n-l-survey-highlights-student-backlash-to-the-closure-of-mse" }
  ]
},
{
  id: "uchicago",
  name: "芝加哥大学",
  nameEn: "University of Chicago",
  founded: 1890,
  country: "美国",
  region: "美洲",
  state: "伊利诺伊州 · 芝加哥",
  reportId: "LR-20260920-01",
  reportDate: "2026-09-20",
  tagline: "馆藏完整性：用自动化密度换土地",
  mainLine: "一条\"书不出校园\"的逆流之线：2005 年校董会决定把全部印本馆藏留在校园内，答案不是缩小馆藏，而是 2011 年在主馆旁挖出一个 50 英尺深的机器人书库，把 350 万册书塞进常规书库七分之一的体积里。",
  flagship: { name: "曼苏托图书馆（2011）", note: "全美唯一全地下 ASRS、北美最大自动化高密度图书馆之一：1/7 占地、平均 3 分钟取书、2,500 万命名捐赠；自动化系统公开口径约 1,000 万美元，项目总造价未见公开来源。" },
  overview: {
    intro: "美国第十大学术图书馆（校方 2022–23 口径，1,320 万册含电子；ALA 早期统计为 1,101 万册、全美第 13——口径与年份不同，引用时须注明）。六馆系统呈\"一巨、一密、一专、三小\"格局，与哈佛 70 余馆的联邦制相反，芝大走的是持续集中化路线——从 1970 年合并 12 个院系馆开始就没停过。",
    stats: [
      { k: "总藏书", v: "1,320 万册", s: "校方口径（含电子）；ALA 旧口径 1,101 万册（全美第 13），排名随口径变化" },
      { k: "数字馆藏", v: "304 TB", s: "原生数字档案与数字化馆藏；档案手稿 73,451 直线英尺" },
      { k: "雷根斯坦", v: "110 万人次/年", s: "FY2022–23 入馆；577,085 平方英尺" },
      { k: "电子文献传递", v: "740 万篇次", s: "FY2022–23 口径，量级疑似电子资源使用/检索量，待与馆方核实；年印本流通 103,940 册" }
    ]
  },
  projects: [
    {
      name: "曼苏托图书馆（2011）：把书埋进地下 50 英尺，把阅览室举到玻璃穹顶下",
      nameEn: "Joe & Rika Mansueto Library · Helmut Jahn · 2011",
      year: "2011",
      stats: [{ k: "总造价", v: "$81M" }, { k: "容量", v: "350 万册" }, { k: "占地比", v: "1/7" }, { k: "取书", v: "约 3 分钟" }],
      facts: "2005 年校董会批准\"印本馆藏全部留在校园内\"的总方针（彼时哈佛、耶鲁、哥大、布朗都在把书迁往校外）。Helmut Jahn 中标关键在于把存储整体放入地下：50 英尺深恒温恒湿库穴，5 台 50 英尺高机器人吊车管理 24,000 个金属书箱；地上为椭圆玻璃穹顶，大阅览室 180 座全天自然光。校方公告原文：\"当哈佛、耶鲁、哥伦比亚、布朗等校都已把书迁出校园，曼苏托图书馆将确保书籍留在大学校园的中心。\"2019 年即实现 20% 节能。2024 年披露：容量启用 13 年后已逼近极限，评估剔旧与再建一座高密度库。",
      insight: "把\"书 vs 地\"的矛盾转成\"书 vs 机器人\"的工程问题；八年从问题到交付，每一环都有公开记录。最有教育意义的是时间表，以及\"装满之后怎么办\"——提前十年启动下一轮评估。"
    },
    {
      name: "雷根斯坦图书馆（1970）：粗野主义巨构与\"书在西、人在中、研究在东\"",
      nameEn: "Joseph Regenstein Library · SOM (Walter Netsch) · 1970",
      year: "1970 / 重组 1998",
      stats: [{ k: "总造价", v: "$20.75M" }, { k: "面积", v: "577,085 SF" }, { k: "容量扩容", v: "+50%（1998）" }, { k: "模数", v: "27 英尺见方" }],
      facts: "SOM 的 Walter Netsch 设计，钢筋混凝土 brutalist 巨构（非石灰岩外墙）；把全校总馆与 12 个院系图书馆的 160 余万册藏书合并进同一排架序列——\"图书馆史上最大的单一统一馆藏\"。1998 年 B 层固定架换活动密集书架，容量扩容超 50%；2015 年 A 层改互动学习中心（72 英尺玻璃墙朝向花园，\"改造后立刻挤满了学生\"）。",
      insight: "大进深、少隔断的\"仓库式\"楼层剖面有极强的再配置韧性——56 年装下全部功能更替；\"容量不够\"不一定是缺地，也可能是缺密度：一次书架层级的改造换来 50% 增量，推迟新建十余年。"
    },
    {
      name: "哈珀纪念图书馆（1912）：第一座\"够大\"的图书馆，与洛克菲勒的 3:1 配捐",
      nameEn: "Harper Memorial Library · 1912",
      year: "1912 / 2009 改造",
      stats: [{ k: "配捐", v: "洛克菲勒 3:1" }, { k: "改造", v: "2009 → 凯西中心 2012" }, { k: "命名捐赠", v: "约 $17M" }],
      facts: "洛克菲勒 3:1 挑战配捐（每筹 1 美元配 3 美元）。1970 年藏书迁出后功能让位，2009 年顶层改造为 24 小时学习空间，2012 年校友凯西认捐约 1,700 万美元命名为卡西学习中心（Arley D. Cathey）。注意：24 小时承诺没有守住——如今仅考试周开放。",
      insight: "\"图书馆变成非图书馆\"的完整样本：1912 年全校中枢 → 1970 年藏书抽走 → 2009 年以\"无书的学习空间\"回归学生生活。"
    },
    {
      name: "克里勒图书馆（1984／2017–2018）：科学馆的两轮\"空间换功能\"",
      nameEn: "John Crerar Library · 1984 / 2017–2018",
      year: "1984 / 2017–2018",
      stats: [{ k: "造价", v: "约 $22M" }, { k: "面积", v: "约 167,500 GSF" }, { k: "再造", v: "顶层两层给 CS 系" }],
      facts: "源自实业家 John Crerar 1889 年去世遗赠、1894 年组建的免费公共科学图书馆，1981 年以并入芝大为条件获得新馆（面积取设计方 Payette 口径）。2017–2018 年顶层两层改造为计算机科学系与计算研究所空间，留馆藏书压入地下密集架、迁出藏书改为申请调阅。",
      insight: "\"图书馆建筑被大学重新分配\"的样本——前提曼苏托在 6 年前建成：没有后台密度，前台让渡就不成立。"
    }
  ],
  learningSpaces: "\"主馆即校园客厅\"：雷根斯坦 A 层互动学习中心（高吧台、休闲椅、会议桌、白板、72 英尺玻璃墙）+ 17 间可预约研习室 + 62 个日间储物柜（14 个带充电）；曼苏托大阅览室 180 座自然光穹顶；凯西学习中心 2 万平方英尺（主阅览室安静自习＋北阅览室小组协作）。但 24/7 供给正在收缩：2009 年高调开出的 24 小时空间，如今收缩到考试周限定——雷根斯坦午夜闭馆（期末周延至凌晨 4 点），与 JHU 以 BLC 补 24/7 的方向相反。",
  serviceModel: "服务叙事始终围绕\"馆藏的可及性\"：不迁走书（2005 方针）、分钟级取书（ASRS）、数字化传递（740 万篇次）与特藏教学化（SCRC 扩大研讨教室）是同一条逻辑的四种兑现方式。数字学术基础设施进入\"基金会＋校方配捐\"共建模式（NEH 100 万美元＋校方再募 400 万美元）。",
  trends: [
    { tid: "offsite-storage", title: "\"校内高密度自动化存储\"正在从小众选择变成可评估的常规选项", type: "fact", note: "第一代 ASRS 已进入\"扩容周期\"——对国内有土地约束的老校区，这是比异地库房更贴近\"馆藏即身份\"叙事的路线。" },
    { tid: "historic-renewal", title: "图书馆建筑正在被\"适应性再利用\"重新定义", type: "fact", note: "克里勒让位计算机系、哈珀变学习空间、雷根斯坦 A 层变互动学习中心——芝大没有拆过一座图书馆，但每一座的功能都被重新分配过；资产价值评估从\"藏书容器\"转向\"校园不动产\"。" },
    { tid: "247-spaces", title: "24/7 供给在美国高校呈收缩态势", type: "fact", note: "24/7 正从\"标配叙事\"变成\"需要持续辩护的成本项\"——数据化清点与公开沟通将成为下一阶段的标配动作。" },
    { tid: "data-driven-ops", title: "数字学术基础设施进入「基金会资助＋校方另行募集」共建模式", type: "fact", note: "图书馆的下一笔大钱不花在空间上，而花在数据结构与 AI 就绪的馆藏上；空间投资与数字投资开始分账叙事。" },
    { tid: "special-collections", title: "特藏空间的\"荣誉命名\"成为零成本捐赠产品", type: "fact", note: "SCRC 以 90 岁前校长之名命名（2020），不涉大额捐赠却获得全校传播——与曼苏托 2,500 万美元的金钱命名构成命名产品价格带的两端。" }
  ],
  business: [
    "\"书不出校园\"是一个可以反向使用的决策模板：先问\"这所学校把馆藏当包袱还是当资产\"，再决定推撤书方案还是密度方案——两种叙事都有顶级名校背书。",
    "高密度自动化书库是\"土地约束\"的终极解法，但容量账要一次算足：把\"装满之后怎么办\"写进方案，提前十年启动下一轮评估。",
    "老馆的价值在\"骨架韧性\"，不在原装功能：评估老馆改造时，结构柱网、层高、进深比当年功能重要——可直接用于国内 1980–90 年代馆舍的改造立项语言。",
    "24/7 空间是一种会\"违约\"的产品，要把退出机制说清楚：承诺前先算安保与能耗账；若必须收缩，要有公开的\"实测→收缩→回应\"闭环。",
    "命名捐赠的空间产品线清晰可售：曼苏托（新馆）＋凯西（学习空间）＋雷根斯坦（主馆）＋Gray（特藏）——四档命名产品对应四类空间，给国内客户的捐赠叙事可以直接按这个货架陈列。",
    "可复制性边界：捐赠驱动与联邦/基金会资助的资金结构与国内公立高校财政拨款体制不可直接类比。"
  ],
  limits: [
    "图书馆现行运营预算与员工数：已检索无公开口径。",
    "克里勒 2017–2018 改造造价、雷根斯坦 1998 重组造价：无公开口径。",
    "曼苏托 2,500 万捐赠之外的资金构成未披露。",
    "24/7 承诺收缩引发学生媒体连年追问，唯一替代是校外 24 小时快餐店。"
  ],
  sources: [
    { label: "UChicago News – 曼苏托 2,500 万捐赠（2008-05）", url: "news.uchicago.edu/story/university-chicago-receives-25-million-gift-morningstar-ceo-support-new-library-building" },
    { label: "Inside UChicago – 走进曼苏托地下书库（2024-10）", url: "intranet.uchicago.edu/news-and-events/news/2024/10/a-look-underneath-mansueto-uchicagos-famous-robotic-library" },
    { label: "UChicago Library News – Revisiting Regenstein at 50（2021-02）", url: "lib.uchicago.edu/about/news/innovation-grand-scale-revisiting-regenstein-library-50/" },
    { label: "UChicago News – Harper Memorial Library: The First Century", url: "news.uchicago.edu/story/harper-memorial-library-first-century" },
    { label: "UChicago News – 克里勒改建为计算与数据科学枢纽（2017）", url: "news.uchicago.edu/story/university-create-computer-and-data-science-hub-john-crerar-library" },
    { label: "Architecture at UChicago – Mansueto Library（1/7 占地、ASRS）", url: "architecture.uchicago.edu/locations/joe_and_rika_mansueto_library/" },
    { label: "Retrofit Chicago – Mansueto 节能档案（20% 节能、3 分钟取书）", url: "chicago.gov/content/dam/city/sites/retrofit-chicago-2/pastparticipants/UChicagoMansueto.pdf" },
    { label: "The Chicago Maroon – 24/7 学习空间之困", url: "chicagomaroon.com/45089/news/beyond-midnight-the-case-for-24-7-study-spaces-at-uchicago" }
  ]
},
{
  id: "upenn",
  name: "宾夕法尼亚大学",
  nameEn: "University of Pennsylvania",
  founded: 1740,
  country: "美国",
  region: "美洲",
  state: "宾夕法尼亚州 · 费城",
  reportId: "LR-20260924-01",
  reportDate: "2026-09-24",
  tagline: "一座主馆的六十年垂直更新",
  mainLine: "没有新建过一座旗舰馆：1962 年的 Van Pelt 主馆以约十年为周期逐层再分配功能——地下 24/7、一层安静旗舰与协作共享、高层特藏与全球收藏；用一座自建校外高密度书库（LIBRA）承接藏书，用两轮大额修缮把 1891 年的国家历史地标 Fisher 馆保持在一线使用状态。",
  flagship: { name: "Moelis 家族大阅览室（2017）", note: "5,500 平方英尺期刊库区改造，校方亲口承认的\"安静回归\"：20 英尺高天花板、Claudy Jongstra 19×49 英尺羊毛声学壁画、\"针落可闻\"的声学目标，获 IIDA 双奖与 AIA Philadelphia 优异奖。" },
  overview: {
    intro: "19 个实体图书馆＋数字图书馆（校方口径）。[校方 FACTS 2017](https://www.library.upenn.edu/sites/default/files/docs/publications/FACTS2017mar2018.pdf)：全系统藏书 6,513,215 卷、年入馆 1,485,787 人次、座位 4,113 个、在编员工 338 人；印本与电子卷合计逾 837 万。系统中枢 Van Pelt 年访客 95.2 万。现任馆长 Constantia Constantinou（H. Carton Rogers III Vice Provost and Director，2023 年口径）。经费采用 RCM 模式由 12 个学院分摊。",
    stats: [
      { k: "总藏书", v: "651 万册", s: "FACTS 2017 校方口径；印本+电子卷合计 837.5 万册" },
      { k: "年入馆", v: "148.6 万人次", s: "FACTS 2017 全系统；主馆 Van Pelt 95.2 万" },
      { k: "系统规模", v: "19 馆＋数字图书馆", s: "另含校外高密度书库 LIBRA（约 300 万册容量）" },
      { k: "馆内活动", v: "18,504 场/年", s: "2017 年教学、学习与协作活动合计" }
    ]
  },
  projects: [
    {
      name: "Moelis 家族大阅览室（2017）：校方亲口承认的\"安静回归\"",
      nameEn: "Moelis Family Grand Reading Room · Gensler · 2017",
      year: "2017",
      stats: [{ k: "面积", v: "5,500 SF" }, { k: "天花板", v: "20 英尺" }, { k: "壁画", v: "19×49 英尺" }, { k: "奖项", v: "IIDA 双奖等" }],
      facts: "一层东端原期刊库区改造，Gensler 设计。[校方 Almanac 立项声明](https://almanac.upenn.edu/volume-64-number-7)：\"回应了近年偏向协作与交流的改造之后，学生对安静反思空间的渴求\"——全球名校官方口径中少见的自我修正。核心是荷兰艺术家 Claudy Jongstra 手工羊毛丝绸三联壁画《Fields of Transformation》（兼作吸声体）；核桃木板条吊顶藏吸音材料，团队以\"针落可闻\"为声学目标；3500K LED＋日光感应，桌面 50 英尺烛光，桌灯与家具厂商协同定制。",
      insight: "安静空间的品质不靠面积堆叠，靠声学、照明与艺术的一体化设计密度。5,500 平方英尺、一个改造楼层、一枚捐赠，就造出一个旗舰级安静空间——这是\"不建新楼也能造旗舰\"的最小面积样本。"
    },
    {
      name: "Van Pelt-Dietrich 主馆（1962）：六十年的垂直自我更新",
      nameEn: "Van Pelt-Dietrich Library Center · H2L2 · 1962 / 1990 / 1995–98 / 2026–27",
      year: "1962 → 持续更新",
      stats: [{ k: "面积", v: "204,494 SF" }, { k: "年访客", v: "95.2 万" }, { k: "24/7", v: "1990 至今" }, { k: "CGC 决议", v: "$12.5M（2026）" }],
      facts: "1962 年现代主义砖楼，1966 年加 Dietrich 翼。1990 年地下增设 Goldstein 本科生学习中心（学年周日至周五 24/7，美国最早的全天候学习空间之一）；1995–98 整体大翻新；2006 年一层西翼建 Weigle；2013 年六楼变 Kislak 特藏中心。2022–24 年书库多阶段重整（LC A–L 入三层、M–Z 入四层、低流通迁 LIBRA）。当前在建：五楼整体改造为 Zilberman 全球收藏中心（2026 夏–2027 初秋，1,250 万美元资本决议、约 3/4 来自捐赠）。",
      insight: "更新逻辑是垂直分层而非水平扩张：地下＝通宵本科、一层＝安静旗舰＋协作共享、中层＝开架、高层＝特藏与全球收藏。对国内 1990–2010 年代存量馆舍，这是最直接的剖面样本：不需要新楼，需要的是一张逐层的\"功能再分配时刻表\"。"
    },
    {
      name: "Fisher Fine Arts 图书馆（1891／1991／2026）：国家历史地标的两轮大额修缮",
      nameEn: "Anne & Jerome Fisher Fine Arts Library · Frank Furness · NHL 1985",
      year: "1891 / 修复 1986–91 / 再修 2025–26",
      stats: [{ k: "首次修复", v: "$16.5M / 6 年" }, { k: "本轮修缮", v: "$17.8M / 20 个月" }, { k: "面积", v: "116,000 SF" }],
      facts: "Frank Furness 设计（与 Dewey 磋商馆藏流程），1891 年启用，Penn 校主馆至 1962 年；玻璃顶铁架书库按 Furness 构想可\"一跨一跨\"生长。1950 年代曾面临拆建讨论，赖特称\"这是艺术家的作品\"；1985 年列国家历史地标；1986–91 年 Venturi, Rauch and Scott Brown 六年修复（Fisher 夫妇冠名），1991 年重新命名并获 AIA 等全国奖项；2025 年起 1,780 万美元外立面修缮，开放中施工并设噪音上报机制，预计 2026 年底完工。",
      insight: "地标建筑的投资逻辑是\"保存即使命\"——35 年间两轮大额投入都不求改功能、只求保状态，与常见\"借机全面翻新\"的改造口径形成对照；Furness 的可生长书库则是 19 世纪的模数化弹性设计样本。"
    },
    {
      name: "Kislak 特藏中心（2013）：把特藏\"上浮\"到顶层",
      nameEn: "Kislak Center for Special Collections · 2013",
      year: "2013",
      stats: [{ k: "面积", v: "27,000 SF" }, { k: "捐赠", v: "$5.5M（Kislak 家族）" }, { k: "位置", v: "Van Pelt 六楼" }],
      facts: "六楼整体改造：展览画廊、Furness Shakespeare Library、玻璃亭阅览区、Moelis Reading Terrace、Kamin Gallery 与 Steven Miller 古籍保护实验室同层闭环；特藏书库扩至五楼；年度 Rosenbach 目录学讲座（美国历史最悠久的目录学讲座系列之一）在此举办。",
      insight: "最好的楼层、光与景观留给珍本与读者，楼下才是普通开架——\"修复—展览—教学\"在同一垂直动线里闭环，特藏从后台库房变成前台教学资产。"
    },
    {
      name: "Holman Biotech Commons（2021）：健康科学的\"设备型\"共享空间",
      nameEn: "Holman Biotech Commons · Voith & Mactavish · 2021",
      year: "2021",
      stats: [{ k: "投资", v: "$11.5M" }, { k: "学习室", v: "20 间" }, { k: "3D 打印", v: "9 台高端机" }, { k: "亮点", v: "Anatomage 解剖台" }],
      facts: "原 Biomedical Library 全面改造（后获 Holman 家族冠名），Voith & Mactavish 设计，2021-09-20 开放，私人捐赠＋医学院＋护理学院＋教务长办公室共同出资。Holman 阅览室（可移动家具兼作活动场地）、Design Thinking Studio、Mixed Reality Lab、全校首台 Anatomage 虚拟解剖台、Bollinger 数字制造实验室（9 台 3D 打印机＋激光切割＋海报绘图仪）。校长称其为\"真正的 21 世纪图书馆设施\"。",
      insight: "专业图书馆的换代方向：服务清单从\"文献＋座位\"扩成\"文献＋座位＋设备\"——虚拟解剖台、混合现实、数字制造直接进入图书馆服务目录，设备清单本身成为空间方案的一部分。"
    },
    {
      name: "LIBRA 校外高密度书库（2011）：自建\"哈佛模式\"的第三条路",
      nameEn: "LIBRA — Penn Libraries Research Annex · 2011 · Deptford, NJ",
      year: "2011",
      stats: [{ k: "启用", v: "2011.1" }, { k: "容量", v: "约 300 万册" }, { k: "货架", v: "30 英尺高架" }, { k: "送达", v: "1–2 个工作日" }],
      facts: "1998 年起用租库、140 万册装满且业主收回物业后，迁往新泽西 Deptford 自建 LIBRA。\"哈佛模式\"高密度存储：按尺寸上架、30 英尺高架、改装叉车取书，Franklin 目录申请、1–2 个工作日送达校园，提供免费数字化。2022–24 年承接 Van Pelt 书库重整外迁，2026 年夏微缩胶片整体迁入。ReCAP 联盟（哥大、哈佛、NYPL、普林斯顿、耶鲁）成员中没有宾大——自建校外库、不入联盟；但宾大保护策展人 Ian Bogus 曾于 2017 年出任 ReCAP 执行主任。",
      insight: "藏书外迁三条路线至此齐了：哈佛（自建＋模式输出）、芝大（坚决不外迁＋地下 ASRS）、宾大（自建校外库）。三条各有顶级背书，把三条的代价与承诺（次日达/分钟达/不外迁）摆在一起，把选择权交还校方。"
    }
  ],
  learningSpaces: "按\"噪声等级\"垂直分层：地下 Goldstein 学年 24/7（1990 年承诺至今 35 年+，口径为周日至周五）；一层东端 Moelis 旗舰安静空间＋西翼 Weigle 协作与媒体制作（12 个数据卡座＋10 间小组学习室，LibCal 预约）；Education Commons 落在体育场看台夹层（7,000 平方英尺、容量 180+、创客工坊）；五层 Class of 1937 研究生阅览室；六层 Kislak 特藏研读。全系统 4,113 座、677 台电脑。2026 秋起 Van Pelt 与 Weigle 开放 48 个可预约学习空间。",
  serviceModel: "服务叙事围绕\"速度\"与\"产品线\"：LIBRA 1–2 个工作日送达＋免费数字化；资源共享 Direct Borrowing 年借入 4.05 万件（Ivy 网络活跃）；自建 MetriDoc 数据平台，入馆、流通、空间预约与学生学习行为的分析进入官方 FACTS 手册。捐赠命名横跨全价位：Fisher 夫妇 1,650 万（全馆）、Moelis（阅览室）、Kislak 550 万（中心）、150 万/100 万（Forum/Gallery）、Holman（馆冠名）直至毕业班级冠名研讨室——\"改造—命名—传播—再改造\"的飞轮完整可鉴。",
  trends: [
    { title: "\"安静回归\"从批评走向立项：声学、照明、艺术一体化", type: "fact", note: "Moelis 是校方亲口承认的反向修正——不是媒体评论、不是学生请愿，而是立项声明。下一阶段获奖项目的共性将是\"安静空间的设计密度\"。" },
    { tid: "learning-commons", title: "学习空间嵌入非图书馆建筑成为常规操作", type: "fact", note: "Education Commons 落在体育场看台夹层、Weigle 嵌在主馆翼楼——校园空间统筹正在取代单体馆设计成为空间决策的上位框架。" },
    { tid: "offsite-storage", title: "书库外迁＋按尺寸高密度存储成为\"默认运营动作\"", type: "fact", note: "LIBRA（2011）之后，2022–24 年书库重整再迁、2026 年微缩胶片整体入库——外迁已从一次性工程变为持续运营动作。" },
    { tid: "special-collections", title: "特藏上浮与\"特藏教学化\"", type: "fact", note: "Kislak 把特藏、修复实验室、讲座与展览垂直叠放在顶层——保护能力本身也成为展示与服务的一部分。" },
    { tid: "special-collections", title: "全球与区域研究收藏获得实体空间入口", type: "fact", note: "Zilberman 全球收藏中心（1,500 万募资、区域研讨室＋论坛＋画廊）把\"馆藏多样性\"翻译成可教学、可办展的空间产品，并同步聘任首位非洲研究、俄罗斯与东欧研究专职馆员。" },
    { tid: "historic-renewal", title: "历史建筑的\"保存即使命\"：两轮大额修缮的耐心", type: "fact", note: "Fisher 馆 1991 年修复（1,650 万）与 2025–26 再修（1,780 万、开放中施工）——\"开放中修缮＋噪音上报机制\"值得国内近现代优秀建筑类老馆借鉴。" }
  ],
  business: [
    "\"安静回归\"最硬的官方话术在宾大：Moelis 立项声明（\"回应近年偏向协作的改造之后学生对安静空间的渴求\"）来自正在为协作空间花大钱的同一批决策者，分量高于任何媒体评论。",
    "\"垂直分区\"是单体馆改造最直接的剖面模板：地下 24/7、一层安静旗舰＋协作、中层开架、高层特藏——配上 Goldstein\"学年周日至周五\"的边界设计，顺势讲清 24/7 的成本控制。",
    "藏书外迁三条路线已经齐了，别再只讲一条：哈佛（自建库房）、芝大（地下 ASRS 不外迁）、宾大（自建校外库不入联盟）并列呈现，把选择权交还校方。",
    "\"设备型服务\"是专业馆方案的新增价值点：Anatomage 虚拟解剖台、混合现实、9 台 3D 打印机写进图书馆服务清单——设备清单与空间清单应当同页出现。",
    "命名捐赠有完整价格带可抄：馆—中心—厅—室—基金的货架结构（1,650 万到毕业班级级）可直接套用于国内校友捐赠方案。",
    "可复制性边界：RCM 分摊＋巨额捐赠基金的资金结构与国内公立高校财政拨款不可直接类比；FACTS 2017 之后无系统手册，引用数据须注明年份。"
  ],
  limits: [
    "FACTS 2017 为校方最后一份系统级手册，入馆/流通/座位为 2017 年口径。",
    "Van Pelt 1995–98 大翻新造价与设计方、Moelis 项目造价、Kislak 改造总造价：无公开口径。",
    "LIBRA 现藏量：仅获 2010 年迁入量（140 万册）与设计容量（约 300 万册）。",
    "馆长 2026 年在任情况、Goldstein 24/7 现行安排：引用前需以官网复核。"
  ],
  sources: [
    { label: "Penn Libraries SelectedFacts 2017（系统级数据手册）", url: "www.library.upenn.edu/sites/default/files/docs/publications/FACTS2017mar2018.pdf" },
    { label: "Architectural Record – Moelis 大阅览室 by Gensler（2017-11）", url: "architecturalrecord.com/articles/13061-moelis-family-grand-reading-room-by-gensler" },
    { label: "Penn Almanac – Moelis Family Grand Reading Room（立项声明原文）", url: "almanac.upenn.edu/volume-64-number-7" },
    { label: "Penn Libraries – 全球收藏中心改造立项（2023-08）", url: "www.library.upenn.edu/news/cgc-launch" },
    { label: "Penn Libraries – Books on the Move: Van Pelt 书库重整（2023）", url: "www.library.upenn.edu/news/books-move-changes-van-pelt" },
    { label: "The Daily Pennsylvanian – 校董会批准 $12.5M 改造（2026-05）", url: "thedp.com/article/2026/05/penn-board-of-trustees-libraries-van-pelt-veterinary-facility" },
    { label: "Penn Libraries – Biotech Commons 开放（2021-09）", url: "www.library.upenn.edu/news/penn-libraries-opens-newly" },
    { label: "Penn Almanac – LIBRA 新馆 announcement（2010-03）", url: "almanac.upenn.edu/archive/volumes/v56/n26/libra.html" },
    { label: "Penn Today – Fisher 馆外立面修缮（2025-05）", url: "penntoday.upenn.edu/news/exterior-restoration-landmark-Frank-Furness-fine-arts-library-historic-building" },
    { label: "Wikipedia – Van Pelt Library（沿革与 24/7 口径）", url: "en.wikipedia.org/wiki/Van_Pelt_Library" }
  ]
},
{
  id: "columbia",
  name: "哥伦比亚大学",
  nameEn: "Columbia University",
  founded: 1754,
  country: "美国",
  region: "美洲",
  state: "纽约州 · 纽约市",
  reportId: "LR-20260924-02",
  reportDate: "2026-09-24",
  tagline: "把藏书变成联盟资产的发明者",
  mainLine: "在常春藤藏书外迁的三条路线里，哥大发明了第四条——不动自家高楼，而是和普林斯顿、纽约公共图书馆共创 ReCAP：一座 1600 万件规模的高密度共享书库，用联盟分摊成本、用\"下一工作日送达\"换出曼哈顿岛内的楼面。主馆 Butler 则示范了\"老馆不是包袱是资产\"：1994–2010 年分五期、1.1 亿美元以上的持续改造，让 1934 年的中心馆以 24/7 与呼吸式改造始终站在一线。",
  flagship: { name: "Butler 图书馆（1934）", note: "1994–2010 年五期、$110M+ 改造：古籍保护与善本修复、信息管理教学中心、院系图书馆迁入、出口更新等；Butler 2–4 层学期内 24/7，是全球\"老馆持续再生\"历时最长、金额最大的样本之一。" },
  overview: {
    intro: "校方叙事口径（[Columbia Facts 2024](https://opir.columbia.edu)）：馆藏总量逾 1,600 万卷（含电子），可访问在线电子资源逾 700 万种，手稿与档案约 30 万延英尺。系统为联邦制二十二馆：Butler（人文社科主馆，含本科生馆 Milstein、珍本与手稿图书馆 RBML）、Avery 建筑与美术、C.V. Starr 东亚（美国东亚研究重镇）、Lehman 社会科学（深夜馆）、科学与工程（NoCo 馆）、Augustus C. Long 健康科学（设 24 小时阅览室）等。现任馆长 Ann D. Thornton（2015 年起，前 NYPL 馆长）。",
    stats: [
      { k: "实体馆藏", v: "1,269 万卷", s: "FY2024 年度口径；电子 399 万种" },
      { k: "年流通", v: "14.2 万册次", s: "FY2024 全系统" },
      { k: "年入馆", v: "310 万实体＋650 万虚拟", s: "FY2024 合计约 960 万人次" },
      { k: "经费", v: "$6,931 万", s: "FY2024 总支出口径" }
    ]
  },
  projects: [
    {
      name: "ReCAP 联盟书库（2000）：藏书外迁的第四种答案",
      nameEn: "Research Collections and Preservation Consortium · Plainsboro, NJ",
      year: "2000 创立 / 2001–07 启用",
      stats: [{ k: "总馆藏", v: "1,600 万件+" }, { k: "年请求", v: "25 万次" }, { k: "环境", v: "55°F / 35%RH" }, { k: "送达", v: "下一工作日" }],
      facts: "2000 年由[哥大、普林斯顿、纽约公共图书馆（NYPL）三方共创](https://recap.princeton.edu)，2001–07 年分阶段启用，是全球最早的跨机构高密度共享保存库之一；哈佛 2016 年准会员、2019 年转正。2021 年哥大在此寄存约 470 万卷。恒温恒湿（55°F/35% 相对湿度）、请求下一工作日送达各校。成员馆把低频藏书迁出曼哈顿岛内高楼，换回楼面与保存环境。",
      insight: "藏书压力不是单馆问题，而是区域性问题——ReCAP 把\"谁拥有书库\"变成\"谁共享保存能力\"。与哈佛自建、芝大地下 ASRS、宾大自建校外库并列，构成藏书治理的完整光谱：自建、内嵌、联盟。"
    },
    {
      name: "Butler 图书馆五期改造（1994–2010）：1.1 亿美元的老馆再生",
      nameEn: "Butler Library · James Gamble Rogers · 1934",
      year: "1994–2010 分五期",
      stats: [{ k: "投入", v: "$110M+" }, { k: "周期", v: "约 15 年" }, { k: "期数", v: "五期滚动" }, { k: "楼层", v: "2–4 层 24/7" }],
      facts: "1934 年楼（James Gamble Rogers 设计）经历约十五年、五期改造：古籍保护与善本修复中心、信息管理教学中心、院系图书馆迁入、出口与系统更新等，全程保持开馆。Butler 2–4 层学期内 24/7 开放，地下 Milstein 本科生馆与 RBML 珍本馆同楼。",
      insight: "\"呼吸式改造\"的极限样本：不是一次性翻新，而是十五年的滚动投入曲线。对国内 20 世纪早期建造的中心馆，这是最完整的\"边运营边再生\"参照。"
    },
    {
      name: "NoCo 科学与工程图书馆（2011）：新学科的新门面",
      nameEn: "Science & Engineering Library · Northwest Corner Building",
      year: "2011",
      stats: [{ k: "位置", v: "NoCo 大楼 4 层" }, { k: "定位", v: "理工学科服务枢纽" }],
      facts: "位于哥大校园西北角新楼的科学与工程图书馆，承接理工学科的文献、数据与协作服务，与 Butler 的人文社科主线形成功能互补。",
      insight: "联邦制二十二馆的增量不在老馆扩张，而在新学科建筑内嵌新馆——空间增长跟随学科版图而非历史惯性。"
    },
    {
      name: "FOLIO 开源图书馆系统（2025-08）：换掉二十年旧 ILS",
      nameEn: "FOLIO LSP · EBSCO FOLIO · CLIO 发现 + Panorama 分析",
      year: "2025-08 上线",
      stats: [{ k: "发现层", v: "CLIO" }, { k: "分析层", v: "Panorama" }, { k: "前任", v: "Aleph（逾 20 年）" }],
      facts: "哥大图书馆 2025 年 8 月正式上线 FOLIO 开源图书馆服务平台，发现层 CLIO、分析层 Panorama，取代使用逾二十年的 Aleph 系统，并与 ReCAP 联盟成员的系统互操作。",
      insight: "常春藤里把开源 LSP 当生产底座跑通的一例：发现、分析、联盟互操作三层解耦，是\"系统选型即战略\"的最新注脚。"
    }
  ],
  learningSpaces: "Butler 2–4 层学期内 24/7，Lehman 社会科学馆以深夜开放著称，Augustus C. Long 健康科学馆设 24 小时阅览室；Milstein 本科生学习空间嵌在 Butler 地下。空间叙事与宾大的\"垂直分层\"同构，但分层依据是学科联邦——每座学科馆各守自己的作息与声景。",
  serviceModel: "联盟即服务：ReCAP 以\"下一工作日送达＋共享保存环境\"成为系统服务的一部分；2025 年 FOLIO/CLIO/Panorama 三层栈把发现与分析纳入同一服务目录。馆长 Ann D. Thornton 的 NYPL 履历（近二十年）本身即\"公共—大学联盟\"治理经验的活样本。",
  trends: [
    { tid: "offsite-storage", title: "藏书治理进入\"联盟时代\"：ReCAP 是制度发明而不只是库房", type: "fact", note: "跨机构共享保存库把藏书压力从单馆资产负债表上移走——与自建、地下 ASRS 并列成为第三种标准答案。" },
    { tid: "historic-renewal", title: "老馆再生从项目变成曲线：十五年五期的滚动投入", type: "fact", note: "Butler 1994–2010 的改造节奏说明：历史中心馆的最优策略可能不是一次性翻新，而是可融资、可分期、边运营边更新的长曲线。" },
    { tid: "247-spaces", title: "24/7 从承诺变成学科馆的差异化作息", type: "fact", note: "Butler 学期 24/7＋Lehman 深夜馆＋医学 24 小时阅览室：全天候不再是一座馆的统一口号，而是按学科与楼层分配的梯度。" },
    { tid: "data-driven-ops", title: "开源 LSP 进入常春藤生产环境", type: "fact", note: "FOLIO＋CLIO＋Panorama 三层解耦 2025 年在哥大落地——系统架构开始像基础设施而非软件采购。" },
    { tid: "special-collections", title: "特藏与修复能力前置展示", type: "fact", note: "RBML 与古籍保护能力同楼于 Butler 主馆动线上，与宾大 Kislak\"特藏上浮\"共同指向：保护能力本身成为教学展示面。" }
  ],
  business: [
    "藏书治理建议直接摆出\"四象限\"：自建（哈佛）、内嵌 ASRS（芝大）、自建校外库（宾大）、联盟共享（哥大 ReCAP）——四种都有顶级背书，把选择逻辑（资产 vs 服务）讲透。",
    "老馆更新预算话术可引用 Butler 曲线：十五年五期、单笔不用吓人、全程开馆——对\"想翻新怕停业\"的校方是最有说服力的融资结构。",
    "ReCAP 的 55°F/35%RH 与\"下一工作日送达\"是两个可以原样抄的服务指标：保存环境的可宣称承诺＋借阅时效的可宣称承诺。",
    "联盟治理一课：ReCAP 三方（两校一公共馆）股权结构与管理外包安排，是跨区域图书馆联盟章程写作的现成模板。",
    "可复制性边界：ReCAP 依赖纽约都会圈的多馆密度与哈佛级成员背书；无联盟生态的城市不能直接照抄股权比例，只能照抄服务指标。"
  ],
  limits: [
    "Butler 五期改造各期明细造价与设计方：无逐期公开口径，仅总量 $110M+。",
    "NoCo 科学与工程馆的面积、造价与设计方：未见官方披露。",
    "ReCAP 现行各成员寄存量的最新口径：2021 年哥大 470 万卷为最近公开数。",
    "FOLIO 迁移总成本与工期细节：未公开，引用前需以官方发布复核。"
  ],
  sources: [
    { label: "Columbia University Libraries – 官方站点（系统结构与场馆）", url: "library.columbia.edu" },
    { label: "Columbia OPIR – Columbia Facts 2024（馆藏与经费口径）", url: "opir.columbia.edu" },
    { label: "ReCAP 官网（馆藏规模、环境指标、成员沿革）", url: "recap.princeton.edu" },
    { label: "EBSCO – Columbia University Libraries Selects FOLIO（2025）", url: "www.ebsco.com/about/news-center/press-releases/columbia-university-libraries-selects-ebsco-folio-services-platform" },
    { label: "NYPL – ReCAP 相关历史新闻稿", url: "www.nypl.org" },
    { label: "Wikipedia – Columbia University Libraries（沿革与馆长信息）", url: "en.wikipedia.org/wiki/Columbia_University_Libraries" }
  ]
},
{
  id: "cornell",
  name: "康奈尔大学",
  nameEn: "Cornell University",
  founded: 1865,
  country: "美国",
  region: "美洲",
  state: "纽约州 · 伊萨卡",
  reportId: "LR-20260927-03",
  reportDate: "2026-09-27",
  tagline: "向下、向下、向结构要空间的学校",
  mainLine: "在伊萨卡的峡谷坡地上，康奈尔三代图书馆改造是同一场空间战争的三种打法：1982 年凿开 Libe Slope 向坡体腹中挖出地下阅览翼，1992 年把 Kroch 特藏馆整体沉入 Arts Quad 地下三层，2019 年则在 1911 年的 Rand Hall 老厂房里抬高屋顶、用钢索把十万卷书\"挂\"成倒金字塔——书悬在半空，首层工坊与头顶书塔共用一条垂直动线。$16.9M 的 Rand Hall 改造（含校友 Mui Ho 600 万美元捐赠）是迄今造价最低、传播力最强的适应性再利用样本，新设计还认祖了 White 校长 1876 年铸铁书塔。",
  flagship: { name: "Mui Ho Fine Arts Library（Rand Hall 1911 → 2019）", note: "拆除中层楼板、屋顶整体抬高约 4 英尺、掏出 40 英尺中庭，四层倒阶梯金字塔书塔以钢索悬挂 10–12.5 万卷藏书，首层 8,000+ 平方英尺 Material Practice Center（木/金属/数字工坊＋maker space）与图书馆同楼——书不占地面，地面还给工坊。LEED Gold，能耗较改造前降约 70%。", img: "cornell-randhall.jpg", imgCap: "Rand Hall 黄昏外观：1911 年厂房，屋顶被整体抬高约 4 英尺。摄影：Chris Cooper / STV" },
  overview: {
    intro: "校方口径（[library.cornell.edu/collections](https://library.cornell.edu/collections)）：实体馆藏逾 850 万卷、电子图书逾 250 万种、连续出版物 24 万余刊名、电子文章年下载逾 600 万篇；ALA Library Fact Sheet 排名全美第 17 位（8,173,778 卷，统计年份待复核）。系统没有单一\"总馆\"，而是身世各异的馆群：Uris（1891，实质本科馆，昵称 The Libe，馆内 A.D. White Library）、Olin（1961，人文社科研究主馆，2023-12 起大修）、Kroch（1992，Arts Quad 地下三层特藏库）、Mui Ho Fine Arts（2019，Rand Hall 改造）及 Mann（农学院）等。现任馆长 Elaine Westbrooks，头衔 Carl A. Kroch University Librarian。",
    stats: [
      { k: "实体馆藏", v: "850 万卷+", s: "校方叙事口径" },
      { k: "电子图书", v: "250 万种+", s: "持续扩充" },
      { k: "年下载", v: "600 万篇+", s: "电子文章口径" },
      { k: "ALA 排名", v: "第 17 位", s: "8,173,778 卷，年份待复核" }
    ]
  },
  projects: [
    {
      name: "Rand Hall 改造为 Mui Ho Fine Arts Library（2019）：把十万卷书挂上半空",
      nameEn: "Rand Hall 1911 → Mui Ho Fine Arts Library · Wolfgang Tschapeller + STV",
      year: "2019-08 开放",
      img: "cornell-fal.jpg",
      imgCap: "40 英尺中庭与悬挂书塔。摄影：Lukas Schaller / designboom",
      stats: [{ k: "造价", v: "$16.9M" }, { k: "个人捐赠", v: "$6M（Mui Ho）" }, { k: "书塔藏书", v: "10–12.5 万卷" }, { k: "能耗", v: "-70% · LEED Gold" }],
      facts: "起因是双重挤压：Sibley Hall 的美术藏书逐年膨胀，建筑学院的工坊也在膨胀——同一校园里书没处放、工坊也没处放。2013 年校友[何妙儿（Mui Ho，建筑学 1966 届）捐赠 600 万美元](https://aap.cornell.edu)，学校拍板把 1911 年的工业厂房 Rand Hall 整体改造。设计建筑师是康奈尔建筑学院 1987 届硕士校友、奥地利人 Wolfgang Tschapeller（[STV 任执行建筑师](https://goodyclancy.com)），方案最激进的一笔是拆掉三层楼板、把屋顶整体抬高约 4 英尺、在厂房腹中掏出 40 英尺高的中庭，让一座四层钢制书塔以[倒阶梯金字塔的形态被钢索悬挂起来](https://www.archpaper.com/2019/11/wolfgang-tschapeller-cornell-library/)，外覆安全网、脚下是格栅地板，光线与视线都从塔身穿过。首层划出 8,000–8,300 平方英尺 Material Practice Center，木工、金属与数字制造工坊同 maker space 合为一体——悬挂不是炫技，是空间算力：书不占地面，地面就完整让给工坊。这个构思在建筑系内部认祖了 White 校长 1876 年创馆藏书的 A.D. White Library 三层铸铁书塔，改造因此有了跨越百年的叙事合法性（前院长 Kent Kleinman 评价：\"respectfully restored and radically re-inhabited\"）。2019 年 8 月开放，LEED Gold、能耗较改造前降约 70%（来源链接已失效，保留结论），18 个研读卡座沿塔布置，成为全校最具传播力的学习空间照片。",
      insight: "本系列迄今最强的适应性再利用样本，强在三点：$16.9M 做出地标级传播力（造价不到新建馆舍零头）；\"悬挂\"用结构换平面，一栋楼解决书与工坊两个功能危机；新设计向本校历史认祖，募资、审批、舆论一路顺。对坐拥 1950–80 年代闲置工业厂房的高校，这个模板比新建便宜一个数量级——但悬挂结构对消防荷载规范要求极高，落地需专项论证。"
    },
    {
      name: "Kroch Library（1992）：把特藏沉入 Arts Quad 地下",
      nameEn: "Carl A. Kroch Library · 地下三层 · 1992-08 开放",
      year: "1992",
      stats: [{ k: "面积", v: "97,000 SF" }, { k: "容量", v: "130 万卷＋2 万立方英尺手稿" }, { k: "结构", v: "地下三层·4 座天窗中庭" }],
      facts: "1980 年代珍稀手稿与特藏扩张到无处安放——这类藏品需要恒温恒湿的金库级环境，老馆给不起。康奈尔的方案大胆而彻底：在全校最金贵的景观地 Arts Quad 正下方挖一座三层地下图书馆。1992 年 8 月开放的[Carl A. Kroch Library](https://rare.library.cornell.edu/the-carl-a-kroch-library/)以 1935 届校友、芝加哥珍本书商 Carl A. Kroch 冠名，97,000 平方英尺容纳 130 万卷藏书与 20,000 立方英尺手稿，四座天窗中庭把自然光引入地下各层，恒温金库集中安置最脆弱藏品。馆内集中 Rare and Manuscript Collections 与 Asia Collections 两大板块——地面上几乎看不到这座图书馆，它把存在感全部让给了草坪，把所有体量藏在了师生脚下。",
      insight: "与芝大 Mansueto（2011）常被并提，但 Kroch 早 19 年，且定位不同：Mansueto 存流通书，Kroch 存特藏——这决定了设计逻辑：特藏地下化的核心是环境控制（金库）与安保，天窗中庭解决的是\"地下工作者的尊严\"。做古籍/地方文献书库规划，\"金库＋采光中庭\"组合可直接引用。"
    },
    {
      name: "Olin Library 改造（2023-12 启动）：把学生变成改造流程的一部分",
      nameEn: "Olin Library Renewal · Goody Clancy",
      year: "2023-12-18 封闭开工 · 目标 2025",
      img: "cornell-olin.jpg",
      imgCap: "Olin 一层改造后效果图：开放书架区与单一服务台。设计：Goody Clancy",
      stats: [{ k: "范围", v: "一层＋地下室" }, { k: "设计", v: "Goody Clancy" }, { k: "系统", v: "机械整体更换（60 年+）" }],
      facts: "Olin 是人文社科研究主馆，1961 年启用，机电系统超龄服役六十余年，空间组织停留在\"多服务台分区管理\"的旧范式。[2023 年 12 月 18 日一层与地下室封闭开工](https://library.cornell.edu/about/news/services-to-continue-during-olin-library-renovations/)，改造清单具体：整合为单一服务台、新增 3 间咨询室、人类学馆藏套房、新公共楼梯、面向 Arts Quad 的新入口门厅、机械系统整体更换。最值得抄的是过程里的学生参与：施工前学生试坐候选家具再定采购，设计阶段通过 VR 走查提前\"进入\"未建成的空间提意见，工程学院师生把拆下来的老式索书号叫号板改造成数字钟留校展示——把\"改造通知\"做成了深度参与的共创过程，而不是一张贴在门上的封馆告示。",
      insight: "老馆改造的标准难题是系统老化、范式切换、师生情绪三者打架，Olin 的答案是把第三件事做成前两件事的一部分：家具试用＝采购决策众包，VR 走查＝设计评审前置，旧物改造＝集体记忆的安置方案。参与感本身就是沟通成本最低的\"封馆安抚\"，任何规模的改造都能照抄。"
    },
    {
      name: "Uris Library：1891 年老馆的三次转身与 1982 年\"凿坡入库\"",
      nameEn: "Uris Library · William Henry Miller · 1891",
      year: "1891 开放 · 1982 地下翼 · 1961 转本科馆",
      img: "cornell-uris.jpg",
      imgCap: "Uris Library（左）与 McGraw 钟楼，前景即 Libe Slope；右侧为 Olin。摄影：P. Hughes / Wikimedia Commons（CC BY 4.0）",
      stats: [{ k: "开放", v: "1891-10-07" }, { k: "建筑师", v: "W. H. Miller（23 岁出道作）" }, { k: "手术", v: "1982 凿 Libe Slope" }, { k: "开放时长", v: "多阅览室 24h" }],
      facts: "康奈尔 1865 年创校时校长 White 把最初藏书寄放在自己办公室；建校 23 年后由本校建筑系第一位学生 William Henry Miller 设计 Uris 馆，1891 年 10 月 7 日开放，师生昵称 \"The Libe\" 沿用至今。1961 年 Olin 建成后 Uris 转型本科生图书馆，冠名 1925 届校友、地产商 Harold D. Uris。真正的空间手术是 1982 年：面对坡地上再无扩建余地的窘境，学校凿开楼前的 Libe Slope 向山坡体内挖出地下阅览翼——顶部采光的地下空间被学生叫作 \"Cocktail Lounge\"，2019 年完成翻新；1990 年代摘掉\"本科馆\"字样，如今馆内多个阅览室 24 小时开放。White 校长 1876 年创馆藏书后来单独辟室成为馆中之馆 A.D. White Library，正是 Rand Hall 悬挂书塔百年后的灵感源头。",
      insight: "Uris 的三次转身（总馆→本科馆→24 小时学习空间）每次都踩在功能更迭的点上，而不是等到建筑被功能抛弃。1982 年\"凿坡入库\"尤其值得记录：当平面扩张走不通时，垂直方向（含向下）就是下一个平面——Kroch 整体下沉的思路在这里已预演过一次。"
    }
  ],
  learningSpaces: "康奈尔学习空间的共同主题是\"地形即空间\"：Uris 馆多个阅览室 24 小时开放（Dean Reading Room 等），夜晚灯火是 Libe Slope 上的地标；1982 年凿坡建成的地下 \"Cocktail Lounge\" 玻璃顶采光、景观与安静兼得；Mui Ho 美术图书馆 18 个研读卡座沿悬挂书塔布置，临卡尤加湖谷一侧；Rand Hall 首层 Material Practice Center 与图书馆同楼——做模型累了上楼看书，看书累了下楼做模型。多数高校把 maker space 设在图书馆外的另一栋楼，康奈尔用一座书塔把\"动手\"与\"阅读\"缝进了同一条垂直动线。",
  serviceModel: "馆长头衔即传统：Carl A. Kroch University Librarian 以捐资书商命名，把个人捐赠制度化为职位记忆；校友冠名谱系横跨三代——Uris（1925 届地产商，1960 年代冠名本科馆）、Kroch（1935 届珍本书商，1992 年冠名地下特藏馆）、Mui Ho（1966 届建筑师校友，2013 年捐资发起美术馆改造），每次冠名都恰好发生在该馆功能重塑的节点，钱与转型互为因果。特藏运营上，RMC 藏在地下三层但服务上并未\"藏\"：物理上最深，服务上最外——金库级环境不以牺牲可达性为代价。",
  trends: [
    { tid: "historic-renewal", title: "适应性再利用取代新建地标：Rand Hall 是低成本高传播力的答案", type: "fact", note: "1911 年老厂房＋抬顶中庭＋悬挂书塔，$16.9M 成为康奈尔图书馆系统的形象封面——老工业建筑改造可以进入学校宣传主叙事。" },
    { tid: "special-collections", title: "特藏的空间策略走向地下金库化", type: "fact", note: "Kroch 1992 年即实现恒温金库与地下采光兼得，比芝大 Mansueto 早 19 年，且为特藏而非流通书设计——天窗中庭不是奢侈项，是地下空间可持续使用的必要条件。" },
    { tid: "learning-commons", title: "learning commons 开始吸收\"动手\"功能", type: "fact", note: "Material Practice Center 与图书馆同楼同动线，commons 的内涵从讨论协作扩展到制作实践——\"动手的 commons\"成为可引用原型。" },
    { tid: "data-driven-ops", title: "共创式设计成为改造项目的标准沟通策略", type: "fact", note: "Olin 的家具试用、VR 走查、旧物改造（call board 变数字钟）三件套物料成本近零，回报是舆论零阻力与采购决策的免费众包。" },
    { tid: "special-collections", title: "校友捐赠与功能重塑同步发生", type: "fact", note: "Uris→Kroch→Mui Ho 三代冠名都落在功能转型节点——募资叙事应与空间转型叙事合并策划。" }
  ],
  business: [
    "老厂房/老仓库改造图书馆，优先研究\"悬挂＋中庭\"两件套：Rand Hall 证明拆中层楼板＋抬屋顶＋悬挂结构，可以用零头造价获得地标级传播力。",
    "书与工坊同楼，是 learning commons 的下一形态：让\"做\"与\"读\"共享同一动线，理工科见长的高校可整体借鉴。",
    "特藏书库\"金库＋采光中庭\"组合可直接引用：Kroch 1992 年就做到恒温金库与地下采光兼得，天窗中庭是地下空间可持续使用的必要条件。",
    "改造施工前把学生变成流程的一部分：Olin 的家具试用、VR 走查、旧物改造三件套成本近零，任何涉及封馆的改造都值得照抄。",
    "新设计向本校历史\"认祖\"是改造项目的润滑剂：钢索书塔认祖 A.D. White 铸铁书塔，叙事一出，募资、审批、校友关系全线受益——每个学校都有值得认祖的空间遗产。"
  ],
  limits: [
    "ALA 排名第 17 位（8,173,778 卷）统计年份未在引用页标注，横向比较前需复核。",
    "Rand Hall 书塔藏书量各来源在 10 万–12.5 万卷间浮动，采用区间表述。",
    "Olin 改造以 2025 年完工作为目标口径，实际完工状态截稿时未复核。",
    "850 万卷＋250 万电子书为校方叙事口径，与 ALA 排名口径统计边界不同。",
    "报告配图来自建筑设计媒体报道，版权归摄影者与出版方，仅限研究内部使用。"
  ],
  sources: [
    { label: "Cornell University Library – Collections（馆藏总量与下载量口径）", url: "library.cornell.edu/collections" },
    { label: "Cornell University Library – Services to Continue During Olin Library Renovations（2023-12 改造公告）", url: "library.cornell.edu/about/news/services-to-continue-during-olin-library-renovations/" },
    { label: "Goody Clancy – Olin Library Renewal 项目档案", url: "goodyclancy.com" },
    { label: "Cornell RMC – The Carl A. Kroch Library", url: "rare.library.cornell.edu/the-carl-a-kroch-library/" },
    { label: "The Architect's Newspaper – Mui Ho Fine Arts Library（2019-11，摄影 Chris Cooper/STV）", url: "www.archpaper.com/2019/11/wolfgang-tschapeller-cornell-library/" },
    { label: "designboom – Wolfgang Tschapeller 悬吊书塔（2019-12-12，摄影 Lukas Schaller）", url: "www.designboom.com/architecture/wolfgang-tschapeller-mui-ho-fine-arts-library-12-12-2019/" },
    { label: "Cornell AAP – Milstein/Rand Hall 改造新闻", url: "aap.cornell.edu" },
    { label: "ALA Library Fact Sheet（康奈尔卷数排名）", url: "www.ala.org" }
  ]
},
{
  id: "oxford",
  name: "牛津大学",
  nameEn: "University of Oxford",
  founded: 1096,
  country: "英国",
  region: "欧洲",
  state: "牛津郡 · 牛津",
  reportId: "LR-20260928-01",
  reportDate: "2026-09-28",
  tagline: "把书送走，把楼打开",
  mainLine: "法定缴存四百年、每天约 1,000 件新入藏，博德利用\"外迁库房＋地下再生＋公众化改造\"三层结构回应\"只进不出\"的收藏义务。",
  flagship: {
    name: "Weston 图书馆改造（原 New Bodleian）",
    note: "[£80M 三年改造](https://www.bbc.com/news/magazine-37442351)（2011–15）：消防评估发现 11 层中央书塔是\"住在烟囱上方的防火隐患\"，拆除后让出 Blackwell Hall 公众大厅与 39 公里地下新书库。",
    img: "oxford-weston-exterior.jpg",
    imgCap: "Weston 图书馆 Broad Street 外观（2015 年 3 月重开当月）。摄影：John Cairns / Wikimedia Commons（CC BY-SA 4.0）"
  },
  overview: {
    intro: "[Bodleian Libraries](https://www.bodleian.ox.ac.uk/about/libraries) 是英国最大的大学图书馆系统、欧洲最大之一——托马斯·博德利 1598 年重建、1602 年向学者开放，前身可追溯至 1488 年的汉弗莱公爵图书馆。法定缴存四百年，现藏 1,400 万+ 印刷品、100 万+ 特藏、8 万+ 电子期刊，年读者 170 万+ 人次。",
    stats: [
      { k: "馆藏总量", v: "1,400 万+ 册", s: "官网现行口径；2021–22 年报为 1,350 万" },
      { k: "特藏", v: "100 万+ 件", s: "手稿、珍本、地图、乐谱（官网 Special Collections）" },
      { k: "年增量", v: "约 5 公里书架/年", s: "法定缴存驱动，约 1,000 件/工作日入藏" },
      { k: "校外库房", v: "1,530 万+ 件", s: "斯温登 BSF（2010，153 英里书架，£26M）" }
    ]
  },
  projects: [
    {
      name: "Weston 图书馆：拆掉隐患书塔，换回公众大厅",
      nameEn: "Weston Library · WilkinsonEyre · 2015",
      year: "1940 建 / 2015 改",
      img: "oxford-weston-blackwell.jpg",
      imgCap: "Blackwell Hall：拆除中央书塔后形成的 13.5 米挑高公众大厅与环形玻璃书廊。摄影：Jps3 / Wikimedia Commons（CC BY-SA 4.0）",
      stats: [{ k: "总造价", v: "£80M" }, { k: "地下书库", v: "39 km 书架" }, { k: "地下藏书", v: "140 万册" }, { k: "重开", v: "2015-03-21" }],
      facts: "New Bodleian（Giles Gilbert Scott 设计，1937–40 建成，II 级登录建筑）到千禧年已成纯藏书仓库。[AJ 报道](https://www.architectsjournal.co.uk/buildings/weston-library-by-wilkinson-eyre)：11 层钢制中央书塔因防火分区连通，「整个书塔实际上是一个防火隔间」，起火则有三分之一概率整体坍塌。WilkinsonEyre 改造（2011 闭馆、2015-03-21 重开并更名）：拆除书塔，地下新建 39 公里书架容纳 140 万册；地面层让渡给展厅、报告厅、咖啡厅与公众大厅；顶层新建 Charles Wendell David 阅览室，恢复被战后加建遮挡的城市天际线。资金结构：捐资 [£25M 的 Garfield Weston 基金会](https://www.campaign.ox.ac.uk/news/weston-library-formally-opens)（牛津大学出版社对等配捐），Julian Blackwell 另捐 £5M 命名新的 Blackwell Hall；建筑本体约 £50M、总项目约 £80M。重开一年即破百万访客（2016-07 第一百万名），获 RIBA 国家奖、入围斯特灵奖短名单，2016-05 由剑桥公爵正式揭幕。",
      insight: "真正的价值不在「老馆翻新」，而在风险如何成为设计的发电机：消防安全评估书写了整个项目的叙事——书塔必须拆，拆掉后的中庭才轮得到公众大厅登场；观众厅不是目的，是让珍本库房达到恒温恒湿与消防新标准之后自然长出来的公共空间。对国内 1950–80 年代砖混/钢结构老书库，「安全整改＋空间再生」打包立项，比单纯申请装修经费更容易讲通逻辑、拿到大钱。隐忧同样真实：Rowan Moore 评价其「空间处理别扭、缺少火花」，Weston 阅览室预约紧张一直是读者抱怨点——公众化不应以牺牲研究功能为代价。"
    },
    {
      name: "Gladstone Link：百年地下书库的再生",
      nameEn: "The Gladstone Link · 2011",
      year: "1909–12 建 / 2011 改",
      img: "oxford-radcliffe-camera.jpg",
      imgCap: "Radcliffe Camera（1737–49）：Gladstone Link 地下连接的南端节点，地下阅览空间即利用 1909–12 年建成的世界最大地下书库改造。摄影：Wikimedia Commons（CC）",
      stats: [{ k: "原始书库", v: "1909–12" }, { k: "向读者开放", v: "2011-07-05" }, { k: "连接", v: "老馆—圆楼" }],
      facts: "拉德克利夫广场地下的书库 1909–12 年建成时为世界最大。核心三建筑（老馆、Radcliffe Camera、New Bodleian）隔街分布，读者需在地面绕行，书在地下书库与两馆之间的运送也早已不堪使用。2011 年改造为连接老博德利与 Radcliffe Camera 的地下读者空间 [Gladstone Link](https://ora.ox.ac.uk/objects/uuid:70603fa2-ac73-41e0-b264-d2f8fc2b92bc)，7 月 5 日向读者开放、10 月 5 日正式揭幕。牛津把实施复盘写成公开论文：搬书与施工交织——「临时吊装设备还在运转就必须把书搬回去」；防尘几乎不可能；金属格栅地板是历史通风策略的一部分，却与推车冲突，最终靠更换软轮加泡沫护垫的专用推车解决——教训原文：「确保健康与安全问题在早期设计阶段就被彻底覆盖」。",
      insight: "「地下空间再生」的早期教科书：基础设施的生命周期可以比建筑更长——1909 年的书库一百年后以新功能续命，靠改造而非重建。国内高校普遍存在的老馆地下书库、人防空间是直接参照：低层高、格栅顶、潮湿是通病，但读者空间不挑层高，挑的是动线与采光。它同时提供了一个罕见的运营复盘样本：校方自曝的「丑话」论文——搬书防护失效、推车与地板冲突——比成功案例更有学习价值，值得原样带进场。"
    },
    {
      name: "Schwarzman 人文馆：2025 年的原生答案",
      nameEn: "Bodleian Humanities Library · Schwarzman Centre · 2025",
      year: "2025-09-29 开放",
      img: "oxford-schwarzman-atrium.jpg",
      imgCap: "Schwarzman 中心中庭与上层学习座：全楼 320 个正式与非正式学习座散布于图书馆之外。摄影：Sara0606 / Wikimedia Commons（CC BY-SA 4.0）",
      stats: [{ k: "人文馆面积", v: "2,100 ㎡" }, { k: "座位", v: "410（80 研究生专座）" }, { k: "捐资", v: "£185M（校史最大）" }],
      facts: "[Schwarzman 中心](https://cherwell.org/2025/10/01/oxford-schwarzman-centre-opens/)（Hopkins Architects，25,300 ㎡，英格兰最大 Passivhaus 项目）2025 年 10 月开放，其中的 Bodleian 人文馆 9 月 29 日先行开馆：合并哲学与神学、英语、音乐三个院系图书馆及医学史、互联网研究所藏书，2,100 ㎡、410 座（80 座为上层内环研究生专座）。开放时间人文学者每日 9:00–21:00、其他学科学生工作日 9:00–20:00——显著长于牛津多数图书馆；座位布局依据博德利自研的《The 21st Century Library》报告；配套 24/7 学习空间与智能储物柜，读者可闭架自取预约图书；全楼另散布 320 个正式与非正式学习座。2026 年 4 月起文化季开放：500 座音乐厅、250 座剧院、影院与展厅全部面向公众——图书馆与表演艺术共楼，是这栋楼区别于传统图书馆楼的核心设计立场。",
      insight: "三个细节可直接引用：① 20% 座位制度化留给研究生，回应「研究生扩招、空间不增」的矛盾；② 24/7 用智能储物柜替代夜间人工取书——通宵空间最大的成本顾虑（夜间值守）有了硬件解法，前提是馆藏系统与门禁打通；③ 用自己的研究报告当设计任务书，是「先诊断、后方案」的最优示范。隐忧：捐资背景曾引发校内资金来源争议，大额命名捐赠需评估舆论风险；410 座对七院系是否充足尚无使用数据，2026 年应复核。"
    }
  ],
  learningSpaces: "Duke Humfrey's Library（1488）至今维持原状使用——低矮双层书廊与自然采光，是「历史建筑第二次生命」的原点证据。Blackwell Hall 是新一代公共学习大厅的原型：13.5 米挑高，展厅、咖啡、讲座与公众入口合成一个空间；Gladstone Link 证明地下低层高空间可以成为稳定的读者空间；Schwarzman 人文馆 410 座中 80 座研究生专座设在内环（俯瞰中庭），全楼另散布 320 个学习座——学习空间溢出图书馆边界，成为整栋楼的底色。",
  serviceModel: "统一发现层 SOLO 覆盖成员馆与共享编目的学院图书馆；校外库房（斯温登 BSF，153 英里书架）取书请求经 SOLO 下单、逐件条码追踪。服务整合的主线是「合并分散小馆」：2025 年人文馆一次合并三个院系图书馆，开放时间从各馆的碎片化时段统一到每日 9:00–21:00。",
  trends: [
    { tid: "historic-renewal", title: "历史建筑的\"第二次生命\"", type: "fact", note: "Weston：1930 年代 New Bodleian 拆掉防火隐患书塔再生为公众大厅；Gladstone Link：1909–12 年地下书库百年后再生为读者空间——同一所学校两个世纪各做一次。" },
    { tid: "offsite-storage", title: "藏书外迁 · 高密度库房", type: "judgment", note: "斯温登 BSF（2010，£26M，153 英里书架、千万件级）：2007–08 年校内 Osney Mead 选址被规划拒绝才走向校外——在英国，外迁首先是个规划政治问题，其次才是工程问题。" },
    { tid: "247-spaces", title: "全天候学习空间", type: "fact", note: "Schwarzman 人文馆 24/7 学习空间配智能储物柜：通宵不再依赖夜间人工值守，\"取书\"环节自动化——24/7 成本问题的新一代解法。" },
    { tid: "learning-commons", title: "Learning Commons 常态化", type: "judgment", note: "Blackwell Hall 把公众入口、展厅与咖啡合成一个大厅；Schwarzman 全楼 320 个散布学习座——commons 溢出图书馆边界，成为整栋建筑的底色。" },
    { tid: "data-driven-ops", title: "数据化运营", type: "judgment", note: "《The 21st Century Library》研究报告直接作为新馆设计任务书；BSF 逐件条码＋SOLO 请求驱动每日取书动线——研究先行、运营数据化。" },
    { tid: "special-collections", title: "特藏走向台前", type: "fact", note: "Weston 把 100 万+ 件特藏置于恒温恒湿新标准并配常设展厅，重开一年访客破百万——特藏从库房变成公共目的地。" }
  ],
  business: [
    "\"安全整改＋空间再生\"打包立项话术：Weston 的逻辑是消防评估发现书塔不可留→拆除→中庭公众化。国内 1950–80 年代老馆的消防与结构评估，完全可以成为空间改造的立项引擎，而不只是工程包袱。",
    "24/7 的无人化版本：Schwarzman 用智能储物柜替代夜间人工取书——向校方谈 24 小时空间时最大的成本顾虑（夜间值守），lockers 给出了一条硬件路径，前提是与馆藏/门禁系统打通。",
    "\"先研究、后设计\"的服务路径：博德利用自己的《The 21st Century Library》报告作为新馆任务书，哈佛做四馆改造前先跑可行性研究——推荐\"付费诊断研究先行\"本身就是专业服务切入点。",
    "研究生专座制度：把 20% 座位明确定为研究生专用，是对扩招矛盾的制度化回应——谈家具配置时可以把\"专座比例与位置策略\"作为独立议题。",
    "地下与低效空间再生的评估顺序：历史构造价值评估→功能植入（Gladstone Link 顺序），配结构、暖通、消防三专业早期介入——可写成 checklist 带进场。"
  ],
  limits: [
    "Gladstone Link 项目造价与新增座位数未找到公开来源，本研究未猜测。",
    "\"170 万+ 读者人次（2022/23）\"引自官方社交媒体转述，未核对年报原文页码。",
    "成员馆数量官网（22）与维基（28）口径不一，已并列标注。",
    "Schwarzman 人文馆首批使用数据尚未发布，410 座对七院系研究生是否充足需 2026 年复核。",
    "BSF 读者取书送达时效各来源表述不一，本研究未采用\"次日达\"等具体承诺。"
  ],
  sources: [
    { label: "Bodleian Libraries – About the libraries（馆藏与系统规模）", url: "www.bodleian.ox.ac.uk/about/libraries" },
    { label: "Visit the Bodleian – History of the Bodleian（1602 / 1909–12 地下书库 / 1937–40 New Bodleian）", url: "visit.bodleian.ox.ac.uk/plan-your-visit/history-bodleian" },
    { label: "BBC – Bodleian Libraries completes Swindon move（2011-12，BSF £26M/153 英里）", url: "www.bbc.com/news/uk-england-oxfordshire-16325727" },
    { label: "Sackler 博客 – Offsite deliveries（2018-05，BSF 11.4m 架/逐件条码/日入藏千件）", url: "blogs.bodleian.ox.ac.uk/sackler/2018/05/25/sackler-101-offsite-deliveries/" },
    { label: "BBC Magazine – Weston Library Stirling 短名单（2016-09，£50M/总 £80M）", url: "www.bbc.com/news/magazine-37442351" },
    { label: "牛津大学官网 – 剑桥公爵揭幕 Weston（2016-05，Weston 基金会 £25M＋OUP 配捐）", url: "www.campaign.ox.ac.uk/news/weston-library-formally-opens" },
    { label: "Architects' Journal – Weston Library by Wilkinson Eyre（2015-04，书塔防火隐患/39km 地下书库）", url: "www.architectsjournal.co.uk/buildings/weston-library-by-wilkinson-eyre" },
    { label: "ORA – Underground Bookstore and Old Bodleian Access Project（Gladstone Link 复盘）", url: "ora.ox.ac.uk/objects/uuid:70603fa2-ac73-41e0-b264-d2f8fc2b92bc" },
    { label: "牛津英语系官网 – Schwarzman Centre opens（2025-09，£185M/Passivhaus）", url: "www.english.ox.ac.uk/article/stephen-a.-schwarzman-centre-for-the-humanities-opens-in-oxford" },
    { label: "Cherwell – Schwarzman Centre opens（2025-10-01，人文馆 2,100㎡/410 座/80 研究生专座）", url: "cherwell.org/2025/10/01/oxford-schwarzman-centre-opens/" },
    { label: "Wikipedia – Bodleian Libraries / Schwarzman Centre（28 馆口径、25,300 ㎡、资金来源争议）", url: "en.wikipedia.org/wiki/Bodleian_Libraries" }
  ]
},
{
  id: "ethz",
  name: "苏黎世联邦理工学院",
  nameEn: "ETH Zürich",
  founded: 1855,
  country: "瑞士",
  region: "欧洲",
  state: "苏黎世",
  reportId: "LR-20260928-02",
  reportDate: "2026-09-28",
  tagline: "在市中心与山顶之间，重新发明图书馆",
  mainLine: "1855 年与学校同岁的 ETH-Bibliothek 守着 Semper 设计的市中心历史主楼，却决定借 Hönggerberg 新高层 HWS 把主馆迁往山顶——展厅、研究阅览室、珍本展柜从土建阶段写进任务书，图书馆把自己重新立项为「信息学习中心」。",
  flagship: {
    name: "HWS 新教学研究楼与主馆迁址",
    note: "[ETH-Bibliothek 战略 2025–2028](https://ethz.ch/content/dam/ethz/associates/ethlibrary-dam/documents/ETH-Bibliothek_Strategie_2025-2028_final.pdf)确认：借 Hönggerberg 新楼把主馆迁出历史主楼，按「Information and Learning Center」重新塑造——新楼规划展厅、研究阅览室与珍本展柜；[TED 2025 招标](https://ted.europa.eu/de/notice/-/detail/175166-2025)显示项目仍在早期（建筑师/造价待验证）。",
    img: "ethz-hauptgebaude.jpg",
    imgCap: "ETH 主楼（HG, Rämistrasse 101）：主馆现址所在的历史建筑——受保护的空间正是「迁址而非改造」的原因。摄影：Leonhard Lenz (GPSLeo) / Wikimedia Commons（CC0）"
  },
  overview: {
    intro: "[ETH-Bibliothek](https://library.ethz.ch/en/) 是 ETH 苏黎世的中央图书馆：瑞士最大的公共自然科学与技术图书馆、国家自然与工程科学信息中心，1855 年与学校同岁创立。馆藏约 800 万模拟资源＋55 万数字资源（2022-09 口径），其中图片文献 379 万张、地图 34.3 万张（瑞士最大）；统一发现层 [ETH-Bibliothek @ swisscovery](https://library.ethz.ch/en/find-media/borrowing-and-using/swisscovery-hilfe-auf-einen-blick.html) 连接全国 490+ 家图书馆、3,000 万+ 条目——ETH 是 2017 年全国平台 SLSP 的发起主力。",
    stats: [
      { k: "馆藏总量", v: "800 万+ 件", s: "模拟资源；另有数字资源 55 万（2022-09 口径）" },
      { k: "图片文献", v: "379 万张", s: "图片档案馆 2000 年成立，核心约 320 万，成批进入维基共享" },
      { k: "发现层", v: "3,000 万+ 条目", s: "swisscovery 全国网络：490+ 家图书馆" },
      { k: "电子资源", v: "95.8 万电子书", s: "另有授权电子刊 4.5 万种、数据库 150 个" }
    ]
  },
  projects: [
    {
      name: "HWS 新楼与主馆迁址：把图书馆写进新楼任务书",
      nameEn: "Neubau Lehr- und Forschungsgebäude HWS · 2025 招标阶段",
      year: "2025 招标 · ~2032 口径",
      img: "ethz-hoenggerberg.jpg",
      imgCap: "Hönggerberg 校区，自 Hönggerbergstrasse 远眺：HWS 新楼与迁址后的主馆将落位于这一侧。摄影：Balise42 / Wikimedia Commons（CC BY 4.0）",
      stats: [{ k: "状态", v: "TED 2025 招标" }, { k: "定位", v: "信息学习中心" }, { k: "新楼配置", v: "展厅＋研究阅览室" }, { k: "竣工口径", v: "~2032（待验证）" }],
      facts: "ETH-Bibliothek 战略 2025–2028 直言：由于现有安置条件，图书馆的空间进一步发展以及对现代灵活协作工位的适配「不再能充分保障」——主馆所在的 HG 主楼 H 层是受保护的历史空间。战略的答案不是改造而是迁址：「规划中的 Campus Hönggerberg 新教学研究楼及与之关联的主馆搬迁，为 ETH 和图书馆提供了一次性机会，参与塑造一个面向未来的『[Information and Learning Center](https://ted.europa.eu/de/notice/-/detail/175166-2025)』式图书馆选址。」新楼内已规划展厅、研究阅览室（档案与珍本可在监督下使用）与珍本展柜。欧盟 TED 招标公告（第 175166-2025 号）确认 HWS 为「面向未来、创新和可持续的高层建筑」，将成为校区中心；2025 年 ETH 还为 HWS 单独招标变更管理（Change Management）服务——组织变革与土建同等优先。地热井场预计约 2032 年投运（staffnet 2025-08），常被间接引为 HWS 建成口径，但未获官方明确确认；建筑师与预算均未公开。",
      insight: "关键词是「借船出海」：图书馆不申请一栋自己的楼，而是把功能写进学校的新教学研究楼任务书——展厅、研究阅览室、珍本展柜在土建阶段就锁定，比单独立项建馆成功率高、也更抗通胀。可迁移：把「功能写入任务书」作为争取空间的默认动作，前提是能在学校基建决策早期进入编写组。隐忧：HWS 的建筑师、预算、竣工时间均未公开，项目仍在极早期；主馆迁出后 HG 主楼 H 层如何处置尚无公开方案；同期 HPQ 物理楼造价从 3.11 亿升至 3.87 亿瑞郎被联邦财务控制局公开批评（与 HWS 无关，但提醒绑定大项目也意味着共享预算风险——两栋楼的数字常被网络资料混淆）。"
    },
    {
      name: "Science City：二十年 campus 战略为一栋新馆铺路",
      nameEn: "Science City / Campus Hönggerberg 2040 · 1957–2018",
      year: "1957 决议 · 2018 总规",
      img: "ethz-campus.jpg",
      imgCap: "Hönggerberg 校园：绿地骨架与建筑密度的关系，对应 2040 规划「向内加密、中央大道改步行绿轴」。摄影：Ank Kumar / Wikimedia Commons（CC BY-SA 4.0）",
      stats: [{ k: "二校区决议", v: "1957" }, { k: "愿景首提", v: "2003 年报" }, { k: "总体规划", v: "2040（2018）" }, { k: "规划新高层", v: "2 座（HWS 其一）" }],
      facts: "Semper 主楼很快就装不下快速膨胀的教学科研，1957 年联邦委员会决议在城外 Hönggerberg 建设第二校区：1961–69 年一期、1972–76 年二期（含土木科研楼 HIF）、1996–2004 年三期 HCI。2003 年 ETH 年报首次提出 [Science City 愿景](https://ethz.ch/de/campus/entwickeln/hoenggerberg.html)：把 Learning and Conference Centre 做成校园地标、「主要由捐赠出资」在瑞士属创举、约万人工作与居住、呼应国家「2000 瓦社会」能源目标。2005/2007 年总体规划（Andrea Deplazes 团队）与特殊建筑条例（2006-12 苏黎世市议会近乎全票通过、2007 年秋生效）为 campus 立规。2013–16 年两座学生公寓 HWO（architektick）与 HWW（Stücheli）共约 900 床位——HWO 底层设学习工位与托儿所，地下藏 gta 建筑史档案。2018 年《Campus Hönggerberg 2040》：向内加密不向外扩张、沿中央大道 Wolfgang-Pauli-Strasse 建两座新高层、入口各设一栋门户公共楼。HWS 即 2040 规划的第一座高层，也是 2003 年「学习中心地标」愿景的兑现。",
      insight: "值得研究的不是某栋楼，而是「校园战略的耐心」：2003 愿景→2005/07 规划与建筑条例→2018 总体规划→2025 HWS 招标，一条 22 年的弧线。图书馆迁址不是图书馆的孤立决定，而是 campus 级规划的必然落子——「先有大规划，再有单项目」，每个单体因此获得合法性与资金通道。可迁移：向学校推介空间方案时，最好的入口不是图书馆单独的需求书，而是帮学校写 campus 规划里「学习空间」的那一章；HWO 底层「学习工位＋托儿所」证明学习空间已进入宿舍底商的逻辑。隐忧：22 年弧线依赖联邦制与建筑条例程序，时间成本不可平移；「约万人」是愿景口径而非现状统计。"
    },
    {
      name: "馆墙之外的国家基础设施",
      nameEn: "swisscovery · Bildarchiv · Research Collection · DOI Desk · 2017–",
      year: "2017 SLSP 创立起",
      img: "ethz-hoenggerberg.jpg",
      imgCap: "Hönggerberg 校区远眺：1985 年地下书库与 HDB 闭架书库馆位于这一校区——「外迁」在 ETH 已有四十年传统。摄影：Balise42 / Wikimedia Commons（CC BY 4.0）",
      stats: [{ k: "联网图书馆", v: "490+" }, { k: "全国条目", v: "3,000 万+" }, { k: "图片文献", v: "379 万张" }, { k: "地下书库", v: "1985 年起" }],
      facts: "战略 2025–2028 自述：ETH 深度参与创建全国平台 SLSP（2017），借助 [swisscovery](https://library.ethz.ch/en/find-media/borrowing-and-using/swisscovery-hilfe-auf-einen-blick.html) 把图书馆目录运营、电子资源许可谈判等标准化业务外包，集中资源开发以客户为中心的服务。ETH-Bibliothek 同时运营多个国家级平台：e-rara（15–19 世纪瑞士印本）、e-periodica（瑞士期刊全文）、e-manuscripta（手写文献）、E-Pics（图片在线档案）；DOI Desk 是瑞士高校与科研机构的中央 DOI 注册中心（与 DataCite 合作）；[Research Collection](https://www.research-collection.ethz.ch/) 是 ETH 的机构库，记录全校出版物并支撑学术年报。图片档案馆（2000 年成立，379 万张图片文献、核心约 320 万）不断有子收藏批量进入维基共享资源。珍本与手稿线包括托马斯·曼档案馆、马克斯·弗里施档案馆与瑞士规模最大的版画素描收藏。地下暗线：1985 年 ETH 在 Hönggerberg 建成地下书库存放低流通藏书，今 HDB 闭架书库馆延续这一逻辑。",
      insight: "ETH 示范了图书馆的第三种身份：国家知识基础设施的运营商——第一层是 discovery（swisscovery），第二层是出版基础设施（DOI Desk、e-rara/e-periodica），第三层是 openness（图片批量进入维基）。实体馆的 HWS 迁址发生在第三层背景之上：正因为发现与获取已经全国数字化，新馆才敢把面积让给展厅与学习空间，而不是书架。可迁移：「先数字底座、后空间放手」的次序——向学校论证新馆方案时，先讲清「获取已解决」，再谈空间分配；瑞士「地下＋闭架＋全国共享」的朴素外迁版本比北美机器人高架早了十年。隐忧：e-rara 等多馆共建，ETH 是运营主力而非唯一所有者；各平台访问量无统一公开口径，引用需谨慎。"
    }
  ],
  learningSpaces: "现状：主馆阅览室集中在 HG 主楼 H 层——受保护历史空间，只能微调；五个分馆按学科分布（建筑土木 HIL、地球科学 NO、GESS IFW、绿色 CHN、HDB 闭架书库 Hönggerberg）。战略 2025–2028 对「图书馆作为场所」的定义值得全文引用：开放工位与专注退避空间并存、家具可适配、现代技术配置、好空气与采光、可持续节能——新馆任务书先于建筑公布。2013–16 年的 HWO 学生公寓已示范「学习工位＋托儿所」进入宿舍底层；HIL「Living Lab」改造（至约 2035）将再造 1972–76 老楼的学习空间；HWS 则把展厅、研究阅览室与珍本展柜写进信息学习中心的任务书。",
  serviceModel: "法定任务（ETH 组织条例第 42 条）：保障 ETH 师生的信息与文献供给及研究者出版条件，并作为 ETH 域图书馆事务的「主导机构」（Leitstelle）。标准化业务外包给 SLSP/swisscovery（目录运营＋电子许可谈判），馆员聚焦客户中心服务；全国平台 e-rara、e-periodica、e-manuscripta、E-Pics 由 ETH-Bibliothek 运营；DOI Desk（与 DataCite 合作）是瑞士高校的中央 DOI 注册中心；circulation courier 支撑全国馆际递送，文献可送至任一参与馆。",
  trends: [
    { tid: "historic-renewal", title: "历史建筑的\"第二次生命\"", type: "fact", note: "HIF 实验楼（1972–76）近年整体翻新（Stücheli 事务所，木铝预制混合立面）；HPP 物理楼 2006–11 全面翻新；HIL（1972–76）将改造为 Living Lab 至约 2035——老楼再生在 ETH 是规划文本里的常态词汇。" },
    { tid: "offsite-storage", title: "藏书外迁 · 高密度库房", type: "judgment", note: "1985 年 Hönggerberg 地下书库（外迁思维的 40 年前身）；HDB 闭架书库馆延续至今——不靠机器人高架，靠「地下＋闭架＋全国共享」的朴素版本，比北美早十年。" },
    { tid: "learning-commons", title: "Learning Commons 常态化", type: "fact", note: "HWS 定位「Information and Learning Center」：展厅、研究阅览室、珍本柜与图书馆同楼；HWO 宿舍底层学习工位＋托儿所——commons 与展览/托育功能复合。" },
    { tid: "data-driven-ops", title: "数据化运营", type: "judgment", note: "SLSP（2017）外包目录与许可谈判、馆员转向客户服务；AI 与开放科学列入 2025–2028 五大战略重点；Research Collection 记录全校出版——数据化运营的国家队版本。" },
    { tid: "special-collections", title: "特藏走向台前", type: "fact", note: "图片档案馆 379 万张文献成批进入维基共享；托马斯·曼、马克斯·弗里施档案馆公开服务；HWS 新馆规划展厅与珍本展柜——特藏成为公共基础设施。" }
  ],
  business: [
    "「借船出海」式空间获取：把图书馆功能（展厅、研究阅览室、珍本柜）写进学校新教学楼的任务书，在土建阶段锁定——比单独立项建馆成功率高、抗通胀；前提是能在学校基建决策早期进入任务书编写组。",
    "「先数字底座、后空间放手」的次序论证：发现层打通后，新馆才有底气把面积让给人而不是书架——向学校论证新馆方案时，先讲清「获取已解决」，再谈空间分配。",
    "变更管理（Change Management）与土建同优先级招标：HWS 把变更管理写进 2025 年招标包，组织变革与土建同等优先——国内新馆普遍重土建轻迁移，「变更管理预算」是专业服务的直接切入点。",
    "campus 规划耐心与入口选择：2003 愿景→2018 总规→2025 招标的 22 年弧线证明单馆项目的合法性来自校级规划——业务入口是帮学校写 campus 规划中的「学习空间」章节，而不是图书馆单独的需求书。",
    "HWO 式服务打包：学习工位＋托儿所进宿舍底层——学习空间的边界可以向住宿、托育延伸，谈空间方案时不必局限于馆舍。"
  ],
  limits: [
    "HWS 的建筑师/设计竞赛结果与竞赛年份未查到，本研究未猜测。",
    "HWS 预算与竣工时间未公开：地热井场约 2032 年为间接口径，未获官方确认；HPQ 物理楼 3.39 亿/3.87 亿瑞郎造价属于另一项目，不可混淆。",
    "主馆迁出后 HG 主楼 H 层空间的处置方案尚无公开信息。",
    "馆藏 key figures 为 2022-09 口径，此后已有增长，引用需注明时点。",
    "「约万人工作与居住」「2000 瓦社会」等为愿景/政策语境口径，非现状统计。"
  ],
  sources: [
    { label: "ETH-Bibliothek 官网（机构定位、Locations、馆藏 key figures 2022-09）", url: "library.ethz.ch/en" },
    { label: "ETH-Bibliothek 战略 2025–2028 官方 PDF（HWS 迁馆/信息学习中心、AI 与开放科学、SLSP 外包）", url: "ethz.ch/content/dam/ethz/associates/ethlibrary-dam/documents/ETH-Bibliothek_Strategie_2025-2028_final.pdf" },
    { label: "TED 招标公告 175166-2025（HWS 为面向未来的创新可持续高层建筑）", url: "ted.europa.eu/de/notice/-/detail/175166-2025" },
    { label: "ETH staffnet 2025-04（HPQ 3.39 亿→3.87 亿瑞郎；地热井场约 2032）", url: "ethz.ch/staffnet/de/news-und-veranstaltungen/intern-aktuell/archiv/2025/04/teuerung-verteuert-bauprojekt.html" },
    { label: "ETH 官方 Campus Hönggerberg 页（2040 向内加密、两座新高层、门户楼）", url: "ethz.ch/de/campus/entwickeln/hoenggerberg.html" },
    { label: "Wikipedia – ETH Library（key figures、swisscovery 490+/3,000 万、图片档案馆、全国平台）", url: "en.wikipedia.org/wiki/ETH_Library" },
    { label: "Wikipedia（德语）– ETH-Bibliothek（1985 地下书库、1991 分馆、主楼改造史）", url: "de.wikipedia.org/wiki/ETH-Bibliothek" },
    { label: "Baublatt 2024-09（1957 决议、1972–76 二期 HIF、2040 改造策略）", url: "www.baublatt.ch/bauprojekte/gebaeudesanierung-innovative-huelle-fuer-eth-forschungsgebaeude-36525" },
    { label: "myscience.ch 2025-08（HIL Living Lab 改造至约 2035）", url: "www.myscience.ch/de/news/wire/eth_zuerich_startet_pionierhaftes_forschungsprojekt_am_bau-2025-ethz" },
    { label: "Tages-Anzeiger 2025-04-08（HPQ 造价受联邦财务控制局批评，区别于 HWS）", url: "www.tagesanzeiger.ch/kostenexplosion-bei-eth-zuerich-neubau-wird-76-millionen-franken-teurer-als-geplant-172739242634" }
  ]
},
{
  id: "imperial",
  name: "帝国理工学院",
  nameEn: "Imperial College London",
  founded: 1907,
  country: "英国",
  region: "欧洲",
  state: "伦敦 · 南肯辛顿",
  reportId: "LR-20260929-01",
  reportDate: "2026-09-29",
  tagline: "每隔一代人就重生一次的主馆",
  mainLine: "1969 年启用的帝国理工中央图书馆每约三十年重生一次——1997 年加建两层玻璃楼层、Waterstones 书店进馆，2018 年 £11M 翻新，2023 年更名 Abdus Salam Library；脚下还埋着一场与科学博物馆共用图书馆五十年的全球孤例。",
  flagship: {
    name: "主馆的四次生命（Central Library → Abdus Salam Library）",
    note: "[1969 建馆→1997 加建→2018 翻新（£11M）→2023 更名](https://en.wikipedia.org/wiki/Abdus_Salam_Library)：Foster 咨询、McAslan 加建两层玻璃楼、Waterstones 书店进馆；2023 年为纪念诺奖得主 Abdus Salam [正式更名](https://www.imperial.ac.uk/news/245817/abdus-salam-library-named-honour-leading/)，成为校方回应校史报告的叙事载体。",
    img: "imperial-salam-lawn.jpg",
    imgCap: "中央图书馆俯瞰 Queen's Lawn（2023 年更名 Abdus Salam Library）。摄影：Shadowssettle / Wikimedia Commons（CC BY-SA 4.0）"
  },
  overview: {
    intro: "[Abdus Salam Library](https://www.imperial.ac.uk/library)（原 Central Library）是帝国理工最大的学术与研究图书馆、全校 7 馆之主馆，1969 年 8 月启用，此前为 1959 年开馆的 Lyon Playfair Library；馆藏源头最老可追溯至 1845 年，1992 年曾与科学博物馆图书馆合并馆藏。2023 年为纪念 1979 年诺贝尔物理学奖得主 Abdus Salam 更名。分馆覆盖五个医院校区与 Silwood Park；White City 深科技校区不设馆、只设预约书取书柜。",
    stats: [
      { k: "现馆启用", v: "1969 年", s: "Lyon Playfair Library 1959 年为其前身" },
      { k: "分馆网络", v: "7 所", s: "主馆＋五医院校区馆＋Silwood Park" },
      { k: "电子馆藏", v: "63.7 万+ 种", s: "2025–26 手册口径；2023–24 为约 40 万" },
      { k: "主馆开放", v: "24 小时", s: "学习空间；GoStudy 08:00–23:00 接力" }
    ]
  },
  projects: [
    {
      name: "主馆的四次生命：加建、书店进馆、翻新与更名",
      nameEn: "Central Library → Abdus Salam Library · 1969–2023",
      year: "1969 建馆 · 2023 更名",
      img: "imperial-salam-lawn.jpg",
      imgCap: "主馆与 Queen's Lawn、Queen's Tower 的空间关系——「校园客厅」式场所定位。摄影：Shadowssettle / Wikimedia Commons（CC BY-SA 4.0）",
      stats: [{ k: "现馆启用", v: "1969.8" }, { k: "加建", v: "1997 两层玻璃楼" }, { k: "翻新", v: "£11M（2017–18）" }, { k: "更名", v: "2023" }],
      facts: "1960 年代政府大投资下帝国理工快速扩张，1959 年启用的 Lyon Playfair Library（以皇家矿业学院化学教授 Lord Playfair 命名）不敷使用，专门建设的新中央图书馆 1969 年 8 月与 College Block（今 Sherfield Building）同期落成。此后同一栋楼每代人更新一次：1994 年校方邀 [Foster and Partners 做改造咨询](https://en.wikipedia.org/wiki/Abdus_Salam_Library)，1997 年落地——地面层扩建引入 Waterstones 书店，顶部加建两层现代玻璃楼层（John McAslan + Partners），Haldane 馆藏此时已逾 4 万件；2017 年至 2018 年夏 £11M 大规模翻新（含空调）。2023-06-30 校方宣布更名为 Abdus Salam Library：2020 年校方委托 History Group 审查校史（含与英帝国的关联），2021-10 报告建议「Salam 应被广泛宣传」，更名是回应举措之一——Salam 1957 年加入帝国理工、创立理论物理组，1979 年获诺贝尔物理学奖，1964 年创立国际理论物理中心（ICTP）。2025-08 新生指南显示四层新增 Group Study Space 与 Wellbeing Room。",
      insight: "「滚动更新」的教科书：约 30 年一个周期（1969→1997→2018→2023），每次投入 £11M 量级而非推倒重建——对经费受限的老馆比「一次性大改」更可持续。1997 年 Waterstones 书店进馆是「第三空间」正式命名前的早期实验；2023 年更名示范了空间命名作为治理工具的用法——图书馆成为机构回应历史争议的叙事载体。隐忧：2018 年翻新以机电升级为主，55 岁建筑的下一轮结构性更新已被下一个 30 年周期预定；更名后是否配套 Salam 主题馆藏展示，公开信息有限。"
    },
    {
      name: "与科学博物馆共用图书馆的五十年",
      nameEn: "Science Museum Library × Imperial · 1969–2014",
      year: "1969 共楼 · 2014 分家",
      img: "imperial-salam-entrance.jpg",
      imgCap: "Abdus Salam Library 入口（2023 年更名后）：更名以导视与叙事为主，无大规模土建。摄影：Hammersfan / Wikimedia Commons（CC BY 4.0）",
      stats: [{ k: "最老馆藏", v: "1845 年" }, { k: "博物馆馆迁入", v: "1969" }, { k: "馆藏合并", v: "1992" }, { k: "分家关闭", v: "2014" }],
      facts: "帝国理工 1907 年由皇家科学院、皇家矿业学院、城市与行会学院合并而成，各院老馆分散（最老 1845 年）；近在咫尺的科学博物馆拥有国家级科技史文献库——两馆物理相邻、馆藏互补。1959 年 Lyon Playfair Library 开放，馆藏源自各工程系馆合并；1969 年新中央馆落成时[科学博物馆图书馆迁入同一栋楼](https://en.wikipedia.org/wiki/Abdus_Salam_Library)——最初的方案是让博物馆馆完全并入大学馆，1971 年前该计划被取消；1992 年两馆馆藏正式合并为单一图书馆；2014 年科学博物馆图书馆关闭，资源移至 Queen's Gate 的 Dana Centre 与馆外库房。一次「共楼→合并→分家」的完整周期，历时 45 年。",
      insight: "「大学馆＋博物馆馆」合并实验的全球孤例，完整呈现了跨机构合作的全生命周期：1969 共楼（物理整合）→1971 合并叫停（治理权未解）→1992 合并（馆藏层妥协）→2014 分家（战略重心分化）。教训直白：跨机构合并最大的成本不是搬书，而是治理权——「谁说了算」没写清楚，合作就反复。对国内「高校馆＋公共馆/博物馆」共建共享的启示：协议里治理权条款优先于藏书条款。合并期形成的大量科技史馆藏，至今仍是帝国档案与特藏的底子。"
    },
    {
      name: "一馆七舍：跨伦敦的空间网络与 24 小时学习基础设施",
      nameEn: "7 Libraries + GoStudy + Book Locker",
      year: "现行网络",
      img: "imperial-salam-sherfield.jpg",
      imgCap: "Sherfield Building 与中央图书馆沿 Queen's Lawn 并立：1969 年「图书馆＋学院楼」配套建设的 campus 格局。摄影：Shadowssettle / Wikimedia Commons（CC BY-SA 4.0）",
      stats: [{ k: "图书馆", v: "7 所" }, { k: "主馆", v: "24 小时" }, { k: "GoStudy", v: "08:00–23:00" }, { k: "外借上限", v: "40 册" }],
      facts: "帝国理工是跨伦敦的多点布局院校：南肯辛顿主校区＋五个医院校区＋Silwood Park＋White City 深科技校区。[官网 Our libraries](https://www.imperial.ac.uk/admin-services/library/use-the-library/our-libraries/)列出 Abdus Salam Library 主馆与 Charing Cross、Chelsea & Westminster、Hammersmith、Royal Brompton、St Mary's（Fleming Library）、Silwood Park 六所分馆；White City 校区没有独立图书馆，设 book locker 供预约取书。主馆学习空间 24 小时开放，自助借还全网络通借通还；主馆之外 GoStudy（化学楼 4–5 层）与 Student Space（Sherfield 4 层）08:00–23:00 每周七天。Charing Cross 馆配协作 booths、solo pods（单人静音舱）与研习室；2025 年主馆四层新增 Group Study Space 与 Wellbeing Room（心理健康室）；三校区间有免费穿梭巴士；可借 40 册，缺藏文献走免费 Document Delivery。",
      insight: "格拉斯哥「多楼分时接力」的伦敦加强版——接力对象不是校内多楼，而是跨医院与校区的网络：主馆通宵打底、GoStudy 补 08–23 全覆盖、医院馆按临床作息运行，一套系统三种节奏。最值得引用的细节是 White City 的 book locker：新校区不配馆、只配柜——馆藏获取高度数字化后，新校区第一代学习基础设施可以轻到只有一个取书柜加共享学习区。隐忧：24 小时运行的能耗与安保成本、医院校区馆「大学＋NHS 双重治理」的权责划分，均无公开评估数据。"
    }
  ],
  learningSpaces: "主馆学习空间 24 小时开放是基本盘；GoStudy（化学楼 4–5 层）与 Student Space（Sherfield 4 层）以 08:00–23:00 每周七天补位——一通宵一早班的双层结构。空间类型细化到行为颗粒：Charing Cross 馆的协作 booths（4 人）、solo pods（单人静音舱，可调座椅/通风/照明，专为在线会议与语音输入设计）、10 人研习室；2025 年主馆四层新增 Group Study Space 与 Wellbeing Room——学习空间与心理健康设施开始同层配置。1997 年 Waterstones 书店进馆则是「第三空间」的祖师爷级实验。",
  serviceModel: "全校统一服务入口为图书馆官网；7 所图书馆网络通借通还（自助借还，任意馆可还）；缺藏文献免费 Document Delivery；医院校区馆同时服务 NHS 信托员工，是「大学＋医疗系统」双重会员制。White City 校区的 book locker 把「分馆」压缩成一个取书柜——馆藏获取靠网络与物流而非馆舍。学科馆员制度完备（各院系专设 Department Librarian），1992 年与科学博物馆合并的馆藏构成档案与特藏的底子。",
  trends: [
    { tid: "historic-renewal", title: "历史建筑的\"第二次生命\"", type: "fact", note: "1969 建馆→1997 McAslan 加建两层玻璃楼→2017–18 £11M 翻新→2023 更名：约 30 年一个更新周期的滚动再生，单次投入不大但每次都跟上了一代学习方式。" },
    { tid: "247-spaces", title: "全天候学习空间", type: "fact", note: "主馆学习空间 24 小时；GoStudy（化学楼 4–5 层）与 Student Space（Sherfield 4 层）08:00–23:00 每周七天——单馆通宵＋共享学习区接力的伦敦版本。" },
    { tid: "learning-commons", title: "Learning Commons 常态化", type: "fact", note: "1997 年 Waterstones 书店进馆（第三空间早期实验）；2025 年四层新增 Group Study Space 与 Wellbeing Room；Charing Cross 馆协作 booths 与 solo pods——commons 细化到行为颗粒。" },
    { title: "跨机构合作与治理", type: "judgment", note: "与科学博物馆图书馆共楼 45 年（1969 迁入→1992 合并→2014 分家）：合并的最大成本是治理权而非搬书——协议里治理条款优先于藏书条款。" },
    { title: "空间命名即叙事", type: "fact", note: "2023 年更名 Abdus Salam Library 是校方回应 History Group 校史报告的举措——馆名成为机构叙事的治理工具，图书馆由此进入校级叙事中心。" }
  ],
  business: [
    "「30 年节律」滚动更新：单次 £11M 级投入、约三十年一个周期，每次恰好回应一代学习方式——比攒一次性大改更适合经费受限的老馆；前提是有机电与空间健康度监测。",
    "空间命名作为叙事与治理工具：更名（2023）把图书馆变成机构回应历史争议的载体；同理可用于捐赠叙事与馆藏展示——前提是命名有真实叙事内容支撑。",
    "跨机构共建「先谈治理再谈书架」：科学博物馆 45 年分合史证明治理权条款没写清楚，共楼、合并、分家就会反复——协议起草阶段就要有治理结构设计。",
    "新校区「先配柜、不配馆」：White City 以 book locker＋共享学习区起步——馆藏数字化与跨馆物流就绪后，新校区第一代学习基础设施可以轻到只有一个取书柜。"
  ],
  limits: [
    "更名后馆内是否增设 Salam 主题馆藏/展示区，公开信息有限。",
    "2014 年后科学博物馆文献服务（Dana Centre）的馆藏规模与服务范围未细查。",
    "各医院分馆的通宵开放具体范围未逐一核验（官网概括语为「许多图书馆 24 小时」）。",
    "Waterstones 书店进馆的租金与合作模式细节未公开。",
    "电子馆藏数量随年度快速增长（2023–24 约 40 万→2025–26 逾 63.7 万种），引用必须注明年份。"
  ],
  sources: [
    { label: "帝国理工图书馆官网（总入口）", url: "www.imperial.ac.uk/library" },
    { label: "官网 Our libraries（7 所分馆、GoStudy、开放时间）", url: "www.imperial.ac.uk/admin-services/library/use-the-library/our-libraries/" },
    { label: "官网新生页 2025-08（24 小时、book locker、Group Study Space、Wellbeing Room）", url: "www.imperial.ac.uk/admin-services/library/library-services-for-new-students/" },
    { label: "校方新闻 2023-06-30（更名决定、History Group 背景、Salam 生平）", url: "www.imperial.ac.uk/news/245817/abdus-salam-library-named-honour-leading/" },
    { label: "Wikipedia – Abdus Salam Library（1969 现馆、1997 加建、£11M 翻新、博物馆馆沿革）", url: "en.wikipedia.org/wiki/Abdus_Salam_Library" },
    { label: "Felix 2023-09-28（更名背景深度侧写）", url: "felixonline.co.uk/articles/central-library-renamed-in-honour-of-abdus-salam/" },
    { label: "PGT Handbook 2025–26（馆藏 637,000+、借 40 册、24 小时）", url: "www.imperial.ac.uk/media/imperial-college/medicine/surgery-cancer/pg-handbook/Imperial-PGR-S&C-Programme-Handbook-Final_2025-26.pdf" },
    { label: "MEd Handbook 2024–25（馆藏 almost 667,000、GoStudy、Sherfield 3 层）", url: "www.imperial.ac.uk/media/imperial-college/staff/education-development-unit/public/MED-Handbook-2024-25.pdf" },
    { label: "官网 Charing Cross 馆页（协作 booths、solo pods、研习室）", url: "www.imperial.ac.uk/admin-services/library/use-the-library/our-libraries/charing-cross-campus-library/" }
  ]
}
,
{
  id: "cambridge",
  name: "剑桥大学",
  nameEn: "University of Cambridge",
  founded: 1209,
  country: "英国",
  region: "欧洲",
  state: "剑桥",
  reportId: "LR-20260929-02",
  reportDate: "2026-09-29",
  tagline: "一座塔锁住的六分之一英国出版史",
  mainLine: "1416 年有第一间馆室、1710 年起依法收藏英国出版的每一本书的剑桥 UL，用三百年法定送存义务攒下约 900 万件馆藏；1934 年 Scott 设计、洛克菲勒提议加建的 157 英尺塔，阴差阳错成为低频出版物的垂直归宿。将近一个世纪后，Seeley 迁入、Stirling 大修、Herzog & de Meuron 概念方案三线并发，同时改写这座楼的下一个百年。",
  flagship: {
    name: "157 英尺的塔与法定送存的三层解法（UL · 1710–2018）",
    note: "[1416 年首见馆室记载→1710 年《版权法》特权馆→1934 年 Scott 现馆（Rockefeller 提议加塔）→1972 年书库扩建→2018 年 Tall Tales 展览](https://en.wikipedia.org/wiki/Cambridge_University_Library)：约 900 万件馆藏、年增约 10 万件，[法定送存馆中唯一大规模开架](https://www.jaspul.org/ind/asset/docs/kokusai_kiroku01.pdf)（约 200 万册）；低频版权收登约百万册入塔，更低频转 [Ely 馆外库](https://www.cam.ac.uk/stories/tall-tales)或改电子格式——「塔＋馆外库＋电子化」三层分流。",
    img: "cambridge-ul-tower.jpg",
    imgCap: "UL 主入口与 157 英尺塔楼：为面子而生、为里子所用的塔。摄影：Michael Behrend / geograph.org.uk（CC BY-SA 2.0）"
  },
  overview: {
    intro: "[Cambridge University Library](https://www.lib.cam.ac.uk/)（UL）是剑桥大学总图书馆、英国[六家法定送存图书馆](https://en.wikipedia.org/wiki/Cambridge_University_Library)之一，馆藏约 900 万件、年增约 10 万件（约三分之二来自法定送存）。现馆由 Giles Gilbert Scott 设计、1934 年启用，157 英尺塔楼为 Grade II 登录建筑；全校各学院、学系图书馆合计约 114 所，统一发现系统为 iDiscover。2025-01 起历史系 Seeley Library 整体迁入 UL 一层 West Room，等待其所在的 Grade II* 名楼 Stirling Building 大修（2025-05 获批、2026-05 开工、计划 2028 完工，£78.9m）；2026-01，[Herzog & de Meuron 的 UL 未来概念方案](https://www.em.admin.cam.ac.uk/news/university-library-future-exhibition)开始公众展览。",
    stats: [
      { k: "馆史源头", v: "1416 年", s: "最早馆藏目录 1424 年，122 卷" },
      { k: "馆藏规模", v: "约 900 万件", s: "年增约 10 万件；约 200 万册开架" },
      { k: "塔藏", v: "约百万册", s: "17 层塔中 10 层藏书，最老 1710 年" },
      { k: "全系统", v: "约 114 所", s: "含 31 所学院馆；统一入口 iDiscover" }
    ]
  },
  projects: [
    {
      name: "157 英尺的塔：法定送存、Rockefeller 与「塔的辩证法」",
      nameEn: "The Tower & Legal Deposit · 1710–2018",
      year: "1710 法定送存 · 1934 现馆",
      img: "cambridge-ul-tower.jpg",
      imgCap: "UL 主入口与塔楼：Scott 砖构立面与垂直塔身的比例关系。摄影：Michael Behrend / geograph.org.uk（CC BY-SA 2.0）",
      stats: [{ k: "法定送存", v: "1710 年起" }, { k: "现馆启用", v: "1934" }, { k: "塔高", v: "157 英尺" }, { k: "馆藏", v: "约 900 万件" }],
      facts: "老馆在 Old Schools，1710 年起承接版权收登，到 1920 年代已塞满 20 英里书架，1922 年校方决定建馆。1931–1934 年[由 Giles Gilbert Scott 设计建成](https://en.wikipedia.org/wiki/Cambridge_University_Library)（红色电话亭、Battersea 发电站的建筑师），资金主要来自各学院与私人捐助，最大金主 John D. Rockefeller 嫌主入口不够宏伟，说服建筑师加入中央塔楼——塔高 157 英尺，比圣约翰学院礼拜堂低 6 英尺、比国王学院礼拜堂高 10 英尺，时任首相 Chamberlain 称之为「a magnificent erection」。1972 年加建封闭书库。塔的 17 层中 10 层藏书约百万册，最老 1710 年——《霍比特人》《皇家赌场》首版当年因「学术价值低」被打入塔中；[2018 年 Tall Tales 展览](https://www.cam.ac.uk/stories/tall-tales)首次把塔藏整体公开展出（90% 以上首次亮相）。如今大量非学术版权收登转入 Ely 馆外库或以电子格式接收；UL 保持约 200 万册开架，是法定送存馆中唯一大规模开架并允许部分读者外借的一家。",
      insight: "「法定收藏」与「开架服务」分层共存的百年样本：法定送存的硬约束是每种一本、永不剔除，剑桥的答案是三层分流——高频学术馆藏开架、低频版权收登上塔、更低频转馆外库或直接收电子格式。启示：① 高层塔式存储不是过时的象征，而是义务型收藏的成熟解法——对承担呈缴/特藏职能的国内大型馆，「垂直塔＋密集库」分层比一味剔旧更可持续；② 2018 年展览证明「锁起来」的收藏同样是叙事资产——90% 首展率的库存本身就是内容生产的富矿。隐忧：H&deM 概念方案若落地，塔与主馆的功能配比如何调整尚无公开文本。"
    },
    {
      name: "Seeley Library 迁入主馆与 Stirling Building 大修：老馆改造的「先迁后修」",
      nameEn: "Seeley Move & Stirling Refurbishment · 2025–2028",
      year: "2025 迁入 · 3–4 年工期",
      img: "cambridge-ul-facade.jpg",
      imgCap: "UL 西侧面全景：Seeley Library 迁入后，主馆冗余容量成为全校改造的「避震舱」。摄影：N Chadwick / geograph.org.uk（CC BY-SA 2.0）",
      stats: [{ k: "Stirling 楼", v: "1968 启用" }, { k: "Seeley 迁出", v: "2024.12" }, { k: "West Room 开放", v: "2025.1.21" }, { k: "工期·造价", v: "2026–2028 · £78.9m" }],
      facts: "历史系所在的 Stirling Building 是 [James Stirling 设计的 20 世纪建筑名作（Grade II*）](https://www.hist.cam.ac.uk/faculty-building-be-vacated-ahead-major-refurbishment)，1968 年启用；将近 60 年后屋顶漏雨、大风天多次闭馆。[Seeley Library 2024 年 12 月整体迁入 UL 一层 West Room](https://www.lib.cam.ac.uk/stories/seeley-library)（沿主阅览室、无台阶通行），2025-01-21 起随 UL 开放——学期中周一至五 9:00–19:00（复活节学期至 22:00）、周六至 16:45；馆员团队全建制进驻，培训、工作坊、一对一约见照常，读者享用 UL 全部馆藏与茶室；还书点多达三处，含馆外 24 小时电话亭书箱。Stirling 改造 2025-02 递交规划申请、5 月底获批，主体工程 2026-05 开工、计划 2028 完工，总造价 £78.9m（BDP 设计、SDC 施工，5,200 ㎡）：修复历史特征、南北各加扩建亭阁、地面层打开为可穿越空间、无障碍通达全部楼层，采用可再生能源——校方称其为登录建筑改造的示范工程。",
      insight: "「先迁后修」的完整教科书，关键不在搬迁本身，而在安置规格：Seeley 不是临时凑合，而是带着完整团队与服务标准迁入主馆——迁入即「升级」。与牛津 Weston 改造期把读者安置进圆楼同构：主馆的冗余容量就是全校旧馆改造的「避震舱」。更深一层：一次屋顶漏雨反而完成了学科馆向大学馆体系的实质整合——物理整合倒逼组织整合。启示：国内老馆大修前，值得先做一次「全校容量腾挪地图」——答案往往不在新建临时馆，而在主馆的弹性空间里。隐忧：3–4 年工期中 West Room 的占用成本、Seeley 迁回后的空间分配，均未见公开评估。"
    },
    {
      name: "West Hub 与 Moore Library：对外开放的共享枢纽＋一笔捐赠完成的科学网整合",
      nameEn: "West Hub 2022 + Moore Library 2001",
      year: "2001 · 2022",
      img: "cambridge-ul-backs.jpg",
      imgCap: "从康河一侧看 UL 与剑桥天际线：塔楼数英里外可见。摄影：Jdforrester / Wikimedia Commons（CC BY-SA 3.0）",
      stats: [{ k: "Moore 馆", v: "2001 启用" }, { k: "捐赠", v: "£7.5M" }, { k: "West Hub", v: "2022.4.26" }, { k: "全系统", v: "约 114 馆" }],
      facts: "[Betty & Gordon Moore Library 2001-10-01 开放](https://moore.libraries.cam.ac.uk/our-history)（Edward Cullinan 设计），由 Intel 创始人 Gordon Moore 夫妇 £7.5M 捐赠建成，是 UL 分馆兼两数学系系馆；设计定位「21 世纪混合图书馆」标杆——四层 7,000 余延米开架、初始容量 15.6 万册、70 多个公共工作站、全部座位通电源，设计目标含安全 24 小时开放；把科学期刊馆、主馆理科藏书与两个数学系馆四处藏书合到一处，2015 年又承接关闭的 Central Science Library 馆藏。[West Hub 2022-04-26 开放](https://www.cam.ac.uk/stories/westhub)（Jestico + Whiles 设计，BREEAM Excellent，地源热泵），是剑桥第一座对公众开放的 co-working hub：双主入口形成穿越动线，鼓励社区居民穿楼而过；上层设图书馆服务、媒体实验室、个人研习舱，承接化工、计算机等学科馆员驻点，并承担 Foundation Year 教学；图书馆团队主办的 Research Café 对所有人开放（2026-03 主题为可持续发展），经 Apollo 开放存取库传播成果。",
      insight: "两个案例各给出一条可迁移打法。West Hub 重新定义了 Learning Commons：commons 不只是校内共享，而是大学把第一张桌子摆进社区——穿越式动线、咖啡、活动对所有人开放，在预算紧缩年代既是政治资产也是使用率解药。Moore Library 示范「捐赠冠名＋学科整合」的打包方案：一笔 £7.5M 捐赠同时完成新馆建设与四条藏书线的物理合并——捐赠叙事的题眼不是楼，而是「把分散的科学藏书合成一个 21 世纪图书馆」这件事本身。合看剑桥的网络级更新公式：新钱去新点，腾出来的老楼容量做再生，全局由 114 馆＋iDiscover 兜底。隐忧：West Hub 图书馆服务的馆藏边界未见公开口径；Moore 24 小时开放的现行实际时段未逐一核验。"
    }
  ],
  learningSpaces: "UL 内部按行为分层：Main Reading Room 静音、South Wing Study Hub 协作讨论、Commonwealth Room 公共电脑、North Reading Room 站立式书桌、West 4 有空调，考试季另设 24 小时电脑区——官方用「哪里适合干什么」的导览语言代替楼层编号。茶室（Tea Room）是 UL 的老传统。Seeley 迁入后，West Room 读者同时享用 UL 全部学习空间。馆外，Scott 设计的红色电话亭被改造成 24 小时还书箱——电话亭与 UL 出自同一位建筑师之手，构成英式幽默的闭环。West Hub 则把「学习空间」外推为对公众开放的 co-working 枢纽：个人研习舱、媒体实验室、Research Café。",
  serviceModel: "全校 114 所图书馆经 iDiscover 统一发现（其前身可追溯至 1880 年代的联合目录工程，是今天发现系统的祖师爷）。UL 作为法定送存馆中唯一大规模开架并允许部分读者外借的一家，服务标准天然高于其他送存馆：Reader Services Desk、Scan & Deliver、特藏阅览室分级服务；Seeley 迁入后学科馆员服务并轨——历史、政治、社会学、土地经济的专指服务在 UL 一层照常运行，还书网络三处通还（含 24 小时电话亭书箱）。West Hub 把服务边界推向公众：任何人都可参加 Research Café、使用穿越动线与咖啡区。",
  trends: [
    { tid: "historic-renewal", title: "历史建筑的\"第二次生命\"", type: "fact", note: "1934 年 Grade II 主馆：1990 年代以来不断内部更新，2026-01 Herzog & de Meuron 概念方案公展（遗产保护＋碳足迹＋重新开放历史区域）；同期历史系 Stirling 名楼（Grade II*）2025-05 获批、2026-05 开工大修，计划 2028 完工——两座 20 世纪名楼的再生在同一所大学并行。" },
    { tid: "offsite-storage", title: "藏书外迁 · 高密度库房", type: "fact", note: "法定送存的低频部分（非学术版权收登）转入 Ely 馆外库或改收电子格式；157 英尺塔本身即垂直高密度存储（17 层中 10 层藏书约百万册）——义务型收藏的三层分流。" },
    { tid: "247-spaces", title: "全天候学习空间", type: "fact", note: "UL 复活节学期开放至 22:00；Moore Library 以 24 小时安全开放为设计目标；考试季设 24 小时电脑区；West Hub 以长时段共享办公运行——全天候以「分时梯度」而非单楼通宵实现。" },
    { tid: "learning-commons", title: "Learning Commons 常态化", type: "fact", note: "West Hub 是大学第一座对公众开放的 co-working hub：穿越动线、咖啡、媒体实验室、Research Café——commons 的边界从校内推到社区；UL 茶室与行为分层学习空间则是校内版。" },
    { title: "双重身份治理", type: "judgment", note: "「大学馆＋国家记忆基础设施」的双重身份使 UL 的藏书策略受法律约束（每种必收、永不剔除）——双重身份不是负担的叠加，而是逼出「塔＋馆外库＋电子化」三层解法的结构动力。" },
    { tid: "renovation-decant", title: "先迁后修：安置做进主馆冗余容量", type: "fact", note: "Seeley Library 2024 年 12 月整体迁入 UL 一层 West Room，2025-01 随主馆开放——馆员团队全建制进驻、还书点多达三处（含 24 小时电话亭书箱），安置规格定为「迁入即升级」；Stirling 名楼随后启动大修（2026-05 开工，2028 完工）——主馆冗余容量就是全校旧馆改造的「避震舱」。" },
    { tid: "open-to-public", title: "大学设施公共化", type: "fact", note: "West Hub（2022）是剑桥第一座对公众开放的 co-working hub：两个主入口相对形成穿越动线，图书馆服务、媒体实验室、个人研习舱对外开放，Research Café 任何人可报名闪电演讲——「大学第一张桌子」摆进了社区。" }
  ],
  business: [
    "「塔＋馆外库＋电子化」三层分流：义务型/特藏级收藏走垂直塔与密集库，把开架空间还给读者；低利用率收藏同样是叙事资产（Tall Tales 模式）——前提是馆藏分级有制度依据。",
    "「先迁后修」：大修前先做全校容量腾挪地图，把安置规格定为「迁入即升级」（Seeley 带完整团队进主馆）而非临时凑合——前提是中心馆确有冗余容量可借。",
    "学习空间公共化的分寸：穿越式动线、咖啡与活动开放、研究区凭卡进入，是「公共化」与「秩序」的低成本平衡（West Hub 模式）——前提是建筑选址允许双向开口、有专门运营团队。",
    "捐赠叙事的「题眼」选择：Moore £7.5M 的叙事不是一栋楼，而是「把四处分散的科学藏书合成一个 21 世纪图书馆」——给捐赠人一个系统级的故事，比一块砖的冠名更有募捐力。",
    "跟踪项：Herzog & de Meuron 的 UL 概念方案（2026-01 公展）若落地，将是 1930 年代法定送存馆整体再生的下一个全球样板，建议纳入长期跟踪清单。"
  ],
  limits: [
    "Stirling Building 改造的最终造价、资本批准状态与 Seeley Library 的长期安置（迁回或永久并入）未核验。",
    "Herzog & de Meuron 概念方案的具体内容（展览资料未上网，本轮仅有公告级信息）。",
    "UL 塔藏的具体编目比例与数字化进度无公开口径。",
    "West Hub 图书馆服务的馆藏规模与馆员编制归属未查到公开数据。",
    "Moore Library 24 小时开放为设计目标与历史口径，现行时段以官网当周公告为准。",
    "UL 数字馆藏（电子书/电子刊）年度规模口径未获得与实体馆藏同等精度的数字。"
  ],
  sources: [
    { label: "剑桥 UL 官网（总入口）", url: "www.lib.cam.ac.uk" },
    { label: "UL 馆史页（1416 源头、1710 版权法、1934 现馆、1972 扩建）", url: "www.lib.cam.ac.uk/about-library/history-cambridge-university-library" },
    { label: "Wikipedia – Cambridge University Library（约 900 万件、Rockefeller 与塔、114 馆）", url: "en.wikipedia.org/wiki/Cambridge_University_Library" },
    { label: "校方 Tall Tales 展览页 2018（塔藏规模、Ely 馆外库、电子化收登）", url: "www.cam.ac.uk/stories/tall-tales" },
    { label: "历史系公告 2025（Stirling 大修方案、南北亭阁、Reshaping our Estate）", url: "www.hist.cam.ac.uk/faculty-building-be-vacated-ahead-major-refurbishment" },
    { label: "UL 通告 The Seeley Library move 2025-01-20（West Room、开放时间、还书点）", url: "www.lib.cam.ac.uk/stories/seeley-library" },
    { label: "校方物业公告 2026-01（H&deM 概念方案公展）", url: "www.em.admin.cam.ac.uk/news/university-library-future-exhibition" },
    { label: "Moore 图书馆馆史（£7.5M 捐赠、四线合一、2015 承接）", url: "moore.libraries.cam.ac.uk/our-history" },
    { label: "校方 West Hub 发布稿 2022-04（公众开放、穿越动线、Foundation Year）", url: "www.cam.ac.uk/stories/westhub" },
    { label: "访察记 PDF（约 200 万册开架、年增约 10 万件）", url: "www.jaspul.org/ind/asset/docs/kokusai_kiroku01.pdf" }
  ]
}
,
{
  id: "glasgow",
  name: "格拉斯哥大学",
  nameEn: "University of Glasgow",
  founded: 1451,
  country: "英国",
  region: "欧洲",
  state: "苏格兰 · 格拉斯哥",
  reportId: "LR-20260917-01",
  reportDate: "2026-09-17",
  tagline: "存量深挖 · 增量外置",
  mainLine: "一座 1968 年粗野主义塔楼五十年的持续现代化（加层→分层翻新→换幕墙→配楼升级），叠加校园发展计划中三座旗舰建筑（JMS、ARC、Keystone）承接学习空间增量。",
  flagship: { name: "JMS Learning Hub（2021）/ Keystone Building（2028/29 预计）", note: "9,060 万英镑、2,500 人的\"学习中心\"旗舰是 10 亿英镑校园发展计划首座落成建筑；在建的 Keystone 造价 3 亿英镑，把\"神经包容性设计\"写进官方目标。" },
  overview: {
    intro: "英语世界第四古老大学（1451 年），图书馆与大学同龄。结构性差异在于：它是\"单主馆+超大规模新建学习中心\"的集中式体系——主馆承载绝大部分座位与藏书，增量通过旗舰学习建筑实现，图书馆系统的边界正被\"全校学习空间网络\"重新定义。",
    stats: [
      { k: "主馆", v: "1968 · 12 层", s: "粗野主义塔楼（Whitfield 设计），DoCoMoMo 1993 苏格兰战后代表建筑" },
      { k: "座位/电脑", v: "2,500 座 / 800+ 台", s: "全年 361 天开放，每日 07:15–次日 02:00" },
      { k: "馆藏", v: "250 万册（实体）", s: "另有电子书约 185 万种、电子期刊 5 万余种" },
      { k: "特藏", v: "20 万+ 手稿", s: "约 20 万册珍本（含 1,060 种摇篮本），双址运营" }
    ]
  },
  projects: [
    {
      name: "主馆（1968）：一座持续翻新五十年的塔楼",
      nameEn: "Main Library · William Whitfield · 1968",
      year: "1968 / 持续改造",
      stats: [{ k: "座位", v: "约 2,500" }, { k: "开放", v: "361 天 · 07:15–02:00" }, { k: "幕墙更换", v: "2012" }],
      facts: "启用时藏书 64 万册，此后持续分层改造：1996–97 加建 12 层安置特藏并翻新 2–3 层；2006 完成 10–11 层翻新；2012 年整体更换铝制雨幕外立面。现有约 2,500 个学习座位、800 余台学生电脑，入口欢迎台 08:00–20:00 有人值守。",
      insight: "58 年里经历加层、分层翻新、整体换幕墙、配楼升级四轮动作，从未推倒重来——\"不拆也能现代化\"的最完整证据链。"
    },
    {
      name: "James McCune Smith Learning Hub（2021）：9,060 万英镑的\"学习中心\"旗舰",
      nameEn: "JMS Learning Hub · HLM Architects · 2021",
      year: "2021",
      stats: [{ k: "造价", v: "£90.6m" }, { k: "面积", v: "16,640 ㎡" }, { k: "容量", v: "2,500+ 学生" }, { k: "奖项", v: "苏格兰设计奖等" }],
      facts: "10 亿英镑校园发展计划首座落成建筑。500 座大讲堂、340 至 75 人互动教学空间、大量研讨/小组空间与灵活自习区；以主动学习教学法和全过程用户咨询为驱动。命名致敬 James McCune Smith——1837 年在格拉斯哥获得医学博士的第一位非裔美国人。楼内 290 个储物柜、两层咖啡馆、祈祷与静思室。",
      insight: "证明新型学习空间可以不叫图书馆、不归图书馆管，但拿走图书馆最大的一块功能——国内\"未来学习中心\"功能配比（大讲堂+互动教室+小组研讨+灵活自习+茶水间+储物柜+祈祷室）的完整清单来源。"
    },
    {
      name: "图书馆 Annexe 升级工程（2024–2026）：边开放边改造",
      nameEn: "Library Annexe Upgrade · 2024–2026",
      year: "2024–2026",
      stats: [{ k: "投资", v: "£23m" }, { k: "完工", v: "预计 2026 底" }, { k: "方式", v: "隔音墙分区 + 轮换关闭" }],
      facts: "1980 年代九层配楼整体升级：更换屋面与外墙饰面至与主馆同等标准、高性能双层玻璃窗、内部学习空间改善采光通风与电源点位。施工期间以临时隔音墙分区、局部轮换关闭维持开放，并在其他楼宇设研究生快闪自习空间、以 App 实时拥挤度数据引导分流。",
      insight: "\"施工期学习空间保障\"四件套（隔音墙、轮换关闭、快闪空间、App 分流）本身可以成为方案内容——临时家具、可移动隔断、快闪学习角是直接可供货的场景。"
    },
    {
      name: "Keystone Building（2024–2028/29）：3 亿英镑的下一个学习旗舰",
      nameEn: "Keystone Building · HOK · 2024–2028/29",
      year: "在建",
      stats: [{ k: "造价", v: "£300m" }, { k: "面积", v: "27,000 ㎡" }, { k: "容量", v: "约 3,600 学生" }, { k: "目标", v: "BREEAM Excellent" }],
      facts: "校园第二大建筑，HOK 设计、Multiplex 承建，2028/29 学年预计完工。混合通用教学空间、干湿实验室、高规格计算机实验室、创客工坊与协作区，嵌入\"神经包容性（neuro-inclusive）\"工作空间设计，为 James Watt 工程学院新址。",
      insight: "神经包容性设计已进入 3 亿英镑级项目的官方目标——这是人体工学之外一个新的价值叙事维度，值得跟踪其对家具选型标准（感官分区、低刺激区、可调节性）的具体化。"
    }
  ],
  learningSpaces: "三色声学分区把\"行为管理\"前置到导视层：红区（8–12 层，静默）、琥珀区（安静个人学习）、绿区（2–3 层，小组学习）。全校学习空间作为统一网络运营：统一容量表（主馆 2,000 座、JMS 1,100 座等）、UofG Life App 预约与实时拥挤度、驻场学生助理 Reach Out 分区覆盖。",
  serviceModel: "\"开放时长不是图书馆一家的事\"：07:15–02:00 的主馆 + 06:00–23:00 的 JMS + 24 小时医学自习区，构成覆盖近乎全天的分楼宇时段网络——任何一栋楼施工，网络内其他节点承接。馆藏管理有公开成文政策：剔旧是战略行为而非纯后勤行为。",
  trends: [
    { title: "图书馆的\"楼\"与\"服务\"正在解耦", type: "fact", note: "服务（学科馆员、预约系统、驻场支持、电子资源）遍布全网，藏书集中于主塔与远程书库——图书馆品牌价值越来越不依赖单栋建筑。" },
    { tid: "historic-renewal", title: "粗野主义遗产进入\"保护性更新\"周期", type: "fact", note: "DoCoMoMo 名录建筑换幕墙 + 配楼升级；欧洲 1960–70 年代大学高层图书馆普遍到达维护寿命终点，\"整馆现代化\"打包项目将批量出现。" },
    { tid: "247-spaces", title: "全天候学习网络取代单楼通宵", type: "judgment", note: "三栋楼宇不同时段拼出近 24 小时覆盖，比单楼通宵更易控成本——预计更多英国大学采用\"多楼分时接力\"模式。" },
    { tid: "data-driven-ops", title: "学习空间数据化运营成为标配", type: "fact", note: "App 预约、时段管理与实时拥挤度已把学习空间变成可调度资源；空间使用数据将反向进入家具采购与改造决策。" },
    { title: "命名伦理成为新建筑的立项语言", type: "judgment", note: "以被美国大学拒之门外的非裔医学生命名旗舰教学楼——大学新建筑的命名叙事将越来越承担价值表达功能。" }
  ],
  business: [
    "\"老馆持续翻新\"是欧洲存量市场的标准剧本，也是中国 1990–2010 年代馆舍即将面对的剧本——对应家具机会是分批、分楼层、与机电改造同步的持续性采购。",
    "三色分区把声学行为写进空间导视，是静音舱/静音区家具的最强官方背书：可以反问\"您的分区标准是什么\"，把家具讨论升级为空间制度讨论。",
    "\"学习 Hub\"与图书馆分立（JMS 模式）是中国高校\"未来学习中心\"浪潮的对标物——功能配比、造价量级、设计驱动与获奖记录俱全。",
    "边开放边改造的工程组织方式本身值得卖给学校：临时家具、可移动隔断、快闪学习角是能直接供货的场景。",
    "神经包容性设计已进入 3 亿英镑级项目的官方目标——建议跟踪其对家具选型标准（感官分区、低刺激区、可调节性）的具体化。",
    "可复制性边界：英国高校资金结构与国内财政拨款+基建拨款模式不同，投资量级不可直接类比。"
  ],
  limits: [
    "最新年度访问量与员工数为 2014 年旧口径（170 万人次、334 人）。",
    "Annexe 造价两口径（£23m 总投资 / £12.6m 承建合同）对应关系待验证。",
    "馆藏 250 万册为维基口径，未找到校方官网直接数字。",
    "Glasgow 2036 十年新战略（2026 年 6 月发布）中图书馆条款未及展开。"
  ],
  sources: [
    { label: "UofG – JMS Learning Hub（£90.6m、16,640㎡、2,500 人）", url: "gla.ac.uk/myglasgow/campusdevelopment/jamesmccunesmithlearninghub" },
    { label: "MyGlasgow Library – Annexe Upgrade（£23m、2024–2026）", url: "gla.ac.uk/myglasgow/library/annexeupgrade" },
    { label: "UofG News – Keystone Building（£300m、2024-10）", url: "gla.ac.uk/news/archiveofnews/2024/october/headline_1119004_en.html" },
    { label: "MyGlasgow – Quick Start（红/琥珀/绿三色分区）", url: "gla.ac.uk/myglasgow/library/quickstart/" },
    { label: "MyGlasgow – Study Spaces（全校容量与时间表）", url: "gla.ac.uk/myglasgow/students/learning/studyspaces/" },
    { label: "HLM Architects – JMS Hub 项目页（获奖记录）", url: "hlmarchitects.com/projects/james-mccune-smith-learning-and-teaching-hub-jms/" },
    { label: "UofG Library – 馆藏发展与管理政策（2025-02）", url: "gla.ac.uk/media/Media_344925_smxx.pdf" },
    { label: "Wikipedia – Glasgow University Library", url: "en.wikipedia.org/wiki/Glasgow_University_Library" }
  ]
},
{
  id: "edinburgh",
  name: "爱丁堡大学",
  nameEn: "University of Edinburgh",
  founded: 1582,
  country: "英国",
  region: "欧洲",
  state: "苏格兰 · 爱丁堡",
  reportId: "LR-20260930-01",
  reportDate: "2026-09-30",
  tagline: "边开馆 · 边再生",
  mainLine: "一座比大学建校还早两年的图书馆（1580 年 276 本遗赠书）。1967 年「每层一英亩」的粗野主义主馆被 Category A 登录保护后，用七期改造全程开馆完成整体再生，留下「可净增 2,025 座」的占用率评审蓝图——悬而未决。",
  flagship: { name: "主馆七年分期改造（2006/07–2012/13）", note: "Lewis & Hickey 设计、Stantec 参与，分七期施工全程开馆：顶层两层新建 Centre for Research Collections 特藏研究中心，新入口＋220 座咖啡厅＋夹层展厅。1967 年 Basil Spence 事务所作品，1968 RIBA 奖、1969 Civic Trust 奖，2006 年 Category A 登录——「不能闭馆的登录巨构如何整体再生」的完整操作手册。", img: "edinburgh-1.jpg", imgCap: "从 Meadows 草坪看 George Square 主馆：8 层、每层一英亩的粗野主义巨构与城市的真实关系。摄影：Richard Webb / geograph.org.uk（CC BY-SA 2.0）" },
  overview: {
    intro: "苏格兰最大学术图书馆，历史始于 1580 年——律师 Clement Litill 遗赠 276 本书，比大学 1582 年建校还早两年。系统以 George Square 主馆（1967）为旗舰，配合 King's Buildings 校区 Murray Library 等分馆；发现层 DiscoverEd，读者支持统一入口 EdHelp。现任 Librarian Gavin McLachlan。2025-12-04 发布 Library Strategy 2030（People / Research / Teaching & Learning / Social & Civic Responsibility 四主题），对接大学 Strategy 2030。",
    stats: [
      { k: "馆藏", v: "380 万+（全系统）", s: "含电子书/电子刊；2014/15 实体馆藏 340 万册" },
      { k: "学习座", v: "约 2,500", s: "选定楼层 24/7，考试期扩大为全层（2020 官方口径）" },
      { k: "主馆", v: "1967 · 8 层", s: "每层一英亩，建成时英国最大同类建筑；预算 £1.7M、实造价 £2.1M" },
      { k: "特藏", v: "约 20 万件", s: "摇篮本 1,200 种，Halliwel-Phillipps 莎士比亚收藏" }
    ]
  },
  projects: [
    {
      name: "七年分期改造：登录巨构的整体再生",
      nameEn: "Main Library Redevelopment · Lewis & Hickey · 2006/07–2012/13",
      year: "2006/07–2012/13",
      stats: [{ k: "分期", v: "7 期" }, { k: "闭馆", v: "0 天" }, { k: "咖啡厅", v: "220 座" }, { k: "特藏", v: "CRC 顶层两层" }],
      facts: "2006 年主馆列为 Category A 登录建筑（苏格兰最高等级），同年启动改造设计。Lewis & Hickey 主持，分七期施工、全程开馆：顶层两层整体新建 Centre for Research Collections，特藏/档案/珍本研究服务集中上移；新入口与门厅重组，增设 220 座咖啡厅与夹层展厅。HES 登录档案记载原始家具：黑色金属书架由建筑师与厂商共同设计、部分桌台与学习长凳为建筑师亲设、其余多为斯堪的纳维亚选品——其设计影响了格拉斯哥大学等后续馆。",
      insight: "「不能闭馆」不是方案降级的理由，而是方案设计的一部分：七期意味着每期都有独立竣工价值（CRC 上楼/新入口/咖啡厅各自成立），早期分区暴露的问题还能在后期修正。分期＋每期独立见效，比一次性闭馆大修更容易说服决策层。",
      img: "edinburgh-2.jpg",
      imgCap: "主馆立面：预制混凝土模数与开窗节奏是登录保护的核心对象，改造的全部新动作只能发生在保护立面之内。摄影：Remi Mathis / Wikimedia Commons（CC BY-SA 3.0）"
    },
    {
      name: "uCreate 创客空间：完整运营样本",
      nameEn: "uCreate · George Square 四楼",
      year: "2012 改造后启用",
      stats: [{ k: "分区", v: "4 区" }, { k: "空间开放", v: "8:00–1:00 七天" }, { k: "人员值守", v: "10:00–20:00" }, { k: "布点", v: "旗舰＋卫星" }],
      facts: "四区构成：服务点（设备借用）、Digital Transformation Suite（绿幕/摄影测量/RTI 数字人文设备）、Makerspace（3D 打印/CNC/激光切割，配不同高度工作台与下拉式插座）、Media Lab（与媒体系合作、HEREG 基金）。SISO 系统管理预约与设备；经费主馆运营预算＋海报制作收入；Murray Library 设卫星点。",
      insight: "对应国内创客空间三大病灶给出四组件解：人员用「值守短于开放」错位排班降人力成本；经费「预算保底＋增值服务创收」双轨；制度用第三方系统标准化管理；旗舰点跑通再向分馆卫星式复制——创客空间最小可行运营模型。"
    }
  ],
  learningSpaces: "竖向分区逻辑明确：底层入口＋EdHelp＋咖啡厅（公共性最强）→ 中间层学习空间 → 顶层 CRC 特藏（控制性最强）→ 四层 uCreate（生产性最强）。约 2,500 学习座，选定楼层 24/7、考试期扩为全层；2017 年校方《主馆占用率评审》基于刷卡数据给出可净增 2,025 座的分层蓝图（含 Vertical Connector＋南门、更多 display/event 空间、加强对爱丁堡城市的 outreach），其中土木级长期项至今未建。",
  serviceModel: "统一发现层 DiscoverEd＋地面层 EdHelp 一站式支持。运营精细化样本：uCreate 人员 10:00–20:00 值守而空间 8:00–1:00 开放（错位排班）；经费双轨（运营预算＋海报创收）；SISO 系统管预约设备。战略层 Library Strategy 2030（2025-12 发布）四主题对接大学战略。",
  trends: [
    { tid: "historic-renewal", title: "登录巨构的「保护性再生」新样板", type: "fact", note: "Category A 登录（2006）与满负荷运营（2,500 座/280 万入馆）双重约束下，七期边开馆边改造完成整体再生——比格拉斯哥的「持续翻新」更极端的工况（更高保护等级、不能闭馆）。" },
    { tid: "data-driven-ops", title: "满负荷大馆的「空间潜力审计」范本", type: "fact", note: "2017 官方《占用率评审》：刷卡数据画峰谷→按工程可行性分短中长期→给出净增 2,025 座潜力值，并捆绑 display/event 空间与城市 outreach——「不扩建还能挤出多少」可以直接产品化。" },
    { tid: "learning-commons", title: "Commons 之后的「生产能力」层", type: "fact", note: "220 座咖啡厅＋夹层展厅＋uCreate 四区创客——学习空间之上再叠制作空间，图书馆从「学的地方」变成「产出的地方」。" },
    { tid: "247-spaces", title: "24/7 的楼层梯度版本", type: "fact", note: "选定楼层 24/7、考试期扩为全层——全天候按楼层分配而非全馆通宵，介于哥大「楼层梯度」与芝大「考试期限定」之间的折中。" },
    { tid: "special-collections", title: "特藏「上楼」而非「下沉」", type: "judgment", note: "CRC 特藏研究中心整体置于顶层两层——与康奈尔 Kroch「沉入地下三层」相反的路径：顶层的视野、采光与环境可控性被优先给特藏；哪种路径更适合国内，值得对照论证。" }
  ],
  business: [
    "「分期＋每期独立见效」的老馆改造方案结构可直接卖：七期改造证明不能闭馆不是降级理由；把分期逻辑、临时动线、读者沟通做进任务书，是方案竞争力的来源。",
    "「空间潜力审计」可产品化：刷卡数据画峰谷→短中长期分层→净增座位潜力值，向委托方提供「不扩建还能挤出多少空间」的审计报告（必须附「落地条件」章节——爱丁堡的 Vertical Connector 至今未建）。",
    "创客空间最小可行运营模型四组件（错位排班/经费双轨/系统标准化/旗舰＋卫星），每个组件对应国内一个常见病灶，可直接讲给委托方。",
    "家具进任务书：HES 档案证明顶级大馆把书架桌凳当建筑构件设计——国内任务书应设家具系统专项，含创客工作台高度分级、下拉式电源等细节级条款。",
    "「座位扩容＋城市 outreach」捆绑立项：2017 评审把 display/event 空间与城市公共关系写进同一份文件——图书馆校内地位与城市关系是同一条预算线的两端。",
    "可复制性边界：Category A 登录的审批与工法成本、七年运营中施工的隐性损耗账校方从未公开，不能直接对标。"
  ],
  limits: [
    "七期改造总造价未找到公开权威数字。",
    "2017 评审建议的实际执行清单未见官方更新（哪些做了哪些没做）。",
    "2012 改造后家具供应商与型号细节待查（HES 档案仅覆盖 1967 原始家具）。",
    "改造后中庭/CRC/uCreate 内景授权图片暂缺。",
    "Vertical Connector 至 2026-09-30 未见实施证据。"
  ],
  sources: [
    { label: "Wikipedia – Edinburgh University Library（1580 遗赠/1967 主馆/380 万+ 口径）", url: "en.wikipedia.org/wiki/Edinburgh_University_Library" },
    { label: "HES 登录档案 LB27968（造价/奖项/家具共研/影响格拉斯哥）", url: "portal.historicenvironment.scot/designation/LB27968" },
    { label: "Stantec – 主馆改造项目页（七期·全程开馆·CRC）", url: "stantec.com/en/projects/university-of-edinburgh-main-library-redevelopment" },
    { label: "校方 2017《主馆占用率评审》PDF（2,025 座蓝图）", url: "ed.ac.uk/files/atoms/files/main_library_occupancy_review.pdf" },
    { label: "校方 Facts & Figures（2,500 座/24-7/DiscoverEd/EdHelp）", url: "ed.ac.uk/information-services/library-museum-gallery/library-essentials/facts-figures" },
    { label: "Library Strategy 2030（2025-12-04 发布）", url: "librarystrategy2030.ed.ac.uk" },
    { label: "uCreate 官方页面（四区/排班/经费/卫星点）", url: "ucreate.ed.ac.uk" }
  ]
},
{
  id: "manchester",
  name: "曼彻斯特大学",
  nameEn: "University of Manchester",
  founded: 1824,
  country: "英国",
  region: "欧洲",
  state: "英格兰 · 曼彻斯特",
  reportId: "LR-20261001-01",
  reportDate: "2026-10-01",
  tagline: "大教堂 · 无书馆 · 八十年主楼",
  mainLine: "英格兰唯一的国家研究图书馆，由两个极端拼成：1900 年建成的 Grade I 哥特式「学习大教堂」赖兰兹（£1,700 万「解锁」、免费对公众开放），和 2012 年 £2,400 万建成的「没有书的图书馆」AGLC（保留老食堂四分之三框架、学生共创、7×24）。中间夹着一栋 1936 年起层层叠加的主馆。",
  flagship: { name: "约翰·赖兰兹图书馆「解锁」工程（2003–2007）", note: "£17M：拆除 1969 年平庸加建、补建 Champneys 百年前设计却未建成的坡屋顶、新建公共入口翼（咖啡/商店/解说/保护工作室）。1900 年建成的维多利亚哥特「学习大教堂」，1994 年 Grade I 登录；镇馆之宝含古腾堡圣经与「最早新约文本」P52 纸草。2025 年「Next Chapter」新增展厅并迎 125 周年。", img: "manchester-1.jpg", imgCap: "赖兰兹外观：砂岩哥特原构与 2007 年玻璃新入口翼的「新旧对位」。摄影：Doyle of London / Wikimedia Commons（CC BY-SA 4.0）" },
  overview: {
    intro: "全英第三大高校图书馆系统（仅次于牛津、剑桥）、英国最大非缴存学术馆藏与最大电子资源馆藏，年服务学生、研究者与访客 300 万+ 人次。12 个馆点：主馆（人文社科主藏书）、AGLC（全数字学习 Commons）、约翰·赖兰兹（特藏＋公众界面）、八座校园专业馆及中央图书馆内的种族关系资源中心。发现层 Library Search；技能品牌 My Learning Essentials（年 13,500+ 人次）；现行战略 Imagine2030 对接大学 Manchester 2035。",
    stats: [
      { k: "馆藏", v: "400 万+ 印刷", s: "官网口径；StaffNet 编目实体 202.7 万件；战略口径实体 1,000 万+" },
      { k: "电子资源", v: "80 万+ 电子书", s: "StaffNet 口径 142.9 万种；5 万+ 电子刊、700+ 数据库" },
      { k: "AGLC", v: "1,000+ 学习位", s: "£24M、5,400㎡，学期 24/7、全年仅圣诞/节礼日闭馆" },
      { k: "地位", v: "全英五强", s: "英格兰唯一国家研究图书馆（RLUK 成员）" }
    ]
  },
  projects: [
    {
      name: "「解锁」工程：完成百年前的设计",
      nameEn: "Unlocking the Rylands · 2003–2007",
      year: "2003–2007",
      stats: [{ k: "造价", v: "£17M" }, { k: "登录", v: "Grade I（1994）" }, { k: "建成", v: "1900" }, { k: "重开", v: "2007-09-20" }],
      facts: "2003 年启动公开募捐（大学＋遗产彩票基金 HLF＋公众企业）：拆 1969 年加建、翻修老楼、补建 Champneys 当年因「石拱顶更防火」建议而放弃的坡屋顶，新建入口翼承担咖啡/商店/解说/保护功能。后续：历史阅览室 2012 关闭修缮、2021 重开；2013 成立 Research Institute；2025「Next Chapter」新展厅＋125 周年。馆藏：古腾堡圣经、美因茨诗篇、全英第二大 Caxton 收藏、P52「最早新约文本」。",
      insight: "「完成历史设计」叙事：保护工程升级为「完成建筑师遗愿」的故事，募捐、审批、传播三线受益。反面教材也要记住——2021 年赖兰兹从文化场所转向研究机构引发裁员争议（管理层承认此前「过度偏向社会责任」），公众开放与研究功能的张力需要制度化平衡。",
      img: "manchester-2.jpg",
      imgCap: "历史阅览室 1900 年空间原境：沿中轴对称的木质长桌与哥特拱廊藏书龛——家具已成为保护清单上的条目。摄影：Mike Peel / Wikimedia Commons（CC BY-SA）"
    },
    {
      name: "AGLC：没有书的图书馆",
      nameEn: "Alan Gilbert Learning Commons · Sheppard Robson · 2012",
      year: "2012",
      stats: [{ k: "造价", v: "£24M" }, { k: "面积", v: "5,400 ㎡" }, { k: "学习位", v: "1,000+" }, { k: "评级", v: "BREEAM HE Excellent" }],
      facts: "保留 1960 年代老食堂约四分之三钢筋混凝土框架——隐含碳与造价双降。空间围绕公共学习大厅＋咖啡厅组织；学生全程共创（官方导览：「每一个角落的创意设计都由学生完成」，入口装饰校友语录）；被校方与维基称为「全数字图书馆」。全年仅圣诞、节礼日闭馆。家具层：Broadstock 桌台集成 FG Technology PC 遥控（主机 20 米半径内安置）＋隐藏布线＋防盗。",
      insight: "「未来学习中心」三件套话术：存量再生（保框架→BREEAM Excellent→省钱省碳）、学生共创（不是问卷，是从方案到家具用法全程）、家具即技术（桌面集成 PC 控制——技术集成条款应进家具标，不动信息化预算）。",
      img: "manchester-3.jpg",
      imgCap: "AGLC 外观：竖向彩条玻璃幕墙与旧混凝土骨架的关系——「旧馆＋新 Commons」双子配置。摄影：FJones2123 / Wikimedia Commons（CC BY-SA 4.0）"
    },
    {
      name: "主馆：叠了八十年、从未停止生长的楼",
      nameEn: "Main Library · Burlington Street · 1936–至今",
      year: "1936–至今",
      stats: [{ k: "东翼", v: "1936" }, { k: "两翼", v: "1953–56" }, { k: "北扩", v: "1981" }, { k: "新学习位", v: "105（2023）" }],
      facts: "1936 年东翼（Arts Library，Thomas Worthington & Sons）→1953-56 南西两翼（含展厅与特藏部门）→1978 Muriel Stott 八角会议厅→1981 秋北扩启用（Dane, Scherrer & Hicks，1972 年设计、资金等了八年；女王 1982-06 正式揭幕）。1980 年校方自称「全英大学唯一大型基建」：三倍空间、+140 万册容量、约 2,000 座。持续微调：2009-10 地面层翻新、2023 年 Blue 1 层新增 105 个学习位、Green 区 12 间研讨室（大桌＋8 椅＋PC＋32″屏官方标准包）、亲子间与线上面试间、Cosy Campus 厨房角。",
      insight: "「时间尺度」是最好的业务话术：大学基建决策—资金—施工天然漫长（北扩九年落地），但半年级的「105 个学习位」微循环可以无限续命——大改做分期管线、小改做年度微循环，小项目也要产品化。"
    }
  ],
  learningSpaces: "系统级分工清晰：主馆＝人文社科主藏书＋学习位（Green 区小组/Blue 区安静）；AGLC＝纯学习场景（1,000+ 位、pod、多媒体）无藏书；赖兰兹＝特藏研究＋公众参观；八座专业馆学科嵌入。AGLC 全年仅两日闭馆、学期 24/7；Cosy Campus 把厨房角、康乐室嵌进主馆与 AGLC——给全英最大单校区大学补「人情味」。",
  serviceModel: "发现层 Library Search＋Library Help 在线问答＋全校区服务台。eTextbook 计划（2023/24：1,115 门课、120,710 份个人副本、34,747 名学生）与 Reading List Strategy（2021/22 课程单元 +60%、使用参与率 80%）用官方快数把资源投入讲成学生获得；My Learning Essentials（13,500+ 人次/年）是获奖技能品牌；总馆长 Pressler 双肩挑赖兰兹馆长——特藏战略放在系统核心。",
  trends: [
    { tid: "historic-renewal", title: "「完成历史设计」的保护叙事", type: "fact", note: "£17M「解锁」工程补建 Champneys 百年前未建的坡屋顶、拆平庸加建——保护工程升级为「完成建筑师遗愿」的故事；主馆则演示 1936–2023 的渐进式扩建微循环。" },
    { tid: "learning-commons", title: "「没有书的图书馆」的完整样本", type: "fact", note: "AGLC：全数字、1,000+ 学习位、学生全程共创、家具集成 PC 技术——commons 从产品升级为「由学生定义的学习场景集合」。" },
    { tid: "247-spaces", title: "24/7 的极限运营版本", type: "fact", note: "全年仅圣诞、节礼日闭馆，学期内 24/7——在「全年无休」与「成本控制」之间走到英国高校的最远端。" },
    { tid: "special-collections", title: "特藏＝城市级公共资产", type: "fact", note: "赖兰兹：古腾堡圣经＋P52 纸草，免费参观、常年展览，2025「Next Chapter」再增展厅——特藏从研究后台变成城市文化前台。" },
    { tid: "open-to-public", title: "大学设施的公众界面制度化", type: "judgment", note: "赖兰兹作为免费景点的公众开放写入运营结构；但 2021 年裁员争议显示：开放承诺若只靠预算自愿，紧缩时必然回摆——需要章程级保障。" },
    { tid: "data-driven-ops", title: "按课程单元配书的「获得」叙事", type: "fact", note: "eTextbook 计划用官方快数（1,115 门课/12 万份副本/3.5 万学生/80% 参与率）把馆藏投入翻译成学生可感指标——数据化运营从空间层扩展到课程资源层。" }
  ],
  business: [
    "「完成历史设计」话术：检索委托方老馆图纸，找「当年没建成」的部分做可行性与叙事价值评估——把工程包装成完成历史，募捐、审批、传播三线受益。",
    "「未来学习中心」三件套直接可用：存量再生（保框架→绿建评级→省钱省碳）、学生共创（全程而非问卷）、家具即技术（桌面集成 PC 控制，技术条款进家具标）。",
    "电子阅览室改造方案：主机 20 米远置＋桌面控制＋隐藏布线，性能/安全/安静三角一次解决，且走家具预算不动信息化盘子。",
    "「大改分期管线＋小改年度微循环」双层更新策略：105 个学习位这种半年级小项目产品化，帮馆内建立常设「空间微循环」预算科目。",
    "预警式专业议题：公众开放 vs 研究功能的制度化平衡（赖兰兹 2021 争议）——能向委托方预警风险本身就是专业度。",
    "可复制性边界：全英最大单校区规模效应不可类比；HLF 彩票基金结构国内无对应；Cosy Campus 属全校计划非图书馆单独预算。"
  ],
  limits: [
    "赖兰兹 2007 重开日期两口径（4 月 vs 9-20）未决。",
    "主馆 2016–2019 改造预告的完工记录未找到。",
    "主馆总学习座位数无官方统一口径。",
    "HLF 拨款金额未拆分。",
    "The Meteor 报道的裁员执行结果无后续官方口径。",
    "AGLC 年访客量精确数字待查。"
  ],
  sources: [
    { label: "Wikipedia – University of Manchester Library（沿革/主馆建筑史/成员馆）", url: "en.wikipedia.org/wiki/University_of_Manchester_Library" },
    { label: "Wikipedia – John Rylands Research Institute and Library（£17M/2007/藏品）", url: "en.wikipedia.org/wiki/John_Rylands_Research_Institute_and_Library" },
    { label: "StaffNet – Facts and figures（2023/24 馆内快数/赖兰兹时间线）", url: "staffnet.manchester.ac.uk/library/working-here/facts-figures" },
    { label: "Imagine2030（图书馆战略＋Pressler 引言）", url: "stories.manchester.ac.uk/imagine2030" },
    { label: "AJ – AGLC 项目数据（£24M/5,400㎡/团队）", url: "architectsjournal.co.uk/news/sheppard-robsons-alan-gilbert-learning-commons-opens-its-doors" },
    { label: "RIBA – AGLC（保留四分之三框架/BREEAM HE Excellent）", url: "find-an-architect.architecture.com/sheppard-robson/manchester/alan-gilbert-learning-commons" },
    { label: "designinglibraries – AGLC 家具技术（FG/Broadstock）", url: "designinglibraries.org.uk/case-studies/alan-gilbert-learning-commons" },
    { label: "The Meteor – 2021 赖兰兹裁员争议", url: "themeteor.org/2021/06/26/dozens-of-jobs-at-risk-libraries" },
    { label: "主馆设施页（研讨室规格/亲子间/线上面试间）", url: "library.manchester.ac.uk/locations-and-opening-hours/main-library" }
  ]
}
];

/* ── 各校图书馆官网直达链接（2026-09-29 逐一验证可达；Princeton/JHU/UPenn 有反爬验证，浏览器可正常打开） ── */
window.LIB_URLS = {
  harvard: "https://library.harvard.edu/",
  mit: "https://libraries.mit.edu/",
  stanford: "https://library.stanford.edu/",
  princeton: "https://library.princeton.edu/",
  yale: "https://library.yale.edu/",
  duke: "https://library.duke.edu/",
  jhu: "https://www.library.jhu.edu/",
  uchicago: "https://www.lib.uchicago.edu/",
  glasgow: "https://www.gla.ac.uk/myglasgow/library/",
  edinburgh: "https://library.ed.ac.uk/",
  manchester: "https://www.library.manchester.ac.uk/",
  upenn: "https://www.library.upenn.edu/",
  columbia: "https://library.columbia.edu/",
  cornell: "https://library.cornell.edu/",
  oxford: "https://www.bodleian.ox.ac.uk/",
  ethz: "https://library.ethz.ch/en/",
  imperial: "https://www.imperial.ac.uk/library",
  cambridge: "https://www.lib.cam.ac.uk/"
};
