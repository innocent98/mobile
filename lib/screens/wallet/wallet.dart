import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:zealworkers_token/providers/user_data_provider.dart';
import 'package:zealworkers_token/widgets/button.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../constants/colors.dart' as app_color;

class Wallet extends ConsumerWidget {
  const Wallet({super.key});

  @override
  Widget build(BuildContext context, ref) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    final userData = ref.watch(userDataProvider);

    // final data = userData.when(data: (data) {
    //   return TextWidget(
    //       text: '${data!.totalEarned!.toStringAsFixed(4)}ZWT',
    //       textColor: app_color.grey,
    //       textAlign: TextAlign.center,
    //       fontWeight: FontWeight.w500,
    //       fontSize: screenWidth * 0.04);
    // }, error: (err, s) {
    //   return Container();
    // }, loading: () {
    //   return Container();
    // });

    return Scaffold(
      backgroundColor: app_color.white,
      appBar: AppBar(
        title: TextWidget(
            text: 'Wallet',
            textColor: app_color.black,
            textAlign: TextAlign.center,
            fontWeight: FontWeight.w600,
            fontSize: screenWidth * 0.05),
      ),
      body: Padding(
          padding: EdgeInsets.symmetric(
              vertical: screenWidth * 0.04, horizontal: screenWidth * 0.08),
          child: userData.when(data: (data) {
            return Column(
              children: [
                SizedBox(height: screenHeight * 0.04),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    TextWidget(
                        text: 'Total Earned',
                        textColor: app_color.grey,
                        textAlign: TextAlign.center,
                        fontWeight: FontWeight.w500,
                        fontSize: screenWidth * 0.04),
                    TextWidget(
                        text: '${data!.totalEarned!.toStringAsFixed(4)}ZWT',
                        textColor: app_color.grey,
                        textAlign: TextAlign.center,
                        fontWeight: FontWeight.w500,
                        fontSize: screenWidth * 0.04),
                  ],
                ),
                SizedBox(height: screenHeight * 0.02),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    TextWidget(
                        text: 'Referral Bonus',
                        textColor: app_color.grey,
                        textAlign: TextAlign.center,
                        fontWeight: FontWeight.w500,
                        fontSize: screenWidth * 0.04),
                    TextWidget(
                        text: '${data.referralBonus!.toStringAsFixed(2)}USDT',
                        textColor: app_color.grey,
                        textAlign: TextAlign.center,
                        fontWeight: FontWeight.w500,
                        fontSize: screenWidth * 0.04)
                  ],
                ),
                SizedBox(height: screenHeight * 0.05),
                Image.asset('assets/img/bar_code.png'),
                SizedBox(height: screenHeight * 0.03),
                TextWidget(
                    text: 'Wallet Address',
                    textColor: app_color.grey,
                    textAlign: TextAlign.center,
                    fontWeight: FontWeight.w500,
                    fontSize: screenWidth * 0.04),
                SizedBox(height: screenHeight * 0.04),
                const Button(
                    buttonColor: app_color.primary,
                    buttonText: 'Withdraw',
                    textColor: app_color.white)
              ],
            );
          }, error: (err, s) {
            return Container();
          }, loading: () {
            return Container();
          })),
    );
  }
}
