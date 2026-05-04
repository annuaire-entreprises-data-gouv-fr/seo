const WEBSITE =
  process.env.SITE_URL || 'https://annuaire-entreprises.data.gouv.fr';

const URL_PER_SITEMAP = 45000;

const BASE_SIREN_URL = 'https://ade.s3.sbg.io.cloud.ovh.net/ae/prod/sitemap.csv';

export { WEBSITE, URL_PER_SITEMAP, BASE_SIREN_URL };
