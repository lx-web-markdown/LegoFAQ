import type { BugItem } from './item-interface'
import { FileType, FileFormat, ProjectType, BugType } from './item-interface'

export const MicroAppBugList: BugItem[] = [
  {
    id: 2024092300036, // 工单id
    title: '列表页item重大危险源没法编辑', // 标题
    desc: '列表页，item数据后面的编辑按钮没法编辑。', // 概述
    filePath: '/docs/0-工单维度-项目工单记录/博兴/博兴.md', // 文章路径
    fileType: FileType.FILE_TYPE_Record, // 文件类型：工单记录
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
    thumbnail: '/imgs/demo-1.jpg' // 缩略图
  },
  {
    id: 2024092900077, // 工单id
    title: '【甘肃省厅项目】甘肃双预防:非重大企业重点工艺相关统计数据在大屏的展示', // 标题
    desc: '【甘肃省厅项目】甘肃双预防:非重大企业重点工艺相关统计数据在大屏的展示', // 概述
    filePath: '/docs/0-工单维度-项目工单记录/甘肃/甘肃.md', // 文章路径
    fileType: FileType.FILE_TYPE_Record, // 文件类型：工单记录
    fileFormat: FileFormat.FILE_FORMAT_MD, // 文件格式
    project: ProjectType.PROJ_TYPE_GanSu, // 项目名称
    bugType: BugType.Bug_TYPE_Requirement, // 错误类型：具体哪个类型
    bugLink: 'https://www.qycloud.com.cn/space-nanjinganyuankeji/anyuantongyigongdan/detail/764146?module=workflow&node=WorkNode_49&close=1', // 工单链接
    bugWho: '曹小童', // 错误提交人
    bugDate: '2024-09-29',
    version: 'v23.3', // 版本号
    tags: ['需求', '甘肃', '大屏'], // 标签
    createdAt: '2025-05-27',
    updatedAt: '2025-05-27',
    handler: '林祥', // 处理人
    thumbnail: '/imgs/demo-2.jpg' // 缩略图
  },
  {
    id: 2024120900076, // 工单id
    title: 'Lego组件如何实现像平台原生应用下表单详情页点击关闭回到列表页还是能保持之前的搜索条件和分页', // 标题
    desc: 'Lego组件如何实现像平台原生应用下表单详情页点击关闭回到列表页还是能保持之前的搜索条件和分页', // 概述
    filePath: '/docs/0-工单维度-项目工单记录/茂名高新园区-动态组件/茂名高新园区.md', // 文章路径
    fileType: FileType.FILE_TYPE_Record, // 文件类型：工单记录
    fileFormat: FileFormat.FILE_FORMAT_MD, // 文件格式
    project: ProjectType.PROJ_TYPE_MaoMing, // 项目名称
    bugType: BugType.Bug_TYPE_LEGO, // 错误类型：具体哪个类型
    bugLink: 'https://www.qycloud.com.cn/space-nanjinganyuankeji/anyuantongyigongdan/detail/782469?module=workflow&node=&label=&title=%E5%B7%A5%E5%8D%95%E5%8F%8D%E9%A6%88%E7%B3%BB%E7%BB%9F', // 工单链接
    bugWho: '林家欣', // 错误提交人
    bugDate: '2024-12-09',
    version: 'v23.6', // 版本号
    tags: ['Lego', '列表页'], // 标签
    createdAt: '2025-05-28',
    updatedAt: '2025-05-28',
    handler: '林祥', // 处理人
    thumbnail: '/imgs/demo-3.jpg' // 缩略图
  },
  {
    id: 2024112100100, // 工单id
    title: '链接应用中列表的高度铺满屏幕没有效果', // 标题
    desc: '链接应用中列表的高度铺满屏幕没有效果', // 概述
    filePath: '/docs/0-工单维度-项目工单记录/泉州水务/泉州水务.md', // 文章路径
    fileType: FileType.FILE_TYPE_Record, // 文件类型：工单记录
    fileFormat: FileFormat.FILE_FORMAT_MD, // 文件格式
    project: ProjectType.PROJ_TYPE_QuanZhou, // 项目名称
    bugType: BugType.Bug_TYPE_LEGO, // 错误类型：具体哪个类型
    bugLink: 'https://www.qycloud.com.cn/space-nanjinganyuankeji/anyuantongyigongdan/detail/777238?module=workflow&node=&label=&title=%E5%B7%A5%E5%8D%95%E5%8F%8D%E9%A6%88%E7%B3%BB%E7%BB%9F', // 工单链接
    bugWho: '徐星月', // 错误提交人
    bugDate: '2024-11-21',
    version: 'v22.12', // 版本号
    tags: ['Lego', '列表页'], // 标签
    createdAt: '2025-05-28',
    updatedAt: '2025-05-28',
    handler: '林祥', // 处理人
    thumbnail: '/imgs/demo-4.jpg' // 缩略图
  },
  {
    id: 2024091000088, // 工单id
    title: '微函数在lego定制页面不生效', // 标题
    desc: '链接应用中列表的高度铺满屏幕没有效果', // 概述
    filePath: '/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/陕西隆基绿能EHS-1.md', // 文章路径
    fileType: FileType.FILE_TYPE_Record, // 文件类型：工单记录
    fileFormat: FileFormat.FILE_FORMAT_MD, // 文件格式
    project: ProjectType.PROJ_TYPE_ShanXiLongJi, // 项目名称
    bugType: BugType.Bug_TYPE_MicroFunc, // 错误类型：具体哪个类型
    bugLink: 'https://www.qycloud.com.cn/space-nanjinganyuankeji/anyuantongyigongdan/detail/759703?module=workflow&node=&label=&title=%E5%B7%A5%E5%8D%95%E5%8F%8D%E9%A6%88%E7%B3%BB%E7%BB%9F', // 工单链接
    bugWho: '吴兆龙', // 错误提交人
    bugDate: '2024-09-10',
    version: 'v23.12', // 版本号
    tags: ['微函数', 'lego'], // 标签
    createdAt: '2025-05-28',
    updatedAt: '2025-05-28',
    handler: '林祥', // 处理人
    thumbnail: '/imgs/demo-5.jpg' // 缩略图
  },
  {
    id: 2025021900037, // 工单id
    title: '微组件调试时编辑属性面板添加属性里表单选择器和主表字段选择，这两个组件选择内容后没有反应', // 标题
    desc: '微组件调试时编辑属性面板添加属性里表单选择器和主表字段选择，这两个组件选择内容后没有反应', // 概述
    filePath: '/docs/0-工单维度-项目工单记录/陕西隆基绿能EHS/陕西隆基绿能EHS-2.md', // 文章路径
    fileType: FileType.FILE_TYPE_Record, // 文件类型：工单记录
    fileFormat: FileFormat.FILE_FORMAT_MD, // 文件格式
    project: ProjectType.PROJ_TYPE_ShanXiLongJi, // 项目名称
    bugType: BugType.Bug_TYPE_MicroComponent, // 错误类型：具体哪个类型
    bugLink: 'https://www.qycloud.com.cn/space-nanjinganyuankeji/anyuantongyigongdan/detail/797321?module=workflow&node=&label=&title=%E5%B7%A5%E5%8D%95%E5%8F%8D%E9%A6%88%E7%B3%BB%E7%BB%9F', // 工单链接
    bugWho: '张宇翔', // 错误提交人
    bugDate: '2025-02-19',
    version: 'v23.12', // 版本号
    tags: ['微组件'], // 标签
    createdAt: '2025-05-28',
    updatedAt: '2025-05-28',
    handler: '林祥', // 处理人
    thumbnail: 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg' // 缩略图
  },
  {
    id: 2024081200090, // 工单id
    title: '设备小类后的快速查找按钮弹窗未弹出', // 标题
    desc: '设备小类后的快速查找按钮弹窗未弹出', // 概述
    filePath: '/docs/0-工单维度-项目工单记录/上海中远海运/上海中远海运-1.md', // 文章路径
    fileType: FileType.FILE_TYPE_Record, // 文件类型：工单记录
    fileFormat: FileFormat.FILE_FORMAT_MD, // 文件格式
    project: ProjectType.PROJ_TYPE_ShangHaiZhongYuan, // 项目名称
    bugType: BugType.Bug_TYPE_LEGO, // 错误类型：具体哪个类型
    bugLink: 'https://www.qycloud.com.cn/space-nanjinganyuankeji/anyuantongyigongdan/detail/752546?module=workflow&node=&label=&title=%E5%B7%A5%E5%8D%95%E5%8F%8D%E9%A6%88%E7%B3%BB%E7%BB%9F', // 工单链接
    bugWho: '许会', // 错误提交人
    bugDate: '2024-08-12',
    version: 'v23.12', // 版本号
    tags: ['Lego', '列表页'], // 标签
    createdAt: '2025-05-28',
    updatedAt: '2025-05-28',
    handler: '林祥', // 处理人
    thumbnail: '/imgs/demo-6.jpg' // 缩略图
  },
  {
    id: 2024081200094, // 工单id
    title: '今日到访页签添加筛选，designerConditions筛选无效', // 标题
    desc: '今日到访页签添加筛选，designerConditions筛选无效', // 概述
    filePath: '/docs/0-工单维度-项目工单记录/上海中远海运/上海中远海运-2.md', // 文章路径
    fileType: FileType.FILE_TYPE_Record, // 文件类型：工单记录
    fileFormat: FileFormat.FILE_FORMAT_MD, // 文件格式
    project: ProjectType.PROJ_TYPE_ShangHaiZhongYuan, // 项目名称
    bugType: BugType.Bug_TYPE_LEGO, // 错误类型：具体哪个类型
    bugLink: 'https://www.qycloud.com.cn/space-nanjinganyuankeji/anyuantongyigongdan/detail/752664?module=workflow&node=&label=&title=%E5%B7%A5%E5%8D%95%E5%8F%8D%E9%A6%88%E7%B3%BB%E7%BB%9F', // 工单链接
    bugWho: '许会', // 错误提交人
    bugDate: '2024-08-12',
    version: 'v23.12', // 版本号
    tags: ['Lego', '列表页', '筛选'], // 标签
    createdAt: '2025-05-28',
    updatedAt: '2025-05-28',
    handler: '林祥', // 处理人
    thumbnail: '/imgs/demo-7.jpg' // 缩略图
  },
  {
    id: 2024082200068, // 工单id
    title: '详情页保存为定制，详情页返回列表页数据不刷新', // 标题
    desc: '详情页保存为定制，详情页返回列表页数据不刷新', // 概述
    filePath: '/docs/0-工单维度-项目工单记录/上海中远海运/上海中远海运-3.md', // 文章路径
    fileType: FileType.FILE_TYPE_Record, // 文件类型：工单记录
    fileFormat: FileFormat.FILE_FORMAT_MD, // 文件格式
    project: ProjectType.PROJ_TYPE_ShangHaiZhongYuan, // 项目名称
    bugType: BugType.Bug_TYPE_LEGO, // 错误类型：具体哪个类型
    bugLink: 'https://www.qycloud.com.cn/space-nanjinganyuankeji/anyuantongyigongdan/detail/755008?module=workflow&node=&label=&title=%E5%B7%A5%E5%8D%95%E5%8F%8D%E9%A6%88%E7%B3%BB%E7%BB%9F', // 工单链接
    bugWho: '许会', // 错误提交人
    bugDate: '2024-08-22',
    version: 'v23.12', // 版本号
    tags: ['Lego', '列表页', '详情页'], // 标签
    createdAt: '2025-05-28',
    updatedAt: '2025-05-28',
    handler: '林祥', // 处理人
    thumbnail: '/imgs/demo-8.gif' // 缩略图
  }
]
