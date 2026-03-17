---
title: Building Your Quad
description: Step-by-step guide to assembling an FPV quadcopter from parts.
---

Building your own quad gives you a deeper understanding of how everything works, the ability to repair anything that breaks, and a machine tuned exactly to your preferences. It takes a few hours for a first build and gets faster with experience.

## Before You Start

### Tools You'll Need
At minimum:
- **Soldering iron** (temperature-controlled, 60W+) and solder (60/40 or 63/37 rosin core, 0.8mm)
- **Hex drivers**: 2.0mm (most common), 1.5mm, and 2.5mm
- **Wire strippers** and flush cutters
- **Multimeter** for checking continuity and voltage
- **Helping hands or PCB holder** for soldering
- **Heat shrink tubing** in various sizes
- **Double-sided foam tape** or VHB tape

See the [tools guide](/tools/overview/) and [accessories](/tools/accessories/) for detailed recommendations.

### Skills
The main skill you need is [soldering](/skills/soldering/). Every connection on your quad is soldered. Bad solder joints cause intermittent failures that are maddening to diagnose. If you've never soldered, practice on scrap wire and old circuit boards before touching your flight controller.

## Build Order

While every build is slightly different, this order works for most 5" quad builds:

### 1. [Frame Assembly](/frame/overview/)
Assemble the frame first. Install standoffs, check that all hardware fits, and familiarize yourself with the layout. Don't fully tighten bolts yet since you may need to adjust spacing for your electronics stack.

### 2. [Motors](/building/motors/)
Mount motors to frame arms using the included bolts. Route motor wires through or along the arms. Leave enough wire length to reach the ESC, but not so much that excess wire creates a messy build.

### 3. [Speed Controllers (ESC)](/building/speed-controllers/)
If using a 4-in-1 ESC, mount it as the bottom board of your stack. Solder motor wires to the ESC pads. If using individual ESCs, mount one per arm and wire them to both the motor and the power distribution.

### 4. [Flight Controller](/building/flight-controller/)
Mount the FC above the ESC in the stack. Connect the ESC signal and telemetry wires. Solder or plug in your receiver. This is the most wiring-dense step, so take your time and double-check pin assignments against the FC's wiring diagram.

### 5. [Power Distribution](/building/power-distribution/)
Wire the battery lead to the ESC or PDB (power distribution board). Verify polarity with a multimeter before plugging in a battery. A reversed polarity connection will instantly destroy your electronics.

### 6. [Receiver](/building/receiver/)
Mount and solder or plug in your radio receiver. Bind it to your transmitter. Configure the UART and protocol in Betaflight. Test that all channels respond correctly.

### 7. [FPV Camera](/building/camera/)
Mount the camera in the frame's camera mount. Adjust the angle. Wire power and video signal to the FC or directly to the VTX.

### 8. [Video Transmitter (VTX)](/building/vtx/)
Mount and wire the VTX. Connect the antenna. Route the antenna so it points upward and away from carbon fiber (which blocks RF signal).

## First Power-Up

Before the first battery plug:
1. **Inspect every solder joint** with a magnifier. Look for cold joints, bridges, and loose connections.
2. **Check for shorts** with a multimeter in continuity mode across the battery pad positive and negative. If it beeps, you have a short. Find and fix it before applying power.
3. **Use a smoke stopper** if you have one. This current-limiting device prevents damage if there's a wiring mistake.
4. **Remove propellers.** Never have props on during bench testing.

Then plug in the battery and verify:
- FC powers up and connects to Betaflight Configurator
- All motors spin in the correct direction (adjust in BLHeli/AM32 configurator if needed)
- Receiver is bound and all channels move correctly in the Receiver tab
- VTX outputs video to your goggles
- OSD displays correctly

## Common First-Build Mistakes

- **Skipping the smoke stopper**: One reversed wire destroys a $40 flight controller instantly
- **Forgetting to check motor direction**: Two motors should spin clockwise, two counter-clockwise. Getting this wrong means the quad flips on takeoff
- **Poor antenna placement**: VTX antenna buried inside the frame or touching carbon fiber kills range
- **Not securing the battery lead**: The battery connector takes abuse on hard landings. Zip-tie or velcro the XT60 so it can't yank free mid-flight
- **Over-complicated wiring**: Route wires cleanly and keep them short. Long dangling wires snag on props

## Time Estimate

A first build typically takes 3-6 hours. Experienced builders can assemble a quad in 1-2 hours. Don't rush your first build. Clean work now saves hours of troubleshooting later.
