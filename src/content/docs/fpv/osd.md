---
title: OSD (On-Screen Display)
description: Critical flight information overlaid on your FPV video feed.
---

The OSD (On-Screen Display) overlays text and graphics on your FPV video feed, showing real-time information like battery voltage, flight time, and signal quality. It's your instrument panel — you fly by reading it constantly.

## How It Works

The flight controller generates OSD data and injects it into the video signal before it reaches the VTX. On analog systems, a dedicated OSD chip on the FC handles this. On digital systems, the FC sends OSD data to the digital VTX, which renders it on the goggles.

### OSD Chips
- **AT7456E** (analog): The standard OSD chip found on most FCs. Renders text and symbols onto the analog video signal.
- **Digital OSD**: Betaflight sends OSD data via MSP (displayport) to the digital VTX. The VTX/goggles render it. Higher resolution, more fonts, better looking.

## Essential OSD Elements

These are the elements most pilots consider mandatory:

### Battery Voltage
**The most important OSD element.** Displayed as total pack voltage (e.g., 22.4V for 6S) or per-cell average (e.g., 3.73V).

Watch for voltage sag under load:
- **Full charge**: 4.2V/cell (25.2V for 6S)
- **Nominal**: 3.7V/cell (22.2V for 6S)
- **Time to land**: 3.5V/cell under load (~21.0V for 6S)
- **Critical**: Below 3.3V/cell — land immediately

Set up a **low voltage warning** that flashes when you hit your target landing voltage.

### mAh Consumed
Shows how much energy you've used from the battery. More reliable than voltage alone because it accounts for your actual flying style.

If you fly 1300mAh packs, set a warning at ~1000-1050mAh (80% of capacity). This gives you a safety margin.

Requires a current sensor (built into most 4-in-1 ESCs and FCs).

### Flight Timer
A timer that starts when you arm. Helps you manage flight duration and develop a sense of how long your batteries last.

### Link Quality / RSSI
Shows radio link health:
- **RSSI** (analog radio systems): Signal strength, 0-100%
- **Link Quality (LQ)** (ELRS): Percentage of received packets. 100% = perfect link.
- Set a warning at LQ below 50% or RSSI below 40%

### Warnings
Betaflight's warning element displays text alerts for critical conditions:
- Low battery
- Failsafe triggered
- No GPS lock
- RC link lost
- Crash detected

## Recommended OSD Layout

### Minimal (Racing)
Only the essentials to keep the display clean:
- Battery voltage (top left)
- Timer (top right)
- Warnings (center)

### Standard (Freestyle)
| Position | Element |
|----------|---------|
| Top left | Battery voltage |
| Top center | Warnings |
| Top right | Timer |
| Bottom left | mAh consumed |
| Bottom right | Link quality (LQ/RSSI) |

### Full Telemetry (Long Range)
Add GPS data and more detail:
- All standard elements
- GPS coordinates
- Distance from home
- Altitude
- Speed
- Number of satellites
- Heading/compass
- GPS rescue status

## Configuration

In Betaflight Configurator, go to the **OSD** tab:

1. **Enable OSD** in the Configuration tab
2. Open the OSD tab — you'll see a preview of the video frame
3. **Drag elements** to your preferred positions
4. Check/uncheck elements to show or hide them
5. Set **warning thresholds** (low voltage, mAh consumed, RSSI minimum)
6. **Fonts**: Betaflight includes a default font. Custom fonts (like INAV's or community fonts) can be uploaded for a different look.

### Analog vs Digital OSD
- **Analog**: Limited to the AT7456E chip's character set. Fixed grid positions. Lower resolution text.
- **Digital (DJI/Walksnail/HDZero)**: Higher resolution rendering, custom fonts possible, smoother text. Configured the same way in Betaflight but rendered by the digital system.

## OSD Profiles

Betaflight supports multiple OSD profiles (typically 3). Switch between them with a radio switch:
- **Profile 1**: Full telemetry
- **Profile 2**: Minimal (for recording with less clutter)
- **Profile 3**: GPS-heavy (for long range)

Useful for switching between "full data while flying" and "clean screen while recording for others to watch."

## Advanced OSD Features

### Statistics Screen
After disarming, Betaflight can display a summary:
- Max altitude
- Max speed
- Max distance
- Max current draw
- Total mAh consumed
- Flight duration
- Min battery voltage
- Min RSSI/LQ

Enable in the OSD tab under "Post Flight Statistics."

### Craft Name
Display your pilot name or drone name on the OSD. Set in Betaflight CLI: `set name = MYQUAD`

### Artificial Horizon
A horizon line that shows your drone's attitude. Some pilots find it helpful, others find it distracting. Available in Betaflight OSD.

## Tips

- **Don't clutter**: More elements = more visual noise. Start minimal and add only what you actually reference in flight.
- **Test on the ground**: Arm with props off and verify all OSD elements display correctly before your first flight.
- **Position carefully**: Don't put elements where they'll obscure obstacles during proximity flying.
- **Current sensor calibration**: If mAh consumed seems inaccurate, calibrate the current sensor scale and offset in Betaflight using a multimeter or known-good ammeter.
