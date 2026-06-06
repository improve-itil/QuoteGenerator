(function(){const M=document.createElement("link").relList;if(M&&M.supports&&M.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))ye(L);new MutationObserver(L=>{for(const x of L)if(x.type==="childList")for(const H of x.addedNodes)H.tagName==="LINK"&&H.rel==="modulepreload"&&ye(H)}).observe(document,{childList:!0,subtree:!0});function $t(L){const x={};return L.integrity&&(x.integrity=L.integrity),L.referrerPolicy&&(x.referrerPolicy=L.referrerPolicy),L.crossOrigin==="use-credentials"?x.credentials="include":L.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function ye(L){if(L.ep)return;L.ep=!0;const x=$t(L);fetch(L.href,x)}})();window.IMPROVE_IT_SUPABASE={url:"",anonKey:""};try{typeof import.meta<"u"&&{BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&({}.VITE_SUPABASE_URL&&(window.IMPROVE_IT_SUPABASE.url={}.VITE_SUPABASE_URL),{}.VITE_SUPABASE_ANON_KEY&&(window.IMPROVE_IT_SUPABASE.anonKey={}.VITE_SUPABASE_ANON_KEY))}catch{}(function(){const V="improve-it-quote-generator",M="improve-it-generator-authenticated",$t=typeof import.meta<"u"&&{BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&{}.VITE_GENERATOR_PASSWORD||"improve-it2026",ye="improve-it-signed-quotes",L="improve-it-quote-tracking",x="improve-it-template-settings",H="improve-it-salesperson-settings",Xe="improve-it-client-logo-settings",Wt=xr(),xt=`${Wt}/api/signed-archive`,Oe=`${Wt}/api/shared-quotes`,Kt="מחולל הצעות מחיר | Improve-IT",pi="1",_="ארגון לדוגמה",Yt=3,mi=4,gi="הנדון: הצעת מחיר עבור שימוש במערכת LMS ובלומדות מדף עבור ",ve={selectedId:"default",advisors:[{id:"default",name:"איש קשר לדוגמה",title:"תפקיד לדוגמה, Improve-IT"}]};let Ne=!1,be=[{maxUsers:60,price:2940},{maxUsers:90,price:3600},{maxUsers:120,price:3840},{maxUsers:150,price:4050},{maxUsers:180,price:4900},{maxUsers:210,price:4620},{maxUsers:250,price:4900},{maxUsers:300,price:5250},{maxUsers:350,price:5500},{maxUsers:400,price:5900},{maxUsers:450,price:6200},{maxUsers:500,price:6500},{maxUsers:550,price:6900},{maxUsers:600,price:7100},{maxUsers:650,price:7300},{maxUsers:700,price:7500},{maxUsers:750,price:7800},{maxUsers:800,price:8100},{maxUsers:850,price:8300},{maxUsers:900,price:8500},{maxUsers:950,price:8800},{maxUsers:1e3,price:9100}],we=[{maxUsers:180,price:4900},{maxUsers:210,price:5500},{maxUsers:250,price:5900},{maxUsers:300,price:6300},{maxUsers:350,price:6400},{maxUsers:400,price:6600},{maxUsers:450,price:6900},{maxUsers:500,price:7200},{maxUsers:550,price:7600},{maxUsers:600,price:7900},{maxUsers:650,price:8200},{maxUsers:700,price:8500}],U={1:4900,2:7500,3:8900},P={500:1200,700:1900,850:2200,default:2900},E={translationLms:750,translationPurchase:950,voiceoverHebrewLms:450,voiceoverHebrewPurchase:350,voiceoverEnglish:950,purchaseAdditionalCourse:2500};const Pt=new Map;let d=null;const S={lmsShelfRental:{label:"השכרת LMS עם לומדות מדף",description:"פורמט מלא להצעת השכרה שנתית של מערכת LMS עם לומדות מדף.",defaults:{includeLms:!0,showCompanyProfile:!0,showClients:!0,showBackground:!0,showSolution:!0,showWorkProcess:!0,showPricing:!0,showTerms:!0,showCancellation:!0,pricingPlanLabel:"השכרה - מסלול שנתי",subject:"הנדון: הצעת מחיר עבור שימוש במערכת LMS ובלומדות מדף עבור ארגון לדוגמה"},sectionDefinitions:[["showCompanyProfile","profile","פרופיל חברה"],["showClients","clients","לקוחות"],["showBackground","background","רקע"],["showSolution","solution","הפתרון המוצע - כללי"],["showWorkProcess","work","תהליך העבודה המוצע"],["showPricing","pricing","תמחור ותכולת ההצעה"],["showTerms","terms","תנאים כלליים"],["showCancellation","cancellation","נהלי ביטולים ועיכובים"]]},shortCommercial:{label:"הצעה מקוצרת",description:"פורמט קצר שמציג רק רקע, פתרון, תמחור ותנאים.",defaults:{includeLms:!0,showCompanyProfile:!1,showClients:!1,showBackground:!0,showSolution:!0,showWorkProcess:!1,showPricing:!0,showTerms:!0,showCancellation:!1,pricingPlanLabel:"תמחור מסחרי",subject:"הנדון: הצעת מחיר עבור שימוש במערכת LMS ובלומדות מדף עבור ארגון לדוגמה"},sectionDefinitions:[["showBackground","background","רקע"],["showSolution","solution","הפתרון המוצע"],["showPricing","pricing","תמחור"],["showTerms","terms","תנאים"]]}},Ze="lmsShelfRental",At=JSON.parse(JSON.stringify(S)),Xt=[["showCompanyProfile","profile","פרופיל חברה"],["showClients","clients","לקוחות"],["showBackground","background","רקע"],["showSolution","solution","הפתרון המוצע"],["showWorkProcess","work","תהליך העבודה"],["includeLms","lms","שירות LMS"],["showPricing","pricing","תמחור"],["showTerms","terms","תנאים"],["showCancellation","cancellation","ביטולים"]],le={companyProfileText:`את Improve-IT ייסד בשנת 2010 זיו גלבוע, המביא עימו שנים רבות של ניסיון בניהול בכיר בחברות מובילות בשוק בארץ, כמו גם ייעוץ לארגונים והיכרות רחבה עם מגוון הצרכים והפתרונות לשיפור ביצועים באמצעות תהליכי למידה ארגוניים.

צוות החברה מונה מפתחי הדרכה מנוסים בביצוע של עשרות רבות של פרויקטים בתחום ההדרכה והלמידה הדיגיטלית. בין השאר הצוות כולל מפיקים, גרפיקאים, מנחים ויועצים מקשת רחבה של התמחויות התורמים להצלחת התהליך בארגונים.

הצוות הרב מקצועי מביא עמו יכולות של פיתוח הדרכה, פיצוח תוכן, הפקת לומדות, סטודיו לצילום ודיבוב, וכן מיומנויות של ייעוץ ואימון אישי.`,clientsText:"מבין לקוחותינו",workProcessText:`התאמת התוכן: התוכן מבוסס על לומדות מדף, ויותאם בהתאם לדף ההערות אשר יועבר אלינו. ההתאמות כוללות שינויי טקסט, הוספת לוגו ושם לקוח בלבד.
שלב 1: הטמעת ההתאמות הנדרשות בלומדות המדף.
תיקוף ראשון: הלומדה המעודכנת תועבר אליכם לתיקוף ראשון.
שלב 2: הטמעת התיקונים בלומדה לאחר תיקוף ראשון.
תיקוף שני: תיקוף ואישור סופי של הלומדה שהופקה.`,lmsServiceText:`הכנה להקמת סביבה: יועברו אלינו רשימת משתמשים, מספר זיהוי לכל משתמש ולוגו הארגון באיכות טובה עם רקע שקוף.
הקמת סביבת עבודה במערכת ה-LMS עבור הארגון.
העלאת הלומדות והמשתמשים לסביבת העבודה שהוקמה במערכת.
הפקת דו"חות: דו"ח ביצוע יועבר אליכם אחת לחודש.`,pricingFinePrintText:`המחיר כולל סבב תיקוף אחד בלבד בכל שלב; כל ההערות לתיקון הלומדה יועברו בפעם אחת.
לאחר אישור שלב על ידי הלקוח, חזרה אחורה לשינוי ותיקון תוכן השלב תהיה בעלות נוספת.
המחיר אינו כולל מע"מ כחוק.
המחיר אינו כולל תרגום הלומדה לשפות.
המחיר כולל התאמה למובייל במצב אופקי בלבד; התאמה למצב אנכי בתוספת תשלום.
לא תתאפשר מחיקת משתמשים לאחר עליית הפרויקט לאוויר. במסלול השנתי ניתן לעדכן משתמשים אחת לחודש קלנדרי.
טרם תחילת העבודה המזמין יחתום על הזמנת עבודה רשמית.
כל חריגה או שעות עדכון ותחזוקה של הלומדה יהיו לפי עלות של 300 ₪ לשעה.`,termsText:`כלל התוצרים יימסרו בפורמטים דיגיטליים בלבד; הצעת המחיר אינה כוללת הוצאה לאור.
כלל ההתנהלות בפרויקט תהיה מול גורם אחד אשר יוגדר כ-POC וינהל את תחום העברת הידע מולנו.
העבודה מותנית בקבלת הזמנת עבודה רשמית לפחות 20 ימי עסקים טרם תחילת העבודה בפועל.
Improve-IT אינה אחראית בגין כל אי התאמה או נזק, בין ישיר ובין עקיף, שייגרם כתוצאה משימוש בתוכנה או בתוכן על ידי הלקוח.
סך החבות המצטברת לתשלום פיצויים בגין נזקים, מכל עילה שהיא, לא יעלה על סכום התמורה.
החברה רשאית לעשות שימוש בתוצרים ובחומריהם לצורכי הצגה ושיווק, אלא אם סוכם אחרת בכתב.`,cancellationText:`על תכולה אשר תבוטל לפני תחילת העבודה הרשמית ייגבו 30% מסך המחיר המוזמן, למעט אם הועברו חומרים כלשהם למזמין; במקרה כזה תשולם העלות המלאה.
תכולת עבודה אשר נכנסה לעבודה תשולם בהתאם לאבן הדרך הבאה בתוספת 20% מסך שארית ההזמנה.
לא יתקיימו החזרים מאבני דרך ששולמו.
כלל תכולות העבודה משפיעות האחת על השנייה; ביטול של תכולות עלול לגרור שינוי במחירים ליחידה של שאר התכולות המוזמנות, בכפוף להצעה זו ולשיקול דעתה הבלעדי של Improve-IT.`},Zt="assets/brand/client-logos.png",Ee=[{name:"מאוחדת",src:"assets/brand/client-logos/meuhedet.png"},{name:"כללית",src:"assets/brand/client-logos/clalit.png"},{name:"משרד הבריאות",src:"assets/brand/client-logos/ministry-health.png"},{name:"משרד הפנים",src:"assets/brand/client-logos/ministry-interior.png"},{name:"משטרת ישראל",src:"assets/brand/client-logos/israel-police.png"},{name:"ניצני הקריה",src:"assets/brand/client-logos/nitzanei-hakirya.png"},{name:"כבאות והצלה לישראל",src:"assets/brand/client-logos/fire-rescue.png"},{name:'המרכז הרפואי תל-אביב ע"ש סוראסקי',src:"assets/brand/client-logos/sourasky-medical-center.png"},{name:"ICL",src:"assets/brand/client-logos/icl.png"},{name:"תנובה",src:"assets/brand/client-logos/tnuva.png"},{name:"סופר-פארם",src:"assets/brand/client-logos/super-pharm.png"},{name:"OPHIR Optics",src:"assets/brand/client-logos/ophir-optics.png"},{name:"הפניקס",src:"assets/brand/client-logos/phoenix.png"},{name:"שקל",src:"assets/brand/client-logos/shekel-group.png"},{name:"שלמה ביטוח",src:"assets/brand/client-logos/shlomo-insurance.png"},{name:"אל על",src:"assets/brand/client-logos/elal.png"},{name:"אלקטרה",src:"assets/brand/client-logos/electra.png"},{name:"אבן קיסר",src:"assets/brand/client-logos/caesarstone.png"},{name:"איתוראן",src:"assets/brand/client-logos/ituran.png"},{name:"IKEA",src:"assets/brand/client-logos/ikea.png"},{name:"דואר ישראל",src:"assets/brand/client-logos/israel-post.png"},{name:"טבע",src:"assets/brand/client-logos/teva.png"},{name:"amdocs",src:"assets/brand/client-logos/amdocs.png"},{name:"הראל",src:"assets/brand/client-logos/harel.png"},{name:"בנק הפועלים",src:"assets/brand/client-logos/bank-hapoalim.png"},{name:"דיסקונט",src:"assets/brand/client-logos/discount.png?v=20260601-crop"},{name:"קבוצת בזן",src:"assets/brand/client-logos/bazan.png?v=20260601-crop",size:135}],Le={profile:{title:"פרופיל חברה",field:"companyProfileText"},clients:{title:"לקוחות",field:"clientsText"},background:{title:"רקע",field:"backgroundText"},solution:{title:"פתרון",field:"solutionText"},work:{title:"תהליך עבודה",field:"workProcessText"},lms:{title:"שירות LMS",field:"lmsServiceText"},pricing:{title:"תמחור - הערות",field:"pricingFinePrintText"},terms:{title:"תנאים",field:"termsText"},cancellation:{title:"ביטולים",field:"cancellationText"}},h={templateId:Ze,quoteNumber:"VER1",quoteDate:"",validDays:30,clientCompany:_,contactName:"איש קשר לדוגמה",contactTitle:"תפקיד לדוגמה",subject:He(_),signatoryName:ve.advisors[0].name,signatoryTitle:ve.advisors[0].title,clientSignerName:"",clientSignerTitle:"",clientSignerCompany:"",clientSignatureDate:"",clientSignatureData:"",clientLogos:Ee.map(e=>({...e})),pricingItemsEdited:!1,users:100,courseCount:Yt,courseNames:[],pricingPlanLabel:"השכרה - מסלול שנתי",pricingIntroText:"",additionalUserPrice:60,showTotals:!1,mergeCourseNotes:!1,includeLms:!0,lmsServiceTitle:"שירות LMS",lmsSectionLocation:"samePage",bilingualCourse:!1,includeHebrewVoiceover:!0,includeEnglishVoiceover:!1,includeTranslation:!1,pricingOptionLabels:{includeLms:"מערכת LMS בענן",bilingualCourse:"עברית ואנגלית",includeHebrewVoiceover:"קריינות בעברית",includeEnglishVoiceover:"קריינות באנגלית",includeTranslation:"תרגום"},discountPercent:0,discountDisplayMode:"percent",discountTitle:"הנחות",discountValidUntil:"2024-07-31",backgroundText:"ארגון לדוגמה בוחן בימים אלה את האפשרות לשילוב של לומדות מדף עבור עובדי הארגון, כולל שימוש במערכת LMS.",solutionText:`הפתרון המוצע מתבסס על לומדות מדף אשר פונה למכנה הרחב של עובדי ארגון לדוגמה.

כל לומדה תכלול סימולציות ותרגולים במרבית הפרקים אשר יאפשרו לכל לומד להתקדם בקצב שלו תוך יצירת אינטראקציה ועניין במהלך הלימוד, כמו גם תרגום של נהלי העבודה להתמודדויות היומיומיות במידה ואלה נדרשות מן העובד, ופתרון סימולטיבי של מצבים אשר עשויים להתרחש במהלך יום העבודה.

האתגר המרכזי של תהליך הלימוד הנדרש נמצא ביכולת של העובדים לנתח בעצמם מקרים ודילמות בהתאם לתהליכי העבודה במידה והם נדרשים מעובדי ארגון לדוגמה ובהתאם להנחיות הארגון.

תהליך בניית הלומדה, סיפור המסגרת המלווה את תהליך הלמידה, החלקים הוויזואליים, כמו גם האינטראקציות האינטראקטיביות של הלומדה מהווים כלי תומך להתמודדות עם האתגר וליישום וביצוע ההתנהגות הנדרשת מן העובדים כאשר הם נדרשים לטפל בבעיות או באירועים בארגון לדוגמה.`,...le,customItems:[],showCompanyProfile:!0,showClients:!0,showBackground:!0,showSolution:!0,showWorkProcess:!0,showPricing:!0,showTerms:!0,showCancellation:!0};let s=O(h),C=F(),Re=Ee.map(e=>({...e})),en=null;const z=Di()==="client";let et=s.clientCompany||"ארגון לדוגמה";const fi=B("pdf")==="1",tn=document.getElementById("authScreen"),hi=document.getElementById("authForm"),Te=document.getElementById("authPassword"),kt=document.getElementById("toggleAuthPassword"),Si=document.getElementById("authRemember"),nn=document.getElementById("authError"),A=document.getElementById("quoteForm"),_e=document.getElementById("saveData"),Ue=document.getElementById("proposalPreview"),Dt=document.getElementById("pricingItems"),Bt=document.getElementById("courseNamesList"),G=document.getElementById("sharePanel"),Me=document.getElementById("clientLinkOutput"),J=document.getElementById("copyClientLink"),Ot=document.getElementById("editLinkOutput"),W=document.getElementById("copyEditLink"),K=document.getElementById("signedArchivePanel"),on=document.getElementById("signedArchiveList"),rn=document.getElementById("signedArchiveSearch"),ue=document.getElementById("quoteTrackingPanel"),sn=document.getElementById("quoteTrackingList"),an=document.getElementById("quoteTrackingSearch"),de=document.getElementById("hideCurrentDeviceOpens"),pe=document.getElementById("settingsPanel"),Ie=document.getElementById("priceListPanel"),cn=document.getElementById("priceListContent"),Fe=document.getElementById("salespersonSelect"),Ce=document.getElementById("salespersonName"),tt=document.getElementById("salespersonTitle"),nt=document.getElementById("templateSettingsList"),it=document.getElementById("sectionEditor"),yi=document.getElementById("sectionEditorTitle"),me=document.getElementById("sectionEditorText"),ln=document.getElementById("clientLogosEditor"),ot=document.getElementById("clientLogosList"),vi=document.getElementById("addClientLogo"),bi=document.getElementById("closeSectionEditor"),wi=document.getElementById("resetSectionText"),qe=document.getElementById("appDialog"),Ei=document.getElementById("appDialogTitle"),Li=document.getElementById("appDialogMessage"),un=document.getElementById("appDialogClose"),je=document.getElementById("appDialogConfirm"),rt=document.getElementById("appDialogCancel"),Qe=document.getElementById("appDialogExtra"),v=document.getElementById("clientSignaturePad"),Ti=document.getElementById("clearSignature");let T=null,st=!1,Y=null,dn=null,X="",Z="";Ii();function Ii(){if(Ci()&&!$i()){xi(),pn();return}mn(),gn()}function pn(){const e=document.getElementById("loadingScreen");e&&(e.classList.add("fade-out"),window.setTimeout(()=>e.remove(),400))}function Ci(){return!z&&!fi}function $i(){try{return window.sessionStorage.getItem(M)==="1"||window.localStorage.getItem(M)==="1"}catch{return!1}}function xi(){document.body.classList.add("auth-required"),tn.hidden=!1,hi.addEventListener("submit",Ai),kt.addEventListener("click",Pi),window.setTimeout(()=>Te.focus(),0)}function Pi(){const e=Te.type==="password";Te.type=e?"text":"password",kt.textContent=e?"הסתר":"הצג",kt.setAttribute("aria-pressed",String(e)),Te.focus()}function Ai(e){if(e.preventDefault(),Te.value!==$t){nn.hidden=!1,Te.select();return}try{(Si.checked?window.localStorage:window.sessionStorage).setItem(M,"1")}catch{}nn.hidden=!0,mn(),gn()}function mn(){document.body.classList.remove("auth-required"),tn.hidden=!0}async function gn(){try{Jo(),bn(await io()),Re=await Io(),C=await Qi(),s=O(await ki()),et=s.clientCompany||"ארגון לדוגמה",z&&(jt(),Oi()),z||(document.title=Kt,ne(),Pn()),document.body.classList.toggle("client-mode",z),$e(),te(),Ve(),$(),ee(),k(),kr(),_r(),p(),A.addEventListener("input",wn),A.addEventListener("change",wn),Bt.addEventListener("input",uo),document.querySelectorAll("[data-pricing-option-label]").forEach(e=>{e.addEventListener("input",po)}),me.addEventListener("input",fo),bi.addEventListener("click",go),wi.addEventListener("click",ho),vi.addEventListener("click",wo),ot.addEventListener("input",xn),ot.addEventListener("change",xn),ot.addEventListener("click",Eo),document.querySelectorAll("[data-section-edit]").forEach(e=>{e.addEventListener("click",()=>mo(e.dataset.sectionEdit))}),document.querySelector(".topbar-actions").addEventListener("click",Mi,{capture:!0}),document.getElementById("addPricingItem").addEventListener("click",()=>{s.pricingItems.push({title:"רכיב חדש",price:0,notes:"",included:!1}),s.pricingItemsEdited=!0,k(),p()}),document.getElementById("resetPricingItems").addEventListener("click",()=>{ie(),k(),p()}),document.getElementById("resetSample").addEventListener("click",()=>{xe(""),s=O(h),et=s.clientCompany||"ארגון לדוגמה",ne(),Pn(),Jn(V),$(),ee(),k(),De(),p()}),_e.addEventListener("click",Fi),document.getElementById("createClientLink").addEventListener("click",$o),J.addEventListener("click",Ro),W.addEventListener("click",_o),document.getElementById("closeSharePanel").addEventListener("click",()=>{G.hidden=!0}),document.getElementById("showSignedArchive").addEventListener("click",Vo),rn.addEventListener("input",Ft),on.addEventListener("click",zo),document.getElementById("showQuoteTracking").addEventListener("click",gr),an.addEventListener("input",bt),de.addEventListener("change",bt),sn.addEventListener("click",Sr),document.getElementById("closeQuoteTracking").addEventListener("click",()=>{ue.hidden=!0}),document.getElementById("showSettings").addEventListener("click",Ui),document.getElementById("showPriceList").addEventListener("click",Wi),document.getElementById("editPriceListBtn").addEventListener("click",Ki),document.getElementById("savePriceListBtn").addEventListener("click",Xi),document.getElementById("cancelPriceListBtn").addEventListener("click",Yi),document.getElementById("logoutGenerator").addEventListener("click",qi),document.getElementById("closeSettings").addEventListener("click",()=>{pe.hidden=!0}),document.getElementById("closePriceList").addEventListener("click",()=>{Ie.hidden=!0}),document.getElementById("resetTemplateSettings").addEventListener("click",oo),Fe.addEventListener("change",Vi),Ce.addEventListener("input",Sn),tt.addEventListener("input",Sn),Ce.addEventListener("change",yn),tt.addEventListener("change",yn),document.getElementById("addSalespersonSettings").addEventListener("click",zi),document.getElementById("deleteSalespersonSettings").addEventListener("click",Gi),document.getElementById("resetSalespersonSettings").addEventListener("click",Ji),document.getElementById("addTemplateSettings").addEventListener("click",eo),nt.addEventListener("input",vn),nt.addEventListener("change",vn),nt.addEventListener("click",Zi),document.getElementById("closeSignedArchive").addEventListener("click",()=>{K.hidden=!0}),document.getElementById("jumpToSignature").addEventListener("click",Rr),document.getElementById("sendSignedQuote").addEventListener("click",Mo),document.getElementById("printQuote").addEventListener("click",Ao),Ti.addEventListener("click",Nr),B("pdf")==="1"&&!z&&(Oo(),window.setTimeout(On,350))}catch(e){console.error("Initialization failed",e)}finally{pn()}}async function ki(){const e=at();if(e){const i=await qt(e);if(i)return xe(e),z&&dr(e),i}const t=Bi();if(t)try{return JSON.parse(await bs(t))}catch(i){console.warn("Could not parse compressed quote data from URL hash",i)}const n=B("data");if(n)try{return JSON.parse(li(n))}catch(i){console.warn("Could not parse quote data from URL hash",i)}try{const i=ke(V);if(i)return JSON.parse(i)}catch(i){console.warn("Could not parse stored quote",i)}return h}function B(e){return new URLSearchParams(window.location.hash.replace(/^#/,"")).get(e)}function Di(){const e=B("mode");return e||(B("c")||B("cz")?"client":B("e")||B("ez")?"edit":"")}function at(){return B("id")||B("c")||B("e")||""}function Bi(){return B("z")||B("cz")||B("ez")||""}function Oi(){document.title=z?Ni(s):Kt}function Ni(e){const t=String((e==null?void 0:e.subject)||"").trim(),n=String((e==null?void 0:e.clientCompany)||"").trim();let i=t||(n?`הצעת מחיר עבור ${n}`:"הצעת מחיר");return n&&!i.includes(n)&&(i=`${i} - ${n}`),`${i} | Improve-IT`}function O(e,t={}){const n=t.syncDefaultTexts!==!1,i=!!(e!=null&&e.pricingItemsEdited&&Array.isArray(e==null?void 0:e.pricingItems)),r=Ri(e);let o={...h,...e||{}};n&&(o=ro(o,e||{})),_t(o.subject,_)&&o.clientCompany!==_&&(o.subject=He(o.clientCompany)),o.templateId=S[o.templateId]?o.templateId:Et(),o.quoteDate=Jt(o.quoteDate)?o.quoteDate:Gt(),o.validDays=y(o.validDays,h.validDays),o.users=y(o.users,h.users),o.courseCount=r?Yt:Math.max(0,Math.round(y(o.courseCount,0))),o.additionalUserPrice=y(o.additionalUserPrice,h.additionalUserPrice),o.discountPercent=y(o.discountPercent,0),o.discountDisplayMode=["percent","amount"].includes(o.discountDisplayMode)?o.discountDisplayMode:h.discountDisplayMode,o.discountValidUntil=ci(o.quoteDate),o.pricingPlanLabel=o.pricingPlanLabel||h.pricingPlanLabel,o.pricingIntroText=o.pricingIntroText||"",o.pricingOptionLabels={...h.pricingOptionLabels,...o.pricingOptionLabels||{}},Object.entries(h.pricingOptionLabels).forEach(([l,g])=>{String(o.pricingOptionLabels[l]||"").trim()||(o.pricingOptionLabels[l]=g)});const a=S[o.templateId]||S[Et()],u=(a==null?void 0:a.defaults)||{};if(typeof e.subject=="string"){let l=e.subject.trim();const g=typeof e.subjectLabel=="string"?e.subjectLabel.trim():"";g&&!l.startsWith(g)?l=`${g}: ${l}`:/^(הנדון|הנידון|נושא)([\s:]|$)/i.test(l)||(l=`הנדון: ${l}`),o.subject=l}else o.subject=u.subject||He(o.clientCompany);return["companyProfileText","clientsText","backgroundText","solutionText","workProcessText","lmsServiceText","pricingFinePrintText","termsText","cancellationText"].forEach(l=>{const g=le[l]||h[l]||"",b=typeof u[l]=="string"?u[l]:g,N=e==null?void 0:e[l];e===h||typeof N!="string"?o[l]=b:o[l]=N}),o.lmsServiceTitle=typeof o.lmsServiceTitle=="string"?o.lmsServiceTitle:"שירות LMS",o.lmsSectionLocation=["samePage","newPageAfter","newPageBefore"].includes(o.lmsSectionLocation)?o.lmsSectionLocation:"samePage",o.contactTitle=o.contactTitle||"",o.clientSignerName=o.clientSignerName||"",o.clientSignerTitle=o.clientSignerTitle||"",o.clientSignerCompany=o.clientSignerCompany||"",o.clientSignatureDate=o.clientSignatureDate||"",o.clientSignatureData=hs(o.clientSignatureData),o.clientLogos=q(o.clientLogos),o.courseNames=Array.isArray(o.courseNames)?o.courseNames.map(l=>String(l||"").trim()):String(o.courseNames||"").split(/\r?\n/).map(l=>l.trim()).filter(Boolean),o.courseCount=Math.max(o.courseCount,o.courseNames.length),o.customItems=Array.isArray(o.customItems)?o.customItems.map(l=>({title:l.title||"",price:y(l.price,0),notes:l.notes||"",included:!!l.included})):[],o.pricingItemsEdited=!!(e!=null&&e.pricingItemsEdited&&i),o.pricingItems=i?e.pricingItems.map(Lt).filter(l=>l.title):ii(o).concat(o.customItems.map(Lt)),["includeLms","bilingualCourse","includeHebrewVoiceover","includeEnglishVoiceover","includeTranslation","showTotals","mergeCourseNotes","showCompanyProfile","showClients","showBackground","showSolution","showWorkProcess","showPricing","showTerms","showCancellation"].forEach(l=>{o[l]=fs(o[l])}),o}function Ri(e){return!e||y(e.courseCount,0)!==mi||e.pricingItemsEdited?!1:(Array.isArray(e.courseNames)?e.courseNames:String(e.courseNames||"").split(/\r?\n/)).every(n=>!String(n||"").trim())}function $(){A.querySelectorAll("[name]").forEach(r=>{const o=s[r.name];r.type==="checkbox"?r.checked=!!o:r.name==="showTotals"?r.value=String(!!o):r.value=o??""}),_i();const t=document.getElementById("lmsSectionSettings");t&&(t.hidden=!s.includeLms);const n=document.getElementById("additionalUserPriceField");n&&(n.hidden=!ei(s.templateId));const i=document.getElementById("usersFieldLabel");i&&(i.hidden=!ei(s.templateId))}function ee(){const e=Math.max(0,Math.round(y(s.courseCount,0)));Bt.innerHTML=e?Array.from({length:e},(t,n)=>{const i=s.courseNames[n]||"";return`
            <label>
              לומדה ${n+1}
              <input data-course-name-index="${n}" type="text" value="${m(i)}" />
            </label>
          `}).join(""):'<p class="empty-note">לא הוגדרו לומדות.</p>'}function _i(){document.querySelectorAll("[data-pricing-option-label]").forEach(e=>{e.value=s.pricingOptionLabels[e.dataset.pricingOptionLabel]||""})}function $e(){const e=A.elements.templateId;e&&(e.innerHTML=Object.entries(S).map(([t,n])=>`<option value="${m(t)}" title="${m(n.description||"")}">${c(n.label)}</option>`).join(""))}function Ui(){te(),Ve(),pe.hidden=!1,G.hidden=!0,K.hidden=!0,ue.hidden=!0,Ie.hidden=!0}function Mi(e){e.target.closest("button, .action-button")&&ji()}async function Fi(){if(D(V,JSON.stringify(s)),!!Z){_e.disabled=!0,_e.textContent="שומר קישור...";try{const e=Bn();if(!await sr(Z,e))throw new Error("Shared quote update failed");await oe("הקישור עודכן","ההצעה המקושרת לקישור נשמרה בהצלחה.")}catch(e){console.error("Could not update shared quote",e),await oe("לא ניתן לשמור קישור","לא הצלחנו לעדכן את ההצעה המקושרת. נסו שוב בעוד רגע.")}finally{_e.disabled=!1,fn()}}}function xe(e){Z=e||"",fn()}function fn(){_e.textContent=Z?"שמירת קישור":"שמירה"}function qi(){try{window.sessionStorage.removeItem(M),window.localStorage.removeItem(M)}catch{}window.location.reload()}function ji(){window.scrollTo({top:0,left:0,behavior:"smooth"})}function F(e={}){e=e||{};const n=(Array.isArray(e.advisors)?e.advisors:e.name||e.title?[e]:ve.advisors).map(hn).filter(r=>r.name);return n.length||n.push(...ve.advisors.map(hn)),{selectedId:n.some(r=>r.id===e.selectedId)?e.selectedId:n[0].id,advisors:n}}function hn(e={}){const t=ve.advisors[0],n=String(e.name||t.name).trim();return{id:String(e.id||ai("salesperson")).trim(),name:n,title:String(e.title||t.title).trim()}}function Pe(e=C){const t=e!=null&&e.advisors?e:F(e);return t.advisors.find(n=>n.id===t.selectedId)||t.advisors[0]}async function Qi(){if(d)try{const{data:e,error:t}=await d.from("salesperson_settings").select("settings").eq("id","default").maybeSingle();if(t)throw t;if(e!=null&&e.settings){const i=F(e.settings);return D(H,JSON.stringify(i)),i}const n=F();return await zn(n),D(H,JSON.stringify(n)),n}catch(e){console.warn("Could not load salesperson settings from Supabase",e)}try{const e=ke(H);return F(e?JSON.parse(e):null)}catch(e){return console.warn("Could not parse salesperson settings",e),F()}}function Ae(){C=F(C),D(H,JSON.stringify(C)),zn(C)}function te(){const e=Pe();Fe.innerHTML=C.advisors.map(t=>`<option value="${m(t.id)}">${c(t.name)}</option>`).join(""),Fe.value=C.selectedId,Ce.value=e.name,tt.value=e.title}function ne(){const e=Pe();s.signatoryName=e.name,s.signatoryTitle=e.title}function Vi(){C.selectedId=Fe.value,Ae(),te(),ne(),$(),p()}function Sn(){const e=Pe();e.name=Ce.value,e.title=tt.value,Hi(),ne(),$(),p()}function yn(){Ae(),te(),ne(),$(),p()}function Hi(){const e=Pe(),t=Array.from(Fe.options).find(n=>n.value===e.id);t&&(t.textContent=e.name.trim()||ve.advisors[0].name)}function zi(){const e={id:ai("salesperson"),name:"יועץ מכירות חדש",title:"תפקיד, Improve-IT"};C.advisors.push(e),C.selectedId=e.id,Ae(),te(),ne(),$(),p(),Ce.focus(),Ce.select()}async function Gi(){if(C.advisors.length<=1){await oe("לא ניתן למחוק","חייב להישאר לפחות יועץ מכירות אחד.");return}const e=Pe();await Ge("מחיקת יועץ מכירות",`למחוק את "${e.name}" מהרשימה?`,"מחיקה")&&(C.advisors=C.advisors.filter(n=>n.id!==e.id),C.selectedId=C.advisors[0].id,Ae(),te(),ne(),$(),p())}function Ji(){C=F(),Ae(),te(),ne(),$(),p()}function Wi(){Ne=!1,ct(!1),lt(),Ie.hidden=!1,G.hidden=!0,K.hidden=!0,ue.hidden=!0,pe.hidden=!0}function Ki(){Ne=!0,ct(!0),lt()}function Yi(){Ne=!1,ct(!1),lt()}function Xi(){const e=[];document.querySelectorAll("[data-single-tier-users]").forEach(n=>{const i=n.dataset.singleTierUsers,r=document.querySelector(`[data-single-tier-price="${i}"]`);r&&e.push({maxUsers:y(n.value,0),price:y(r.value,0)})}),e.length>0&&(be=e.sort((n,i)=>n.maxUsers-i.maxUsers));const t=[];document.querySelectorAll("[data-triple-tier-users]").forEach(n=>{const i=n.dataset.tripleTierUsers,r=document.querySelector(`[data-triple-tier-price="${i}"]`);r&&t.push({maxUsers:y(n.value,0),price:y(r.value,0)})}),t.length>0&&(we=t.sort((n,i)=>n.maxUsers-i.maxUsers)),document.querySelectorAll("[data-extra-lms]").forEach(n=>{const i=n.dataset.extraLms;P[i]=y(n.value,0)}),document.querySelectorAll("[data-purchase-qty]").forEach(n=>{const i=n.dataset.purchaseQty;U[i]=y(n.value,0)}),document.querySelectorAll("[data-other-price]").forEach(n=>{const i=n.dataset.otherPrice;E[i]=y(n.value,0)}),ut(),Ne=!1,ct(!1),lt(),ie(),k(),p()}function ct(e){document.getElementById("editPriceListBtn").hidden=e,document.getElementById("closePriceList").hidden=e,document.getElementById("savePriceListBtn").hidden=!e,document.getElementById("cancelPriceListBtn").hidden=!e}function lt(){Ne?cn.innerHTML=`
        <div class="price-tables-grid">
          <div class="price-table-card">
            <h4>השכרת LMS - לומדה אחת במערכת (עריכה)</h4>
            <div class="price-table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>עד עובדים</th>
                    <th>מחיר שנתי (₪)</th>
                  </tr>
                </thead>
                <tbody>
                  ${be.map((e,t)=>`
                    <tr>
                      <td><input type="number" class="price-edit-input" data-single-tier-users="${t}" value="${e.maxUsers}" /></td>
                      <td><input type="number" class="price-edit-input" data-single-tier-price="${t}" value="${e.price}" /></td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
          
          <div class="price-table-card">
            <h4>השכרת LMS - חבילת 3 לומדות (עריכה)</h4>
            <div class="price-table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>עד עובדים</th>
                    <th>מחיר שנתי (₪)</th>
                  </tr>
                </thead>
                <tbody>
                  ${we.map((e,t)=>`
                    <tr>
                      <td><input type="number" class="price-edit-input" data-triple-tier-users="${t}" value="${e.maxUsers}" /></td>
                      <td><input type="number" class="price-edit-input" data-triple-tier-price="${t}" value="${e.price}" /></td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div class="price-extras-grid">
          <div class="price-extra-card">
            <h4>לומדות נוספות מעבר לחבילה (LMS)</h4>
            <ul>
              <li>עד 500 עובדים: <input type="number" class="price-edit-input inline" data-extra-lms="500" value="${P[500]}" /> ₪ / שנה</li>
              <li>עד 700 עובדים: <input type="number" class="price-edit-input inline" data-extra-lms="700" value="${P[700]}" /> ₪ / שנה</li>
              <li>עד 850 עובדים: <input type="number" class="price-edit-input inline" data-extra-lms="850" value="${P[850]}" /> ₪ / שנה</li>
              <li>מעל 850 עובדים: <input type="number" class="price-edit-input inline" data-extra-lms="default" value="${P.default}" /> ₪ / שנה</li>
            </ul>
          </div>
          
          <div class="price-extra-card">
            <h4>רכישת לומדות מדף (ללא LMS)</h4>
            <ul>
              <li>לומדה אחת: <input type="number" class="price-edit-input inline" data-purchase-qty="1" value="${U[1]}" /> ₪</li>
              <li>חבילת 2 לומדות: <input type="number" class="price-edit-input inline" data-purchase-qty="2" value="${U[2]}" /> ₪</li>
              <li>חבילת 3 לומדות: <input type="number" class="price-edit-input inline" data-purchase-qty="3" value="${U[3]}" /> ₪</li>
              <li>כל לומדה נוספת מעבר ל-3: <input type="number" class="price-edit-input inline" data-other-price="purchaseAdditionalCourse" value="${E.purchaseAdditionalCourse}" /> ₪</li>
            </ul>
          </div>
          
          <div class="price-extra-card">
            <h4>תוספות ושירותים נלווים</h4>
            <ul>
              <li>
                <strong>קריינות עברית (AI) ללומדה בודדת</strong>:<br/>
                רכישה: <input type="number" class="price-edit-input inline small" data-other-price="voiceoverHebrewPurchase" value="${E.voiceoverHebrewPurchase}" /> ₪ |
                LMS: <input type="number" class="price-edit-input inline small" data-other-price="voiceoverHebrewLms" value="${E.voiceoverHebrewLms}" /> ₪
              </li>
              <li>
                <strong>קריינות אנגלית (AI) ללומדה</strong>:<br/>
                <input type="number" class="price-edit-input inline" data-other-price="voiceoverEnglish" value="${E.voiceoverEnglish}" /> ₪
              </li>
              <li>
                <strong>תרגום לשפה נוספת ללומדה</strong>:<br/>
                עם LMS: <input type="number" class="price-edit-input inline small" data-other-price="translationLms" value="${E.translationLms}" /> ₪ |
                ללא LMS: <input type="number" class="price-edit-input inline small" data-other-price="translationPurchase" value="${E.translationPurchase}" /> ₪
              </li>
            </ul>
          </div>
        </div>
      `:cn.innerHTML=`
        <div class="price-tables-grid">
          <div class="price-table-card">
            <h4>השכרת LMS - לומדה אחת במערכת</h4>
            <div class="price-table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>עד עובדים</th>
                    <th>מחיר שנתי</th>
                  </tr>
                </thead>
                <tbody>
                  ${be.map(e=>`
                    <tr>
                      <td>${e.maxUsers}</td>
                      <td class="price-val">${w(e.price)}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
          
          <div class="price-table-card">
            <h4>השכרת LMS - חבילת 3 לומדות מדף</h4>
            <div class="price-table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>עד עובדים</th>
                    <th>מחיר שנתי</th>
                  </tr>
                </thead>
                <tbody>
                  ${we.map(e=>`
                    <tr>
                      <td>${e.maxUsers}</td>
                      <td class="price-val">${w(e.price)}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div class="price-extras-grid">
          <div class="price-extra-card">
            <h4>לומדות נוספות מעבר לחבילה (LMS)</h4>
            <ul>
              <li>עד 500 עובדים: <strong class="price-highlight">${w(P[500])} / שנה</strong></li>
              <li>עד 700 עובדים: <strong class="price-highlight">${w(P[700])} / שנה</strong></li>
              <li>עד 850 עובדים: <strong class="price-highlight">${w(P[850])} / שנה</strong></li>
              <li>מעל 850 עובדים: <strong class="price-highlight">${w(P.default)} / שנה</strong></li>
            </ul>
          </div>
          
          <div class="price-extra-card">
            <h4>רכישת לומדות מדף (ללא LMS)</h4>
            <ul>
              <li>לומדה אחת: <strong class="price-highlight">${w(U[1])}</strong></li>
              <li>חבילת 2 לומדות: <strong class="price-highlight">${w(U[2])}</strong></li>
              <li>חבילת 3 לומדות: <strong class="price-highlight">${w(U[3])}</strong></li>
              <li>כל לומדה נוספת מעבר ל-3: <strong class="price-highlight">${w(E.purchaseAdditionalCourse)}</strong></li>
            </ul>
          </div>
          
          <div class="price-extra-card">
            <h4>תוספות ושירותים נלווים</h4>
            <ul>
              <li><strong>קריינות עברית (AI)</strong>: ${w(E.voiceoverHebrewPurchase)} (רכישה) / ${w(E.voiceoverHebrewLms)} (השכרה) ללומדה בודדת. 2 לומדות ומעלה - <strong class="price-highlight-green">כלול במחיר!</strong></li>
              <li><strong>קריינות אנגלית (AI)</strong>: <strong class="price-highlight">${w(E.voiceoverEnglish)}</strong> ללומדה.</li>
              <li><strong>תרגום לשפה נוספת</strong> (אנגלית, ערבית, רוסית): ${w(E.translationLms)} ללומדה (עם LMS) / ${w(E.translationPurchase)} ללומדה (ללא LMS).</li>
            </ul>
          </div>
        </div>
      `}function Ve(){nt.innerHTML=Object.entries(S).map(([e,t])=>{var i,r;const n=t.sectionDefinitions||[];return`
          <article class="template-settings-card" data-template-id="${m(e)}">
            <div class="template-settings-card-head">
              <h3>${c(t.label)}</h3>
              <button type="button" class="compact danger" data-delete-template="${m(e)}">מחיקה</button>
            </div>
            <label>
              שם הפורמט
              <input data-template-field="label" type="text" value="${m(t.label)}" />
            </label>
            <label>
              תיאור
              <textarea data-template-field="description" rows="2">${c(t.description||"")}</textarea>
            </label>
            <label>
              תיאור מסלול ברירת מחדל
              <input data-template-default-text="pricingPlanLabel" type="text" value="${m(((i=t.defaults)==null?void 0:i.pricingPlanLabel)||"")}" />
            </label>
            <label>
              נושא ההצעה ברירת מחדל (כולל פתיח הנדון)
              <input data-template-default-text="subject" type="text" value="${m(((r=t.defaults)==null?void 0:r.subject)||"")}" />
            </label>
            <div class="template-section-settings">
              <div class="template-section-header">
                <span>כותרת הסעיף</span>
                <span>מופיע במסמך</span>
                <span>בתוכן העניינים</span>
              </div>
              ${Xt.map(([o,a,u])=>{var R;const f=n.find(([I])=>I===o),l=!!((R=t.defaults)!=null&&R[o]),g=!!(l&&f),b=Le[a],N=b?[[b.field,b.title],b.extraField?[b.extraField,"שירות LMS"]:null].filter(Boolean).map(([I,It])=>{var ce;const Ct=((ce=t.defaults)==null?void 0:ce[I])??le[I]??h[I]??"";return`
                          <label class="template-section-text-field" style="grid-column: 1 / -1; margin-top: 6px;">
                            <span>טקסט ברירת מחדל (${c(It)})</span>
                            <textarea data-template-default-text="${I}" rows="3">${c(Ct)}</textarea>
                          </label>
                        `}).join(""):"";return`
                  <div class="template-section-row-container">
                    <div class="template-section-row">
                      <label>
                        <span class="template-section-title">${c(u)}</span>
                        <input data-template-section-title="${o}" type="text" value="${m((f==null?void 0:f[2])||u)}" />
                      </label>
                      <label class="template-section-check">
                        <input data-template-default-flag="${o}" type="checkbox" ${l?"checked":""} />
                        <span>מסמך</span>
                      </label>
                      <label class="template-section-check">
                        <input data-template-toc-flag="${o}" type="checkbox" ${g?"checked":""} ${l?"":"disabled"} />
                        <span>תוכן</span>
                      </label>
                    </div>
                    ${N}
                  </div>
                `}).join("")}
            </div>
            <button type="button" class="compact" data-apply-template="${m(e)}">החל פורמט</button>
          </article>
        `}).join("")}function vn(e){const t=e.target.closest("[data-template-id]");t&&(no(t),ut(),$e(),A.elements.templateId.value=s.templateId,p())}function Zi(e){const t=e.target.closest("[data-delete-template]");if(t){to(t.dataset.deleteTemplate);return}const n=e.target.closest("[data-apply-template]");n&&(s.templateId=n.dataset.applyTemplate,Ut(),ie(),$e(),$(),ee(),k(),p())}function eo(){const e=JSON.parse(JSON.stringify(wt(s))),t=`customTemplate${Date.now()}`;S[t]={...e,label:"פורמט חדש",description:"פורמט מותאם אישית.",defaults:{...e.defaults||{}},sectionDefinitions:(e.sectionDefinitions||[]).map(n=>[...n])},s.templateId=t,ut(),$e(),$(),Ve(),p()}async function to(e){if(!S[e])return;if(Object.keys(S).length<=1){await oe("לא ניתן למחוק","חייב להישאר לפחות פורמט אחד במחולל.");return}await Ge("מחיקת פורמט",`למחוק את הפורמט "${S[e].label}"?`,"מחיקה")&&(delete S[e],s.templateId===e&&(s.templateId=Et(),Ut(),ie()),ut(),$e(),$(),Ve(),k(),p())}function no(e){var r;const t=e.dataset.templateId,n=S[t];if(!n)return;const i={...n.defaults||{}};n.label=e.querySelector('[data-template-field="label"]').value.trim()||((r=At[t])==null?void 0:r.label)||"פורמט",n.description=e.querySelector('[data-template-field="description"]').value.trim(),n.defaults={...n.defaults||{}},e.querySelectorAll("[data-template-default-text]").forEach(o=>{const a=o.dataset.templateDefaultText,u=o.value,f=i[a];if(s.templateId===t){const l=le[a]||h[a]||"",g=s[a];if((!g||g===l||typeof f=="string"&&g===f)&&(s[a]=u,X)){const b=Le[X];b&&(b.field===a||b.extraField===a)&&(me.value=pt(b))}}n.defaults[a]=u}),e.querySelectorAll("[data-template-default-flag]").forEach(o=>{n.defaults[o.dataset.templateDefaultFlag]=o.checked;const a=e.querySelector(`[data-template-toc-flag="${o.dataset.templateDefaultFlag}"]`);a&&(a.disabled=!o.checked,o.checked||(a.checked=!1))}),n.sectionDefinitions=Xt.reduce((o,[a,u,f])=>{var b,N,R;const l=(b=e.querySelector(`[data-template-default-flag="${a}"]`))==null?void 0:b.checked,g=(N=e.querySelector(`[data-template-toc-flag="${a}"]`))==null?void 0:N.checked;if(n.defaults[a]=!!l,l&&g){const I=((R=e.querySelector(`[data-template-section-title="${a}"]`))==null?void 0:R.value.trim())||f;o.push([a,u,I])}return o},[])}async function io(){if(d)try{const{data:e,error:t}=await d.from("template_settings").select("settings").eq("id","default").maybeSingle();if(t)throw t;if(e!=null&&e.settings)return D(x,JSON.stringify(e.settings)),e.settings}catch(e){console.warn("Could not load template settings from Supabase",e)}try{const e=ke(x);return e?JSON.parse(e):null}catch(e){return console.warn("Could not parse template settings",e),null}}function ut(){const e={...S,priceList:{LMS_SINGLE_COURSE_TIERS:be,LMS_THREE_COURSE_PACKAGE_TIERS:we,SHELF_COURSE_GROUP_A_PACKAGE_PRICES:U,LMS_ADDITIONAL_COURSE_PRICES:P,OTHER_PRICES:E}};D(x,JSON.stringify(e)),Pr(e)}function bn(e){if(Object.keys(S).forEach(t=>delete S[t]),Object.entries(At).forEach(([t,n])=>{const i=(e==null?void 0:e[t])||{};S[t]={...n,...i,defaults:{...n.defaults||{},...i.defaults||{}},sectionDefinitions:Array.isArray(i.sectionDefinitions)?i.sectionDefinitions:n.sectionDefinitions}}),Object.entries(e||{}).forEach(([t,n])=>{S[t]||t==="priceList"||(S[t]={label:n.label||"פורמט",description:n.description||"",defaults:{...n.defaults||{}},sectionDefinitions:Array.isArray(n.sectionDefinitions)?n.sectionDefinitions:[]})}),e!=null&&e.priceList){const t=e.priceList;t.LMS_SINGLE_COURSE_TIERS&&(be=t.LMS_SINGLE_COURSE_TIERS),t.LMS_THREE_COURSE_PACKAGE_TIERS&&(we=t.LMS_THREE_COURSE_PACKAGE_TIERS),t.SHELF_COURSE_GROUP_A_PACKAGE_PRICES&&(U=t.SHELF_COURSE_GROUP_A_PACKAGE_PRICES),t.LMS_ADDITIONAL_COURSE_PRICES&&(P=t.LMS_ADDITIONAL_COURSE_PRICES),t.OTHER_PRICES&&(E=t.OTHER_PRICES)}}async function oo(){await Ge("איפוס פורמטים","להחזיר את הגדרות הפורמטים לברירת המחדל?","איפוס")&&(Jn(x),await Ar(),bn(At),$e(),$(),Ve(),p())}function wn(e){const t=e.target;if(!t.name||t.closest(".custom-item")||t.dataset.pricingOptionLabel)return;const n=s.clientCompany,i=s.subject;if(t.name==="clientCompany"&&e.type==="change"){const a=t.value||"",u=et||"ארגון לדוגמה",f=a||"ארגון לדוגמה";if(u!==f){const l=I=>I.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),g=new RegExp(l(u),"g");s.subject=(s.subject||"").replace(g,f),s.backgroundText=(s.backgroundText||"").replace(g,f),s.solutionText=(s.solutionText||"").replace(g,f);const b=A.elements.subject,N=A.elements.backgroundText,R=A.elements.solutionText;if(b&&(b.value=s.subject),N&&(N.value=s.backgroundText),R&&(R.value=s.solutionText),it&&!it.hidden&&X){const I=Le[X];I&&(I.field==="backgroundText"||I.field==="solutionText")&&(me.value=pt(I))}et=f}}const r=["users","courseCount","includeLms","bilingualCourse","includeHebrewVoiceover","includeEnglishVoiceover","includeTranslation","additionalUserPrice"].includes(t.name);if(t.name==="templateId"?(s.templateId=S[t.value]?t.value:Ze,Ut(),ie(),$(),ee()):t.type==="checkbox"?s[t.name]=t.checked:t.name==="showTotals"?s[t.name]=t.value==="true":t.type==="number"?(s[t.name]=y(t.value,0),t.name==="courseCount"&&(s.courseNames=s.courseNames.slice(0,Math.max(0,Math.round(y(s.courseCount,0)))),ee())):s[t.name]=t.value,t.name==="clientCompany"&&lo(i,n)&&(s.subject=He(s.clientCompany),A.elements.subject&&(A.elements.subject.value=s.subject)),t.name==="clientCompany"&&so(n),t.name==="quoteDate"&&(s.discountValidUntil=ci(s.quoteDate),A.elements.discountValidUntil&&(A.elements.discountValidUntil.value=s.discountValidUntil)),t.name==="signatoryName"||t.name==="signatoryTitle"){const a=Pe();a.name=s.signatoryName,a.title=s.signatoryTitle,Ae(),te()}["templateId","courseCount","includeLms"].includes(t.name)&&(Co(),$()),r&&ie();const o=document.getElementById("lmsSectionSettings");o&&(o.hidden=!s.includeLms),k(),p()}function He(e){return`${gi}${Nt(e)}`}function Nt(e){return String(e||"").trim()||_}function dt(e,t){const n=Nt(t);return n===_?e:String(e||"").split(_).join(n)}function ro(e,t){return["backgroundText","solutionText"].forEach(i=>{(co(t,i)||Rt(t[i],t.clientCompany,i))&&(e[i]=dt(h[i],e.clientCompany))}),e}function so(e){["backgroundText","solutionText"].forEach(t=>{ao(s[t],e,t)&&(s[t]=dt(h[t],s.clientCompany))})}function ao(e,t,n){const i=String(e||"").trim();return i?i===h[n]||i===dt(h[n],t)||Rt(i,t,n)||Rt(i,s.clientCompany,n):!0}function co(e,t){if(!Object.prototype.hasOwnProperty.call(e||{},t))return!0;const n=String(e[t]||"").trim();return n?n===h[t]||n===dt(h[t],e.clientCompany):!0}function Rt(e,t,n){const i=String(e||""),r=Nt(t);if(!i||r===_)return!1;if(i.includes(r+"נה"))return!0;const o=En(i,r),a=En(h[n],_);return o>a+2}function En(e,t){return t?String(e||"").split(t).length-1:0}function _t(e,t){return String(e||"").trim()===He(t)}function lo(e,t){return _t(e,t)||_t(e,_)}function uo(e){const t=Number(e.target.dataset.courseNameIndex);if(!Number.isInteger(t))return;const n=Array.from({length:Math.max(0,Math.round(y(s.courseCount,0)))},(i,r)=>{const o=Bt.querySelector(`[data-course-name-index="${r}"]`);return o?o.value.trim():s.courseNames[r]||""});s.courseNames=n,s.pricingItemsEdited?s.pricingItems[t]&&(s.pricingItems[t].title=Qt(s,t),k()):(ie(),k()),p()}function po(e){const t=e.target.dataset.pricingOptionLabel;t&&(s.pricingOptionLabels[t]=e.target.value,s.pricingItemsEdited||(ie(),k()),p())}function mo(e){const t=Le[e];t&&(X=e,yi.textContent=`עריכת סעיף: ${t.title}`,me.value=pt(t),ln.hidden=e!=="clients",e==="clients"&&ze(),it.hidden=!1,me.focus())}function go(){it.hidden=!0,ln.hidden=!0,X=""}function fo(){const e=Le[X];e&&(Ln(e,me.value),Tn(e),p())}function ho(){const e=Le[X];e&&(Ln(e,So(e)),me.value=pt(e),Tn(e),p())}function pt(e){const t=s[e.field]||"";if(!e.extraField)return t;const n=s.lmsServiceTitle||"שירות LMS";return`${t}

--- ${n} ---
${s[e.extraField]||""}`.trim()}function Ln(e,t){if(!e.extraField){s[e.field]=t;return}const n=s.lmsServiceTitle||"שירות LMS",i=t.match(/---\s*(.*?)\s*---/);if(i){const r=i[0],o=i[1].trim();if(o){s.lmsServiceTitle=o;const f=A.elements.lmsServiceTitle;f&&(f.value=o)}const[a,u]=t.split(r);s[e.field]=(a||"").trim(),s[e.extraField]=(u||"").trim()}else{const[r,o]=t.split(`--- ${n} ---`);s[e.field]=(r||"").trim(),s[e.extraField]=(o||"").trim()}}function So(e){const n=wt(s).defaults||{},i=typeof n[e.field]=="string"?n[e.field]:le[e.field]||h[e.field]||"";if(!e.extraField)return i;const r=s.lmsServiceTitle||"שירות LMS",o=typeof n[e.extraField]=="string"?n[e.extraField]:le[e.extraField]||h[e.extraField]||"";return`${i}

--- ${r} ---
${o}`}function Tn(e){[e.field,e.extraField].filter(Boolean).forEach(t=>{const n=A.elements[t];n&&(n.value=s[t]||"")})}function q(e){const n=(Array.isArray(e)?e:Ee).map(i=>({name:String((i==null?void 0:i.name)||"").trim(),src:Cn(In(i==null?void 0:i.src)),size:$n((i==null?void 0:i.size)??vo(i))})).filter(i=>i.src);return yo(n),n.length===1&&n[0].src===Zt?Ee.map(i=>({...i})):n}function yo(e){const t=e.some(i=>mt(i.src).endsWith("/electra.png")),n=e.findIndex(i=>mt(i.src).endsWith("/caesarstone.png"));t||n<0||e.splice(n,0,{name:"אלקטרה",src:Cn("assets/brand/client-logos/electra.png"),size:100})}function In(e){const t=String(e||"").trim();return t&&(/^data:image\/(png|jpe?g|gif|webp|svg\+xml);base64,[a-z0-9+/=]+$/i.test(t)||/^(https?:\/\/|assets\/|\.\/|\/)/i.test(t))?t:""}function Cn(e){const t=mt(e),n={"assets/brand/client-logos/amdocs.png":"20260602-crop","assets/brand/client-logos/bazan.png":"20260601-crop","assets/brand/client-logos/caesarstone.png":"20260602-crop","assets/brand/client-logos/discount.png":"20260601-crop","assets/brand/client-logos/electra.png":"20260602-crop","assets/brand/client-logos/israel-police.png":"20260602-crop","assets/brand/client-logos/shlomo-insurance.png":"20260602-crop","assets/brand/client-logos/super-pharm.png":"20260602-crop"};return n[t]?`${t}?v=${n[t]}`:e}function mt(e){return String(e||"").replace(/\?.*$/,"")}function $n(e){return Math.min(180,Math.max(60,Math.round(y(e,100))))}function vo(e){return mt(e==null?void 0:e.src).endsWith("/bazan.png")||String((e==null?void 0:e.name)||"").includes("בזן")?135:100}function ze(){ot.innerHTML=s.clientLogos.length?s.clientLogos.map(bo).join(""):'<p class="empty-note">לא הוגדרו לוגואים.</p>'}function bo(e,t){return`
      <div class="client-logo-item" data-client-logo-index="${t}">
        <div class="client-logo-order" aria-label="שינוי סדר">
          <button type="button" title="העבר למעלה" aria-label="העבר את ${m(e.name||"הלוגו")} למעלה" data-move-client-logo="-1" ${t===0?"disabled":""}>↑</button>
          <button type="button" title="העבר למטה" aria-label="העבר את ${m(e.name||"הלוגו")} למטה" data-move-client-logo="1" ${t===s.clientLogos.length-1?"disabled":""}>↓</button>
        </div>
        <div class="client-logo-thumb">
          ${e.src?`<img src="${m(e.src)}" alt="${m(e.name||"לוגו לקוח")}" />`:""}
        </div>
        <label class="client-logo-name">
          שם לתיאור
          <input data-client-logo-field="name" type="text" value="${m(e.name)}" />
        </label>
        <label class="client-logo-source">
          מקור תמונה
          <input data-client-logo-field="src" type="url" value="${m(e.src)}" />
        </label>
        <label class="client-logo-size">
          גודל %
          <input data-client-logo-field="size" type="number" min="60" max="180" step="5" value="${m(e.size)}" />
        </label>
        <label class="client-logo-file">
          העלאת קובץ
          <input data-client-logo-upload type="file" accept="image/*" />
        </label>
        <button type="button" class="danger client-logo-remove" data-remove-client-logo="${t}">מחיקה</button>
      </div>
    `}function wo(){s.clientLogos.push({name:"לקוח חדש",src:""}),An(),ze(),p()}async function xn(e){var r;const t=e.target.closest("[data-client-logo-index]");if(!t)return;const n=Number(t.dataset.clientLogoIndex),i=s.clientLogos[n];if(i){if(e.target.dataset.clientLogoField){const o=e.target.dataset.clientLogoField;o==="src"?i.src=In(e.target.value):o==="size"?i.size=$n(e.target.value):i[o]=e.target.value,An(),p();return}e.target.dataset.clientLogoUpload!==void 0&&((r=e.target.files)!=null&&r[0])&&(i.src=await To(e.target.files[0]),i.name.trim()||(i.name=e.target.files[0].name.replace(/\.[^.]+$/,"")),gt(),ze(),p())}}function Eo(e){const t=e.target.closest("[data-move-client-logo]");if(t){Lo(t.closest("[data-client-logo-index]"),Number(t.dataset.moveClientLogo));return}const n=e.target.closest("[data-remove-client-logo]");n&&(s.clientLogos.splice(Number(n.dataset.removeClientLogo),1),gt(),ze(),p())}function Lo(e,t){const n=Number(e==null?void 0:e.dataset.clientLogoIndex),i=n+t;if(!Number.isInteger(n)||i<0||i>=s.clientLogos.length)return;const[r]=s.clientLogos.splice(n,1);s.clientLogos.splice(i,0,r),gt(),ze(),p()}function To(e){return new Promise((t,n)=>{const i=new FileReader;i.onload=()=>t(String(i.result||"")),i.onerror=()=>n(i.error),i.readAsDataURL(e)})}async function Io(){if(d)try{const{data:e,error:t}=await d.from("client_logo_settings").select("logos").eq("id","default").maybeSingle();if(t)throw t;if(Array.isArray(e==null?void 0:e.logos)){const i=q(e.logos);return D(Xe,JSON.stringify(i)),i}const n=q(Ee);return await Gn(n),D(Xe,JSON.stringify(n)),n}catch(e){console.warn("Could not load client logos from Supabase",e)}try{const e=ke(Xe);if(e)return q(JSON.parse(e))}catch(e){console.warn("Could not parse client logo settings",e)}return q(Ee)}function Pn(){s.clientLogos=q(Re)}function gt(){Re=q(s.clientLogos),D(Xe,JSON.stringify(Re)),Gn(Re)}function An(){z||(window.clearTimeout(en),en=window.setTimeout(gt,350))}function Ut(){const t=wt(s).defaults||{},n=["companyProfileText","clientsText","backgroundText","solutionText","workProcessText","lmsServiceText","pricingFinePrintText","termsText","cancellationText"];Object.entries(t).forEach(([i,r])=>{n.includes(i)||(s[i]=r)}),n.forEach(i=>{typeof t[i]=="string"?s[i]=t[i]:s[i]=le[i]||h[i]||""})}function k(){Dt.innerHTML=s.pricingItems.map((e,t)=>`
          <div class="custom-item" data-index="${t}">
            <label>
              שם רכיב
              <input data-pricing-field="title" type="text" value="${m(e.title)}" />
            </label>
            <label>
              עלות
              <input data-pricing-field="price" type="number" step="1" value="${m(e.price)}" />
            </label>
            <button type="button" data-remove="${t}">מחיקה</button>
            <label class="item-notes">
              הערות
              <textarea data-pricing-field="notes" rows="2">${c(e.notes)}</textarea>
            </label>
            <label class="item-notes inline-checkbox">
              <input data-pricing-field="included" type="checkbox" ${e.included?"checked":""} />
              <span>כלול במחיר</span>
            </label>
          </div>
        `).join(""),Dt.querySelectorAll("[data-pricing-field]").forEach(e=>{e.addEventListener("input",kn),e.addEventListener("change",kn)}),Dt.querySelectorAll("[data-remove]").forEach(e=>{e.addEventListener("click",()=>{s.pricingItems.splice(Number(e.dataset.remove),1),s.pricingItemsEdited=!0,k(),p()})})}function kn(e){const t=e.target.closest(".custom-item"),n=s.pricingItems[Number(t.dataset.index)],i=e.target.dataset.pricingField;!n||!i||(i==="included"?n.included=e.target.checked:i==="price"?n.price=y(e.target.value,0):n[i]=e.target.value,s.pricingItemsEdited=!0,p())}function ie(){s.pricingItems=ii(s),s.pricingItemsEdited=!1}function Co(){s.discountPercent=s.includeLms&&s.courseCount>=4?5:0}async function $o(){const e=document.getElementById("createClientLink");e.disabled=!0,e.textContent="יוצר קישורים...",_n(),Un();try{const t=Bn(),n=await rr(t);let i="",r="";if(n)xe(n),i=`${ge()}#c=${encodeURIComponent(n)}`,r=`${ge()}#e=${encodeURIComponent(n)}`;else{xe("");const a=await vs(JSON.stringify(t));i=`${ge()}#cz=${a}`,r=`${ge()}#ez=${a}`}Me.value=i,Ot.value=r,G.hidden=!1,K.hidden=!0,ue.hidden=!0,pe.hidden=!0,Ie.hidden=!0;const o=await ft(i,Me);Mt(o?"הועתק!":"העתקת קישור")}finally{e.disabled=!1,e.textContent="קישור ללקוח / עריכה"}}function Dn(e){return`${ge()}#c=${encodeURIComponent(e)}`}function xo(e){return`${ge()}#e=${encodeURIComponent(e)}`}function Bn(){const e=O({...s,clientSignatureData:"",clientSignerName:"",clientSignerTitle:"",clientSignerCompany:"",clientSignatureDate:""});e.pricingItemsEdited||delete e.pricingItems;const t={};return Object.entries(e).forEach(([n,i])=>{Po(i,h[n])||(t[n]=i)}),t}function Po(e,t){return JSON.stringify(e??null)===JSON.stringify(t??null)}function ge(){return window.location.protocol==="file:"?window.location.href.split("#")[0]:`${window.location.origin}${window.location.pathname}?p=${pi}`}function On(){window.print()}async function Ao(){const e=await Je({title:"הדפסה / PDF",message:"בחרו האם לפתוח חלון הדפסה רגיל או ליצור PDF עם קישורים פעילים בתוכן העניינים.",confirmText:"יצירת PDF",confirmResult:"pdf",cancelText:"הדפסה",cancelResult:"print",showCancel:!0});if(e==="print"){On();return}e==="pdf"&&Nn()}async function Nn(){const e=document.getElementById("printQuote");e.disabled=!0,e.textContent="יוצר PDF...";try{await Rn(O(s))}catch(t){console.error("Could not create linked PDF",t),oe("לא ניתן ליצור PDF","יצירת הקובץ נכשלה. רעננו את העמוד ונסו שוב.")}finally{e.disabled=!1,e.textContent="הדפסה / PDF"}}async function Rn(e){var t;if(!window.html2canvas||!((t=window.jspdf)!=null&&t.jsPDF))throw new Error("PDF libraries are unavailable");s=O(e),p(),document.body.classList.add("pdf-export-mode");try{await Do();const n=Array.from(Ue.querySelectorAll(".quote-page"));if(!n.length)throw new Error("No quote pages were rendered");const i=new window.jspdf.jsPDF({orientation:"portrait",unit:"mm",format:"a4",compress:!0}),r=ko(n);if(n.length>1&&!r.length)throw new Error("No table-of-contents links were found");for(let o=0;o<n.length;o+=1){o>0&&i.addPage("a4","portrait");const a=await window.html2canvas(n[o],{backgroundColor:"#ffffff",scale:2,useCORS:!0,logging:!1,windowWidth:1280,windowHeight:900});i.addImage(a.toDataURL("image/jpeg",.94),"JPEG",0,0,210,297,void 0,"FAST")}r.forEach(o=>{i.setPage(o.sourcePage+1),i.link(o.x,o.y,o.width,o.height,{pageNumber:o.targetPage+1,top:0})}),i.save(Bo(e))}finally{document.body.classList.remove("pdf-export-mode")}}function ko(e){const t=new Map;e.forEach((i,r)=>{i.querySelectorAll("[id]").forEach(o=>t.set(o.id,r))});const n=[];return e.forEach((i,r)=>{const o=i.getBoundingClientRect(),a=210/o.width;i.querySelectorAll(".toc a[href]").forEach(u=>{const f=decodeURIComponent(new URL(u.href,window.location.href).hash.slice(1)),l=t.get(f);if(l===void 0)return;const g=u.getBoundingClientRect();n.push({sourcePage:r,targetPage:l,x:(g.left-o.left)*a,y:(g.top-o.top)*a,width:g.width*a,height:g.height*a})})}),n}async function Do(){var t;(t=document.fonts)!=null&&t.ready&&await document.fonts.ready;const e=Array.from(Ue.querySelectorAll("img"));await Promise.all(e.map(n=>n.complete?Promise.resolve():new Promise(i=>{n.addEventListener("load",i,{once:!0}),n.addEventListener("error",i,{once:!0})}))),await new Promise(n=>window.requestAnimationFrame(()=>window.requestAnimationFrame(n)))}function Bo(e){return`improve-it-${String(e.quoteNumber||"quote").trim()||"quote"}.pdf`}function Oo(){No("pdf")}function No(e){const t=new URLSearchParams(window.location.hash.replace(/^#/,""));if(!t.has(e))return;t.delete(e);const n=t.toString(),i=`${window.location.pathname}${window.location.search}${n?`#${n}`:""}`;window.history.replaceState(null,"",i)}async function Ro(){const e=await ft(Me.value,Me);Mt(e?"הועתק!":"לא הועתק אוטומטית")}async function _o(){const e=await ft(Ot.value,Ot);Uo(e?"הועתק!":"לא הועתק אוטומטית")}async function ft(e,t){var n;if(!e)return!1;if((n=navigator.clipboard)!=null&&n.writeText)try{return await navigator.clipboard.writeText(e),!0}catch{}if(t){t.focus(),t.select();try{return document.execCommand("copy")}catch{return!1}}return!1}function Mt(e){J.textContent=e,J.classList.add("is-confirmed"),window.clearTimeout(J.feedbackTimer),J.feedbackTimer=window.setTimeout(_n,1800)}function _n(){window.clearTimeout(J.feedbackTimer),J.textContent="העתקת קישור",J.classList.remove("is-confirmed")}function Uo(e){W.textContent=e,W.classList.add("is-confirmed"),window.clearTimeout(W.feedbackTimer),W.feedbackTimer=window.setTimeout(Un,1800)}function Un(){window.clearTimeout(W.feedbackTimer),W.textContent="העתקת קישור",W.classList.remove("is-confirmed")}async function Mo(){const e=document.getElementById("sendSignedQuote");if(!s.clientSignerName.trim()){await oe("חסרים פרטי חתימה","יש למלא שם חותם לפני שליחת ההצעה החתומה.");return}if(!s.clientSignatureData){await oe("חסרה חתימה","יש לחתום דיגיטלית לפני שליחת ההצעה החתומה.");return}jt(),e.disabled=!0,e.textContent="שולח חתימה...";try{const t=fe(),n={id:Fo(),sharedQuoteId:Z||at(),signedAt:new Date().toISOString(),quote:O(s)};St([n,...t]);const i=await Zo(n),r=await tr(n),o=await er(n);if(!i&&!r&&!o)throw new Error("Signed quote was not saved to a shared archive");p(),await qo(n.quote)}catch(t){console.error("Could not send signed quote",t),await oe("לא ניתן לשלוח חתימה","לא הצלחנו לשמור את ההצעה החתומה. נסו שוב בעוד רגע.")}finally{e.disabled=!1,e.textContent="מאשר/ת את ההצעה ושולח/ת חתימה"}}function Fo(){const e=Z||at();return e?`${e}-signed-${Date.now()}`:`${s.quoteNumber||"quote"}-${Date.now()}`}async function qo(e){await Je({title:"ההצעה נשלחה",message:"ההצעה החתומה נשלחה ונשמרה במאגר ההצעות החתומות. ניתן לסגור את החלון.",confirmText:"ההצעה נשלחה - סגור את החלון",showCancel:!1,extraText:"הורדת ההצעה החתומה",extraResult:"download"})==="download"?await Qo(e):jo()}function jo(){window.close()}async function Qo(e){s=O(e||s),D(V,JSON.stringify(s)),$(),ee(),k(),De(),p(),await Rn(s)}async function Vo(){await Wo(),await Ko(),await Xo(),Ft(),K.hidden=!1,G.hidden=!0,ue.hidden=!0,pe.hidden=!0,Ie.hidden=!0}function Ft(){const e=fe(),t=ht(rn.value),n=e.map((i,r)=>({record:i,index:r})).filter(({record:i})=>!t||Ho(i,t));on.innerHTML=n.length?n.map(({record:i,index:r})=>{const o=i.quote||{};return`
              <div class="signed-archive-row">
                <div class="signed-archive-details">
                  <strong>${c(o.clientCompany||"ללא חברה")} - ${c(o.quoteNumber||"ללא מספר")}</strong>
                  <div class="signed-archive-meta">
                    <span>חותם: ${c(o.clientSignerName||"לא צוין")}</span>
                    <span>נחתם: ${c(Se(i.signedAt))}</span>
                  </div>
                </div>
                <div class="signed-archive-actions">
                  <button type="button" class="compact" data-open-signed-index="${r}">פתיחה</button>
                  <button type="button" class="compact" data-download-signed-index="${r}">הורדה</button>
                  <button type="button" class="compact danger" data-delete-signed-index="${r}">מחיקה</button>
                </div>
              </div>
            `}).join(""):`<p class="empty-note">${e.length?"לא נמצאו הצעות חתומות שתואמות לחיפוש.":"עדיין אין הצעות חתומות במאגר המקומי."}</p>`}function Ho(e,t){const n=e.quote||{};return ht([n.clientCompany,n.quoteNumber,n.subject,n.clientSignerName,n.clientSignerTitle,n.clientSignerCompany,Se(e.signedAt)].join(" ")).includes(t)}function ht(e){return String(e||"").toLocaleLowerCase("he").replace(/\s+/g," ").trim()}async function zo(e){const t=e.target.closest("[data-delete-signed-index]");if(t){await Go(Number(t.dataset.deleteSignedIndex));return}const n=e.target.closest("[data-download-signed-index]");if(n){Mn(Number(n.dataset.downloadSignedIndex))&&window.setTimeout(Nn,250);return}const i=e.target.closest("[data-open-signed-index]");i&&Mn(Number(i.dataset.openSignedIndex))}function Mn(e){const n=fe()[e];return n!=null&&n.quote?(s=O(n.quote),D(V,JSON.stringify(s)),$(),ee(),k(),De(),p(),K.hidden=!0,G.hidden=!0,Ue.scrollIntoView({block:"start"}),!0):!1}async function Go(e){const t=fe(),n=t[e];if(!n)return;const i=n.quote||{},r=`${i.clientCompany||"ללא חברה"} - ${i.quoteNumber||"ללא מספר"}`;await Ge("מחיקת הצעה חתומה",`למחוק את ההצעה החתומה "${r}" מהמאגר?`,"מחיקה")&&(t.splice(e,1),D(ye,JSON.stringify(t)),await nr(n.id),await or(n),await ir(n.id),Ft())}function oe(e,t){return Je({title:e,message:t,confirmText:"אישור",showCancel:!1})}function Ge(e,t,n="אישור"){return Je({title:e,message:t,confirmText:n,showCancel:!0})}function Je({title:e,message:t,confirmText:n,showCancel:i,cancelText:r="ביטול",extraText:o="",confirmResult:a=!0,cancelResult:u=!1,extraResult:f="extra"}){return Ei.textContent=e,Li.innerHTML=`<p>${c(t)}</p>`,je.textContent=n,rt.textContent=r,rt.hidden=!i,Qe.textContent=o,Qe.hidden=!o,Qe.classList.remove("primary"),je.classList.add("primary"),qe.hidden=!1,je.focus(),new Promise(l=>{const g=ce=>{qe.hidden=!0,je.removeEventListener("click",b),rt.removeEventListener("click",N),Qe.removeEventListener("click",R),un.removeEventListener("click",I),qe.removeEventListener("click",It),document.removeEventListener("keydown",Ct),l(ce)},b=()=>g(a),N=()=>g(u),R=()=>g(f),I=()=>g(null),It=ce=>{ce.target===qe&&i&&g(null)},Ct=ce=>{ce.key==="Escape"&&g(null)};je.addEventListener("click",b),rt.addEventListener("click",N),Qe.addEventListener("click",R),un.addEventListener("click",I),qe.addEventListener("click",It),document.addEventListener("keydown",Ct)})}function fe(){try{const e=ke(ye),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch(e){return console.warn("Could not parse signed archive",e),[]}}function St(e){const t=yt(e);return D(ye,JSON.stringify(t)),t}function yt(...e){const t=new Map;return e.flat().forEach(n=>{!(n!=null&&n.id)||!n.quote||t.set(n.id,n)}),Array.from(t.values()).sort((n,i)=>new Date(i.signedAt||0)-new Date(n.signedAt||0))}function Jo(){var t;const e=window.IMPROVE_IT_SUPABASE||{};!e.url||!e.anonKey||!((t=window.supabase)!=null&&t.createClient)||(d=window.supabase.createClient(e.url,e.anonKey))}async function Wo(){if(d)try{const{data:e,error:t}=await d.from("signed_quotes").select("id,signed_at,quote").order("signed_at",{ascending:!1});if(t)throw t;const n=(e||[]).map(i=>({id:i.id,signedAt:i.signed_at,quote:i.quote}));St(yt(n,fe()))}catch(e){console.warn("Could not load signed archive from Supabase",e)}}async function Ko(){if(d)try{const{data:e,error:t}=await d.from("shared_quotes").select("id,created_at,quote").order("created_at",{ascending:!1});if(t)throw t;const n=(e||[]).map(Yo).filter(Boolean);St(yt(n,fe()))}catch(e){console.warn("Could not load signed quotes from shared links",e)}}function Yo(e){const t=e==null?void 0:e.quote;if(!t||typeof t!="object")return null;const n=t.signedArchiveRecord||t.signedRecord;return n!=null&&n.quote?{id:n.id||`${e.id}-signed`,sharedQuoteId:n.sharedQuoteId||e.id,signedAt:n.signedAt||n.signed_at||e.created_at||"",quote:n.quote}:t.clientSignatureData?{id:`${e.id}-signed`,sharedQuoteId:e.id,signedAt:t.clientSignatureDate||e.created_at||"",quote:t}:null}async function Xo(){if(re())try{const e=await fetch(xt);if(!e.ok)throw new Error(`Local signed archive failed: ${e.status}`);const t=await e.json();St(yt(Array.isArray(t)?t:[],fe()))}catch(e){console.warn("Could not load signed archive from local server",e)}}async function Zo(e){if(!d)return!1;try{const{error:t}=await d.from("signed_quotes").upsert({id:e.id,signed_at:e.signedAt,quote:e.quote});if(t)throw t;return!0}catch(t){return console.warn("Could not save signed quote to Supabase",t),!1}}async function er(e){if(!re())return!1;try{const t=await fetch(xt,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error(`Local signed archive save failed: ${t.status}`);return!0}catch(t){return console.warn("Could not save signed quote to local server",t),!1}}async function tr(e){const t=e.sharedQuoteId||Z||at();if(!t)return!1;const n=await qt(t);if(!n)return!1;const i=O(e.quote),r={...n,...i,signedArchiveRecord:{id:e.id,sharedQuoteId:t,signedAt:e.signedAt,quote:i}},o=await Fn(t,r),a=await vt(t,r);return o||a}async function Fn(e,t){var n;if(!d||!e)return!1;try{const{data:i}=await d.from("shared_quotes").select("quote").eq("id",e).maybeSingle(),r={...t};(n=i==null?void 0:i.quote)!=null&&n.openEvents&&(r.openEvents=i.quote.openEvents);const{error:o}=await d.from("shared_quotes").update({quote:r}).eq("id",e);if(o)throw o;return!0}catch(i){return console.warn("Could not update shared quote with signed record",i),!1}}async function nr(e){if(!(!d||!e))try{const{error:t}=await d.from("signed_quotes").delete().eq("id",e);if(t)throw t}catch(t){console.warn("Could not delete signed quote from Supabase",t)}}async function ir(e){if(e&&re())try{const t=await fetch(`${xt}?id=${encodeURIComponent(e)}`,{method:"DELETE"});if(!t.ok)throw new Error(`Local signed archive delete failed: ${t.status}`)}catch(t){console.warn("Could not delete signed quote from local server",t)}}async function or(e){const t=e==null?void 0:e.sharedQuoteId;if(!t)return!1;const n=await qt(t);if(!(n!=null&&n.signedArchiveRecord)&&!(n!=null&&n.signedRecord))return!1;const i={...n};delete i.signedArchiveRecord,delete i.signedRecord,delete i.clientSignatureData,delete i.clientSignatureDate,delete i.clientSignerName,delete i.clientSignerTitle,delete i.clientSignerCompany;const r=await Fn(t,i),o=await vt(t,i);return r||o}async function rr(e){const t=Ss("q"),n=jn(t,e),i=await vt(t,e);Qn(n);const r=await qn(t,e);return i||r?t:""}async function sr(e,t){if(!e)return!1;const n=jn(e,t),i=j().find(a=>a.id===e);i&&(n.createdAt=i.createdAt||n.createdAt,n.openEvents=i.openEvents||[]),Qn(n);const r=await vt(e,t,n.createdAt),o=await qn(e,t);return r||o}async function qt(e){return await ar(e)||await cr(e)}async function qn(e,t){var n;if(!d||!e)return!1;try{const{data:i}=await d.from("shared_quotes").select("quote").eq("id",e).maybeSingle(),r={...t};(n=i==null?void 0:i.quote)!=null&&n.openEvents&&(r.openEvents=i.quote.openEvents);const{error:o}=await d.from("shared_quotes").upsert({id:e,quote:r,created_at:new Date().toISOString()});if(o)throw o;return!0}catch(i){return console.warn("Could not save shared quote to Supabase",i),!1}}async function ar(e){if(!d||!e)return null;try{const{data:t,error:n}=await d.from("shared_quotes").select("quote").eq("id",e).maybeSingle();if(n)throw n;return(t==null?void 0:t.quote)||null}catch(t){return console.warn("Could not load shared quote from Supabase",t),null}}async function vt(e,t,n=new Date().toISOString()){if(!re())return!1;try{const i=await fetch(Oe,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,quote:t,createdAt:n})});if(!i.ok)throw new Error(`Local shared quote save failed: ${i.status}`);return!0}catch(i){return console.warn("Could not save shared quote to local server",i),!1}}async function cr(e){if(!re())return null;try{const t=await fetch(`${Oe}?id=${encodeURIComponent(e)}`);if(!t.ok)throw new Error(`Local shared quote load failed: ${t.status}`);const n=await t.json();return(n==null?void 0:n.quote)||null}catch(t){return console.warn("Could not load shared quote from local server",t),null}}async function lr(e){if(!d||!e)return!1;try{const{error:t}=await d.from("shared_quotes").delete().eq("id",e);if(t)throw t;return!0}catch(t){return console.warn("Could not delete shared quote from Supabase",t),!1}}async function ur(e){if(!re()||!e)return!1;try{const t=await fetch(`${Oe}?id=${encodeURIComponent(e)}`,{method:"DELETE"});if(!t.ok)throw new Error(`Local shared quote delete failed: ${t.status}`);return!0}catch(t){return console.warn("Could not delete shared quote from local server",t),!1}}async function dr(e){if(!e)return;const t=new Date().toISOString(),n=$r(),i=Ye();Ir(e,t,n,i),await pr(e,t,n,i),await mr(e,t,n,i)}async function pr(e,t,n="",i=""){if(!re())return!1;try{const r=await fetch(`${Oe}?action=open`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,openedAt:t,device:n,viewerId:i})});if(!r.ok)throw new Error(`Local shared quote tracking failed: ${r.status}`);return!0}catch(r){return console.warn("Could not record shared quote open on local server",r),!1}}async function mr(e,t,n="",i=""){if(!d||!e)return!1;try{const{data:r,error:o}=await d.from("shared_quotes").select("quote").eq("id",e).maybeSingle();if(o)throw o;if(!r)return!1;const a=r.quote||{};a.openEvents||(a.openEvents=[]),a.openEvents.push({openedAt:t,device:n,viewerId:i});const{error:u}=await d.from("shared_quotes").update({quote:a}).eq("id",e);if(u)throw u;return!0}catch(r){return console.warn("Could not record shared quote open on Supabase",r),!1}}async function gr(){await Lr(),await Tr(),bt(),ue.hidden=!1,G.hidden=!0,K.hidden=!0,pe.hidden=!0,Ie.hidden=!0}function bt(){const e=j().filter(Er),t=ht(an.value),n=e.filter(i=>!t||wr(i,t));sn.innerHTML=n.length?n.map(fr).join(""):`<p class="empty-note">${e.length?"לא נמצאו הצעות שתואמות לחיפוש.":"עדיין אין קישורים שנשלחו למעקב."}</p>`}function fr(e){var o;const t=e.quote||{};let n=Array.isArray(e.openEvents)?e.openEvents:[];if(de&&de.checked){const a=Ye();n=n.filter(u=>u.viewerId!==a)}const i=((o=n[n.length-1])==null?void 0:o.openedAt)||"",r=n.length?`<ol class="quote-tracking-times">${n.map(a=>`<li>${c(Se(a.openedAt))}${hr(a)}</li>`).join("")}</ol>`:'<p class="empty-note">עדיין לא נרשמו פתיחות.</p>';return`
      <div class="signed-archive-row quote-tracking-row">
        <div class="signed-archive-details">
          <strong>${c(t.clientCompany||"ללא חברה")} - ${c(t.quoteNumber||"ללא מספר")}</strong>
          <div class="signed-archive-meta">
            <span>נשלח: ${c(Se(e.createdAt))}</span>
            <span>פתיחות: ${n.length}</span>
            <span>פתיחה אחרונה: ${c(i?Se(i):"טרם נפתח")}</span>
          </div>
          <div class="quote-tracking-subject">${c(t.subject||"")}</div>
          ${r}
        </div>
        <div class="signed-archive-actions">
          <button type="button" class="compact" data-copy-tracking-id="${m(e.id)}">העתקת קישור</button>
          <button type="button" class="compact" data-edit-tracking-id="${m(e.id)}">עריכה</button>
          <button type="button" class="compact danger" data-delete-tracking-id="${m(e.id)}">מחיקה</button>
        </div>
      </div>
    `}function hr(e){const t=[];e.device&&t.push(e.device);const n=Ye();return e.viewerId&&e.viewerId===n&&t.push("המכשיר הנוכחי"),t.length?` <span class="quote-tracking-meta-tag">(${t.join(", ")})</span>`:""}async function Sr(e){const t=e.target.closest("[data-copy-tracking-id]");if(t){await yr(t.dataset.copyTrackingId,t);return}const n=e.target.closest("[data-edit-tracking-id]");if(n){vr(n.dataset.editTrackingId);return}const i=e.target.closest("[data-delete-tracking-id]");i&&await br(i.dataset.deleteTrackingId)}async function yr(e,t){const n=await Je({title:"העתקת קישור להצעה",message:"איזה קישור ברצונך להעתיק?",confirmText:"קישור לחתימת לקוח",confirmResult:"client",extraText:"קישור לעריכת הצעה",extraResult:"edit",showCancel:!0,cancelText:"ביטול",cancelResult:null});if(!n)return;let i="";n==="client"?i=Dn(e):n==="edit"&&(i=xo(e));const r=await ft(i),o=t.textContent;t.textContent=r?"הועתק!":"לא הועתק",window.setTimeout(()=>{t.textContent=o},1600)}function vr(e){const t=j().find(n=>n.id===e);t!=null&&t.quote&&(xe(e),s=O(t.quote),D(V,JSON.stringify(s)),$(),ee(),k(),De(),p(),Me.value=Dn(e),G.hidden=!1,ue.hidden=!0,K.hidden=!0,pe.hidden=!0,Mt("עורכים קישור קיים"))}async function br(e){var r,o;const t=j().find(a=>a.id===e),n=((r=t==null?void 0:t.quote)==null?void 0:r.clientCompany)||((o=t==null?void 0:t.quote)==null?void 0:o.quoteNumber)||"הקישור";await Ge("מחיקת קישור מעקב",`למחוק את "${n}" ולבטל את הקישור ללקוח?`,"מחיקה")&&(We(j().filter(a=>a.id!==e)),Z===e&&xe(""),await lr(e),await ur(e),bt())}function wr(e,t){const n=e.quote||{};let i=e.openEvents||[];if(de&&de.checked){const r=Ye();i=i.filter(o=>o.viewerId!==r)}return ht([n.clientCompany,n.quoteNumber,n.subject,Se(e.createdAt),...i.map(r=>Se(r.openedAt))].join(" ")).includes(t)}function Er(e){const t=e.quote||{};let n=e.openEvents||[];if(de&&de.checked){const i=Ye();n=n.filter(r=>r.viewerId!==i)}return!!(e.createdAt||n!=null&&n.length||t.clientCompany||t.quoteNumber||t.subject)}async function Lr(){if(re())try{const e=await fetch(Oe);if(!e.ok)throw new Error(`Local quote tracking failed: ${e.status}`);const t=await e.json();Array.isArray(t)&&We(Ke(t,j()))}catch(e){console.warn("Could not load quote tracking from local server",e)}}async function Tr(){if(d)try{const{data:e,error:t}=await d.from("shared_quotes").select("id, quote, created_at");if(t)throw t;if(Array.isArray(e)){const n=e.map(i=>{var r;return{id:i.id,createdAt:i.created_at,quote:i.quote,openEvents:((r=i.quote)==null?void 0:r.openEvents)||[]}});We(Ke(n,j()))}}catch(e){console.warn("Could not sync quote tracking from Supabase",e)}}function jn(e,t){return{id:e,createdAt:new Date().toISOString(),quote:O(t),openEvents:[]}}function j(){try{const e=ke(L),t=e?JSON.parse(e):[];return Array.isArray(t)?Ke(t):[]}catch(e){return console.warn("Could not parse quote tracking",e),[]}}function We(e){D(L,JSON.stringify(Ke(e)))}function Qn(e){We(Ke(j(),[e]))}function Ir(e,t,n="",i=""){const r=j(),o=r.findIndex(u=>u.id===e);if(o<0)return;const a=Vn(r[o]);a.openEvents.push({openedAt:t,device:n,viewerId:i}),r[o]=a,We(r)}function Ke(...e){const t=new Map;return e.flat().forEach(n=>{const i=Vn(n);if(!i.id)return;const r=t.get(i.id);t.set(i.id,r?Cr(r,i):i)}),Array.from(t.values()).sort((n,i)=>String(i.createdAt||"").localeCompare(String(n.createdAt||"")))}function Cr(e,t){const n=Hn(e.openEvents,t.openEvents);return{...e,...t,quote:{...e.quote||{},...t.quote||{}},createdAt:e.createdAt||t.createdAt,openEvents:n}}function Vn(e){const t=e!=null&&e.quote&&typeof e.quote=="object"?e.quote:e||{},n=Array.isArray(e==null?void 0:e.openEvents)?e.openEvents:Array.isArray(t==null?void 0:t.openEvents)?t.openEvents:Array.isArray(e==null?void 0:e.openedAt)?e.openedAt.map(i=>({openedAt:i})):[];return{id:(e==null?void 0:e.id)||"",createdAt:(e==null?void 0:e.createdAt)||(e==null?void 0:e.created_at)||"",quote:t,openEvents:Hn(n)}}function Hn(...e){const t=new Set;return e.flat().map(n=>typeof n=="string"?{openedAt:n,device:"",viewerId:""}:{openedAt:(n==null?void 0:n.openedAt)||"",device:(n==null?void 0:n.device)||"",viewerId:(n==null?void 0:n.viewerId)||""}).filter(n=>!n.openedAt||t.has(n.openedAt)?!1:(t.add(n.openedAt),!0)).sort((n,i)=>String(n.openedAt).localeCompare(String(i.openedAt)))}function Ye(){const e="improve-it-quote-viewer-id";try{let t=window.localStorage.getItem(e);return t||(t=`v-${Math.random().toString(36).slice(2)}-${Date.now()}`,window.localStorage.setItem(e,t)),t}catch{return"temp-viewer"}}function $r(){const e=navigator.userAgent;return/like Mac OS X/.test(e)?/iPhone/.test(e)?"iPhone":/iPad/.test(e)?"iPad":"Mac / iOS":/Android/.test(e)?/Mobile/.test(e)?"Android (נייד)":"Android (טאבלט)":/Macintosh/.test(e)?"Mac":/Windows/.test(e)?"מחשב Windows":/Linux/.test(e)?"מחשב Linux":/Mobi|Android|iPhone|iPad/i.test(e)?"מכשיר נייד":"מחשב"}function re(){const e=window.location.hostname;return["localhost","127.0.0.1",""].includes(e)||e.startsWith("192.168.")||e.startsWith("10.")||/^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(e)||e.endsWith(".local")}function xr(){return window.location.protocol==="file:"||window.location.hostname==="improve-itil.github.io"?"http://localhost:4173":window.location.origin}async function Pr(e){if(d)try{const{error:t}=await d.from("template_settings").upsert({id:"default",settings:e,updated_at:new Date().toISOString()});if(t)throw t}catch(t){console.warn("Could not save template settings to Supabase",t)}}async function zn(e){if(d)try{const{error:t}=await d.from("salesperson_settings").upsert({id:"default",settings:F(e),updated_at:new Date().toISOString()});if(t)throw t}catch(t){console.warn("Could not save salesperson settings to Supabase",t)}}async function Gn(e){if(d)try{const{error:t}=await d.from("client_logo_settings").upsert({id:"default",logos:q(e),updated_at:new Date().toISOString()});if(t)throw t}catch(t){console.warn("Could not save client logos to Supabase",t)}}async function Ar(){if(d)try{const{error:e}=await d.from("template_settings").delete().eq("id","default");if(e)throw e}catch(e){console.warn("Could not reset template settings in Supabase",e)}}function ke(e){try{return window.localStorage.getItem(e)}catch{return Pt.get(e)||null}}function D(e,t){try{window.localStorage.setItem(e,t)}catch{Pt.set(e,t)}}function Jn(e){try{window.localStorage.removeItem(e)}catch{Pt.delete(e)}}function kr(){v&&(T=v.getContext("2d"),Wn(),window.addEventListener("resize",Dr),v.addEventListener("pointerdown",Br),v.addEventListener("pointermove",Or),v.addEventListener("pointerup",Kn),v.addEventListener("pointercancel",Kn))}function Dr(){window.clearTimeout(dn),dn=window.setTimeout(Wn,120)}function Wn(){if(!v||!T)return;const e=v.getBoundingClientRect();if(!e.width||!e.height)return;const t=window.devicePixelRatio||1;v.width=Math.round(e.width*t),v.height=Math.round(e.height*t),T.setTransform(t,0,0,t,0,0),T.lineWidth=2.4,T.lineCap="round",T.lineJoin="round",T.strokeStyle="#111820",De()}function De(){if(!v||!T)return;const e=v.getBoundingClientRect();if(T.clearRect(0,0,e.width,e.height),!s.clientSignatureData)return;const t=new Image;t.onload=()=>{T.clearRect(0,0,e.width,e.height),T.drawImage(t,0,0,e.width,e.height)},t.src=s.clientSignatureData}function Br(e){T&&(e.preventDefault(),v.setPointerCapture&&v.setPointerCapture(e.pointerId),st=!0,Y=Yn(e),T.beginPath(),T.moveTo(Y.x,Y.y))}function Or(e){if(!st||!Y)return;e.preventDefault();const t=Yn(e);T.beginPath(),T.moveTo(Y.x,Y.y),T.lineTo(t.x,t.y),T.stroke(),Y=t}function Kn(e){var t;st&&(e.preventDefault(),v.releasePointerCapture&&((t=v.hasPointerCapture)!=null&&t.call(v,e.pointerId))&&v.releasePointerCapture(e.pointerId),st=!1,Y=null,s.clientSignatureData=v.toDataURL("image/png"),jt(),p())}function jt(){s.clientSignatureDate=Gt();const e=A.elements.clientSignatureDate;e&&(e.value=s.clientSignatureDate)}function Yn(e){const t=v.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}function Nr(){s.clientSignatureData="",De(),p()}function Rr(){const e=document.getElementById("clientSignatureSection");e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function _r(){const e=document.getElementById("jumpToSignature"),t=document.querySelector(".editor-panel");if(!e||!t)return;const n=r=>{e.classList.toggle("is-hidden",r),e.setAttribute("aria-hidden",r?"true":"false"),e.tabIndex=r?-1:0};if(!("IntersectionObserver"in window)){n(!1);return}new IntersectionObserver(([r])=>{n(r.isIntersecting)},{threshold:.01}).observe(t)}function p(){Ue.innerHTML=Ur(s),window.requestAnimationFrame(Hr)}function Ur(e){const t=O(e,{syncDefaultTexts:!1}),n=Kr(t),i=[Mr(t,n)];t.showCompanyProfile&&i.push(Fr(t,n)),t.showClients&&i.push(qr(t)),(t.showBackground||t.showSolution)&&i.push(jr(t,n));const r=t.includeLms&&(t.lmsSectionLocation!=="samePage"||!t.showWorkProcess);return r&&t.lmsSectionLocation==="newPageBefore"&&i.push(Xn(t,n)),t.showWorkProcess&&i.push(Qr(t,n)),r&&t.lmsSectionLocation!=="newPageBefore"&&i.push(Xn(t,n)),t.showPricing&&i.push(Vr(t,n)),(t.showTerms||t.showCancellation)&&i.push(zr(t,n)),i.join("")}function Mr(e,t){const n=Yr(e),i=(e.contactName||"").split(/\s+/)[0]||e.contactName||"שלום",r=e.contactTitle?`<br />${c(e.contactTitle)}`:"",o=t.map(a=>`
          <tr>
            <td>${a.number}</td>
            <td><a href="${m(ni(a.key))}">${c(a.title)}</a></td>
          </tr>
        `).join("");return se(`
      <p class="date-line">${ps(e.quoteDate)}</p>
      <p class="recipient">לכבוד<br />${c(e.contactName)}${r}<br />${c(e.clientCompany)}</p>
      <p>${c(i)} שלום רב,</p>
      <div class="subject">${c(e.subject)}</div>
      <p>תודה על פנייתך לקבלת הצעת מחיר ל${c(n)} עבור ${c(e.clientCompany)}, להלן הצעתנו:</p>
      <p>המסמך שלהלן כולל את:</p>
      <table class="toc"><tbody>${o}</tbody></table>
      <div class="signature-block">
        <p>בברכה,</p>
        <strong>${c(e.signatoryName)}</strong>
        <span>${c(e.signatoryTitle)}</span>
      </div>
    `,"cover-page")}function Fr(e,t){return se(`
      <section class="content-section">
        <h1 class="page-title">${Q("profile",ae(t,"profile"))}</h1>
        ${zt(e.companyProfileText)}
        <div class="accent-band">
          <strong>Improve-IT משלבת מתודולוגיה וטכנולוגיה לשיפור ביצועים בארגונים.</strong>
          <span>אנו מלווים ארגונים ואת מחלקות ההדרכה ביצירת הקשר שבין תשתיות הפיתוח הארגוני וההדרכה לבין התוצאות העסקיות, בכלים ובפרקטיקות שעובדות בארגונים.</span>
        </div>
        <img class="method-diagram" src="assets/brand/method-diagram.png" alt="" />
      </section>
    `)}function qr(e){const t=q(e.clientLogos),n=t.length===1&&t[0].src===Zt?`<img class="clients-image" src="${m(t[0].src)}" alt="${m(t[0].name||"לקוחות Improve-IT")}" />`:`<div class="clients-logo-grid">
            ${t.map(i=>`
                  <figure class="client-logo-card" style="--logo-scale: ${m(i.size/100)}">
                    <img src="${m(i.src)}" alt="${m(i.name||"לוגו לקוח")}" />
                    ${i.name?`<figcaption>${c(i.name)}</figcaption>`:""}
                  </figure>
                `).join("")}
          </div>`;return se(`
      <section class="content-section">
        <h1 class="page-title">${Q("clients",e.clientsText||"מבין לקוחותינו")}</h1>
        ${n}
      </section>
    `)}function jr(e,t){const n=[];return e.showBackground&&n.push(`
        <section class="content-section">
          <h1 class="page-title">${Q("background",ae(t,"background"))}</h1>
          ${zt(e.backgroundText)}
        </section>
      `),e.showSolution&&n.push(`
        <section class="content-section">
          <h1 class="page-title">${Q("solution",ae(t,"solution"))}</h1>
          ${zt(e.solutionText)}
        </section>
      `),se(n.join(""))}function Qr(e,t){const n=Be(e.workProcessText);(e.includeHebrewVoiceover||e.includeEnglishVoiceover)&&(n.push("קריינות: לאחר אישור הלומדה הסופית תצא הלומדה לקריינות ולהטמעת הקריינות."),n.push("תיקוף הקריינות: תיקוף ואישור הקריינות.")),e.includeTranslation&&(n.push("תרגום: לאחר אישור הלומדה הסופית תצא הלומדה לתרגום ולהטמעת התרגום."),n.push("תיקוף התרגום: תיקוף ואישור התרגום."));const r=e.includeLms&&e.lmsSectionLocation==="samePage"?`
        <section class="content-section">
          <h2>${c(e.lmsServiceTitle||"שירות LMS")}</h2>
          <ul class="bullet-list">
            ${Be(e.lmsServiceText).map(o=>`<li>${c(o)}</li>`).join("")}
          </ul>
        </section>
      `:"";return se(`
      <section class="content-section">
        <h1 class="page-title">${Q("work",ae(t,"work"))}</h1>
        <ul class="bullet-list">
          ${n.map(o=>`<li>${c(o)}</li>`).join("")}
        </ul>
      </section>
      ${r}
    `)}function Xn(e,t){return se(`
      <section class="content-section">
        <h1 class="page-title">${Q("lms",ae(t,"lms"))}</h1>
        <ul class="bullet-list">
          ${Be(e.lmsServiceText).map(n=>`<li>${c(n)}</li>`).join("")}
        </ul>
      </section>
    `)}function Vr(e,t){const n=Xr(e),i=e.pricingPlanLabel?`<tr class="pricing-plan-row"><td colspan="3">${c(e.pricingPlanLabel)}</td></tr>`:"",r=Zr(e,n.rows),o=n.discount?`
        <tr class="discount-row">
          <td>${c(e.discountTitle||"הנחה")}</td>
          <td class="price">${c(es(e,n))}</td>
          <td class="notes">${Tt(ls(e))}</td>
        </tr>
      `:"",a=e.showTotals?`
        <table class="total-table">
          <tbody>
            <tr>
              <td>סה"כ לפני הנחה</td>
              <td>${w(n.subtotal)}</td>
            </tr>
            ${n.discount?`<tr><td>הנחה</td><td>-${w(n.discount)}</td></tr>`:""}
            <tr>
              <td>סה"כ לתשלום</td>
              <td>${w(n.total)}</td>
            </tr>
          </tbody>
        </table>
      `:"";return se(`
      <section class="content-section">
        <h1 class="page-title">${Q("pricing",ae(t,"pricing"))}</h1>
        <div class="pricing-intro">${Tt(cs(e))}</div>
        <table class="pricing-table">
          <thead>
            <tr>
              <th>הרכיב</th>
              <th>עלות</th>
              <th>הערות</th>
            </tr>
          </thead>
          <tbody>
            ${i}
            ${r}
            ${o}
          </tbody>
        </table>
        ${a}
        <ul class="fine-print">
          ${ds(e).map(u=>`<li>${c(u)}</li>`).join("")}
        </ul>
      </section>
    `,"pricing-page")}function Hr(){Ue.querySelectorAll(".quote-page").forEach(e=>{const t=e.querySelector(".quote-content"),n=e.querySelector(".quote-footer");!t||!n||(e.classList.remove("quote-page--compact","quote-page--dense"),Zn(t,n)&&e.classList.add("quote-page--compact"),Zn(t,n)&&e.classList.add("quote-page--dense"))})}function Zn(e,t){const n=e.getBoundingClientRect(),i=t.getBoundingClientRect();return n.bottom>i.top-16}function zr(e,t){const n=ae(t,"terms")||"תנאים כלליים",i=ae(t,"cancellation")||"נהלי ביטולים ועיכובים",r=e.showTerms?`
        <section class="content-section">
          <h1 class="page-title">${Q("terms",n)}</h1>
          <p><strong>תנאי תשלום ${e.includeLms?"לשירות לומדה בענן":"לרכישת לומדה"}:</strong> שוטף + 30.</p>
          ${e.includeLms?"<p>מסלול שנתי: תשלום מראש לשנה עם העברת הזמנת עבודה.</p>":""}
          <p>הצעת המחיר תהיה בתוקף למשך ${c(e.validDays)} ימים מהוצאתה.</p>
          <ol class="terms-list">
            ${Be(e.termsText).map(a=>`<li>${c(a)}</li>`).join("")}
          </ol>
        </section>
      `:"",o=e.showCancellation?`
        <section class="content-section">
          <h2>${Q("cancellation",i)}</h2>
          <ol class="terms-list">
            ${Be(e.cancellationText).map(a=>`<li>${c(a)}</li>`).join("")}
          </ol>
        </section>
      `:"";return se(`
      ${r}
      ${o}
      <div class="approval-line">אני מאשר/ת את הסכמתי לתנאים המצוינים במסמך זה</div>
      ${Gr(e)}
    `)}function Gr(e){const t=e.clientSignatureData?`<img src="${m(e.clientSignatureData)}" alt="חתימת לקוח" />`:"<strong>&nbsp;</strong>",n=e.clientSignerTitle?`<span>${c(e.clientSignerTitle)}</span>`:"",i=e.clientSignerCompany?`<span>${c(e.clientSignerCompany)}</span>`:"",r=e.clientSignatureDate?ms(e.clientSignatureDate):"";return`
      <div class="client-approval">
        <div class="approval-field approval-field--signer">
          <span>שם</span>
          <div class="approval-signer-details">
            <strong>${c(e.clientSignerName)||"&nbsp;"}</strong>
            ${n}
            ${i}
          </div>
        </div>
        <div class="approval-field signature">
          <span>חתימה</span>
          ${t}
        </div>
        <div class="approval-field">
          <span>תאריך</span>
          <strong>${c(r)||"&nbsp;"}</strong>
        </div>
      </div>
      <p class="approval-note">החתימה הדיגיטלית נשמרת כחלק מנתוני ההצעה ותופיע בקובץ ה-PDF.</p>
    `}function se(e,t=""){return`<article class="${["quote-page",t].filter(Boolean).join(" ")}">${Jr()}<main class="quote-content">${e}</main>${Wr()}</article>`}function Jr(){return`
      <header class="quote-header">
        <img src="assets/brand/improve-it-logo.png" alt="Improve-IT" />
        <div class="header-ribbon">פיתוח הדרכה | למידה דיגיטלית | תהליכי הכשרה | סרטוני הדרכה</div>
      </header>
    `}function Wr(){return`
      <footer class="quote-footer" aria-label="פרטי יצירת קשר">
        <span class="footer-item"><img src="assets/brand/icon-location.png" alt="" />בזל 3, פתח תקווה</span>
        <span class="footer-item"><img src="assets/brand/icon-web.png" alt="" />www.improve-it.co.il</span>
        <span class="footer-item"><span class="footer-symbol">@</span>ziv@improve-it.co.il</span>
        <span class="footer-item"><img src="assets/brand/icon-phone.png" alt="" />073-7858198</span>
      </footer>
    `}function Kr(e){const n=wt(e).sectionDefinitions.filter(([,r])=>r!=="lms");if(e.includeLms&&(e.lmsSectionLocation!=="samePage"||!e.showWorkProcess)){const o=["includeLms","lms",e.lmsServiceTitle||"שירות LMS"],a=n.findIndex(([,u])=>u==="work");if(e.lmsSectionLocation==="newPageBefore")if(a>=0)n.splice(a,0,o);else{const u=n.findIndex(([,f])=>f==="pricing");u>=0?n.splice(u,0,o):n.push(o)}else if(a>=0)n.splice(a+1,0,o);else{const u=n.findIndex(([,f])=>f==="pricing");u>=0?n.splice(u,0,o):n.push(o)}}return n.filter(([r])=>e[r]).map(([,r,o],a)=>({key:r,title:o,number:a+1}))}function wt(e){return S[e.templateId]||S[Et()]}function ei(e){const t=S[e];return t?e.toLowerCase().includes("lms")||String(t.label||"").toLowerCase().includes("lms"):!1}function Et(){return S[Ze]?Ze:Object.keys(S)[0]}function ae(e,t){const n=e.find(i=>i.key===t);return n?`${n.number}. ${n.title}`:""}function ti(e){return`quote-section-${e}`}function Q(e,t){const n=ti(e);return`<a class="section-title-link" id="${m(n)}" name="${m(n)}" href="${m(ni(e))}">${c(t)}</a>`}function ni(e){return`${ge()}#${ti(e)}`}function Yr(e){const t=e.includeLms?[`שימוש ב${he(e,"includeLms","מערכת LMS בענן")},`,"כולל לומדות מדף"]:["שימוש בלומדות מדף"];return e.includeTranslation&&t.push(`ו${he(e,"includeTranslation","תרגום")}`),t.join(" ")}function Xr(e){const t=e.pricingItems.map(Lt).filter(r=>r.title),n=t.reduce((r,o)=>o.included?r:r+y(o.price,0),0),i=e.discountPercent>0?Math.round(n*e.discountPercent/100):0;return{rows:t,subtotal:n,discount:i,total:Math.max(0,n-i)}}function Zr(e,t){const n=t.filter(o=>o.kind==="course"),i=!!(e.mergeCourseNotes&&n.length>1);let r=0;return t.map(o=>{const a=o.kind==="course",u=(()=>!i||!a?`<td class="notes">${Tt(o.notes||"")}</td>`:(r+=1,r>1?"":`<td class="notes" rowspan="${n.length}">${Tt(n[0].notes||"")}</td>`))();return`
          <tr>
            <td>${c(o.title)}</td>
            <td class="price">${o.included?"כלול":w(o.price)}</td>
            ${u}
          </tr>
        `}).join("")}function es(e,t){return e.discountDisplayMode==="amount"?`-${w(t.discount)}`:`${us(e.discountPercent)}`}function ii(e){const t=e.includeLms?ts(e):ns(e);if(e.includeHebrewVoiceover){const n=os(e);n&&t.push(n)}return e.includeTranslation&&t.push({title:he(e,"includeTranslation","תרגום לשפה נוספת"),price:as(e),notes:e.includeLms?"תרגום לשפה אחת מבין אנגלית, רוסית או ערבית. המחיר מתייחס לשפה אחת ולכל הלומדות בחבילה.":"תרגום לשפה אחת מבין אנגלית, רוסית או ערבית.",included:!1}),e.includeEnglishVoiceover&&t.push({title:he(e,"includeEnglishVoiceover","קריינות בשפה נוספת"),price:E.voiceoverEnglish,notes:"קריינות בשפה נוספת באמצעות AI. המחיר מתייחס לשפה אחת.",included:!1}),e.includeLms&&t.push({title:he(e,"includeLms","מערכת LMS בענן"),price:0,notes:'הקמת סביבת LMS, העלאת משתמשים ולומדות, והפקת דו"חות חודשיים.',included:!0}),t.map(Lt)}function ts(e){const t=Math.max(e.courseCount,e.courseNames.length),n=[];if(!t)return n;if(t>=3&&e.users<=700){n.push({title:is(e,Math.min(t,3)),price:ss(e.users),kind:"course",notes:Ht(e),included:!1});for(let i=3;i<t;i+=1)n.push({title:oi(e,i),price:ri(e.users),kind:"course",notes:"",included:!1});return n}n.push({title:Qt(e,0),price:rs(e.users),kind:"course",notes:Ht(e),included:!1});for(let i=1;i<t;i+=1)n.push({title:oi(e,i),price:ri(e.users),kind:"course",notes:"",included:!1});return n}function ns(e){const t=Math.max(e.courseCount,e.courseNames.length),n=[];if(!t)return n;const i=Math.min(t,3);n.push({title:i===1?Qt(e,0):`חבילת ${i} לומדות מדף מקבוצה A`,price:U[i],kind:"course",notes:Ht(e),included:!1});for(let r=3;r<t;r+=1)n.push({title:`לומדת מדף נוספת ${r+1}${Vt(e,r)}`,price:E.purchaseAdditionalCourse,kind:"course",notes:"",included:!1});return n}function Qt(e,t){const n=Vt(e,t),i=e.courseCount===1&&!n?"לומדה אחת":`לומדה ${t+1}${n}`;return e.includeLms?`מערכת LMS כולל ${i} עבור ${e.users} עובדים לשנה`:`לומדת מדף ${t+1}${n}`}function is(e,t){return`מערכת LMS כולל חבילת ${t} לומדות מדף עבור ${e.users} עובדים לשנה`}function oi(e,t){return`לומדה נוספת ${t+1}${Vt(e,t)} במערכת LMS עבור ${e.users} עובדים לשנה`}function Vt(e,t){const n=e.courseNames[t]||"";return n&&!/^לומד(?:ה|ת)\s+מדף\s*\d+$/i.test(n)?` - ${n}`:""}function Ht(e){return["המחיר כולל הוספת לוגו, שם לקוח וממונה ועד 100 מילים שינוי טקסט.",e.bilingualCourse?"ההצעה מתייחסת ללומדות בשפות עברית ואנגלית.":"ההצעה מתייחסת ללומדות בשפה העברית בלבד.",e.includeLms?"מסלול השכרה שנתי במערכת LMS.":"",e.includeLms&&e.courseCount>=4?"בחבילה של 4 לומדות או יותר תינתן הנחה של 5% על החבילה.":"",e.includeLms?"בעת חידוש הסכם ניתן להחליף גרסה בהתאם לתנאי המחירון.":""].filter(Boolean).join(`
`)}function os(e){return e.courseCount>=2?{title:he(e,"includeHebrewVoiceover","קריינות בעברית"),price:0,notes:e.includeLms?"בהשכרת 2 לומדות ומעלה הקריינות בעברית כלולה במחיר.":"בהזמנה של 2 לומדות ומעלה בשפה העברית הקריינות כלולה במחיר.",included:!0}:{title:he(e,"includeHebrewVoiceover","קריינות בעברית"),price:e.includeLms?450:350,notes:"התאמת קריינות בעברית ללומדה אחת.",included:!1}}function rs(e){return si(be,e)}function ss(e){return si(we,e)}function ri(e){return e<=500?P[500]:e<=700?P[700]:e<=850?P[850]:P.default}function as(e){return(e.includeLms?E.translationLms:E.translationPurchase)*Math.max(1,e.courseCount)}function si(e,t){const n=e.find(i=>t<=i.maxUsers);return n?n.price:e[e.length-1].price}function he(e,t,n){var i,r;return((r=(i=e.pricingOptionLabels)==null?void 0:i[t])==null?void 0:r.trim())||n}function Lt(e){return{title:(e==null?void 0:e.title)||"",price:y(e==null?void 0:e.price,0),notes:(e==null?void 0:e.notes)||"",included:!!(e!=null&&e.included),kind:(e==null?void 0:e.kind)==="course"?"course":""}}function cs(e){const t=String(e.pricingIntroText||"").trim();return t||"פירוט הרכיבים, העלויות והתכולות הכלולות בהצעה"}function ls(e){const t=e.discountPercent?`תינתן הנחה של ${e.discountPercent}%`:"תינתן הנחה";return e.discountValidUntil?`${t} במידה ותתקבל הזמנת עבודה עד ה-${gs(e.discountValidUntil)}`:t}function us(e){return`${new Intl.NumberFormat("he-IL",{maximumFractionDigits:1}).format(y(e,0))}%`}function zt(e){const t=String(e||"").split(/\n{2,}/).map(n=>n.trim()).filter(Boolean);return t.length?t.map(n=>`<p>${c(n).replace(/\n/g,"<br />")}</p>`).join(""):'<p class="empty-note">לא הוזן תוכן לסעיף זה.</p>'}function Be(e){return String(e||"").split(/\r?\n/).map(t=>t.trim()).filter(Boolean)}function ds(e){const t="המחיר אינו כולל תרגום הלומדה לשפות.",n="לא תתאפשר מחיקת משתמשים לאחר עליית הפרויקט לאוויר. במסלול השנתי ניתן לעדכן משתמשים אחת לחודש קלנדרי.";return Be(e.pricingFinePrintText).filter(i=>!(e.includeTranslation&&i===t||!e.includeLms&&i===n))}function Tt(e){return c(e).replace(/\n/g,"<br />")}function w(e){return`${new Intl.NumberFormat("he-IL",{maximumFractionDigits:0}).format(y(e,0))} ₪`}function ps(e){if(!e)return"";const[t,n,i]=e.split("-"),r=["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"];return`${String(Number(i)).padStart(2,"0")} ${r[Number(n)-1]||""} ${t}`}function ms(e){return e?new Intl.DateTimeFormat("he-IL",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(`${e}T00:00:00`)):""}function Se(e){return e?new Intl.DateTimeFormat("he-IL",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(e)):""}function gs(e){if(!e)return"";const[t,n,i]=e.split("-");return`${Number(i)}.${Number(n)}.${t}`}function y(e,t){const n=Number(e);return Number.isFinite(n)?n:t}function fs(e){return e==="false"||e==="0"||e===0||e===null?!1:!!e}function hs(e){const t=String(e||"");return/^data:image\/png;base64,[a-z0-9+/=]+$/i.test(t)?t:""}function Gt(){const e=new Date,t=e.getTimezoneOffset()*6e4;return new Date(e.getTime()-t).toISOString().slice(0,10)}function ai(e){return`${e}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}function Ss(e){return`${e}-${Date.now().toString(36)}${Math.random().toString(36).slice(2,8)}`}function ci(e){const t=Jt(e)||Jt(Gt());return new Date(Date.UTC(t.year,t.month,0)).toISOString().slice(0,10)}function Jt(e){const t=String(e||"").match(/^(\d{4})-(\d{2})-(\d{2})$/);if(!t)return null;const n=Number(t[1]),i=Number(t[2]),r=Number(t[3]);return!Number.isInteger(n)||!Number.isInteger(i)||!Number.isInteger(r)||i<1||i>12||r<1||r>31?null:{year:n,month:i,day:r}}function c(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function m(e){return c(e).replace(/`/g,"&#096;")}function li(e){const t=ui(e);return new TextDecoder().decode(t)}function ys(e){const t=new TextEncoder().encode(e);return di(t)}function ui(e){const t=e.replace(/-/g,"+").replace(/_/g,"/"),n=t.padEnd(t.length+(4-t.length%4)%4,"="),i=atob(n);return Uint8Array.from(i,r=>r.charCodeAt(0))}function di(e){let t="";return e.forEach(n=>{t+=String.fromCharCode(n)}),btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function vs(e){if(!("CompressionStream"in window))return ys(e);const t=new Blob([e],{type:"application/json"}).stream().pipeThrough(new CompressionStream("gzip")),n=new Uint8Array(await new Response(t).arrayBuffer());return di(n)}async function bs(e){if(!("DecompressionStream"in window))return li(e);const t=ui(e),n=new Blob([t]).stream().pipeThrough(new DecompressionStream("gzip"));return new Response(n).text()}})();
