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
    navContact: 'Contact',
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

    // contact.html
    contactEyebrow: 'Reach Out',
    contactTitle: 'Get in Touch',
    contactIntro: 'Whether you have a question about your order, need a product recommendation, or simply want to say hello — we would love to hear from you.',
    contactChannelEmail: 'Email',
    contactChannelEmailDesc: 'Write to us anytime — we typically respond within one business day.',
    contactChannelInstagram: 'Instagram',
    contactChannelInstagramDesc: 'Follow us for new arrivals, tips, and beauty inspiration.',
    contactOpenEmail: 'Send an email to Shopistik',
    contactOpenInstagram: 'Visit Shopistik on Instagram',

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
    // product.html — chrome + detail copy
    pdpDescription: 'Description',
    pdpHowToUse: 'How to Use',
    pdpIngredients: 'Ingredients',
    pdpQuantity: 'Quantity',
    pdpNotFound: "We couldn't find that product.",

    pdpDescRoseGoldSerum: 'A lightweight daily face oil that layers rosehip and golden botanicals to restore radiance without heaviness. Skin looks smoother, softer and quietly luminous by evening.',
    pdpUseRoseGoldSerum: 'After cleansing and toning, warm 2–3 drops between your palms and press gently over face and neck. Use morning and night, alone or under moisturizer.',
    pdpIngRoseGoldSerum: 'Rosa Canina Seed Oil, Squalane, Tocopherol, Helianthus Annuus Seed Oil, Caprylic/Capric Triglyceride, Fragrance (Parfum).',

    pdpDescHydraBloom: 'A weightless gel-cream that delivers 24-hour hydration with a soft, breathable finish. Ideal for combination and normal skin that wants moisture without shine.',
    pdpUseHydraBloom: 'Apply a pearl-sized amount to clean skin morning and night. Pat until absorbed; follow with SPF in the daytime.',
    pdpIngHydraBloom: 'Aqua, Glycerin, Sodium Hyaluronate, Panthenol, Aloe Barbadensis Leaf Juice, Carbomer, Phenoxyethanol.',

    pdpDescDewDrop: 'A silky cleansing oil that melts makeup, SPF and daily impurities while leaving skin comfortable — never stripped. Rinses clean with a soft, hydrated afterfeel.',
    pdpUseDewDrop: 'Massage onto dry skin, then add a little water to emulsify into a milky rinse. Follow with your usual cleanser if you prefer a double-cleanse.',
    pdpIngDewDrop: 'Helianthus Annuus Seed Oil, Caprylic/Capric Triglyceride, Polyglyceryl-4 Oleate, Tocopherol, Limnanthes Alba Seed Oil.',

    pdpDescVelvetNight: 'A rich overnight cream that supports renewal while you sleep. Skin wakes plumper, calmer and deeply comforted — especially in dry or cooler seasons.',
    pdpUseVelvetNight: 'As the last step of your evening ritual, smooth a thin layer over face and neck. Allow a few minutes to settle before pillows.',
    pdpIngVelvetNight: 'Aqua, Caprylic/Capric Triglyceride, Shea Butter, Ceramide NP, Niacinamide, Glycerin, Dimethicone, Phenoxyethanol.',

    pdpDescBrightEyes: 'A cooling eye cream that softens the look of puffiness and dullness around the orbital area. Lightweight enough for morning, comforting enough for night.',
    pdpUseBrightEyes: 'Dot a rice-grain amount along the orbital bone morning and night. Pat gently with the ring finger — never rub.',
    pdpIngBrightEyes: 'Aqua, Caffeine, Glycerin, Sodium Hyaluronate, Niacinamide, Cucumis Sativus Fruit Extract, Phenoxyethanol.',

    pdpDescPetalLip: 'A cushiony balm enriched with shea and rosehip to soften and nourish dry lips. Leaves a subtle sheen — never sticky.',
    pdpUsePetalLip: 'Apply throughout the day as needed, and as a final step before bed for overnight comfort.',
    pdpIngPetalLip: 'Butyrospermum Parkii Butter, Ricinus Communis Seed Oil, Beeswax, Rosa Canina Seed Oil, Tocopherol, Flavor.',

    pdpDescVelvetLipstick: 'A soft-matte lipstick in Blush Nude that glides on smoothly and wears comfortably. Buildable colour with a refined, non-drying finish.',
    pdpUseVelvetLipstick: 'Apply directly from the bullet or with a lip brush for precision. Blot and layer for deeper colour.',
    pdpIngVelvetLipstick: 'Ricinus Communis Seed Oil, Caprylic/Capric Triglyceride, Candelilla Cera, Mica, Iron Oxides, Tocopherol.',

    pdpDescSilkFoundation: 'A cushion foundation with a buildable, natural finish that evens tone without masking skin. Breathable coverage that looks like skin, only smoother.',
    pdpUseSilkFoundation: 'Press the puff into the cushion, then tap onto the centre of the face and blend outward. Build where you need more coverage.',
    pdpIngSilkFoundation: 'Aqua, Cyclopentasiloxane, Titanium Dioxide, Glycerin, Dimethicone, Iron Oxides, Phenoxyethanol.',

    pdpDescGoldenHighlighter: 'A finely milled highlighter that catches light with a warm, lit-from-within glow. Soft enough for everyday, luminous enough for evening.',
    pdpUseGoldenHighlighter: 'Sweep onto the high points of the face — cheekbones, brow bone, cupid\'s bow — with a fluffy brush or fingertip.',
    pdpIngGoldenHighlighter: 'Mica, Caprylic/Capric Triglyceride, Silica, Magnesium Stearate, Iron Oxides, Tin Oxide.',

    pdpDescFeatherMascara: 'A lengthening mascara that defines lashes without clumping or heaviness. The featherlight formula builds cleanly from day to night.',
    pdpUseFeatherMascara: 'Starting at the base of the lashes, wiggle the wand upward in a zigzag motion. Layer once dry for extra length.',
    pdpIngFeatherMascara: 'Aqua, Beeswax, Copernicia Cerifera Cera, Iron Oxides, Acacia Senegal Gum, Phenoxyethanol.',

    pdpDescRosePetalBlush: 'A dual-pan blush with soft, buildable colour for a natural flush. Blend the shades alone or together for a custom petal-pink finish.',
    pdpUseRosePetalBlush: 'Sweep a light layer onto the apples of the cheeks and blend toward the temples. Layer for a deeper flush.',
    pdpIngRosePetalBlush: 'Mica, Caprylic/Capric Triglyceride, Silica, Iron Oxides, Titanium Dioxide, Magnesium Stearate.',

    pdpDescSheerVeilPowder: 'A translucent setting powder that blurs the look of pores and softens shine without a chalky cast. Finishes makeup with a soft-focus veil.',
    pdpUseSheerVeilPowder: 'Dust lightly over the T-zone and anywhere you want longer wear, using a fluffy brush or puff.',
    pdpIngSheerVeilPowder: 'Silica, Mica, Caprylic/Capric Triglyceride, Dimethicone, Magnesium Stearate, Tocopherol.',
  },

  hy: {
    home: 'Գլխավոր',
    catalog: 'Կատալոգ',
    aboutUs: 'Մեր մասին',
    bag: 'Զամբյուղ',
    contactUs: 'Կապ մեզ հետ',
    navContact: 'Կապ',
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

    contactEyebrow: 'Կապ',
    contactTitle: 'Կապվեք մեզ հետ',
    contactIntro: 'Եթե ունեք հարց պատվերի մասին, կարիք ունեք արտադրանքի խորհրդի կամ պարզապես ցանկանում եք ողջույն հայտնել — մենք սիրով կլսենք ձեզ։',
    contactChannelEmail: 'Էլ. փոստ',
    contactChannelEmailDesc: 'Գրեք մեզ ցանկացած ժամանակ — սովորաբար պատասխանում ենք մեկ աշխատանքային օրվա ընթացքում։',
    contactChannelInstagram: 'Instagram',
    contactChannelInstagramDesc: 'Հետևեք մեզ նորույթների, խորհուրդների և գեղեցկության ոգեշնչման համար։',
    contactOpenEmail: 'Ուղարկել էլ. նամակ Shopistik-ին',
    contactOpenInstagram: 'Այցելել Shopistik-ը Instagram-ում',

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
    // product.html — chrome + detail copy
    pdpDescription: 'Նկարագրություն',
    pdpHowToUse: 'Ինչպես օգտագործել',
    pdpIngredients: 'Բաղադրիչներ',
    pdpQuantity: 'Քանակ',
    pdpNotFound: 'Այդ ապրանքը չգտնվեց։',

    pdpDescRoseGoldSerum: 'Թեթև ամենօրյա յուղ դեմքի համար՝ մասուրի և ոսկեգույն բուսական բաղադրիչներով, որը վերականգնում է փայլը առանց ծանրության։ Երեկոյան մաշկը ավելի հարթ, փափուկ և նուրբ լուսավոր է թվում։',
    pdpUseRoseGoldSerum: 'Մաքրումից և տոնիկից հետո տաքացրեք 2–3 կաթիլ ափերի մեջ և նուրբ սեղմեք դեմքին ու պարանոցին։ Օգտագործեք առավոտ և երեկո՝ առանձին կամ խոնավացնողի տակ։',
    pdpIngRoseGoldSerum: 'Rosa Canina Seed Oil, Squalane, Tocopherol, Helianthus Annuus Seed Oil, Caprylic/Capric Triglyceride, Fragrance (Parfum).',

    pdpDescHydraBloom: 'Անկշիռ գել-կրեմ, որը տալիս է 24-ժամյա խոնավություն՝ փափուկ, շնչող ավարտով։ Իդեալական է խառը և նորմալ մաշկի համար, որը ցանկանում է խոնավություն առանց փայլի։',
    pdpUseHydraBloom: 'Քսեք մարգարիտի չափ քանակ մաքուր մաշկին առավոտ և երեկո։ Թեթևակի թակեք մինչև ներծծվելը. ցերեկը հետևեք SPF-ով։',
    pdpIngHydraBloom: 'Aqua, Glycerin, Sodium Hyaluronate, Panthenol, Aloe Barbadensis Leaf Juice, Carbomer, Phenoxyethanol.',

    pdpDescDewDrop: 'Մետաքսյա մաքրող յուղ, որը հալեցնում է դիմահարդարումը, SPF-ը և ամենօրյա կեղտը՝ մաշկը թողնելով հարմարավետ, ոչ չորացած։ Լվացվում է մաքուր՝ փափուկ, խոնավացած զգացողությամբ։',
    pdpUseDewDrop: 'Մերսեք չոր մաշկի վրա, ապա ավելացրեք մի քիչ ջուր՝ կաթնային էմուլսիա ստանալու համար։ Ցանկության դեպքում շարունակեք սովորական մաքրող միջոցով։',
    pdpIngDewDrop: 'Helianthus Annuus Seed Oil, Caprylic/Capric Triglyceride, Polyglyceryl-4 Oleate, Tocopherol, Limnanthes Alba Seed Oil.',

    pdpDescVelvetNight: 'Հարուստ գիշերային կրեմ, որն աջակցում է վերականգնմանը քնի ընթացքում։ Մաշկը արթնանում է ավելի լիքը, հանգիստ և խորապես հարմարավետ՝ հատկապես չոր կամ զով սեզոններին։',
    pdpUseVelvetNight: 'Որպես երեկոյան ծեսի վերջին քայլ՝ բարակ շերտով քսեք դեմքին ու պարանոցին։ Թողեք մի քանի րոպե նստի մինչև բարձին հենվելը։',
    pdpIngVelvetNight: 'Aqua, Caprylic/Capric Triglyceride, Shea Butter, Ceramide NP, Niacinamide, Glycerin, Dimethicone, Phenoxyethanol.',

    pdpDescBrightEyes: 'Հովացնող աչքերի կրեմ, որը մեղմացնում է այտուցի և խամրածության տեսքը աչքերի շուրջ։ Բավական թեթև է առավոտվա համար և հարմարավետ՝ գիշերվա։',
    pdpUseBrightEyes: 'Կաթեք բրնձի հատիկի չափ քանակ աչքի ոսկրի երկայնքով առավոտ և երեկո։ Նուրբ թակեք մատնեմատով՝ երբեք մի շփեք։',
    pdpIngBrightEyes: 'Aqua, Caffeine, Glycerin, Sodium Hyaluronate, Niacinamide, Cucumis Sativus Fruit Extract, Phenoxyethanol.',

    pdpDescPetalLip: 'Փափուկ բալզամ՝ կարիտեով և մասուրով, որը փափկացնում և սնուցում է չոր շուրթերը։ Թողնում է նուրբ փայլ՝ առանց կպչունության։',
    pdpUsePetalLip: 'Քսեք օրվա ընթացքում ըստ անհրաժեշտության և որպես վերջին քայլ քնելուց առաջ՝ գիշերային հարմարավետության համար։',
    pdpIngPetalLip: 'Butyrospermum Parkii Butter, Ricinus Communis Seed Oil, Beeswax, Rosa Canina Seed Oil, Tocopherol, Flavor.',

    pdpDescVelvetLipstick: 'Փափուկ մատե շրթներկ Blush Nude երանգով, որը սահում է հարթ և հարմարավետ է կրել։ Կառուցվող գույն՝ նուրբ, չչորացնող ավարտով։',
    pdpUseVelvetLipstick: 'Քսեք ուղղակիորեն կամ շրթունքների վրձնով՝ ճշգրտության համար։ Թեթևակի սեղմեք և շերտավորեք ավելի խոր գույնի համար։',
    pdpIngVelvetLipstick: 'Ricinus Communis Seed Oil, Caprylic/Capric Triglyceride, Candelilla Cera, Mica, Iron Oxides, Tocopherol.',

    pdpDescSilkFoundation: 'Բարձիկային հիմք՝ կառուցվող, բնական ավարտով, որը հավասարեցնում է երանգը առանց մաշկը ծածկելու։ Շնչող ծածկույթ, որ նման է մաշկի՝ միայն ավելի հարթ։',
    pdpUseSilkFoundation: 'Սեղմեք սպունգը բարձիկի մեջ, ապա թակեք դեմքի կենտրոնից և խառնեք դեպի դուրս։ Ավելացրեք այնտեղ, որտեղ ավելի շատ ծածկույթ է պետք։',
    pdpIngSilkFoundation: 'Aqua, Cyclopentasiloxane, Titanium Dioxide, Glycerin, Dimethicone, Iron Oxides, Phenoxyethanol.',

    pdpDescGoldenHighlighter: 'Նուրբ մանրացված հայլայթեր, որը բռնում է լույսը՝ ջերմ, ներսից փայլող երանգով։ Բավական փափուկ է ամեն օրվա համար և լուսավոր՝ երեկոյան։',
    pdpUseGoldenHighlighter: 'Քսեք դեմքի բարձր կետերին՝ այտոսկրեր, հոնքերի ոսկոր, շրթունքների վերին աղեղ՝ փափուկ վրձնով կամ մատով։',
    pdpIngGoldenHighlighter: 'Mica, Caprylic/Capric Triglyceride, Silica, Magnesium Stearate, Iron Oxides, Tin Oxide.',

    pdpDescFeatherMascara: 'Երկարացնող թարթիչների ներկ, որը սահմանում է թարթիչները առանց կոշտացման կամ ծանրության։ Թեթև բանաձևը մաքուր է կառուցվում առավոտից մինչև երեկո։',
    pdpUseFeatherMascara: 'Սկսելով թարթիչների հիմքից՝ վիգլեք վրձինը վերև՝ զիգզագ շարժումով։ Չորանալուց հետո շերտավորեք լրացուցիչ երկարության համար։',
    pdpIngFeatherMascara: 'Aqua, Beeswax, Copernicia Cerifera Cera, Iron Oxides, Acacia Senegal Gum, Phenoxyethanol.',

    pdpDescRosePetalBlush: 'Երկակի պալիտրայով դիմափոշի՝ փափուկ, կառուցվող գույնով՝ բնական կարմրության համար։ Խառնեք երանգները առանձին կամ միասին՝ անհատական վարդագույն ավարտի համար։',
    pdpUseRosePetalBlush: 'Թեթև շերտով քսեք այտերի խնձորներին և խառնեք դեպի քունքերը։ Շերտավորեք ավելի խոր կարմրության համար։',
    pdpIngRosePetalBlush: 'Mica, Caprylic/Capric Triglyceride, Silica, Iron Oxides, Titanium Dioxide, Magnesium Stearate.',

    pdpDescSheerVeilPowder: 'Թափանցիկ ֆիքսող փոշի, որը մեղմացնում է ծակոտիների տեսքը և փայլը՝ առանց սպիտակավուն շերտի։ Ավարտում է դիմահարդարումը փափուկ ֆոկուսի շղարշով։',
    pdpUseSheerVeilPowder: 'Թեթևակի ցանեք T-գոտու վրա և այնտեղ, որտեղ ավելի երկար կրում եք ուզում՝ փափուկ վրձնով կամ սպունգով։',
    pdpIngSheerVeilPowder: 'Silica, Mica, Caprylic/Capric Triglyceride, Dimethicone, Magnesium Stearate, Tocopherol.',
  },

  ru: {
    home: 'Главная',
    catalog: 'Каталог',
    aboutUs: 'О нас',
    bag: 'Корзина',
    contactUs: 'Связаться с нами',
    navContact: 'Контакты',
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

    contactEyebrow: 'Связаться',
    contactTitle: 'Свяжитесь с нами',
    contactIntro: 'Если у вас есть вопрос о заказе, нужна рекомендация по продукту или вы просто хотите поздороваться — мы будем рады услышать вас.',
    contactChannelEmail: 'Электронная почта',
    contactChannelEmailDesc: 'Пишите нам в любое время — обычно отвечаем в течение одного рабочего дня.',
    contactChannelInstagram: 'Instagram',
    contactChannelInstagramDesc: 'Подписывайтесь на новинки, советы и вдохновение.',
    contactOpenEmail: 'Написать Shopistik по электронной почте',
    contactOpenInstagram: 'Перейти в Instagram Shopistik',

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
    // product.html — chrome + detail copy
    pdpDescription: 'Описание',
    pdpHowToUse: 'Способ применения',
    pdpIngredients: 'Состав',
    pdpQuantity: 'Количество',
    pdpNotFound: 'Мы не смогли найти этот товар.',

    pdpDescRoseGoldSerum: 'Лёгкое ежедневное масло для лица с шиповником и золотистыми ботаническими экстрактами — возвращает сияние без тяжести. К вечеру кожа выглядит более гладкой, мягкой и мягко светящейся.',
    pdpUseRoseGoldSerum: 'После очищения и тоника согрейте 2–3 капли в ладонях и мягко впечатайте в лицо и шею. Используйте утром и вечером — отдельно или под увлажняющий крем.',
    pdpIngRoseGoldSerum: 'Rosa Canina Seed Oil, Squalane, Tocopherol, Helianthus Annuus Seed Oil, Caprylic/Capric Triglyceride, Fragrance (Parfum).',

    pdpDescHydraBloom: 'Невесомый крем-гель с 24-часовым увлажнением и мягким, «дышащим» финишем. Идеален для комбинированной и нормальной кожи, которой нужна влага без блеска.',
    pdpUseHydraBloom: 'Нанесите объём с горошину на чистую кожу утром и вечером. Легко вобейте до впитывания; днём завершите SPF.',
    pdpIngHydraBloom: 'Aqua, Glycerin, Sodium Hyaluronate, Panthenol, Aloe Barbadensis Leaf Juice, Carbomer, Phenoxyethanol.',

    pdpDescDewDrop: 'Шёлковое гидрофильное масло, которое растворяет макияж, SPF и повседневные загрязнения, оставляя кожу комфортной — без ощущения стянутости. Смывается чисто, с мягким увлажнённым послевкусием.',
    pdpUseDewDrop: 'Массируйте по сухой коже, затем добавьте немного воды, чтобы эмульгировать в молочко. При желании продолжите обычным очищающим средством.',
    pdpIngDewDrop: 'Helianthus Annuus Seed Oil, Caprylic/Capric Triglyceride, Polyglyceryl-4 Oleate, Tocopherol, Limnanthes Alba Seed Oil.',

    pdpDescVelvetNight: 'Насыщенный ночной крем, который поддерживает обновление во время сна. Кожа просыпается более наполненной, спокойной и глубоко увлажнённой — особенно в сухой или прохладный сезон.',
    pdpUseVelvetNight: 'Последним шагом вечернего ухода тонким слоем нанесите на лицо и шею. Дайте несколько минут впитаться перед сном.',
    pdpIngVelvetNight: 'Aqua, Caprylic/Capric Triglyceride, Shea Butter, Ceramide NP, Niacinamide, Glycerin, Dimethicone, Phenoxyethanol.',

    pdpDescBrightEyes: 'Охлаждающий крем для глаз, который смягчает вид отёчности и тусклости вокруг орбитальной зоны. Достаточно лёгкий для утра и комфортный для ночи.',
    pdpUseBrightEyes: 'Нанесите объём с рисовое зёрнышко вдоль орбитальной кости утром и вечером. Мягко вобейте безымянным пальцем — не растирайте.',
    pdpIngBrightEyes: 'Aqua, Caffeine, Glycerin, Sodium Hyaluronate, Niacinamide, Cucumis Sativus Fruit Extract, Phenoxyethanol.',

    pdpDescPetalLip: 'Мягкий бальзам с маслом ши и шиповником, который смягчает и питает сухие губы. Оставляет лёгкий блеск — без липкости.',
    pdpUsePetalLip: 'Наносите в течение дня по необходимости и как финальный шаг перед сном для ночного комфорта.',
    pdpIngPetalLip: 'Butyrospermum Parkii Butter, Ricinus Communis Seed Oil, Beeswax, Rosa Canina Seed Oil, Tocopherol, Flavor.',

    pdpDescVelvetLipstick: 'Мягкая матовая помада в оттенке Blush Nude — гладко наносится и комфортно носится. Наращиваемый цвет с изысканным, не сушащим финишем.',
    pdpUseVelvetLipstick: 'Нанесите прямо из стика или кистью для губ для точности. Промокните и наслоите для более насыщенного цвета.',
    pdpIngVelvetLipstick: 'Ricinus Communis Seed Oil, Caprylic/Capric Triglyceride, Candelilla Cera, Mica, Iron Oxides, Tocopherol.',

    pdpDescSilkFoundation: 'Кушон-тональная основа с наращиваемым натуральным покрытием, которое выравнивает тон, не маскируя кожу. Дышащее покрытие, которое выглядит как кожа — только глаже.',
    pdpUseSilkFoundation: 'Прижмите спонж к кушону, затем нанесите от центра лица наружу лёгкими касаниями. Добавьте там, где нужно больше покрытия.',
    pdpIngSilkFoundation: 'Aqua, Cyclopentasiloxane, Titanium Dioxide, Glycerin, Dimethicone, Iron Oxides, Phenoxyethanol.',

    pdpDescGoldenHighlighter: 'Мелкодисперсный хайлайтер с тёплым сиянием «изнутри». Достаточно мягкий для каждого дня и достаточно светящийся для вечера.',
    pdpUseGoldenHighlighter: 'Нанесите на выступающие зоны лица — скулы, надбровную дугу, лук Купидона — пушистой кистью или подушечкой пальца.',
    pdpIngGoldenHighlighter: 'Mica, Caprylic/Capric Triglyceride, Silica, Magnesium Stearate, Iron Oxides, Tin Oxide.',

    pdpDescFeatherMascara: 'Удлиняющая тушь, которая подчёркивает ресницы без комков и тяжести. Лёгкая формула чисто наращивается от дня к вечеру.',
    pdpUseFeatherMascara: 'Начиная от основания ресниц, ведите щёточку вверх зигзагообразным движением. После высыхания наслоите для дополнительной длины.',
    pdpIngFeatherMascara: 'Aqua, Beeswax, Copernicia Cerifera Cera, Iron Oxides, Acacia Senegal Gum, Phenoxyethanol.',

    pdpDescRosePetalBlush: 'Двойные румяна с мягким, наращиваемым цветом для естественного румянца. Смешивайте оттенки по отдельности или вместе для своего лепестково-розового финиша.',
    pdpUseRosePetalBlush: 'Лёгким слоем нанесите на яблочки щёк и растушуйте к вискам. Наслоите для более насыщенного румянца.',
    pdpIngRosePetalBlush: 'Mica, Caprylic/Capric Triglyceride, Silica, Iron Oxides, Titanium Dioxide, Magnesium Stearate.',

    pdpDescSheerVeilPowder: 'Прозрачная фиксирующая пудра, которая смягчает вид пор и блеска без мелового налёта. Завершает макияж мягким soft-focus покрывалом.',
    pdpUseSheerVeilPowder: 'Лёгким слоем нанесите на T-зону и туда, где хотите более стойкое покрытие, пушистой кистью или спонжем.',
    pdpIngSheerVeilPowder: 'Silica, Mica, Caprylic/Capric Triglyceride, Dimethicone, Magnesium Stearate, Tocopherol.',
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
