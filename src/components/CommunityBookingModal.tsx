import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Home,
  Sparkles,
  PhoneCall,
  MessageCircle,
  Mail,
  ShieldCheck,
  CheckCircle2,
  X,
  Heart,
} from 'lucide-react';

interface CommunityBookingModalProps {
  destinationName: string;
  destinationNameAs?: string;
  district: string;
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'homestay' | 'artisan';
}

export const CommunityBookingModal: React.FC<CommunityBookingModalProps> = ({
  destinationName,
  destinationNameAs,
  district,
  isOpen,
  onClose,
  defaultType = 'homestay',
}) => {
  const { language } = useLanguage();

  const [inquiryType, setInquiryType] = useState<'homestay' | 'artisan'>(defaultType);
  const [travelerName, setTravelerName] = useState('');
  const [travelerPhone, setTravelerPhone] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [guestsCount, setGuestsCount] = useState('2');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Curated community desk contact
  const communityDeskWhatsApp = '919435012345';
  const communityDeskPhone = '+91 94350 12345';
  const communityDeskEmail = 'community@axomone.in';

  // Construct message for direct WhatsApp connection
  const generateWhatsAppMessage = () => {
    const greeting = language === 'as' ? 'নমস্কাৰ' : 'Hello';
    const typeLabel =
      inquiryType === 'homestay'
        ? language === 'as'
          ? 'প্ৰমাণিত থলুৱা হোমষ্টে’ (Eco-Homestay)'
          : 'Certified Community Eco-Homestay'
        : language === 'as'
        ? 'স্থানীয় শিপিনী আৰু হস্তশিল্প সমবায় (Artisan Collective)'
        : 'Local Artisan & Handloom Cooperative';

    const text =
      `${greeting} AXOM ONE Community Desk,\n\n` +
      `I would like to inquire about: ${typeLabel}\n` +
      `📍 Destination: ${destinationName} (${district})\n` +
      `👤 Traveler Name: ${travelerName || 'Visitor'}\n` +
      (travelerPhone ? `📞 Contact: ${travelerPhone}\n` : '') +
      (travelDate ? `📅 Proposed Date: ${travelDate}\n` : '') +
      `👥 Guests / Quantity: ${guestsCount}\n` +
      (notes ? `📝 Note: ${notes}\n\n` : '\n') +
      `Requesting direct connection with verified local hosts/weavers. (Zero Middleman Policy - AXOM ONE)`;

    return encodeURIComponent(text);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${communityDeskWhatsApp}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent(
      `Community Inquiry: ${destinationName} - ${inquiryType === 'homestay' ? 'Homestay' : 'Artisans'}`
    );
    const body = generateWhatsAppMessage();
    window.location.href = `mailto:${communityDeskEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div
      className="dest-lightbox-overlay"
      style={{ zIndex: 120000 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="dest-lightbox-modal-box"
        style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          maxWidth: '560px',
          width: '95%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '0',
          boxShadow: '0 25px 60px rgba(15, 23, 42, 0.35)',
        }}
      >
        {/* Top Woven Gamusa Accent */}
        <div
          style={{
            height: '14px',
            backgroundImage: "url('/images/gamusa-pattern.png')",
            backgroundSize: 'auto 14px',
            backgroundRepeat: 'repeat-x',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
          }}
        />

        {/* Modal Header */}
        <div style={{ padding: '1.5rem 1.75rem 1rem 1.75rem', position: 'relative' }}>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: '#F1F5F9',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#475569',
            }}
          >
            <X size={16} />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: '#FEF2F2',
                color: '#DC2626',
                border: '1px solid #FECACA',
                padding: '0.2rem 0.65rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 700,
              }}
            >
              <Heart size={12} color="#DC2626" />
              <span>
                {language === 'as'
                  ? 'প্ৰত্যক্ষ থলুৱা যোগাযোগ (মধ্যভোগীবিহীন)'
                  : 'Zero-Middleman Direct Connect'}
              </span>
            </span>
          </div>

          <h2
            id="booking-modal-title"
            style={{
              fontSize: '1.35rem',
              fontWeight: 900,
              color: '#0F172A',
              margin: '0 0 0.35rem 0',
              lineHeight: 1.3,
            }}
          >
            {language === 'as'
              ? `${destinationNameAs || destinationName}ৰ বাবে থলুৱা সংযোগ`
              : `Connect Directly: ${destinationName}`}
          </h2>
          <p style={{ fontSize: '0.825rem', color: '#64748B', margin: 0 }}>
            {language === 'as'
              ? 'স্থানীয় জনগোষ্ঠীয় পৰিয়াল আৰু শিপিনী সমবায়ৰ সৈতে কোনো অতিৰিক্ত কমিছন নোহোৱাকৈ পোনপটীয়াকৈ যোগাযোগ কৰক।'
              : 'Support indigenous families & registered weaving collectives with 100% direct community returns.'}
          </p>
        </div>

        {/* Tab Switcher: Homestay vs Artisan */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            padding: '0 1.75rem 1rem 1.75rem',
            borderBottom: '1px solid #F1F5F9',
          }}
        >
          <button
            type="button"
            onClick={() => {
              setInquiryType('homestay');
              setSubmitted(false);
            }}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              padding: '0.65rem 0.85rem',
              borderRadius: '12px',
              border: inquiryType === 'homestay' ? '1.5px solid #059669' : '1px solid #E2E8F0',
              background: inquiryType === 'homestay' ? '#ECFDF5' : '#FFFFFF',
              color: inquiryType === 'homestay' ? '#047857' : '#64748B',
              fontSize: '0.825rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <Home size={15} />
            <span>{language === 'as' ? 'থলুৱা হোমষ্টে’' : 'Eco-Homestay'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setInquiryType('artisan');
              setSubmitted(false);
            }}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              padding: '0.65rem 0.85rem',
              borderRadius: '12px',
              border: inquiryType === 'artisan' ? '1.5px solid #DC2626' : '1px solid #E2E8F0',
              background: inquiryType === 'artisan' ? '#FEF2F2' : '#FFFFFF',
              color: inquiryType === 'artisan' ? '#B91C1C' : '#64748B',
              fontSize: '0.825rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            <Sparkles size={15} />
            <span>{language === 'as' ? 'শিপিনী আৰু হস্তশিল্প' : 'Artisan Weavers'}</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleWhatsAppSubmit} style={{ padding: '1.25rem 1.75rem 1.75rem 1.75rem' }}>
          {submitted ? (
            <div
              style={{
                textAlign: 'center',
                padding: '2rem 1rem',
                background: '#F0FDF4',
                borderRadius: '16px',
                border: '1px solid #BBF7D0',
                marginBottom: '1rem',
              }}
            >
              <CheckCircle2 size={40} color="#16A34A" style={{ margin: '0 auto 0.75rem auto' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#166534', margin: '0 0 0.35rem 0' }}>
                {language === 'as' ? 'যোগাযোগ বাৰ্তা প্ৰস্তুত কৰা হ’ল!' : 'Inquiry Prepared!'}
              </h3>
              <p style={{ fontSize: '0.825rem', color: '#15803D', margin: '0 0 1rem 0' }}>
                {language === 'as'
                  ? 'আপোনাৰ তথ্যসহ WhatsApp বা ইমেইল খোলা হৈছে। পোনপটীয়া সহায়ৰ বাবে ফোন কৰিবও পাৰে।'
                  : 'Your request has been channeled directly to the verified local coordination desk.'}
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href={`tel:${communityDeskPhone.replace(/\s/g, '')}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: '#16A34A',
                    color: '#FFFFFF',
                    padding: '0.55rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.825rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  <PhoneCall size={14} />
                  <span>Call {communityDeskPhone}</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#334155',
                    marginBottom: '0.35rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {language === 'as' ? 'আপোনাৰ সম্পূৰ্ণ নাম' : 'Your Name'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={language === 'as' ? 'যেনে: প্ৰণৱ ডেকা' : 'e.g., Ananya Sharma'}
                  value={travelerName}
                  onChange={(e) => setTravelerName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.95rem',
                    borderRadius: '10px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.875rem',
                    color: '#0F172A',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#334155',
                      marginBottom: '0.35rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {language === 'as' ? 'ফোন / WhatsApp' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={travelerPhone}
                    onChange={(e) => setTravelerPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.95rem',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.875rem',
                      color: '#0F172A',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#334155',
                      marginBottom: '0.35rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {inquiryType === 'homestay'
                      ? language === 'as'
                        ? 'ভ্ৰমণৰ তাৰিখ'
                        : 'Travel Date'
                      : language === 'as'
                      ? 'অৰ্ডাৰৰ তাৰিখ'
                      : 'Required Date'}
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.95rem',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.875rem',
                      color: '#0F172A',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#334155',
                      marginBottom: '0.35rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {inquiryType === 'homestay'
                      ? language === 'as'
                        ? 'অতিথিৰ সংখ্যা'
                        : 'Guests Count'
                      : language === 'as'
                      ? 'বিচৰা সামগ্ৰীৰ সংখ্যা'
                      : 'Estimated Pieces'}
                  </label>
                  <select
                    value={guestsCount}
                    onChange={(e) => setGuestsCount(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.95rem',
                      borderRadius: '10px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.875rem',
                      color: '#0F172A',
                      background: '#FFFFFF',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  >
                    <option value="1">1 Person / Single Item</option>
                    <option value="2">2 Persons / Couple</option>
                    <option value="3-4">3 – 4 Persons (Family)</option>
                    <option value="5+">5+ Group / Custom Order</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#334155',
                      marginBottom: '0.35rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {language === 'as' ? 'প্ৰাথমিক যোগাযোগ' : 'Preferred Channel'}
                  </label>
                  <div
                    style={{
                      padding: '0.65rem 0.95rem',
                      background: '#F8FAFC',
                      borderRadius: '10px',
                      border: '1px solid #E2E8F0',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#0F172A',
                    }}
                  >
                    Instant WhatsApp & Call
                  </div>
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#334155',
                    marginBottom: '0.35rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {language === 'as' ? 'বিশেষ অনুৰোধ / বাৰ্তা' : 'Special Requirements or Notes'}
                </label>
                <textarea
                  rows={2}
                  placeholder={
                    inquiryType === 'homestay'
                      ? language === 'as'
                        ? 'যেনে: নিৰামিষ থলুৱা আহাৰৰ প্ৰয়োজন, পৰম্পৰাগত বাঁহৰ চাংঘৰত থাকিব বিচাৰোঁ...'
                        : 'e.g., Traditional Chang Ghar bamboo hut, ethnic Assamese thali meals...'
                      : language === 'as'
                      ? 'যেনে: শুৱালকুছিৰ প্ৰমাণিত মুগা চাদৰ-মেখেলা, সত্ৰীয়া কাঠৰ শিল্প...'
                      : 'e.g., Certified Golden Muga silk Mekhela Chador, Majuli mask craft...'
                  }
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.95rem',
                    borderRadius: '10px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.85rem',
                    color: '#0F172A',
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'none',
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                <button
                  type="submit"
                  style={{
                    flex: 1,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: '#25D366',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '0.75rem 1.25rem',
                    fontSize: '0.875rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <MessageCircle size={17} />
                  <span>
                    {language === 'as'
                      ? 'WhatsApp যোগে পোনপটীয়া সংযোগ'
                      : 'Connect via WhatsApp'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    background: '#F1F5F9',
                    color: '#334155',
                    border: '1px solid #CBD5E1',
                    borderRadius: '12px',
                    padding: '0.75rem 1.1rem',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  <Mail size={16} />
                  <span>Email</span>
                </button>
              </div>
            </div>
          )}

          {/* Trust Footnote */}
          <div
            style={{
              marginTop: '1.25rem',
              paddingTop: '0.85rem',
              borderTop: '1px solid #F1F5F9',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.725rem',
              color: '#64748B',
            }}
          >
            <ShieldCheck size={14} color="#059669" />
            <span>
              {language === 'as'
                ? '১০০% মধ্যভোগীবিহীন ব্যৱস্থা: সকলো ধন প্ৰত্যক্ষভাৱে থলুৱা পৰিয়াল আৰু শিপিনীৰ হাতলৈ যায়।'
                : '100% Commission-Free: All revenue goes directly to local indigenous hosts and handloom weavers.'}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
