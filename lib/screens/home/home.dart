import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:zealworkers_token/providers/user_data_provider.dart';
import 'package:zealworkers_token/screens/home/airdrop/airdrop.dart';
import 'package:zealworkers_token/screens/home/card/card.dart';
import 'package:zealworkers_token/screens/home/mining/mining.dart';
import 'package:zealworkers_token/widgets/drawer.dart';
import '../../constants/colors.dart' as app_color;

class Home extends ConsumerWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context, ref) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final double screenHeight = MediaQuery.of(context).size.height;

    final data = ref.watch(userDataProvider);

    return Scaffold(
        backgroundColor: app_color.primary_soft,
        appBar: AppBar(
          backgroundColor: app_color.white,
          actions: [
            Padding(
              padding: EdgeInsets.only(right: screenWidth * 0.035),
              child: const Icon(Icons.notifications_outlined),
            )
          ],
        ),
        drawer: const MyDrawer(),
        body: SingleChildScrollView(
          child: Stack(children: [
            Column(
              children: [
                data.when(data: (data) {
                  return AirdropInfo(
                    data: data!,
                  );
                }, error: (err, s) {
                  return Text(err.toString());
                }, loading: () {
                  return Container();
                }),
                data.when(data: (data) {
                  return Mining(
                    data: data!,
                  );
                }, error: (err, s) {
                  return Text(err.toString());
                }, loading: () {
                  return Container();
                })
              ],
            ),
            Positioned(
                top: screenHeight * 0.325,
                left: screenWidth * 0.05,
                child: data.when(data: (data) {
                  return InfoCard(
                    data: data!,
                  );
                }, error: (err, s) {
                  return Text(err.toString());
                }, loading: () {
                  return Container();
                }))
          ]),
        ));
  }
}
