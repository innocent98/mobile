import 'package:flutter/material.dart';
import 'package:zealworkers_token/models/user_data.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../constants/colors.dart' as app_color;

class TeamItem extends StatelessWidget {
  final UserData teamData;

  const TeamItem({super.key, required this.teamData});

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;

    return Column(
      children: [
        ListTile(
          leading: Container(
              padding: EdgeInsets.all(screenWidth * 0.01),
              decoration: BoxDecoration(
                  color: app_color.primary,
                  borderRadius: BorderRadius.circular(50)),
              child: const Icon(
                Icons.person,
                color: app_color.white,
              )),
          title: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  TextWidget(
                      text: teamData.email!,
                      textColor: app_color.grey,
                      textAlign: TextAlign.start,
                      fontWeight: FontWeight.w500,
                      fontSize: screenWidth * 0.035),
                  TextWidget(
                      text: '(${teamData.team!.length.toString()})',
                      textColor: app_color.grey,
                      textAlign: TextAlign.start,
                      fontWeight: FontWeight.w500,
                      fontSize: screenWidth * 0.035),
                ],
              ),
              TextWidget(
                  text: teamData.mining == true ? 'Active' : 'Inactive',
                  textColor: app_color.grey,
                  textAlign: TextAlign.start,
                  fontWeight: FontWeight.w500,
                  fontSize: screenWidth * 0.032),
            ],
          ),
          trailing: Icon(
            Icons.circle,
            color: teamData.mining == true ? app_color.green : app_color.grey,
            size: screenWidth * 0.035,
          ),
        ),
        const Divider(
          color: app_color.grey,
        ),
      ],
    );
  }
}
