import type { BugItem } from './item-interface'
import { FileType, FileFormat, ProjectType, BugType } from './item-interface'

export const MicroAppBugList: BugItem[] = [
  {
    id: 2024092300036,
    title: '列表页item重大危险源没法编辑', // 标题
    desc: '列表页，item数据后面的编辑按钮没法编辑。', // 概述
    filePath: '/docs/0-工单维度-项目工单记录/博兴/博兴.md', // 文章路径
    fileType: FileType.FILE_TYPE_Bug, // 文件类型
    fileFormat: FileFormat.FILE_FORMAT_MD, // 文件格式
    project: ProjectType.PROJ_TYPE_BoXing, // 项目名称
    bugType: BugType.Bug_TYPE_LEGO, // 错误类型：具体哪个类型
    bugLink: 'https://www.qycloud.com.cn/space-nanjinganyuankeji/anyuantongyigongdan/detail/762560?module=workflow&node=&label=&title=%E5%B7%A5%E5%8D%95%E5%8F%8D%E9%A6%88%E7%B3%BB%E7%BB%9F', // 工单链接
    bugWho: '王硕', // 错误提交人
    bugDate: '2024-09-23',
    version: 'v23.9', // 版本号
    tags: ['Lego', '列表页', '编辑按钮'], // 标签
    createdAt: '2025-05-27',
    updatedAt: '2025-05-27',
    handler: '林祥', // 处理人
    thumbnail: 'http://www.baidu.com/img/bdlogo.png' // 缩略图
  },
  {
    id: 2,
    title: 'MicroAppBug2', // 标题
    desc: 'MicroAppBug2', // 概述
    filePath: '/docs/xxx/xx.md', // 文章路径
    fileType: FileType.FILE_TYPE_Bug, // 文件类型
    fileFormat: FileFormat.FILE_FORMAT_MD, // 文件格式
    project: ProjectType.PROJ_TYPE_BoXing, // 项目名称
    bugType: BugType.Bug_TYPE_MICROAPP, // 错误类型：具体哪个类型
    bugLink: 'https://github.com/micro-app/micro-app/issues/2', // 工单链接
    bugWho: '李四', // 错误提交人
    bugDate: '2021-01-01',
    version: '1.0.0', // 版本号
    tags: ['tag1', 'tag2'], // 标签
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    handler: 'author2', // 处理人
    thumbnail: 'https://img.yzcdn.cn/vant/ipad.png' // 缩略图
  }
]
