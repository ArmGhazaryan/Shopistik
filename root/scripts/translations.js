// Shopistik — translations & language switching
// Vanilla JavaScript only, no build step and no framework: a flat
// per-language dictionary, keyed by short identifiers that match each
// element's `data-i18n` (visible text) or `data-i18n-aria` (aria-label)
// attribute. Loaded before scripts/main.js on every page.

const translations = {
  en: {
    // Header / footer nav (shared across every page)
    home: 'Home',
    catalog: 'Shop All',
    aboutUs: 'About',
    bag: 'Bag',
    contactUs: 'Contact Us',
    shopNow: 'Shop Now',
    menu: 'Menu',

    // Shared taxonomy: reused for nav links, page titles and product cards
    bestsellers: 'Bestsellers',
    makeup: 'Makeup',
    newIn: 'New In',
    skincare: 'Skincare',

    // Product card chrome
    addToBag: 'Add to Bag',
    addedConfirm: 'Added ✓',
    tagBestseller: 'Bestseller',
    tagNew: 'New',

    copyright: 'All rights reserved.',

    // index.html — hero
    heroTagline: 'Shopistik curates luxury skincare & makeup, thoughtfully matched to every complexion.',
    heroCta1: 'Shop the Collection',
    heroCta2: 'See for yourself',

    // index.html — features
    featureTitle1: 'Clean formulas',
    featureTitle2: 'Cruelty-free',
    featureTitle3: 'Fast, free shipping',
    featureTitle4: 'Loved & trusted',

    // index.html — "How it works"
    stepsEyebrow: 'The Ritual',
    stepsTitle: 'How it works',
    stepsIntro: "From first discovery to a routine you'll adore, getting started with Shopistik takes just a few thoughtful steps.",
    step1Title: 'Discover your ritual',
    step2Title: 'Build your routine',
    step3Title: 'Fast, free delivery',
    step4Title: 'Glow & learn',
    step5Title: 'Loved for life',

    // index.html — FAQ head
    faqEyebrow: 'Questions',
    faqTitle: 'Frequently asked questions',
    faqIntro: "Everything you need to know about your Shopistik ritual — if it's not here, our team is always happy to help.",

    // catalog.html (Shop All)
    shopAllEyebrow: 'The Full Collection',
    shopAllIntro: 'Every skincare and makeup product we carry, in one place — new arrivals, bestsellers and everything in between.',

    // skincare.html
    skincareEyebrow: 'The Skincare Edit',
    skincareIntro: 'Clean, dermatologist-tested formulas imported from Europe and the US — chosen for real results, not trends.',

    // makeup.html
    makeupEyebrow: 'The Makeup Edit',
    makeupIntro: 'Buildable colour and finish, curated from Europe and the US — made to enhance, not mask.',

    // new-in.html
    newInEyebrow: 'Just Landed',
    newInIntro: 'Freshly arrived skincare and makeup from Europe and the US — the first to hit our shelves this season.',

    // bestsellers.html
    bestsellersEyebrow: 'Fan Favourites',
    bestsellersIntro: 'The skincare and makeup our customers reorder again and again — proven favourites, tried and loved.',

    // about.html
    aboutEyebrow: 'Our Story',
    aboutTitle: 'About Shopistik',
    aboutSubtitle: 'We import 100% authentic skincare and beauty essentials from Europe and the US, so your ritual never has to compromise.',
    whyUsEyebrow: 'The Shopistik Difference',
    whyUsTitle: 'Why Choose Us',
    whyUsIntro: 'A few reasons our customers keep coming back to their shelf.',
    whyUsCard1: '100% Authentic Products',
    whyUsCard2: 'Free Local Delivery',
    whyUsCard3: '1-2 Day Delivery Nationwide',
    whyUsCard4: 'Curated European & US Brands',
    trustTitle: 'Genuine Products, Guaranteed',
    deliveryEyebrow: 'Shipping',
    deliveryTitle: 'Delivery Made Simple',
    deliveryIntro: 'Wherever you are, your order is on its way — quickly and reliably.',
    deliveryItem1: 'Local Delivery',
    deliveryItem2: 'Other Cities',
    free: 'Free',
    days1to2: '1–2 Days',

    // bag.html
    bagEyebrow: 'Your Selection',
    bagTitle: 'Shopping Bag',
    bagIntro: "Review the pieces you've chosen before checking out.",
    bagEmptyText: 'Your bag is empty — nothing added just yet.',
    continueShopping: 'Continue Shopping',
    subtotal: 'Subtotal',
    deliveryRow: 'Delivery',
    total: 'Total',
    checkout: 'Checkout',
    each: 'each',
    decreaseQty: 'Decrease quantity',
    increaseQty: 'Increase quantity',
    removeFromBag: 'Remove {name} from bag',

    // index.html — feature descriptions
    featureText1: 'Every product is dermatologist-tested and free from parabens, sulfates and harsh additives your skin never needed.',
    featureText2: 'We never test on animals, and we never will. Every formula is proudly vegan-friendly and certified cruelty-free.',
    featureText3: 'Orders over $50 ship free and arrive within 2–4 days, beautifully packaged and ready to gift or enjoy.',
    featureText4: 'Over 2,300 five-star reviews from people who made Shopistik a treasured part of their daily ritual.',

    // index.html — step kickers/descriptions
    step1Kicker: 'Find your perfect match…',
    step1Text: 'Take our two-minute skin quiz or browse expertly curated edits to discover products chosen for your skin type and goals.',
    step2Kicker: 'Add to your bag…',
    step2Text: 'Mix and match cleansers, serums and treatments into a routine that works together, with friendly guidance at every step.',
    step3Kicker: 'Beautifully packaged…',
    step3Text: 'Orders over $50 ship free and arrive within 2–4 days, wrapped with care and ready to enjoy or gift.',
    step4Kicker: 'Get the most from every product…',
    step4Text: 'Unlock personalised tutorials and application tips so each product delivers its very best for your skin.',
    step5Kicker: 'Repeat & reward…',
    step5Text: 'Subscribe to save on your favourites, earn points on every order and enjoy members-only launches.',

    // index.html — FAQ questions & answers
    faqQ1: 'What makes Shopistik formulas different?',
    faqA1: 'Every formula is dermatologist-tested and free from parabens, sulfates and other harsh additives. We start from clean, effective ingredients and only add what your skin actually benefits from.',
    faqQ2: 'How do I know which products are right for my skin?',
    faqA2: 'Take our two-minute skin quiz to get a personalised routine, or browse our curated edits by skin type and concern. You can always message our team for one-to-one advice.',
    faqQ3: "What's your shipping and returns policy?",
    faqA3: "Orders over $50 ship free and arrive within 2–4 days. If something isn't right for you, unopened items can be returned within 30 days of delivery for a full refund.",
    faqQ4: 'Are your products cruelty-free and vegan?',
    faqA4: 'Yes — we never test on animals, and every formula is certified cruelty-free. Most of our range is vegan-friendly; any exceptions are always clearly noted on the product page.',
    faqQ5: 'Do you offer subscriptions or rewards?',
    faqA5: 'Subscribe to any favourite to save on every reorder, and earn points on every purchase toward members-only launches and gifts.',

    // about.html — card/section descriptions
    whyUsCard1Text: 'Every item is sourced directly from authorized distributors — never gray-market, never counterfeit.',
    whyUsCard2Text: 'Enjoy complimentary delivery on every order within your city, no minimum spend required.',
    whyUsCard3Text: 'Wherever you are in the country, your order arrives within one to two business days.',
    whyUsCard4Text: 'We hand-pick a rotating edit of beloved skincare and beauty brands from Europe and the US.',
    trustText: 'Sourced directly from authorized distributors in Europe and the US — every product is 100% authentic, factory-sealed and never gray-market. No counterfeits, no compromises, ever.',
    deliveryItem1Text: 'Every order within our home city ships free, with no minimum spend.',
    deliveryItem2Text: 'Nationwide orders arrive within one to two business days, fully tracked.',

    // Product card short descriptions (unique per product, reused wherever
    // that product appears across catalog/category pages)
    prodRoseGoldSerum: 'Radiance-boosting daily oil',
    prodHydraBloom: '24-hour weightless hydration',
    prodDewDrop: 'Melts away makeup & impurities',
    prodVelvetNight: 'Overnight renewal & deep hydration',
    prodBrightEyes: 'De-puffs & brightens the eye area',
    prodPetalLip: 'Nourishing shea & rosehip',
    prodVelvetLipstick: 'Shade: Blush Nude',
    prodSilkFoundation: 'Buildable, natural finish',
    prodGoldenHighlighter: 'A warm, lit-from-within glow',
    prodFeatherMascara: 'Lengthens without clumping',
    prodRosePetalBlush: 'Buildable flush of colour',
    prodSheerVeilPowder: 'Blurs pores, controls shine',
  },

  hy: {
    home: 'Գլխավոր',
    catalog: 'Կատալոգ',
    aboutUs: 'Մեր մասին',
    bag: 'Զամբյուղ',
    contactUs: 'Կապ մեզ հետ',
    shopNow: 'Գնել հիմա',
    menu: 'Ընտրացանկ',

    bestsellers: 'Բեսթսելլերներ',
    makeup: 'Դիմահարդարում',
    newIn: 'Նորույթներ',
    skincare: 'Մաշկի խնամք',

    addToBag: 'Ավելացնել զամբյուղում',
    addedConfirm: 'Ավելացվեց ✓',
    tagBestseller: 'Բեսթսելլեր',
    tagNew: 'Նոր',

    copyright: 'Բոլոր իրավունքները պաշտպանված են:',

    heroTagline: 'Shopistik-ը ընտրում է շքեղ մաշկի խնամքի և դիմահարդարման միջոցներ, մտածված կերպով համադրված յուրաքանչյուր մաշկի տեսակի համար։',
    heroCta1: 'Դիտել հավաքածուն',
    heroCta2: 'Համոզվեք ինքներդ',

    featureTitle1: 'Մաքուր բանաձևեր',
    featureTitle2: 'Չկա փորձարկում կենդանիների վրա',
    featureTitle3: 'Արագ, անվճար առաքում',
    featureTitle4: 'Սիրված և վստահված',

    stepsEyebrow: 'Ծեսը',
    stepsTitle: 'Ինչպես է աշխատում',
    stepsIntro: 'Առաջին ծանոթությունից մինչև ամենօրյա սիրված ռիտուալ․ Shopistik-ի հետ սկսելը պահանջում է ընդամենը մի քանի մտածված քայլ։',
    step1Title: 'Բացահայտեք ձեր ռիտուալը',
    step2Title: 'Կառուցեք ձեր ռեժիմը',
    step3Title: 'Արագ, անվճար առաքում',
    step4Title: 'Փայլեք և սովորեք',
    step5Title: 'Սիրված ողջ կյանքում',

    faqEyebrow: 'Հարցեր',
    faqTitle: 'Հաճախ տրվող հարցեր',
    faqIntro: 'Այն ամենը, ինչ պետք է իմանաք ձեր Shopistik ռիտուալի մասին․ եթե պատասխանը այստեղ չէ, մեր թիմը միշտ պատրաստ է օգնել։',

    shopAllEyebrow: 'Ամբողջական հավաքածուն',
    shopAllIntro: 'Բոլոր մաշկի խնամքի և դիմահարդարման ապրանքները մեկ տեղում․ նորույթներ, բեսթսելլերներ և ամեն ինչ մեջտեղում։',

    skincareEyebrow: 'Մաշկի խնամքի ընտրանին',
    skincareIntro: 'Մաքուր, մաշկաբանորեն փորձարկված բանաձևեր, ներմուծված Եվրոպայից և ԱՄՆ-ից՝ ընտրված իրական արդյունքի, ոչ թե միտումների համար։',

    makeupEyebrow: 'Դիմահարդարման ընտրանին',
    makeupIntro: 'Հագստվող գույն և հարդարանք՝ ընտրված Եվրոպայից և ԱՄՆ-ից, ստեղծված ընդգծելու, ոչ թե քողարկելու համար։',

    newInEyebrow: 'Նոր ժամանածներ',
    newInIntro: 'Նոր ժամանած մաշկի խնամքի և դիմահարդարման ապրանքներ Եվրոպայից և ԱՄՆ-ից՝ այս սեզոնի առաջինը մեր դարակներում։',

    bestsellersEyebrow: 'Ամենասիրվածները',
    bestsellersIntro: 'Մաշկի խնամքի և դիմահարդարման ապրանքներ, որոնք մեր հաճախորդները նորից ու նորից պատվիրում են՝ ապացուցված և սիրված։',

    aboutEyebrow: 'Մեր պատմությունը',
    aboutTitle: 'Shopistik-ի մասին',
    aboutSubtitle: 'Մենք ներմուծում ենք 100% իսկական մաշկի խնամքի և գեղեցկության միջոցներ Եվրոպայից և ԱՄՆ-ից, որպեսզի ձեր ռիտուալը երբեք զիջումների կարիք չունենա։',
    whyUsEyebrow: 'Shopistik-ի առավելությունը',
    whyUsTitle: 'Ինչու ընտրել մեզ',
    whyUsIntro: 'Մի քանի պատճառ, թե ինչու մեր հաճախորդները նորից ու նորից վերադառնում են։',
    whyUsCard1: '100% Իսկական Ապրանքներ',
    whyUsCard2: 'Անվճար Տեղական Առաքում',
    whyUsCard3: '1-2 Օրում Առաքում Ողջ Երկրում',
    whyUsCard4: 'Ընտրված Եվրոպական և ԱՄՆ Բրենդներ',
    trustTitle: 'Իսկական Ապրանքներ, Երաշխավորված',
    deliveryEyebrow: 'Առաքում',
    deliveryTitle: 'Առաքումը Դարձել է Պարզ',
    deliveryIntro: 'Ցանկացած վայրում լինեք, ձեր պատվերն ուղարկված է՝ արագ և հավաստի։',
    deliveryItem1: 'Տեղական Առաքում',
    deliveryItem2: 'Այլ Քաղաքներ',
    free: 'Անվճար',
    days1to2: '1–2 Օր',

    bagEyebrow: 'Ձեր Ընտրությունը',
    bagTitle: 'Զամբյուղ',
    bagIntro: 'Դիտեք ընտրած ապրանքները նախքան պատվերը հաստատելը։',
    bagEmptyText: 'Ձեր զամբյուղը դատարկ է․ դեռ ոչինչ չի ավելացվել։',
    continueShopping: 'Շարունակել Գնումները',
    subtotal: 'Ենթագումար',
    deliveryRow: 'Առաքում',
    total: 'Ընդամենը',
    checkout: 'Պատվերի Հաստատում',
    each: 'հատը',
    decreaseQty: 'Նվազեցնել քանակը',
    increaseQty: 'Ավելացնել քանակը',
    removeFromBag: 'Հեռացնել {name}-ը զամբյուղից',

    featureText1: 'Յուրաքանչյուր արտադրանք մաշկաբանորեն փորձարկված է և զերծ է պարաբեններից, սուլֆատներից ու կոպիտ հավելանյութերից, որոնց ձեր մաշկը երբեք կարիք չի ունեցել։',
    featureText2: 'Մենք երբեք չենք փորձարկում կենդանիների վրա և երբեք էլ չենք փորձարկի։ Յուրաքանչյուր բանաձև վեգանական է և հավաստագրված՝ առանց դաժանության։',
    featureText3: '$50-ից ավելի պատվերներն առաքվում են անվճար և հասնում 2–4 օրվա ընթացքում՝ գեղեցիկ փաթեթավորված և պատրաստ նվիրելու կամ վայելելու համար։',
    featureText4: 'Ավելի քան 2,300 հինգաստղանի կարծիք մարդկանցից, ովքեր Shopistik-ը դարձրել են իրենց ամենօրյա ռիտուալի սիրելի մասը։',

    step1Kicker: 'Գտեք ձեր կատարյալ ընտրությունը…',
    step1Text: 'Անցեք մեր երկրորդական մաշկի թեստը կամ դիտեք մասնագիտորեն ընտրված հավաքածուները՝ գտնելու ձեր մաշկի տեսակին ու նպատակներին համապատասխան արտադրանք։',
    step2Kicker: 'Ավելացրեք ձեր զամբյուղում…',
    step2Text: 'Համադրեք մաքրող միջոցներ, շիճուկներ և խնամքի պրոցեդուրաներ մեկ միասնական ռեժիմի մեջ՝ ընկերական աջակցությամբ յուրաքանչյուր քայլում։',
    step3Kicker: 'Գեղեցիկ փաթեթավորված…',
    step3Text: '$50-ից ավելի պատվերներն առաքվում են անվճար և հասնում 2–4 օրում՝ խնամքով փաթեթավորված և պատրաստ վայելելու կամ նվիրելու համար։',
    step4Kicker: 'Առավելագույնը քաղեք յուրաքանչյուր արտադրանքից…',
    step4Text: 'Բացահայտեք անհատականացված ուսուցողականներ և կիրառման խորհուրդներ, որպեսզի յուրաքանչյուր արտադրանք ցուցադրի իր լավագույն արդյունքը ձեր մաշկի համար։',
    step5Kicker: 'Կրկնեք ու վաստակեք…',
    step5Text: 'Բաժանորդագրվեք՝ խնայելու ձեր սիրելիների վրա, վաստակեք միավորներ յուրաքանչյուր պատվերի համար և վայելեք միայն անդամների համար նախատեսված թողարկումները։',

    faqQ1: 'Ինչո՞վ են Shopistik-ի բանաձևերը տարբերվում։',
    faqA1: 'Յուրաքանչյուր բանաձև մաշկաբանորեն փորձարկված է և զերծ պարաբեններից, սուլֆատներից ու այլ կոպիտ հավելանյութերից։ Մենք սկսում ենք մաքուր, արդյունավետ բաղադրիչներից և ավելացնում ենք միայն այն, ինչից ձեր մաշկը իսկապես օգտվում է։',
    faqQ2: 'Ինչպե՞ս իմանամ, թե որ արտադրանքներն են հարմար իմ մաշկին։',
    faqA2: 'Անցեք մեր երկրորդական մաշկի թեստը՝ անհատականացված ռեժիմ ստանալու համար, կամ դիտեք մեր ընտրված հավաքածուները ըստ մաշկի տեսակի ու խնդրի։ Դուք միշտ կարող եք գրել մեր թիմին անհատական խորհրդատվության համար։',
    faqQ3: 'Ի՞նչ է ձեր առաքման և վերադարձի քաղաքականությունը։',
    faqA3: '$50-ից ավելի պատվերներն առաքվում են անվճար և հասնում 2–4 օրում։ Եթե ինչ-որ բան ձեզ չի սազում, չբացված ապրանքները կարող են վերադարձվել առաքումից 30 օրվա ընթացքում՝ ամբողջական փոխհատուցմամբ։',
    faqQ4: 'Ձեր արտադրանքները զերծ ե՞ն դաժանությունից և վեգանակա՞ն են։',
    faqA4: 'Այո՝ մենք երբեք չենք փորձարկում կենդանիների վրա, և յուրաքանչյուր բանաձև հավաստագրված է որպես cruelty-free։ Մեր տեսականու մեծ մասը վեգանական է. բացառությունները միշտ հստակ նշվում են արտադրանքի էջում։',
    faqQ5: 'Առաջարկո՞ւմ եք բաժանորդագրություններ կամ բոնուսներ։',
    faqA5: 'Բաժանորդագրվեք ցանկացած սիրելի արտադրանքի՝ խնայելու յուրաքանչյուր կրկնակի պատվերի վրա, և վաստակեք միավորներ յուրաքանչյուր գնման համար՝ ուղղված միայն անդամների համար նախատեսված թողարկումներին ու նվերներին։',

    whyUsCard1Text: 'Յուրաքանչյուր ապրանք ձեռք է բերվում ուղղակիորեն լիազորված դիստրիբյուտորներից՝ երբեք գորշ շուկայից, երբեք կեղծված։',
    whyUsCard2Text: 'Վայելեք անվճար առաքում ձեր քաղաքի ցանկացած պատվերի համար՝ առանց նվազագույն գումարի պահանջի։',
    whyUsCard3Text: 'Ցանկացած վայրում լինեք երկրում, ձեր պատվերը կհասնի մեկից երկու աշխատանքային օրվա ընթացքում։',
    whyUsCard4Text: 'Մենք ձեռքով ընտրում ենք Եվրոպայի և ԱՄՆ-ի սիրված մաշկի խնամքի ու գեղեցկության բրենդների պարբերաբար թարմացվող հավաքածու։',
    trustText: 'Ձեռք է բերվում ուղղակիորեն Եվրոպայի և ԱՄՆ-ի լիազորված դիստրիբյուտորներից՝ յուրաքանչյուր արտադրանք 100% իսկական է, գործարանային փակցված և երբեք գորշ շուկայից։ Առանց կեղծիքի, առանց զիջումների, երբեք։',
    deliveryItem1Text: 'Մեր հիմնական քաղաքում ցանկացած պատվեր առաքվում է անվճար՝ առանց նվազագույն գումարի պահանջի։',
    deliveryItem2Text: 'Ողջ երկրով մեկ պատվերները հասնում են մեկից երկու աշխատանքային օրում՝ ամբողջությամբ հետագծելի։',

    prodRoseGoldSerum: 'Փայլ հաղորդող ամենօրյա յուղ',
    prodHydraBloom: '24-ժամյա անկշիռ խոնավացում',
    prodDewDrop: 'Հալեցնում է դիմահարդարումն ու կեղտը',
    prodVelvetNight: 'Գիշերային վերականգնում և խորը խոնավացում',
    prodBrightEyes: 'Հեռացնում է այտուցը և պայծառացնում աչքերի հատվածը',
    prodPetalLip: 'Սնուցող կարիտե և մասուր',
    prodVelvetLipstick: 'Երանգ՝ Blush Nude',
    prodSilkFoundation: 'Հարմարվող, բնական երանգավորում',
    prodGoldenHighlighter: 'Ջերմ, ներսից փայլող երանգ',
    prodFeatherMascara: 'Երկարացնում է առանց կոշտացման',
    prodRosePetalBlush: 'Հարմարվող վարդագույն երանգ',
    prodSheerVeilPowder: 'Աննկատ դարձնում է ծակոտիները, վերահսկում փայլը',
  },

  ru: {
    home: 'Главная',
    catalog: 'Каталог',
    aboutUs: 'О нас',
    bag: 'Корзина',
    contactUs: 'Связаться с нами',
    shopNow: 'Купить сейчас',
    menu: 'Меню',

    bestsellers: 'Бестселлеры',
    makeup: 'Макияж',
    newIn: 'Новинки',
    skincare: 'Уход за кожей',

    addToBag: 'Добавить в корзину',
    addedConfirm: 'Добавлено ✓',
    tagBestseller: 'Бестселлер',
    tagNew: 'Новинка',

    copyright: 'Все права защищены.',

    heroTagline: 'Shopistik подбирает люксовый уход за кожей и косметику, тщательно адаптированные под любой тип кожи.',
    heroCta1: 'Смотреть коллекцию',
    heroCta2: 'Убедитесь сами',

    featureTitle1: 'Чистые формулы',
    featureTitle2: 'Без жестокости к животным',
    featureTitle3: 'Быстрая бесплатная доставка',
    featureTitle4: 'Любимый и надёжный бренд',

    stepsEyebrow: 'Ритуал',
    stepsTitle: 'Как это работает',
    stepsIntro: 'От первого знакомства до любимого ритуала — начать со Shopistik можно всего за несколько простых шагов.',
    step1Title: 'Откройте свой ритуал',
    step2Title: 'Создайте свой уход',
    step3Title: 'Быстрая бесплатная доставка',
    step4Title: 'Сияйте и учитесь',
    step5Title: 'Любимый на всю жизнь',

    faqEyebrow: 'Вопросы',
    faqTitle: 'Часто задаваемые вопросы',
    faqIntro: 'Всё, что нужно знать о вашем ритуале Shopistik — если ответа здесь нет, наша команда всегда готова помочь.',

    shopAllEyebrow: 'Полная коллекция',
    shopAllIntro: 'Все продукты для ухода за кожей и макияжа в одном месте — новинки, бестселлеры и всё остальное.',

    skincareEyebrow: 'Подборка для кожи',
    skincareIntro: 'Чистые, дерматологически протестированные формулы, импортированные из Европы и США — выбраны для реальных результатов, а не ради тренда.',

    makeupEyebrow: 'Подборка макияжа',
    makeupIntro: 'Насыщенность и текстура на ваш выбор, подобранные в Европе и США — созданы, чтобы подчеркнуть, а не скрыть.',

    newInEyebrow: 'Новое поступление',
    newInIntro: 'Свежие поступления косметики и уходовых средств из Европы и США — первыми на наших полках в этом сезоне.',

    bestsellersEyebrow: 'Любимцы покупателей',
    bestsellersIntro: 'Уход и макияж, которые наши клиенты заказывают снова и снова — проверенные фавориты.',

    aboutEyebrow: 'Наша история',
    aboutTitle: 'О Shopistik',
    aboutSubtitle: 'Мы импортируем 100% оригинальный уход за кожей и косметику из Европы и США, чтобы ваш ритуал красоты не знал компромиссов.',
    whyUsEyebrow: 'Отличие Shopistik',
    whyUsTitle: 'Почему выбирают нас',
    whyUsIntro: 'Несколько причин, почему наши клиенты возвращаются снова и снова.',
    whyUsCard1: '100% Оригинальные товары',
    whyUsCard2: 'Бесплатная доставка по городу',
    whyUsCard3: 'Доставка по стране за 1–2 дня',
    whyUsCard4: 'Подбор европейских и американских брендов',
    trustTitle: 'Только оригинальные товары',
    deliveryEyebrow: 'Доставка',
    deliveryTitle: 'Простая доставка',
    deliveryIntro: 'Где бы вы ни были, ваш заказ уже в пути — быстро и надёжно.',
    deliveryItem1: 'Доставка по городу',
    deliveryItem2: 'Другие города',
    free: 'Бесплатно',
    days1to2: '1–2 дня',

    bagEyebrow: 'Ваш выбор',
    bagTitle: 'Корзина покупок',
    bagIntro: 'Просмотрите выбранные товары перед оформлением заказа.',
    bagEmptyText: 'Ваша корзина пуста — вы ещё ничего не добавили.',
    continueShopping: 'Продолжить покупки',
    subtotal: 'Подытог',
    deliveryRow: 'Доставка',
    total: 'Итого',
    checkout: 'Оформить заказ',
    each: 'за шт.',
    decreaseQty: 'Уменьшить количество',
    increaseQty: 'Увеличить количество',
    removeFromBag: 'Удалить {name} из корзины',

    featureText1: 'Каждый продукт протестирован дерматологами и не содержит парабенов, сульфатов и агрессивных добавок, которые вашей коже никогда не были нужны.',
    featureText2: 'Мы никогда не тестируем на животных и никогда не будем. Каждая формула веганская и сертифицирована как cruelty-free.',
    featureText3: 'Заказы от $50 доставляются бесплатно и приходят за 2–4 дня, красиво упакованные и готовые для подарка или для себя.',
    featureText4: 'Более 2 300 отзывов с пятью звёздами от людей, для которых Shopistik стал любимой частью ежедневного ритуала.',

    step1Kicker: 'Найдите свой идеальный выбор…',
    step1Text: 'Пройдите наш двухминутный тест кожи или изучите тщательно подобранные подборки, чтобы найти продукты под ваш тип кожи и цели.',
    step2Kicker: 'Добавьте в корзину…',
    step2Text: 'Сочетайте очищающие средства, сыворотки и уходовые процедуры в единой программе — с дружелюбной поддержкой на каждом шаге.',
    step3Kicker: 'Красиво упаковано…',
    step3Text: 'Заказы от $50 доставляются бесплатно и приходят за 2–4 дня, бережно упакованные — для себя или в подарок.',
    step4Kicker: 'Получите максимум от каждого продукта…',
    step4Text: 'Открывайте персональные обучающие материалы и советы по применению, чтобы каждый продукт раскрылся по максимуму для вашей кожи.',
    step5Kicker: 'Повторяйте и получайте бонусы…',
    step5Text: 'Оформите подписку, чтобы экономить на любимых товарах, получайте баллы за каждый заказ и наслаждайтесь эксклюзивными релизами для участников.',

    faqQ1: 'Чем формулы Shopistik отличаются от других?',
    faqA1: 'Каждая формула протестирована дерматологами и не содержит парабенов, сульфатов и других агрессивных добавок. Мы начинаем с чистых, эффективных ингредиентов и добавляем только то, что действительно полезно вашей коже.',
    faqQ2: 'Как понять, какие продукты подходят именно моей коже?',
    faqA2: 'Пройдите наш двухминутный тест кожи, чтобы получить персональную программу, или изучите наши подборки по типу кожи и проблеме. Вы всегда можете написать нашей команде за индивидуальным советом.',
    faqQ3: 'Какая у вас политика доставки и возврата?',
    faqA3: 'Заказы от $50 доставляются бесплатно и приходят за 2–4 дня. Если что-то вам не подошло, невскрытые товары можно вернуть в течение 30 дней с момента доставки с полным возвратом средств.',
    faqQ4: 'Ваша продукция не тестируется на животных и веганская?',
    faqA4: 'Да — мы никогда не тестируем на животных, и каждая формула сертифицирована как cruelty-free. Большая часть ассортимента веганская; исключения всегда чётко указаны на странице товара.',
    faqQ5: 'У вас есть подписки или программа лояльности?',
    faqA5: 'Оформите подписку на любимый товар, чтобы экономить при каждом повторном заказе, и получайте баллы за каждую покупку на эксклюзивные релизы и подарки для участников.',

    whyUsCard1Text: 'Каждый товар закупается напрямую у авторизованных дистрибьюторов — никогда не с серого рынка, никогда не подделка.',
    whyUsCard2Text: 'Наслаждайтесь бесплатной доставкой по вашему городу без минимальной суммы заказа.',
    whyUsCard3Text: 'Где бы вы ни находились в стране, ваш заказ придёт за один-два рабочих дня.',
    whyUsCard4Text: 'Мы вручную отбираем постоянно обновляемую подборку любимых европейских и американских брендов ухода и красоты.',
    trustText: 'Закупается напрямую у авторизованных дистрибьюторов в Европе и США — каждый продукт на 100% оригинален, запечатан производителем и никогда не с серого рынка. Никаких подделок, никаких компромиссов — никогда.',
    deliveryItem1Text: 'Любой заказ по нашему родному городу доставляется бесплатно, без минимальной суммы.',
    deliveryItem2Text: 'Заказы по всей стране приходят за один-два рабочих дня с полным отслеживанием.',

    prodRoseGoldSerum: 'Ежедневное масло для сияния кожи',
    prodHydraBloom: '24-часовое лёгкое увлажнение',
    prodDewDrop: 'Растворяет макияж и загрязнения',
    prodVelvetNight: 'Ночное восстановление и глубокое увлажнение',
    prodBrightEyes: 'Снимает отёчность и осветляет область вокруг глаз',
    prodPetalLip: 'Питательное масло ши и шиповника',
    prodVelvetLipstick: 'Оттенок: Blush Nude',
    prodSilkFoundation: 'Регулируемое, естественное покрытие',
    prodGoldenHighlighter: 'Тёплое сияние «изнутри»',
    prodFeatherMascara: 'Удлиняет без склеивания',
    prodRosePetalBlush: 'Регулируемый румяный оттенок',
    prodSheerVeilPowder: 'Скрывает поры, контролирует блеск',
  },
};

/* --------------------------------------------------------------------------
   Runtime: applies the dictionary above to the current page, persists the
   choice, and wires up the custom language-switcher menu (see the
   `.lang-switcher` markup in every page's header).

   - `[data-i18n="key"]`      -> element.textContent = translations[lang][key]
   - `[data-i18n-aria="key"]` -> element.setAttribute('aria-label', ...)

   `window.ShopistikI18n` is exposed so scripts/main.js can translate strings
   it builds dynamically (the "Added ✓" button feedback, and bag-item
   category labels) without duplicating this dictionary, and can react to a
   language switch via the `shopistik:langchange` event.
   -------------------------------------------------------------------------- */
(function () {
  const STORAGE_KEY = 'shopistik_lang';
  const DEFAULT_LANG = 'en';
  // Inline SVGs instead of flag emoji — see the note near the bottom of this
  // file (initLangSwitchers) for why. Kept as tiny, simple shapes (stripes /
  // a simplified cross) rather than fully detailed flags, and shared 1:1
  // with the static markup in each page's dropdown options so the button
  // and the menu always render identically.
  const FLAG_SVGS = {
    en: '<svg viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="20" height="14" fill="#00247d"/><path d="M0,0 L20,14 M20,0 L0,14" stroke="#fff" stroke-width="3"/><path d="M0,0 L20,14 M20,0 L0,14" stroke="#cf142b" stroke-width="1.2"/><path d="M10,0 V14 M0,7 H20" stroke="#fff" stroke-width="4.5"/><path d="M10,0 V14 M0,7 H20" stroke="#cf142b" stroke-width="2.5"/></svg>',
    ru: '<svg viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="20" height="14" fill="#fff"/><rect width="20" height="4.67" y="4.67" fill="#0039a6"/><rect width="20" height="4.67" y="9.33" fill="#d52b1e"/></svg>',
    hy: '<svg viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="20" height="4.67" y="0" fill="#d90012"/><rect width="20" height="4.67" y="4.67" fill="#0033a0"/><rect width="20" height="4.67" y="9.33" fill="#f2a800"/></svg>',
  };
  const CODES = { en: 'EN', ru: 'RU', hy: 'HY' };
  // Must match the `[data-i18n]` transition-duration in main.css — the swap
  // below waits exactly this long for the fade-out to finish before it
  // touches the DOM, so the two stay in lockstep however either one changes.
  const FADE_MS = 150;

  function getStoredLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      return null;
    }
  }

  function t(key, lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    return (dict && dict[key]) || (translations[DEFAULT_LANG] && translations[DEFAULT_LANG][key]) || key;
  }

  // The actual text/state swap, factored out so `applyTranslations` can run
  // it either instantly (first paint) or after a fade-out (user-triggered
  // switch) without duplicating any of this logic.
  function swapContent(activeLang) {
    document.documentElement.setAttribute('lang', activeLang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = t(el.getAttribute('data-i18n'), activeLang);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'), activeLang));
    });

    document.querySelectorAll('.lang-switcher__current').forEach((el) => {
      el.textContent = CODES[activeLang] || CODES[DEFAULT_LANG];
    });

    document.querySelectorAll('.lang-switcher__flag').forEach((flag) => {
      flag.innerHTML = FLAG_SVGS[activeLang] || FLAG_SVGS[DEFAULT_LANG];
    });

    document.querySelectorAll('.lang-switcher__option').forEach((option) => {
      const isActive = option.getAttribute('data-lang') === activeLang;
      option.classList.toggle('is-active', isActive);
      option.setAttribute('aria-checked', String(isActive));
    });

    try {
      localStorage.setItem(STORAGE_KEY, activeLang);
    } catch (err) {
      /* localStorage unavailable (e.g. private browsing) — language just won't persist */
    }

    document.dispatchEvent(new CustomEvent('shopistik:langchange', { detail: { lang: activeLang } }));
  }

  // `animate: true` is only passed for a user-triggered switch (never the
  // initial page load — see the fade-sequence explanation further down).
  function applyTranslations(lang, opts) {
    const animate = !!(opts && opts.animate);
    const activeLang = translations[lang] ? lang : DEFAULT_LANG;

    if (!animate) {
      swapContent(activeLang);
      return;
    }

    document.body.classList.add('i18n-fading');
    window.setTimeout(() => {
      swapContent(activeLang);
      document.body.classList.remove('i18n-fading');
    }, FADE_MS);
  }

  function initLangSwitchers() {
    document.querySelectorAll('.lang-switcher').forEach((switcher) => {
      const button = switcher.querySelector('.lang-switcher__button');
      const menu = switcher.querySelector('.lang-switcher__menu');
      if (!button || !menu) return;

      const options = Array.from(menu.querySelectorAll('.lang-switcher__option'));

      function openMenu(focusActive) {
        switcher.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
        if (focusActive) {
          (options.find((opt) => opt.classList.contains('is-active')) || options[0]).focus();
        }
      }

      function closeMenu() {
        switcher.classList.remove('is-open');
        button.setAttribute('aria-expanded', 'false');
      }

      button.addEventListener('click', () => {
        if (switcher.classList.contains('is-open')) {
          closeMenu();
        } else {
          openMenu(false);
        }
      });

      button.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openMenu(true);
        }
      });

      options.forEach((option, index) => {
        option.addEventListener('click', () => {
          const lang = option.getAttribute('data-lang');
          closeMenu();
          button.focus();
          if (lang && lang !== (getStoredLang() || DEFAULT_LANG)) {
            applyTranslations(lang, { animate: true });
          }
        });

        option.addEventListener('keydown', (event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            (options[index + 1] || options[0]).focus();
          } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            (options[index - 1] || options[options.length - 1]).focus();
          } else if (event.key === 'Escape') {
            closeMenu();
            button.focus();
          } else if (event.key === 'Tab') {
            closeMenu();
          }
        });
      });

      document.addEventListener('click', (event) => {
        if (!switcher.contains(event.target)) closeMenu();
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(getStoredLang() || DEFAULT_LANG);
    initLangSwitchers();
  });

  window.ShopistikI18n = {
    t: (key) => t(key, getStoredLang() || DEFAULT_LANG),
    getLang: () => getStoredLang() || DEFAULT_LANG,
    apply: applyTranslations,
  };
})();
