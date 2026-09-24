const url = process.env.DSE_BASE_URL;

export const DHAKA_STOCK_URLS = {
  LATEST_DATA: `${url}/markets/latest-share-price`,
  TOP_30: `${url}/dse30_share.php`,
  DSEX: `${url}/dseX_share.php`,
  HISTORIACAL_DATA: `${url}/day_end_archive.php`,
};
