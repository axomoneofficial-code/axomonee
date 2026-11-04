-- ============================================================================
-- AXOM ONE — Database Seed Data (Cloudflare D1 / SQLite)
-- Includes all 35 Districts of Assam, Categories, Listings, Events, Submissions,
-- and Initial Administrator Profile.
-- ============================================================================

-- 1. All 35 Administrative Districts of Assam
INSERT OR IGNORE INTO districts (id, name, slug, name_as, is_active, created_at) VALUES
('dist-kamrup-metro', 'Kamrup Metropolitan (Guwahati)', 'kamrup-metropolitan', 'কামৰূপ মহানগৰ', 1, '2026-10-01T00:00:00Z'),
('dist-baksa', 'Baksa', 'baksa', 'বাক্সা', 1, '2026-10-01T00:00:00Z'),
('dist-barpeta', 'Barpeta', 'barpeta', 'বৰপেটা', 1, '2026-10-01T00:00:00Z'),
('dist-bajali', 'Bajali', 'bajali', 'বজালী', 1, '2026-10-01T00:00:00Z'),
('dist-biswanath', 'Biswanath', 'biswanath', 'বিশ্বনাথ', 1, '2026-10-01T00:00:00Z'),
('dist-bongaigaon', 'Bongaigaon', 'bongaigaon', 'বঙাইগাঁও', 1, '2026-10-01T00:00:00Z'),
('dist-cachar', 'Cachar (Silchar)', 'cachar', 'কাছাৰ', 1, '2026-10-01T00:00:00Z'),
('dist-charaideo', 'Charaideo', 'charaideo', 'চৰাইদেউ', 1, '2026-10-01T00:00:00Z'),
('dist-chirang', 'Chirang', 'chirang', 'চিৰাং', 1, '2026-10-01T00:00:00Z'),
('dist-darrang', 'Darrang', 'darrang', 'দৰং', 1, '2026-10-01T00:00:00Z'),
('dist-dhemaji', 'Dhemaji', 'dhemaji', 'ধেমাযী', 1, '2026-10-01T00:00:00Z'),
('dist-dhubri', 'Dhubri', 'dhubri', 'ধুবুৰী', 1, '2026-10-01T00:00:00Z'),
('dist-dibrugarh', 'Dibrugarh', 'dibrugarh', 'ডিব্ৰুগড়', 1, '2026-10-01T00:00:00Z'),
('dist-dima-hasao', 'Dima Hasao (Haflong)', 'dima-hasao', 'ডিমা হাছাও', 1, '2026-10-01T00:00:00Z'),
('dist-goalpara', 'Goalpara', 'goalpara', 'গোৱালপাৰা', 1, '2026-10-01T00:00:00Z'),
('dist-golaghat', 'Golaghat', 'golaghat', 'গোলাঘাট', 1, '2026-10-01T00:00:00Z'),
('dist-hailakandi', 'Hailakandi', 'hailakandi', 'হাইলাকান্দি', 1, '2026-10-01T00:00:00Z'),
('dist-hojai', 'Hojai', 'hojai', 'হোজাই', 1, '2026-10-01T00:00:00Z'),
('dist-jorhat', 'Jorhat', 'jorhat', 'যোৰহাট', 1, '2026-10-01T00:00:00Z'),
('dist-kamrup', 'Kamrup (Rural)', 'kamrup-rural', 'কামৰূপ গ্ৰাম্য', 1, '2026-10-01T00:00:00Z'),
('dist-karbi-anglong', 'Karbi Anglong (Diphu)', 'karbi-anglong', 'কাৰ্বি আংলং', 1, '2026-10-01T00:00:00Z'),
('dist-karimganj', 'Karimganj', 'karimganj', 'কৰিমগঞ্জ', 1, '2026-10-01T00:00:00Z'),
('dist-kokrajhar', 'Kokrajhar', 'kokrajhar', 'কোকৰাঝাৰ', 1, '2026-10-01T00:00:00Z'),
('dist-lakhimpur', 'Lakhimpur', 'lakhimpur', 'লখিমপুৰ', 1, '2026-10-01T00:00:00Z'),
('dist-majuli', 'Majuli', 'majuli', 'মাজুলী', 1, '2026-10-01T00:00:00Z'),
('dist-morigaon', 'Morigaon', 'morigaon', 'মৰিগাঁও', 1, '2026-10-01T00:00:00Z'),
('dist-nagaon', 'Nagaon', 'nagaon', 'নগাঁও', 1, '2026-10-01T00:00:00Z'),
('dist-nalbari', 'Nalbari', 'nalbari', 'নলবাৰী', 1, '2026-10-01T00:00:00Z'),
('dist-sivasagar', 'Sivasagar', 'sivasagar', 'শিৱসাগৰ', 1, '2026-10-01T00:00:00Z'),
('dist-sonitpur', 'Sonitpur (Tezpur)', 'sonitpur', 'শোণিতপুৰ', 1, '2026-10-01T00:00:00Z'),
('dist-south-salmara', 'South Salmara-Mankachar', 'south-salmara-mankachar', 'দক্ষিণ শালমাৰা-মানকাচৰ', 1, '2026-10-01T00:00:00Z'),
('dist-tamulpur', 'Tamulpur', 'tamulpur', 'তামুলপুৰ', 1, '2026-10-01T00:00:00Z'),
('dist-tinsukia', 'Tinsukia', 'tinsukia', 'তিনিচুকীয়া', 1, '2026-10-01T00:00:00Z'),
('dist-udalguri', 'Udalguri', 'udalguri', 'ওদালগুৰি', 1, '2026-10-01T00:00:00Z'),
('dist-west-karbi', 'West Karbi Anglong (Hamren)', 'west-karbi-anglong', 'পশ্চিম কাৰ্বি আংলং', 1, '2026-10-01T00:00:00Z');

-- 2. Core Categories
INSERT OR IGNORE INTO categories (id, name, slug, description, icon, is_active, created_at) VALUES
('cat-businesses', 'Local Businesses', 'businesses', 'Local enterprises, handlooms, organic farming, craft workshops & bookstores', 'Store', 1, '2026-10-01T00:00:00Z'),
('cat-services', 'Essential Services', 'services', 'Emergency contacts, verified electricians, local mechanics, logistics & clinics', 'Wrench', 1, '2026-10-01T00:00:00Z'),
('cat-tourism', 'Tourism & Heritage', 'tourism', 'Historic sattras, national parks, river viewpoints & eco-stays', 'Compass', 1, '2026-10-01T00:00:00Z'),
('cat-opportunities', 'Opportunities & Jobs', 'opportunities', 'Apprenticeships, civil coaching notices, scholarships & youth training', 'GraduationCap', 1, '2026-10-01T00:00:00Z'),
('cat-community', 'Community Notices', 'community', 'Riverbank clean-ups, book fairs, cultural rehearsals & public alerts', 'Megaphone', 1, '2026-10-01T00:00:00Z'),
('cat-crafts', 'Art & Traditional Craft', 'crafts', 'Muga and Eri silk weavers, bell metal artisans & terracotta crafts', 'Palette', 1, '2026-10-01T00:00:00Z');

-- 3. Core Listings
INSERT OR IGNORE INTO listings (id, district_id, category_id, title, slug, description, listing_type, address, contact_email, contact_phone, website_url, opening_hours_json, image_key, source_url, verification_status, moderation_status, is_sponsored, created_at, updated_at, published_at) VALUES
(
    'list-sualkuchi-muga',
    'dist-kamrup',
    'cat-crafts',
    'Sualkuchi Silk Weavers Cooperative',
    'sualkuchi-silk-weavers-cooperative',
    'Generational handloom collective producing certified GI-tagged Golden Muga and Pat silk mekhela sador and stoles. Authentic Assamese motifs woven on traditional throw-shuttle looms.',
    'business',
    'Bhattapara, Sualkuchi, Kamrup District, Assam 781103',
    'contact@sualkuchisilk.org.in',
    '+91-361-2830114',
    'https://example.com/sualkuchi-silk',
    '{"monday":"09:00 - 18:00","tuesday":"09:00 - 18:00","wednesday":"09:00 - 18:00","thursday":"09:00 - 18:00","friday":"09:00 - 18:00","saturday":"09:00 - 17:00","sunday":"Closed"}',
    'sualkuchi-muga.jpg',
    'https://example.com/crafts/sualkuchi',
    'verified',
    'published',
    1,
    '2026-10-15T09:00:00Z',
    '2026-10-25T11:00:00Z',
    '2026-10-15T10:00:00Z'
),
(
    'list-kaziranga-ecotour',
    'dist-golaghat',
    'cat-tourism',
    'Kohora Community Safari Guides & Birdwatching Circle',
    'kohora-community-safari-guides',
    'Registered naturalists and community safari drivers offering ethical wildlife spotting and buffer zone bird walks around Kaziranga UNESCO World Heritage Site.',
    'tourism',
    'Near Range Office, Kohora Central Range, Golaghat, Assam 785609',
    'bookings@kazirangaecotrail.org',
    '+91-3776-262423',
    'https://example.com/kaziranga-community-guides',
    '{"daily":"05:30 - 17:00"}',
    'kaziranga-rhino.jpg',
    'https://example.com/eco-tourism',
    'verified',
    'published',
    0,
    '2026-10-18T10:00:00Z',
    '2026-10-18T10:00:00Z',
    '2026-10-18T12:00:00Z'
),
(
    'list-guwahati-repair-hub',
    'dist-kamrup-metro',
    'cat-services',
    'Brahmaputra Home Appliance & Solar Inverter Works',
    'brahmaputra-appliance-solar-works',
    'Experienced local electrical and solar inverter maintenance service operating across Guwahati East and West. Transparent diagnostics and doorstep service.',
    'service',
    'Beltola Tiniali, Opposite Public Library, Guwahati 781028',
    'support@brahmaputraworks.in',
    '+91-98640-12345',
    'https://example.com/brahmaputra-works',
    '{"monday_to_saturday":"08:30 - 19:30"}',
    'electrical-tools.jpg',
    NULL,
    'unverified',
    'published',
    0,
    '2026-10-20T14:00:00Z',
    '2026-10-20T14:00:00Z',
    '2026-10-20T14:30:00Z'
),
(
    'list-assam-stem-internship',
    'dist-kamrup-metro',
    'cat-opportunities',
    'Assam State Renewable Energy Research Fellowship 2026',
    'assam-state-renewable-energy-fellowship',
    'Six-month paid internship opportunity for engineering and environmental science graduates focusing on solar microgrids and flood-resilient community energy.',
    'opportunity',
    'Guwahati Biotech Park, Amingaon, Guwahati 781031',
    'careers@greenenergyassam.org',
    '+91-361-2690022',
    'https://example.com/assam-fellowships',
    '{"office_hours":"10:00 - 17:00 Weekdays"}',
    NULL,
    'https://example.com/notice/fellowship-2026',
    'verified',
    'published',
    0,
    '2026-10-22T08:00:00Z',
    '2026-10-22T08:00:00Z',
    '2026-10-22T09:00:00Z'
),
(
    'list-sarthebari-bellmetal',
    'dist-barpeta',
    'cat-crafts',
    'Sarthebari Bell Metal Cooperative Society',
    'sarthebari-bell-metal-cooperative',
    'Centuries-old bell-metal guild producing traditional Ban-Bati, Kahi, and Sarai hand-forged by master coppersmiths. High acoustic resonance and traditional health benefits.',
    'business',
    'Main Bazaar, Sarthebari, Barpeta District, Assam 781307',
    'guild@sarthebaribellmetal.co.in',
    '+91-3665-242101',
    'https://example.com/sarthebari-bellmetal',
    '{"daily":"09:00 - 18:00"}',
    'bellmetal-sarai.jpg',
    'https://example.com/crafts/bellmetal',
    'verified',
    'published',
    0,
    '2026-10-24T12:00:00Z',
    '2026-10-24T12:00:00Z',
    '2026-10-24T13:00:00Z'
);

-- 4. Sample Community Events
INSERT OR IGNORE INTO events (id, district_id, title, slug, description, venue, start_at, end_at, organizer, source_url, moderation_status, created_at) VALUES
(
    'evt-majuli-raas-2026',
    'dist-majuli',
    'Majuli Raas Mahotsav 2026',
    'majuli-raas-mahotsav-2026',
    'Annual Vaishnavite cultural festival celebrating Krishna Leela through classical Sattriya drama, Mukha clay mask-acting, and all-night devotional Bhaona theatre across 65+ historic Sattras of Majuli island.',
    'Kamalabari, Auniati, Garamur & Dakhinpat Satra Grounds, Majuli',
    '2026-11-15T18:00:00Z',
    '2026-11-18T23:30:00Z',
    'Majuli Raas Celebration Committee & Central Satra Mahasabha',
    'https://majuli.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-guwahati-book-fair',
    'dist-kamrup-metro',
    'Assam International Book Fair & Literary Conclave',
    'assam-international-book-fair-guwahati',
    'Northeast India''s premier 14-day book fair bringing together over 150 publishing houses, Assamese and Bodo translation seminars, multilingual poetry recitals, and public literary interactions.',
    'Veterinary College Playground, Khanapara, Guwahati',
    '2026-12-24T10:00:00Z',
    '2027-01-06T20:30:00Z',
    'Publication Board Assam & All Assam Publishers and Booksellers Association',
    'https://publicationboardassam.com/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-jonbeel-mela-2027',
    'dist-morigaon',
    'Jonbeel Mela 2027 (Ancient Barter Fair)',
    'jonbeel-mela-historic-barter-fair',
    'A 500-year-old historic barter fair on the banks of water body Jonbeel where hill communities (Tiwa, Karbi, Khasi, Jaintia) exchange indigenous hill produce for chira, pitha, and dry fish without monetary currency.',
    'Dayang Belguri Field, near Jagiroad, Morigaon',
    '2027-01-14T06:00:00Z',
    '2027-01-16T18:00:00Z',
    'Gova Deo Raja & Jonbeel Mela Development Committee',
    'https://morigaon.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-me-dam-me-phi-2027',
    'dist-sivasagar',
    'State Me-Dam-Me-Phi Ancestral Observance 2027',
    'state-me-dam-me-phi-sivasagar-2027',
    'The sacred annual ancestral remembrance festival of the Tai-Ahom community. Ritual oblations, Phuralong prayers, and community cultural gatherings honoring forefathers for peace and prosperity across Assam.',
    'Rang Ghar Bakori & Historic Talatal Ghar Complex, Sivasagar',
    '2027-01-31T08:00:00Z',
    '2027-01-31T21:00:00Z',
    'Directorate of Cultural Affairs, Assam & All Tai Ahom Council',
    'https://sivasagar.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-karbi-youth-festival-2027',
    'dist-karbi-anglong',
    '53rd Karbi Youth Festival (Taralangso)',
    'karbi-youth-festival-taralangso-diphu',
    'Northeast India''s largest and oldest ethnic cultural celebration, bringing together over 3,000 artists showcasing traditional Karbi music, Chong-Kedam dance, tribal handloom weaves, and bamboo architecture.',
    'Taralangso Cultural Complex, Diphu, Karbi Anglong',
    '2027-02-15T09:00:00Z',
    '2027-02-19T22:00:00Z',
    'Karbi Cultural Society (KCS Diphu)',
    'https://karbianglong.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-ali-aye-ligang-2027',
    'dist-dhemaji',
    'Central Ali-Aye-Ligang Spring Festival',
    'ali-aye-ligang-spring-festival-dhemaji',
    'The joyful pre-harvest agricultural celebration of the Mising community marking the start of Ahu paddy sowing. Features the ceremonial seed-sowing ritual, Gumrag folk dance, Oi-Nitom ballads, and ethnic cuisine.',
    'Murkongselek Tribal Cultural Field, Jonai, Dhemaji',
    '2027-02-17T09:30:00Z',
    '2027-02-19T20:00:00Z',
    'Mising Mime Kebang & All Mising Cultural Council',
    'https://dhemaji.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-barpeta-doul-2027',
    'dist-barpeta',
    'Barpeta Satra Doul Utsav (Holi of the Sattras)',
    'barpeta-satra-doul-utsav-holi',
    'A 5-day historic Vaishnavite celebration founded by Mahapurusha Madhavadeva. Devotees chant soul-stirring Holi Geets, play with natural herbal phaku powders, and conduct the grand Suweri procession of Lord Doul Govinda.',
    'Sri Sri Barpeta Satra Compound, Barpeta',
    '2027-03-22T08:00:00Z',
    '2027-03-26T21:00:00Z',
    'Sri Sri Barpeta Satra Management Committee',
    'https://barpeta.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-latasil-bohag-bihu-2027',
    'dist-kamrup-metro',
    'Guwahati Latasil State Rongali Bihu Sanmilan',
    'guwahati-latasil-state-rongali-bihu-sanmilan',
    'Assam''s historic open-air stage celebrating the onset of spring and the Assamese New Year. Showcases state-level Mukoli Bihu competitions, Dhulia drum & Pepa horn virtuosos, Bihu Kuwori pageantry, and traditional gamusa felicitations.',
    'Latasil Playground & Judges Field, Guwahati',
    '2027-04-14T07:00:00Z',
    '2027-04-17T23:30:00Z',
    'Gauhati Bihu Sanmilan (Estd. 1952)',
    'https://kamrupmetro.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-bwisagu-kokrajhar-2027',
    'dist-kokrajhar',
    'Bwisagu Spring Utsav & Baokhungri Festival',
    'bwisagu-spring-utsav-baokhungri-kokrajhar',
    'The spirited spring festival of the Bodo community honoring ancestral spirits and Bathou worship. Highlighted by the graceful Bagurumba butterfly dance, Sifung flute recitals, and the traditional Baokhungri hill-trekking expedition.',
    'Baokhungri Hill Premises & Harinaguri Cultural Ground, Kokrajhar',
    '2027-04-13T08:00:00Z',
    '2027-04-16T20:00:00Z',
    'Bodoland Tourism & Kokrajhar Bwisagu Celebration Committee',
    'https://bodoland.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-ambubachi-kamakhya-2027',
    'dist-kamrup-metro',
    'Ambubachi Mahayoga & Cultural Conclave',
    'ambubachi-mahayoga-kamakhya-temple',
    'Eastern India''s most renowned spiritual gathering observing the annual fertility cycle of Mother Earth at Nilachal Hills. Features sacred bhajan-kirtan, Baul mystic melodies, and community pilgrim seva welcoming lakhs from all over India.',
    'Maa Kamakhya Devalaya Complex, Nilachal Hills, Guwahati',
    '2027-06-22T06:00:00Z',
    '2027-06-26T18:00:00Z',
    'Kamakhya Bordeuri Samaj & Assam Tourism Development Corporation',
    'https://kamakhya.org.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-sualkuchi-silk-expo-2026',
    'dist-kamrup',
    'Sualkuchi Golden Silk & Handloom Weaving Conclave',
    'sualkuchi-golden-silk-handloom-conclave',
    'A celebration of Assam''s rich sericulture tradition in the ''Silk Village of Assam''. Features master weaver jacquard loom demonstrations, authentic GI-tagged Muga and Eri silk exhibitions, and fair-trade artisan pavilions.',
    'Gandhi Maidan & Sualkuchi Resham Udyog Ground, Sualkuchi',
    '2026-11-05T10:00:00Z',
    '2026-11-08T19:00:00Z',
    'Sualkuchi Tat-Silpi Samiti & Assam Directorate of Handloom & Textiles',
    'https://kamrup.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-nalbari-raas-2026',
    'dist-nalbari',
    'Nalbari Sri Sri Hari Mandir Raas Mahotsav',
    'nalbari-sri-sri-hari-mandir-raas-mahotsav',
    'Lower Assam''s celebrated 13-day cultural festival featuring over 100 life-sized clay idol tableaux depicting stories from the Srimad Bhagavata, illuminated ornamental gateways, and open-air Bhaona theatre.',
    'Sri Sri Hari Mandir Complex, Nalbari Town',
    '2026-11-15T17:00:00Z',
    '2026-11-27T23:00:00Z',
    'Nalbari Raas Mahotsav Celebration Committee',
    'https://nalbari.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-assam-tea-festival-2027',
    'dist-jorhat',
    'Assam State Heritage Tea Festival & Golf Cup',
    'assam-state-heritage-tea-festival-jorhat',
    'Celebrating the birthplace of Assam tea with orthodox tea-tasting masterclasses, heritage bungalow tours, tea garden worker folk Jhumur dance, and competitive amateur golf at the historic Jorhat Gymkhana.',
    'Jorhat Gymkhana Club & Cinnamara Heritage Tea Estate, Jorhat',
    '2027-01-22T09:00:00Z',
    '2027-01-24T18:00:00Z',
    'Assam Tourism Development Corporation & Tea Board of India',
    'https://jorhat.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-dihing-patkai-festival-2027',
    'dist-tinsukia',
    'Dihing Patkai Rainforest & Heritage Festival',
    'dihing-patkai-rainforest-heritage-festival',
    'An eco-cultural confluence celebrating the ''Amazon of the East''. Features heritage excursions to the WWII historic Stilwell Road, Digboi Oil Centenary tours, Tai-Phake traditional village visits, and Patkai nature trail walks.',
    'Lekhapani & Ledo Festival Grounds, Tinsukia',
    '2027-01-28T09:30:00Z',
    '2027-01-31T20:00:00Z',
    'Tinsukia District Administration & Forest Department',
    'https://tinsukia.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-judima-festival-2026',
    'dist-dima-hasao',
    'Judima Indigenous Gastronomy & Folk Festival',
    'judima-indigenous-gastronomy-folk-festival',
    'Celebrates the GI-tagged traditional herbal rice brew ''Judima'' of the Dimasa community. Features indigenous tribal culinary masterclasses, folk concerts, traditional sports, and panoramic views of Haflong hill amphitheatre.',
    'Gunjung Cultural Field, near Haflong, Dima Hasao',
    '2026-12-18T10:00:00Z',
    '2026-12-20T21:00:00Z',
    'Youth Association for Development and Empowerment (YADEM)',
    'https://dimahasao.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-namami-barak-2026',
    'dist-cachar',
    'Barak Valley Heritage & River Conclave',
    'barak-valley-heritage-river-conclave-silchar',
    'A cultural festival celebrating the historic Barak river basin. Features classical Dhrupad and Baul musical evenings, Sylheti folk drama, watermanship displays, and indigenous bamboo & cane craft exhibitions.',
    'Barak Riverfront & Gandhi Mela Grounds, Silchar, Cachar',
    '2026-11-28T09:00:00Z',
    '2026-11-30T21:30:00Z',
    'Cachar District Administration & Barak Cultural Forum',
    'https://cachar.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-chandubi-festival-2027',
    'dist-kamrup',
    'Chandubi Lake Eco & Tribal Cultural Festival',
    'chandubi-lake-eco-tribal-festival-mirza',
    'An annual New Year lake-side gathering promoting environmental conservation and the rich folk heritage of the Rabha and Garo communities. Features boat rowing contests, ethnic food stalls, and traditional hand-woven textiles.',
    'Chandubi Lake Banks, Rajapara-Mirza, Kamrup',
    '2027-01-01T08:30:00Z',
    '2027-01-05T19:00:00Z',
    'Chandubi Festival Celebration Committee',
    'https://kamrup.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-brahmaputra-heritage-tezpur-2027',
    'dist-sonitpur',
    'Brahmaputra Heritage Sandbar Cultural Conclave',
    'brahmaputra-heritage-sandbar-conclave-tezpur',
    'Set on the golden sandbanks of the Brahmaputra overlooking historic Agnigarh hill. Celebrates classical Borgeet recitals, traditional boat racing, river ecology talks, and open-air folk theatre performances.',
    'Agnigarh & Bhomoraguri Sandbars, Tezpur, Sonitpur',
    '2027-01-08T09:00:00Z',
    '2027-01-10T19:00:00Z',
    'Sonitpur Heritage Society & Tezpur Tourism Circle',
    'https://sonitpur.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-baiko-festival-goalpara-2027',
    'dist-goalpara',
    'Central Baiko Spring Festival of the Rabhas',
    'central-baiko-spring-festival-rabha-goalpara',
    'The sacred spring festival celebrated by the Rabha community to worship the deity of wealth and crops. Witness traditional purifying fire-walking rituals, Nak-Chhungi dances, and prayers for abundant harvest.',
    'Dudhnoi Tribal Cultural Ground, Goalpara',
    '2027-05-18T08:00:00Z',
    '2027-05-20T20:00:00Z',
    'All Rabha Cultural Council & Dudhnoi Community Committee',
    'https://goalpara.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-bhogali-bihu-sivasagar-2027',
    'dist-sivasagar',
    'Rang Ghar Historic Bhogali Meji & Folk Games',
    'rang-ghar-bhogali-meji-folk-games-sivasagar',
    'A grand community Magh Bihu gathering at the historic Ahom royal amphitheatre. Features community Meji bonfire lighting, egg-fight and buffalo-fight folk sports exhibitions, and traditional pitha-laru culinary sharing.',
    'Rang Ghar Bakori, Joysagar, Sivasagar',
    '2027-01-14T05:30:00Z',
    '2027-01-16T18:00:00Z',
    'Sivasagar District Cultural Society & Bihu Celebration Board',
    'https://sivasagar.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
),
(
    'evt-howli-raas-mahotsav-2026',
    'dist-barpeta',
    'Historic Howly Raas Mahotsav 2026',
    'historic-howly-raas-mahotsav-barpeta',
    'Celebrated since 1928, the Howly Raas Mahotsav in Barpeta district is one of Assams largest and most magnificent 15-day community Raas festivals. Famous for over a hundred electrically animated clay dioramas depicting Lord Krishnas divine Leela, towering illuminated welcome gates, Thiya Naam recitals, Oja-Pali, and nightly theatrical bhaonas.',
    'Howly Raas Mandir & Mandir Grounds, Howly Chariali, Barpeta District',
    '2026-11-24T17:00:00Z',
    '2026-12-08T23:00:00Z',
    'Howly Raas Mahotsav Celebration Committee',
    'https://barpeta.assam.gov.in/',
    'published',
    '2026-10-26T10:00:00Z'
);

-- 5. Sample Submissions (Pending Moderation Queue)
INSERT OR IGNORE INTO submissions (id, listing_id, submitter_name, submitter_email, submission_type, payload_json, moderation_status, reviewer_notes, created_at, reviewed_at) VALUES
(
    'sub-101',
    NULL,
    'Debabrata Gogoi',
    'dgogoi@assamteaheritage.test',
    'business',
    '{"title":"Brahmaputra Organic Green Tea Garden Depot","category_slug":"businesses","district_slug":"jorhat","description":"Smallholder artisanal hand-rolled orthodox and green tea direct from Cinnamara tea gardens. Free tasting and estate tours on weekends.","address":"Cinnamara Ali, Jorhat 785008","contact_phone":"+91-94350-98765","contact_email":"info@assamteaheritage.test"}',
    'pending',
    NULL,
    '2026-10-30T14:20:00Z',
    NULL
);

-- 6. Sample User Reports
INSERT OR IGNORE INTO reports (id, listing_id, reason, description, reporter_contact, status, created_at, resolved_at) VALUES
(
    'rep-201',
    'list-guwahati-repair-hub',
    'Incorrect Weekend Hours',
    'The shop is closed on Sunday afternoon, but listing says daily until 19:30. Please verify with owner.',
    'citizen.observer@guwahati.test',
    'pending',
    '2026-10-30T16:00:00Z',
    NULL
);

-- 7. Initial Seed Administrator (Password: AxomOne2026!Admin)
-- Stored with SHA-256 / PBKDF2 hash: salt $ pbkdf2 $ 100000 iterations
INSERT OR IGNORE INTO admin_users (id, email, password_hash, role, is_active, created_at, last_login_at) VALUES
(
    'usr-superadmin-01',
    'admin@axomone.local',
    'pbkdf2:100000:axomsalt2026:ba341602538f9459035dfef08dbdc59c581eb9b5bb446dc2397ca12af14031a0',
    'superadmin',
    1,
    '2026-10-01T00:00:00Z',
    '2026-10-31T09:00:00Z'
);

-- 6. Verified Tourism Destinations
INSERT OR IGNORE INTO destinations (
    id, slug, name, name_as, name_hi, category, district, district_slug, locality,
    short_description, full_description, official_website, source_url, image_url,
    image_attribution, latitude, longitude, best_season, access_notes, opening_hours,
    entry_fee, last_verified_at, status, language_json, created_at, updated_at
) VALUES
(
    'tour-kaziranga', 'kaziranga', 'Kaziranga National Park', 'কাজিৰঙা ৰাষ্ট্ৰীয় উদ্যান', 'Kaziranga National Park', 'wildlife-birdwatching', 'Golaghat / Nagaon / Sonitpur', 'golaghat', 'Kohora & Bagori Ranges, Bokakhat',
    'UNESCO World Heritage Site & Global Stronghold of the Great Indian One-Horned Rhino', 'Spanning 858 sq km across the alluvial floodplains of the Brahmaputra, Kaziranga was declared a UNESCO World Heritage Site in 1985. It shelters over 2,600 Great Indian One-Horned Rhinoceroses—representing over two-thirds of the global population. Kaziranga also boasts one of the highest densities of Royal Bengal Tigers in the world, alongside wild Asiatic water buffaloes, Asian elephants, and the critically endangered Eastern swamp deer (Barasingha).', 'https://kaziranga.assam.gov.in/', 'https://kaziranga.assam.gov.in/', '/images/destinations/kaziranga.jpg',
    'Photo: Diganta Talukdar (CC BY-SA 4.0 via Wikimedia Commons)', 26.5775, 93.1711, 'November to April (Park open for safaris; closed during monsoon)', 'Guwahati Airport (217 km) / Jorhat Airport (97 km) / Furkating Junction (75 km)', '06:00 - 16:30 daily during open season (Safaris at 07:30 & 13:30)',
    'Assam Forest Dept official online safari portal (kazirangasafari.in) & Range Counters', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-charaideo', 'charaideo', 'Charaideo Moidams (Ahom Royal Pyramids)', 'চৰাইদেউ মৈদাম', 'Charaideo Moidams (Ahom Royal Pyramids)', 'heritage-historic', 'Charaideo', 'charaideo', 'Patkai Foothills, Sonari',
    'UNESCO World Heritage Site (2024) — Sacred Vaulted Burial Mounds of the Ahom Kings', 'Inscribed on the UNESCO World Heritage List in July 2024 as India''s 43rd World Heritage property, Charaideo was the first capital established by Chao Lung Siu-Ka-Pha in 1253 CE. The site preserves over 90 vaulted earthen tumuli (Moidams)—hollow vaulted brick-and-stone chambers covered under hemispherical earthen mounds resembling Egyptian pyramids—enshrining the mortal remains of the revered Swargadeos (Ahom Kings) and queens together with their royal regalia.', 'https://asi.nic.in/', 'https://asi.nic.in/', '/images/destinations/charaideo.jpg',
    'Photo: Jim Ankan Deka (CC BY-SA 3.0 via Wikimedia Commons)', 26.9388, 94.8703, 'October to April (Pleasant dry winter season)', 'Jorhat Airport (85 km) / Dibrugarh Airport (110 km) / Simaluguri Junction (28 km)', '09:00 - 17:00 daily (ASI ticket counter open until 16:30)',
    'Archaeological Survey of India (ASI) ticketed entry at site counter and online', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-kamakhya', 'kamakhya', 'Maa Kamakhya Devalaya & Nilachal Hill', 'মা কামাখ্যা দেৱালয় (নীলাচল পাহাৰ)', 'Maa Kamakhya Devalaya & Nilachal Hill', 'heritage-historic', 'Kamrup Metropolitan', 'kamrup-metropolitan', 'Nilachal Hill, Guwahati',
    'Foremost Shakti Peetha of India & Center of Tantric Spiritual Worship', 'Perched atop sacred Nilachal Hill overlooking the Brahmaputra, Kamakhya is the highest center of Shakti worship in South Asia. In the inner subterranean sanctum (Garbagriha), there is no idol; instead, the goddess is worshipped as a natural yoni-shaped stone fissure fed by an underground perennial spring. Rebuilt by King Nara Narayana of the Koch dynasty in 1565 CE, the temple exhibits the iconic hybrid Nilachal architecture with a multi-sided cruciform base and bee-hive dome spire.', 'https://kamakhya.assam.gov.in/', 'https://kamakhya.assam.gov.in/', '/images/destinations/kamakhya.jpg',
    'Photo: Kunal Dalui (CC BY-SA 3.0 via Wikimedia Commons)', 26.1664, 91.7054, 'September to April (Festival: Ambubachi Mela in late June; Durga Puja in Oct)', 'Guwahati Railway Station (6 km) / Lokpriya Gopinath Bordoloi Airport (18 km)', '05:30 - 20:00 daily (inner sanctum closes 13:00-14:30 for bhog)',
    'General entry free; Special darshan passes available through Kamakhya Devalaya Trust', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-rang-ghar', 'rang-ghar', 'Rang Ghar (Ahom Royal Amphitheatre)', 'ৰংঘৰ (আহোম ৰাজকীয় পেভিলিয়ন)', 'Rang Ghar (Ahom Royal Amphitheatre)', 'heritage-historic', 'Sivasagar', 'sivasagar', 'Rupahi Pathar, Joysagar, Sivasagar',
    'Asia''s Oldest Surviving Sports Pavilion & Architectural Emblem of Assam', 'Constructed in 1744 CE by the Ahom king Swargadeo Pramatta Singha, Rang Ghar (''House of Entertainment'') is considered Asia''s oldest surviving amphitheater. The two-storied oval building served as the royal sports pavilion from which Ahom royalty and dignitaries watched traditional sports, wrestling, and buffalo fights during the Rongali Bihu festival. Its distinctive roof is shaped like an inverted Ahom royal longboat adorned with a stone crocodile carving at each end.', 'https://sivasagar.assam.gov.in/', 'https://sivasagar.assam.gov.in/', '/images/destinations/rang-ghar.jpg',
    'Photo: Dhruba Jyoti Baruah (CC BY-SA 4.0 via Wikimedia Commons)', 26.966, 94.6225, 'October to April', 'Jorhat Airport (55 km) / Sivasagar Town Railway Station (4 km)', '09:00 - 17:00 daily',
    'Archaeological Survey of India (ASI) ticketed entry', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-talatal-ghar', 'talatal-ghar', 'Talatal Ghar & Kareng Ghar Royal Palaces', 'তলাতল ঘৰ আৰু কাৰেং ঘৰ', 'Talatal Ghar & Kareng Ghar Royal Palaces', 'heritage-historic', 'Sivasagar', 'sivasagar', 'Gargaon & Rangpur, Sivasagar',
    'Secret Multi-Level Underground Royal Palace & Military Bastion of the Ahoms', 'Built by Swargadeo Rudra Singha in 1698 CE and expanded by his successors, Talatal Ghar at Rangpur was the grandest architectural achievement of the Ahom dynasty. The complex consists of seven stories: three underground levels (used as secret escape passages, royal stables, and arsenals) and four upper floors. Nearby Gargaon houses Kareng Ghar, the magnificent multi-tiered wood and brick palace of the Ahom sovereigns.', 'https://asi.nic.in/', 'https://asi.nic.in/', '/images/destinations/talatal-ghar.jpg',
    'Photo: Subhashish Panigrahi (CC BY-SA 3.0 via Wikimedia Commons)', 26.9744, 94.6366, 'October to April', 'Jorhat Airport (60 km) / Simaluguri Junction (16 km)', '09:00 - 17:00 daily',
    'ASI Monument Ticket Counter & Online Portal', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-sivadol', 'sivadol', 'Sivasagar Sivadol & Borpukhuri Lake', 'শিৱসাগৰ শিৱদৌল আৰু বৰপুখুৰী', 'Sivasagar Sivadol & Borpukhuri Lake', 'heritage-historic', 'Sivasagar', 'sivasagar', 'Sivasagar Town Center',
    'Tallest Historical Shiva Temple Tower in India (104 ft) Beside an Imperial Lake', 'Commissioned in 1734 CE by Queen Bar Raja Ambika, consort of King Shiva Singha, Sivasagar Sivadol stands at an imposing 104 feet (32 meters), making it the tallest historical Shiva temple spire in the Indian subcontinent. It is crowned with an 8-foot pure gold mastaka (Kalasha). The temple stands on the banks of Borpukhuri (Sivasagar tank), an enormous 257-acre artificial lake whose water level naturally stays above the town''s ground level.', 'https://sivasagar.assam.gov.in/', 'https://sivasagar.assam.gov.in/', '/images/destinations/sivadol.jpg',
    'Photo: Gitartha Bordoloi (CC BY-SA 3.0 via Wikimedia Commons)', 26.985, 94.6378, 'October to April (Special: Maha Shivaratri in Feb/March draws 300,000 pilgrims)', 'Sivasagar Town Railway Station (2 km) / Jorhat Airport (55 km)', '06:00 - 20:00 daily',
    'Open entry daily; temple darshan morning and evening', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-majuli', 'majuli', 'Majuli River Island & Sattras', 'মাজুলী নদীদ্বীপ আৰু সত্ৰীয়া সংস্কৃতি', 'Majuli River Island & Sattras', 'river-experiences', 'Majuli', 'majuli', 'Garamur, Kamalabari, Samaguri & Auniati',
    'World''s Largest Inhabited River Island & Cradle of Neo-Vaishnavite Culture', 'Formed by the shifting confluence of the Brahmaputra and Subansiri rivers, Majuli is the largest inhabited river island in the world. Established by the 15th-century polymath and social reformer Srimanta Sankardev, Majuli has been the heart of Assam''s Neo-Vaishnavite culture for 500 years. It houses living monastic institutions (Sattras), where celibate monks practice ancient Sattriya dance (one of India''s 8 classical dances), Ankiya Nat drama, and craft paper-and-bamboo masks.', 'https://majuli.assam.gov.in/', 'https://majuli.assam.gov.in/', '/images/destinations/majuli.jpg',
    'Photo: Gitartha Bordoloi (CC BY-SA 3.0 via Wikimedia Commons)', 26.9538, 94.2144, 'October to March (Special: Grand Raas Leela Festival in November)', 'Jorhat Airport (20 km to Nimati Ghat + 1-hour scenic ferry) / Jorhat Station', 'Sattras open 08:00 - 17:00 daily; Ro-Pax ferry runs 07:00 - 16:00',
    'Open island access; Ferry tickets available at Nimati Ghat Inland Waterways counter', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-manas', 'manas', 'Manas National Park & Biosphere Reserve', 'মানাহ ৰাষ্ট্ৰীয় উদ্যান', 'Manas National Park & Biosphere Reserve', 'wildlife-birdwatching', 'Baksa / Chirang (BTR)', 'baksa', 'Foothills of Bhutan, Barpeta Road',
    'UNESCO World Heritage Natural Site, Project Tiger & Golden Langur Biosphere', 'Located in the foothills of the Eastern Himalayas and contiguous with Royal Manas National Park in Bhutan, Manas covers 950 sq km of pristine alluvial grasslands, semi-evergreen forests, and crystal-clear mountain rivers. It holds five conservation designations: UNESCO World Heritage Site, Project Tiger Reserve, Elephant Reserve, Biosphere Reserve, and Important Bird Area. Famous for rare and endangered endemic species found nowhere else on earth.', 'https://forest.assam.gov.in/portlets/manas-national-park', 'https://forest.assam.gov.in/portlets/manas-national-park', '/images/destinations/manas.jpg',
    'Photo: Chandan Jyoti Sarma (CC BY-SA 4.0 via Wikimedia Commons)', 26.7161, 91.0333, 'October to May', 'Guwahati Airport (176 km) / Barpeta Road Railway Station (32 km)', '06:00 - 16:30 daily during open season (Nov - Apr)',
    'BTR Tourism & Assam Forest Dept (Online & Bansbari Range Gate)', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-tea-country', 'tea-country', 'Jorhat & Dibrugarh Historic Tea Estates', 'যোৰহাট আৰু ডিব্ৰুগড়ৰ ঐতিহ্যমণ্ডিত চাহ বাগিচা', 'Jorhat & Dibrugarh Historic Tea Estates', 'tea-tourism', 'Jorhat / Dibrugarh', 'jorhat', 'Cinnamara, Tocklai, Heritage Tea Estates',
    'World''s Tea Capital, Heritage Planter Bungalows & Historic 1876 Golf Greens', 'Assam is the single largest tea-growing region on earth, producing world-renowned malty, rich black teas. Jorhat is known as the ''Tea Capital of the World'', where Robert Bruce first discovered native Camellia sinensis var. assamica in 1823. Visitors stay in luxurious 19th-century colonial planter bungalows with expansive verandahs, explore Tocklai Tea Research Institute (the oldest in the world, founded in 1911), and play on historic golf courses.', 'https://assamtourism.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/tea-country.jpg',
    'Photo: Subhashish Panigrahi (CC BY-SA 3.0 via Wikimedia Commons)', 26.7509, 94.2037, 'October to April (Tea harvesting & plucking: April to October)', 'Jorhat Airport (Rowriah) / Dibrugarh Airport (Mohanbari)', 'Tea factories: 09:00 - 16:00 weekdays; Bungalows 24/7 hospitality',
    'Direct booking with Heritage Tea Bungalow properties & Assam Tourism', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-nameri', 'nameri', 'Nameri National Park & Jia Bhoroli River', 'নামেৰি ৰাষ্ট্ৰীয় উদ্যান আৰু জিয়া ভৰলী', 'Nameri National Park & Jia Bhoroli River', 'wildlife-birdwatching', 'Sonitpur', 'sonitpur', 'Potasali, Foothills of Eastern Himalayas',
    'Angler''s Paradise, River Rafting & Stronghold of the White-Winged Wood Duck', 'Bordering Arunachal Pradesh along the crystal-clear Jia Bhoroli river, Nameri National Park covers 200 sq km of deciduous and semi-evergreen forests. It is one of the few national parks in India that permits walking safaris accompanied by armed forest rangers. Nameri is world-renowned among international ornithologists for over 300 species of birds, including the endangered White-Winged Wood Duck (Deo Hanh, Assam''s State Bird) and four hornbill species.', 'https://forest.assam.gov.in/portlets/nameri-national-park', 'https://forest.assam.gov.in/portlets/nameri-national-park', '/images/destinations/nameri.jpg',
    'Photo: Rituraj Dewan (CC BY-SA 4.0 via Wikimedia Commons)', 27.005, 92.7916, 'November to April', 'Tezpur Airport (35 km) / Guwahati Airport (195 km)', '06:00 - 16:00 daily during season (Forest walking trails by appointment)',
    'Assam Forest Dept range office at Potasali entry point', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-haflong', 'haflong', 'Haflong Hill Station & Haflong Lake', 'হাফলং পাহাৰ আৰু হাফলং হ্ৰদ', 'Haflong Hill Station & Haflong Lake', 'hills-waterfalls', 'Dima Hasao', 'dima-hasao', 'Barail Hill Range, Central Assam',
    'Assam''s Only Hill Station, Misty Barail Peaks & Emerald Blue Lake', 'Sitting at an altitude of 680 meters (2,230 ft) in the lush Barail mountain ranges, Haflong is the sole hill station in Assam. With its cool year-round climate, Haflong Lake at the town center with its suspension hanging bridge, pineapple and orange orchards, and rich Dimasa, Zeme Naga, and Hmar tribal traditions, it is celebrated as the ''Scotland of Assam''. Nearby Jatinga valley is famous for its misty vistas and seasonal bird phenomenon.', 'https://dimahasao.assam.gov.in/', 'https://dimahasao.assam.gov.in/', '/images/destinations/haflong.jpg',
    'Photo: Mike Prince (CC BY 2.0 via Wikimedia Commons)', 25.1764, 93.0185, 'September to May (Pleasant weather; crisp cool winters)', 'New Haflong Railway Station (Direct Vistadome train from Guwahati)', 'Open daily 24 hours; Boating at Haflong Lake: 09:00 - 17:00',
    'Open access; Dima Hasao Autonomous Council Tourism Desk', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-umananda', 'umananda', 'Umananda Peacock Island & Temple', 'উমানন্দ দেৱালয় (ময়ূৰ দ্বীপ)', 'Umananda Peacock Island & Temple', 'heritage-historic', 'Kamrup Metropolitan', 'kamrup-metropolitan', 'Brahmaputra River, Guwahati',
    'Smallest Inhabited River Island in the World & Ancient Shiva Shrine', 'Rising dramatically from the center of the mighty Brahmaputra river right opposite Guwahati''s city center, Umananda was christened ''Peacock Island'' by British administrators for its plumage-like shape. Built in 1694 CE by Swargadeo Gadadhar Singha, the temple is dedicated to Lord Shiva. The island is recognized by Guinness World Records as the smallest inhabited river island on earth, and is home to a protected group of endangered Golden Langurs.', 'https://kamrupmetro.assam.gov.in/', 'https://kamrupmetro.assam.gov.in/', '/images/destinations/umananda.jpg',
    'Photo: Subhashish Panigrahi (CC BY-SA 3.0 via Wikimedia Commons)', 26.1917, 91.7456, 'October to April', 'Guwahati Inland Waterways Ghat (Sukreswar Ghat / Uzanbazar)', '05:30 - 17:30 daily (Inland ferries every 20 minutes)',
    'Nominal ferry ticket at government inland waterways counter', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-hajo', 'hajo', 'Hajo Panchatirtha & Poa Mecca', 'হাজো পঞ্চতীৰ্থ আৰু পোৱা মক্কা', 'Hajo Panchatirtha & Poa Mecca', 'heritage-historic', 'Kamrup (Rural)', 'kamrup-rural', 'Monikut & Garurachal Hills, Hajo',
    'Sacred Historic Confluence of Hinduism, Buddhism, and Islam', 'Hajo is an extraordinary historic testament to interfaith harmony in Northeast India. The 16th-century Hayagriva Madhava Temple atop Monikut Hill is revered simultaneously by Hindus as an avatar of Vishnu and by Tibetan and Bhutanese Buddhists (who believe Mahamuni Buddha attained Parinirvana here). Atop adjacent Garurachal Hill rests Poa Mecca, an esteemed 17th-century Sufi pilgrimage shrine built by Mir Lutfullah Shirazi in 1657 CE.', 'https://kamrup.assam.gov.in/', 'https://kamrup.assam.gov.in/', '/images/destinations/hajo.jpg',
    'Photo: Dhruba Jyoti Baruah (CC BY-SA 4.0 via Wikimedia Commons)', 26.2483, 91.5278, 'October to April', 'Guwahati (30 km by road via Saraighat Bridge)', '06:00 - 18:00 daily',
    'Open entry to all pilgrimages and visitors', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-pobitora', 'pobitora', 'Pobitora Wildlife Sanctuary', 'পৱিতৰা অভয়াৰণ্য', 'Pobitora Wildlife Sanctuary', 'wildlife-birdwatching', 'Morigaon', 'morigaon', 'Mayong, Morigaon District',
    'Highest Density of One-Horned Rhinos in the World (Guaranteed Sightings)', 'Situated just 48 km east of Guwahati, Pobitora Wildlife Sanctuary holds the world''s highest density of Great Indian One-Horned Rhinos—over 100 rhinos thriving in just 38.8 sq km of grasslands and alluvial wetlands. Due to the compact size and abundant water bodies, wildlife sightings here are virtually guaranteed. The adjoining Haduk Beel wetland hosts thousands of winter migratory waterfowl.', 'https://morigaon.assam.gov.in/', 'https://morigaon.assam.gov.in/', '/images/destinations/pobitora.jpg',
    'Photo: Diganta Talukdar (CC BY-SA 4.0 via Wikimedia Commons)', 26.23, 92.05, 'November to April', 'Guwahati City (48 km by road via Chandrapur route)', '06:30 - 16:30 daily during safari season (Safaris at 07:00 & 13:30)',
    'Assam Forest Dept counter at Pobitora Entry Gate', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-namphake', 'namphake', 'Tai Phake Buddhist Village & Monastery', 'নামফাকে টাই বৌদ্ধ গাঁও', 'Tai Phake Buddhist Village & Monastery', 'handloom-crafts', 'Dibrugarh', 'dibrugarh', 'Naharkatia, Burhi Dihing River',
    'Living Tai Buddhist Cultural Heritage & Traditional Stilt Village', 'Established in 1850 along the meandering banks of the Burhi Dihing river, Namphake is an authentic cultural oasis inhabited by the Tai Phake community, who migrated from Myanmar in the late 18th century. The villagers speak an archaic Tai language, preserve ancient palm-leaf scriptures, and practice Theravada Buddhism. The village features traditional timber and bamboo chang-ghar (stilt homes) and a golden monastery pagoda.', 'https://dibrugarh.assam.gov.in/', 'https://dibrugarh.assam.gov.in/', '/images/destinations/namphake.jpg',
    'Photo: Deepjkalita (CC BY-SA 4.0 via Wikimedia Commons)', 27.32, 95.34, 'November to April', 'Dibrugarh Airport (60 km) / Naharkatia Railway Station (4 km)', '08:00 - 17:00 daily (Monastery prayer times at dawn & dusk)',
    'Open village entry; homestay bookings directly with community hosts', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-dehing-patkai', 'dehing-patkai', 'Dehing Patkai National Park (Amazon of the East)', 'দেহিং পাটকাই ৰাষ্ট্ৰীয় উদ্যান', 'Dehing Patkai National Park (Amazon of the East)', 'wildlife-birdwatching', 'Dibrugarh / Tinsukia', 'dibrugarh', 'Jeypore & Soraipung Ranges',
    'The Amazon of the East — Largest Lowland Tropical Rainforest in India', 'Spanning 231 sq km across the Patkai mountain foothills, Dehing Patkai is the largest contiguous stretch of lowland tropical wet evergreen rainforest in the Brahmaputra Valley. Its multi-tiered canopy is dominated by giant 50-meter Hollong trees (Dipterocarpus macrocarpus), Assam''s State Tree. It is the only forest in the world confirmed to harbor seven species of wild cats (including the clouded leopard, marbled cat, and golden cat).', 'https://forest.assam.gov.in/', 'https://forest.assam.gov.in/', '/images/destinations/dehing-patkai.jpg',
    'Photo: Rituraj Dewan (CC BY-SA 4.0 via Wikimedia Commons)', 27.2917, 95.4167, 'October to March', 'Dibrugarh Airport (70 km) / Digboi Railway Station (18 km)', '06:00 - 16:30 daily',
    'Assam Forest Dept entry at Jeypore Range Office', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-sualkuchi', 'sualkuchi', 'Sualkuchi Silk Weavers Village', 'শুৱালকুছি পাট-মুগাৰ বস্ত্ৰনগৰী', 'Sualkuchi Silk Weavers Village', 'handloom-crafts', 'Kamrup (Rural)', 'kamrup-rural', 'North Bank of Brahmaputra River',
    'Manchester of Assam — Generational Handlooms of Certified Golden Muga Silk', 'Situated on the north bank of the Brahmaputra, Sualkuchi is celebrated as the ''Manchester of Assam''. It is the epicenter of Assam''s GI-tagged Golden Muga Silk—an extraordinary golden filament produced exclusively in Assam by the semi-domesticated Antheraea assamensis silkworm, known for its natural golden sheen that intensifies with every wash. Walking through Sualkuchi, visitors hear the rhythmic clatter of over 25,000 wooden handlooms weaving Mekhela Sadors.', 'https://kamrup.assam.gov.in/', 'https://kamrup.assam.gov.in/', '/images/destinations/sualkuchi.jpg',
    'Photo: Dhruba Jyoti Baruah (CC BY-SA 4.0 via Wikimedia Commons)', 26.17, 91.57, 'October to April', 'Guwahati City (35 km by road via Jalukbari and Saraighat Bridge)', '09:00 - 18:00 daily (Weavers cooperatives and workshops open)',
    'Free public access; cooperative weaver societies open daily', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-brahmaputra-cruises', 'brahmaputra-cruises', 'Brahmaputra River Sunset & Expedition Cruises', 'ব্ৰহ্মপুত্ৰ নদীৰ সূৰ্যাস্ত আৰু বিলাসী ক্ৰুজ', 'Brahmaputra River Sunset & Expedition Cruises', 'river-experiences', 'Kamrup Metropolitan / Kaziranga / Majuli', 'kamrup-metropolitan', 'Guwahati Ghats to Silghat, Biswanath & Majuli',
    'Expedition Sailing Down the Mighty Red River of Assam', 'The Brahmaputra (meaning ''Son of Brahma'') is the lifeblood and cultural spine of Assam. Boarding boutique expedition vessels (such as MV Mahabaahu or twilight river ferries from Guwahati), travelers cruise down the river to witness Gangetic river dolphins (Xihu) surfacing against molten gold sunsets, uninhabited sandy river islands, riverside wildlife buffer safaris, and stargazing bonfires on remote sandbanks.', 'https://assamtourism.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/brahmaputra-cruises.jpg',
    'Photo: Arindam Banerjee (CC BY-SA 4.0 via Wikimedia Commons)', 26.1856, 91.7428, 'October to April (High water cruise season with calm currents)', 'Guwahati Inland Waterways Terminals (Pandu Ghat / Fancy Bazar Ghat)', 'Sunset sailings: 16:00 & 17:30 daily; Expedition cruises pre-scheduled',
    'Ticket booking with authorized cruise operators & Assam Tourism Corp', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-agnigarh', 'agnigarh', 'Agnigarh Hillock & Tezpur Cultural City', 'অগ্নিগড় আৰু তেজপুৰ সাংস্কৃতিক চহৰ', 'Agnigarh Hillock & Tezpur Cultural City', 'heritage-historic', 'Sonitpur', 'sonitpur', 'Riverbank Hill, Tezpur',
    'Mythological Fortress of Fire & The City of Eternal Romance', 'Perched on a dramatic circular hillock overlooking the Brahmaputra, Agnigarh (''Fortress of Fire'') is steeped in Hindu mythology. According to the Bhagavata Purana, King Banasura built this fortress surrounded by perpetual flames to isolate his daughter Princess Usha, where Prince Aniruddha (grandson of Lord Krishna) secretly courted her. Today, beautifully sculpted stone reliefs depicting the epic mythological war line the scenic winding pathways.', 'https://sonitpur.assam.gov.in/', 'https://sonitpur.assam.gov.in/', '/images/destinations/agnigarh.jpg',
    'Photo: Gitartha Bordoloi (CC BY-SA 3.0 via Wikimedia Commons)', 26.6214, 92.8028, 'October to April', 'Tezpur Airport (Salonibari - 10 km) / Guwahati (175 km)', '09:00 - 18:00 daily',
    'Tezpur Development Authority nominal entry ticket', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-dibru-saikhowa', 'dibru-saikhowa', 'Dibru-Saikhowa National Park & Maguri Beel', 'ডিব্ৰু-ছৈখোৱা ৰাষ্ট্ৰীয় উদ্যান আৰু মাগুৰী বিল', 'Dibru-Saikhowa National Park & Maguri Beel', 'wildlife-birdwatching', 'Tinsukia / Dibrugarh', 'tinsukia', 'Guijan Ghat, Tinsukia',
    'Flooded Island Wilderness, Feral Wild Horses & Gangetic River Dolphins', 'Encircled by the Brahmaputra, Lohit, and Dibru rivers in Upper Assam, Dibru-Saikhowa is one of the world''s most unique flooded island national parks. Following the historic 1950 Assam earthquake, army horses left behind went wild and formed famous herds of feral horses that gallop along the sandbanks today. Adjoining Maguri-Motapung Beel is an internationally renowned wetland paradise for birdwatchers.', 'https://tinsukia.assam.gov.in/', 'https://tinsukia.assam.gov.in/', '/images/destinations/dibru-saikhowa.jpg',
    'Photo: Subrat Gupta (CC BY-SA 4.0 via Wikimedia Commons)', 27.6667, 95.35, 'November to April', 'Dibrugarh Airport (45 km) / Tinsukia Railway Junction (12 km)', '06:30 - 16:30 daily during open season (Boat safaris from Guijan Ghat)',
    'Assam Forest Dept range counter at Guijan Ghat', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-monabarie-tea', 'monabarie-tea-estate', 'Monabarie Tea Estate', 'মনাবাৰী চাহ বাগিচা', 'मोनाबारी चाय बगान', 'tea-tourism', 'Biswanath', 'biswanath', 'Biswanath Chariali',
    'Asia''s Largest Contiguous Tea Estate (Established 1869 CE)', 'Covering over 1,158 hectares under tea cultivation along the lush north bank of the Brahmaputra in Biswanath district, Monabarie is renowned as the largest contiguous tea garden in Asia. Founded in 1869 by the British Assam Tea Company and currently managed by the McLeod Russel group, the garden features rolling verdant tea bushes, vintage British planter architecture, and expansive processing factories producing high-grade orthodox and CTC Assam teas.', 'https://biswanath.assam.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/monabarie-tea-estate.jpg',
    'Monabarie Tea Estate, Biswanath - Asia Largest Tea Plantation (CC BY-SA 4.0 by ANKAN via Wikimedia Commons)', 26.7262, 93.1842, 'October to April (Plucking season: May to October)', 'Tezpur Airport (75 km) / Biswanath Chariali Railway Station (8 km)', 'Estate gates open 08:00 - 16:30 weekdays; prior permission for factory interior',
    'Complimentary entrance with prior notice to estate management office', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-cinnamara-heritage', 'cinnamara-historic-tea-estate', 'Cinnamara Historic Tea Estate & Maniram Dewan Memorial', 'চিনামৰা চাহ বাগিচা আৰু মণিৰাম দেৱান স্মৃতিসৌধ', 'चिनामरा ऐतिहासिक चाय बगान', 'tea-tourism', 'Jorhat', 'jorhat', 'Cinnamara, Jorhat Sub-division',
    'First Indigenous Indian-Owned Tea Garden Founded in 1845 CE', 'Cinnamara holds monumental historical significance as the very first commercial tea plantation established by an indigenous Indian entrepreneur—the revered Assamese noble, statesman, and freedom fighter Maniram Dewan in 1845 CE. Rejecting the monopoly of the British Assam Company, Dewan pioneered native tea cultivation here. Located just south of Jorhat town, the estate preserves century-old tea bushes and the nearby historic memorial honoring Dewan''s legacy in India''s 1857 freedom uprising.', 'https://jorhat.assam.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/cinnamara-historic-tea-estate.jpg',
    'Historic Cinnamara Tea Workers Plucking Tea, Jorhat (CC BY-SA 4.0 via Wikimedia Commons)', 26.72, 94.225, 'October to April', 'Jorhat Town Station (5 km) / Jorhat Rowriah Airport (10 km)', '08:30 - 16:30 Monday to Saturday',
    'Open heritage road access; factory visits by arrangement', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-guwahati-riverfront', 'guwahati-brahmaputra-riverfront-ropeway', 'Guwahati Brahmaputra Riverfront Promenade & Ropeway', 'গুৱাহাটী ব্ৰহ্মপুত্ৰ ৰিভাৰফ্ৰণ্ট আৰু ৰোপৱে’', 'गुवाहाटी ब्रह्मपुत्र रिवरफ्रंट और रोपवे', 'river-experiences', 'Kamrup Metropolitan', 'kamrup-metropolitan', 'Panbazar to Uzanbazar & North Guwahati Terminal',
    'India''s Longest River Ropeway (1.82 km) & Scenic Sunset Promenade', 'Spanning 1.82 kilometers directly across the mighty Brahmaputra river from Panbazar in Guwahati to Rajadwar in North Guwahati, this state-of-the-art passenger ropeway is India''s longest river ropeway. Floating high above the azure river waters, the glass cabins offer breathtaking 360-degree aerial views of Peacock Island, Umananda temple, the Saraighat bridges, and Guwahati''s verdant hilltops. The adjacent landscaped riverside promenade features walking tracks and sunset gazebos.', 'https://gmda.assam.gov.in/', 'https://kamrupmetro.assam.gov.in/', '/images/destinations/guwahati-brahmaputra-riverfront-ropeway.jpg',
    'Guwahati Passenger Ropeway Over Mighty Brahmaputra River (CC BY-SA 4.0 by Joergens.mi via Wikimedia Commons)', 26.1889, 91.751, 'Year-round (Sunset hours 16:00 - 17:45 are peak scenic)', 'Guwahati Railway Station (1.5 km) / Kachari Ghat Terminal', '08:00 - 18:00 daily (Ropeway ticketing counter closes 17:30)',
    'Ropeway tickets available at GMDA terminal counter; promenade access free', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-kakochang-falls', 'kakochang-waterfalls', 'Kakochang Waterfalls & Karbi Hills Viewpoint', 'কাকোচাং জলপ্ৰপাত', 'काकोचांग जलप्रपात', 'hills-waterfalls', 'Golaghat / Karbi Anglong', 'golaghat', 'Nahorjan, Bokakhat Foothills',
    'Magnificent Natural Waterfall Amidst Rubber & Coffee Plantations', 'Tucked inside the pristine forested hills of Karbi Anglong just 13 km from Bokakhat on the rim of Kaziranga, Kakochang is one of Assam''s most picturesque natural waterfalls. Water cascades down craggy rock cliffs into a crystal-clear natural swimming pool, surrounded by dense evergreen subtropical canopies, aromatic coffee plantations, and rubber estates. It is also an exceptional vantage point for viewing the ruins of ancient Numaligarh.', 'https://golaghat.assam.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/kakochang-waterfalls.jpg',
    'Photo: Rituraj Dewan (CC BY-SA 4.0 via Wikimedia Commons)', 26.6025, 93.535, 'October to April (Post-monsoon water volume is at its most spectacular)', 'Bokakhat on NH 715 (13 km) / Kaziranga Kohora (23 km)', '07:00 - 16:30 daily (Daylight hours recommended for nature trek)',
    'Nominal local eco-development committee community maintenance fee', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-panimur-falls', 'panimur-waterfalls-niagara-of-assam', 'Panimur Waterfalls (Niagara of Assam)', 'পানীমূৰ জলপ্ৰপাত (অসমৰ নায়াগ্ৰা)', 'पानीमूर जलप्रपात', 'hills-waterfalls', 'Dima Hasao', 'dima-hasao', 'Kopili River Gorge, Umrangso Sub-division',
    'Roaring Kopili River Cascades Celebrated as the Niagara of Assam', 'Carving its way through dramatic rocky limestone gorges in northwestern Dima Hasao, the turbulent Kopili River surges over massive stepped stone terraces at Panimur, earning it the moniker ''The Niagara of Assam''. Surrounded by untamed Barail hill forest tracts, the thunderous roaring falls create perpetual misty rainbows. Panimur is also a revered sacred pilgrimage spot for Dimasa and Karbi communities during the Magh Bihu full moon.', 'https://dimahasao.assam.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/panimur-waterfalls-niagara-of-assam.jpg',
    'Photo: Mike Prince (CC BY 2.0 via Wikimedia Commons)', 25.7167, 92.8167, 'November to April (Crisp winter sunshine & crystal-clear foaming water)', 'Lanka Railway Station (45 km) / Umrangso Town (32 km)', '06:00 - 17:00 daily (Daylight visiting only)',
    'Open nature access; local tourism committee parking fee applies', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-chandubi-lake', 'chandubi-lake-eco-lagoon', 'Chandubi Lake & Garo Foothills Eco-Lagoon', 'চান্দুবি বিল আৰু পৰিৱেশ পৰ্যটন', 'चांदुबी झील व इको लैगून', 'hills-waterfalls', 'Kamrup (Rural)', 'kamrup-rural', 'Mirza Foothills, Assam-Meghalaya Border',
    'Pristine Tectonic Lake Born from the Great 1897 Assam Earthquake', 'Located 64 km southwest of Guwahati at the foot of the Garo Hills, Chandubi Lake was naturally formed on June 12, 1897, when the catastrophic 8.1 magnitude Great Assam earthquake caused the forest basin to dramatically subside. The resulting 200-hectare freshwater lake is ringed by dense Sal and Teak forests and tranquil Rabha tribal villages. It is famed for its submerged forest roots, calm country boat paddling, and the vibrant annual Chandubi Festival in early January.', 'https://kamrup.assam.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/chandubi-lake-eco-lagoon.jpg',
    'Photo: Subhashish Panigrahi (CC BY-SA 3.0 via Wikimedia Commons)', 25.8833, 91.4333, 'November to March (Chandubi Festival held every January)', 'Guwahati LGBI Airport (45 km) via Mirza-Chandubi Road', '06:00 - 17:30 daily; Country boating until sunset',
    'Open nature access; boating tickets managed by Rabha Eco-Tourism Society', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-orang-np', 'orang-national-park', 'Orang National Park (Mini Kaziranga)', 'ওৰাং ৰাষ্ট্ৰীয় উদ্যান', 'ओरांग राष्ट्रीय उद्यान', 'wildlife-birdwatching', 'Darrang / Sonitpur', 'darrang', 'North Bank of Brahmaputra River, Silbori',
    'Global Stronghold of One-Horned Rhinos & Royal Bengal Tigers', 'Often celebrated as the ''Mini Kaziranga'' due to its identical landscape of alluvial grasslands, marshes, and riverine woodlands on the Brahmaputra''s north bank, Orang covers 79 sq km and holds India''s highest density of Royal Bengal Tigers. It also shelters over 125 Greater One-Horned Rhinos, wild elephants, critically endangered pygmy hogs, and rare Bengal Floricans.', 'https://forest.assam.gov.in/', 'https://darrang.assam.gov.in/', '/images/destinations/orang-national-park.jpg',
    'Photo: Diganta Talukdar (CC BY-SA 4.0 via Wikimedia Commons)', 26.54, 92.34, 'November to April (Closed during monsoon flood season)', 'Guwahati Airport (140 km) / Tezpur Airport (60 km) via NH 15', '06:30 - 16:30 daily (Morning and afternoon jeep safari batches)',
    'Assam Forest Dept entry & vehicle safari tickets at Silbori Range Gate', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-deepor-beel', 'deepor-beel-ramsar-wetland', 'Deepor Beel Ramsar Wetland & Bird Sanctuary', 'দীপৰ বিল ৰামছাৰ জলাশয়', 'दीपर बील रामसर आर्द्रभूमि', 'wildlife-birdwatching', 'Kamrup Metropolitan', 'kamrup-metropolitan', 'Southwest Guwahati, Azara',
    'Assam''s Only Ramsar Wetland Site & Global Haven for Greater Adjutants', 'Located on the southwestern outskirts of Guwahati, Deepor Beel is a permanent freshwater lake and Assam''s first designated Ramsar Site of international ecological importance. Covering 40 sq km, it forms a critical ecological corridor connecting Rani and Garbhanga reserve forests, with wild Asian elephant herds frequently bathing in its waters. International ornithologists flock here to observe over 200 bird species, including the world''s largest concentration of the endangered Greater Adjutant Stork (Hargila).', 'https://kamrupmetro.assam.gov.in/', 'https://forest.assam.gov.in/', '/images/destinations/deepor-beel-ramsar-wetland.jpg',
    'Deepor Beel Ramsar Freshwater Wetland, Kamrup Metro (CC BY-SA 4.0 by Tridiv Bordoloi via Wikimedia Commons)', 26.1264, 91.6492, 'October to March (Peak migratory bird congregating season)', 'Guwahati Airport (8 km) / Guwahati Railway Station (14 km)', '06:00 - 17:30 daily (Watchtower open during daylight)',
    'Assam Forest Department nominal watchtower ticket', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-surya-pahar', 'sri-surya-pahar-archaeological-site', 'Sri Surya Pahar Archaeological Complex', 'শ্ৰী সূৰ্য পাহাৰ প্ৰত্নতাত্ত্বিক ক্ষেত্ৰ', 'श्री सूर्य पहाड़ पुरातात्विक स्थल', 'heritage-historic', 'Goalpara', 'goalpara', 'Bhatiapara, Goalpara Sub-division',
    'Sacred Hill of 99,999 Shiva Lingas & Ancient Interfaith Confluence', 'Rising 12 km southeast of Goalpara town, Sri Surya Pahar (''Hill of the Sun'') is one of the most enigmatic archaeological treasures in Northeast India. According to local folklore, it was envisioned as a second Varanasi by King Banasura, with 99,999 monolithic stone Shiva Lingas sculpted across the granite slopes. Archaeological Survey of India (ASI) excavations have revealed rock-carved sun discs, votive stupas of Hinayana Buddhism dating to the 1st-2nd century BCE, and Jain Tirthankara figures (such as Adinatha), making it an extraordinary tri-religious sanctuary.', 'https://asi.nic.in/', 'https://goalpara.assam.gov.in/', '/images/destinations/sri-surya-pahar-archaeological-site.jpg',
    'Photo: Dhruba Jyoti Baruah (CC BY-SA 4.0 via Wikimedia Commons)', 26.105, 90.71, 'October to March (Pleasant hiking weather)', 'Guwahati (130 km via NH 17) / Goalpara Town (12 km)', '09:00 - 17:00 daily; ASI Site Museum closed on Fridays',
    'Archaeological Survey of India (ASI) ticketed entry', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-madan-kamdev', 'madan-kamdev-archaeological-ruins', 'Madan Kamdev Archaeological Ruins (Khajuraho of Assam)', 'মদন কামদেৱ দেৱালয় (অসমৰ খাজুৰাহো)', 'मदन कामदेव पुरातात्विक स्थल', 'heritage-historic', 'Kamrup (Rural)', 'kamrup-rural', 'Baihata Chariali, Dewanagiri Hill',
    '10th–12th Century Kamarupa Pala Dynasty Sculpted Stone Temples', 'Perched atop Dewanagiri hillock overlooking the Madankuri river 40 km north of Guwahati, Madan Kamdev is renowned as the ''Khajuraho of Assam''. Built during the 10th to 12th century CE under the Kamarupa Pala dynasty, this archaeological complex preserves the ruins of 15 majestic stone temples. The granite and sandstone walls are embellished with exquisitely detailed erotic sculptures, celestial apsaras, griffins, and intricate friezes of Lord Shiva and Goddess Uma.', 'https://archaeology.assam.gov.in/', 'https://kamrup.assam.gov.in/', '/images/destinations/madan-kamdev-archaeological-ruins.jpg',
    'Photo: Dhruba Jyoti Baruah (CC BY-SA 4.0 via Wikimedia Commons)', 26.3314, 91.6886, 'October to April', 'Baihata Chariali on NH 27 (3 km) / Guwahati (40 km)', '09:00 - 17:00 daily; Directorate of Archaeology site office',
    'State Archaeology Department nominal entry ticket', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-sarthebari-bellmetal', 'sarthebari-bell-metal-heritage-village', 'Sarthebari Bell-Metal Heritage Artisan Village', 'সৰ্থেবাৰী কাঁহ শিল্পৰ ঐতিহ্য গাঁও', 'सरथेबारी कांस्य शिल्प ग्राम', 'handloom-crafts', 'Barpeta', 'barpeta', 'Sarthebari Town, Lower Assam',
    'Centuries-Old Artisan Guild Hand-Forging GI-Tagged Bell-Metal Utensils', 'Located 90 km west of Guwahati in Barpeta district, Sarthebari is world-famous for its generational bell-metal (Kanh) industry—the second largest handicraft sector in Assam after handloom silk. Certified with a prestigious Geographical Indication (GI) tag, Sarthebari''s master coppersmiths and braziers forge bronze and tin into ceremonial Xorai (Assam''s cultural offering vessel), traditional dining plates (Kahi), water goblets (Kalah), and cymbals (Taal) entirely by hand over fiery open-hearth forges.', 'https://barpeta.assam.gov.in/', 'https://handloom.assam.gov.in/', '/images/destinations/sarthebari-bell-metal-heritage-village.jpg',
    'Assam Xorai - Bell Metal Craft Heritage of Sarthebari (CC BY-SA 4.0 by Jyoti Chaliha via Wikimedia Commons)', 26.35, 91.22, 'October to April', 'Barpeta Road Railway Station (35 km) / Guwahati (90 km via NH 27)', '08:00 - 17:00 daily (Workshops active throughout daylight)',
    'Open village artisan access; cooperative stores open for retail purchase', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-asharikandi-terracotta', 'asharikandi-terracotta-village', 'Asharikandi Terracotta & Pottery Craft Village', 'আশাৰীকান্দি টেৰাকোটা আৰু মৃৎশিল্প গাঁও', 'अशारीकांदी टेराकोटा शिल्प ग्राम', 'handloom-crafts', 'Dhubri', 'dhubri', 'Gauripur, Western Assam',
    'India''s Premier Terracotta Cluster Famed for Handcrafted Hatima Dolls', 'Situated 14 km east of Dhubri town along the Gadadhar river, Asharikandi is the largest traditional terracotta and clay pottery cluster in India. Home to over 400 artisan families, the village is globally renowned for its unique ''Hatima Doll''—a mother figurine holding a child on her hip with elephant-shaped ears, sculpted entirely from special Hiramati alluvial clay found along riverbanks. Visitors walk through open courtyard kilns and observe pottery throwing on wooden wheels.', 'https://dhubri.assam.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/asharikandi-terracotta-village.jpg',
    'Photo: Gitartha Bordoloi (CC BY-SA 3.0 via Wikimedia Commons)', 26.05, 89.98, 'October to March (Dry weather allows outdoor kiln firing)', 'Dhubri Railway Station (14 km) / Rupsi Airport (28 km)', '08:00 - 17:00 daily (Potters work in home courtyards)',
    'Free village walking access; pottery workshops offer hands-on clay moulding', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-latasil-bihu', 'latasil-bihu-cultural-grounds', 'Latasil Bihu Cultural Stage & Rongali Bihu Grounds', 'লতাশিল বিহু সন্মিলন আৰু ৰঙালী বিহু মঞ্চ', 'लताशिल बिहू सांस्कृतिक मैदान', 'festivals-cultural', 'Kamrup Metropolitan', 'kamrup-metropolitan', 'Latasil Playground, Uzanbazar, Guwahati',
    'Historic Birthplace of Urban Stage Bihu Celebrated Every April', 'Latasil Playground in Guwahati holds an iconic place in modern Assamese cultural history as the venue where the first urban stage Bihu (Bihu Mancha) was organized in 1952. Every year during mid-April (Assamese month of Bohaag), Latasil erupts into Assam''s grandest Rongali Bihu festival, hosting thousands of spectators, traditional Dhol-Pepa players, and prestigious Bihu Rani and Bihu Kuwori folk dance championships under towering canopy stages.', 'https://kamrupmetro.assam.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/latasil-bihu-cultural-grounds.jpg',
    'Traditional Assamese Bihu Folk Dance Celebration (CC BY-SA 4.0 by Edmonton Rongali Bihu via Wikimedia Commons)', 26.186, 91.7525, 'Mid-April (Rongali Bihu / Bohaag Bihu festival week)', 'Guwahati Railway Station (2 km) / Panbazar Riverfront (1 km)', 'Bihu festival evenings: 17:00 - midnight; Open sports grounds during daytime',
    'Complimentary open public admission to festival ground and stages', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-majuli-raas', 'majuli-raas-mahotsav-sattras', 'Majuli Raas Mahotsav Living Theatrical Festival', 'মাজুলীৰ ৰাস মহোৎসৱ আৰু ভাওনা সংস্কৃতি', 'माजुली रास महोत्सव व भावना संस्कृति', 'festivals-cultural', 'Majuli', 'majuli', 'Auniati, Dakhinpat, Garamur & Kamalabari Sattras',
    '500-Year-Old Living Theatrical Celebration of Lord Krishna on the Island', 'Celebrated on the full moon night (Raas Purnima) of November, Majuli''s Raas Mahotsav is one of the grandest open-air theatrical festivals in South Asia. Originating from Srimanta Sankardev''s Neo-Vaishnavite Ankiya Nat tradition over 500 years ago, nearly every resident of the island transforms into an actor, musician, or artisan. Sattras and village Namghars mount dramatic enactments of Krishna''s life with magnificent papier-mâché masks, Sattriya classical footwork, and Brajavali lyrics.', 'https://majuli.assam.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/majuli-raas-mahotsav-sattras.jpg',
    'Photo: Gitartha Bordoloi (CC BY-SA 3.0 via Wikimedia Commons)', 26.96, 94.22, 'Mid-November (Kartik Purnima 4-day festival period)', 'Jorhat to Nimati Ghat (20 km) + Ferry to Majuli Kamalabari', 'Performances run from 19:00 throughout the night across 60+ stages',
    'Open community entry; reserved seating passes available at Sattra desks', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-culinary-trail', 'assamese-heritage-culinary-trail', 'Traditional Assamese Culinary Trail & Heritage Dining', 'ঐতিহ্যবাহী অসমীয়া খাদ্য সংস্কৃতি আৰু থলুৱা সোৱাদ', 'पारंपरिक असमिया पाक कला व थाली अनुभव', 'culinary-experiences', 'Kamrup Metropolitan / Jorhat', 'kamrup-metropolitan', 'Guwahati Heritage Zone & Jorhat Planters Guild',
    'Slow-Cooked Khar, Masor Tenga, Bamboo Shoot & Fragrant Joha Rice', 'Assam''s culinary heritage is defined by fresh river produce, wild indigenous herbs (Xaak), slow wood-fire cooking, and subtle, natural flavors free of heavy spices. A curated Assamese Thali journey begins with Omita Khar (papaya alkali palate purifier), continues to fresh Rohu or Chitol Masor Tenga (tart fish curry infused with Outenga elephant apple or Thekera), smoked meats in bamboo tubes (Khorika), Duck cooked with Ash Gourd (Kumura), and culminates in aromatic Joha rice, fermented bamboo shoots (Khorisa), and sticky Bora rice payash.', 'https://assamtourism.gov.in/', 'https://kamrupmetro.assam.gov.in/', '/images/destinations/assamese-heritage-culinary-trail.jpg',
    'Authentic Assamese Fish Thali in Dibrugarh (CC BY-SA 4.0 by Subhashish Panigrahi via Wikimedia Commons)', 26.175, 91.765, 'Year-round (Winter season features fresh mustard greens and duck delicacies)', 'Guwahati Central City & Jorhat Heritage Dining circuits', '11:30 - 15:30 (Lunch) & 19:00 - 22:30 (Dinner) daily',
    'Dining per order; verified heritage restaurants listed on state tourism portal', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-mishing-kitchen', 'mishing-chang-ghar-kitchen-apong', 'Mishing Chang-Ghar Traditional Kitchen & Cultural Trail', 'মিচিং চাংঘৰৰ ৰন্ধনশালা আৰু আপং সংস্কৃতি', 'मिशिंग चांग-घर पारंपरिक रसोई व संस्कृति', 'culinary-experiences', 'Majuli / Dhemaji', 'majuli', 'Jengraimukh & Upper Majuli Riverine Hamlets',
    'Bamboo-Tube Smoked Fish, Namsing, Wild Herbs & Traditional Rice Brews', 'The Mishing community—one of the largest indigenous riverine tribes of Assam—possesses an extraordinary gastronomic tradition developed over centuries along the Brahmaputra floodplains. Built atop elevated Chang-Ghar (bamboo stilt houses) to adapt to river tides, the kitchen fire (Meram) burns continually. Specialties include Namsing (sun-dried ground fish with herbs), smoked pork roasted in hollow green bamboo (Khorika), fish wrapped in banana leaves (Patot Diya), and ceremonial fermented rice wine (Nogin Apong and Po:ro Apong).', 'https://majuli.assam.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/mishing-chang-ghar-kitchen-apong.jpg',
    'Traditional Chang Ghar Stilt Architecture of the Mising Community (CC BY-SA 4.0 by Homen Hazarika via Wikimedia Commons)', 26.98, 94.28, 'October to April (Special: Ali-Aye-Ligang spring harvest festival in February)', 'Nimati Ghat to Kamalabari Ferry + 25-minute drive to Jengraimukh', '10:00 - 18:00 daily (Homestay culinary experiences with prior arrangement)',
    'Community culinary homestay dining per booking', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-assam-state-zoo-botanical', 'assam-state-zoo-cum-botanical-garden', 'Assam State Zoo-cum-Botanical Garden & Orchidarium', 'অসম ৰাজ্যিক চিৰিয়াখানা আৰু উদ্ভিদ উদ্যান', 'असम राज्य चिड़ियाघर व वानस्पतिक उद्यान', 'botanical-green', 'Kamrup Metropolitan', 'kamrup-metropolitan', 'Hengrabari Reserve Forest, R.G. Baruah Road, Guwahati',
    '432-Acre Green Lung of Guwahati Conserving 500+ Rare Orchid & Tree Species', 'Sprawled over 432 acres (175 hectares) of undulating green hills within the protected Hengrabari Reserve Forest right in the heart of Guwahati, the Assam State Zoo-cum-Botanical Garden is the largest green lung of the capital city. Established in 1957, the botanical division preserves a vast herbarium, indigenous bamboo arboretum, medicinal plant conservation groves, and a specialized Orchidarium sheltering rare Northeast Indian wild orchids (such as Rhynchostylis retusa, the Kopou Phool).', 'https://assamstatezoo.in/', 'https://forest.assam.gov.in/', '/images/destinations/assam-state-zoo-cum-botanical-garden.jpg',
    'Assam State Zoo cum Botanical Garden, Guwahati (CC BY-SA 4.0 by Tridiv Bordoloi via Wikimedia Commons)', 26.1633, 91.785, 'October to April (Orchid blooming season: March to May)', 'Guwahati Railway Station (6 km) / Lokpriya Gopinath Bordoloi Airport (26 km)', '08:00 - 16:30 daily (Closed on Fridays for maintenance)',
    'Official Forest Dept counter ticket & online booking at assamstatezoo.in', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-bogamati-ecopark', 'bogamati-eco-park-bornadi', 'Bogamati Eco-Park & Bornadi River Green Space', 'বগামাটি পৰিৱেশ উদ্যান আৰু বৰনদী সেউজ বননি', 'बगामाटी इको-पार्क व बोरनदी हरित स्थल', 'botanical-green', 'Baksa (BTR)', 'baksa', 'Indo-Bhutan Border Foothills, Goreswar',
    'White-Stone Riverbed, Hanging Footbridge & Himalayan Foothill Pine Groves', 'Located right on the border of Assam and Bhutan in Baksa district, Bogamati (''White Soil / White Sand'') is a picturesque green eco-destination created where the Bornadi river flows down from the Bhutanese hills. Famous for its bright white river gravel bed, panoramic pine-covered mountain vistas, and a 200-meter suspension hanging footbridge over the clear turquoise waters, it features landscaped green eco-parks, gentle river rafting, and scenic nature walking promenades.', 'https://baksa.assam.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/bogamati-eco-park-bornadi.jpg',
    'Bogamati Scenic Eco Park and Bornadi River, Baksa (CC BY-SA 4.0 by Jugal Barman via Wikimedia Commons)', 26.8333, 91.6, 'November to April (Crisp mountain air and tranquil river currents)', 'Rangiya Junction (40 km) / Guwahati City (90 km via Baihata-Goreswar road)', '07:00 - 17:00 daily (Daylight hours strictly enforced near border)',
    'Nominal local Bodoland Eco-Tourism Society green maintenance pass', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-guide-upper-assam', 'upper-assam-heritage-tea-circuit', 'Upper Assam Heritage & Tea Country Scenic Circuit Guide', 'উজনি অসমৰ বুৰঞ্জী আৰু চাহ পৰ্যটন ভ্ৰমণ নিৰ্দেশিকা', 'ऊपरी असम ऐतिहासिक व चाय सर्किट यात्रा गाइड', 'district-travel-guides', 'Sivasagar / Charaideo / Dibrugarh', 'sivasagar', 'Sivasagar — Charaideo — Naharkatia — Dibrugarh Road Corridor',
    'Multi-Day Road Itinerary: 600-Year Ahom Capitals, Rain Forests & Planter Mansions', 'This comprehensive scenic travel guide links the royal heartland of Assam across Sivasagar, Charaideo, and Dibrugarh districts. The 4-day curated itinerary commences at Asia''s oldest royal amphitheater (Rang Ghar) and the underground Talatal Ghar in Sivasagar, journeys to the UNESCO World Heritage royal pyramid mounds of Charaideo (inscribed 2024), navigates through the lowland tropical rainforest of Dehing Patkai, and concludes among the historic colonial tea bungalows and golf courses of Dibrugarh.', 'https://sivasagar.assam.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/upper-assam-heritage-tea-circuit.jpg',
    'Historic Kareng Ghar of Ahom Royalty, Sivasagar (CC BY-SA 3.0 by Diganta Talukdar via Wikimedia Commons)', 26.985, 94.6378, 'October to April (Dry roads, ideal safari weather, and clear skies)', 'Fly in via Dibrugarh Airport (Mohanbari) or Jorhat; Return via Simaluguri Jn', 'Self-guided scenic route with recommended 08:30 starts for ASI sites',
    'Combined ASI monument ticket + Forest entry pass available online', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-guide-barak-valley', 'barak-valley-scenic-circuit', 'Barak Valley Tea, Riverfront & Dimasa Heritage Guide', 'বৰাক উপত্যকাৰ চাহ, নদী আৰু ডিমাচা ঐতিহ্য নিৰ্দেশিকা', 'बराक घाटी चाय, नदी व डिमासा धरोहर गाइड', 'district-travel-guides', 'Cachar / Hailakandi / Karimganj', 'cachar', 'Silchar — Khaspur — Badarpur — Chatachura Hills',
    'Southern Assam''s Undiscovered Valleys, Khaspur Royal Ruins & Barak Riverfront', 'Encircled by emerald hill ranges in southern Assam, the Barak Valley offers an enchanting alternative travel circuit. This scenic guide covers the historic 17th-century Khaspur palace ruins (the final royal seat of the Dimasa Kachari kingdom featuring Dimasa brick arches and the Lion Gate), peaceful tea garden expanses along the lush Chatachura ranges, the historic Badarpur Mughal-British river fort, and sunset boat journeys on the placid Barak River.', 'https://cachar.assam.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/barak-valley-scenic-circuit.jpg',
    'Scenic Barak River at Silchar Valley (CC BY-SA 3.0 by Greatbon via Wikimedia Commons)', 24.8333, 92.7789, 'October to March (Crisp pleasant winter conditions)', 'Silchar Airport (Kumbhirgram) / Silchar Railway Station (Broad gauge connectivity)', 'Monuments open 09:00 - 17:00; Scenic highway driving during daylight',
    'State Archaeology Department nominal site fees at Khaspur', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-guide-bodoland-circuit', 'bodoland-wildlife-culture-circuit', 'Bodoland Himalayan Foothills & Wildlife Trail Guide', 'বড়োলেণ্ড হিমালয় পাদদেশ আৰু বন্যপ্ৰাণী পৰ্যটন নিৰ্দেশিকা', 'बोडोलैंड हिमालय तलहटी व वन्यजीव यात्रा गाइड', 'district-travel-guides', 'Kokrajhar / Chirang / Baksa', 'kokrajhar', 'Raimona — Manas — Bogamati — Kokrajhar Weaving Cluster',
    'Golden Langurs, Virgin Himalayan Reserves & Rich Bodo Handloom Culture', 'Extending across the Bodoland Territorial Region (BTR) in northwestern Assam, this scenic guide traverses the southern foothills of Bhutan. The route integrates Raimona National Park (Assam''s 6th National Park, famed for rare Golden Langurs and butterfly diversity), the UNESCO World Heritage natural paradise of Manas, community-managed ecotourism camps in Bansbari, and authentic Dokhona handloom weaving cooperatives in Kokrajhar.', 'https://bodoland.gov.in/', 'https://forest.assam.gov.in/', '/images/destinations/bodoland-wildlife-culture-circuit.jpg',
    'Wild Elephant Herd at Raimona National Park, Bodoland (CC BY-SA 4.0 by Simanta Kalita via Wikimedia Commons)', 26.4, 90.27, 'November to April', 'New Bongaigaon Junction (Main rail transit) / Kokrajhar Railway Station', 'Safari times 06:30 - 16:30; Cultural centers 09:00 - 17:00',
    'BTR Forest Department entry passes at respective national park range gates', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-draft-barail-peak', 'barail-high-ridge-viewpoint-draft', 'Barail High Ridge Cloud Viewpoint (Community Draft)', 'বৰাইল পৰ্বতমালাৰ উচ্চ শৃংগ (খচৰা)', 'बरेल पर्वतमाला शिखर व्यूप्वाइंट (प्रारूप)', 'hills-waterfalls', 'Dima Hasao', 'dima-hasao', 'Upper Barail Forest Track, near Jatinga',
    'Unverified Scenic Cloud Viewpoint Awaiting Forest Department GPS Survey', 'Submitted by local hiking enthusiasts: an undiscovered panoramic high ridge viewpoint in the upper Barail range offering 360-degree vistas across Dima Hasao and Meghalaya borders. Coordinates and trail safety guidelines are currently unverified by local authorities. Visitors are advised not to venture without verified district forest guides.', 'https://dimahasao.assam.gov.in/', 'https://dimahasao.assam.gov.in/', '/images/destinations/barail-high-ridge-viewpoint-draft.jpg',
    'Photo: Mike Prince (CC BY 2.0 via Wikimedia Commons)', NULL, NULL, 'Pending verification (Suggested: October to March)', 'Trail access unverified; requires official Dima Hasao forest permission', 'Daylight hiking only; currently unapproved for unguided tourists',
    'Details to be confirmed upon district administration verification', '2026-10-30T10:00:00Z', 'draft', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-draft-ghiladhari-falls', 'ghiladhari-hidden-cascades-draft', 'Ghiladhari Hidden Stream Cascades (Community Draft)', 'ঘিলাধাৰী গোপন জলপ্ৰপাত (খচৰা)', 'घिलाधारी गुप्त जलप्रपात (प्रारूप)', 'hills-waterfalls', 'Golaghat', 'golaghat', 'Ghiladhari Forest Reserve border, Sarupathar',
    'Community-Reported Jungle Stream Falls Pending Forestry Field Inspection', 'A natural freshwater cascade reported by local villagers situated along the forested foothills of Sarupathar. Water flows over natural basalt boulders into a serene forest pool. Formal ecological survey and safe foot-trail installation are pending with the Golaghat territorial forest division.', 'https://golaghat.assam.gov.in/', 'https://golaghat.assam.gov.in/', '/images/destinations/ghiladhari-hidden-cascades-draft.jpg',
    'Chapanala Waterfalls, Nagaon-Golaghat Border (CC BY-SA 4.0 by Tridiv Bordoloi via Wikimedia Commons)', NULL, NULL, 'Post-monsoon (Awaiting official confirmation)', 'Sarupathar Station (18 km); exact trail route awaiting GPS logging', 'Pending verification by Forest Beat Officer',
    'Pending official verification', '2026-10-30T10:00:00Z', 'draft', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-draft-subansiri-sandbar', 'subansiri-winter-river-camp-draft', 'Subansiri Winter Sandbar Island Camp (Community Draft)', 'সোৱণশিৰী নদীৰ বালিমৰা শিবিৰ (খচৰা)', 'सुबनसिरी शीतकालीन रिवर कैंप (प्रारूप)', 'river-experiences', 'Lakhimpur', 'lakhimpur', 'Gogamukh / Subansiri Confluence',
    'Seasonal River Sandbar Wilderness Camp Awaiting Waterways Navigation Clearance', 'Seasonal sandbank camping spot proposed by local youth eco-groups along the pristine blue waters of the Subansiri River in North Lakhimpur. Offers winter stargazing and angling for Golden Mahseer. Safety and river current certifications are currently pending review with Inland Waterways authorities.', 'https://lakhimpur.assam.gov.in/', 'https://lakhimpur.assam.gov.in/', '/images/destinations/subansiri-winter-river-camp-draft.jpg',
    'Subansiri Riverbank Landscape, Lakhimpur (CC BY-SA 4.0 by Bipul Chiring via Wikimedia Commons)', NULL, NULL, 'December to February (Seasonal low water sandbars only)', 'North Lakhimpur Station (25 km); ferry crossing required', 'Seasonal camping by pre-registration; daylight river crossings only',
    'Awaiting district tourism permit guidelines', '2026-10-30T10:00:00Z', 'draft', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-pari-hareswar', 'pari-hareswar-devalaya', 'Pari Hareswar Devalaya', 'পৰী হৰেশ্বৰ দেৱালয়', 'परी हरेश्वर देवालय', 'heritage-historic', 'Bajali', 'bajali', 'Dubi, Pathsala',
    'Ancient Shiva Temple & Origin of Classical Devadasi Dance Heritage', 'Pari Hareswar Devalaya at Dubi near Pathsala is an ancient and revered Shiva shrine dating back to early Kamarupa rulers. The temple is historically renowned for its preserved traditions of Devadasi nritya (classical temple dance). Copper-plate charters of King Bhaskaravarman discovered here affirm the temple''s antiquity and profound spiritual significance in Assamese cultural history.', 'https://bajali.assam.gov.in/', 'https://bajali.assam.gov.in/', '/images/destinations/pari-hareswar-devalaya.jpg',
    'Photo: CC BY-SA 4.0 via Wikimedia Commons', 26.505, 91.178, 'October to April (Magnificent during Maha Shivaratri)', 'Pathsala Railway Station (4 km) / Lokpriya Gopinath Bordoloi Airport Guwahati (95 km)', '05:30 - 18:30 daily',
    'Free / Open for prayer and cultural exploration', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-pathsala-culture', 'pathsala-mobile-theatre-hub', 'Pathsala Mobile Theatre Cultural Hub', 'পাঠশালা ভ্ৰাম্যমাণ নাট্যক্ষেত্ৰ', 'पाठशाला मोबाइल थिएटर हब', 'festivals-cultural', 'Bajali', 'bajali', 'Pathsala Town',
    'The Heartland of Assam''s Unique Mobile Theatre (Bhramyoman) Tradition', 'Pathsala in Bajali district is celebrated as the cultural crucible of Assam''s world-renowned Mobile Theatre (''Bhramyoman Natyadal'') industry. Pioneers like Achyut Lahkar founded Nataraj Theatre here in 1963, blending grand mobile sets, live orchestras, Hollywood-scale stage mechanics, and indigenous Assamese drama. Visiting Pathsala during rehearsal seasons (August–September) and festive performances offers an authentic immersion into living Assamese performing arts.', 'https://bajali.assam.gov.in/', 'https://culturalaffairs.assam.gov.in/', '/images/destinations/pathsala-mobile-theatre-hub.jpg',
    'Photo: CC BY-SA 4.0 via Wikimedia Commons', 26.498, 91.176, 'August to March (Peak rehearsal & touring season)', 'Pathsala Town on National Highway 27 / Well connected by rail and express coaches', '10:00 - 21:00 during active theatre seasons',
    'Public theatre tickets vary by troupe / Cultural ground open to visitors', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-kakoijana', 'kakoijana-reserve-forest', 'Kakoijana Golden Langur Sanctuary', 'কৈকোযানা সোণালী বান্দৰ অভয়াৰণ্য', 'काकोईजाना गोल्डन लंगूर अभयारण्य', 'wildlife-birdwatching', 'Bongaigaon', 'bongaigaon', 'Kakoijana, Bongaigaon',
    'Global Habitat and Community Conservation Stronghold of the Rare Golden Langur', 'Spanning over 17 sq km of semi-evergreen and moist deciduous forests, Kakoijana Reserve Forest is internationally acclaimed for harboring one of the densest populations of the endangered Golden Langur (Trachypithecus geei). Through pioneering community conservation partnerships with local villagers, the forest shelters over 500 golden langurs, hornbills, leopard cats, and rare butterfly species.', 'https://bongaigaon.assam.gov.in/', 'https://forest.assam.gov.in/', '/images/destinations/kakoijana-langur.jpg',
    'Photo: Golden Langur (Trachypithecus geei) in Assam (CC BY-SA 3.0 via Wikimedia Commons)', 26.352, 90.628, 'October to April (Pleasant trekking weather)', 'New Bongaigaon Junction (15 km) / Guwahati Airport (155 km)', '06:00 - 16:30 daily (Guided eco-trails available)',
    'Forest entry permit applicable at Range Office', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-jogighopa-caves', 'jogighopa-rock-cut-caves', 'Jogighopa Rock-Cut Caves & Monoliths', 'যোগীঘোপাৰ শিলা গুহা আৰু ভাস্কৰ্য্য', 'जोगीघोपा रॉक-कट गुफाएं', 'heritage-historic', 'Bongaigaon', 'bongaigaon', 'Jogighopa, Brahmaputra Riverside',
    'Ancient 5th–8th Century Salasthambha Monolithic Cave Architecture on the Brahmaputra', 'Perched dramatically along the red rocky bluffs overlooking the mighty Brahmaputra, the Rock-Cut Caves of Jogighopa represent unique monolithic stone architectural monuments dating back to the Salasthambha period (approx. 5th to 8th century AD). The caves served as meditative viharas and hermitages for ancient ascetics. Nearby hillocks preserve ancient stone carvings, chiseled steps, and sweeping vistas of the Naranarayan Setu bridge.', 'https://bongaigaon.assam.gov.in/', 'https://archaeology.assam.gov.in/', '/images/destinations/jogighopa-caves.jpg',
    'Photo: Jogighopa overlooking Brahmaputra (CC BY-SA 4.0 via Wikimedia Commons)', 26.225, 90.575, 'October to March', 'Jogighopa Station / New Bongaigaon Junction (32 km)', 'Sunrise to Sunset (06:00 - 17:30)',
    'Free / Protected Archaeological Site', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-bagheswari-hill', 'bagheswari-temple-hill', 'Bagheswari Temple & Hill Viewpoint', 'বাঘেশ্বৰী মন্দিৰ আৰু পাহাৰ', 'बागेश्वरी मंदिर एवं पहाड़ी', 'hills-waterfalls', 'Bongaigaon', 'bongaigaon', 'Bongaigaon Town',
    'Sacred Hilltop Shakti Shrine Overlooking Green Valleys of Bongaigaon', 'Bagheswari Temple sits atop a scenic forested hillock in the heart of Bongaigaon. A revered Shakti shrine, it attracts devotees from across Western Assam and Bhutan. The hilltop provides magnificent 360-degree vistas of the town, tea landscapes, and distant Himalayan foothills on clear winter mornings.', 'https://bongaigaon.assam.gov.in/', 'https://bongaigaon.assam.gov.in/', '/images/destinations/bagheswari-temple-hill.jpg',
    'Photo: CC BY-SA 4.0 via Wikimedia Commons', 26.478, 90.552, 'Throughout the year (Pleasant Oct - Mar)', 'Bongaigaon Town center (2 km from railway station)', '05:00 - 19:30 daily',
    'Free / Open for prayer and scenic visits', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-akashiganga', 'akashiganga-waterfalls', 'Akashiganga Waterfalls & Ancient Shrine', 'আকাশীগংগা জলপ্ৰপাত আৰু দেৱালয়', 'आकाशीगंगा जलप्रपात', 'hills-waterfalls', 'Hojai', 'hojai', 'Doboka Hills, Hojai',
    'Sacred Forest Cascades and Kalika Purana Historical Archaeological Site', 'Nestled in the lush evergreen foothills between Hojai and Karbi Anglong, Akashiganga is a spectacular natural waterfall associated with the ancient Kalika Purana. According to legend, sacred drops from Goddess Sati fell here, creating a perennial stream that plunges down a sheer rocky gorge. Archaeological explorations around the falls have uncovered 10th-12th century stone pillars, carvings, and historic temple plinths.', 'https://hojai.assam.gov.in/', 'https://archaeology.assam.gov.in/', '/images/destinations/akashiganga-waterfalls.jpg',
    'Photo: CC BY-SA 4.0 via Wikimedia Commons', 26.062, 92.955, 'October to April (Post-monsoon water flow is spectacular)', 'Hojai Railway Station (28 km) / Doboka (12 km) / NH 27', '06:00 - 17:00 daily',
    'Free / Nominal parking fee', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-doboka-sanctuary', 'doboka-reserve-forest', 'Doboka Reserve Forest & Sanctuary', 'ডবকা সংৰক্ষিত বনাঞ্চল', 'डोबोका रिजर्व फॉरेस्ट', 'wildlife-birdwatching', 'Hojai', 'hojai', 'Doboka, Hojai',
    'Dense Sal Forest, Wild Elephant Corridors and Diverse Avian Sanctuary', 'Doboka Reserve Forest encompasses an important wildlife refuge in central Assam. Dominated by majestic sal and teak canopies, the forest forms a crucial migratory corridor for Asian elephants and shelters barking deer, leopards, and over 150 species of resident and migratory birds.', 'https://hojai.assam.gov.in/', 'https://forest.assam.gov.in/', '/images/destinations/doboka-reserve-forest.jpg',
    'Photo: CC BY-SA 4.0 via Wikimedia Commons', 26.015, 92.88, 'November to April', 'Doboka Town (5 km) / Hojai (18 km)', '06:00 - 16:30 daily',
    'Forest gate permit as per Department regulations', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-billeswar-temple', 'billeswar-devalaya', 'Billeshwar Devalaya (Belsor)', 'বৰ বিলেশ্বৰ দেৱালয়', 'बिल्लेश्वर देवालय', 'heritage-historic', 'Nalbari', 'nalbari', 'Belsor, Nalbari',
    'Ancient 500-Year-Old Historic Shiva Temple Rebuilt by Ahom King Shiva Singha', 'Billeshwar Devalaya at Belsor, about 14 km from Nalbari town, is one of the most prominent historic Shiva temples in Lower Assam. Believed to date originally back to the Kamarupa epoch, it was reconstructed with magnificent brick masonry by Ahom Swargadeo Shiva Singha in the early 18th century. The temple houses an ancient Shiva lingam and is famous for its grand annual Maha Shivaratri festival.', 'https://nalbari.assam.gov.in/', 'https://archaeology.assam.gov.in/', '/images/destinations/billeswar-devalaya.jpg',
    'Photo: Historic Bileshwar Mahadev Temple, Belsor (CC BY-SA 4.0 via Wikimedia Commons)', 26.398, 91.385, 'October to March', 'Nalbari Railway Station (14 km) / Guwahati (65 km)', '05:00 - 18:30 daily',
    'Free entry / Open to all pilgrims and visitors', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-hari-mandir-nalbari', 'hari-mandir-raas-mahotsav', 'Nalbari Sri Sri Hari Mandir & Raas Grounds', 'নলবাৰী শ্ৰীশ্ৰী হৰি মন্দিৰ আৰু ৰাস মহোৎসৱ', 'नलबाड़ी हरि मंदिर एवं रास महोत्सव', 'festivals-cultural', 'Nalbari', 'nalbari', 'Nalbari Town Center',
    'The Epicenter of the Celebrated 13-Day Historic Nalbari Raas Mahotsav', 'Nalbari Sri Sri Hari Mandir, founded in 1931, is the cultural heart of Nalbari. The temple complex is nationally renowned for hosting the glorious 13-day Nalbari Raas Mahotsav every autumn during Raas Purnima. The festival transforms the entire town with hundreds of handcrafted animated clay clay idols depicting Lord Krishna''s lila, traditional melas, and vibrant theatrical performances.', 'https://nalbari.assam.gov.in/', 'https://culturalaffairs.assam.gov.in/', '/images/destinations/hari-mandir-nalbari.jpg',
    'Photo: Ajay Das - Hari Mandir during Ras Utsav (CC BY-SA 4.0 via Wikimedia Commons)', 26.442, 91.438, 'November (During Raas Purnima festival) to March', 'Nalbari Town (Walking distance from ASTC bus stand and station)', '06:00 - 20:00 daily (Open until late midnight during Raas)',
    'Free / Open public celebration', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-kamakhya-mankachar', 'kamakhya-mankachar-temple', 'Kamakhya Temple of Mankachar', 'মানকাচৰৰ কামাখ্যা দেৱালয়', 'मानकाचर कामाख्या मंदिर', 'heritage-historic', 'South Salmara-Mankachar', 'south-salmara-mankachar', 'Mankachar Hill, South Salmara',
    'Historic Border Hilltop Shakti Shrine Overlooking Bangladesh Floodplains', 'Situated atop an elevated hillock in Mankachar near the international Indo-Bangladesh border, this sacred Kamakhya Temple dates back centuries. The temple offers magnificent panoramic views of the Brahmaputra alluvial basin and neighboring Garo Hills. Pilgrims from all around the tri-junction of Assam, Meghalaya, and Bangladesh gather here during annual Navaratri and Ambubachi celebrations.', 'https://southsalmaramankachar.assam.gov.in/', 'https://southsalmaramankachar.assam.gov.in/', '/images/destinations/kamakhya-mankachar-temple.jpg',
    'Photo: CC BY-SA 4.0 via Wikimedia Commons', 25.535, 89.865, 'October to March', 'Hatsingimari HQ (24 km) / Dhubri (Ferry across Brahmaputra) / Tura (50 km)', '05:30 - 18:00 daily',
    'Free / Open for prayer', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-mir-jumla-tomb', 'mir-jumla-historic-tomb', 'Mir Jumla Historic Tomb & Cannon Post', 'মীৰ জুমলাৰ ঐতিহাসিক সমাধিক্ষেত্ৰ', 'मीर जुमला ऐतिहासिक मकबरा', 'heritage-historic', 'South Salmara-Mankachar', 'south-salmara-mankachar', 'Thakuranbari, Mankachar',
    '1663 Monument of Mughal General Mir Jumla on the Historic Route to Assam', 'Located at Thakuranbari near Mankachar, this historic site marks the tomb of Mir Jumla (Muazzam Khan), the celebrated Mughal Subahdar of Bengal who led the 1662 Mughal invasion of Assam. Stricken with illness on his return retreat from Garhgaon, he died here in March 1663. The historic brick monument and adjacent old cannon posts provide an extraordinary window into medieval Assamese and Mughal military history.', 'https://southsalmaramankachar.assam.gov.in/', 'https://archaeology.assam.gov.in/', '/images/destinations/mir-jumla-historic-tomb.jpg',
    'Photo: CC BY-SA 4.0 via Wikimedia Commons', 25.562, 89.878, 'October to March', 'Mankachar Town (5 km) / Hatsingimari (22 km)', 'Sunrise to Sunset (06:00 - 17:30)',
    'Free / State Protected Heritage Site', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-daranga-mela', 'daranga-mela-cultural-grounds', 'Daranga Mela & Indo-Bhutan Cultural Gateway', 'দৰঙা মেলা আৰু ভাৰত-ভুটান সমন্বয় স্থলী', 'दरंगा मेला भारत-भूटान सांस्कृतिक गेटवे', 'festivals-cultural', 'Tamulpur', 'tamulpur', 'Daranga, Tamulpur',
    'Centuries-Old Historic Winter Trade Fair and Cultural Confluence with Bhutan', 'Daranga Mela, situated right along the international border with Samdrup Jongkhar (Bhutan), is one of the oldest winter trade and cultural confluences in Eastern India. For centuries, Bhutanese highlanders descend to Daranga during the winter months to trade woolens, mountain spices, musk, and traditional handicrafts with Assamese and Bodo merchants.', 'https://tamulpur.assam.gov.in/', 'https://tamulpur.assam.gov.in/', '/images/destinations/daranga-mela-cultural-grounds.jpg',
    'Photo: CC BY-SA 4.0 via Wikimedia Commons', 26.795, 91.505, 'November to February (During Daranga Mela)', 'Tamulpur HQ (18 km) / Rangia Junction (48 km) / Guwahati (85 km)', 'Open daily (Mela activities 08:00 - 20:00)',
    'Free / Open public cultural fair', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-bhairabkunda', 'bhairabkunda-scenic-confluence', 'Bhairabkunda Scenic River Confluence', 'ভৈৰৱকুণ্ড তিনিৰাজ্যৰ মিলনভূমি', 'भैरबकुंडा संगम', 'hills-waterfalls', 'Udalguri', 'udalguri', 'Bhairabkunda, Udalguri',
    'Spectacular Tri-Junction of Assam, Bhutan, and Arunachal Pradesh on the Dhansiri', 'Bhairabkunda is an awe-inspiring geographical wonder located at the tri-junction where the borders of Assam, Bhutan, and Arunachal Pradesh meet. Here, the glacial Himalayan rivers Jampui and Bhairabi merge to form the Dhansiri River against a panoramic wall of jagged green peaks. Renowned as a premier eco-tourism and winter picnic destination, Bhairabkunda features an ancient Shiva temple, ropeways, suspension bridges, and forested islands.', 'https://udalguri.assam.gov.in/', 'https://tourism.assam.gov.in/', '/images/destinations/bhairabkunda.jpg',
    'Photo: Dhansiri river at Bhairabkunda (CC BY-SA 4.0 via Wikimedia Commons)', 26.905, 92.115, 'October to April (Peak picnic and camping season)', 'Udalguri Town (24 km) / Tangla (42 km) / Guwahati (135 km)', '06:00 - 17:30 daily',
    'Free / Nominal parking fee at eco-park', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-bornadi-sanctuary', 'bornadi-wildlife-sanctuary', 'Bornadi Wildlife Sanctuary', 'বৰনদী অভয়াৰণ্য', 'बोरनदी वन्यजीव अभयारण्य', 'wildlife-birdwatching', 'Udalguri', 'udalguri', 'Bornadi, Indo-Bhutan Foothills',
    'Protected Foothills Refuge of the Critically Endangered Pygmy Hog and Hispid Hare', 'Spanning 26.22 sq km at the foothills of the Himalayas, Bornadi Wildlife Sanctuary was specially notified to preserve the critically endangered Pygmy Hog (Porcula salvania) and Hispid Hare (Caprolagus hispidus). The sanctuary blends sub-Himalayan bhabar grasslands with moist deciduous sal forests, harboring Asian elephants, leopards, peafowl, and Himalayan black bears.', 'https://udalguri.assam.gov.in/', 'https://forest.assam.gov.in/', '/images/destinations/bornadi-wildlife-sanctuary.jpg',
    'Photo: CC BY-SA 4.0 via Wikimedia Commons', 26.835, 91.755, 'November to April', 'Tangla (35 km) / Mangaldai (45 km) / Guwahati (110 km)', '06:00 - 16:30 daily',
    'Forest Department entry permit applicable at gate', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-khanduli-meadows', 'khanduli-highland-meadows', 'Khanduli Highland Meadows & Tourist Village', 'খান্দুলি সেউজীয়া মালভূমি', 'खांडुली हाईलैंड मीडोज', 'hills-waterfalls', 'West Karbi Anglong', 'west-karbi-anglong', 'Khanduli, West Karbi Anglong',
    'Breathtaking Rolling Green Hilltop Meadows on the Assam-Meghalaya Plateau', 'Khanduli is a picturesque highland plateau situated in West Karbi Anglong along the border with Meghalaya. The landscape features rolling green grassy hills reminiscent of European countryside, dotted with pine clusters and traditional Karbi tribal villages. The cool year-round climate and mist-clad valleys make Khanduli one of Assam''s most refreshing, unexplored eco-tourism frontiers.', 'https://westkarbianglong.assam.gov.in/', 'https://tourism.assam.gov.in/', '/images/destinations/khanduli-highland-meadows.jpg',
    'Photo: CC BY-SA 4.0 via Wikimedia Commons', 25.685, 92.425, 'September to April', 'Hamren HQ (42 km) / Jowai (28 km) / Guwahati (145 km via Shillong)', 'Open daily / Best experienced early morning and late afternoon',
    'Free / Community eco-tourism village', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-baithalangso-kopili', 'baithalangso-kopili-river-valley', 'Baithalangso Kopili River Bend & Cascades', 'বৈঠালাংছো কপিলী নদী উপত্যকা', 'बैथलांसो कोपिली नदी घाटी', 'river-experiences', 'West Karbi Anglong', 'west-karbi-anglong', 'Baithalangso, West Karbi Anglong',
    'Picturesque Mountain River Gorges, White Rapids and Forested Cliffs', 'Baithalangso is a scenic town nestled along a spectacular sweeping bend of the wild Kopili River in West Karbi Anglong. The river surges through deep granite gorges, forming sparkling rapids, natural swimming pools, and rocky islets framed by dense tropical forests.', 'https://westkarbianglong.assam.gov.in/', 'https://westkarbianglong.assam.gov.in/', '/images/destinations/baithalangso-kopili-river-valley.jpg',
    'Photo: CC BY-SA 4.0 via Wikimedia Commons', 25.925, 92.515, 'October to April', 'Kheroni (26 km) / Hojai (45 km) / Hamren (38 km)', 'Sunrise to Sunset daily',
    'Free / Open nature spot', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-barpeta-satra', 'barpeta-satra-heritage', 'Barpeta Satra & Kirtan Ghar', 'বৰপেটা সত্ৰ আৰু কীৰ্তন ঘৰ', 'बरपेटा सत्र', 'heritage-historic', 'Barpeta', 'barpeta', 'Barpeta Town',
    'Historic 1583 AD Vaishnavite Monastery Established by Mahapurusha Madhabdeva', 'Barpeta Satra, founded by Sri Sri Madhabdeva in 1583 AD, is one of the most venerated seats of Ekasarana Dharma in Assam. Known affectionately as the ''Barpeta Than'', its monumental Kirtan Ghar features grand wood-carved pillars, ornate ceiling frescoes, and traditional brass oil-lamps kept continuously burning. The satra is globally famous for its vibrant Doul Utsav (Holi) celebration, where thousands play phaguguri (colored powder) to traditional holigeet hymns.', 'https://barpeta.assam.gov.in/', 'https://barpeta.assam.gov.in/', '/images/destinations/barpeta-satra.jpg',
    'Photo: Historic Barpeta Satra Kirtan Ghar (CC BY-SA 4.0 via Wikimedia Commons)', 26.321, 91.008, 'October to April (Magnificent during Doul Utsav / Holi)', 'Barpeta Road Railway Station (21 km) / Guwahati (100 km)', '05:00 - 19:30 daily',
    'Free / Open for prayer and cultural exploration', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-biswanath-ghat', 'biswanath-ghat-gupta-kashi', 'Biswanath Ghat (Gupta Kashi)', 'বিশ্বনাথ ঘাট (গুপ্ত কাশী)', 'विश्वनाथ घाट', 'heritage-historic', 'Biswanath', 'biswanath', 'Biswanath Ghat, Biswanath',
    'UNESCO Tentative Heritage Riverfront, Submerged Shiva Temple and Historic Stone Ghats', 'Biswanath Ghat, reverently called ''Gupta Kashi'' (Hidden Varanasi), is a breathtaking historical pilgrimage riverbank on the Brahmaputra in Biswanath district. Awarded the Best Tourism Village of India in 2023, it features an ancient submerged Shiva temple whose stone shikhara emerges from the river during low-water winter months, ancient Ahom-era stone embankments, and scenic view of Kaziranga''s northern shores.', 'https://biswanath.assam.gov.in/', 'https://tourism.assam.gov.in/', '/images/destinations/biswanath-ghat-gupta-kashi.jpg',
    'Photo: CC BY-SA 4.0 via Wikimedia Commons', 26.665, 93.168, 'October to April (Submerged temple visible during winter)', 'Biswanath Chariali Town (10 km) / Tezpur (75 km)', '05:30 - 18:30 daily',
    'Free / Country boat rides available at nominal rates', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-khaspur-palace', 'khaspur-kachari-palace-ruins', 'Khaspur Ancient Kachari Royal Palace Ruins', 'খাসপুৰ কছাৰী ৰাজদৰবাৰৰ ধ্বংসাৱশেষ', 'खासपुर कचारी महल', 'heritage-historic', 'Cachar', 'cachar', 'Khaspur, Silchar',
    '18th-Century Historic Brick Capital Ruins of the Dimasa Kachari Kingdom', 'Khaspur, located 20 km from Silchar in Cachar district, served as the last capital of the Dimasa Kachari kingdom after their retreat from Maibang. Dating to the reign of King Tamradhwaj Narayan in the early 18th century, the archaeological complex preserves royal brick monuments including the grand Lion Gate (Singha Dwar), Sun Gate, Snan Mandir (Royal Bath), and ancient temple plinths.', 'https://cachar.assam.gov.in/', 'https://archaeology.assam.gov.in/', '/images/destinations/khaspur-palace.jpg',
    'Photo: Historic Khashpur Palace Ruins, Cachar (CC BY-SA 4.0 via Wikimedia Commons)', 24.885, 92.955, 'October to March', 'Silchar Town (20 km) / Silchar Airport Kumbhirgram (15 km)', 'Sunrise to Sunset (06:00 - 17:30)',
    'Free / Protected Archaeological Site', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-batadrava-than', 'batadrava-than-bordowa', 'Batadrava Than (Bordowa)', 'বটদ্ৰৱা থান (বৰদোৱা)', 'बटाद्रवा थान बोरदोवा', 'heritage-historic', 'Nagaon', 'nagaon', 'Batadrava, Nagaon',
    'Sacred Birthplace of Mahapurusha Srimanta Sankaradeva & Birthplace of Neo-Vaishnavism', 'Batadrava Than at Bordowa in Nagaon district is the holy birthplace of Srimanta Sankaradeva (1449–1568 AD), the saint, social reformer, playwright, and polymath who unified Assam through the Bhakti movement. Established by Sankaradeva at the age of nineteen in 1468 AD, it houses the first sacred Kirtan Ghar, the ancient Silikha tree under which the saint composed devotional classics, and the holy Akashiganga pond.', 'https://nagaon.assam.gov.in/', 'https://culturalaffairs.assam.gov.in/', '/images/destinations/batadrava-than.jpg',
    'Photo: Bordowa Than Cultural Project, Nagaon (CC BY-SA 4.0 via Wikimedia Commons)', 26.398, 92.625, 'Throughout the year (Especially during Sankaradeva Tithi and Doul Utsav)', 'Nagaon Town (16 km) / Guwahati (135 km) / NH 27', '05:00 - 19:30 daily',
    'Free / Open to all pilgrims and visitors', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-champamati-park', 'champamati-river-eco-park', 'Champamati River Eco Park & Barrage', 'চম্পাৱতী নদী ইক'' পাৰ্ক', 'चंपावती नदी इको पार्क', 'river-experiences', 'Chirang', 'chirang', 'Kajalgaon / Champamati',
    'Picturesque Mountain Riverfront and Scenic Foothills Eco-Tourism Park in Chirang', 'The Champamati River Eco Park in Chirang is a scenic recreational and nature getaway along the banks of the roaring Champamati river. Originating in the Bhutan Himalayas, the crystalline waters of Champamati rush past forested hills and pebble beaches, providing idyllic spots for family outings, river swimming, and tranquil birdwatching.', 'https://chirang.assam.gov.in/', 'https://chirang.assam.gov.in/', '/images/destinations/champamati-river-eco-park.jpg',
    'Champamati River Eco Point, Chirang (CC BY-SA 4.0 by Homen Hazarika via Wikimedia Commons)', 26.545, 90.468, 'October to April', 'Kajalgaon HQ (8 km) / New Bongaigaon Junction (25 km)', '07:00 - 17:30 daily',
    'Free / Nominal eco-park upkeep fee', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-kalamati-chirang', 'kalamati-eco-tourism-spot', 'Kalamati Eco Tourism Spot (Indo-Bhutan Border)', 'কালামাটি প্ৰকৃতি পৰ্যটন স্থলী', 'कालामाटी इको पर्यटन स्थल', 'hills-waterfalls', 'Chirang', 'chirang', 'Panbari, Chirang',
    'Unique Black-Soil Hill Cliffs and Pristine Mountain Springs on the Bhutan Border', 'Kalamati is a dramatic, offbeat eco-tourism destination situated in Chirang adjacent to the Panbari Range of Manas. Famed for its mineral-rich dark soil and therapeutic freshwater hill springs, wild elephants and deer regularly visit to ingest essential salts. The location offers exhilarating views of undisturbed Himalayan forests.', 'https://chirang.assam.gov.in/', 'https://forest.assam.gov.in/', '/images/destinations/kalamati-eco-tourism-spot.jpg',
    'Scenic Hills & Verdant Landscape of Karbi Anglong (CC BY-SA 4.0 by Mrinmoy Bordoloi via Wikimedia Commons)', 26.785, 90.395, 'November to April', 'Panbari (12 km) / Bijni (35 km) / New Bongaigaon (50 km)', '06:00 - 16:30 daily',
    'Forest Department eco-guidance fee', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-gerukamukh-dhemaji', 'gerukamukh-subansiri-gorge', 'Gerukamukh Subansiri River Gorge', 'গেৰুকামুখ সোৱণশিৰী নদী উপত্যকা', 'गेरूकामुख सुबनसिरी गॉर्ज', 'hills-waterfalls', 'Dhemaji', 'dhemaji', 'Gerukamukh, Dhemaji',
    'Spectacular Deep Mountain River Gorge of the Gold-Bearing Subansiri River', 'Gerukamukh is a breathtaking scenic canyon where the mighty Subansiri (''River of Gold'') bursts through the towering Himalayan foothills into the plains of Upper Assam. Surrounded by emerald jungle-clad mountains, dramatic limestone cliffs, and crystal azure pools, Gerukamukh is a paradise for nature photographers, anglers in pursuit of the Golden Mahseer, and river campers.', 'https://dhemaji.assam.gov.in/', 'https://tourism.assam.gov.in/', '/images/destinations/subansiri-river.jpg',
    'Photo: Subansiri River Gorge (CC BY-SA 4.0 via Wikimedia Commons)', 27.515, 94.265, 'October to April (Magnificent winter blue river waters)', 'Dhemaji Town (42 km) / Gogamukh (28 km) / North Lakhimpur (45 km)', '06:00 - 17:30 daily',
    'Free public access', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-ghuguha-dol', 'ghuguha-dol-historic-temple', 'Ghuguha Dol & Royal Ahom Monument', 'ঘুঘুহা দ''ল', 'घुगुहा दोल', 'heritage-historic', 'Dhemaji', 'dhemaji', 'Ghuguha, Dhemaji',
    'Historic 17th-Century Ahom Royal Temple Dedicated to Queen Jayamati', 'Ghuguha Dol is an important protected historic monument located in Dhemaji district. Built during the reign of Ahom Swargadeo Rudra Singha in memory of Queen Mother Jayamati, this ancient brick dol stands beside a grand historic royal tank (Pukhuri). The surrounding area is steeped in folklore and serves as an important archaeological showcase of Ahom architecture on the north bank.', 'https://dhemaji.assam.gov.in/', 'https://archaeology.assam.gov.in/', '/images/destinations/ghuguha-dol-historic-temple.jpg',
    'Historic Ahom Landscape & Heritage Site Kodomoni, Dhemaji (CC BY-SA 4.0 by Manasjyoti Neog via Wikimedia Commons)', 27.425, 94.515, 'October to March', 'Dhemaji Town (18 km) / Dibrugarh (via Bogibeel Bridge 65 km)', 'Sunrise to Sunset (06:00 - 17:30)',
    'Free / Protected Archaeological Monument', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-siddheswar-hailakandi', 'siddheswar-shiva-temple-barak', 'Siddheswar Temple & Kapila Muni Hermitage', 'সিদ্ধেশ্বৰ শিৱ দেৱালয়', 'सिद्धेश्वर मंदिर', 'heritage-historic', 'Hailakandi', 'hailakandi', 'Badarpurghat, Hailakandi',
    'Ancient Sacred Shiva Shrine on the Barak Riverbanks Associated with Sage Kapila', 'Siddheswar Temple is one of the most sacred and ancient spiritual sanctuaries in the Barak Valley, situated along the tranquil river bend of the Barak at Badarpurghat in Hailakandi. Believed to have been originally sanctified by Sage Kapila Muni, the temple is home to a swayambhu Shiva lingam and is the centerpiece of the grand annual Baruni Mela, where tens of thousands take holy dips in the river.', 'https://hailakandi.assam.gov.in/', 'https://hailakandi.assam.gov.in/', '/images/destinations/siddheswar-shiva-temple-barak.jpg',
    'Photo: CC BY-SA 4.0 via Wikimedia Commons', 24.895, 92.565, 'October to April (Magnificent during Baruni Snan Mela)', 'Badarpur Junction (6 km) / Hailakandi HQ (32 km) / Silchar (28 km)', '05:00 - 19:00 daily',
    'Free / Open to all pilgrims', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-pachbhai-lake', 'pachbhai-lake-tea-trails', 'Pachbhai Lake & Tea Estate Trails', 'পাঁচভাই বিল আৰু চাহ বাগিচা', 'पांचभाई झील एवं चाय बागान', 'tea-tourism', 'Hailakandi', 'hailakandi', 'Lala, Hailakandi',
    'Picturesque Wetland Lake Surrounded by Rolling Green Hillocks of Tea', 'Pachbhai Lake near Lala in Hailakandi district is a serene ecological wetland framed by rolling green tillas (tea hillocks) of southern Assam. The lake attracts numerous migratory ducks, whistling teals, and kingfishers during the winter months, while the adjacent heritage tea estates provide scenic walks and traditional tea-tasting experiences.', 'https://hailakandi.assam.gov.in/', 'https://hailakandi.assam.gov.in/', '/images/destinations/pachbhai-lake-tea-trails.jpg',
    'Photo: CC BY-SA 4.0 via Wikimedia Commons', 24.625, 92.615, 'October to March', 'Hailakandi Town (18 km) / Lala (6 km)', '06:00 - 17:30 daily',
    'Free / Open countryside exploration', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-kangthilangso', 'kangthilangso-waterfalls', 'Kangthilangso Waterfalls & Eco Trail', 'কাংথিলেংছ'' জলপ্ৰপাত', 'कांगथिलांगसो जलप्रपात', 'hills-waterfalls', 'Karbi Anglong', 'karbi-anglong', 'Dengaon, Karbi Anglong',
    'Spectacular Multi-Tiered Jungle Waterfalls Hidden in the Karbi Hills', 'Kangthilangso is one of Assam''s most breathtaking natural waterfalls, tucked away amidst dense tropical semi-evergreen rainforests in Karbi Anglong district. The waterfall plunges over multiple wide granite steps, forming deep turquoise pools framed by ancient moss-covered tree ferns and jungle vines. An eco-trek through indigenous Karbi villages leads visitors to this pristine cascading paradise.', 'https://karbianglong.assam.gov.in/', 'https://karbianglong.assam.gov.in/', '/images/destinations/kangthilangso-waterfalls.jpg',
    'Bheloghat Waterfalls in Karbi Anglong (CC BY-SA 4.0 by Dipankar Gogoi via Wikimedia Commons)', 26.155, 93.185, 'October to April (Crystal-clear water and pleasant jungle climate)', 'Dengaon (14 km) / Diphu HQ (65 km) / Guwahati (190 km)', '07:00 - 16:30 daily',
    'Community eco-development upkeep fee (nominal)', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-garampani-hotsprings', 'garampani-wildlife-hotsprings', 'Garampani Sanctuary & Natural Hot Springs', 'গৰমপানী অভয়াৰণ্য আৰু উষ্ণ প্ৰস্ৰৱণ', 'गरमपानी अभयारण्य एवं गर्म पानी के सोते', 'wildlife-birdwatching', 'Karbi Anglong', 'karbi-anglong', 'Garampani, Karbi Anglong',
    'Centuries-Old Geothermal Sulphur Springs and Hoolock Gibbon Sanctuary', 'Garampani, meaning ''hot water'', is one of the oldest wildlife sanctuaries in Assam, covering 6.05 sq km of tropical dense canopy. Famous for its natural geothermal hot sulphur springs which are believed to have therapeutic medicinal properties, the sanctuary is also an essential habitat for India''s only ape species, the Hoolock Gibbon, as well as capped langurs, elephants, and hornbills.', 'https://karbianglong.assam.gov.in/', 'https://forest.assam.gov.in/', '/images/destinations/garampani-wildlife-hotsprings.jpg',
    'Photo: CC BY-SA 4.0 via Wikimedia Commons', 26.425, 93.715, 'November to April', 'Golaghat (25 km) / Diphu (65 km) / Furkating Junction (30 km)', '06:00 - 17:00 daily',
    'Forest gate entry applicable', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-son-beel', 'son-beel-wetland-lake', 'Son Beel Wetland & Bird Sanctuary', 'সোণ বিল জলাশয় আৰু পক্ষী অভয়াৰণ্য', 'सोन बील आर्द्रभूमि', 'river-experiences', 'Karimganj', 'karimganj', 'Ramkrishna Nagar, Karimganj',
    'Asia''s Second Largest Seasonal Wetland Lake and Migratory Waterfowl Paradise', 'Son Beel in Karimganj district is the largest wetland in Assam and the second largest seasonal lake in Asia. During monsoon months, Son Beel transforms into a vast inland sea, while in dry winter months it converts into emerald green fertile rice paddies with shallow winding waterways. Hijol trees (Barringtonia acutangula) stand half-submerged in the shimmering waters, creating an ethereal spectacle for photographers and birdwatchers.', 'https://karimganj.assam.gov.in/', 'https://tourism.assam.gov.in/', '/images/destinations/son-beel.jpg',
    'Photo: Son Beel Wetland & Hijal Trees, Karimganj (CC BY-SA 4.0 via Wikimedia Commons)', 24.685, 92.445, 'October to March (Winter birding) & July to August (Vast lake vistas)', 'Karimganj Town (45 km) / Badarpur Junction (55 km) / Silchar (80 km)', 'Sunrise to Sunset daily',
    'Free / Country boat hire available from local fishermen', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-badarpur-fort', 'badarpur-historic-fort', 'Badarpur Fort (Barak Riverfront)', 'বৰদৰপুৰ ঐতিহাসিক দুৰ্গ', 'बदरपुर किला', 'heritage-historic', 'Karimganj', 'karimganj', 'Badarpurghat, Karimganj',
    '18th-Century Strategic Stone Fort on the Banks of the Barak River', 'Badarpur Fort is a significant historical fortification constructed along the northern bank of the Barak River in Karimganj district. Built strategically by the British East India Company in the late 18th century to monitor river trade and repel Burmese invasions, the stone battlements, arched cannon embrasures, and river sentry bastions remain remarkably preserved amidst tranquil riverside gardens.', 'https://karimganj.assam.gov.in/', 'https://archaeology.assam.gov.in/', '/images/destinations/badarpur-fort.jpg',
    'Photo: Historic Badarpur Fort over Barak River (CC BY-SA 4.0 via Wikimedia Commons)', 24.898, 92.545, 'October to March', 'Badarpur Railway Junction (3 km) / Karimganj Town (24 km)', 'Sunrise to Sunset (06:00 - 17:30)',
    'Free / Protected Archaeological Site', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-barpeta-doul-mandir', 'barpeta-doul-utsav-temple', 'Barpeta Doul Mandir & Historic Doul Utsav', 'বৰপেটা সত্ৰৰ দৌল মন্দিৰ আৰু মহা দৌল উৎসৱ (হোলী)', 'बरपेटा दौल मंदिर एवं दौल उत्सव (होली)', 'festivals-cultural', 'Barpeta', 'barpeta', 'Barpeta Satra Complex, Barpeta Town',
    'The Iconic 7-Tiered Hepta-Pyramidal Temple of Kalia Thakur and Grand 5-Day Spring Doul Utsav', 'The Doul Mandir at Barpeta Satra is a masterpiece of indigenous Assamese wooden and brick architecture. Featuring a unique seven-tiered (Sat-Tahala) pyramidal design, this historic sanctum was erected in the late 16th century by Sri Sri Mathuradas Burha Ata, the first Satradhikar appointed by Madhabdeva. During the spring Phalguna Purnima (Holi), the Doul Mandir becomes the focal point of the world-famous Barpeta Doul Utsav. The festival begins with Gondh (sacred bonfire), followed by Bhor Doul, and concludes with the spectacular ''Suwori'' (Phakuwa), where thousands of devotees clad in traditional white dhotis and gamusas chant devotional Holigeet and shower Phaguguri (red fragrant powder) in celestial ecstasy.', 'https://barpeta.assam.gov.in/', 'https://culturalaffairs.assam.gov.in/', '/images/destinations/barpeta-doul-mandir.jpg',
    'Photo: Celebrating Doul Utsav (Holi) at Barpeta Satra (CC BY-SA 4.0 via Wikimedia Commons)', 26.3215, 91.0085, 'March (During Doul Utsav / Phalguna Purnima) to April', 'Barpeta Road Railway Station (21 km) / LGBI Airport Guwahati (98 km) / NH 27', '05:00 - 20:00 daily (Open all night during active Doul Utsav days)',
    'Free / Open to all devotees and visitors (Footwear prohibited within sanctum)', '2026-10-31T00:00:00Z', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-kareng-ghar', 'kareng-ghar', 'Kareng Ghar (Garhgaon Royal Palace)', 'কাৰেং ঘৰ (গড়গাঁও ৰাজপ্ৰসাদ)', 'कारेङ घर (गढ़गांव)', 'heritage-historic', 'Charaideo', 'charaideo', 'Garhgaon, Charaideo',
    'Magnificent seven-storied royal palace of the Ahom Kingdom featuring indigenous brick and organic mortar architecture.', 'Kareng Ghar, also known as the Garhgaon Palace, was the official capital palace of the Tai-Ahom dynasty. Originally commissioned in 1540 by King Suklenmung and later rebuilt in brick and stone with indigenous mortar made of sticky Bora rice, duck eggs, and pulse flour by King Rajeshwar Singha in 1752, this four-storied structure (with subterranean chambers) represents the zenith of secular Ahom royal architecture. Surrounded by defensive moats and green maidans, it remains a premier protected monument of the Archaeological Survey of India.', 'https://asiguwahaticircle.gov.in/', 'https://assamtourism.gov.in/Explore.php', '/images/destinations/kareng-ghar.jpg',
    'Photo: Royal Palace of Garhgaon (CC BY-SA 4.0 via Wikimedia Commons)', 26.9634, 94.7578, 'October to April', 'Located in Garhgaon, 15 km from Sivasagar town and 13 km from Sonari. Well-connected by ASTC buses and auto-rickshaws along the Sivasagar-Nazira road.', '09:00 - 17:00 daily',
    '₹25 (Indians), ₹300 (Foreign Nationals)', '2026-11-01', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-da-parbatia', 'da-parbatia', 'Da-Parbatia Archaeological Ruins', 'দ-পৰ্বতীয়া প্ৰত্নতাত্ত্বিক স্থান', 'दा-पर्बतिया पुरातात्विक स्थल', 'heritage-historic', 'Sonitpur', 'sonitpur', 'Tezpur, Sonitpur',
    'Ancient 5th-century Gupta-era doorframe ruins representing the oldest surviving stone sculpture in Assam.', 'Da-Parbatia is one of the oldest archaeological sites in Assam, located just outside Tezpur. The main highlight is the breathtaking stone doorframe of a temple dating back to the 5th-6th century Gupta period, featuring exquisitely carved river goddesses Ganga and Yamuna standing on lotus pedestals accompanied by celestial attendants. The site also contains brick foundation plinths of an Ahom-era Shiva temple built on top of the ancient Gupta sanctuary.', 'https://asiguwahaticircle.gov.in/', 'https://sonitpur.assam.gov.in/', '/images/destinations/da-parbatia.jpg',
    'Photo: 5th-century Gupta Doorframe of Da-Parbatia (CC BY-SA 4.0 via Wikimedia Commons)', 26.6214, 92.7758, 'October to March', 'Located 5 km west of Tezpur city centre. Easily reached via auto-rickshaw or taxi.', '09:00 - 17:00 daily',
    'Free Entry (Protected National Monument)', '2026-11-01', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-ambari', 'ambari', 'Ambari Archaeological Site & Museum', 'আমবাৰী প্ৰত্নতাত্ত্বিক ক্ষেত্ৰ', 'अंबारी पुरातात्विक स्थल', 'heritage-historic', 'Kamrup Metropolitan', 'kamrup-metropolitan', 'Uzan Bazar, Guwahati',
    'Remarkable urban archaeological excavation site revealing ancient Kamarupa sculptural studios and medieval brick structures.', 'Accidentally unearthed in 1969 in the heart of Guwahati city, Ambari is a vital archaeological window into the art and trade of ancient Kamarupa from the 7th to the 13th centuries CE. Excavations revealed a major workshop for stone sculptors and artists producing stunning icons of Surya, Vishnu, Ganga, and Nataraja, along with Roman and Chinese pottery fragments proving international maritime trade connections along the Brahmaputra.', 'https://archaeology.assam.gov.in/', 'https://kamrupmetro.assam.gov.in/', '/images/destinations/ambari.jpg',
    'Photo: Ambari Medieval Sculptural Excavation (CC BY-SA 4.0 via Wikimedia Commons)', 26.1884, 91.7533, 'Year-round', 'Situated on GNB Road in Uzan Bazar, near Guwahati Club and Dighalipukhuri. Within walking distance from Guwahati Railway Station (1 km).', '10:00 - 16:30 (Closed on Mondays and Government Holidays)',
    '₹20 (Adults), ₹10 (Students)', '2026-11-01', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-digboi-oil-heritage', 'digboi-oil-heritage', 'Digboi Centenary Oil Museum & Heritage Area', 'ডিগবৈ তেল যাদুঘৰ আৰু ঐতিহ্য ক্ষেত্ৰ', 'डिगबोई तेल संग्रहालय', 'heritage-historic', 'Tinsukia', 'tinsukia', 'Digboi, Tinsukia',
    'Birthplace of the modern petroleum industry in Asia, featuring the historic Well No. 1 and an open-air machinery museum.', 'Digboi is the birthplace of the Indian and Asian petroleum industry, where crude oil was first drilled in 1889 following the legendary elephant trail discovery. The Digboi Centenary Oil Museum, established near the original Discovery Well No. 1, showcases antique steam locomotives, vintage drilling rigs, colonial-era bungalows, and the century-old refinery that remains operational to this day.', 'https://iocl.com/', 'https://tinsukia.assam.gov.in/', '/images/destinations/digboi-oil-heritage.jpg',
    'Photo: Historic Digboi Oil Well No. 1 (CC BY-SA 4.0 via Wikimedia Commons)', 27.3828, 95.6322, 'October to April', 'Located in Digboi town, 35 km from Tinsukia along NH-38. Well connected by rail and highway from Dibrugarh Airport (80 km).', '09:00 - 17:00 (Closed Mondays)',
    '₹50 (Adults), ₹20 (Students)', '2026-11-01', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-navagraha', 'navagraha-temple', 'Navagraha Temple (Chitrachal Hill)', 'নৱগ্ৰহ মন্দিৰ (চিত্ৰাচল পাহাৰ)', 'नवग्रह मंदिर (चित्राचल पहाड़ी)', 'heritage-historic', 'Kamrup Metropolitan', 'kamrup-metropolitan', 'Silpukhuri, Guwahati',
    'Ancient astronomical temple dedicated to the nine celestial bodies, built atop Chitrachal Hill by Ahom King Rajeswar Singha.', 'Perched atop Chitrachal Hill (Navagraha Hill) in south-eastern Guwahati, the Navagraha Temple is an ancient center of astronomical and astrological study. Rebuilt in 1752 by Ahom King Rajeswar Singha, the sanctum sanctorum enshrines nine Shiva Lingas representing the nine celestial planets (Surya, Chandra, Mangala, Budha, Brihaspati, Shukra, Shani, Rahu, and Ketu), each draped in distinct colored silk cloths.', 'https://kamrupmetro.assam.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/navagraha-temple.jpg',
    'Photo: Historic Navagraha Temple of Guwahati (CC BY-SA 4.0 via Wikimedia Commons)', 26.1953, 91.7678, 'Year-round', 'Accessible via motorable hilltop road from Silpukhuri or Chenikuthi. Taxi and auto-rickshaws go directly to temple gates.', '06:00 - 20:00 daily',
    'Free Entry', '2026-11-01', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-basistha', 'basistha-temple', 'Basistha Ashram & Historic Cave Temple', 'বশিষ্ঠাশ্ৰম মন্দিৰ', 'वशिष्ठाश्रम मंदिर', 'heritage-historic', 'Kamrup Metropolitan', 'kamrup-metropolitan', 'Basistha, Guwahati',
    'Serene Vedic hermitage of Sage Basistha set amidst the confluence of three mountain streams in the lush southern hills.', 'Basistha Ashram is a legendary pilgrimage site situated on the southern fringes of Guwahati, at the meeting point of three pristine mountain rivulets—Sandhya, Lalita, and Kanta. Believed to have been the hermitage of the Vedic sage Basistha, the existing brick temple was constructed by Ahom King Rajeswar Singha in the mid-18th century. Surrounded by dense reserve forest and soothing waterfalls, it offers a peaceful spiritual retreat.', 'https://kamrupmetro.assam.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/basistha-temple.jpg',
    'Photo: Basistha Temple & Stream (CC BY-SA 4.0 via Wikimedia Commons)', 26.1039, 91.7886, 'October to April', 'Located at the terminus of Basistha Road, 12 km from Guwahati Railway Station. Regular city bus and taxi service available.', '06:00 - 20:00 daily',
    'Free Entry', '2026-11-01', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-aswaklanta', 'aswaklanta-temple', 'Aswaklanta Historic Temple (North Guwahati)', 'অশ্বক্লান্ত মন্দিৰ (উত্তৰ গুৱাহাটী)', 'अश्वक्लांत मंदिर (उत्तर गुवाहाटी)', 'heritage-historic', 'Kamrup', 'kamrup-rural', 'North Guwahati, Kamrup',
    'Historic riverside temple overlooking the Brahmaputra, built in 1720 CE by Ahom King Siva Singha.', 'Aswaklanta Temple is an exquisite riverside shrine on the northern bank of the Brahmaputra in North Guwahati. According to folklore, Lord Krishna rested his horses here while on his way from Kundina to Dwarka. Constructed by Ahom King Siva Singha in 1720 CE, the complex comprises two shrines—Bar Aswaklanta on the rocky hill slope and Chhota Aswaklanta near the water’s edge—adorned with delicate stone sculptures of Dashavatara.', 'https://kamrup.assam.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/aswaklanta-temple.jpg',
    'Photo: Historic Aswaklanta Temple on the Brahmaputra (CC BY-SA 4.0 via Wikimedia Commons)', 26.1989, 91.7289, 'October to April', 'Accessible via ferry or ropeway across the Brahmaputra from Guwahati, or by road across Saraighat Bridge (18 km).', '06:00 - 18:30 daily',
    'Free Entry', '2026-11-01', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
),
(
    'tour-doul-govinda', 'doul-govinda-temple', 'Doul Govinda Temple & Holi Pilgrimage', 'দৌল গোবিন্দ মন্দিৰ', 'दौल गोविंद मंदिर', 'heritage-historic', 'Kamrup', 'kamrup-rural', 'Rajaduar, North Guwahati',
    'Renowned Krishna temple famous for its vibrant 5-day Doul Utsav (Holi) celebration and scenic riverside ghats.', 'Situated in Rajaduar on the foot of Chandrabharati hill in North Guwahati, Sri Sri Doul Govinda Temple is one of the most revered Krishna shrines in Assam. Thousands of devotees throng the temple during the spring festival of Doul Utsav (Holi) to partake in devotional singing (naam-prasanga), smearing of colored powder (phaku), and community prasad. The open ghats offer peaceful riverside contemplation looking across the Brahmaputra.', 'https://kamrup.assam.gov.in/', 'https://assamtourism.gov.in/', '/images/destinations/doul-govinda-temple.jpg',
    'Photo: Sacred Doul Govinda Temple (CC BY-SA 4.0 via Wikimedia Commons)', 26.2081, 91.7197, 'October to April (especially during Doul Utsav / March)', 'Located in North Guwahati, reached by passenger ferry from Fancy Bazar Ghat or by road via Saraighat Bridge.', '06:00 - 19:30 daily',
    'Free Entry', '2026-11-01', 'published', '["en", "as", "hi"]', '2026-10-25T00:00:00Z', '2026-10-30T10:00:00Z'
);
