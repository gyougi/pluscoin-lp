# PlusCoin — 官网 / 法务页(GitHub Pages)

自包含静态站点:落地/支持页 + 隐私政策 + 使用条款,4 语言(日/英/简/繁,跟随浏览器语言,可手动切换)。

```
web/
├── index.html     # 落地 + 支持页(#support)
├── privacy.html   # 隐私政策
├── terms.html     # 使用条款
├── style.css      # 共享样式(NOIR + 香槟金)
└── lang.js        # 语言切换
```

## 部署(已上线)

已部署到独立仓库 **`gyougi/pluscoin-lp`**,GitHub Pages + 自定义域名:

- 站点:**https://pluscoin.glspace.co.jp/**
- `CNAME` 文件绑定域名(勿删);DNS:`pluscoin.glspace.co.jp` CNAME → `gyougi.github.io`
- Pages Source:`main` 分支 `/(root)`,强制 HTTPS

> 本 `web/` 目录是源;更新后把文件同步到 `pluscoin-lp` 仓库根目录再 push。

## App Store Connect 的 URL

| ASC 字段 | 值 |
|---|---|
| 支持 URL | `https://pluscoin.glspace.co.jp/` |
| 隐私政策 URL | `https://pluscoin.glspace.co.jp/privacy.html` |
| 营销 URL(可选) | `https://pluscoin.glspace.co.jp/` |

## 上线前替换

- `index.html` 里的 App Store 按钮 `href="#"` → 换成真实 App Store 链接(App 上架后生成)

详见 [../docs/asc/listing.md](../docs/asc/listing.md)。
