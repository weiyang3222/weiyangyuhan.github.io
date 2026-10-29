# Academic Personal Website — 使用指南

这个项目是一个可直接部署的、无需构建命令的纯静态学术主页，包含：

- `index.html`：首页、研究方向、代表论文、About、News、Contact。
- `research.html`：3 个研究方向与研究流程。
- `publications.html`：论文列表和 BibTeX 复制按钮。
- `styles.css`：全部视觉样式及移动端响应式布局。
- `app.js`：手机菜单、深浅色切换、BibTeX 复制。
- `assets/favicon.svg`：浏览器标签页图标。

## 1. 打开预览

解压 ZIP，双击 `index.html` 即可在浏览器查看。无需安装 Node.js 或运行服务器。

## 2. 发布前必须核对/替换的内容

1. **姓名和学校**：目前根据已有公开学术信息预填 `Bin Zhao / Westlake University`。如果希望使用其他署名，请在所有 HTML 文件、favicon 和 JSON-LD 中同步修改。
2. **个人简介与在读身份**：核对学校、院系、职位、研究方向的准确措辞。
3. **学术邮箱**：联系区目前没有填写地址，避免使用未经确认的信息。建议增加 `mailto:你的邮箱`。
4. **CV**：目前首页为 CV 说明区；若要开放 PDF 下载，将 `CV.pdf` 放到 `assets/`，并将说明区替换为 `<a href="assets/CV.pdf" download>Download CV</a>`。
5. **照片**：目前首页右侧使用自制的科学示意 SVG，不含未经许可的照片。可把本人照片或实验室/论文原图加入 `assets/` 后替换。
6. **论文**：已根据 ACS 官方页面核实 JACS 论文的题名、作者、卷期、页码和 DOI；其他论文可以复制 `publications.html` 中的 `<article class="publication-record">...</article>` 后添加。
7. **Google Scholar / 个人邮箱**：必须使用你确认的实际 URL / 地址。
8. **隐私与权利**：公开前检查手机号、住址、尚未发表实验数据，以及论文插图/期刊封面版权。

已核实论文：*Journal of the American Chemical Society* **2026**, 148(40), 43401–43410；DOI: [10.1021/jacs.6c12969](https://doi.org/10.1021/jacs.6c12969)。

## 3. GitHub Pages 免费部署（建议）

1. 注册或登录 GitHub。
2. 新建**公开**仓库，仓库名称必须为 `<你的 GitHub 用户名>.github.io`，例如 `myname.github.io`。
3. 将本 ZIP 解压出的所有文件和文件夹上传到仓库的根目录（确保 `index.html` 在根目录）。`.nojekyll` 是隐藏文件，上传时可选；不上传也能使用。
4. 进入仓库 `Settings` → `Pages` → `Build and deployment`。
5. `Source` 选择 `Deploy from a branch`；`Branch` 选择 `main`，文件夹选择 `/(root)`，保存。
6. 等待部署状态成功后，访问 `https://<你的用户名>.github.io/`。
7. 以后修改内容，只需编辑/上传文件并提交到仓库。通常每次提交会自动重新部署。

官方文档：https://docs.github.com/en/pages/quickstart

### 自定义域名（可选）

先向域名注册商购买域名。在仓库 `Settings` → `Pages` → `Custom domain` 输入域名，再根据 GitHub 官方说明设置 DNS 记录，等待证书完成后启用 `Enforce HTTPS`。

官方文档：https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## 4. Cloudflare Pages 备选部署

在 Cloudflare Dashboard → `Workers & Pages` → `Deploy site` 选择 Direct Upload，上传解压后的网站目录即可。也可以连接 GitHub 仓库以自动部署。

官方文档：https://developers.cloudflare.com/pages/get-started/direct-upload/

## 5. 日常维护的推荐频率

- 新论文上线：新增论文并添加 DOI。
- 科研进展或报告：酌情增加 News（只发布公开内容）。
- 每学期：更新学术简历和研究描述。
- 每年：核对学校、职务、外部链接和论文记录。

## 6. 技术特性

无外部 JS/CSS 依赖、HTTPS 可用、SEO 基础 meta、结构化 Person 信息、移动端菜单、键盘可用、prefers-reduced-motion 支持。文件中的示意图属于概念图，不是实际实验数据。
