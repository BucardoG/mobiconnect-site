// ============================================================
// Mobiconnect — diccionario ES (primario).
// Toda la narrativa del sitio vive aquí: se refina sin tocar layout.
// Regla dura: cero datos inventados. Solo hechos verificables del
// charter y del brief (grupo, 7 países, infraestructura propia).
// PROHIBIDO (decisión CEO 2026-10-05, D8): mencionar licencias de
// telecomunicaciones en cualquier forma (son de Airtime). Patrones: qa/leak-checklist.md L10.
// ============================================================

export const es = {
  a11y: {
    skip: "Saltar al contenido",
  },
  nav: {
    aria: "Navegación principal",
    menu: "Menú",
    entitlements: "Entitlements",
    developers: "Developers",
    platform: "Plataforma",
    openFinance: "Open Finance",
    people: "People",
    plans: "Planes",
    group: "Grupo",
    contact: "Contacto",
    langTo: "EN",
    langLabel: "Switch to English",
  },
  footer: {
    tagline:
      "La capa comercial de las APIs de red y de finanzas abiertas. Donde la red se vuelve contrato.",
    products: "Productos",
    company: "Compañía",
    legal:
      "© 2026 Mobiconnect — Inversiones Bucardo Zúñiga Limitada · Santiago de Chile",
  },
  shared: {
    cta: {
      eyebrow: "Contacto",
      title: "Habla con quien construye.",
      body: "Conversaciones técnicas directas con quienes diseñan y operan la plataforma. Sin embudos ni intermediarios.",
      button: "Iniciar conversación",
    },
  },
  home: {
    meta: {
      title: "Mobiconnect — La capa de inteligencia del operador soberano",
      description:
        "Mobiconnect es la capa comercial de las APIs de red y de finanzas abiertas: entitlements — planes, cuotas, precio y medición — sobre interfaces estándar CAMARA (GSMA), desplegable en infraestructura soberana.",
    },
    hero: {
      eyebrow: "Entitlements · APIs para Telco y Open Finance",
      title: "La capa de inteligencia del operador soberano.",
      sub: "El estándar resuelve la interfaz de una API. Mobiconnect resuelve el contrato: quién puede consumir, cuánto, a qué precio y con qué medición auditable, legible por personas, aplicaciones y agentes AI — para las APIs de red (CAMARA) y las de finanzas abiertas, sobre infraestructura soberana.",
      ctaPrimary: { label: "Conversar con el fundador", href: "/contact" },
      ctaSecondary: { label: "Ver Entitlements", href: "/products/entitlements" },
      panelLabel: "Ficha del sistema",
      panel: [
        { k: "NÚCLEO", v: "ENTITLEMENTS · DECISIÓN COMERCIAL" },
        { k: "ESTÁNDAR", v: "CAMARA · GSMA OPEN GATEWAY" },
        { k: "SECTORES", v: "TELCO · OPEN FINANCE" },
        { k: "DESPLIEGUE", v: "INFRAESTRUCTURA SOBERANA" },
        { k: "PRESENCIA", v: "7 PAÍSES · CO EN APERTURA" },
      ],
    },
    thesis: {
      eyebrow: "Tesis",
      title: "El margen y el control no se regalan: se construyen.",
      body: [
        "El grupo construyó su propia operación de telecomunicaciones — presencia en siete países — y recuperó su infraestructura sobre hardware propio. Ese control no se delega: es la condición de partida.",
        "La década que viene se trata de exponer: verificar un número, detectar un cambio de SIM, compartir datos financieros con consentimiento — todo como API estándar. Y, cada vez más, quien consume esas APIs también es un agente AI, que necesita un contrato legible por máquina antes de cada llamada. Quien controle ese contrato controlará el margen. Mobiconnect construye esa capa, con la disciplina de ingeniería de un carrier y el ritmo de una casa de software.",
      ],
    },
    products: {
      eyebrow: "Productos",
      title: "Un núcleo comercial, dos industrias que exponen APIs.",
      lede: "Entitlements es el núcleo: el contrato comercial de cualquier API. Sobre él se levantan la plataforma de APIs de red para operadores, en construcción, y dos líneas en diseño: el puente hacia las finanzas abiertas y Number Intelligence, para consulta de portabilidad y limpieza de bases de números. En segunda línea, People mide el desempeño de equipos híbridos de personas y agentes AI.",
      items: [
        {
          kicker: "P·01 · NÚCLEO",
          title: "Entitlements",
          body: "La capa comercial de las APIs: planes, cuotas, licencias de uso, precio congelado y medición auditable — para quien vende una API como producto.",
          points: [
            "Planes, permisos y cuotas por contrato",
            "Decisión allow/deny con fail-closed explícito",
            "Medición asíncrona, reproducible y facturable",
          ],
          href: "/products/entitlements",
          cta: "Ver producto",
        },
        {
          kicker: "P·02 · TELCO",
          title: "Plataforma de APIs",
          body: "En construcción: la plataforma que sirve las APIs CAMARA de un operador, con gateway, Entitlements y portal de developers bajo un solo estándar, desplegable en su propia infraestructura.",
          points: [
            "Commonalities CAMARA: ErrorInfo, x-correlator, versionado",
            "Claves atk_test_ / atk_live_ y OAuth2 con scopes",
            "Portal de developers con referencia pública",
          ],
          href: "/platform",
          cta: "Ver la plataforma",
        },
        {
          kicker: "P·03 · OPEN FINANCE",
          title: "Open Finance Bridge",
          body: "El mismo contrato aplicado a las finanzas abiertas, y el puente entre ambos mundos: las APIs antifraude de la red empaquetadas como producto para bancos y fintech.",
          points: [
            "API estándar + consentimiento + contrato",
            "Antifraude: verificación de número y cambio de SIM",
            "En diseño — sin promesas regulatorias",
          ],
          href: "/open-finance",
          cta: "Ver el enfoque",
        },
        {
          kicker: "P·04 · NÚMEROS · EN DISEÑO",
          title: "Number Intelligence",
          body: "Consulta de portabilidad, validación y limpieza de bases de números +56: a qué operador pertenece hoy un número, si es válido y de qué tipo, uno a uno o por lote. Cada consulta pasará por Entitlements.",
          points: [
            "Operador vigente e indicador de portabilidad",
            "Validación de formato, rango asignado y tipo",
            "Limpieza de bases por lote, con veredicto por fila",
          ],
          href: "https://mobiconnect.dev/apis/number-intelligence/",
          cta: "Ver el resumen técnico",
        },
        {
          kicker: "P·05 · SEGUNDA LÍNEA",
          title: "People",
          body: "Un sistema de desempeño diseñado desde cero para equipos híbridos: personas y agentes AI en el mismo registro, medidos por resultados, no por actividad.",
          points: [
            "Personas y agentes en un solo registro",
            "Los agentes proponen, los humanos deciden",
            "Scorecards anclados a resultados",
          ],
          href: "/products/people",
          cta: "Ver producto",
        },
      ],
    },
    group: {
      eyebrow: "El grupo",
      title: "Una operación real detrás de cada producto.",
      body: "Mobiconnect pertenece a Inversiones Bucardo Zúñiga: el grupo que construye y opera infraestructura de telecomunicaciones propia, con presencia en siete países y creciendo. Entitlements nació de una necesidad real de esa operación.",
      stats: [
        { value: "7", label: "países con presencia" },
        { value: "CAMARA", label: "superficie de APIs alineada (GSMA)" },
        { value: "Propia", label: "infraestructura soberana del grupo" },
      ],
      cta: { label: "Conocer el grupo", href: "/about" },
    },
  },
  entitlements: {
    meta: {
      title: "Entitlements — planes, cuotas y medición para APIs · Mobiconnect",
      description:
        "La capa comercial de las APIs: planes, cuotas, licencias de uso y medición para quien vende una API como producto. Entitlements v1 en staging sobre infraestructura soberana; documentación en mobiconnect.dev.",
    },
    hero: {
      eyebrow: "P·01 · Núcleo",
      title: "Entitlements",
      sub: "La capa comercial de las APIs: planes, cuotas, licencias de uso y medición para quien vende una API como producto: operadores, bancos, fintech y plataformas. API Ready por diseño: contrato documentado, razones de decisión en un enum cerrado y respuestas deterministas, pensadas para que también las consuma un agente AI. La especificación OpenAPI está en camino. Superficie alineada a CAMARA (GSMA).",
      ctaPrimary: { label: "Hablar de Entitlements", href: "/contact" },
      ctaSecondary: { label: "Ver la documentación", href: "https://mobiconnect.dev" },
      panelLabel: "Ficha de producto",
      panel: [
        { k: "PRODUCTO", v: "ENTITLEMENT SERVER" },
        { k: "CAPA", v: "COMERCIAL · APIS" },
        { k: "ESTÁNDAR", v: "CAMARA · GSMA" },
        { k: "INFRA", v: "SOBERANA · DEL GRUPO" },
      ],
    },
    features: {
      eyebrow: "Capacidades",
      title: "Todo lo que una API necesita para venderse.",
      lede: "Exponer un servicio es fácil. Venderlo — con planes, límites y contratos — exige una capa comercial explícita. Eso es Entitlements.",
      items: [
        {
          kicker: "C·01",
          title: "Catálogo de planes",
          body: "Catálogo comercial sobre la API: segmentos, unidades y matrices de planes por contrato, sin rediseñar el backend por cada cambio comercial.",
        },
        {
          kicker: "C·02",
          title: "Cuotas y medición",
          body: "Cada llamada cuenta. El consumo se mide contra el plan y los límites se aplican de forma consistente y auditable.",
        },
        {
          kicker: "C·03",
          title: "Licencias por contrato",
          body: "Qué puede usar cada tenant, definido en contrato y aplicado en runtime. Nada de accesos implícitos ni permisos heredados.",
        },
        {
          kicker: "C·04",
          title: "Pensado para agentes AI",
          body: "Cada decisión es determinista y legible por máquina: permiso, cuota restante, referencia de precio y razón del rechazo. Está pensada para que un agente AI la consuma sin salir del contrato.",
        },
        {
          kicker: "C·05",
          title: "Idempotencia y fail-closed",
          body: "La idempotencia controla los reintentos: ningún consumo se cobra dos veces. Si no se puede decidir, no se sirve: la incertidumbre no concede acceso.",
        },
        {
          kicker: "C·06",
          title: "Estándar CAMARA (GSMA)",
          body: "Superficie pública diseñada sobre las Commonalities de CAMARA: modelo de errores común, correlación de trazas, OAuth2/OpenID con scopes y versionado SemVer. Un solo dialecto para todo el ecosistema de APIs del operador.",
        },
      ],
    },
    how: {
      eyebrow: "Cómo funciona",
      title: "Del catálogo al cobro, en tres movimientos.",
      steps: [
        {
          n: "01",
          title: "Define el catálogo",
          body: "Planes, cuotas y licencias se declaran por contrato. El catálogo comercial deja de vivir en hojas de cálculo y pasa a ser parte del sistema.",
        },
        {
          n: "02",
          title: "Conecta tus APIs",
          body: "Cada solicitud se verifica contra el entitlement del tenant y se mide contra su plan, en tiempo real y de forma auditable.",
        },
        {
          n: "03",
          title: "Crece sin rediseñar",
          body: "Nuevos planes, mercados o capacidades son cambios de catálogo, no de arquitectura. Cada consumo se evalúa contra ese contrato explícito.",
        },
      ],
    },
    code: {
      filename: "entitlement.json — ejemplo ilustrativo",
      code: `{
  "tenant": "banco-demo",
  "plan": "antifraude-m",
  "entitlements": {
    "number-verification:verify": { "quota": "250000/mes", "used": 184203 },
    "sim-swap:check":             { "quota": "120000/mes", "used": 91412 }
  },
  "licensed_features": ["reportes-auditoria"]
}`,
      note: "Ejemplo ilustrativo del modelo de datos, no una respuesta real de la API.",
    },
    faq: {
      eyebrow: "Preguntas",
      title: "Lo que suelen preguntarnos.",
      items: [
        {
          q: "¿Qué es exactamente un entitlement server?",
          a: "La capa que decide qué puede consumir cada cliente de una API, en qué cantidad y bajo qué plan. Es la diferencia entre exponer un servicio y venderlo como producto. Para un agente AI, además, es lo que convierte cada llamada en una decisión explícita sobre la que puede actuar.",
        },
        {
          q: "¿Para quién está pensado?",
          a: "Operadores, bancos, fintech y plataformas que venden APIs como producto y necesitan control comercial fino: planes, cuotas, licencias y medición consistentes.",
        },
        {
          q: "¿En qué estado está?",
          a: "Entitlements v1 corre en staging sobre la infraestructura soberana del grupo, con su documentación pública en mobiconnect.dev. Staging no es producción: la disponibilidad en producción se anuncia cuando esté habilitada.",
        },
        {
          q: "¿Cómo se integra?",
          a: "Como un servicio en la ruta de la API: verificación y medición por llamada, con contratos explícitos. No requiere adoptar el resto de la plataforma.",
        },
        {
          q: "¿Qué es CAMARA y por qué importa?",
          a: "CAMARA es el proyecto de código abierto de la Linux Foundation, con apoyo de GSMA, que estandariza las APIs de red: errores, seguridad, versionado y semántica comunes para verificación de números, SIM Swap, calidad de red y más. Seguirlo permite que un partner u otro operador integre nuestras APIs sin aprender un dialecto propietario.",
        },
        {
          q: "¿Quién está detrás?",
          a: "Mobiconnect, la casa de software de Inversiones Bucardo Zúñiga: un grupo que construye y opera infraestructura de telecomunicaciones propia en siete países. Corremos lo que vendemos.",
        },
      ],
    },
  },
  people: {
    meta: {
      title: "People — desempeño para equipos híbridos · Mobiconnect",
      description:
        "El sistema de desempeño para equipos híbridos: personas y agentes AI en el mismo registro, medidos por resultados y no por actividad. Los agentes proponen, los humanos deciden.",
    },
    hero: {
      eyebrow: "P·05 · Segunda línea",
      title: "People",
      sub: "Un sistema de desempeño diseñado desde cero para equipos híbridos: personas y agentes AI en el mismo registro, con reglas claras: se miden resultados, no actividad.",
      ctaPrimary: { label: "Hablar de People", href: "/contact" },
      ctaSecondary: { label: "Ver Entitlements", href: "/products/entitlements" },
      panelLabel: "Ficha de producto",
      panel: [
        { k: "PRODUCTO", v: "DESEMPEÑO DE EQUIPOS" },
        { k: "EQUIPOS", v: "PERSONAS + AGENTES AI" },
        { k: "MEDIDA", v: "RESULTADOS, NO ACTIVIDAD" },
        { k: "REGLA", v: "AGENTES PROPONEN · HUMANOS DECIDEN" },
      ],
    },
    features: {
      eyebrow: "Capacidades",
      title: "Un registro para todo el equipo — humano o digital.",
      lede: "Los equipos ya son híbridos; los sistemas que los miden, no. People trata a personas y agentes AI con la misma disciplina laboral.",
      items: [
        {
          kicker: "C·01",
          title: "Registro unificado",
          body: "Personas y trabajadores digitales (agentes AI) en un solo sistema, con identidad, rol y responsabilidades explícitas.",
        },
        {
          kicker: "C·02",
          title: "Los agentes proponen, los humanos deciden",
          body: "La cadena de decisión queda registrada: cada propuesta de un agente lleva contexto y un humano responsable detrás. Automatización con nombre y apellido.",
        },
        {
          kicker: "C·03",
          title: "Resultados, no actividad",
          body: "Scorecards anclados a resultados definidos por rol. La actividad es señal; el resultado es la medida.",
        },
        {
          kicker: "C·04",
          title: "Scorecards por rol",
          body: "Pesos y criterios explícitos por rol, revisables y versionados. Nada de cajas negras de calificación.",
        },
        {
          kicker: "C·05",
          title: "Señales conectadas",
          body: "La evaluación se alimenta del trabajo real — sistemas, repositorios, registros operativos — no del autodiagnóstico.",
        },
        {
          kicker: "C·06",
          title: "Revisiones con evidencia",
          body: "Cada ciclo cierra con evidencia trazable: qué se midió, con qué peso y qué se decidió.",
        },
      ],
    },
    how: {
      eyebrow: "Cómo funciona",
      title: "Medir equipos híbridos, en tres movimientos.",
      steps: [
        {
          n: "01",
          title: "Define resultados",
          body: "Por cada rol — humano o agente — se declaran resultados y pesos. Sin resultados definidos no hay scorecard.",
        },
        {
          n: "02",
          title: "Conecta las señales",
          body: "El sistema se alimenta del trabajo real: sistemas internos, código y registros operativos, no de formularios de autodiagnóstico.",
        },
        {
          n: "03",
          title: "Revisa y decide",
          body: "Ciclos de revisión con scorecards y evidencia. Los humanos deciden; el sistema recuerda.",
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas",
      title: "Lo que suelen preguntarnos.",
      items: [
        {
          q: "¿Se puede evaluar un agente AI como a un empleado?",
          a: "Con disciplina laboral, sí: resultados definidos por rol, señales de trabajo real y revisión humana.",
        },
        {
          q: "¿Reemplaza al área de personas?",
          a: "No. Ordena la conversación: el área de personas define los criterios y decide; People mide, recuerda y presenta la evidencia.",
        },
        {
          q: "¿Qué significa “equipo híbrido”?",
          a: "Un equipo donde personas y agentes AI comparten responsabilidades reales. People los registra a ambos como trabajadores: con rol, resultados y rendición de cuentas.",
        },
        {
          q: "¿En qué estado está?",
          a: "Producto del grupo en adopción interna; se prepara en versión multi-tenant para terceros.",
        },
        {
          q: "¿De dónde salió?",
          a: "De la práctica: el grupo opera flotas de agentes junto a equipos humanos y necesitó medirlos con la misma disciplina. People es esa respuesta, convertida en producto.",
        },
      ],
    },
  },
  about: {
    meta: {
      title: "El grupo — Inversiones Bucardo Zúñiga · Mobiconnect",
      description:
        "Mobiconnect pertenece a Inversiones Bucardo Zúñiga: grupo chileno que construye y opera tecnología de telecomunicaciones sobre infraestructura soberana propia, con presencia en siete países.",
    },
    hero: {
      eyebrow: "El grupo detrás de Mobiconnect",
      title: "Corremos lo que vendemos.",
      sub: "Mobiconnect es la casa de software de Inversiones Bucardo Zúñiga, un grupo que construye y opera infraestructura de telecomunicaciones propia en siete países de las Américas. Sobre ese hierro, propio y no alquilado, autorizamos cada consumo de una API antes de que ocurra y lo medimos y valorizamos al servirlo.",
      ctaPrimary: { label: "Iniciar conversación", href: "/contact" },
      ctaSecondary: { label: "Ver productos", href: "/#productos" },
    },
    why: {
      eyebrow: "Por qué existimos",
      title: "El estándar resuelve la interfaz. El contrato sigue abierto.",
      body: [
        "La próxima década de telecomunicaciones y finanzas se trata de exponer: verificar un número, detectar un cambio de SIM, pedir calidad de red, compartir datos financieros con consentimiento. Todo eso se convierte en APIs estandarizadas — CAMARA y GSMA Open Gateway en telco; finanzas abiertas en banca.",
        "El estándar resuelve la interfaz, no el contrato comercial: quién puede consumir, cuánto, a qué precio, bajo qué plan y con qué medición auditable. Hoy esa capa se terceriza a agregadores globales o se programa a mano — y cada capa tercerizada es margen y control ajeno.",
        "Ahí está Mobiconnect: la capa donde una API de red o de finanzas abiertas se vuelve contrato. Un mismo patrón en dos industrias — API estándar, consentimiento, participantes, control de acceso y cobro — y el mismo comprador: los primeros casos de Open Gateway en Latinoamérica son antifraude para la banca. El banco que entra a finanzas abiertas es el mismo que consume APIs de red. La intersección es el mercado.",
      ],
      quote:
        "Lo que el open banking hizo con el dato financiero, las APIs abiertas de red lo hacen con la red. Falta la capa que convierte ese acceso en contrato. Esa capa es Mobiconnect.",
    },
    history: {
      eyebrow: "Historia",
      title: "De la conectividad a la inteligencia.",
      body: [
        "La historia empieza con conectividad. El grupo construyó su operación de telecomunicaciones en Chile y creció con ella: Ecuador, Perú, Nicaragua, Estados Unidos, México, y Colombia en apertura.",
        "Después vino la corrección de fondo: salir de la infraestructura ajena y volver a hierro propio. Hoy el grupo opera su plataforma sobre hardware soberano, y esa infraestructura es la condición de partida de todo lo demás.",
        "Mobiconnect es el siguiente paso: la capa de inteligencia del operador hecha producto. Nació dentro de la propia operación del grupo y hoy se abre al mercado — el núcleo comercial de APIs para telco y finanzas abiertas, con People como segunda línea.",
      ],
    },
    offer: {
      eyebrow: "La oferta",
      title: "Un núcleo comercial, dos industrias que exponen APIs.",
      items: [
        {
          kicker: "01 · Núcleo",
          title: "Entitlements",
          body: "Planes, cuotas, licencias de uso y medición para cualquier API que se venda como producto. Nació dentro de la operación del grupo.",
          href: "/products/entitlements",
          cta: "Ver producto",
        },
        {
          kicker: "02 · Telco",
          title: "Plataforma de APIs",
          body: "La superficie CAMARA (GSMA) del operador — verificación, SIM Swap, calidad de red — se expone bajo contrato comercial, no bajo conteo de llamadas. En construcción.",
          href: "/platform",
          cta: "Ver la plataforma",
        },
        {
          kicker: "03 · Finanzas abiertas",
          title: "Open Finance Bridge",
          body: "En diseño: el mismo control de contrato, aplicado al dato financiero compartido con consentimiento.",
          href: "/open-finance",
          cta: "Conocer la visión",
        },
        {
          kicker: "04 · Números",
          title: "Number Intelligence",
          body: "En diseño: consulta de portabilidad, validación y limpieza de bases de números +56, con el mismo contrato y la misma medición.",
          href: "https://mobiconnect.dev/apis/number-intelligence/",
          cta: "Ver el resumen técnico",
        },
        {
          kicker: "05 · Segunda línea",
          title: "People",
          body: "Desempeño para equipos híbridos de personas y agentes AI, medido por resultados. Complementa el núcleo; no lo es.",
          href: "/products/people",
          cta: "Ver producto",
        },
      ],
    },
    countries: {
      eyebrow: "Presencia",
      title: "Siete países, una disciplina.",
      list: [
        { name: "Chile", note: "Sede · Santiago" },
        { name: "Ecuador", note: "" },
        { name: "Perú", note: "" },
        { name: "Nicaragua", note: "" },
        { name: "Estados Unidos", note: "" },
        { name: "México", note: "" },
        { name: "Colombia", note: "En apertura" },
      ],
    },
    principles: {
      eyebrow: "Principios",
      title: "Cómo decidimos.",
      items: [
        {
          title: "Corremos lo que vendemos.",
          body: "Operamos la infraestructura sobre la que corre nuestro software; no revendemos la de otro.",
        },
        {
          title: "Medir es gobernar.",
          body: "Cada consumo se autoriza antes de ocurrir y se mide al servirse. El control no es un reporte posterior.",
        },
        {
          title: "El control no se renta.",
          body: "Hierro propio, contrato propio. La responsabilidad no se delega.",
        },
      ],
    },
  },
  contact: {
    meta: {
      title: "Contacto · Mobiconnect",
      description:
        "Conversaciones técnicas directas con quienes diseñan y operan Mobiconnect. Cuéntanos qué operas y qué quieres construir sobre ello.",
    },
    hero: {
      eyebrow: "Contacto",
      title: "Habla con quien construye.",
      sub: "Conversaciones técnicas directas, sin embudos ni intermediarios. Cuéntanos qué operas y qué quieres vender sobre ello.",
    },
    form: {
      name: "Nombre",
      org: "Organización",
      email: "Correo",
      topic: "Tema",
      topics: ["Entitlements", "Plataforma de APIs (Telco)", "Open Finance", "People", "Alianza", "Otro"],
      message: "Mensaje",
      messagePlaceholder:
        "Qué operas, qué vendes hoy y qué te falta para venderlo mejor…",
      submit: "Abrir borrador de correo",
      note: "Este formulario no envía datos a ningún servidor: compone un correo en tu propio cliente de correo. Nada se almacena.",
      direct: "O escribe directamente a",
    },
    // Deuda declarada: confirmar buzón definitivo con el CEO antes del deploy.
    email: "hola@mobiconnect.app",
  },
  notFound: {
    title: "404 — Página no encontrada · Mobiconnect",
    heading: "Ruta no encontrada.",
    body: "La página que buscas no existe o cambió de dirección.",
    cta: "Volver al inicio",
  },
};
