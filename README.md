# CarDet — אתר שטיפת רכבים / דיטיילינג / ננו

## הרצה מקומית
```
npm install
npm run dev
```
ואז פתחו http://localhost:3000

## מבנה
- `src/app/page.tsx` — מרכיב את כל העמוד
- `src/components/ScrollVideoStory.tsx` — רקע ה-Hero: 3 סרטוני מעבר שנגללים לפי מיקום הגלילה (public/videos)
- `src/components/QuoteForm.tsx` + `src/app/api/quote/route.ts` — טופס הצעת מחיר, כרגע שומר ל-`data/leads.json` מקומי
- `src/components/VideoGallery.tsx`, `ProductsGrid.tsx` — placeholders לגלריית סרטונים ולחנות המוצרים
- `src/components/SiteFooter.tsx` — טלפון/מייל/כתובת (placeholder, יש להחליף)

## מה placeholder ועדיין צריך להחליף
- שם העסק, טלפון, מייל, כתובת (ב-SiteHeader.tsx ו-SiteFooter.tsx)
- סרטוני הגלריה (VideoGallery.tsx) ומוצרי החנות (ProductsGrid.tsx)
- הרכב בסרטוני הרקע (public/videos) — כרגע 3 קבצים שמייצגים את 4 שלבי הסיפור (מלוכלך → קצף → ציפוי ננו → תוצאה)

## חיבור MongoDB Atlas (כשיהיה מוכן)
ראו את ההערה המפורטת בראש `src/app/api/quote/route.ts`.

## Deploy
מומלץ Vercel — מתחבר ישירות ל-Next.js, `vercel deploy` או חיבור ה-repo מה-Dashboard.
