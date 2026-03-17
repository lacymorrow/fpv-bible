---
title: Troubleshooting
description: Diagnosing and fixing common FPV drone problems.
---

Systematic troubleshooting is the key to getting back in the air quickly. This guide covers the most common problems and how to diagnose them.

## Drone Won't Arm

The most common beginner problem. Betaflight has safety checks that prevent arming — check the CLI for the reason.

**In the Betaflight CLI tab, type:**
```
status
```

Look for `Arming disable flags:` and address each flag listed:

| Flag | Cause | Fix |
|------|-------|-----|
| `RXLOSS` | No receiver signal | Verify RX is bound and connected. Check UART config in Ports tab. |
| `THROTTLE` | Throttle not at zero | Push throttle stick all the way down |
| `MSP` | Betaflight Configurator is open | Disconnect Betaflight Configurator and arm with radio only |
| `ANGLE` | Drone not level during gyro calibration | Set drone on flat surface, wait for gyro cal |
| `NOPREARM` | Pre-arm switch required | Toggle pre-arm switch if configured |
| `FAILSAFE` | Failsafe is active | Check receiver connection |
| `BAD_RX_RECOVERY` | Receiver recovered from failsafe | Disarm, wait a moment, try again |

## Quad Flips or Spins on Takeoff

Immediate flip or spin at liftoff is almost always a motor/prop configuration problem.

**Diagnosis checklist:**
1. **Motor order**: Open Motors tab (props off). Slide up Motor 1 — verify the rear-right motor spins. Repeat for 2, 3, 4. Compare positions against Betaflight's motor diagram.
2. **Motor direction**: Each motor must spin the correct direction. Compare against Betaflight's diagram (Props Out = front-right motor spins CCW, etc.)
3. **Props**: Verify each prop is installed on the correct motor (CW prop on CW motor, CCW on CCW). Also check the prop is right-side up — the curved leading edge should face the direction of rotation.
4. **Betaflight motor direction setting**: In Configuration tab, verify "Motor direction is reversed" matches your physical setup.

**Rule of thumb:** If the drone flips toward a specific corner, the motor at that corner is likely incorrect.

## No FPV Video / Static

**Step 1 — Check antenna:**
Is the VTX antenna connected? A VTX powered without antenna can be damaged. Also check the goggle antennas are securely seated.

**Step 2 — Verify channel match:**
VTX and goggles must be on the same channel. Analog: use the goggles' auto-scan feature. Check VTX is powered (LEDs on, or VTX is hot/warm).

**Step 3 — Check VTX power:**
Verify the VTX is receiving voltage. Use a multimeter on the VTX power pads. Check your FC's VTX pad voltage.

**Step 4 — Try a different channel:**
Interference from other sources can blank a channel. Move to a different channel/band.

**Step 5 — Check wiring (analog):**
Camera video wire goes to VTX video-in. VTX video-out goes to goggles (only relevant if using an external receiver with RCA cables).

## Video Has Lines or Noise (Analog)

Horizontal rolling lines or noise in the analog video feed is almost always an electrical noise problem.

**Common causes and fixes:**

| Symptom | Cause | Fix |
|---------|-------|-----|
| Thick rolling lines | Ground loop | Ensure FC and VTX share common ground |
| Thin lines that change with throttle | Motor/ESC noise | Add capacitor on battery pads; add LC filter on camera power |
| Static noise that varies | Power supply noise | Filter camera/VTX power separately from main electronics |
| Lines only at high throttle | Voltage sag | Better battery, more capacitance on input |

**Standard fix:** Add a 1000µF capacitor across the battery pads (if not already present) and an LC filter (ferrite + capacitor) on the camera power wire.

## Oscillations / Propwash

**High-frequency oscillations (during flight, visible as "zippiness"):**
- P gain too high → lower P in Betaflight PID tuning
- Insufficient filtering → check filter settings in the Filtering tab

**Propwash (wobble when descending after throttle chop):**
- D gain too low → raise D-term
- No RPM filtering → enable Bidirectional DShot and RPM filtering (requires BLHeli_32 or Bluejay ESCs)
- Props-in motor direction → switch to Props-Out (Betaflight default)

**Slow oscillations (hunting/bobbing in steady flight):**
- I-term too high → lower I on the offending axis

## Motors Feel Hot After Flight

Some warmth is normal. Too-hot-to-touch after a 3-minute flight indicates a problem.

| Cause | Fix |
|-------|-----|
| D-term too high | Lower D or enable RPM filtering to allow lower D |
| PWM frequency too high for ESC | Lower ESC PWM frequency in BLHeli (24kHz default) |
| Motor bearings worn | Replace motor |
| Bent motor shaft causing imbalance | Replace motor |
| Props too aggressive (high pitch) | Try lower-pitch props |
| Flying at maximum throttle constantly | Normal for racing; consider higher-rated ESC/motor combo |

## One Motor Not Spinning

1. **Swap the motor to a different ESC output** (desolder and move the 3 wires to another motor pad). If the motor now works, the ESC pad is bad.
2. **Try a known-good motor on the suspect ESC output**. If it also doesn't spin, the ESC output is damaged.
3. **Check solder joints** on the motor wires — reflow with flux if any look cold or cracked.
4. **Check for physical motor damage** — spin by hand, listen for grinding, check for bent shaft.
5. **Check Betaflight Motors tab** — can you spin the motor from software? If yes, the issue is in the arming/configuration, not the hardware.

## GPS Issues

**No GPS lock:**
- Wait longer in an open outdoor area — first lock can take 2-5 minutes
- Check GPS is in the open (buildings, cars, and metal block GPS signals)
- Verify GPS is connected and configured in Betaflight (Ports + Configuration tabs)
- Check GPS module power (usually 5V from FC)
- GPS module may need to be mounted away from other electronics (noise affects GPS)

**GPS Rescue not activating:**
- Check minimum satellite count threshold — Betaflight requires a certain number of satellites before GPS Rescue is available (set in Failsafe tab)
- Verify GPS Rescue is selected as the failsafe action
- Enable sanity checks in GPS Rescue settings

## Receiver Signal Loss in Flight

**Intermittent losses (brief static/reconnects):**
- Antenna routing: move receiver antennas away from FC and ESC
- Antenna position: keep away from carbon fiber frame (it blocks signal)
- Diversity: use a diversity receiver with two antennas at 90° angles
- Interference: other 2.4GHz sources (WiFi, other pilots) — check your flying area

**Complete loss at range:**
- Transmitter output power — check radio power settings
- Receiver antenna damage (inspect after any crash near the antenna)
- ELRS packet rate — lower rate (250Hz → 150Hz) for more range
- Antenna polarization mismatch — both TX and RX antennas must be same polarization

## Betaflight Won't Connect via USB

**Windows: Install correct drivers:**
1. Download ImpulseRC Driver Fixer
2. Run with FC connected
3. Let it install the correct driver
4. Try Betaflight Configurator again

**Try a different USB cable:** Many USB-C cables are charge-only and don't support data. Use a known data-capable cable.

**Put FC in bootloader mode (for flashing):** Hold the boot button while plugging in USB.

**Mac/Linux:** Usually works without drivers. If not, check if the FC appears in System Information (Mac) or `lsusb` (Linux).

## Post-Crash Checklist

After any hard crash:

- [ ] Inspect battery — dents, punctures, swelling? If any: ground the pack permanently.
- [ ] Check all props — chips, cracks? Replace any damaged props.
- [ ] Spin each motor by hand — smooth rotation? Grinding or wobble = damaged bearing or bent shaft.
- [ ] Inspect frame arms — flex test each arm. Cracks that aren't visible may still flex noticeably.
- [ ] Check solder joints — visual inspection for any that cracked from impact.
- [ ] Test video feed — power up and verify FPV works before next flight.
- [ ] Test arm/disarm — make sure controls still work correctly.
