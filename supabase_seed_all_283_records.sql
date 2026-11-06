INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-gauhati', 'Gauhati University', 'গুৱাহাটী বিশ্ববিদ্যালয়', 'education', 'University', 'Kamrup Metropolitan', 'Jalukbari, Guwahati', 'Public state university.', 'গুৱাহাটী বিশ্ববিদ্যালয় Kamrup Metropolitan জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://gauhati.ac.in/', 'https://highereducation.assam.gov.in/portlets/profiles-of-universities-and-colleges', 'Official source directory; re-check before publication', 'draft', '/images/directory/gauhati-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-dibrugarh', 'Dibrugarh University', 'ডিব্ৰুগড় বিশ্ববিদ্যালয়', 'education', 'University', 'Dibrugarh', 'Dibrugarh', 'Public state university in Upper Assam.', 'ডিব্ৰুগড় বিশ্ববিদ্যালয় Dibrugarh জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dibru.ac.in/', 'https://highereducation.assam.gov.in/portlets/profiles-of-universities-and-colleges', 'Official source directory; re-check before publication', 'draft', '/images/directory/dibrugarh-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-assam-university', 'Assam University', 'অসম বিশ্ববিদ্যালয় (শিলচৰ)', 'education', 'Central University', 'Cachar', 'Dargakona, Silchar', 'Central university serving the Barak Valley.', 'অসম বিশ্ববিদ্যালয় (শিলচৰ) Cachar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://www.aus.ac.in/', 'https://www.ugc.gov.in/universitydetails', 'Official source directory; re-check before publication', 'draft', '/images/directory/assam-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-tezpur', 'Tezpur University', 'তেজপুৰ কেন্দ্ৰীয় বিশ্ববিদ্যালয়', 'education', 'Central University', 'Sonitpur', 'Napaam, Tezpur', 'Central university in Assam.', 'তেজপুৰ কেন্দ্ৰীয় বিশ্ববিদ্যালয় Sonitpur জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'http://www.tezu.ernet.in/', 'https://www.ugc.gov.in/universitydetails', 'Official source directory; re-check before publication', 'draft', '/images/directory/tezpur-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-cotton', 'Cotton University', 'কটন বিশ্ববিদ্যালয়', 'education', 'State University', 'Kamrup Metropolitan', 'Panbazar, Guwahati', 'Public university with a long academic history.', 'কটন বিশ্ববিদ্যালয় Kamrup Metropolitan জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://cottonuniversity.ac.in/', 'https://highereducation.assam.gov.in/portlets/profiles-of-universities-and-colleges', 'Official source directory; re-check before publication', 'draft', '/images/directory/cotton-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iitg', 'Indian Institute of Technology Guwahati', NULL, 'education', 'Institute of National Importance', 'Kamrup', 'Amingaon, North Guwahati', 'Established in 1994 as the sixth IIT of India under the historic Assam Accord of 1985, IIT Guwahati is an autonomous Institute of National Importance spanning a 700-acre campus on the northern banks of the Brahmaputra River. Ranked #7 in Engineering and #9 Overall by NIRF, the institute houses 11 academic departments, 7 interdisciplinary research centres, and premier schools in health sciences, nanotechnology, and drone technology.', 'Indian Institute of Technology Guwahati Kamrup জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://www.iitg.ac.in/', 'https://www.iitg.ac.in/', 'IIT Guwahati Official Portal & NIRF Ministry of Education 2024', 'published', '/images/featured/iit-campus.jpg', 26.1906, 91.6916)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-nit-silchar', 'National Institute of Technology Silchar', NULL, 'education', 'Institute of National Importance', 'Cachar', 'Silchar', 'Public technical institute in the Barak Valley.', 'National Institute of Technology Silchar Cachar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://www.nits.ac.in/', 'https://www.nits.ac.in/', 'Official source directory; re-check before publication', 'draft', '/images/directory/nit-silchar.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-aau', 'Assam Agricultural University', 'অসম কৃষি বিশ্ববিদ্যালয়', 'education', 'Agricultural University', 'Jorhat', 'Jorhat', 'Agricultural education and research university.', 'অসম কৃষি বিশ্ববিদ্যালয় Jorhat জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://aau.ac.in/', 'https://www.ugc.gov.in/universitydetails', 'Official source directory; re-check before publication', 'draft', '/images/directory/assam-agricultural-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-astu', 'Assam Science and Technology University', 'অসম বিজ্ঞান আৰু প্ৰযুক্তিবিদ্যা বিশ্ববিদ্যালয়', 'education', 'State Technical University', 'Kamrup Metropolitan', 'Jalukbari, Guwahati', 'State university focused on science and technology.', 'অসম বিজ্ঞান আৰু প্ৰযুক্তিবিদ্যা বিশ্ববিদ্যালয় Kamrup Metropolitan জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://astu.ac.in/', 'https://highereducation.assam.gov.in/portlets/profiles-of-universities-and-colleges', 'Official source directory; re-check before publication', 'draft', '/images/destinations/chandubi-lake-eco-lagoon.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-kkhsou', 'Krishna Kanta Handiqui State Open University', NULL, 'education', 'Open University', 'Kamrup Metropolitan', 'Guwahati', 'State open university for open and distance learning.', 'Krishna Kanta Handiqui State Open University Kamrup Metropolitan জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://kkhsou.ac.in/', 'https://highereducation.assam.gov.in/portlets/profiles-of-universities-and-colleges', 'Official source directory; re-check before publication', 'draft', '/images/destinations/deepor-beel-ramsar-wetland.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-bodoland', 'Bodoland University', 'বড়োলেণ্ড বিশ্ববিদ্যালয় (কোকৰাঝাৰ)', 'education', 'State University', 'Kokrajhar', 'Kokrajhar', 'State university serving the Bodoland region.', 'বড়োলেণ্ড বিশ্ববিদ্যালয় (কোকৰাঝাৰ) Kokrajhar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://buniv.edu.in/', 'https://highereducation.assam.gov.in/portlets/profiles-of-universities-and-colleges', 'Official source directory; re-check before publication', 'draft', '/images/directory/kokrajhar-govt-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-aiims', 'AIIMS Guwahati', NULL, 'education', 'Medical Institute', 'Kamrup', 'Changsari', 'Medical education and healthcare institute.', 'AIIMS Guwahati Kamrup জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://aiimsguwahati.ac.in/', 'https://aiimsguwahati.ac.in/', 'Official source directory; re-check before publication', 'draft', '/images/featured/iit-admin.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('heritage-moidams', 'Charaideo Moidams', NULL, 'heritage', 'UNESCO World Heritage Site', 'Charaideo', 'Charaideo', 'Royal burial mounds of the Tai-Ahom dynasty; UNESCO-listed in 2024.', 'Charaideo Moidams Charaideo জিলাৰ এক গৌৰৱময় ঐতিহাসিক স্থাপত্য আৰু পুৰাতাত্ত্বিক ঐতিহ্য নিদৰ্শন।', 'https://whc.unesco.org/en/list/1711/', 'https://whc.unesco.org/en/list/1711/', 'Official source directory; re-check before publication', 'draft', '/images/destinations/charaideo-moidams-archaeological.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('heritage-rang-ghar', 'Rang Ghar', NULL, 'heritage', 'Ahom-era monument', 'Sivasagar', 'Sivasagar', 'Historic Ahom-era pavilion associated with royal ceremonies.', 'Rang Ghar Sivasagar জিলাৰ এক গৌৰৱময় ঐতিহাসিক স্থাপত্য আৰু পুৰাতাত্ত্বিক ঐতিহ্য নিদৰ্শন।', 'https://assamtourism.gov.in/Explore.php', 'https://assamtourism.gov.in/Explore.php', 'Official source directory; re-check before publication', 'draft', '/images/destinations/rang-ghar.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('heritage-talatal-ghar', 'Talatal Ghar', NULL, 'heritage', 'Ahom palace', 'Sivasagar', 'Rangpur area', 'Historic Ahom royal palace complex.', 'Talatal Ghar Sivasagar জিলাৰ এক গৌৰৱময় ঐতিহাসিক স্থাপত্য আৰু পুৰাতাত্ত্বিক ঐতিহ্য নিদৰ্শন।', 'https://assamtourism.gov.in/Explore.php', 'https://assamtourism.gov.in/Explore.php', 'Official source directory; re-check before publication', 'draft', '/images/destinations/talatal-ghar.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('heritage-kareng-ghar', 'Kareng Ghar', NULL, 'heritage', 'Ahom palace', 'Charaideo', 'Garhgaon area', 'Historic royal palace associated with the Ahom kingdom.', 'Kareng Ghar Charaideo জিলাৰ এক গৌৰৱময় ঐতিহাসিক স্থাপত্য আৰু পুৰাতাত্ত্বিক ঐতিহ্য নিদৰ্শন।', 'https://assamtourism.gov.in/Explore.php', 'https://assamtourism.gov.in/Explore.php', 'Official source directory; re-check before publication', 'draft', '/images/destinations/kareng-ghar.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('heritage-da-parbatia', 'Da-Parbatia Archaeological Site', NULL, 'heritage', 'Archaeological site', 'Sonitpur', 'Tezpur', 'Important archaeological site known for historic temple remains.', 'Da-Parbatia Archaeological Site Sonitpur জিলাৰ এক গৌৰৱময় ঐতিহাসিক স্থাপত্য আৰু পুৰাতাত্ত্বিক ঐতিহ্য নিদৰ্শন।', 'https://archaeology.assam.gov.in/', 'https://archaeology.assam.gov.in/information-services/detail/list-of-protected-archaeological-sites-and-monuments', 'Official source directory; re-check before publication', 'draft', '/images/destinations/da-parbatia.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('heritage-madan-kamdev', 'Madan Kamdev Archaeological Site', NULL, 'heritage', 'Archaeological site', 'Kamrup', 'Baihata Chariali area', 'Archaeological complex with historic temple remains and sculptures.', 'Madan Kamdev Archaeological Site Kamrup জিলাৰ এক গৌৰৱময় ঐতিহাসিক স্থাপত্য আৰু পুৰাতাত্ত্বিক ঐতিহ্য নিদৰ্শন।', 'https://archaeology.assam.gov.in/', 'https://archaeology.assam.gov.in/portlet-innerpage/archaeological-parks-and-site-museum', 'Official source directory; re-check before publication', 'draft', '/images/destinations/madan-kamdev-archaeological-ruins.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('heritage-ambari', 'Ambari Archaeological Site', NULL, 'heritage', 'Archaeological site and site museum', 'Kamrup Metropolitan', 'Guwahati', 'Archaeological site with a park and site museum.', 'Ambari Archaeological Site Kamrup Metropolitan জিলাৰ এক গৌৰৱময় ঐতিহাসিক স্থাপত্য আৰু পুৰাতাত্ত্বিক ঐতিহ্য নিদৰ্শন।', 'https://archaeology.assam.gov.in/', 'https://archaeology.assam.gov.in/portlet-innerpage/archaeological-parks-and-site-museum', 'Official source directory; re-check before publication', 'draft', '/images/destinations/ambari.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('heritage-surya-pahar', 'Sri Surya Pahar', NULL, 'heritage', 'Archaeological and religious site', 'Goalpara', 'Goalpara', 'Hilltop archaeological landscape associated with multiple religious traditions.', 'Sri Surya Pahar Goalpara জিলাৰ এক গৌৰৱময় ঐতিহাসিক স্থাপত্য আৰু পুৰাতাত্ত্বিক ঐতিহ্য নিদৰ্শন।', 'https://assamtourism.gov.in/Explore.php', 'https://assamtourism.gov.in/Explore.php', 'Official source directory; re-check before publication', 'draft', '/images/destinations/sri-surya-pahar-archaeological-site.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('heritage-digboi', 'Digboi Oil Heritage Area', NULL, 'heritage', 'Industrial heritage', 'Tinsukia', 'Digboi', 'Oil-industry heritage area; verify individual attraction details.', 'Digboi Oil Heritage Area Tinsukia জিলাৰ এক গৌৰৱময় ঐতিহাসিক স্থাপত্য আৰু পুৰাতাত্ত্বিক ঐতিহ্য নিদৰ্শন।', 'https://assamtourism.gov.in/Explore.php', 'https://assamtourism.gov.in/Explore.php', 'Official source directory; re-check before publication', 'draft', '/images/destinations/digboi-oil-heritage.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-kamakhya', 'Kamakhya Temple', 'মা কামাখ্যা দেৱালয়', 'temples-spiritual', 'Shakti Peetha', 'Kamrup Metropolitan', 'Nilachal Hill, Guwahati', 'Venerated 51 Shakti Peethas supreme epicenter where the Yoni mudra of Goddess Sati is enshrined. Rebuilt by Koch King Naranarayan and General Chilarai in 1565 with iconic beehive Nilachal dome architecture, world-renowned for the sacred annual Ambubachi Mela.', 'মা কামাখ্যা দেৱালয় Kamrup Metropolitan জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://kamakhyatemple.org/', 'https://kamrupmetro.assam.gov.in/', 'District Administration Kamrup Metro & Archaeological Survey of India', 'published', '/images/destinations/kamakhya.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-umananda', 'Umananda Shiva Temple', 'উমানন্দ শিৱ দেৱালয়', 'temples-spiritual', 'Temple', 'Kamrup Metropolitan', 'Peacock Island (Bhasmachala), Guwahati', 'Ancient Shiva temple situated on Peacock Island, the smallest inhabited river island in the world in the Brahmaputra. Built in 1694 by Ahom Swargadeo Gadadhar Singha, renowned for Maha Shivratri and ancient rock carvings.', 'উমানন্দ শিৱ দেৱালয় Kamrup Metropolitan জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://assamtourism.gov.in/', 'https://kamrupmetro.assam.gov.in/', 'District Administration Kamrup Metro & Directorate of Tourism Assam', 'published', '/images/destinations/umananda.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-navagraha', 'Navagraha Temple (Chitrachal Hill)', 'নৱগ্ৰহ মন্দিৰ (চিত্ৰাচল পাহাৰ)', 'temples-spiritual', 'Astronomical Temple', 'Kamrup Metropolitan', 'Chitrachal Hill, Silpukhuri, Guwahati', 'Sacred 18th-century temple dedicated to the nine celestial planetary bodies (Navagrahas) built by Ahom King Rajeswar Singha in 1752. Origin of ancient Guwahati''s title as Pragjyotishpura (''Eastern City of Astronomy'').', 'নৱগ্ৰহ মন্দিৰ (চিত্ৰাচল পাহাৰ) Kamrup Metropolitan জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://archaeology.assam.gov.in/', 'https://kamrupmetro.assam.gov.in/', 'Directorate of Archaeology Assam & Kamrup Metro District Registry', 'published', '/images/destinations/navagraha-temple.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-hayagriva', 'Hayagriva Madhava Temple, Hajo', 'হয়গ্ৰীৱ মাধৱ মন্দিৰ, হাজো', 'temples-spiritual', 'Temple & Heritage', 'Kamrup', 'Monikut Hill, Hajo', 'Ancient stone temple crowning Monikut Hill in Hajo, rebuilt by King Raghudeva Narayan in 1583. Confluence of Hindu Vaishnavism and Tibetan/Mahayana Buddhism, home to sacred Madhab Pukhuri and the endangered Black Softshell Turtle.', 'হয়গ্ৰীৱ মাধৱ মন্দিৰ, হাজো Kamrup জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://kamrup.assam.gov.in/', 'https://kamrup.assam.gov.in/', 'Directorate of Archaeology Assam & Kamrup District Administration', 'published', '/images/destinations/hayagriva-madhava-temple.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-sivadol', 'Sivasagar Sivadol & Borpukhuri', 'শিৱসাগৰ শিৱদ''ল আৰু বৰপুখুৰী', 'temples-spiritual', 'Devalaya & Heritage', 'Sivasagar', 'Borpukhuri Bank, Sivasagar Town', 'Tallest Shiva temple in India (104 feet) built in 1734 by Queen Ambika (wife of King Siva Singha). Crowned by a magnificent 8-foot golden dome (Kolosi) and surrounded by Vishnudol and Devidol.', 'শিৱসাগৰ শিৱদ''ল আৰু বৰপুখুৰী Sivasagar জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://sivasagar.assam.gov.in/', 'https://sivasagar.assam.gov.in/', 'Archaeological Survey of India & Sivasagar District Administration', 'published', '/images/destinations/sivadol.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-basistha', 'Basistha Ashram & Temple', 'বশিষ্ঠ আশ্ৰম আৰু দেৱালয়', 'temples-spiritual', 'Ashram & Temple', 'Kamrup Metropolitan', 'Basistha, Southern Guwahati', 'Ancient hermitage attributed to Vedic Sage Vasistha at the confluence of three holy mountain rivulets (Sandhya, Lalita, and Kanta). Features 18th-century stone temple built by Ahom King Rajeswar Singha with natural cave sanctum.', 'বশিষ্ঠ আশ্ৰম আৰু দেৱালয় Kamrup Metropolitan জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://archaeology.assam.gov.in/', 'https://kamrupmetro.assam.gov.in/', 'Directorate of Archaeology Assam State Protected Monuments', 'published', '/images/destinations/basistha-temple.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-aswaklanta', 'Aswaklanta Temple', 'অশ্বক্লান্ত দেৱালয়', 'temples-spiritual', 'Temple', 'Kamrup', 'Aswaklanta Hill, North Guwahati', 'Historic Vishnu temple built by Ahom King Siva Singha in 1720 on rocky granite outcrops overlooking the Brahmaputra. Legendary site where Lord Krishna rested his horses before vanquishing Narakasura.', 'অশ্বক্লান্ত দেৱালয় Kamrup জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://archaeology.assam.gov.in/', 'https://kamrup.assam.gov.in/', 'Directorate of Archaeology Assam & Kamrup District Administration', 'published', '/images/destinations/aswaklanta-temple.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-doul-govinda', 'Doul Govinda Temple', 'দৌল গোবিন্দ মন্দিৰ', 'temples-spiritual', 'Temple', 'Kamrup', 'Rajaduar, North Guwahati', 'Celebrated Krishna shrine situated at the foot of Chandrabharati Hill in North Guwahati. Epicenter of grand annual Holi / Doul Utsav celebrations attracting over 100,000 devotees across Assam.', 'দৌল গোবিন্দ মন্দিৰ Kamrup জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://kamrup.assam.gov.in/', 'https://kamrup.assam.gov.in/', 'Kamrup District Administration & Assam Tourism', 'published', '/images/destinations/doul-govinda-temple.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('nature-kaziranga', 'Kaziranga National Park', 'কাজিৰঙা ৰাষ্ট্ৰীয় উদ্যান', 'nature-wildlife', 'National Park and Tiger Reserve', 'Golaghat / Nagaon / Sonitpur / Biswanath', 'Kohora & Bagori Ranges, Bokakhat', 'Assam''s iconic UNESCO World Heritage Site and premier Tiger Reserve spanning 1,090 sq km across the Brahmaputra floodplain. Home to over 2,600 great Indian one-horned rhinoceroses (two-thirds of the world''s population), wild water buffalo, royal Bengal tigers, Asian elephants, and swamp deer.', 'কাজিৰঙা ৰাষ্ট্ৰীয় উদ্যান Golaghat / Nagaon / Sonitpur / Biswanath জিলাৰ এক সমৃদ্ধ জৈৱ-বৈচিত্ৰ্যপূৰ্ণ সংৰক্ষিত বনাঞ্চল আৰু বন্যপ্ৰাণী আশ্ৰয়স্থল।', 'https://kaziranga.assam.gov.in/', 'https://kaziranga.assam.gov.in/', 'Assam Environment, Forest & Climate Change Department', 'published', '/images/destinations/kaziranga.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('nature-manas', 'Manas National Park', 'মানস ৰাষ্ট্ৰীয় উদ্যান', 'nature-wildlife', 'National Park and Tiger Reserve', 'Baksa / Chirang (BTR)', 'Barpeta Road / Bansbari / Mothanguri', 'UNESCO World Heritage Site, Project Tiger Reserve, Elephant Reserve, and Biosphere Reserve situated in the Eastern Himalayan foothills contiguous with Bhutan''s Royal Manas. Famous for rare and endangered endemic species: golden langur, pygmy hog, hispid hare, and wild water buffalo.', 'মানস ৰাষ্ট্ৰীয় উদ্যান Baksa / Chirang (BTR) জিলাৰ এক সমৃদ্ধ জৈৱ-বৈচিত্ৰ্যপূৰ্ণ সংৰক্ষিত বনাঞ্চল আৰু বন্যপ্ৰাণী আশ্ৰয়স্থল।', 'https://manasnationalpark.assam.gov.in/', 'https://manasnationalpark.assam.gov.in/', 'Manas Tiger Project Directorate & Bodoland Forest Department', 'published', '/images/destinations/manas.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('nature-dibru', 'Dibru-Saikhowa National Park', 'ডিব্ৰু-ছৈখোৱা ৰাষ্ট্ৰীয় উদ্যান', 'nature-wildlife', 'National Park', 'Tinsukia / Dibrugarh', 'Guijan Ghat / Maguri Motapung Beel', 'Unique island biosphere reserve bounded by the Brahmaputra, Lohit, and Dibru rivers. World-renowned for rare feral horses roaming wild in alluvial wetlands, the White-Winged Wood Duck, Gangetic river dolphins, and over 382 species of migratory and resident wetland birds.', 'ডিব্ৰু-ছৈখোৱা ৰাষ্ট্ৰীয় উদ্যান Tinsukia / Dibrugarh জিলাৰ এক সমৃদ্ধ জৈৱ-বৈচিত্ৰ্যপূৰ্ণ সংৰক্ষিত বনাঞ্চল আৰু বন্যপ্ৰাণী আশ্ৰয়স্থল।', 'https://forest.assam.gov.in/', 'https://forest.assam.gov.in/', 'Tinsukia Wildlife Division, Government of Assam', 'published', '/images/destinations/dibru-saikhowa.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('nature-nameri', 'Nameri National Park', 'নামেৰি ৰাষ্ট্ৰীয় উদ্যান', 'nature-wildlife', 'National Park and Tiger Reserve', 'Sonitpur', 'Potasali / Jia Bhoroli Valley, Bhalukpong Border', 'Spanning 200 sq km at the foothills of the Eastern Himalayas bordering Arunachal Pradesh. Celebrated for pristine semi-evergreen and moist deciduous forests along the sparkling Jia Bhoroli river, vital sanctuary for the endangered White-Winged Wood Duck, Asian elephants, and Golden Mahseer.', 'নামেৰি ৰাষ্ট্ৰীয় উদ্যান Sonitpur জিলাৰ এক সমৃদ্ধ জৈৱ-বৈচিত্ৰ্যপূৰ্ণ সংৰক্ষিত বনাঞ্চল আৰু বন্যপ্ৰাণী আশ্ৰয়স্থল।', 'https://forest.assam.gov.in/', 'https://forest.assam.gov.in/', 'Western Assam Wildlife Division, Tezpur', 'published', '/images/destinations/nameri.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('nature-orang', 'Orang National Park', 'ৰাজীৱ গান্ধী ওৰাং ৰাষ্ট্ৰীয় উদ্যান', 'nature-wildlife', 'National Park and Tiger Reserve', 'Darrang / Udalguri / Sonitpur', 'Silbori / Mazbat / Dhekiajuli', 'Known affectionately as the ''Mini Kaziranga'', Orang is a 78.8 sq km National Park and Tiger Reserve on the north bank of the Brahmaputra. Famous for dense populations of the one-horned rhinoceros, Royal Bengal tigers, pygmy hogs, gangetic dolphins, and migratory waterfowl.', 'ৰাজীৱ গান্ধী ওৰাং ৰাষ্ট্ৰীয় উদ্যান Darrang / Udalguri / Sonitpur জিলাৰ এক সমৃদ্ধ জৈৱ-বৈচিত্ৰ্যপূৰ্ণ সংৰক্ষিত বনাঞ্চল আৰু বন্যপ্ৰাণী আশ্ৰয়স্থল।', 'https://forest.assam.gov.in/', 'https://forest.assam.gov.in/', 'Mangaldai Wildlife Division, Government of Assam', 'published', '/images/destinations/orang-national-park.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('nature-dehing', 'Dehing Patkai National Park', 'দেহিং পাটকাই ৰাষ্ট্ৰীয় উদ্যান', 'nature-wildlife', 'National Park', 'Dibrugarh / Tinsukia', 'Jeypore / Digboi / Margherita Rainforest Belt', 'Assam''s 7th National Park, proclaimed in June 2021, preserving the largest stretch of virgin lowland tropical evergreen rainforest in India (''The Amazon of the East''). Towering Hollong trees, 101 orchid species, Hoolock Gibbons, Asian elephants, clouded leopards, and seven species of wild cats.', 'দেহিং পাটকাই ৰাষ্ট্ৰীয় উদ্যান Dibrugarh / Tinsukia জিলাৰ এক সমৃদ্ধ জৈৱ-বৈচিত্ৰ্যপূৰ্ণ সংৰক্ষিত বনাঞ্চল আৰু বন্যপ্ৰাণী আশ্ৰয়স্থল।', 'https://forest.assam.gov.in/', 'https://forest.assam.gov.in/', 'Digboi Forest Division, Assam Forest Department', 'published', '/images/destinations/dehing-patkai.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('nature-raimona', 'Raimona National Park', 'ৰায়মনা ৰাষ্ট্ৰীয় উদ্যান', 'nature-wildlife', 'National Park', 'Kokrajhar (BTR)', 'Gossaigaon / Ripu Reserve Forest, Bhutan Border', 'Assam''s 6th National Park, notified on World Environment Day 2021, encompassing 422 sq km of contiguous Ripu and Chirang forest in Bodoland. Renowned sanctuary for the endemic Golden Langur, Asian elephant, Royal Bengal tiger, Clouded leopard, and 150+ species of Himalayan butterflies.', 'ৰায়মনা ৰাষ্ট্ৰীয় উদ্যান Kokrajhar (BTR) জিলাৰ এক সমৃদ্ধ জৈৱ-বৈচিত্ৰ্যপূৰ্ণ সংৰক্ষিত বনাঞ্চল আৰু বন্যপ্ৰাণী আশ্ৰয়স্থল।', 'https://bodoland.gov.in/', 'https://forest.assam.gov.in/', 'Kachugaon Forest Division & Bodoland Territorial Region', 'published', '/images/destinations/raimona-national-park.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('nature-pobitora', 'Pobitora Wildlife Sanctuary', 'পবিতৰা অভয়াৰণ্য', 'nature-wildlife', 'Wildlife Sanctuary', 'Morigaon', 'Mayong, Morigaon District', 'World-famous 38.8 sq km wildlife sanctuary holding the highest ecological density of the Great Indian One-Horned Rhinoceros on earth. A vibrant grassland sanctuary also teeming with wild boar, Asiatic buffalo, barking deer, and thousands of migratory waterfowl in Haduk Beel.', 'পবিতৰা অভয়াৰণ্য Morigaon জিলাৰ এক সমৃদ্ধ জৈৱ-বৈচিত্ৰ্যপূৰ্ণ সংৰক্ষিত বনাঞ্চল আৰু বন্যপ্ৰাণী আশ্ৰয়স্থল।', 'https://forest.assam.gov.in/', 'https://forest.assam.gov.in/', 'Guwahati Wildlife Division, Government of Assam', 'published', '/images/destinations/pobitora.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('nature-deepor', 'Deepor Beel Wildlife Sanctuary & Ramsar Wetland', 'দীপাৰ বিল অভয়াৰণ্য আৰু ৰামছাৰ আৰ্দ্ৰভূমি', 'nature-wildlife', 'Wetland and bird habitat', 'Kamrup Metropolitan', 'South-West Guwahati, Kamrup Metro', 'Assam''s sole designated Ramsar Wetland of International Importance and Important Bird Area (IBA). A permanent freshwater riverine lake harboring over 219 bird species including the critically endangered Greater Adjutant Stork, Spot-billed Pelican, and a vital elephant corridor from the Rani-Garbhanga reserve.', 'দীপাৰ বিল অভয়াৰণ্য আৰু ৰামছাৰ আৰ্দ্ৰভূমি Kamrup Metropolitan জিলাৰ এক সমৃদ্ধ জৈৱ-বৈচিত্ৰ্যপূৰ্ণ সংৰক্ষিত বনাঞ্চল আৰু বন্যপ্ৰাণী আশ্ৰয়স্থল।', 'https://forest.assam.gov.in/', 'https://forest.assam.gov.in/', 'Assam State Wetland Authority & Forest Dept', 'published', '/images/destinations/deepor-beel-ramsar-wetland.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('museum-assam', 'Assam State Museum', NULL, 'museums-culture', 'Museum', 'Kamrup Metropolitan', 'Ambari, Guwahati', 'Collections related to Assam''s archaeology, history, art and culture.', 'Assam State Museum Kamrup Metropolitan জিলাৰ এক প্ৰধান সাংস্কৃতিক সংগ্ৰহালয়, যিয়ে অসমৰ চহকী কলা আৰু ঐতিহ্য প্ৰদৰ্শন কৰে।', 'https://museums.assam.gov.in/', 'https://museums.assam.gov.in/', 'Official source directory; re-check before publication', 'draft', '/images/directory/assam-state-museum.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('culture-kalakshetra', 'Srimanta Sankaradeva Kalakshetra', NULL, 'museums-culture', 'Cultural complex and museum', 'Kamrup Metropolitan', 'Panjabari, Guwahati', 'Cultural complex showcasing Assamese and Northeast Indian heritage.', 'Srimanta Sankaradeva Kalakshetra Kamrup Metropolitan জিলাৰ এক প্ৰধান সাংস্কৃতিক সংগ্ৰহালয়, যিয়ে অসমৰ চহকী কলা আৰু ঐতিহ্য প্ৰদৰ্শন কৰে।', 'https://culturalaffairs.assam.gov.in/', 'https://culturalaffairs.assam.gov.in/', 'Official source directory; re-check before publication', 'draft', '/images/directory/srimanta-kalakshetra.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('culture-majuli', 'Majuli Satras', NULL, 'museums-culture', 'Living cultural heritage', 'Majuli', 'Majuli island', 'Satras preserve Neo-Vaishnavite traditions, arts, music and community life.', 'Majuli Satras Majuli জিলাৰ এক প্ৰধান সাংস্কৃতিক সংগ্ৰহালয়, যিয়ে অসমৰ চহকী কলা আৰু ঐতিহ্য প্ৰদৰ্শন কৰে।', 'https://assamtourism.gov.in/Explore.php', 'https://assamtourism.gov.in/Explore.php', 'Official source directory; re-check before publication', 'draft', '/images/destinations/majuli-satras.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('directory-districts', 'Official Assam District Directory', NULL, 'public-services', 'Government directory', 'All Assam', 'Statewide', 'Official links to Assam district administrations.', 'Official Assam District Directory All Assam জিলাৰ নাগৰিকসকলৰ সেৱাৰ বাবে এক চৰকাৰী প্ৰশাসনিক সেৱা কেন্দ্ৰ।', 'https://gad.assam.gov.in/information-and-services/district-websites', 'https://gad.assam.gov.in/information-and-services/district-websites', 'Official source directory; re-check before publication', 'draft', '/images/destinations/brahmaputra-cruises.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('directory-universities', 'Assam Universities and Colleges Directory', NULL, 'public-services', 'Education directory', 'All Assam', 'Statewide', 'Government of Assam directory of universities, colleges and technical institutions.', 'Assam Universities and Colleges Directory All Assam জিলাৰ নাগৰিকসকলৰ সেৱাৰ বাবে এক চৰকাৰী প্ৰশাসনিক সেৱা কেন্দ্ৰ।', 'https://highereducation.assam.gov.in/portlets/profiles-of-universities-and-colleges', 'https://highereducation.assam.gov.in/portlets/profiles-of-universities-and-colleges', 'Official source directory; re-check before publication', 'draft', '/images/directory/gauhati-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('directory-ugc', 'UGC University Directory', NULL, 'public-services', 'National education directory', 'All Assam', 'India-wide directory filtered for Assam', 'Cross-check university status and official websites.', 'UGC University Directory All Assam জিলাৰ নাগৰিকসকলৰ সেৱাৰ বাবে এক চৰকাৰী প্ৰশাসনিক সেৱা কেন্দ্ৰ।', 'https://www.ugc.gov.in/universitydetails', 'https://www.ugc.gov.in/universitydetails', 'Official source directory; re-check before publication', 'draft', '/images/directory/cotton-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('directory-archaeology', 'Protected Archaeological Sites and Monuments of Assam', NULL, 'public-services', 'Official heritage directory', 'All Assam', 'Statewide', 'Official state archaeology list of protected sites and monuments.', 'Protected Archaeological Sites and Monuments of Assam All Assam জিলাৰ নাগৰিকসকলৰ সেৱাৰ বাবে এক চৰকাৰী প্ৰশাসনিক সেৱা কেন্দ্ৰ।', 'https://archaeology.assam.gov.in/information-services/detail/list-of-protected-archaeological-sites-and-monuments', 'https://archaeology.assam.gov.in/information-services/detail/list-of-protected-archaeological-sites-and-monuments', 'Official source directory; re-check before publication', 'draft', '/images/destinations/charaideo.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('directory-tourism', 'Assam Tourism Destinations', NULL, 'public-services', 'Official tourism directory', 'All Assam', 'Statewide', 'Official tourism destination information.', 'Assam Tourism Destinations All Assam জিলাৰ নাগৰিকসকলৰ সেৱাৰ বাবে এক চৰকাৰী প্ৰশাসনিক সেৱা কেন্দ্ৰ।', 'https://assamtourism.gov.in/Explore.php', 'https://assamtourism.gov.in/Explore.php', 'Official source directory; re-check before publication', 'draft', '/images/destinations/kaziranga.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('directory-parks', 'Assam National Parks', NULL, 'public-services', 'Official wildlife directory', 'All Assam', 'Statewide', 'Official list of national parks in Assam.', 'Assam National Parks All Assam জিলাৰ নাগৰিকসকলৰ সেৱাৰ বাবে এক চৰকাৰী প্ৰশাসনিক সেৱা কেন্দ্ৰ।', 'https://forest.assam.gov.in/portlets/national-park', 'https://forest.assam.gov.in/portlets/national-park', 'Official source directory; re-check before publication', 'draft', '/images/directory/cotton-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-gmch', 'Gauhati Medical College & Hospital (GMCH)', NULL, 'education', 'Medical College', 'Kamrup Metropolitan', 'Bhangagarh, Guwahati', 'Premier government medical college and multi-specialty tertiary healthcare teaching hospital established in 1960.', 'Gauhati Medical College & Hospital (GMCH) Kamrup Metropolitan জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://gmch.gov.in/', 'https://dme.assam.gov.in/', 'Directorate of Medical Education, Assam', 'published', '/images/directory/gauhati-medical-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-aec', 'Assam Engineering College (AEC)', NULL, 'education', 'Engineering College', 'Kamrup Metropolitan', 'Jalukbari, Guwahati', 'Oldest engineering college in North-East India, established in 1955, offering undergraduate and doctoral technical education.', 'Assam Engineering College (AEC) Kamrup Metropolitan জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://aec.ac.in/', 'https://highereducation.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/directory/aec-guwahati.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-bborooah', 'B. Borooah College', NULL, 'education', 'Degree College', 'Kamrup Metropolitan', 'Ulubari, Guwahati', 'Prestigious autonomous degree college established in 1943 named after philanthropist Bholanath Borooah.', 'B. Borooah College Kamrup Metropolitan জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://bborooahcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University & UGC Affiliated', 'published', '/images/directory/b-borooah-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-handique', 'Handique Girls'' College', NULL, 'education', 'Degree College', 'Kamrup Metropolitan', 'Dighalipukhuri, Guwahati', 'First women''s college in North-East India established in 1939, accredited with ''A'' grade by NAAC.', 'Handique Girls'' College Kamrup Metropolitan জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://hgcollege.edu.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/directory/handique-girls-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-dk-college', 'Dakshin Kamrup College (D.K. College)', NULL, 'education', 'Degree College', 'Kamrup', 'Mirza, Kamrup', 'Prominent co-educational premier degree college of rural Kamrup established in 1961.', 'Dakshin Kamrup College (D.K. College) Kamrup জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dkcollegemirza.com/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/directory/dk-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-rangia-college', 'Rangia College', NULL, 'education', 'Degree College', 'Kamrup', 'Rangia, Kamrup', 'Leading higher educational institution of Rangia subdivision established in 1963.', 'Rangia College Kamrup জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://rangiacollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/directory/rangia-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-sualkuchi-college', 'Sualkuchi Budram Madhab Satradhikar College', NULL, 'education', 'Degree College', 'Kamrup', 'Sualkuchi, Kamrup', 'Renowned degree college situated in the silk capital Sualkuchi, established in 1963.', 'Sualkuchi Budram Madhab Satradhikar College Kamrup জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://sbmscollege.org/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/featured/handloom-sualkuchi.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-barama-college', 'Barama College', NULL, 'education', 'Degree College', 'Baksa', 'Barama, Baksa', 'Premier government-aided multi-faculty degree college established in 1971 in Baksa district.', 'Barama College Baksa জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://baramacollegebarama.edu.in/', 'https://highereducation.assam.gov.in/', 'Bodoland University Affiliated', 'published', '/images/directory/barama-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-dhamdhama-college', 'Dhamdhama Anchalik College', NULL, 'education', 'Degree College', 'Baksa', 'Niz Dhamdhama, Baksa', 'Key educational institution providing undergraduate degrees in arts and humanities in Baksa.', 'Dhamdhama Anchalik College Baksa জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://www.dacollege.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/destinations/bornadi-wildlife-sanctuary.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-salbari-college', 'Salbari College', NULL, 'education', 'Degree College', 'Baksa', 'Salbari, Baksa', 'Established college serving the rural and Bodo communities near Manas National Park.', 'Salbari College Baksa জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://salbaricollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Bodoland University Affiliated', 'published', '/images/destinations/manas.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-goreswar-college', 'Goreswar College', NULL, 'education', 'Degree College', 'Baksa', 'Goreswar, Baksa', 'Pioneering higher educational institution of eastern Baksa established in 1974.', 'Goreswar College Baksa জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://goreswarcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Bodoland University Affiliated', 'published', '/images/destinations/daranga-mela-cultural-grounds.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-mc-college', 'Madhab Choudhury College (M.C. College)', NULL, 'education', 'Degree College', 'Barpeta', 'Barpeta Town', 'Fourth oldest college in Assam, founded in 1939, offering undergraduate programs in Arts and Sciences.', 'Madhab Choudhury College (M.C. College) Barpeta জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://mccollege.edu.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/directory/mc-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-faamc', 'Fakhruddin Ali Ahmed Medical College (FAAMC)', NULL, 'education', 'Medical College', 'Barpeta', 'Jotigaon, Barpeta', 'Major state government medical college and tertiary healthcare teaching hospital established in 2011.', 'Fakhruddin Ali Ahmed Medical College (FAAMC) Barpeta জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://faamch.assam.gov.in/', 'https://dme.assam.gov.in/', 'Srimanta Sankaradeva University of Health Sciences', 'published', '/images/events/howly-raas-mandir.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-bh-college', 'B.H. College (Barnagar College)', NULL, 'education', 'Degree College', 'Barpeta', 'Howly, Barpeta', 'Famous multi-faculty premier college of lower Assam founded in 1966 offering Arts, Science, and Commerce.', 'B.H. College (Barnagar College) Barpeta জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://bhcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/directory/bh-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-barpeta-girls', 'Barpeta Girls'' College', NULL, 'education', 'Degree College', 'Barpeta', 'Barpeta Town', 'Leading women''s degree college in Barpeta dedicated to female higher education since 1978.', 'Barpeta Girls'' College Barpeta জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://www.barpetagirlscollege.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/directory/barpeta-girls-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-bhattadev-univ', 'Bhattadev University', 'ভট্টদেৱ বিশ্ববিদ্যালয় (পাঠশালা)', 'education', 'University', 'Bajali', 'Pathsala, Bajali', 'State collegiate public university established by upgrading the historic Bajali College (founded 1955).', 'ভট্টদেৱ বিশ্ববিদ্যালয় (পাঠশালা) Bajali জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://www.bhattadevuniversity.ac.in/', 'https://highereducation.assam.gov.in/', 'Government of Assam State University', 'published', '/images/directory/bhattadev-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-nirmal-haloi', 'Nirmal Haloi College', NULL, 'education', 'Degree College', 'Bajali', 'Patacharkuchi, Bajali', 'Prominent higher education institution in Patacharkuchi founded in 1979 offering undergraduate courses.', 'Nirmal Haloi College Bajali জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://nhcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/events/howly-raas-mandir.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-bajali-ttc', 'Bajali Teachers'' Training College', NULL, 'education', 'Training Institute', 'Bajali', 'Pathsala, Bajali', 'Eminent teacher training college recognized by NCTE and affiliated with Gauhati University.', 'Bajali Teachers'' Training College Bajali জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'http://www.bajalittcollege.in/', 'https://highereducation.assam.gov.in/', 'National Council for Teacher Education (NCTE)', 'published', '/images/directory/bhattadev-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-biswanath-college', 'Biswanath College', NULL, 'education', 'Degree College', 'Biswanath', 'Biswanath Chariali', 'Premier degree college of Biswanath district established in 1960 offering Arts and Science programs.', 'Biswanath College Biswanath জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://biswanathcollege.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/directory/biswanath-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-bnca', 'Biswanath College of Agriculture (BNCA)', NULL, 'education', 'Agricultural College', 'Biswanath', 'Biswanath Chariali', 'Constituent agricultural college under Assam Agricultural University established in 1988.', 'Biswanath College of Agriculture (BNCA) Biswanath জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'http://www.aau.ac.in/colleges/biswanath-college-of-agriculture', 'https://aau.ac.in/', 'Assam Agricultural University & ICAR', 'published', '/images/directory/assam-agricultural-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-chaiduar-college', 'Chaiduar College', NULL, 'education', 'Degree College', 'Biswanath', 'Gohpur, Biswanath', 'Leading educational institution of historic Gohpur subdivision established in 1967.', 'Chaiduar College Biswanath জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://chaiduarcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/directory/biswanath-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-bongaigaon-college', 'Bongaigaon College', NULL, 'education', 'Degree College', 'Bongaigaon', 'Bongaigaon Town', 'First higher educational institution in Bongaigaon established in 1964 offering Arts and Commerce degrees.', 'Bongaigaon College Bongaigaon জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://bongaigaoncollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/directory/bongaigaon-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-birjhora-college', 'Birjhora Mahavidyalaya', NULL, 'education', 'Degree Science College', 'Bongaigaon', 'Bongaigaon Town', 'Premier co-educational science college of Western Assam established in 1986.', 'Birjhora Mahavidyalaya Bongaigaon জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://birjhoramahavidyalaya.edu.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/destinations/bagheswari-temple-hill.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-abhayapuri-college', 'Abhayapuri College', NULL, 'education', 'Degree College', 'Bongaigaon', 'Abhayapuri, Bongaigaon', 'Prestigious degree college established in 1955 in the historic town of Abhayapuri.', 'Abhayapuri College Bongaigaon জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://abhayapuricollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/directory/abhayapuri-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-bongaigaon-poly', 'Bongaigaon Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Bongaigaon', 'Dhaligaon, Bongaigaon', 'Government technical polytechnic institute offering diploma programs in engineering branches.', 'Bongaigaon Polytechnic Bongaigaon জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/directory/bongaigaon-polytechnic.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-smch', 'Silchar Medical College and Hospital (SMCH)', NULL, 'education', 'Medical College', 'Cachar', 'Ghungoor, Silchar', 'Leading medical institute and tertiary referral teaching hospital for Southern Assam, established in 1968.', 'Silchar Medical College and Hospital (SMCH) Cachar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://smcassam.org/', 'https://dme.assam.gov.in/', 'Srimanta Sankaradeva University of Health Sciences', 'published', '/images/directory/silchar-medical-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-gc-college', 'Gurucharan College (G.C. College)', NULL, 'education', 'Degree College', 'Cachar', 'Silchar, Cachar', 'Historic autonomous college established in 1935, considered the premier seat of higher learning in Barak Valley.', 'Gurucharan College (G.C. College) Cachar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://gurucharanuniversity.ac.in/', 'https://highereducation.assam.gov.in/', 'Assam University Affiliated', 'published', '/images/destinations/kachakanti-temple.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-cachar-college', 'Cachar College', NULL, 'education', 'Degree College', 'Cachar', 'Silchar, Cachar', 'Eminent co-educational college established in 1960 providing multi-disciplinary undergraduate education.', 'Cachar College Cachar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://www.cacharcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Assam University Affiliated', 'published', '/images/destinations/khaspur-palace.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-sonari-college', 'Sonari College', NULL, 'education', 'Degree College', 'Charaideo', 'Sonari, Charaideo', 'Premier degree college of Charaideo district established in 1970 offering Arts and Science courses.', 'Sonari College Charaideo জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://sonaricollege.edu.in/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/destinations/talatal-ghar.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-moran-college', 'Moran College', NULL, 'education', 'Degree College', 'Charaideo', 'Moranhat, Charaideo', 'Renowned higher educational institution serving Moran and Charaideo area since 1964.', 'Moran College Charaideo জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://morancollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/directory/moran-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-borhat-college', 'Borhat B.P.B. Memorial College', NULL, 'education', 'Degree College', 'Charaideo', 'Borhat, Charaideo', 'Established college catering to students of tea garden communities and rural Upper Assam.', 'Borhat B.P.B. Memorial College Charaideo জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://highereducation.assam.gov.in/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/destinations/sivadol.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-bijni-college', 'Bijni College', NULL, 'education', 'Degree College', 'Chirang', 'Bijni, Chirang', 'Premier higher educational college in Chirang district established in 1969.', 'Bijni College Chirang জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://bijnicollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Bodoland University Affiliated', 'published', '/images/destinations/bodoland-wildlife-culture-circuit.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-basugaon-college', 'Basugaon College', NULL, 'education', 'Degree College', 'Chirang', 'Basugaon, Chirang', 'Key degree college offering undergraduate education in arts and humanities in Chirang.', 'Basugaon College Chirang জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://basugaoncollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Bodoland University Affiliated', 'published', '/images/directory/kokrajhar-govt-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-bengtal-college', 'Bengtal College', NULL, 'education', 'Degree College', 'Chirang', 'Bengtal, Chirang', 'Established college providing degree education near the Indo-Bhutan border area.', 'Bengtal College Chirang জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://bengtalcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Bodoland University Affiliated', 'published', '/images/destinations/champamati-river-eco-park.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-mangaldai-college', 'Mangaldai College', NULL, 'education', 'Degree College', 'Darrang', 'Mangaldai, Darrang', 'Pioneering premier degree college of Darrang district established in 1951.', 'Mangaldai College Darrang জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://mangaldaicollege.org/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/destinations/da-parbatia.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-sipajhar-college', 'Sipajhar College', NULL, 'education', 'Degree College', 'Darrang', 'Sipajhar, Darrang', 'Renowned undergraduate institution serving the historic Darrang agrarian belt since 1971.', 'Sipajhar College Darrang জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://sipajharcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/destinations/agnigarh.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-mangaldai-poly', 'Mangaldai Government Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Darrang', 'Gerimari, Mangaldai', 'State government technical engineering polytechnic offering technical diplomas.', 'Mangaldai Government Polytechnic Darrang জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/da-parbatia.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-dhemaji-college', 'Dhemaji College', NULL, 'education', 'Degree College', 'Dhemaji', 'Dhemaji Town', 'First higher educational institution in Dhemaji district established in 1965.', 'Dhemaji College Dhemaji জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dhemajicollege.in/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/destinations/subansiri-winter-river-camp-draft.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-dhemaji-engg', 'Dhemaji Engineering College (DEC)', NULL, 'education', 'Engineering College', 'Dhemaji', 'Simen Chapori, Dhemaji', 'State government engineering college inaugurated in 2020 offering degree programs in engineering.', 'Dhemaji Engineering College (DEC) Dhemaji জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dec.ac.in/', 'https://dte.assam.gov.in/', 'Assam Science and Technology University (ASTU)', 'published', '/images/destinations/subansiri-river.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-silapathar-college', 'Silapathar College', NULL, 'education', 'Degree College', 'Dhemaji', 'Silapathar, Dhemaji', 'Major degree college providing undergraduate education in northern Dhemaji established in 1979.', 'Silapathar College Dhemaji জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://silapatharcollege.edu.in/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/destinations/dehing-patkai.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-bn-college', 'Bholanath College (B.N. College)', NULL, 'education', 'Degree College', 'Dhubri', 'Dhubri Town', 'Historic and premier collegiate institution in western Assam established in 1946.', 'Bholanath College (B.N. College) Dhubri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://bncollege.co.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/directory/bn-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-dhubri-medical', 'Dhubri Medical College & Hospital', NULL, 'education', 'Medical College', 'Dhubri', 'Jhakarpara, Dhubri', 'Modern government medical college and tertiary teaching hospital serving western Assam.', 'Dhubri Medical College & Hospital Dhubri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dhubrimedicalcollege.in/', 'https://dme.assam.gov.in/', 'Srimanta Sankaradeva University of Health Sciences', 'published', '/images/destinations/asharikandi-terracotta-village.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-pb-college', 'Pramathesh Barua College (P.B. College)', NULL, 'education', 'Degree College', 'Dhubri', 'Gauripur, Dhubri', 'Historic degree college named after Indian cinematic pioneer Pramathesh Chandra Barua established in 1964.', 'Pramathesh Barua College (P.B. College) Dhubri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://pbcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/destinations/brahmaputra-cruises.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-amch', 'Assam Medical College and Hospital (AMCH)', NULL, 'education', 'Medical College', 'Dibrugarh', 'Borbari, Dibrugarh', 'First medical college of North-East India established on 3 November 1947, evolved from Berry White Medical School (est. 1900).', 'Assam Medical College and Hospital (AMCH) Dibrugarh জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://amch.edu.in/', 'https://dme.assam.gov.in/', 'Srimanta Sankaradeva University of Health Sciences', 'published', '/images/directory/amch-dibrugarh.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-dhsk', 'D.H.S.K. College', NULL, 'education', 'Degree College', 'Dibrugarh', 'K.C. Gogoi Path, Dibrugarh', 'Oldest higher education institution of Upper Assam, established in 1945.', 'D.H.S.K. College Dibrugarh জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dhsk.org/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/directory/dibrugarh-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-mdkg', 'Manohari Devi Kanoi Girls'' College (M.D.K.G.)', NULL, 'education', 'Degree College', 'Dibrugarh', 'Kadamoni, Dibrugarh', 'Pioneering premier women''s college of Upper Assam established in 1963.', 'Manohari Devi Kanoi Girls'' College (M.D.K.G.) Dibrugarh জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://mdkgcollege.edu.in/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/directory/dibrugarh-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-haflong-govt', 'Haflong Government College', NULL, 'education', 'Degree College', 'Dima Hasao', 'Haflong Town', 'Premier government higher education institution of Dima Hasao hill district established in 1961.', 'Haflong Government College Dima Hasao জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://www.haflonggovtcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Assam University Affiliated', 'published', '/images/directory/haflong-govt-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-hagjer-college', 'J.B. Hagjer Memorial College', NULL, 'education', 'Degree College', 'Dima Hasao', 'Umrangso, Dima Hasao', 'Crucial higher educational institution serving industrial and tribal town of Umrangso.', 'J.B. Hagjer Memorial College Dima Hasao জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://highereducation.assam.gov.in/', 'https://highereducation.assam.gov.in/', 'Assam University Affiliated', 'published', '/images/destinations/haflong.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-maibang-college', 'Maibang Degree College', NULL, 'education', 'Degree College', 'Dima Hasao', 'Maibang, Dima Hasao', 'Higher educational institution located in the historic Dimasa royal capital of Maibang established in 1988.', 'Maibang Degree College Dima Hasao জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://maibangdegreecollege.org/', 'https://highereducation.assam.gov.in/', 'Assam University Affiliated', 'published', '/images/destinations/haflong.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-goalpara-college', 'Goalpara College', NULL, 'education', 'Degree College', 'Goalpara', 'Goalpara Town', 'Oldest and leading institution of higher learning in Goalpara district founded in 1955.', 'Goalpara College Goalpara জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://goalparacollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/directory/goalpara-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-dudhnoi-college', 'Dudhnoi College', NULL, 'education', 'Degree College', 'Goalpara', 'Dudhnoi, Goalpara', 'Renowned co-educational college in the Rabha Hasong Autonomous area established in 1972.', 'Dudhnoi College Goalpara জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dudhnoicollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/destinations/asharikandi-terracotta-village.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-bikali-college', 'Bikali College', NULL, 'education', 'Degree College', 'Goalpara', 'Dhupdhara, Goalpara', 'Eminent rural college serving eastern Goalpara and Kamrup border founded in 1982.', 'Bikali College Goalpara জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://bikalicollege.org/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/destinations/sri-surya-pahar-archaeological-site.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-dr-college', 'Debraj Roy College (D.R. College)', NULL, 'education', 'Degree College', 'Golaghat', 'Golaghat Town', 'Premier autonomous college of Golaghat district established in 1949 offering multi-faculty education.', 'Debraj Roy College (D.R. College) Golaghat জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://drcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/directory/dr-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-dkd-college', 'D.K.D. College (Dergaon)', NULL, 'education', 'Degree College', 'Golaghat', 'Dergaon, Golaghat', 'Renowned degree college in historic Dergaon town established in 1962.', 'D.K.D. College (Dergaon) Golaghat জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dkdcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/destinations/kaziranga.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-hpb-girls', 'H.P.B. Girls'' College', NULL, 'education', 'Degree College', 'Golaghat', 'Golaghat Town', 'Leading women''s higher education institution of Golaghat founded in 1969.', 'H.P.B. Girls'' College Golaghat জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://hpbgirlscollege.edu.in/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/destinations/cinnamara-historic-tea-estate.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-ss-college', 'Srikishan Sarda College (S.S. College)', NULL, 'education', 'Degree College', 'Hailakandi', 'Hailakandi Town', 'Oldest higher education college in Hailakandi district, established in 1950.', 'Srikishan Sarda College (S.S. College) Hailakandi জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://sscollegehkd.ac.in/', 'https://highereducation.assam.gov.in/', 'Assam University Affiliated', 'published', '/images/destinations/siddheswar-shiva-temple-barak.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-lala-rural', 'Lala Rural College', NULL, 'education', 'Degree College', 'Hailakandi', 'Lala, Hailakandi', 'Pivotal college providing tertiary education in the rural agricultural belt of Hailakandi founded in 1964.', 'Lala Rural College Hailakandi জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://lrcollege.org/', 'https://highereducation.assam.gov.in/', 'Assam University Affiliated', 'published', '/images/destinations/son-beel.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-rntu', 'Rabindranath Tagore University (Hojai)', NULL, 'education', 'University', 'Hojai', 'Hojai Town', 'State collegiate university established in 2019 by upgrading the historic Hojai College (est. 1964).', 'Rabindranath Tagore University (Hojai) Hojai জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://rntu.ac.in/', 'https://highereducation.assam.gov.in/', 'Government of Assam State University', 'published', '/images/destinations/akashiganga-waterfalls.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-haji-anfar', 'Haji Anfar Ali College', NULL, 'education', 'Degree College', 'Hojai', 'Doboka, Hojai', 'Renowned degree college in historic Doboka town serving educational needs of rural central Assam.', 'Haji Anfar Ali College Hojai জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://haacollege.org/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/destinations/akashiganga-waterfalls.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-lumding-college', 'Lumding College', NULL, 'education', 'Degree College', 'Hojai', 'Lumding, Hojai', 'Prominent degree college situated in railway junction town Lumding established in 1959.', 'Lumding College Hojai জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://lumdingcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/events/jonbeel-fair.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-jec', 'Jorhat Engineering College (JEC)', NULL, 'education', 'Engineering College', 'Jorhat', 'Garmur, Jorhat', 'Second government engineering college of Assam established in 1959, famous for core technical excellence.', 'Jorhat Engineering College (JEC) Jorhat জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://jecassam.ac.in/', 'https://dte.assam.gov.in/', 'Assam Science and Technology University (ASTU)', 'published', '/images/directory/jorhat-engineering-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-jb-college', 'Jagannath Barooah College (J.B. College)', NULL, 'education', 'Degree College', 'Jorhat', 'Baruah Chariali, Jorhat', 'First non-government college in Assam established in 1930, recognized as an autonomous institution.', 'Jagannath Barooah College (J.B. College) Jorhat জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://jbcollege.org/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/directory/jb-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-jmch', 'Jorhat Medical College & Hospital (JMCH)', NULL, 'education', 'Medical College', 'Jorhat', 'Jail Road, Jorhat', 'Leading government medical college and tertiary teaching hospital in Central/Upper Assam established in 2009.', 'Jorhat Medical College & Hospital (JMCH) Jorhat জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://jorhatmedicalcollege.in/', 'https://dme.assam.gov.in/', 'Srimanta Sankaradeva University of Health Sciences', 'published', '/images/directory/jorhat-medical-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-diphu-govt', 'Diphu Government College', NULL, 'education', 'Degree College', 'Karbi Anglong', 'Diphu Town', 'Apex premier higher education college of Karbi Anglong autonomous hill district founded in 1964.', 'Diphu Government College Karbi Anglong জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://diphugovtcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Assam University Affiliated', 'published', '/images/directory/diphu-govt-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-dmch-diphu', 'Diphu Medical College & Hospital (DMCH)', NULL, 'education', 'Medical College', 'Karbi Anglong', 'Baghmari, Diphu', 'Modern government medical college and multi-specialty hospital serving the hill districts of Assam.', 'Diphu Medical College & Hospital (DMCH) Karbi Anglong জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dmchassam.in/', 'https://dme.assam.gov.in/', 'Srimanta Sankaradeva University of Health Sciences', 'published', '/images/directory/diphu-medical-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-audc', 'Assam University Diphu Campus (AUDC)', NULL, 'education', 'University Campus', 'Karbi Anglong', 'Diphu, Karbi Anglong', 'Post-graduate central university campus offering masters and doctoral programs in hill area studies and science.', 'Assam University Diphu Campus (AUDC) Karbi Anglong জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'http://www.aus.ac.in/diphu-campus/', 'http://www.aus.ac.in/', 'Assam Central University', 'published', '/images/destinations/panimur-waterfalls.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-karimganj-college', 'Karimganj College', NULL, 'education', 'Degree College', 'Karimganj', 'Karimganj Town', 'Pioneering premier degree college in the border district of Karimganj established in 1946.', 'Karimganj College Karimganj জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://karimganjcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Assam University Affiliated', 'published', '/images/directory/karimganj-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-rabindra-sadan', 'Rabindra Sadan Girls'' College', NULL, 'education', 'Degree College', 'Karimganj', 'Karimganj Town', 'Distinguished women''s degree college named in honor of Rabindranath Tagore, established in 1962.', 'Rabindra Sadan Girls'' College Karimganj জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://rsgirlscollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Assam University Affiliated', 'published', '/images/destinations/kachakanti-temple.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-rk-nagar', 'Ramkrishna Nagar College', NULL, 'education', 'Degree College', 'Karimganj', 'Ramkrishna Nagar, Karimganj', 'Major rural degree college serving Southern Karimganj bordering Mizoram and Tripura established in 1964.', 'Ramkrishna Nagar College Karimganj জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://rknagarcollege.org/', 'https://highereducation.assam.gov.in/', 'Assam University Affiliated', 'published', '/images/destinations/barak-valley-scenic-circuit.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-cit-kokrajhar', 'Central Institute of Technology Kokrajhar (CIT)', NULL, 'education', 'Deemed University', 'Kokrajhar', 'Balagaon, Kokrajhar', 'Centrally funded technical institute and deemed university under Ministry of Education, Govt of India.', 'Central Institute of Technology Kokrajhar (CIT) Kokrajhar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://cit.ac.in/', 'https://www.education.gov.in/', 'Ministry of Education, Govt of India', 'published', '/images/destinations/raimona-national-park.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-kmch', 'Kokrajhar Medical College & Hospital', NULL, 'education', 'Medical College', 'Kokrajhar', 'Besorgaon, Kokrajhar', 'State-of-the-art medical college and hospital inaugurated in 2023 serving BTR and Western Assam.', 'Kokrajhar Medical College & Hospital Kokrajhar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://kmcassam.org.in/', 'https://dme.assam.gov.in/', 'Srimanta Sankaradeva University of Health Sciences', 'published', '/images/directory/kokrajhar-govt-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-kokrajhar-govt', 'Kokrajhar Government College', NULL, 'education', 'Degree College', 'Kokrajhar', 'Bhatarmari, Kokrajhar', 'Pioneering premier degree college in the Bodo heartland established in 1959.', 'Kokrajhar Government College Kokrajhar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://kgc.edu.in/', 'https://highereducation.assam.gov.in/', 'Bodoland University Affiliated', 'published', '/images/directory/kokrajhar-govt-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-nl-college', 'North Lakhimpur College (Autonomous)', NULL, 'education', 'Degree College', 'Lakhimpur', 'Khelmati, North Lakhimpur', 'First Autonomous College in Upper Assam, established in 1952, recognized as College with Potential for Excellence by UGC.', 'North Lakhimpur College (Autonomous) Lakhimpur জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://www.nlc.ac.in/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University & UGC Autonomous', 'published', '/images/directory/north-lakhimpur-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-lmch', 'Lakhimpur Medical College & Hospital (LMCH)', NULL, 'education', 'Medical College', 'Lakhimpur', 'Chaboti, North Lakhimpur', 'Modern government tertiary teaching medical hospital inaugurated in 2021 on the north bank of Brahmaputra.', 'Lakhimpur Medical College & Hospital (LMCH) Lakhimpur জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://lmchassam.org/', 'https://dme.assam.gov.in/', 'Srimanta Sankaradeva University of Health Sciences', 'published', '/images/directory/lakhimpur-medical-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-madhabdev-univ', 'Madhabdev University', NULL, 'education', 'University', 'Lakhimpur', 'Narayanpur, Lakhimpur', 'State collegiate university established in 2018 at Narayanpur, birthplace of Mahapurusha Madhabdeva.', 'Madhabdev University Lakhimpur জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://madhabdevuniversity.ac.in/', 'https://highereducation.assam.gov.in/', 'Government of Assam State University', 'published', '/images/directory/madhabdev-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-majuli-culture-univ', 'Majuli University of Culture', 'মাজুলী সাংস্কৃতিক বিশ্ববিদ্যালয়', 'education', 'University', 'Majuli', 'Garamur, Majuli', 'First specialized cultural university of Assam established in 2017 to preserve and advance indigenous arts and Sattriya heritage.', 'মাজুলী সাংস্কৃতিক বিশ্ববিদ্যালয় Majuli জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://muc.ac.in/', 'https://highereducation.assam.gov.in/', 'Government of Assam State University', 'published', '/images/destinations/majuli.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-majuli-college', 'Majuli College', NULL, 'education', 'Degree College', 'Majuli', 'Kamalabari, Majuli', 'Oldest degree college in the world''s largest river island Majuli, established in 1962.', 'Majuli College Majuli জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://majulicollege.in/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/destinations/majuli-satras.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-jengraimukh-college', 'Jengraimukh College', NULL, 'education', 'Degree College', 'Majuli', 'Jengraimukh, Majuli', 'Premier institution for tribal Mising culture, language, and higher degree education in northern Majuli.', 'Jengraimukh College Majuli জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://jengraimukhcollege.org/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/destinations/majuli-raas-mahotsav-sattras.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-morigaon-college', 'Morigaon College', NULL, 'education', 'Degree College', 'Morigaon', 'Morigaon Town', 'Pioneering premier multi-faculty degree college in Morigaon district established in 1964.', 'Morigaon College Morigaon জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://morigaoncollege.edu.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/destinations/pobitora.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-jagiroad-college', 'Jagiroad College', NULL, 'education', 'Degree College', 'Morigaon', 'Jagiroad, Morigaon', 'Prominent degree college offering Arts, Science, and Commerce courses along National Highway 27 established in 1979.', 'Jagiroad College Morigaon জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://jagiroadcollegelive.co.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/events/jonbeel-fair.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-mayang-college', 'Mayang Anchalik College', NULL, 'education', 'Degree College', 'Morigaon', 'Raja Mayang, Morigaon', 'Key educational institution in the historic folklore and tantric archaeology region of Mayang founded in 1992.', 'Mayang Anchalik College Morigaon জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://mayanganchalikcollege.org.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/destinations/pobitora.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-nowgong-college', 'Nowgong College (Autonomous)', NULL, 'education', 'Degree College', 'Nagaon', 'Nagaon Town', 'Oldest higher education college in Central Assam, established in 1944, autonomous institution with ''A'' grade NAAC accreditation.', 'Nowgong College (Autonomous) Nagaon জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://nowgongcollege.edu.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University & UGC Autonomous', 'published', '/images/directory/nowgong-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-nagaon-medical', 'Nagaon Medical College & Hospital', NULL, 'education', 'Medical College', 'Nagaon', 'Mohpara, Nagaon', 'Premier government teaching hospital and medical college established in 2023 serving Central Assam.', 'Nagaon Medical College & Hospital Nagaon জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://nagaonmch.assam.gov.in/', 'https://dme.assam.gov.in/', 'Srimanta Sankaradeva University of Health Sciences', 'published', '/images/directory/nagaon-medical-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-adp-college', 'Anandaram Dhekial Phookan College (ADP College)', NULL, 'education', 'Degree College', 'Nagaon', 'Haibargaon, Nagaon', 'Prominent degree college established in 1959 named after illustrious literary reformer Anandaram Dhekial Phookan.', 'Anandaram Dhekial Phookan College (ADP College) Nagaon জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://adpcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/directory/adp-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-nalbari-college', 'Nalbari College', NULL, 'education', 'Degree College', 'Nalbari', 'Nalbari Town', 'Historic premier degree college of the Sanskrit learning heartland established in 1945.', 'Nalbari College Nalbari জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://nalbaricollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/destinations/billeswar-devalaya.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-kbvsasun', 'Kumar Bhaskar Varma Sanskrit & Ancient Studies University', NULL, 'education', 'University', 'Nalbari', 'Namati, Nalbari', 'Specialized state university dedicated to Sanskrit, ancient indigenous philosophy, and Indological research established in 2011.', 'Kumar Bhaskar Varma Sanskrit & Ancient Studies University Nalbari জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://kbvsasun.ac.in/', 'https://highereducation.assam.gov.in/', 'Government of Assam State University', 'published', '/images/directory/nalbari-medical-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-nalbari-medical', 'Nalbari Medical College & Hospital', NULL, 'education', 'Medical College', 'Nalbari', 'Dakshingaon, Nalbari', 'State-of-the-art government medical college and tertiary care hospital inaugurated in 2023.', 'Nalbari Medical College & Hospital Nalbari জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://nmchassam.org.in/', 'https://dme.assam.gov.in/', 'Srimanta Sankaradeva University of Health Sciences', 'published', '/images/directory/nalbari-medical-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-mnc-girls', 'M.N.C. Balika Mahavidyalaya', NULL, 'education', 'Degree College', 'Nalbari', 'Nalbari Town', 'Prominent women''s degree college in Nalbari established in 1979 promoting female empowerment.', 'M.N.C. Balika Mahavidyalaya Nalbari জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://mncbm.org.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/directory/nalbari-medical-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-sibsagar-college', 'Sibsagar College (Autonomous)', NULL, 'education', 'Degree College', 'Sivasagar', 'Joysagar, Sivasagar', 'Pioneering premier autonomous higher educational institution of the Ahom capital, established in 1947.', 'Sibsagar College (Autonomous) Sivasagar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://sibsagaruniversity.ac.in/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University & UGC Autonomous', 'published', '/images/directory/sibsagar-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-gargaon-college', 'Gargaon College', NULL, 'education', 'Degree College', 'Sivasagar', 'Simulguri, Sivasagar', 'Eminent multi-faculty degree college located near the ancient royal capital of Gargaon founded in 1959.', 'Gargaon College Sivasagar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://gargaoncollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/destinations/kareng-ghar.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-sivasagar-girls', 'Sivasagar Girls'' College', NULL, 'education', 'Degree College', 'Sivasagar', 'Sivasagar Town', 'Premier women''s degree college in Upper Assam established in 1964 offering undergraduate courses.', 'Sivasagar Girls'' College Sivasagar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://sivasagargirlscollege.edu.in/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/directory/sibsagar-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-tmch', 'Tezpur Medical College & Hospital (TMCH)', NULL, 'education', 'Medical College', 'Sonitpur', 'Bihaguri, Tezpur', 'Apex government medical institution and multi-specialty teaching hospital on the north bank established in 2013.', 'Tezpur Medical College & Hospital (TMCH) Sonitpur জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://tmcassam.org/', 'https://dme.assam.gov.in/', 'Srimanta Sankaradeva University of Health Sciences', 'published', '/images/directory/tezpur-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-darrang-college', 'Darrang College', NULL, 'education', 'Degree College', 'Sonitpur', 'Tezpur Town', 'Foremost premier degree college of North Assam founded in 1945, famously known as the Nalanda of North Bank.', 'Darrang College Sonitpur জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://darrangcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/directory/darrang-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-tezpur-college', 'Tezpur College', NULL, 'education', 'Degree College', 'Sonitpur', 'Tezpur Town', 'Distinguished multi-disciplinary degree college established in 1965 in the cultural capital Tezpur.', 'Tezpur College Sonitpur জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://tezpurcollege.com/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/directory/tezpur-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-mankachar-college', 'Mankachar College', NULL, 'education', 'Degree College', 'South Salmara-Mankachar', 'Mankachar Town', 'Leading higher educational institution of the border area established in 1971.', 'Mankachar College South Salmara-Mankachar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://mankacharcollege.org/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/destinations/sri-surya-pahar-archaeological-site.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-hatsingimari-college', 'Hatsingimari College', NULL, 'education', 'Degree College', 'South Salmara-Mankachar', 'Hatsingimari, HQ', 'Premier degree college located at the district headquarters of South Salmara-Mankachar founded in 1987.', 'Hatsingimari College South Salmara-Mankachar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://hatsingimaricollege.in/', 'https://highereducation.assam.gov.in/', 'Gauhati University Affiliated', 'published', '/images/destinations/son-beel.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-tamulpur-college', 'Tamulpur Degree College', NULL, 'education', 'Degree College', 'Tamulpur', 'Tamulpur HQ', 'Main collegiate higher educational institution serving the Bhutan border district of Tamulpur established in 1993.', 'Tamulpur Degree College Tamulpur জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://tamulpurdegreecollege.in/', 'https://highereducation.assam.gov.in/', 'Bodoland University Affiliated', 'published', '/images/destinations/daranga-mela-cultural-grounds.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-nagrijuli-college', 'Nagrijuli Model Degree College', NULL, 'education', 'Degree College', 'Tamulpur', 'Nagrijuli, Tamulpur', 'Government model degree college established to promote higher education in tea garden and border communities.', 'Nagrijuli Model Degree College Tamulpur জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://highereducation.assam.gov.in/', 'https://highereducation.assam.gov.in/', 'Directorate of Higher Education, Assam', 'published', '/images/destinations/daranga-mela-cultural-grounds.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-tinsukia-college', 'Tinsukia College', NULL, 'education', 'Degree College', 'Tinsukia', 'Tinsukia Town', 'Oldest higher educational institution in Tinsukia district, founded in 1956 offering Arts, Science, and Commerce.', 'Tinsukia College Tinsukia জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://tinsukiacollege.in/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/destinations/tilinga-mandir.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-digboi-college', 'Digboi College', NULL, 'education', 'Degree College', 'Tinsukia', 'Digboi, Tinsukia', 'Eminent degree college located in the historic oil town Digboi established in 1965.', 'Digboi College Tinsukia জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://digboicollege.edu.in/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/destinations/digboi-oil-heritage.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-margherita-college', 'Margherita College', NULL, 'education', 'Degree College', 'Tinsukia', 'Margherita, Tinsukia', 'Leading higher education center of the coal and tea belt near the Stilwell Road established in 1978.', 'Margherita College Tinsukia জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://margheritacollege.in/', 'https://highereducation.assam.gov.in/', 'Dibrugarh University Affiliated', 'published', '/images/destinations/dehing-patkai.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-udalguri-college', 'Udalguri College', NULL, 'education', 'Degree College', 'Udalguri', 'Udalguri HQ', 'First higher educational institution in Udalguri established in 1979.', 'Udalguri College Udalguri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://udalguricollegeedu.in/', 'https://highereducation.assam.gov.in/', 'Bodoland University Affiliated', 'published', '/images/directory/udalguri-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-tangla-college', 'Tangla College', NULL, 'education', 'Degree College', 'Udalguri', 'Tangla, Udalguri', 'Leading multi-faculty degree college in commercial center Tangla established in 1970.', 'Tangla College Udalguri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://tanglacollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Bodoland University Affiliated', 'published', '/images/destinations/daranga-mela-cultural-grounds.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-mazbat-college', 'Mazbat College', NULL, 'education', 'Degree College', 'Udalguri', 'Mazbat, Udalguri', 'Prominent degree college serving the agricultural and tea tribes of eastern Udalguri established in 1988.', 'Mazbat College Udalguri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://mazbatcollege.in/', 'https://highereducation.assam.gov.in/', 'Bodoland University Affiliated', 'published', '/images/destinations/bhairabkunda.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-hamren-govt', 'Hamren Government College', NULL, 'education', 'Degree College', 'West Karbi Anglong', 'Hamren Town', 'Leading government degree institution of the hill district West Karbi Anglong established in 1980.', 'Hamren Government College West Karbi Anglong জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://hamrengovtcollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Assam University Affiliated', 'published', '/images/destinations/panimur-waterfalls-niagara-of-assam.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-baithalangso-college', 'Baithalangso Degree College', NULL, 'education', 'Degree College', 'West Karbi Anglong', 'Baithalangso', 'Established college catering to tribal youths in the scenic Kopili river basin of West Karbi Anglong.', 'Baithalangso Degree College West Karbi Anglong জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://highereducation.assam.gov.in/', 'https://highereducation.assam.gov.in/', 'Assam University Affiliated', 'published', '/images/destinations/baithalangso-kopili-river-valley.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-kheroni-college', 'Kheroni Model Degree College', NULL, 'education', 'Degree College', 'West Karbi Anglong', 'Kheroni, West Karbi Anglong', 'Government model degree college established to expand access to higher education in remote hill areas.', 'Kheroni Model Degree College West Karbi Anglong জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://highereducation.assam.gov.in/', 'https://highereducation.assam.gov.in/', 'Directorate of Higher Education, Assam', 'published', '/images/destinations/barail-high-ridge-viewpoint-draft.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('heritage-barpeta-doul-mandir', 'Barpeta Satra Doul Mandir (দৌল মন্দিৰ)', NULL, 'heritage', 'Spiritual Shrine & Festival Ground', 'Barpeta', 'Barpeta Town', 'Architectural seven-tiered hepta-pyramidal temple built in the late 16th century inside Barpeta Satra, host to Assam''s grand 5-day spring Doul Utsav (Holi).', 'Barpeta Satra Doul Mandir (দৌল মন্দিৰ) Barpeta জিলাৰ এক গৌৰৱময় ঐতিহাসিক স্থাপত্য আৰু পুৰাতাত্ত্বিক ঐতিহ্য নিদৰ্শন।', 'https://barpeta.assam.gov.in/', 'https://culturalaffairs.assam.gov.in/', 'Barpeta District Administration & Cultural Affairs', 'published', '/images/destinations/barpeta-doul-mandir.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-aei-guwahati', 'Assam Engineering Institute (AEI)', NULL, 'education', 'Polytechnic Institute', 'Kamrup Metropolitan', 'Chandmari, Guwahati', 'First and premier government polytechnic institute in Assam, established in 1948, offering diploma engineering in Civil, Mechanical, Electrical, Chemical, Computer, and Electronics.', 'Assam Engineering Institute (AEI) Kamrup Metropolitan জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://aei.ac.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education (DTE), Assam & AICTE', 'published', '/images/directory/aei-chandmari.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-guwahati', 'Government ITI Guwahati', NULL, 'education', 'Industrial Training Institute (ITI)', 'Kamrup Metropolitan', 'Birubari, Guwahati', 'Apex government vocational institute offering NCVT and SCVT technical trade certifications in Electrician, Fitter, Welder, Machinist, Motor Mechanic, and COPA.', 'Government ITI Guwahati Kamrup Metropolitan জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://itiguwahati.org.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training (DECT), Assam', 'published', '/images/destinations/brahmaputra-cruises.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-kamrup', 'Kamrup Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Kamrup', 'Baihata Chariali, Kamrup', 'State government polytechnic institute providing diploma engineering programs in core technical branches.', 'Kamrup Polytechnic Kamrup জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam & AICTE', 'published', '/images/destinations/chandubi-lake-eco-lagoon.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-rangia', 'Government ITI Rangia', NULL, 'education', 'Industrial Training Institute (ITI)', 'Kamrup', 'Rangia, Kamrup', 'Key government vocational and technical skills training center offering NCVT industrial trades.', 'Government ITI Rangia Kamrup জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/hajo.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-baksa', 'Baksa Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Baksa', 'Belguri Pathar, Mushalpur', 'Government polytechnic college offering state diploma courses in Civil, Mechanical, and Electrical engineering.', 'Baksa Polytechnic Baksa জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://baksapolytechnic.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/bogamati-eco-park-bornadi.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-baksa', 'Government ITI Baska (Mushalpur)', NULL, 'education', 'Industrial Training Institute (ITI)', 'Baksa', 'Mushalpur HQ, Baksa', 'Government technical skills training institute imparting craftsman training in mechanical and electrical trades.', 'Government ITI Baska (Mushalpur) Baksa জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/bogamati-eco-park-bornadi.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-barpeta', 'Barpeta Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Barpeta', 'Ganakkuchi / Bhabanipur, Barpeta', 'Government polytechnic college delivering 3-year AICTE-approved diploma programs in Civil, Mechanical, and Electrical engineering.', 'Barpeta Polytechnic Barpeta জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://barpetapolytechnic.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/sarthebari-bell-metal-heritage-village.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-barpeta', 'Government ITI Barpeta', NULL, 'education', 'Industrial Training Institute (ITI)', 'Barpeta', 'Borbhita, Barpeta Town', 'Established government industrial training institute offering NCVT accredited trade certificates in technical and vocational crafts.', 'Government ITI Barpeta Barpeta জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://itibarpeta.org.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/barpeta-satra.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-bajali', 'Bajali Polytechnic Institute', NULL, 'education', 'Polytechnic Institute', 'Bajali', 'Pathsala, Bajali', 'State technical diploma institution serving students of Bajali and lower Assam with diploma courses.', 'Bajali Polytechnic Institute Bajali জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/pathsala-mobile-theatre-hub.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-bajali', 'Government ITI Pathsala (Bajali)', NULL, 'education', 'Industrial Training Institute (ITI)', 'Bajali', 'Pathsala, Bajali', 'Government vocational institute providing certified craftsman training in electrical and mechanical trades.', 'Government ITI Pathsala (Bajali) Bajali জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/pathsala-mobile-theatre-hub.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-biswanath', 'Biswanath Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Biswanath', 'Biswanath Chariali', 'State government engineering diploma institute established to train youth in Civil, Electrical, and Mechanical engineering.', 'Biswanath Polytechnic Biswanath জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/biswanath-ghat-gupta-kashi.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-biswanath', 'Government ITI Biswanath', NULL, 'education', 'Industrial Training Institute (ITI)', 'Biswanath', 'Borgang, Biswanath', 'Premier government ITI imparting NCVT technical training in Fitter, Electrician, and Welder trades.', 'Government ITI Biswanath Biswanath জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/biswanath-ghat-gupta-kashi.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-bongaigaon', 'Government ITI Bongaigaon', NULL, 'education', 'Industrial Training Institute (ITI)', 'Bongaigaon', 'Dhaligaon, Bongaigaon', 'Major government industrial training institute located near BRPL industrial area offering certified engineering trades.', 'Government ITI Bongaigaon Bongaigaon জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://itibongaigaon.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/bagheswari-temple-hill.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-silchar', 'Silchar Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Cachar', 'Meherpur, Silchar', 'Oldest technical polytechnic in southern Assam established in 1960, offering diplomas in Civil, Mechanical, and Electrical engineering.', 'Silchar Polytechnic Cachar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://silcharpolytechnic.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/barak-valley-scenic-circuit.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-srikona', 'Government ITI Srikona (Silchar)', NULL, 'education', 'Industrial Training Institute (ITI)', 'Cachar', 'Srikona, Silchar', 'Foremost industrial training institute of the Barak Valley established in 1958 with comprehensive NCVT trade workshops.', 'Government ITI Srikona (Silchar) Cachar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://itisrikona.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/siddheswar-shiva-temple-barak.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-charaideo', 'Charaideo Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Charaideo', 'Sonari, Charaideo', 'Government technical engineering institute delivering state diplomas in engineering disciplines.', 'Charaideo Polytechnic Charaideo জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/directory/sibsagar-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-charaideo', 'Government ITI Sonari (Charaideo)', NULL, 'education', 'Industrial Training Institute (ITI)', 'Charaideo', 'Sonari HQ, Charaideo', 'Government vocational trade school training rural and tea community youth in technical crafts.', 'Government ITI Sonari (Charaideo) Charaideo জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/directory/sibsagar-college.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-chirang', 'Chirang Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Chirang', 'Bijni / Kajalgaon', 'Government diploma engineering college offering technical diplomas in Civil and Mechanical engineering.', 'Chirang Polytechnic Chirang জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/manas.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-chirang', 'Government ITI Chirang (Kajalgaon)', NULL, 'education', 'Industrial Training Institute (ITI)', 'Chirang', 'Kajalgaon HQ, Chirang', 'Vocational technical institute providing skill development certifications under DECT Assam.', 'Government ITI Chirang (Kajalgaon) Chirang জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/sikhna-jwhwlao-national-park.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-darrang', 'Government ITI Darrang (Mangaldai)', NULL, 'education', 'Industrial Training Institute (ITI)', 'Darrang', 'Bhebarghat, Mangaldai', 'Pivotal government ITI training craftsman students in trades including Electrician, Plumber, Fitter, and Wireman.', 'Government ITI Darrang (Mangaldai) Darrang জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://itidarrang.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/da-parbatia.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-dhemaji', 'Dhemaji Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Dhemaji', 'Simen Chapori, Dhemaji', 'State technical polytechnic college imparting engineering diplomas to students of Upper Assam.', 'Dhemaji Polytechnic Dhemaji জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dhemajipolytechnic.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/subansiri-river.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-dhemaji', 'Government ITI Dhemaji', NULL, 'education', 'Industrial Training Institute (ITI)', 'Dhemaji', 'Silapathar, Dhemaji', 'Government vocational technical school delivering accredited craftsman certifications.', 'Government ITI Dhemaji Dhemaji জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/subansiri-winter-river-camp-draft.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-dhubri', 'Dhubri Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Dhubri', 'Panbari / Gauripur, Dhubri', 'State government polytechnic college offering engineering diplomas in Civil, Mechanical, and Electrical branches.', 'Dhubri Polytechnic Dhubri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/asharikandi-terracotta-village.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-dhubri', 'Government ITI Dhubri', NULL, 'education', 'Industrial Training Institute (ITI)', 'Dhubri', 'Gauripur, Dhubri', 'Major government vocational training institute of Western Assam providing trades in Fitter, Welder, and Electrical installation.', 'Government ITI Dhubri Dhubri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://itidhubri.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/brahmaputra-cruises.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-dibrugarh', 'Dibrugarh Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Dibrugarh', 'Lahowal, Dibrugarh', 'State engineering polytechnic providing AICTE approved 3-year technical diplomas in core fields.', 'Dibrugarh Polytechnic Dibrugarh জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/upper-assam-heritage-tea-circuit.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-barbaruah', 'Government ITI Dibrugarh (Barbaruah)', NULL, 'education', 'Industrial Training Institute (ITI)', 'Dibrugarh', 'Barbaruah, Dibrugarh', 'Long-established industrial training institute training technical personnel for oil, tea, and manufacturing industries.', 'Government ITI Dibrugarh (Barbaruah) Dibrugarh জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://itidibrugarh.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/directory/dibrugarh-university.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-haflong', 'Haflong Government Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Dima Hasao', 'Haflong, Dima Hasao', 'Technical polytechnic college serving the hill tribal youth of Dima Hasao with engineering diploma curricula.', 'Haflong Government Polytechnic Dima Hasao জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/barail-high-ridge-viewpoint-draft.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-haflong', 'Government ITI Haflong', NULL, 'education', 'Industrial Training Institute (ITI)', 'Dima Hasao', 'Haflong Town', 'Government vocational trade institute providing technical craft certification in hill region.', 'Government ITI Haflong Dima Hasao জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/haflong.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-goalpara', 'Government ITI Goalpara', NULL, 'education', 'Industrial Training Institute (ITI)', 'Goalpara', 'Agia Road, Goalpara', 'Government industrial training institute offering NCVT certified technical programs.', 'Government ITI Goalpara Goalpara জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://itigoalpara.org.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/daranga-mela-cultural-grounds.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-golaghat', 'Golaghat Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Golaghat', 'Bogidhola, Golaghat', 'State engineering polytechnic offering technical diplomas in Civil, Mechanical, and Biomedical engineering.', 'Golaghat Polytechnic Golaghat জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://golaghatpolytechnic.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/kaziranga.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-golaghat', 'Government ITI Golaghat', NULL, 'education', 'Industrial Training Institute (ITI)', 'Golaghat', 'Dergaon, Golaghat', 'Government vocational training school preparing craftsmen in mechanical, electrical, and fabrication trades.', 'Government ITI Golaghat Golaghat জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/tea-country.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-hailakandi', 'Hailakandi Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Hailakandi', 'Ratanpur, Hailakandi', 'State technical polytechnic providing engineering diploma courses in Civil and Mechanical branches.', 'Hailakandi Polytechnic Hailakandi জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/siddheswar-shiva-temple-barak.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-hailakandi', 'Government ITI Hailakandi', NULL, 'education', 'Industrial Training Institute (ITI)', 'Hailakandi', 'Lala Road, Hailakandi', 'Government vocational center offering trades in Electrician, Fitter, and Information Technology.', 'Government ITI Hailakandi Hailakandi জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/son-beel.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-hojai', 'Hojai Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Hojai', 'Sankardev Nagar, Hojai', 'State engineering polytechnic providing 3-year diplomas in engineering disciplines.', 'Hojai Polytechnic Hojai জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/akashiganga-waterfalls.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-hojai', 'Government ITI Hojai (Lanka)', NULL, 'education', 'Industrial Training Institute (ITI)', 'Hojai', 'Lanka / Hojai', 'Government vocational institute providing certified craftsman courses in engineering and trade fields.', 'Government ITI Hojai (Lanka) Hojai জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/events/jonbeel-fair.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-powiet', 'HRH The Prince of Wales Institute of Engineering & Technology (POWIET)', NULL, 'education', 'Polytechnic Institute', 'Jorhat', 'Gar-Ali, Jorhat', 'Historic technical institute established in 1927 in memory of the Prince of Wales, one of Eastern India''s oldest and most prestigious polytechnics.', 'HRH The Prince of Wales Institute of Engineering & Technology (POWIET) Jorhat জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://powietjorhat.org/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam & AICTE', 'published', '/images/destinations/cinnamara-historic-tea-estate.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-jorhat', 'Government ITI Jorhat', NULL, 'education', 'Industrial Training Institute (ITI)', 'Jorhat', 'Kendu Guri, Jorhat', 'Pioneering government ITI in Upper Assam offering NCVT trade courses in Mechanical, Automobile, and Electrical crafts.', 'Government ITI Jorhat Jorhat জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://itijorhat.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/dhekiakhowa-bornamghar.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-diphu', 'Diphu Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Karbi Anglong', 'Manja, Diphu', 'Government engineering polytechnic established to advance technical education among tribal youth in hill districts.', 'Diphu Polytechnic Karbi Anglong জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/panimur-waterfalls.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-diphu', 'Government ITI Diphu', NULL, 'education', 'Industrial Training Institute (ITI)', 'Karbi Anglong', 'Diphu Town', 'Apex government vocational craftsman institute of Karbi Anglong autonomous hill district.', 'Government ITI Diphu Karbi Anglong জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/akashiganga-waterfalls.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-karimganj', 'Karimganj Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Karimganj', 'Eraligool, Karimganj', 'State engineering polytechnic providing diploma programs in Civil, Electrical, and Mechanical engineering.', 'Karimganj Polytechnic Karimganj জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/barak-valley-scenic-circuit.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-karimganj', 'Government ITI Karimganj', NULL, 'education', 'Industrial Training Institute (ITI)', 'Karimganj', 'Karimganj Town', 'Government vocational trade institute delivering NCVT certifications for border area students.', 'Government ITI Karimganj Karimganj জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/siddheswar-shiva-temple-barak.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-kokrajhar', 'Kokrajhar Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Kokrajhar', 'Titaguri, Kokrajhar', 'State government polytechnic imparting diploma engineering education in Bodoland Territorial Region.', 'Kokrajhar Polytechnic Kokrajhar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/bodoland-wildlife-culture-circuit.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-kokrajhar', 'Government ITI Kokrajhar', NULL, 'education', 'Industrial Training Institute (ITI)', 'Kokrajhar', 'Dimalgaon, Kokrajhar', 'Pioneering government vocational institute offering NCVT technical craftsman training in BTR.', 'Government ITI Kokrajhar Kokrajhar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/raimona-national-park.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-lakhimpur', 'Lakhimpur Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Lakhimpur', 'Charaimoria, North Lakhimpur', 'State engineering polytechnic offering 3-year AICTE approved diplomas in Civil, Mechanical, and Chemical engineering.', 'Lakhimpur Polytechnic Lakhimpur জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://lakhimpurpolytechnic.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/subansiri-river.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-lakhimpur', 'Government ITI Lakhimpur', NULL, 'education', 'Industrial Training Institute (ITI)', 'Lakhimpur', 'Khelmati, North Lakhimpur', 'Government vocational trade institute preparing skilled technicians in electrical, motor, and welding crafts.', 'Government ITI Lakhimpur Lakhimpur জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://itilakhimpur.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/subansiri-winter-river-camp-draft.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-majuli', 'Majuli Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Majuli', 'Kamalabari, Majuli', 'State technical polytechnic established to provide diploma engineering courses in the river island district.', 'Majuli Polytechnic Majuli জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/majuli.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-majuli', 'Government ITI Majuli', NULL, 'education', 'Industrial Training Institute (ITI)', 'Majuli', 'Garamur, Majuli', 'Government vocational skill development center training indigenous and riverine youths in craftsman trades.', 'Government ITI Majuli Majuli জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/majuli-satras.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-morigaon', 'Morigaon Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Morigaon', 'Dharamtul, Morigaon', 'State engineering diploma institute delivering courses in Civil, Electrical, and Mechanical engineering.', 'Morigaon Polytechnic Morigaon জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/events/jonbeel-fair.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-morigaon', 'Government ITI Morigaon', NULL, 'education', 'Industrial Training Institute (ITI)', 'Morigaon', 'Morigaon Town', 'Government industrial training institute providing NCVT craftsman certifications.', 'Government ITI Morigaon Morigaon জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/pobitora.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-nowgong', 'Nowgong Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Nagaon', 'Panigaon, Nagaon', 'Established in 1960, one of Assam''s historic government polytechnics offering diplomas in Civil, Mechanical, and Electrical branches.', 'Nowgong Polytechnic Nagaon জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://nowgongpolytechnic.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/batadrava-than.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-nagaon', 'Government ITI Nagaon', NULL, 'education', 'Industrial Training Institute (ITI)', 'Nagaon', 'Panigaon, Nagaon', 'Foremost industrial training institute of Central Assam imparting vocational craftsman trades.', 'Government ITI Nagaon Nagaon জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://itinagaon.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/batadrava-than.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-nalbari', 'Nalbari Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Nalbari', 'Chandkuchi, Nalbari', 'State engineering polytechnic offering 3-year AICTE-recognized diplomas in Civil, Mechanical, and Electrical engineering.', 'Nalbari Polytechnic Nalbari জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://nalbaripolytechnic.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/billeswar-devalaya.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-nalbari', 'Government ITI Nalbari', NULL, 'education', 'Industrial Training Institute (ITI)', 'Nalbari', 'Belsor Road, Nalbari', 'Government vocational trade institute delivering NCVT certified technical programs.', 'Government ITI Nalbari Nalbari জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://itinalbari.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/pari-hareswar-devalaya.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-sibsagar', 'Sibsagar Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Sivasagar', 'Demow / Joysagar', 'Government polytechnic college offering engineering diplomas in Civil, Mechanical, and Petroleum engineering.', 'Sibsagar Polytechnic Sivasagar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://sibsagarpolytechnic.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/rang-ghar.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-sivasagar', 'Government ITI Sivasagar', NULL, 'education', 'Industrial Training Institute (ITI)', 'Sivasagar', 'Joysagar, Sivasagar', 'Major industrial training institute training skilled technicians for ONGC, Oil India, and fabrication sectors.', 'Government ITI Sivasagar Sivasagar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://itisivasagar.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/talatal-ghar.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-tezpur', 'Tezpur Government Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Sonitpur', 'Bihaguri, Tezpur', 'State engineering polytechnic providing diplomas in Civil, Mechanical, and Electrical branches.', 'Tezpur Government Polytechnic Sonitpur জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/agnigarh.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-tezpur', 'Government ITI Tezpur', NULL, 'education', 'Industrial Training Institute (ITI)', 'Sonitpur', 'Mazgaon, Tezpur', 'Pioneering industrial training institute of the north bank established in 1959 with extensive workshop facilities.', 'Government ITI Tezpur Sonitpur জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://ititezpur.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/nameri.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-south-salmara', 'South Salmara Polytechnic', NULL, 'education', 'Polytechnic Institute', 'South Salmara-Mankachar', 'Hatsingimari HQ', 'State technical polytechnic delivering engineering diploma education to border area students.', 'South Salmara Polytechnic South Salmara-Mankachar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/sri-surya-pahar-archaeological-site.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-south-salmara', 'Government ITI South Salmara-Mankachar', NULL, 'education', 'Industrial Training Institute (ITI)', 'South Salmara-Mankachar', 'Hatsingimari, South Salmara', 'Government vocational trade institute imparting accredited craftsman trades in remote border district.', 'Government ITI South Salmara-Mankachar South Salmara-Mankachar জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/son-beel.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-tamulpur', 'Tamulpur Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Tamulpur', 'Tamulpur HQ', 'Government engineering polytechnic providing technical diploma education in the Indo-Bhutan border area.', 'Tamulpur Polytechnic Tamulpur জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/daranga-mela-cultural-grounds.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-tamulpur', 'Government ITI Tamulpur', NULL, 'education', 'Industrial Training Institute (ITI)', 'Tamulpur', 'Nagrijuli / Tamulpur', 'Government vocational skills center providing certified craftsman training in essential trades.', 'Government ITI Tamulpur Tamulpur জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/daranga-mela-cultural-grounds.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-tinsukia', 'Tinsukia Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Tinsukia', 'Makum, Tinsukia', 'State engineering polytechnic offering 3-year AICTE-approved diplomas in Civil, Mechanical, and Electrical branches.', 'Tinsukia Polytechnic Tinsukia জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://tinsukiapolytechnic.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/digboi-oil-heritage.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-tinsukia', 'Government ITI Tinsukia', NULL, 'education', 'Industrial Training Institute (ITI)', 'Tinsukia', 'Borguri, Tinsukia', 'Premier government industrial training center serving the industrial, coal, and oil belt of Upper Assam.', 'Government ITI Tinsukia Tinsukia জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://ititinsukia.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/tilinga-mandir.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-udalguri', 'Udalguri Polytechnic', NULL, 'education', 'Polytechnic Institute', 'Udalguri', 'Tangla / Udalguri', 'State government technical polytechnic delivering engineering diploma courses in BTR.', 'Udalguri Polytechnic Udalguri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/directory/ram-janaki-mandir.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-udalguri', 'Government ITI Udalguri', NULL, 'education', 'Industrial Training Institute (ITI)', 'Udalguri', 'Bhairabkunda Road, Udalguri', 'Government vocational trade institute imparting industrial skills and technical certifications.', 'Government ITI Udalguri Udalguri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/directory/basudev-mandir.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-poly-hamren', 'Hamren Polytechnic', NULL, 'education', 'Polytechnic Institute', 'West Karbi Anglong', 'Hamren HQ', 'State engineering polytechnic college established to extend diploma technical education to the hill regions of West Karbi Anglong.', 'Hamren Polytechnic West Karbi Anglong জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in/', 'https://dte.assam.gov.in/', 'Directorate of Technical Education, Assam', 'published', '/images/destinations/panimur-waterfalls.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-iti-hamren', 'Government ITI Hamren', NULL, 'education', 'Industrial Training Institute (ITI)', 'West Karbi Anglong', 'Hamren Town', 'Government vocational skill training center providing certified technical trade courses to hill tribal youths.', 'Government ITI Hamren West Karbi Anglong জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dect.assam.gov.in/', 'https://dect.assam.gov.in/', 'Directorate of Employment & Craftsmen Training, Assam', 'published', '/images/destinations/panimur-waterfalls-niagara-of-assam.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-goalpara-polytechnic', 'Goalpara Polytechnic', 'গোৱালপাৰা পলিটেকনিক', 'education', 'Polytechnic & Higher Education', 'Goalpara', 'Goalpara, Assam', 'Premier State Government Technical Polytechnic Institute offering engineering diploma curricula.', 'গোৱালপাৰা পলিটেকনিক Goalpara জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://dte.assam.gov.in', '', '', 'published', '/images/destinations/sri-surya-pahar-archaeological-site.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('heritage-rajbari-hojai', 'Rajbari Archaeological Ruins & Shiva Temple', 'ৰাজবাৰী প্ৰত্নতাত্ত্বিক ভগ্নাৱশেষ', 'heritage', 'Archaeological Heritage', 'Hojai', 'Doboka, Hojai', 'Ancient 9th–12th century Kamarupa archaeological complex featuring exquisitely sculpted stone lintels, doorframes, and an active Shiva shrine.', 'ৰাজবাৰী প্ৰত্নতাত্ত্বিক ভগ্নাৱশেষ Hojai জিলাৰ এক গৌৰৱময় ঐতিহাসিক স্থাপত্য আৰু পুৰাতাত্ত্বিক ঐতিহ্য নিদৰ্শন।', 'https://archaeology.assam.gov.in/', 'https://hojai.assam.gov.in/', 'Directorate of Archaeology, Assam', 'published', '/images/destinations/doboka-reserve-forest.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('heritage-sankardev-namghar-hojai', 'Sankardev Nagar Central Namghar', 'শংকৰদেৱ নগৰ কেন্দ্ৰীয় নামঘৰ', 'temples-spiritual', 'Namghar & Community Hall', 'Hojai', 'Sankardev Nagar, Hojai', 'Prominent congregational Namghar at the district headquarters of Hojai named after Mahapurush Srimanta Sankardeva, hosting annual Tithi festivals, Borgeet renditions, and Vaishnavite communal harmony gatherings.', 'শংকৰদেৱ নগৰ কেন্দ্ৰীয় নামঘৰ Hojai জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://hojai.assam.gov.in/', 'https://hojai.assam.gov.in/', 'Hojai District Administration', 'published', '/images/featured/temple-shrine.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-bhairabkunda-shiva', 'Bhairabkunda Shiva Mandir & Sacred Confluence', 'ভৈৰৱকুণ্ড শিৱ মন্দিৰ আৰু ত্ৰিৱেণী সংগম', 'temples-spiritual', 'Sacred Confluence & Shrine', 'Udalguri', 'Bhairabkunda Tri-junction, Udalguri', 'Picturesque Shiva temple situated at the international tri-junction of Assam, Arunachal Pradesh, and Bhutan, where the Jampui and Bhairabi rivers unite to form the Dhansiri.', 'ভৈৰৱকুণ্ড শিৱ মন্দিৰ আৰু ত্ৰিৱেণী সংগম Udalguri জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://udalguri.assam.gov.in/', 'https://udalguri.assam.gov.in/', 'Udalguri District Administration Official Tourism Registry', 'published', '/images/directory/bhairabkunda-confluence.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-sri-sri-basudev', 'Sri Sri Basudev Mandir, Tangla', 'শ্ৰীশ্ৰী বাসুদেৱ মন্দিৰ, টাংলা', 'temples-spiritual', 'Temple', 'Udalguri', 'Tangla Town, Udalguri (BTR)', 'Venerable Vaishnavite temple dedicated to Lord Basudev in the commercial hub of Tangla. Serves as a vital community focal point for annual Janmashtami festivals, devotional kirtans, and spiritual fellowship.', 'শ্ৰীশ্ৰী বাসুদেৱ মন্দিৰ, টাংলা Udalguri জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://udalguri.assam.gov.in/', 'https://udalguri.assam.gov.in/', 'Udalguri District Administration Official Religious Registry', 'published', '/images/directory/basudev-mandir.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-gudi-bathou-thansali', 'Dularai Gudi Bathou Thansali (Central Bathou Sanctuary)', 'দুলৰায় গুদি বাথৌ থানসালী', 'temples-spiritual', 'Sacred Altar', 'Udalguri', 'Udalguri Town, BTR', 'Central sacred sanctuary of the indigenous Bodo Bathou religion, centering upon the sacred Sijou euphorbia plant encircled by five bamboo rings symbolizing the five elemental cosmos.', 'দুলৰায় গুদি বাথৌ থানসালী Udalguri জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://bodoland.gov.in/', 'https://bodoland.gov.in/', 'Bodoland Territorial Council Official Cultural Registry', 'published', '/images/directory/bathow-altar.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-ram-janaki-udalguri', 'Ram Janaki Mandir, Udalguri', 'ৰাম জানকী মন্দিৰ, ওদালগুৰি', 'temples-spiritual', 'Temple', 'Udalguri', 'Mission Road, Udalguri Town', 'Historic community temple in central Udalguri celebrated for vibrant Ram Navami processions, traditional devotional bhajans, and spiritual fellowship across communities.', 'ৰাম জানকী মন্দিৰ, ওদালগুৰি Udalguri জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://udalguri.assam.gov.in/', 'https://udalguri.assam.gov.in/', 'Udalguri District Administration Official Religious Registry', 'published', '/images/directory/ram-janaki-mandir.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-rowta-satra', 'Rowta Satra & Namghar', 'ৰৌতা সত্ৰ আৰু নামঘৰ', 'temples-spiritual', 'Vaishnavite Satra & Namghar', 'Udalguri', 'Rowta Chariali, Udalguri', 'Established regional Vaishnavite prayer hall and cultural center fostering Srimanta Sankardeva''s egalitarian humanist philosophy, congregational prayers, and Raas festival drama.', 'ৰৌতা সত্ৰ আৰু নামঘৰ Udalguri জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://udalguri.assam.gov.in/', 'https://udalguri.assam.gov.in/', 'Udalguri District Administration', 'published', '/images/directory/rowta-satra-namghar.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-mahamuni-khoirabari', 'Mahamuni Devalaya, Khoirabari', 'মহামুনি দেৱালয়, খৈৰাবাৰী', 'temples-spiritual', 'Devalaya & Heritage', 'Udalguri', 'Khoirabari, Western Udalguri', 'Historic temple complex dedicated to Lord Shiva situated in Khoirabari, renowned for serene forested surroundings, holy pond, and annual Maha Shivratri festivities.', 'মহামুনি দেৱালয়, খৈৰাবাৰী Udalguri জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://udalguri.assam.gov.in/', 'https://udalguri.assam.gov.in/', 'Udalguri District Administration', 'published', '/images/destinations/billeswar-devalaya.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-khoirabari-college', 'Khoirabari College', 'খৈৰাবাৰী মহাবিদ্যালয়', 'education', 'Degree College', 'Udalguri', 'Khoirabari, Udalguri', 'Established in 1991, a premier rural higher education institution offering undergraduate arts and science degree programs affiliated with Bodoland University.', 'খৈৰাবাৰী মহাবিদ্যালয় Udalguri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://khoirabaricollege.ac.in/', 'https://highereducation.assam.gov.in/', 'Bodoland University Affiliated', 'published', '/images/directory/bathow-altar.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-kbr-college-orang', 'Kalaguru Bishnu Rabha (KBR) Degree College', 'কলাগুৰু বিষ্ণু ৰাভা মহাবিদ্যালয়', 'education', 'Degree College', 'Udalguri', 'Orang / Rowta, Udalguri', 'Founded in 1990 in honor of cultural visionary Kalaguru Bishnu Prasad Rabha, providing higher education to students along the northern Brahmaputra and tea belt.', 'কলাগুৰু বিষ্ণু ৰাভা মহাবিদ্যালয় Udalguri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://kbrdcollege.org/', 'https://highereducation.assam.gov.in/', 'Bodoland University Affiliated', 'published', '/images/destinations/orang-national-park.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-harisinga-college', 'Harisinga Degree College', 'হৰিশিঙা মহাবিদ্যালয়', 'education', 'Degree College', 'Udalguri', 'Harisinga, Udalguri', 'Prominent collegiate institution established in 2003 to uplift tribal and rural communities in Harisinga with multi-disciplinary undergraduate education.', 'হৰিশিঙা মহাবিদ্যালয় Udalguri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://harisingacollege.in/', 'https://highereducation.assam.gov.in/', 'Bodoland University Affiliated', 'published', '/images/directory/bhairabkunda-confluence.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-bhergaon-college', 'Bhergaon Model Degree College', 'ভেৰগাঁও আদৰ্শ মহাবিদ্যালয়', 'education', 'Degree College', 'Udalguri', 'Bhergaon, Udalguri', 'Modern state government model degree college built to expand higher education infrastructure and equitable access in the Bhergaon subdivision.', 'ভেৰগাঁও আদৰ্শ মহাবিদ্যালয় Udalguri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://highereducation.assam.gov.in/', 'https://highereducation.assam.gov.in/', 'Directorate of Higher Education, Assam', 'published', '/images/directory/rowta-satra-namghar.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('edu-bhairabkunda-college', 'Bhairabkunda College', 'ভৈৰৱকুণ্ড মহাবিদ্যালয়', 'education', 'Degree College', 'Udalguri', 'Bhairabkunda, Udalguri', 'Frontier undergraduate institution catering to border students across the Assam-Bhutan-Arunachal tri-junction.', 'ভৈৰৱকুণ্ড মহাবিদ্যালয় Udalguri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://highereducation.assam.gov.in/', 'https://highereducation.assam.gov.in/', 'Bodoland University Affiliated', 'published', '/images/directory/bhairabkunda-confluence.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('school-udalguri-hs', 'Udalguri Higher Secondary School', 'ওদালগুৰি উচ্চতৰ মাধ্যমিক বিদ্যালয়', 'education', 'Higher Secondary School', 'Udalguri', 'Udalguri Town HQ', 'The oldest and premier landmark government school in Udalguri, established in 1948, delivering secondary and higher secondary education in arts, science, and commerce streams.', 'ওদালগুৰি উচ্চতৰ মাধ্যমিক বিদ্যালয় Udalguri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://madhyamik.assam.gov.in/', 'https://madhyamik.assam.gov.in/', 'Department of School Education, Govt. of Assam', 'published', '/images/destinations/bhairabkunda.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('school-tangla-hs', 'Tangla Higher Secondary School', 'টাংলা উচ্চতৰ মাধ্যমিক বিদ্যালয়', 'education', 'Higher Secondary School', 'Udalguri', 'Tangla Town, Udalguri', 'Prestigious government institution established in 1950, celebrated for continuous academic excellence in state board secondary and senior secondary examinations.', 'টাংলা উচ্চতৰ মাধ্যমিক বিদ্যালয় Udalguri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://madhyamik.assam.gov.in/', 'https://madhyamik.assam.gov.in/', 'Department of School Education, Govt. of Assam', 'published', '/images/destinations/daranga-mela-cultural-grounds.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('school-jnv-udalguri', 'Jawahar Navodaya Vidyalaya (JNV), Udalguri', 'জৱাহৰ নবোদয় বিদ্যালয়, ওদালগুৰি', 'education', 'Central Residential School (CBSE)', 'Udalguri', 'Kalaigaon, Udalguri', 'Prestigious central co-educational residential school operated under the Ministry of Education, Govt. of India, nurturing rural talent with modern CBSE curriculum, STEM labs, and sports facilities.', 'জৱাহৰ নবোদয় বিদ্যালয়, ওদালগুৰি Udalguri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://navodaya.gov.in/nvs/nvs-school/UDALGURI/en/home/', 'https://navodaya.gov.in/nvs/nvs-school/UDALGURI/en/home/', 'Navodaya Vidyalaya Samiti, Ministry of Education, Govt. of India', 'published', '/images/destinations/bornadi-wildlife-sanctuary.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('school-kv-udalguri', 'Kendriya Vidyalaya, Udalguri', 'কেন্দ্ৰীয় বিদ্যালয়, ওদালগুৰি', 'education', 'Central School (CBSE)', 'Udalguri', 'Ward No. 3, Udalguri Town', 'Premier Central Government school affiliated with CBSE, delivering high-standard primary and secondary education for children of defense, government employees, and local residents.', 'কেন্দ্ৰীয় বিদ্যালয়, ওদালগুৰি Udalguri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://udalguri.kvs.ac.in/', 'https://kvsangathan.nic.in/', 'Kendriya Vidyalaya Sangathan (KVS)', 'published', '/images/featured/iit-campus.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('school-khoirabari-hs', 'Khoirabari Higher Secondary School', 'খৈৰাবাৰী উচ্চতৰ মাধ্যমিক বিদ্যালয়', 'education', 'Higher Secondary School', 'Udalguri', 'Khoirabari, Udalguri', 'Historic provincialized higher secondary school established in 1954, serving as a primary academic pillar for thousands of students in southern Udalguri.', 'খৈৰাবাৰী উচ্চতৰ মাধ্যমিক বিদ্যালয় Udalguri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://madhyamik.assam.gov.in/', 'https://madhyamik.assam.gov.in/', 'Department of School Education, Govt. of Assam', 'published', '/images/directory/bathow-altar.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('school-rowta-hs', 'Rowta Higher Secondary School', 'ৰৌতা উচ্চতৰ মাধ্যমিক বিদ্যালয়', 'education', 'Higher Secondary School', 'Udalguri', 'Rowta, Udalguri', 'Prominent senior secondary institution in Rowta, delivering quality educational instruction to regional students along the north railway corridor.', 'ৰৌতা উচ্চতৰ মাধ্যমিক বিদ্যালয় Udalguri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://madhyamik.assam.gov.in/', 'https://madhyamik.assam.gov.in/', 'Department of School Education, Govt. of Assam', 'published', '/images/directory/rowta-satra-namghar.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('school-mazbat-hs', 'Mazbat Higher Secondary School', 'মাজবাট উচ্চতৰ মাধ্যমিক বিদ্যালয়', 'education', 'Higher Secondary School', 'Udalguri', 'Mazbat, Udalguri', 'Historic government higher secondary institution established in eastern Udalguri, providing comprehensive high school and senior secondary learning.', 'মাজবাট উচ্চতৰ মাধ্যমিক বিদ্যালয় Udalguri জিলাৰ এক অগ্ৰণী উচ্চ শিক্ষা প্ৰতিষ্ঠান, যিয়ে গুণগত শিক্ষা আৰু শৈক্ষিক বিকাশ সাধন কৰি আহিছে।', 'https://madhyamik.assam.gov.in/', 'https://madhyamik.assam.gov.in/', 'Department of School Education, Govt. of Assam', 'published', '/images/directory/ram-janaki-mandir.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('nature-orang-national-park-udalguri', 'Rajiv Gandhi Orang National Park (Northern Range)', 'ৰাজীৱ গান্ধী ওৰাং ৰাষ্ট্ৰীয় উদ্যান', 'nature-wildlife', 'National Park and Tiger Reserve', 'Udalguri / Darrang', 'Orang / Rowta, Southern Udalguri', 'The ''Mini Kaziranga'' of Assam spanning the northern bank of the Brahmaputra across Udalguri and Darrang. A premier tiger and rhino stronghold harboring the endangered pygmy hog and wild elephants.', 'ৰাজীৱ গান্ধী ওৰাং ৰাষ্ট্ৰীয় উদ্যান Udalguri / Darrang জিলাৰ এক সমৃদ্ধ জৈৱ-বৈচিত্ৰ্যপূৰ্ণ সংৰক্ষিত বনাঞ্চল আৰু বন্যপ্ৰাণী আশ্ৰয়স্থল।', 'https://forest.assam.gov.in/', 'https://forest.assam.gov.in/', 'Assam Environment & Forest Department', 'published', '/images/destinations/orang-national-park.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('nature-gethsemane-forest', 'Gethsemane Man-Made Forest & Eco Reserve', 'গেথছেমানে মানৱসৃষ্ট অৰণ্য', 'nature-wildlife', 'Living cultural heritage', 'Udalguri', 'Bhairabkunda, Udalguri', 'Celebrated 5.5 sq km lush man-made forest created by 35 local Bodo conservationists under the Jwhwlao Daimalu JFMC, restoring a barren riverbank into a wildlife sanctuary for wild elephants and hornbills.', 'গেথছেমানে মানৱসৃষ্ট অৰণ্য Udalguri জিলাৰ এক সমৃদ্ধ জৈৱ-বৈচিত্ৰ্যপূৰ্ণ সংৰক্ষিত বনাঞ্চল আৰু বন্যপ্ৰাণী আশ্ৰয়স্থল।', 'https://bodoland.gov.in/', 'https://bodoland.gov.in/', 'Bodoland Environment & Forests Department', 'published', '/images/destinations/bornadi-wildlife-sanctuary.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('nature-chowki-river-valley', 'Chowki Scenic Foothills & River Valley', 'চৌকী নদী উপত্যকা', 'nature-wildlife', 'Wetland and bird habitat', 'Udalguri', 'Chowki Border, Udalguri', 'Picturesque mountain valley where clear Himalayan streams exit the Bhutan hills into Udalguri, celebrated for serene eco-tourism, pebble beaches, and rich birdwatching.', 'চৌকী নদী উপত্যকা Udalguri জিলাৰ এক সমৃদ্ধ জৈৱ-বৈচিত্ৰ্যপূৰ্ণ সংৰক্ষিত বনাঞ্চল আৰু বন্যপ্ৰাণী আশ্ৰয়স্থল।', 'https://udalguri.assam.gov.in/', 'https://udalguri.assam.gov.in/', 'Udalguri District Administration', 'published', '/images/destinations/bogamati-eco-park-bornadi.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('nature-khalingduar-reserve', 'Khalingduar Reserve Forest & Elephant Corridor', 'খালিংদুৱাৰ সংৰক্ষিত বনাঞ্চল', 'nature-wildlife', 'Wildlife Sanctuary', 'Udalguri', 'Northern Foothills, Udalguri', 'Crucial contiguous forest reserve and transboundary elephant migration corridor extending along the international boundary between Assam and Bhutan.', 'খালিংদুৱাৰ সংৰক্ষিত বনাঞ্চল Udalguri জিলাৰ এক সমৃদ্ধ জৈৱ-বৈচিত্ৰ্যপূৰ্ণ সংৰক্ষিত বনাঞ্চল আৰু বন্যপ্ৰাণী আশ্ৰয়স্থল।', 'https://forest.assam.gov.in/', 'https://forest.assam.gov.in/', 'Assam Environment & Forest Department', 'published', '/images/destinations/bornadi-wildlife-sanctuary.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('heritage-bhairabkunda-hanging-bridge', 'Bhairabkunda Heritage Suspension Bridge & Tri-Junction Landmark', 'ভৈৰৱকুণ্ড ওলোমা দলং', 'heritage', 'Archaeological site', 'Udalguri', 'Bhairabkunda, Udalguri', 'Historic riverfront landmark and suspension footbridge spanning the sparkling Jia Dhansiri river at the picturesque tri-boundary meeting point of Assam, Bhutan, and Arunachal Pradesh.', 'ভৈৰৱকুণ্ড ওলোমা দলং Udalguri জিলাৰ এক গৌৰৱময় ঐতিহাসিক স্থাপত্য আৰু পুৰাতাত্ত্বিক ঐতিহ্য নিদৰ্শন।', 'https://udalguri.assam.gov.in/', 'https://udalguri.assam.gov.in/', 'Bodoland Tourism Board', 'published', '/images/directory/bhairabkunda-confluence.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('nature-sikhna-jwhwlao', 'Sikhna Jwhwlao National Park', 'শিখনা জৌহলাও ৰাষ্ট্ৰীয় উদ্যান', 'nature-wildlife', 'National Park', 'Kokrajhar / Chirang (BTR)', 'Ultapani & Chirang Reserve Forests, Indo-Bhutan Border', 'Assam''s 8th National Park, officially notified in March 2025, covering 316.29 sq km along the Indo-Bhutan border across Kokrajhar and Chirang in Bodoland. Famed for the legendary Ultapani butterfly valley harboring over 460 butterfly species, Gee''s Golden Langurs, Asian elephants, and vital transboundary ecological corridors connecting Bhutan''s Royal Manas.', 'শিখনা জৌহলাও ৰাষ্ট্ৰীয় উদ্যান Kokrajhar / Chirang (BTR) জিলাৰ এক সমৃদ্ধ জৈৱ-বৈচিত্ৰ্যপূৰ্ণ সংৰক্ষিত বনাঞ্চল আৰু বন্যপ্ৰাণী আশ্ৰয়স্থল।', 'https://bodoland.gov.in/', 'https://forest.assam.gov.in/', 'Bodoland Environment & Forests Department & Assam Forest Dept', 'published', '/images/destinations/sikhna-jwhwlao-national-park.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('nature-bornadi', 'Bornadi Wildlife Sanctuary', 'বৰনৈ অভয়াৰণ্য', 'nature-wildlife', 'Wildlife Sanctuary', 'Udalguri / Baksa (BTR)', 'Foothills of Bhutan, Northern Udalguri', 'Established in 1980 in the Himalayan foothills of northern Udalguri, specifically dedicated to the conservation of the critically endangered Pygmy Hog and Hispid Hare. Also an important habitat for Asian elephants, leopards, and diverse avifauna along the Bornadi river valley.', 'বৰনৈ অভয়াৰণ্য Udalguri / Baksa (BTR) জিলাৰ এক সমৃদ্ধ জৈৱ-বৈচিত্ৰ্যপূৰ্ণ সংৰক্ষিত বনাঞ্চল আৰু বন্যপ্ৰাণী আশ্ৰয়স্থল।', 'https://bodoland.gov.in/', 'https://forest.assam.gov.in/', 'Bodoland Environment & Forests Department', 'published', '/images/destinations/bornadi-wildlife-sanctuary.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-sukreswar', 'Sukreswar Devalaya', 'শুক্ৰেশ্বৰ দেৱালয়', 'temples-spiritual', 'Temple', 'Kamrup Metropolitan', 'Sukreswar Hill, Panbazar, Guwahati', 'Revered 18th-century Shiva temple on the banks of the Brahmaputra built by Ahom King Pramatta Singha in 1744. Houses one of the largest stone Shiva lingams in India with sweeping Brahmaputra river views.', 'শুক্ৰেশ্বৰ দেৱালয় Kamrup Metropolitan জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://assamtourism.gov.in/', 'https://kamrupmetro.assam.gov.in/', 'District Administration Kamrup Metro', 'published', '/images/destinations/guwahati-brahmaputra-riverfront-ropeway.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-dirgheswari', 'Dirgheswari Devalaya', 'দীৰ্ঘেশ্বৰী দেৱালয়', 'temples-spiritual', 'Shakti Shrine', 'Kamrup', 'Dirgheswari Parbat, North Guwahati', 'Venerated hilltop Shakti shrine built by Ahom King Siva Singha in the 18th century, regarded second only to Kamakhya in spiritual importance across the lower Brahmaputra valley.', 'দীৰ্ঘেশ্বৰী দেৱালয় Kamrup জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://kamrup.assam.gov.in/', 'https://kamrup.assam.gov.in/', 'Kamrup District Administration Official Registry', 'published', '/images/destinations/aswaklanta-temple.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-kedareswar-hajo', 'Kedareswar Devalaya, Hajo', 'কেদাৰেশ্বৰ দেৱালয়, হাজো', 'temples-spiritual', 'Temple', 'Kamrup', 'Madanchala Hill, Hajo', 'Ancient Shaivite devalaya atop Madanchala Hill in Hajo, built by Ahom King Rajeswar Singha in 1753. Enshrines a self-manifested (Svayambhu) Ardhanariswara Shiva Linga carved from monolithic stone.', 'কেদাৰেশ্বৰ দেৱালয়, হাজো Kamrup জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://kamrup.assam.gov.in/', 'https://kamrup.assam.gov.in/', 'Kamrup District Administration & Directorate of Archaeology Assam', 'published', '/images/destinations/hajo.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-madan-kamdev', 'Madan Kamdev Archaeological Temple Ruins', 'মদন কামদেৱ দেৱালয় ধ্বংসাৱশেষ', 'temples-spiritual', 'Archaeological Temple', 'Kamrup', 'Baihata Chariali, Kamrup', 'The ''Khajuraho of Assam''—magnificent 10th-12th century Pala dynasty stone temple complex spread over 15 sanctums, featuring erotic sculptures, celestial apsaras, and exquisite erotic rock art.', 'মদন কামদেৱ দেৱালয় ধ্বংসাৱশেষ Kamrup জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://archaeology.assam.gov.in/', 'https://kamrup.assam.gov.in/', 'Directorate of Archaeology Assam Protected Archaeological Monument', 'published', '/images/destinations/madan-kamdev-archaeological-ruins.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-barpeta-satra', 'Barpeta Satra & Kirtan Ghar', 'বৰপেটা সত্ৰ আৰু কীৰ্তন ঘৰ', 'temples-spiritual', 'Vaishnavite Satra', 'Barpeta', 'Barpeta Town', 'Supreme seat of Assam''s Ekasarana Dharma founded by Sri Sri Madhabdeva in 1583. Features the iconic golden-hued Kirtan Ghar where the Akhanda Banti (sacred earthen lamp) has burned uninterrupted for over five centuries.', 'বৰপেটা সত্ৰ আৰু কীৰ্তন ঘৰ Barpeta জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://barpeta.assam.gov.in/', 'https://barpeta.assam.gov.in/', 'Barpeta District Administration & Barpeta Satra Management Committee', 'published', '/images/destinations/barpeta-satra.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-barpeta-doul', 'Barpeta Doul Mandir', 'বৰপেটা দৌল মন্দিৰ', 'temples-spiritual', 'Temple', 'Barpeta', 'Barpeta Satra Complex, Barpeta', 'Historic 7-tiered wooden and terracotta Doul temple built inside Barpeta Satra. Epicenter of the celebrated 5-day Barpeta Holi (Doul Mahotsav), traditional Doul geet singing, and Fakuwa festivities.', 'বৰপেটা দৌল মন্দিৰ Barpeta জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://barpeta.assam.gov.in/', 'https://barpeta.assam.gov.in/', 'Barpeta District Administration', 'published', '/images/destinations/barpeta-doul-mandir.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-patbausi-satra', 'Sri Sri Patbausi Satra', 'পাটবাউসী সত্ৰ', 'temples-spiritual', 'Vaishnavite Satra', 'Barpeta', 'Patbausi, Barpeta', 'Hallowed ground where Mahapurush Srimanta Sankardeva lived for 18 years, composed Gunamala, Kirtan Ghosha, and translated the Bhagavata Purana. Also blessed by Sri Damodardeva and Sri Harideva.', 'পাটবাউসী সত্ৰ Barpeta জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://barpeta.assam.gov.in/', 'https://barpeta.assam.gov.in/', 'Barpeta District Administration Official Heritage Registry', 'published', '/images/destinations/barpeta-satra.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-sundaridiya-satra', 'Sri Sri Sundaridiya Satra', 'সুন্দৰীদিয়া সত্ৰ', 'temples-spiritual', 'Vaishnavite Satra', 'Barpeta', 'Sundaridiya, Barpeta', 'Venerable Vaishnavite Satra established by Sri Sri Madhabdeva where he composed the revered Namghosha and Bhakti Ratnavali. Houses ancient Vaishnavite manuscripts, Sachipat scrolls, and sacred relics.', 'সুন্দৰীদিয়া সত্ৰ Barpeta জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://barpeta.assam.gov.in/', 'https://barpeta.assam.gov.in/', 'Barpeta District Administration', 'published', '/images/destinations/barpeta-satra.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-billeswar-devalaya', 'Billeswar Devalaya, Belsor', 'বৰ বিলেশ্বৰ দেৱালয়, বেলশৰ', 'temples-spiritual', 'Devalaya & Heritage', 'Nalbari', 'Belsor, Nalbari', 'Over 500-year-old historic Shiva temple in lower Assam rebuilt by Ahom Swargadeo Lakshmi Singha in the 18th century. Famed for its ancient subterranean Shivalinga, sacred pond, and vibrant Shivratri assemblies.', 'বৰ বিলেশ্বৰ দেৱালয়, বেলশৰ Nalbari জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://nalbari.assam.gov.in/', 'https://nalbari.assam.gov.in/', 'Nalbari District Administration & Directorate of Archaeology Assam', 'published', '/images/destinations/billeswar-devalaya.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-hari-mandir-nalbari', 'Sri Sri Hari Mandir, Nalbari', 'নলবাৰী শ্ৰীশ্ৰী হৰি মন্দিৰ', 'temples-spiritual', 'Temple', 'Nalbari', 'Hari Mandir Road, Nalbari Town', 'Established in 1931, this temple is the beating cultural heart of Nalbari. Hosts Assam''s biggest and longest 13-day Raas Mahotsav featuring over 100 clay idol pavilions and hundreds of thousands of visitors.', 'নলবাৰী শ্ৰীশ্ৰী হৰি মন্দিৰ Nalbari জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://nalbari.assam.gov.in/', 'https://nalbari.assam.gov.in/', 'Nalbari District Administration & Nalbari Raas Committee', 'published', '/images/destinations/hari-mandir-nalbari.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-pari-hareswar', 'Pari Hareswar Devalaya, Dubi', 'পৰি হৰেশ্বৰ দেৱালয়, ডুবি', 'temples-spiritual', 'Devalaya & Heritage', 'Bajali', 'Dubi, Pathsala, Bajali', 'Ancient Shiva devalaya rebuilt by Queen Ambika and King Siva Singha in 1738. Historical nursery of traditional classical Devadasi dance (Assamese temple dance) and sacred Bronze Age copper plate inscriptions.', 'পৰি হৰেশ্বৰ দেৱালয়, ডুবি Bajali জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://bajali.assam.gov.in/', 'https://bajali.assam.gov.in/', 'Bajali District Administration & Directorate of Archaeology Assam', 'published', '/images/destinations/pari-hareswar-devalaya.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-batadrava-than', 'Sri Sri Batadrava Than (Bordowa)', 'শ্ৰীশ্ৰী বটদ্ৰৱা থান (বৰদোৱা)', 'temples-spiritual', 'Vaishnavite Than & Shrine', 'Nagaon', 'Alipukhuri, Batadrava, Nagaon', 'The supreme birthplace of Mahapurush Srimanta Sankardeva (1449 CE). The fountainhead of the Neo-Vaishnavite renaissance where the first Namghar was erected, and Sattriya dance, Borgeet, and Ankiya Nat were born.', 'শ্ৰীশ্ৰী বটদ্ৰৱা থান (বৰদোৱা) Nagaon জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://nagaon.assam.gov.in/', 'https://nagaon.assam.gov.in/', 'Nagaon District Administration & Sri Sri Batadrava Than Management Committee', 'published', '/images/destinations/batadrava-than.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-mahabhairav-tezpur', 'Mahabhairav Temple, Tezpur', 'মহাভৈৰৱ মন্দিৰ, তেজপুৰ', 'temples-spiritual', 'Temple', 'Sonitpur', 'Mahabhairav Hillock, Tezpur', 'Ancient Shiva temple atop a hillock in northern Tezpur, traditionally believed to have been founded by King Banasura. Rebuilt by Ahom King Tungkhungia rulers, enshrining a colossal living stone Shivalinga.', 'মহাভৈৰৱ মন্দিৰ, তেজপুৰ Sonitpur জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://sonitpur.assam.gov.in/', 'https://sonitpur.assam.gov.in/', 'Sonitpur District Administration Official Registry', 'published', '/images/destinations/mahabhairav-temple.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-bhairabi-tezpur', 'Bhairabi Temple, Tezpur', 'ভৈৰৱী দেৱালয়, তেজপুৰ', 'temples-spiritual', 'Shakti Shrine', 'Sonitpur', 'Bhairabi Hillock, Brahmaputra Bank, Tezpur', 'Ancient hilltop shrine of Goddess Bhairabi overlooking the expansive Kolia Bhomora bridge and Brahmaputra river. Mythologically associated with Princess Usha, featuring ornate stone carvings and Durga Puja festivities.', 'ভৈৰৱী দেৱালয়, তেজপুৰ Sonitpur জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://sonitpur.assam.gov.in/', 'https://sonitpur.assam.gov.in/', 'Sonitpur District Administration', 'published', '/images/destinations/agnigarh.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-biswanath-ghat', 'Biswanath Ghat (Gupta Kashi) & Historic Shrines', 'বিশ্বনাথ ঘাট (গুপ্ত কাশী) আৰু শিৱ দেৱালয়', 'temples-spiritual', 'Devalaya & Heritage', 'Biswanath', 'Biswanath Ghat, Biswanath Chariali', 'Known as the ''Gupta Kashi'' of eastern India, situated at the holy confluence of Bridhaganga and Brahmaputra. Contains a cluster of 27 ancient stone temples submerged during monsoon and emerging during winter.', 'বিশ্বনাথ ঘাট (গুপ্ত কাশী) আৰু শিৱ দেৱালয় Biswanath জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://biswanath.assam.gov.in/', 'https://biswanath.assam.gov.in/', 'Biswanath District Administration & Assam Tourism', 'published', '/images/destinations/biswanath-ghat-gupta-kashi.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-basudev-doul-gohpur', 'Basudev Doul, Gohpur', 'বাসুদেৱ দৌল, গহপুৰ', 'temples-spiritual', 'Devalaya & Heritage', 'Biswanath', 'Dologuri, Gohpur, Biswanath', 'State-protected monument built by Ahom King Sulikpha (Lora Roja) in 1679 AD. Features octagonal stone sikhara and terracotta sculptures dedicated to Lord Vishnu/Basudev.', 'বাসুদেৱ দৌল, গহপুৰ Biswanath জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://archaeology.assam.gov.in/', 'https://biswanath.assam.gov.in/', 'Directorate of Archaeology Assam Protected Archaeological Monument', 'published', '/images/destinations/ghuguha-dol-historic-temple.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-auniati-satra', 'Sri Sri Auniati Satra, Majuli', 'শ্ৰীশ্ৰী আউনীআটী সত্ৰ, মাজুলী', 'temples-spiritual', 'Vaishnavite Satra', 'Majuli', 'Auniati, Majuli River Island', 'Premier Brahma-samhati Satra founded in 1653 AD by Ahom King Jayadhwaj Singha. Custodian of the original idol of Lord Govinda, traditional Apsara dance, classical Palnaam singing, and royal Ahom armory.', 'শ্ৰীশ্ৰী আউনীআটী সত্ৰ, মাজুলী Majuli জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://majuli.assam.gov.in/', 'https://majuli.assam.gov.in/', 'Majuli District Administration & Sri Sri Auniati Satra Authority', 'published', '/images/destinations/auniati-satra.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-dakhinpat-satra', 'Sri Sri Dakhinpat Satra, Majuli', 'শ্ৰীশ্ৰী দক্ষিণপাট সত্ৰ, মাজুলী', 'temples-spiritual', 'Vaishnavite Satra', 'Majuli', 'Dakhinpat, Majuli River Island', 'Established in 1654 AD by Ahom Swargadeo Jayadhwaj Singha under Vamshigopaldeva''s disciple Banamalideva. Custodian of royal Rasotsav, ancient brass filigree art, and monumental Kirtan Ghar.', 'শ্ৰীশ্ৰী দক্ষিণপাট সত্ৰ, মাজুলী Majuli জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://majuli.assam.gov.in/', 'https://majuli.assam.gov.in/', 'Majuli District Administration', 'published', '/images/destinations/majuli-raas-mahotsav-sattras.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-kamalabari-satra', 'Sri Sri Kamalabari Satra, Majuli', 'শ্ৰীশ্ৰী কমলাবাৰী সত্ৰ, মাজুলী', 'temples-spiritual', 'Vaishnavite Satra', 'Majuli', 'Kamalabari, Majuli River Island', 'Celebrated cultural nursery of classical Sattriya dance, Khol percussion, and Borgeet music established by Badala Padma Ata. Its celibate monks (Udashin Bhakats) perform internationally.', 'শ্ৰীশ্ৰী কমলাবাৰী সত্ৰ, মাজুলী Majuli জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://majuli.assam.gov.in/', 'https://majuli.assam.gov.in/', 'Majuli District Administration', 'published', '/images/destinations/majuli.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-shamaguri-satra', 'Sri Sri Shamaguri Satra (Vaishnavite Mask Craft)', 'শ্ৰীশ্ৰী চামগুৰি সত্ৰ (মুখা শিল্প)', 'temples-spiritual', 'Vaishnavite Satra & Living Craft', 'Majuli', 'Shamaguri, Majuli River Island', 'Globally renowned for preserving the 500-year-old organic Mukha craft (traditional Assamese masks of bamboo, clay, and cow dung) created for theatrical Ankiya Bhaona performances.', 'শ্ৰীশ্ৰী চামগুৰি সত্ৰ (মুখা শিল্প) Majuli জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://majuli.assam.gov.in/', 'https://majuli.assam.gov.in/', 'Majuli District Administration & UNESCO Cultural Partner Network', 'published', '/images/destinations/majuli-raas-mahotsav-sattras.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-garamur-satra', 'Sri Sri Garamur Satra, Majuli', 'শ্ৰীশ্ৰী গৰমূৰ সত্ৰ, মাজুলী', 'temples-spiritual', 'Vaishnavite Satra', 'Majuli', 'Garamur, Majuli River Island', 'Founded in 1656 AD by King Pratap Singha. Champion of social reforms under Satradhikar Pitambardeva Goswami, custodian of antique silver and gold artifacts and traditional cannon relics.', 'শ্ৰীশ্ৰী গৰমূৰ সত্ৰ, মাজুলী Majuli জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://majuli.assam.gov.in/', 'https://majuli.assam.gov.in/', 'Majuli District Administration', 'published', '/images/destinations/majuli.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-sivasagar-vishnudol', 'Sivasagar Vishnudol & Devidol', 'শিৱসাগৰ বিষ্ণুদ''ল আৰু দেৱীদ''ল', 'temples-spiritual', 'Devalaya & Heritage', 'Sivasagar', 'Borpukhuri Lake Edge, Sivasagar', 'Pair of majestic 18th-century Ahom royal temples constructed by Queen Ambika alongside the massive 200-acre Borpukhuri tank, adorned with intricate stone bas-reliefs of Vishnu avatars.', 'শিৱসাগৰ বিষ্ণুদ''ল আৰু দেৱীদ''ল Sivasagar জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://sivasagar.assam.gov.in/', 'https://sivasagar.assam.gov.in/', 'Archaeological Survey of India & Sivasagar District Administration', 'published', '/images/destinations/sivadol.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-negheriting-shiva-doul', 'Negheriting Shiva Doul, Dergaon', 'নেঘেৰিটিং শিৱ দ''ল, দেৰগাঁও', 'temples-spiritual', 'Devalaya & Heritage', 'Golaghat', 'Dergaon, Golaghat', 'Grand hilltop Pancharatna (five-shrine) temple reconstructed by Ahom Swargadeo Rajeswar Singha in 1765. Towering stone flight of steps, home to hundreds of sacred rhesus monkeys and ancient sculptures.', 'নেঘেৰিটিং শিৱ দ''ল, দেৰগাঁও Golaghat জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://golaghat.assam.gov.in/', 'https://golaghat.assam.gov.in/', 'Directorate of Archaeology Assam & Golaghat District Administration', 'published', '/images/destinations/negheriting-shiva-doul.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-tilinga-mandir', 'Tilinga Mandir (The Bell Temple), Bordubi', 'টিলিঙা মন্দিৰ, বৰডুবি', 'temples-spiritual', 'Temple', 'Tinsukia', 'Bordubi, near Tinsukia', 'Unique sacred Shiva shrine renowned across India where millions of brass bells of all weights and sizes are tied to a massive sacred banyan tree by devotees wishing for blessings and peace.', 'টিলিঙা মন্দিৰ, বৰডুবি Tinsukia জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://tinsukia.assam.gov.in/', 'https://tinsukia.assam.gov.in/', 'Tinsukia District Administration Official Directory', 'published', '/images/destinations/tilinga-mandir.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-dhekiakhowa-bornamghar', 'Dhekiakhowa Bornamghar, Jorhat', 'ঢেকীয়াখোৱা বৰনামঘৰ, যোৰহাট', 'temples-spiritual', 'Vaishnavite Bornamghar', 'Jorhat', 'Dhekiakhowa, Jorhat', 'Established in 1461 AD by Saint-Reformer Sri Sri Madhabdeva. Houses an earthen lamp (Pradip) that has been kept continuously burning for over 560 years by the local community without ever being extinguished.', 'ঢেকীয়াখোৱা বৰনামঘৰ, যোৰহাট Jorhat জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://jorhat.assam.gov.in/', 'https://jorhat.assam.gov.in/', 'Jorhat District Administration & Dhekiakhowa Bornamghar Managing Committee', 'published', '/images/destinations/dhekiakhowa-bornamghar.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-ghuguha-dol', 'Ghuguha Dol Historic Temple', 'ঘুঘূহা দ''ল, ধেমাজি', 'temples-spiritual', 'Devalaya & Heritage', 'Dhemaji', 'Dhemaji District, Upper Assam', 'Ancient Ahom royal monument and temple associated with Queen Ghuguhi, mother of King Bamuni Konwar (Sudangphaa), standing amid lush green paddy landscapes of northern Dhemaji.', 'ঘুঘূহা দ''ল, ধেমাজি Dhemaji জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://dhemaji.assam.gov.in/', 'https://dhemaji.assam.gov.in/', 'Dhemaji District Administration & Directorate of Archaeology Assam', 'published', '/images/destinations/ghuguha-dol-historic-temple.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-siddheswar-shiva', 'Siddheswar Shiva Temple, Badarpurghat', 'সিদ্ধেশ্বৰ শিৱ মন্দিৰ, বদৰপুৰঘাট', 'temples-spiritual', 'Devalaya & Heritage', 'Karimganj', 'Badarpurghat, Barak Riverfront', 'Historic Shaivite temple on the picturesque banks of the Barak River. Ancient Kapila hermitage revered across the Barak Valley, celebrated for the annual Baruni Mela and holy river baths.', 'সিদ্ধেশ্বৰ শিৱ মন্দিৰ, বদৰপুৰঘাট Karimganj জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://karimganj.assam.gov.in/', 'https://karimganj.assam.gov.in/', 'Karimganj District Administration', 'published', '/images/destinations/siddheswar-shiva-temple-barak.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-kachakanti-silchar', 'Sri Sri Kachakanti Devi Temple', 'কাঁচাকান্তি দেৱী মন্দিৰ, শিলচৰ', 'temples-spiritual', 'Temple', 'Cachar', 'Udharbond, near Silchar, Cachar', 'Venerated 19th-century shrine fusing the divine attributes of Goddess Kali and Goddess Durga, historically worshipped by the Kachari royal dynasty in the lush Barak Valley.', 'কাঁচাকান্তি দেৱী মন্দিৰ, শিলচৰ Cachar জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://cachar.assam.gov.in/', 'https://cachar.assam.gov.in/', 'Cachar District Administration', 'published', '/images/destinations/kachakanti-temple.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-bhubaneswar-shiva', 'Bhubaneswar Shiva Temple (Bhuban Hills)', 'ভুৱনেশ্বৰ শিৱ মন্দিৰ, ভুৱন পাহাৰ', 'temples-spiritual', 'Hilltop Shrine', 'Cachar', 'Bhuban Hills, Southern Cachar', 'Ancient hilltop Shiva temple situated atop the misty Bhuban range. Renowned pilgrimage destination drawing thousands of trekkers and pilgrims during Maha Shivratri.', 'ভুৱনেশ্বৰ শিৱ মন্দিৰ, ভুৱন পাহাৰ Cachar জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://cachar.assam.gov.in/', 'https://cachar.assam.gov.in/', 'Cachar District Administration Official Tourism Registry', 'published', '/images/destinations/barak-valley-scenic-circuit.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-bagheswari-bongaigaon', 'Bagheswari Temple & Hillock', 'বাঘেশ্বৰী মন্দিৰ, বঙাইগাঁও', 'temples-spiritual', 'Shakti Shrine', 'Bongaigaon', 'Bagheswari Hill, Bongaigaon Town', 'One of the most sacred Shakti shrines in lower Assam, crowning a picturesque forested hillock in the heart of Bongaigaon with panoramic views of the Birjhora tea gardens.', 'বাঘেশ্বৰী মন্দিৰ, বঙাইগাঁও Bongaigaon জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://bongaigaon.assam.gov.in/', 'https://bongaigaon.assam.gov.in/', 'Bongaigaon District Administration Official Portal', 'published', '/images/destinations/bagheswari-temple-hill.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-mahamaya-dham', 'Mahamaya Dham & Snan Ghat', 'মহামায়া ধাম আৰু স্নান ঘাট', 'temples-spiritual', 'Shakti Peetha', 'Kokrajhar', 'Bogribari, Kokrajhar / Dhubri Border', 'Historic 400-year-old Shakti shrine of Goddess Mahamaya in Western Assam, revered for the sacred Snan Ghat on the tip of the mountain stream where thousands take ritual ablutions during Durga Puja.', 'মহামায়া ধাম আৰু স্নান ঘাট Kokrajhar জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://kokrajhar.assam.gov.in/', 'https://kokrajhar.assam.gov.in/', 'Kokrajhar District Administration Official Registry', 'published', '/images/destinations/kamakhya-mankachar-temple.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-kamakhya-mankachar', 'Kamakhya Temple of Mankachar', 'মানকাচৰৰ কামাখ্যা মন্দিৰ', 'temples-spiritual', 'Hilltop Shakti Shrine', 'South Salmara-Mankachar', 'Mankachar Hillock, Indo-Bangladesh Border', 'Historic hillock temple dedicated to Goddess Kamakhya in south-westernmost Assam, affording sweeping vistas over the surrounding international border landscape and Jinjiram river.', 'মানকাচৰৰ কামাখ্যা মন্দিৰ South Salmara-Mankachar জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://southsalmaramankachar.assam.gov.in/', 'https://southsalmaramankachar.assam.gov.in/', 'South Salmara-Mankachar District Administration', 'published', '/images/destinations/kamakhya-mankachar-temple.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;

INSERT INTO directory_items (id, name, name_as, category, subcategory, district, locality, description, description_as, website, source_url, verified_from, status, image_url, latitude, longitude)
VALUES ('temple-hatimura-nagaon', 'Hatimura Mahishamardini Durga Temple', 'হাতীমূৰা মহিষমৰ্দিনী দেৱালয়', 'temples-spiritual', 'Devalaya & Heritage', 'Nagaon', 'Silghat, Brahmaputra Bank, Nagaon', 'Scenic 18th-century stone temple built by Ahom Swargadeo Pramatta Singha in 1745 AD, enshrining a magnificent ten-armed Mahishamardini stone murti on the rocky banks of the Brahmaputra.', 'হাতীমূৰা মহিষমৰ্দিনী দেৱালয় Nagaon জিলাত অৱস্থিত এক ঐতিহাসিক আৰু পৱিত্ৰ উপাসনাস্থলী, যিয়ে আধ্যাত্মিক শান্তি আৰু ভক্তিমূলক পৰম্পৰা ধৰি ৰাখিছে।', 'https://archaeology.assam.gov.in/', 'https://nagaon.assam.gov.in/', 'Directorate of Archaeology Assam Protected Archaeological Monument', 'published', '/images/destinations/batadrava-than.jpg', NULL, NULL)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  name_as = EXCLUDED.name_as,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  status = EXCLUDED.status;