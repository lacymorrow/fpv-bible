---
title: Flight Mode Comparison
description: Acro, angle, and horizon modes explained.
---

Betaflight offers several flight modes that fundamentally change how the drone responds to your stick inputs. Understanding the differences is essential — especially the decision to start in acro mode.

## Acro Mode (Rate Mode / Manual)

**What it does:** When you move the stick, the drone rotates at a rate proportional to stick deflection. When you release the stick (center position), the drone **stops rotating but holds its current angle**. It does NOT self-level.

**This means:** If you tilt the drone 30° forward and let go of the stick, it stays at 30° and keeps flying forward. You must actively correct back to level.

**Why most pilots fly acro:**
- Full control — the drone does exactly what you tell it, nothing more
- Required for tricks (flips, rolls, inverted flight)
- More precise once you develop the muscle memory
- Every experienced FPV pilot flies acro

**The learning curve:** Acro is hard at first. You'll crash. A lot. This is normal and expected. The muscle memory develops within 10-20 hours of practice (mostly in a sim). Once it clicks, it becomes second nature.

## Angle Mode (Self-Level)

**What it does:** The drone self-levels when you release the sticks. Stick input determines the **maximum tilt angle** rather than rotation rate. The drone will never tilt past the configured maximum angle (typically 50-70°).

**This means:** Let go of the sticks and the drone returns to level hover. The flight controller uses the accelerometer to constantly correct attitude.

**When to use angle mode:**
- Absolute first time ever flying (before you've done any sim time)
- Teaching someone to fly who has zero experience
- GPS rescue approach (some GPS rescue implementations use angle mode)
- Inspections or utility flying where stability matters more than agility

**Why not to rely on it:**
- You can't do flips or rolls (the angle limit prevents it)
- It's a crutch — pilots who learn on angle mode struggle to transition to acro later
- The drone fights your inputs, feeling "mushy" to experienced pilots
- Almost no FPV content or advice assumes angle mode

**Strong recommendation:** Spend your first 10+ hours in a simulator in **acro mode**, not angle mode. The transition to real flying will be much smoother.

## Horizon Mode

**What it does:** A hybrid of acro and angle. At small stick deflections, the drone self-levels (like angle mode). At full stick deflection, it allows full rotation (like acro mode).

**The idea:** You get the stability of angle mode for gentle flying, with the ability to flip/roll when you push the sticks fully.

**In practice:** Most pilots find horizon mode confusing. The transition between self-leveling and free rotation feels inconsistent. It's neither fully stable nor fully controlled.

**Verdict:** Rarely recommended. Either fly acro (for real flying) or angle (for learning basics). Horizon doesn't build good habits for either.

## Air Mode

Air Mode isn't a flight mode in the same sense — it's a feature that keeps the PID controller active at zero throttle.

**Without Air Mode:** At zero throttle, the FC stops controlling the quad. It tumbles freely.

**With Air Mode:** The FC maintains PID control even at zero throttle by spinning some motors faster and others slower. This lets you:
- Maintain control during flips and rolls where throttle passes through zero
- Keep the drone controllable during free-fall maneuvers
- Maintain authority in inverted flight

**Air Mode is essentially mandatory for acro freestyle flying.** Most pilots enable it permanently or on the arm switch.

**Side effect:** With Air Mode, the drone's props never fully stop spinning while armed (even at zero throttle). This is by design — it's how it maintains control. But it means the drone will try to spin up and fly away if you arm it on the ground. Always have the drone secure before arming.

## Turtle Mode (Flip Over After Crash)

Not a flight mode for flying — it's a recovery mode. When activated, the motors spin in reverse to flip the drone upright after a crash.

**Setup:**
1. Enable "Flip Over After Crash" in Betaflight's Modes tab
2. Assign it to a switch
3. When upside-down after a crash: disarm, activate turtle mode, apply throttle in the direction you want to flip
4. Once upright, deactivate turtle mode, re-arm, and fly

**Essential for:**
- Tiny whoop flying (you'll crash constantly)
- Any situation where walking to the drone to flip it is inconvenient

## Summary

| Mode | Self-Levels? | Full Rotation? | Use Case |
|------|-------------|---------------|----------|
| **Acro** | No | Yes | How 99% of FPV pilots fly. Learn this. |
| **Angle** | Yes | No (limited) | Absolute beginners, utility flying |
| **Horizon** | At center | At full stick | Rarely recommended |
| **Air Mode** | N/A (modifier) | N/A | Always-on PID control at zero throttle |
| **Turtle** | N/A (recovery) | N/A | Flip upright after crash |
