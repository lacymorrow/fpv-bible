---
title: Blackbox Logging
description: Recording and analyzing flight data for tuning and debugging.
---

Blackbox is Betaflight's built-in flight data recorder. It captures gyroscope data, PID controller output, motor commands, RC input, and more — every millisecond of your flight. This data is invaluable for PID tuning and diagnosing problems that are invisible to the naked eye.

## What Blackbox Records

Each Blackbox log contains:
- **Gyro data**: Raw and filtered rotation rates on all three axes
- **PID output**: P, I, D, and Feedforward terms
- **Motor output**: What command each motor received
- **RC input**: Your actual stick positions
- **Setpoint**: What the FC was trying to achieve (based on your sticks)
- **Battery voltage and current** (if sensors are connected)
- **GPS data** (if GPS is equipped)
- **RPM data** (if bidirectional DShot is enabled)

## Enabling Blackbox

### Storage Options

**1. Onboard Flash**
Many FCs have built-in flash memory (2-16MB). Quick to set up but limited capacity.
- 2MB: ~1-2 minutes of logging
- 16MB: ~8-10 minutes
- Good for short tune-testing flights

**2. SD Card**
FCs with an SD card slot can log for much longer. A 1GB card holds hours of data.
- Preferred for extended logging
- Faster write speeds prevent data loss at high sample rates

### Configuration
In Betaflight Configurator:

1. Go to **Configuration** tab
2. Find **Blackbox** section
3. Set **Logging Device**: Onboard Flash or SD Card
4. Set **Logging Rate**: 
   - **Normal (1:1)**: Full rate, biggest files, most detail
   - **1:2**: Half rate, good balance of detail and file size
   - **1:4**: Quarter rate, smaller files but less detail
5. Set **Debug Mode** (optional): Choose what extra data to log
   - `GYRO_SCALED`: Raw gyro data (default, good for general tuning)
   - `RPM_FILTER`: Motor RPM data (for RPM filter debugging)
   - `D_MIN`: D-term dynamics
   - `FF_INTERPOLATED`: Feedforward analysis

## Recording a Flight

1. Enable Blackbox in Betaflight
2. Optionally assign a switch to start/stop logging (saves space)
3. Fly your tune-testing flight:
   - Do rolls and flips (tests P response)
   - Do quick direction changes followed by floating (tests propwash / D)
   - Fly straight and steady (tests I-term drift)
   - Punch the throttle and chop it (tests throttle response)
4. Land and disarm
5. Download the log

### Downloading Logs
- **Onboard Flash**: Connect via USB, go to Blackbox tab in Configurator, click "Save Flash to File"
- **SD Card**: Remove card, read on computer

## Blackbox Explorer

**Blackbox Explorer** is the tool for viewing and analyzing logs. Download from the [Betaflight GitHub releases](https://github.com/betaflight/blackbox-tools/releases).

### Reading a Log

Open your `.bbl` or `.bfl` file in Blackbox Explorer. You'll see:

**Time-series graphs** showing:
- Gyro (blue) vs. Setpoint (orange): How well the drone tracks your inputs
- PID components: P, I, D contributions separately  
- Motor outputs: All four motors

### What to Look For

#### Good Tune
- Gyro closely follows setpoint (blue tracks orange)
- Minimal overshoot (gyro doesn't swing past setpoint)
- Clean motor traces (smooth, not spiky)
- Low noise floor

#### P Too High
- Oscillation visible in gyro: rapid back-and-forth after stick movements
- Gyro overshoots setpoint and oscillates around it

#### P Too Low
- Gyro responds slowly to setpoint changes
- Significant gap between setpoint and gyro during maneuvers

#### D Too High
- Motor traces are noisy/spiky
- High-frequency vibration in gyro
- Motors hot after flight

#### D Too Low
- Large overshoot: gyro swings well past setpoint on quick moves
- Propwash visible as oscillation after throttle changes

#### Vibration Problems
- Gyro trace is thick/fuzzy (high noise floor)
- Causes: unbalanced props, loose screws, bent motor shaft, FC not soft-mounted

## PID Toolbox

**PID Toolbox** (by bw1129) is a MATLAB-based tool that provides more advanced analysis than Blackbox Explorer:
- Spectrograms showing noise frequencies over time
- Step response analysis
- Filter performance visualization

It's more complex but provides deeper insight for advanced tuning.

## Practical Workflow

### Quick Tune Session
1. Fly a pack on stock PIDs with Blackbox enabled
2. Review the log — check for obvious issues
3. Adjust one thing (P, D, or FF)
4. Fly another pack
5. Compare the two logs
6. Repeat until satisfied

### Noise Analysis
1. Fly a steady hover for 10-15 seconds
2. Open the log in Blackbox Explorer
3. Switch to frequency analysis view
4. Look for noise peaks — these correspond to motor frequencies and their harmonics
5. If RPM filtering is active, you should see clean notches at motor frequencies
6. If there's still significant noise, you may need to adjust software filters or address mechanical issues (prop balance, soft mounting)

## Tips

- **Label your flights**: Rename log files with what you changed ("raised_P_to_45.bbl")
- **Fly the same routine**: Consistent maneuvers make before/after comparison meaningful
- **Clear flash before each session**: Onboard flash fills up fast
- **Don't log everything**: If you're not actively tuning, disable Blackbox to save flash wear
- **Share logs**: If asking for tuning help online, sharing your Blackbox log gives experts real data to work with
