/* ═══════════════════════════════════════════════════════════════
   案例库数据 · Steelcase 图书馆项目案例
   第一个案例：昆山杜克大学图书馆（2023，Building 11）
   数据口径：本地 Steelcase 案例库 9 份材料＋公开报道/官方视频
   ═══════════════════════════════════════════════════════════════ */
window.CASES = [
  {
    id: "dku",
    name: "昆山杜克大学图书馆",
    nameEn: "Duke Kunshan University Library",
    tagline: "两本轻轻旋转的「书」，与 2,851 件家具",
    mainLine: "5.7 万册纸质藏书是 31 所高校样本中的最小量级，但背靠杜克大学 289 万册电子资源、面前是 560 个座位与 25 个个性化学习空间——Perkins&Will 的「两本书」用建筑重新定义阅读，Steelcase 用 112 种家具把「每种阅读方式」落进 4 层楼。这是我们案例板块的第一个样本，也是「图书馆研究＋Steelcase 方案」双视角的框架首演。",
    reportId: "LR-20261111-01",
    reportDate: "2026-11-11",
    year: "2023 年 8 月启用",
    location: "中国 · 江苏昆山",
    school: "昆山杜克大学（杜克大学 × 武汉大学合办）",
    roles: [
      { k: "建筑设计", v: "Perkins&Will" },
      { k: "合作设计院", v: "同济大学建筑设计研究院" },
      { k: "家具与空间方案", v: "Steelcase（含 Orangebox / Coalesse / AMQ 等品牌家族）" },
      { k: "景观设计", v: "Futurepolis 未来都市" },
      { k: "绿色认证", v: "图书馆 LEED 金级 · 校园 28 栋全部 LEED" }
    ],
    links: [
      { label: "图书馆官网", url: "https://library.dukekunshan.edu.cn/" },
      { label: "Steelcase 官方案例视频（5 分钟）", url: "https://www.steelcase.com/asia-en/research/videos/duke-kunshan-university-case-study/" }
    ],
    stats: [
      { k: "二期校园总建面", v: "153,182.5㎡", s: "22 栋新建筑 · 2023-08-13 开园" },
      { k: "图书馆楼层", v: "4 层", s: "校园中轴线左侧 · 一二期中心位置" },
      { k: "阅览座位", v: "560 座", s: "另有 23 间自习室/学习室" },
      { k: "家具规模", v: "112 种 · 2,851 件", s: "学校官方公众号口径 · 以 Steelcase 为主" },
      { k: "个性化学习空间", v: "25 个", s: "「E 人 / I 人都有舒适区」" },
      { k: "纸质馆藏", v: "5.7 万册", s: "76% 英文 · 共享杜克 289 万册电子书" }
    ],
    arch: {
      intro: "图书馆是二期 22 栋建筑里设计师最「得宠」的作品：两本重叠的「书」轻轻旋转了一个角度——体量切割形成纵深感与立面遮阳，从内部看，切口成为校园与自然之间的框景（Perkins&Will 称之为「实体雕刻」）。重点教学楼之间 3 分钟步行可达；从一期学术楼小图书馆到二期大楼约 100 米的平移，见证了学校从借用空间到拥有标志性文化建筑的转身。",
      quote: "我们的设计初衷是，昆山杜克大学图书馆不仅仅是一个藏书楼、一个借阅室，还是一个开放的文化艺术空间。展览、讲座、音乐、艺术和科技体验，都是一种「阅读」——这座图书馆将重新定义「阅读」。",
      quoteBy: "李剑平 · Perkins&Will 项目经理/建筑师"
    },
    floors: [
      { f: "1F", name: "公共客厅层", spaces: "服务台 · 大厅/展馆 · 咖啡厅/书店 · 24 小时自习室 · 电脑站 · 儿童阅读区 · 辅导室 · 创新中心", note: "公共性最强：展览、咖啡、书店与 24h 自习并存；自助借还机覆盖 1/3/4F" },
      { f: "2F", name: "专业实验层", spaces: "万得金融实验室（25 台 iMac）· 刘爽影视赏析室 · 6 个多媒体室 · 教工研究中心", note: "「看电影」也是「阅读」：影音赏析与金融实验室上楼" },
      { f: "3F", name: "文化客厅层", spaces: "茶室（双层挑高，连空中花园）· 阅读区 · 创意空间 · 电影音乐室", note: "传统中式茶桌＋灯饰的茶室可预约办活动——图书馆里的文化客厅" },
      { f: "4F", name: "数字创作层", spaces: "数字港 Digital Hub · 冥想室（4116，俯瞰学术广场）· 海报与 3D 打印角 · 图书刊印工作坊 · AR/VR 体验室", note: "3D 打印与冥想室同层：数字创作与静修并存" }
    ],
    services: [
      "开放 8:00–23:00 全年无休；24 小时自习室单独刷卡、全年 24/7",
      "设备借用 10 类：Kindle / 笔记本 / iPad / 充电宝 / 耳机 / 激光翻页笔等",
      "付费海报打印、教材统一订购分发、课程参考书 3 小时短借",
      "档案与特藏（校史＋学术主题）；研究咨询与 Zotero / R / Tableau 培训",
      "2 台中文电子书自助借阅机；网上预约、1008 室自取"
    ],
    scFramework: [
      { t: "整校园视角", d: "投标方案覆盖二期 6 栋建筑（图书馆只是 Building 11）——Steelcase 做的是「整校园学习空间」，图书馆是其中的旗舰场景。" },
      { t: "研究报告开场", d: "标书以「Learn Better」研究开场：设计思维六步流程（Understand→Measure）、四大宏观转变（灵活/灵感/效能/安全）、新设计原则（Open+Enclosed、Me+We、Fixed to Fluid、数字与物理编织）。" },
      { t: "四象限分区模型", d: "每个空间按 Public/Private × Alone/Together 四象限定位，并标注 Mode（人数）/ Posture（姿态）/ User——把「感觉」变成可核对的清单。" },
      { t: "总口号", d: "Every Space Is A Learning Space——教学空间分布到图书馆、社区中心甚至宿舍楼一层。" }
    ],
    scProducts: [
      { area: "1F 大厅/展馆", items: "Orangebox Away from the Desk · Sully · Buoy 坐墩 · Campfire 系列 · media:scape Lounge · Coalesse Massaud Lounge · m.a.d. Delta 高桌" },
      { area: "1F 创新中心", items: "Flex 升降桌＋Gesture 椅 · Node 椅＋Verb 桌 · Flex Markerboard 移动白板 · Think 椅 · Bfree Beam" },
      { area: "2F 教工研究中心", items: "Coalesse SW_1 · Michael Strads Enzo/Yea 沙发 · Grado Belly 躺椅 · Wendelbo Slice 书架 · Migration SE Pro 升降工位 · Convene 会议桌" },
      { area: "3F 阅读/自习区", items: "Away from the Desk（带桌板/高背隐私屏）· Orangebox Avi · Border 高背沙发 · Coalesse Montara650 · m.a.d. Lolli 吧凳" },
      { area: "4F 学习/咨询区", items: "media:scape Lounge（带隐私罩）· Buoy · Campfire Personal Table · Orangebox Cwtch/Cubb · Fliptop Twin 翻板桌 · On the QT 电话亭" }
    ],
    scNote: "方案里的品牌矩阵：Steelcase 主品牌＋Orangebox（英）＋Coalesse＋AMQ＋m.a.d.＋Grado＋Michael Strads＋Wendelbo——以「品牌家族＋合作伙伴」覆盖从工位到 Lounge 的全场景。多数产品东莞制造、6–8 周货期；官方照片中可辨认 On the QT 电话亭、Buoy、Away from the Desk、media:scape Lounge 等，投标方案与落地高度一致。",
    scQuotes: [
      { t: "Steelcase 是昆山杜克大学校园环境的核心部分。一整套由家具、设施和结构组成的整体环境，让人们舒适地工作，更快乐、更健康——这种感受是长期的。", by: "Scott MacEachern · DKU 学术事务副校长" },
      { t: "空间秩序支持「随时随地学习」：教学空间灵活分布在图书馆、学生中心，甚至学生宿舍。", by: "Paul Rice · Perkins&Will 董事、设计总监" }
    ],
    galleries: [
      {
        group: "图书馆（Building 11）",
        photos: [
          { src: "dku-lib-01.jpg", cap: "一层大厅：双层挑高中庭，组合沙发构成欢迎场景" },
          { src: "dku-lib-02.jpg", cap: "大台阶阶梯座：台阶本身就是家具" },
          { src: "dku-lib-03.jpg", cap: "大台阶俯瞰：垂直交通成为非正式学习场所" },
          { src: "dku-lib-04.jpg", cap: "书架阅读区：藏书与坐垫式阅读相邻" },
          { src: "dku-lib-05.jpg", cap: "三层沿窗阅读区：窗景即景观" },
          { src: "dku-lib-06.jpg", cap: "三层大空间：黄色沙发组构成的「活力学习岛」" },
          { src: "dku-lib-07.jpg", cap: "几何地毯划分领域，高背座椅提供半私密" },
          { src: "dku-lib-08.jpg", cap: "木格栅吊顶下的高背卡座——Me/Together 象限的实物注解" },
          { src: "dku-lib-09.jpg", cap: "「On the QT」电话亭与 Lounge：私密与开放并置" },
          { src: "dku-lib-10.jpg", cap: "俯拍沙发组合：家具即空间隔断" }
        ]
      },
      {
        group: "社区中心（Building 13）",
        photos: [
          { src: "dku-cc-01.jpg", cap: "窗边 Lounge：蓝色长沙发＋黄绿色 Buoy 坐墩" },
          { src: "dku-cc-02.jpg", cap: "长廊连续 Lounge 场景" },
          { src: "dku-cc-03.jpg", cap: "会客区：蓝色沙发与黄色单椅的色彩对位" },
          { src: "dku-cc-04.jpg", cap: "高桌区：红色地毯上的站立式交流场景" }
        ]
      },
      {
        group: "访客中心（Building 08 · LEED 铂金）",
        photos: [
          { src: "dku-vc-01.jpg", cap: "挑高大厅：蓝色沙发阵列面向落地窗" }
        ]
      },
      {
        group: "武大—杜克研究院楼（Building 09）",
        photos: [
          { src: "dku-rb-01.jpg", cap: "DKU 标识墙与休闲椅" },
          { src: "dku-rb-02.jpg", cap: "「On the QT」电话亭与窗边高桌——随时随地学习的最小单元" },
          { src: "dku-rb-03.jpg", cap: "Lounge：彩色坐墩与灰蓝沙发" },
          { src: "dku-rb-04.jpg", cap: "吧台式工位与吊灯" }
        ]
      }
    ],
    media: {
      videos: [
        { label: "Steelcase 官方案例视频（5 分钟 · 英文）", url: "https://www.steelcase.com/asia-en/research/videos/duke-kunshan-university-case-study/" },
        { label: "本地案例库视频 3 段（官方版/鲁哈哈版/图片剪辑版，工作资料盘归档）", url: "" }
      ],
      articles: [
        { label: "谷德设计网 · 昆山杜克大学二期校园项目页（完整信息＋图纸）", url: "https://www.gooood.cn/the-duke-kunshan-university-s-phase-ii-campus-china-by-perkins-will.htm" },
        { label: "中国日报网 · Steelcase×昆山杜克×Perkins&Will 三方携手打造多元校园（2023-12-07）", url: "https://caijing.chinadaily.com.cn/a/202312/07/WS65717ae1a310d5acd87720d5.html" },
        { label: "DKU 官方公众号 · 相看两不厌 最是图书馆（「112 种 2851 件家具」出处）", url: "https://www.sohu.com/a/723775689_121117450" },
        { label: "微信 · 案例︱昆山杜克大学二期校园：共建主动式学习社区", url: "http://mp.weixin.qq.com/s?__biz=MzI4NDU1NzQ5Ng==&mid=2247485083&idx=1&sn=302fe8b487c127b2dee2bf10b7b8376a" }
      ]
    },
    trends: [
      { type: "fact", title: "家具从「统一桌椅」转向「按行为模式分区的场景化配置」", note: "112 种 2,851 件家具对应 25 个学习空间；投标方案用四象限＋Mode/Posture/User 三维标注把「学习方式多样性」翻译成采购清单。" },
      { type: "fact", title: "图书馆成为校园分布式学习网络的枢纽节点", note: "Every Space Is A Learning Space：教学空间分布到图书馆、社区中心、宿舍楼一层；二期 6 栋建筑用同一套空间语言。" },
      { type: "judge", title: "家具预算已是图书馆建设的核心科目", note: "一座 4 层 560 座新馆的家具种类过百、件数千计——「土建完成再配家具」会导致场景落地打折；家具方案应前移到建筑/室内设计阶段。" },
      { type: "judge", title: "合办大学图书馆的「轻馆藏、重共享」模式", note: "5.7 万册纸质＋杜克 289 万册电子资源：馆藏竞争力可以从「拥有」转向「可获取」，预算可从书库面积转向空间场景与资源联盟。" }
    ],
    business: [
      "投标方案即销售工具：以研究报告开场建立专业信任，用四象限分区图和逐层产品清单收尾——「先给框架，再给清单」。",
      "量化口径值得复用：「112 种、2,851 件」「25 个学习空间」「560 座」——每个案例都应提炼 3 个可引用、可比较的数字。",
      "案例资产分空间归档法：本地案例库按「楼栋＃空间类型」组织照片，检索复用效率极高，可直接套用。",
      "传播语言年轻化：「E 人 / I 人都能找到舒适区」让学生自发转发——专业案例破圈需要一句非专业读者也能转述的话。",
      "三方联合叙事：建筑事务所＋学校＋家具品牌共同出镜、互相背书，比单一品牌自述可信得多。"
    ],
    limits: [
      "图书馆单体建筑面积暂无公开口径（153,182.5㎡ 为二期 22 栋总和），待核实。",
      "「2,851 件家具」出自 2023-09 学校公众号，未注明是否含二期其他楼栋，按图书馆大楼口径引用、待核。",
      "产品清单来自 2021-09 概念投标方案；照片可佐证主要产品落地，完整核对需对照竣工清单。",
      "DKU 为高学费小规模合办大学，生均资源投入高于普通公立高校，空间标准不宜直接作为公立大学预算参照。",
      "照片均为 Steelcase 官方案例摄影，仅作研究识别之用，版权归原权利方所有。"
    ],
    sources: [
      { label: "Steelcase 投标概念方案（2021-09，本地案例库）", url: "" },
      { label: "DKU 图书馆官方指南（2024-08，本地案例库）", url: "" },
      { label: "Steelcase 官方案例视频＋项目照片 69 张（本地案例库）", url: "" },
      { label: "谷德设计网 gooood.cn 项目页", url: "https://www.gooood.cn/the-duke-kunshan-university-s-phase-ii-campus-china-by-perkins-will.htm" },
      { label: "中国日报网报道（2023-12-07）", url: "https://caijing.chinadaily.com.cn/a/202312/07/WS65717ae1a310d5acd87720d5.html" },
      { label: "DKU 官方公众号《相看两不厌 最是图书馆》（2023-09）", url: "https://www.sohu.com/a/723775689_121117450" },
      { label: "昆山杜克大学本科招生简章（校园 LEED 与两期信息）", url: "https://newstatic.dukekunshan.edu.cn/admissions/2024/06/11134532/昆山杜克大学2024年本科综合评价招生简章（中国内地学生）.pdf" }
    ]
  }
];
