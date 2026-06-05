// Font Awesome icon library
// Only import the icons we actually use

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons';

// Add all brand icons (for social links from config)
library.add(fab, faCode, faHeart);
