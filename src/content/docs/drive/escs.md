---
title: ESCs (Electronic Speed Controllers)
description: How ESCs drive your motors and what to look for when choosing them.
---

An ESC (Electronic Speed Controller) takes commands from the flight controller and converts them into the precise three-phase AC signals that spin a brushless motor. There are four ESCs on a quad — one per motor.

## How ESCs Work

Brushless motors have three coils (phases). The ESC rapidly switches current through these coils in sequence, creating a rotating magnetic field that spins the motor. The speed of this switching determines the motor RPM.

The FC tells the ESC how fast to spin the motor using a digital signal (DShot). The ESC handles all the low-level motor driving — timing, commutation, braking, and current delivery.

## Form Factors

### 4-in-1 ESC (Most Common)
All four ESCs on a single PCB, mounted as part of the FC stack. This is the standard for modern 5" builds.

**Pros:**
- Clean wiring (motor wires go directly to the board)
- Integrated current sensor (usually)
- Built-in power distribution
- Compact

**Cons:**
- If one ESC fails, you replace the whole board
- All four ESCs share heat dissipation

**Mounting:** 30.5x30.5mm or 20x20mm standard hole patterns.

### Individual ESCs
Separate ESC boards, one per arm. Used in older builds and some specialized configurations.

**Pros:**
- Replace individual ESCs when one fails
- Spread heat across four locations
- Better for large builds (X-class, cinelifters)

**Cons:**
- More wiring
- Heavier overall
- More complex build

### AIO (All-in-One)
FC and ESCs combined on a single board. Common for micro builds and tiny whoops where space is extremely limited.

## Key Specs

### Current Rating (Amps)
The maximum continuous current each ESC can handle. Must exceed your motor's maximum draw.

| Build Size | Recommended ESC Rating |
|-----------|----------------------|
| Tiny whoop | 5-12A |
| 3" micro | 20-35A |
| 5" freestyle/racing | 35-55A |
| 7" long range | 40-60A |
| X-class / cinelifter | 60-80A+ |

**Burst rating** is the short-term peak current (typically 2x continuous). Full-throttle punch-outs briefly exceed continuous rating — the burst spec covers this.

### Processor
- **BLHeli_S** (8-bit): Older, budget. Found on cheap ESCs. Limited features. Can be flashed with Bluejay for RPM filtering support.
- **BLHeli_32** (32-bit): Current standard. Supports bidirectional DShot, higher PWM frequency, more features.
- **AM32**: Open-source alternative to BLHeli_32. No licensing fees, growing community.

### Communication Protocol
How the FC talks to the ESC:

| Protocol | Type | Speed | Features |
|----------|------|-------|----------|
| **DShot600** | Digital | Fast | Standard choice. Clean, reliable. |
| **DShot300** | Digital | Medium | Works fine, slightly more filtering headroom |
| **DShot150** | Digital | Slower | For older or slower ESCs |
| **Bidirectional DShot** | Digital | Varies | Sends RPM data back to FC. Enables RPM filtering. |
| **PWM/OneShot** | Analog | Slow | Legacy. Don't use on new builds. |

**Use DShot300 or DShot600.** Enable **Bidirectional DShot** if your ESCs support it (BLHeli_32 or Bluejay) for RPM filtering.

## ESC Settings (BLHeli_32)

Configure via BLHeli Configurator (through USB passthrough from Betaflight):

### Motor Direction
Set each motor to spin in the correct direction. You can reverse a motor in software rather than swapping wires.

### Motor Timing
Controls the commutation advance angle:
- **Auto**: ESC determines timing automatically. Usually fine.
- **Manual (16-24°)**: For specific tuning. Higher timing = more aggressive, slightly more efficiency at high RPM, more heat.

### Startup Power
How much power the ESC applies during motor startup:
- Too low: Motors may not start reliably (especially with heavy props)
- Too high: Aggressive startup can cause twitching or sync issues
- Default values are usually fine

### Demag Compensation
Prevents motor desync caused by back-EMF from spinning motors. Set to **High** for most FPV builds. Essential for aggressive flying where throttle changes rapidly.

### PWM Frequency
How frequently the ESC updates the motor drive signal:
- **24kHz**: Standard for BLHeli_32
- **48kHz**: Smoother motor response, slightly more heat. Available on BLHeli_32.
- Higher PWM frequency can reduce motor noise and improve response.

## Troubleshooting

### Motor Desync
Motor stutters or stops mid-flight, often at low throttle. Causes:
- Demag compensation too low → set to High
- Motor timing too low → increase or set to Auto
- Startup power too low → increase slightly
- Bad motor bearings causing inconsistent rotation
- Enable **Dynamic Idle** in Betaflight to prevent very low RPM

### ESC Overheating
- ESC gets hot after flight. Causes:
- Current rating too low for the motors/props
- Too high PWM frequency for the specific ESC
- Insufficient airflow in the stack
- Wiring issues (poor solder joints increasing resistance)

### One Motor Not Spinning
- Check solder joints between motor wires and ESC pads
- Try a different motor on the same ESC output (isolates motor vs ESC)
- Check for burned MOSFETs on the ESC board (visible damage)
- Verify motor direction and settings in BLHeli Configurator

## Capacitor

Every ESC (or 4-in-1) should have a capacitor across the battery input:
- **25V 1000µF** for 4S builds
- **35V 1000µF** for 6S builds
- Low-ESR electrolytic capacitor
- Solder directly to the battery pads with short leads

The capacitor absorbs voltage spikes from motor braking and protects both the ESC and other electronics. Most 4-in-1 ESCs include one in the box.
