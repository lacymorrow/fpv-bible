---
title: LEDs
description: Adding LED strips and boards to your FPV quad.
---

LEDs on a quad serve two purposes: they look cool, and they help you identify orientation when flying line-of-sight or in low light. Some pilots love them, others consider them unnecessary weight.

## Types of LEDs

### Addressable LED Strips (WS2812B)
The most common choice for FPV builds. Each LED can be individually controlled for color and brightness through a single data wire.

- **Protocol**: WS2812B (most common), SK6812
- **Voltage**: 5V (powered from the FC's 5V regulator or a dedicated BEC)
- **Data**: Single wire to an LED-capable pad on the FC
- **Colors**: Full RGB, individually addressable
- **Betaflight support**: Full control via LED Strip feature — set colors, patterns, and indicators

### Simple LEDs
Basic single-color LEDs. Cheaper and lighter but no software control. Wire directly to voltage.

### LED Boards
Small PCBs with multiple LEDs in a fixed pattern. Some are specifically designed for rear-mount orientation lights (red on back, green on front, matching aircraft convention).

## Wiring

Addressable LEDs need three connections:
1. **5V** — From FC 5V pad or a separate 5V BEC
2. **GND** — Ground
3. **Data In** — To an LED pad on the FC (check your FC pinout diagram)

:::caution
LEDs draw significant current, especially at full white brightness. A strip of 8 LEDs can draw 400mA+. Make sure your 5V regulator can handle the load — some FCs only supply 1-2A on the 5V rail, which must also power the receiver, VTX, and other peripherals.
:::

### Wiring Tips
- Keep data wire short and close to the ground wire to reduce signal noise
- Use silicone wire (flexible, vibration-resistant)
- Hot glue or double-sided tape to mount strips to the frame
- Route wires away from prop paths

## Betaflight LED Configuration

In Betaflight Configurator, go to the **LED Strip** tab:

1. Enable LED Strip in the Configuration tab
2. Go to the LED Strip tab
3. Place LEDs on the grid corresponding to their physical position on the drone
4. Assign functions to each LED:
   - **Color**: Static color
   - **Flight Mode**: Changes color based on arm state, angle mode, etc.
   - **Orientation**: Front LEDs one color, rear another
   - **Warning**: Flashes on low battery, failsafe, etc.
   - **GPS**: Indicates GPS lock status
   - **RSSI**: Color shifts based on signal strength
   - **Larson Scanner** (Knight Rider effect): Back-and-forth sweep animation
   - **Rainbow**: Cycling color wheel

### Common Setup
- **4 rear LEDs**: Red or orange — shows which way the drone faces
- **Battery warning**: All LEDs flash when voltage is low
- **Arm indicator**: LEDs change color when armed vs. disarmed

## Weight and Power Considerations

| Component | Weight |
|-----------|--------|
| 4-LED strip | ~2g |
| 8-LED strip | ~3-4g |
| Wiring | ~1-2g |
| Total | ~3-6g |

For racing, most pilots skip LEDs to save weight. For freestyle and casual flying, the weight is negligible.

## When LEDs Are Useful

- **Orientation**: When flying line-of-sight, colored LEDs help you tell front from back at distance
- **Night flying**: LEDs make the drone visible (though dedicated navigation lights may be required by regulations for night flight)
- **Visual ID**: At group flying events, different LED colors help identify whose quad is whose
- **Finding your quad**: After a crash in tall grass, blinking LEDs make the drone much easier to spot
- **Style points**: Let's be honest, they look cool
