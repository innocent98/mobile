import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:zealworkers_token/models/user_data.dart';
import 'package:zealworkers_token/providers/airdrop_provider.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../../constants/colors.dart' as app_color;

class AirdropInfo extends StatefulWidget {
  final num team;
  final DateTime exp;
  final UserData userD;

  const AirdropInfo(
      {super.key, required this.team, required this.exp, required this.userD});

  @override
  State<AirdropInfo> createState() => _AirdropInfoState();
}

class _AirdropInfoState extends State<AirdropInfo> {
  late Timer _timer;
  int _countdown = 0; // Initial countdown value in seconds

  @override
  void initState() {
    super.initState();

    // Calculate the initial countdown value in seconds
    final now = DateTime.now();
    final miningExp = widget.exp;
    final difference =
        miningExp.isAfter(now) ? miningExp.difference(now) : Duration.zero;
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
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    return Container(
      width: screenWidth,
      height: screenHeight * 0.39,
      decoration: const BoxDecoration(color: app_color.soft),
      child: Padding(
        padding: EdgeInsets.all(screenWidth * 0.035),
        child: Consumer(
          builder: (context, ref, child) {
            return ref.watch(airdropDataProvider).when(data: (data) {
              String formatTotalSupply(int number) {
                if (number >= 1000000000) {
                  double result = number / 1000000000;
                  return '${result.toStringAsFixed(1)}b';
                } else if (number >= 1000000) {
                  double result = number / 1000000;
                  return '${result.toStringAsFixed(1)}m';
                } else {
                  return number.toString();
                }
              }

              String formatCirculation(double number) {
                if (number >= 1000000000) {
                  double result = number / 1000000000;
                  return '${result.toStringAsFixed(1)}b';
                } else if (number >= 1000000) {
                  double result = number / 1000000;
                  return '${result.toStringAsFixed(1)}m';
                } else {
                  return number.toString();
                }
              }

              return Column(
                children: [
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Image.asset(
                        'assets/img/avatar.png',
                        width: screenWidth * 0.1,
                        height: screenWidth * 0.1,
                        fit: BoxFit.cover,
                      ),
                      SizedBox(width: screenWidth * 0.02),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          TextWidget(
                              text: 'Welcome',
                              textColor: app_color.black,
                              textAlign: TextAlign.left,
                              fontWeight: FontWeight.w500,
                              fontSize: screenWidth * 0.03),
                          TextWidget(
                              text: widget.userD.fullName != ''
                                  ? widget.userD.fullName.toString()
                                  : 'Update your profile',
                              textColor: app_color.black,
                              textAlign: TextAlign.left,
                              fontWeight: FontWeight.w700,
                              fontSize: screenWidth * 0.04)
                        ],
                      )
                    ],
                  ),
                  SizedBox(height: screenHeight * 0.01),
                  Container(
                    decoration: BoxDecoration(
                        gradient: const LinearGradient(
                          begin: Alignment.topLeft,
                          end: Alignment.bottomRight,
                          colors: [
                            app_color.gradient1,
                            app_color.gradient2,
                            app_color.gradient3
                          ],
                        ),
                        borderRadius: BorderRadius.circular(12)),
                    child: Padding(
                      padding: EdgeInsets.symmetric(
                          vertical: screenWidth * 0.03,
                          horizontal: screenWidth * 0.04),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              TextWidget(
                                  text: 'Total Balance',
                                  textColor: app_color.white,
                                  textAlign: TextAlign.left,
                                  fontWeight: FontWeight.w700,
                                  fontSize: screenWidth * 0.04),
                              SizedBox(height: screenHeight * 0.02),
                              Row(
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  Image.asset(
                                    'assets/img/coin.png',
                                    width: screenWidth * 0.04,
                                  ),
                                  SizedBox(width: screenWidth * 0.03),
                                  TextWidget(
                                      text: double.parse(widget
                                              .userD.totalEarned!
                                              .toStringAsFixed(6))
                                          .toString(),
                                      textColor: app_color.white,
                                      textAlign: TextAlign.left,
                                      fontWeight: FontWeight.w700,
                                      fontSize: screenWidth * 0.04),
                                ],
                              ),
                              SizedBox(height: screenHeight * 0.03),
                              Row(
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  Image.asset(
                                    'assets/img/th.png',
                                    width: screenWidth * 0.04,
                                  ),
                                  SizedBox(width: screenWidth * 0.03),
                                  TextWidget(
                                      text: '${widget.userD.referralBonus}USDT',
                                      textColor: app_color.white,
                                      textAlign: TextAlign.left,
                                      fontWeight: FontWeight.w400,
                                      fontSize: screenWidth * 0.03),
                                ],
                              ),
                              SizedBox(height: screenHeight * 0.03),
                              TextWidget(
                                  text: 'Mining Power : ${data!.miningRate}/hr',
                                  textColor: app_color.white,
                                  textAlign: TextAlign.left,
                                  fontWeight: FontWeight.w500,
                                  fontSize: screenWidth * 0.03),
                            ],
                          ),
                          Column(
                            children: [
                              Image.asset(
                                'assets/img/eth.png',
                                width: screenWidth * 0.345,
                              ),
                              TextWidget(
                                  text: 'Team Power : 1.5/hr',
                                  textColor: app_color.white,
                                  textAlign: TextAlign.left,
                                  fontWeight: FontWeight.w500,
                                  fontSize: screenWidth * 0.03),
                            ],
                          )
                        ],
                      ),
                    ),
                  ),
                  SizedBox(height: screenHeight * 0.015),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Container(
                        padding:
                            EdgeInsets.symmetric(vertical: screenWidth * 0.01),
                        width: screenWidth * 0.45,
                        decoration: BoxDecoration(
                            color: app_color.pink,
                            borderRadius: BorderRadius.circular(8)),
                        child: TextWidget(
                            text:
                                'Total Supply \n ${formatTotalSupply(int.parse(data.totalSupply))}',
                            textColor: app_color.grey,
                            textAlign: TextAlign.center,
                            fontWeight: FontWeight.w600,
                            fontSize: screenWidth * 0.035),
                      ),
                      Container(
                        padding:
                            EdgeInsets.symmetric(vertical: screenWidth * 0.01),
                        width: screenWidth * 0.45,
                        decoration: BoxDecoration(
                            color: app_color.green_soft,
                            borderRadius: BorderRadius.circular(8)),
                        child: TextWidget(
                            text:
                                'Total Mined \n ${formatCirculation(double.parse(data.totalMined.toStringAsFixed(6).toString()))}',
                            textColor: app_color.grey,
                            textAlign: TextAlign.center,
                            fontWeight: FontWeight.w600,
                            fontSize: screenWidth * 0.035),
                      )
                    ],
                  )
                ],
              );
            }, error: (err, s) {
              return const Text('');
            }, loading: () {
              return Container();
            });
          },
        ),
      ),
    );
  }
}
