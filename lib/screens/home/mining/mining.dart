import 'package:flutter/widgets.dart';
import 'package:zealworkers_token/widgets/button.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../../constants/colors.dart' as app_color;

class Mining extends StatelessWidget {
  const Mining({super.key});

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    return Container(
      width: screenWidth,
      height: screenHeight * 0.4,
      decoration: const BoxDecoration(color: app_color.primary_soft),
      child: Padding(
        padding: EdgeInsets.all(screenWidth * 0.035),
        child: Column(
          children: [
            SizedBox(height: screenHeight * 0.09),
            Image.asset('assets/img/coin.png', height: screenHeight * 0.14,),
            SizedBox(height: screenHeight * 0.02),
            TextWidget(
              text: 'Zeal earning : 0.0000987',
              textColor: app_color.secondary,
              textAlign: TextAlign.center,
              fontWeight: FontWeight.w600,
              fontSize: screenWidth * 0.035,
              fontFamily: 'Poppins',
            ),
            SizedBox(height: screenHeight * 0.02),
            const Button(
                buttonColor: app_color.primary,
                buttonText: 'Start Mining',
                textColor: app_color.white)
          ],
        ),
      ),
    );
  }
}
