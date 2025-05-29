const Tag = require("./model");
const logger = require("../../utils/logger");

// General tag list
const initialTags = [
  'global-news', 'foreign-affairs', 'world-politics',
  'student-life', 'university-events', 'campus-politics',
  'editorial', 'public-opinion', 'think-piece',
  'poem', 'short-story', 'book-review',
  'lifestyle', 'travel-diary', 'tech-review', 'productivity',
  'bangladesh-politics', 'education', 'health',
  'government', 'elections', 'disaster-updates'
];

// Simple slug generator: lowercase and replace spaces with dashes
function generateSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}

async function initTagModule() {
  for (let name of initialTags) {
    const slug = generateSlug(name);
    const exists = await Tag.findOne({ where: { slug } });

    if (!exists) {
      await Tag.create({ name, slug });
      logger.info(`✅ Tag created: ${name}`);
    } else {
      logger.info(`ℹ️ Tag already exists: ${name}`);
    }
  }
}

module.exports = initTagModule;
