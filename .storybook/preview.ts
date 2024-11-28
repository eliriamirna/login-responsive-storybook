import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';

import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    viewMode: 'docs', // Abre diretamente na aba Docs
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
     docs: {
      theme: themes.dark,
      hidden: false,
    }
  },
};

export default preview;
