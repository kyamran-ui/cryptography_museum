import type { Scenario } from "./types";

export const CHIP_ICON_BY_SCENARIO: Record<Scenario["id"], string> = {
  s01: "mobile_text_2-icon.svg",
  s02: "local_taxi-icon.svg",
  s03: "local_cafe-icon.svg",
  s04: "business_bag-icon.svg",
  s05: "person_pin-icon.svg",
  s06: "laptop_mac-icon.svg",
  s07: "bank-icon.svg",
  s08: "post-icon.svg",
  s09: "sofa-icon.svg",
  s10: "sofa-icon.svg",
};

export const SCORE_LABEL_ICON = {
  0: "emergency-icon.svg",
  3: "security-icon.svg",
  5: "security-icon.svg",
  10: "security_green-icon.svg",
} as const;

export function iconUrl(file: string): string {
  return `/icons/${file}`;
}
