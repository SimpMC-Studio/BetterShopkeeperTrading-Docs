import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://simpmc-studio.github.io',
  base: '/BetterShopkeeperTrading-Docs',
  integrations: [
    starlight({
      title: 'BetterShopkeeperTrading',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Tiếng Việt',
          lang: 'vi',
        },
      },
      sidebar: [
        {
          label: 'Bắt Đầu',
          items: [
            { label: 'Hướng Dẫn Sử Dụng', slug: 'index' },
            { label: 'Cài Đặt', slug: 'installation' },
          ],
        },
        {
          label: 'Cấu Hình',
          items: [
            { label: 'Cấu Hình Chính', slug: 'configuration/main-config' },
            { label: 'Cấu Hình Trả Vật Phẩm', slug: 'configuration/item-return-config' },
          ],
        },
        {
          label: 'Trợ Giúp',
          items: [
            { label: 'Câu Hỏi Thường Gặp', slug: 'faq' },
            { label: 'Tương Thích', slug: 'compatibility' },
          ],
        },
      ],
    }),
  ],
});
