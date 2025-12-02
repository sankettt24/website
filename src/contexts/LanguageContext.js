import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Header
    home: 'Home',
    about: 'About',
    deposit: 'Deposit',
    depositDesc: 'Secure savings with competitive interest rates',
    loans: 'Loans',
    loansDesc: 'Flexible loan options for all your needs',
    services: 'Services',
    servicesDesc: 'Complete banking solutions at your fingertips',
    locations: 'Locations',
    contact: 'Contact Us',
    switchToMarathi: 'मराठी',
    switchToEnglish: 'English',
    
    // Common
    learnMore: 'Learn More',
    viewAll: 'View All',
    readMore: 'Read More',
    applyNow: 'Apply Now',
    getStarted: 'Get Started',
    
    // Hero Slider
    heroTitle1: 'Every Big Things Come True from Small Steps',
    heroSubtitle1: 'Explore Our Shiv Sahyadri Patpedhi Pre-approved Offers Now.',
    heroFeature1: 'Attractive Interest Rate',
    heroFeature2: 'No Income Documentation',
    heroTitle2: 'Upgrade Your Business with Micro ATM',
    heroSubtitle2: 'Easily do Cashless Recharges & Bill Payments with ATM Cards.',
    heroTitle3: 'Enhance the Financial Security of your Retirement Years.',
    heroSubtitle3: 'The Best Time to Create You Retirement Lifestyle.',
    heroTitle4: 'Mortgage Loan Made Easy.',
    heroSubtitle4: 'Ultimate Flexibility to Make Your Dream Home Come True',
    heroTitle5: 'Mobile Banking App',
    heroSubtitle5: 'The official Banking app of Shivsahyadri Sahakari Patpedhi Maryadit Mumbai.',
    heroTitle6: 'Your Happiness is a Few Clicks Away',
    heroSubtitle6: 'Redefine Your Patpedhi Experience.',
    
    // Sections
    investInFuture: 'Invest In Your Future',
    chooseFinancialProducts: 'Choose from our wide range of financial products',
    servicesWeOffer: 'Services We Offer',
    newsAndEvent: 'News & Events',
    chairmanMessage: 'Chairman\'s Message',
    awardsAchievements: 'Awards & Achievements',
    
    // Stats
    yearsOfService: 'Years of Service',
    branches: 'Branches',
    totalMembers: 'Total Members',
    customers: 'Customers',
    turnover: 'Turnover',
    
    // Deposit Section
    depositTab: 'DEPOSIT',
    loansTab: 'LOANS',
    shivSankalpDeposit: 'Shiv Sankalp Deposit',
    shivSankalpDesc: 'Account holders can make transactions in their accounts more easily than regular…',
    savingDeposit: 'Saving Deposit',
    savingDepositDesc: 'A Savings Account is an interest-bearing deposit account that provides a modest…',
    currentDeposit: 'Current Deposit',
    currentDepositDesc: 'We help you to grow faster in your business world as well…',
    dailyDeposit: 'Daily Deposit',
    dailyDepositDesc: 'Daily collection Deposit Scheme, this scheme will develop the saving habit of…',
    balkalyanDeposit: 'Balkalyan Deposit',
    balkalyanDepositDesc: 'Start saving for your child\'s higher education & be ready for their…',
    recurringDeposit: 'Recurring Deposit',
    recurringDepositDesc: 'These are best if you wish to create a fund for your…',
    lakhpatiDeposit: 'Lakhpati Deposit',
    lakhpatiDepositDesc: 'Invest in this scheme and become a Lakhpati. Scheme is for all…',
    termDeposit: 'Term Deposit',
    termDepositDesc: 'Term deposits are an extremely safe investment and are therefore very appealing to…',
    misDeposit: 'MIS Deposit',
    misDepositDesc: 'In Monthly Income Scheme Deposit, we all require certain amount for our…',
    doubleDeposit: 'Double Deposit',
    doubleDepositDesc: 'The certain amount should keep for specific period which get double at…',
    
    // Services
    locker: 'Locker',
    lockerDesc: 'Secure locker facilities to safeguard your valuables',
    microATM: 'Micro ATM',
    microATMDesc: 'Convenient banking services at your doorstep',
    coreBanking: 'Core Banking',
    coreBankingDesc: 'Advanced digital banking for seamless transactions',
    smsBanking: 'SMS Banking',
    smsBankingDesc: 'Banking updates and services via SMS',
    mobileBankingApp: 'Mobile Banking App',
    mobileBankingDesc: 'Complete banking solution on your mobile device',
    moneyTransfer: 'Money Transfer',
    electricBillCollection: 'Electric Bill Collection',
    fundTransfer: 'Fund Transfer',
    fundTransferDesc: 'Quick and secure fund transfer services',
    
    // Chairman Message
    chairmanName: 'Mr. Dnyaneshwar B. Wangde',
    chairmanText: 'We are happy to inform you our society is just achieving the target of 1000 Crore business with the help and support of the Community Members, Shareholders, Customers, Stakeholder This time of Thanks giving, We must express Our thanks to you.',
    
    // Loan Types
    personalLoan: 'Personal Loan EMI',
    personalLoanDesc: 'Quick personal loans with competitive EMI options for all your needs',
    propertyMortgageLoan: 'Property Mortgage Loan',
    propertyLoan: 'Property Mortgage Loan',
    propertyLoanDesc: 'Ultimate flexibility to make your dream home come true',
    vehicleLoan: 'Vehicle Loan',
    vehicleLoanDesc: 'Drive your dream vehicle with our affordable loan schemes',
    goldLoan: 'Gold Loan',
    goldLoanDesc: 'Instant loans against your gold with attractive interest rates',
    machineryLoan: 'Machinery Loan',
    machineryLoanDesc: 'Expand your business with our machinery financing solutions',
    loanAgainstDaily: 'Loan Against Daily Deposit',
    loanAgainstDeposit: 'Loan Against Deposit',
    loanAgainstDepositDesc: 'Get instant loans against your deposits with minimal documentation',
    loanAgainstRD: 'Loan Against RD Deposit',
    stockMortgageLoan: 'Stock Mortgage Loan',
    
    // Footer
    profile: 'Profile',
    history: 'History',
    visionMission: 'Vision & Mission',
    progressAtGlance: 'Progress at Glance',
    specialThanks: 'Special Thanks',
    ourBankers: 'Our Bankers',
    legalAdvisor: 'Legal Advisor',
    valuers: 'Valuers',
    informative: 'Informative',
    annualReport: 'Annual Report',
    shareHolder: 'Share Holder',
    emiCalculator: 'EMI Calculator',
    kyc: 'KYC',
    customerCare: 'Customer Care',
    feedback: 'Feedback',
    otherLink: 'Other Links',
    career: 'Career',
    openAccount: 'Open An Account',
    notice: 'Notice',
    elections: 'Elections',
    forAnyQueries: 'For any queries call us on',
    emailOn: 'Email on',
    branchesInfo: 'As on 31.03.2025 the Society has the network of 40 Branches in Maharashtra. These Branches are manned by dedicated workforce of more than 250 which are ably supported and guided by 4 Regional Offices spread across our command area and the Head Office at Matunga Road.',
    downloadTheApp: 'Download The App:',
    connectWithUs: 'Connect With Us:',
    allRightsReserved: 'All Rights Reserved',
    nearestBranch: 'Nearest Branch',
    faqs: 'FAQ\'s',
    sitemap: 'Sitemap',
    termsConditions: 'Terms & Conditions',
    disclaimer: 'Disclaimer',
    privacyPolicy: 'Privacy Policy',
    designMaintained: 'Design & Maintained by',
    founderChairman: 'Founder Chairman',
  },
  mr: {
    // Header
    home: 'मुख्यपृष्ठ',
    about: 'आमच्याबद्दल',
    deposit: 'ठेव',
    depositDesc: 'स्पर्धात्मक व्याज दरांसह सुरक्षित बचत',
    loans: 'कर्ज',
    loansDesc: 'आपल्या सर्व गरजांसाठी लवचिक कर्ज पर्याय',
    services: 'सेवा',
    servicesDesc: 'आपल्या हाताच्या टोकावर संपूर्ण बँकिंग उपाय',
    locations: 'स्थाने',
    contact: 'संपर्क करा',
    switchToMarathi: 'मराठी',
    switchToEnglish: 'English',
    
    // Common
    learnMore: 'अधिक जाणून घ्या',
    viewAll: 'सर्व पहा',
    readMore: 'अधिक वाचा',
    applyNow: 'आता अर्ज करा',
    getStarted: 'सुरुवात करा',
    
    // Hero Slider
    heroTitle1: 'प्रत्येक मोठी गोष्ट लहान पावलांपासून सुरू होते',
    heroSubtitle1: 'आमच्या शिवसह्याद्री पतपेढीच्या पूर्व-मंजूर ऑफर्स आता एक्सप्लोर करा.',
    heroFeature1: 'आकर्षक व्याज दर',
    heroFeature2: 'उत्पन्न दस्तऐवजीकरण नाही',
    heroTitle2: 'मायक्रो एटीएमसह आपला व्यवसाय अपग्रेड करा',
    heroSubtitle2: 'एटीएम कार्डसह सहजपणे कॅशलेस रिचार्ज आणि बिल पेमेंट करा.',
    heroTitle3: 'आपल्या निवृत्तीच्या वर्षांची आर्थिक सुरक्षा वाढवा.',
    heroSubtitle3: 'आपली निवृत्ती जीवनशैली तयार करण्यासाठी सर्वोत्तम वेळ.',
    heroTitle4: 'गहाण कर्ज सोपे केले.',
    heroSubtitle4: 'तुमचे स्वप्नातील घर खरे करण्यासाठी अंतिम लवचिकता',
    heroTitle5: 'मोबाईल बँकिंग अॅप',
    heroSubtitle5: 'शिवसह्याद्री सहकारी पतपेढी मर्यादित मुंबईचा अधिकृत बँकिंग अॅप.',
    heroTitle6: 'तुमचा आनंद काही क्लिक्स दूर आहे',
    heroSubtitle6: 'तुमचा पतपेढी अनुभव पुन्हा परिभाषित करा.',
    
    // Sections
    investInFuture: 'आपल्या भविष्यात गुंतवणूक करा',
    chooseFinancialProducts: 'आमच्या आर्थिक उत्पादनांच्या विस्तृत श्रेणीतून निवडा',
    servicesWeOffer: 'आम्ही देतो सेवा',
    newsAndEvent: 'बातम्या आणि कार्यक्रम',
    chairmanMessage: 'अध्यक्षांचा संदेश',
    awardsAchievements: 'पुरस्कार आणि उपलब्धी',
    
    // Stats
    yearsOfService: 'वर्षांची सेवा',
    branches: 'शाखा',
    totalMembers: 'एकूण सदस्य',
    customers: 'ग्राहक',
    turnover: 'उलाढाल',
    
    // Deposit Section
    depositTab: 'ठेव',
    loansTab: 'कर्ज',
    shivSankalpDeposit: 'शिव संकल्प ठेव',
    shivSankalpDesc: 'खातेधारक त्यांच्या खात्यात नियमित पेक्षा अधिक सहजपणे व्यवहार करू शकतात…',
    savingDeposit: 'बचत ठेव',
    savingDepositDesc: 'बचत खाते हे व्याज देणारे ठेव खाते आहे जे माफक…',
    currentDeposit: 'चालू ठेव',
    currentDepositDesc: 'आम्ही तुम्हाला तुमच्या व्यवसाय जगात वेगाने वाढण्यास मदत करतो…',
    dailyDeposit: 'दैनिक ठेव',
    dailyDepositDesc: 'दैनिक संकलन ठेव योजना, ही योजना बचतीची सवय विकसित करेल…',
    balkalyanDeposit: 'बालकल्याण ठेव',
    balkalyanDepositDesc: 'आपल्या मुलाच्या उच्च शिक्षणासाठी बचत सुरू करा आणि त्यांच्यासाठी तयार रहा…',
    recurringDeposit: 'आवर्ती ठेव',
    recurringDepositDesc: 'जर तुम्हाला तुमच्यासाठी निधी तयार करायचा असेल तर हे सर्वोत्तम आहे…',
    lakhpatiDeposit: 'लखपती ठेव',
    lakhpatiDepositDesc: 'या योजनेत गुंतवणूक करा आणि लखपती बना. योजना सर्वांसाठी आहे…',
    termDeposit: 'मुदत ठेव',
    termDepositDesc: 'मुदत ठेवी अत्यंत सुरक्षित गुंतवणूक आहेत आणि म्हणून खूप आकर्षक आहेत…',
    misDeposit: 'मासिक उत्पन्न योजना',
    misDepositDesc: 'मासिक उत्पन्न योजना ठेवीमध्ये, आम्हा सर्वांना आमच्यासाठी विशिष्ट रक्कम आवश्यक आहे…',
    doubleDeposit: 'डबल ठेव',
    doubleDepositDesc: 'विशिष्ट कालावधीसाठी विशिष्ट रक्कम ठेवावी जी दुप्पट होते…',
    
    // Services
    locker: 'लॉकर',
    lockerDesc: 'आपल्या मौल्यवान वस्तूंचे रक्षण करण्यासाठी सुरक्षित लॉकर सुविधा',
    microATM: 'मायक्रो एटीएम',
    microATMDesc: 'आपल्या दारात सोयीस्कर बँकिंग सेवा',
    coreBanking: 'कोअर बँकिंग',
    coreBankingDesc: 'निर्बाध व्यवहारांसाठी प्रगत डिजिटल बँकिंग',
    smsBanking: 'एसएमएस बँकिंग',
    smsBankingDesc: 'एसएमएसद्वारे बँकिंग अपडेट्स आणि सेवा',
    mobileBankingApp: 'मोबाईल बँकिंग अॅप',
    mobileBankingDesc: 'आपल्या मोबाइल डिव्हाइसवर संपूर्ण बँकिंग उपाय',
    moneyTransfer: 'पैसे हस्तांतरण',
    electricBillCollection: 'वीज बिल संकलन',
    fundTransfer: 'निधी हस्तांतरण',
    fundTransferDesc: 'जलद आणि सुरक्षित निधी हस्तांतरण सेवा',
    
    // Chairman Message
    chairmanName: 'श्री. ज्ञानेश्वर ब. वांगडे',
    chairmanText: 'समुदाय सदस्य, भागधारक, ग्राहक, भागधारक यांच्या मदतीने आणि पाठिंब्याने आमची संस्था १००० कोटी व्यवसायाचे लक्ष्य साध्य करत असल्याची आम्हाला आनंदाची बातमी कळविण्यात येत आहे. धन्यवादाची ही वेळ, आम्ही तुमचे आभार मानलेच पाहिजेत.',
    
    // Loan Types
    personalLoan: 'वैयक्तिक कर्ज ईएमआय',
    personalLoanDesc: 'आपल्या सर्व गरजांसाठी स्पर्धात्मक ईएमआय पर्यायांसह द्रुत वैयक्तिक कर्ज',
    propertyMortgageLoan: 'मालमत्ता गहाण कर्ज',
    propertyLoan: 'मालमत्ता गहाण कर्ज',
    propertyLoanDesc: 'आपले स्वप्नातील घर साकार करण्यासाठी अत्यंत लवचिकता',
    vehicleLoan: 'वाहन कर्ज',
    vehicleLoanDesc: 'आमच्या परवडणाऱ्या कर्ज योजनांसह आपले स्वप्नातील वाहन चालवा',
    goldLoan: 'सोने कर्ज',
    goldLoanDesc: 'आकर्षक व्याज दरांसह आपल्या सोन्याविरुद्ध त्वरित कर्ज',
    machineryLoan: 'यंत्रसामग्री कर्ज',
    machineryLoanDesc: 'आमच्या यंत्रसामग्री वित्तपुरवठा उपायांसह आपला व्यवसाय वाढवा',
    loanAgainstDaily: 'दैनिक ठेवीवर कर्ज',
    loanAgainstDeposit: 'ठेवीवर कर्ज',
    loanAgainstDepositDesc: 'किमान कागदपत्रांसह आपल्या ठेवींविरुद्ध त्वरित कर्ज मिळवा',
    loanAgainstRD: 'आरडी ठेवीवर कर्ज',
    stockMortgageLoan: 'स्टॉक गहाण कर्ज',
    
    // Footer
    profile: 'प्रोफाइल',
    history: 'इतिहास',
    visionMission: 'दृष्टी आणि ध्येय',
    progressAtGlance: 'एका दृष्टीक्षेपात प्रगती',
    specialThanks: 'विशेष धन्यवाद',
    ourBankers: 'आमचे बँकर्स',
    legalAdvisor: 'कायदेशीर सल्लागार',
    valuers: 'मूल्यांकक',
    informative: 'माहितीपूर्ण',
    annualReport: 'वार्षिक अहवाल',
    shareHolder: 'भागधारक',
    emiCalculator: 'ईएमआय कॅल्क्युलेटर',
    kyc: 'केवायसी',
    customerCare: 'ग्राहक सेवा',
    feedback: 'अभिप्राय',
    otherLink: 'इतर दुवे',
    career: 'करिअर',
    openAccount: 'खाते उघडा',
    notice: 'सूचना',
    elections: 'निवडणुका',
    forAnyQueries: 'कोणत्याही प्रश्नासाठी आम्हाला कॉल करा',
    emailOn: 'ईमेल करा',
    branchesInfo: '३१.०३.२०२५ पर्यंत सोसायटीचे महाराष्ट्रात ४० शाखांचे नेटवर्क आहे. या शाखा २५० पेक्षा जास्त समर्पित कर्मचार्‍यांद्वारे चालवल्या जातात ज्यांना आमच्या कमांड एरियामध्ये पसरलेल्या ४ प्रादेशिक कार्यालयांद्वारे आणि मातुंगा रोड येथील मुख्य कार्यालयाद्वारे मार्गदर्शन केले जाते.',
    downloadTheApp: 'अॅप डाउनलोड करा:',
    connectWithUs: 'आमच्याशी कनेक्ट व्हा:',
    allRightsReserved: 'सर्व हक्क राखीव',
    nearestBranch: 'जवळची शाखा',
    faqs: 'वारंवार विचारले जाणारे प्रश्न',
    sitemap: 'साइटमॅप',
    termsConditions: 'नियम आणि अटी',
    disclaimer: 'अस्वीकरण',
    privacyPolicy: 'गोपनीयता धोरण',
    designMaintained: 'डिझाइन आणि देखभाल',
    founderChairman: 'संस्थापक अध्यक्ष',
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'mr' : 'en');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
