// modules/Category/init.js
const Category = require("./model");
const logger = require("../../utils/logger");

async function initCategoryModule() {
  const categories = [
    { id: 1, name: 'International', slug: 'international', parent_id: null, description: '', icon: '', layout: 'YouTubeDisplay', is_active: 1 },
    { id: 2, name: 'Campus', slug: 'campus', parent_id: null, description: '', icon: '', layout: 'GalleryDisplay', is_active: 1 },
    { id: 3, name: 'Opinion', slug: 'opinion', parent_id: null, description: '', icon: '', layout: 'GalleryDisplay', is_active: 1 },
    { id: 4, name: 'Literature', slug: 'literature', parent_id: null, description: '', icon: '', layout: 'YouTubeDisplay', is_active: 1 },
    { id: 5, name: 'Blog', slug: 'blog', parent_id: null, description: '', icon: '', layout: 'YouTubeDisplay', is_active: 1 },
    { id: 6, name: 'National', slug: 'national', parent_id: null, description: '', icon: '', layout: 'GalleryDisplay', is_active: 1 },
  ];

  for (let category of categories) {
    const exists = await Category.findOne({ where: { name: category.name } });
    if (!exists) {
      await Category.create(category);
      logger.info(`✅ Category created: ${category.name}`);
    } else {
      logger.info(`ℹ️ Category already exists: ${category.name}`);
    }
  }
}

module.exports = initCategoryModule;
