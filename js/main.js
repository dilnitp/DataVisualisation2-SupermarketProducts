// Loads each chart's JSON spec from /specs and draws it with vega-embed.
// Specs are fetched first so relative data paths (data/...) resolve against this page.
const CHARTS = [
  ["vis-01", "specs/01_price_map.json"],
  ["vis-02", "specs/02_aisles_treemap.json"],
  ["vis-03", "specs/03_processing_waffle.json"],
  ["vis-04", "specs/04_high_share_matrix.json"],
  ["vis-05", "specs/05_sugar_salt_density.json"],
  ["vis-06", "specs/06_sugar_ridgeline.json"],
  ["vis-07", "specs/07_nutrient_profile_parallel.json"],
  ["vis-08", "specs/08_nutrient_rank_bump.json"],
  ["vis-09", "specs/09_fruit_choropleth.json"],
  ["vis-10", "specs/10_veg_tile_map.json"],
  ["vis-11", "specs/11_shared_countries_map.json"]
];

const BASE = new URL(".", window.location.href).href;

async function drawChart(id, path) {
  const el = document.getElementById(id);
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(path + " returned " + response.status);
    const spec = await response.json();
    await vegaEmbed(el, spec, {
      renderer: "svg",
      actions: false,
      loader: { baseURL: BASE }
    });
  } catch (err) {
    console.error(err);
    el.innerHTML = '<p class="error">This chart could not load. Please refresh the page.</p>';
  }
}

document.fonts.ready.then(() => CHARTS.forEach(([id, path]) => drawChart(id, path)));
