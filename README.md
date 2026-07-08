# PlusCoin — 官网 / 法务页(GitHub Pages)

**PlusCoin 网站的唯一源仓库。** 自包含静态站点:落地/支持页 + 隐私政策 + 使用条款,4 语言(日/英/简/繁,跟随浏览器语言,可手动切换),NOIR + 香槟金。

```
index.html    # 落地 + 支持页(#support)
privacy.html  # 隐私政策
terms.html    # 使用条款
style.css     # 共享样式
lang.js       # 语言切换
CNAME         # 绑定 pluscoin.glspace.co.jp(勿删)
```

## 部署(已上线)

- 站点:**https://pluscoin.glspace.co.jp/**
- GitHub Pages Source:`main` 分支 `/(root)`,强制 HTTPS
- DNS:`pluscoin.glspace.co.jp` CNAME → `gyougi.github.io`
- **改动流程**:直接在本仓库改 → `git push` → GitHub Pages 自动重建即上线(约 1 分钟)

## App Store Connect 的 URL

| ASC 字段 | 值 |
|---|---|
| 支持 URL | `https://pluscoin.glspace.co.jp/` |
| 隐私政策 URL | `https://pluscoin.glspace.co.jp/privacy.html` |
| 营销 URL(可选) | `https://pluscoin.glspace.co.jp/` |

## 待办

- `index.html` 里 App Store 按钮 `href="#"` → App 上架后换真实链接
- App 相关 ASC 申请素材见 `pluscoin-ios/docs/asc/listing.md`
