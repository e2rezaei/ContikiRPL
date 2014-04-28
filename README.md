The Contiki Operating System
============================

This project is the ContikiRPL open source project. I only touched the rpl-dag.c to monitor each node changes over time. 

When neighbor-link-callback() function is called, it calls  monitor-parents() function to report the node's rank and pref-parent. It also prints the ID, link-metric, and rank for each parent.

There is a new simulation scenario: rpl-udp-25-nodes. A grid of 25 nodes which one of them is the server and other 24 nods are clients. Each node transmission power is set and printed. Then the following code is added right after the PROCESS-BEGIN:
powertrace_start(CLOCK_SECOND * 2); //elnaz
cc2420_set_txpower(15);
printf(" Tx=%d\n", cc2420_get_txpower());

powertrace.h is included and the makefile is modified. The scriptrunner is also modified. There is a regression test related to this experiment in .\regression-test\17-25-nodes

I have collected the energy consumption of the clients in one hour. 

You can run the regression-test in no-gui mode.
