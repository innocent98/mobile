import 'dart:async';

import 'package:flutter/material.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../../constants/colors.dart' as app_color;

class TotalMined extends StatefulWidget {
  final double totalMined;
  final double miningPower;
  final bool? mining;

  const TotalMined(
      {super.key,
      required this.totalMined,
      required this.miningPower,
      required this.mining});

  @override
  State<TotalMined> createState() => _TotalMinedState();
}

class _TotalMinedState extends State<TotalMined> {
  late Timer _timer;
  late double totalMinedPerSec;

  @override
  void initState() {
    super.initState();

    totalMinedPerSec = widget.totalMined;

    // Start the periodic timer when the widget is initialized
    _startTimer();
  }

  @override
  void dispose() {
    _timer.cancel(); // Cancel the timer to prevent memory leaks
    super.dispose();
  }

  @override
  void didUpdateWidget(TotalMined oldWidget) {
    super.didUpdateWidget(oldWidget);
    // Restart the timer when the 'mining' property changes
    if (oldWidget.mining != widget.mining) {
      _timer.cancel(); // Cancel the existing timer

      totalMinedPerSec = widget.totalMined; // Reset the totalEarnPerSec value
      _startTimer(); // Start a new timer
    }
  }

  void _startTimer() {
    const Duration interval = Duration(seconds: 1);
    _timer = Timer.periodic(interval, (timer) {
      // Update the mined value per second periodically
      if (widget.mining == true) {
        final minePerSec = widget.miningPower / 3600;
        setState(() {
          totalMinedPerSec += minePerSec;
        });
      } else {
        timer.cancel();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;

    // print(totalMinedPerSec);

    return TextWidget(
        text: double.parse(totalMinedPerSec.toStringAsFixed(6)).toString(),
        textColor: app_color.white,
        textAlign: TextAlign.left,
        fontWeight: FontWeight.w700,
        fontSize: screenWidth * 0.04);
  }
}
