import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend';
import uz from '@/locales/uz/common.json'
import ru from '@/locales/ru/common.json'
import en from '@/locales/en/common.json'

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng:'en',
    lng:'uz',
    debug:true,
    resources:{
        uz:{translation:uz},
        en:{translation:en},
        ru:{translation:ru}
    }
})
export default i18n;