import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:zealworkers_token/providers/user_data_provider.dart';
import 'package:zealworkers_token/screens/team/team_item.dart';
import 'package:zealworkers_token/widgets/text.dart';
import '../../constants/colors.dart' as app_color;

class Team extends ConsumerWidget {
  const Team({super.key});

  @override
  Widget build(BuildContext context, ref) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    final userData = ref.watch(userDataProvider);

    return Scaffold(
      backgroundColor: app_color.soft,
      appBar: AppBar(
        backgroundColor: app_color.white,
        title: Center(
          child: TextWidget(
              text: 'My Team',
              textColor: app_color.black,
              textAlign: TextAlign.center,
              fontWeight: FontWeight.w600,
              fontSize: screenWidth * 0.04),
        ),
      ),
      body: Padding(
        padding: EdgeInsets.all(screenWidth * 0.03),
        child: Column(
          children: [
            TextWidget(
                text:
                    'The list below shows your direct team and indirect team.',
                textColor: app_color.black,
                textAlign: TextAlign.center,
                fontWeight: FontWeight.w400,
                fontSize: screenWidth * 0.032),
            SizedBox(height: screenHeight * 0.03),
            FutureBuilder(
                future: null,
                builder: (BuildContext context, snapshot) {
                  return SizedBox(
                      height: screenHeight * 0.7,
                      child: userData.when(data: (data) {
                        return ListView.builder(
                          padding: EdgeInsets.zero,
                          shrinkWrap: true,
                          itemCount: data!.team.length,
                          itemBuilder: (context, index) {
                            return TeamItem(teamData: data.team[index]);
                          },
                        );
                      }, error: (err, s) {
                        return Container();
                      }, loading: () {
                        return Container();
                      }));
                })
          ],
        ),
      ),
    );
  }
}
