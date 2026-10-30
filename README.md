# Bin Zhao's Academic Website (CV-Populated Version)

This English-language academic website was generated from the CV you provided. No database or server maintenance is required.

## Getting Started: The Easiest Way

1. Extract the website ZIP archive.
2. Double-click `index.html` to preview your website in a browser.
3. Double-click `editor.html` to open the **visual editor**. To update your name, biography, research interests, publications, or other information, simply edit the corresponding fields.
4. Click **Save Changes and Download** at the top of the editor. Your browser will download an updated `content.js` file.
5. Replace the existing `content.js` in your website folder with the downloaded file, then refresh `index.html` to see your changes.

**Important:** Changes made in the browser will not be saved unless you click **Save Changes and Download** before closing the page. If your browser asks where to save the file, you can select your website folder. If the file is saved to your Downloads folder instead, remember to copy it into the website folder and replace the existing file.

## Publishing with GitHub Pages

1. Go to https://github.com/ and sign up or sign in.
2. Create a **public** repository named `your-github-username.github.io`, replacing `your-github-username` with your actual GitHub username.
3. On the repository page, select **Add file → Upload files**. Upload the files from the extracted website folder, including the `assets` folder (do not upload only the ZIP archive).
4. Go to **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose the `main` branch and `/(root)` folder, and save.
5. Once published, your website will be available at `https://your-github-username.github.io`.

To update the published website later, **simply edit your content in `editor.html`, download the updated `content.js`, and upload it to your GitHub repository to replace the existing file**.

## Even Easier: Update Your Website Through ChatGPT

You do not have to use the editor. You can also upload an updated PDF CV, share a new publication DOI, or provide research photos to ChatGPT. ChatGPT can then help generate the updated website files, which you can upload to replace the corresponding files in your GitHub repository.

## Adding a Profile Photo

In the **Profile Photo** section of `editor.html`, select a JPG, PNG, or WEBP image. When you save your changes, the image will be embedded directly into the new `content.js` file, so no separate image upload is required.

For best results, use an image smaller than 1 MB. The maximum supported file size is 3 MB.

## Updating the Downloadable CV

The downloadable CV is stored at `assets/Bin_Zhao_Public_CV.pdf`. It is a public version prepared from your uploaded CV, **with your personal phone number and full street address removed**.

To update it, replace this file with a new, publicly shareable PDF using the same filename.

## File Structure

- `index.html` — Website homepage (no manual editing required)
- `styles.css` — Website styles (no manual editing required)
- `site.js` — Website functionality (no manual editing required)
- `content.js` — **The only content file you need to update**
- `editor.html` and `editor.js` — Visual editor
- `assets/Bin_Zhao_Public_CV.pdf` — Public CV available for download
- `assets/favicon.svg` — Website icon
- `.nojekyll` — Configuration file for GitHub Pages deployment

## Included Information and Items to Complete

**Already included:** Name, university, joint Ph.D. program details, advisor, university email address, research interests, four publications, educational background, honors and awards, patent, conference presentation, and research skills.

**Still to add:** A confirmed profile photo, Google Scholar and ORCID profile links, additional research images, and project highlights. Links that have not been confirmed are hidden by default.

If you prefer not to deal with code or GitHub files at all, you can use Notion Sites or Google Sites instead. A draft academic homepage in Markdown format, `Notion_个人学术主页.md`, is also provided for import into Notion.
