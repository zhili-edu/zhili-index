export type NavItem = {
  label: string;
  href: string;
};

export type Action = {
  label: string;
  href: string;
};

export type HighlightCard = {
  title: string;
  description: string;
  points: string[];
  eyebrow?: string;
};

export type CaseStudy = {
  label: string;
  title: string;
  description: string;
  outcome: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type PartnerGroup = {
  title: string;
  description: string;
  partners: string[];
};

export type BusinessUnit = {
  name: string;
  label: string;
  description: string;
};

export const navigation: NavItem[] = [
  { label: "首页", href: "/" },
  { label: "解决方案", href: "/solutions" },
  { label: "产品与平台", href: "/products" },
  { label: "案例成果", href: "/cases" },
  { label: "合作伙伴", href: "/partners" },
  { label: "关于我们", href: "/about" },
  { label: "联系我们", href: "/contact" },
];

export const hero = {
  eyebrow: "执理教育科技",
  title: "AI 驱动的计算机教育科技公司",
  subtitle:
    "面向 K-12、职业院校与区域教育场景，提供平台、内容、师资与运营一体化解决方案。",
  actions: [
    { label: "了解解决方案", href: "/solutions" },
    { label: "查看案例成果", href: "/cases" },
    { label: "联系合作", href: "/contact" },
  ] satisfies Action[],
};

export const metrics: Metric[] = [
  { value: "2021", label: "北京公司成立" },
  { value: "5 年+", label: "教育科技创业沉淀" },
  { value: "100+", label: "在读学生基础" },
  { value: "1000+", label: "平台注册用户" },
  { value: "10+", label: "合作学校 / 教育场景" },
  { value: "7 项", label: "软件著作权" },
];

export const solutions: HighlightCard[] = [
  {
    title: "K-12 信息学奥赛与人工智能教育",
    description:
      "面向中小学生提供讲、学、练、考、赛一体化的信息学奥赛与人工智能课程解决方案。",
    points: ["C++ / CSP-J / GESP 课程体系", "信息学奥赛阶梯式培养", "课后服务与社团课程"],
  },
  {
    title: "职教 AIGC 实训平台",
    description:
      "面向职业院校专业建设和产教融合需求，提供 AIGC 实训平台、课程资源、师资培训和教学治理工具。",
    points: ["AI 视觉与创意生产", "作业评价与查重", "模型库 / 案例库 / 课程包"],
  },
  {
    title: "新媒体运营",
    description:
      "面向教育项目、区域活动和品牌传播，提供内容策划、新媒体运营、私域增长与用户触达能力。",
    points: ["内容策划", "新媒体矩阵运营", "私域流量增长"],
  },
  {
    title: "教育综合体运营",
    description:
      "为教育集团、青少年宫和校外教育平台提供一站式综合体运营解决方案，涵盖课程组织、教务管理与数字化服务。",
    points: ["综合体规划", "课程供应链", "运营管理系统"],
  },
];

export const products: HighlightCard[] = [
  {
    title: "执理信息学奥赛学习平台",
    description: "面向学校、机构与学生的信息学奥赛一站式学习服务平台。",
    points: ["Online Judge", "题库系统", "作业管理", "学习数据沉淀"],
  },
  {
    title: "职教 AIGC 实训平台",
    description: "面向艺术设计、数字媒体、影视动漫等专业的 AIGC 教学实训与治理平台。",
    points: ["AIGC 生产引擎", "作品查重与评价 Rubric", "数字资产管理", "线上展览"],
  },
  {
    title: "研途有答案",
    description: "面向科技研学和文旅研学场景的小程序平台，支持产品展示、报名交易与订单管理。",
    points: ["研学线路展示", "在线报名", "支付与核销", "活动运营"],
  },
  {
    title: "文旅智慧运营中台",
    description: "面向景区、码头、园区、研学基地等中小型文旅资产的智慧运营系统。",
    points: ["交易与票务", "渠道分销", "实名与通行", "AI 决策"],
  },
];

export const cases: CaseStudy[] = [
  {
    label: "职校",
    title: "天津滨海教育集团课程服务",
    description:
      "持续服务天津滨海教育集团及多所学校，覆盖信息学奥赛、人工智能课程、师资培训和课后服务。",
    outcome: "10+ 合作学校 / 教育场景",
  },
  {
    label: "出版",
    title: "信息学奥赛教材出版",
    description:
      "参与研发的信息学奥赛系列教材由清华大学出版社出版，并沉淀赛事赛题、平台与技术运维经验。",
    outcome: "教材 + 赛题 + 平台能力沉淀",
  },
  {
    label: "综合体",
    title: "校外教育综合体运营",
    description:
      "围绕青少年宫、教育集团与校外教育场景，交付课程组织、统一报名和数据回流能力。",
    outcome: "课程供应链与教务流程打通",
  },
  {
    label: "区域平台",
    title: "区域智慧教育与研学平台",
    description:
      "建设区域智慧教育平台与智慧研学平台，支持课程发布、活动报名、订单管理和运营看板。",
    outcome: "教、学、管、评、测数据闭环",
  },
  {
    label: "新媒体",
    title: "教育项目运营增长",
    description:
      "为新媒体运营项目提供内容策划、矩阵账号运营、私域增长和品牌传播服务。",
    outcome: "品牌触达与持续获客能力",
  },
  {
    label: "文旅",
    title: "码头文旅数字化运营",
    description:
      "文旅数字化重点落在码头、景区和研学基地等真实场景，沉淀票务、实名核销与渠道分销能力。",
    outcome: "交易、通行、渠道、决策一体化",
  },
];

export const partnerGroups: PartnerGroup[] = [
  {
    title: "教育集团与学校",
    description: "面向 K-12 学校、教育集团与校外教育场景，共建计算机教育课程与实践项目。",
    partners: [
      "天津滨海教育发展集团有限公司",
      "天津市滨海新区泰达第一中学",
      "天津市滨海新区泰达第二中学",
      "天津市南开中学滨海生态城学校",
      "天津市滨海新区塘沽远洋城小学",
      "天津市滨海新区塘沽紫云中学",
      "天津市滨海新区塘沽第二中学",
    ],
  },
  {
    title: "高校、科研与出版",
    description: "联合高校、协会、出版机构与技术伙伴，沉淀课程研发、赛事服务与教材出版能力。",
    partners: [
      "天津城市建设管理职业技术学院",
      "天津大学教育学院",
      "清华大学出版社",
      "秦皇岛市青少年科技教育协会",
      "天津市天河计算机技术有限公司",
    ],
  },
  {
    title: "文旅与区域平台",
    description: "围绕科技研学、滨海文旅和区域公共服务场景，提供平台与数字化交付能力。",
    partners: [
      "天津滨海文化旅游发展有限公司",
      "天津市滨海新区滨旅游船码头发展有限公司",
      "天津滨海民生发展有限公司",
    ],
  },
  {
    title: "产业与供应链伙伴",
    description: "连接农业科技、供应链、市场管理与场景运营伙伴，支撑复合型教育科技项目落地。",
    partners: [
      "甄优（天津）农业科技发展有限公司",
      "天津市滨海新区商投供应链管理服务有限责任公司",
      "天津市滨海新区国成市场管理有限公司",
    ],
  },
];

export const partners = partnerGroups.flatMap((group) => group.partners);

export const about = {
  vision: "执着理想，让每个人平等地享受高质量的计算机教育。",
  description:
    "执理团队起步于 2019 年，长期深耕少儿编程、信息学竞赛和大学生程序设计竞赛课程研发与培训，并于 2021 年成立北京执理教育科技有限公司。",
  ecosystemDescription:
    "围绕“教育 + 科技”主线，执理逐步形成课程研发、人工智能教育、线下拔尖创新人才培养、科技研学、文旅数字化和新媒体运营增长等复合能力。",
  businessUnits: [
    {
      name: "执理教育科技",
      label: "教育科技主体",
      description: "聚焦课程研发、人工智能教育、信息学奥赛、职教 AIGC 平台与科技研学解决方案。",
    },
    {
      name: "计算蔚蓝少儿编程",
      label: "线下教学品牌",
      description: "作为 K-12 少儿编程与信息学教学场景，承接线下课程、教研验证和拔尖创新人才培养。",
    },
    {
      name: "执理消费科技",
      label: "场景数字化方向",
      description: "围绕科技研学、智慧文旅、票务交易和场景运营系统，支撑教育内容向真实场景延伸。",
    },
    {
      name: "琢磨运营",
      label: "新媒体运营方向",
      description: "面向教育项目、区域活动和品牌传播，提供内容策划、新媒体运营、私域增长与用户触达能力。",
    },
  ] satisfies BusinessUnit[],
};

export const contactIntents = [
  "学校课程合作",
  "职教 AIGC 平台试点",
  "教育集团 / 区域教育平台共建",
  "科技研学 / 文旅数字化合作",
  "文旅数字化系统合作",
  "新媒体运营与增长合作",
  "投资与产业合作",
];

export const contactDetails = [
  "联系人：闫鑫",
  "公司：执理（天津）教育科技有限公司",
  "地址：天津经济技术开发区",
];
