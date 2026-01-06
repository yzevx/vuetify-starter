import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { zhHans } from 'vuetify/locale';

export default createVuetify({
  icons: {
    aliases,
    sets: { mdi }
  },
  locale: {
    locale: 'zhHans',
    messages: { zhHans }
  }
});
