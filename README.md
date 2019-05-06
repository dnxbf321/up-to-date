# up-to-date

检查并更新指定的第三方依赖

## 使用

首先，添加 `up-to-date` 到项目依赖
```bash
npm install @dnxbf321/up-to-date --save-dev
```

然后，在 `package.json` 同级的位置新建名为 `.up-to-date.config.js` 或者 `.up-to-date.config.json` 的文件。配置项参考 [npm-check-updates](https://github.com/tjunnone/npm-check-updates)


最后，修改 `package.json` scripts，示例：
```json
{
  "name": "demo",
  "version": "1.0.0",
  "scripts": {
    "uptodate": "up-to-date"
  },
  "dependencies": {
    "jquery": "^2.1.4"
  }
}
```