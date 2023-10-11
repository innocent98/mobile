import 'package:flutter/widgets.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../../constants/colors.dart' as app_color;

class Info extends StatelessWidget {
  final String text1;
  final String sub_text1;
  final String text2;
  final String sub_text2;
  final String text3;
  final String sub_text3;

  const Info(
      {required this.text1,
      required this.sub_text1,
      required this.text2,
      required this.sub_text2,
      required this.text3,
      required this.sub_text3,
      super.key});

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;

    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Column(
              children: [
                TextWidget(
                  text: text1,
                  textColor: app_color.white,
                  textAlign: TextAlign.center,
                  fontWeight: FontWeight.w500,
                  fontSize: screenWidth * 0.035,
                  fontFamily: 'Poppins',
                ),
                TextWidget(
                  text: sub_text1,
                  textColor: app_color.white,
                  textAlign: TextAlign.center,
                  fontWeight: FontWeight.w500,
                  fontSize: screenWidth * 0.035,
                  fontFamily: 'Poppins',
                ),
              ],
            ),
            Column(
              children: [
                TextWidget(
                  text: text2,
                  textColor: app_color.white,
                  textAlign: TextAlign.center,
                  fontWeight: FontWeight.w500,
                  fontSize: screenWidth * 0.035,
                  fontFamily: 'Poppins',
                ),
                TextWidget(
                  text: sub_text2,
                  textColor: app_color.white,
                  textAlign: TextAlign.center,
                  fontWeight: FontWeight.w500,
                  fontSize: screenWidth * 0.035,
                  fontFamily: 'Poppins',
                ),
              ],
            ),
            Column(
              children: [
                TextWidget(
                  text: text3,
                  textColor: app_color.white,
                  textAlign: TextAlign.center,
                  fontWeight: FontWeight.w500,
                  fontSize: screenWidth * 0.035,
                  fontFamily: 'Poppins',
                ),
                TextWidget(
                  text: sub_text3,
                  textColor: app_color.white,
                  textAlign: TextAlign.center,
                  fontWeight: FontWeight.w500,
                  fontSize: screenWidth * 0.035,
                  fontFamily: 'Poppins',
                )
              ],
            )
          ],
        ),
      ],
    );
  }
}
