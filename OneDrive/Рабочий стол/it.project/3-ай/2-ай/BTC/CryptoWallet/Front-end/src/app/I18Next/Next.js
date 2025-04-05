import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import ru from './Ru/ru.json'
import en from './En/en.json'


i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: en
            
        },
        ru: {
            translation: ru
        },
    },
    lng: 'ru',
})

export default i18next;