import { Typography } from "antd";
import type { ReactNode } from "react";

interface TimeItem {
  color?: string;
  dot?: ReactNode;
  label: ReactNode;
  children: ReactNode;
  position?: "left" | "right";
}

export const loggingData: TimeItem[] = [
  {
    label: <div id="2025-05-25">2025-05-25</div>,
    children: (
      <>
        <Typography>在 CDR 中完成相应网站设计</Typography>
        <Typography>编程大致实现网站界面结构</Typography>
      </>
    ),
  },
  {
    label: <div id="2025-05-26">2025-05-26</div>,
    children: (
      <>
        <Typography>初步善网站设计</Typography>
        <Typography>进行网站功能设计和重构项目文件结构</Typography>
      </>
    ),
  },
  {
    label: <div id="2025-05-27">2025-05-27</div>,
    children: (
      <>
        <Typography>网站博客页的细化和功能完善</Typography>
      </>
    ),
  },
  {
    label: <div id="2025-05-28">2025-05-28</div>,
    children: (
      <>
        <Typography>网站主页面的细化和功能完善</Typography>
        <Typography>添加气泡按钮的外观和效果（初步）</Typography>
        <Typography>添加网站博客页面打开时的动画效果（暂定）</Typography>
        <Typography>优化顶部菜单的隐藏动画效果（暂定）</Typography>
        <Typography>项目启用git进行版本控制，并创建Github仓库</Typography>
      </>
    ),
  },
  {
    label: <div id="2025-05-30">2025-05-30</div>,
    children: (
      <>
        <Typography>细化博客页的博客列表，移除占位用测试数据</Typography>
        <Typography>弃用antd的List，使用自定义List JSX</Typography>
        <Typography>
          实现工具栏“撰写新博客”的功能实现，添加“添加博客”的面板（初步）
        </Typography>
        <Typography>为个人面板下Github图标添加连接和气泡卡片</Typography>
      </>
    ),
  },
  {
    label: <div id="2025-05-30">2025-05-30</div>,
    children: (
      <>
        <Typography>实现登录页的相关功能</Typography>
        <Typography>添加网站的反馈信息功能，整理网站层级</Typography>
        <Typography>
          细化组件页，添加相关数据以及根据数据显示组件（初步）
        </Typography>
        <Typography>优化一些其他的功能</Typography>
      </>
    ),
  },
  {
    label: <div id="2025-06-20">2025-06-20</div>,
    children: (
      <>
        <Typography>
          优化背景层的相关视觉效果（初步），并添加一些效果图层
        </Typography>
        <Typography>
          博客页添加了一些测试博客项，修改了添加博客页的测试功能，现在不上传文件也能添加博客项
        </Typography>
        <Typography>
          优化源文件的结构，整理了源文件的目录结构，添加了一些注释
        </Typography>
        <Typography>优化一些其他的功能</Typography>
        <Typography>现在我又回来建设我的网站了</Typography>
        <Typography>ヾ(≧▽≦*)o</Typography>
      </>
    ),
  },
  {
    label: <div id="2025-06-20">2025-06-20</div>,
    children: (
      <>
        <Typography>
          尝试优化博客页的上划减少留白效果（暂定）
        </Typography>
      </>
    ),
  },
];
