export type InternalRoute = "/" | "/solutions" | "/cases" | "/partners" | "/about";

export type NavItem = {
  label: string;
  href: InternalRoute;
};

export type Action = {
  label: string;
  href: InternalRoute;
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
  imageSrc: string;
  imageAlt: string;
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
  { label: "案例成果", href: "/cases" },
  { label: "合作伙伴", href: "/partners" },
  { label: "关于我们", href: "/about" },
];

export const hero = {
  eyebrow: "执理集团 · 教育科技 × 消费科技 × 琢磨运营",
  title: ["青少年素质教育数字化", "区域服务商"],
  subtitle:
    "执理教育聚焦青少年科技教育、课后服务数字化和校外教育平台建设，围绕政府、学校、教育集团和公共教育场馆的实际需求，提供“平台建设 + 课程供给 + 运营服务”的一体化解决方案。",
  actions: [
    { label: "了解解决方案", href: "/solutions" },
    { label: "查看案例成果", href: "/cases" },
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
    title: "教育数字化解决方案",
    description:
      "围绕滨海新区校外教育平台建设，文旅研学平台研途有答案，面向教育集团、学校和公共教育服务场景提供渠道、平台、课程、资源与数据服务。",
    points: ["滨海新区校外教育平台", "研途有答案", "渠道与数据服务"],
  },
  {
    title: "课后服务数字化平台",
    description:
      "面向中小学课后服务场景，支撑收缴费、课程报名、通知触达与数据统计，让学校、家长和服务团队协同更清晰。",
    points: ["收缴费", "课程报名", "通知触达", "数据统计"],
  },
  {
    title: "青少年宫教务平台",
    description:
      "面向青少年宫、教育集团和公共教育场馆，提供课程展示、在线报名、排课管理、教务协同与运营支持。",
    points: ["课程展示", "在线报名", "排课管理", "教务协同"],
  },
  {
    title: "AIGC 教育教学平台",
    description:
      "面向职业教育与 AIGC 教学实训场景，提供内容生成、作品管理、教学评价和成果展示等平台能力。",
    points: ["职业教育 AIGC", "教学实训", "成果展示"],
  },
];

export const cases: CaseStudy[] = [
  {
    label: "出版",
    title: "信息学奥赛教材出版",
    description:
      "参与信息学奥赛系列教材研发，相关成果由清华大学出版社出版，并沉淀赛事命题、教学内容与平台技术运维经验。",
    outcome: "教材 + 赛题 + 平台能力沉淀",
    imageSrc: "/images/cases/case-informatics-textbook.png",
    imageAlt: "信息学奥赛教材出版案例配图",
  },
  {
    label: "区本课程",
    title: "区本课程研发建设",
    description:
      "联合泰达一中建设校本课程，推动信息学奥赛编程教育进学校，把教材研发、课程设计和进校服务串联成可复制的区本课程能力。",
    outcome: "校本课程研发 + 信息学进校服务",
    imageSrc: "/images/cases/case-school-curriculum.png",
    imageAlt: "区本课程研发建设案例配图",
  },
  {
    label: "机构运营",
    title: "教育培训机构运营",
    description:
      "联合生态城社工部注册博雅社区促进服务中心，运营三个社区闲置场地，沉淀社区教育场景、空间运营和课程服务经验。",
    outcome: "社区空间运营 + 课程服务落地",
    imageSrc: "/images/cases/case-coding-education.png",
    imageAlt: "教育培训机构运营案例配图",
  },
  {
    label: "文旅票务",
    title: "文旅票务与渠道整合",
    description:
      "滨海游船系统将微信小程序、抖音、美团、携程、旅惠卡和线下窗口接入同一票务底座，统一商品、订单、票券、退款、检票和报表口径。",
    outcome: "一套底座，多端复用",
    imageSrc: "/images/cases/case-tourism-ticketing.png",
    imageAlt: "文旅票务与渠道整合案例配图",
  },
  {
    label: "民生监理",
    title: "民生平台监理项目",
    description:
      "参与阳光采购平台一期/二期与乐易来小程序监理，重点覆盖技术验收、问题跟踪、接口联调、发布检查和交付把关。",
    outcome: "技术审查、验收把关、问题闭环",
    imageSrc: "/images/cases/case-public-service-supervision.png",
    imageAlt: "民生平台监理项目案例配图",
  },
  {
    label: "AI 应用",
    title: "小城建 AIGC 平台",
    description:
      "围绕业务素材、提示词、文本、图片和内容生成流程，展示 AI 生成能力在业务系统中的落地应用，并覆盖人工审核、调整、应用和归档。",
    outcome: "AI 生成能力落地",
    imageSrc: "/images/cases/case-aigc-platform.png",
    imageAlt: "小城建 AIGC 平台案例配图",
  },
  {
    label: "海外订单",
    title: "全球出海合伙人首笔海外订单",
    description:
      "天津经开区—泰达报道“全球出海合伙人计划”成功链接印尼教育部 kording 采购资源，执理科技斩获首笔海外订单并与印尼教育部达成合作意向。",
    outcome: "泰达官方报道 + 印尼教育部合作意向",
    imageSrc: "/images/cases/case-overseas-order.svg",
    imageAlt: "全球出海合伙人首笔海外订单案例配图",
  },
];

export const partnerGroups: PartnerGroup[] = [
  {
    title: "重点合作伙伴",
    description:
      "集中呈现教育科技与消费科技两条业务线中的代表性共建伙伴，覆盖算力、文旅、教育集团与民生运营场景。",
    partners: [
      "天津市天河计算机技术有限公司",
      "天津滨海文化旅游发展有限公司",
      "天津滨海教育发展集团有限公司",
      "天津滨海民生发展有限公司",
    ],
  },
  {
    title: "教育集团与学校",
    description: "面向 K-12 学校、教育集团与校外教育场景，共建计算机教育课程与实践项目。",
    partners: [
      "天津经济技术开发区第一中学",
      "天津市教育科学研究院附属滨海泰达中学",
      "天津市南开中学滨海实验学校",
      "天津市南开中学滨海生态城学校",
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
    ],
  },
  {
    title: "产业与供应链伙伴",
    description:
      "围绕执理消费科技的消费场景运营、供应链协同与区域民生服务，连接农业科技、商投供应链和市场管理伙伴。",
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
    "我们聚焦青少年科技教育、课后服务数字化和校外教育平台建设，致力于通过“平台 + 课程 + 运营”的一体化能力，帮助区域教育主体提升服务效率、丰富课程供给、规范运营流程，构建校内外协同育人的教育新生态。",
  ecosystemDescription:
    "围绕“教育 + 科技”主线，执理集团形成教育科技 + 消费科技 + 琢磨运营的复合能力，以多端接入、统一服务、数据融合为技术底座，持续沉淀课程研发、平台建设、师资培训、运营管理和数据服务。",
  businessUnits: [
    {
      name: "执理教育",
      label: "教育科技主体",
      description: "面向区域教育、青少年科技教育和校外教育场景提供平台建设、课程供给与运营服务。",
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
      description:
        "面向教育项目、区域活动和品牌传播，提供内容策划、新媒体运营、私域增长与用户触达能力。",
    },
  ] satisfies BusinessUnit[],
};
