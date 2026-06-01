import React, { useState, useEffect, useRef } from 'react';
import { 
  Plus, Trash2, Download, Settings as SettingsIcon, 
  User, Building, FileText, Send, Save, CheckCircle, Share2, PenTool,
  Package, X, Bell, Clock
} from 'lucide-react';
import SignaturePad from 'signature_pad';
import './App.css';

// --- Default Data ---
const DEFAULT_SENDER = {
  name: 'Improve-IT',
  repName: 'שחר כהן',
  address: 'רחוב בזל 3, פתח תקווה',
  phone: '052-8366744',
  email: 'office@improve-it.co.il',
  website: 'www.improve-it.co.il'
};

const MASTER_COMPONENTS = [
  { id: '1', name: 'השכרת מערכת ניהול למידה (LMS)', description: 'שימוש במערכת ניהול למידה בענן, כולל תמיכה ותחזוקה.', price: 5 },
  { id: '2', name: 'חבילת לומדות מדף', description: 'גישה לקטלוג לומדות מדף (בטיחות, נגישות, אבטחת מידע וכו\').', price: 8000 },
  { id: '3', name: 'פיתוח לומדה מותאמת אישית', description: 'אפיון, עיצוב ופיתוח לומדה אינטראקטיבית מלאה.', price: 25000 },
  { id: '4', name: 'שירותי הטמעה וניהול למידה', description: 'ליווי צמוד להטמעת המערכת בארגון והדרכת מנהלי למידה.', price: 5000 }
];

const TEMPLATES = {
  off_the_shelf: {
    id: 'off_the_shelf',
    name: 'השכרת LMS ולומדות מדף',
    quoteInfo: {
      date: new Date().toISOString().split('T')[0],
      validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    },
    items: [
      { tempId: '1', name: 'השכרת מערכת LMS', description: 'שימוש במערכת ניהול למידה בענן לניהול לומדות מדף.', userCount: 100, duration: 12, price: 5 },
      { tempId: '2', name: 'חבילת 5 לומדות מדף', description: 'גישה ל-5 לומדות מתוך הקטלוג הקיים (בטיחות, אופיס, רגולציה).', quantity: 1, price: 2500 }
    ]
  },
  lms_only: {
    id: 'lms_only',
    name: 'השכרת מערכת LMS בלבד',
    quoteInfo: {
      date: new Date().toISOString().split('T')[0],
      validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    },
    items: [
      { tempId: '1', name: 'רישיון שימוש במערכת LMS', description: 'גישה למערכת ניהול למידה.', userCount: 100, duration: 12, price: 5 },
      { tempId: '2', name: 'תמיכה והטמעה', description: 'ליווי טכני והקמת משתמשים ראשונית.', quantity: 1, price: 1500 }
    ]
  }
};

function App() {
  const [sender, setSender] = useState(DEFAULT_SENDER);
  const [client, setClient] = useState({ company: '', address: '' });
  const [contact, setContact] = useState({ name: '', role: '', email: '' });
  const [quoteInfo, setQuoteInfo] = useState({ 
    date: new Date().toISOString().split('T')[0], 
    validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] 
  });
  const [items, setItems] = useState(TEMPLATES.off_the_shelf.items);
  const [masterList, setMasterList] = useState(MASTER_COMPONENTS);
  const [showSettings, setShowSettings] = useState(false);
  const [showItemPicker, setShowItemPicker] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState('sender'); // 'sender', 'components', 'proposals'
  const [viewMode, setViewMode] = useState('editor'); // 'editor' or 'preview'
  const [isClientMode, setIsClientMode] = useState(false);
  const [clientSignature, setClientSignature] = useState(null);
  const [isSigned, setIsSigned] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('off_the_shelf');
  const [modalConfig, setModalConfig] = useState(null); // { title, message, onConfirm, type: 'alert' | 'confirm' }
  const [savedProposals, setSavedProposals] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const sigPadRef = useRef(null);
  const sigCanvasRef = useRef(null);

  // Load data from localStorage and URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const signData = params.get('sign');
    if (signData) {
      try {
        const decoded = JSON.parse(decodeURIComponent(atob(signData)));
        setClient({...decoded.client});
        setContact({...decoded.contact});
        setQuoteInfo({...decoded.quoteInfo});
        setItems([...decoded.items]);
        setSender({...decoded.sender});
        setIsClientMode(true);
        setViewMode('preview');
      } catch (e) {
        console.error("Failed to decode signature data", e);
      }
    }

    const savedMaster = localStorage.getItem('improve_it_master_list');
    if (savedMaster) setMasterList(JSON.parse(savedMaster));
    
    const savedSender = localStorage.getItem('improve_it_sender');
    if (savedSender) setSender(JSON.parse(savedSender));

    const savedProposalsData = localStorage.getItem('improve_it_proposals');
    if (savedProposalsData) setSavedProposals(JSON.parse(savedProposalsData));

    const savedNotifications = localStorage.getItem('improve_it_notifications');
    if (savedNotifications) setNotifications(JSON.parse(savedNotifications));

    // Request notification permission
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  // Initialize Signature Pad
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = sigCanvasRef.current;
      if (canvas) {
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);
        if (sigPadRef.current) sigPadRef.current.clear();
      }
    };

    if (isClientMode && sigCanvasRef.current) {
      sigPadRef.current = new SignaturePad(sigCanvasRef.current, {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        penColor: 'rgb(0, 0, 0)'
      });
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);
    }

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [isClientMode]);

  // Save master list to localStorage
  const saveMasterList = (newList) => {
    setMasterList(newList);
    localStorage.setItem('improve_it_master_list', JSON.stringify(newList));
  };

  // Save sender to localStorage
  const saveSender = (newSender) => {
    setSender(newSender);
    localStorage.setItem('improve_it_sender', JSON.stringify(newSender));
  };

  const addItemFromMaster = (masterItem) => {
    const isLMSItem = masterItem.name.toUpperCase().includes('LMS');
    const newItem = { 
      ...masterItem, 
      tempId: Date.now().toString(), 
      quantity: 1,
      userCount: isLMSItem ? 100 : 1,
      duration: isLMSItem ? 12 : 1,
      price: isLMSItem ? 5 : masterItem.price // Set a default per-user price for LMS if adding from master
    };
    setItems([...items, newItem]);
    setShowItemPicker(false);
  };

  const switchTemplate = (templateId) => {
    const template = TEMPLATES[templateId];
    setModalConfig({
      title: 'החלפת תבנית',
      message: `האם להחליף לתבנית "${template.name}"? הפעולה תדרוס את הפריטים הנוכחיים בהצעה.`,
      type: 'confirm',
      onConfirm: () => {
        setSelectedTemplate(templateId);
        setItems(template.items);
        setQuoteInfo(template.quoteInfo);
        setModalConfig(null);
      }
    });
  };

  const loadProposalForDownload = (prop) => {
    setClient(prop.fullData.client);
    setContact(prop.fullData.contact);
    setQuoteInfo(prop.fullData.quoteInfo);
    setItems(prop.fullData.items);
    setSender(prop.fullData.sender);
    setClientSignature(prop.signature);
    setViewMode('preview');
    setShowSettings(false);
    setTimeout(() => { window.print(); }, 500);
  };

  const removeItem = (tempId) => {
    setItems(items.filter(item => item.tempId !== tempId));
  };

  const removeProposal = (id) => {
    setModalConfig({
      title: 'מחיקת הצעה',
      message: 'האם אתה בטוח שברצונך למחוק הצעה זו מהמאגר?',
      type: 'confirm',
      onConfirm: () => {
        const existing = JSON.parse(localStorage.getItem('improve_it_proposals') || '[]');
        const updated = existing.filter(p => p.id !== id);
        setSavedProposals(updated);
        localStorage.setItem('improve_it_proposals', JSON.stringify(updated));
        setModalConfig(null);
      }
    });
  };

  const updateItem = (tempId, field, value) => {
    setItems(items.map(item => 
      item.tempId === tempId ? { ...item, [field]: value } : item
    ));
  };

  const getItemTotal = (item) => {
    if (item.name?.toUpperCase().includes('LMS')) {
      return (item.price || 0) * (item.userCount || 1) * (item.duration || 1);
    }
    return (item.price || 0) * (item.quantity || 1);
  };

  const subtotal = items.reduce((sum, item) => sum + getItemTotal(item), 0);
  const vat = subtotal * 0.18;
  const total = subtotal + vat;

  const handlePrint = () => {
    window.print();
  };

  const generateSignLink = () => {
    const data = { client, contact, quoteInfo, items, sender };
    const encoded = btoa(encodeURIComponent(JSON.stringify(data)));
    const url = `${window.location.origin}${window.location.pathname}?sign=${encoded}`;
    navigator.clipboard.writeText(url);
    setModalConfig({
      title: 'הקישור הועתק',
      message: 'קישור ייחודי לחתימה הועתק ללוח! שלח אותו ללקוח לחתימה.',
      type: 'alert',
      onConfirm: () => setModalConfig(null)
    });
  };

  const saveSignature = () => {
    if (sigPadRef.current && !sigPadRef.current.isEmpty()) {
      setClientSignature(sigPadRef.current.toDataURL());
      setIsSigned(true);
      setModalConfig({
        title: 'חתימה נקלטה',
        message: 'החתימה נקלטה בהצלחה! כעת ניתן לשלוח את ההצעה החתומה.',
        type: 'alert',
        onConfirm: () => setModalConfig(null)
      });
    }
  };

  const clearSignature = () => {
    if (sigPadRef.current) {
      sigPadRef.current.clear();
      setClientSignature(null);
      setIsSigned(false);
    }
  };

  const sendProposal = async () => {
    const proposalData = {
      id: Date.now(),
      clientName: client.company,
      contactName: contact.name,
      totalAmount: total,
      signature: clientSignature,
      signedAt: new Date().toISOString(),
      fullData: { client, contact, quoteInfo, items, sender }
    };

    // Save to proposals list
    const existing = JSON.parse(localStorage.getItem('improve_it_proposals') || '[]');
    const updated = [...existing, proposalData];
    setSavedProposals(updated);
    localStorage.setItem('improve_it_proposals', JSON.stringify(updated));

    // Create Notification
    const newNotification = {
      id: Date.now(),
      title: 'הצעה חתומה התקבלה!',
      message: `הלקוח ${client.company} חתם על הצעה בסך ${total.toLocaleString()} ₪`,
      time: new Date().toISOString(),
      isRead: false,
      proposalId: proposalData.id
    };
    
    const existingNotifs = JSON.parse(localStorage.getItem('improve_it_notifications') || '[]');
    const updatedNotifs = [newNotification, ...existingNotifs];
    setNotifications(updatedNotifs);
    localStorage.setItem('improve_it_notifications', JSON.stringify(updatedNotifs));

    // Browser Notification
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification("הצעה חתומה חדשה!", {
        body: `הלקוח ${client.company} חתם על ההצעה.`,
        icon: "/favicon.ico"
      });
    }

    setIsSent(true);
    
    // Note: In a real app, you would also send an email or push notification here via a backend API.
    // Example: fetch('/api/notify-company', { method: 'POST', body: JSON.stringify(proposalData) });
  };

  const markNotificationAsRead = (id) => {
    const updated = notifications.map(n => n.id === id ? { ...n, isRead: true } : n);
    setNotifications(updated);
    localStorage.setItem('improve_it_notifications', JSON.stringify(updated));
  };

  const clearNotifications = () => {
    setNotifications([]);
    localStorage.removeItem('improve_it_notifications');
    setShowNotifications(false);
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="app-container">
      {/* Header / Nav */}
      <header className="no-print">
        <div className="logo">Improve-IT Quote Gen</div>
        <div className="nav-actions">
          {!isClientMode && (
            <>
              <button onClick={() => setViewMode(viewMode === 'editor' ? 'preview' : 'editor')} className="btn-secondary">
                {viewMode === 'editor' ? 'תצוגה מקדימה' : 'חזרה לעריכה'}
              </button>
              
              <div className="notification-wrapper">
                <button onClick={() => setShowNotifications(!showNotifications)} className={`btn-icon ${unreadCount > 0 ? 'has-unread' : ''}`}>
                  <Bell size={20} />
                  {unreadCount > 0 && <span className="unread-badge">{unreadCount}</span>}
                </button>
                
                {showNotifications && (
                  <div className="notifications-dropdown shadow-lg">
                    <div className="notif-header">
                      <h4>התראות ({unreadCount})</h4>
                      <button className="btn-link" onClick={clearNotifications}>נקה הכל</button>
                    </div>
                    <div className="notif-list">
                      {notifications.length === 0 && <div className="empty-notif">אין התראות חדשות</div>}
                      {notifications.map(n => (
                        <div 
                          key={n.id} 
                          className={`notif-item ${!n.isRead ? 'unread' : ''}`}
                          onClick={() => markNotificationAsRead(n.id)}
                        >
                          <div className="notif-icon">
                            <CheckCircle size={16} />
                          </div>
                          <div className="notif-content">
                            <p className="notif-msg">{n.message}</p>
                            <span className="notif-time">
                              <Clock size={12} /> {new Date(n.time).toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button onClick={generateSignLink} className="btn-secondary">
                <Share2 size={18} />
                שתף לחתימה
              </button>
              <button onClick={() => setShowSettings(!showSettings)} className="btn-icon">
                <SettingsIcon size={20} />
              </button>
            </>
          )}
          {isClientMode && (
            <span className="client-badge">מצב חתימת לקוח</span>
          )}
          <button onClick={handlePrint} className="btn-primary">
            <Download size={18} />
            ייצוא ל-PDF
          </button>
        </div>
      </header>

      <main className={`${viewMode === 'preview' ? 'preview-only' : ''}`}>
        {isSent && (
          <div className="success-screen-overlay no-print">
            <div className="success-card">
              <CheckCircle size={64} color="#166534" />
              <h1>תודה על החתימה!</h1>
              <p>ההצעה נשלחה בהצלחה ל-Improve-IT. ניצור איתך קשר בהקדם.</p>
              <div className="pad-actions">
                <button onClick={handlePrint} className="btn-secondary">
                  <Download size={18} />
                  הורד עותק חתום (PDF)
                </button>
                <button onClick={() => window.location.href = window.location.origin} className="btn-primary">חזרה לדף הבית</button>
              </div>
            </div>
          </div>
        )}

        {/* Editor Sidebar */}
        <section className={`editor-panel no-print ${viewMode === 'preview' || isSent ? 'hidden' : ''}`}>
          <div className="panel-section">
            <h3><FileText size={18} /> בחירת תבנית</h3>
            <div className="input-group">
              <select value={selectedTemplate} onChange={(e) => switchTemplate(e.target.value)} className="template-select">
                {Object.values(TEMPLATES).map(t => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="panel-section">
            <h3><Building size={18} /> פרטי לקוח</h3>
            <div className="input-group">
              <label>חברה / ארגון</label>
              <input value={client.company} onChange={e => setClient({...client, company: e.target.value})} placeholder="שם הלקוח" />
            </div>
            <div className="input-group">
              <label>כתובת</label>
              <input value={client.address} onChange={e => setClient({...client, address: e.target.value})} placeholder="כתובת הלקוח" />
            </div>
          </div>

          <div className="panel-section">
            <h3><User size={18} /> איש קשר</h3>
            <div className="grid-2">
              <div className="input-group">
                <label>שם מלא</label>
                <input value={contact.name} onChange={e => setContact({...contact, name: e.target.value})} />
              </div>
              <div className="input-group">
                <label>תפקיד</label>
                <input value={contact.role} onChange={e => setContact({...contact, role: e.target.value})} />
              </div>
            </div>
            <div className="input-group">
              <label>אימייל</label>
              <input value={contact.email} onChange={e => setContact({...contact, email: e.target.value})} />
            </div>
          </div>

          <div className="panel-section">
            <h3><FileText size={18} /> תוקף הצעה</h3>
            <div className="input-group">
              <label>תוקף הצעה</label>
              <input type="date" value={quoteInfo.validUntil} onChange={(e) => setQuoteInfo({ ...quoteInfo, validUntil: e.target.value })} />
            </div>
          </div>

          <div className="panel-section">
            <div className="section-header">
              <h3><Package size={18} /> רכיבי ההצעה</h3>
              <button className="btn-secondary btn-small" onClick={() => setShowItemPicker(true)}>הוסף מרשימה</button>
            </div>
            
            <div className="items-list">
              {items.map(item => {
                const isLMSItem = item.name?.toUpperCase().includes('LMS');
                return (
                  <div key={item.tempId} className="item-editor-card">
                    <div className="item-row">
                      <div className="input-group full-width">
                        <label>שם הפריט</label>
                        <input className="item-name" value={item.name} onChange={e => updateItem(item.tempId, 'name', e.target.value)} />
                      </div>
                    </div>
                    
                    <div className="item-row mt-1" style={{ flexDirection: 'row', gap: '0.5rem', alignItems: 'flex-end' }}>
                      {isLMSItem ? (
                        <>
                          <div className="input-group" style={{ flex: 1 }}>
                            <label>משתמשים</label>
                            <input type="number" value={item.userCount || 100} onChange={e => updateItem(item.tempId, 'userCount', Number(e.target.value))} />
                          </div>
                          <div className="input-group" style={{ flex: 1 }}>
                            <label>חודשים</label>
                            <input type="number" value={item.duration || 12} onChange={e => updateItem(item.tempId, 'duration', Number(e.target.value))} />
                          </div>
                          <div className="input-group" style={{ flex: 1.5 }}>
                            <label>מחיר למשתמש/חודש</label>
                            <input type="number" value={item.price} onChange={e => updateItem(item.tempId, 'price', Number(e.target.value))} />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="input-group" style={{ flex: 1 }}>
                            <label>כמות</label>
                            <input type="number" value={item.quantity} onChange={e => updateItem(item.tempId, 'quantity', Number(e.target.value))} />
                          </div>
                          <div className="input-group" style={{ flex: 2 }}>
                            <label>מחיר</label>
                            <input type="number" value={item.price} onChange={e => updateItem(item.tempId, 'price', Number(e.target.value))} />
                          </div>
                        </>
                      )}
                      <button className="btn-danger" style={{ marginBottom: '0.4rem', padding: '0.75rem' }} onClick={() => removeItem(item.tempId)}>
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <textarea 
                      className="item-desc" 
                      placeholder="תיאור הפריט..."
                      value={item.description} 
                      onChange={e => updateItem(item.tempId, 'description', e.target.value)} 
                    />
                    <div className="item-total-preview" style={{ textAlign: 'left', fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--primary)', marginTop: '0.5rem' }}>
                      סה"כ: {getItemTotal(item).toLocaleString()} ₪
                    </div>
                  </div>
                );
              })}
              {items.length === 0 && <div className="empty-state">טרם נוספו רכיבים</div>}
            </div>
          </div>
        </section>

        {/* Live Preview / Document */}
        <section className="preview-panel">
          <div className="document-page shadow">
            {/* Header */}
            <div className="doc-header">
              <div className="header-top">
                <div className="doc-client">
                  <div className="client-box">
                    <span className="label">לכבוד:</span>
                    <p className="client-name">{client.company || 'שם החברה'}</p>
                    <p className="client-address">{client.address || 'כתובת'}</p>
                  </div>
                  <div className="contact-box">
                    <span className="label">לידי:</span>
                    <p className="contact-name"><strong>{contact.name || 'שם איש הקשר'}</strong></p>
                    <p className="contact-details">{contact.role} {contact.email ? `| ${contact.email}` : ''}</p>
                  </div>
                </div>
                <div className="sender-info">
                  <h1 className="company-logo">{sender.name}</h1>
                  <div className="sender-details">
                    <p>{sender.address}</p>
                    <p>{sender.email} | {sender.phone}</p>
                    <p>{sender.website}</p>
                  </div>
                </div>
              </div>

              <div className="quote-title-container">
                <div className="quote-title-row">
                  <div className="title-accent"></div>
                  <h2>הצעת מחיר</h2>
                  <div className="title-accent"></div>
                </div>
                
                <div className="quote-meta-bar">
                  <div className="meta-block">
                    <span>תאריך:</span>
                    <strong>{new Date(quoteInfo.date).toLocaleDateString('he-IL')}</strong>
                  </div>
                  <div className="meta-divider"></div>
                  <div className="meta-block">
                    <span>תוקף ההצעה:</span>
                    <strong>30 ימים</strong>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            {/* TOC and Intro Signature */}
            <div className="doc-intro-section">
              <div className="toc">
                <h3>המסמך שלהלן כולל את:</h3>
                <ol>
                  <li><a href="#company-profile">פרופיל חברה</a></li>
                  <li><a href="#background">רקע</a></li>
                  <li><a href="#general-solution">הפתרון המוצע-כללי</a></li>
                  <li><a href="#highlights">{selectedTemplate === 'off_the_shelf' ? 'לומדות מדף וקטלוג תכנים' : 'מערכת ניהול למידה (LMS)'}</a></li>
                  <li><a href="#work-process">תהליך העבודה המוצע</a></li>
                  <li><a href="#pricing">תמחור ותכולה</a></li>
                </ol>
              </div>

              <div className="intro-signature">
                <p>בברכה,</p>
                <p><strong>{sender.repName},</strong></p>
                <p>יועץ מכירות ופיתוח למידה דיגיטלית</p>
                <p>{sender.name}</p>
              </div>
            </div>

            {/* Content Sections */}
            <section id="company-profile" className="content-section">
              <h2>1. פרופיל חברה</h2>
              <p>את <strong>Improve-IT</strong> ייסד בשנת 2010 זיו גלבוע המביא עימו שנים רבות של ניסיון בניהול בכיר בחברות מובילות במשק בארץ כמו גם ייעוץ לארגונים והכרות רחבה עם מגוון הצרכים והפתרונות לשיפור ביצועים באמצעות תהליכי למידה ארגוניים.</p>
              <p>צוות החברה מונה צוות של 10 מפתחי הדרכה מנוסים בביצוע של עשרות רבות של פרויקטים בתחום ההדרכה בכלל והלמידה הדיגיטלית בפרט. הצוות הרב מקצועי מביא עמו יכולות של פיתוח הדרכה, פיצוח תוכן, הפקת לומדות, סטודיו של הסרטות דיבובים וכן מיומנויות של ייעוץ ואימון אישי.</p>
              <p>חברת Improve-IT שמה לה למטרה לשלב מתודולוגיה וטכנולוגיה התורמות לשיפור הביצועים בארגונים, תוך יצירת הקשר שבין תשתיות הפיתוח הארגוני וההדרכה לבין התוצאות העסקיות.</p>
            </section>

            <section id="background" className="content-section">
              <h2>2. רקע</h2>
              <p>{client.company || 'הלקוח'} בוחנים בימים אלה את האפשרות לשילוב של לומדות מדף עבור עובדי הארגון, כולל שימוש במערכת LMS.</p>
            </section>

            <section id="general-solution" className="content-section">
              <h2>3. הפתרון המוצע-כללי</h2>
              <p>הפתרון המוצע מתבסס על לומדות מדף אשר פונה למכנה הרחב של עובדי {client.company || 'הארגון'}.</p>
              <p>כל לומדה תכלול סימולציות ותרגולים אשר יאפשרו לכל לומד להתקדם בקצב שלו תוך יצירת אינטראקציה ועניין, כמו גם תרגום של נהלי העבודה להתמודדויות היומיומיות ופתרון סימולטיבי של מצבים אשר עשויים להתרחש במהלך יום העבודה.</p>
            </section>

            {/* 4. Template Specific Highlights */}
            <section id="highlights" className="content-section">
              {selectedTemplate === 'off_the_shelf' && (
                <>
                  <h2>4. לומדות מדף וקטלוג תכנים</h2>
                  <p>חבילת לומדות המדף של Improve-IT מאפשרת לארגון להטמיע ידע מקצועי באופן מיידי, ללא צורך בתהליכי פיתוח ארוכים.</p>
                  <ul className="highlights-list">
                    <li><strong>מגוון רחב:</strong> קטלוג הכולל עשות לומדות בנושאי בטיחות, אופיס, ורגולציה.</li>
                    <li><strong>עדכון שוטף:</strong> התכנים מעודכנים באופן קבוע בהתאם לשינויי רגולציה.</li>
                    <li><strong>זמינות מיידית:</strong> הטמעה מהירה במערכת ה-LMS תוך יום עסקים אחד.</li>
                  </ul>
                </>
              )}
              {selectedTemplate === 'lms_only' && (
                <>
                  <h2>4. מערכת ניהול למידה (LMS)</h2>
                  <p>מערכת ה-LMS של Improve-IT היא פלטפורמה ידידותית ומתקדמת לניהול, הפצה ומדידה של תהליכי למידה בארגון.</p>
                  <ul className="highlights-list">
                    <li><strong>ניהול משתמשים:</strong> הקצאת לומדות לקבוצות עובדים ומעקב אחר התקדמות.</li>
                    <li><strong>דוחות וסטטיסטיקה:</strong> הפקת דוחות ביצועים וציונים בזמן אמת.</li>
                    <li><strong>נגישות מלאה:</strong> עבודה מכל מכשיר (PC, Mobile) ובכל מקום.</li>
                  </ul>
                </>
              )}
            </section>

            <section id="work-process" className="content-section">
              <h2>5. תהליך העבודה המוצע</h2>
              <div className="process-steps">
                <div className="step-group">
                  <h4>התאמת תוכן ומתווה</h4>
                  <div className="step"><span>1</span> התאמת התוכן בהתאם לדף הערות (שינויי טקסט ולוגו).</div>
                  <div className="step"><span>2</span> תיקוף ראשון - הלומדה המעודכנת תועבר לאישורכם.</div>
                  <div className="step"><span>3</span> הטמעת תיקונים ואישור סופי (תיקוף שני).</div>
                </div>
                <div className="step-group mt-1">
                  <h4>שירות LMS</h4>
                  <div className="step"><span>*</span> הקמת סביבת עבודה והעלאת משתמשים.</div>
                  <div className="step"><span>*</span> הפקת דו"חות ביצוע תקופתיים.</div>
                </div>
              </div>
            </section>

            <section id="pricing" className="content-section">
              <h2>6. תמחור ותכולה</h2>
              <p>להלן פירוט הרכיבים שנבחרו עבור הצעה זו:</p>
              
              <table className="items-table">
                <thead>
                  <tr>
                    <th>תיאור השירות / מוצר</th>
                    <th>כמות</th>
                    <th>מחיר</th>
                    <th>סה"כ</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => {
                    const isLMSItem = item.name?.toUpperCase().includes('LMS');
                    return (
                      <tr key={item.tempId}>
                        <td>
                          <div className="item-title">{item.name}</div>
                          <div className="item-description">{item.description}</div>
                        </td>
                        <td>
                          <span style={{ fontWeight: 600 }}>
                            {isLMSItem ? item.userCount?.toLocaleString() : item.quantity}
                          </span>
                        </td>
                        <td>
                          <span style={{ fontWeight: 600 }}>{item.price.toLocaleString()} ₪</span>
                        </td>
                        <td className="table-total-cell">
                          {getItemTotal(item).toLocaleString()} ₪
                        </td>
                      </tr>
                    );
                  })}
                  {items.length === 0 && (
                    <tr>
                      <td colSpan="4" className="placeholder-row">אין פריטים להצגה</td>
                    </tr>
                  )}
                </tbody>
              </table>

              <div className="doc-summary">
                <div className="summary-row">
                  <span>סה"כ לפני מע"מ:</span>
                  <span>{subtotal.toLocaleString()} ₪</span>
                </div>
                <div className="summary-row">
                  <span>מע"מ (18%):</span>
                  <span>{vat.toLocaleString()} ₪</span>
                </div>
                <div className="summary-row grand-total">
                  <span>סה"כ לתשלום:</span>
                  <span>{total.toLocaleString()} ₪</span>
                </div>
              </div>

              <div className="terms-box">
                <p><strong>תנאים כלליים:</strong></p>
                <ol className="terms-list">
                  <li>כלל התוצרים ימסרו בפורמטים דיגיטליים בלבד, הצעת המחיר אינה כוללת הוצאה לאור.</li>
                  <li>כלל ההתנהלות בפרויקט תהא אל מול גורם אחד אשר יוגדר כ-POC.</li>
                  <li>הצעת המחיר תקפה ל-30 ימים והעבודה מותנית בקבלת הזמנת עבודה רשמית.</li>
                  <li>Improve-IT אינה אחראית בגין כל אי התאמה או נזק שייגרם כתוצאה משימוש בתוכן.</li>
                  <li>סך החבות המצטברת לפיצויים לא יעלה על סכום התמורה.</li>
                  <li>החברה רשאית לעשות שימוש בתוצרים ובחומריהם לצרכי שיווק.</li>
                  <li>המחיר כולל סבב תיקוף אחד בלבד בכל שלב.</li>
                  <li>כל חריגה או שעות עדכון ותחזוקה יחויבו לפי עלות של 300 ₪ לשעה.</li>
                  <li><strong>ביטולים:</strong> ביטול לפני תחילת עבודה - 30%; ביטול לאחר תחילתה - תשלום אבן הדרך הקרובה בתוספת 20% מהשארית.</li>
                </ol>
              </div>

              <div className="signature-area">
                <div className="signature-box">
                  <div className="sig-line">
                    {clientSignature && <img src={clientSignature} alt="חתימת לקוח" />}
                  </div>
                  <p>חתימת הלקוח</p>
                </div>
                <div className="signature-box">
                  <div className="sig-line">
                    <p><strong>{sender.repName}</strong></p>
                  </div>
                  <p>חתימת החברה</p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      {/* Item Picker Modal */}
      {showItemPicker && (
        <div className="modal-overlay no-print" onClick={() => setShowItemPicker(false)}>
          <div className="modal-card item-picker-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>בחירת רכיב מהרשימה</h2>
              <button className="btn-close" onClick={() => setShowItemPicker(false)}><X size={32} /></button>
            </div>
            <div className="item-picker-grid">
              {masterList.map(item => (
                <div key={item.id} className="picker-card" onClick={() => addItemFromMaster(item)}>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <div className="picker-price">{item.price.toLocaleString()} ₪</div>
                  <button className="btn-primary btn-small">הוסף להצעה</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="modal-overlay" onClick={() => setShowSettings(false)}>
          <div className="modal-card wide" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>הגדרות מערכת</h2>
              <button className="btn-close" onClick={() => setShowSettings(false)}><X size={32} /></button>
            </div>
            
            <div className="settings-tabs">
              <button className={activeSettingsTab === 'sender' ? 'active' : ''} onClick={() => setActiveSettingsTab('sender')}>פרטי שולח</button>
              <button className={activeSettingsTab === 'components' ? 'active' : ''} onClick={() => setActiveSettingsTab('components')}>ניהול רכיבים</button>
              <button className={activeSettingsTab === 'proposals' ? 'active' : ''} onClick={() => setActiveSettingsTab('proposals')}>הצעות חתומות</button>
            </div>

            <div className="settings-content">
              {activeSettingsTab === 'sender' && (
                <section className="settings-section">
                  <div className="section-header">
                    <h3>פרטי שולח</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>פרטים אלו יופיעו בראש כל הצעה שתפיק</p>
                  </div>
                  <div className="grid-2">
                    <div className="input-group">
                      <label>שם הנציג</label>
                      <input value={sender.repName} onChange={e => saveSender({...sender, repName: e.target.value})} />
                    </div>
                    <div className="input-group">
                      <label>שם החברה</label>
                      <input value={sender.name} onChange={e => saveSender({...sender, name: e.target.value})} />
                    </div>
                  </div>
                  <div className="grid-2">
                    <div className="input-group">
                      <label>כתובת</label>
                      <input value={sender.address} onChange={e => saveSender({...sender, address: e.target.value})} />
                    </div>
                    <div className="input-group">
                      <label>טלפון</label>
                      <input value={sender.phone} onChange={e => saveSender({...sender, phone: e.target.value})} />
                    </div>
                  </div>
                  <div className="input-group">
                    <label>אימייל</label>
                    <input value={sender.email} onChange={e => saveSender({...sender, email: e.target.value})} />
                  </div>
                </section>
              )}

              {activeSettingsTab === 'components' && (
                <section className="settings-section">
                  <div className="section-header">
                    <h3>ניהול רכיבי המאגר</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>נהל את רשימת הרכיבים הזמינים לבחירה מהירה בהצעות מחיר</p>
                  </div>
                  <div className="master-list-editor">
                    <div className="master-list-header">
                      <span>שם הרכיב</span>
                      <span style={{ textAlign: 'center' }}>מחיר ברירת מחדל (₪)</span>
                      <span></span>
                    </div>
                    {masterList.map(item => (
                      <div key={item.id} className="master-item">
                        <input 
                          placeholder="שם הרכיב" 
                          value={item.name} 
                          onChange={e => {
                            const newList = masterList.map(m => m.id === item.id ? {...m, name: e.target.value} : m);
                            saveMasterList(newList);
                          }} 
                        />
                        <input 
                          type="number" 
                          placeholder="מחיר" 
                          value={item.price} 
                          onChange={e => {
                            const newList = masterList.map(m => m.id === item.id ? {...m, price: Number(e.target.value)} : m);
                            saveMasterList(newList);
                          }} 
                        />
                        <button 
                          className="btn-danger-small" 
                          onClick={() => {
                            const newList = masterList.filter(m => m.id !== item.id);
                            saveMasterList(newList);
                          }} 
                          title="מחק מהמאגר"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                    <button className="btn-primary mt-1" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }} onClick={() => {
                      const newList = [...masterList, { id: Date.now().toString(), name: '', description: '', price: 0 }];
                      saveMasterList(newList);
                    }}>
                      <Plus size={18} /> הוסף רכיב חדש למאגר
                    </button>
                  </div>
                </section>
              )}

              {activeSettingsTab === 'proposals' && (
                <section className="settings-section">
                  <div className="section-header">
                    <h3>מאגר הצעות חתומות</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>צפייה וניהול של כל הצעות המחיר שנחתמו ע"י לקוחות</p>
                  </div>
                  <div className="proposals-grid">
                    {savedProposals.length === 0 && <p>טרם נשמרו הצעות חתומות.</p>}
                    {savedProposals.map(prop => (
                      <div key={prop.id} className="proposal-card">
                        <div className="prop-header">
                          <strong>הצעה בתאריך {new Date(prop.signedAt).toLocaleDateString()}</strong>
                          <span>{prop.clientName}</span>
                        </div>
                        <div className="prop-body">
                          <p>{prop.contactName}</p>
                          <p>{prop.totalAmount.toLocaleString()} ₪</p>
                        </div>
                        <div className="prop-footer">
                          <img src={prop.signature} alt="חתימה" className="mini-sig" />
                          <button onClick={() => loadProposalForDownload(prop)} className="btn-secondary btn-small" title="הורד PDF">
                            <Download size={16} />
                          </button>
                          <button onClick={() => removeProposal(prop.id)} className="btn-danger-small" title="מחק">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  {savedProposals.length > 0 && (
                    <button className="btn-danger" onClick={() => {
                      setModalConfig({
                        title: 'מחיקת המאגר',
                        message: 'האם אתה בטוח שברצונך למחוק את כל הצעות המחיר החתומות? פעולה זו אינה ניתנת לביטול.',
                        type: 'confirm',
                        onConfirm: () => {
                          localStorage.removeItem('improve_it_proposals');
                          setSavedProposals([]);
                          setActiveSettingsTab('sender');
                          setModalConfig(null);
                        }
                      });
                    }}>מחיקת כל המאגר</button>
                  )}
                </section>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Signature UI for Client Mode */}
      {isClientMode && viewMode === 'preview' && !isSent && (
        <div className="signature-overlay no-print">
          <div className="signature-pad-container">
            <div className="pad-header">
              <h3>חתימה דיגיטלית</h3>
              <p>אנא חתום בתוך התיבה למטה:</p>
            </div>
            <canvas ref={sigCanvasRef} className="signature-canvas"></canvas>
            <div className="pad-actions">
              <button className="btn-secondary" onClick={clearSignature}>נקה</button>
              <button className="btn-primary" onClick={saveSignature}>אשר חתימה</button>
            </div>
            {isSigned && (
              <button className="btn-success full-width mt-1" onClick={sendProposal}>
                <Send size={18} /> שלח הצעה חתומה
              </button>
            )}
          </div>
        </div>
      )}
      {/* Custom Modal (Alert/Confirm) */}
      {modalConfig && (
        <div className="custom-modal-overlay no-print">
          <div className="custom-modal-card">
            <h3>{modalConfig.title}</h3>
            <p>{modalConfig.message}</p>
            <div className="custom-modal-actions">
              {modalConfig.type !== 'alert' && (
                <button className="btn-secondary" onClick={() => setModalConfig(null)}>ביטול</button>
              )}
              <button className="btn-primary" onClick={modalConfig.onConfirm}>אישור</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
