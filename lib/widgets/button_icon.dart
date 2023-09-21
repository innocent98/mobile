import 'package:flutter/material.dart';
import '../constants/colors.dart' as app_color;

class ButtonIcon extends StatefulWidget {
  final String buttonText;
  final Color buttonColor;
  final Color textColor;
  final Color? borderColor;
  final Function()? onPressed;
  final String image;

  const ButtonIcon(
      {required this.buttonColor,
      required this.buttonText,
      required this.textColor,
      required this.image,
      this.borderColor,
      this.onPressed,
      super.key});

  @override
  State<ButtonIcon> createState() => _ButtonIconState();
}

class _ButtonIconState extends State<ButtonIcon> {
  @override
  Widget build(BuildContext context) {
    final double screenHeight = MediaQuery.of(context).size.height;
    final double screenWidth = MediaQuery.of(context).size.width;

    return Padding(
      padding:
          EdgeInsets.fromLTRB(screenWidth * 0.09, 0, screenWidth * 0.09, 0),
      child: Container(
        decoration: BoxDecoration(
            border: Border.all(
                color: widget.borderColor ?? app_color.transparent, width: 1),
            borderRadius: BorderRadius.circular(10)),
        child: SizedBox(
          width: screenWidth * 1,
          height: screenHeight * 0.06,
          child: FilledButton(
            style: FilledButton.styleFrom(
                backgroundColor: widget.buttonColor,
                elevation: 0,
                shadowColor: app_color.transparent,
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10))),
            onPressed: widget.onPressed ?? () {},
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  widget.buttonText,
                  style: TextStyle(
                      color: widget.textColor,
                      fontFamily: 'Inter',
                      fontWeight: FontWeight.w600,
                      fontSize: screenWidth * 0.035),
                ),
                SizedBox(
                  width: screenWidth * 0.03,
                ),
                Image.asset(
                  widget.image,
                  width: screenWidth * 0.06,
                  fit: BoxFit.contain,
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
