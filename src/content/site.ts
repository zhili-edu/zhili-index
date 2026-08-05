/**
 * 执理科技官网内容数据层
 * 全部文案来自定稿的 9 页静态站（真实素材，肯定句式），
 * 页面组件只负责排版与交互，文案统一在此维护。
 */

export type InternalRoute =
  | "/"
  | "/about"
  | "/business"
  | "/education-tech"
  | "/consumer-tech"
  | "/operations-service"
  | "/solutions"
  | "/cases"
  | "/contact";

export type Fact = { term: string; detail: string };

export type ModuleCard = { tag: string; title: string; description: string };

export type CaseArtKey = "tourism" | "region" | "supervision" | "aiedu" | "platform";

export type CaseStudy = {
  id: string;
  art: CaseArtKey;
  type: string;
  title: string;
  description: string;
  /** 首页 teaser 用的短文案 */
  teaser: string;
  service: string;
  deliver: string;
};

/* ── 站点元信息 ─────────────────────────────────────────── */

export const siteMeta = {
  name: "执理科技",
  email: "contact@zhili-edu.com",
  location: "天津 · 科技运营服务",
  copyright: "Zhili Technology",
  brandAriaLabel: "执理科技首页",
  footerIntro:
    "一家融合教育数字化、AI 技术服务、消费场景运营、文旅商业运营与平台化产品建设的综合型科技运营企业。",
} as const;

/* ── 导航 ──────────────────────────────────────────────── */

export type NavItem = { label: string; href: InternalRoute };

export type BusinessMenuItem = { label: string; href: InternalRoute; description: string };

export const navLinks: NavItem[] = [
  { label: "首页", href: "/" },
  { label: "解决方案", href: "/solutions" },
  { label: "案例成果", href: "/cases" },
  { label: "关于我们", href: "/about" },
  { label: "联系我们", href: "/contact" },
];

export const businessMenu: BusinessMenuItem[] = [
  { label: "业务总览", href: "/business", description: "三类业务的整体框架与协同链路" },
  { label: "教育科技", href: "/education-tech", description: "AI 教育平台、课程体系、数据评价" },
  { label: "消费科技", href: "/consumer-tech", description: "票务会员、营销工具、供应链平台" },
  { label: "运营服务", href: "/operations-service", description: "文旅运营、活动赛事、渠道内容" },
];

export const navCta = { label: "获取解决方案", href: "/contact" } as const;

/* ── 共享区块 ───────────────────────────────────────────── */

export const partners = [
  "国家超算天津中心",
  "天河计算机",
  "滨海文旅集团",
  "滨海教育发展集团",
  "天津大学教育学院",
  "清华大学出版社",
];

export const partnersHeading = "与教育、文旅、科研与出版资源协同";

export type CtaPanelContent = {
  title: string;
  lead: string;
  primary: { label: string; href: InternalRoute };
  secondary: { label: string; href: string };
};

export const defaultCta: CtaPanelContent = {
  title: "让技术真正进入业务场景",
  lead: "如果你正在推进教育数字化、消费项目增长、文旅运营或平台化产品建设，执理科技可以从方案、研发到运营交付共同参与。",
  primary: { label: "联系我们", href: "/contact" },
  secondary: { label: "获取解决方案", href: "/solutions" },
};

export const capabilities = [
  { no: "01", title: "平台研发能力", description: "围绕教育、票务、会员与管理流程搭建业务平台。" },
  { no: "02", title: "AI 应用能力", description: "将 AIGC 与教育内容、教学辅助、评价反馈结合。" },
  { no: "03", title: "内容策划能力", description: "把课程、活动、文旅产品转译为可交付内容。" },
  { no: "04", title: "运营交付能力", description: "承接平台上线后的活动组织、渠道与用户运营。" },
  { no: "05", title: "数据分析能力", description: "关注项目过程数据、评价结果与业务复盘。" },
  { no: "06", title: "项目管理能力", description: "面向政府、学校与企业协同，确保节奏清晰可控。" },
];

export const capabilitiesHeading = {
  title: "从研发到运营的综合交付能力",
  lead: "项目从方案一路走到落地，拆解为平台研发、AI 应用、内容策划、运营执行、数据评价与项目管理的协同链路。",
};

/* ── 首页 ──────────────────────────────────────────────── */

export const home = {
  eyebrow: "ZHILI TECHNOLOGY · 综合型科技运营企业",
  title: "以科技连接教育、消费与城市运营场景",
  lead: "面向政府、学校、企业与城市消费场景，提供数字化平台建设、AI 应用服务与综合运营解决方案。",
  ctaPrimary: { label: "获取解决方案", href: "/contact" },
  ctaSecondary: { label: "查看解决方案", href: "/solutions" },
  trustTags: [
    { before: "成立于 ", num: "2021", after: " 年" },
    { label: "信息学奥赛教育根基" },
    { label: "AIGC 教育平台" },
    { label: "滨海游船文旅票务" },
    { label: "区域教育平台建设" },
  ],
  businessHead: {
    eyebrow: "核心业务",
    title: "三类业务共同指向场景落地",
    lead: "执理科技是一支把平台、内容、运营与交付连接在一起的产业服务团队，围绕客户的完整业务目标提供组合式服务。",
  },
  capabilitiesTeaser: {
    linkLabel: "查看完整能力体系",
    href: "/about#capabilities",
    facts: [
      { term: "平台研发", detail: "围绕教育、票务、会员与管理流程搭建业务平台" },
      { term: "AI 应用", detail: "将 AIGC 与教育内容、教学辅助、评价反馈结合" },
      { term: "运营交付", detail: "承接平台上线后的活动组织、渠道与用户运营" },
      { term: "项目管理", detail: "面向政府、学校与企业协同，确保节奏清晰可控" },
    ] as Fact[],
  },
  solutionsTeaser: {
    title: "面向不同组织的解决方案",
    lead: "以咨询公司式的信息结构呈现问题、建设内容与交付方式，完整呈现产业服务的组合能力。",
    cards: [
      { tag: "政府与园区", title: "数字化运营", description: "项目流程、公众服务触点、数据回流与跨部门协同。", hash: "gov" },
      { tag: "学校与教育主管", title: "AI 教育建设", description: "信息学、AIGC、课后服务与教师成长场景。", hash: "school" },
      { tag: "消费与文旅", title: "增长运营", description: "票务、会员、活动、渠道与营销工具形成闭环。", hash: "consume" },
      { tag: "企业平台", title: "定制开发", description: "管理流程、角色权限、数据看板与业务中台。", hash: "enterprise" },
    ],
  },
  casesTeaser: {
    title: "案例成果以真实项目类型呈现",
    lead: "以项目类型、服务内容与交付成果说明企业能力边界，每一例都来自执理科技的真实业务。",
    moreLabel: "查看全部案例成果",
  },
} as const;

export const homeArchitecture = {
  ariaLabel: "教育、消费、城市运营场景的数据中台架构抽象图",
  layers: [
    { name: "场景层", nodes: ["政府园区", "学校教育", "消费文旅"] },
    { name: "平台层", nodes: ["AI 教育平台", "票务与会员", "项目管理"] },
    { name: "运营层", nodes: ["内容策划", "渠道运营", "数据评价"] },
  ],
  core: { name: "技术底座", tags: ["平台研发", "AI 应用", "数据分析", "交付管理"] },
} as const;

export const homeBusinessCards = [
  {
    id: "feature-education",
    href: "/education-tech",
    icon: "education",
    title: "教育科技",
    description: "围绕 AI 教育平台、课程体系、教师成长、课后服务与数据评价，服务学校和区域教育建设。",
    linkLabel: "了解教育科技",
  },
  {
    id: "feature-consumer",
    href: "/consumer-tech",
    icon: "consumer",
    title: "消费科技",
    description: "建设消费场景数字化能力，覆盖票务、会员、营销工具与供应链技术平台等业务连接点。",
    linkLabel: "了解消费科技",
  },
  {
    id: "feature-operations",
    href: "/operations-service",
    icon: "operations",
    title: "运营服务",
    description: "面向文旅运营、活动赛事、城市消费项目、内容与渠道运营，补齐平台上线后的持续经营能力。",
    linkLabel: "了解运营服务",
  },
] as const;

/* ── 关于我们 ───────────────────────────────────────────── */

export const about = {
  title: "年轻的技术公司，稳健的产业交付方式",
  lead: "执理科技成立于 2021 年，从信息学奥赛教育与平台化产品建设出发，逐步延展到 AIGC 教育、区域教育数字化、文旅票务与民生平台监理等真实场景，既有技术底座，也有落地运营能力。",
  factsHead: {
    title: "从一门学科出发，向多类场景延展",
    lead: "企业以信息学奥赛教育起步，沉淀了课程、教研与平台建设方法，再把这套能力迁移到文旅票务、消费数字化与公共服务平台监理等领域，逐步形成“研发—内容—运营—交付”的协同方式。",
  },
  facts: [
    { term: "起步根基", detail: "信息学奥赛教育与平台化产品建设" },
    { term: "技术储备", detail: "持 7 项软件著作权，参编清华大学出版社教材" },
    { term: "算力协同", detail: "与国家超算天津中心、天河计算机协同 AI 应用" },
    { term: "场景实战", detail: "滨海游船文旅票务、区域教育平台与民生监理项目" },
  ] as Fact[],
} as const;

/* ── 业务总览 ───────────────────────────────────────────── */

export type BusinessBlock = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  link: { label: string; href: InternalRoute };
  facts: Fact[];
};

export const businessPage = {
  title: "三类业务，一条从平台到运营的链路",
  lead: "教育科技、消费科技与运营服务共享同一套平台研发、AI 应用与运营交付能力，分别落在教育、消费与城市运营场景。",
  blocks: [
    {
      id: "edu",
      eyebrow: "教育科技",
      title: "面向学校与区域的教育数字化建设",
      lead: "以信息学奥赛教育为根基，把课程体系、教师成长、课后服务与 AI 应用沉淀为可复用的教育平台能力，服务学校与教育主管部门。",
      link: { label: "进入教育科技", href: "/education-tech" },
      facts: [
        { term: "AI 教育平台", detail: "结合 AIGC 的教学辅助、学习反馈与内容生成" },
        { term: "课程体系", detail: "信息学与编程教育课程，参编清华社教材" },
        { term: "教师成长", detail: "面向教师的教研、培训与教学支持" },
        { term: "数据评价", detail: "课后服务与学习过程的数据记录与评价" },
      ],
    },
    {
      id: "consumer",
      eyebrow: "消费科技",
      title: "让消费场景拥有可运营的数字触点",
      lead: "从滨海游船文旅票务等真实项目出发，建设票务、会员、营销工具与供应链技术平台，连接线上线下的消费业务环节。",
      link: { label: "进入消费科技", href: "/consumer-tech" },
      facts: [
        { term: "场景数字化", detail: "消费与文旅场景的票务、核销与触点建设" },
        { term: "会员系统", detail: "会员身份、权益与复购运营的数据基础" },
        { term: "营销工具", detail: "活动、优惠与渠道转化的工具支持" },
        { term: "供应链平台", detail: "面向消费业务的供应链技术连接能力" },
      ],
    },
    {
      id: "ops",
      eyebrow: "运营服务",
      title: "补齐平台上线后的持续经营能力",
      lead: "平台建成之后，业务进入持续经营阶段；执理科技承接文旅运营、活动赛事、城市消费项目与内容渠道运营，让数字化工具真正进入日常经营。",
      link: { label: "进入运营服务", href: "/operations-service" },
      facts: [
        { term: "文旅运营", detail: "文旅产品的现场、票务与体验运营" },
        { term: "活动赛事", detail: "信息学赛事与城市活动的组织执行" },
        { term: "城市消费", detail: "城市消费项目的策划与落地运营" },
        { term: "内容与渠道", detail: "内容策划与渠道分发的持续运营" },
      ],
    },
  ] as BusinessBlock[],
  cta: {
    title: "把业务能力组合成你的方案",
    lead: "不同客户需要的是平台、内容与运营的组合方案。告诉我们场景，我们来设计交付方式。",
    primary: { label: "联系我们", href: "/contact" },
    secondary: { label: "查看解决方案", href: "/solutions" },
  } as CtaPanelContent,
} as const;

/* ── 业务详情页（教育科技 / 消费科技 / 运营服务） ───────── */

export type BusinessDetailPage = {
  key: "education" | "consumer" | "operations";
  breadcrumbParent: { label: string; href: InternalRoute };
  title: string;
  lead: string;
  scope: { title: string; lead: string; facts: Fact[] };
  modulesHead: { title: string; lead: string };
  modules: ModuleCard[];
  cta: CtaPanelContent;
};

export const businessDetailPages: Record<string, BusinessDetailPage> = {
  education: {
    key: "education",
    breadcrumbParent: { label: "业务领域", href: "/business" },
    title: "面向学校与区域的 AI 教育建设",
    lead: "执理科技以信息学奥赛教育为根基，把课程体系、教师成长、课后服务、AIGC 应用与数据评价沉淀为可交付的教育数字化能力。",
    scope: {
      title: "面向区域教育的整体能力建设",
      lead: "页面聚焦学校、教育主管部门与区域平台建设：从课程内容、教师支持到平台工具和学习反馈，形成一套可落地的教育科技服务。",
      facts: [
        { term: "课程基础", detail: "信息学、编程教育与清华社教材参编经验" },
        { term: "AI 应用", detail: "AIGC 教育平台、教学辅助与内容生成场景" },
        { term: "教师成长", detail: "教研支持、培训组织与课堂落地陪伴" },
        { term: "区域平台", detail: "服务教育主管部门、学校、教师与学生的数字化平台" },
      ],
    },
    modulesHead: { title: "核心服务模块", lead: "保留教育专业性，也保留平台建设的工程化表达。" },
    modules: [
      { tag: "AI 教育平台", title: "教学辅助与学习反馈", description: "将 AIGC 能力嵌入内容生成、学习过程反馈与教师辅助工作流。" },
      { tag: "课程体系", title: "信息学与编程教育", description: "围绕信息学奥赛与编程教育沉淀课程、题库、练习与评价内容。" },
      { tag: "课后服务", title: "可组织、可评价", description: "支持课后服务项目的内容安排、过程记录与成果反馈。" },
      { tag: "数据评价", title: "从结果到过程", description: "把学生学习、教师教学与区域运营数据形成可复盘的评价链路。" },
    ],
    cta: {
      title: "建设能真正使用的教育数字化平台",
      lead: "如果你正在推进 AI 教育、课后服务或区域教育平台建设，可以从需求梳理、平台研发到运营交付共同推进。",
      primary: { label: "联系我们", href: "/contact" },
      secondary: { label: "查看教育解决方案", href: "/solutions#school" },
    },
  },
  consumer: {
    key: "consumer",
    breadcrumbParent: { label: "业务领域", href: "/business" },
    title: "让消费与文旅场景拥有可运营的数字触点",
    lead: "从滨海游船文旅票务等真实项目出发，执理科技将票务、会员、营销工具与供应链技术平台连接为消费场景的数字化基础设施。",
    scope: {
      title: "面向持续经营的数字化系统",
      lead: "消费场景需要从触达、购买、核销、会员、复购到数据复盘的连续链路。执理科技把平台研发与运营经验放在同一张图里设计。",
      facts: [
        { term: "票务触点", detail: "服务文旅产品的预约、购票、核销与订单链路" },
        { term: "会员系统", detail: "沉淀用户身份、权益规则与长期运营基础" },
        { term: "营销工具", detail: "承接活动、优惠、渠道和转化数据" },
        { term: "供应链平台", detail: "面向消费业务的供应链技术连接与管理支持" },
      ],
    },
    modulesHead: {
      title: "核心服务模块",
      lead: "以真实消费业务流程为骨架，围绕触达、购买、核销与复购组织能力模块。",
    },
    modules: [
      { tag: "消费场景数字化", title: "线上线下触点统一", description: "将票务、核销、门店或活动触点纳入可管理的业务流程。" },
      { tag: "会员体系", title: "身份、权益与复购", description: "建立会员身份、权益规则、访问记录与复购运营的数据基础。" },
      { tag: "营销工具", title: "活动与渠道转化", description: "支持优惠、活动、渠道分发与转化反馈，让运营动作全程衔接。" },
      { tag: "供应链技术平台", title: "后端能力连接", description: "围绕商品、供应商、库存或履约场景提供技术平台支持。" },
    ],
    cta: {
      title: "把消费项目做成可复盘的运营系统",
      lead: "从文旅票务到会员运营，从营销工具到供应链平台，我们帮助消费场景建立可持续的数字化链路。",
      primary: { label: "联系我们", href: "/contact" },
      secondary: { label: "查看相关案例", href: "/cases" },
    },
  },
  operations: {
    key: "operations",
    breadcrumbParent: { label: "业务领域", href: "/business" },
    title: "补齐平台上线后的持续经营能力",
    lead: "平台建成只是开始。执理科技面向文旅运营、活动赛事、城市消费项目、内容与渠道运营，帮助业务从上线走向日常经营。",
    scope: {
      title: "技术交付之外，更关注场景是否跑得起来",
      lead: "运营服务连接平台、内容、渠道、活动和项目管理，适合需要政府、企业、学校、文旅资源协同推进的复合型场景。",
      facts: [
        { term: "文旅运营", detail: "围绕文旅产品、现场体验、票务转化与服务触点组织运营" },
        { term: "活动赛事", detail: "结合信息学赛事、城市活动与教育项目开展组织执行" },
        { term: "城市消费", detail: "为城市消费项目提供策划、执行与渠道运营支持" },
        { term: "内容渠道", detail: "将内容策划、传播渠道与业务转化目标连接起来" },
      ],
    },
    modulesHead: {
      title: "核心服务模块",
      lead: "用项目管理语言表达运营能力，以清晰的节奏、分工与交付说明每项服务。",
    },
    modules: [
      { tag: "文旅运营", title: "产品、票务与体验", description: "面向文旅项目的体验路径、票务工具、现场服务与复盘机制。" },
      { tag: "活动赛事", title: "组织与执行", description: "围绕教育、城市与消费类活动，建立报名、组织、传播与成果沉淀。" },
      { tag: "城市消费项目", title: "多方协同落地", description: "面向政府、园区、商户与服务机构，推进项目节奏与交付边界。" },
      { tag: "内容与渠道", title: "运营动作持续化", description: "将内容策划、渠道分发、用户触达与平台数据形成长期运营闭环。" },
    ],
    cta: {
      title: "让平台建设真正进入运营现场",
      lead: "如果你的项目需要系统上线与活动、渠道、内容、项目管理一起落地，我们可以共同设计运营交付方式。",
      primary: { label: "联系我们", href: "/contact" },
      secondary: { label: "查看运营解决方案", href: "/solutions#gov" },
    },
  },
};

/* ── 解决方案 ───────────────────────────────────────────── */

export type SolutionTab = {
  id: string;
  label: string;
  panelTitle: string;
  points: { label: string; text: string }[];
};

export const solutionsPage = {
  title: "面向不同组织的解决方案",
  lead: "以咨询公司式的信息结构呈现问题、建设内容与交付方式，完整呈现产业服务的组合能力。选择你所在的组织类型，查看对应的建设思路。",
  tabsLabel: "解决方案分类",
  tabs: [
    {
      id: "gov",
      label: "政府与园区数字化运营",
      panelTitle: "把管理、服务与运营放在同一张业务地图上",
      points: [
        { label: "建设重点", text: "梳理项目流程、公众服务触点、数据回流与跨部门协同。" },
        { label: "交付方式", text: "以平台建设、监理咨询、运营复盘共同降低落地风险。" },
      ],
    },
    {
      id: "school",
      label: "学校与教育主管部门 AI 教育建设",
      panelTitle: "从课程、教师到 AI 平台的教育数字化建设",
      points: [
        { label: "建设重点", text: "承接信息学、AIGC、课后服务与教师成长相关场景。" },
        { label: "交付方式", text: "结合内容体系、平台工具与数据评价，形成可持续服务。" },
      ],
    },
    {
      id: "consume",
      label: "消费品牌与文旅项目增长运营",
      panelTitle: "让文旅与消费项目拥有可运营的数字触点",
      points: [
        { label: "建设重点", text: "票务、会员、活动、渠道与营销工具之间形成闭环。" },
        { label: "交付方式", text: "以滨海游船类真实项目经验连接产品建设与现场运营。" },
      ],
    },
    {
      id: "enterprise",
      label: "企业数字化平台定制开发",
      panelTitle: "面向业务流程的平台化定制开发",
      points: [
        { label: "建设重点", text: "以管理流程、角色权限、数据看板与业务中台为核心。" },
        { label: "交付方式", text: "用可审计、可迭代、可运营的工程结构支撑长期使用。" },
      ],
    },
  ] as SolutionTab[],
  detailHead: {
    title: "四类客户，统一的交付逻辑",
    lead: "无论面向哪类组织，方案都遵循“诊断现状 — 设计建设内容 — 约定交付与运营方式”的同一逻辑。",
  },
  detailCards: [
    {
      id: "gov",
      tag: "政府与园区",
      title: "数字化运营",
      description:
        "围绕项目流程、公众服务与跨部门数据协同，以平台建设叠加监理与运营复盘，降低公共项目的落地风险。",
    },
    {
      id: "school",
      tag: "学校与教育主管",
      title: "AI 教育建设",
      description:
        "承接信息学、AIGC、课后服务与教师成长场景，结合内容体系、平台工具与数据评价形成可持续教育服务。",
    },
    {
      id: "consume",
      tag: "消费与文旅",
      title: "增长运营",
      description: "让票务、会员、活动、渠道与营销工具形成闭环，以真实文旅项目经验连接产品建设与现场运营。",
    },
    {
      id: "enterprise",
      tag: "企业平台",
      title: "定制开发",
      description: "以管理流程、角色权限、数据看板与业务中台为核心，用可审计、可迭代的工程结构支撑长期使用。",
    },
  ],
  cta: {
    title: "让技术真正进入业务场景",
    lead: "把你的组织类型与目标场景告诉我们，执理科技可以从方案、研发到运营交付共同参与。",
    primary: { label: "联系我们", href: "/contact" },
    secondary: { label: "查看案例成果", href: "/cases" },
  } as CtaPanelContent,
} as const;

/* ── 案例成果 ───────────────────────────────────────────── */

export const casesPage = {
  title: "案例成果以真实项目类型呈现",
  lead: "以项目类型、服务内容与交付成果说明企业能力边界。以下案例均来自执理科技参与的真实业务方向。",
  cta: {
    title: "让技术真正进入业务场景",
    lead: "如果你的项目属于上述任一类型，或正在寻找能从方案到运营全程参与的伙伴，欢迎与执理科技联系。",
    primary: { label: "联系我们", href: "/contact" },
    secondary: { label: "获取解决方案", href: "/solutions" },
  } as CtaPanelContent,
} as const;

export const caseStudies: CaseStudy[] = [
  {
    id: "case-tourism",
    art: "tourism",
    type: "文旅 · 票务中台",
    title: "滨海游船码头票务系统",
    description:
      "把小程序、抖音、美团、携程、一码游与线下窗口等多个售票入口汇入同一套票务中台，统一余票、订单、票券、支付退款与检票规则，并与人脸闸机、手持检票机等现场设备联动。",
    teaser: "多个售票入口汇入同一套票务中台，统一余票、订单、票券、支付退款与检票规则。",
    service: "多渠道售票整合、统一票务中台、现场实名检票、软硬件设备联动、多口径报表",
    deliver: "一套可复用的票务业务底座：余票不超卖、收退款对账一致、多设备检票结果统一",
  },
  {
    id: "case-region",
    art: "region",
    type: "教育 · 校外服务平台",
    title: "滨海新区校外教育平台",
    description:
      "同一平台承接学校课后服务（后置收费）与青少年宫业务（前置收费）两种经营逻辑，以多租户架构隔离业务、统一数据，并对接教体局校外培训实时监管。",
    teaser: "同一平台承接课后服务与青少年宫两种经营逻辑，多租户架构隔离业务、统一数据。",
    service: "双业务多租户架构、后置/前置收费闭环、考勤与账单结算、监管数据对接",
    deliver: "统一入口与数据底座，教体局可获得跨学校、点位、课程与资金的实时汇总视角",
  },
  {
    id: "case-supervision",
    art: "supervision",
    type: "民生 · 技术监理",
    title: "阳光采购平台 / 乐易来小程序",
    description:
      "在两个独立项目中承担一致角色：验收期技术监理、上线前预测评与后期运维承接，面向零采/直采/盲采多业务线与供应商、教体局、财政等多端口协同。",
    teaser: "验收期技术监理、上线前预测评与后期运维承接，多端口协同的公共项目护航。",
    service: "验收技术监理、接口与数据口径校验、上线风险预评估、运维交接与问题台账",
    deliver: "把存量复杂平台沉淀为可持续跟进的系统资产，降低公共项目实施与验收风险",
  },
  {
    id: "case-aiedu",
    art: "aiedu",
    type: "AI · 教学服务",
    title: "小蛙鲸 AIGC 教学平台",
    description:
      "面向高职院校师生，将图片、视频等生成式 AI 能力引入教学场景，围绕教师课程任务、学生自主探索与教学管理，形成可使用、可管理、可沉淀的 AI 教学服务系统。",
    teaser: "面向高职院校师生，将生成式 AI 能力纳入课程化教学与管理闭环。",
    service: "AIGC 图片/视频生成、创作工作台、课程任务与作品点评、班级与内容归档",
    deliver: "把较新的 AI 生成能力纳入课程化教学与管理闭环，形成可交付的业务平台",
  },
  {
    id: "case-platform",
    art: "platform",
    type: "自研 · 信息学平台",
    title: "知理信息学教学平台",
    description:
      "首个自研产品，按“教学业务 + 技术测评 + 多租户管理”的复合系统设计，支撑在线编程、题库训练、作业比赛与排队/编译/判题/反馈的自动评测链路。",
    teaser: "在线编程、题库训练与排队/编译/判题/反馈的自动评测链路，支撑多租户教学管理。",
    service: "在线编程与评测引擎、题库与用例管理、集团/校区/班级三层租户、异步判题服务",
    deliver: "沉淀多租户、权限体系、统一数据流与异步任务处理能力，供后续信息化项目复用",
  },
];

/* ── 联系我们 ───────────────────────────────────────────── */

export const contactPage = {
  title: "让技术真正进入业务场景",
  lead: "如果你正在推进教育数字化、消费项目增长、文旅运营或平台化产品建设，留下你的需求，执理科技会从方案、研发到运营交付与你一起推进。",
  infoHeading: "联系方式",
  infoFacts: [
    { term: "邮箱", detail: "contact@zhili-edu.com" },
    { term: "所在地", detail: "天津 · 科技运营服务" },
    { term: "合作方向", detail: "政府与园区、学校与教育主管、消费文旅、企业平台" },
    { term: "响应方式", detail: "收到需求后我们会安排对应业务团队与你沟通" },
  ] as Fact[],
  formHeading: "告诉我们你的项目",
  submitLabel: "提交需求",
  successMessage: "已收到你的需求，我们会尽快通过邮箱与你联系。",
  topics: [
    { value: "edu", label: "教育科技 / AI 教育建设" },
    { value: "consumer", label: "消费科技 / 文旅增长运营" },
    { value: "ops", label: "运营服务 / 活动与渠道" },
    { value: "platform", label: "企业数字化平台定制" },
    { value: "other", label: "其他 / 暂不确定" },
  ],
} as const;
