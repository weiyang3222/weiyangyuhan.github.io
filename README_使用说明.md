# Bin Zhao 学术个人主页（简历自动填充版）

这是根据你上传的简历生成的英文个人学术主页，不需要数据库或服务器运维。

## 最简单的使用方式

1. 解压网站 ZIP 包。
2. 双击 `index.html`，在浏览器中查看个人网站。
3. 双击 `editor.html`，打开**可视化编辑器**。以后修改姓名、简介、研究方向、论文等，直接在这里填入内容。
4. 在编辑器顶部点击“保存修改并下载”，浏览器会下载一个新文件 `content.js`。
5. 把下载的 `content.js` 覆盖原网站文件夹中的同名文件，刷新 `index.html` 就能看到更新。

**特别注意：** 如果你在浏览器里编辑完数据，尚未点击“保存修改并下载”就关闭网页，修改不会保存。浏览器弹出的“保存到哪里”可以选网站文件夹；如果保存到了下载文件夹，记得将它复制覆盖原文件。

## 一键式发布（GitHub Pages）

1. 前往 https://github.com/ 注册 / 登录。
2. 创建一个**公开**仓库，仓库名为 `你的GitHub用户名.github.io`。
3. 在仓库页面选择 `Add file → Upload files`，把此网站文件夹中的文件与 `assets` 文件夹上传（不要只上传 ZIP 包）。
4. 进入仓库 `Settings → Pages`，设置 `Build and deployment → Deploy from a branch`，选择 `main` 分支、`/(root)` 目录并保存。
5. 网站发布后可在 `https://你的GitHub用户名.github.io` 访问。

之后更新网站时：**你只需要在浏览器编辑 `editor.html`，下载新的 `content.js`，再到 GitHub 仓库页面上传并覆盖这个文件即可**。

## 更省事：直接把新简历交给 ChatGPT

无需使用编辑器。你也可以将新的 PDF 简历、论文 DOI 或研究照片发到 ChatGPT，让其根据新信息重新生成网站文件，然后上传覆盖 GitHub 仓库对应文件。

## 上传个人照片

在 `editor.html` 的“个人照片”部分选择 JPG、PNG、WEBP 照片，点击保存就会把照片直接嵌入新 `content.js`，不需要额外上传图片文件。照片建议低于 1 MB；允许最大 3 MB。

## 更新可下载的 CV

网站中的 CV 文件是 `assets/Bin_Zhao_Public_CV.pdf`，是根据上传简历制作的公开版，**已排除私人电话号码和详细街道地址**。要更新 CV，只需用新的、适合公开的同名 PDF 覆盖它。

## 文件说明

- `index.html`：网站首页（不需要自己修改）
- `styles.css`：网站样式（不需要自己修改）
- `site.js`：页面运行逻辑（不需要自己修改）
- `content.js`：**唯一需要更新的内容文件**
- `editor.html` 和 `editor.js`：可视化编辑页面
- `assets/Bin_Zhao_Public_CV.pdf`：供访客下载的公开学术简历
- `assets/favicon.svg`：网站图标
- `.nojekyll`：GitHub Pages 部署辅助文件

## 已纳入信息与待完善内容

已纳入：姓名、学校、联合培养信息、导师、学校邮箱、研究兴趣、4 篇论文、教育经历、荣誉、专利、会议报告、科研技能。

待完善：本人确认的肖像照片、Google Scholar 和 ORCID 链接、更多科研图片和项目成果。没有确认的链接默认不展示。

如希望彻底不接触代码与 GitHub 文件，可以使用 Notion Sites 或 Google Sites。另提供了可导入 Notion 的 Markdown 主页草稿 `Notion_个人学术主页.md`。
