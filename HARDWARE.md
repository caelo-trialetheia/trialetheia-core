## Hardware Implementation

We use an Arduino Uno with a MAX30102 pulse sensor for real-time HRV measurement, and a TMP36 temperature sensor for breath detection. These choices were made for affordability, open-source compatibility, and ease of integration with the TRIALETHEIA framework.

### Why not OpenBCI or commercial solutions?
- Cost: OpenBCI hardware exceeded €1000, while our setup is under €100.
- Data access: Our approach allows direct, real-time data streaming, not just post-session CSV export.
- Legal/IP: No reverse engineering or proprietary protocols—everything is open source.

### Setup Guide

1. Connect the MAX30102 to Arduino pins X/Y (see schematic below).
2. Use the provided Arduino sketch (link) to stream HRV/breath data via serial.
3. The TRIALETHEIA web interface reads this data for real-time PAS calculation.

> This section will be expanded as we refine our hardware and integration process. Community contributions and feedback are welcome!

