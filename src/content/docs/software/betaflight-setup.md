---
title: Betaflight Setup
description: Step-by-step guide to configuring Betaflight on a new FPV drone build.
---

Betaflight is the firmware that runs on your flight controller. This guide walks through the complete setup process for a new build, from flashing firmware to your first arm.

## What You Need

- A computer with **Betaflight Configurator** installed (download from [betaflight.com](https://www.betaflight.com/) or the Chrome Web Store)
- A USB cable (usually USB-C on modern FCs)
- Your drone, built but **without propellers**
- A battery (for receiver binding and motor testing only)

:::danger
**Never connect propellers during setup.** Motors can spin unexpectedly. Remove all props before plugging in USB or connecting a battery.
:::

## Step 1: Flash Firmware

1. Open Betaflight Configurator
2. Connect your FC via USB (the FC should power on from USB alone)
3. Go to the **Firmware Flasher** tab
4. Select your FC board target (check your FC documentation for the exact target name)
5. Choose the latest stable Betaflight release
6. Click **Load Firmware Online**, then **Flash Firmware**
7. Wait for the flash to complete and the FC to reboot

If your FC isn't recognized, you may need to install drivers (ImpulseRC Driver Fixer is a common solution on Windows) or put the FC into DFU/bootloader mode by holding the boot button while plugging in USB.

## Step 2: Ports Tab

Configure which UART (serial port) does what:

- **UART for Receiver**: Enable "Serial Rx" on the UART connected to your receiver. Check your FC's wiring diagram to know which UART that is.
- **UART for GPS** (if applicable): Enable GPS on the appropriate UART.
- **UART for VTX** (if using SmartAudio or Tramp): Enable Peripherals > TBS SmartAudio or IRC Tramp on the correct UART.

Leave USB and other ports at defaults unless you have specific peripherals.

## Step 3: Configuration Tab

This is where most of the core settings live.

### Mixer
- Quad X for standard quadcopters (this is the default)

### System Configuration
- **Gyro Update Frequency**: 8kHz (most modern FCs)
- **PID Loop Frequency**: 8kHz (match gyro if your FC supports it, otherwise 4kHz)

### Board and Sensor Alignment
- If your FC is mounted at an angle, set the board alignment offset here

### Receiver
- **Receiver Mode**: Serial (for SBUS, CRSF, ELRS, etc.)
- **Serial Receiver Provider**: 
  - CRSF for Crossfire or ELRS
  - SBUS for FrSky
  - Check your receiver documentation

### Other Settings
- **Motor Protocol**: DShot600 (most common for BLHeli_32 ESCs) or DShot300 (fine for most builds)
- **Bidirectional DShot**: Enable this if your ESCs support it (enables RPM filtering)
- **Motor Direction**: Props Out is the modern default (better wash-out handling). Props In is traditional.

## Step 4: Receiver Tab

1. Power on your transmitter
2. Connect a battery to the drone (props off!)
3. Check the channel map — AETR1234 is the standard for ELRS/CRSF
4. Move each stick and verify the correct channel responds:
   - Roll (Aileron): channel moves when you move stick left/right
   - Pitch (Elevator): channel moves when you push stick forward/back
   - Yaw (Rudder): channel moves when you twist/move left stick left/right
   - Throttle: channel moves when you push throttle up/down
5. All channels should center at 1500 and range from 1000 to 2000 (approximately)

If channels are mixed up, adjust the channel map or fix in your radio configuration.

## Step 5: Modes Tab

Modes are features activated by switches on your radio.

**Essential modes to set up:**

| Mode | Purpose | Recommended Switch |
|------|---------|-------------------|
| **ARM** | Arms/disarms motors | 2-position switch (e.g., AUX1) |
| **ANGLE** | Self-leveling mode (optional, for beginners) | 3-position switch |
| **BEEPER** | Activates buzzer to find lost drone | Any spare switch |
| **FLIP OVER AFTER CRASH** | Turtle mode — flips drone upright | Any spare switch |

Set each mode to activate within a specific range on an AUX channel that corresponds to a switch on your radio.

:::tip
Always set ARM on a dedicated 2-position switch that defaults to disarmed. You want arming to be deliberate, never accidental.
:::

## Step 6: Motors Tab

**Props must be off for this step.**

1. Check the **Motor direction** toggle matches your props configuration (Props Out or Props In)
2. Accept the safety warning
3. Slide the master slider up slightly — each motor should spin
4. Verify motor order: Motor 1, 2, 3, 4 should match Betaflight's motor diagram
5. Verify spin direction: each motor should spin the correct way per the diagram
6. If a motor spins the wrong way, reverse it in BLHeli Configurator or swap any two of the three motor wires

## Step 7: OSD Tab

Configure what information displays on your FPV feed:

**Recommended OSD elements:**
- Battery voltage (total and per-cell)
- mAh drawn (current consumption)
- Flight time (timer)
- RSSI or Link Quality
- Warnings

Drag elements to your preferred positions on the OSD preview.

## Step 8: PID Tuning (Basics)

Betaflight's stock PIDs fly reasonably well on most 5" builds. For your first flights, leave PIDs at defaults. Once you're comfortable flying, see [PID Tuning](/software/pid-tuning) for optimization.

**Quick adjustments to consider:**
- **Rates**: These control how fast your drone rotates and how your sticks feel. Lower rates are easier for beginners. Try the Betaflight rate profile with center sensitivity around 200 deg/s and max rate around 600 deg/s to start.

## Step 9: First Arm

1. Place drone on a flat surface, **props off**
2. Connect battery
3. Wait for gyro calibration (LEDs will change, give it a few seconds)
4. Flip your arm switch
5. Motors should spin at idle (if you have props off, they'll just whir)
6. Flip arm switch off
7. If it won't arm, check the **CLI** tab — type `status` and look for arming disable flags. Common issues:
   - `RXLOSS` — receiver not connected
   - `MSP` — Betaflight Configurator is connected (disconnect and try again)
   - `ANGLE` — drone not level during gyro cal
   - `THROTTLE` — throttle not at zero

## Step 10: Pre-Flight Checks

Before putting props on for the first flight:
- All motors spin in the correct direction
- All sticks respond correctly in the Receiver tab
- Arm/disarm works reliably
- Failsafe is configured (see [Failsafe](/control/failsafe))
- VTX is transmitting video to your goggles
- OSD is displaying correctly

Then put props on (correct orientation — leading edge forward!), go outside to an open area, and take your first flight.
