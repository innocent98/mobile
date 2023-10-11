import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:zealworkers_token/screens/home/airdrop/info.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../../constants/colors.dart' as app_color;

class AirdropInfo extends StatelessWidget {
  const AirdropInfo({super.key});

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
        child: Column(
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
                      border: Border.all(width: 1, color: app_color.white),
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
            const Info(
              text1: 'Total Supply',
              sub_text1: '2.5Bn',
              text2: 'Circulation',
              sub_text2: '2.5Bn',
              text3: 'Total Mined',
              sub_text3: '180Mn',
            ),
            SizedBox(height: screenHeight * 0.03),
            const Info(
              text1: 'Mining Rate',
              sub_text1: '--ZW/Hr',
              text2: 'Mining Time',
              sub_text2: '00:00:00',
              text3: 'My Team',
              sub_text3: '0/0',
            ),
            SizedBox(height: screenHeight * 0.04),
            Container(
              width: screenWidth * 0.55,
              decoration: BoxDecoration(
                  border: Border.all(width: 1, color: app_color.white),
                  borderRadius: BorderRadius.circular(screenWidth * 0.04)),
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
        ),
      ),
    );
  }
}
