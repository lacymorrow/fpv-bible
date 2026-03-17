---
title: LiPo Battery Safety
description: How to safely handle, charge, store, and dispose of lithium polymer batteries.
---

LiPo (Lithium Polymer) batteries are the energy source for nearly every FPV drone. They deliver incredible power density, but they demand respect. Mishandled LiPos can catch fire, and LiPo fires are violent, toxic, and nearly impossible to extinguish with a normal fire extinguisher.

This isn't meant to scare you — LiPos are safe when handled properly. But "properly" is non-negotiable.

## The Risks

A damaged, overcharged, or short-circuited LiPo can enter **thermal runaway** — a self-sustaining chemical reaction that produces intense heat, flames, and toxic smoke. Once thermal runaway starts, you can't stop it. The cell burns until the fuel is exhausted.

Common causes of LiPo fires:
- Overcharging (charging above 4.2V per cell)
- Physical damage (punctured, crushed, or swollen cells)
- Short circuits (exposed wires touching, damaged connectors)
- Charging unattended
- Charging on flammable surfaces
- Over-discharging then attempting to charge

## Charging Safety

### The Rules
1. **Never charge unattended**. Stay in the room. If you leave, unplug.
2. **Use a proper LiPo charger** with balance charging. Never use a non-LiPo charger.
3. **Charge in a LiPo-safe bag or container**. LiPo bags are cheap fire-resistant pouches. An ammo can (with the seal removed so pressure can vent) is another option.
4. **Charge on a non-flammable surface**. Concrete, metal, tile. Not your carpet, bed, or wooden desk.
5. **Never charge above 4.2V per cell**. Your charger handles this automatically — but verify the cell count setting matches your battery before charging.
6. **Never charge a puffed battery**. Swelling means internal damage. Dispose of it.
7. **Never charge a battery that's hot**. Let it cool to room temperature first (after flying).
8. **Check cell voltage before charging**. If any cell is below 3.0V, the battery may be damaged. Charge at a very low rate (0.1-0.5A) initially, and if it doesn't recover, dispose of it.

### Charge Rates
- **1C** is the standard safe charge rate. For a 1300mAh battery, that's 1.3A.
- **2C** is acceptable for most quality batteries if you're in a hurry. Some batteries are rated for higher.
- Slower charging is gentler on the battery and extends its lifespan.

### Balance Charging
Always balance charge. This ensures all cells in the pack reach the same voltage. Unbalanced cells can lead to overcharging one cell while others are still low — a fire risk.

Your charger uses the balance lead (the small multi-pin connector) to monitor and equalize individual cell voltages.

## Storage

### Storage Voltage
If you won't use a battery within a day or two, bring it to **storage voltage**: 3.80-3.85V per cell. Most chargers have a "Storage" mode that does this automatically.

**Why storage voltage matters:**
- Fully charged LiPos (4.2V/cell) degrade faster and are more dangerous if they sit
- Over-discharged LiPos (below 3.5V/cell) can be permanently damaged
- Storage voltage is the sweet spot for longevity and safety

### Storage Conditions
- Store in a LiPo-safe bag or fireproof container
- Room temperature (20-25°C / 68-77°F) is ideal
- Avoid extreme heat (car trunk in summer = bad)
- Avoid extreme cold (freezing doesn't damage them, but cold LiPos perform poorly until warmed)
- Away from flammable materials

## During Flight

- **Don't over-discharge**. Land when your battery hits 3.5V per cell under load (roughly 14.0V for a 4S, 21.0V for 6S). Going lower damages the cells.
- **Monitor voltage in your OSD**. Set up low-voltage warnings.
- **Don't fly on a puffed battery**. If a pack is swollen, ground it permanently.
- **Crash inspection**: After a hard crash, physically inspect the battery for dents, punctures, or swelling before flying again.

## Disposal

Dead or damaged LiPos need proper disposal:

1. **Discharge to 0V**: Connect to a small light bulb or resistor (or use your charger's discharge function) until the pack reads 0V.
2. **Salt water method** (optional): Submerge fully discharged pack in salt water for 24 hours to ensure complete discharge.
3. **Recycle**: Many hobby shops and battery recycling centers accept LiPos. Home Depot and Lowe's often have battery recycling bins.
4. **Never throw LiPos in regular trash**. A LiPo in a garbage truck or landfill can cause a fire.

## Emergency: What to Do If a LiPo Catches Fire

1. **Get away from it**. Toxic fumes are the immediate danger.
2. **Do not use water** on an active LiPo fire (it can make it worse with some chemistries). A Class D fire extinguisher works, but sand or a metal bucket to contain it is more practical.
3. **Ventilate**: Open windows, leave the area. The smoke is toxic.
4. **Let it burn out**: In a safe, non-flammable location, a LiPo fire will burn itself out in a few minutes.
5. **Call 911** if the fire spreads to other materials.

## Signs of a Bad Battery

| Symptom | Action |
|---------|--------|
| Swollen/puffed pack | Stop using. Dispose. |
| One cell voltage significantly different from others | Try balance charging. If it persists, dispose. |
| Battery gets unusually hot during charge or discharge | Stop immediately. Let cool. If it keeps happening, dispose. |
| Significantly reduced flight time | Battery is aging. Still safe to use but nearing end of life. |
| Physical damage (dent, puncture, torn wrap) | Stop using. Dispose. |
| Won't hold charge | Dispose. |

## Equipment

- **LiPo safe bags**: $5-15 each. Buy several. One for charging, one for storage, one for transport.
- **Battery voltage checker**: Small device that plugs into the balance lead and reads individual cell voltages. $5-10.
- **Smoke detector**: Keep one near your charging area.
- **Fire extinguisher**: Have one accessible. ABC-rated minimum.
