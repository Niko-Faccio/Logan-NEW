import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import '../styles/style.css';

import { sk } from '@fancyapps/ui/dist/fancybox/l10n/sk.esm.js';

Fancybox.bind("[data-fancybox]", {
  l10n: sk,
});

Fancybox.bind('[data-fancybox="gallery"]', {
  //
});
