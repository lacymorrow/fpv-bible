---
title: Soldering for FPV
description: Essential soldering skills for building and repairing FPV drones.
---

Soldering is the most important physical skill in FPV. If you can solder well, you can build and repair anything. If you can't, you'll be stuck buying pre-built drones and sending them back for repair when something breaks.

The good news: it's not hard to learn, and you only need a few hours of practice to be competent enough for FPV builds.

## Equipment

### Soldering Iron
Invest in a decent temperature-controlled iron. Cheap irons without temperature control will make your life miserable.

**Recommended:**
- **Pinecil V2** (~$26): Portable, USB-C powered, excellent for FPV. The community favorite.
- **FNIRSI HS-02** (~$30): Similar portable form factor, good temperature control.
- **Hakko FX-888D** (~$100): Desktop station, professional quality, overkill for most hobbyists but will last forever.

**Avoid:** Cheap fixed-temperature irons from Amazon. They're either too cold (bad joints) or too hot (burned pads).

**Temperature:** Set to 350-380°C (660-716°F) for most FPV work. Lead-free solder needs slightly higher temps (~370-400°C).

### Solder
- **60/40 or 63/37 tin/lead** (leaded): Easier to work with, flows better, lower melting point. The standard for hobbyist electronics. Use ventilation.
- **Lead-free**: Required in some countries, harder to work with, higher melting point. Fine with a good iron.
- **Diameter**: 0.8mm for most FPV work. 0.5mm for fine work (FC pads). 1.0mm for large wire joints.
- **Rosin core**: Always use rosin-core solder (has flux inside). Don't use acid-core plumbing solder.

### Flux
Extra flux beyond what's in your solder makes everything easier:
- Apply flux to pads before soldering for better flow
- Flux paste in a syringe is most convenient
- Essential for reworking joints or soldering to pre-tinned pads

### Other Tools
- **Brass wire sponge**: For cleaning the iron tip (better than a wet sponge)
- **Helping hands** or **PCB holder**: Holds your work steady
- **Wire strippers**: For stripping silicone wire insulation
- **Flush cutters**: For trimming leads and zip ties
- **Solder wick** or **solder sucker**: For removing solder (fixing mistakes)
- **Silicone mat**: Protects your desk from heat and solder blobs
- **Ventilation**: A small fan or fume extractor — don't breathe solder fumes regularly

## Technique

### Tinning the Tip
Before every session:
1. Heat the iron to temperature
2. Apply solder to the tip until it's coated in a shiny silver layer
3. Wipe on brass sponge
4. The tip should look shiny, not dark or oxidized

A well-tinned tip transfers heat efficiently. A dry, oxidized tip doesn't.

### Tinning a Pad
Most FPV components have solder pads:
1. Apply a small amount of flux to the pad
2. Touch the iron tip to the pad
3. Feed solder onto the pad (not the iron) until you get a small dome of solder
4. Remove iron

The pad is now "tinned" — pre-loaded with solder for easy wire attachment.

### Tinning a Wire
1. Strip 2-3mm of insulation from the wire end
2. Apply flux to the exposed wire
3. Hold iron against the wire
4. Feed solder until the wire absorbs it and looks shiny

The wire strands should be saturated with solder, forming a solid (but not blobby) end.

### Soldering Wire to Pad
1. Tin both the pad and the wire separately
2. Hold the tinned wire against the tinned pad
3. Touch the iron to both wire and pad simultaneously
4. The solder on both should melt and join together
5. Remove iron — hold wire still for 1-2 seconds while it cools

**Good joint:** Shiny, smooth, concave fillet between wire and pad
**Bad joint (cold):** Dull, grainy, blobby. Reheat and apply flux.
**Bad joint (too much solder):** Huge blob. Use solder wick to remove excess.

### Common FPV Solder Joints

| Joint | Tips |
|-------|------|
| **Motor wires to ESC** | These carry high current — use enough solder for a strong bond. Most ESC pads are pre-tinned. |
| **Signal wires to FC** | Fine pitch pads. Use 0.5-0.8mm solder, thin wire (28-30 AWG silicone). |
| **Battery lead (XT60)** | Highest current joint. Tin both the XT60 cups and the wire. Use 12-14 AWG wire. |
| **VTX antenna (UFL)** | Don't solder this — it's a press-fit connector. Just push it on firmly. |
| **Camera to VTX** | Small pads, small wire. Tin everything first. |

## FPV-Specific Tips

### Pad Sizes
Flight controller pads vary in size:
- **Battery/current pads**: Large, easy to solder, carry the main battery current
- **Motor/signal pads**: Medium, standard technique
- **UART/peripheral pads**: Small, need precision. Flux is critical here.
- **Solder bridge pads**: Tiny pads meant to be bridged with solder for configuration (e.g., voltage regulator selection). Use flux and a small amount of solder.

### Silicone Wire
FPV uses silicone-insulated wire because:
- It's flexible and resists vibration fatigue
- Insulation doesn't melt easily (more forgiving when soldering)
- Common gauges: 14 AWG (battery), 18-20 AWG (motor), 26-28 AWG (signal)

### Heat Shrink
Use heat shrink tubing to insulate exposed joints:
1. Slide heat shrink onto the wire *before* soldering
2. After soldering, slide it over the joint
3. Apply heat (lighter, heat gun, or careful iron proximity)

### Smoke Stopper
When powering up a new build for the first time, use a **smoke stopper** (a current-limited inline connector) between the battery and the drone. If something is wired wrong, the smoke stopper limits current before magic smoke escapes. You can buy them or build one with a 12V automotive bulb in series.

## Troubleshooting

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Solder won't stick to pad | Pad is dirty or oxidized | Apply flux, clean with solder wick |
| Solder balls up on pad | Not enough heat | Increase temperature or hold iron longer |
| Solder joint is dull/grainy | Cold joint — not hot enough | Reheat with flux |
| Pad lifted off PCB | Too much heat for too long | This is bad. You may need to run a wire to an alternative pad. |
| Wire keeps moving while cooling | Not holding still | Use helping hands or tape the wire down |

## Practice

Before soldering your first build:
1. Buy a cheap practice PCB kit (search "soldering practice kit" on Amazon)
2. Practice tinning pads and wires on scrap components
3. Watch a few FPV-specific soldering videos (Joshua Bardwell has excellent ones)
4. Your first build will take 2-4x longer than expected — that's normal
