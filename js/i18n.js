/* ══════════════════════════════════════════════════════════
   EL SECRETO DE LA BRASA — i18n Engine
   Supports: ES · EN · DE · FR · SV · DA · NO · ZH · RU
             PT · IT · NL · AR · JA · KO · PL
   ══════════════════════════════════════════════════════════ */

const I18N = {
    // ── Language metadata ──────────────────────────────────
    languages: [
        { code: 'es', label: 'Español', flag: '🇪🇸', dir: 'ltr' },
        { code: 'en', label: 'English', flag: '🇬🇧', dir: 'ltr' },
        { code: 'de', label: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
        { code: 'fr', label: 'Français', flag: '🇫🇷', dir: 'ltr' },
        { code: 'sv', label: 'Svenska', flag: '🇸🇪', dir: 'ltr' },
        { code: 'da', label: 'Dansk', flag: '🇩🇰', dir: 'ltr' },
        { code: 'no', label: 'Norsk', flag: '🇳🇴', dir: 'ltr' },
        { code: 'pt', label: 'Português', flag: '🇵🇹', dir: 'ltr' },
        { code: 'it', label: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
        { code: 'nl', label: 'Nederlands', flag: '🇳🇱', dir: 'ltr' },
        { code: 'pl', label: 'Polski', flag: '🇵🇱', dir: 'ltr' },
        { code: 'ru', label: 'Русский', flag: '🇷🇺', dir: 'ltr' },
        { code: 'zh', label: '中文', flag: '🇨🇳', dir: 'ltr' },
        { code: 'ja', label: '日本語', flag: '🇯🇵', dir: 'ltr' },
        { code: 'ko', label: '한국어', flag: '🇰🇷', dir: 'ltr' },
        { code: 'ar', label: 'العربية', flag: '🇸🇦', dir: 'rtl' },
    ],

    // ── Translations ──────────────────────────────────────
    translations: {
        // --- Header ---
        header_sub: {
            es: 'Mercado Virgen del Rosario · Cádiz',
            en: 'Virgen del Rosario Market · Cádiz',
            de: 'Mercado Virgen del Rosario · Cádiz',
            fr: 'Mercado Virgen del Rosario · Cadix',
            sv: 'Virgen del Rosario-marknaden · Cádiz',
            da: 'Virgen del Rosario Marked · Cádiz',
            no: 'Virgen del Rosario Marked · Cádiz',
            pt: 'Mercado Virgen del Rosario · Cádiz',
            it: 'Mercado Virgen del Rosario · Cadice',
            nl: 'Virgen del Rosario Markt · Cádiz',
            pl: 'Rynek Virgen del Rosario · Cádiz',
            ru: 'Рынок Вирхен дель Росарио · Кадис',
            zh: '玫瑰圣母市场 · 加的斯',
            ja: 'ビルヘン・デル・ロサリオ市場 · カディス',
            ko: '비르헨 델 로사리오 시장 · 카디스',
            ar: 'سوق فيرخن ديل روساريو · قادش',
        },
        badge_open: {
            es: 'Abierto',
            en: 'Open',
            de: 'Geöffnet',
            fr: 'Ouvert',
            sv: 'Öppet',
            da: 'Åben',
            no: 'Åpen',
            pt: 'Aberto',
            it: 'Aperto',
            nl: 'Open',
            pl: 'Otwarte',
            ru: 'Открыто',
            zh: '营业中',
            ja: '営業中',
            ko: '영업 중',
            ar: 'مفتوح',
        },
        // --- Hero ---
        hero_eyebrow: {
            es: 'Especialistas en Brasa 🔥',
            en: 'Grill Specialists 🔥',
            de: 'Grillspezialisten 🔥',
            fr: 'Spécialistes du Grill 🔥',
            sv: 'Grillspecialister 🔥',
            da: 'Grillspecialister 🔥',
            no: 'Grillspesialister 🔥',
            pt: 'Especialistas em Grelhados 🔥',
            it: 'Specialisti in Grigliata 🔥',
            nl: 'Grillspecialisten 🔥',
            pl: 'Specjaliści od Grilla 🔥',
            ru: 'Специалисты по грилю 🔥',
            zh: '烧烤专家 🔥',
            ja: 'グリルの専門家 🔥',
            ko: '그릴 전문가 🔥',
            ar: 'متخصصون في الشواء 🔥',
        },
        hero_headline_1: {
            es: 'Sabor en 3D,',
            en: 'The Art of Fire,',
            de: 'Die Kunst des Feuers,',
            fr: "L'Art du Feu,",
            sv: 'Konsten med Eld,',
            da: 'Kunsten med Ild,',
            no: 'Kunsten med Ild,',
            pt: 'A Arte do Fogo,',
            it: "L'Arte del Fuoco,",
            nl: 'De Kunst van het Vuur,',
            pl: 'Sztuka Ognia,',
            ru: 'Искусство Огня,',
            zh: '火焰艺术，',
            ja: '炎の芸術、',
            ko: '불꽃의 예술,',
            ar: 'فن النار،',
        },
        hero_headline_2: {
            es: 'Fuego en cada bocado',
            en: 'the Soul of Savor',
            de: 'die Seele des Genusses',
            fr: "l'Âme du Goût",
            sv: 'Smakens Själ',
            da: 'Smagens Sjæl',
            no: 'Smakens Sjel',
            pt: 'a Alma do Sabor',
            it: "l'Anima del Sapore",
            nl: 'de Ziel van Smaak',
            pl: 'Dusza Smaku',
            ru: 'Душа Вкуса',
            zh: '肉之灵魂',
            ja: '肉の魂',
            ko: '고기의 영혼',
            ar: 'روح اللحم',
        },
        hero_cta: {
            es: 'Ver la Carta',
            en: 'View Menu',
            de: 'Speisekarte',
            fr: 'Voir la Carte',
            sv: 'Se Menyn',
            da: 'Se Menuen',
            no: 'Se Menyen',
            pt: 'Ver a Ementa',
            it: 'Vedi il Menù',
            nl: 'Bekijk Menu',
            pl: 'Zobacz Menu',
            ru: 'Смотреть меню',
            zh: '查看菜单',
            ja: 'メニューを見る',
            ko: '메뉴 보기',
            ar: 'عرض القائمة',
        },
        hero_sub: {
            es: 'Descubre la hamburguesa perfecta, donde el arte visual se encuentra con la pasión de la brasa real.',
            en: 'Enjoy the best grill in Cádiz at the Virgen del Rosario Market.',
            de: 'Genießen Sie den besten Grill in Cádiz auf dem Markt Virgen del Rosario.',
            fr: 'Profitez du meilleur grill de Cadix au marché Virgen del Rosario.',
            pt: 'Desfrute da melhor brasa de Cádis no Mercado Virgen del Rosario.',
            it: 'Goditi la mejor brasa di Cadice al Mercado Virgen del Rosario.',
            zh: '在玫瑰圣母市场享受加的斯最好的烧烤。',
            ru: 'Насладитесь лучшим грилем в Кадисе на рынке Вирхен дель Росарио.',
            ar: 'استمتع بأفضل شواء في قادش في سوق فيرخن ديل روساريو.',
            ja: 'ビルヘン・デル・ロサリオ市場でカディス最高のグリルをお楽しみください。',
            ko: '비르헨 델 로사리오 시장에서 카디스 최고의 그릴을 즐겨보세요.'
        },
        // --- Quick Actions ---
        btn_glovo: {
            es: 'Pedir por Glovo',
            en: 'Order on Glovo',
            de: 'Über Glovo bestellen',
            fr: 'Commander sur Glovo',
            sv: 'Beställ via Glovo',
            da: 'Bestil via Glovo',
            no: 'Bestill via Glovo',
            pt: 'Pedir pelo Glovo',
            it: 'Ordina su Glovo',
            nl: 'Bestellen via Glovo',
            pl: 'Zamów przez Glovo',
            ru: 'Заказать через Glovo',
            zh: '通过 Glovo 订餐',
            ja: 'Glovoで注文',
            ko: 'Glovo로 주문',
            ar: 'اطلب عبر Glovo',
        },
        btn_view_menu: {
            es: 'Ver Carta',
            en: 'View Menu',
            de: 'Speisekarte',
            fr: 'Voir Carte',
            sv: 'Se Meny',
            da: 'Se Menu',
            no: 'Se Meny',
            pt: 'Ver Carta',
            it: 'Vedi Menù',
            nl: 'Bekijk Menu',
            pl: 'Zobacz Menu',
            ru: 'Меню',
            zh: '查看菜单',
            ja: 'メニュー',
            ko: '메뉴',
            ar: 'القائمة',
        },
        // --- Status card ---
        status_open: {
            es: 'Abierto Ahora',
            en: 'Open Now',
            de: 'Jetzt geöffnet',
            fr: 'Ouvert Maintenant',
            sv: 'Öppet Nu',
            da: 'Åben Nu',
            no: 'Åpent Nå',
            pt: 'Aberto Agora',
            it: 'Aperto Adesso',
            nl: 'Nu Open',
            pl: 'Teraz Otwarte',
            ru: 'Сейчас открыто',
            zh: '现在营业',
            ja: '現在営業中',
            ko: '지금 영업 중',
            ar: 'مفتوح الآن',
        },
        status_hours: {
            es: 'Lun – Dom: 12:00 – 22:00 h',
            en: 'Mon – Sun: 12:00 – 22:00',
            de: 'Mo – So: 12:00 – 22:00 Uhr',
            fr: 'Lun – Dim: 12h00 – 22h00',
            sv: 'Mån – Sön: 12:00 – 22:00',
            da: 'Man – Søn: 12:00 – 22:00',
            no: 'Man – Søn: 12:00 – 22:00',
            pt: 'Seg – Dom: 12:00 – 22:00',
            it: 'Lun – Dom: 12:00 – 22:00',
            nl: 'Ma – Zo: 12:00 – 22:00',
            pl: 'Pon – Nd: 12:00 – 22:00',
            ru: 'Пн – Вс: 12:00 – 22:00',
            zh: '周一至周日：12:00 – 22:00',
            ja: '月〜日: 12:00 – 22:00',
            ko: '월~일: 12:00 – 22:00',
            ar: 'الاثنين – الأحد: 12:00 – 22:00',
        },
        // --- Featured section ---
        featured_label: {
            es: 'Especialidades de la Brasa',
            en: 'Grill Specialties',
            de: 'Grillspezialitäten',
            fr: 'Spécialités du Grill',
            sv: 'Grillens Specialiteter',
            da: 'Grillens Specialiteter',
            no: 'Grillens Spesialiteter',
            pt: 'Especialidades da Brasa',
            it: 'Specialità della Griglia',
            nl: 'Grillspecialiteiten',
            pl: 'Specjalności z Grilla',
            ru: 'Блюда на гриле',
            zh: '烤炉特色菜',
            ja: 'グリルの名物',
            ko: '그릴 특선',
            ar: 'تخصصات الشواء',
        },
        featured_title: {
            es: 'Lo más pedido',
            en: 'Most popular',
            de: 'Am beliebtesten',
            fr: 'Le plus populaire',
            sv: 'Mest populära',
            da: 'Mest populære',
            no: 'Mest populære',
            pt: 'Mais popular',
            it: 'Più popolare',
            nl: 'Meest populair',
            pl: 'Najpopularniejsze',
            ru: 'Самое популярное',
            zh: '最受欢迎',
            ja: '一番人気',
            ko: '가장 인기 있는',
            ar: 'الأكثر شعبية',
        },
        view_all_menu: {
            es: 'Ver toda la carta',
            en: 'View all menu',
            de: 'Gesamte Speisekarte',
            fr: 'Voir toute la carte',
            sv: 'Visa hela menyn',
            da: 'Vis hele menuen',
            no: 'Vis hele menyen',
            pt: 'Ver todo o menu',
            it: 'Vedi tutto il menu',
            nl: 'Bekijk het hele menu',
            pl: 'Zobacz całe menu',
            ru: 'Посмотреть все меню',
            zh: '查看所有菜单',
            ja: 'すべてのメニューを見る',
            ko: '전체 메뉴 보기',
            ar: 'عرض القائمة كاملة',
        },
        info_location_label: { es: 'Ubicación', en: 'Location', de: 'Standort', fr: 'Emplacement' },
        info_location_value: { es: 'Mercado Virgen del Rosario, Cádiz', en: 'Virgen del Rosario Market, Cádiz' },
        info_hours_label: { es: 'Horario', en: 'Hours', de: 'Öffnungszeiten', fr: 'Horaires' },
        info_hours_value: { es: 'Lun – Dom: 12:00 – 22:00', en: 'Mon – Sun: 12:00 – 22:00' },
        info_exp_label: { es: 'Experiencia', en: 'Experience', de: 'Erfahrung', fr: 'Expérience' },
        info_exp_value: { es: 'Especialistas en Brasa 🔥', en: 'Grill Specialists 🔥' },
        premium_badge: {
            es: '⭐ La Premium',
            en: '⭐ Premium',
            de: '⭐ Premium',
            fr: '⭐ Premium',
            sv: '⭐ Premium',
            da: '⭐ Premium',
            no: '⭐ Premium',
            pt: '⭐ Premium',
            it: '⭐ Premium',
            nl: '⭐ Premium',
            pl: '⭐ Premium',
            ru: '⭐ Премиум',
            zh: '⭐ 精品',
            ja: '⭐ プレミアム',
            ko: '⭐ 프리미엄',
            ar: '⭐ مميز',
        },
        // --- Menu section ---
        menu_title: {
            es: 'La Carta',
            en: 'The Menu',
            de: 'Die Speisekarte',
            fr: 'La Carte',
            sv: 'Menyn',
            da: 'Menuen',
            no: 'Menyen',
            pt: 'A Ementa',
            it: 'Il Menù',
            nl: 'Het Menu',
            pl: 'Menu',
            ru: 'Меню',
            zh: '菜单',
            ja: 'メニュー',
            ko: '메뉴',
            ar: 'القائمة',
        },
        cat_burgers: {
            es: 'Hamburguesas',
            en: 'Burgers',
            de: 'Burger',
            fr: 'Burgers',
            sv: 'Burgare',
            da: 'Burgere',
            no: 'Burgere',
            pt: 'Hambúrgueres',
            it: 'Hamburger',
            nl: 'Burgers',
            pl: 'Burgery',
            ru: 'Бургеры',
            zh: '汉堡',
            ja: 'バーガー',
            ko: '버거',
            ar: 'برغر',
        },
        cat_rolls: {
            es: 'Rolls Dog',
            en: 'Rolls Dog',
            de: 'Rolls Dog',
            fr: 'Rolls Dog',
            sv: 'Rolls Dog',
            da: 'Rolls Dog',
            no: 'Rolls Dog',
            pt: 'Rolls Dog',
            it: 'Rolls Dog',
            nl: 'Rolls Dog',
            pl: 'Rolls Dog',
            ru: 'Rolls Dog',
            zh: 'Rolls Dog',
            ja: 'Rolls Dog',
            ko: 'Rolls Dog',
            ar: 'Rolls Dog',
        },
        cat_sandwiches: {
            es: 'Sandwiches',
            en: 'Sandwiches',
            de: 'Sandwiches',
            fr: 'Sandwichs',
            sv: 'Smörgåsar',
            da: 'Sandwicher',
            no: 'Sandwicher',
            pt: 'Sandes',
            it: 'Panini',
            nl: 'Sandwiches',
            pl: 'Kanapki',
            ru: 'Сэндвичи',
            zh: '三明治',
            ja: 'サンドイッチ',
            ko: '샌드위치',
            ar: 'ساندويتش',
        },
        save_changes: {
            es: "Guardar cambios",
            en: "Save changes",
            de: "Änderungen speichern",
            fr: "Enregistrer les modifications",
        },
        logout_btn: {
            es: "Cerrar sesión",
            en: "Log out",
            de: "Abmelden",
            fr: "Se déconnecter",
        },
        // Confirmación
        confirm_title: {
            es: "Pedido Confirmado ✅",
            en: "Order Confirmed ✅",
            de: "Bestellung bestätigt ✅",
            fr: "Commande Confirmée ✅",
        },
        order_on_way: {
            es: "¡Pedido en Marcha!",
            en: "Order on the Way!",
            de: "Bestellung in Bearbeitung!",
            fr: "Commande en cours !",
        },
        thanks_customer: {
            es: "Gracias,",
            en: "Thank you,",
            de: "Danke,",
            fr: "Merci,",
        },
        preparing_order: {
            es: "Estamos preparando tu carne a la brasa con todo el mimo del mundo.",
            en: "We are preparing your grilled meat with all the care in the world.",
            de: "Wir bereiten Ihr Grillfleisch mit der ganzen Liebe der Welt zu.",
            fr: "Nous préparons votre viande grillée avec tout l'amour del monde.",
        },
        estimated_time: {
            es: "Tiempo Estimado",
            en: "Estimated Time",
            de: "Geschätzte Zeit",
            fr: "Temps Estimé",
        },
        delivery_details: {
            es: "Detalles de Entrega",
            en: "Delivery Details",
            de: "Lieferdetails",
            fr: "Détails de Livraison",
        },
        stamp_added: {
            es: "Sello Añadido 🏅",
            en: "Stamp Added 🏅",
            de: "Stempel hinzugefügt 🏅",
            fr: "Timbre ajouté 🏅",
        },
        loyalty_progress: {
            es: "¡Ya tienes {0}/9 sellos! Tu próximo pedido está más cerca de ser gratis.",
            en: "You already have {0}/9 stamps! Your next order is closer to being free.",
            de: "Sie haben bereits {0}/9 Stempel! Ihre nächste Bestellung ist näher dran, kostenlos zu sein.",
            fr: "Vous avez déjà {0}/9 timbres ! Votre prochaine commande est plus proche d'être gratuite.",
        },
        order_problem: {
            es: "¿Algún problema con el pedido?",
            en: "Any problem with the order?",
            de: "Irgendein Problem mit der Bestellung?",
            fr: "Un problème avec la commande ?",
        },
        contact_support: {
            es: "Contactar con soporte por WhatsApp",
            en: "Contact support via WhatsApp",
            de: "Support per WhatsApp kontaktieren",
            fr: "Contacter le support via WhatsApp",
        },
        back_to_home: {
            es: "🏠 Volver al Inicio",
            en: "🏠 Back to Home",
            de: "🏠 Zurück zur Startseite",
            fr: "🏠 Retour à l'accueil",
        },
        cat_meats: {
            es: 'Carnes',
            en: 'Meats',
            de: 'Fleischgerichte',
            fr: 'Viandes',
            sv: 'Kött',
            da: 'Kød',
            no: 'Kjøtt',
            pt: 'Carnes',
            it: 'Carni',
            nl: 'Vlees',
            pl: 'Mięsa',
            ru: 'Мясо',
            zh: '肉类',
            ja: '肉料理',
            ko: '육류',
            ar: 'اللحوم',
        },
        cat_meats_msg: {
            es: 'Pregunta a nuestro personal — varían según la semana 🔥',
            en: 'Ask our staff — they vary by week 🔥',
            de: 'Fragen Sie unser Personal — wöchentlich wechselnd 🔥',
            fr: 'Demandez à notre équipe — elles varient selon la semaine 🔥',
            sv: 'Fråga personalen — varierar varje vecka 🔥',
            da: 'Spørg personalet — varierer efter uge 🔥',
            no: 'Spør personalet — varierer fra uke til uke 🔥',
            pt: 'Pergunte ao nosso staff — variam por semana 🔥',
            it: 'Chiedi al personale — cambiano ogni settimana 🔥',
            nl: 'Vraag het aan ons personeel — wisselt per week 🔥',
            pl: 'Zapytaj personel — zmieniają się co tydzień 🔥',
            ru: 'Спросите персонал — меняется каждую неделю 🔥',
            zh: '请询问我们的工作人员——每周更新 🔥',
            ja: 'スタッフにお尋ねください — 毎週変わります 🔥',
            ko: '직원에게 문의하세요 — 매주 변경됩니다 🔥',
            ar: 'اسأل موظفينا — تتغير أسبوعياً 🔥',
        },
        cat_starters: {
            es: 'Entrantes y Ensaladas',
            en: 'Starters & Salads',
            de: 'Vorspeisen & Salate',
            fr: 'Entrées et Salades',
            sv: 'Förrätter & Sallader',
            da: 'Forretter & Salater',
            no: 'Forretter & Salater',
            pt: 'Entradas e Saladas',
            it: 'Antipasti & Insalate',
            nl: 'Voorgerechten & Salades',
            pl: 'Przystawki i Sałatki',
            ru: 'Закуски и Салаты',
            zh: '开胃菜和沙拉',
            ja: '前菜・サラダ',
            ko: '에피타이저 & 샐러드',
            ar: 'مقبلات وسلطات',
        },
        cat_sauces: {
            es: 'Salsas Caseras · 1 €',
            en: 'Homemade Sauces · €1',
            de: 'Hausgemachte Saucen · 1 €',
            fr: 'Sauces Maison · 1 €',
            sv: 'Hemlagade Såser · 1 €',
            da: 'Hjemmelavede Saucer · 1 €',
            no: 'Hjemmelagede Sauser · 1 €',
            pt: 'Molhos Caseiros · 1 €',
            it: 'Salse Casalinghe · 1 €',
            nl: 'Huisgemaakte Sauzen · 1 €',
            pl: 'Sosy Domowe · 1 €',
            ru: 'Домашние Соусы · 1 €',
            zh: '自制酱汁 · 1€',
            ja: '自家製ソース · 1€',
            ko: '수제 소스 · 1€',
            ar: 'صلصات منزلية · 1€',
        },
        cat_allergens: {
            es: 'Alérgenos',
            en: 'Allergens',
            de: 'Allergene',
            fr: 'Allergènes',
            sv: 'Allergenier',
            da: 'Allergener',
            no: 'Allergener',
            pt: 'Alergénios',
            it: 'Allergeni',
            nl: 'Allergenen',
            pl: 'Alergeny',
            ru: 'Аллергены',
            zh: '过敏原',
            ja: 'アレルゲン',
            ko: '알레르기 성분',
            ar: 'المواد المسببة للحساسية',
        },
        allergen_1: {
            es: 'Lácteos', en: 'Dairy', de: 'Milch', fr: 'Lait',
            sv: 'Mjölk', da: 'Mælk', no: 'Melk', pt: 'Leite',
            it: 'Latte', nl: 'Melk', pl: 'Nabiał', ru: 'Молоко',
            zh: '乳制品', ja: '乳製品', ko: '유제품', ar: 'ألبان',
        },
        allergen_2: {
            es: 'Gluten', en: 'Gluten', de: 'Gluten', fr: 'Gluten',
            sv: 'Gluten', da: 'Gluten', no: 'Gluten', pt: 'Glúten',
            it: 'Glutine', nl: 'Gluten', pl: 'Gluten', ru: 'Глютен',
            zh: '麸质', ja: 'グルテン', ko: '글루텐', ar: 'غلوتين',
        },
        allergen_3: {
            es: 'Mostaza', en: 'Mustard', de: 'Senf', fr: 'Moutarde',
            sv: 'Senap', da: 'Sennep', no: 'Sennep', pt: 'Mostarda',
            it: 'Senape', nl: 'Mosterd', pl: 'Musztarda', ru: 'Горчица',
            zh: '芥末', ja: 'マスタード', ko: '겨자', ar: 'خردل',
        },
        allergen_4: {
            es: 'Huevo', en: 'Egg', de: 'Ei', fr: 'Œuf',
            sv: 'Ägg', da: 'Æg', no: 'Egg', pt: 'Ovo',
            it: 'Uova', nl: 'Ei', pl: 'Jajko', ru: 'Яйцо',
            zh: '鸡蛋', ja: '卵', ko: '달걀', ar: 'بيض',
        },
        allergen_5: {
            es: 'F. cáscara', en: 'Tree nuts', de: 'Schalenfrüchte', fr: 'Fruits à coque',
            sv: 'Nötter', da: 'Nødder', no: 'Nøtter', pt: 'Frutos secos',
            it: 'Frutta a guscio', nl: 'Noten', pl: 'Orzechy', ru: 'Орехи',
            zh: '坚果', ja: 'ナッツ', ko: '견과류', ar: 'مكسرات',
        },
        allergen_6: {
            es: 'Cacahuete', en: 'Peanut', de: 'Erdnuss', fr: 'Arachide',
            sv: 'Jordnöt', da: 'Jordnød', no: 'Peanøtt', pt: 'Amendoim',
            it: 'Arachidi', nl: 'Pinda', pl: 'Orzeszki ziemne', ru: 'Арахис',
            zh: '花生', ja: 'ピーナッツ', ko: '땅콩', ar: 'فول سوداني',
        },
        allergen_7: {
            es: 'Soja', en: 'Soy', de: 'Soja', fr: 'Soja',
            sv: 'Soja', da: 'Soja', no: 'Soja', pt: 'Soja',
            it: 'Soia', nl: 'Soja', pl: 'Soja', ru: 'Соя',
            zh: '大豆', ja: '大豆', ko: '콩', ar: 'صويا',
        },
        allergen_8: {
            es: 'Sulfitos', en: 'Sulphites', de: 'Sulfite', fr: 'Sulfites',
            sv: 'Sulfiter', da: 'Sulfitter', no: 'Sulfitter', pt: 'Sulfitos',
            it: 'Solfiti', nl: 'Sulfieten', pl: 'Siarczyny', ru: 'Сульфиты',
            zh: '亚硫酸盐', ja: '亜硫酸塩', ko: '아황산염', ar: 'كبريتيت',
        },
        allergen_9: {
            es: 'Apio', en: 'Celery', de: 'Sellerie', fr: 'Céleri',
            sv: 'Selleri', da: 'Selleri', no: 'Selleri', pt: 'Aipo',
            it: 'Sedano', nl: 'Selderij', pl: 'Seler', ru: 'Сельдерей',
            zh: '芹菜', ja: 'セロリ', ko: '셀러리', ar: 'كرفس',
        },
        allergen_10: {
            es: 'Crustáceos', en: 'Crustaceans', de: 'Krebstiere', fr: 'Crustacés',
            sv: 'Kräftdjur', da: 'Skaldyr', no: 'Skalldyr', pt: 'Crustáceos',
            it: 'Crostacei', nl: 'Schaaldieren', pl: 'Skorupiaki', ru: 'Ракообразные',
            zh: '甲壳类', ja: '甲殻類', ko: '갑각류', ar: 'القشريات',
        },
        allergen_11: {
            es: 'Pescado', en: 'Fish', de: 'Fisch', fr: 'Poisson',
            sv: 'Fisk', da: 'Fisk', no: 'Fisk', pt: 'Peixe',
            it: 'Pesce', nl: 'Vis', pl: 'Ryba', ru: 'Рыба',
            zh: '鱼类', ja: '魚', ko: '생선', ar: 'سمك',
        },
        allergen_12: {
            es: 'Sésamo', en: 'Sesame', de: 'Sesam', fr: 'Sésame',
            sv: 'Sesam', da: 'Sesam', no: 'Sesam', pt: 'Sésamo',
            it: 'Sesamo', nl: 'Sesam', pl: 'Sezam', ru: 'Кунжут',
            zh: '芝麻', ja: 'ゴマ', ko: '참깨', ar: 'سمسم',
        },
        // --- Loyalty ---
        loyalty_title: {
            es: '🏅 Tarjeta Fidelidad — 9 pedidos, el 10º gratis',
            en: '🏅 Loyalty Card — 9 orders, 10th free',
            de: '🏅 Treuekarte — 9 Bestellungen, die 10. gratis',
            fr: '🏅 Carte Fidélité — 9 commandes, la 10ème gratuite',
            sv: '🏅 Lojalkort — 9 beställningar, den 10:e gratis',
            da: '🏅 Loyalitetskort — 9 bestillinger, den 10. gratis',
            no: '🏅 Lojalitetskort — 9 bestillinger, den 10. gratis',
            pt: '🏅 Cartão Fidelidade — 9 pedidos, o 10º grátis',
            it: '🏅 Carta Fedeltà — 9 ordini, il 10° gratis',
            nl: '🏅 Loyaliteitskaart — 9 bestellingen, de 10e gratis',
            pl: '🏅 Karta Lojalnościowa — 9 zamówień, 10. gratis',
            ru: '🏅 Карта лояльности — 9 заказов, 10-й бесплатно',
            zh: '🏅 积分卡 — 9次订餐，第10次免费',
            ja: '🏅 ポイントカード — 9回注文で10回目無料',
            ko: '🏅 로열티 카드 — 9회 주문 시 10번째 무료',
            ar: '🏅 بطاقة الولاء — 9 طلبات والعاشرة مجانية',
        },
        // --- Bottom nav ---
        nav_home: {
            es: 'Inicio', en: 'Home', de: 'Start', fr: 'Accueil',
            sv: 'Hem', da: 'Hjem', no: 'Hjem', pt: 'Início',
            it: 'Home', nl: 'Home', pl: 'Strona', ru: 'Главная',
            zh: '首页', ja: 'ホーム', ko: '홈', ar: 'الرئيسية',
        },
        modal_allergens_desc: {
            es: 'Marca si tienes alguna alergia.', en: 'Mark if you have any allergy.', de: 'Markieren Sie, ob Sie allergisch sind.', fr: 'Cochez si vous avez une allergie.',
            sv: 'Markera om du har någon allergi.', da: 'Markér hvis du har allergi.', no: 'Marker hvis du har allergi.', pt: 'Marque se tiver alguma alergia.',
            it: 'Segna se hai qualche allergia.', nl: 'Markeer als u een allergie heeft.', pl: 'Zaznacz, jeśli masz alergię.', ru: 'Отметьте, если у вас есть аллергия.',
            zh: '如果您有任何过敏症，请标注。', ja: 'アレルギーがある場合はマークを付けてください。', ko: '알레르기가 있는 경우 표시하십시오.', ar: 'ضع علامة إذا كان لديك أي حساسية.',
        },
        allergen_1: { es: 'Lácteos', en: 'Dairy', de: 'Milchprodukte', fr: 'Laitage', sv: 'Mejeri', da: 'Mejeri', no: 'Meieri', pt: 'Laticínios', it: 'Latticini', nl: 'Zuivel', pl: 'Nabiał', ru: 'Молочные продукты', zh: '乳制品', ja: '乳製品', ko: '유제품', ar: 'منتجات الألبان' },
        allergen_2: { es: 'Gluten', en: 'Gluten', de: 'Gluten', fr: 'Gluten', sv: 'Gluten', da: 'Gluten', no: 'Gluten', pt: 'Glúten', it: 'Glutine', nl: 'Gluten', pl: 'Gluten', ru: 'Глютен', zh: '麸质', ja: 'グルテン', ko: '글루텐', ar: 'الغلوتين' },
        allergen_3: { es: 'Mostaza', en: 'Mustard', de: 'Senf', fr: 'Moutarde', sv: 'Senap', da: 'Sennep', no: 'Sennep', pt: 'Mostarda', it: 'Senape', nl: 'Mosterd', pl: 'Musztarda', ru: 'Горчица', zh: '芥末', ja: 'マスタード', ko: '겨자', ar: 'الخردل' },
        allergen_4: { es: 'Huevo', en: 'Egg', de: 'Ei', fr: 'Œuf', sv: 'Ägg', da: 'Æg', no: 'Egg', pt: 'Ovo', it: 'Uovo', nl: 'Ei', pl: 'Jajko', ru: 'Яйцо', zh: '鸡蛋', ja: '卵', ko: '계란', ar: 'بيض' },
        allergen_5: { es: 'Frutos de cáscara', en: 'Nuts', de: 'Schalenfrüchte', fr: 'Fruits à coque', sv: 'Nötter', da: 'Nødder', no: 'Nøtter', pt: 'Frutos de casca rija', it: 'Frutta a guscio', nl: 'Noten', pl: 'Orzechy', ru: 'Орехи', zh: '坚果', ja: 'ナッツ', ko: '견과류', ar: 'المكسرات' },
        allergen_6: { es: 'Cacahuete', en: 'Peanut', de: 'Erdnuss', fr: 'Cacahuète', sv: 'Jordnöt', da: 'Jordnød', no: 'Jordnøtt', pt: 'Amendoim', it: 'Arachide', nl: 'Pinda', pl: 'Orzeszki ziemne', ru: 'Арахис', zh: '花生', ja: '落花生', ko: '땅콩', ar: 'الفول السوداني' },
        allergen_7: { es: 'Soja', en: 'Soy', de: 'Soja', fr: 'Soja', sv: 'Soja', da: 'Soja', no: 'Soya', pt: 'Soja', it: 'Soia', nl: 'Soja', pl: 'Soja', ru: 'Соя', zh: '大豆', ja: '大豆', ko: '콩', ar: 'الصويا' },
        allergen_8: { es: 'Sulfitos', en: 'Sulphites', de: 'Sulfite', fr: 'Sulfites', sv: 'Sulfiter', da: 'Sulfitter', no: 'Sulfitter', pt: 'Sulfitos', it: 'Solfiti', nl: 'Sulfieten', pl: 'Siarczyny', ru: 'Сульфиты', zh: '亚硫酸盐', ja: '亜硫酸塩', ko: '아황酸염', ar: 'الكبريتات' },
        allergen_9: { es: 'Apio', en: 'Celery', de: 'Sellerie', fr: 'Céleri', sv: 'Selleri', da: 'Selleri', no: 'Selleri', pt: 'Aipo', it: 'Sedano', nl: 'Selderij', pl: 'Seler', ru: 'Сельдерей', zh: '芹菜', ja: 'セロリ', ko: '셀러리', ar: 'كرفس' },
        allergen_10: { es: 'Crustáceos', en: 'Crustaceans', de: 'Krebstiere', fr: 'Crustacés', sv: 'Kräftdjur', da: 'Skaldyr', no: 'Skalldyr', pt: 'Crustáceos', it: 'Crostacei', nl: 'Schaaldieren', pl: 'Skorupiaki', ru: 'Ракообразные', zh: '甲壳类动物', ja: '甲殻類', ko: '갑각류', ar: 'القشريات' },
        allergen_11: { es: 'Pescado', en: 'Fish', de: 'Fisch', fr: 'Poisson', sv: 'Fisk', da: 'Fisk', no: 'Fisk', pt: 'Peixe', it: 'Pesce', nl: 'Vis', pl: 'Ryba', ru: 'Рыба', zh: '鱼', ja: '魚', ko: '생선', ar: 'سمك' },
        allergen_12: { es: 'Sésamo', en: 'Sesame', de: 'Sesam', fr: 'Sésame', sv: 'Sesam', da: 'Sesam', no: 'Sesam', pt: 'Gergelim', it: 'Sesamo', nl: 'Sesam', pl: 'Sezam', ru: 'Кунжут', zh: '芝麻', ja: '胡麻', ko: '참깨', ar: 'سمسم' },
        order_type_label: {
            es: 'Tipo de Pedido', en: 'Order Type', de: 'Bestellart', fr: 'Type de commande',
            sv: 'Beställningstyp', da: 'Ordretype', no: 'Bestillingstype', pt: 'Tipo de Pedido',
            it: 'Tipo di Ordine', nl: 'Besteltype', pl: 'Rodzaj zamówienia', ru: 'Тип заказа',
            zh: '订单类型', ja: '注文タイプ', ko: '주문 유형', ar: 'نوع الطلب',
        },
        type_eat_in: {
            es: 'En el local', en: 'Dine-in', de: 'Vor Ort essen', fr: 'Sur place',
            sv: 'Äta här', da: 'Spis her', no: 'Spise her', pt: 'No local',
            it: 'Sul posto', nl: 'Ter plaatse eten', pl: 'Na miejscu', ru: 'В заведении',
            zh: '堂食', ja: '店内', ko: '매장 식사', ar: 'في المطعم',
        },
        type_takeaway: {
            es: 'Para llevar', en: 'Takeaway', de: 'Zmitnehmen', fr: 'À emporter',
            sv: 'Takeaway', da: 'Takeaway', no: 'Takeaway', pt: 'Para levar',
            it: 'Da asporto', nl: 'Meenemen', pl: 'Na wynos', ru: 'С собой',
            zh: '外带', ja: 'テイクアウト', ko: '테이크아웃', ar: 'سفري',
        },
        type_glovo: { es: 'Glovo', en: 'Glovo', de: 'Glovo', fr: 'Glovo', sv: 'Glovo', da: 'Glovo', no: 'Glovo', pt: 'Glovo', it: 'Glovo', nl: 'Glovo', pl: 'Glovo', ru: 'Glovo', zh: 'Glovo', ja: 'Glovo', ko: 'Glovo', ar: 'Glovo' },
        glovo_msg: {
            es: 'Para pedidos a través de Glovo, serás redirigido a su plataforma oficial.',
            en: 'For Glovo orders, you will be redirected to their official platform.',
            de: 'Für Glovo-Bestellungen werden Sie auf deren offizielle Plattform weitergeleitet.',
            fr: 'Pour les commandes Glovo, vous serez redirigé vers leur plateforme officielle.',
            sv: 'För Glovo-beställningar kommer du att omdirigeras till deras officiella plattform.',
            da: 'Ved Glovo-bestillinger bliver du viderestillet til deres officielle platform.',
            no: 'For Glovo-bestillinger vil du bli videresendt til deres offisielle plattform.',
            pt: 'Para pedidos via Glovo, você será redirecionado para a plataforma oficial.',
            it: 'Per gli ordini Glovo, verrai reindirizzato alla loro piattaforma ufficiale.',
            nl: 'Voor Glovo-bestellingen wordt u doorgestuurd naar hun officiële platform.',
            pl: 'W przypadku zamówień Glovo zostaniesz przekierowany na ich oficjalną platformę.',
            ru: 'Для заказов через Glovo вы будете перенаправлены на их официальную платформу.',
            zh: '对于 Glovo 订单，您将被重定向到其官方平台。',
            ja: 'Glovoでの注文については、公式プラットフォームにリダイレクトされます。',
            ko: 'Glovo 주문의 경우 공식 플랫폼으로 리디렉션됩니다.',
            ar: 'لطلبات Glovo، سيتم تحويلك إلى منصتهم الرسمية.',
        },
        go_to_glovo: {
            es: 'Ir a Glovo', en: 'Go to Glovo', de: 'Zu Glovo gehen', fr: 'Aller sur Glovo',
            sv: 'Gå till Glovo', da: 'Gå til Glovo', no: 'Gå til Glovo', pt: 'Ir para Glovo',
            it: 'Vai su Glovo', nl: 'Ga naar Glovo', pl: 'Przejdź do Glovo', ru: 'Перейти в Glovo',
            zh: '前往 Glovo', ja: 'Glovoへ移動', ko: 'Glovo로 이동', ar: 'الذهاب إلى Glovo',
        },
        cat_meat: {
            es: '🍖 Carnes Premium', en: '🍖 Premium Meats', de: '🍖 Premium Fleisch', fr: '🍖 Viandes Premium',
            sv: 'Kött', da: 'Kød', no: 'Kjøtt', pt: 'Carnes',
            it: 'Carni', nl: 'Vlees', pl: 'Mięsa', ru: 'Мясо',
            zh: '肉类', ja: '肉料理', ko: '육류', ar: 'اللحوم',
        },
        nav_menu: {
            es: 'Carta', en: 'Menu', de: 'Karte', fr: 'Carte',
            sv: 'Meny', da: 'Menu', no: 'Meny', pt: 'Carta',
            it: 'Menù', nl: 'Menu', pl: 'Menu', ru: 'Меню',
            zh: '菜单', ja: 'メニュー', ko: '메뉴', ar: 'القائمة',
        },
        nav_order: {
            es: 'Pedido', en: 'Order', de: 'Bestellung', fr: 'Commande',
            sv: 'Order', da: 'Ordre', no: 'Ordre', pt: 'Pedido',
            it: 'Ordine', nl: 'Bestelling', pl: 'Zamówienie', ru: 'Заказ',
            zh: '订单', ja: '注文', ko: '주문', ar: 'الطلب',
        },
        nav_profile: {
            es: 'Perfil', en: 'Profile', de: 'Profil', fr: 'Profil',
            sv: 'Profil', da: 'Profil', no: 'Profil', pt: 'Perfil',
            it: 'Profilo', nl: 'Profiel', pl: 'Profil', ru: 'Профиль',
            zh: '个人', ja: 'プロフィール', ko: '프로필', ar: 'الملف',
        },
        // --- Modal ---
        modal_customize: {
            es: 'Personaliza tu plato',
            en: 'Customize your dish',
            de: 'Dein Gericht anpassen',
            fr: 'Personnalisez votre plat',
            sv: 'Anpassa din rätt',
            da: 'Tilpas din ret',
            no: 'Tilpass retten din',
            pt: 'Personaliza o teu prato',
            it: 'Personalizza il tuo piatto',
            nl: 'Pas je gerecht aan',
            pl: 'Dostosuj swoje danie',
            ru: 'Настройте блюдо',
            zh: '定制您的菜肴',
            ja: '料理をカスタマイズ',
            ko: '요리 커스터마이즈',
            ar: 'خصّص طبقك',
        },
        modal_uncheck: {
            es: 'Desmarca lo que no quieras.',
            en: 'Uncheck what you don\'t want.',
            de: 'Haken Sie ab, was Sie nicht möchten.',
            fr: 'Décochez ce que vous ne voulez pas.',
            sv: 'Avmarkera det du inte vill ha.',
            da: 'Fjern markeringen for det, du ikke ønsker.',
            no: 'Fjern haken på det du ikke vil ha.',
            pt: 'Desmarque o que não queres.',
            it: 'Deseleziona ciò che non vuoi.',
            nl: 'Vink af wat je niet wilt.',
            pl: 'Odznacz to, czego nie chcesz.',
            ru: 'Снимите галочку с того, что не хотите.',
            zh: '取消选择您不需要的配料。',
            ja: '不要なもののチェックを外してください。',
            ko: '원하지 않는 것을 체크 해제하세요.',
            ar: 'ألغِ تحديد ما لا تريده.',
        },
        modal_extras: {
            es: 'Añadir Extras',
            en: 'Add Extras',
            de: 'Extras hinzufügen',
            fr: 'Ajouter des Suppléments',
            sv: 'Lägg till Extras',
            da: 'Tilføj Extras',
            no: 'Legg til Extras',
            pt: 'Adicionar Extras',
            it: 'Aggiungi Extra',
            nl: 'Extra\'s Toevoegen',
            pl: 'Dodaj Dodatki',
            ru: 'Добавить допы',
            zh: '添加额外配料',
            ja: 'エクストラを追加',
            ko: '추가 옵션 더하기',
            ar: 'إضافة إضافات',
        },
        modal_extra_meat: {
            es: 'Doble Carne',
            en: 'Double Meat',
            de: 'Doppeltes Fleisch',
            fr: 'Double Viande',
            sv: 'Dubbelt Kött',
            da: 'Dobbelt Kød',
            no: 'Dobbelt Kjøtt',
            pt: 'Dupla Carne',
            it: 'Doppia Carne',
            nl: 'Dubbel Vlees',
            pl: 'Podwójne Mięso',
            ru: 'Двойное Мясо',
            zh: '双份肉',
            ja: 'ダブルミート',
            ko: '더블 패티',
            ar: 'لحمة مضاعفة',
        },
        modal_extra_bacon: {
            es: 'Bacon Extra',
            en: 'Extra Bacon',
            de: 'Extra Bacon',
            fr: 'Bacon Supplémentaire',
            sv: 'Extra Bacon',
            da: 'Ekstra Bacon',
            no: 'Ekstra Bacon',
            pt: 'Bacon Extra',
            it: 'Bacon Extra',
            nl: 'Extra Spek',
            pl: 'Dodatkowy Bekon',
            ru: 'Дополнительный Бекон',
            zh: '额外培根',
            ja: 'エキストラベーコン',
            ko: '베이컨 추가',
            ar: 'بيكون إضافي',
        },
        modal_extra_cheese: {
            es: 'Queso Extra',
            en: 'Extra Cheese',
            de: 'Extra Käse',
            fr: 'Fromage Supplémentaire',
            sv: 'Extra Ost',
            da: 'Ekstra Ost',
            no: 'Ekstra Ost',
            pt: 'Queijo Extra',
            it: 'Formaggio Extra',
            nl: 'Extra Kaas',
            pl: 'Dodatkowy Ser',
            ru: 'Дополнительный Сыр',
            zh: '额外奶酪',
            ja: 'エキストラチーズ',
            ko: '치즈 추가',
            ar: 'جبنة إضافية',
        },
        modal_add_btn: {
            es: 'Añadir al pedido',
            en: 'Add to order',
            de: 'Zur Bestellung hinzufügen',
            fr: 'Ajouter à la commande',
            sv: 'Lägg till beställning',
            da: 'Tilføj til bestilling',
            no: 'Legg til bestilling',
            pt: 'Adicionar ao pedido',
            it: 'Aggiungi all\'ordine',
            nl: 'Voeg toe aan bestelling',
            pl: 'Dodaj do zamówienia',
            ru: 'Добавить к заказу',
            zh: '加入订单',
            ja: '注文に追加',
            ko: '주문에 추가',
            ar: 'أضف إلى الطلب',
        },
        // --- Language picker ---
        lang_label: {
            es: 'Idioma', en: 'Language', de: 'Sprache', fr: 'Langue',
            sv: 'Språk', da: 'Sprog', no: 'Språk', pt: 'Idioma',
            it: 'Lingua', nl: 'Taal', pl: 'Język', ru: 'Язык',
            zh: '语言', ja: '言語', ko: '언어', ar: 'اللغة',
        },
        without: {
            es: 'Sin', en: 'Without', de: 'Ohne', fr: 'Sans', sv: 'Utan', da: 'Uden', no: 'Uten', pt: 'Sem',
            it: 'Senza', nl: 'Zonder', pl: 'Bez', ru: 'Без', zh: '无', ja: 'なし', ko: '없이', ar: 'بدون',
        },
        extra: {
            es: 'Extra', en: 'Extra', de: 'Extra', fr: 'Extra', sv: 'Extra', da: 'Ekstra', no: 'Ekstra', pt: 'Extra',
            it: 'Extra', nl: 'Extra', pl: 'Dodatkowo', ru: 'Экстра', zh: '额外', ja: '追加', ko: '추가', ar: 'إضافي',
        },
        // --- Order Summary Page (resumen.html) ---
        resumen_title: {
            es: 'Mi Pedido 🛒', en: 'My Order 🛒', de: 'Meine Bestellung 🛒', fr: 'Ma Commande 🛒',
            sv: 'Min Beställning 🛒', da: 'Min Bestilling 🛒', no: 'Min Bestilling 🛒', pt: 'Meu Pedido 🛒',
            it: 'Il Mio Ordine 🛒', nl: 'Mijn Bestelling 🛒', pl: 'Moje Zamówienie 🛒', ru: 'Мой заказ 🛒',
            zh: '我的订单 🛒', ja: '注文内容 🛒', ko: '내 주문 🛒', ar: 'طلبي 🛒',
        },
        summary_title: {
            es: 'Resumen del Pedido', en: 'Order Summary', de: 'Bestellübersicht', fr: 'Résumé de la Commande',
            sv: 'Orderöversikt', da: 'Ordreoversigt', no: 'Ordresammendrag', pt: 'Resumo do Pedido',
            it: 'Riepilogo Ordine', nl: 'Besteloverzicht', pl: 'Podsumowanie', ru: 'Детали заказа',
            zh: '订单摘要', ja: '注文の概要', ko: '주문 요약', ar: 'ملخص الطلب',
        },
        empty_cart: {
            es: 'Tu pedido está vacío', en: 'Your cart is empty', de: 'Dein Warenkorb ist leer', fr: 'Votre panier est vide',
            sv: 'Din varukorg är tom', da: 'Din kurv er tom', no: 'Handlekurven er tom', pt: 'O seu carrinho está vazio',
            it: 'Il carrello è vuoto', nl: 'Je winkelmandje is leeg', pl: 'Koszyk jest pusty', ru: 'Корзина пуста',
            zh: '您的购物车是空的', ja: 'カートは空です', ko: '장바구니가 비어 있습니다', ar: 'سلة التسوق فارغة',
        },
        total_label: {
            es: 'Total', en: 'Total', de: 'Gesamt', fr: 'Total',
            sv: 'Totalt', da: 'Total', no: 'Total', pt: 'Total',
            it: 'Totale', nl: 'Totaal', pl: 'Suma', ru: 'Итого',
            zh: '总计', ja: '合計', ko: '총합계', ar: 'المجموع',
        },
        delivery_details: {
            es: 'Detalles de Entrega', en: 'Delivery Details', de: 'Lieferdetails', fr: 'Détails de Livraison',
            sv: 'Leveransdetaljer', da: 'Leveringsdetaljer', no: 'Leveringsdetaljer', pt: 'Detalhes de Entrega',
            it: 'Dettagli Consegna', nl: 'Leveringsdetails', pl: 'Szczegóły Dostawy', ru: 'Детали доставки',
            zh: '配送详情', ja: '配送の詳細', ko: '배송 세부 정보', ar: 'تفاصيل التوصيل',
        },
        delivery_addr: {
            es: 'Dirección de entrega', en: 'Delivery address', de: 'Lieferadresse', fr: 'Adresse de livraison',
            sv: 'Leveransadress', da: 'Leveringsadresse', no: 'Leveringsadresse', pt: 'Morada de entrega',
            it: 'Indirizzo di consegna', nl: 'Bezorgadres', pl: 'Adres dostawy', ru: 'Адрес доставки',
            zh: '配送地址', ja: 'お届け先住所', ko: '배송 주소', ar: 'عنوان التوصيل',
        },
        your_name: {
            es: 'Tu nombre', en: 'Your name', de: 'Dein Name', fr: 'Votre nom',
            sv: 'Ditt namn', da: 'Dit navn', no: 'Ditt navn', pt: 'O seu nome',
            it: 'Il tuo nome', nl: 'Je naam', pl: 'Twoje imię', ru: 'Ваше имя',
            zh: '您的姓名', ja: 'お名前', ko: '이름', ar: 'اسمك',
        },
        phone_label: {
            es: 'Teléfono', en: 'Phone', de: 'Telefon', fr: 'Téléphone',
            sv: 'Telefon', da: 'Telefon', no: 'Telefon', pt: 'Telefone',
            it: 'Telefono', nl: 'Telefoon', pl: 'Telefon', ru: 'Телефон',
            zh: '电话', ja: '電話番号', ko: '전화번호', ar: 'الهاتف',
        },
        payment_method: {
            es: 'Método de Pago', en: 'Payment Method', de: 'Zahlungsmethode', fr: 'Mode de Paiement',
            sv: 'Betalningsmetod', da: 'Betalingsmetode', no: 'Betalingsmetode', pt: 'Método de Pagamento',
            it: 'Metodo di Pagamento', nl: 'Betaalmethode', pl: 'Metoda Płatności', ru: 'Способ оплаты',
            zh: '支付方式', ja: 'お支払い方法', ko: '결제 수단', ar: 'طريقة الدفع',
        },
        cash: {
            es: 'Efectivo', en: 'Cash', de: 'Bargeld', fr: 'Espèces',
            sv: 'Kontant', da: 'Kontant', no: 'Kontant', pt: 'Dinheiro',
            it: 'Contanti', nl: 'Contant', pl: 'Gotówka', ru: 'Наличные',
            zh: '现金', ja: '現金', ko: '현금', ar: 'نقد',
        },
        card: {
            es: 'Tarjeta', en: 'Card', de: 'Karte', fr: 'Carte',
            sv: 'Kort', da: 'Kort', no: 'Kort', pt: 'Sobre Cartão',
            it: 'Carta', nl: 'Kaart', pl: 'Karta', ru: 'Карта',
            zh: '卡', ja: 'カード', ko: '카드', ar: 'بطاقة',
        },
        card_number_label: {
            es: 'Número de Tarjeta', en: 'Card Number', de: 'Kartennummer', fr: 'Numéro de Carte',
            sv: 'Kortnummer', da: 'Kortnummer', no: 'Kortnummer', pt: 'Número do Cartão',
            it: 'Numero Carta', nl: 'Kaartnummer', pl: 'Numer Karty', ru: 'Номер карты',
            zh: '卡号', ja: 'カード番号', ko: '카드 번호', ar: 'رقم البطاقة',
        },
        card_expiry_label: {
            es: 'Vencimiento', en: 'Expiry', de: 'Gültig bis', fr: 'Expiration',
            sv: 'Utgångsdatum', da: 'Udløbsdato', no: 'Utløpsdato', pt: 'Validade',
            it: 'Scadenza', nl: 'Vervaldatum', pl: 'Termin ważności', ru: 'Срок действия',
            zh: '有效期', ja: '有効期限', ko: '만료일', ar: 'تاريخ الانتهاء',
        },
        card_cvc_label: {
            es: 'CVC', en: 'CVC', de: 'CVC', fr: 'CVC',
            sv: 'CVC', da: 'CVC', no: 'CVC', pt: 'CVC',
            it: 'CVC', nl: 'CVC', pl: 'CVC', ru: 'CVC',
            zh: 'CVC', ja: 'CVC', ko: 'CVC', ar: 'CVC',
        },
        card_holder_label: {
            es: 'Nombre del titular', en: 'Cardholder name', de: 'Name des Karteninhabers', fr: 'Nom du titulaire',
            sv: 'Kortinnehavarens namn', da: 'Kortholders navn', no: 'Kortholders navn', pt: 'Nome do titular',
            it: 'Nome titolare', nl: 'Naam kaarthouder', pl: 'Imię i nazwisko właściciela', ru: 'Имя владельца',
            zh: '持卡人姓名', ja: 'カード名義', ko: '카드 소유자 이름', ar: 'اسم صاحب البطاقة',
        },
        processing_payment: {
            es: 'Procesando pago seguro...', en: 'Processing secure payment...', de: 'Sichere Zahlung wird verarbeitet...', fr: 'Traitement du paiement sécurisé...',
            sv: 'Bearbetar säker betalning...', da: 'Behandler sikker betaling...', no: 'Behandler sikker betaling...', pt: 'Processando pagamento seguro...',
            it: 'Elaborazione pagamento sicuro...', nl: 'Beveiligde betaling verwerken...', pl: 'Przetwarzanie bezpiecznej płatności...', ru: 'Обработка безопасного платежа...',
            zh: '正在处理安全支付...', ja: '安全な支払いを処理中...', ko: '안전한 결제 처리 중...', ar: 'جاري معالجة الدفع الآمن...',
        },
        place_order_btn: {
            es: '🛵 Realizar Pedido', en: '🛵 Place Order', de: '🛵 Bestellung aufgeben', fr: '🛵 Passer la Commande',
            sv: '🛵 Lägg Beställning', da: '🛵 Afgiv Bestilling', no: '🛵 Legg Bestilling', pt: '🛵 Fazer Pedido',
            it: '🛵 Effettua Ordine', nl: '🛵 Bestelling Plaatsen', pl: '🛵 Złóż Zamówienie', ru: '🛵 Оформить заказ',
            zh: '🛵 下单', ja: '🛵 注文を確定', ko: '🛵 주문하기', ar: '🛵 إتمام الطلب',
        },
        go_to_glovo: {
            es: 'Ir a Glovo', en: 'Go to Glovo', de: 'Zu Glovo gehen', fr: 'Aller sur Glovo',
            sv: 'Gå till Glovo', da: 'Gå til Glovo', no: 'Gå til Glovo', pt: 'Ir para o Glovo',
            it: 'Vai su Glovo', nl: 'Ga naar Glovo', pl: 'Przejdź do Glovo', ru: 'Перейти в Glovo',
            zh: '前往 Glovo', ja: 'Glovoへ移動', ko: 'Glovo로 이동', ar: 'انتقل إلى Glovo',
        },
        estimated_time: {
            es: 'Llegará en aproximadamente 25-35 min', en: 'Arrives in approx. 25-35 min', de: 'Ankunft in ca. 25-35 Min.', fr: 'Arrive en environ 25-35 min',
            sv: 'Anländer om ca 25-35 min', da: 'Ankommer om ca. 25-35 min', no: 'Ankommer om ca. 25-35 min', pt: 'Chega em cerca de 25-35 min',
            it: 'Arriva in circa 25-35 min', nl: 'Aankomst in ca. 25-35 min', pl: 'Dostawa za ok. 25-35 min', ru: 'Приедет примерно через 25-35 мин',
            zh: '预计 25-35 分钟送达', ja: '約25〜35分で到着', ko: '약 25-35분 내 도착', ar: 'يصل خلال 25-35 دقيقة تقريباً',
        },
        add_drink: {
            es: '¿Añadir una bebida?', en: 'Add a drink?', de: 'Ein Getränk hinzufügen?', fr: 'Ajouter une boisson?',
            sv: 'Lägg till en dryck?', da: 'Tilføj en drik?', no: 'Legg till en drikke?', pt: 'Adicionar una bebida?',
            it: 'Aggiungi una bevanda?', nl: 'Een drankje toevoegen?', pl: 'Dodać napój?', ru: 'Добавить напиток?',
            zh: '加点饮料？', ja: '飲み物を追加しますか？', ko: '음료를 추가하시겠습니까?', ar: 'إضافة مشروب؟',
        },
        // --- Profile Page (perfil.html) ---
        tab_login: {
            es: 'Acceder', en: 'Login', de: 'Anmelden', fr: 'Connexion',
            sv: 'Logga in', da: 'Log ind', no: 'Logg inn', pt: 'Entrar',
            it: 'Accedi', nl: 'Inloggen', pl: 'Zaloguj', ru: 'Войти',
            zh: '登录', ja: 'ログイン', ko: '로그인', ar: 'تسجيل الدخول',
        },
        tab_register: {
            es: 'Registrarse', en: 'Register', de: 'Registrieren', fr: "S'inscrire",
            sv: 'Registrera', da: 'Registrer', no: 'Registrer', pt: 'Registar',
            it: 'Registrati', nl: 'Registreren', pl: 'Zarejestruj', ru: 'Регистрация',
            zh: '注册', ja: '新規登録', ko: '회원가입', ar: 'إنشاء حساب',
        },
        social_login_msg: {
            es: 'O accede con tus redes sociales', en: 'Or login with social media', de: 'Oder über soziale Netzwerke', fr: 'Ou via les réseaux sociaux',
            sv: 'Eller via sociala medier', da: 'Eller via sociale medier', no: 'Eller via sosiale medier', pt: 'Ou entrar com redes sociais',
            it: 'O accedi con i social', nl: 'Of via sociale media', pl: 'Lub przez media społecznościowe', ru: 'Или через соцсети',
            zh: '或通过社交媒体登录', ja: 'またはSNS de ログイン', ko: '또는 소셜 계정으로 로그인', ar: 'أو عبر وسائل التواصل الاجتماعي',
        },
        email_label: {
            es: 'Correo electrónico', en: 'Email address', de: 'E-Mail-Adresse', fr: 'E-mail',
            sv: 'E-postadress', da: 'E-mail adresse', no: 'E-postadresse', pt: 'E-mail',
            it: 'Indirizzo e-mail', nl: 'E-mailadres', pl: 'Adres e-mail', ru: 'Электронная почта',
            zh: '电子邮件地址', ja: 'メールアドレス', ko: '이메일 주소', ar: 'البريد الإلكتروني',
        },
        pass_label: {
            es: 'Contraseña', en: 'Password', de: 'Passwort', fr: 'Mot de passe',
            sv: 'Lösenord', da: 'Adgangskode', no: 'Passord', pt: 'Senha',
            it: 'Password', nl: 'Wachtwoord', pl: 'Hasło', ru: 'Пароль',
            zh: '密码', ja: 'パスワード', ko: '비밀번호', ar: 'كلمة المرور',
        },
        login_btn: {
            es: 'Entrar a mi cuenta', en: 'Login to my account', de: 'Anmelden', fr: 'Se connecter',
            sv: 'Logga in på mitt konto', da: 'Log ind på min konto', no: 'Logg inn på min konto', pt: 'Entrar na minha conta',
            it: 'Accedi al mio account', nl: 'Inloggen op mijn account', pl: 'Zaloguj do konta', ru: 'Войти в аккаунт',
            zh: '登录我的账户', ja: 'ログイン', ko: '계정 로그인', ar: 'تسجيل الدخول إلى حسابي',
        },
        register_btn: {
            es: 'Crear cuenta', en: 'Create account', de: 'Konto erstellen', fr: 'Créer un compte',
            sv: 'Skapa konto', da: 'Opret konto', no: 'Opprett konto', pt: 'Criar conta',
            it: 'Crea account', nl: 'Account aanmaken', pl: 'Załóż konto', ru: 'Создать аккаунт',
            zh: '创建账户', ja: 'アカウント作成', ko: '계정 생성', ar: 'إنشاء حساب',
        },
        my_data: {
            es: 'Mis datos', en: 'My profile', de: 'Meine Daten', fr: 'Mes données',
            sv: 'Mina uppgifter', da: 'Mine data', no: 'Mine data', pt: 'Meus dados',
            it: 'I miei dati', nl: 'Mijn gegevens', pl: 'Moje dane', ru: 'Мои данные',
            zh: '我的资料', ja: 'ユーザー情報', ko: '내 정보', ar: 'بياناتي',
        },
        save_changes: {
            es: 'Guardar cambios', en: 'Save changes', de: 'Änderungen speichern', fr: 'Enregistrer',
            sv: 'Spara ändringar', da: 'Gem ændringer', no: 'Lagre endringer', pt: 'Guardar alterações',
            it: 'Salva modifiche', nl: 'Wijzigingen opslaan', pl: 'Zapisz zmiany', ru: 'Сохранить изменения',
            zh: '保存更改', ja: '変更を保存', ko: '변경 사항 저장', ar: 'حفظ التغييرات',
            sv: 'Logga ut', da: 'Log ud', no: 'Logg ut', pt: 'Sair',
            it: 'Esci', nl: 'Uitloggen', pl: 'Wyloguj', ru: 'Выйти',
            zh: '退出登录', ja: 'ログアウト', ko: '로그아웃', ar: 'تسجيل الخروج',
        },
        // --- Confirmation Page (confirmacion.html) ---
        confirm_title: {
            es: 'Pedido Confirmado ✅', en: 'Order Confirmed ✅', de: 'Bestellung bestätigt ✅', fr: 'Commande Confirmée ✅',
            sv: 'Order bekräftad ✅', da: 'Ordre bekræftet ✅', no: 'Bestilling bekreftet ✅', pt: 'Pedido Confirmado ✅',
            it: 'Ordine Confermato ✅', nl: 'Bestelling Bevestigd ✅', pl: 'Zamówienie Potwierdzone ✅', ru: 'Заказ подтвержден ✅',
            zh: '订单已确认 ✅', ja: '注文確定 ✅', ko: '주문 확인됨 ✅', ar: 'تم تأكيد الطلب ✅',
        },
        order_on_way: {
            es: '¡Pedido en Marcha!', en: 'Order in Progress!', de: 'Bestellung läuft!', fr: 'Commande en cours !',
            sv: 'Beställning på väg!', da: 'Bestilling er på vej!', no: 'Bestilling på vei!', pt: 'Pedido em andamento!',
            it: 'Ordine in arrivo!', nl: 'Bestelling is onderweg!', pl: 'Zamówienie w drodze!', ru: 'Заказ в пути!',
            zh: '订单进行中！', ja: '注文処理中！', ko: '주문 처리 중!', ar: 'الطلب قيد التنفيذ!',
        },
        thanks_customer: {
            es: 'Gracias,', en: 'Thank you,', de: 'Danke,', fr: 'Merci,',
            sv: 'Tack,', da: 'Tak,', no: 'Takk,', pt: 'Obrigado,',
            it: 'Grazie,', nl: 'Bedankt,', pl: 'Dziękujemy,', ru: 'Спасибо,',
            zh: '谢谢,', ja: 'ありがとうございます,', ko: '감사합니다,', ar: 'شكراً لك,',
        },
        preparing_order: {
            es: 'Estamos preparando tu carne a la brasa con todo el mimo del mundo.',
            en: 'We are preparing your grilled meat with all the care in the world.',
            de: 'Wir bereiten Ihr Grillfleisch mit aller Sorgfalt der Welt zu.',
            fr: "Nous préparons votre viande grillée avec tout le soin du monde.",
            sv: 'Vi förbereder ditt grillade kött med all omsorg i världen.',
            da: 'Vi tilbereder dit grillede kød med al den omhu i verden.',
            no: 'Vi tilbereder ditt grillede kjøtt med all omsorg i verden.',
            pt: 'Estamos preparando sua carne grelhada con todo o carinho do mundo.',
            it: 'Stiamo preparando la tua carne alla griglia con tutta la cura del mondo.',
            nl: 'We bereiden je gegrilde vlees met alle zorg van de wereld.',
            pl: 'Przygotowujemy Twoje grillowane mięso z najwyższą starannością.',
            ru: 'Мы готовим ваше мясо на гриле со всей заботой в мире.',
            zh: '我们正在用心为您准备烤肉。',
            ja: '真心を込めてお肉を焼いています。',
            ko: '정성을 다해 고기를 준비하고 있습니다.',
            ar: 'نحن نجهز لحمك المشوي بكل عناية في العالم.',
        },
        estimated_time_label: {
            es: 'Tiempo Estimado', en: 'Estimated Time', de: 'Geschätzte Zeit', fr: 'Temps Estimé',
            sv: 'Beräknad tid', da: 'Estimeret tid', no: 'Estimert tid', pt: 'Tempo Estimado',
            it: 'Tempo Stimato', nl: 'Geschatte tijd', pl: 'Przewidywany czas', ru: 'Оцененное время',
            zh: '预计时间', ja: '配達予定時間', ko: '예상 시간', ar: 'الوقت المقدر',
        },
        delivery_details: {
            es: 'Detalles de Entrega', en: 'Delivery Details', de: 'Lieferdetails', fr: 'Détails de Livraison',
            sv: 'Leveransuppgifter', da: 'Leveringsoplysninger', no: 'Leveringsdetaljer', pt: 'Detalhes da Entrega',
            it: 'Dettagli Consegna', nl: 'Leveringsdetails', pl: 'Szczegóły dostawy', ru: 'Детали доставки',
            zh: '配送详情', ja: '配送の詳細', ko: '배송 정보', ar: 'تفاصيل التوصيل',
        },
        stamp_added: {
            es: 'Sello Añadido 🏅', en: 'Stamp Added 🏅', de: 'Stempel hinzugefügt 🏅', fr: 'Timbre ajouté 🏅',
            sv: 'Stämpel tillagd 🏅', da: 'Stempel tilføjet 🏅', no: 'Stempel lagt til 🏅', pt: 'Selo Adicionado 🏅',
            it: 'Timbro Aggiunto 🏅', nl: 'Stempel toegevoegd 🏅', pl: 'Pieczątka dodana 🏅', ru: 'Штамп добавлен 🏅',
            zh: '已添加印章 🏅', ja: 'スタンプ追加 🏅', ko: '스탬프 추가됨 🏅', ar: 'تم إضافة ختم 🏅',
        },
        loyalty_progress: {
            es: '¡Ya tienes {0}/9 sellos! Tu próximo pedido está más cerca de ser gratis.',
            en: 'You already have {0}/9 stamps! Your next order is closer to being free.',
            de: 'Du hast bereits {0}/9 Stempel! Deine nächste Bestellung ist näher daran, kostenlos zu sein.',
            fr: "Vous avez déjà {0}/9 timbres ! Votre prochaine commande est plus proche d'être gratuite.",
            sv: 'Du har redan {0}/9 stämplar! Din nästa beställning är närmare att bli gratis.',
            da: 'Du har allerede {0}/9 stempler! Din næste bestilling er tættere på at være gratis.',
            no: 'Du har allerede {0}/9 stempler! Din neste bestilling er nærmere å bli gratis.',
            pt: 'Você já tem {0}/9 selos! Seu próximo pedido está mais perto de ser grátis.',
            it: 'Hai già {0}/9 timbri! Il tuo prossimo ordine è più vicino ad essere gratuito.',
            nl: 'Je hebt al {0}/9 stempels! Je volgende bestelling is dichter bij gratis zijn.',
            pl: 'Masz już {0}/9 pieczątek! Twoje następne zamówienie jest bliżej darmowego.',
            ru: 'У вас уже есть {0}/9 штампов! Ваш следующий заказ ближе к бесплатному.',
            zh: '您已经拥有 {0}/9 个印章！您的下一个订单离免费更近了。',
            ja: 'すでに {0}/9 個のスタンプがあります！次の注文は無料に近づいています。',
            ko: '이미 {0}/9개의 스탬프를 모았습니다! 다음 주문은 무료로 이용할 수 있습니다.',
            ar: 'لديك بالفعل {0}/9 أختام! طلبك القادم يقترب من أن يكون مجانياً.',
        },
        order_problem: {
            es: '¿Algún problema con el pedido?', en: 'Any problem with the order?', de: 'Irgendein Problem mit der Bestellung?', fr: 'Un problème avec la commande ?',
            sv: 'Problem med beställningen?', da: 'Problem med bestillingen?', no: 'Problemer med bestillingen?', pt: 'Algum problema com o pedido?',
            it: 'Qualche problema con l\'ordine?', nl: 'Problemen met de bestelling?', pl: 'Problem z zamówieniem?', ru: 'Проблемы с заказом?',
            zh: '订单有问题？', ja: '注文に問題がありますか？', ko: '주문에 문제가 있습니까?', ar: 'هل هناك مشكلة في الطلب؟',
        },
        contact_support: {
            es: 'Contactar con soporte por WhatsApp', en: 'Contact support via WhatsApp', de: 'Support per WhatsApp kontaktieren', fr: 'Contacter le support via WhatsApp',
            sv: 'Kontakta support via WhatsApp', da: 'Kontakt support via WhatsApp', no: 'Kontakt support via WhatsApp', pt: 'Contatar suporte via WhatsApp',
            it: 'Contatta il supporto via WhatsApp', nl: 'Contact opnemen via WhatsApp', pl: 'Kontakt z pomocą przez WhatsApp', ru: 'Связаться с поддержкой через WhatsApp',
            zh: '通过 WhatsApp 联系支持', ja: 'WhatsAppでサポートに連絡', ko: 'WhatsApp으로 고객 지원 센터에 문의', ar: 'تواصل مع الدعم عبر واتساب',
        },
        back_to_home: {
            es: '🏠 Volver al Inicio', en: '🏠 Back to Home', de: '🏠 Zurück zum Anfang', fr: "🏠 Retour à l'accueil",
            sv: '🏠 Tillbaka till start', da: '🏠 Tilbage til start', no: '🏠 Tilbake til start', pt: '🏠 Voltar ao Início',
            it: '🏠 Torna alla Home', nl: '🏠 Terug naar Start', pl: '🏠 Powrót do Strony Głównej', ru: '🏠 Вернуться на главную',
            zh: '🏠 返回首页', ja: '🏠 ホームに戻る', ko: '🏠 홈으로 돌아가기', ar: '🏠 العودة إلى الصفحة الرئيسية',
        },
        nav_reservations: {
            es: 'Reservar Mesa', en: 'Book a Table', de: 'Tisch reservieren', fr: 'Réserver une Table',
            sv: 'Boka bord', da: 'Bestil et bord', no: 'Bestill et bord', pt: 'Reservar Mesa',
            it: 'Prenota un Tavolo', nl: 'Reserveer een Tafel', pl: 'Zarezerwuj stolik', ru: 'Забронировать столик',
            zh: '预订桌子', ja: 'テーブルを予約する', ko: 'テーブル 예약', ar: 'احجز طاولة',
        },
    },

    // ── State ──────────────────────────────────────────────
    current: 'es',

    // ── Get translation ────────────────────────────────────
    t(key) {
        const map = this.translations[key];
        if (!map) return key;
        return map[this.current] || map['es'] || key;
    },

    // ── Apply translations to DOM ─────────────────────────
    apply() {
        const lang = this.current;
        const meta = this.languages.find(l => l.code === lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = meta ? meta.dir : 'ltr';
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const attr = el.getAttribute('data-i18n-attr');
            const val = this.t(key);
            if (attr) el.setAttribute(attr, val);
            else el.textContent = val;
        });
        // Update active state on switcher buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
        });
        // Update flag in trigger button
        const flagEl = document.getElementById('langTriggerFlag');
        if (flagEl && meta) flagEl.textContent = meta.flag;
        // Persist choice
        try { localStorage.setItem('brasa_lang', lang); } catch (e) { }
    },

    // ── Switch language ────────────────────────────────────
    set(code) {
        if (!this.languages.find(l => l.code === code)) return;
        const old = this.current;
        this.current = code;
        this.apply();
        closeLangPanel();
        if (old !== code) {
            window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: code } }));
        }
    },

    // ── Init ───────────────────────────────────────────────
    init() {
        try {
            const saved = localStorage.getItem('brasa_lang');
            if (saved && this.languages.find(l => l.code === saved)) {
                this.current = saved;
            } else {
                // Detect browser language
                const browser = (navigator.language || 'es').split('-')[0].toLowerCase();
                if (this.languages.find(l => l.code === browser)) this.current = browser;
            }
        } catch (e) { }
        this.apply();
    }
};

// ── Language Panel UI ──────────────────────────────────
function buildLangPanel() {
    // Inject CSS
    if (!document.getElementById('i18n-style')) {
        const style = document.createElement('style');
        style.id = 'i18n-style';
        style.textContent = `
      /* Language trigger in header */
      .lang-trigger {
        display: flex; align-items: center; gap: 5px;
        background: rgba(200,151,58,.12);
        border: 1px solid rgba(200,151,58,.35);
        border-radius: 9999px;
        padding: 5px 10px;
        cursor: pointer; color: var(--accent);
        font-size: .72rem; font-weight: 700;
        transition: background .15s, box-shadow .15s;
        flex-shrink: 0; white-space: nowrap;
      }
      .lang-trigger:hover { background: rgba(200,151,58,.22); box-shadow: 0 0 12px rgba(200,151,58,.2); }
      .lang-trigger-flag { font-size: 1rem; }
      .lang-trigger-text { display: none; }
      @media (min-width: 360px) { .lang-trigger-text { display: inline; } }

      /* Panel overlay */
      .lang-overlay {
        position: fixed; inset: 0; z-index: 400;
        background: rgba(0,0,0,.6); backdrop-filter: blur(4px);
        opacity: 0; pointer-events: none; transition: opacity .25s;
      }
      .lang-overlay.open { opacity: 1; pointer-events: auto; }

      /* Panel drawer */
      .lang-panel {
        position: fixed; bottom: 0; left: 50%; z-index: 401;
        transform: translateX(-50%) translateY(110%);
        width: 100%; max-width: 430px;
        background: #1e1e1e;
        border-top: 1px solid rgba(200,151,58,.3);
        border-radius: 20px 20px 0 0;
        padding: 0 0 env(safe-area-inset-bottom);
        transition: transform .3s cubic-bezier(.34,1.2,.64,1);
        max-height: 70vh; display: flex; flex-direction: column;
      }
      .lang-panel.open { transform: translateX(-50%) translateY(0); }

      /* Panel handle */
      .lang-panel-handle {
        width: 40px; height: 4px; border-radius: 9999px;
        background: rgba(255,255,255,.2); margin: 12px auto 0;
      }

      /* Panel header */
      .lang-panel-header {
        padding: 14px 20px 10px;
        font-size: .75rem; font-weight: 900;
        text-transform: uppercase; letter-spacing: .1em;
        color: var(--accent); border-bottom: 1px solid rgba(200,151,58,.15);
      }

      /* Grid of language buttons */
      .lang-grid {
        display: grid; grid-template-columns: repeat(2, 1fr);
        gap: 8px; padding: 14px 16px 20px;
        overflow-y: auto;
      }
      .lang-btn {
        display: flex; align-items: center; gap: 10px;
        background: #2a2a2a; border: 1.5px solid rgba(255,255,255,.07);
        border-radius: 12px; padding: 10px 12px;
        cursor: pointer; text-align: left; width: 100%;
        transition: background .15s, border-color .15s, transform .12s;
        font-family: 'Epilogue', sans-serif;
      }
      .lang-btn:hover { background: #333; transform: translateY(-1px); }
      .lang-btn--active {
        background: rgba(200,151,58,.15) !important;
        border-color: var(--accent) !important;
      }
      .lang-btn-flag { font-size: 1.3rem; flex-shrink: 0; }
      .lang-btn-info { min-width: 0; }
      .lang-btn-label { font-size: .8rem; font-weight: 700; color: #f5f0e8; display: block; }
      .lang-btn-check {
        margin-left: auto; color: var(--accent); font-size: 1rem;
        flex-shrink: 0; display: none;
      }
      .lang-btn--active .lang-btn-check { display: block; }
    `;
        document.head.appendChild(style);
    }

    // Overlay
    const overlay = document.createElement('div');
    overlay.className = 'lang-overlay';
    overlay.id = 'langOverlay';
    overlay.onclick = closeLangPanel;
    document.body.appendChild(overlay);

    // Panel
    const panel = document.createElement('div');
    panel.className = 'lang-panel';
    panel.id = 'langPanel';
    panel.innerHTML = `
    <div class="lang-panel-handle"></div>
    <div class="lang-panel-header" data-i18n="lang_label">Idioma</div>
    <div class="lang-grid">
      ${I18N.languages.map(l => `
        <button class="lang-btn${l.code === I18N.current ? ' lang-btn--active' : ''}"
                data-lang="${l.code}" onclick="I18N.set('${l.code}')">
          <span class="lang-btn-flag">${l.flag}</span>
          <span class="lang-btn-info">
            <span class="lang-btn-label">${l.label}</span>
          </span>
          <span class="lang-btn-check material-symbols-outlined">check_circle</span>
        </button>`).join('')}
    </div>`;
    document.body.appendChild(panel);
}

function openLangPanel() {
    document.getElementById('langOverlay')?.classList.add('open');
    document.getElementById('langPanel')?.classList.add('open');
}
function closeLangPanel() {
    document.getElementById('langOverlay')?.classList.remove('open');
    document.getElementById('langPanel')?.classList.remove('open');
}

// ── Auto-init on DOMContentLoaded ─────────────────────
document.addEventListener('DOMContentLoaded', () => {
    buildLangPanel();
    I18N.init();
});
