## START TO PROYECT

```bash
cd api
npm install
cp .env.example .env
npm run start:dev
```

---

## TREE TO PROYECT

```bash
src/
├── api
├── app.ts
├── config
│   ├── cors
│   │   └── index.ts
│   ├── environment
│   │   ├── checkEnvironment.ts
│   │   ├── checkModeRute.ts
│   │   ├── env.d.ts
│   │   └── index.ts
│   ├── logger
│   │   └── index.ts
│   └── morgan
│       └── index.ts
├── core
├── data
│   ├── repository
│   └── repositoryPrisma
│       └── prisma
│           └── schema.prisma
├── helpers
└── index.ts
```
