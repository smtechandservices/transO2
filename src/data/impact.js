// Impact-page chart data — served as static local data instead of a backend API.
// Consistent with the conservative-50%-capacity / full-potential-100% modelling
// used throughout `site.js` (see NATIONAL_MATH and CARBON_CREDIT).

export const IMPACT_DATA = {
  // Cumulative CO2 captured (Mt/yr) and carbon-credit value (₹ crore/yr) as the
  // fleet ramps toward the conservative 50%-capacity target of ~4.93 Mt/yr.
  deployment_ramp: [
    { year: 2025, co2: 0.05, credits_cr: 5 },
    { year: 2026, co2: 0.3, credits_cr: 30 },
    { year: 2027, co2: 0.9, credits_cr: 90 },
    { year: 2028, co2: 1.8, credits_cr: 180 },
    { year: 2029, co2: 2.9, credits_cr: 290 },
    { year: 2030, co2: 3.9, credits_cr: 390 },
    { year: 2031, co2: 4.5, credits_cr: 450 },
    { year: 2032, co2: 4.93, credits_cr: 525 },
  ],

  // Conservative headline capacity vs. untapped upside toward full deployment.
  capacity_split: [
    { name: "Modelled at 50% capacity", value: 50 },
    { name: "Untapped upside to 100%", value: 50 },
  ],

  // CO2 captured (Mt/yr) at increasing fleet capacity factors, scaled linearly
  // from the ~9.86 Mt/yr full-potential figure.
  capacity_scenarios: [
    { capacity_pct: 25, co2_mt: 2.47 },
    { capacity_pct: 50, co2_mt: 4.93 },
    { capacity_pct: 75, co2_mt: 7.4 },
    { capacity_pct: 100, co2_mt: 9.86 },
  ],
};
