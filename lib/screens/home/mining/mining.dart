import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:zealworkers_token/models/user_data.dart';
import 'package:zealworkers_token/providers/airdrop_provider.dart';
import 'package:zealworkers_token/providers/user_data_provider.dart';
import 'package:zealworkers_token/screens/home/mining/announcement.dart';
import 'package:zealworkers_token/screens/home/mining/mining_countdown.dart';
import 'package:zealworkers_token/screens/home/mining/referral.dart';
import 'package:zealworkers_token/widgets/button.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../../constants/colors.dart' as app_color;

class Mining extends StatefulWidget {
  final UserData data;

  const Mining({super.key, required this.data});

  @override
  State<Mining> createState() => _MiningState();
}

class _MiningState extends State<Mining> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;

  @override
  void initState() {
    super.initState();

    _controller = AnimationController(
      duration: const Duration(seconds: 2),
      vsync: this,
    );

    _animation = Tween<double>(begin: 0.0, end: 1.0).animate(_controller);

    _controller.repeat();
  }

  @override
  void dispose() {
    // clean up when no longer needed to prevent memory leaks
    _controller.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    return Container(
      width: screenWidth,
      height: screenHeight * 0.55,
      decoration: const BoxDecoration(color: app_color.soft),
      child: Padding(
        padding: EdgeInsets.symmetric(horizontal: screenWidth * 0.035),
        child: Column(
          children: [
            // referral section
            Referral(data: widget.data),
            // announcement section
            SizedBox(height: screenHeight * 0.02),
            const Announcement(),
            // mining section
            SizedBox(height: screenHeight * 0.02),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Icon(
                  Icons.alarm,
                  color: app_color.black,
                  size: screenWidth * 0.04,
                ),
                SizedBox(width: screenWidth * 0.02),
                // mining countdown
                MiningCountdown(data: widget.data)
              ],
            ),
            SizedBox(height: screenHeight * 0.02),

            if (widget.data.mining == true)
              AnimatedBuilder(
                animation: _animation,
                builder: (context, child) {
                  return RotationTransition(
                    turns: _animation,
                    child: child,
                  );
                },
                child: Image.asset(
                  'assets/img/coin.png',
                  height: screenHeight * 0.1,
                ),
              )
            else
              Image.asset(
                'assets/img/coin.png',
                height: screenHeight * 0.1,
              ),
            SizedBox(height: screenHeight * 0.02),
            TextWidget(
              text:
                  'Zeal earning : ${double.parse(widget.data.earning!.toStringAsFixed(6))}',
              textColor: app_color.secondary,
              textAlign: TextAlign.center,
              fontWeight: FontWeight.w600,
              fontSize: screenWidth * 0.035,
              fontFamily: 'Poppins',
            ),
            SizedBox(height: screenHeight * 0.02),
            Consumer(
              builder: (context, ref, child) {
                return Button(
                  buttonColor: app_color.secondary,
                  buttonText: 'Start Mining',
                  textColor: app_color.white,
                  onPressed: widget.data.mining == true
                      ? null
                      : () async {
                          ref.read(mineDataProvider);
                          await Future.delayed(const Duration(seconds: 2), () {
                            ref.invalidate(userDataProvider);
                            ref.invalidate(airdropDataProvider);
                          });
                        },
                );
              },
            )
          ],
        ),
      ),
    );
  }
}
