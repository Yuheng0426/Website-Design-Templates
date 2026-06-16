// Axyronis Studio
// Interaction script: handles smooth anchor navigation, the language switcher, and the demo inquiry form.

// Translation dictionary: add new languages or edit copy here.
const translations = {
  en: {
    languageName: "English",
    "meta.title": "Digital Web Studio - Axyronis Studio",
    "meta.description": "Axyronis Studio helps brands build sharper websites, clearer messaging, and stronger digital experiences.",
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.strategy": "Strategy",
    "nav.growth": "Growth",
    "nav.cta": "Start a Project",
    "hero.title": "Websites that turn attention into trust, action, and growth",
    "hero.lead": "Axyronis Studio designs focused digital experiences for creators, startups, and growing brands. We combine clear messaging, elegant visual systems, and practical conversion strategy so every page has a reason to exist and a path for visitors to follow.",
    "hero.primaryCta": "Start a Project",
    "hero.secondaryCta": "See Our Approach",
    "hero.visualLabel": "Axyronis Studio workspace preview",
    "hero.note": "Clarity before decoration",
    "services.eyebrow": "Services",
    "services.title": "What a stronger website should do for your brand",
    "services.description": "A good website is more than a place to publish information. It should guide attention, build confidence, and make the next step obvious.",
    "services.card1.title": "Make the offer clear",
    "services.card1.text": "Visitors should understand who you help, what you provide, and why it matters within the first few seconds.",
    "services.card2.title": "Create visual credibility",
    "services.card2.text": "Consistent spacing, typography, color, and imagery make the site feel reliable before a visitor reads every detail.",
    "services.card3.title": "Guide meaningful action",
    "services.card3.text": "Every page should support a clear decision, whether that means booking a call, reading a case study, or sending an inquiry.",
    "strategy.eyebrow": "Strategy",
    "strategy.title": "Attraction starts with relevance, not noise",
    "strategy.description": "The most effective sites speak to a specific audience, answer the right questions, and remove friction from the visitor journey. Axyronis Studio shapes each section around message clarity, proof, rhythm, and action so the experience feels intentional from top to bottom.",
    "strategy.point1": "Lead with a concrete promise instead of vague slogans",
    "strategy.point2": "Use proof, examples, and outcomes to support trust",
    "strategy.point3": "Keep navigation simple so visitors always know where to go next",
    "strategy.metric1.value": "5 sec",
    "strategy.metric1.label": "To explain the core value",
    "strategy.metric2.value": "1 path",
    "strategy.metric2.label": "For the primary user action",
    "growth.eyebrow": "Growth",
    "growth.title": "How to keep improving after launch",
    "growth.description": "A website becomes stronger when it is reviewed, measured, and refined with real user behavior in mind.",
    "growth.card1.kicker": "Focus",
    "growth.card1.title": "Sharpen the message",
    "growth.card1.text": "Review headlines and section copy often. Strong pages remove generic language and make the value easy to repeat.",
    "growth.card2.kicker": "Trust",
    "growth.card2.title": "Add stronger proof",
    "growth.card2.text": "Use testimonials, results, process notes, screenshots, and project stories to make claims easier to believe.",
    "growth.card3.kicker": "Flow",
    "growth.card3.title": "Reduce friction",
    "growth.card3.text": "Shorten forms, simplify choices, clarify buttons, and make sure the most important action is always visible.",
    "contact.eyebrow": "Contact",
    "contact.title": "Bring a sharper digital presence to life",
    "contact.description": "Share what you are building, what your audience needs, and what the website should help people do. Axyronis Studio uses those details to shape a focused path from first impression to meaningful action.",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "hello@example.com",
    "contact.form.goal": "Project Goal",
    "contact.form.goalPlaceholder": "Tell us what the website needs to achieve",
    "contact.form.submit": "Request a Studio Review",
    "contact.form.success": "Thank you. This demo form is ready to connect to a real project workflow.",
    "footer.description": "Digital strategy, web design, and conversion-focused site systems for ambitious brands.",
    "footer.copyright": "© 2026 Axyronis Studio. Built for clear digital growth.",
    "principles.eyebrow": "Principles",
    "principles.title": "How Axyronis Studio builds better digital experiences",
    "principles.description": "Strong websites are shaped by clarity, confidence, and continuous improvement.",
    "principles.card1.title": "Design With Purpose",
    "principles.card1.point1.label": "Clear positioning:",
    "principles.card1.point1.text": "The audience should know what you offer and why it matters without guessing.",
    "principles.card1.point2.label": "Useful structure:",
    "principles.card1.point2.text": "Every section should answer a visitor question or move them closer to action.",
    "principles.card1.point3.label": "Consistent identity:",
    "principles.card1.point3.text": "Typography, spacing, imagery, and color should support one recognizable brand feeling.",
    "principles.card1.point4.label": "Measured decisions:",
    "principles.card1.point4.text": "Improvements should come from feedback, analytics, and real user behavior.",
    "principles.card2.title": "Improve What Matters",
    "principles.card2.point1": "Clarify the primary audience before adding new sections.",
    "principles.card2.point2": "Make the main call to action easy to find on every important page.",
    "principles.card2.point3": "Replace generic claims with proof, examples, and specific outcomes.",
    "principles.card2.point4": "Review mobile layouts carefully because many first impressions happen on small screens."
  },
  zh: {
    languageName: "中文",
    "meta.title": "数字网站工作室 - Axyronis Studio",
    "meta.description": "Axyronis Studio 帮助品牌打造更清晰的信息、更有吸引力的网站和更强的数字体验。",
    "nav.home": "首页",
    "nav.services": "服务",
    "nav.strategy": "策略",
    "nav.growth": "增长",
    "nav.cta": "启动项目",
    "hero.title": "把注意力转化为信任、行动和增长的网站",
    "hero.lead": "Axyronis Studio 为创作者、初创团队和成长型品牌设计专注的数字体验。我们结合清晰的信息、优雅的视觉系统和实用的转化策略，让每个页面都有存在的理由，也让访客知道下一步该做什么。",
    "hero.primaryCta": "启动项目",
    "hero.secondaryCta": "查看方法",
    "hero.visualLabel": "Axyronis Studio 工作空间预览",
    "hero.note": "先清晰，再装饰",
    "services.eyebrow": "服务",
    "services.title": "更强的网站应该为品牌做到什么",
    "services.description": "优秀的网站不只是发布信息的地方。它应该引导注意力、建立信心，并让下一步行动变得清楚。",
    "services.card1.title": "让产品价值清楚",
    "services.card1.text": "访客应该在几秒内明白你帮助谁、提供什么，以及为什么这件事重要。",
    "services.card2.title": "建立视觉可信度",
    "services.card2.text": "一致的间距、字体、颜色和图片，会在访客阅读细节前先建立可靠感。",
    "services.card3.title": "引导有意义的行动",
    "services.card3.text": "每个页面都应该支持一个清晰决定，比如预约沟通、阅读案例或发送咨询。",
    "strategy.eyebrow": "策略",
    "strategy.title": "吸引力来自相关性，而不是噪音",
    "strategy.description": "最有效的网站会面向明确受众，回答正确的问题，并减少访客路径中的阻力。Axyronis Studio 围绕信息清晰、信任证明、阅读节奏和行动引导设计每个区块，让体验从上到下都显得有意图。",
    "strategy.point1": "用具体承诺开场，而不是空泛口号",
    "strategy.point2": "用证明、示例和结果支持信任",
    "strategy.point3": "保持导航简单，让访客始终知道下一步去哪",
    "strategy.metric1.value": "5 秒",
    "strategy.metric1.label": "讲清核心价值",
    "strategy.metric2.value": "1 条路径",
    "strategy.metric2.label": "指向主要用户行动",
    "growth.eyebrow": "增长",
    "growth.title": "上线后如何持续完善",
    "growth.description": "当网站根据真实用户行为不断审视、衡量和优化时，它会变得更强。",
    "growth.card1.kicker": "聚焦",
    "growth.card1.title": "打磨信息表达",
    "growth.card1.text": "定期检查标题和页面文案。强页面会去掉泛泛而谈的语言，让价值更容易被记住。",
    "growth.card2.kicker": "信任",
    "growth.card2.title": "加入更强证明",
    "growth.card2.text": "使用评价、结果、流程说明、截图和项目故事，让你的主张更容易被相信。",
    "growth.card3.kicker": "流程",
    "growth.card3.title": "减少行动阻力",
    "growth.card3.text": "缩短表单、简化选择、明确按钮，并确保最重要的行动始终可见。",
    "contact.eyebrow": "联系",
    "contact.title": "让更清晰的数字形象落地",
    "contact.description": "告诉我们你正在构建什么、你的受众需要什么，以及网站应该帮助人们完成什么。Axyronis Studio 会用这些信息规划从第一印象到有效行动的清晰路径。",
    "contact.form.name": "姓名",
    "contact.form.namePlaceholder": "你的姓名",
    "contact.form.email": "邮箱",
    "contact.form.emailPlaceholder": "hello@example.com",
    "contact.form.goal": "项目目标",
    "contact.form.goalPlaceholder": "告诉我们网站需要达成什么目标",
    "contact.form.submit": "请求工作室评估",
    "contact.form.success": "谢谢。这个演示表单已经可以连接到真实项目流程。",
    "footer.description": "为有野心的品牌提供数字策略、网站设计和转化导向的网站系统。",
    "footer.copyright": "© 2026 Axyronis Studio。为清晰的数字增长而构建。",
    "principles.eyebrow": "原则",
    "principles.title": "Axyronis Studio 如何打造更好的数字体验",
    "principles.description": "强大的网站由清晰、信心和持续改进塑造。",
    "principles.card1.title": "带着目的设计",
    "principles.card1.point1.label": "清晰定位：",
    "principles.card1.point1.text": "受众不需要猜测，就应该知道你提供什么以及为什么重要。",
    "principles.card1.point2.label": "有用结构：",
    "principles.card1.point2.text": "每个区块都应该回答访客的问题，或推动他们更接近行动。",
    "principles.card1.point3.label": "一致识别：",
    "principles.card1.point3.text": "字体、间距、图像和颜色应该共同支持一种可识别的品牌感受。",
    "principles.card1.point4.label": "可衡量决策：",
    "principles.card1.point4.text": "优化应该来自反馈、数据分析和真实用户行为。",
    "principles.card2.title": "优化真正重要的事",
    "principles.card2.point1": "在增加新区块前，先明确主要受众。",
    "principles.card2.point2": "让主要行动按钮在每个重要页面都容易找到。",
    "principles.card2.point3": "用证明、示例和具体结果替代泛泛的主张。",
    "principles.card2.point4": "认真检查移动端布局，因为很多第一印象发生在小屏幕上。"
  },
  fr: {
    languageName: "Français",
    "meta.title": "Studio Web Digital - Axyronis Studio",
    "meta.description": "Axyronis Studio aide les marques à créer des sites plus précis, des messages plus clairs et des expériences numériques plus fortes.",
    "nav.home": "Accueil",
    "nav.services": "Services",
    "nav.strategy": "Stratégie",
    "nav.growth": "Croissance",
    "nav.cta": "Lancer un projet",
    "hero.title": "Des sites qui transforment l’attention en confiance, action et croissance",
    "hero.lead": "Axyronis Studio conçoit des expériences numériques ciblées pour les créateurs, les startups et les marques en croissance. Nous associons message clair, système visuel élégant et stratégie de conversion pratique afin que chaque page ait une raison d’exister et un chemin à suivre.",
    "hero.primaryCta": "Lancer un projet",
    "hero.secondaryCta": "Voir notre approche",
    "hero.visualLabel": "Aperçu de l’espace de travail Axyronis Studio",
    "hero.note": "La clarté avant la décoration",
    "services.eyebrow": "Services",
    "services.title": "Ce qu’un site plus fort doit apporter à votre marque",
    "services.description": "Un bon site ne sert pas seulement à publier des informations. Il doit guider l’attention, renforcer la confiance et rendre l’étape suivante évidente.",
    "services.card1.title": "Clarifier l’offre",
    "services.card1.text": "Les visiteurs doivent comprendre qui vous aidez, ce que vous proposez et pourquoi cela compte en quelques secondes.",
    "services.card2.title": "Créer une crédibilité visuelle",
    "services.card2.text": "Des espacements, une typographie, des couleurs et des images cohérents rendent le site fiable avant même la lecture détaillée.",
    "services.card3.title": "Guider une action utile",
    "services.card3.text": "Chaque page doit soutenir une décision claire, comme réserver un appel, lire une étude de cas ou envoyer une demande.",
    "strategy.eyebrow": "Stratégie",
    "strategy.title": "L’attraction commence par la pertinence, pas par le bruit",
    "strategy.description": "Les sites les plus efficaces parlent à un public précis, répondent aux bonnes questions et réduisent les frictions du parcours visiteur. Axyronis Studio construit chaque section autour de la clarté, de la preuve, du rythme et de l’action.",
    "strategy.point1": "Commencer par une promesse concrète plutôt qu’un slogan vague",
    "strategy.point2": "Utiliser preuves, exemples et résultats pour soutenir la confiance",
    "strategy.point3": "Garder une navigation simple pour que le visiteur sache toujours où aller",
    "strategy.metric1.value": "5 s",
    "strategy.metric1.label": "Pour expliquer la valeur centrale",
    "strategy.metric2.value": "1 chemin",
    "strategy.metric2.label": "Pour l’action principale de l’utilisateur",
    "growth.eyebrow": "Croissance",
    "growth.title": "Comment continuer à améliorer après le lancement",
    "growth.description": "Un site devient plus fort lorsqu’il est revu, mesuré et affiné à partir du comportement réel des utilisateurs.",
    "growth.card1.kicker": "Focus",
    "growth.card1.title": "Affiner le message",
    "growth.card1.text": "Revoyez régulièrement les titres et les textes. Les pages fortes éliminent le langage générique et rendent la valeur facile à retenir.",
    "growth.card2.kicker": "Confiance",
    "growth.card2.title": "Ajouter des preuves plus fortes",
    "growth.card2.text": "Utilisez témoignages, résultats, notes de processus, captures et récits de projets pour rendre vos affirmations crédibles.",
    "growth.card3.kicker": "Flux",
    "growth.card3.title": "Réduire les frictions",
    "growth.card3.text": "Raccourcissez les formulaires, simplifiez les choix, clarifiez les boutons et gardez l’action principale visible.",
    "contact.eyebrow": "Contact",
    "contact.title": "Donnez vie à une présence numérique plus nette",
    "contact.description": "Partagez ce que vous construisez, ce dont votre audience a besoin et ce que le site doit aider les gens à faire. Axyronis Studio utilise ces détails pour créer un chemin clair de la première impression à l’action.",
    "contact.form.name": "Nom",
    "contact.form.namePlaceholder": "Votre nom",
    "contact.form.email": "E-mail",
    "contact.form.emailPlaceholder": "hello@example.com",
    "contact.form.goal": "Objectif du projet",
    "contact.form.goalPlaceholder": "Dites-nous ce que le site doit accomplir",
    "contact.form.submit": "Demander une revue studio",
    "contact.form.success": "Merci. Ce formulaire de démonstration est prêt à être connecté à un vrai flux de projet.",
    "footer.description": "Stratégie numérique, design web et systèmes de sites orientés conversion pour les marques ambitieuses.",
    "footer.copyright": "© 2026 Axyronis Studio. Conçu pour une croissance numérique claire.",
    "principles.eyebrow": "Principes",
    "principles.title": "Comment Axyronis Studio crée de meilleures expériences numériques",
    "principles.description": "Les sites puissants naissent de la clarté, de la confiance et de l’amélioration continue.",
    "principles.card1.title": "Concevoir avec intention",
    "principles.card1.point1.label": "Positionnement clair :",
    "principles.card1.point1.text": "Le public doit savoir ce que vous proposez et pourquoi cela compte sans deviner.",
    "principles.card1.point2.label": "Structure utile :",
    "principles.card1.point2.text": "Chaque section doit répondre à une question ou rapprocher le visiteur de l’action.",
    "principles.card1.point3.label": "Identité cohérente :",
    "principles.card1.point3.text": "Typographie, espacements, images et couleurs doivent soutenir une sensation de marque reconnaissable.",
    "principles.card1.point4.label": "Décisions mesurées :",
    "principles.card1.point4.text": "Les améliorations doivent venir des retours, des données et du comportement réel des utilisateurs.",
    "principles.card2.title": "Améliorer ce qui compte",
    "principles.card2.point1": "Clarifiez le public principal avant d’ajouter de nouvelles sections.",
    "principles.card2.point2": "Rendez l’appel à l’action principal facile à trouver sur chaque page importante.",
    "principles.card2.point3": "Remplacez les affirmations génériques par des preuves, exemples et résultats précis.",
    "principles.card2.point4": "Vérifiez soigneusement les mises en page mobiles, car beaucoup de premières impressions arrivent sur petit écran."
  },
  es: {
    languageName: "Español",
    "meta.title": "Estudio Web Digital - Axyronis Studio",
    "meta.description": "Axyronis Studio ayuda a las marcas a crear sitios más precisos, mensajes más claros y experiencias digitales más fuertes.",
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.strategy": "Estrategia",
    "nav.growth": "Crecimiento",
    "nav.cta": "Iniciar proyecto",
    "hero.title": "Sitios web que convierten la atención en confianza, acción y crecimiento",
    "hero.lead": "Axyronis Studio diseña experiencias digitales enfocadas para creadores, startups y marcas en crecimiento. Combinamos mensajes claros, sistemas visuales elegantes y estrategia de conversión práctica para que cada página tenga una razón de existir y un camino para seguir.",
    "hero.primaryCta": "Iniciar proyecto",
    "hero.secondaryCta": "Ver nuestro enfoque",
    "hero.visualLabel": "Vista previa del espacio de trabajo de Axyronis Studio",
    "hero.note": "Claridad antes que decoración",
    "services.eyebrow": "Servicios",
    "services.title": "Qué debe hacer un sitio más fuerte por tu marca",
    "services.description": "Un buen sitio web es más que un lugar para publicar información. Debe guiar la atención, generar confianza y hacer evidente el siguiente paso.",
    "services.card1.title": "Aclarar la oferta",
    "services.card1.text": "Los visitantes deben entender a quién ayudas, qué ofreces y por qué importa en los primeros segundos.",
    "services.card2.title": "Crear credibilidad visual",
    "services.card2.text": "El espaciado, la tipografía, el color y las imágenes consistentes hacen que el sitio se sienta confiable antes de leer cada detalle.",
    "services.card3.title": "Guiar una acción significativa",
    "services.card3.text": "Cada página debe apoyar una decisión clara, como reservar una llamada, leer un caso o enviar una consulta.",
    "strategy.eyebrow": "Estrategia",
    "strategy.title": "La atracción empieza con relevancia, no con ruido",
    "strategy.description": "Los sitios más eficaces hablan a una audiencia específica, responden las preguntas correctas y reducen la fricción del recorrido. Axyronis Studio estructura cada sección alrededor de claridad, prueba, ritmo y acción.",
    "strategy.point1": "Empieza con una promesa concreta en lugar de un eslogan vago",
    "strategy.point2": "Usa pruebas, ejemplos y resultados para reforzar la confianza",
    "strategy.point3": "Mantén la navegación simple para que el visitante siempre sepa a dónde ir",
    "strategy.metric1.value": "5 s",
    "strategy.metric1.label": "Para explicar el valor central",
    "strategy.metric2.value": "1 ruta",
    "strategy.metric2.label": "Para la acción principal del usuario",
    "growth.eyebrow": "Crecimiento",
    "growth.title": "Cómo seguir mejorando después del lanzamiento",
    "growth.description": "Un sitio se vuelve más fuerte cuando se revisa, mide y mejora con el comportamiento real del usuario en mente.",
    "growth.card1.kicker": "Enfoque",
    "growth.card1.title": "Afina el mensaje",
    "growth.card1.text": "Revisa titulares y textos con frecuencia. Las páginas fuertes eliminan el lenguaje genérico y hacen que el valor sea fácil de recordar.",
    "growth.card2.kicker": "Confianza",
    "growth.card2.title": "Añade pruebas más fuertes",
    "growth.card2.text": "Usa testimonios, resultados, notas de proceso, capturas e historias de proyectos para que tus afirmaciones sean creíbles.",
    "growth.card3.kicker": "Flujo",
    "growth.card3.title": "Reduce la fricción",
    "growth.card3.text": "Acorta formularios, simplifica opciones, aclara botones y asegúrate de que la acción principal siempre sea visible.",
    "contact.eyebrow": "Contacto",
    "contact.title": "Da vida a una presencia digital más nítida",
    "contact.description": "Comparte qué estás construyendo, qué necesita tu audiencia y qué debe ayudar a lograr el sitio. Axyronis Studio usa esos detalles para diseñar un camino claro desde la primera impresión hasta la acción.",
    "contact.form.name": "Nombre",
    "contact.form.namePlaceholder": "Tu nombre",
    "contact.form.email": "Correo",
    "contact.form.emailPlaceholder": "hello@example.com",
    "contact.form.goal": "Objetivo del proyecto",
    "contact.form.goalPlaceholder": "Cuéntanos qué debe lograr el sitio",
    "contact.form.submit": "Solicitar revisión del estudio",
    "contact.form.success": "Gracias. Este formulario de demostración está listo para conectarse a un flujo real de proyecto.",
    "footer.description": "Estrategia digital, diseño web y sistemas de sitio orientados a conversión para marcas ambiciosas.",
    "footer.copyright": "© 2026 Axyronis Studio. Creado para un crecimiento digital claro.",
    "principles.eyebrow": "Principios",
    "principles.title": "Cómo Axyronis Studio construye mejores experiencias digitales",
    "principles.description": "Los sitios fuertes se forman con claridad, confianza y mejora continua.",
    "principles.card1.title": "Diseñar con propósito",
    "principles.card1.point1.label": "Posicionamiento claro:",
    "principles.card1.point1.text": "La audiencia debe saber qué ofreces y por qué importa sin tener que adivinar.",
    "principles.card1.point2.label": "Estructura útil:",
    "principles.card1.point2.text": "Cada sección debe responder una pregunta del visitante o acercarlo a la acción.",
    "principles.card1.point3.label": "Identidad consistente:",
    "principles.card1.point3.text": "Tipografía, espaciado, imágenes y color deben apoyar una sensación de marca reconocible.",
    "principles.card1.point4.label": "Decisiones medidas:",
    "principles.card1.point4.text": "Las mejoras deben venir de comentarios, analítica y comportamiento real del usuario.",
    "principles.card2.title": "Mejorar lo que importa",
    "principles.card2.point1": "Aclara la audiencia principal antes de añadir nuevas secciones.",
    "principles.card2.point2": "Haz que la llamada a la acción principal sea fácil de encontrar en cada página importante.",
    "principles.card2.point3": "Reemplaza afirmaciones genéricas con pruebas, ejemplos y resultados específicos.",
    "principles.card2.point4": "Revisa con cuidado los diseños móviles porque muchas primeras impresiones ocurren en pantallas pequeñas."
  },
  ja: {
    languageName: "日本語",
    "meta.title": "デジタルWebスタジオ - Axyronis Studio",
    "meta.description": "Axyronis Studioは、より鋭いWebサイト、明確なメッセージ、強いデジタル体験をブランドに提供します。",
    "nav.home": "ホーム",
    "nav.services": "サービス",
    "nav.strategy": "戦略",
    "nav.growth": "成長",
    "nav.cta": "相談する",
    "hero.title": "注目を信頼、行動、成長へ変えるWebサイト",
    "hero.lead": "Axyronis Studioは、クリエイター、スタートアップ、成長中のブランドのために、焦点の合ったデジタル体験を設計します。明確なメッセージ、美しいビジュアルシステム、実用的なコンバージョン戦略を組み合わせ、すべてのページに目的と次の導線を与えます。",
    "hero.primaryCta": "相談する",
    "hero.secondaryCta": "方法を見る",
    "hero.visualLabel": "Axyronis Studioのワークスペースプレビュー",
    "hero.note": "装飾より先に明確さ",
    "services.eyebrow": "サービス",
    "services.title": "強いWebサイトがブランドにもたらすもの",
    "services.description": "良いWebサイトは情報を載せるだけの場所ではありません。注目を導き、信頼を築き、次の行動を明確にします。",
    "services.card1.title": "提供価値を明確にする",
    "services.card1.text": "訪問者は数秒で、誰を助け、何を提供し、なぜ重要なのかを理解できるべきです。",
    "services.card2.title": "視覚的な信頼感を作る",
    "services.card2.text": "一貫した余白、タイポグラフィ、色、画像は、細部を読む前から信頼感を生みます。",
    "services.card3.title": "意味のある行動へ導く",
    "services.card3.text": "各ページは、相談予約、事例閲覧、問い合わせなど、明確な判断を支える必要があります。",
    "strategy.eyebrow": "戦略",
    "strategy.title": "魅力は雑音ではなく関連性から始まる",
    "strategy.description": "効果的なサイトは、特定の対象ユーザーに語りかけ、正しい質問に答え、訪問者の流れの摩擦を減らします。Axyronis Studioは、明確さ、証拠、リズム、行動を軸に各セクションを設計します。",
    "strategy.point1": "曖昧なスローガンではなく具体的な約束から始める",
    "strategy.point2": "証拠、例、成果で信頼を支える",
    "strategy.point3": "訪問者が次に進む場所を迷わないシンプルなナビゲーションにする",
    "strategy.metric1.value": "5秒",
    "strategy.metric1.label": "中核価値を伝える",
    "strategy.metric2.value": "1本の導線",
    "strategy.metric2.label": "主要なユーザー行動へ",
    "growth.eyebrow": "成長",
    "growth.title": "公開後も改善し続ける方法",
    "growth.description": "Webサイトは、実際のユーザー行動をもとに見直し、測定し、改善することで強くなります。",
    "growth.card1.kicker": "集中",
    "growth.card1.title": "メッセージを磨く",
    "growth.card1.text": "見出しや本文を定期的に見直します。強いページは一般的な表現を減らし、価値を覚えやすくします。",
    "growth.card2.kicker": "信頼",
    "growth.card2.title": "より強い証拠を加える",
    "growth.card2.text": "推薦文、成果、プロセス説明、スクリーンショット、事例ストーリーで主張を信頼しやすくします。",
    "growth.card3.kicker": "流れ",
    "growth.card3.title": "摩擦を減らす",
    "growth.card3.text": "フォームを短くし、選択肢を簡潔にし、ボタンを明確にし、最重要アクションを常に見えるようにします。",
    "contact.eyebrow": "お問い合わせ",
    "contact.title": "より鮮明なデジタルプレゼンスを形にする",
    "contact.description": "何を作っているのか、対象ユーザーが何を必要としているのか、Webサイトが何を助けるべきかを共有してください。Axyronis Studioはその情報をもとに、第一印象から意味のある行動までの明確な道筋を設計します。",
    "contact.form.name": "名前",
    "contact.form.namePlaceholder": "お名前",
    "contact.form.email": "メール",
    "contact.form.emailPlaceholder": "hello@example.com",
    "contact.form.goal": "プロジェクト目標",
    "contact.form.goalPlaceholder": "Webサイトで達成したいことを教えてください",
    "contact.form.submit": "スタジオレビューを依頼",
    "contact.form.success": "ありがとうございます。このデモフォームは実際のプロジェクトフローに接続できます。",
    "footer.description": "意欲あるブランドのためのデジタル戦略、Webデザイン、コンバージョン重視のサイトシステム。",
    "footer.copyright": "© 2026 Axyronis Studio。明確なデジタル成長のために構築。",
    "principles.eyebrow": "原則",
    "principles.title": "Axyronis Studioがより良いデジタル体験を作る方法",
    "principles.description": "強いWebサイトは、明確さ、信頼、継続的な改善によって形作られます。",
    "principles.card1.title": "目的を持って設計する",
    "principles.card1.point1.label": "明確なポジショニング：",
    "principles.card1.point1.text": "対象ユーザーは、何を提供し、なぜ重要なのかを迷わず理解できるべきです。",
    "principles.card1.point2.label": "有用な構造：",
    "principles.card1.point2.text": "各セクションは訪問者の疑問に答えるか、行動へ近づける必要があります。",
    "principles.card1.point3.label": "一貫したアイデンティティ：",
    "principles.card1.point3.text": "タイポグラフィ、余白、画像、色は、認識しやすいブランド感を支えるべきです。",
    "principles.card1.point4.label": "測定された判断：",
    "principles.card1.point4.text": "改善はフィードバック、分析、実際のユーザー行動から生まれるべきです。",
    "principles.card2.title": "重要なことを改善する",
    "principles.card2.point1": "新しいセクションを追加する前に、主要な対象ユーザーを明確にします。",
    "principles.card2.point2": "重要なページでは、主要な行動ボタンを見つけやすくします。",
    "principles.card2.point3": "一般的な主張を、証拠、例、具体的な成果に置き換えます。",
    "principles.card2.point4": "多くの第一印象は小さな画面で生まれるため、モバイルレイアウトを慎重に確認します。"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll: supports section links in the main navigation.
  document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href").replace("/", "");
      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Language switcher: updates text, placeholders, aria labels, meta description, and page title.
  const languageButtons = document.querySelectorAll("[data-language-option]");
  const currentLanguageLabel = document.querySelector("[data-language-current]");

  // Language storage: remembers the selected language when localStorage is available.
  const getSavedLanguage = () => {
    try {
      return window.localStorage?.getItem("axyronis-language");
    } catch {
      return null;
    }
  };

  const setSavedLanguage = (languageCode) => {
    try {
      window.localStorage?.setItem("axyronis-language", languageCode);
    } catch {
      // Storage may be blocked in some browser modes; the switcher still works for the current page.
    }
  };

  const savedLanguage = getSavedLanguage();
  const defaultLanguage = translations[savedLanguage] ? savedLanguage : "en";

  const applyLanguage = (languageCode) => {
    const dictionary = translations[languageCode] || translations.en;

    document.documentElement.lang = languageCode;
    document.title = dictionary["meta.title"];

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (dictionary[key]) {
        element.setAttribute("placeholder", dictionary[key]);
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      const mappings = element.getAttribute("data-i18n-attr").split(",");
      mappings.forEach((mapping) => {
        const [attribute, key] = mapping.split(":").map((value) => value.trim());
        if (attribute && key && dictionary[key]) {
          element.setAttribute(attribute, dictionary[key]);
        }
      });
    });

    if (currentLanguageLabel) {
      currentLanguageLabel.textContent = dictionary.languageName;
    }

    languageButtons.forEach((button) => {
      const isActive = button.getAttribute("data-language-option") === languageCode;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    setSavedLanguage(languageCode);
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.getAttribute("data-language-option"));
    });
  });

  applyLanguage(defaultLanguage);

  // Demo inquiry form: prevent a real submit and show a front-end confirmation.
  // Replace this block with fetch or a normal form post when connecting a backend.
  const templateForm = document.querySelector("[data-template-form]");

  if (templateForm) {
    templateForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const activeLanguage = getSavedLanguage() || document.documentElement.lang || "en";
      const message = templateForm.querySelector(".form-message");
      if (message) {
        message.textContent = translations[activeLanguage]["contact.form.success"];
      }

      templateForm.reset();
    });
  }
});
