import 'dart:async';

import 'package:flutter/material.dart';
import 'package:zealworkers_token/models/user_data.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../../constants/colors.dart' as app_color;

class MiningCountdown extends StatefulWidget {
  final UserData data;

  const MiningCountdown({super.key, required this.data});

  @override
  State<MiningCountdown> createState() => _MiningCountdownState();
}

class _MiningCountdownState extends State<MiningCountdown>
    with SingleTickerProviderStateMixin {
  late Timer _timer;
  late int _countdown; // Initial countdown value in seconds

  @override
  void initState() {
    super.initState();

    // Calculate the initial countdown value in seconds
    final now = DateTime.now();
    final miningExp = widget.data.miningExp;
    final difference =
        miningExp!.isAfter(now) ? miningExp.difference(now) : Duration.zero;

    _countdown = difference.inSeconds;

    // Start the countdown timer
    _startTimer();
  }

  void _startTimer() {
    _timer = Timer.periodic(const Duration(seconds: 1), (timer) {
      setState(() {
        if (_countdown > 0) {
          _countdown--;
        } else {
          timer.cancel();
        }
      });
    });
  }

  String _formatTime(int seconds) {
    final hours = seconds ~/ 3600;
    final minutes = (seconds ~/ 60) % 60;
    final remainingSeconds = seconds % 60;
    return '${hours.toString().padLeft(2, '0')}:${minutes.toString().padLeft(2, '0')}:${remainingSeconds.toString().padLeft(2, '0')}';
  }

  @override
  void dispose() {
    // Cancel the timer to prevent memory leaks
    _timer.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;

    return TextWidget(
      text: _formatTime(_countdown),
      textColor: app_color.black,
      textAlign: TextAlign.center,
      fontWeight: FontWeight.w600,
      fontSize: screenWidth * 0.035,
      fontFamily: 'Poppins',
    );
  }
}
