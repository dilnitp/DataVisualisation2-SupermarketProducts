# Price, shelf, plate: packaged food in Australia

FIT3179 Data Visualisation 2 (Monash University). Topic 10: Supermarket Products.
Author: Dilni Premawardana. Date: 27 October 2026.

An interactive visual story about packaged food and drink in Australia, in four parts:
the shop (prices), the shelf (products), the label (nutrients) and the plate (diet).
Built with Vega-Lite (and one Vega treemap). No build step is needed.

## Map idioms

| Map | Idiom |
|---|---|
| 1 | Proportional symbol map (Australia, conic equal-area projection) |
| 9 | Choropleth map (Australia, conic equal-area projection) |
| 11 | Connection map (world, Equal Earth projection) |
| 10 | Tile-grid cartogram (extra, no projection) |

## Files

| Path | What it is |
|---|---|
| `index.html` | The single scrollable page |
| `css/style.css` | Layout and typography |
| `js/main.js` | Loads each spec from `specs/` and draws it with vega-embed |
| `specs/*.json` | One readable Vega-Lite (or Vega) spec per chart |
| `data/` | The small, cleaned data files the charts read |

## Charts

| # | Spec | Idiom | Data |
|---|---|---|---|
| 1 | `01_price_map.json` | Symbol map | ABS CPI |
| 2 | `02_aisles_treemap.json` | Treemap (Vega) | Open Food Facts |
| 3 | `03_processing_waffle.json` | Waffle chart | Open Food Facts |
| 4 | `04_high_share_matrix.json` | Matrix heatmap | Open Food Facts |
| 5 | `05_sugar_salt_density.json` | Binned 2D heatmap | Open Food Facts |
| 6 | `06_sugar_ridgeline.json` | Ridgeline | Open Food Facts |
| 7 | `07_nutrient_profile_parallel.json` | Parallel coordinates | Open Food Facts |
| 8 | `08_nutrient_rank_bump.json` | Bump chart | Open Food Facts |
| 9 | `09_fruit_choropleth.json` | Choropleth map | ABS National Health Survey 2022 |
| 10 | `10_veg_tile_map.json` | Tile-grid map | ABS National Health Survey 2022 |
| 11 | `11_shared_countries_map.json` | Connection map (world projection) | Open Food Facts |

## Data sources

| File in `data/` | Source | Notes |
|---|---|---|
| `products.csv`, `treemap.csv`, `nova_waffle.csv` | [Open Food Facts](https://world.openfoodfacts.org/data), Australian products, downloaded October 2026 (ODbL licence) | Filtered to products sold in Australia and nine food and drink groups. Alcohol removed. Impossible values per 100 g removed. |
| `shared_countries.csv`, `world.json` | Open Food Facts (countries where a product is listed as sold); world base map from [world-atlas](https://github.com/topojson/world-atlas) (Natural Earth) | Counts for countries with 200 or more shared products. Line ends are capital cities. |
| `states.json` | ABS ASGS Edition 3, States and Territories 2021 (digital boundary file) | "Other Territories" removed. Simplified in mapshaper and exported as TopoJSON. |
| `nhs_states.csv` | ABS National Health Survey 2022, Table 2.3 (age-standardised proportions) | Share of adults who did not meet the daily fruit and vegetable recommendation. Tile positions and label positions added for drawing. |
| `cpi_food_cities.csv` | ABS Consumer Price Index, Australia (monthly), food and non-alcoholic beverages by capital city | 12-month change, August 2026 vs August 2025. City coordinates and label positions added for drawing. |

"High" levels in chart 4 are the UK traffic-light thresholds per 100 g (sugar over 22.5 g,
saturated fat over 5 g, salt over 1.5 g), from Food Standards Scotland guidance. They are not Australian rules.

## AI acknowledgement

Claude (Anthropic) helped write the code and draft the page text. The author chose the topic and data and reviewed the results.
