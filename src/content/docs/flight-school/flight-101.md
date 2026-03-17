---
title: Flight 101
description: Your first FPV flights — from liftoff to landing.
---

You've practiced in a simulator, built or bought your drone, and everything is configured. Now it's time to fly for real. Here's how to approach your first flights.

## Pre-Flight

### Choose Your Location
- **Large open field**: Minimum 50m × 50m of clear space. Bigger is better.
- **No people nearby**: Keep a safety perimeter. At least 30m from bystanders.
- **Short grass**: Tall grass hides crashed drones and tangles in props.
- **Low wind**: Check the weather. Wind under 10mph is ideal for learning. If trees are swaying, consider waiting.
- **Away from airports and restricted airspace**: Check B4UFLY or AirMap.

### Gear Check
1. ✅ Batteries charged (drone and goggles/radio)
2. ✅ Props installed correctly (correct rotation, tight)
3. ✅ Antenna connected on VTX
4. ✅ FPV video feed working (power up, check goggles)
5. ✅ Arm/disarm switch working
6. ✅ Failsafe configured and tested
7. ✅ Spare props in your pocket

### Mental Prep
- Accept that you will crash. Multiple times. Today. That's fine.
- Your goal isn't to be good — it's to get airborne and start building real-world muscle memory.
- Have your disarm switch ready to cut motors instantly if anything goes wrong.

## First Liftoff

1. **Place drone on flat ground**, facing away from you
2. **Stand 3-5m behind the drone**
3. **Put on goggles**, verify FPV feed
4. **Arm** the drone (flip your arm switch)
5. **Slowly raise throttle** — the drone will get light on the ground, then lift off
6. **Hover at 1-2m altitude** — don't go higher yet
7. **Focus on maintaining position** — small corrections only

### The Most Common Mistake
Overcorrecting. New pilots make a correction, the drone moves, they overcorrect the other way, the drone swings back, they overcorrect again — oscillating until they crash. The fix: **smaller inputs**. Barely touch the sticks. The drone responds to very small movements.

### If You Panic
**Cut throttle (or disarm).** The drone drops from 1-2m and the worst that happens is a broken prop. Much better than flying into something at speed. Learn to instinctively disarm when things go wrong.

## First Session Goals

### Session 1: Hover and Land (3-4 packs)
- Take off to 1-2m
- Hold position for 10-15 seconds
- Land deliberately (slowly lower throttle until touchdown)
- Repeat until it feels manageable
- Practice at different heights (2m, 5m, 10m)

### Session 2: Forward Flight (3-4 packs)
- Take off, fly forward slowly
- Make gentle turns (left and right)
- Fly in a large rectangle or oval pattern
- Practice landing at a specific spot

### Session 3: Figure-8s and Circuits (3-4 packs)
- Fly figure-8 patterns around two reference points
- Practice consistent-altitude circuits
- Start adding gentle yaw into turns (coordinated turns)

### Session 4: Altitude and Speed (3-4 packs)
- Fly higher (20-30m)
- Practice controlled descents
- Start adding a bit of speed
- Begin experimenting with throttle management

## Stick Controls Recap

Assuming Mode 2 (standard):

**Left Stick:**
- Up/Down = **Throttle** (altitude)
- Left/Right = **Yaw** (rotate left/right)

**Right Stick:**
- Up/Down = **Pitch** (tilt forward/backward = fly forward/backward)
- Left/Right = **Roll** (tilt left/right = strafe left/right)

In acro mode, remember: the drone holds whatever angle you put it in. You must actively level it with opposite stick input.

## Common Early Mistakes

### Throttle Management
The #1 struggle. New pilots either:
- **Chop throttle completely** when scared (drone drops like a rock)
- **Hover at full throttle** and can't come down smoothly

**Fix:** Practice smooth throttle in the sim. Think of throttle as "altitude hold" — make small adjustments up and down, not binary on/off.

### Orientation Confusion
In the goggles, the drone is always flying "away from you" (camera faces forward). This is disorienting at first because turning around means your left/right are reversed relative to your body.

**Fix:** Don't think about it in terms of your body orientation. Think only about the FPV view — left in the goggles is always left stick. Your body position doesn't matter.

### Flying Too Far Away
On your first flights, stay close. 20-50m max distance. The video signal degrades with distance, and a crash nearby is easier to retrieve.

### Ignoring Battery Voltage
Land when your OSD shows your target voltage (3.5V/cell under load). Don't push it — a dead battery mid-flight means an uncontrolled crash.

## Landing

Landing is its own skill:

1. **Reduce altitude gradually** — don't dive at the ground
2. **Slow your forward speed** — approach the landing area at a gentle pace
3. **At 1-2m altitude**, reduce throttle very slowly
4. **Just before touchdown**, cut throttle completely and disarm
5. The drone will drop the last few inches — this is normal

Landing on concrete/asphalt is fine (props survive). Landing on grass is gentler.

### Disarm After Landing
Always disarm immediately after touchdown. A drone armed on the ground with air mode will flip over if a prop catches grass or uneven ground.

## When Things Go Wrong

| Situation | Action |
|-----------|--------|
| Lost orientation | Cut throttle / disarm. Retrieve and try again. |
| Video goes fuzzy/static | Cut throttle immediately. The drone is getting far or has antenna issues. |
| Drone won't arm | Check arming disable flags in Betaflight (type `status` in CLI). Common: throttle not at zero, RXLOSS, MSP connected. |
| Oscillation/vibration | Land. Check props for damage, motor screws, and soft mounting. |
| Drone drifts left/right | Normal if there's wind. In calm conditions, check motor/prop balance and PID tune. |

## After Your Session

1. Bring batteries to storage voltage (if not flying again soon)
2. Inspect the drone for crash damage
3. Replace any damaged props
4. Note what went well and what to practice next
5. Charge up for next time
