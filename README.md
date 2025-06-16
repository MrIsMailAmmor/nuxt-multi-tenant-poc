# 🏗️ Nuxt Multi-Tenant Boilerplate (Subdomain-Based)

This project demonstrates a scalable multi-tenant architecture in **Nuxt 3**, using **subdomains** to separate tenants. Each tenant gets its own theme, configuration, and branding.

Example tenant URLs:

- http://tenant1.localhost:3000
- http://tenant2.localhost:3000

---

## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/MrIsMailAmmor/nuxt-multi-tenant-poc.git

cd nuxt-multi-tenant-poc

### 2. Install dependencies

npm install

or

yarn install


### 3. Add local subdomain mapping

Edit your system’s `hosts` file:

#### On Windows:
Open `C:\Windows\System32\drivers\etc\hosts` as Administrator and add:

127.0.0.1 tenant1.localhost

127.0.0.1 tenant2.localhost


#### On macOS/Linux:
Edit `/etc/hosts` and add:

127.0.0.1 tenant1.localhost

127.0.0.1 tenant2.localhost

### 4. Run the development server

npm run dev

or

yarn dev



---

## 🌐 Accessing Tenants

Open your browser to:

- http://tenant1.localhost:3000
- http://tenant2.localhost:3000

Each subdomain maps to a tenant defined in `tenantStore.ts`.

---

## 🧩 Project Structure

.
├── TODO: pages/index.vue # Shared entry point for tenants 
├── middleware/tenant-access.global.ts
├── composables/useTenant.ts
├── server/
│ ├── plugins/tenant.ts # Inject tenant by subdomain
│ └── api/config.get.ts # Custom API per tenant
├── utils/tenantStore.ts # Static tenant definitions


---

## 🧪 Testing the Config API

You can fetch the tenant config with:

curl http://tenant1.localhost:3000/api/config


Returns:

{
  "id": "tenant1",
  "name": "Tenant One",
  "themeColor": "#FF5733",
  "logoUrl": "/logos/tenant1.svg"
}


---

## 🧠 How It Works

- The tenant is extracted from the **subdomain** (e.g., `tenant1` from `tenant1.localhost`)
- Middleware verifies the tenant exists before allowing navigation
- A plugin injects the tenant config into the request context
- Pages/components access tenant data via `useTenant()`

---

## 🔧 Customization

- Add tenants to `utils/tenantStore.ts`
- Use `useTenant()` anywhere in your app
- Customize per-tenant pages, themes, and logos as needed

---

## ⚠️ Notes

- Ensure browser cache is cleared after editing `hosts`
- Use different subdomains — `localhost:3000` won’t load any tenant directly
- Don’t forget to restart `npm run dev` after structural or config changes

---

## 📄 License

MIT

---

## 🙌 Credits

Inspired by [Adam DeHaven’s article](https://www.adamdehaven.com/articles/powering-multi-tenant-applications-with-nuxt)
