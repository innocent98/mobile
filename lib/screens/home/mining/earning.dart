import 'dart:async';

import 'package:flutter/material.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../../constants/colors.dart' as app_color;

class Earning extends StatefulWidget {
  final double earning;
  final double miningPower;
  final bool? mining;

  const Earning(
      {super.key,
      required this.earning,
      required this.miningPower,
      required this.mining});

  @override
  State<Earning> createState() => _EarningState();
}

class _EarningState extends State<Earning> {
  late Timer _timer;
  late double totalEarnPerSec;

  @override
  void initState() {
    super.initState();

    totalEarnPerSec = widget.earning;

    // Start the periodic timer when the widget is initialized
    _startTimer();
  }

  @override
  void dispose() {
    _timer.cancel(); // Cancel the timer to prevent memory leaks
    super.dispose();
  }

  @override
  void didUpdateWidget(Earning oldWidget) {
    super.didUpdateWidget(oldWidget);
    // Restart the timer when the 'mining' property changes
    if (oldWidget.mining != widget.mining) {
      _timer.cancel(); // Cancel the existing timer

      totalEarnPerSec = widget.earning; // Reset the totalEarnPerSec value
      _startTimer(); // Start a new timer
    }
  }

  void _startTimer() {
    const Duration interval = Duration(seconds: 1);

    _timer = Timer.periodic(interval, (timer) {
      // Update the earn value per second periodically
      if (widget.mining == true) {
        final minePerSec = widget.miningPower / 3600;
        setState(() {
          totalEarnPerSec += minePerSec;
        });
      } else {
        timer.cancel();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;

    return TextWidget(
      text:
          'Zeal earning : ${double.parse(totalEarnPerSec.toStringAsFixed(6))}',
      textColor: app_color.secondary,
      textAlign: TextAlign.center,
      fontWeight: FontWeight.w600,
      fontSize: screenWidth * 0.035,
      fontFamily: 'Poppins',
    );
  }
}
