// ============================================================
// Mobiconnect — English dictionary (secondary locale).
// Must mirror src/i18n/es.ts exactly (typed against it).
// Same level of craft as the Spanish copy — not a literal
// translation, but a faithful one.
// ============================================================

import type { es } from "./es";

export const en: typeof es = {
  a11y: {
    skip: "Skip to content",
  },
  nav: {
    aria: "Main navigation",
    menu: "Menu",
    entitlements: "Entitlements",
    developers: "Developers",
    platform: "Platform",
    openFinance: "Open Finance",
    people: "People",
    plans: "Plans",
    group: "Group",
    contact: "Contact",
    langTo: "ES",
    langLabel: "Cambiar a español",
  },
  footer: {
    tagline: "The commercial layer for network and open-finance APIs. Where the network becomes a contract.",
    products: "Products",
    company: "Company",
    legal:
      "© 2026 Mobiconnect — Inversiones Bucardo Zúñiga Limitada · Santiago, Chile",
  },
  shared: {
    cta: {
      eyebrow: "Contact",
      title: "Talk to the people who build.",
      body: "Direct technical conversations with the people who design and operate the platform. No funnels, no intermediaries.",
      button: "Start a conversation",
    },
  },
  home: {
    meta: {
      title: "Mobiconnect — The intelligence layer for the sovereign operator",
      description:
        "Mobiconnect is the commercial layer for network and open-finance APIs: entitlements — plans, quotas, pricing and metering — on CAMARA (GSMA) standard interfaces, deployable on sovereign infrastructure.",
    },
    hero: {
      eyebrow: "Entitlements · APIs for Telco and Open Finance",
      title: "The intelligence layer for the sovereign operator.",
      sub: "The standard solves an API's interface. Mobiconnect solves the contract: who may consume, how much, at what price and with what auditable metering, readable by people, apps and AI agents — for network APIs (CAMARA) and open-finance APIs, on sovereign infrastructure.",
      ctaPrimary: { label: "Talk to the founder", href: "/en/contact" },
      ctaSecondary: { label: "See Entitlements", href: "/en/products/entitlements" },
      panelLabel: "System card",
      panel: [
        { k: "CORE", v: "ENTITLEMENTS · COMMERCIAL DECISION" },
        { k: "STANDARD", v: "CAMARA · GSMA OPEN GATEWAY" },
        { k: "SECTORS", v: "TELCO · OPEN FINANCE" },
        { k: "DEPLOYMENT", v: "SOVEREIGN INFRASTRUCTURE" },
        { k: "FOOTPRINT", v: "7 COUNTRIES · CO OPENING" },
      ],
    },
    thesis: {
      eyebrow: "Thesis",
      title: "Margin and control are not given away: they are built.",
      body: [
        "The group built its own telecommunications operation — presence in seven countries — and brought its infrastructure back onto its own hardware. That control is not delegated: it is the starting condition.",
        "The coming decade is about exposure: verifying a number, detecting a SIM change, sharing financial data with consent — all as standard APIs. And, more and more, those APIs are also consumed by AI agents, which need a machine-readable contract before every call. Whoever controls that contract controls the margin. Mobiconnect builds that layer, with a carrier's engineering discipline and a software house's pace.",
      ],
    },
    products: {
      eyebrow: "Products",
      title: "One commercial core, two industries that expose APIs.",
      lede: "Entitlements is the core: the commercial contract of any API. On top of it sit the network-API platform for operators, under construction, and two lines in design: the bridge to open finance and Number Intelligence, for portability lookup and number database cleansing. As a second line, People measures the performance of hybrid teams of people and AI agents.",
      items: [
        {
          kicker: "P·01 · CORE",
          title: "Entitlements",
          body: "The commercial layer for APIs: plans, quotas, usage licenses, frozen pricing and auditable metering — for anyone selling an API as a product.",
          points: [
            "Plans, permissions and quotas per contract",
            "Allow/deny decisions with explicit fail-closed",
            "Asynchronous, reproducible, billable metering",
          ],
          href: "/en/products/entitlements",
          cta: "View product",
        },
        {
          kicker: "P·02 · TELCO",
          title: "API Platform",
          body: "Under construction: the platform that serves an operator's CAMARA APIs, with gateway, Entitlements and developer portal under one standard, deployable on the operator's own infrastructure.",
          points: [
            "CAMARA Commonalities: ErrorInfo, x-correlator, versioning",
            "atk_test_ / atk_live_ keys and scoped OAuth2",
            "Developer portal with public reference",
          ],
          href: "/en/platform",
          cta: "See the platform",
        },
        {
          kicker: "P·03 · OPEN FINANCE",
          title: "Open Finance Bridge",
          body: "The same contract applied to open finance — and the bridge between both worlds: the network's anti-fraud APIs packaged as a product for banks and fintechs.",
          points: [
            "Standard API + consent + contract",
            "Anti-fraud: number verification and SIM swap",
            "In design — no regulatory promises",
          ],
          href: "/en/open-finance",
          cta: "See the approach",
        },
        {
          kicker: "P·04 · NUMBERS · IN DESIGN",
          title: "Number Intelligence",
          body: "Portability lookup, validation and cleansing of +56 number databases: which operator a number belongs to today, whether it is valid and of which type, one by one or in bulk. Every query will go through Entitlements.",
          points: [
            "Current operator and portability flag",
            "Format, assigned-range and type validation",
            "Bulk database cleansing, with a verdict per row",
          ],
          href: "https://mobiconnect.dev/apis/number-intelligence/",
          cta: "Read the technical summary",
        },
        {
          kicker: "P·05 · SECOND LINE",
          title: "People",
          body: "A performance system designed from the ground up for hybrid teams: people and AI agents in the same registry, measured by outcomes, not activity.",
          points: [
            "People and agents in a single registry",
            "Agents propose, humans decide",
            "Scorecards anchored to outcomes",
          ],
          href: "/en/products/people",
          cta: "View product",
        },
      ],
    },
    group: {
      eyebrow: "The group",
      title: "A real operation behind every product.",
      body: "Mobiconnect belongs to Inversiones Bucardo Zúñiga: the group that builds and operates its own telecommunications infrastructure, with presence in seven countries and growing. Entitlements was born from a real need of that operation.",
      stats: [
        { value: "7", label: "countries with presence" },
        { value: "CAMARA", label: "GSMA-aligned API surface" },
        { value: "Owned", label: "sovereign group infrastructure" },
      ],
      cta: { label: "Meet the group", href: "/en/about" },
    },
  },
  entitlements: {
    meta: {
      title: "Entitlements — plans, quotas and metering for APIs · Mobiconnect",
      description:
        "The commercial layer for APIs: plans, quotas, usage licenses and metering for anyone selling an API as a product. Entitlements v1 in staging on sovereign infrastructure; documentation at mobiconnect.dev.",
    },
    hero: {
      eyebrow: "P·01 · Core",
      title: "Entitlements",
      sub: "The commercial layer for APIs: plans, quotas, usage licenses and metering for anyone selling an API as a product: operators, banks, fintechs and platforms. API Ready by design: a documented contract, decision reasons in a closed enum and deterministic responses, designed for AI agents to consume too. The OpenAPI specification is on its way. CAMARA (GSMA)-aligned surface.",
      ctaPrimary: { label: "Talk about Entitlements", href: "/en/contact" },
      ctaSecondary: { label: "Read the docs", href: "https://mobiconnect.dev" },
      panelLabel: "Product card",
      panel: [
        { k: "PRODUCT", v: "ENTITLEMENT SERVER" },
        { k: "LAYER", v: "COMMERCIAL · APIS" },
        { k: "STANDARD", v: "CAMARA · GSMA" },
        { k: "INFRA", v: "SOVEREIGN · GROUP-OWNED" },
      ],
    },
    features: {
      eyebrow: "Capabilities",
      title: "Everything an API needs to be sold.",
      lede: "Exposing a service is easy. Selling it — with plans, limits and contracts — demands an explicit commercial layer. That is Entitlements.",
      items: [
        {
          kicker: "C·01",
          title: "Plan catalog",
          body: "A commercial catalog on top of the API: segments, units and plan matrices per contract, without redesigning the backend for every commercial change.",
        },
        {
          kicker: "C·02",
          title: "Quotas and metering",
          body: "Every call counts. Consumption is metered against the plan and limits are enforced consistently and auditably.",
        },
        {
          kicker: "C·03",
          title: "Contract-based licensing",
          body: "What each tenant may use, defined in the contract and enforced at runtime. No implicit access, no inherited permissions.",
        },
        {
          kicker: "C·04",
          title: "Designed for AI agents",
          body: "Every decision is deterministic and machine-readable: permission, remaining quota, price reference and the reason for a denial. It is designed for an AI agent to consume without stepping outside the contract.",
        },
        {
          kicker: "C·05",
          title: "Idempotency and fail-closed",
          body: "Idempotency governs retries: no call is charged twice. If it cannot decide, it does not serve: uncertainty never grants access.",
        },
        {
          kicker: "C·06",
          title: "CAMARA standard (GSMA)",
          body: "Public surface designed on CAMARA Commonalities: common error model, trace correlation, OAuth2/OpenID with scopes and SemVer versioning. One dialect for the operator's entire API ecosystem.",
        },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "From catalog to billing, in three moves.",
      steps: [
        {
          n: "01",
          title: "Define the catalog",
          body: "Plans, quotas and licenses are declared per contract. The commercial catalog stops living in spreadsheets and becomes part of the system.",
        },
        {
          n: "02",
          title: "Connect your APIs",
          body: "Every request is checked against the tenant's entitlement and metered against its plan — in real time, auditably.",
        },
        {
          n: "03",
          title: "Grow without redesigning",
          body: "New plans, markets or capabilities are catalog changes, not architecture changes. Every call is evaluated against that explicit contract.",
        },
      ],
    },
    code: {
      filename: "entitlement.json — illustrative example",
      code: `{
  "tenant": "bank-demo",
  "plan": "antifraud-m",
  "entitlements": {
    "number-verification:verify": { "quota": "250000/month", "used": 184203 },
    "sim-swap:check":             { "quota": "120000/month", "used": 91412 }
  },
  "licensed_features": ["audit-reports"]
}`,
      note: "Illustrative example of the data model, not a real API response.",
    },
    faq: {
      eyebrow: "Questions",
      title: "What we usually get asked.",
      items: [
        {
          q: "What exactly is an entitlement server?",
          a: "The layer that decides what each API client may consume, in what quantity and under which plan. It is the difference between exposing a service and selling it as a product. For an AI agent, it is also what turns every call into an explicit decision it can act on.",
        },
        {
          q: "Who is it for?",
          a: "Operators, banks, fintechs and platforms that sell APIs as a product and need fine commercial control: consistent plans, quotas, licenses and metering.",
        },
        {
          q: "What state is it in?",
          a: "Entitlements v1 runs in staging on the group's sovereign infrastructure, with public documentation at mobiconnect.dev. Staging is not production: production availability is announced once it is enabled.",
        },
        {
          q: "How does it integrate?",
          a: "As a service on the API path: per-call verification and metering, with explicit contracts. It does not require adopting the rest of the platform.",
        },
        {
          q: "What is CAMARA and why does it matter?",
          a: "CAMARA is the Linux Foundation open-source project, backed by GSMA, that standardizes network APIs: common errors, security, versioning and semantics for Number Verification, SIM Swap, network quality and more. Following it lets a partner or another operator integrate our APIs without learning a proprietary dialect.",
        },
        {
          q: "Who is behind it?",
          a: "Mobiconnect, the software house of Inversiones Bucardo Zúñiga: a group that builds and runs its own telecommunications infrastructure across seven countries. We run what we sell.",
        },
      ],
    },
  },
  people: {
    meta: {
      title: "People — performance for hybrid teams · Mobiconnect",
      description:
        "The performance system for hybrid teams: people and AI agents in the same registry, measured by outcomes rather than activity. Agents propose, humans decide.",
    },
    hero: {
      eyebrow: "P·05 · Second line",
      title: "People",
      sub: "A performance system designed from the ground up for hybrid teams: people and AI agents in the same registry, with clear rules: outcomes are measured, not activity.",
      ctaPrimary: { label: "Talk about People", href: "/en/contact" },
      ctaSecondary: { label: "View Entitlements", href: "/en/products/entitlements" },
      panelLabel: "Product card",
      panel: [
        { k: "PRODUCT", v: "TEAM PERFORMANCE" },
        { k: "TEAMS", v: "PEOPLE + AI AGENTS" },
        { k: "MEASURE", v: "OUTCOMES, NOT ACTIVITY" },
        { k: "RULE", v: "AGENTS PROPOSE · HUMANS DECIDE" },
      ],
    },
    features: {
      eyebrow: "Capabilities",
      title: "One registry for the whole team — human or digital.",
      lede: "Teams are already hybrid; the systems that measure them are not. People treats humans and AI agents with the same labor discipline.",
      items: [
        {
          kicker: "C·01",
          title: "Unified registry",
          body: "People and digital workers (AI agents) in a single system, with explicit identity, role and responsibilities.",
        },
        {
          kicker: "C·02",
          title: "Agents propose, humans decide",
          body: "The decision chain is recorded: every agent proposal carries context and a responsible human behind it. Automation with a name attached.",
        },
        {
          kicker: "C·03",
          title: "Outcomes, not activity",
          body: "Scorecards anchored to role-defined outcomes. Activity is a signal; the outcome is the measure.",
        },
        {
          kicker: "C·04",
          title: "Scorecards per role",
          body: "Explicit weights and criteria per role, reviewable and versioned. No black-box ratings.",
        },
        {
          kicker: "C·05",
          title: "Connected signals",
          body: "Evaluation is fed by real work — systems, repositories, operational records — not self-assessment.",
        },
        {
          kicker: "C·06",
          title: "Reviews with evidence",
          body: "Every cycle closes with traceable evidence: what was measured, with what weight, and what was decided.",
        },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "Measuring hybrid teams, in three moves.",
      steps: [
        {
          n: "01",
          title: "Define outcomes",
          body: "For every role — human or agent — outcomes and weights are declared. No defined outcomes, no scorecard.",
        },
        {
          n: "02",
          title: "Connect the signals",
          body: "The system feeds on real work: internal systems, code and operational records, not self-assessment forms.",
        },
        {
          n: "03",
          title: "Review and decide",
          body: "Review cycles with scorecards and evidence. Humans decide; the system remembers.",
        },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "What we usually get asked.",
      items: [
        {
          q: "Can an AI agent really be evaluated like an employee?",
          a: "With labor discipline, yes: role-defined outcomes, real work signals and human review.",
        },
        {
          q: "Does it replace the people team?",
          a: "No. It orders the conversation: the people team defines the criteria and decides; People measures, remembers and presents the evidence.",
        },
        {
          q: "What does “hybrid team” mean?",
          a: "A team where people and AI agents share real responsibilities. People registers both as workers: with a role, outcomes and accountability.",
        },
        {
          q: "What state is it in?",
          a: "A group product in internal adoption; a multi-tenant version for third parties is in preparation.",
        },
        {
          q: "Where did it come from?",
          a: "From practice: the group runs fleets of agents alongside human teams and needed to measure them with the same discipline. People is that answer, turned into a product.",
        },
      ],
    },
  },
  about: {
    meta: {
      title: "The group — Inversiones Bucardo Zúñiga · Mobiconnect",
      description:
        "Mobiconnect belongs to Inversiones Bucardo Zúñiga: a Chilean group that builds and operates telecommunications technology on its own sovereign infrastructure, with presence in seven countries.",
    },
    hero: {
      eyebrow: "The group behind Mobiconnect",
      title: "We run what we sell.",
      sub: "Mobiconnect is the software house of Inversiones Bucardo Zúñiga, a group that builds and runs its own telecommunications infrastructure across seven countries in the Americas. On that iron, owned and not rented, we authorize every API call before it happens, and meter and price it as it is served.",
      ctaPrimary: { label: "Start a conversation", href: "/en/contact" },
      ctaSecondary: { label: "View products", href: "/en/#products" },
    },
    why: {
      eyebrow: "Why we exist",
      title: "The standard solves the interface. The contract is still open.",
      body: [
        "The coming decade of telecommunications and finance is about exposing: verifying a number, detecting a SIM swap, requesting network quality, sharing financial data with consent. All of it becomes standardized APIs — CAMARA and GSMA Open Gateway in telco; open finance in banking.",
        "The standard solves the interface, not the commercial contract: who may consume, how much, at what price, under which plan, with which auditable measurement. Today that layer is outsourced to global aggregators or hand-coded — and every outsourced layer is margin and control that belongs to someone else.",
        "That is where Mobiconnect lives: the layer where a network or open-finance API becomes a contract. One pattern across two industries — standard API, consent, participants, access control and billing — and the same buyer: the first Open Gateway cases in Latin America are anti-fraud for banking. The bank entering open finance is the same one consuming network APIs. The intersection is the market.",
      ],
      quote:
        "What open banking did with financial data, open network APIs are doing with the network. The layer that turns that access into a contract is missing. That layer is Mobiconnect.",
    },
    history: {
      eyebrow: "History",
      title: "From connectivity to intelligence.",
      body: [
        "The story starts with connectivity. The group built its telecommunications operation in Chile and grew with it: Ecuador, Peru, Nicaragua, the United States, Mexico, and Colombia now opening.",
        "Then came the structural correction: leaving third-party infrastructure and returning to its own iron. Today the group runs its platform on sovereign hardware, and that infrastructure is the starting condition for everything else.",
        "Mobiconnect is the next step: the operator's intelligence layer made product. It was born inside the group's own operation and is now opening to the market — the commercial core for network APIs and open finance, with People as a second line.",
      ],
    },
    offer: {
      eyebrow: "The offer",
      title: "One commercial core, two industries that expose APIs.",
      items: [
        {
          kicker: "01 · Core",
          title: "Entitlements",
          body: "Plans, quotas, usage licenses and measurement for any API sold as a product. Born inside the group's operation.",
          href: "/en/products/entitlements",
          cta: "View product",
        },
        {
          kicker: "02 · Telco",
          title: "API Platform",
          body: "The operator's CAMARA (GSMA) surface — verification, SIM Swap, network quality — is exposed under a commercial contract, not a call count. In the making.",
          href: "/en/platform",
          cta: "See the platform",
        },
        {
          kicker: "03 · Open finance",
          title: "Open Finance Bridge",
          body: "In design: the same contract control, applied to financial data shared with consent.",
          href: "/en/open-finance",
          cta: "See the vision",
        },
        {
          kicker: "04 · Numbers",
          title: "Number Intelligence",
          body: "In design: portability lookup, validation and cleansing of +56 number databases, under the same contract and the same metering.",
          href: "https://mobiconnect.dev/apis/number-intelligence/",
          cta: "Read the technical summary",
        },
        {
          kicker: "05 · Second line",
          title: "People",
          body: "Performance for hybrid teams of people and AI agents, measured by outcomes. It complements the core; it is not the core.",
          href: "/en/products/people",
          cta: "View product",
        },
      ],
    },
    countries: {
      eyebrow: "Footprint",
      title: "Seven countries, one discipline.",
      list: [
        { name: "Chile", note: "HQ · Santiago" },
        { name: "Ecuador", note: "" },
        { name: "Peru", note: "" },
        { name: "Nicaragua", note: "" },
        { name: "United States", note: "" },
        { name: "Mexico", note: "" },
        { name: "Colombia", note: "Opening" },
      ],
    },
    principles: {
      eyebrow: "Principles",
      title: "How we decide.",
      items: [
        {
          title: "We run what we sell.",
          body: "We operate the infrastructure our software runs on; we don't resell someone else's.",
        },
        {
          title: "Measure to govern.",
          body: "Every call is authorized before it happens and metered as it is served. Control is not an after-the-fact report.",
        },
        {
          title: "Control is not for rent.",
          body: "Our own iron, our own contract. Accountability is not outsourced.",
        },
      ],
    },
  },
  contact: {
    meta: {
      title: "Contact · Mobiconnect",
      description:
        "Direct technical conversations with the people who design and operate Mobiconnect. Tell us what you operate and what you want to build on top of it.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Talk to the people who build.",
      sub: "Direct technical conversations, no funnels or intermediaries. Tell us what you operate and what you want to sell on top of it.",
    },
    form: {
      name: "Name",
      org: "Organization",
      email: "Email",
      topic: "Topic",
      topics: ["Entitlements", "API Platform (Telco)", "Open Finance", "People", "Partnership", "Other"],
      message: "Message",
      messagePlaceholder:
        "What you operate, what you sell today, and what's missing to sell it better…",
      submit: "Open email draft",
      note: "This form does not send data to any server: it composes an email in your own email client. Nothing is stored.",
      direct: "Or write directly to",
    },
    // Declared debt: confirm the final mailbox with the CEO before deploy.
    email: "hola@mobiconnect.app",
  },
  notFound: {
    title: "404 — Page not found · Mobiconnect",
    heading: "Route not found.",
    body: "The page you are looking for does not exist or has moved.",
    cta: "Back to home",
  },
};
