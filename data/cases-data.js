/* ═══════════════════════════════════════════════════════════════
   案例库数据 · Steelcase 图书馆项目案例（客户展示版）
   结构：hero（首屏）+ story（叙事区块数组，按类型渲染）
   区块类型：chapter / prose / quote / photo / split / stats /
             cards / table / voices / links / note
   ═══════════════════════════════════════════════════════════════ */
window.CASES = [
  {
    id: "dku",
    name: "昆山杜克大学图书馆",
    nameEn: "Duke Kunshan University Library",
    year: "2023 年启用",
    location: "中国 · 江苏昆山",
    reportId: "LR-20261111-01",
    reportDate: "2026-11-11",
    num: "001",
    facts: [
      { k: "地点 LOCATION", v: "中国 · 江苏昆山" },
      { k: "启用 OPENED", v: "2023 年 8 月 13 日" },
      { k: "建筑设计 ARCHITECT", v: "Perkins&Will（二期总体）" },
      { k: "家具方案 FURNITURE", v: "Steelcase 整体方案中标" },
      { k: "认证 CERTIFICATION", v: "图书馆 LEED 金级" }
    ],
    internal: {
      business: [
        { t: "投标文本是最好的销售素材", d: "本项目 2021 年两份投标方案细到「分区 × 产品 × 数量」，把「理念→清单→采购→场景」的转化完整留档。同类项目投标后建议持续归档——它们就是下一次提案最有说服力的证据链。" },
        { t: "品牌家族打法值得对客户讲透", d: "主品牌＋Orangebox / Coalesse / 合作伙伴覆盖从工位到 Lounge 的全场景。对客户讲「一套设计语言」而不是单品清单，是抬高方案通过率的关键叙事。" },
        { t: "「东莞制造、6–8 周货期」是确定性卖点", d: "投标阶段即给出可承诺的交期。教育项目工期紧、验收节点硬，交期确定性常比单品价格更能赢标。" },
        { t: "MBTI 式空间叙事可直接复用", d: "用客户熟悉的流行语翻译空间策略（E 人 / I 人各有其位），传播成本极低、共鸣极高——官网、公众号、投标 PPT 都可套用。" }
      ],
      sources: [
        "谷德设计网 · 昆山杜克大学二期校园项目页（Perkins&Will 设计说明全文）",
        "中国日报网 · Steelcase×昆山杜克×Perkins&Will 三方携手打造多元校园（2023-12-07）",
        "昆山杜克大学官方公众号 ·《相看两不厌 最是图书馆》（搜狐转载全文）",
        "Steelcase 官方案例视频 · Duke Kunshan University Case Study（5 分钟）",
        "站长本地案例库（工作资料盘归档）：2021 投标方案 ×2 · 2024 图书馆指南 · 视频转录 ×3 · 案例照片 69 张"
      ],
      todos: [
        "图书馆单体建筑面积无公开口径（二期总建面 153,182.5 ㎡ / 22 栋有公开数据），对外引用需谨慎",
        "各楼层家具清单以投标方案文本为准，与实景照片的对位存在少量推断",
        "创新中心在 1F 的归属与视频资料中的表述需二次核对",
        "三层茶室预约方式与开放频率未见公开信息"
      ],
      furnNote: "完整分楼层家具清单（分区 × 产品 × 数量）见 2021 年投标方案原文，本地库已归档；客户版仅列代表产品。下个案例报告建议按「楼层 × 场景 × 产品」三列输出，便于直接对位实景照片。"
    },
    hero: {
      kicker: "Steelcase 案例 · 昆山杜克大学",
      title: "一座图书馆，<br>重新定义<em>「阅读」</em>",
      standfirst: "两本轻轻旋转的「书」，落在校园中轴线上。560 个座位、25 种学习场景、112 种共 2,851 件家具——Perkins&Will 与 Steelcase 用一座图书馆回答：21 世纪的大学图书馆，应该是什么样子。",
      quote: {
        t: "展览、讲座、音乐、艺术和科技体验，都是一种「阅读」——这座图书馆将重新定义「阅读」。",
        by: "李剑平 · Perkins&Will 项目经理/建筑师"
      },
      img: "dku-lib-01.jpg",
      chips: ["中国 · 江苏昆山", "2023 年 8 月启用", "图书馆 LEED 金级"]
    },
    story: [

      /* ─────────── 01 为什么 ─────────── */
      { type: "chapter", no: "01", tag: "WHY", title: "100 米的距离，<br>走了七年", sub: "在动土之前，先回答「为什么建」" },
      { type: "prose", html: `
        <p>从昆山杜克大学一期学术楼里的小图书馆，到二期校园中心位置的图书馆大楼，两者相距大约 100 米。但这 100 米的平移，走了整整七年。</p>
        <p>2016 年秋，在学校支持下，图书馆馆长徐鸿博士组织了一场国际会议——美国杜克大学、加州大学伯克利分校、天普大学、北京大学、香港科技大学、澳门大学的图书馆馆长与专家，以及世界知名建筑事务所的设计师齐聚昆山，只为探讨一个问题：<b>21 世纪的新型大学图书馆应该是什么样子？</b></p>
        <p>专家们留下了一致的意见：一切以用户需求为导向，有明确的功能和灵活的空间。徐鸿博士则把标准定得更远——「新图书馆至少要满足未来 20 年的成长需求。」</p>
        <p>2018 年，Perkins&Will 接下二期校园的总体设计；2021 年，Steelcase 以覆盖 6 栋建筑的整体方案中标家具与空间配置；2023 年 8 月 13 日，二期校园开园，图书馆成为 22 栋新建筑中最受瞩目的那一座。</p>` },
      { type: "quote", t: "新图书馆至少要满足未来 20 年的成长需求。", by: "徐鸿 博士 · 昆山杜克大学图书馆馆长" },
      { type: "photo", src: "dku-lib-02.jpg", cap: "大台阶阶梯座：从一层大厅通往中庭的「校园客厅」", full: true },

      /* ─────────── 02 理念 ─────────── */
      { type: "chapter", no: "02", tag: "BELIEF", title: "三方，同一个信念", sub: "学校、建筑师与 Steelcase 在这件事上从未分歧" },
      { type: "prose", html: `
        <p>一座伟大的图书馆，从来不是先有图纸，而是先有信念。昆山杜克这个项目罕见的地方在于：学校、建筑师、家具方三方的信念，从一开始就咬合在一起。</p>` },
      { type: "split", img: "dku-lib-03.jpg", cap: "中庭楼梯：公共中庭打破空间边界，串联各楼层", html: `
        <h3>学校相信：扎根昆山，联结世界</h3>
        <p>「昆山杜克大学的整体愿景，是打造一个位于昆山的小型大学——紧密扎根于昆山，同时促进学生、教职员工之间的国际交流。我们既深深扎根于昆山，又与世界各地相互联结。」学术事务副校长 Scott MacEachern 这样描述学校的愿景。</p>
        <p>图书馆正是这种「扎根与联结」的实体宣言：它向昆山的水乡文脉致敬，又与美国杜克大学的 Abele Quad 方院序列遥相呼应。</p>` },
      { type: "split", img: "dku-lib-14.jpg", cap: "三层沿窗阅读区：体量切割出的「框景」", flip: true, html: `
        <h3>设计师相信：图书馆不只是藏书楼</h3>
        <p>「我们的设计初衷是，昆山杜克大学图书馆不仅仅是一个藏书楼、一个借阅室，还是一个开放的文化艺术空间。」项目经理、建筑师李剑平说。</p>
        <p>建筑造型是两本重叠的「书」，轻轻旋转了一个角度；体量切割形成纵深感与立面遮阳，从内部向外看，这些切口在校园与自然之间撷取出一幅幅框景——Perkins&Will 称之为「实体雕刻」。</p>` },
      { type: "split", img: "dku-lib-11.jpg", cap: "二层 Lounge：随时停下脚步的一隅之地", html: `
        <h3>Steelcase 相信：每个空间都是学习空间</h3>
        <p>「二期校园的空间秩序支持『随时随地学习』的理念，多样化的学习场景从建筑内延伸至建筑外——无论何时何地停下脚步，即刻能找到一隅之地安放稍纵即逝的灵感。」Perkins&Will 董事、设计总监 Paul Rice 说。</p>
        <p>Steelcase Learning 基于「Learn Better」理念加入这个项目：通过灵活便捷的家具、设备与合理的内部空间规划，帮助学生更好地交流学习、多元互动——这些空间鼓励批判性思维、问题解决能力和创造力。</p>` },
      { type: "quote", big: true, t: "学习知识不局限于书本，也从交流和观察感悟中来。", by: "Perkins&Will 二期校园设计说明" },

      /* ─────────── 03 走进空间 ─────────── */
      { type: "chapter", no: "03", tag: "WALKTHROUGH", title: "四层楼，走一遍", sub: "从公共客厅到数字创作，每一层是一种「阅读」" },
      { type: "prose", html: `
        <p>图书馆共 4 层。挑高的中庭沐浴在自然光下，既是主要的交通空间，也是开放的艺术展廊——柔和的光线、纯净的浅色空间，可以为主题迥异的展览提供最佳展示场所。让我们从一层开始，逐层向上。</p>` },

      { type: "split", img: "dku-lib-06.jpg", cap: "三层大空间：黄色沙发组与三角吊灯构成的「活力学习岛」", html: `
        <h3><span class="fl">1F</span> 公共客厅层</h3>
        <p>服务台、大厅/展馆、咖啡厅/书店、儿童阅读区、辅导室与创新中心都在这一层——公共性最强的一层：展览、咖啡、书店与 24 小时自习室并存。公共计算机、自助借还机与设备借用服务台，让「进馆第一件事」可以在 30 秒内完成。</p>
        <p class="furn">家具注解：Orangebox Away from the Desk 高背卡座 · Buoy 坐墩 · Campfire 系列 · media:scape Lounge · Coalesse Massaud Lounge</p>` },
      { type: "split", img: "dku-lib-12.jpg", cap: "二层窗边 Lounge：金融实验室外的交流场景", flip: true, html: `
        <h3><span class="fl">2F</span> 专业实验层</h3>
        <p>「看电影」也是一种阅读——刘爽影视赏析室配有专业影音设备；万得金融实验室配置 25 台 iMac；6 个多媒体室与教工研究中心，让这一层成为「专业型学习」的主场。</p>
        <p class="furn">家具注解：Coalesse SW_1 · Michael Strads Enzo/Yea 沙发 · Grado Belly 躺椅 · Migration SE Pro 升降工位 · Convene 会议桌</p>` },
      { type: "split", img: "dku-lib-08.jpg", cap: "三层木格栅吊顶下的高背卡座：半私密的「Me 时间」", html: `
        <h3><span class="fl">3F</span> 文化客厅层</h3>
        <p>全馆最有「中国味道」的一层：双层挑高的茶室连接空中花园，内置传统中式茶桌与灯饰，可预约举办活动；阅读区与创意空间沿窗展开，木格栅吊顶下是一排排高背卡座——想独处的人有顶棚，想讨论的人有开阔地。</p>
        <p class="furn">家具注解：Away from the Desk（带桌板/高背隐私屏）· Orangebox Avi · Border 高背沙发 · Coalesse Montara650</p>` },
      { type: "split", img: "dku-lib-09.jpg", cap: "四层：「On the QT」电话亭与 Lounge 组合", flip: true, html: `
        <h3><span class="fl">4F</span> 数字创作层</h3>
        <p>3D 打印与冥想室同层——这可能是全馆最大胆的并置：数字港 Digital Hub、海报与 3D 打印角、图书刊印工作坊、AR/VR 体验室负责「创造」，4116 冥想室俯瞰学术广场，负责「放空」。</p>
        <p class="furn">家具注解：media:scape Lounge（带隐私罩）· Buoy · Campfire Personal Table · Orangebox Cwtch/Cubb · On the QT 电话亭</p>` },
      { type: "photo", src: "dku-lib-10.jpg", cap: "家具即空间隔断：俯拍沙发组合", full: true },

      /* ─────────── 04 舒适区 ─────────── */
      { type: "chapter", no: "04", tag: "FIND YOUR SPOT", title: "25 种舒适区", sub: "无论你是什么性格，这里都有一个属于你的角落" },
      { type: "prose", html: `
        <p>图书馆的空间分布设计基于用户需求导向——充分考虑不同人群在不同心境下对学习空间的需求。全馆 25 个个性化学习空间，用年轻人流行的话说：无论是外向的「E 人」还是向内探索的「I 人」，都可以找到适合自己的位置。</p>
        <p>这是 DKU 官方公众号对这座图书馆的解读方式，也是我们见过最好的「空间说明书」：</p>` },
      { type: "cards", items: [
        { t: "INTJ · 深思者", d: "三楼、四楼的安静研读区。靠窗的位置，窗外天空一览无余，快速进入「心流」模式。" },
        { t: "ENTJ · 行动派", d: "学习室与课题小组讨论区。旁边就是 3D 打印机、VR/AR 室、数据与可视化工作室，想法当场验证。" },
        { t: "ISFJ · 守护者", d: "二楼刘爽影视赏析室。专业影音设备，与朋友共享一部好片，电影的魅力与学习的乐趣完美融合。" },
        { t: "INFP · 理想家", d: "三楼茶室。中国传统风格的茶几与灯具，品茶读书，那份宁静与自在是城市生活里难得的舒适。" },
        { t: "ESTP · 实践家", d: "开放空间。活力在这里蓬勃发展，偶遇与即兴交流随时发生。" },
        { t: "ENFP · 追梦人", d: "VR/AR 体验室。对生活充满热忱的人，总能在新技术里找到兴奋点。" },
        { t: "ISTP · 分析师", d: "数据与可视化工作室。务实的人喜欢在这里与数据独处。" },
        { t: "ESFJ · 联结者", d: "户外花园。以社区为导向的人，会觉得空中花园是自己的理想之地。" }
      ] },
      { type: "quote", t: "能找到自己的舒适区并坚定地待在自己的舒适区，也是一种幸运。", by: "昆山杜克大学官方公众号《相看两不厌 最是图书馆》" },

      /* ─────────── 05 方法论 ─────────── */
      { type: "chapter", no: "05", tag: "METHOD", title: "Steelcase 的方法论", sub: "不是卖家具，是交付一套学习空间系统" },
      { type: "prose", html: `
        <p>Steelcase 为这个项目交付的，远不止是 2,851 件家具。2021 年的整体方案以研究报告《Learn Better》开场——从全球学生与教育者调研出发，提出四大宏观转变（灵活、灵感、效能、安全）与新的设计原则：开放与围合并重、个体与群体平衡、从固定到流动、数字与物理编织。</p>
        <p>落到每个空间，是一套可核对的分区模型：<b>Public / Private × Alone / Together 四象限</b>——每个空间都标注开放度、独处/共处属性、容纳人数、姿态（坐/倚/站）与使用人群。理念在这里变成清单，清单变成采购，采购变成场景。</p>` },
      { type: "table",
        head: ["空间", "代表产品（方案摘录）"],
        rows: [
          ["1F 大厅/展馆", "Orangebox Away from the Desk · Sully · Buoy · Campfire 系列 · media:scape Lounge · Coalesse Massaud Lounge"],
          ["1F 创新中心", "Flex 升降桌＋Gesture 椅 · Node 椅＋Verb 桌 · Flex Markerboard 移动白板 · Think 椅"],
          ["2F 教工研究中心", "Coalesse SW_1 · Michael Strads Enzo/Yea · Grado Belly · Wendelbo Slice · Migration SE Pro · Convene"],
          ["3F 阅读/自习区", "Away from the Desk（高背隐私屏版）· Orangebox Avi · Border 高背沙发 · Coalesse Montara650"],
          ["4F 学习/咨询区", "media:scape Lounge（带隐私罩）· Buoy · Orangebox Cwtch/Cubb · On the QT 电话亭"]
        ] },
      { type: "note", html: "<b>品牌矩阵。</b>方案中出现的品牌包括 Steelcase 主品牌、Orangebox（英国）、Coalesse、AMQ、m.a.d.、Grado、Michael Strads、Wendelbo——以「品牌家族＋合作伙伴」覆盖从工位到 Lounge 的全场景。多数产品东莞制造、6–8 周货期；官方实景照片可辨认 On the QT 电话亭、Buoy、Away from the Desk、media:scape Lounge 等主力产品，方案与落地高度一致。" },

      /* ─────────── 06 绿色 ─────────── */
      { type: "chapter", no: "06", tag: "GREEN", title: "绿色，是系统性的设计", sub: "LEED 金级背后的细节" },
      { type: "prose", html: `
        <p>图书馆大楼获得 LEED 金级认证——昆山杜克也因此成为中国首座 LEED 整体认证校园（全部 28 栋建筑均获认证）。但认证只是结果，过程藏在细节里：</p>` },
      { type: "cards", items: [
        { t: "75% 自然采光", d: "室内超过 75% 的活动空间达到 LEED 自然采光要求；挑高中庭既是交通空间，也是艺术展廊。" },
        { t: "彩釉玻璃「扉页」", d: "彩釉玻璃形成书籍扉页的立面效果，兼具遮阳节能；并融入昆山师生的科研成果——防鸟撞生态设计。美观、低碳、生物保护三合一。" },
        { t: "聪明的遮阳与空调", d: "采光天窗设电动遮阳帘降低夏季能耗；变风量中央空调配 CO₂ 传感器，按各空间人流实时调节新风。" },
        { t: "环保材料", d: "涂料、地毯、木饰面与粘合剂均满足 LEED 与中国绿建标识要求，获 Green Guard、Green Label 等认证。" }
      ] },
      { type: "stats", items: [
        { v: "560", k: "阅览座位", s: "另有 23 间自习室" },
        { v: "2,851", k: "家具件数", s: "112 种 · 以 Steelcase 为主" },
        { v: "25", k: "个性化学习空间", s: "覆盖 E 人 / I 人" },
        { v: "5.7 万册", k: "纸质馆藏", s: "76% 英文 · 共享杜克 289 万册电子书" },
        { v: "LEED 金级", k: "图书馆认证", s: "校园 28 栋全部 LEED" }
      ] },
      { type: "photo", src: "dku-lib-15.jpg", cap: "四层安静学习区：柔和光线下的浅色空间", full: true },

      /* ─────────── 07 声音 ─────────── */
      { type: "chapter", no: "07", tag: "VOICES", title: "三方声音", sub: "学校、建筑师与 Steelcase 怎么说" },
      { type: "voices", items: [
        { t: "Steelcase 是昆山杜克大学校园环境的核心部分。一整套由家具、设施和结构组成的整体环境，让人们能够舒适地工作，并使他们在工作时更快乐、更健康——这种感受是长期的。", by: "Scott MacEachern · 昆山杜克大学学术事务副校长" },
        { t: "这是一个旨在联结过去和未来的校园：设计中既参考昆山的背景，又与美国杜克大学的校园建立联系，也与一期校园建立联系，并奠定了未来发展的基调。", by: "Paul Rice · Perkins&Will 董事、设计总监" },
        { t: "这次合作为三方创造出了最佳结果，使 Steelcase 能够真正影响学生和教育工作者的生活。对未来教育空间设计的期望，围绕着创造激发灵感、灵活、可持续和包容性的环境。", by: "Ambroise d'Hauteville · Steelcase Learning 亚太区总监" }
      ] },
      { type: "links", title: "官方影像", items: [
        { label: "▶ Steelcase 官方案例视频（5 分钟）：三方共同讲述这个校园", url: "https://www.steelcase.com/asia-en/research/videos/duke-kunshan-university-case-study/" }
      ] },

      /* ─────────── 08 启发 ─────────── */
      { type: "chapter", no: "08", tag: "TAKEAWAYS", title: "为什么这个案例值得参考", sub: "四点启发，供每一位图书馆建设者借鉴" },
      { type: "cards", items: [
        { t: "理念先行，家具其后", d: "先回答「我们相信什么」（重新定义阅读），再回答「放什么家具」。有理念的空间才有灵魂，家具是理念的执行者。" },
        { t: "家具方案前移到设计阶段", d: "建筑、室内与家具在同一套语言里协同——「土建完成再配家具」无法交付 25 种学习场景。" },
        { t: "场景化配置取代统一桌椅", d: "四象限分区模型（开放度 × 独处/共处 × 人数 × 姿态）让「学习方式多样性」变成可核对、可采购的清单。" },
        { t: "轻馆藏，重共享", d: "5.7 万册纸质馆藏背后，是杜克大学 289 万册电子书与 1,100 个数据库的共享体系——竞争力可以从「拥有」转向「可获取」。" }
      ] },
      { type: "links", title: "延伸阅读", items: [
        { label: "谷德设计网 · 昆山杜克大学二期校园项目页（Perkins&Will 设计说明全文）", url: "https://www.gooood.cn/the-duke-kunshan-university-s-phase-ii-campus-china-by-perkins-will.htm" },
        { label: "中国日报网 · Steelcase×昆山杜克×Perkins&Will 三方携手打造多元校园", url: "https://caijing.chinadaily.com.cn/a/202312/07/WS65717ae1a310d5acd87720d5.html" },
        { label: "DKU 官方公众号 · 相看两不厌 最是图书馆（本文多处引用的出处）", url: "https://www.sohu.com/a/723775689_121117450" },
        { label: "昆山杜克大学图书馆官网", url: "https://library.dukekunshan.edu.cn/" }
      ] },
      { type: "note", html: "<b>说明。</b>本页为研究性案例整理，照片为 Steelcase 官方案例摄影，版权归原作者所有，仅作学习交流之用；引文均标注出处。完整研究报告（含资料来源与待验证清单）存档于研究站本地库。" }
    ]
  }
];
