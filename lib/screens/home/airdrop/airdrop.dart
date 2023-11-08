import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:zealworkers_token/providers/airdrop_provider.dart';
import 'package:zealworkers_token/screens/home/airdrop/info.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../../constants/colors.dart' as app_color;

class AirdropInfo extends StatefulWidget {
  final num team;
  final DateTime exp;

  const AirdropInfo({super.key, required this.team, required this.exp});

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
      height: screenHeight * 0.41,
      decoration: const BoxDecoration(color: app_color.secondary),
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

              String formatCirculation(int number) {
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
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      TextWidget(
                        text: 'Free Airdrop',
                        textColor: app_color.white,
                        textAlign: TextAlign.center,
                        fontWeight: FontWeight.w600,
                        fontSize: screenWidth * 0.045,
                        fontFamily: 'Poppins',
                      ),
                      Container(
                        padding: EdgeInsets.all(screenWidth * 0.02),
                        decoration: BoxDecoration(
                            border:
                                Border.all(width: 1, color: app_color.white),
                            borderRadius: BorderRadius.circular(8)),
                        child: TextWidget(
                          text: 'Whitepaper',
                          textColor: app_color.white,
                          textAlign: TextAlign.center,
                          fontWeight: FontWeight.w500,
                          fontSize: screenWidth * 0.035,
                          fontFamily: 'Poppins',
                        ),
                      )
                    ],
                  ),
                  SizedBox(height: screenHeight * 0.025),
                  Info(
                    text1: 'Total Supply',
                    sub_text1: formatTotalSupply(int.parse(data!.totalSupply)),
                    text2: 'Circulation',
                    sub_text2: formatCirculation(int.parse(data.circulation)),
                    text3: 'Total Mined',
                    sub_text3: double.parse(data.totalMined.toStringAsFixed(6))
                        .toString(),
                  ),
                  SizedBox(height: screenHeight * 0.03),
                  Info(
                    text1: 'Mining Rate',
                    sub_text1: '${data.miningRate}ZW/Hr',
                    text2: 'Mining Time',
                    sub_text2: _formatTime(_countdown),
                    text3: 'My Team',
                    sub_text3: '0/${widget.team}',
                  ),
                  SizedBox(height: screenHeight * 0.04),
                  Container(
                    width: screenWidth * 0.55,
                    decoration: BoxDecoration(
                        border: Border.all(width: 1, color: app_color.white),
                        borderRadius:
                            BorderRadius.circular(screenWidth * 0.04)),
                    child: Padding(
                      padding: EdgeInsets.all(screenWidth * 0.01),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          const ImageIcon(
                            AssetImage('assets/img/bullhorn.png'),
                            color: app_color.white,
                          ),
                          TextWidget(
                            text: 'Anouncement',
                            textColor: app_color.white,
                            textAlign: TextAlign.center,
                            fontWeight: FontWeight.w600,
                            fontSize: screenWidth * 0.045,
                            fontFamily: 'Poppins',
                          )
                        ],
                      ),
                    ),
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
