import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:zealworkers_token/models/user_data.dart';
import 'package:zealworkers_token/widgets/divider.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../../constants/colors.dart' as app_color;

class InfoCard extends StatelessWidget {
  final UserData data;
  const InfoCard({super.key, required this.data});

  Future<void> copyToClipboard(String text) async {
    await Clipboard.setData(ClipboardData(text: text));
  }

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    return Container(
      width: screenWidth * 0.9,
      padding: EdgeInsets.all(screenWidth * 0.03),
      decoration: BoxDecoration(
          color: app_color.white,
          border: Border.all(color: app_color.primary, width: 1),
          borderRadius: BorderRadius.circular(10)),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                children: [
                  TextWidget(
                    text:
                        '${double.parse(data.totalEarned!.toStringAsFixed(6))}ZWT',
                    textColor: app_color.secondary,
                    textAlign: TextAlign.center,
                    fontWeight: FontWeight.w600,
                    fontSize: screenWidth * 0.03,
                    fontFamily: 'Poppins',
                  ),
                  TextWidget(
                    text: 'Total Earned',
                    textColor: app_color.secondary,
                    textAlign: TextAlign.center,
                    fontWeight: FontWeight.w500,
                    fontSize: screenWidth * 0.03,
                    fontFamily: 'Poppins',
                  ),
                ],
              ),
              Column(
                children: [
                  TextWidget(
                    text: '${data.referralBonus}USDT',
                    textColor: app_color.secondary,
                    textAlign: TextAlign.center,
                    fontWeight: FontWeight.w600,
                    fontSize: screenWidth * 0.03,
                    fontFamily: 'Poppins',
                  ),
                  TextWidget(
                    text: 'Referral Bonus',
                    textColor: app_color.secondary,
                    textAlign: TextAlign.center,
                    fontWeight: FontWeight.w500,
                    fontSize: screenWidth * 0.03,
                    fontFamily: 'Poppins',
                  ),
                ],
              )
            ],
          ),
          SizedBox(height: screenHeight * 0.006),
          const MyDivider(),
          SizedBox(height: screenHeight * 0.006),
          TextWidget(
            text: 'Referral link',
            textColor: app_color.secondary,
            textAlign: TextAlign.center,
            fontWeight: FontWeight.w500,
            fontSize: screenWidth * 0.03,
            fontFamily: 'Poppins',
          ),
          SizedBox(height: screenHeight * 0.009),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              TextWidget(
                text: data.referralCode!,
                textColor: app_color.secondary,
                textAlign: TextAlign.center,
                fontWeight: FontWeight.w500,
                fontSize: screenWidth * 0.03,
                fontFamily: 'Poppins',
              ),
              SizedBox(width: screenWidth * 0.02),
              InkWell(
                onTap: () {
                  copyToClipboard(data.referralCode!);
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(
                      content: Text('Referral code copied to clipboard'),
                      duration: Duration(seconds: 3),
                    ),
                  );
                },
                child: Icon(
                  Icons.copy_rounded,
                  size: screenWidth * 0.04,
                  color: app_color.grey,
                ),
              )
            ],
          ),
          SizedBox(height: screenHeight * 0.006),
          const MyDivider(),
          SizedBox(height: screenHeight * 0.006),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Image.asset('assets/img/fbk.png'),
              SizedBox(width: screenWidth * 0.02),
              Image.asset('assets/img/tg.png'),
              SizedBox(width: screenWidth * 0.02),
              Image.asset('assets/img/tw.png')
            ],
          )
        ],
      ),
    );
  }
}
