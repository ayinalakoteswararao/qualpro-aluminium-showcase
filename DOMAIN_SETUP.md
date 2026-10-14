# Domain & DNS Setup Documentation

**Domain:** `qualproaluminium.com`  
**Hosting Platform:** Vercel  
**Domain Registrar / DNS Provider:** Namecheap  
**Vercel Project:** `qualpro-aluminium-showcase`  
**Date Configured:** October 14, 2026  

---

## 1. Architecture Overview

```text
Visitor (qualproaluminium.com)
       ↓  (308 Permanent Redirect)
Visitor (www.qualproaluminium.com)
       ↓
Namecheap BasicDNS
  ├── A Record (@) ───────→ Vercel Edge Network
  └── CNAME Record (www) ─→ cname.vercel-dns.com
       ↓
Vercel Production Deployment (qualpro-aluminium-showcase)
  └── Free Auto-Renewing SSL (HTTPS)
```

---

## 2. Namecheap Settings

### Nameserver Configuration
* **Location:** *Namecheap → Domain List → Manage → Domain Tab*
* **Nameservers:** Set to **Namecheap BasicDNS**  
  *(Switched away from "Web Hosting DNS" to unlock manual Host Records editing).*

### Host Records (Advanced DNS Tab)
* **Location:** *Namecheap → Domain List → Manage → Advanced DNS*

| Type | Host | Value | TTL | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **A Record** | `@` | `76.76.21.21` *(or `216.198.79.1`)* | Automatic | Points root domain (`qualproaluminium.com`) to Vercel |
| **CNAME Record** | `www` | `bab5063388eca72f.vercel-dns-017.com.` | Automatic | Points `www.qualproaluminium.com` to Vercel |

> **Note on Existing Records:**  
> All other existing records (`mail`, `cpanel`, `autoconfig`, `autodiscover`, MX records, and SPF/DKIM TXT records) were preserved so that email and cPanel services continue running without interruption.

---

## 3. Vercel Settings

* **Location:** *Vercel Dashboard → `qualpro-aluminium-showcase` → Settings → Domains*

| Domain | Configuration | Target / Status |
| :--- | :--- | :--- |
| `qualproaluminium.com` | Redirect to another domain | `308 Permanent Redirect` to `www.qualproaluminium.com` |
| `www.qualproaluminium.com` | Production environment | Aliased to latest Production deployment |
| `qualpro-aluminium-showcase.vercel.app` | Default Vercel domain | Fallback / Preview URL |

---

## 4. Live URLs & Verification

- **Production URL:** [https://www.qualproaluminium.com](https://www.qualproaluminium.com)
- **Root URL (Auto-redirects to www):** [https://qualproaluminium.com](https://qualproaluminium.com)
- **SSL Certificate:** Handled automatically by Let's Encrypt / Vercel (Auto-renews).
