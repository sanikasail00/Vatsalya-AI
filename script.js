document.addEventListener('DOMContentLoaded', () => {

    // --- LANGUAGE MANAGEMENT (NEW & EXPANDED) ---
    const translations = {
        en: {
            // Navigation
            nav_maternal: 'Maternal',
            nav_nicu: 'NICU',
            nav_infant: 'Infant',
            nav_doctor: 'Doctor Connect',
            // Common
            disclaimer_title: 'Important Medical Disclaimer',
            disclaimer_text: 'This tool is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.',
            disclaimer_text_alt: 'The features on this page are for informational purposes only...',
            i_understand: 'I Understand',
            // Maternal Tab
            maternal_title: 'Maternal Health Portal',
            health_data_input: 'Health Data Input',
            maternal_age: 'Maternal Age',
            gestational_week: 'Gestational Week',
            gbs_status: 'Group B Strep (GBS) Status',
            select_status: 'Select Status',
            gbs_positive: 'Positive',
            gbs_negative: 'Negative',
            gestational_diabetes: 'Gestational Diabetes?',
            previous_c_section: 'Previous C-Section?',
            symptoms_notes: 'Symptoms/Notes',
            maternal_notes_placeholder: 'e.g., high blood pressure, persistent headaches...',
            analyze_risk_btn: 'Analyze Risk',
            risk_analysis_result: 'Risk Analysis Result',
            risk_score: 'Risk Score:',
            points: 'Points',
            primary_factors: 'Primary Factors:',
            recommendation: 'Recommendation:',
            submit_to_see_analysis: 'Submit health data to see the risk analysis.',
            risk_low: 'Low Risk',
            risk_moderate: 'Moderate Risk',
            risk_high: 'High Risk',
            risk_very_high: 'Very High Risk',
            // NICU Tab
            nicu_title: 'Real-Time NICU Dashboard',
            stable: 'Stable',
            alert: 'Alert',
            // Infant Tab
            infant_title: 'Infant Daily Care Portal',
            daily_log_input: 'Daily Log Input',
            infant_age_weeks: 'Infant Age (in weeks)',
            feeding_type: 'Feeding Type',
            feeding_breastfed: 'Breastfed',
            feeding_formula: 'Formula',
            feeding_mixed: 'Mixed',
            stool_color: 'Stool Color',
            select: 'Select',
            stool_color_yellow: 'Yellow/Mustard',
            stool_color_green: 'Green',
            stool_color_brown: 'Brown',
            stool_color_white: 'White/Gray (Alert)',
            stool_color_red: 'Red (Alert)',
            stool_consistency: 'Stool Consistency',
            stool_consistency_seedy: 'Seedy/Mushy',
            stool_consistency_pasty: 'Pasty',
            stool_consistency_watery: 'Watery (Alert)',
            stool_consistency_hard: 'Hard Pebbles',
            get_recommendation_btn: 'Submit & Get Recommendation',
            personalized_care_plan: 'Personalized Care Plan',
            summary: 'Summary:',
            submit_to_see_plan: "Submit your baby's details for a personalized care plan.",
            // AI Chat
            chat_welcome: "Hello! I'm your AI assistant. How can I help with your basic newborn questions today?",
            chat_assistant_title: 'AI Baby Care Assistant',
            chat_placeholder: 'Ask a basic question...',
            chat_send: 'Send',
            // Doctor Connect Tab
            doctor_connect_title: 'Doctor Connect',
            generate_summary: 'Generate Health Summary',
            create_maternal_report: 'Create Maternal Report',
            create_infant_report: 'Create Infant Report',
            secure_messaging: 'Secure Messaging',
            subject: 'Subject',
            message: 'Message',
            send_message_btn: 'Send Message',
            print_report: 'Print Report'
        },

        kn: {
            nav_maternal: 'ತಾಯಿಯ',
            nav_nicu: 'ಎನ್‌ಐಸಿಯು',
            nav_infant: 'ಶಿಶು',
            nav_doctor: 'ವೈದ್ಯರ ಸಂಪರ್ಕ',
            disclaimer_title: 'ಪ್ರಮುಖ ವೈದ್ಯಕೀಯ ಹಕ್ಕುತ್ಯಾಗ',
            disclaimer_text: 'ಈ ಉಪಕರಣವು ಕೇವಲ ಮಾಹಿತಿ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಮಾತ್ರ ಮತ್ತು ವೃತ್ತಿಪರ ವೈದ್ಯಕೀಯ ಸಲಹೆ, ರೋಗನಿರ್ಣಯ ಅಥವಾ ಚಿಕಿತ್ಸೆಗಿನಲ್ಲಿ ಪರ್ಯಾಯವಲ್ಲ...',
            disclaimer_text_alt: 'ಈ ಪುಟದ ವೈಶಿಷ್ಟ್ಯಗಳು ಕೇವಲ ಮಾಹಿತಿ ಉದ್ದೇಶಗಳಿಗಾಗಿ ಇವೆ...',
            i_understand: 'ನನಗೆ ಅರ್ಥವಾಗಿದೆ',
            maternal_title: 'ತಾಯಿಯ ಆರೋಗ್ಯ ಪೋರ್ಟಲ್',
            health_data_input: 'ಆರೋಗ್ಯ ಡೇಟಾ ಇನ್‌ಪುಟ್',
            maternal_age: 'ತಾಯಿಯ ವಯಸ್ಸು',
            gestational_week: 'ಗರ್ಭಾವಸ್ಥೆಯ ವಾರ',
            gbs_status: 'ಗುಂಪು ಬಿ ಸ್ಟ್ರೆಪ್ (ಜಿಬಿಎಸ್) ಸ್ಥಿತಿ',
            select_status: 'ಸ್ಥಿತಿ ಆಯ್ಕೆಮಾಡಿ',
            gbs_positive: 'ಧನಾತ್ಮಕ',
            gbs_negative: 'ಋಣಾತ್ಮಕ',
            gestational_diabetes: 'ಗರ್ಭಾವಸ್ಥೆಯ ಮಧುಮೇಹ?',
            previous_c_section: 'ಹಿಂದಿನ ಸಿ-ಸೆಕ್ಷನ್?',
            symptoms_notes: 'ಲಕ್ಷಣಗಳು/ಟಿಪ್ಪಣಿಗಳು',
            maternal_notes_placeholder: 'ಉದಾ., ಅಧಿಕ ರಕ್ತದೊತ್ತಡ, ನಿರಂತರ ತಲೆನೋವು...',
            analyze_risk_btn: 'ಅಪಾಯವನ್ನು ವಿಶ್ಲೇಷಿಸಿ',
            risk_analysis_result: 'ಅಪಾಯ ವಿಶ್ಲೇಷಣೆಯ ಫಲಿತಾಂಶ',
            risk_score: 'ಅಪಾಯದ ಅಂಕ:',
            points: 'ಅಂಕಗಳು',
            primary_factors: 'ಪ್ರಾಥಮಿಕ ಅಂಶಗಳು:',
            recommendation: 'ಶಿಫಾರಸು:',
            submit_to_see_analysis: 'ಅಪಾಯ ವಿಶ್ಲೇಷಣೆ ನೋಡಲು ಆರೋಗ್ಯ ಡೇಟಾವನ್ನು ಸಲ್ಲಿಸಿ.',
            risk_low: 'ಕಡಿಮೆ ಅಪಾಯ',
            risk_moderate: 'ಮಧ್ಯಮ ಅಪಾಯ',
            risk_high: 'ಹೆಚ್ಚಿನ ಅಪಾಯ',
            risk_very_high: 'ಅತಿ ಹೆಚ್ಚಿನ ಅಪಾಯ',
            nicu_title: 'ನೈಜ-ಸಮಯದ ಎನ್‌ಐಸಿಯು ಡ್ಯಾಶ್ಬೋರ್ಡ್',
            stable: 'ಸ್ಥಿರ',
            alert: 'ಎಚ್ಚರಿಕೆ',
            infant_title: 'ಶಿಶು ದೈನಂದಿನ ಆರೈಕೆ ಪೋರ್ಟಲ್',
            daily_log_input: 'ದೈನಂದಿನ ಲಾಗ್ ಇನ್‌ಪುಟ್',
            infant_age_weeks: 'ಶಿಶುವಿನ ವಯಸ್ಸು (ವಾರಗಳಲ್ಲಿ)',
            feeding_type: 'ಆಹಾರದ ಪ್ರಕಾರ',
            feeding_breastfed: 'ಸ್ತನ್ಯಪಾನ',
            feeding_formula: 'ಫಾರ್ಮುಲಾ',
            feeding_mixed: 'ಮಿಶ್ರಿತ',
            stool_color: 'ಮಲದ ಬಣ್ಣ',
            select: 'ಆಯ್ಕೆಮಾಡಿ',
            stool_color_yellow: 'ಹಳದಿ/ಸಾಸಿವೆ',
            stool_color_green: 'ಹಸಿರು',
            stool_color_brown: 'ಕಂದು',
            stool_color_white: 'ಬಿಳಿ/ಬೂದು (ಎಚ್ಚರಿಕೆ)',
            stool_color_red: 'ಕೆಂಪು (ಎಚ್ಚರಿಕೆ)',
            stool_consistency: 'ಮಲದ ಸಾಂದ್ರತೆ',
            stool_consistency_seedy: 'ಬೀಜದಂತಹ/ಮೆತ್ತಗಿನ',
            stool_consistency_pasty: 'ಪೇಸ್ಟ್‌ನಂತೆ',
            stool_consistency_watery: 'ನೀರಿನಂತಹ (ಎಚ್ಚರಿಕೆ)',
            stool_consistency_hard: 'ಗಟ್ಟಿ ಉಂಡೆಗಳು',
            get_recommendation_btn: 'ಸಲ್ಲಿಸಿ ಮತ್ತು ಶಿಫಾರಸು ಪಡೆಯಿರಿ',
            personalized_care_plan: 'ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಆರೈಕೆ ಯೋಜನೆ',
            summary: 'ಸಾರಾಂಶ:',
            submit_to_see_plan: 'ವೈಯಕ್ತಿಕ ಆರೈಕೆ ಯೋಜನೆಗಾಗಿ ನಿಮ್ಮ ಮಗುವಿನ ವಿವರಗಳನ್ನು ಸಲ್ಲಿಸಿ.',
            chat_welcome: "ನಮಸ್ಕಾರ! ನಾನು ನಿಮ್ಮ AI ಸಹಾಯಕ. ನಿಮ್ಮ ನವಜಾತ ಶಿಶುವಿನ ಮೂಲಭೂತ ಪ್ರಶ್ನೆಗಳಿಗೆ ನಾನು ಇಂದು ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?",
            chat_assistant_title: 'AI ಶಿಶು ಆರೈಕೆ ಸಹಾಯಕ',
            chat_placeholder: 'ಒಂದು ಮೂಲಭೂತ ಪ್ರಶ್ನೆ ಕೇಳಿ...',
            chat_send: 'ಕಳುಹಿಸಿ',
            doctor_connect_title: 'ವೈದ್ಯರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸಿ',
            generate_summary: 'ಆರೋಗ್ಯ ಸಾರಾಂಶವನ್ನು ರಚಿಸಿ',
            create_maternal_report: 'ತಾಯಿಯ ವರದಿ ರಚಿಸಿ',
            create_infant_report: 'ಶಿಶು ವರದಿ ರಚಿಸಿ',
            secure_messaging: 'ಸುರಕ್ಷಿತ ಸಂದೇಶ ಕಳುಹಿಸುವಿಕೆ',
            subject: 'ವಿಷಯ',
            message: 'ಸಂದೇಶ',
            send_message_btn: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
            print_report: 'ವರದಿ ಮುದ್ರಿಸಿ'
        },
        hi: {
            nav_maternal: 'मातृ',
            nav_nicu: 'एनआईसीयू',
            nav_infant: 'शिशु',
            nav_doctor: 'डॉक्टर से जुड़ें',
            disclaimer_title: 'महत्वपूर्ण चिकित्सा अस्वीकरण',
            disclaimer_text: 'यह उपकरण केवल सूचना के उद्देश्यों के लिए है और पेशेवर चिकित्सा सलाह, निदान या उपचार का विकल्प नहीं है...',
            disclaimer_text_alt: 'इस पृष्ठ की विशेषताएँ केवल जानकारी के लिए हैं...',
            i_understand: 'मैं समझता हूँ',
            maternal_title: 'मातृ स्वास्थ्य पोर्टल',
            health_data_input: 'स्वास्थ्य डेटा इनपुट',
            maternal_age: 'मातृ आयु',
            gestational_week: 'गर्भकालीन सप्ताह',
            gbs_status: 'ग्रुप बी स्ट्रेप (जीबीएस) स्थिति',
            select_status: 'स्थिति चुनें',
            gbs_positive: 'सकारात्मक',
            gbs_negative: 'नकारात्मक',
            gestational_diabetes: 'गर्भकालीन मधुमेह?',
            previous_c_section: 'पिछला सी-सेक्शन?',
            symptoms_notes: 'लक्षण/नोट्स',
            maternal_notes_placeholder: 'जैसे, उच्च रक्तचाप, लगातार सिरदर्द...',
            analyze_risk_btn: 'जोखिम का विश्लेषण करें',
            risk_analysis_result: 'जोखिम विश्लेषण परिणाम',
            risk_score: 'जोखिम स्कोर:',
            points: 'अंक',
            primary_factors: 'प्राथमिक कारक:',
            recommendation: 'सिफारिश:',
            submit_to_see_analysis: 'जोखिम विश्लेषण देखने के लिए स्वास्थ्य डेटा जमा करें।',
            risk_low: 'कम जोखिम',
            risk_moderate: 'मध्यम जोखिम',
            risk_high: 'उच्च जोखिम',
            risk_very_high: 'बहुत उच्च जोखिम',
            nicu_title: 'वास्तविक समय एनआईसीयू डैशबोर्ड',
            stable: 'स्थिर',
            alert: 'चेतावनी',
            infant_title: 'शिशु दैनिक देखभाल पोर्टल',
            daily_log_input: 'दैनिक लॉग इनपुट',
            infant_age_weeks: 'शिशु की आयु (सप्ताहों में)',
            feeding_type: 'दूध पिलाने का प्रकार',
            feeding_breastfed: 'स्तनपान',
            feeding_formula: 'फॉर्मूला',
            feeding_mixed: 'मिश्रित',
            stool_color: 'मल का रंग',
            select: 'चुनें',
            stool_color_yellow: 'पीला/सरसों',
            stool_color_green: 'हरा',
            stool_color_brown: 'भूरा',
            stool_color_white: 'सफ़ेद/ग्रे (चेतावनी)',
            stool_color_red: 'लाल (चेतावनी)',
            stool_consistency: 'मल की स्थिरता',
            stool_consistency_seedy: 'बीजदार/नरम',
            stool_consistency_pasty: 'लेई जैसा',
            stool_consistency_watery: 'पानी जैसा (चेतावनी)',
            stool_consistency_hard: 'कठोर गोलियाँ',
            get_recommendation_btn: 'सबमिट करें और सिफारिश प्राप्त करें',
            personalized_care_plan: 'व्यक्तिगत देखभाल योजना',
            summary: 'सारांश:',
            submit_to_see_plan: 'व्यक्तिगत देखभाल योजना के लिए अपने बच्चे का विवरण जमा करें।',
            chat_welcome: "नमस्ते! मैं आपका एआई सहायक हूँ। मैं आज आपके नवजात शिशु से जुड़े बुनियादी सवालों में कैसे मदद कर सकता हूँ?",
            chat_assistant_title: 'एआई बेबी केयर असिस्टेंट',
            chat_placeholder: 'एक बुनियादी सवाल पूछें...',
            chat_send: 'भेजें',
            doctor_connect_title: 'डॉक्टर से जुड़ें',
            generate_summary: 'स्वास्थ्य सारांश उत्पन्न करें',
            create_maternal_report: 'मातृ रिपोर्ट बनाएं',
            create_infant_report: 'शिशु रिपोर्ट बनाएं',
            secure_messaging: 'सुरक्षित संदेश सेवा',
            subject: 'विषय',
            message: 'संदेश',
            send_message_btn: 'संदेश भेजें',
            print_report: 'रिपोर्ट प्रिंट करें'
        },
        mr: {
            nav_maternal: 'मातृ',
            nav_nicu: 'एनआयसीयू',
            nav_infant: 'शिशु',
            nav_doctor: 'डॉक्टरशी संपर्क साधा',
            disclaimer_title: 'महत्त्वपूर्ण वैद्यकीय अस्वीकृती',
            disclaimer_text: 'हे साधन केवळ माहितीच्या उद्देशाने आहे आणि व्यावसायिक वैद्यकीय सल्ला, निदान किंवा उपचारांसाठी पर्याय नाही...',
            disclaimer_text_alt: 'या पृष्ठावरील वैशिष्ट्ये केवळ माहितीसाठी आहेत...',
            i_understand: 'मला समजले',
            maternal_title: 'मातृ आरोग्य पोर्टल',
            health_data_input: 'आरोग्य डेटा इनपुट',
            maternal_age: 'मातेचे वय',
            gestational_week: 'गर्भधारणेचा आठवडा',
            gbs_status: 'गट बी स्ट्रेप (जीबीएस) स्थिती',
            select_status: 'स्थिती निवडा',
            gbs_positive: 'सकारात्मक',
            gbs_negative: 'नकारात्मक',
            gestational_diabetes: 'गर्भधारणेतील मधुमेह?',
            previous_c_section: 'मागील सी-सेक्शन?',
            symptoms_notes: 'लक्षणे/नोंदी',
            maternal_notes_placeholder: 'उदा., उच्च रक्तदाब, सतत डोकेदुखी...',
            analyze_risk_btn: 'धोक्याचे विश्लेषण करा',
            risk_analysis_result: 'धोका विश्लेषण परिणाम',
            risk_score: 'धोका गुण:',
            points: 'गुण',
            primary_factors: 'प्राथमिक घटक:',
            recommendation: 'शिफारस:',
            submit_to_see_analysis: 'धोका विश्लेषण पाहण्यासाठी आरोग्य डेटा सबमिट करा.',
            risk_low: 'कमी धोका',
            risk_moderate: 'मध्यम धोका',
            risk_high: 'उच्च धोका',
            risk_very_high: 'अति उच्च धोका',
            nicu_title: 'रिअल-टाइम एनआयसीयू डॅशबोर्ड',
            stable: 'स्थिर',
            alert: 'चेतावणी',
            infant_title: 'शिशु दैनिक काळजी पोर्टल',
            daily_log_input: 'दैनिक लॉग इनपुट',
            infant_age_weeks: 'बाळाचे वय (आठवड्यात)',
            feeding_type: 'आहाराचा प्रकार',
            feeding_breastfed: 'स्तनपान',
            feeding_formula: 'फॉर्म्युला',
            feeding_mixed: 'मिश्र',
            stool_color: 'शौचाचा रंग',
            select: 'निवडा',
            stool_color_yellow: 'पिवळा/मोहरी',
            stool_color_green: 'हिरवा',
            stool_color_brown: 'तपकिरी',
            stool_color_white: 'पांढरा/राखाडी (चेतावणी)',
            stool_color_red: 'लाल (चेतावणी)',
            stool_consistency: 'शौचाची सुसंगतता',
            stool_consistency_seedy: 'बियांसारखे/मऊ',
            stool_consistency_pasty: 'पेस्टसारखे',
            stool_consistency_watery: 'पाण्यासारखे (चेतावणी)',
            stool_consistency_hard: 'कठीण खडे',
            get_recommendation_btn: 'सबमिट करा आणि शिफारस मिळवा',
            personalized_care_plan: 'वैयक्तिक काळजी योजना',
            summary: 'सारांश:',
            submit_to_see_plan: 'वैयक्तिक काळजी योजनेसाठी तुमच्या बाळाचा तपशील सबमिट करा.',
            chat_welcome: "नमस्कार! मी तुमचा AI सहाय्यक आहे. तुमच्या नवजात बाळाच्या मूलभूत प्रश्नांसाठी मी आज कशी मदत करू शकेन?",
            chat_assistant_title: 'एआय बाळ काळजी सहाय्यक',
            chat_placeholder: 'एक मूलभूत प्रश्न विचारा...',
            chat_send: 'पाठवा',
            doctor_connect_title: 'डॉक्टरशी संपर्क साधा',
            generate_summary: 'आरोग्य सारांश तयार करा',
            create_maternal_report: 'मातृ अहवाल तयार करा',
            create_infant_report: 'शिशु अहवाल तयार करा',
            secure_messaging: 'सुरक्षित संदेशवहन',
            subject: 'विषय',
            message: 'संदेश',
            send_message_btn: 'संदेश पाठवा',
            print_report: 'अहवाल छापा'
        }
    };

    // --- STATE MANAGEMENT ---
    const state = {
        activeTab: 'maternal',
        currentLanguage: 'en',
        // Maternal State
        motherName: '',
        maternalAge: '',
        gestationalWeek: '',
        gbsStatus: '',
        hasGestationalDiabetes: false,
        previousCSection: false,
        maternalNotes: '',
        riskAssessment: null,
        // Infant State
        infantAgeWeeks: '',
        feedingType: '',
        stoolColor: '',
        stoolConsistency: '',
        babyNotes: '',
        carePlan: null,
        // AI Chat State
        isChatOpen: false,
        chatHistory: [{
            sender: 'ai',
            text: translations.en.chat_welcome
        }],
        // NICU State
        nicuBabies: [{
            id: 1,
            name: 'Baby Sharma',
            heartRate: 135,
            bloodPressure: '75/50',
            respRate: 45,
            spO2: 98,
            status: 'Stable',
            alertReason: ''
        }, {
            id: 2,
            name: 'Baby Khan',
            heartRate: 95,
            bloodPressure: '80/55',
            respRate: 65,
            spO2: 99,
            status: 'Alert',
            alertReason: 'Bradycardia (Low Heart Rate) & Tachypnea (High Resp. Rate)'
        }, {
            id: 3,
            name: 'Baby Lee',
            heartRate: 140,
            bloodPressure: '70/45',
            respRate: 50,
            spO2: 97,
            status: 'Stable',
            alertReason: ''
        }, ],
    };

    // --- TRANSLATION HELPER (NEW) ---
    const t = (key) => {
        return translations[state.currentLanguage][key] || translations['en'][key];
    };

    // --- DOM REFERENCES ---
    const appContent = document.getElementById('app-content');
    const navTabsContainer = document.getElementById('nav-tabs');
    const currentYearSpan = document.getElementById('current-year');

    // --- COMMON ELEMENTS ---
    const cardClasses = "bg-white p-6 rounded-lg shadow-lg border border-gray-100";

    // --- NEW: DISCLAIMER MODAL (POPUPS ON LOAD) ---
    const renderDisclaimerModal = () => {
        const modalOverlay = document.createElement('div');
        modalOverlay.id = 'disclaimer-modal-overlay';
        modalOverlay.className = 'disclaimer-modal-overlay';
        modalOverlay.innerHTML = `
            <div class="disclaimer-modal">
                <h2 class="disclaimer-modal-title">${t('disclaimer_title')}</h2>
                <p class="disclaimer-modal-text">${t('disclaimer_text')}</p>
                <button id="disclaimer-ack-btn" class="disclaimer-modal-btn">${t('i_understand')}</button>
            </div>
        `;
        document.body.appendChild(modalOverlay);
        setTimeout(() => modalOverlay.classList.add('visible'), 10);

        document.getElementById('disclaimer-ack-btn').addEventListener('click', () => {
            modalOverlay.classList.remove('visible');
            setTimeout(() => modalOverlay.remove(), 300);
        });
    };

    // --- NEW: REPORT GENERATION FUNCTIONS ---

    const injectModalStyles = () => {
        const style = document.createElement('style');
        style.innerHTML = `
            .report-modal-overlay {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background-color: rgba(0, 0, 0, 0.6);
                display: flex; align-items: center; justify-content: center;
                z-index: 1000; opacity: 0; transition: opacity 0.3s ease;
            }
            .report-modal-overlay.visible { opacity: 1; }
            .report-modal {
                background: white; padding: 2rem; border-radius: 0.75rem;
                width: 90%; max-width: 600px; max-height: 90vh; overflow-y: auto;
                transform: scale(0.95); transition: transform 0.3s ease;
            }
            .report-modal-overlay.visible .report-modal { transform: scale(1); }
            .report-modal-header {
                display: flex; justify-content: space-between; align-items: center;
                border-bottom: 1px solid #e5e7eb; padding-bottom: 1rem; margin-bottom: 1rem;
            }
            .report-modal-header h2 { font-size: 1.5rem; font-weight: 700; color: #111827; }
            .report-modal-close { background: none; border: none; cursor: pointer; padding: 0; }
            .report-modal-body p { margin-bottom: 0.5rem; }
            .report-modal-body strong { color: #374151; }
            .report-modal-footer {
                margin-top: 1.5rem; padding-top: 1rem;
                border-top: 1px solid #e5e7eb; text-align: right;
            }
            .print-btn {
                background-color: #8b5cf6; color: white; font-weight: bold;
                padding: 0.75rem 1.5rem; border-radius: 0.5rem; border: none; cursor: pointer;
            }
            .print-btn:hover { background-color: #7c3aed; }
            @media print {
                body > *:not(.report-modal-overlay) { display: none; }
                .report-modal-overlay {
                    position: static; background: none;
                 }
                .report-modal {
                    position: absolute; left: 0; top: 0; width: 100%; max-width: 100%;
                    box-shadow: none; border: none; padding: 0; max-height: none;
                }
                .report-modal-header, .report-modal-footer { display: none; }
            }
        `;
        document.head.appendChild(style);
    };

    const showReportModal = (title, content) => {
        document.querySelector('.report-modal-overlay')?.remove(); // Close any existing modal
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'report-modal-overlay';
        modalOverlay.innerHTML = `
            <div class="report-modal" role="dialog" aria-labelledby="report-title" aria-modal="true">
                <div class="report-modal-header">
                    <h2 id="report-title">${title}</h2>
                    <button class="report-modal-close" aria-label="Close modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>
                <div class="report-modal-body">${content}</div>
                <div class="report-modal-footer">
                    <button class="print-btn">${t('print_report')}</button>
                </div>
            </div>
        `;

        document.body.appendChild(modalOverlay);
        setTimeout(() => modalOverlay.classList.add('visible'), 10);

        const closeModal = () => {
            modalOverlay.classList.remove('visible');
            setTimeout(() => modalOverlay.remove(), 300);
        };

        modalOverlay.querySelector('.report-modal-close').addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => e.target === modalOverlay && closeModal());
        modalOverlay.querySelector('.print-btn').addEventListener('click', () => window.print());
    };

    const generateMaternalReport = () => {
        const { maternalAge, gestationalWeek, gbsStatus, hasGestationalDiabetes, previousCSection, maternalNotes, riskAssessment } = state;
        const na = `<em>${t('Not Provided') || 'Not Provided'}</em>`;

        let riskHtml = `<p><strong>${t('risk_analysis_result')}:</strong> ${na}</p>`;
        if (riskAssessment) {
            riskHtml = `
                <div style="background-color: #f3f4f6; border-left: 4px solid #3b82f6; padding: 1rem; margin-top: 1rem; border-radius: 0.25rem;">
                    <h4 style="font-weight: bold; font-size: 1.1rem; margin-bottom: 0.5rem;">${t('risk_analysis_result')}</h4>
                    <p><strong>${t('risk_score')}</strong> ${riskAssessment.riskScore} (${riskAssessment.points} ${t('points')})</p>
                    <p><strong>${t('primary_factors')}</strong> ${riskAssessment.factors.join(', ') || 'None'}</p>
                    <p><strong>${t('recommendation')}</strong> ${riskAssessment.recommendation}</p>
                </div>`;
        }

        const content = `
            <div class="space-y-2 text-gray-700">
                <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                <p><strong>${t('maternal_age')}:</strong> ${maternalAge || na}</p>
                <p><strong>${t('gestational_week')}:</strong> ${gestationalWeek || na}</p>
                <p><strong>${t('gbs_status')}:</strong> ${gbsStatus || na}</p>
                <p><strong>${t('gestational_diabetes')}:</strong> ${hasGestationalDiabetes ? 'Yes' : 'No'}</p>
                <p><strong>${t('previous_c_section')}:</strong> ${previousCSection ? 'Yes' : 'No'}</p>
                <p><strong>${t('symptoms_notes')}:</strong></p>
                <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 0.75rem; border-radius: 0.25rem; min-height: 50px;">
                    ${maternalNotes || na}
                </div>
                ${riskHtml}
            </div>
        `;
        showReportModal(t('create_maternal_report'), content);
    };

    const generateInfantReport = () => {
        const { infantAgeWeeks, feedingType, stoolColor, stoolConsistency, babyNotes, carePlan } = state;
        const na = `<em>${t('Not Provided') || 'Not Provided'}</em>`;

        let carePlanHtml = `<p><strong>${t('personalized_care_plan')}:</strong> ${na}</p>`;
        if (carePlan) {
            carePlanHtml = `
                 <div style="background-color: #f0fdf4; border-left: 4px solid #22c55e; padding: 1rem; margin-top: 1rem; border-radius: 0.25rem;">
                    <h4 style="font-weight: bold; font-size: 1.1rem; margin-bottom: 0.5rem;">${t('personalized_care_plan')}</h4>
                    <p><strong>${t('summary')}</strong> ${carePlan.summary}</p>
                    <p><strong>${t('recommendation')}</strong> ${carePlan.recommendation}</p>
                </div>
            `;
        }

        const content = `
             <div class="space-y-2 text-gray-700">
                <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                <p><strong>${t('infant_age_weeks')}:</strong> ${infantAgeWeeks || na}</p>
                <p><strong>${t('feeding_type')}:</strong> ${feedingType || na}</p>
                <p><strong>${t('stool_color')}:</strong> ${stoolColor || na}</p>
                <p><strong>${t('stool_consistency')}:</strong> ${stoolConsistency || na}</p>
                <p><strong>${t('symptoms_notes')}:</strong></p>
                 <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 0.75rem; border-radius: 0.25rem; min-height: 50px;">
                    ${babyNotes || na}
                </div>
                ${carePlanHtml}
            </div>
        `;
        showReportModal(t('create_infant_report'), content);
    };


    // --- RENDER FUNCTIONS (NOW MULTILINGUAL) ---
    const renderMaternalTab = () => {
        const riskAssessmentHTML = state.riskAssessment ? `
            <div class="${cardClasses} bg-blue-50 border-blue-200">
                <h3 class="text-xl font-semibold mb-4 text-blue-700 flex items-center"><i data-lucide="shield-check" class="w-6 h-6 mr-2"></i>${t('risk_analysis_result')}</h3>
                <div class="space-y-4">
                    <div>
                        <p class="font-medium text-gray-600">${t('risk_score')}</p>
                        <p class="text-2xl font-bold ${state.riskAssessment.colorClass}">${state.riskAssessment.riskScore} (${state.riskAssessment.points} ${t('points')})</p>
                    </div>
                    <div>
                        <p class="font-medium text-gray-600">${t('primary_factors')}</p>
                        <p class="text-sm text-gray-800">${state.riskAssessment.factors.join(', ')}</p>
                    </div>
                    <div>
                        <p class="font-medium text-gray-600">${t('recommendation')}</p>
                        <p class="text-sm font-semibold text-blue-800">${state.riskAssessment.recommendation}</p>
                    </div>
                </div>
            </div>` : `<div class="${cardClasses} bg-gray-50 text-center flex items-center justify-center"><p class="text-gray-500">${t('submit_to_see_analysis')}</p></div>`;

        appContent.innerHTML = `
            <section class="animate-fade-in">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">${t('maternal_title')}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="${cardClasses}">
                        <h3 class="text-xl font-semibold mb-4 text-blue-700">${t('health_data_input')}</h3>
                        <div class="space-y-4">
                            <div>
                                <label for="maternalAge" class="block text-sm font-medium">${t('maternal_age')}</label>
                                <input type="number" id="maternalAge" value="${state.maternalAge}" placeholder="e.g., 32" class="mt-1 block w-full p-2 border rounded-md">
                            </div>
                            <div>
                                <label for="gestationalWeek" class="block text-sm font-medium">${t('gestational_week')}</label>
                                <input type="number" id="gestationalWeek" value="${state.gestationalWeek}" placeholder="e.g., 38" class="mt-1 block w-full p-2 border rounded-md">
                            </div>
                            <div>
                                <label for="gbsStatus" class="block text-sm font-medium">${t('gbs_status')}</label>
                                <select id="gbsStatus" class="mt-1 block w-full p-2 border rounded-md bg-white">
                                    <option value="">${t('select_status')}</option>
                                    <option ${state.gbsStatus === 'Positive' ? 'selected' : ''} value="Positive">${t('gbs_positive')}</option>
                                    <option ${state.gbsStatus === 'Negative' ? 'selected' : ''} value="Negative">${t('gbs_negative')}</option>
                                </select>
                            </div>
                            <div class="flex items-center justify-between">
                                <label for="hasGestationalDiabetes" class="text-sm font-medium">${t('gestational_diabetes')}</label>
                                <input type="checkbox" id="hasGestationalDiabetes" ${state.hasGestationalDiabetes ? 'checked' : ''} class="h-5 w-5 rounded">
                            </div>
                             <div class="flex items-center justify-between">
                                <label for="previousCSection" class="text-sm font-medium">${t('previous_c_section')}</label>
                                <input type="checkbox" id="previousCSection" ${state.previousCSection ? 'checked' : ''} class="h-5 w-5 rounded">
                            </div>
                            <div>
                                <label for="maternalNotes" class="block text-sm font-medium">${t('symptoms_notes')}</label>
                                <textarea id="maternalNotes" rows="3" class="mt-1 block w-full p-2 border rounded-md" placeholder="${t('maternal_notes_placeholder')}">${state.maternalNotes}</textarea>
                            </div>
                             <button id="analyze-risk-btn" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md mt-4">${t('analyze_risk_btn')}</button>
                        </div>
                    </div>
                    ${riskAssessmentHTML}
                </div>
            </section>`;
    };

    const renderNicuTab = () => {
        const babiesHTML = state.nicuBabies.map(baby => {
            const statusClasses = baby.status === 'Stable' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800 animate-pulse';
            const borderClasses = baby.status === 'Stable' ? 'border-green-100' : 'border-red-500 ring-4 ring-red-100';
            const statusText = baby.status === 'Stable' ? t('stable') : t('alert');
            return `
            <div class="${cardClasses} ${borderClasses}">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xl font-semibold flex items-center"><i data-lucide="baby" class="w-6 h-6 mr-2 text-blue-500"></i> ${baby.name}</h3>
                    <span class="px-3 py-1 rounded-full text-sm font-medium ${statusClasses}">${statusText}</span>
                </div>
                <div class="grid grid-cols-2 gap-3 text-sm">
                    <div class="flex items-center"><i data-lucide="heart" class="w-5 h-5 mr-2 text-red-500"></i>HR: <b class="ml-1">${baby.heartRate}</b> bpm</div>
                    <div class="flex items-center"><i data-lucide="droplet" class="w-5 h-5 mr-2 text-blue-500"></i>BP: <b class="ml-1">${baby.bloodPressure}</b></div>
                    <div class="flex items-center"><i data-lucide="wind" class="w-5 h-5 mr-2 text-cyan-500"></i>Resp: <b class="ml-1">${baby.respRate}</b>/min</div>
                    <div class="flex items-center"><i data-lucide="percent" class="w-5 h-5 mr-2 text-indigo-500"></i>SpO2: <b class="ml-1">${baby.spO2}%</b></div>
                </div>
                ${baby.status === 'Alert' ? `<div class="mt-4 text-red-700 bg-red-50 p-3 rounded-md border border-red-200 font-medium text-sm"><b class="block">${t('alert')}:</b> ${baby.alertReason}</div>` : ''}
            </div>`;
        }).join('');

        appContent.innerHTML = `
            <section class="animate-fade-in">
                <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">${t('nicu_title')}</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">${babiesHTML}</div>
            </section>`;
    };

    const renderInfantTab = () => {
        const carePlanHTML = state.carePlan ? `
            <div class="${cardClasses} bg-green-50 border-green-200">
                <h3 class="text-xl font-semibold mb-4 text-green-700 flex items-center"><i data-lucide="clipboard-list" class="w-6 h-6 mr-2"></i>${t('personalized_care_plan')}</h3>
                <div class="space-y-4">
                     <div>
                        <p class="font-semibold text-gray-800">${t('summary')}</p>
                        <p class="text-gray-700 text-sm italic">${state.carePlan.summary}</p>
                    </div>
                    <div class="bg-white p-3 rounded-md border">
                        <p class="font-semibold text-green-800">${t('recommendation')}</p>
                        <p class="text-gray-700 text-sm">${state.carePlan.recommendation}</p>
                    </div>
                </div>
            </div>` : `<div class="${cardClasses} bg-gray-50 text-center flex items-center justify-center"><p class="text-gray-500">${t('submit_to_see_plan')}</p></div>`;

        const chatMessagesHTML = state.chatHistory.map(msg => {
            const bubbleClasses = msg.sender === 'ai' ?
                'bg-gray-200 text-gray-800 self-start' :
                'bg-green-600 text-white self-end';
            return `<div class="p-3 rounded-lg max-w-xs ${bubbleClasses}">${msg.text}</div>`;
        }).join('');

        const aiChatHTML = `
            <button id="open-chat-btn" class="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-transform hover:scale-110 z-20">
                <i data-lucide="message-circle" class="w-8 h-8"></i>
            </button>
            <div id="ai-chat-window" class="${state.isChatOpen ? '' : 'hidden'} fixed bottom-24 right-8 w-96 bg-white rounded-xl shadow-2xl border flex flex-col z-30">
                <div class="bg-green-600 text-white p-4 rounded-t-xl flex justify-between items-center">
                    <h3 class="font-bold">${t('chat_assistant_title')}</h3>
                    <button id="close-chat-btn" class="hover:opacity-75" title="Close Chat"><i data-lucide="x" class="w-6 h-6"></i></button>
                </div>
                <div id="chat-messages" class="flex-1 p-4 space-y-4 overflow-y-auto h-80 flex flex-col">${chatMessagesHTML}</div>
                <div class="p-4 border-t flex">
                    <input type="text" id="chat-input" placeholder="${t('chat_placeholder')}" class="flex-1 p-2 border rounded-l-md">
                    <button id="send-chat-btn" class="bg-green-600 text-white px-4 rounded-r-md hover:bg-green-700 font-bold">${t('chat_send')}</button>
                </div>
            </div>`;

        appContent.innerHTML = `
             <section class="animate-fade-in relative">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">${t('infant_title')}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="${cardClasses}">
                         <h3 class="text-xl font-semibold mb-4 text-green-700">${t('daily_log_input')}</h3>
                         <div class="space-y-4">
                            <div>
                                <label for="infantAgeWeeks" class="block text-sm font-medium">${t('infant_age_weeks')}</label>
                                <input type="number" id="infantAgeWeeks" value="${state.infantAgeWeeks}" placeholder="e.g., 6" class="mt-1 block w-full p-2 border rounded-md">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1">${t('feeding_type')}</label>
                                <div class="flex space-x-2">
                                    <button data-feeding-type="Breastfed" class="feeding-type-btn flex-1 py-2 px-4 rounded-md text-sm font-medium ${state.feedingType === 'Breastfed' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}">${t('feeding_breastfed')}</button>
                                    <button data-feeding-type="Formula" class="feeding-type-btn flex-1 py-2 px-4 rounded-md text-sm font-medium ${state.feedingType === 'Formula' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}">${t('feeding_formula')}</button>
                                    <button data-feeding-type="Mixed" class="feeding-type-btn flex-1 py-2 px-4 rounded-md text-sm font-medium ${state.feedingType === 'Mixed' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}">${t('feeding_mixed')}</button>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label for="stoolColor" class="block text-sm font-medium">${t('stool_color')}</label>
                                    <select id="stoolColor" class="mt-1 block w-full p-2 border rounded-md bg-white">
                                        <option value="">${t('select')}</option>
                                        <option ${state.stoolColor === 'Yellow' ? 'selected' : ''} value="Yellow">${t('stool_color_yellow')}</option>
                                        <option ${state.stoolColor === 'Green' ? 'selected' : ''} value="Green">${t('stool_color_green')}</option>
                                        <option ${state.stoolColor === 'Brown' ? 'selected' : ''} value="Brown">${t('stool_color_brown')}</option>
                                        <option ${state.stoolColor === 'White' ? 'selected' : ''} value="White/Gray">${t('stool_color_white')}</option>
                                        <option ${state.stoolColor === 'Red' ? 'selected' : ''} value="Red">${t('stool_color_red')}</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="stoolConsistency" class="block text-sm font-medium">${t('stool_consistency')}</label>
                                    <select id="stoolConsistency" class="mt-1 block w-full p-2 border rounded-md bg-white">
                                        <option value="">${t('select')}</option>
                                        <option ${state.stoolConsistency === 'Seedy' ? 'selected' : ''} value="Seedy">${t('stool_consistency_seedy')}</option>
                                        <option ${state.stoolConsistency === 'Pasty' ? 'selected' : ''} value="Pasty">${t('stool_consistency_pasty')}</option>
                                        <option ${state.stoolConsistency === 'Watery' ? 'selected' : ''} value="Watery">${t('stool_consistency_watery')}</option>
                                        <option ${state.stoolConsistency === 'Hard' ? 'selected' : ''} value="Hard">${t('stool_consistency_hard')}</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label for="babyNotes" class="block text-sm font-medium">${t('symptoms_notes')}</label>
                                <textarea id="babyNotes" rows="3" class="mt-1 block w-full p-2 border rounded-md" placeholder="e.g., gassy, reflux...">${state.babyNotes}</textarea>
                            </div>
                            <button id="get-recommendation-btn" class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md mt-4">${t('get_recommendation_btn')}</button>
                         </div>
                    </div>
                    ${carePlanHTML}
                </div>
                ${aiChatHTML}
            </section>`;
    };

    const renderDoctorConnectTab = () => {
        appContent.innerHTML = `
            <section class="animate-fade-in">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">${t('doctor_connect_title')}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="${cardClasses}">
                        <h3 class="text-xl font-semibold mb-4 text-purple-700 flex items-center"><i data-lucide="file-text" class="w-6 h-6 mr-2"></i>${t('generate_summary')}</h3>
                        <div class="space-y-3">
                            <button id="generate-maternal-report" class="w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md"><i data-lucide="heart-pulse" class="w-5 h-5 mr-2"></i>${t('create_maternal_report')}</button>
                            <button id="generate-infant-report" class="w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md"><i data-lucide="baby" class="w-5 h-5 mr-2"></i>${t('create_infant_report')}</button>
                        </div>
                    </div>
                    <div class="${cardClasses}">
                        <h3 class="text-xl font-semibold mb-4 text-purple-700 flex items-center"><i data-lucide="message-square" class="w-6 h-6 mr-2"></i>${t('secure_messaging')}</h3>
                        <div class="space-y-4">
                            <div>
                                <label for="message-subject" class="block text-sm font-medium text-gray-700">${t('subject')}</label>
                                <input type="text" id="message-subject" class="mt-1 block w-full p-2 border rounded-md">
                            </div>
                            <div>
                                <label for="message-body" class="block text-sm font-medium text-gray-700">${t('message')}</label>
                                <textarea id="message-body" rows="4" class="mt-1 block w-full p-2 border rounded-md"></textarea>
                            </div>
                            <button id="send-secure-message" class="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-md">${t('send_message_btn')}</button>
                        </div>
                    </div>
                </div>
            </section>`;
    };

  const renderNav = () => {
    navTabsContainer.innerHTML = `
        <div class="flex items-center space-x-4">
            <button class="nav-tab" data-tab="maternal">${t('nav_maternal')}</button>
            <button class="nav-tab" data-tab="infant">${t('nav_infant')}</button>
            <button class="nav-tab" data-tab="nicu">${t('nav_nicu')}</button>
            <button class="nav-tab" data-tab="doctor">${t('nav_doctor')}</button>
            <div class="ml-auto">
                <select id="language-selector" class="bg-white border-gray-300 rounded-md p-2 text-sm">
                    <option value="en" ${state.currentLanguage === 'en' ? 'selected' : ''}>English</option>
                    <option value="hi" ${state.currentLanguage === 'hi' ? 'selected' : ''}>हिन्दी</option>
                    <option value="mr" ${state.currentLanguage === 'mr' ? 'selected' : ''}>मराठी</option>
                    <option value="kn" ${state.currentLanguage === 'kn' ? 'selected' : ''}>ಕನ್ನಡ</option>
                </select>
            </div>
        </div>
    `;
};
// --- MAIN RENDER CONTROLLER ---
const render = () => {
    renderNav();

    const currentTab = state.activeTab;
    const renderFunction = {
        maternal: renderMaternalTab,
        nicu: renderNicuTab,
        infant: renderInfantTab,
        doctor: renderDoctorConnectTab
    }[currentTab];

    if (renderFunction) {
        renderFunction();
    }

    updateTabStyles();

    if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }
};

    // --- LOGIC FUNCTIONS ---
    const analyzeMaternalRisk = () => {
        let points = 0;
        let factors = [];
        if (state.maternalAge >= 35) {
            points += 1;
            factors.push(t('risk_moderate'));
        }
        if (state.maternalAge >= 40) {
            points += 1;
        }
        if (state.gestationalWeek && state.gestationalWeek < 37) {
            points += 3;
            factors.push(t('risk_high'));
        }
        if (state.hasGestationalDiabetes) {
            points += 2;
            factors.push(t('gestational_diabetes'));
        }

        let riskScore = t('risk_low');
        let colorClass = 'text-green-600';
        let recommendation = 'Standard prenatal care recommended.';

        if (points >= 1 && points <= 3) {
            riskScore = t('risk_moderate');
            colorClass = 'text-orange-500';
            recommendation = 'Increased monitoring may be beneficial.';
        } else if (points > 3) {
            riskScore = t('risk_high');
            colorClass = 'text-red-600';
            recommendation = 'Consultation with a specialist is advised.';
        }

        state.riskAssessment = {
            points,
            riskScore,
            factors,
            recommendation,
            colorClass
        };
        render();
    };

    // --- Infant Care Recommendation Logic ---
    const getInfantRecommendation = () => {
        let summary = `Infant age: ${state.infantAgeWeeks || 'N/A'} weeks. Feeding: ${state.feedingType || 'N/A'}. Stool: ${state.stoolColor || 'N/A'}, ${state.stoolConsistency || 'N/A'}.`;

        let recommendation = "Follow standard infant care guidelines.";

        // Feeding advice
        if (state.feedingType === "Formula") {
            recommendation = "Ensure formula is prepared hygienically. Watch for constipation or diarrhea.";
        } else if (state.feedingType === "Breastfed") {
            recommendation = "Breastfeeding is optimal. Feed on demand every 2–3 hours.";
        } else if (state.feedingType === "Mixed") {
            recommendation = "Mixed feeding is fine. Monitor for digestive issues.";
        }

        // Stool color alerts
        if (state.stoolColor === "Red" || state.stoolColor === "White/Gray") {
            recommendation = "⚠️ Abnormal stool color. Contact your pediatrician immediately.";
        }

        // Stool consistency alerts
        if (state.stoolConsistency === "Watery") {
            recommendation = "⚠️ Possible diarrhea. Keep baby hydrated and consult your doctor.";
        } else if (state.stoolConsistency === "Hard") {
            recommendation = "Baby may be constipated. Consider adjusting diet and seek pediatric advice.";
        }

        // Age-specific guidance
        if (state.infantAgeWeeks && Number(state.infantAgeWeeks) < 6) {
            recommendation += " Newborns under 6 weeks should be fed frequently and monitored closely.";
        } else if (state.infantAgeWeeks && Number(state.infantAgeWeeks) > 24) {
            recommendation += " At this stage, complementary foods may be introduced with guidance from your pediatrician.";
        }

        state.carePlan = {
            summary,
            recommendation
        };

        render();
    };

    const simulateNicuVitals = () => {
        state.nicuBabies = state.nicuBabies.map(baby => {
            if (baby.status === 'Alert') return { ...baby, heartRate: baby.heartRate };
            let newHR = baby.heartRate + Math.floor(Math.random() * 7) - 3;
            return { ...baby, heartRate: newHR };
        });
        if (state.activeTab === 'nicu') {
            renderNicuTab();
        }
    };

    const getAIResponse = (query) => {
        return `You asked: "${query}". This is a simulated AI response. For medical advice, please consult a doctor.`;
    };

    // --- EVENT LISTENERS ---
    const updateTabStyles = () => {
        document.querySelectorAll('.nav-tab').forEach(tab => {
            const isActive = tab.dataset.tab === state.activeTab;
            tab.classList.toggle('bg-blue-600', isActive);
            tab.classList.toggle('text-white', isActive);
            tab.classList.toggle('bg-gray-200', !isActive);
        });
    };

    navTabsContainer.addEventListener('click', e => {
        const tabButton = e.target.closest('.nav-tab');
        if (tabButton) {
            state.activeTab = tabButton.dataset.tab;
            render();
        }
    });

    navTabsContainer.addEventListener('change', e => {
        if (e.target.id === 'language-selector') {
            state.currentLanguage = e.target.value;
            state.chatHistory = [{ sender: 'ai', text: t('chat_welcome') }];
            render();
        }
    });

    appContent.addEventListener('click', (e) => {
        const targetId = e.target.id || e.target.closest('button')?.id;

        switch (targetId) {
            case 'analyze-risk-btn':
                analyzeMaternalRisk();
                break;
            case 'get-recommendation-btn':
                getInfantRecommendation();
                break;
            case 'generate-maternal-report':
                generateMaternalReport();
                break;
            case 'generate-infant-report':
                generateInfantReport();
                break;
        }

        const feedingBtn = e.target.closest('.feeding-type-btn');
        if (feedingBtn) {
            state.feedingType = feedingBtn.dataset.feedingType;
            renderInfantTab();
        }

        if (e.target.closest('#open-chat-btn')) {
            state.isChatOpen = true;
            renderInfantTab();
        }
        if (e.target.closest('#close-chat-btn')) {
            state.isChatOpen = false;
            renderInfantTab();
        }
        if (e.target.closest('#send-chat-btn')) {
            const chatInput = document.getElementById('chat-input');
            const userQuery = chatInput.value.trim();
            if (userQuery) {
                state.chatHistory.push({ sender: 'user', text: userQuery });
                const aiResponse = getAIResponse(userQuery);
                state.chatHistory.push({ sender: 'ai', text: aiResponse });
                chatInput.value = '';
                renderInfantTab();
                const chatMessages = document.getElementById('chat-messages');
                if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }
    });

    appContent.addEventListener('input', e => {
        if (e.target.type === 'checkbox') {
            state[e.target.id] = e.target.checked;
        } else {
            state[e.target.id] = e.target.value;
        }
    });

  // --- INITIALIZATION ---
    const init = () => {
        currentYearSpan.textContent = new Date().getFullYear();
        injectModalStyles(); // Inject the CSS for the modal
        renderDisclaimerModal(); // Show the disclaimer modal on load
        render();
        // optionally start NICU vitals simulation
        setInterval(simulateNicuVitals, 3000);
    };

    init();
});