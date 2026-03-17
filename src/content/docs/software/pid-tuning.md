---
title: PID Tuning
description: Understanding and tuning PID controllers for FPV drone performance.
---

PID tuning is how you make your drone fly the way you want. A well-tuned drone feels locked in, responsive, and smooth. A poorly tuned one oscillates, wobbles, or feels sluggish.

## What is PID?

PID stands for **Proportional, Integral, Derivative** — three terms that together form a control loop. The flight controller constantly compares where your drone *is* (from the gyro) to where it *should be* (from your stick input) and applies corrections.

- **P (Proportional)**: How hard the FC corrects errors. Higher P = snappier response, but too high causes oscillations (fast vibrations).
- **I (Integral)**: Corrects persistent drift over time. Handles things like an off-center CG or wind. Too high causes slow wobble, too low and the drone drifts in turns.
- **D (Derivative)**: Dampens overshooting. Predicts where the error is going and applies braking force. Reduces bounce-back and propwash. Too high causes motor heat and high-frequency vibration.

Think of it like driving:
- **P** = how hard you turn the steering wheel when you're off course
- **I** = a slow correction if you keep drifting to one side over time
- **D** = easing off the turn before you overshoot the lane

## Do You Need to Tune?

Betaflight's stock PIDs are surprisingly good for most 5" freestyle builds with quality components. You may never need to manually tune if your build is standard.

**You should tune if:**
- You see oscillations (vibrations visible in video or audible)
- The drone bounces back after quick moves
- Propwash oscillation is bad (wobbles when descending through your own prop wash)
- You're flying a non-standard build (heavy HD camera, unusual size, stretched X frame)
- You want that last 10% of performance dialed in

## The Quick Approach: Betaflight Sliders

Modern Betaflight has **PID tuning sliders** that simplify the process:

1. **Master Slider**: Scales P and D together. Move right for more authority (snappier, but can oscillate). Move left for softer feel.
2. **PD Balance**: Shifts emphasis between P and D. More D = better propwash handling but more motor heat.
3. **Stick Response (Feedforward)**: How aggressively the drone responds to stick *changes*. Higher = more responsive to fast stick movements.
4. **D Max Advance**: Controls D-term boost during quick maneuvers.

Start with the master slider. Fly, observe, adjust. This gets you 90% of the way.

## Manual PID Tuning

If sliders aren't enough, here's the systematic approach:

### Tuning P

1. Start with stock P values
2. Do quick flips and rolls — watch for bounce-back (overshoot)
3. If the drone oscillates or vibrates during moves, **lower P**
4. If it feels soft/mushy and doesn't snap to your inputs, **raise P**
5. Find the highest P where oscillations just barely don't appear, then back off slightly

### Tuning D

1. With P set, focus on D
2. Do quick maneuvers followed by floating/descending — watch for propwash wobble
3. If propwash is bad (wobbles when descending after a flip), **raise D**
4. If motors are hot after a flight or you see high-frequency vibration, **lower D**
5. D is a balance between propwash handling and motor heat

### Tuning I

I is usually fine at stock values. Adjust if:
- The drone drifts during steady turns or when flying straight in wind → **raise I**
- You see a slow, low-frequency wobble → **lower I**

### Feedforward

Feedforward (FF) helps the drone react to stick input *before* the PID loop detects an error. It makes the quad feel more responsive and "connected" to your sticks.
- **Raise FF** for sharper, more immediate stick response
- **Lower FF** for smoother, more dampened flying (cinematic style)
- Too much FF causes overshoot on fast stick movements

## Propwash Oscillation

Propwash is the #1 tuning challenge. It happens when your drone descends through the turbulent air left by its own propellers. You see it as a wobble/vibration during aggressive altitude changes.

**Things that help propwash:**
- Raise D (with the tradeoff of motor heat)
- Enable **D Max** (lets D increase during fast maneuvers only)
- Enable **RPM filtering** (requires bidirectional DShot) — this is the single biggest improvement
- Use the **Props Out** motor direction (Betaflight default now)
- Fly a lighter build
- Use tri-blade props (more thrust, less propwash than bi-blade in many cases)

## RPM Filtering

RPM filtering uses real-time motor speed data (via bidirectional DShot) to precisely notch out motor noise. It's the single most impactful improvement for clean flight and good PID performance.

**Requirements:**
- ESCs with BLHeli_32 or Bluejay firmware
- Bidirectional DShot enabled in Betaflight
- RPM filter enabled (it's on by default in modern Betaflight if bi-directional DShot is active)

With RPM filtering active, you can often run higher D without motor heat, which helps propwash.

## Blackbox Logging

For serious tuning, Betaflight's **Blackbox** records flight data (gyro, PID error, motor output, RC input) to the FC's flash memory or an SD card.

1. Enable Blackbox logging in the Configuration tab
2. Fly a tune-testing flight
3. Download the log
4. Open in **Blackbox Explorer** (standalone app)
5. Look for:
   - **Gyro noise**: spikes indicate vibration problems
   - **PID error**: should be close to zero in steady flight
   - **D-term noise**: if D is very noisy, your filtering may need adjustment
   - **Motor output**: should be smooth, not spiky

## Rates (Stick Feel)

Rates aren't PIDs, but they're critical to how your drone feels. Rates control the relationship between stick position and rotation speed.

**Three numbers per axis:**
- **RC Rate**: Overall sensitivity
- **Super Rate**: How much faster it spins at full stick deflection
- **RC Expo**: Softens the center stick (more precision around center, less touchy)

### Beginner-friendly starting rates:
- Center sensitivity: ~200 deg/s
- Max rotation rate: ~600 deg/s
- Some expo for center stick softness

### Experienced freestyle rates:
- Center sensitivity: ~200-250 deg/s  
- Max rotation: ~800-900 deg/s

You can use actual rate (deg/s) in Betaflight's rate profile view to understand exactly what your numbers mean.

## Tips

- **Tune one axis at a time** — roll and pitch are usually linked (same values), yaw is separate
- **Fly the same routine** each time so you can compare changes
- **Check motor temps** after flights — warm is OK, too-hot-to-touch means D is too high or filtering needs work
- **Soft-mount your FC** with rubber grommets to reduce vibration reaching the gyro
- **Update firmware** — each Betaflight release improves the defaults and filtering
