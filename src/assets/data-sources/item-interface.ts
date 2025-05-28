export interface BugItem {
  id: number // 工单id
  title: string // 工单标题
  desc: string // 工单概述
  filePath: string // 文章路径
  fileType: FileType // 文件类型
  fileFormat: FileFormat // 文件格式
  project: ProjectType // 项目名称
  bugType: BugType // 错误类型
  bugLink: string // 工单链接
  bugWho: string // 错误提交人
  bugDate: string // 工单日期
  version: string // 版本号
  tags: string[] // 标签
  createdAt: string // 文章创建时间
  updatedAt: string // 文章更新时间
  handler: string // 处理人
  thumbnail: string // 缩略图
}

export enum FileType {
  FILE_TYPE_Record = 'Record', // 工单记录
  FILE_TYPE_Usage = 'Usage' // 使用文档
}

// 枚举所有的文件类型，便于后续筛选
export enum FileFormat {
  FILE_FORMAT_MD = 'md',
  FILE_FORMAT_DOCX = 'docx',
  FILE_FORMAT_DOC = 'doc',
  FILE_FORMAT_PDF = 'pdf'
}

// 枚举所有的错误类型，便于后续筛选
export enum BugType {
  Bug_TYPE_LEGO = 'lego', // 乐高
  Bug_TYPE_MICROAPP = 'microApp', // 微应用
  Bug_TYPE_MicroFunc = 'MicroFunc', // 微函数
  Bug_TYPE_MicroComponent = 'MicroComponent', // 微组件
  Bug_TYPE_Requirement = 'Requirement', // 需求
}

// 枚举所有的项目，便于后续筛选
export enum ProjectType {
  PROJ_TYPE_BoXing = '博兴',
  PROJ_TYPE_WanHua = '万华',
  PROJ_TYPE_MaoMing = '茂名',
  PROJ_TYPE_GanSu = '甘肃',
  PROJ_TYPE_QuanZhou = '泉州水务',
  PROJ_TYPE_ShanXiLongJi = '陕西隆基',
  PROJ_TYPE_ShangHaiZhongYuan = '上海中远海运',
  PROJ_TYPE_ShangQiTongYong = '上汽通用',
  PROJ_TYPE_TuHa = '吐哈',
  PROJ_TYPE_WuDa = '乌达',
  PROJ_TYPE_XiJiangZhongHe = '新建众和',
  PROJ_TYPE_YuMen = '玉门',
  PROJ_TYPE_ZhongAnZhouShan = '中安-舟山',
  PROJ_TYPE_ZhongAnHeNanJunHua = '中安-河南骏化',
}
