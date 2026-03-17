---
title: Installing Motors
description: Mounting motors to your frame and wiring them to the ESC.
---

Motor installation is straightforward but there are details that matter — screw length, wire routing, and spin direction all affect your build's reliability.

## Mounting

### Screw Length
Motor screws go through the frame arm and into the motor base. **Screw length is critical:**
- Too long: Screws penetrate into the motor and hit the stator windings, causing a short circuit. This can kill the motor or ESC instantly.
- Too short: Motor loosens from vibration and can detach mid-flight.

**Measure your arm thickness** and check your motor's recommended screw length. Most motors include screws matched to common arm thicknesses (4-6mm).

If in doubt, screw the motor onto the arm without the arm present — you can see how deep the screw goes into the motor base. There should be 1-2mm of threading engagement without the screw bottoming out inside the motor.

### Loctite
Apply **blue Loctite (242/243)** to motor screws. Vibration will loosen them otherwise.

**Do NOT use red Loctite** — it's permanent and requires heat to remove. Blue is medium-strength and can be broken with hand tools.

### Motor Orientation
Some motors have wire exits on one side. Orient them so the wires route cleanly toward the center of the frame (toward the ESC). Messy wire routing can get caught in props.

## Wiring

### Motor Wires to ESC
Each motor has **3 wires** that connect to the corresponding ESC output (on a 4-in-1 ESC, there are labeled pads for each motor).

**The order of the three wires determines spin direction.** However, since BLHeli_32 and Bluejay support software direction reversal, the physical wire order doesn't matter — solder them in any order and fix the direction in software.

### Soldering Motor Wires
1. **Trim wires to length** — leave enough slack for the motor to flex slightly on impact, but not so much that excess wire flops around near props
2. **Strip 2-3mm** of insulation from each wire end
3. **Tin the wire ends** and the ESC motor pads
4. **Solder each wire** to its pad — use enough solder for a strong joint (these carry high current)
5. **Apply heat shrink** if any joints are exposed

### Wire Routing
- Route motor wires along the arm, close to the carbon fiber
- Secure with a small zip tie or tape at the arm-body junction
- Keep wires away from the prop plane — a wire caught by a prop gets cut instantly
- Leave a small service loop at the ESC connection point

## Motor Order and Direction

Betaflight expects motors in a specific order and spin direction. In the **Motors tab**:

### Standard Motor Map (Props Out, Betaflight Default)
```
    Front
  4     2
    ×
  3     1
    Rear
```

- **Motor 1** (rear right): Clockwise (CW)
- **Motor 2** (front right): Counter-clockwise (CCW)
- **Motor 3** (rear left): Counter-clockwise (CCW)
- **Motor 4** (front left): Clockwise (CW)

### Verifying Motor Order
1. In Betaflight Motors tab, remove props, accept the safety warning
2. Raise the slider for Motor 1 — verify the correct motor spins
3. Repeat for motors 2, 3, 4
4. If a motor is on the wrong position, either: remap in Betaflight (resource remapping), or move the wires to the correct ESC output pads

### Verifying Spin Direction
1. Spin each motor individually (props off!)
2. Check which direction each motor spins
3. Compare against the Betaflight motor diagram
4. If a motor spins the wrong way: reverse it in BLHeli Configurator (Software → Motor Direction → Reversed)

## Props Out vs Props In

- **Props Out** (Betaflight default): Front motors spin outward. Better propwash handling, the modern standard.
- **Props In** (traditional): Front motors spin inward. Slightly better yaw authority. Older convention.

**Use Props Out** unless you have a specific reason not to. Betaflight is optimized for it.

## Testing

Before putting props on:
1. ✅ All four motors spin
2. ✅ Correct motor order matches Betaflight diagram
3. ✅ Correct spin direction for each motor
4. ✅ Motors spin freely (no grinding or screws hitting internally)
5. ✅ Motor screws are Loctited and tight
6. ✅ Wires are routed cleanly away from prop path

Only after confirming all of the above should you install propellers.
