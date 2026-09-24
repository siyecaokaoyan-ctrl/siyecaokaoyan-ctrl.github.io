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
  region: "美国东北",
  state: "马萨诸塞州 · 剑桥",
  reportId: "LR-20260916-01",
  reportDate: "2026-09-16",
  tagline: "藏书退让、空间还给人",
  mainLine: "通过校外高密度库房（Harvard Depository）承接低流通藏书，把馆内面积释放给协作学习、教学与社交空间。",
  flagship: { name: "Widener 主馆开放化 / Cabot 学习共享改造", note: "面向 2036 建校 400 周年的四馆整体改造可行性研究（Widener、Lamont、Pusey、Houghton）是观察全球顶级大学图书馆走向的最好样本。" },
  overview: {
    intro: "全球最大学术图书馆系统，1638 年随建校设立，是美国最古老的图书馆。近二十年的空间主线是\"藏书退让、空间还给人\"。",
    stats: [
      { k: "系统规模", v: "约 70+ 分馆", s: "全球最大学术图书馆系统（口径不一，维基称约 90 个单元）" },
      { k: "总藏书", v: "约 2,000 万册", s: "2014 年 Gazette 口径 1,700 万，其中约一半存于校外库房" },
      { k: "主馆 Widener", v: "1915 年建成", s: "馆内约 350 万册，书架总长 92 公里，10 层书库" },
      { k: "建馆历史", v: "1638 年", s: "随建校设立，美国最古老图书馆" }
    ]
  },
  projects: [
    {
      name: "Widener 主馆：象征性建筑的\"开放化\"",
      nameEn: "Widener Library · 1915",
      year: "1915",
      stats: [{ k: "书架总长", v: "92 km" }, { k: "日均入馆", v: "1,715 人（2015）" }, { k: "书库纵深", v: "10 层" }],
      facts: "由 Eleanor Widener 为纪念泰坦尼克号遇难的儿子 Harry Widener（1907 届校友）捐建，是哈佛的精神象征。全球五大\"超级图书馆\"中唯一的大学图书馆，且是唯一允许读者自由进入开架书库浏览的。2015 年日均借出约 2,811 册。",
      insight: "Widener 的价值正从\"藏书容器\"转向\"校园体验与公共符号\"。2036 愿景研究提出设\"发现中心\"，让公众透过玻璃看书库——把书库本身变成展示品。对\"密集书库是否可见、可否成为空间叙事一部分\"有直接启发。"
    },
    {
      name: "Cabot 科学图书馆：Learning Commons 标杆",
      nameEn: "Cabot Science Library · 2017 改造",
      year: "1973 建 / 2017 改",
      stats: [{ k: "改造面积", v: "3,655 ㎡" }, { k: "重开", v: "2017.4" }, { k: "认证", v: "LEED-CI v4" }, { k: "主动学习教室", v: "24 座" }],
      facts: "改造前\"窗户不透明、一二层不受欢迎、学生无处久坐\"。改造后一层为开放社交协作区（Discovery Bar、学习湾、咖啡区连庭院），地下层为小组研讨室、媒体制作室与 24 座主动学习教室。家具策略\"几乎所有东西都是可移动的\"，本科生首次可通过 Roombook 自助预约研讨间。",
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
    { title: "Learning Commons 从\"新概念\"变成\"默认配置\"", type: "judgment", note: "小组研讨室、可预约空间、咖啡餐饮、多媒体制作间已成北美大学图书馆改造的标准套餐。" },
    { title: "藏书外迁与高密度/自动化库房", type: "judgment", note: "哈佛模式（托盘+高架+人工）与 ASRS（机器人自动存取）是两大流派；外迁释放的面积是改造的资金与空间前提。" },
    { title: "图书馆作为\"第三空间\"（Third Place）", type: "judgment", note: "家与教室/工作之外的归属空间；空间评价指标从\"座位数/藏书量\"转向\"停留时长与归属感\"。" },
    { title: "主动学习教室进入图书馆", type: "judgment", note: "Cabot 地下层 24 座主动学习教室直接复制教学楼成功经验，图书馆与教学空间边界消融。" },
    { title: "身心健康、归属感与包容性设计", type: "judgment", note: "自然采光、声学分区、Study Pod、亲生命设计成为获奖项目共性；反向证据：有研究指出近年改造过度偏向协作空间，牺牲安静空间——按活动分区而非按人群分区更稳妥。" },
    { title: "既有建筑改造 + 可持续认证", type: "judgment", note: "顶级项目越来越多是\"改\"而不是\"建\"——对国内 1990–2010 年代馆舍进入改造期是直接利好。" }
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
    "本报告以二手公开来源为主，未含实地调研或馆方访谈。"
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
  region: "美国东北",
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
      facts: "教务长委托馆长 Chris Bourg 组建全校工作组，成员含全校师生员工，通过开放论坛、小组讨论和在线\"点子库\"（Idea Bank）征集意见。总纲：MIT 图书馆应从\"本地门户\"转型为\"开放全球平台\"。第 2 条建议直指空间：成立专门的空间规划组，点名 Hayden\"改造需求显著\"。",
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
    { title: "24/7 空间从\"一间房\"扩容到\"整层\"", type: "fact", note: "Hayden 24 小时座位 16 → 325+；全天候开放已是北美顶尖馆默认项，且与家具选型直接相关（耐用性、易清洁、可重组、照明与电源密度）。" },
    { title: "健康材料与身心健康认证进入采购标准", type: "judgment", note: "LEED + Fitwel + Red List Free 三件套意味着家具与软装选型从\"价格+款式\"变成\"化学成分披露+健康声明\"。" },
    { title: "\"研究十字路口\"——功能混合成为设计概念本身", type: "judgment", note: "研讨亭阁置于动线交叉口、研究房间进门即见、馆员办公室贴邻阅览室——家具的角色从\"填充空间\"变成\"定义交叉口\"。" },
    { title: "既有建筑节能改造与\"局部精准手术\"", type: "judgment", note: "Hayden 只改两层 + 全面机电与表皮升级，证明不必全楼闭馆重建也能实现体验跃迁——对国内 1990–2010 年代馆舍改造潮直接可用。" },
    { title: "多馆系统的\"分时分工\"", type: "judgment", note: "一个校园内不同馆承担不同学习行为与时段——系统级规划比单馆设计更能体现专业深度。" }
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
  region: "美国西部",
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
      facts: "原密集书库区转换为协作学习空间、研讨室、报告厅与策展办公；中央走廊设展柜长廊，胡桃木吊顶呈正弦波形致敬硅谷音频振荡器传统。是 Silicon Valley Archives 的首个实体展示与研究空间，历史系在此开设\"用 10 件物品讲述硅谷史\"档案课程。",
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
    { title: "从\"藏\"到\"展\"再到\"用\"", type: "fact", note: "特藏不再锁在库房，以展柜长廊、档案课程、快闪展进入日常动线；特藏空间成为吸引人流与捐赠的双引擎。" },
    { title: "通宵化从 fringe 需求变成治理议题", type: "judgment", note: "学生会立法推动、校方公开回应经费年限，预计更多研究型大学将以\"分区通宵+安保配套\"模式跟进。" },
    { title: "高密度储存+每日两次调拨成为空间重组的基础设施", type: "fact", note: "\"远程储存+馆内精选\"的双层结构正在取代\"全量馆内开架\"。" },
    { title: "图书馆与技术支援服务合并运营", type: "judgment", note: "The Hub 把图书馆、IT 支持、创客空间放进同一入口——学习空间的竞争单元从\"馆\"变成\"服务台半径内的完整支持链\"。" },
    { title: "历史建筑的适应性再利用优于新建", type: "fact", note: "Lathrop（旧商楼）、科学馆（1903 Old Chem）、Hohbach（老馆东翼）均为改造；图书馆预算更多流向\"改\"，家具与内装占比上升。" },
    { title: "空间即筹款载体", type: "judgment", note: "Hohbach Hall、Rumsey 中心、Li & Ma 科学馆均以捐赠命名——空间设计质量直接影响学校募资能力。" }
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
  region: "美国东北",
  state: "新泽西州 · 普林斯顿",
  reportId: "LR-20260918-01",
  reportDate: "2026-09-18",
  tagline: "单主馆深挖 · 学科嵌入 · 旗舰外置",
  mainLine: "一座 1948 年主馆的四轮生命周期（初建→两次加建→十年翻新→网络扩展），叠加学科分馆的嵌入式微调与 Commons 知识创造分离实验。",
  flagship: { name: "Firestone 主馆十年翻新（2010–2019）", note: "2.5 亿美元、十年、全程不闭馆——哥特式外壳不动、内部从\"书库+卡片目录\"彻底改造为\"光、电、网、协作\"的现代学习基础设施。" },
  overview: {
    intro: "美国第四古老高等学府（1746 年），10 个馆址的集中式网络：Firestone 一栋楼承载人文社科全部核心馆藏与中央运营，分馆按学科深度嵌入学院。与哥大、哈佛、纽约公共图书馆共有 ReCAP 高密度书库。",
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
    { title: "历史建筑进入\"保护性翻新\"周期", type: "fact", note: "哥特式外壳保留+内部彻底现代化，与格拉斯哥粗野主义塔楼换幕墙同属\"不拆重建\"范式；欧美 1950–1980 年代馆舍普遍到达维护寿命终点，此类打包项目将批量出现。" },
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
  region: "美国东北",
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
      facts: "2014 年中殿修复（Gilder 夫妇 2,000 万美元捐赠）：施工期间搭建贯通入口与各阅览室的封闭式步行隧道，全程不闭馆；三个服务台合并为一，新增自助借还与跨馆取书。2022 年 Hanke 展厅开幕、2024 年 L&B 阅览室修复重开（修复 1931 年原装绿色沙发扶手椅而非淘汰，新旧家具并置成为空间叙事）。已启动 2031 百年评估。",
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
    { title: "特藏走向\"一个品牌\"整合", type: "fact", note: "Beinecke 2022 年合并手稿与档案馆、2026 年再并艺术与音乐特藏——特藏从\"分散保管\"转向\"统一运营\"，教学与公共功能持续加码。" },
    { title: "历史图书馆进入\"逐房间修复\"周期", type: "fact", note: "欧美 1930 年代馆舍批量进入维护寿命终点，\"按房间、按捐赠、不闭馆\"的滚动修复将成为常态项目类型。" },
    { title: "建筑即展品，公共性从\"借阅\"转向\"观展+教学\"", type: "fact", note: "Beinecke 四分之三访客为建筑而来；大学图书馆的访客经济与捐赠叙事深度绑定，展陈空间成为新馆标配。" },
    { title: "发现层先于空间层打通", type: "fact", note: "LUX 把图书馆、美术馆、博物馆、艺术中心 1,700 万件对象合一检索；机构边界的消融首先发生在数字层。" },
    { title: "数据与 AI 成为图书馆新基建", type: "judgment", note: "研究支持从\"找文献\"转向\"用数据\"，对应空间上数据工坊（Marx 模式）与可视化实验室的持续扩张。" }
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
  id: "glasgow",
  name: "格拉斯哥大学",
  nameEn: "University of Glasgow",
  founded: 1451,
  country: "英国",
  region: "英国",
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
    { title: "粗野主义遗产进入\"保护性更新\"周期", type: "fact", note: "DoCoMoMo 名录建筑换幕墙 + 配楼升级；欧洲 1960–70 年代大学高层图书馆普遍到达维护寿命终点，\"整馆现代化\"打包项目将批量出现。" },
    { title: "全天候学习网络取代单楼通宵", type: "judgment", note: "三栋楼宇不同时段拼出近 24 小时覆盖，比单楼通宵更易控成本——预计更多英国大学采用\"多楼分时接力\"模式。" },
    { title: "学习空间数据化运营成为标配", type: "fact", note: "App 预约、时段管理与实时拥挤度已把学习空间变成可调度资源；空间使用数据将反向进入家具采购与改造决策。" },
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
  id: "duke",
  name: "杜克大学",
  nameEn: "Duke University",
  founded: 1838,
  country: "美国",
  region: "美国南部",
  state: "北卡罗来纳州 · 达勒姆",
  reportId: "LR-20260918-03",
  reportDate: "2026-09-18",
  tagline: "后台先行 · 分期滚动 · 每期绑定捐赠",
  mainLine: "一个十五年的滚动改造工程：LSC 后台库（2001）→ Bostock（2005）→ Perkins 各层 + The Link（2006–2008）→ Rubenstein（2015）→ Lilly（2024–2027）。",
  flagship: { name: "Perkins 工程（2000–2015）/ Lilly 百年大修（2024–2027）", note: "先用一座高密度书库托底，再分十年滚动改造主馆群、全程不整体闭馆；Lilly 造价从 3,800 万公开调整到 6,400 万美元，2027 年 1 月开放恰逢建馆百年。" },
  overview: {
    intro: "校方自述\"全国前十的私立大学图书馆体系\"（无第三方排名佐证）。空间史主线是\"Perkins 工程\"——与耶鲁\"逐房间滚动修复\"、普林斯顿\"十年一次大翻新\"并列的第三种范式：后台先行＋分期滚动，且每个阶段都绑定明确的捐赠叙事。",
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
    { title: "后台密集库走向区域联盟化", type: "fact", note: "LSC 从杜克自有设施发展为北卡三角区四校共享基础设施，UNC 以 30 年长约购买容量——\"谁的库房\"变成\"谁的协议\"。" },
    { title: "特藏馆 = 教学空间 + 活动场馆 + 募捐载体", type: "fact", note: "Rubenstein 教室与展览空间翻倍、成为热门活动场地；特藏空间的使用时长与功能密度都在上升。" },
    { title: "百年馆舍批量进入大修周期，造价与工期风险前置暴露", type: "fact", note: "Lilly（1927）2027 年百年；耶鲁 Sterling（1930）已启动 2031 百年评估——1920–30 年代馆舍的系统性更新高峰已到，造价公开透明将成为新的沟通标准。" },
    { title: "运营管理全面数据化", type: "fact", note: "座位清点决定开放时间、用户调查决定是否恢复、研讨室预约量进入官方快数——空间运营转向\"测量—调整—再测量\"循环。" },
    { title: "纸质流通坍缩后的空间再分配成为常态议题", type: "fact", note: "\"藏\"与\"用\"的空间分离不可逆；流通率将持续走低。" }
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
  region: "美国东北",
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
      facts: "建筑师 Wrenn, Lewis, and Jencks 提出把图书馆主要建于地下——若建于地面，体量将压过 1805 年建成的联邦风格建筑 Homewood House。地下化的代价随后显现：1979 年空间再次紧张，学习区被改为书架，D 层长期被学生称为\"停尸房\"\"地牢\"。2024–2027 现代化改造：利用更换机电的竖向井道改建玻璃\"大楼梯\"+ 可行走天窗，把自然光引入地下 50 英尺；D 层换装活动密集书架；C 层新设双层挑高大阅览室；特藏部迁至核心位置。目标 LEED Gold、全电系统、net-zero ready。",
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
    { title: "1960 年代地下/半地下馆舍批量进入\"采光与机电双重更新\"周期", type: "fact", note: "MSE 60 年后首次全面改造，核心是把光引入地下 50 英尺；美国高校 20 世纪中期馆舍的系统性更新高峰仍在持续，\"采光债\"成为普遍议题。" },
    { title: "家具选型从采购环节变成公开的用户研究环节", type: "fact", note: "家具市集让学生对候选桌椅现场投票，校方媒体与学生媒体同步报道——家具清单的诞生过程本身成为项目沟通资产，供应商样品即教具。" },
    { title: "旗舰馆\"全闭馆＋服务不闭馆\"成为可接受的改造模式", type: "fact", note: "与耶鲁\"逐房间滚动\"、杜克\"新楼先开再修旧楼\"并列的第三种施工组织范式，前提是有替代空间矩阵。" },
    { title: "特藏从边缘库位走向主馆核心层", type: "fact", note: "MSE 改造把特藏部迁到核心层并配教学与展览空间——特藏教学化趋势在空间分配上兑现（与杜克 Rubenstein、耶鲁 Beinecke 同向）。" },
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
  region: "美国中西部",
  state: "伊利诺伊州 · 芝加哥",
  reportId: "LR-20260920-01",
  reportDate: "2026-09-20",
  tagline: "馆藏完整性：用自动化密度换土地",
  mainLine: "一条\"书不出校园\"的逆流之线：2005 年校董会决定把全部印本馆藏留在校园内，答案不是缩小馆藏，而是 2011 年在主馆旁挖出一个 50 英尺深的机器人书库，把 350 万册书塞进常规书库七分之一的体积里。",
  flagship: { name: "曼苏托图书馆（2011）", note: "全美唯一全地下 ASRS、北美最大自动化高密度图书馆之一：1/7 占地、平均 3 分钟取书、2,500 万命名捐赠撬动 8,100 万项目。" },
  overview: {
    intro: "美国第十大学术图书馆（校方 2022–23 口径，1,320 万册）。六馆系统呈\"一巨、一密、一专、三小\"格局，与哈佛 70 余馆的联邦制相反，芝大走的是持续集中化路线——从 1970 年合并 12 个院系馆开始就没停过。",
    stats: [
      { k: "总藏书", v: "1,320 万册", s: "校方口径（含电子），位列美国第十大学术图书馆" },
      { k: "数字馆藏", v: "304 TB", s: "原生数字档案与数字化馆藏；档案手稿 73,451 直线英尺" },
      { k: "雷根斯坦", v: "110 万人次/年", s: "FY2022–23 入馆；577,085 平方英尺" },
      { k: "电子文献传递", v: "740 万篇次", s: "FY2022–23，年印本流通 103,940 册" }
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
      facts: "SOM 的 Walter Netsch 设计，印第安纳石灰岩外墙呼应校园哥特传统；把全校总馆与 12 个院系图书馆的 160 余万册藏书合并进同一排架序列——\"图书馆史上最大的单一统一馆藏\"。1998 年 B 层固定架换活动密集书架，容量扩容超 50%；2015 年 A 层改互动学习中心（72 英尺玻璃墙朝向花园，\"改造后立刻挤满了学生\"）。",
      insight: "大进深、少隔断的\"仓库式\"楼层剖面有极强的再配置韧性——56 年装下全部功能更替；\"容量不够\"不一定是缺地，也可能是缺密度：一次书架层级的改造换来 50% 增量，推迟新建十余年。"
    },
    {
      name: "哈珀纪念图书馆（1912）：第一座\"够大\"的图书馆，与洛克菲勒的 3:1 配捐",
      nameEn: "Harper Memorial Library · 1912",
      year: "1912 / 2009 改造",
      stats: [{ k: "配捐", v: "洛克菲勒 3:1" }, { k: "改造", v: "2009 → 凯西中心 2012" }, { k: "命名捐赠", v: "约 $17M" }],
      facts: "洛克菲勒 3:1 挑战配捐（每筹 1 美元配 3 美元）。1970 年藏书迁出后功能让位，2009 年顶层改造为 24 小时学习空间，2012 年校友凯西认捐约 1,700 万美元命名为凯西学习中心。注意：24 小时承诺没有守住——如今仅考试周开放。",
      insight: "\"图书馆变成非图书馆\"的完整样本：1912 年全校中枢 → 1970 年藏书抽走 → 2009 年以\"无书的学习空间\"回归学生生活。"
    },
    {
      name: "克里勒图书馆（1984／2017–2018）：科学馆的两轮\"空间换功能\"",
      nameEn: "John Crerar Library · 1984 / 2017–2018",
      year: "1984 / 2017–2018",
      stats: [{ k: "造价", v: "约 $22M" }, { k: "面积", v: "160,836 SF" }, { k: "再造", v: "顶层两层给 CS 系" }],
      facts: "源自 1894 年实业家遗嘱设立的免费公共科学图书馆，1981 年以并入芝大为条件获得新馆。2017–2018 年顶层两层改造为计算机科学系与计算研究所空间，留馆藏书压入地下密集架、迁出藏书改为申请调阅。",
      insight: "\"图书馆建筑被大学重新分配\"的样本——前提曼苏托在 6 年前建成：没有后台密度，前台让渡就不成立。"
    }
  ],
  learningSpaces: "\"主馆即校园客厅\"：雷根斯坦 A 层互动学习中心（高吧台、休闲椅、会议桌、白板、72 英尺玻璃墙）+ 17 间可预约研习室 + 62 个日间储物柜（14 个带充电）；曼苏托大阅览室 180 座自然光穹顶；凯西学习中心 2 万平方英尺（主阅览室安静自习＋北阅览室小组协作）。但 24/7 供给正在收缩：2009 年高调开出的 24 小时空间，如今收缩到考试周限定——雷根斯坦午夜闭馆（期末周延至凌晨 4 点），与 JHU 以 BLC 补 24/7 的方向相反。",
  serviceModel: "服务叙事始终围绕\"馆藏的可及性\"：不迁走书（2005 方针）、分钟级取书（ASRS）、数字化传递（740 万篇次）与特藏教学化（SCRC 扩大研讨教室）是同一条逻辑的四种兑现方式。数字学术基础设施进入\"基金会＋校方配捐\"共建模式（NEH 100 万美元＋校方再募 400 万美元）。",
  trends: [
    { title: "\"校内高密度自动化存储\"正在从小众选择变成可评估的常规选项", type: "fact", note: "第一代 ASRS 已进入\"扩容周期\"——对国内有土地约束的老校区，这是比异地库房更贴近\"馆藏即身份\"叙事的路线。" },
    { title: "图书馆建筑正在被\"适应性再利用\"重新定义", type: "fact", note: "克里勒让位计算机系、哈珀变学习空间、雷根斯坦 A 层变互动学习中心——芝大没有拆过一座图书馆，但每一座的功能都被重新分配过；资产价值评估从\"藏书容器\"转向\"校园不动产\"。" },
    { title: "24/7 供给在美国高校呈收缩态势", type: "fact", note: "24/7 正从\"标配叙事\"变成\"需要持续辩护的成本项\"——数据化清点与公开沟通将成为下一阶段的标配动作。" },
    { title: "数字学术基础设施进入\"基金会＋校方配捐\"共建模式", type: "fact", note: "图书馆的下一笔大钱不花在空间上，而花在数据结构与 AI 就绪的馆藏上；空间投资与数字投资开始分账叙事。" },
    { title: "特藏空间的\"荣誉命名\"成为零成本捐赠产品", type: "fact", note: "SCRC 以 90 岁前校长之名命名（2020），不涉大额捐赠却获得全校传播——与曼苏托 2,500 万美元的金钱命名构成命名产品价格带的两端。" }
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
}
];
