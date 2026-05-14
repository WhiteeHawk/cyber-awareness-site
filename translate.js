/**
 * translate.js — ترجمة يدوية كاملة لسايف ديجيتال
 * عربي ↔ إنجليزي
 */
(function () {
  const STORAGE_KEY = 'sd-lang';
  let lang = localStorage.getItem(STORAGE_KEY) || 'ar';

  const D = {
    // ── ناف مشترك ──
    'سايف ديجيتال': 'Safe Digital',
    'ليلي': 'Dark', 'صباحي': 'Light',
    'الرئيسية': 'Home', 'تعلّم': 'Learn', 'اختبار': 'Quiz',
    'أدوات': 'Tools', 'سيناريوهات': 'Scenarios', 'موارد': 'Resources',
    'سياسات الخصوصية': 'Privacy Policies', 'عن المشروع': 'About',
    'المراجعات': 'Reviews', 'تواصل': 'Contact', 'ملفي': 'Profile', 'دخول': 'Login',

    // ── عناوين الصفحات ──
    'سايف ديجيتال | منصة الأمن السيبراني': 'Safe Digital | Cybersecurity Platform',
    'تعلّم | سايف ديجيتال': 'Learn | Safe Digital',
    'اختبار الوعي الأمني | سايف ديجيتال': 'Security Awareness Quiz | Safe Digital',
    'أدوات الأمان | سايف ديجيتال': 'Security Tools | Safe Digital',
    'سيناريوهات | سايف ديجيتال': 'Scenarios | Safe Digital',
    'الموارد | سايف ديجيتال': 'Resources | Safe Digital',
    'تلخيص سياسات الخصوصية | سايف ديجيتال': 'Privacy Policy Summarizer | Safe Digital',
    'عن المشروع | سايف ديجيتال': 'About | Safe Digital',
    'تواصل معنا | سايف ديجيتال': 'Contact Us | Safe Digital',
    'تسجيل الدخول | سايف ديجيتال': 'Login | Safe Digital',
    'ملفي الشخصي | سايف ديجيتال': 'My Profile | Safe Digital',
    'المراجعات | سايف ديجيتال': 'Reviews | Safe Digital',

    // ── الرئيسية ──
    'منصة توعية أمنية مجانية': 'Free Cybersecurity Awareness Platform',
    'أمانك الرقمي': 'Your Digital Safety',
    'يبدأ من هنا': 'Starts Here',
    'منصة سايف ديجيتال تساعدك تفهم التهديدات الإلكترونية الحقيقية —': 'Safe Digital helps you understand real cyber threats —',
    'من التصيّد وكلمات المرور إلى الخصوصية وأمان الشبكات.': 'from phishing and passwords to privacy and network security.',
    'ابدأ التعلّم': 'Start Learning',
    'اختبر مستواك': 'Test Yourself',
    'حلّل سياسة خصوصية': 'Analyze Privacy Policy',
    'محاور أمنية': 'Security Topics',
    'سؤال تفاعلي': 'Interactive Questions',
    'سيناريو واقعي': 'Real Scenario',
    'تحليل السياسات': 'Policy Analysis',
    'ماذا تجد هنا؟': 'What You\'ll Find Here',
    'كل ما تحتاجه في مكان واحد': 'Everything You Need in One Place',
    'من التعلم إلى التطبيق — منصة متكاملة لحمايتك رقمياً.': 'From learning to practice — a complete platform for your digital protection.',
    '8 محاور أمنية مبسّطة مع أمثلة واقعية وتطبيقات يومية — من التصيّد إلى أمان السحابة.': '8 simplified security topics with real examples — from phishing to cloud security.',
    'ابدأ التعلّم →': 'Start Learning →',
    'اختبار الوعي': 'Awareness Quiz',
    '10 أسئلة مع مؤقت وتغذية راجعة فورية — اكتشف مستوى وعيك السيبراني.': '10 timed questions with instant feedback — discover your cybersecurity awareness level.',
    'ابدأ الاختبار →': 'Start Quiz →',
    'سيناريوهات واقعية': 'Real-World Scenarios',
    '8 مواقف حقيقية تتخذ فيها القرار الصحيح — تعلّم قبل أن تقع في الفخ.': '8 real situations where you make the right decision — learn before you fall into the trap.',
    'جرّب السيناريوهات →': 'Try Scenarios →',
    'أدوات الأمان': 'Security Tools',
    'مولّد كلمات مرور بـ Crypto API وفاحص قوة متقدم — كل شيء محلي وخاص.': 'Password generator with Crypto API and advanced strength checker — everything local and private.',
    'جرّب الأدوات →': 'Try Tools →',
    'تحليل السياسات بالذكاء الاصطناعي': 'AI-Powered Policy Analysis',
    'اكتب اسم أي تطبيق والـ AI يلخّص سياسة الخصوصية في ثوانٍ — بدل صفحات الشروط الطويلة.': 'Enter any app name and AI summarizes the privacy policy in seconds.',
    'حلّل سياسة →': 'Analyze Policy →',
    'موارد ومراجع': 'Resources & References',
    'مصادر موثوقة من هيئة الأمن السيبراني السعودية وCISA وأبرز المراجع العالمية.': 'Trusted sources from Saudi NCA, CISA, and top global references.',
    'استكشف الموارد →': 'Explore Resources →',
    'ابدأ اليوم': 'Start Today',
    'خطة الأمان اليومية': 'Daily Security Plan',
    '3 خطوات بسيطة كل يوم تحميك من 90% من التهديدات الشائعة.': '3 simple daily steps protect you from 90% of common threats.',
    'اختبر نفسك الآن': 'Test Yourself Now',
    'فعّل التحقق الثنائي': 'Enable Two-Factor Authentication',
    'للبريد والبنك وكل حساب مهم — MFA يوقف 99% من الاختراقات.': 'For email, banking and every important account — MFA stops 99% of breaches.',
    'حدّث أجهزتك فوراً': 'Update Your Devices Now',
    'التحديثات تسد الثغرات قبل أن يستغلها المهاجمون.': 'Updates patch vulnerabilities before attackers exploit them.',
    'فكّر قبل ما تضغط': 'Think Before You Click',
    'كل رابط مشبوه — تحقق من الدومين أولاً قبل أي خطوة.': 'Any suspicious link — verify the domain first before taking action.',
    'خريطة الهجمات السيبرانية المباشرة': 'Live Cyber Attack Map',
    'شاهد حركة التهديدات والهجمات السيبرانية حول العالم في الوقت الفعلي.': 'Watch cyber threats and attacks around the world in real time.',
    'فتح الخريطة المباشرة': 'Open Live Map',
    'يفتح في نافذة جديدة — مقدّم من Kaspersky': 'Opens in a new window — provided by Kaspersky',
    'أخبار الأمن السيبراني': 'Cybersecurity News',
    'جاري التحميل...': 'Loading...',
    'جاري جلب آخر الأخبار...': 'Fetching latest news...',
    'تعذّر تحميل الأخبار حالياً.': 'Failed to load news.',
    'إعادة المحاولة': 'Retry',
    'تحميل المزيد': 'Load More',
    'آراء المستخدمين': 'User Reviews',
    'ماذا قالوا عن سايف ديجيتال؟': 'What They Said About Safe Digital?',
    'تجارب حقيقية من مستخدمين تعلموا الأمن الرقمي معنا': 'Real experiences from users who learned digital security with us',
    'متوسط التقييم': 'Average Rating',
    'مراجعة': 'Reviews',
    'عرض جميع المراجعات ←': 'View All Reviews ←',
    'جديد': 'New',
    'مرحباً بك في سايف ديجيتال — ابدأ رحلتك الأمنية الآن': 'Welcome to Safe Digital — Start your security journey now',
    'سجّل حسابك': 'Create Account',
    '© 2026 سايف ديجيتال | منصة توعية سيبرانية': '© 2026 Safe Digital | Cyber Awareness Platform',

    // ── تعلّم ──
    'تعلّم الأمن السيبراني': 'Learn Cybersecurity',
    'محاور تعليمية مبسّطة تغطي أهم مجالات الحماية الرقمية.': 'Simplified learning modules covering key digital protection areas.',
    'التصيّد الاحتيالي': 'Phishing',
    'كلمات المرور': 'Passwords',
    'الخصوصية الرقمية': 'Digital Privacy',
    'أمان الشبكات': 'Network Security',
    'الهندسة الاجتماعية': 'Social Engineering',
    'البرمجيات الخبيثة': 'Malware',
    'النسخ الاحتياطي': 'Data Backup',
    'أمان السحابة': 'Cloud Security',
    'اقرأ المزيد': 'Read More',
    'أغلق': 'Close',
    'مثال واقعي': 'Real Example',
    'كيف تحمي نفسك': 'How to Protect Yourself',
    'نصائح': 'Tips',
    'تحذير': 'Warning',
    'مهم': 'Important',
    'ما هو التصيّد الاحتيالي؟': 'What is Phishing?',
    'ما هي كلمات المرور القوية؟': 'What are Strong Passwords?',

    // ── اختبار ──
    'اختبر وعيك الأمني': 'Test Your Security Awareness',
    'أسئلة تفاعلية تقيس مستوى حمايتك الرقمية': 'Interactive questions measuring your digital protection level',
    'ابدأ الاختبار': 'Start Quiz',
    'السؤال': 'Question',
    'التالي': 'Next',
    'السابق': 'Previous',
    'إنهاء الاختبار': 'Finish Quiz',
    'نتيجتك': 'Your Score',
    'ممتاز': 'Excellent',
    'جيد': 'Good',
    'تحتاج تحسين': 'Needs Improvement',
    'أعد الاختبار': 'Retry Quiz',
    'اذهب للتعلّم': 'Go to Learn',
    'ثانية': 'seconds',
    'انتهى الوقت': "Time\'s Up",

    // ── أدوات ──
    'أدوات حماية رقمية': 'Digital Protection Tools',
    'أدوات مجانية تعمل محلياً على جهازك — بدون إرسال بياناتك لأي خادم.': 'Free tools that run locally on your device — without sending your data to any server.',
    'مولّد كلمات المرور': 'Password Generator',
    'فاحص قوة كلمة المرور': 'Password Strength Checker',
    'توليد كلمة مرور': 'Generate Password',
    'نسخ': 'Copy',
    'تم النسخ!': 'Copied!',
    'طول كلمة المرور': 'Password Length',
    'أحرف كبيرة': 'Uppercase Letters',
    'أحرف صغيرة': 'Lowercase Letters',
    'أرقام': 'Numbers',
    'رموز': 'Symbols',
    'قوة كلمة المرور': 'Password Strength',
    'ضعيفة جداً': 'Very Weak',
    'ضعيفة': 'Weak',
    'متوسطة': 'Medium',
    'قوية': 'Strong',
    'قوية جداً': 'Very Strong',
    'اكتب كلمة المرور هنا...': 'Enter password here...',

    // ── سيناريوهات ──
    'تدرّب على مواقف حقيقية': 'Practice Real Situations',
    'اتخذ القرار الصحيح في 8 مواقف واقعية — قبل أن تواجهها في الحياة الحقيقية.': 'Make the right decision in 8 real situations — before you face them in real life.',
    'صحيح': 'Correct',
    'خطأ': 'Wrong',
    'التالي →': 'Next →',
    'شرح الإجابة': 'Answer Explanation',
    'الإجابة الصحيحة': 'Correct Answer',

    // ── موارد ──
    'موارد ومراجع موثوقة': 'Trusted Resources & References',
    'مصادر معتمدة من هيئات وجهات سيبرانية عالمية ومحلية.': 'Accredited sources from global and local cybersecurity organizations.',
    'زيارة الموقع': 'Visit Website',
    'هيئة الأمن السيبراني الوطنية': 'National Cybersecurity Authority',
    'حكومي': 'Government',
    'دولي': 'International',
    'تقني': 'Technical',
    'تعليمي': 'Educational',

    // ── سياسات ──
    'محلّل سياسات الخصوصية': 'Privacy Policy Analyzer',
    'اكتب اسم التطبيق أو الخدمة': 'Enter the app or service name',
    'حلّل السياسة': 'Analyze Policy',
    'جاري التحليل...': 'Analyzing...',
    'النتيجة': 'Result',
    'البيانات المجمّعة': 'Data Collected',
    'المشاركة مع الأطراف الثالثة': 'Third Party Sharing',
    'حقوقك': 'Your Rights',
    'تقييم المخاطر': 'Risk Assessment',
    'خطر عالٍ': 'High Risk',
    'خطر متوسط': 'Medium Risk',
    'خطر منخفض': 'Low Risk',

    // ── عن المشروع ──
    'سايف ديجيتال 🛡️': 'Safe Digital 🛡️',
    'منصة توعوية سيبرانية مجانية — مبنية بشغف لمجتمع رقمي أكثر أماناً ووعياً.': 'A free cybersecurity awareness platform — built with passion for a safer digital community.',
    'عن المشروع': 'About the Project',
    'محاور تعليمية': 'Learning Topics',
    'سؤال في الاختبار': 'Quiz Questions',
    'أداة أمان': 'Security Tool',
    'مجاني للأبد': 'Free Forever',
    'ما يميّز المنصة': 'What Makes Us Different',
    'متجاوب مع الجوال': 'Mobile Responsive',
    'يعمل بشكل مثالي على جميع الأجهزة والشاشات.': 'Works perfectly on all devices and screens.',
    'ذكاء اصطناعي': 'Artificial Intelligence',
    'تحليل سياسات الخصوصية بلحظات بدل الصفحات الطويلة.': 'Analyze privacy policies in moments instead of long pages.',
    'وضع ليلي وصباحي': 'Dark & Light Mode',
    'يحفظ تفضيلك ويطبقه على كل الصفحات.': 'Saves your preference and applies it across all pages.',
    'خصوصية كاملة': 'Full Privacy',
    'لا تسجيل، لا كوكيز، لا جمع بيانات شخصية.': 'No registration, no cookies, no personal data collection.',
    'محتوى عربي': 'Arabic Content',
    'مصمم خصيصاً للمستخدم العربي بلغة واضحة.': 'Designed specifically for Arabic users in clear language.',
    'سريع وخفيف': 'Fast & Lightweight',
    'HTML/CSS/JS خالص — بدون مكتبات ثقيلة.': 'Pure HTML/CSS/JS — without heavy libraries.',
    'مراحل تطوير المشروع': 'Project Development Stages',
    'المرحلة الأولى': 'Phase 1',
    'البنية الأساسية والتصميم': 'Core Structure & Design',
    'المرحلة الثانية': 'Phase 2',
    'المحتوى التعليمي والتفاعلي': 'Educational & Interactive Content',
    'المرحلة الثالثة': 'Phase 3',
    'دمج الذكاء الاصطناعي': 'AI Integration',
    'المرحلة الرابعة': 'Phase 4',
    'التحسين والإطلاق': 'Optimization & Launch',
    'التقنيات المستخدمة': 'Technologies Used',
    '👨‍💻 فريق المشروع': '👨‍💻 Project Team',
    'الطلاب المشاركون في تطوير منصة سايف ديجيتال': 'Students who contributed to developing Safe Digital',
    'المشرف الأكاديمي': 'Academic Supervisor',

    // ── تواصل ──
    'تواصل معنا': 'Contact Us',
    'لديك سؤال أو اقتراح؟ نسعد بسماعك.': 'Have a question or suggestion? We\'d love to hear from you.',
    'الاسم': 'Name',
    'البريد الإلكتروني': 'Email',
    'الرسالة': 'Message',
    'اسمك الكريم': 'Your name',
    'اكتب رسالتك هنا...': 'Write your message here...',
    'إرسال الرسالة': 'Send Message',
    'تم إرسال رسالتك بنجاح': 'Your message was sent successfully',
    'جاري الإرسال...': 'Sending...',

    // ── تسجيل الدخول ──
    'سجّل حسابك وتابع تقدمك الأمني': 'Create your account and track your security progress',
    'تسجيل الدخول': 'Login',
    'إنشاء حساب': 'Create Account',
    'كلمة المرور': 'Password',
    'الاسم الكامل': 'Full Name',
    'نسيت كلمة المرور؟': 'Forgot password?',
    'أو': 'Or',
    'المتابعة بـ Google': 'Continue with Google',

    // ── الملف الشخصي ──
    'ملفك الشخصي': 'Your Profile',
    'تابع تقدمك ونتائجك في سايف ديجيتال.': 'Track your progress and results on Safe Digital.',
    'نتائج الاختبارات': 'Quiz Results',
    'الإنجازات': 'Achievements',
    'لم تجري أي اختبار بعد': 'You haven\'t taken any quiz yet',
    'ابدأ اختباراً الآن': 'Start a Quiz Now',
    'تسجيل الخروج': 'Logout',
    'النتيجة الأعلى': 'Highest Score',
    'آخر اختبار': 'Last Quiz',

    // ── المراجعات ──
    'شاركنا تجربتك مع سايف ديجيتال': 'Share your experience with Safe Digital',
    'اكتب مراجعتك': 'Write Your Review',
    'تقييمك': 'Your Rating',
    'مراجعتك': 'Your Review',
    'اكتب تجربتك هنا...': 'Write your experience here...',
    'إرسال المراجعة': 'Submit Review',
    'لا توجد مراجعات بعد': 'No reviews yet',
    'كن أول من يراجع': 'Be the first to review',
    'مراجعات': 'reviews',

// ── about ناقصة ──
    'HTML وCSS وJavaScript — بناء هيكل الموقع والتصميم المرئي الموحد.': 'HTML, CSS and JavaScript — building the site structure and unified visual design.',
    'صفحات التعلّم، الاختبار، السيناريوهات، وأدوات الأمان.': 'Learning pages, quiz, scenarios, and security tools.',
    'تكامل Claude API لتحليل سياسات الخصوصية فورياً وبشكل ذكي.': 'Claude API integration for instant and intelligent privacy policy analysis.',
    'تحسينات التصميم، الأخبار الحية، وضع ليلي/صباحي، والإطلاق النهائي.': 'Design improvements, live news, dark/light mode, and final launch.',
    'سياسة الخصوصية': 'Privacy Policy',
    'سايف ديجيتال مشروع تخرج يهدف إلى تبسيط مفاهيم الأمن السيبراني وتقديمها للمستخدم العربي': 'Safe Digital is a graduation project aimed at simplifying cybersecurity concepts for Arabic users',
    'بطريقة تفاعلية وممتعة — بدون تعقيد تقني ومجاناً تماماً.': 'in an interactive way — without technical complexity and completely free.',

    // ── auth ناقصة ──
    'حساب جديد': 'New Account',
    'دخول ←': 'Login ←',
    'اسم المستخدم': 'Username',


    // ── contact ناقصة ──
    'استفسار، اقتراح، أو ملاحظة؟ نسعد بسماعك وسنرد في أقرب وقت.': 'A question, suggestion, or note? We\'d love to hear from you and will respond soon.',
    'وقت الاستجابة': 'Response Time',
    'من 5 دقائق إلى 24 ساعة': 'From 5 minutes to 24 hours',
    'نوع المشروع': 'Project Type',
    'مشروع تخرج أكاديمي': 'Academic Graduation Project',
    'ملاحظة أمنية:': 'Security Note:',
    'أرسل رسالتك': 'Send Your Message',
    'اختر نوع رسالتك وأخبرنا بما تريد.': 'Choose your message type and tell us what you need.',
    'استفسار': 'Inquiry',
    'اقتراح': 'Suggestion',
    'إبلاغ عن خطأ': 'Report a Bug',
    'شراكة': 'Partnership',
    'الموضوع': 'Subject',
    'رسالتك': 'Your Message',
    'تم الإرسال!': 'Sent!',
    'شكراً لتواصلك — سنرد عليك في أقرب وقت ممكن.': 'Thank you for reaching out — we\'ll get back to you as soon as possible.',
    'إرسال رسالة أخرى': 'Send Another Message',
    'أسئلة شائعة': 'Frequently Asked Questions',
    'هل المنصة مجانية تماماً؟': 'Is the platform completely free?',
    'نعم — سايف ديجيتال مجانية بالكامل ولا تتطلب تسجيلاً أو اشتراكاً. كل المحتوى متاح للجميع.': 'Yes — Safe Digital is completely free and requires no registration or subscription. All content is available to everyone.',
    'هل تجمعون بياناتي الشخصية؟': 'Do you collect my personal data?',
    'كيف يعمل تحليل سياسات الخصوصية بالذكاء الاصطناعي؟': 'How does AI privacy policy analysis work?',
    'هل يمكنني استخدام المحتوى في مشاريعي؟': 'Can I use the content in my projects?',

    // ── learn ناقصة ──
    'التعلّم السريع': 'Quick Learning',
    'اختر المحور اللي يهمك — ستجد تعريفاً مبسطاً، نصائح قابلة للتطبيق، وأمثلة واقعية.': 'Choose the topic that interests you — you\'ll find a simple definition, actionable tips, and real examples.',
    '8 محاور': '8 Topics',
    'نصائح فورية': 'Instant Tips',
    'أمثلة واقعية': 'Real Examples',
    'محور قرأته': 'Topics Read',
    'تقدّمك': 'Your Progress',
    'التصيّد': 'Phishing',
    'الخصوصية': 'Privacy',
    'التحديثات': 'Updates',
    'السحابة': 'Cloud',
    'التصيّد (Phishing)': 'Phishing',
    'محاولات خداع عبر رسائل أو روابط مزيفة تنتحل هوية جهات موثوقة لسرقة بياناتك.': 'Deception attempts through fake messages or links impersonating trusted entities to steal your data.',
    'مستوى الخطر:': 'Risk Level:',
    'مرتفع جداً': 'Very High',
    'مثال:': 'Example:',
    'اختبر نفسك': 'Test Yourself',
    'كيف تكتشف التصيّد؟': 'How to Detect Phishing?',
    'افحص الدومين بدقة': 'Check the Domain Carefully',
    'تجاهل رسائل الاستعجال': 'Ignore Urgency Messages',
    'لا تعطِ OTP لأحد أبداً': 'Never Share OTP with Anyone',
    'حتى لو قال إنه من البنك — OTP سري تماماً.': 'Even if they claim to be from the bank — OTP is completely private.',
    'ادخل للمواقع يدوياً': 'Access Websites Manually',
    'اكتب عنوان الموقع الرسمي في المتصفح مباشرة بدل الضغط على الرابط.': 'Type the official website address in the browser directly instead of clicking the link.',
    'أنواع التصيّد الشائعة': 'Common Phishing Types',
    'بريد إلكتروني مزيف من جهات تبدو موثوقة': 'Fake email from seemingly trusted entities',
    'تصيّد عبر SMS أو واتساب': 'Phishing via SMS or WhatsApp',
    'مكالمات هاتفية من "موظفين" وهميين': 'Phone calls from fake "employees"',
    'هجوم موجّه لشخص بعينه بمعلومات شخصية': 'Targeted attack on a specific person with personal info',
    'كلمة مرور قوية وفريدة لكل حساب هي أقوى خط دفاع ضد الاختراق.': 'A strong and unique password for each account is the strongest defense line against hacking.',
    'خطر الإهمال:': 'Neglect Risk:',
    'جرّب مولّد كلمات المرور': 'Try the Password Generator',
    'كيف تحمي كلمات مرورك؟': 'How to Protect Your Passwords?',
    'أطوَل = أقوى': 'Longer = Stronger',
    '12 حرف كحد أدنى — جملة طويلة أفضل من كلمة معقدة قصيرة.': 'Minimum 12 characters — a long phrase is better than a short complex word.',
    'كلمة فريدة لكل حساب': 'Unique Password for Each Account',
    'لا تكرر — لو تسرّب موقع واحد ينهار الكل.': 'Don\'t repeat — if one site is breached, everything falls.',
    'استخدم Password Manager': 'Use a Password Manager',
    'فعّل MFA دائماً': 'Always Enable MFA',
    'يحميك حتى لو سُرقت كلمة المرور.': 'Protects you even if your password is stolen.',
    'معيار كلمة المرور القوية': 'Strong Password Standards',
    '12+ حرف': '12+ characters',
    'الطول أهم عامل': 'Length is the most important factor',
    'أحرف كبيرة وصغيرة': 'Uppercase and lowercase',
    'تنويع يزيد الصعوبة': 'Variety increases difficulty',
    'أضف ! @ # $ للتقوية': 'Add ! @ # $ for strength',
    'تجنب المعلومات الشخصية': 'Avoid Personal Information',
    'اسمك وتاريخ ميلادك سهل التخمين': 'Your name and birthdate are easy to guess',
    'Wi-Fi وأمان الشبكات': 'Wi-Fi and Network Security',
    'الشبكات العامة قد تكون مراقَبة أو مزيفة — بياناتك تمر عليها بدون تشفير.': 'Public networks may be monitored or fake — your data passes through them without encryption.',
    'خطر الشبكات العامة:': 'Public Network Risk:',
    'متوسط-مرتفع': 'Medium-High',
    'كيف تحمي نفسك؟': 'How to Protect Yourself?',
    'تجنب العمليات الحساسة': 'Avoid Sensitive Operations',
    'لا تدخل على البنك أو البريد على شبكة عامة.': 'Don\'t access banking or email on a public network.',
    'استخدم VPN': 'Use a VPN',
    'يشفّر بياناتك — مثل Mullvad أو ProtonVPN.': 'Encrypts your data — like Mullvad or ProtonVPN.',
    'تحقق من اسم الشبكة': 'Verify the Network Name',
    'اسأل الموظف عن الاسم الرسمي قبل الاتصال.': 'Ask the staff for the official name before connecting.',
    'فضّل بيانات الجوال': 'Prefer Mobile Data',
    'أكثر أماناً من شبكات مجهولة المصدر.': 'Safer than networks of unknown origin.',
    'بياناتك الشخصية لها قيمة — التحكم فيها حق أساسي يحميك من الاستغلال.': 'Your personal data has value — controlling it is a basic right that protects you from exploitation.',
    'تأثير الإهمال:': 'Neglect Impact:',
    'مرتفع': 'High',
    'خطوات عملية': 'Practical Steps',
    'راجع صلاحيات التطبيقات': 'Review App Permissions',
    'الإعدادات ← التطبيقات ← الصلاحيات — كل أسبوع.': 'Settings → Apps → Permissions — every week.',
    'أوقف تتبع الموقع': 'Disable Location Tracking',
    'فعّله فقط للتطبيقات اللي تحتاجه مثل الخرائط.': 'Enable only for apps that need it like maps.',
    'لا تقبل كل الكوكيز': 'Don\'t Accept All Cookies',
    'قلّل ما تنشره علناً': 'Minimize What You Share Publicly',
    'معلوماتك في السوشيال ميديا تُستخدم في الهندسة الاجتماعية.': 'Your social media info is used in social engineering.',
    'التحديثات الأمنية': 'Security Updates',
    'التحديثات ليست مميزات فقط — هي إصلاحات لثغرات يستغلها المهاجمون.': 'Updates are not just features — they fix vulnerabilities that attackers exploit.',
    'خطر عدم التحديث:': 'Risk of Not Updating:',
    'ماذا تحدّث؟': 'What to Update?',
    'نظام التشغيل أولاً': 'Operating System First',
    'المتصفح دائماً': 'Browser Always',
    'الراوتر لا تنساه': 'Don\'t Forget the Router',
    'تحقق من التحديثات مرة كل شهر.': 'Check for updates once a month.',
    'التطبيقات أيضاً': 'Apps Too',
    'فعّل التحديث التلقائي من المتجر.': 'Enable auto-update from the store.',
    'التخزين السحابي مريح لكن خطأ واحد في الإعداد يكشف ملفاتك للعالم.': 'Cloud storage is convenient but one configuration error can expose your files to the world.',
    'خطر الإعداد الخاطئ:': 'Misconfiguration Risk:',
    'كيف تأمن ملفاتك السحابية؟': 'How to Secure Your Cloud Files?',
    'راجع إعدادات المشاركة': 'Review Sharing Settings',
    "تأكد أن ملفاتك خاصة وليست عامة.": "Make sure your files are private not public.",
    'فعّل تنبيهات تسجيل الدخول': 'Enable Login Alerts',
    'لو دخل أحد غيرك ستعرف فوراً.': 'If someone else logs in you\'ll know immediately.',
    'راجع قائمة من لديه صلاحية': 'Review Who Has Access',
    'احذف الصلاحيات القديمة لأشخاص لم تعد تتعامل معهم.': 'Remove old permissions for people you no longer work with.',
    'أخطر أنواع الهجمات — لا تحتاج تقنية، تستغل ثقتك وعواطفك فقط.': 'The most dangerous type of attack — requires no technology, just exploits your trust and emotions.',
    'الأعلى': 'Highest',
    'كيف تتعرف عليها؟': 'How to Recognize It?',
    'الاستعجال المصطنع': 'Artificial Urgency',
    'العروض المغرية جداً': 'Too-Good-To-Be-True Offers',
    'انتحال الهوية': 'Identity Impersonation',
    'يدّعي أنه من IT أو البنك — تحقق من هويته بشكل مستقل.': 'Claims to be from IT or the bank — verify their identity independently.',
    'القاعدة الذهبية': 'The Golden Rule',
    'لو شعرت بضغط للتصرف بسرعة — توقف، تنفّس، تحقق.': 'If you feel pressured to act quickly — stop, breathe, verify.',
    'البرمجيات الخبيثة (Malware)': 'Malware',
    'برامج مصممة للتجسس أو التدمير أو الابتزاز — تدخل جهازك بطرق غير متوقعة.': 'Programs designed to spy, destroy, or extort — they enter your device in unexpected ways.',
    'حمّل من مصادر رسمية فقط': 'Download from Official Sources Only',
    'فعّل مضاد الفيروسات': 'Enable Antivirus',
    'لا تفتح مرفقات مجهولة': 'Don\'t Open Unknown Attachments',
    'حتى من معارفك — حسابهم ممكن يكون مخترقاً.': 'Even from people you know — their account might be compromised.',
    'أنواع Malware الشائعة': 'Common Malware Types',
    'يشفّر ملفاتك ويطلب فدية': 'Encrypts your files and demands ransom',
    'يتجسس على نشاطك وكلمات مرورك': 'Spies on your activity and passwords',
    'يبدو برنامجاً شرعياً لكنه خبيث': 'Looks like a legitimate program but is malicious',
    'يحوّل جهازك لأداة في شبكة هجمات': 'Turns your device into a tool in an attack network',
    'بعد قراءة المحاور، جرّب': 'After reading the topics, try the',
    'لتقييم وعيك السيبراني.': 'to assess your cybersecurity awareness.',
  };

  // قاموس عكسي (إنجليزي → عربي)
  const DR = {};
  Object.entries(D).forEach(([ar, en]) => { DR[en] = ar; });

  function injectBtn() {
    if (document.getElementById('langToggle')) return;
    const navInner = document.querySelector('.nav-inner') || document.querySelector('.nav .container');
    if (!navInner) return;

    const btn = document.createElement('button');
    btn.id = 'langToggle';
    btn.type = 'button';
    btn.style.cssText = 'display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:10px;cursor:pointer;border:1px solid rgba(106,166,255,.3);background:rgba(106,166,255,.08);color:var(--text,#e8ecff);font-family:inherit;font-size:13px;font-weight:700;transition:.2s;white-space:nowrap;margin:0 4px;';
    btn.onmouseenter = () => btn.style.borderColor = 'rgba(106,166,255,.7)';
    btn.onmouseleave = () => btn.style.borderColor = 'rgba(106,166,255,.3)';
    btn.onclick = toggle;
    updateBtnLabel(btn);

    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) themeBtn.insertAdjacentElement('afterend', btn);
    else navInner.prepend(btn);
  }

  function updateBtnLabel(btn) {
    btn = btn || document.getElementById('langToggle');
    if (!btn) return;
    btn.innerHTML = lang === 'ar' ? '<span>🌐</span><span>EN</span>' : '<span>🌐</span><span>عر</span>';
  }

  function applyTranslation() {
    const dict = lang === 'en' ? D : DR;

    document.documentElement.lang = lang === 'en' ? 'en' : 'ar';
    document.documentElement.dir  = lang === 'en' ? 'ltr' : 'rtl';

    if (dict[document.title]) document.title = dict[document.title];

    translateNode(document.body, dict);

    document.querySelectorAll('[placeholder]').forEach(el => {
      const t = dict[el.getAttribute('placeholder')];
      if (t) el.setAttribute('placeholder', t);
    });

    updateBtnLabel();
  }

  function translateNode(node, dict) {
    const skip = ['SCRIPT','STYLE','SVG','PATH','LINE','POLYLINE','POLYGON','CIRCLE','RECT','NOSCRIPT','CODE','PRE'];
    node.childNodes.forEach(child => {
      if (child.nodeType === Node.TEXT_NODE) {
        let text = child.textContent;
        const trimmed = text.trim();
        if (trimmed && dict[trimmed]) {
          child.textContent = text.replace(trimmed, dict[trimmed]);
        } else {
          let changed = false;
          Object.entries(dict).forEach(([from, to]) => {
            if (from.length > 3 && text.includes(from)) {
              text = text.split(from).join(to);
              changed = true;
            }
          });
          if (changed) child.textContent = text;
        }
      } else if (child.nodeType === Node.ELEMENT_NODE && !skip.includes(child.tagName)) {
        translateNode(child, dict);
      }
    });
  }

  function toggle() {
    lang = lang === 'ar' ? 'en' : 'ar';
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslation();
  }

  function init() {
    injectBtn();
    if (lang === 'en') applyTranslation();
  }

  // شغّل فوراً لو الصفحة محملة، وإلا انتظر
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.sdTranslate = { toggle, getLang: () => lang };
})();
