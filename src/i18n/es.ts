// ============================================================
// Mobiconnect — diccionario ES (primario).
// Toda la narrativa del sitio vive aquí: se refina sin tocar layout.
// Regla dura: cero datos inventados. Solo hechos verificables del
// charter y del brief (grupo, IDOs SUBTEL 114/260/427, 7 países).
// ============================================================

export const es = {
  a11y: {
    skip: "Saltar al contenido",
  },
  nav: {
    aria: "Navegación principal",
    menu: "Menú",
    entitlements: "Entitlements",
    people: "People",
    group: "Grupo",
    contact: "Contacto",
    langTo: "EN",
    langLabel: "Switch to English",
  },
  footer: {
    tagline:
      "Servicios de AI y high-tech para el operador soberano del grupo.",
    products: "Productos",
    company: "Compañía",
    legal:
      "© 2026 Mobiconnect — Inversiones Bucardo Zúñiga Limitada · Santiago de Chile",
  },
  shared: {
    cta: {
      eyebrow: "Contacto",
      title: "Hable con quien construye.",
      body: "Contacto fundador-led: conversaciones técnicas directas con quienes diseñan y operan la plataforma. Sin funnels ni intermediarios.",
      button: "Iniciar conversación",
    },
  },
  home: {
    meta: {
      title: "Mobiconnect — La capa de inteligencia del operador soberano",
      description:
        "Mobiconnect construye los servicios de AI y high-tech que rodean a Airtime Connect, el operador soberano del grupo: entitlements comerciales para APIs y People, el sistema de desempeño para equipos híbridos de personas y agentes AI.",
    },
    hero: {
      eyebrow: "Plataforma de AI y high-tech · Grupo Inversiones Bucardo Zúñiga",
      title: "La capa de inteligencia del operador soberano.",
      sub: "Mobiconnect diseña y opera los servicios que rodean a Airtime Connect, el operador del grupo: la capa comercial de las APIs — planes, cuotas y medición — y el sistema de desempeño para equipos híbridos de personas y agentes.",
      ctaPrimary: { label: "Conversar con el fundador", href: "/contact" },
      ctaSecondary: { label: "Ver los productos", href: "/#productos" },
      panelLabel: "Ficha del sistema",
      panel: [
        { k: "GRUPO", v: "INVERSIONES BUCARDO ZÚÑIGA" },
        { k: "OPERADOR", v: "AIRTIME CONNECT · TELCO OS" },
        { k: "LICENCIA", v: "SUBTEL · IDO 114 / 260 / 427" },
        { k: "PRESENCIA", v: "7 PAÍSES · CL EC PE NI US MX" },
        { k: "PRODUCTOS", v: "ENTITLEMENTS · PEOPLE" },
      ],
    },
    thesis: {
      eyebrow: "Tesis",
      title: "El margen y el control no se regalan: se construyen.",
      body: [
        "El grupo construyó su operador — licencia SUBTEL en Chile, presencia en siete países — y recuperó su infraestructura sobre hardware propio. Ese control no se delega: es la condición de partida.",
        "Mobiconnect existe para construir encima. Cada servicio — entitlements, desempeño, identidad — convierte esa infraestructura soberana en producto vendible, con la disciplina de ingeniería de un carrier y el ritmo de una casa de software.",
      ],
    },
    products: {
      eyebrow: "Productos",
      title: "Dos productos, una misma disciplina.",
      lede: "Ambos nacen de necesidades reales del operador y se construyen sobre infraestructura propia: uno convierte las APIs en negocio; el otro, los equipos híbridos en sistemas medibles.",
      items: [
        {
          kicker: "P·01",
          title: "Entitlements",
          body: "La capa comercial de las APIs: planes, cuotas, licencias y medición para operadores y plataformas que venden conectividad como producto.",
          points: [
            "Planes, SKUs y cuotas por contrato",
            "Medición y aplicación en tiempo real",
            "Trials, upgrades y feature flags",
          ],
          href: "/products/entitlements",
          cta: "Ver producto",
        },
        {
          kicker: "P·02",
          title: "People",
          body: "Un sistema de RR.HH. diseñado desde cero para equipos híbridos: personas y agentes AI en el mismo registro, medidos por resultados — no por actividad.",
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
      title: "Un operador real detrás de cada producto.",
      body: "Mobiconnect pertenece a Inversiones Bucardo Zúñiga: el grupo que construyó y opera un operador de telecomunicaciones licenciado en Chile, con presencia en siete países y creciendo. Cada producto nace de una necesidad real del operador — y se endurece ahí antes de salir al mercado.",
      stats: [
        { value: "7", label: "países con presencia" },
        { value: "114·260·427", label: "IDOs · licencia SUBTEL, Chile" },
        { value: "Propia", label: "infraestructura soberana del grupo" },
      ],
      cta: { label: "Conocer el grupo", href: "/about" },
    },
  },
  entitlements: {
    meta: {
      title: "Entitlements — planes, cuotas y medición para APIs · Mobiconnect",
      description:
        "La capa comercial de las APIs carrier-grade: planes, cuotas, licencias y medición para operadores y plataformas que venden conectividad como producto. En construcción sobre infraestructura soberana.",
    },
    hero: {
      eyebrow: "Producto · 01",
      title: "Entitlements",
      sub: "La capa comercial de las APIs: planes, cuotas, licencias y medición para quien vende conectividad como producto. Superficie alineada a CAMARA (GSMA) y diseñada para operadores con estándares carrier-grade.",
      ctaPrimary: { label: "Hablar de Entitlements", href: "/contact" },
      ctaSecondary: { label: "Ver People", href: "/products/people" },
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
          title: "Planes y SKUs",
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
          title: "Feature flags",
          body: "Activa funcionalidad por plan, por tenant o por mercado, sin desplegar código nuevo ni coordinar ventanas de mantenimiento.",
        },
        {
          kicker: "C·05",
          title: "Trials y upgrades",
          body: "Pruebas, escalas de plan y downgrades como operaciones de primera clase — no como excepciones que el equipo de ingeniería teme.",
        },
        {
          kicker: "C·06",
          title: "Estándar CAMARA (GSMA)",
          body: "Superficie pública conforme a las Commonalities de CAMARA: modelo de errores común, correlación de trazas, OAuth2/OpenID con scopes y versionado SemVer. Un solo dialecto para todo el ecosistema de APIs del operador.",
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
          body: "Nuevos planes, mercados o SKUs son cambios de catálogo, no de arquitectura. El negocio cambia a la velocidad del contrato.",
        },
      ],
    },
    code: {
      filename: "entitlement.json — ejemplo ilustrativo",
      code: `{
  "tenant": "operador-demo",
  "plan": "connectivity-m",
  "entitlements": {
    "api.sms.send":   { "quota": "250000/mes", "used": 184203 },
    "api.did.reserve": { "quota": "1200",       "used": 914 }
  },
  "licensed_features": ["rutas-premium", "reportes-auditoria"]
}`,
      note: "Ejemplo ilustrativo del modelo de datos, no una respuesta real de la API.",
    },
    faq: {
      eyebrow: "Preguntas",
      title: "Lo que suelen preguntarnos.",
      items: [
        {
          q: "¿Qué es exactamente un entitlement server?",
          a: "La capa que decide qué puede consumir cada cliente de una API, en qué cantidad y bajo qué plan. Es la diferencia entre exponer un servicio y venderlo como producto.",
        },
        {
          q: "¿Para quién está pensado?",
          a: "Operadores y plataformas que venden conectividad o APIs como producto y necesitan control comercial fino: planes, cuotas, licencias y medición consistentes.",
        },
        {
          q: "¿En qué estado está?",
          a: "En construcción sobre la infraestructura soberana del grupo. El diseño sigue la disciplina de ingeniería del operador y se valida primero en uso real.",
        },
        {
          q: "¿Cómo se integra?",
          a: "Como un servicio en la ruta de la API: verificación y medición por llamada, con contratos explícitos. No requiere adoptar el resto de la plataforma.",
        },
        {
          q: "¿Qué es CAMARA y por qué importa?",
          a: "CAMARA es la iniciativa de GSMA que estandariza las APIs telco — errores, seguridad, versionado y semántica comunes para SMS, verificación de números, SIM Swap y más. Cumplirla significa que un partner o MNA peer integra nuestras APIs sin aprender un dialecto propietario.",
        },
        {
          q: "¿Quién está detrás?",
          a: "Mobiconnect, la plataforma de AI y high-tech de Inversiones Bucardo Zúñiga — el mismo grupo que construye y opera Airtime Connect.",
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
      eyebrow: "Producto · 02",
      title: "People",
      sub: "Un sistema de RR.HH. diseñado desde cero para equipos híbridos: personas y agentes AI en el mismo registro, con reglas claras — se mide resultados, no actividad.",
      ctaPrimary: { label: "Hablar de People", href: "/contact" },
      ctaSecondary: { label: "Ver Entitlements", href: "/products/entitlements" },
      panelLabel: "Ficha de producto",
      panel: [
        { k: "PRODUCTO", v: "WORKFORCE OS" },
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
          a: "Con disciplina laboral, sí: resultados definidos por rol, señales de trabajo real y revisión humana. Casi nadie lo hace hoy con ese rigor — ahí está el nicho.",
        },
        {
          q: "¿Reemplaza a RR.HH.?",
          a: "No. Ordena la conversación: RR.HH. define los criterios y decide; People mide, recuerda y presenta la evidencia.",
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
        "Mobiconnect pertenece a Inversiones Bucardo Zúñiga: grupo chileno que construye y opera un operador de telecomunicaciones licenciado en Chile, con presencia en siete países e infraestructura soberana propia.",
    },
    hero: {
      eyebrow: "Inversiones Bucardo Zúñiga",
      title: "Un operador real, una casa de software.",
      sub: "Mobiconnect pertenece a Inversiones Bucardo Zúñiga: grupo chileno que construye y opera infraestructura de telecomunicaciones y servicios digitales en siete países.",
      ctaPrimary: { label: "Iniciar conversación", href: "/contact" },
      ctaSecondary: { label: "Ver productos", href: "/#productos" },
    },
    history: {
      eyebrow: "Historia",
      title: "De la conectividad a la inteligencia.",
      body: [
        "La historia empieza con conectividad. El grupo construyó un operador de telecomunicaciones — licenciado por SUBTEL en Chile — y creció con él: Ecuador, Perú, Nicaragua, Estados Unidos, México, y Colombia en apertura.",
        "Después vino la corrección de fondo: salir de la infraestructura ajena y volver a hierro propio. Hoy el grupo opera su plataforma sobre hardware soberano, y esa infraestructura es la condición de partida de todo lo demás.",
        "Mobiconnect es el siguiente paso: la capa de software, identidad e inteligencia que convierte esa infraestructura en productos — para el propio operador primero, para el mercado después.",
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
          title: "Soberanía antes que comodidad",
          body: "Infraestructura propia, código propio, decisiones propias. Lo que se puede perder por capricho de un proveedor no se construye encima.",
        },
        {
          title: "Resultados, no teatro",
          body: "Se mide lo que se define. Si un número no es verificable, no se publica — ni internamente ni afuera.",
        },
        {
          title: "Los agentes proponen, los humanos deciden",
          body: "Automatización con responsabilidad nombrada. Toda decisión relevante tiene un humano detrás.",
        },
        {
          title: "Craft anti-MVP",
          body: "Nada “de kinder”. Profundidad de consultoría, ingeniería de carrier y acabado real en cada entregable.",
        },
      ],
    },
  },
  contact: {
    meta: {
      title: "Contacto · Mobiconnect",
      description:
        "Contacto fundador-led: conversaciones técnicas directas con quienes diseñan y operan Mobiconnect. Cuéntanos qué operas y qué quieres construir sobre ello.",
    },
    hero: {
      eyebrow: "Contacto",
      title: "Hable con quien construye.",
      sub: "Conversaciones técnicas directas, sin funnels ni intermediarios. Cuéntanos qué operas y qué quieres vender sobre ello.",
    },
    form: {
      name: "Nombre",
      org: "Organización",
      email: "Correo",
      topic: "Tema",
      topics: ["Entitlements", "People", "Alianza", "Otro"],
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
