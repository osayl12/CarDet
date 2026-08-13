import { Lang } from "./translations";

export type PricingTier = { label: string; price: string };
export type AddOn = { label: string; price: string };

export type ServiceDetail = {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  intro: string;
  steps: string[];
  materials: string[];
  tiers: PricingTier[];
  addOns: AddOn[];
};

export type ServiceDetailLabels = {
  backToServices: string;
  process: string;
  materialsUsed: string;
  pricing: string;
  addOnsTitle: string;
  ctaLabel: string;
  notFoundTitle: string;
  notFoundBody: string;
};

export const serviceDetailLabels: Record<Lang, ServiceDetailLabels> = {
  en: {
    backToServices: "Back to Services",
    process: "Our Process",
    materialsUsed: "What We Use",
    pricing: "Pricing by Vehicle Size",
    addOnsTitle: "Optional Add-Ons",
    ctaLabel: "Get a Quote for This Service",
    notFoundTitle: "Service not found",
    notFoundBody: "This service doesn't exist. Head back to see everything we offer.",
  },
  he: {
    backToServices: "חזרה לשירותים",
    process: "התהליך שלנו",
    materialsUsed: "במה אנחנו משתמשים",
    pricing: "מחירים לפי גודל רכב",
    addOnsTitle: "תוספות אופציונליות",
    ctaLabel: "קבלו הצעת מחיר לשירות הזה",
    notFoundTitle: "השירות לא נמצא",
    notFoundBody: "השירות הזה לא קיים. חזרו לראות את כל מה שאנחנו מציעים.",
  },
};

export const servicesData: Record<Lang, ServiceDetail[]> = {
  en: [
    {
      slug: "exterior-wash",
      name: "Exterior Wash",
      shortDescription: "Hand wash, foam bath, wheels & tires.",
      image: "/images/services/exterior-wash.jpg",
      intro:
        "A thorough hand wash using the two-bucket method and pH-neutral products, safe for any paint or coating.",
      steps: [
        "Pre-rinse to remove loose dirt and grit",
        "Foam bath with pH-neutral shampoo",
        "Hand wash with microfiber mitts (two-bucket method)",
        "Wheel and tire cleaning",
        "Full rinse",
        "Hand dry with plush microfiber towels",
        "Tire dressing finish",
      ],
      materials: [
        "pH-neutral car shampoo",
        "Foam cannon",
        "Microfiber wash mitts",
        "Grit guard buckets",
        "Wheel cleaner",
        "Microfiber drying towels",
        "Tire dressing",
      ],
      tiers: [
        { label: "Cars", price: "₪80" },
        { label: "Minivans / SUVs", price: "₪100" },
        { label: "Full-Size Trucks / Vans", price: "₪120" },
      ],
      addOns: [{ label: "Wheel & Tire Deep Clean", price: "+₪30" }],
    },
    {
      slug: "interior-detailing",
      name: "Interior Detailing",
      shortDescription: "Deep vacuum, dashboard, panels & glass.",
      image: "/images/services/interior-detailing.jpg",
      intro:
        "A complete interior refresh — every surface vacuumed, wiped, and protected, inside and out of every crevice.",
      steps: [
        "Full vacuum of seats, carpets, and trunk",
        "Dashboard and panel wipe-down",
        "Air vent detailing",
        "Interior glass cleaning",
        "Plastic and vinyl UV protectant application",
        "Door jamb cleaning",
      ],
      materials: [
        "HEPA-filter vacuum",
        "Interior detailing brushes",
        "All-purpose cleaner",
        "Glass cleaner",
        "UV plastic/vinyl protectant",
        "Detailing swabs",
        "Microfiber cloths",
      ],
      tiers: [
        { label: "Cars", price: "₪250" },
        { label: "Minivans / SUVs", price: "₪300" },
        { label: "Full-Size Trucks / Vans", price: "₪350" },
      ],
      addOns: [{ label: "Ozone Odor Elimination", price: "+₪80" }],
    },
    {
      slug: "engine-bay-cleaning",
      name: "Engine Bay Cleaning",
      shortDescription: "Safe degreasing and detailing of the engine bay.",
      image: "/images/services/engine-bay.jpg",
      intro:
        "A safe, careful clean of the engine bay that leaves it looking factory-fresh without risking any electronics.",
      steps: [
        "Cover sensitive electronics and intakes",
        "Apply engine-safe degreaser",
        "Agitate with detailing brushes",
        "Low-pressure rinse",
        "Dry with compressed air",
        "Apply protective dressing to plastics and rubber",
      ],
      materials: [
        "Engine-safe degreaser",
        "Detailing brushes (various sizes)",
        "Plastic and rubber protectant",
        "Compressed air",
        "Microfiber towels",
      ],
      tiers: [
        { label: "Cars", price: "₪150" },
        { label: "Minivans / SUVs", price: "₪180" },
        { label: "Full-Size Trucks / Vans", price: "₪220" },
      ],
      addOns: [{ label: "Satin Engine Dressing", price: "+₪40" }],
    },
    {
      slug: "leather-seat-care",
      name: "Leather Seat Care",
      shortDescription: "Deep cleaning and conditioning for leather seats.",
      image: "/images/services/leather-seats.jpg",
      intro:
        "Deep cleaning and conditioning that removes grime from the grain and keeps leather soft instead of cracking over time.",
      steps: [
        "Vacuum seams and crevices",
        "Apply pH-balanced leather cleaner",
        "Agitate gently with a soft brush",
        "Wipe away residue",
        "Apply leather conditioner",
        "Buff to a natural, non-greasy finish",
      ],
      materials: [
        "pH-balanced leather cleaner",
        "Soft detailing brush",
        "Leather conditioner",
        "Microfiber applicator pads",
      ],
      tiers: [
        { label: "Cars", price: "₪200" },
        { label: "Minivans / SUVs", price: "₪240" },
        { label: "Full-Size Trucks / Vans", price: "₪280" },
      ],
      addOns: [{ label: "Leather Sanitizing Treatment", price: "+₪50" }],
    },
    {
      slug: "paint-correction-polish",
      name: "Paint Correction & Polish",
      shortDescription: "Removes swirl marks and restores paint depth.",
      image: "/images/services/paint-correction.jpg",
      intro:
        "Machine correction that removes swirl marks and light scratches, restoring true depth and gloss to the paint.",
      steps: [
        "Wash and decontaminate with a clay bar",
        "Paint inspection under dedicated lighting",
        "Machine compounding with a cutting pad to remove defects",
        "Machine polishing with a finishing pad for gloss",
        "Panel wipe-down with IPA",
        "Final inspection",
      ],
      materials: [
        "Clay bar",
        "Dual-action polisher",
        "Cutting and finishing pads",
        "Compound and polish",
        "IPA panel wipe",
        "Inspection light",
      ],
      tiers: [
        { label: "Cars", price: "₪450" },
        { label: "Minivans / SUVs", price: "₪550" },
        { label: "Full-Size Trucks / Vans", price: "₪650" },
      ],
      addOns: [{ label: "Plastic Trim Restoration", price: "+₪75" }],
    },
    {
      slug: "nano-ceramic-coating",
      name: "Nano Ceramic Coating - Full Car",
      shortDescription: "Long-lasting ceramic protection and deep gloss.",
      image: "/images/services/nano-coating.jpg",
      intro:
        "A long-lasting SiO2 ceramic layer that protects the paint and keeps it looking freshly detailed for months.",
      steps: [
        "Full decontamination wash and clay bar treatment",
        "Light paint correction/polish",
        "Surface prep with IPA panel wipe",
        "Ceramic coating applied panel by panel",
        "Cure and flash time between coats",
        "Final inspection under dedicated lighting",
      ],
      materials: [
        "SiO2 ceramic coating",
        "Suede applicator blocks",
        "IPA panel wipe",
        "Cutting/finishing pads for prep polish",
        "UV inspection light",
      ],
      tiers: [
        { label: "Cars", price: "₪1,200" },
        { label: "Minivans / SUVs", price: "₪1,450" },
        { label: "Full-Size Trucks / Vans", price: "₪1,700" },
      ],
      addOns: [{ label: "Plastic Trim Ceramic Coating", price: "+₪75" }],
    },
  ],
  he: [
    {
      slug: "exterior-wash",
      name: "שטיפה חיצונית",
      shortDescription: "שטיפה ידנית, אמבט קצף, גלגלים וצמיגים.",
      image: "/images/services/exterior-wash.jpg",
      intro: "שטיפה ידנית יסודית בשיטת שני הדליים ובמוצרים ניטרליים, בטוחה לכל סוגי הצבע והציפויים.",
      steps: [
        "שטיפה מקדימה להסרת לכלוך וחצץ רופפים",
        "אמבט קצף עם שמפו ניטרלי",
        "שטיפה ידנית עם מיטים מיקרופייבר (שיטת שני הדליים)",
        "ניקוי גלגלים וצמיגים",
        "שטיפה מלאה",
        "ייבוש ידני במגבות מיקרופייבר",
        "גימור עם ספריי צמיגים",
      ],
      materials: [
        "שמפו רכב ניטרלי",
        "תותח קצף",
        "מיטים מיקרופייבר לשטיפה",
        "דליים עם גריט גארד",
        "מנקה גלגלים",
        "מגבות מיקרופייבר לייבוש",
        "ספריי צמיגים",
      ],
      tiers: [
        { label: "רכב פרטי", price: "₪80" },
        { label: "מיניוואן / רכב שטח (SUV)", price: "₪100" },
        { label: "טנדר / ואן גדול", price: "₪120" },
      ],
      addOns: [{ label: "ניקוי עמוק לגלגלים וצמיגים", price: "+₪30" }],
    },
    {
      slug: "interior-detailing",
      name: "דיטיילינג פנימי",
      shortDescription: "שאיבה יסודית, לוח מחוונים, פאנלים וזגוגיות.",
      image: "/images/services/interior-detailing.jpg",
      intro: "רענון פנים מלא - כל משטח נשאב, נוקה והוגן, כולל כל הפינות והחריצים.",
      steps: [
        "שאיבה מלאה של מושבים, שטיחים ותא מטען",
        "ניגוב לוח מחוונים ופאנלים",
        "ניקוי פתחי אוורור",
        "ניקוי זגוגיות פנימיות",
        "יישום הגנת UV לפלסטיק וויניל",
        "ניקוי מפתני דלתות",
      ],
      materials: [
        "שואב אבק עם פילטר HEPA",
        "מברשות דיטיילינג",
        "מנקה כללי",
        "מנקה זגוגיות",
        "הגנת UV לפלסטיק/ויניל",
        "מקלוני ניקוי",
        "מטליות מיקרופייבר",
      ],
      tiers: [
        { label: "רכב פרטי", price: "₪250" },
        { label: "מיניוואן / רכב שטח (SUV)", price: "₪300" },
        { label: "טנדר / ואן גדול", price: "₪350" },
      ],
      addOns: [{ label: "הסרת ריחות בטיפול אוזון", price: "+₪80" }],
    },
    {
      slug: "engine-bay-cleaning",
      name: "ניקוי תא מנוע",
      shortDescription: "הסרת שומן וניקוי בטוח של תא המנוע.",
      image: "/images/services/engine-bay.jpg",
      intro: "ניקוי זהיר ובטוח של תא המנוע שמשאיר אותו נראה כמו חדש, בלי לסכן רכיבים אלקטרוניים.",
      steps: [
        "כיסוי רכיבים אלקטרוניים ופתחי יניקה",
        "יישום מסיר שומן בטוח למנוע",
        "עיבוד עם מברשות דיטיילינג",
        "שטיפה בלחץ נמוך",
        "ייבוש באוויר דחוס",
        "יישום הגנה על פלסטיק וגומי",
      ],
      materials: [
        "מסיר שומן בטוח למנוע",
        "מברשות דיטיילינג בגדלים שונים",
        "הגנה לפלסטיק וגומי",
        "אוויר דחוס",
        "מגבות מיקרופייבר",
      ],
      tiers: [
        { label: "רכב פרטי", price: "₪150" },
        { label: "מיניוואן / רכב שטח (SUV)", price: "₪180" },
        { label: "טנדר / ואן גדול", price: "₪220" },
      ],
      addOns: [{ label: "גימור סאטן לתא המנוע", price: "+₪40" }],
    },
    {
      slug: "leather-seat-care",
      name: "טיפול בישיבת עור",
      shortDescription: "ניקוי יסודי והזנה לישיבת עור.",
      image: "/images/services/leather-seats.jpg",
      intro: "ניקוי עמוק והזנה שמסירים לכלוך מנקבובי העור ושומרים עליו רך במקום להיסדק עם הזמן.",
      steps: [
        "שאיבת תפרים וחריצים",
        "יישום מנקה עור מאוזן pH",
        "עיבוד עדין עם מברשת רכה",
        "ניגוב שאריות",
        "יישום מזין עור",
        "ליטוש לגימור טבעי ולא שמנוני",
      ],
      materials: [
        "מנקה עור מאוזן pH",
        "מברשת דיטיילינג רכה",
        "מזין עור",
        "פדים מיקרופייבר ליישום",
      ],
      tiers: [
        { label: "רכב פרטי", price: "₪200" },
        { label: "מיניוואן / רכב שטח (SUV)", price: "₪240" },
        { label: "טנדר / ואן גדול", price: "₪280" },
      ],
      addOns: [{ label: "טיפול חיטוי לעור", price: "+₪50" }],
    },
    {
      slug: "paint-correction-polish",
      name: "פוליש ותיקון צבע",
      shortDescription: "מסיר סימני שריטות ומחזיר עומק לצבע.",
      image: "/images/services/paint-correction.jpg",
      intro: "תיקון במכונה שמסיר סימני שריטות ופגמים קלים, ומחזיר עומק וברק אמיתיים לצבע.",
      steps: [
        "שטיפה וניקוי עם קליי בר",
        "בדיקת צבע תחת תאורה ייעודית",
        "עיבוד גס עם פד חיתוך להסרת פגמים",
        "פוליש עם פד גימור לברק",
        "ניגוב פאנלים עם IPA",
        "בדיקה סופית",
      ],
      materials: [
        "קליי בר",
        "מלטשת דואל-אקשן",
        "פדי חיתוך וגימור",
        "קומפאונד ופוליש",
        "IPA לניגוב פאנלים",
        "מנורת בדיקה",
      ],
      tiers: [
        { label: "רכב פרטי", price: "₪450" },
        { label: "מיניוואן / רכב שטח (SUV)", price: "₪550" },
        { label: "טנדר / ואן גדול", price: "₪650" },
      ],
      addOns: [{ label: "שיקום פלסטיקה חיצונית", price: "+₪75" }],
    },
    {
      slug: "nano-ceramic-coating",
      name: "ציפוי ננו קרמי - רכב מלא",
      shortDescription: "הגנה קרמית ארוכת טווח וברק עמוק.",
      image: "/images/services/nano-coating.jpg",
      intro: "שכבת קרמיקה SiO2 ארוכת טווח שמגנה על הצבע ושומרת עליו נראה כמו אחרי דיטיילינג לחודשים.",
      steps: [
        "שטיפת דה-קונטמינציה מלאה וטיפול קליי בר",
        "פוליש קל לתיקון צבע",
        "הכנת משטח עם ניגוב IPA",
        "יישום ציפוי קרמי פאנל אחר פאנל",
        "זמן ייבוש והתקשות בין שכבות",
        "בדיקה סופית תחת תאורה ייעודית",
      ],
      materials: [
        "ציפוי קרמי SiO2",
        "בלוקי יישום זמש",
        "IPA לניגוב פאנלים",
        "פדי חיתוך/גימור לפוליש הכנה",
        "מנורת בדיקה UV",
      ],
      tiers: [
        { label: "רכב פרטי", price: "₪1,200" },
        { label: "מיניוואן / רכב שטח (SUV)", price: "₪1,450" },
        { label: "טנדר / ואן גדול", price: "₪1,700" },
      ],
      addOns: [{ label: "ציפוי קרמי לפלסטיקה חיצונית", price: "+₪75" }],
    },
  ],
};
