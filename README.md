# מחולל הצעות מחיר - Improve-IT

כלי להפקת הצעות מחיר ממותגות, יצירת קישור חתימה ללקוח ושמירת הצעות חתומות.

## הרצה מקומית

```bash
python3 -m http.server 4180
```

פתחו:

```text
http://localhost:4180/
```

## חיבור Supabase

המחולל משתמש ב-Supabase לשני דברים:

- `signed_quotes` - מאגר הצעות חתומות.
- `template_settings` - שמירת הגדרות פורמטים.

### 1. יצירת הטבלאות

ב-Supabase פתחו:

`SQL Editor` -> `New query`

והריצו את הקובץ:

```text
supabase/schema.sql
```

### 2. חיבור מקומי

העתיקו את קובץ הדוגמה:

```bash
cp config/supabase-config.example.js config/supabase-config.js
```

עדכנו בו את:

```js
url: "https://your-project-ref.supabase.co",
anonKey: "your-public-anon-key",
```

### 3. חיבור GitHub Pages

בריפו ב-GitHub פתחו:

`Settings` -> `Secrets and variables` -> `Actions` -> `New repository secret`

והוסיפו:

```text
SUPABASE_URL
SUPABASE_ANON_KEY
```

אחרי שמירת הסודות, הריצו מחדש את ה-workflow:

`Actions` -> `Deploy GitHub Pages` -> `Run workflow`

בפריסה, ה-workflow יוצר אוטומטית את:

```text
dist/config/supabase-config.js
```

עם הערכים מתוך GitHub Secrets.
