#!/bin/bash

# Check if /usrdata/socat-at-bridge/atcmd exists
#if [ -f "/usrdata/socat-at-bridge/atcmd" ]; then
    # Read the serial number
#    serial_number=$(/usrdata/socat-at-bridge/atcmd 'AT+EGMR=0,5' | grep '+EGMR:' | cut -d '"' -f2)
    # Read the firmware revision
#    firmware_revision=$(/usrdata/socat-at-bridge/atcmd 'AT+QGMR' | grep -o 'RM[0-9A-Z].*')
#else
#    serial_number="UNKNOWN"
#    firmware_revision="UNKNOWN"
#fi
#
# Start a login session
exec /bin/login
