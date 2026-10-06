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
    openFinance: "Open Finance",
    people: "People",
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
      body: "Founder-led contact: direct technical conversations with the people who design and operate the platform. No funnels, no intermediaries.",
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
      sub: "The standard solves an API's interface. Mobiconnect solves the contract: who may consume, how much, at what price and with what auditable metering — for network APIs (CAMARA) and open-finance APIs, on sovereign infrastructure.",
      ctaPrimary: { label: "Talk to the founder", href: "/en/contact" },
      ctaSecondary: { label: "See Entitlements", href: "/en/products/entitlements" },
      panelLabel: "System card",
      panel: [
        { k: "CORE", v: "ENTITLEMENTS · COMMERCIAL PDP" },
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
        "The coming decade is about exposure: verifying a number, detecting a SIM change, sharing financial data with consent — all as standard APIs. Whoever controls the contract of those APIs controls the margin. Mobiconnect builds that layer, with a carrier's engineering discipline and a software house's pace.",
      ],
    },
    products: {
      eyebrow: "Products",
      title: "One commercial core, two industries that expose APIs.",
      lede: "Entitlements is the core: the commercial contract of any API. On top of it sit the network-API platform for operators and the bridge to open finance. People completes the house: the system that measures the hybrid teams who build it.",
      items: [
        {
          kicker: "P·01 · CORE",
          title: "Entitlements",
          body: "The commercial layer for APIs: plans, quotas, usage licenses, frozen pricing and auditable metering — for anyone selling an API as a product.",
          points: [
            "Plans, SKUs and quotas per contract",
            "Allow/deny decisions with explicit fail-closed",
            "Asynchronous, reproducible, billable metering",
          ],
          href: "/en/products/entitlements",
          cta: "View product",
        },
        {
          kicker: "P·02 · TELCO",
          title: "API Platform",
          body: "The serving platform for an operator's CAMARA APIs: gateway, entitlements and developer portal under one standard — deployable on the operator's own infrastructure.",
          points: [
            "CAMARA Commonalities: ErrorInfo, x-correlator, versioning",
            "atk_test_ / atk_live_ keys and scoped OAuth2",
            "Portal with reference and try-it",
          ],
          href: "/en/developers",
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
          kicker: "P·04",
          title: "People",
          body: "An HR system designed from the ground up for hybrid teams: people and AI agents in the same registry, measured by outcomes — not activity.",
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
      body: "Mobiconnect belongs to Inversiones Bucardo Zúñiga: the group that builds and operates its own telecommunications infrastructure, with presence in seven countries and growing. Every product is born from a real need of that operation — and hardened there before reaching the market.",
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
        "The commercial layer for carrier-grade APIs: plans, quotas, licenses and metering for operators and platforms that sell connectivity as a product. Under construction on sovereign infrastructure.",
    },
    hero: {
      eyebrow: "P·01 · Core",
      title: "Entitlements",
      sub: "The commercial layer for APIs: plans, quotas, licenses and metering for anyone selling connectivity as a product. CAMARA (GSMA)-aligned surface, designed for operators with carrier-grade standards.",
      ctaPrimary: { label: "Talk about Entitlements", href: "/en/contact" },
      ctaSecondary: { label: "View People", href: "/en/products/people" },
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
          title: "Plans and SKUs",
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
          title: "Feature flags",
          body: "Enable functionality per plan, per tenant or per market, without deploying new code or coordinating maintenance windows.",
        },
        {
          kicker: "C·05",
          title: "Trials and upgrades",
          body: "Trials, plan upgrades and downgrades as first-class operations — not exceptions your engineering team fears.",
        },
        {
          kicker: "C·06",
          title: "CAMARA standard (GSMA)",
          body: "Public surface conformant to CAMARA Commonalities: common error model, trace correlation, OAuth2/OpenID with scopes and SemVer versioning. One dialect for the operator's entire API ecosystem.",
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
          body: "New plans, markets or SKUs are catalog changes, not architecture changes. The business moves at contract speed.",
        },
      ],
    },
    code: {
      filename: "entitlement.json — illustrative example",
      code: `{
  "tenant": "operator-demo",
  "plan": "connectivity-m",
  "entitlements": {
    "api.sms.send":   { "quota": "250000/month", "used": 184203 },
    "api.did.reserve": { "quota": "1200",         "used": 914 }
  },
  "licensed_features": ["premium-routes", "audit-reports"]
}`,
      note: "Illustrative example of the data model, not a real API response.",
    },
    faq: {
      eyebrow: "Questions",
      title: "What we usually get asked.",
      items: [
        {
          q: "What exactly is an entitlement server?",
          a: "The layer that decides what each API client may consume, in what quantity and under which plan. It is the difference between exposing a service and selling it as a product.",
        },
        {
          q: "Who is it for?",
          a: "Operators and platforms that sell connectivity or APIs as a product and need fine commercial control: consistent plans, quotas, licenses and metering.",
        },
        {
          q: "What state is it in?",
          a: "Under construction on the group's sovereign infrastructure. The design follows the operator's engineering discipline and is validated in real use first.",
        },
        {
          q: "How does it integrate?",
          a: "As a service on the API path: per-call verification and metering, with explicit contracts. It does not require adopting the rest of the platform.",
        },
        {
          q: "What is CAMARA and why does it matter?",
          a: "CAMARA is the GSMA initiative standardizing telco APIs — common errors, security, versioning and semantics for SMS, Number Verification, SIM Swap and more. Conformance means a partner or peer MNO integrates our APIs without learning a proprietary dialect.",
        },
        {
          q: "Who is behind it?",
          a: "Mobiconnect, the AI and high-tech platform of Inversiones Bucardo Zúñiga — the same group that builds and operates Airtime Connect.",
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
      eyebrow: "P·04 · Hybrid teams",
      title: "People",
      sub: "An HR system designed from the ground up for hybrid teams: people and AI agents in the same registry, with clear rules — outcomes are measured, not activity.",
      ctaPrimary: { label: "Talk about People", href: "/en/contact" },
      ctaSecondary: { label: "View Entitlements", href: "/en/products/entitlements" },
      panelLabel: "Product card",
      panel: [
        { k: "PRODUCT", v: "WORKFORCE OS" },
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
          a: "With labor discipline, yes: role-defined outcomes, real work signals and human review. Almost nobody does this with that rigor today — that is the niche.",
        },
        {
          q: "Does it replace HR?",
          a: "No. It orders the conversation: HR defines the criteria and decides; People measures, remembers and presents the evidence.",
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
      eyebrow: "Inversiones Bucardo Zúñiga",
      title: "A real operator, a software house.",
      sub: "Mobiconnect belongs to Inversiones Bucardo Zúñiga: a Chilean group that builds and operates telecommunications infrastructure and digital services across seven countries.",
      ctaPrimary: { label: "Start a conversation", href: "/en/contact" },
      ctaSecondary: { label: "View products", href: "/en/#products" },
    },
    history: {
      eyebrow: "History",
      title: "From connectivity to intelligence.",
      body: [
        "The story starts with connectivity. The group built its telecommunications operation in Chile and grew with it: Ecuador, Peru, Nicaragua, the United States, Mexico, and Colombia now opening.",
        "Then came the structural correction: leaving third-party infrastructure and returning to its own iron. Today the group runs its platform on sovereign hardware, and that infrastructure is the starting condition for everything else.",
        "Mobiconnect is the next step: the software, identity and intelligence layer that turns that infrastructure into products — for the operator itself first, for the market afterwards.",
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
          title: "Sovereignty before convenience",
          body: "Owned infrastructure, owned code, owned decisions. You do not build on anything that a vendor can take away on a whim.",
        },
        {
          title: "Outcomes, not theater",
          body: "We measure what we define. If a number cannot be verified, it is not published — internally or externally.",
        },
        {
          title: "Agents propose, humans decide",
          body: "Automation with named accountability. Every relevant decision has a human behind it.",
        },
        {
          title: "Anti-MVP craft",
          body: "Nothing half-baked. Consulting depth, carrier-grade engineering and real finish in every deliverable.",
        },
      ],
    },
  },
  contact: {
    meta: {
      title: "Contact · Mobiconnect",
      description:
        "Founder-led contact: direct technical conversations with the people who design and operate Mobiconnect. Tell us what you operate and what you want to build on top of it.",
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
