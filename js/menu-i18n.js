/* ── Menu-specific i18n (ingredients + descriptions) ── */

// Helper: get value for current lang, fallback to 'en', then 'es'
function _ml(map) {
    var L = (typeof I18N !== 'undefined') ? I18N.current : 'es';
    return map[L] || map.en || map.es || '';
}

// ── Dish descriptions keyed by item id ─────────────────
var DESC_I18N = {
    'la-secreta': {
        es: 'Pan brioche, 180g ternera angus irlandesa madurada, cebolla crispy, mermelada de bacon, cheddar americano, edam, pepinillos y salsa secreta.',
        en: 'Brioche bun, 180g aged Irish Angus beef, crispy onion, bacon jam, American cheddar, edam, pickles and secret sauce.',
        de: 'Brioche-Brötchen, 180g gereiftes irisches Angus-Rind, knusprige Zwiebeln, Speckmarmelade, amerikanischer Cheddar, Edam, Essiggurken und Geheimsoße.',
        fr: 'Pain brioche, 180g de bœuf Angus irlandais affiné, oignon croustillant, confiture de bacon, cheddar américain, edam, cornichons et sauce secrète.',
        pt: 'Pão brioche, 180g de novilho angus irlandês maturado, cebola crispy, mermelada de bacon, cheddar americano, edam, pepinilhos e molho secreto.',
        it: 'Pane brioche, 180g di manzo angus irlandese stagionato, cipolla croccante, marmellata di bacon, cheddar americano, edam, cetriolini e salsa segreta.',
        zh: '布里欧修面包，180g爱尔兰熟成安格斯牛肉，脆洋葱，培根果酱，美式车打奶酪，艾登奶酪，腌黄瓜，秘制酱。',
        ru: 'Бриошь, 180г выдержанного ирландского Ангуса, хрустящий лук, беконовый джем, американский чеддер, эдам, маринованные огурцы и секретный соус.',
        ar: 'خبز بريوش، 180 غ لحم أنغوس إيرلندي، بصل مقرمش، مربى بيكون، شيدر أمريكي، إيدام، مخللات وصلصة سرية.',
        ja: 'ブリオッシュバン、180g熟成アイルランドアンガス牛肉、カリカリオニオン、ベーコンジャム、アメリカンチェダー、エダム、ピクルス、シークレットソース。',
        ko: '브리오슈 번, 180g 아일랜드 숙성 앵거스 쇠고기, 크리스피 어니언, 베이컨 잼, 아메리칸 체다, 에담, 피클, 시크릿 소스.'
    },
    'la-explosiva': {
        es: 'Pan brioche, 180g ternera angus, pulled pork, salsa queso cheddar de risketos, cebolla crispy y crunchy de risketos.',
        en: 'Brioche bun, 180g Angus, pulled pork, Risketos cheddar sauce, crispy onion and Risketos crunch.',
        de: 'Brioche-Brötchen, 180g Angus, Pulled Pork, Risketos-Cheddar-Soße, knusprige Zwiebeln und Risketos-Crunchy.',
        fr: 'Pain brioche, 180g Angus, pulled pork, sauce cheddar Risketos, oignon croustillant et craquant Risketos.',
        pt: 'Pão brioche, 180g Angus, pulled pork, cheddar Risketos, cebola crispy e crunchy de Risketos.',
        it: 'Pane brioche, 180g Angus, pulled pork, salsa cheddar Risketos, cipolla croccante e croccante Risketos.',
        zh: '布里欧修面包，180g安格斯，慢炖猪肉，Risketos车打酱，脆洋葱，Risketos脆片。',
        ru: 'Бриошь, 180г Ангус, рваная свинина, соус чеддер Risketos, хрустящий лук и криспи Risketos.',
        ar: 'خبز بريوش، 180 غ أنغوس، لحم مفتت، صلصة شيدر ريسكيتوس، بصل مقرمش وكرانشي ريسكيتوس.',
        ja: 'ブリオッシュバン、180gアンガス、プルドポーク、リスケトスチェダーソース、カリカリオニオン、リスケトスクランチ。',
        ko: '브리오슈 번, 180g 앵거스, 풀드포크, 리스케토스 체다 소스, 크리스피 어니언, 리스케토스 크런치.'
    },
    'la-campera': {
        es: 'Pan brioche, 180g ternera angus madurada, salsa jabugitos, panceta ibérica y huevo frito.',
        en: 'Brioche bun, 180g aged Angus, Jabugitos sauce, Ibérico bacon and fried egg.',
        de: 'Brioche-Brötchen, 180g gereiftes Angus, Jabugitos-Soße, iberischer Speck und Spiegelei.',
        fr: 'Pain brioche, 180g Angus affiné, sauce Jabugitos, lard ibérique et œuf au plat.',
        pt: 'Pão brioche, 180g Angus maturado, molho jabugitos, panceta ibérica e ovo estrelado.',
        it: 'Pane brioche, 180g Angus stagionato, salsa jabugitos, pancetta iberica e uovo fritto.',
        zh: '布里欧修面包，180g熟成安格斯，Jabugitos酱，伊比利亚培根，煎蛋。',
        ru: 'Бриошь, 180г выдержанный Ангус, соус Jabugitos, иберийский бекон и яичница.',
        ar: 'خبز بريوش، 180 غ أنغوس، صلصة خابوغيتوس، لحم إيبيري وبيضة مقلية.',
        ja: 'ブリオッシュバン、180g熟成アンガス、ハブギトスソース、イベリコ風ベーコン、目玉焼き。',
        ko: '브리오슈 번, 180g 숙성 앵거스, 하부기토스 소스, 이베리코 베이컨, 프라이 달걀.'
    },
    'la-simple': {
        es: 'Pan brioche, 180g ternera angus madurada, cheddar americano y edam.',
        en: 'Brioche bun, 180g aged Angus, American cheddar and edam.',
        de: 'Brioche-Brötchen, 180g gereiftes Angus, amerikanischer Cheddar und Edam.',
        fr: 'Pain brioche, 180g Angus affiné, cheddar américain et edam.',
        pt: 'Pão brioche, 180g Angus maturado, cheddar americano e edam.',
        it: 'Pane brioche, 180g Angus stagionato, cheddar americano ed edam.',
        zh: '布里欧修面包，180g熟成安格斯，美式车打奶酪，艾登奶酪。',
        ru: 'Бриошь, 180г выдержанный Ангус, американский чеддер и эдам.',
        ar: 'خبز بريوش، 180 غ أنغوس، شيدر أمريكي وإيدام.',
        ja: 'ブリオッシュバン、180g熟成アンガス、アメリカンチェダー、エダム。',
        ko: '브리오슈 번, 180g 숙성 앵거스, 아메리칸 체다, 에담.'
    },
    'la-pistachera': {
        es: 'Pan brioche, 180g ternera angus madurada, panceta ibérica, huevo frito, mermelada de bacon y salsa especial de pistacho casera.',
        en: 'Brioche bun, 180g aged Angus, Ibérico bacon, fried egg, bacon jam and homemade pistachio sauce.',
        de: 'Brioche-Brötchen, 180g gereiftes Angus, iberischer Speck, Spiegelei, Speckmarmelade und hausgemachte Pistaziensoße.',
        fr: 'Pain brioche, 180g Angus affiné, lard ibérique, œuf au plat, confiture de bacon et sauce pistache maison.',
        pt: 'Pão brioche, 180g Angus, panceta ibérica, ovo estrelado, mermelada de bacon e molho de pistacho caseiro.',
        it: 'Pane brioche, 180g Angus, pancetta iberica, uovo fritto, marmellata di bacon e salsa al pistacchio.',
        zh: '布里欧修面包，180g熟成安格斯，伊比利亚培根，煎蛋，培根果酱，自制开心果酱。',
        ru: 'Бриошь, 180г Ангус, иберийский бекон, яичница, беконовый джем и домашний соус с фисташками.',
        ar: 'خبز بريوش، 180 غ أنغوس، لحم إيبيري، بيضة مقلية، مربى البيكون وصلصة فستق منزلية.',
        ja: 'ブリオッシュバン、180g熟成アンガス、イベリコ風ベーコン、目玉焼き、ベーコンジャム、自家製ピスタチオソース。',
        ko: '브리오슈 번, 180g 숙성 앵거스, 이베리코 베이컨, 프라이 달걀, 베이컨 잼, 홈메이드 피스타치오 소스.'
    },
    'el-furioso': {
        es: 'Pan brioche abierto con pulled pork y kimchi, guacamole, nachos, cheddar y jalapeños.',
        en: 'Open brioche bun with pulled pork and kimchi, guacamole, nachos, cheddar and jalapeños.',
        de: 'Offenes Brioche-Brötchen mit Pulled Pork und Kimchi, Guacamole, Nachos, Cheddar und Jalapeños.',
        fr: 'Pain brioche ouvert avec pulled pork et kimchi, guacamole, nachos, cheddar et jalapeños.',
        pt: 'Pão brioche aberto com pulled pork e kimchi, guacamole, nachos, cheddar e jalapeños.',
        it: 'Pane brioche aperto con pulled pork e kimchi, guacamole, nachos, cheddar e jalapeños.',
        zh: '开放式布里欧修面包，配慢炖猪肉和泡菜，鳄梨酱，玉米片，车打奶酪，墨西哥辣椒。',
        ru: 'Открытая бриошь с рваной свининой и кимчи, гуакамоле, начос, чеддер и халапеньо.',
        ar: 'خبز بريوش مفتوح مع لحم مفتت وكيمتشي، غواكامولي، ناتشوز، شيدر وجلابينيو.',
        ja: '開いたブリオッシュバン、プルドポークとキムチ、グアカモレ、ナチョス、チェダー、ハラペーニョ。',
        ko: '오픈 브리오슈 번, 풀드포크와 김치, 과카몰리, 나초, 체다, 할라페뇨.'
    },
    'el-simplon': {
        es: 'Pan brioche abierto, filetes de pollo crujiente especiado, mayo de trufa, bacon y cheddar.',
        en: 'Open brioche bun, spiced crispy chicken fillets, truffle mayo, bacon and cheddar.',
        de: 'Offenes Brioche-Brötchen, gewürzte knusprige Hähnchen-Filets, Trüffel-Mayo, Bacon und Cheddar.',
        fr: 'Pain brioche ouvert, filets de poulet croustillant épicé, mayo à la truffe, bacon et cheddar.',
        pt: 'Pão brioche aberto, filetes de frango crujiente especiado, mayo de trufa, bacon e cheddar.',
        it: 'Pane brioche aperto, filetti di pollo croccante speziato, maionese al tartufo, bacon e cheddar.',
        zh: '开放式布里欧修面包，香辣脆鸡片，松露蛋黄酱，培根，车打奶酪。',
        ru: 'Открытая бриошь, хрустящие куриные филе со специями, трюфельный майонез, бекон и чеддер.',
        ar: 'خبز بريوش مفتوح، شرائح دجاج مقرمشة بالتوابل، مايونيز الكمأة، بيكون وشيدر.',
        ja: '開いたブリオッシュバン、スパイシークリスピーチキンフィレ、トリュフマヨ、ベーコン、チェダー。',
        ko: '오픈 브리오슈 번, 스파이시 크리스피 치킨 필렛, 트러플 마요, 베이컨, 체다.'
    },
    'el-americano': {
        es: 'Rebanadas de pan brioche marcadas con mantequilla, pollo trufado, huevo, cheddar americano, alioli de trufa y crujiente lechuga y tomate.',
        en: 'Buttered toasted brioche slices, truffled chicken, egg, American cheddar, truffle aioli, crisp lettuce and tomato.',
        de: 'Gebutterte geröstete Brioche-Scheiben, Trüffelhuhn, Ei, amerikanischer Cheddar, Trüffel-Aioli, knuspriger Salat und Tomate.',
        fr: 'Tranches de brioche grillées au beurre, poulet truffé, œuf, cheddar américain, aïoli à la truffe, laitue croquante et tomate.',
        pt: 'Fatias de pão brioche tostadas com manteiga, frango trufado, ovo, cheddar americano, alioli de trufa, alface e tomate.',
        it: 'Fette di brioche tostate al burro, pollo al tartufo, uovo, cheddar americano, aioli al tartufo, lattuga croccante e pomodoro.',
        zh: '黄油烤布里欧修片，松露鸡肉，鸡蛋，美式车打奶酪，松露蒜泥酱，脆生菜，番茄。',
        ru: 'Тосты из бриоши с маслом, курица с трюфелем, яйцо, американский чеддер, трюфельный айоли, салат и томат.',
        ar: 'شرائح بريوش محمصة بالزبدة، دجاج بالكمأة، بيض، شيدر أمريكي، أيولي الكمأة، خس وطماطم.',
        ja: 'バター焼きブリオッシュ、トリュフチキン、卵、アメリカンチェダー、トリュフアイオリ、レタス、トマト。',
        ko: '버터 구운 브리오슈 슬라이스, 트러플 치킨, 달걀, 아메리칸 체다, 트러플 아이올리, 상추, 토마토.'
    },
    'nachos': {
        es: 'Nachos crujientes, guacamole casero, carne salteada con pique, pico de gallo, crema agria, cheddar, jalapeños y frijoles.',
        en: 'Crispy nachos, homemade guacamole, spiced sautéed meat, pico de gallo, sour cream, cheddar, jalapeños and beans.',
        de: 'Knusprige Nachos, hausgemachtes Guacamole, gewürztes Fleisch, Pico de Gallo, Sauerrahm, Cheddar, Jalapeños und Bohnen.',
        fr: 'Nachos croustillants, guacamole maison, viande sautée épicée, pico de gallo, crème fraîche, cheddar, jalapeños et haricots.',
        pt: 'Nachos crujientes, guacamole caseiro, carne salteada, pico de gallo, crema agria, cheddar, jalapeños e feijões.',
        it: 'Nachos croccanti, guacamole casalingo, carne saltata speziata, pico de gallo, panna acida, cheddar, jalapeños e fagioli.',
        zh: '脆玉米片，自制鳄梨酱，香辣炒肉，墨西哥鲜莎莎酱，酸奶油，车打奶酪，墨西哥辣椒，豆子。',
        ru: 'Хрустящие начос, домашний гуакамоле, жареное мясо, пико де гайо, сметана, чеддер, халапеньо и фасоль.',
        ar: 'ناتشوز مقرمشة، غواكامولي منزلي، لحم مقلي، بيكو دي غايو، كريمة حامضة، شيدر، جلابينيو وفاصوليا.',
        ja: 'クリスピーナチョス、手作りグアカモレ、スパイシー炒め肉、ピコデガジョ、サワークリーム、チェダー、ハラペーニョ、豆。',
        ko: '크리스피 나초, 홈메이드 과카몰리, 양념 볶음 고기, 피코 데 가요, 사워 크림, 체다, 할라페뇨, 콩.'
    },
    'patatas': {
        es: 'Patatas gajo con cualquiera de nuestras salsas. Ingrediente extra por +1,50€.',
        en: 'Wedge potatoes with any of our sauces. Extra ingredient for +€1.50.',
        de: 'Kartoffelspalten mit einer unserer Soßen. Zutat extra für +1,50 €.',
        fr: "Pommes de terre en quartiers avec l'une de nos sauces. Ingrédient supplémentaire pour +1,50 €.",
        pt: 'Batatas gajo com qualquer um dos nossos molhos. Ingrediente extra por +1,50€.',
        it: 'Patate a spicchi con una delle nostre salse. Ingrediente extra per +1,50€.',
        zh: '薯角配我们任意一款酱汁。额外配料+1.50€。',
        ru: 'Картофельные дольки с любым из наших соусов. Дополнительный ингредиент за +1,50€.',
        ar: 'بطاطس أسافين مع أحد صلصاتنا. مكون إضافي مقابل +1.50€.',
        ja: 'くし形ポテト、お好みのソース。追加食材+1.50€。',
        ko: '감자 웨지, 우리 소스 중 하나 선택. 추가 재료 +1.50€.'
    },
    'ensalada': {
        es: 'Ensalada mezclum, pollo asado al carbón, parmesano, salsa yogur, croutons al ajillo y aceitunas negras.',
        en: 'Mesclun salad, charcoal-grilled chicken, parmesan, yogurt sauce, garlic croutons and black olives.',
        de: 'Blattsalat-Mix, auf Holzkohle gegrilltes Hähnchen, Parmesan, Joghurt-Soße, Knoblauch-Croutons und schwarze Oliven.',
        fr: 'Salade mesclun, poulet grillé au charbon, parmesan, sauce yaourt, croûtons à l\'ail et olives noires.',
        pt: 'Salada mezclum, frango assado ao carvão, parmesão, molho de iogurte, croutons de alho e azeitonas pretas.',
        it: 'Insalata mesclun, pollo grigliato al carbone, parmigiano, salsa allo yogurt, crostini all\'aglio e olive nere.',
        zh: '混合生菜，碳烤鸡肉，帕玛森奶酪，酸奶酱，蒜香面包丁，黑橄榄。',
        ru: 'Мезклун, курица на углях, пармезан, йогуртовый соус, чесночные крутоны и чёрные оливки.',
        ar: 'سلطة مسكلان، دجاج مشوي على الفحم، بارميزان، صلصة زبادي، خبز محمص بالثوم وزيتون أسود.',
        ja: 'ミックスグリーン、炭火グリルチキン、パルメザン、ヨーグルトソース、ガーリッククルトン、ブラックオリーブ。',
        ko: '믹스 그린, 숯불 구운 치킨, 파르메산, 요거트 소스, 마늘 크루통, 블랙 올리브.'
    },
    'alitas': {
        es: 'Alitas de pollo crujientes asadas con salsa barbacoa coreana, decoradas con cebollino.',
        en: 'Crispy chicken wings roasted with Korean BBQ sauce, garnished with chives.',
        de: 'Knusprige Hähnchen-Wings mit koreanischer BBQ-Soße, mit Schnittlauch garniert.',
        fr: 'Ailes de poulet croustillantes rôties avec sauce BBQ coréenne, garnies de ciboulette.',
        pt: 'Alitas de frango crujientes assadas com molho BBQ coreano, decoradas com cebolinho.',
        it: 'Alette di pollo croccanti con salsa barbecue coreana, guarnite con erba cipollina.',
        zh: '香脆鸡翅配韩式烤肉酱烤制，细香葱装饰。',
        ru: 'Хрустящие куриные крылышки с корейским BBQ соусом, украшены зелёным луком.',
        ar: 'أجنحة دجاج مقرمشة بصلصة BBQ الكورية، مزينة بثوم معمر.',
        ja: 'クリスピーチキンウィング、韓国風BBQソースで焼き、チャイブ添え。',
        ko: '바삭한 치킨 윙, 코리안 BBQ 소스로 구워, 차이브 장식.'
    }
};

// ── Ingredient name translations ──────────────────────
var ING_I18N = {
    'Pan brioche': { en: 'Brioche Bun', de: 'Brioche-Brötchen', fr: 'Pain brioche', pt: 'Pão brioche', it: 'Panino brioche', zh: '布里欧修面包', ru: 'Бриошь', ar: 'خبز بريوش', ja: 'ブリオッシュバン', ko: '브리오슈 번' },
    '180g Angus madurada': { en: '180g Aged Angus', de: '180g gereiftes Angus', fr: '180g Angus affiné', pt: '180g Angus maturado', it: '180g Angus stagionato', zh: '180g熟成安格斯', ru: '180г выдержанный Ангус', ar: '180غ أنغوس', ja: '180g熟成アンガス', ko: '180g 숙성 앵거스' },
    '180g Angus': { en: '180g Angus', de: '180g Angus', fr: '180g Angus', pt: '180g Angus', it: '180g Angus', zh: '180g安格斯', ru: '180г Ангус', ar: '180غ أنغوس', ja: '180gアンガス', ko: '180g 앵거스' },
    'Cebolla crispy': { en: 'Crispy Onion', de: 'Knusprige Zwiebel', fr: 'Oignon croustillant', pt: 'Cebola crispy', it: 'Cipolla croccante', zh: '脆洋葱', ru: 'Хрустящий лук', ar: 'بصل مقرمش', ja: 'カリカリオニオン', ko: '크리스피 어니언' },
    'Mermelada de bacon': { en: 'Bacon Jam', de: 'Speckmarmelade', fr: 'Confiture de bacon', pt: 'Mermelada de bacon', it: 'Marmellata di bacon', zh: '培根果酱', ru: 'Беконовый джем', ar: 'مربى البيكون', ja: 'ベーコンジャム', ko: '베이컨 잼' },
    'Cheddar americano': { en: 'American Cheddar', de: 'Amerikanischer Cheddar', fr: 'Cheddar américain', pt: 'Cheddar americano', it: 'Cheddar americano', zh: '美式车打奶酪', ru: 'Американский чеддер', ar: 'شيدر أمريكي', ja: 'アメリカンチェダー', ko: '아메리칸 체다' },
    'Pepinillos': { en: 'Pickles', de: 'Essiggurken', fr: 'Cornichons', pt: 'Pepinilhos', it: 'Cetriolini', zh: '腌黄瓜', ru: 'Маринованные огурцы', ar: 'مخللات', ja: 'ピクルス', ko: '피클' },
    'Salsa secreta': { en: 'Secret Sauce', de: 'Geheimsoße', fr: 'Sauce secrète', pt: 'Molho secreto', it: 'Salsa segreta', zh: '秘制酱', ru: 'Секретный соус', ar: 'صلصة سرية', ja: 'シークレットソース', ko: 'シークレット ソース' },
    'Salsa cheddar de risketos': { en: 'Risketos Cheddar Sauce', de: 'Risketos-Cheddar-Soße', fr: 'Sauce cheddar Risketos', pt: 'Molho cheddar Risketos', it: 'Salsa cheddar Risketos', zh: 'Risketos车打酱', ru: 'Соус чеддер Risketos', ar: 'صلصة شيدر ريسكيتوس', ja: 'リスケトスチェダーソース', ko: '리스케토스 체다 소스' },
    'Crunchy de risketos': { en: 'Risketos Crunch', de: 'Risketos-Crunchy', fr: 'Craquant Risketos', pt: 'Crunchy Risketos', it: 'Croccante Risketos', zh: 'Risketos脆片', ru: 'Криспи Risketos', ar: 'كرانشي ريسكيتوس', ja: 'リスケトスクランチ', ko: '리스케토스 크런치' },
    'Salsa jabugitos': { en: 'Jabugitos Sauce', de: 'Jabugitos-Soße', fr: 'Sauce Jabugitos', pt: 'Molho Jabugitos', it: 'Salsa Jabugitos', zh: 'Jabugitos酱', ru: 'Соус Jabugitos', ar: 'صلصة خابوغيتوس', ja: 'ハブギトスソース', ko: '하부기토스 소스' },
    'Panceta ibérica': { en: 'Ibérico Bacon', de: 'Iberischer Speck', fr: 'Poitrine ibérique', pt: 'Panceta ibérica', it: 'Pancetta iberica', zh: '伊比利亚培根', ru: 'Иберийский бекон', ar: 'لحم إيبيري', ja: 'イベリコ風ベーコン', ko: '이베리코 베이컨' },
    'Huevo frito': {es:'Huevo frito', en:'Fried egg', de:'Spiegelei', fr:'Œuf au plat', sv:'Stekt ägg', da:'Spejlæg', no:'Speilegg', pt:'Ovo estrelado', it:'Uovo fritto', nl:'Gebakken ei', pl:'Jajko sadzone', ru:'Яичница', zh:'煎蛋', ja:'目玉焼き', ko:'계란 프라이', ar:'بيضة مقلية'},
    'Doble Carne (+3,50€)': {es:'Doble Carne (+3,50€)', en:'Double Meat (+3,50€)', de:'Doppeltes Fleisch (+3,50€)', fr:'Double Viande (+3,50€)', sv:'Dubbelt Kött (+3,50€)', da:'Dobbelt Kød (+3,50€)', no:'Dobbelt Kjøtt (+3,50€)', pt:'Carne Dupla (+3,50€)', it:'Doppia Carne (+3,50€)', nl:'Dubbel Vlees (+3,50€)', pl:'Podwójne Mięso (+3,50€)', ru:'Двойное мясо (+3,50€)', zh:'双层肉 (+3,50€)', ja:'ダブル肉 (+3,50€)', ko:'더블 패티 (+3,50€)', ar:'لحم مضاعف (+3,50€)'},
    'Bacon Extra (+1,50€)': {es:'Bacon Extra (+1,50€)', en:'Extra Bacon (+1,50€)', de:'Extra Speck (+1,50€)', fr:'Bacon Supplémentaire (+1,50€)', sv:'Extra Bacon (+1,50€)', da:'Ekstra Bacon (+1,50€)', no:'Ekstra Bacon (+1,50€)', pt:'Bacon Extra (+1,50€)', it:'Bacon Extra (+1,50€)', nl:'Extra Bacon (+1,50€)', pl:'Dodatkowy Bekon (+1,50€)', ru:'Дополнительный бекон (+1,50€)', zh:'额外培根 (+1,50€)', ja:'追加ベーコン (+1,50€)', ko:'베이컨 추가 (+1,50€)', ar:'بيكون إضافي (+1,50€)'},
    'Queso Extra (+1,00€)': {es:'Queso Extra (+1,00€)', en:'Extra Cheese (+1,00€)', de:'Extra Käse (+1,00€)', fr:'Fromage Supplémentaire (+1,00€)', sv:'Extra Ost (+1,00€)', da:'Ekstra Ost (+1,00€)', no:'Ekstra Ost (+1,00€)', pt:'Queijo Extra (+1,00€)', it:'Formaggio Extra (+1,00€)', nl:'Extra Kaas (+1,00€)', pl:'Dodatkowy Ser (+1,00€)', ru:'Дополнительный сыр (+1,00€)', zh:'额外奶酪 (+1,00€)', ja:'追加チーズ (+1,00€)', ko:'치즈 추가 (+1,00€)', ar:'جبن إضافي (+1,00€)'},
    'Coca-Cola': {es:'Coca-Cola', en:'Coca-Cola', de:'Coca-Cola', fr:'Coca-Cola', sv:'Coca-Cola', da:'Coca-Cola', no:'Coca-Cola', pt:'Coca-Cola', it:'Coca-Cola', nl:'Coca-Cola', pl:'Coca-Cola', ru:'Кока-кола', zh:'可口可乐', ja:'コカコーラ', ko:'코카콜라', ar:'كوكا كولا'},
    'Coca-Cola Zero': {es:'Coca-Cola Zero', en:'Coca-Cola Zero', de:'Coca-Cola Zero', fr:'Coca-Cola Zero', sv:'Coca-Cola Zero', da:'Coca-Cola Zero', no:'Coca-Cola Zero', pt:'Coca-Cola Zero', it:'Coca-Cola Zero', nl:'Coca-Cola Zero', pl:'Coca-Cola Zero', ru:'Кока-кола Зеро', zh:'零度可乐', ja:'コカコーラ ゼロ', ko:'코카콜라 제로', ar:'كوكا كولا زيرو'},
    'Fanta Naranja': {es:'Fanta Naranja', en:'Orange Fanta', de:'Fanta Orange', fr:'Fanta Orange', sv:'Fanta Apelsin', da:'Fanta Appelsin', no:'Fanta Appelsin', pt:'Fanta Laranja', it:'Fanta Arancia', nl:'Fanta Sinaasappel', pl:'Fanta Pomarańczowa', ru:'Фанта Апельсин', zh:'芬达橙味', ja:'ファンタ オレンジ', ko:'환타 오렌지', ar:'فانتا برتقال'},
    'Fanta Limón': {es:'Fanta Limón', en:'Lemon Fanta', de:'Fanta Zitrone', fr:'Fanta Citron', sv:'Fanta Citron', da:'Fanta Citron', no:'Fanta Sitron', pt:'Fanta Limão', it:'Fanta Limone', nl:'Fanta Citroen', pl:'Fanta Cytrynowa', ru:'Фанта Лимон', zh:'芬达柠檬味', ja:'ファンタ レモン', ko:'환타 레몬', ar:'فانتا ليمون'},
    'Agua Mineral': {es:'Agua Mineral', en:'Mineral Water', de:'Mineralwasser', fr:'Eau Minérale', sv:'Mineralvatten', da:'Mineralvand', no:'Mineralvann', pt:'Água Mineral', it:'Acqua Minerale', nl:'Mineraalwater', pl:'Woda Mineralna', ru:'Минеральная вода', zh:'矿泉水', ja:'ミネラルウォーター', ko:'미네랄 워터', ar:'مياه معدنية'},
    'Cerveza': {es:'Cerveza', en:'Beer', de:'Bier', fr:'Bière', sv:'Öl', da:'Øl', no:'Øl', pt:'Cerveja', it:'Birra', nl:'Bier', pl:'Piwo', ru:'Пиво', zh:'啤酒', ja:'ビール', ko:'맥주', ar:'بيرة'},
    'Cerveza Sin': {es:'Cerveza Sin', en:'Alcohol-free Beer', de:'Alkoholfreies Bier', fr:'Bière sans Alcool', sv:'Alkoholfri Öl', da:'Alkoholfri Øl', no:'Alkoholfri Øl', pt:'Cerveja sem Álcool', it:'Birra analcolica', nl:'Alcoholvrij Bier', pl:'Piwo Bezalkoholowe', ru:'Безалкогольное пиво', zh:'无酒精啤酒', ja:'ノンアルコールビール', ko:'무알콜 맥주', ar:'بيرة بدون كحول'},
    'Limonada Casera': {es:'Limonada Casera', en:'Homemade Lemonade', de:'Hausgemachte Limonade', fr:'Limonade Maison', sv:'Hemgjord Limonad', da:'Hjemmelavet Limonade', no:'Hjemmelaget Limonade', pt:'Limonada Caseira', it:'Limonata Fatta in Casa', nl:'Huisgemaakte Limonade', pl:'Domowa Lemoniada', ru:'Домашний лимонад', zh:'自制柠檬水', ja:'手作りレモネード', ko:'수제 레모네이드', ar:'ليمونادة منزلية'},
    'Salsa de pistacho casera': { en: 'Homemade Pistachio Sauce', de: 'Pistaziensoße', fr: 'Sauce pistache maison', pt: 'Molho pistacho caseiro', it: 'Salsa al pistacchio', zh: '自制开心果酱', ru: 'Домашний соус с фисташками', ar: 'صلصة فستق منزلية', ja: '自家製ピスタチオソース', ko: '홈메이드 피스타치오 소스' },
    'Pulled pork': { en: 'Pulled Pork', zh: '慢炖猪肉', ru: 'Рваная свинина', ar: 'لحم مفتت', ja: 'プルドポーク', ko: '풀드포크' },
    'Guacamole': { en: 'Guacamole', zh: '鳄梨酱' },
    'Guacamole casero': { en: 'Homemade Guacamole', de: 'Hausgemachtes Guacamole', fr: 'Guacamole maison', pt: 'Guacamole caseiro', it: 'Guacamole casalingo', zh: '自制鳄梨酱', ru: 'Домашний гуакамоле', ar: 'غواكامولي منزلي', ja: '手作りグアカモレ', ko: '홈메이드 과카몰리' },
    'Nachos crujientes': { en: 'Crispy Nachos', de: 'Knusprige Nachos', fr: 'Nachos croustillants', pt: 'Nachos crujientes', it: 'Nachos croccanti', zh: '脆玉米片', ru: 'Хрустящие начос', ar: 'ناتشوز مقرمشة', ja: 'クリスピーナチョス', ko: '크리스피 ナチョ' },
    'Carne salteada': { en: 'Sautéed Meat', de: 'Gebratenes Fleisch', fr: 'Viande sautée', pt: 'Carne salteada', it: 'Carne saltata', zh: '炒肉', ru: 'Обжаренное мясо', ar: 'لحم مقلي', ja: '炒め肉', ko: '볶은 고기' },
    'Pico de gallo': { en: 'Pico de Gallo', zh: '墨西哥鲜莎莎酱', ru: 'Пико де гайо', ar: 'بيكو دي غايو', ja: 'ピコデガジョ', ko: '피코 데 가요' },
    'Crema agria': { en: 'Sour Cream', de: 'Sauerrahm', fr: 'Crème fraîche', pt: 'Crema agria', it: 'Panna acida', zh: '酸奶油', ru: 'Сметана', ar: 'كريمة حامضة', ja: 'サワークリーム', ko: '사워 크림' },
    'Frijoles': { en: 'Beans', de: 'Bohnen', fr: 'Haricots', pt: 'Feijões', it: 'Fagioli', zh: '豆子', ru: 'Фасоль', ar: 'فاصوليا', ja: '豆', ko: '콩' },
    'Pollo crujiente especiado': { en: 'Spiced Crispy Chicken', de: 'Gewürztes Knusperhähnchen', fr: 'Poulet croustillant épicé', pt: 'Frango crujiente especiado', it: 'Pollo croccante speziato', zh: '香辣脆鸡', ru: 'Пряная хрустящая курица', ar: 'دجاج مقرمش بالتوابل', ja: 'スパイシークリスピーチキン', ko: '스파이시 크리스피 치킨' },
    'Mayo de trufa': { en: 'Truffle Mayo', de: 'Trüffel-Mayo', fr: 'Mayo à la truffe', pt: 'Mayo de trufa', it: 'Maionese al tartufo', zh: '松露蛋黄酱', ru: 'Трюфельный майонез', ar: 'مايونيز الكمأة', ja: 'トリュフマヨ', ko: '트러플 마요' },
    'Pollo trufado': { en: 'Truffled Chicken', de: 'Trüffelhuhn', fr: 'Poulet truffé', pt: 'Frango trufado', it: 'Pollo al tartufo', zh: '松露鸡肉', ru: 'Курица с трюфелем', ar: 'دجاج بالكمأة', ja: 'トリュフチキン', ko: '트러플 치킨' },
    'Alioli de trufa': { en: 'Truffle Aioli', de: 'Trüffel-Aioli', fr: 'Aïoli à la truffe', pt: 'Alioli de trufa', it: 'Aioli al tartufo', zh: '松露蒜泥酱', ru: 'Трюфельный айоли', ar: 'أيولي الكمأة', ja: 'トリュフアイオリ', ko: '트러플 아이올리' },
    'Lechuga': { en: 'Lettuce', de: 'Salat', fr: 'Laitue', pt: 'Alface', it: 'Lattuga', zh: '生菜', ru: 'Листья салата', ar: 'خس', ja: 'レタス', ko: '상추' },
    'Tomate': { en: 'Tomato', de: 'Tomate', fr: 'Tomate', pt: 'Tomate', it: 'Pomodoro', zh: '番茄', ru: 'Томат', ar: 'طماطم', ja: 'トマト', ko: '토마토' },
    'Huevo': { en: 'Egg', de: 'Ei', fr: 'Œuf', pt: 'Ovo', it: 'Uovo', zh: '鸡蛋', ru: 'Яйцо', ar: 'بيض', ja: '卵', ko: '달걀' },
    'Patatas gajo': { en: 'Wedge Potatoes', de: 'Kartoffelspalten', fr: 'Pommes de terre en quartiers', pt: 'Batatas gajo', it: 'Patate a spicchi', zh: '薯角', ru: 'Картофельные дольки', ar: 'بطاطس أسافين', ja: 'くし形ポテト', ko: '감자 웨지' },
    'Salsa a elegir': { en: 'Sauce of your choice', de: 'Sauce nach Wahl', fr: 'Sauce au choix', pt: 'Molho à escolha', it: 'Salsa a scelta', zh: '自选酱汁', ru: 'Соус на выбор', ar: 'صلصة حسب الاختيار', ja: 'お好みのソース', ko: '선택 소스' },
    'Mezclum': { en: 'Mixed Greens', de: 'Blattsalat-Mix', fr: 'Mesclun', pt: 'Mezclum', it: 'Mesclun', zh: '混合生菜', ru: 'Мезклун', ar: 'خضار مشكلة', ja: 'ミックスグリーン', ko: '믹스 그린' },
    'Pollo asado': { en: 'Grilled Chicken', de: 'Gegrilltes Hähnchen', fr: 'Poulet grillé', pt: 'Frango grelhado', it: 'Pollo grigliato', zh: '烤鸡肉', ru: 'Жареная курица', ar: 'دجاج مشوي', ja: 'グリルチキン', ko: '구운 치킨' },
    'Parmesano': { en: 'Parmesan', de: 'Parmesan', fr: 'Parmesan', pt: 'Parmesão', it: 'Parmigiano', zh: '帕玛森奶酪', ru: 'Пармезан', ar: 'بارميزان', ja: 'パルメザン', ko: '파르메산' },
    'Salsa yogur': { en: 'Yogurt Sauce', de: 'Joghurt-Soße', fr: 'Sauce yaourt', pt: 'Molho de iogurte', it: 'Salsa allo yogurt', zh: '酸奶酱', ru: 'Йогуртовый соус', ar: 'صلصة زبادي', ja: 'ヨーグルトソース', ko: '요거트 소스' },
    'Aceitunas negras': { en: 'Black Olives', de: 'Schwarze Oliven', fr: 'Olives noires', pt: 'Azeitonas pretas', it: 'Olive nere', zh: '黑橄榄', ru: 'Чёрные оливки', ar: 'زيتون أسود', ja: 'ブラックオリーブ', ko: '블랙 올리브' },
    'Alitas de pollo': { en: 'Chicken Wings', de: 'Hähnchen-Wings', fr: 'Ailes de poulet', pt: 'Asinhas de frango', it: 'Alette di pollo', zh: '鸡翅', ru: 'Куриные крылышки', ar: 'أجنحة دجاج', ja: 'チキンウィング', ko: '치킨 윙' },
    'Salsa BBQ coreana': { en: 'Korean BBQ Sauce', de: 'Koreanische BBQ-Soße', fr: 'Sauce BBQ coréenne', pt: 'Molho BBQ coreano', it: 'Salsa barbecue coreana', zh: '韩式烤肉酱', ru: 'Корейский BBQ соус', ar: 'صلصة BBQ كورية', ja: '韓国風BBQソース', ko: '코리안 BBQ 소스' },
    'Cebollino': { en: 'Chives', de: 'Schnittlauch', fr: 'Ciboulette', pt: 'Cebolinho', it: 'Erba cipollina', zh: '细香葱', ru: 'Зелёный лук', ar: 'ثوم معمر', ja: 'チャイブ', ko: '차이브' }
};

// ── Exported helpers ──────────────────────────────────
function tDesc(itemId) {
    var m = DESC_I18N[itemId];
    if (!m) return null;
    var L = (typeof I18N !== 'undefined') ? I18N.current : 'es';
    return m[L] || m.en || m.es || null;
}

function tIng(name) {
    var m = ING_I18N[name];
    if (!m) return name;
    var L = (typeof I18N !== 'undefined') ? I18N.current : 'es';
    return m[L] || name;
}
