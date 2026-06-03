window.IMPROVE_IT_SUPABASE = {
  url: "",
  anonKey: "",
};

// If built via Vite, inject environment variables safely
try {
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    if (import.meta.env.VITE_SUPABASE_URL) {
      window.IMPROVE_IT_SUPABASE.url = import.meta.env.VITE_SUPABASE_URL;
    }
    if (import.meta.env.VITE_SUPABASE_ANON_KEY) {
      window.IMPROVE_IT_SUPABASE.anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    }
  }
} catch (e) {
  // Fallback if environment is not a module or doesn't support import.meta
}
